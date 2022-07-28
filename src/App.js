import './App.css';
import ConnectToTonKeeper from "./components/ConnectToTonKeeper/ConnectToTonKeeper";
import React, {useEffect, useState} from "react";
import {GetMeButton} from "./components/GetMeButton/GetMeButton";
// import {GetMyNfts} from "./components/GetMyNfts/GetMyNfts";
import {webSocket} from "./webSocket/webSocket";
import {useSelector} from "react-redux";
import PopperApp from "./components/Popper/Popper";
import {TitleMenu} from "./components/TitleMenu/TitleMenu";
import {NftView} from "./components/NftContainer/NftContainer";
import {NftItemView} from "./components/NftItemView/NftItemView";

function App() {
  const pubkey = useSelector((state) => state.appReducer.pubkey);
  const address = useSelector((state) => state.appReducer.address);
  const user_nfts_array = useSelector((state) => state.appReducer.user_nfts_array);
  const currentNft = useSelector((state) => state.appReducer.currentNft);

  // const [showNft,setShowNft] = useState(false)
  // useEffect(()=>{
  //   if(currentNft !== null){
  //     setShowNft(currentNft)
  //   }
  //    
  // },[currentNft])

  useEffect(() => {
    webSocket()
  }, [])

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
              <>
                <PopperApp/>
                <TitleMenu/>
                <NftView/>
                <div style={{marginTop: "200px", borderTop: "2px solid black"}}>
                  DEV
                </div>
              </>
          }
          </>)
          
          
        

        :
        <ConnectToTonKeeper/>
      }
      
      {/*<GetMeButton/>*/}
    </div>

  );
}

export default App;
