import {getByNftAddress} from "../../network/requests";

export default async function searchNftBySid({nftAddress}) {
  try {
    const res = await getByNftAddress(nftAddress)
    console.log("getNFtbySearchId", res)
    if (res.status === 200 || res.status === 201) {
      let userData = await res.data;
      console.log("getNFtbySearchId", userData)
      return userData
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