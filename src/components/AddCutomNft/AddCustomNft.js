import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import {Button} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {requestUserNftItem} from "../../redux/store/actions/market";
import {baseUrl} from "../../network/constants";

export default function AddCustomNft() {
  const dispatch = useDispatch();
  const [inpValue,setInpValue] = useState("")
  
  function changeValue(e){
    console.log("currentTarget",e.currentTarget.value)
    setInpValue(e.currentTarget.value)
  }
  async function handleRequestNFT(e){
    e.preventDefault();
    console.log("inpValue",inpValue)
    // dispatch(requestUserNftItem({nftAddress: inpValue}))

      await fetch(`${baseUrl}/trades/close`, {method: "PUT", credentials:"include", body:JSON.stringify({tradeId:inpValue})}).then(data=>console.log("closeSale",data)).catch(e=>console.log("closeSale err",e))

    
    
  }
  return (
    <Paper
      component="form"
      sx={{ p: '1px 2px', display: 'flex', alignItems: 'center', width: 400, background:"transparent",border: "1px solid rgba(25, 118, 210, 0.5)", color: "#1976d2" }}
      variant={"outlined"}
    >
      <InputBase
        sx={{ ml: 1, flex: 1, color:"#1976d2",opacity:"1" }}
        placeholder="Search nft by its address"
        inputProps={{ 'aria-label': 'OutlinedInput' }}
        variant={"outlined"}
        value={inpValue}
        onChange={(e)=>changeValue(e)}
      />
      <IconButton onClick={(e)=>handleRequestNFT(e)} sx={{ p: '7px', heigth:"25px" }} aria-label="search">
        <SearchIcon/>
      </IconButton>
    </Paper>
  );
}