import {getAllNftsByOwner, getByNftAddress} from "../../network/requests";

export default async function fetchUserNfts() {
  console.log("fetchUserNftItem")
  try {
    
    let res = await getAllNftsByOwner()
    if(res.status === 200 || res.status === 201){
      console.log("getNFTsMainnet",res.data)
      return res.data
    }

  } catch (e) {
    console.log("fetchUserData error ", e)
    throw e
  }
}