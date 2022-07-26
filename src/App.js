import './App.css';
import ConnectToTonKeeper from "./components/ConnectToTonKeeper/ConnectToTonKeeper";
import React, {useEffect, useState} from "react";
import {Button} from "@mui/material";
import {getLoginToken, getMe} from "./network/requests";
import Loader from "./components/Loader/Loader";
import {GetMeButton} from "./components/GetMeButton/GetMeButton";
// import {GetMyNfts} from "./components/GetMyNfts/GetMyNfts";
import {webSocket} from "./webSocket/webSocket";
import {useSelector} from "react-redux";
import {Nfts} from "./components/nfts/nfts";
import PopperApp from "./components/Popper/Popper";
import TitleIcon from "./images/title.png"
import {getSplicedAddress} from "./utils/utils";
import AddCustomNft from "./components/AddCutomNft/AddCustomNft";

function App() {


  const pubkey = useSelector((state) => state.appReducer.pubkey);
  const address = useSelector((state) => state.appReducer.address);
  const user_nfts_array = useSelector((state) => state.appReducer.user_nfts_array);

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 2000)
    }
  }, [copied])


  function copyToClipboard() {
    // navigator clipboard api needs a secure context (https)

    if (navigator.clipboard && window.isSecureContext) {
      // navigator clipboard api method'
      setCopied(true)
      return navigator.clipboard.writeText(address);
    } else {
      setCopied(true)
      // text area method
      let textArea = document.createElement(`textarea`);
      textArea.value = address;
      // make the textarea out of viewport
      textArea.style.position = `fixed`;
      textArea.style.left = `-999999px`;
      textArea.style.top = `-999999px`;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
        // here the magic happens
        document.execCommand(`copy`) ? res() : rej();
        textArea.remove();
      });
    }
  }

  useEffect(() => {
    // await getUserTokens()

    // const client = new WebSocket("ws://http-notifs.xyz");
    // const socket = new W3CWebSocket('ws://http-notifs.xyz');

    // client.onopen = ()=>{
    //   console.log('Connected webSocket');
    //
    // client.emit('events', { test: 'test' });
    // client.emit('identity', 0, response =>
    //   console.log('Identity webSocket:', response),
    // );
    // };
    // client.on('events', function(data) {
    //   console.log('event webSocket', data);
    // });
    // client.on('exception', function(data) {
    //   console.log('event webSocket', data);
    // });
    // client.onclose = ()=> {
    //   console.log('Disconnected webSocket');
    // }

    webSocket()
  }, [])


  return (

    <div className="App">
      <PopperApp/>

      <div className={"user_profile_container"}>
        <div className={"user_profile_img_wrap"}>
          <img src={TitleIcon} alt={"Title image"}/>
        </div>
        <div className={"user_profile_address_wrap"}>
          {address ? getSplicedAddress(address) : "No User Address"}
        </div>
        <div className={"user_profile_title_wrap"}>
          User Profile
        </div>
      </div>
      <div className={"user_profile_copy_link_wrap"}>
        <Button
          id="nav-connect-wallet"
          className={"user_profile_copy_link_btn"}
          style={{textTransform: "none"}}
          variant={"outlined"}
          onClick={() => copyToClipboard()}
        >
          Copy Link
          {copied ? <div className={"user_profile_copy_link_text"}>Copied!</div> : null}
        </Button>

      </div>
      
      <div className={"nft_title"}>
        User NFTs
      </div>
      
<div className={"nft_custom_search_container"}>
  <AddCustomNft/>
</div>
   
      <div>
        {user_nfts_array.length ? <>
          
          
          {user_nfts_array.map(item=>{
            
            return <div key={item.address}>
              <div>
                Name address: {item.name}
              </div>
              <div>
                collectionName: {item.collectionName}
              </div>
              <div>
                nft address: {item.address}
              </div>
              <div>
                <img src={item.image} alt={"img"}/>
              </div>
              
              
            </div>
            
            
            })
          }
          </>
          
          :
          <div>
            No nfts
          </div>
        }
        
      </div>
      
      <div style={{marginTop:"200px", borderTop:"2px solid black"}}>
        DEV
      </div>
      <ConnectToTonKeeper/>

      <GetMeButton/>
      {/*<Nfts/>*/}
      <>
        {pubkey ? <div
          id="nav-connect-wallet"
          // className="btn wallet-btn"
          variant={"outlined"}
        >
          user address from socket: {address}
        </div> : null}
        {address ? <div
          id="nav-connect-wallet"
          // className="btn wallet-btn"
          variant={"outlined"}
        >
          user pubkey from socket: {pubkey}
        </div> : null}
      </>

    </div>
  );
}

export default App;
