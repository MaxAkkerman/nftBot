import * as React from 'react';
import Popper from '@mui/material/Popper';
import SettingsIcon from "../../images/settings.svg";
import "./index.css"
import {makeStyles} from "@mui/styles";
import {logOutRequest} from "../../network/requests";
import {setAuthUserData} from "../../redux/store/actions/market";
import {useDispatch} from "react-redux";
import {Button} from "@mui/material";

const useStyles = makeStyles(theme => ({
  root: {
    inset: "15px auto auto -24px",
    top: "10px",left: "-17px"
  },
}));


export default function PopperApp() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  async function logOut(){
    localStorage.removeItem("needToReload")
    await logOutRequest()
    dispatch(setAuthUserData({address:null,pubkey:null}))
    console.log("log out")
  }
  
  return (
    <div className={"popper_container"} >
      <button aria-describedby={id} type="button"  className={"settings_wrap"} onClick={handleClick}>
        <img className={"popper_img"} style={{color:"#1976d2"}} src={SettingsIcon} alt={"Settings"} />
      </button>
      
      <Popper id={id} open={open} anchorEl={anchorEl} className={classes.root} sx={{top: "10px",left: "-17px"}}>
          <Button onClick={()=>logOut()} style={{alignSelf: "center",color:"#1976d2"}}>
            Log out
          </Button>
      </Popper>
    </div>
  );
}