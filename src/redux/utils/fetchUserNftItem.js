import {getByNftAddress} from "../../network/requests";

export default async function fetchUserNftItem({params}) {
  console.log("nftAddress",params.nftAddress)
  try {
    const res = await getByNftAddress(params.nftAddress)
    console.log("fetchUserNftItem", res)
    if (res.ok) {
      let userData = await res.json();
      if(userData.hasOwnProperty("address") && userData){
        console.log("fetchUserNftItem", userData)
        return userData
      }
      
    }
    // else {
    //   console.log("fetchUserData error", res)
    //   throw error
    // }

  } catch (e) {
    console.log("fetchUserData error ", e)
    throw e
  }
}