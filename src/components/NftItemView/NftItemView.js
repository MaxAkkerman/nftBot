import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./NftItemView.css"
import {Button} from "@mui/material";
import {makeStyles} from "@mui/styles";
import {openSaleRequest} from "../../network/requests";
import {deleteCurrentNft, deleteNftFromArr, openSnack} from "../../redux/store/actions/market";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import {getSplicedAddress} from "../../utils/utils";
import closeImg from "../../images/close.svg";

const useStyles = makeStyles({
  input: {
    '& input[type=number]': {
      '-moz-appearance': 'textfield'
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      // margin: 0
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      // margin: 0
    }
  },
});

export function NftItemView() {
  const dispatch = useDispatch();
  const currentNft = useSelector((state) => state.appReducer.currentNft);
  const classes = useStyles();

  const [sellPrice, setSellPrice] = useState(null)
  const [urlSale, setUrlSale] = useState(null)

  async function openSale() {
    if (!sellPrice) return

    async function getURLforSale() {
      try {
        let res = await openSaleRequest(currentNft.address, sellPrice)
        if (res.status === 200 || res.status === 201) {
          return res.data
        }
      } catch (e) {
        throw e
      }
    }

    getURLforSale()
      .then(data => setUrlSale(data))
      .catch(e => dispatch(openSnack({msg: `Some error: ${e}`})))
  }

  function quitWinT() {
    dispatch(deleteCurrentNft())
    dispatch(deleteNftFromArr(currentNft.address))
    setUrlSale(null)
  }

  return (
    <div className={"trade_item_container"}>
      <div className={"trade_item_data_wrap"}>
        <div style={{height: "24px"}} onClick={() => dispatch(deleteCurrentNft())}>
          <img src={closeImg} alt={"close"}/>
        </div>
        <div className={"nft_title"}>
          User NFT
        </div>
      </div>
      <div className={"trade_item_wrap"} key={currentNft.index}>
        <div className={"trade_item_img_wrap"}>
          <img style={{borderRadius: "25px"}} src={currentNft.image} alt={"img"}/>
        </div>
        <div className={"trade_item_text_wrap"}>
          <div>
            {currentNft.name}
          </div>
          <div>
            {currentNft.collectionName}
          </div>
          <div>
            Address: {getSplicedAddress(currentNft.address)}
          </div>
          <div>
            Collection Address: {getSplicedAddress(currentNft.collectionAddress)}
          </div>
        </div>
        <div className={"set_price_input_wrap"}>
          <Paper
            component="form"
            sx={{
              p: '1px 2px',
              display: 'flex',
              alignItems: 'center',
              width: 400,
              background: "transparent",
              border: "1px solid rgba(25, 118, 210, 0.5)",
              color: "#1976d2", borderRadius: "7px 7px 7px 7px"
            }}
            variant={"outlined"}
          >
            <InputBase
              sx={{ml: 1, flex: 1, color: "#1976d2", opacity: "1"}}
              placeholder="Set your price"
              inputProps={{'aria-label': 'OutlinedInput', min: 0}}
              type={"number"}
              className={classes.input}
              variant={"outlined"}
              value={Number(sellPrice).toString()}
              onChange={(e) => setSellPrice(+e.currentTarget.value)}
            />
          </Paper>
        </div>
        <Button variant="outlined" sx={{
          fontSize: "10px",
          width: "100%",
          marginTop: "10px",
          borderRadius: "7px 7px 7px 7px",
          height: "40px"
        }} onClick={() => openSale()}>
          Open Sale
        </Button>
        {urlSale &&
        <div style={{marginTop: "20px", marginBottom: "10px"}}>
          Are you sure?
          <a href={urlSale}>
            <Button variant="outlined"
                    sx={{fontSize: "10px", width: "100%", marginTop: "10px", borderRadius: "7px 7px 7px 7px"}}>
              Yes
            </Button>
          </a>
          <Button variant="outlined"
                  sx={{fontSize: "10px", width: "100%", marginTop: "10px", borderRadius: "7px 7px 7px 7px"}}
                  onClick={() => quitWinT()}>
            No
          </Button>
        </div>
        }
      </div>
    </div>
  )
}


