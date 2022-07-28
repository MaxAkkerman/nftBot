import { useState } from "react";
import {getLoginToken} from "../network/requests";

// import { Token, UseSelectPopupArg } from "../types";

export default function useHandleLogin() {
  const [login, setLogin] = useState({error:false, status:null,url:"",loading:false});

  
  async function handleGetLink() {
    setLogin({...login, loading: true})
    try{
      const res = await getLoginToken()
      console.log("res",res)
      if (res.status === 201) {
        console.log("res", res)
        let url = res.data
        console.log("ruls", url)
        setLogin({...login, url: url, status:res.status,loading: false})

      }else{
        console.log("error", res)
        setLogin({...login, error: true, loading: false})
      }
      
    }catch(e){
      console.log('error',e)
      setLogin({...login, error: true, loading: false})
    }
    

  }
  return {
    handleGetLink,
    login,
  };
}
