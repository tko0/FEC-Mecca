// import React, { useState, useEffect, forwardRef } from 'react';
// import axios from 'axios';

// import ProdImg from './Sub_SingleProd/ProdImg.jsx';
// import ProdInfo from './Sub_SingleProd/ProdInfo.jsx';
// import ComparisonModal from './Sub_SingleProd/ComparisonModal.jsx';

// const SingleProd = forwardRef(({
//   thisProduct, parentProduct, parentReviewMetadata,
//   currentParentProductStyle, setAllowCardClick,
//   setAsNewOverview, thisStyleID, thisImgUrl,
//   myOutfits, setMyOutfits, checkStyles, setCheckStyles,
//   original_price, sale_price,
// }, ref) => {
//   const { id } = thisProduct;

//   // =================== STATES ===================
//   const [theseStyles, setTheseStyles] = useState([]);
//   const [thisPrice, setThisPrice] = useState([]);
//   const [imgUrl, setImgUrl] = useState('');
//   const [showComparisonModal, setShowComparisonModal] = useState(false);
//   const [thisReviewMeta, setThisReviewMeta] = useState({});
//   const [thisAvgRating, setThisAvgRating] = useState([]);

//   // =================== EFFECTS ===================
//   useEffect(() => {
//     axios.get(`/api/products/${id}/styles`)
//       .then((styles) => {
//         const newStyles = styles.data.results;
//         setTheseStyles(newStyles);
//         setImgUrl('');
//         if (!thisImgUrl) {
//           setImgUrl(newStyles[0].photos[0].url);
//           return newStyles.filter((style) => style['default?'] === true);
//         }
//         setImgUrl(thisImgUrl);
//         return [{ original_price, sale_price }];
//       })
//       .then((style) => {
//         setPrice(style);
//       })
//       .catch((err) => err);

//     axios.get(`/api/reviews/meta?product_id=${id}`)
//       .then((reviewMeta) => {
//         const avg = getAvgRating(reviewMeta.data.ratings);
//         setThisAvgRating(avg);
//         setThisReviewMeta(reviewMeta.data);
//       })
//       .catch((err) => err);
//     setShowComparisonModal(false);
//   }, [id]);

//   // =================== HELPERS ===================
//   const setPrice = (item) => {
//     const find = item[0];

//     if (!item.length) {
//       setThisPrice([thisProduct.default_price, null]);
//     }

//     if (find.sale_price) {
//       setThisPrice([find.original_price, find.sale_price]);
//     } else {
//       setThisPrice([find.original_price, null]);
//     }
//   };

//   const getAvgRating = (ratings) => {
//     let totalRatings = 0;
//     let sum = 0;

//     for (const num in ratings) {
//       sum += Number(num) * ratings[num];
//       totalRatings += Number(ratings[num]);
//     }

//     const thisRoundedRating = Math.round((sum / totalRatings).toFixed(2) / 0.25) * 0.25;

//     return [thisRoundedRating, totalRatings];
//   };

//   // =================== COMPONENT ===================
//   return (
//     <div
//       ref={ref}
//       className={ref ? 'single-prod container focused' : 'single-prod container'}
//       onClick={() => setAsNewOverview(id)}
//     >
//       {showComparisonModal
//         ? (
//           <ComparisonModal
//             thisProduct={thisProduct}
//             thisReviewMetadata={thisReviewMeta}
//             parentProduct={parentProduct}
//             parentReviewMetadata={parentReviewMetadata}
//             setAllowCardClick={setAllowCardClick}
//             setShowComparisonModal={setShowComparisonModal}
//             getAvgRating={getAvgRating}
//           />
//         )
//         : null}
//       <ProdImg
//         defaultPic={imgUrl}
//         thisProduct={thisProduct}
//         thisStyleID={thisStyleID}
//         setAllowCardClick={setAllowCardClick}
//         showComparisonModal={showComparisonModal}
//         setShowComparisonModal={setShowComparisonModal}
//         currentParentProductStyle={currentParentProductStyle}
//         myOutfits={myOutfits}
//         setMyOutfits={setMyOutfits}
//         checkStyles={checkStyles}
//         setCheckStyles={setCheckStyles}
//       />
//       <ProdInfo
//         thisProduct={thisProduct}
//         thisPrice={thisPrice}
//         original_price={original_price}
//         sale_price={sale_price}
//         thisAvgRating={thisAvgRating}
//       />
//     </div>
//   );
// });

// export default SingleProd;
