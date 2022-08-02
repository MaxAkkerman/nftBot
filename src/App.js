import './App.css';
import ConnectToTonKeeper from "./components/ConnectToTonKeeper/ConnectToTonKeeper";
import React, {useEffect, useState} from "react";
import {GetMeButton} from "./components/GetMeButton/GetMeButton";
// import {GetMyNfts} from "./components/GetMyNfts/GetMyNfts";
import {webSocket} from "./webSocket/webSocket";
import {useDispatch, useSelector} from "react-redux";
import PopperApp from "./components/Popper/Popper";
import {TitleMenu} from "./components/TitleMenu/TitleMenu";
import {NftView} from "./components/NftContainer/NftContainer";
import {NftItemView} from "./components/NftItemView/NftItemView";
import useHandleLogin from "./hooks/useSelectPopup";
import {TradeView} from "./components/TradeView/TradeView";
// import {getMe} from "./network/requests";
// import {setAuthUserData} from "./redux/store/actions/market";
// import {getMeK} from "./utils/utils";
// import {reduxStore} from "./lib/redux";
function App() {
  const dispatch = useDispatch();
  const pubkey = useSelector((state) => state.appReducer.pubkey);
  const address = useSelector((state) => state.appReducer.address);
  const user_nfts_array = useSelector((state) => state.appReducer.user_nfts_array);
  const currentNft = useSelector((state) => state.appReducer.currentNft);
  const currentTrade = useSelector((state) => state.appReducer.currentTrade);

  // const [currentCount, setCount] = useState(false);
  //
  // async function check() {
  //   let result = await getMeK()
  //   if(result){
  //     console.log("resilt",result)
  //     dispatch(setAuthUserData(result))
  //     return true
  //   }else{
  //     console.log("resilt",result)
  //     return false
  //   }
  // }

  // useEffect(() => {
  //   if (currentCount) {
  //     return;
  //   }
  //
  //   const id = setInterval(timer, 2000);
  //   return () => clearInterval(id);
  // }, [currentCount]);
  //
  // const timer = async () => {
  //   let r = await check()
  //   if(r){
  //     setCount(r)
  //   }
  //
  // };
  //
  // console.log(currentCount);


//   setInterval(check, 2000);
//   useEffect(() => {
//     check()
//   }, []);

  // const {handleGetLink, login} = useHandleLogin()
  //
  //
  // useEffect(() => {
  //   async function fetchData() {
  //     await handleGetLink()
  //   }
  //
  //   fetchData().then(res=>console.log("fetchData", res))
  //
  //  
  // }, [])


  // useEffect(() => {
  //   check()
  // }, [])

  // function closePopup(){
  //   console.log("closePopup")
  //   setShowNft(false)
  // }

  return (

    <div className="App">
      {!address ?
        (
          <>
            {
              currentNft ?
                <NftItemView/>
                :

                (currentTrade ?
                    <TradeView/>
                    :
                    <>
                      <PopperApp/>
                      <TitleMenu/>
                      <NftView/>
                    </>
                )
            }
          </>)
        :
        <ConnectToTonKeeper
          // handleGetLink={() => handleGetLink()}
          // login={login}
        />
      }

      {/*<GetMeButton/>*/}
    </div>

  );
}

export default App;
