// import React from "react";
// import Loader from "../Loader/Loader";
// import {useNavigate} from "react-router-dom";
// import CollectionCard from "../CollectionCard/CollectionCard";
// import NftCard from "../NftCard/NftCard";
// import {setCurrentNFtItem} from "../../store/actions/market";
// import {formatNearAmount} from "near-api-js/lib/utils/format";
// import {requestNFtsUrlsFetchAction} from "../../store/actions/app";
// import {useDispatch} from "react-redux";
//
// function NFTsContainer({marketNFTsLoading, marketNFTsError, marketNFTs, hideFilter,retryRequest}) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   console.log("NFTsContainer",{marketNFTsLoading, marketNFTsError, marketNFTs, hideFilter,retryRequest})
//   return (
//     <>
//       {marketNFTsLoading ? (
//         <div
//           style={{minHeight: `calc(100vh - 596px)`, display: "flex"}}
//           className="modal-constructor modal-constructor-market"
//         >
//           <Loader/>
//         </div>
//       ) : marketNFTsError ? (
//           <div
//             onClick={() => retryRequest()}
//             className="title"
//             style={{
//               width: "100%",
//               display: "flex",
//               // paddingTop: "200px",
//               fontSize: "20px",
//               fontWeight: "600",
//             }}
//           >
//             <div style={{margin: "auto"}}>
//               Oops! Some network problem, please try again.
//             </div>
//           </div>
//         )
//
//         :
//         (!marketNFTs.length ?
//
//             <div
//               style={{minHeight: `calc(100vh - 596px)`, display: "flex", color: "white", alignItems: "center", justifyContent: "center"}}
//               className="modal-constructor modal-constructor-market"
//             >
//               There is nothing here yet...
//             </div>
//
//
//
//
//             :
//             <div
//               id={"scrollableDiv"}
//               className={
//                 hideFilter
//                   ? "modal-constructor modal-constructor-market modal-constructor-market-full"
//                   : "modal-constructor modal-constructor-market"
//               }
//             >
//               <div className="collection_grid">
//                 {" "}
//                 {[...marketNFTs]
//                   .map((item, index) => {
//                     return (
//                       <NftCard
//                         token_id={item.token_id}
//                         click={() => {
//                           localStorage.setItem("curNFTitem", JSON.stringify(item))
//                           dispatch(setCurrentNFtItem(item));
//                           navigate(
//                             "/nft-market-nft/" +
//                             // item.addrNftCol +
//                             item.collection.account_id +
//                             "!token!" +
//                             item.token_id,
//                           );
//                         }}
//                         img={item.url_img_ipfs}
//                         title={item.title}
//                         description={item.description}
//                         rarity={item.rarity}
//                         price={formatNearAmount(item.price)}
//                       />
//                     );
//                   })}
//               </div>
//             </div>
//
//
//         )
//       }
//     </>)
// }
//
// export default NFTsContainer;
