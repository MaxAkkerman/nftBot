import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./TradeView.css"
import {Button} from "@mui/material";
import {cancelSaleRequest, closeSaleRequest, getByNftAddress, openSaleRequest} from "../../network/requests";
import CloseIcon from '@mui/icons-material/HighlightOff';
import {deleteCurrentNft, deleteCurrentTrade, deleteNftFromArr} from "../../redux/store/actions/market";
import mockIcon2 from "../../images/title.png"
import Loader from "../Loader/Loader";
import closeImg from "../../images/close.svg"

export function TradeView() {

  const dispatch = useDispatch();
  const currentTrade = useSelector((state) => state.appReducer.currentTrade);
  const address = useSelector((state) => state.appReducer.address);

  const [CT, setCT] = useState([])
  const [curNftByTrade, setCurNftByTrade] = useState({})

  const [urlClose, setUrlClose] = useState(null)

const [loading,setLoading] = useState(false)
  useEffect(() => {
    setCT(currentTrade)
  }, [])

  useEffect(() => {
    setLoading(true)
    async function getTC() {
      const res = await getByNftAddress(currentTrade.nftAddress)
      if (res.status === 200 || res.status === 201) {
        let userData = await res.data;
        console.log("getURLforSale", res.data)
        setCurNftByTrade(userData)
        setLoading(false)
      }else{
        setLoading(false)
      }
    }

    getTC()
  }, [])

  async function cancelSale() {
    let res = await cancelSaleRequest(CT.id)
    if (res.status === 200 || res.status === 201) {
      let url = await res.data
      console.log("cancelSaleRequest", url)
      dispatch(deleteCurrentTrade())
    }
  }


  async function closeSale() {
    //   console.log("openSalejson error", CT, currentTrade)
    //
    async function getURLforSale() {
      try {
        let res = await closeSaleRequest(currentTrade.searchId)
        if (res.status === 200 || res.status === 201) {
          console.log("getURLforSale", res.data)
          return res.data
        }
      } catch (e) {
        console.log("openSalejson error", e)
      }
    }

    getURLforSale().then(data => setUrlClose(data))


  }

  function quitWin() {

    function getBack() {
      dispatch(deleteCurrentTrade())
      // dispatch(deleteNftFromArr(currentNft.address))
      setUrlClose(null)
    }
  }


  console.log("CT.sellerAddress === address", CT.sellerAddress === address, CT, address)
  return (
    <div className={"trade_item_container"}>

      <div className={"trade_item_data_wrap"}>
        <div style={{alignSelf: "flex-start",height: "24px"}} onClick={() => dispatch(deleteCurrentTrade())}>
          {/*<CloseIcon style={{color: "#1976d2"}}/>*/}
          <img src={closeImg} alt={"close"}/>
        </div>
        <div className={"nft_title"}>
          User Trade
        </div>
      </div>
      {loading ?
        <div
          className="loader_wrap"
          style={{marginTop:"100px"}}
        >
          <Loader/>
        </div>
        :
      <div className={"trade_item_wrap"} key={CT.id}>
        <div className={"trade_item_img_wrap"}>
          <img style={{borderRadius: "25px"}} src={curNftByTrade.image} alt={"img"}/>
        </div>
        <div className={"trade_item_text_wrap"}>
          <div onClick={() => console.log(urlClose)}>
            NFT Name: {curNftByTrade.name}
          </div>
          <div>
            Collection: {curNftByTrade.collectionName}
          </div>
          <div>
            Trade ID: {currentTrade.searchId}
          </div>

          <div>
            Status: {currentTrade.status}
          </div>
        </div>
        <div className={"set_price_input_wrap"}>
        </div>
        {address === currentTrade.sellerAddress ?
          <Button variant="outlined" sx={{fontSize: "10px", width: "100%", borderRadius: "7px 7px 7px 7px",height: "40px"}}
                  onClick={() => cancelSale()}>Cancel sale</Button>
          :
          <Button variant="outlined" sx={{fontSize: "10px", width: "100%", borderRadius: "7px 7px 7px 7px",height: "40px"}}
                  onClick={() => closeSale()}>Buy NFT</Button>
        }

        {urlClose && <div style={{marginTop: "20px", marginBottom: "10px"}}>
          <div>
            Are you sure?
          </div>
          <a href={urlClose}>
          <Button variant="outlined" sx={{fontSize: "10px", width: "100%", borderRadius: "7px 7px 7px 7px",height: "40px"}}>Yes</Button>
          </a>
          <Button variant="outlined" onClick={() => quitWin()}
                  sx={{fontSize: "10px", width: "100%", borderRadius: "7px 7px 7px 7px",height: "40px"}}>No</Button>
        </div>
        }
      </div>
      
      
      }
    </div>
  )
}


