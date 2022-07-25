import Loader from "../Loader/Loader";
import React, {useState} from "react";
import {getMe} from "../../network/requests";
import {Button} from "@mui/material";


export function GetMyNfts(){
  const [userData, setUserData] = useState({})
  const {user,error,loading,status} = userData;

  async function handleGoIntoApp() {
    setUserData({...userData, loading: true})
    try {
      const res = await getMe()
      console.log("handleGoIntoApp", res)
      if (res.ok) {
        let userData = await res.json()
        console.log("handleGoIntoApp ruls", userData)
        setUserData({...userData, user: userData, status: res.status, loading: false})

      } else {
        console.log("handleGoIntoApp error", res)
        setUserData({...userData, error: true, loading: false})
      }

    } catch (e) {
      console.log('handleGoIntoApp error', e)
      setUserData({...userData, error: true, loading: false})
    }
  }
    
  return(
    <>
    <Button
      id="nav-connect-wallet"
      // className="btn wallet-btn"
      variant={"outlined"}
      onClick={()=>handleGoIntoApp()}
    >
      Enter App
    </Button>
    
    {loading
      ?
      <Loader/>

      :

      (error ?
        <div>some error {status}</div>

        : (userData.address ?
            <>
              <div
                id="nav-connect-wallet"
                // className="btn wallet-btn"
                variant={"outlined"}
                onClick={()=>handleGoIntoApp()}
              >
                user address: {userData.address}
              </div>
              <div
                id="nav-connect-wallet"
                // className="btn wallet-btn"
                variant={"outlined"}
                onClick={()=>handleGoIntoApp()}
              >
                user pubkey: {userData.pubkey}
              </div>
            </>
            : null
        ))
}
    </>
  )
}
