let db = [
  {Id: 0, Name: "Ukraine"},
  {Id: 1, Name: "Armenia"},
  {Id: 2, Name: "Russia"},
  {Id: 3, Name: "Petersburg", ParentID: 2},
  {Id: 4, Name: "Mariburg", ParentID: 5},
  {Id: 5, Name: "Lvov", ParentID: 0},
  {Id: 6, Name: "Erevan", ParentID: 1},
  {Id: 23, Name: "Pushkin", ParentID: 3},
  {Id: 12, Name: "Sortovoe", ParentID: 5},
  {Id: 92, Name: "Zradovka", ParentID: 12}
]

// 1) ov -> Ukraine - Lvov
// Ukraine - Lvov - Sortovoe
// Ukraine - Lvov - Sortovoe - Zradovka
// 2) ia -> Russia
// Armenia
// 3) burg -> Russia - Petersburg
// Ukraine - Lvov - Mariburg


let arr = [];
let filteredData = db.filter(item=> {
  // console.log(item.Name.includes("ov"))
  return item.Name.includes("ov")
  // if(item.Name.includes("ov")){
  //   return item
  // }
  
  // if(item.Name )
  // let rr = item.Name.contains("ov")
})


s = (str) => db.filter(el => el.Name.includes(str)).map(res = el => isNaN(el.ParentID) ? el.Name : `${res(db.find(e => e.Id == el.ParentID))}-${el.Name}`)
// console.log(filteredData)
// for(let i = 0; i < db.length; i++){
//   arr.push(db[i])
//  
//   db.map(item=>{
//
//     let temp = {};
//     if(item.ParentID === ){
//
//     }
//   })
// }

  
  
  
  
