import "./ConnectToTonKeeper.css";
import React, {useEffect, useState} from "react";
import useHandleLogin from "../../hooks/useSelectPopup";
import Loader from "../Loader/Loader.js";
import {Button} from "@mui/material";
import titleImg from "../../images/ton.png"

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

      <div className="auth_container">
        <div style={{    width: "200px",
          height: "200px",
          margin: "auto",padding: "40px 40px 10px 40px"}}>
          <img src={titleImg} alt={"titleImg"}/>
        </div>
        <div>NFT exchange</div>
        {loading
          ?
          <div
            className="loader_wrap"
          >
          <Loader/>
          </div>
          :

          (error ?
            <div>Some error {status}</div>

            : (url.length ?
                <div style={{marginTop: "50px"}}>
                <a href={url}>
                  <Button
                    id="nav-connect-wallet"
                    // className="btn wallet-btn"
                    variant={"outlined"}
                    style={{
                      width: "100%",
                      height: "50px",
                      fontSize: "18px",
                      background: "deepskyblue",
                      textTransform: "capitalize",
                      borderRadius: "14px",
                      color:"#E8E6E3"
                    }}
                  >
                    открыть Tonkeeper
                  </Button>
                </a>
                </div>
                : null
            ))
        }


      </div>
    </>
  );
}
