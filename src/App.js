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
import {getMe} from "./network/requests";
import {setAuthUserData} from "./redux/store/actions/market";

function App() {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.appReducer.address);
  const currentNft = useSelector((state) => state.appReducer.currentNft);
  const currentTrade = useSelector((state) => state.appReducer.currentTrade);

  useEffect(() => {
    async function getMyCred(){
      try{
        const res = await getMe()
        console.log("res",res)
        if (res.status === 201 || res.status === 200) {
          console.log("res", res)
          let userData = await res.data
          console.log("getMe",userData)
          dispatch(setAuthUserData(userData))
        }
      }catch(e){
        console.log("getMyCred",e)
      }
    }
    getMyCred()
  }, [])
  
  // useEffect(() => {
  //     async function onWebSocket() {
  //       await webSocket()
  //     }
  //   onWebSocket()
  // }, [])

  return (

    <div className="App">
      {address ?
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
