import "./ConnectToTonKeeper.css";
import React, {useEffect, useState} from "react";
import useHandleLogin from "../../hooks/useSelectPopup";
import Loader from "../Loader/Loader.js";
import {Button} from "@mui/material";

export default function ConnectToTonKeeper() {
  
  console.log("ConnectToTonKeeper")
  const {handleGetLink, login} = useHandleLogin()

  let {loading, error,url,status} = login;

  useEffect(()=> {
    async function fetchData(){
      await handleGetLink()
    }
    fetchData()
  },[])
  return (
    <>

      <header className="header">
        <div>
          Connect wallet
        </div>

        {loading
          ?
          <Loader/>

          :

          (error ?
            <div>some error {status}</div>

            : (url.length ?
                <>
                  <div>
                    <a href={url}>
                      {url}</a>
                  </div>
                  <Button
                    id="nav-connect-wallet"
                    // className="btn wallet-btn"
                    variant={"outlined"}

                  >
                    <a href={url}>TonKeeper</a>
                  </Button>
                </>
                : null
            ))
        }


      </header>
    </>
  );
}
