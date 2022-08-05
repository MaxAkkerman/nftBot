import AddCustomNft from "../AddCutomNft/AddCustomNft";
import Loader from "../Loader/Loader";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {requestUserNftItem, searchNftRequest, searchNftSuccess, setCurrentNft} from "../../redux/store/actions/market";
import {Button, ButtonGroup} from "@mui/material";
import mockIcon2 from "../../images/title.png"
import {getSplicedAddress} from "../../utils/utils";
import {getAllNftsByOwner} from "../../network/requests";


export function NftsMainMenu() {
  const dispatch = useDispatch();
  const user_nfts_array = useSelector((state) => state.appReducer.user_nfts_array);
  const userNftItemLoading = useSelector((state) => state.appReducer.userNftItemLoading);
  const userNftItemError = useSelector((state) => state.appReducer.userNftItemError);
  const address = useSelector((state) => state.appReducer.address);

  function retryRequest() {

  }

  function handleClickNftThis(e,item) {
    let curF = user_nfts_array.filter(it => +e.currentTarget.id === it.index)
    console.log("tttt", curF)
    dispatch(setCurrentNft(curF[0]))
  }

  const [myArr, setMyArr] = useState([])

  // useEffect(() => {
  //   const uniqueIds = [];
  //   const unique = user_nfts_array.filter(element => {
  //     const isDuplicate = uniqueIds.includes(element.address);
  //     if (!isDuplicate) {
  //       uniqueIds.push(element.address);
  //       return true;
  //     }
  //     return false;
  //   });
  //   setMyArr(unique)
  // }, [user_nfts_array])

  useEffect(() => {

    // async function getNFTsMainnet(){
    //   let res = await getAllNftsByOwner()
    //   if(res.status === 200 || res.status === 201){
    //     console.log("getNFTsMainnet",res.data)
    //     return res.data
    //   }else{
    //     return []
    //   }
    //  
    // }
    dispatch(requestUserNftItem())
    // getNFTsMainnet().then(data=>dispatch(searchNftSuccess(data)))

  }, [])
  return (
    <>
      <div className={"nft_custom_search_container"}>
        <AddCustomNft
          type={"NFT"}
          handleRequest={(address) => dispatch(searchNftRequest(address))}
          placeHolder={"Search by NFT Contract Address"}
        />
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
              fontSize: "13px",
              fontWeight: "600",
              marginTop:"40px"
            }}
          >
            <div style={{margin: "auto"}}>
              Oops! Some network problem, you can request later or try to search NFT by Contract Address .
            </div>
          </div>
        )
        :
        ((user_nfts_array && user_nfts_array.length > 0) ?
            // <ButtonGroup className={"user_nfts_container"}>
            <ButtonGroup className={"user_nfts_container"} style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridColumnGap: "15px",
              gridRowGap: "15px",
              padding: "0px 0px 30px 0px",
              marginTop: "40px",
              fontFamily: "SF Pro Display"
            }} size={"large"} variant="outlined"
                         aria-label="outlined button group">
              {[...user_nfts_array].filter(fr => fr.ownerAddress === address).map(item => {
                console.log("items",item)
                return <Button
                  className={"nft_item_wrapper_btn"}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    fontSize: "9px",
                    // color:"white",
                    borderRadius: "12px",
                    height: "250px",
                    padding: "12px",
                    alignItems: "start"
                  }}
                  id={item.index}
                  onClick={(e,item) => handleClickNftThis(e,item)}
                  key={item.address}>
                  <div className={"nft_item_img_wrap"}>
                    <img style={{borderRadius: "10px"}} src={item.image} alt={"img"}/>
                  </div>
                  <div style={{marginTop: "auto"}}>
                    {item.name}
                  </div>
                  <div>
                    {item.collectionName}
                  </div>
                  <div>
                    NFT address:
                  </div>
                  <div style={{marginTop: "-4px"}}>
                    {getSplicedAddress(item.address)}
                  </div>
                </Button>

              })
              }
            </ButtonGroup>
            :
            <div
              style={{
                // minHeight: `calc(100vh - 596px)`,
                display: "flex",
                marginTop: "40px",
                color: "#E8E6E3",
                alignItems: "center",
                justifyContent: "center", fontFamily: "SF Pro Display"
              }}
              // className="modal-constructor modal-constructor-market"
            >
              There is nothing here yet...
            </div>
        )
      }
    </>

  )

}