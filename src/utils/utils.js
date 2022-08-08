import {getMe} from "../network/requests";

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
    if (res.status === 200 || res.status === 201) {
      let userData = await res.data
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