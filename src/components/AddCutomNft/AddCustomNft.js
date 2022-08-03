import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {useState} from "react";
import {useDispatch} from "react-redux";

export default function AddCustomNft({type, handleRequest,placeHolder}) {
  const dispatch = useDispatch();
  const [inpValue, setInpValue] = useState("")

  function changeValue(e) {
    console.log(e.currentTarget.value)
    setInpValue(e.currentTarget.value)
  }

  async function handleRequestNFT(e) {
    e.preventDefault();
    let paramsNft = {
      nftAddress: inpValue
    }
    let paramsTrade = {
      tradeId: inpValue
    }
    console.log("paramsTrade",paramsTrade)
    console.log("paramsNft",paramsNft)
    handleRequest(type==="NFT" ? paramsNft : paramsTrade)


  }

  return (
    <Paper
      component="form"
      sx={{
        p: '1px 2px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
        background: "transparent",
        border: "1px solid rgba(25, 118, 210, 0.5)",
        color: "#1976d2",borderRadius: "7px 7px 7px 7px",fontFamily: "SF Pro Display"
      }}
      variant={"outlined"}
    >
      <InputBase
        sx={{ml: 1, flex: 1, color: "#1976d2",opacity: "1",fontFamily: "SF Pro Display", fontSize:"10px"}}
        placeholder={placeHolder}
        inputProps={{'aria-label': 'OutlinedInput'}}
        variant={"outlined"}
        value={inpValue}
        onChange={(e) => changeValue(e)}
      />
      <IconButton onClick={(e) => handleRequestNFT(e)} sx={{p: '7px', heigth: "25px"}} aria-label="search">
        <SearchIcon style={{color:"#1976d2"}}/>
      </IconButton>
    </Paper>
  );
}