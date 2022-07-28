import AddCustomNft from "../AddCutomNft/AddCustomNft";
import React from "react";
import {useSelector} from "react-redux";
import Loader from "../Loader/Loader";
import "./NFTContainerStyles.css"
import {Button, ButtonGroup} from "@mui/material";

export function NftView() {
  const user_nfts_array = useSelector((state) => state.appReducer.user_nfts_array);
  const userNftItemLoading = useSelector((state) => state.appReducer.userNftItemLoading);
  const userNftItemError = useSelector((state) => state.appReducer.userNftItemError);

  function retryRequest(){
    
  }
  return (
    <>
      <div className={"nft_title"}>
        User NFTs
      </div>

      <div className={"nft_custom_search_container"}>
        <AddCustomNft/>
      </div>
      {userNftItemLoading ? (
        <div
          style={{minHeight: `calc(100vh - 596px)`, display: "flex"}}
          className="modal-constructor modal-constructor-market"
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
        ((user_nfts_array && user_nfts_array.length >0) ?
            <div className={"user_nfts_container"}>
            {user_nfts_array.length && user_nfts_array.map(item => {

                return <div className={"nft_item_wrapper"} key={item.address}>
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

                  <ButtonGroup size={"small"} sx={{marginTop:"20px"}} variant="outlined" aria-label="outlined button group">
                    <Button sx={{
                      fontSize:"10px"
                    }}>open</Button>
                    <Button sx={{
                      fontSize:"10px"
                    }}>cancel</Button>
                    <Button sx={{
                      fontSize:"10px"
                    }}>close</Button>
                  </ButtonGroup>
                  {/*<div className={"nft_btns_wrap"}>*/}
                  {/*  <Button style={{fontSize:"10px"}}>*/}
                  {/*    <span>open sale</span>*/}
                  {/*  </Button>*/}
                  {/*  <Button style={{fontSize:"10px"}}>*/}
                  {/*    cancel sale*/}
                  {/*  </Button>*/}
                  {/*  <Button style={{fontSize:"10px"}}>*/}
                  {/*    close sale*/}
                  {/*  </Button>*/}
                  {/*</div>*/}
                  
                </div>})
            }
            </div>
            :
            <div
              style={{minHeight: `calc(100vh - 596px)`, display: "flex", color: "white", alignItems: "center", justifyContent: "center"}}
              className="modal-constructor modal-constructor-market"
            >
              There is nothing here yet...
            </div>
        )
      }
    </>
  )
}


