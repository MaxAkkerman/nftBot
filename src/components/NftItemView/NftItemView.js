import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./NftItemView.css"
import {Button} from "@mui/material";
import {openSaleRequest} from "../../network/requests";
import CloseIcon from '@mui/icons-material/HighlightOff';
import {deleteCurrentNft, deleteNftFromArr} from "../../redux/store/actions/market";
import InputBase from "@mui/material/InputBase";
import Paper from "@mui/material/Paper";
import mockIcon2 from "../../images/title.png"

export function NftItemView() {
  const dispatch = useDispatch();
  const currentNft = useSelector((state) => state.appReducer.currentNft);

  const [sellPrice, setSellPrice] = useState(null)

  async function openSale() {
    console.log("openSale", currentNft)
    let address = currentNft.address
    try {
      let res = await openSaleRequest(address, sellPrice)
      if (res.status === 200 || res.status === 201) {
        let url = await res.data
        window.open(url, '_blank')
        dispatch(deleteCurrentNft())
        dispatch(deleteNftFromArr(address))
      }
    } catch (e) {
      console.log("openSalejson error", e)
    }
  }

  return (
    <div className={"trade_item_container"}>
      <div className={"trade_item_data_wrap"}>
        <div onClick={() => dispatch(deleteCurrentNft())}>
          <CloseIcon/>
          {/*<img src={CloseIcon} alt={"close"}/>*/}
        </div>
        <div className={"nft_title"}>
          User NFT
        </div>
      </div>

      <div className={"trade_item_wrap"} key={currentNft.index}>
        <div className={"trade_item_img_wrap"}>
          <img src={mockIcon2} alt={"img"}/>
        </div>
        <div className={"trade_item_text_wrap"}>
          <div>
            {currentNft.name}
          </div>
          <div>
            {currentNft.collectionName}
          </div>
          <div>
            Address: {currentNft.address}
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
              color: "#1976d2"
            }}
            variant={"outlined"}
          >
            <InputBase
              sx={{ml: 1, flex: 1, color: "#1976d2", opacity: "1"}}
              placeholder="Set your price"
              inputProps={{'aria-label': 'OutlinedInput'}}
              variant={"outlined"}
              value={sellPrice}
              onChange={(e) => setSellPrice(+e.currentTarget.value)}
            />
          </Paper>
        </div>
        <Button variant="outlined" sx={{fontSize: "10px", width: "100%", marginTop: "10px"}} onClick={() => openSale()}>Open
          sale</Button>
      </div>
    </div>
  )
}


