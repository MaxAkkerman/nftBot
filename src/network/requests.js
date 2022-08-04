import {baseUrl} from "./constants";
import axios from "axios";
const config = {
  withCredentials:true
}
//AUTH
export async function getLoginToken(){
  return await fetch(`${baseUrl}/api/auth/login`, {method: "POST", credentials:"include"})

  // return await axios.post(`${baseUrl}/auth/login`, {withCredentials:true})
}
export async function getMe(){
  return await axios.get(`${baseUrl}/api/auth/me`, {withCredentials:true})
}

//GETTERS
export async function getAllNftsByOwner(){
  return await axios.get(`${baseUrl}/api/nfts/get-by-owner-address`, {withCredentials:true})
}
export async function getByNftAddress(nftAddress){
  return await axios.get(`${baseUrl}/api/nfts/get-by-nft-address/${nftAddress}`, {withCredentials:true})
}
export async function getTrades(){
  return await axios.get(`${baseUrl}/api/trades/get-by-participant-address`, {withCredentials:true})
}
export async function getTradebyTradeID(tradeId){
  return await axios.get(`${baseUrl}/api/trades/get-by-search-id/${tradeId}`, {withCredentials:true})
}
export async function getByTradeId(tradeId){
  return await axios.get(`${baseUrl}/api/trades/${tradeId}`, {withCredentials:true})
}

//CALL METHODS
export async function openSaleRequest(nftAddress,nftPrice){
  return await axios.post(`${baseUrl}/api/trades/open`, {nftAddress:nftAddress, nftPrice:nftPrice},{withCredentials:true})
}

export async function closeSaleRequest(tradeId){
  console.log("closeSaleRequest",tradeId)
  return await axios.post(`${baseUrl}/api/trades/close`, {searchId:(tradeId).toString()},{withCredentials:true})
}

export async function cancelSaleRequest(tradeId){
  return await axios.post(`${baseUrl}/api/trades/cancel`, {tradeId:tradeId},{withCredentials:true})
}
