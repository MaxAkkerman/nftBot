import Loader from "../Loader/Loader";
import React, {useState} from "react";
import {getMe, getUserTokens} from "../../network/requests";
import {Button} from "@mui/material";
import {getUserDataAction} from "../../redux/store/actions/market";
import {useDispatch, useSelector} from "react-redux";
import {baseUrl} from "../../network/constants";
import axios from "axios";


export function GetMeButton(){
  const dispatch = useDispatch();
  const pubkey = useSelector((state) => state.appReducer.pubkey);
  const address = useSelector((state) => state.appReducer.address);
  const fetchMeLoading = useSelector((state) => state.appReducer.fetchMeLoading);
  const fetchMeError = useSelector((state) => state.appReducer.fetchMeError);
  const status = useSelector((state) => state.appReducer.status);
    
  async function handleGoIntoApp() {
    dispatch(getUserDataAction())
  }
  let body = {
    nftAddress: "EQCmmmLl_-SrbKR36uYUMOKieSrryuHVADJ7R4myQtOIuPpw",
    nftPrice: 1
  }
  async function openSale() {
    let newBody = JSON.stringify(body)
    
    await axios.post(`${baseUrl}/trades/open`, {nftAddress: "EQCmmmLl_-SrbKR36uYUMOKieSrryuHVADJ7R4myQtOIuPpw",
      nftPrice: 1},{withCredentials:true}).then(data=>console.log("openSale",data)).catch(e=>console.log("openSale err",e))
  }
  return(
    <>
    <Button
      id="nav-connect-wallet"
      // className="btn wallet-btn"
      variant={"outlined"}
      onClick={()=>handleGoIntoApp()}
    >
      Get Pubkey&Address
    </Button>

      <Button
        id="nav-connect-wallet"
        // className="btn wallet-btn"
        variant={"outlined"}
        onClick={()=>openSale()}
      >
        Open sale
      </Button>
      
    {fetchMeLoading
      ?
      <Loader/>
      :
      (fetchMeError ?
        <div>Some network error {status}</div>

        : (address ?
            <>
              <div
                id="nav-connect-wallet"
                // className="btn wallet-btn"
                variant={"outlined"}
              >
                Your address: {address}
              </div>
              <div
                id="nav-connect-wallet"
                // className="btn wallet-btn"
                variant={"outlined"}
              >
                Your pubkey: {pubkey}
              </div>
            </>
            : null
        ))
}
    </>
  )
}
