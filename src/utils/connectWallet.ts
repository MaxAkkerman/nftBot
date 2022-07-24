export default async function connectWallet() {
  
  console.log("start")
  
  const res = await fetch("http://http-notifs.xyz/auth/login", {method:"POST", headers:{accept: "text/plain"}})
  console.log("rr",await res.text())
   
  
  return {
    balance: 48.494226114,
    address: "EQBXJ4b54c2kLs9C0A1gvxcPnPvgIcx0zWTaLrQeHYibr3fp",
    status: true,
  };

}
