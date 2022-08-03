import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./TradeView.css"
import {Button} from "@mui/material";
import {cancelSaleRequest, closeSaleRequest, getByNftAddress, openSaleRequest} from "../../network/requests";
import CloseIcon from '@mui/icons-material/HighlightOff';
import {deleteCurrentNft, deleteCurrentTrade, deleteNftFromArr} from "../../redux/store/actions/market";
import mockIcon2 from "../../images/title.png"

export function TradeView() {

  const dispatch = useDispatch();
  const currentTrade = useSelector((state) => state.appReducer.currentTrade);
  const address = useSelector((state) => state.appReducer.address);

  const [CT, setCT] = useState([])
  const [curNftByTrade, setCurNftByTrade] = useState({})

  const [urlClose, setUrlClose] = useState(null)


  useEffect(() => {
    setCT(currentTrade)
  }, [])

  useEffect(() => {
    async function getTC() {
      const res = await getByNftAddress(currentTrade.nftAddress)
      if (res.status === 200 || res.status === 201) {
        let userData = await res.data;
        console.log("getURLforSale",res.data)
        setCurNftByTrade(userData)
      }
    }
    getTC()
  }, [])

  async function cancelSale() {
    let res = await cancelSaleRequest(CT.id)
    if (res.status === 200 || res.status === 201) {
      let url = await res.data
      console.log("cancelSaleRequest",url)
      dispatch(deleteCurrentTrade())
    }
  }
  
  
  useEffect(()=>{
    async function getURLforSale(){
      try {
        let res = await closeSaleRequest(CT.searchId)
        if (res.status === 200 || res.status === 201) {
          return res.data
        }
      } catch (e) {
        console.log("openSalejson error", e)
      }
    }

    getURLforSale().then(data=>setUrlClose(data))
  },[])
  
  
  async function closeSale() {
    function getBack(){
      dispatch(deleteCurrentTrade())
      // dispatch(deleteNftFromArr(currentNft.address))
      setUrlClose(null)
    }
    setTimeout(()=>getBack(),2000)
  }

  console.log("CT.sellerAddress === address", CT.sellerAddress === address, CT, address)
  return (
    <div className={"trade_item_container"}>

      <div className={"trade_item_data_wrap"}>
        <div style={{alignSelf: "flex-start"}} onClick={() => dispatch(deleteCurrentTrade())}>
          <CloseIcon style={{color:"#1976d2"}}/>
          {/*<img src={CloseIcon} alt={"close"}/>*/}
        </div>
        <div className={"nft_title"}>
          User Trade
        </div>
      </div>
      <div className={"trade_item_wrap"} key={CT.id}>
        <div className={"trade_item_img_wrap"}>
          <img src={mockIcon2} alt={"img"}/>
        </div>
        <div className={"trade_item_text_wrap"}>
          <div>
            NFT Name: {curNftByTrade.name}
          </div>
          <div>
            Trade ID: {CT.searchId}
          </div>
          <div>
            Collection: {curNftByTrade.collectionName}
          </div>
          <div>
            Status: {CT.status}
          </div>
        </div>
        <div className={"set_price_input_wrap"}>
        </div>
        {address === currentTrade.sellerAddress ? 
          <Button variant="outlined" sx={{fontSize: "10px", width: "100%",borderRadius: "7px 7px 7px 7px"}} onClick={() => cancelSale()}>Cancel
            sale</Button>
          :
          <Button variant="outlined" sx={{fontSize: "10px", width: "100%",borderRadius: "7px 7px 7px 7px"}} onClick={() => closeSale()}><a href={urlClose}>Buy NFT</a>
            Buy NFT</Button>
        }
        


      </div>
    </div>
  )
}


