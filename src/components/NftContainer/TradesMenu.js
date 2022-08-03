import AddCustomNft from "../AddCutomNft/AddCustomNft";
import Loader from "../Loader/Loader";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  requestUserTrades,
  searchNftRequest,
  searchTradeRequest,
  setCurrentNft,
  setCurrentTrade
} from "../../redux/store/actions/market";
import "./tradeMenu.css"
import {Button} from "@mui/material";

const tradeStatus = [
  "CANCELED",
  "BOOKED",
  "SUCCESS",
  "FAILED"]
const tradeStatusCompare = [
  "OPEN",
]
const tradeStatusCompareSuc = [
  "SUCCESS",
]
function compareFunc(a,b){
  if(tradeStatusCompare.includes(a.status)){
    return -1
  }
  if(tradeStatusCompareSuc.includes(a.status)){
    return -1
  }
}

export function TradesMenu() {
  const dispatch = useDispatch();
  const user_trades = useSelector((state) => state.appReducer.user_trades);
  const user_trades_loading = useSelector((state) => state.appReducer.user_trades_loading);
  const user_trades_error = useSelector((state) => state.appReducer.user_trades_error);
  const address = useSelector((state) => state.appReducer.address);
  const user_trades_added = useSelector((state) => state.appReducer.user_trades_added);

  function retryRequest() {

  }
  
  useEffect(()=>{
    dispatch(requestUserTrades())
  },[])
  
  
  async function handleClickTrade(e, nft) {
    let curF = user_trades.filter(it => e.currentTarget.id === it.id)
    console.log("tradecer", e.currentTarget.id,curF)
    dispatch(setCurrentTrade(curF[0]))
  }
  
  return (


    <>
      <div className={"nft_custom_search_container"}>
        <AddCustomNft
          type={"Trade"}
          handleRequest={(tradeID)=>dispatch(searchTradeRequest(tradeID,address))}
        />
      </div>
      {user_trades_added && <>
        <div className={"trades_title"}>
          Buy
        </div>
        <div className={"user_trades_container"}>
          {[...user_trades_added].map(item => {
            return <Button disabled={tradeStatus.includes(item.status)} variant={"outlined"}
                           style={{fontSize: "7px", marginTop: "5px", display: "flex", justifyContent: "space-evenly"}}
                           className={"trade_item_wrapper"} id={item.id}
                           onClick={(e, item) => handleClickTrade(e, item)} key={item.i}>
              {/*<div className={"nft_item_img_wrap"}>*/}
              {/*  <img src={item.image} alt={"img"}/>*/}
              {/*</div>*/}
              <div>
                Trade ID: {item.id}
              </div>
              <div>
                Price: {item.nftPrice} ton
              </div>
              <div>
                Status: {item.status}
              </div>
            </Button>
          })
          }
        </div>
      </>
      }
      {user_trades_loading ? (
        <div
          className="loader_wrap"
        >
          <Loader/>
        </div>
      ) : user_trades_error ? (
          <div
            onClick={() => retryRequest()}
            className="loader_wrap"
          >
            <div>
              Oops! Some network problem, please try again.
            </div>
          </div>
        )
        :
        ((user_trades && user_trades.length > 0) ?
          <>
          <div className={"trades_title"}>
            Sales
          </div>
            <div className={"user_trades_container"}>
              {[...user_trades].filter(item=>item.sellerAddress === address).sort((a,b)=>compareFunc(a,b)).map(item => {
                return <Button disabled={tradeStatus.includes(item.status)} variant={"outlined"} style={{fontSize:"7px",marginTop:"5px",display:"flex", justifyContent:"space-evenly"}} className={"trade_item_wrapper"} id={item.id}
                            onClick={(e, item) => handleClickTrade(e, item)} key={item.i}>
                  {/*<div className={"nft_item_img_wrap"}>*/}
                  {/*  <img src={item.image} alt={"img"}/>*/}
                  {/*</div>*/}
                  <div>
                    Trade ID: {item.id}
                  </div>
                  <div>
                    Price: {item.nftPrice} ton
                  </div>
                  <div>
                    Status: {item.status}
                  </div>
                </Button>
              })
              }
            </div>
          </>
            :
            <div
              className="loader_wrap"
            >
              There is nothing here yet...
            </div>
        )
      }

      
      
      
    </>

  )

}