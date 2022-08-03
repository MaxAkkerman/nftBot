import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./TradeView.css"
import {Button} from "@mui/material";
import {cancelSaleRequest, closeSaleRequest, getByNftAddress} from "../../network/requests";
import CloseIcon from '@mui/icons-material/HighlightOff';
import {deleteCurrentTrade} from "../../redux/store/actions/market";
import mockIcon2 from "../../images/title.png"

export function TradeView() {

  const dispatch = useDispatch();
  const currentTrade = useSelector((state) => state.appReducer.currentTrade);
  const address = useSelector((state) => state.appReducer.address);

  const [CT, setCT] = useState([])
  const [curNftByTrade, setCurNftByTrade] = useState({})
  
  useEffect(() => {
    setCT(currentTrade)
  }, [])

  useEffect(() => {
    async function getTC() {
      const res = await getByNftAddress(currentTrade.nftAddress)
      if (res.status === 200 || res.status === 201) {
        let userData = await res.data;
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

  async function closeSale() {
    let res = await closeSaleRequest(CT.id)
    if (res.status === 200 || res.status === 201) {
      let json = await res.data
      console.log("closeSaleRequest", json)
      dispatch(deleteCurrentTrade())
    }

  }

  console.log("CT.sellerAddress === address", CT.sellerAddress === address, CT, address)
  return (
    <div className={"trade_item_container"}>

      <div className={"trade_item_data_wrap"}>
        <div style={{alignSelf: "flex-start"}} onClick={() => dispatch(deleteCurrentTrade())}>
          <CloseIcon/>
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
          <Button variant="outlined" sx={{fontSize: "10px", width: "100%"}} onClick={() => cancelSale()}>Cancel
            sale</Button>
          :
          <Button variant="outlined" sx={{fontSize: "10px", width: "100%"}} onClick={() => closeSale()}>Buy NFT</Button>
        }
        


      </div>
    </div>
  )
}


