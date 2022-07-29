import AddCustomNft from "../AddCutomNft/AddCustomNft";
import Loader from "../Loader/Loader";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setCurrentNft} from "../../redux/store/actions/market";
import {closeSaleRequest, getTrades, openSaleRequest} from "../../network/requests";
import {Button} from "@mui/material";


export function NftsMainMenu() {
  const dispatch = useDispatch();
  const user_nfts_array = useSelector((state) => state.appReducer.user_nfts_array);
  const userNftItemLoading = useSelector((state) => state.appReducer.userNftItemLoading);
  const userNftItemError = useSelector((state) => state.appReducer.userNftItemError);

  function retryRequest() {

  }

  async function handleClickNft(e, nft) {
    let curF = user_nfts_array.filter(it => +e.currentTarget.id === it.index)
    dispatch(setCurrentNft(curF[0]))
  }
  
  return (


    <>
      <div className={"nft_custom_search_container"}>
        <AddCustomNft/>
      </div>
      {userNftItemLoading ? (
        <div
          className="loader_wrap"
        >
          <Loader/>
        </div>
      ) : userNftItemError ? (
          <div
            onClick={() => retryRequest()}
            className="title"
            style={{
              width: "100%",
              display: "flex",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            <div style={{margin: "auto"}}>
              Oops! Some network problem, please try again.
            </div>
          </div>
        )
        :
        ((user_nfts_array && user_nfts_array.length > 0) ?
            <div className={"user_nfts_container"}>
              {user_nfts_array.length && user_nfts_array.map(item => {
                return <div className={"nft_item_wrapper"} id={item.index}
                            onClick={(e, item) => handleClickNft(e, item)} key={item.i}>
                  <div className={"nft_item_img_wrap"}>
                    <img src={item.image} alt={"img"}/>
                  </div>
                  <div>
                    Name address: {item.name}
                  </div>
                  <div>
                    collectionName: {item.collectionName}
                  </div>
                  <div>
                    nft address: {item.address}
                  </div>
                </div>
                
              })
              }
            </div>
            :
            <div
              style={{
                minHeight: `calc(100vh - 596px)`,
                display: "flex",
                color: "white",
                alignItems: "center",
                justifyContent: "center"
              }}
              className="modal-constructor modal-constructor-market"
            >
              There is nothing here yet...
            </div>
        )
      }
    </>

  )

}