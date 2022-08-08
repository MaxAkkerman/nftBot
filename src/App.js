import './App.css';
import ConnectToTonKeeper from "./components/ConnectToTonKeeper/ConnectToTonKeeper";
import React, {useEffect} from "react";
import {webSocket} from "./webSocket/webSocket";
import {useDispatch, useSelector} from "react-redux";
import PopperApp from "./components/Popper/Popper";
import {TitleMenu} from "./components/TitleMenu/TitleMenu";
import {NftView} from "./components/NftContainer/NftContainer";
import {NftItemView} from "./components/NftItemView/NftItemView";
import {TradeView} from "./components/TradeView/TradeView";
import {getLoginToken, getMe} from "./network/requests";
import {setAuthUserData} from "./redux/store/actions/market";
import PositionedSnackbar from "./components/Snackbar/Snackbar";

function App() {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.appReducer.address);
  const currentNft = useSelector((state) => state.appReducer.currentNft);
  const currentTrade = useSelector((state) => state.appReducer.currentTrade);

  useEffect(()=>{
    async function connect(){
      const res = await getLoginToken().then(async()=>await webSocket())
      console.log("in index ",res)
      // async function onWebSocket() {
      //   await webSocket()
      // }

      // onWebSocket().then(res=>console.log("onWebSocket", res))
    }
    connect()
    
  },[])
  useEffect(() => {
    async function getMyCred() {
      try {
        const res = await getMe()
        if (res.status === 201 || res.status === 200) {
          let userData = await res.data
          dispatch(setAuthUserData(userData))
        }
      } catch (e) {
        console.log("getMyCred", e)
      }
    }
    getMyCred()
  }, [])

  useEffect(() => {
    let isNeedToReload = localStorage.getItem("needToReload")
    if (isNeedToReload !== "yes") {
      localStorage.setItem("needToReload", "yes")
      window.location.reload()
    }
    }, [])

  return (

    <div className="App">
      <div className={"app_container"}>
        {address ?
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
            </>
          :
          <ConnectToTonKeeper/>
        }
      </div>
      <PositionedSnackbar/>
    </div>
  );
}

export default App;
