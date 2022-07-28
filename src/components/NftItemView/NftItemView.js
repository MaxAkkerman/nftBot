import AddCustomNft from "../AddCutomNft/AddCustomNft";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./NftItemView.css"
import {Button, ButtonGroup} from "@mui/material";
import {cancelSaleRequest, closeSaleRequest, openSaleRequest} from "../../network/requests";
import CloseIcon from '@mui/icons-material/HighlightOff';
import {deleteCurrentNft} from "../../redux/store/actions/market";

export function NftItemView() {
  const dispatch = useDispatch();
  const currentNft = useSelector((state) => state.appReducer.currentNft);

  const [price,setPrice] = useState(1)
  
  async function openSale() {
    console.log("openSale", currentNft)
    let address = currentNft.address
    let res = await openSaleRequest(address,price)
    
    let json = await res.json()
    
    console.log("openSalejson", json)
  }

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
          <div onClick={()=>dispatch(deleteCurrentNft())}>
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
            Name address: {currentNft.name}
          </div>
          <div>
            collectionName: {currentNft.collectionName}
          </div>
          <div>
            nft address: {currentNft.address}
          </div>

          <ButtonGroup size={"small"} sx={{marginTop: "20px", width: "100%"}} variant="outlined"
                       aria-label="outlined button group">
            <Button sx={{fontSize: "10px"}} onClick={() => openSale()}>open</Button>
            <Button sx={{fontSize: "10px"}} onClick={() => cancelSale()}>cancel</Button>
            <Button sx={{fontSize: "10px"}} onClick={() => closeSale()}>close</Button>
          </ButtonGroup>
        </div>
      </div>
  )
}


