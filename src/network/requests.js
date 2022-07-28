import {baseUrl} from "./constants";
import axios from "axios";
const config = {
  withCredentials:true
}
//AUTH
export async function getLoginToken(){
  return await axios.post(`${baseUrl}/auth/login`, config)
}
export async function getMe(){
  return await axios.get(`${baseUrl}/auth/me`, config)
}

//GETTERS
export async function getAllNftsByOwner(){
  return await axios.get(`${baseUrl}/nfts/get-by-owner-address`, config)
}
export async function getByNftAddress(nftAddress){
  return await axios.get(`${baseUrl}/nfts/get-by-nft-address/${nftAddress}`, config)
}
export async function getNFtbySellerAddress(tradeId){
  return await axios.get(`${baseUrl}/trades/get-by-seller-address`, config)
}
export async function getNFtbyBuyerAddress(tradeId){
  return await axios.get(`${baseUrl}/trades/get-by-buyer-address`, config)
}
export async function getNFtbySearchId(searchId){
  return await axios.get(`${baseUrl}/trades/get-by-search-id/${searchId}`, config)
}
export async function getByTradeId(tradeId){
  return await axios.get(`${baseUrl}/trades/${tradeId}`, config)
}

//CALL METHODS
export async function openSaleRequest(nftAddress,nftPrice){
  return await axios.post(`${baseUrl}/trades/open`, {nftAddress:nftAddress, nftPrice:nftPrice},config)
}

export async function closeSaleRequest(tradeId){
  return await axios.put(`${baseUrl}/trades/close`, {tradeId:tradeId},config)
}

export async function cancelSaleRequest(tradeId){
  return await axios.put(`${baseUrl}/trades/cancel`, {tradeId:tradeId},config)
}
