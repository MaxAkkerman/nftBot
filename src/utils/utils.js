import {getMe} from "../network/requests";
import {setAuthUserData} from "../redux/store/actions/market";
import {reduxStore} from "../lib/redux";

export function getSplicedAddress(string){
  let spliced = string.slice(0, 6);
  let splicedpart2 = string.slice(43);
  return spliced + `...` + splicedpart2;
}


export async function getMeK() {

  console.log("getMeK render")
  try {
    const res = await getMe()
    console.log("getMeK", res)
    if (res.ok) {
      let userData = await res.json()
      console.log("getMeK success", userData)
      return userData

    } else {
      console.log("getMeK error", res)
      
    }

  } catch (e) {
    console.log('getMeK error', e)
    // setUserData({...userData, error: true, loading: false})
  }
}