import { useState } from "react";

// import { Token, UseSelectPopupArg } from "../types";

export default function useHandleLogin() {
  const [login, setLogin] = useState({error:false, url:"",loading:false});

  async function handleGetLink() {
    setLogin({...login, loading: true})
    try{
      const res = await fetch("http://http-notifs.xyz/auth/login", {method: "POST", headers: {accept: "text/plain"}})
      if (res.ok) {
        console.log("res", res)
        let url = await res.text()
        console.log("ruls", url)
        setLogin({...login, url: url, loading: false})

      }else{
        console.log('error')
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
