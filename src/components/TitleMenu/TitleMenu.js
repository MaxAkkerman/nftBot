import TitleIcon from "../../images/ton.png";
import {getSplicedAddress} from "../../utils/utils";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {openSnack} from "../../redux/store/actions/market";

export function TitleMenu() {
  const dispatch = useDispatch();

  const address = useSelector((state) => state.appReducer.address);
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (copied) {
      setTimeout(() => setCopied(false), 800)
    }
  }, [copied])


  function copyToClipboard() {
    if (navigator.clipboard && window.isSecureContext) {
      dispatch(openSnack({msg:"Copied!"}))
      return navigator.clipboard.writeText(address);
    } else {
      dispatch(openSnack({msg:"Copied!"}))
      let textArea = document.createElement(`textarea`);
      textArea.value = address;
      textArea.style.position = `fixed`;
      textArea.style.left = `-999999px`;
      textArea.style.top = `-999999px`;
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      return new Promise((res, rej) => {
        document.execCommand(`copy`) ? res() : rej();
        textArea.remove();
      });
    }
  }

  return (
    <>
      <div className={"user_profile_container"}>
        <div style={{
          width: "200px",
          height: "200px",
          margin: "auto",
          padding: "25px 40px 10px 40px"
        }}>
          <img src={TitleIcon} alt={"Title image"}/>
        </div>

        <div className={"user_profile_address_wrap"} onClick={() => copyToClipboard()}>
          {address ? getSplicedAddress(address) : "No User Address"}{copied ?
          <div className={"user_profile_copy_link_text"}>Copied!</div> : <div style={{height: "14px"}}/>}
        </div>

        <div className={"user_profile_title_wrap"}>
          User Profile
        </div>
      </div>
    </>
  )
}
