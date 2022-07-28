import AddCustomNft from "../AddCutomNft/AddCustomNft";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./NftItemView.css"
import {Button, ButtonGroup} from "@mui/material";
import {cancelSaleRequest, closeSaleRequest, openSaleRequest} from "../../network/requests";
import CloseIcon from '@mui/icons-material/HighlightOff';
import {deleteCurrentNft} from "../../redux/store/actions/market";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Paper from "@mui/material/Paper";

export function NftItemView() {
  const dispatch = useDispatch();
  const currentNft = useSelector((state) => state.appReducer.currentNft);

  // const [draftNftData, setDraftNftData] = useState({
  //   price: 0,
  //   status: null,
  //   searchId: null,
  //   sellerAddress: null,
  //   nftPrice: null
  // })
  const [sellPrice,setSellPrice] = useState(0)
  
  async function openSale() {
    console.log("openSale", currentNft)
    let address = currentNft.address
    try {
      let res = await openSaleRequest(address, sellPrice)

      let json = await res.json()
      console.log("openSalejson", json)
    } catch (e) {
      console.log("openSalejson error", e)
    }
  }

  // useEffect(() => {
  //   let trades = JSON.parse(localStorage.getItem("trades"))
  //
  //   if (!trades) {
  //
  //   } else {
  //     let cur_nft_trade_status = trades.filter(it => it.address === currentNft.address)
  //     setDraftNftData({
  //         ...draftNftData,
  //         status: cur_nft_trade_status.status[0],
  //         searchId: cur_nft_trade_status.id,
  //         sellerAddress: cur_nft_trade_status.sellerAddress,
  //         nftPrice: cur_nft_trade_status.nftPrice,
  //         buyerAddress: cur_nft_trade_status.nftPrice
  //       }
  //     )
  //   }
  // }, [])

  async function cancelSale() {
    let res = await cancelSaleRequest("traidId")

    let json = await res.json()

    console.log("cancelSalejson", json)
  }

  async function closeSale() {
    let res = await closeSaleRequest("traidId")

    let json = await res.json()

    console.log("closeSale", json)
  }

  return (
    <div className={"nft_item_container"}>
      <div className={"nft_item_head_wrap"}>
        <div onClick={() => dispatch(deleteCurrentNft())}>
          <CloseIcon/>
          {/*<img src={CloseIcon} alt={"close"}/>*/}
        </div>
        <div className={"nft_title"}>
          User Item
        </div>
      </div>

      <div className={"nft_item_wrapper"} key={currentNft.index}>
        <div className={"nft_item_img_wrap"}>
          <img src={currentNft.image} alt={"img"}/>
        </div>
        <div>
          Name: {currentNft.name}
        </div>
        <div>
          C
        </div>
        <div>
          Address: {currentNft.address}
        </div>
        <div className={"set_price_input_wrap"}>
        <Paper
          component="form"
          sx={{ p: '1px 2px', display: 'flex', alignItems: 'center', width: 400, background:"transparent",border: "1px solid rgba(25, 118, 210, 0.5)", color: "#1976d2" }}
          variant={"outlined"}
        >
          <InputBase
            sx={{ ml: 1, flex: 1, color:"#1976d2",opacity:"1" }}
            placeholder="Set your price"
            inputProps={{ 'aria-label': 'OutlinedInput' }}
            variant={"outlined"}
            value={sellPrice}
            onChange={(e)=>setSellPrice(+e.currentTarget.value)}
          />
        </Paper>
        </div>
          <Button variant="outlined" sx={{fontSize: "10px",width:"100%"}} onClick={() => openSale()}>Open sale</Button>
      </div>
    </div>
  )
}


