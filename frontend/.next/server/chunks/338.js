"use strict";
exports.id = 338;
exports.ids = [338];
exports.modules = {

/***/ 3088:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_util_transform_product_preview__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5151);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_util_transform_product_preview__WEBPACK_IMPORTED_MODULE_0__]);
_lib_util_transform_product_preview__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const usePreviews = ({ pages , region  })=>{
    const previews = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (!pages || !region) {
            return [];
        }
        const products = [];
        for (const page of pages){
            products.push(...page.response.products);
        }
        const transformedProducts = products.map((p)=>(0,_lib_util_transform_product_preview__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(p, region));
        return transformedProducts;
    }, [
        pages,
        region
    ]);
    return previews;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (usePreviews);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * Calculates the number of spooky skeletons to show while an infinite scroll is loading the next page.
 * Per default we fetch 12 products per page, so we need to calculate the number of skeletons to show,
 * if the remaing products are less than 12.
 */ const getNumberOfSkeletons = (pages)=>{
    if (!pages) {
        return 0;
    }
    const count = pages[pages.length - 1].response.count;
    const retrieved = count - pages.reduce((acc, curr)=>acc + curr.response.products.length, 0);
    if (count - retrieved < 12) {
        return count - retrieved;
    }
    return 12;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getNumberOfSkeletons);


/***/ }),

/***/ 5151:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_util_get_precentage_diff__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2702);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5756);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([medusa_react__WEBPACK_IMPORTED_MODULE_0__]);
medusa_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const transformProductPreview = (product, region)=>{
    const variants = product.variants;
    let cheapestVariant = undefined;
    if (variants?.length > 0) {
        cheapestVariant = variants.reduce((acc, curr)=>{
            if (acc.calculated_price > curr.calculated_price) {
                return curr;
            }
            return acc;
        }, variants[0]);
    }
    return {
        id: product.id,
        title: product.title,
        handle: product.handle,
        thumbnail: product.thumbnail,
        price: cheapestVariant ? {
            calculated_price: (0,medusa_react__WEBPACK_IMPORTED_MODULE_0__.formatAmount)({
                amount: cheapestVariant.calculated_price,
                region: region,
                includeTaxes: false
            }),
            original_price: (0,medusa_react__WEBPACK_IMPORTED_MODULE_0__.formatAmount)({
                amount: cheapestVariant.original_price,
                region: region,
                includeTaxes: false
            }),
            difference: (0,_lib_util_get_precentage_diff__WEBPACK_IMPORTED_MODULE_1__/* .getPercentageDiff */ .p)(cheapestVariant.original_price, cheapestVariant.calculated_price),
            price_type: cheapestVariant.calculated_price_type
        } : undefined
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (transformProductPreview);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;