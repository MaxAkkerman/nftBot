import "./Header.scss";
import {Link, useNavigate} from "react-router-dom";
import React, {useState} from "react";
import {connectWalletAction} from "../../store/actions";
import {useAppDispatch} from "../../hooks/useAppDispatch";

export default function Header() {
 
  const [url,setUrl] = useState("")
  async function handleConnectWallet() {
    // dispatch(connectWalletAction())

    const res = await fetch("http://http-notifs.xyz/auth/me", {method:"GET", headers:{accept: "text/plain", credentials:"same-origin"}})
    if(res.ok){
      let url = await res.text()
      console.log("ruls",url)
      setUrl(url)

    }else{
      console.log("some error", res.status)
    }
  }

  return (
    <>
      
      <header className="header">
        <div>
          Connect wallet
        </div>
        
          <button
            id="nav-connect-wallet"
            className="btn wallet-btn"
            onClick={handleConnectWallet}
          >
            Sign up
          </button>
        {url.length ?
          <button
            id="nav-connect-wallet"
            className="btn wallet-btn"
            onClick={handleConnectWallet}
          >
            <a href={url}>TonKeeper</a>
          </button>
          : null
        }


      </header>
    </>
  );
}
