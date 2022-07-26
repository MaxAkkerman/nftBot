import {baseUrl} from "./constants";


export async function getLoginToken(){
  return await fetch(`${baseUrl}/auth/login`, {method: "POST", credentials:"include", headers:{"Access-Control-Allow-Origin": "*"}})
}
export async function getUserTokens(){
  return await fetch(`${baseUrl}/nfts/get-by-nft-address/EQCmmmLl_-SrbKR36uYUMOKieSrryuHVADJ7R4myQtOIuPpw`, {method: "GET", credentials:"include", headers:{"Access-Control-Allow-Origin": "*"}})
}
export async function getMe(){
  return await fetch(`${baseUrl}/auth/me`, {method: "GET", credentials:"include", headers:{"Access-Control-Allow-Origin": "*"}})
}