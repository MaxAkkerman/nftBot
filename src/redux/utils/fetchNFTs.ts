import {baseUrl} from "../../constants/network";

export default async function fetchNFTs(){
    console.log("baseUrl",baseUrl)
}
// export default async function fetchNFTs({
//
//                                           limitItemsPerPage,
//                                           onSale,
//                                           page,
//                                           sortByPrice,
//                                           sortByRarity,
//                                           filterByRarity,
//                                           minRarity,
//                                           maxRarity,
//                                           minPrice,
//                                           maxPrice,
//                                           userAddress,
//                                           searchByTitle
//                                         }
//                                         ) {
//
//   let filterByUser = ""
//   if (!userAddress) {
//     filterByUser = ""
//   } else {
//     filterByUser = `owner : {eq : "${userAddress}" }`
//   }
// let neadrDec = "000000000000000000000000"
//
//   console.log("startprocess", "limitItemsPerPage", limitItemsPerPage, "onSale",onSale, "minPrice",minPrice, "minPrice", (minPrice*neadrDec).toString(), "maxPrice", maxPrice, "page", page, "sortByPrice", sortByPrice, "sortByRarity", sortByRarity, "minRarity", minRarity, "maxRarity", maxRarity);
//   let sortByPriceString = "";
//   if (!sortByPrice) {
//     sortByPriceString = "";
//   } else {
//     sortByPriceString = `{field: price, direction: ${sortByPrice} }`
//   }
//   if (!onSale) {
//     onSale = ""
//   } else if (onSale === true) {
//     onSale = `sale: {is: true}`
//   } else {
//     onSale = ""
//   }
//   if (!limitItemsPerPage) limitItemsPerPage = 4
//   if (!page) page = 0
//
//   let filterByRarityString = ""
//   if (!filterByRarity) {
//     filterByRarityString = ""
//   } else {
//     filterByRarityString = `and: [{rarity : {gte: ${minRarity ? minRarity : 0}}},{rarity: {lte: ${maxRarity ? maxRarity : 100}}}]`
//   }
//   // let priceRangeFilterString = "";
//   // if(!priceRangeFilter){
//   //   priceRangeFilterString= "";
//   // }else{
//   let priceRangeFilterString = `and: [{price : {gte: "${minPrice === 0 ? "0" : minPrice.toString() + neadrDec}" }},{price: {lte: "${maxPrice.toString() + neadrDec}"}}]`
//   // }
//   let searchByTitleString = ""
//   if(searchByTitle){
//     searchByTitleString = `title: {iLike: "%${searchByTitle}%"}`
//   }
//   if (!sortByRarity) {
//     sortByRarity = "";
//   } else {
//     sortByRarity = `,{field: rarity, direction: ${sortByRarity} }`
//   }
//   let queryString = `
//       {
//       nfts(paging: { limit: ${limitItemsPerPage}, offset: ${page} },  sorting:[${sortByPriceString}${sortByRarity}], filter:{${onSale}${filterByRarityString}${filterByUser}${searchByTitleString} }) {
//           pageInfo {
//             hasNextPage
//             hasPreviousPage
//           }
//             nodes {
//                 id
//                 token_id
//                 owner
//                 sale
//                 price
//                 title
//                 rarity
//                 description
//                 url_img_ipfs
//                 collection{
//                   id
//                   img
//                   name
//                   account_id
//                   price
//                   symbol
//                   userId
//                   creator
//                   status
//                 }
//             }
//             totalCount
//               }
//           }
//       `
//   console.log("queryStrin222g", queryString,
// 	);
//
// 	// try{
// 	return await fetch(baseUrl, {
// 		method: "post",
// 		headers: {
// 			"Content-Type": "application/json; charset=utf-8",
// 			Connection: "keep-alive",
// 		},
// 		body: JSON.stringify({
// 			query: queryString,
//
//     }),
//   })
//     .then(async (res) => {
//       let r = await res.json();
//       // let r = r.data.nfts.nodes;
//       console.log("ddsdsd3", r.data);
//       r.data.nfts.nodes.map((item, i) => {
//         item.url_img_ipfs =
//           "https://ipfs.defispace.com/250/" + item.url_img_ipfs;
// // console.log("nnnnnnn",Number(item.price).toLocaleString('fullwide', { useGrouping: false }))
//         item.index = i;
//         if (item.title === null) {
//           item.title = `Lorem Ipsum`;
//         }
//         if (item.price === null) {
//           item.price = 0;
//         }
//       });
//       console.log("rrrrrrr", r);
//       return {nfts: r.data.nfts.nodes, totalCount: r.data.nfts.totalCount};
//     })
//     .catch((e) => {
//       // console.log("thiserror");
//       throw e;
//     });
//
// }
