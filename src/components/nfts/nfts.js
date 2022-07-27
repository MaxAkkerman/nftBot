import {Button} from "@mui/material";
import React from "react";
import {getByNftAddress} from "../../network/requests";

export async function Nfts(){
  async function getNfts(){
    const userNfts = await getByNftAddress()
    console.log("userNfts",await userNfts.json())
  }
  return (

    <Button
      id="nav-connect-wallet"
      // className="btn wallet-btn"
      variant={"outlined"}
      onClick={()=>getNfts()}
    >
      Get user NFTs
    </Button>
    
    
  )
}
