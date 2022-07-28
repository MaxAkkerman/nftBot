import {baseUrl} from "./constants";
import axios from "axios";
const config = {
  withCredentials:true
}
//AUTH
export async function getLoginToken(){
  return await fetch(`${baseUrl}/auth/login`, {method: "POST", credentials:"include"})

  // return await axios.post(`${baseUrl}/auth/login`, {withCredentials:true})
}
export async function getMe(){
  return await axios.get(`${baseUrl}/auth/me`, {withCredentials:true})
}

//GETTERS
export async function getAllNftsByOwner(){
  return await axios.get(`${baseUrl}/nfts/get-by-owner-address`, {withCredentials:true})
}
export async function getByNftAddress(nftAddress){
  return await axios.get(`${baseUrl}/nfts/get-by-nft-address/${nftAddress}`, {withCredentials:true})
}
export async function getNFtbySellerAddress(tradeId){
  return await axios.get(`${baseUrl}/trades/get-by-seller-address`, {withCredentials:true})
}
export async function getNFtbyBuyerAddress(tradeId){
  return await axios.get(`${baseUrl}/trades/get-by-buyer-address`, {withCredentials:true})
}
export async function getNFtbySearchId(searchId){
  return await axios.get(`${baseUrl}/trades/get-by-search-id/${searchId}`, {withCredentials:true})
}
export async function getByTradeId(tradeId){
  return await axios.get(`${baseUrl}/trades/${tradeId}`, {withCredentials:true})
}

//CALL METHODS
export async function openSaleRequest(nftAddress,nftPrice){
  return await axios.post(`${baseUrl}/trades/open`, {nftAddress:nftAddress, nftPrice:nftPrice},{withCredentials:true})
}

export async function closeSaleRequest(tradeId){
  return await axios.put(`${baseUrl}/trades/close`, {tradeId:tradeId},{withCredentials:true})
}

export async function cancelSaleRequest(tradeId){
  return await axios.post(`${baseUrl}/trades/cancel`, {tradeId:tradeId},{withCredentials:true})
}
