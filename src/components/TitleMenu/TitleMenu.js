import TitleIcon from "../../images/ton.png";
import {getSplicedAddress} from "../../utils/utils";
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Button} from "@mui/material";

export function TitleMenu(){

  const address = useSelector((state) => state.appReducer.address);

  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 800)
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
  return (
    <>
    <div className={"user_profile_container"}>
      <div className={"user_profile_img_wrap"}>
        <img src={TitleIcon} alt={"Title image"}/>
      </div>
      <div className={"user_profile_address_wrap"} onClick={()=>copyToClipboard()}>
        {address ? getSplicedAddress(address) : "No User Address"}{copied ? <div className={"user_profile_copy_link_text"}>Copied!</div> : <div style={{height:"14px"}}/>}
      </div>
      
      <div className={"user_profile_title_wrap"}>
        User Profile
      </div>
    </div>
  {/*<div className={"user_profile_copy_link_wrap"}>*/}
    {/*<Button*/}
    {/*  id="nav-connect-wallet"*/}
    {/*  className={"user_profile_copy_link_btn"}*/}
    {/*  style={{textTransform: "none"}}*/}
    {/*  variant={"outlined"}*/}
    {/*  onClick={() => copyToClipboard()}*/}
    {/*>*/}
    {/*  Copy Link*/}
    {/*  */}
    {/*</Button>*/}

  {/*</div>*/}
  </>
  )
}
