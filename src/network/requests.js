import {baseUrl} from "./constants";


export async function getLoginToken(){
  return await fetch(`${baseUrl}/auth/login`, {method: "POST", credentials:"include", headers:{"Access-Control-Allow-Origin": "*"}})
}
export async function getUserTokens(nftAddress){
  return await fetch(`${baseUrl}/nfts/get-by-nft-address/${nftAddress}`, {method: "GET", credentials:"include", headers:{"Access-Control-Allow-Origin": "*"}})
}
export async function getMe(){
  return await fetch(`${baseUrl}/auth/me`, {method: "GET", credentials:"include", headers:{"Access-Control-Allow-Origin": "*"}})
}