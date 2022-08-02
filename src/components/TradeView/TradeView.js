import AddCustomNft from "../AddCutomNft/AddCustomNft";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./TradeView.css"
import {Button, ButtonGroup} from "@mui/material";
import {cancelSaleRequest, closeSaleRequest, getByNftAddress, openSaleRequest} from "../../network/requests";
import CloseIcon from '@mui/icons-material/HighlightOff';
import {deleteCurrentNft, deleteCurrentTrade, requestUserNftItem} from "../../redux/store/actions/market";
// import TonWeb from 'tonweb';
import mockIcon2 from "../../images/title.png"

export function TradeView() {

  const dispatch = useDispatch();
  const currentTrade = useSelector((state) => state.appReducer.currentTrade);
  const address = useSelector((state) => state.appReducer.address);
  console.log("currentTrade", currentTrade)
  const [CT, setCT] = useState([])

  useEffect(() => {
    setCT(currentTrade)
    // let at = "kQBUZt5l1AFSAvPrjrqdDvWF1_qrXGUGzRYvmjim1lyG-94H"
    // const walletAddress1 = new TonWeb.utils.Address(at);
    // const nonBounceableAddress = at.toString(true, true, false);


    // console.log("walletAddress1",walletAddress1,"nonBounceableAddress",nonBounceableAddress)
  }, [])
  const [curNftByTrade, setCurNftByTrade] = useState({})
  useEffect(() => {
    // dispatch(requestUserNftItem({nftAddress: currentTrade.nftAddress}))
    async function getTC() {
      const res = await getByNftAddress(currentTrade.nftAddress)
      console.log("fetchUserNftItemBYTRADE", res)
      if (res.status === 200 || res.status === 201) {
        let userData = await res.data;

        console.log("fetchUserNftItemBYTRADE", userData)
        setCurNftByTrade(userData)
      }
    }

    getTC()
    // address: "EQBF7x8GXZMxICbPv-DSa8-AvC7w0_HR866sBGfOO_x9MziQ"
    // collectionAddress: "EQBrwIsqo9o2_AFSQrPK9xOVXwHmkmhvB0pTEJYLwyzqJsFv"
    // collectionName: "Marketplace Creatures"
    // image: "https://ton.org/img/img_1.svg"
    // index: 5
    // name: "Boris McCoy"
    // ownerAddress: "EQDw3IeAr46maw9iza3csBoFWunmq3pkQrmFBO8R5iJ8fyCx"

  }, [])

  // createdAt: "2022-08-01T12:08:19.783Z"
  // id: "62e7c233946f8fc104c3b511"
  // nftAddress: "EQBF7x8GXZMxICbPv-DSa8-AvC7w0_HR866sBGfOO_x9MziQ"
  // nftPrice: 1
  // searchId: "162990"
  // sellerAddress: "EQBUZt5l1AFSAvPrjrqdDvWF1_qrXGUGzRYvmjim1lyG-2WN"
  // status: "OPEN"
  // transferNftFromSellerTx: "BCLrzEXXHIfZ+VLzI5kFBH9pS02GNnCUDg8s+DKbhoU="
  // updatedAt: "2022-08-01T12:09:14.470Z"

  const [sellPrice, setSellPrice] = useState(0)

  async function cancelSale() {
    let res = await cancelSaleRequest(CT.id)
    if (res.status === 200 || res.status === 201) {
      let json = await res.data
      console.log("closeSaleRequest", json)
    }
  }

  async function closeSale() {
    let res = await closeSaleRequest(CT.id)
    if (res.status === 200 || res.status === 201) {
      let json = await res.data
      console.log("closeSaleRequest", json)
    }

  }

  console.log("CT.sellerAddress === address", CT.sellerAddress === address, CT, address)
  return (
    <div className={"trade_item_container"}>

      <div className={"trade_item_data_wrap"}>
        <div style={{alignSelf: "flex-start"}} onClick={() => dispatch(deleteCurrentTrade())}>
          <CloseIcon/>
          {/*<img src={CloseIcon} alt={"close"}/>*/}
        </div>
        <div className={"nft_title"}>
          User Trade
        </div>
      </div>

      <div className={"trade_item_wrap"} key={CT.id}>
        <div className={"trade_item_img_wrap"}>
          <img src={mockIcon2} alt={"img"}/>
        </div>
        <div className={"trade_item_text_wrap"}>
          <div>
            NFT Name: {curNftByTrade.name}
          </div>
          <div>
            Trade ID: {CT.id}
          </div>
          <div>
            Collection: {curNftByTrade.collectionName}
          </div>
          <div>
            Status: {CT.status}
          </div>
        </div>
        <div className={"set_price_input_wrap"}>
        </div>

        <Button variant="outlined" sx={{fontSize: "10px", width: "100%"}} onClick={() => cancelSale()}>Cancel
          sale</Button>


      </div>
    </div>
  )
}


