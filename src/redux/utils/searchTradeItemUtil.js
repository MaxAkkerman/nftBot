import {getTradebyTradeID} from "../../network/requests";

export default async function searchTradeBySid({traidID}) {
  console.log("tradeIDHERE",traidID.tradeId)
  try {
    const res = await getTradebyTradeID(traidID.tradeId)
    console.log("getNFtbySearchId", res)
    if (res.status === 200 || res.status === 201) {
      let trade = await res.data;
      console.log("getTradebyTradeID", trade)
      return trade
    }
    // else {
    //   console.log("fetchUserData error", res)
    //   throw error
    // }

  } catch (e) {
    console.log("fetchUserData error ", e)
    throw e.status
  }
}