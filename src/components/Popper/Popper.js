import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import SettingsIcon from "../../images/settings.svg";
import "./index.css"
import ExitIcon from "../../images/exit.png"
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles(theme => ({
  root: {
    inset: "15px auto auto -24px"
    
  },
}));


export default function PopperApp() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  function logOut(){
    console.log("log out")
  }
  
  return (
    <div className={"popper_container"} >
      <button aria-describedby={id} type="button"  className={"settings_wrap"} onClick={handleClick}>
        <img className={"popper_img"} style={{color:"#1976d2"}} src={SettingsIcon} alt={"Settings"} />
      </button>
      
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <div style={{height: "30px", display: "flex", cursor:"pointer"}} onClick={()=>logOut()}>
          <div style={{alignSelf: "center",color:"#1976d2"}}>
            Log out
          </div>
            {/*<div style={{marginLeft: "22px"}}>*/}
            {/*  <img src={ExitIcon} alt={"Exit"}/>*/}
            {/*</div>*/}

         
          
          
        </div>
        
      </Popper>
    </div>
  );
}