import {baseUrl} from "./constants";


export async function getLoginToken(){
  return await fetch(`${baseUrl}/auth/login`, {method: "POST", credentials:"include"})
}
export async function getUserTokens(nftAddress){
  return await fetch(`${baseUrl}/nfts/get-by-nft-address/${nftAddress}`, {method: "GET", credentials:"include"})
}
export async function getMe(){
  return await fetch(`${baseUrl}/auth/me`, {method: "GET", credentials:"include"})
}