import AddCustomNft from "../AddCutomNft/AddCustomNft";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../Loader/Loader";
import "./NFTContainerStyles.css"
import {Button, ButtonGroup} from "@mui/material";
import {setCurrentNft} from "../../redux/store/actions/market";
import {closeSaleRequest, openSaleRequest} from "../../network/requests";
import {TradesMenu} from "./TradesMenu";
import {NftsMainMenu} from "./NftsMainMenu";

export function NftView() {
  const [showIt, setShowIt] = useState(false)

  async function handleShowTrades() {
    
    setShowIt(false)

  }

  async function handleShowUserNfts() {
    setShowIt(true)

  }

  return (
    <>
    {/*<div className={"nft_title"} onClick={()=>byeNft()}>*/}
    {/*  User NFTs*/}
    {/*</div>*/}
    <ButtonGroup size={"large"} sx={{marginTop: "20px", width: "100%",display:"flex",justifyContent:"center"}} variant="outlined"
                 aria-label="outlined button group">
      <Button sx={{fontSize: "10px",width:"100%"}} onClick={() => handleShowTrades()}>Trades</Button>
      <Button sx={{fontSize: "10px",width:"100%"}} onClick={() => handleShowUserNfts()}>Nfts</Button>

    </ButtonGroup>
    {showIt ? <NftsMainMenu/>
      :
      <TradesMenu/>
    }
</>

    
  )
}


