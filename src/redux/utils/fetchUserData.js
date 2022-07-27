import {getMe} from "../../network/requests";

export default async function fetchUserData() {
  try {
    const res = await getMe()
    console.log("fetchUserData", res)
    if (res.ok) {
      let userData = await res.json();
      console.log("fetchUserData", userData)
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