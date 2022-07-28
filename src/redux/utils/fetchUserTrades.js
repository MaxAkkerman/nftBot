import {getTrades} from "../../network/requests";

export default async function fetchUserTrades() {
  try {
    const res = await getTrades()
    console.log("getTrades", res)
    if (res.status === 200) {
      let userTrades = await res.data;
      console.log("fetchUserData", userTrades)
      return userTrades
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