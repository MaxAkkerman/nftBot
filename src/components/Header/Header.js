import "./Header.css";
import React, {useEffect, useState} from "react";
import useHandleLogin from "../../hooks/useSelectPopup";
import Loader from "../Loader/Loader.js";
import {Button} from "@mui/material";

export default function Header() {

  const {handleGetLink, login} = useHandleLogin()
  const {url,error,loading} = login;


  useEffect(()=> {
    async function fetchData(){
      await handleGetLink()
    }
    fetchData()
  },[])


  return (
    <>

      <header className="header">
        <div onClick={()=>console.log(url,error,loading)}>
          Connect wallet
        </div>
        {loading
          ?
          <Loader/>

          :

          (error ?
          <div>some error</div>

          : (url.length ?
                <Button
                  id="nav-connect-wallet"
                  // className="btn wallet-btn"
                  variant={"outlined"}

                >
                  <a href={url}>TonKeeper</a>
                </Button>
          : null
          ))
        }


      </header>
    </>
  );
}
