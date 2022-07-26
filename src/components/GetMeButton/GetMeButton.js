import Loader from "../Loader/Loader";
import React, {useState} from "react";
import {getMe, getUserTokens} from "../../network/requests";
import {Button} from "@mui/material";
import {getUserDataAction} from "../../redux/store/actions/market";
import {useDispatch, useSelector} from "react-redux";


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
        onClick={()=>console.log(pubkey,address,fetchMeLoading)}
      >
        consol Pubkey&Address
      </Button>
      
{/*    {fetchMeLoading*/}
{/*      ?*/}
{/*      <Loader/>*/}
{/*      :*/}
{/*      (fetchMeError ?*/}
{/*        <div>Some network error {status}</div>*/}

{/*        : (address ?*/}
{/*            <>*/}
{/*              <div*/}
{/*                id="nav-connect-wallet"*/}
{/*                // className="btn wallet-btn"*/}
{/*                variant={"outlined"}*/}
{/*              >*/}
{/*                Your address: {address}*/}
{/*              </div>*/}
{/*              <div*/}
{/*                id="nav-connect-wallet"*/}
{/*                // className="btn wallet-btn"*/}
{/*                variant={"outlined"}*/}
{/*              >*/}
{/*                Your pubkey: {pubkey}*/}
{/*              </div>*/}
{/*            </>*/}
{/*            : null*/}
{/*        ))*/}
{/*}*/}
    </>
  )
}
