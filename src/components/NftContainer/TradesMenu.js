import AddCustomNft from "../AddCutomNft/AddCustomNft";
import Loader from "../Loader/Loader";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestUserTrades, setCurrentNft, setCurrentTrade} from "../../redux/store/actions/market";
import "./tradeMenu.css"
import {Button} from "@mui/material";

export function TradesMenu() {
  const dispatch = useDispatch();
  const user_trades = useSelector((state) => state.appReducer.user_trades);
  const user_trades_loading = useSelector((state) => state.appReducer.user_trades_loading);
  const user_trades_error = useSelector((state) => state.appReducer.user_trades_error);

  function retryRequest() {

  }
  
  useEffect(()=>{
    dispatch(requestUserTrades())
  },[])
  
  
  async function handleClickTrade(e, nft) {
    let curF = user_trades.filter(it => +e.currentTarget.id === it.id)
    dispatch(setCurrentTrade(curF[0]))
  }
  
  return (


    <>
      <div className={"nft_custom_search_container"}>
        <AddCustomNft/>
      </div>
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
            <div className={"user_trades_container"}>
              {user_trades.map(item => {
                return <Button variant={"outlined"} style={{fontSize:"7px",marginTop:"5px"}} className={"trade_item_wrapper"} id={item.id}
                            onClick={(e, item) => handleClickTrade(e, item)} key={item.i}>
                  {/*<div className={"nft_item_img_wrap"}>*/}
                  {/*  <img src={item.image} alt={"img"}/>*/}
                  {/*</div>*/}
                  <div>
                    nftPrice: {item.nftPrice}
                  </div>
                  <div>
                    searchId: {item.searchId}
                  </div>
                  <div>
                    sellerAddress: {item.sellerAddress}
                  </div>
                </Button>
              })
              }
            </div>
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