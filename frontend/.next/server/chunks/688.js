"use strict";
exports.id = 688;
exports.ids = [688];
exports.modules = {

/***/ 8245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ ModalProvider),
/* harmony export */   "d": () => (/* binding */ useModal)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const ModalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(null);
const ModalProvider = ({ children , close  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ModalContext.Provider, {
        value: {
            close
        },
        children: children
    });
};
const useModal = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(ModalContext);
    if (context === null) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};


/***/ }),

/***/ 5386:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([medusa_react__WEBPACK_IMPORTED_MODULE_0__]);
medusa_react__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const useCountryOptions = ()=>{
    const { regions  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_0__.useRegions)();
    const options = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return regions?.map((r)=>{
            return r.countries.map((c)=>({
                    country: c.iso_2,
                    region: r.id,
                    label: c.display_name
                }));
        }).flat();
    }, [
        regions
    ]);
    return options;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useCountryOptions);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4551:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3901);
/* harmony import */ var lodash_omit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_omit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([medusa_react__WEBPACK_IMPORTED_MODULE_1__]);
medusa_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



/**
 * A hook that returns an array of enriched line items.
 * If you pass an array of line items, it will return those line items with enriched data.
 * Otherwise it will return the line items from the current cart.
 */ const useEnrichedLineItems = (lineItems, cartId)=>{
    const { cart  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_1__.useCart)();
    const queryParams = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        if (lineItems) {
            return {
                id: lineItems.map((lineItem)=>lineItem.variant.product_id),
                cart_id: cartId
            };
        }
        return {
            id: cart?.items.map((lineItem)=>lineItem.variant.product_id),
            cart_id: cart?.id
        };
    }, [
        lineItems,
        cart?.items,
        cart?.id,
        cartId
    ]);
    const { products  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_1__.useProducts)(queryParams, {
        enabled: !!lineItems || !!cart?.items?.length,
        keepPreviousData: true
    });
    // We enrich the line items with the product and variant information
    const items = (0,react__WEBPACK_IMPORTED_MODULE_2__.useMemo)(()=>{
        const currItems = lineItems || cart?.items;
        if (!currItems?.length || !products) {
            return [];
        }
        const enrichedItems = [];
        for (const item of currItems){
            const product = products.find((p)=>p.id === item.variant.product_id);
            if (!product) {
                enrichedItems.push(item);
                return;
            }
            const variant = product.variants.find((v)=>v.id === item.variant_id);
            if (!variant) {
                enrichedItems.push(item);
                return;
            }
            enrichedItems.push({
                ...item,
                // @ts-ignore
                variant: {
                    ...variant,
                    // @ts-ignore
                    product: lodash_omit__WEBPACK_IMPORTED_MODULE_0___default()(product, "variants")
                }
            });
        }
        return enrichedItems;
    }, [
        cart?.items,
        lineItems,
        products
    ]);
    return items;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useEnrichedLineItems);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7156:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ useFeaturedProductsQuery),
/* harmony export */   "k": () => (/* binding */ useNavigationCollections)
/* harmony export */ });
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7590);
/* harmony import */ var _lib_util_get_precentage_diff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2702);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5756);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_config__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, medusa_react__WEBPACK_IMPORTED_MODULE_2__]);
([_lib_config__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__, medusa_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const fetchCollectionData = async ()=>{
    let collections = [];
    let offset = 0;
    let count = 1;
    do {
        await _lib_config__WEBPACK_IMPORTED_MODULE_0__/* .medusaClient.collections.list */ .pZ.collections.list({
            offset
        }).then(({ collections: newCollections , count: newCount  })=>{
            collections = [
                ...collections,
                ...newCollections
            ];
            count = newCount;
            offset = collections.length;
        }).catch((_)=>{
            count = 0;
        });
    }while (collections.length < count);
    return collections.map((c)=>({
            id: c.id,
            title: c.title
        }));
};
const useNavigationCollections = ()=>{
    const queryResults = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({
        queryFn: fetchCollectionData,
        queryKey: [
            "navigation_collections"
        ],
        staleTime: Infinity,
        refetchOnWindowFocus: false
    });
    return queryResults;
};
const fetchFeaturedProducts = async (cartId, region)=>{
    const products = await _lib_config__WEBPACK_IMPORTED_MODULE_0__/* .medusaClient.products.list */ .pZ.products.list({
        is_giftcard: false,
        limit: 4,
        cart_id: cartId
    }).then(({ products  })=>products).catch((_)=>[]);
    return products.filter((p)=>!!p.variants).map((p)=>{
        const variants = p.variants;
        const cheapestVariant = variants.reduce((acc, curr)=>{
            if (acc.calculated_price > curr.calculated_price) {
                return curr;
            }
            return acc;
        }, variants[0]);
        return {
            id: p.id,
            title: p.title,
            handle: p.handle,
            thumbnail: p.thumbnail,
            price: cheapestVariant ? {
                calculated_price: (0,medusa_react__WEBPACK_IMPORTED_MODULE_2__.formatAmount)({
                    amount: cheapestVariant.calculated_price,
                    region: region,
                    includeTaxes: false
                }),
                original_price: (0,medusa_react__WEBPACK_IMPORTED_MODULE_2__.formatAmount)({
                    amount: cheapestVariant.original_price,
                    region: region,
                    includeTaxes: false
                }),
                difference: (0,_lib_util_get_precentage_diff__WEBPACK_IMPORTED_MODULE_3__/* .getPercentageDiff */ .p)(cheapestVariant.original_price, cheapestVariant.calculated_price),
                price_type: cheapestVariant.calculated_price_type
            } : {
                calculated_price: "N/A",
                original_price: "N/A",
                difference: "N/A",
                price_type: "default"
            }
        };
    });
};
const useFeaturedProductsQuery = ()=>{
    const { cart  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_2__.useCart)();
    const queryResults = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)([
        "layout_featured_products",
        cart?.id,
        cart?.region
    ], ()=>fetchFeaturedProducts(cart?.id, cart?.region), {
        enabled: !!cart?.id && !!cart?.region,
        staleTime: Infinity,
        refetchOnWindowFocus: false
    });
    return queryResults;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9770:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ searchClient),
/* harmony export */   "t": () => (/* binding */ SEARCH_INDEX_NAME)
/* harmony export */ });
/* harmony import */ var _meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6335);
/* harmony import */ var _meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_0__);

const endpoint = "http://127.0.0.1:7700" || 0;
const apiKey =  false || "test_key";
const searchClient = (0,_meilisearch_instant_meilisearch__WEBPACK_IMPORTED_MODULE_0__.instantMeiliSearch)(endpoint, apiKey);
const SEARCH_INDEX_NAME = process.env.NEXT_PUBLIC_INDEX_NAME || "products" // If you want to use Algolia instead then uncomment the following lines, and delete the above lines
 // you should also install algoliasearch - yarn add algoliasearch
 // import algoliasearch from "algoliasearch/lite"
 // const appId = process.env.NEXT_PUBLIC_SEARCH_APP_ID || "test_app_id"
 // const apiKey = process.env.NEXT_PUBLIC_SEARCH_API_KEY || "test_key"
 // export const searchClient = algoliasearch(appId, apiKey)
 // export const SEARCH_INDEX_NAME =
 //   process.env.NEXT_PUBLIC_INDEX_NAME || "products"
;


/***/ }),

/***/ 2702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ getPercentageDiff)
/* harmony export */ });
const getPercentageDiff = (original, calculated)=>{
    const diff = original - calculated;
    const decrease = diff / original * 100;
    return decrease.toFixed();
};


/***/ }),

/***/ 1692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const repeat = (times)=>{
    return Array.from(Array(times).keys());
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (repeat);


/***/ }),

/***/ 3881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Hamburger = ({ setOpen  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "w-10 h-10 relative focus:outline-none",
        onClick: setOpen,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "sr-only",
                children: "Open main menu"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        "aria-hidden": "true",
                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("block absolute h-0.5 w-5 rounded-sm bg-current -translate-y-1.5 ")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        "aria-hidden": "true",
                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("block absolute  h-0.5 w-5 bg-current rounded-sm transform")
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        "aria-hidden": "true",
                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("block absolute  h-0.5 w-5 bg-current rounded-sm translate-y-1.5")
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hamburger);


/***/ }),

/***/ 2452:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const LineItemOptions = ({ variant  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "text-small-regular text-gray-700",
        children: variant.options.map((option)=>{
            const optionName = variant.product.options.find((opt)=>opt.id === option.option_id)?.title || "Option";
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                    children: [
                        optionName,
                        ": ",
                        option.value
                    ]
                })
            }, option.id);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineItemOptions);


/***/ }),

/***/ 2001:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_util_get_precentage_diff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2702);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5756);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([medusa_react__WEBPACK_IMPORTED_MODULE_2__]);
medusa_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const LineItemPrice = ({ item , region , style ="default"  })=>{
    const originalPrice = item.variant.original_price * item.quantity;
    const hasReducedPrice = (item.total || 0) < originalPrice;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col text-gray-700 text-right",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("text-base-regular", {
                    "text-rose-600": hasReducedPrice
                }),
                children: (0,medusa_react__WEBPACK_IMPORTED_MODULE_2__.formatAmount)({
                    amount: item.total || 0,
                    region: region,
                    includeTaxes: false
                })
            }),
            hasReducedPrice && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                        children: [
                            style === "default" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-gray-500",
                                children: "Original: "
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "line-through",
                                children: (0,medusa_react__WEBPACK_IMPORTED_MODULE_2__.formatAmount)({
                                    amount: originalPrice,
                                    region: region,
                                    includeTaxes: false
                                })
                            })
                        ]
                    }),
                    style === "default" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: "text-rose-600",
                        children: [
                            "-",
                            (0,_lib_util_get_precentage_diff__WEBPACK_IMPORTED_MODULE_3__/* .getPercentageDiff */ .p)(originalPrice, item.total || 0),
                            "%"
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LineItemPrice);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _lib_context_modal_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8245);
/* harmony import */ var _modules_common_icons_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7404);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Modal = ({ isOpen , close , size ="medium" , children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
        appear: true,
        show: isOpen,
        as: react__WEBPACK_IMPORTED_MODULE_5__.Fragment,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
            as: "div",
            className: "relative z-[75]",
            onClose: close,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                    as: react__WEBPACK_IMPORTED_MODULE_5__.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "fixed inset-0 bg-gray-700 bg-opacity-75 backdrop-blur-sm"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex min-h-full h-full items-center justify-center p-4 text-center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_5__.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Panel, {
                                className: clsx__WEBPACK_IMPORTED_MODULE_4___default()("flex flex-col justify-start w-full h-full transform overflow-hidden bg-white p-10 text-left align-middle shadow-xl transition-all max-h-[65vh]", {
                                    "max-w-md": size === "small",
                                    "max-w-xl": size === "medium",
                                    "max-w-3xl": size === "large"
                                }),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_context_modal_context__WEBPACK_IMPORTED_MODULE_2__/* .ModalProvider */ .D, {
                                    close: close,
                                    children: children
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
};
const Title = ({ children  })=>{
    const { close  } = (0,_lib_context_modal_context__WEBPACK_IMPORTED_MODULE_2__/* .useModal */ .d)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Title, {
        className: "flex items-center justify-between",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-large-semi",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: close,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_x__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        size: 20
                    })
                })
            })
        ]
    });
};
const Description = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Description, {
        className: "flex text-small-regular text-gray-700 items-center justify-center pt-2 pb-4 h-full",
        children: children
    });
};
const Body = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex-1",
        children: children
    });
};
const Footer = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "flex items-center justify-end gap-x-4",
        children: children
    });
};
Modal.Title = Title;
Modal.Description = Description;
Modal.Body = Body;
Modal.Footer = Footer;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Modal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5421:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ underline_link)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/modules/common/icons/arrow-right.tsx


const ArrowRight = ({ size ="20" , color ="currentColor" , ...attributes })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...attributes,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M3.125 10H16.25",
                stroke: color,
                strokeWidth: "1.5",
                strokeLinecap: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M11.875 5L16.875 10L11.875 15",
                stroke: color,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
/* harmony default export */ const arrow_right = (ArrowRight);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/modules/common/components/underline-link/index.tsx



const UnderlineLink = ({ href , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex items-start",
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: href,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                className: "flex items-center text-large-regular border-b border-current gap-x-4 py-2 transition-all duration-300 group hover:pl-4 hover:pr-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(arrow_right, {
                        size: 20,
                        className: "transition-all group-hover:ml-2 duration-300"
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const underline_link = (UnderlineLink);


/***/ }),

/***/ 8312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const Search = ({ size ="16" , color ="currentColor" , ...attributes })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...attributes,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M20.4696 21.5303C20.7625 21.8232 21.2373 21.8232 21.5302 21.5303C21.8231 21.2374 21.8231 20.7626 21.5302 20.4697L20.4696 21.5303ZM17.1802 16.1197C16.8873 15.8268 16.4125 15.8268 16.1196 16.1197C15.8267 16.4126 15.8267 16.8874 16.1196 17.1803L17.1802 16.1197ZM18.25 11C18.25 15.0041 15.0041 18.25 11 18.25V19.75C15.8325 19.75 19.75 15.8325 19.75 11H18.25ZM11 18.25C6.99594 18.25 3.75 15.0041 3.75 11H2.25C2.25 15.8325 6.16751 19.75 11 19.75V18.25ZM3.75 11C3.75 6.99594 6.99594 3.75 11 3.75V2.25C6.16751 2.25 2.25 6.16751 2.25 11H3.75ZM11 3.75C15.0041 3.75 18.25 6.99594 18.25 11H19.75C19.75 6.16751 15.8325 2.25 11 2.25V3.75ZM21.5302 20.4697L17.1802 16.1197L16.1196 17.1803L20.4696 21.5303L21.5302 20.4697Z",
            fill: color
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);


/***/ }),

/***/ 7404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const X = ({ size ="20" , color ="currentColor" , ...attributes })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...attributes,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M15 5L5 15",
                stroke: color,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M5 5L15 15",
                stroke: color,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (X);


/***/ }),

/***/ 5918:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _lib_context_cart_dropdown_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7052);
/* harmony import */ var _lib_context_store_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6571);
/* harmony import */ var _lib_hooks_use_enrich_line_items__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4551);
/* harmony import */ var _modules_common_components_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7391);
/* harmony import */ var _modules_common_components_line_item_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2452);
/* harmony import */ var _modules_common_components_line_item_price__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2001);
/* harmony import */ var _modules_common_icons_trash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6037);
/* harmony import */ var _modules_products_components_thumbnail__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3628);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5756);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_12__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_context_store_context__WEBPACK_IMPORTED_MODULE_3__, _lib_hooks_use_enrich_line_items__WEBPACK_IMPORTED_MODULE_4__, _modules_common_components_line_item_price__WEBPACK_IMPORTED_MODULE_7__, medusa_react__WEBPACK_IMPORTED_MODULE_10__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_context_store_context__WEBPACK_IMPORTED_MODULE_3__, _lib_hooks_use_enrich_line_items__WEBPACK_IMPORTED_MODULE_4__, _modules_common_components_line_item_price__WEBPACK_IMPORTED_MODULE_7__, medusa_react__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













const CartDropdown = ()=>{
    const { cart , totalItems  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_10__.useCart)();
    const items = (0,_lib_hooks_use_enrich_line_items__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)();
    const { deleteItem  } = (0,_lib_context_store_context__WEBPACK_IMPORTED_MODULE_3__/* .useStore */ .o)();
    const { state , open , close  } = (0,_lib_context_cart_dropdown_context__WEBPACK_IMPORTED_MODULE_2__/* .useCartDropdown */ .qt)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "h-full z-50",
        onMouseEnter: open,
        onMouseLeave: close,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
            className: "relative h-full",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                    href: "/cart",
                    passHref: true,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Button, {
                        className: "h-full",
                        children: `My Bag (${totalItems})`
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                    show: state,
                    as: react__WEBPACK_IMPORTED_MODULE_12__.Fragment,
                    enter: "transition ease-out duration-200",
                    enterFrom: "opacity-0 translate-y-1",
                    enterTo: "opacity-100 translate-y-0",
                    leave: "transition ease-in duration-150",
                    leaveFrom: "opacity-100 translate-y-0",
                    leaveTo: "opacity-0 translate-y-1",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Popover.Panel, {
                        static: true,
                        className: "hidden small:block absolute top-[calc(100%+1px)] right-0 bg-white border-x border-b border-gray-200 w-[382px] text-gray-900",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "p-4 flex items-center justify-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "text-large-semi",
                                    children: "Shopping Bag"
                                })
                            }),
                            cart && items?.length ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "overflow-y-scroll max-h-[402px] px-4 grid grid-cols-1 gap-y-8 no-scrollbar",
                                        children: items.sort((a, b)=>{
                                            return a.created_at > b.created_at ? -1 : 1;
                                        }).map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "grid grid-cols-[122px_1fr] gap-x-4",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "w-[122px]",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_products_components_thumbnail__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                                            thumbnail: item.thumbnail,
                                                            size: "full"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex flex-col justify-between flex-1",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "flex flex-col flex-1",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    className: "flex items-start justify-between",
                                                                    children: [
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                    className: "text-base-regular overflow-ellipsis overflow-hidden whitespace-nowrap mr-4 w-[130px]",
                                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                                                        href: `/products/${item.variant.product.handle}`,
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                            children: item.title
                                                                                        })
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_line_item_options__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                                                    variant: item.variant
                                                                                }),
                                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                                    children: [
                                                                                        "Quantity: ",
                                                                                        item.quantity
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "flex justify-end",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_line_item_price__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                                region: cart.region,
                                                                                item: item,
                                                                                style: "tight"
                                                                            })
                                                                        })
                                                                    ]
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "flex items-end justify-between text-small-regular flex-1",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                        className: "flex items-center gap-x-1 text-gray-500",
                                                                        onClick: ()=>deleteItem(item.id),
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_trash__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                                size: 14
                                                                            }),
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                children: "Remove"
                                                                            })
                                                                        ]
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, item.id))
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "p-4 flex flex-col gap-y-4 text-small-regular",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                        className: "text-gray-700 font-semibold",
                                                        children: [
                                                            "Subtotal",
                                                            " ",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                className: "font-normal",
                                                                children: "(incl. taxes)"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "text-large-semi",
                                                        children: (0,medusa_react__WEBPACK_IMPORTED_MODULE_10__.formatAmount)({
                                                            amount: cart.subtotal || 0,
                                                            region: cart.region,
                                                            includeTaxes: false
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                href: "/cart",
                                                passHref: true,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                        children: "Go to bag"
                                                    })
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex py-16 flex-col gap-y-4 items-center justify-center",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "bg-gray-900 text-small-regular flex items-center justify-center w-6 h-6 rounded-full text-white",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                children: "0"
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            children: "Your shopping bag is empty."
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_11___default()), {
                                                href: "/store",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "sr-only",
                                                            children: "Go to all products page"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_button__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                            onClick: close,
                                                            children: "Explore products"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartDropdown);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2253:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _lib_context_store_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6571);
/* harmony import */ var _lib_hooks_use_toggle_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3721);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_country_flag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5534);
/* harmony import */ var react_country_flag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_country_flag__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_context_store_context__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_4__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__, _lib_context_store_context__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const CountrySelect = ()=>{
    const { countryCode , setRegion  } = (0,_lib_context_store_context__WEBPACK_IMPORTED_MODULE_2__/* .useStore */ .o)();
    const { regions  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_4__.useRegions)();
    const { 0: current , 1: setCurrent  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(undefined);
    const { state , open , close  } = (0,_lib_hooks_use_toggle_state__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const options = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>{
        return regions?.map((r)=>{
            return r.countries.map((c)=>({
                    country: c.iso_2,
                    region: r.id,
                    label: c.display_name
                }));
        }).flat();
    }, [
        regions
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (countryCode) {
            const option = options?.find((o)=>o.country === countryCode);
            setCurrent(option);
        }
    }, [
        countryCode,
        options
    ]);
    const handleChange = (option)=>{
        setRegion(option.region, option.country);
        close();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onMouseEnter: open,
        onMouseLeave: close,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox, {
            onChange: handleChange,
            defaultValue: countryCode ? options?.find((o)=>o.country === countryCode) : undefined,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox.Button, {
                    className: "py-1 w-full",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-small-regular flex items-center gap-x-2 xsmall:justify-end",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Shipping to:"
                            }),
                            current && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                className: "text-small-semi flex items-center gap-x-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_country_flag__WEBPACK_IMPORTED_MODULE_6___default()), {
                                        svg: true,
                                        style: {
                                            width: "16px",
                                            height: "16px"
                                        },
                                        countryCode: current.country
                                    }),
                                    current.label
                                ]
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-full min-w-[316px]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
                        show: state,
                        as: react__WEBPACK_IMPORTED_MODULE_5__.Fragment,
                        leave: "transition ease-in duration-150",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox.Options, {
                            className: "absolute -bottom-[calc(100%-36px)] left-0 xsmall:left-auto xsmall:right-0 max-h-[442px] overflow-y-scroll z-[900] bg-white drop-shadow-md text-small-regular uppercase text-black no-scrollbar",
                            static: true,
                            children: options?.map((o, index)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Listbox.Option, {
                                    value: o,
                                    className: "py-2 hover:bg-gray-200 px-3 cursor-pointer flex items-center gap-x-2",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_country_flag__WEBPACK_IMPORTED_MODULE_6___default()), {
                                            svg: true,
                                            style: {
                                                width: "16px",
                                                height: "16px"
                                            },
                                            countryCode: o.country
                                        }),
                                        " ",
                                        o.label
                                    ]
                                }, index);
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountrySelect);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6492:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1185);
/* harmony import */ var _lib_hooks_use_layout_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7156);
/* harmony import */ var _lib_util_repeat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1692);
/* harmony import */ var _modules_products_components_product_preview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8948);
/* harmony import */ var _modules_skeletons_components_skeleton_product_preview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5986);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6517);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _lib_hooks_use_layout_data__WEBPACK_IMPORTED_MODULE_3__]);
([_headlessui_react__WEBPACK_IMPORTED_MODULE_2__, _lib_hooks_use_layout_data__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const DropdownMenu = ()=>{
    const { 0: open , 1: setOpen  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { data: collections , isLoading: loadingCollections  } = (0,_lib_hooks_use_layout_data__WEBPACK_IMPORTED_MODULE_3__/* .useNavigationCollections */ .k)();
    const { data: products , isLoading: loadingProducts  } = (0,_lib_hooks_use_layout_data__WEBPACK_IMPORTED_MODULE_3__/* .useFeaturedProductsQuery */ .c)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        onMouseEnter: ()=>setOpen(true),
        onMouseLeave: ()=>setOpen(false),
        className: "h-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex items-center h-full",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover, {
                className: "h-full flex",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                            href: "/shop",
                            passHref: true,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "relative flex h-full",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Button, {
                                    className: clsx__WEBPACK_IMPORTED_MODULE_6___default()("relative h-full flex items-center transition-all ease-out duration-200"),
                                    onClick: ()=>push("/store"),
                                    children: "Store"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Transition, {
                            show: open,
                            as: (react__WEBPACK_IMPORTED_MODULE_1___default().Fragment),
                            enter: "transition ease-out duration-200",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "transition ease-in duration-150",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_2__.Popover.Panel, {
                                static: true,
                                className: "absolute top-full inset-x-0 text-sm text-gray-700 z-30 border-y border-gray-200",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "relative bg-white py-8",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-start content-container",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col flex-1 max-w-[30%]",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                        className: "text-base-semi text-gray-900 mb-4",
                                                        children: "Collections"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex items-start",
                                                        children: [
                                                            collections && (0,lodash__WEBPACK_IMPORTED_MODULE_7__.chunk)(collections, 6).map((chunk, index)=>{
                                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                    className: "min-w-[152px] max-w-[200px] pr-4",
                                                                    children: chunk.map((collection)=>{
                                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            className: "pb-3",
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                                                href: `/collections/${collection.id}`,
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                    onClick: ()=>setOpen(false),
                                                                                    children: collection.title
                                                                                })
                                                                            })
                                                                        }, collection.id);
                                                                    })
                                                                }, index);
                                                            }),
                                                            loadingCollections && (0,_lib_util_repeat__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(6).map((index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "w-12 h-4 bg-gray-100 animate-pulse"
                                                                }, index))
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex-1",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "grid grid-cols-3 gap-4",
                                                    children: [
                                                        products?.slice(0, 3).map((product)=>/*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_modules_products_components_product_preview__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                                ...product,
                                                                key: product.id
                                                            })),
                                                        loadingProducts && (0,_lib_util_repeat__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(3).map((index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_skeletons_components_skeleton_product_preview__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}, index))
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DropdownMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9099:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_common_components_underline_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);



const FooterCTA = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "bg-amber-100 w-full",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "content-container flex flex-col-reverse gap-y-8 small:flex-row small:items-center justify-between py-16 relative",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                            className: "text-2xl-semi",
                            children: "Shop the latest styles"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "mt-6",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_underline_link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                href: "/store",
                                children: "Explore products"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-full aspect-square small:w-[35%] small:aspect-[28/36]",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: "/cta_three.jpg",
                        alt: "",
                        layout: "fill",
                        objectFit: "cover",
                        className: "absolute inset-0"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterCTA);


/***/ }),

/***/ 2291:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5756);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _country_select__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2253);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([medusa_react__WEBPACK_IMPORTED_MODULE_2__, _country_select__WEBPACK_IMPORTED_MODULE_4__]);
([medusa_react__WEBPACK_IMPORTED_MODULE_2__, _country_select__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const FooterNav = ()=>{
    const { collections  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_2__.useCollections)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "content-container flex flex-col gap-y-8 pt-16 pb-8",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col gap-y-6 xsmall:flex-row items-start justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "text-xl-semi uppercase",
                                children: "Acme"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-small-regular grid grid-cols-2 gap-x-16",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col gap-y-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-base-semi",
                                        children: "Collections"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("grid grid-cols-1 gap-y-2", {
                                            "grid-cols-2": (collections?.length || 0) > 4
                                        }),
                                        children: collections?.map((c)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: `/collections/${c.id}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: c.title
                                                    })
                                                })
                                            }, c.id))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-col gap-y-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "text-base-semi",
                                        children: "Medusa"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                                        className: "grid grid-cols-1 gap-y-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://github.com/medusajs",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "GitHub"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://docs.medusajs.com",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "Documentation"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    href: "https://github.com/medusajs/nextjs-starter-medusa",
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    children: "Source code"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col-reverse gap-y-4 justify-center xsmall:items-center xsmall:flex-row xsmall:items-end xsmall:justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-xsmall-regular text-gray-500",
                        children: "\xa9 Copyright 2022 ACME"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "min-w-[316px] flex xsmall:justify-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_country_select__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FooterNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7494:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_layout_components_footer_cta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9099);
/* harmony import */ var _modules_layout_components_footer_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2291);
/* harmony import */ var _modules_layout_components_medusa_cta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1436);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_layout_components_footer_nav__WEBPACK_IMPORTED_MODULE_2__]);
_modules_layout_components_footer_nav__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Footer = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_layout_components_footer_cta__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_layout_components_footer_nav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_layout_components_medusa_cta__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7688:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_layout_templates_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7494);
/* harmony import */ var _modules_layout_templates_nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9028);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_layout_templates_footer__WEBPACK_IMPORTED_MODULE_1__, _modules_layout_templates_nav__WEBPACK_IMPORTED_MODULE_2__]);
([_modules_layout_templates_footer__WEBPACK_IMPORTED_MODULE_1__, _modules_layout_templates_nav__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_layout_templates_nav__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: "relative",
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_layout_templates_footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9028:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_mobile_menu_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3300);
/* harmony import */ var _modules_common_components_hamburger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3881);
/* harmony import */ var _modules_layout_components_cart_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5918);
/* harmony import */ var _modules_layout_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6492);
/* harmony import */ var _modules_mobile_menu_templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5671);
/* harmony import */ var _modules_search_templates_desktop_search_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3116);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_layout_components_cart_dropdown__WEBPACK_IMPORTED_MODULE_3__, _modules_layout_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__, _modules_mobile_menu_templates__WEBPACK_IMPORTED_MODULE_5__, _modules_search_templates_desktop_search_modal__WEBPACK_IMPORTED_MODULE_6__]);
([_modules_layout_components_cart_dropdown__WEBPACK_IMPORTED_MODULE_3__, _modules_layout_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__, _modules_mobile_menu_templates__WEBPACK_IMPORTED_MODULE_5__, _modules_search_templates_desktop_search_modal__WEBPACK_IMPORTED_MODULE_6__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const Nav = ()=>{
    const { pathname  } = (0,next_router__WEBPACK_IMPORTED_MODULE_9__.useRouter)();
    const { 0: isHome , 1: setIsHome  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const { 0: isScrolled , 1: setIsScrolled  } = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    //useEffect that detects if window is scrolled > 5px on the Y axis
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        if (isHome) {
            const detectScrollY = ()=>{
                if (window.scrollY > 5) {
                    setIsScrolled(true);
                } else {
                    setIsScrolled(false);
                }
            };
            window.addEventListener("scroll", detectScrollY);
            return ()=>{
                window.removeEventListener("scroll", detectScrollY);
            };
        }
    }, [
        isHome
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        pathname === "/" ? setIsHome(true) : setIsHome(false);
    }, [
        pathname
    ]);
    const { toggle  } = (0,_lib_context_mobile_menu_context__WEBPACK_IMPORTED_MODULE_1__/* .useMobileMenu */ .Sn)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_7___default()("sticky top-0 inset-x-0 z-50 group", {
            "!fixed": isHome
        }),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("header", {
            className: clsx__WEBPACK_IMPORTED_MODULE_7___default()("relative h-16 px-8 mx-auto transition-colors bg-transparent border-b border-transparent duration-200 group-hover:bg-white group-hover:border-gray-200", {
                "!bg-white !border-gray-200": !isHome || isScrolled
            }),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("nav", {
                    className: clsx__WEBPACK_IMPORTED_MODULE_7___default()("text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200", {
                        "text-white group-hover:text-gray-900": isHome && !isScrolled
                    }),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-1 basis-0 h-full flex items-center",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "block small:hidden",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_hamburger__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        setOpen: toggle
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "hidden small:block h-full",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_layout_components_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex items-center h-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                href: "/",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    className: "text-xl-semi uppercase",
                                    children: "Acme"
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center gap-x-6 h-full flex-1 basis-0 justify-end",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "hidden small:flex items-center gap-x-6 h-full",
                                    children: [
                                        process.env.FEATURE_SEARCH_ENABLED && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_search_templates_desktop_search_modal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            href: "/account",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: "Account"
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_layout_components_cart_dropdown__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_mobile_menu_templates__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {})
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3090:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1185);
/* harmony import */ var _lib_context_mobile_menu_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3300);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_headlessui_react__WEBPACK_IMPORTED_MODULE_1__]);
_headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Container = ({ children  })=>{
    const { state , close  } = (0,_lib_context_mobile_menu_context__WEBPACK_IMPORTED_MODULE_2__/* .useMobileMenu */ .Sn)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Root, {
        show: state,
        as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog, {
            as: "div",
            className: "fixed inset-0 flex z-50",
            onClose: close,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                    as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                    enter: "ease-in-out duration-500",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in-out duration-500",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Dialog.Overlay, {
                        className: "absolute inset-0 bg-gray-700 bg-opacity-75 transition-opacity backdrop-blur-sm"
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition.Child, {
                    as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
                    enter: "transition ease-in-out duration-500 transform",
                    enterFrom: "-translate-x-full",
                    enterTo: "translate-x-0",
                    leave: "transition ease-in-out duration-500 transform",
                    leaveFrom: "translate-x-0",
                    leaveTo: "-translate-x-full",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "absolute inset-0 overflow-hidden trans",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "pointer-events-none fixed inset-y-0 right-left flex max-w-full",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "relative w-screen pointer-events-auto bg-white text-gray-900 flex flex-col overflow-y-auto",
                                children: children
                            })
                        })
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4856:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_mobile_menu_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3300);
/* harmony import */ var _lib_context_store_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6571);
/* harmony import */ var _lib_hooks_use_country_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5386);
/* harmony import */ var _modules_common_icons_chevron_down__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7001);
/* harmony import */ var _modules_common_icons_x__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7404);
/* harmony import */ var react_country_flag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5534);
/* harmony import */ var react_country_flag__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_country_flag__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_store_context__WEBPACK_IMPORTED_MODULE_2__, _lib_hooks_use_country_options__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_context_store_context__WEBPACK_IMPORTED_MODULE_2__, _lib_hooks_use_country_options__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const CountryMenu = ()=>{
    const { close , screen: [_, setScreen] ,  } = (0,_lib_context_mobile_menu_context__WEBPACK_IMPORTED_MODULE_1__/* .useMobileMenu */ .Sn)();
    const { setRegion  } = (0,_lib_context_store_context__WEBPACK_IMPORTED_MODULE_2__/* .useStore */ .o)();
    const countryOptions = (0,_lib_hooks_use_country_options__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const handleSelectCountry = (regionId, countryCode)=>{
        setRegion(regionId, countryCode);
        close();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col flex-1",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between w-full border-b border-gray-200 py-4 px-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-1 basis-0",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: "flex items-center gap-x-2",
                            onClick: ()=>setScreen("main"),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_chevron_down__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                className: "rotate-90 text-gray-700",
                                size: 20
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-large-regular",
                            children: "Shipping To"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-1 basis-0 flex justify-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: close,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_x__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                size: 20
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "py-4",
                    children: countryOptions?.map((option)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "px-8 py-4 flex items-center justify-between w-full border-b border-gray-200",
                                onClick: ()=>handleSelectCountry(option.region, option.country),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center gap-x-4",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_country_flag__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                svg: true,
                                                countryCode: option.country
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: "text-base-regular",
                                                children: option.label
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_chevron_down__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        size: 16,
                                        className: "-rotate-90"
                                    })
                                ]
                            })
                        }, option.country))
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountryMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 642:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_mobile_menu_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3300);
/* harmony import */ var _lib_context_store_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6571);
/* harmony import */ var _lib_hooks_use_country_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5386);
/* harmony import */ var _modules_common_icons_chevron_down__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7001);
/* harmony import */ var _modules_common_icons_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8312);
/* harmony import */ var _modules_common_icons_x__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7404);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5756);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_country_flag__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5534);
/* harmony import */ var react_country_flag__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_country_flag__WEBPACK_IMPORTED_MODULE_9__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_context_store_context__WEBPACK_IMPORTED_MODULE_2__, _lib_hooks_use_country_options__WEBPACK_IMPORTED_MODULE_3__, medusa_react__WEBPACK_IMPORTED_MODULE_7__]);
([_lib_context_store_context__WEBPACK_IMPORTED_MODULE_2__, _lib_hooks_use_country_options__WEBPACK_IMPORTED_MODULE_3__, medusa_react__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const MainMenu = ()=>{
    const { collections  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_7__.useCollections)();
    const { customer  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_7__.useMeCustomer)();
    const { countryCode  } = (0,_lib_context_store_context__WEBPACK_IMPORTED_MODULE_2__/* .useStore */ .o)();
    const countries = (0,_lib_hooks_use_country_options__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const { close , screen: [_, setScreen] ,  } = (0,_lib_context_mobile_menu_context__WEBPACK_IMPORTED_MODULE_1__/* .useMobileMenu */ .Sn)();
    const setScreenCountry = ()=>setScreen("country");
    const setScreenSearch = ()=>setScreen("search");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex flex-col flex-1",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between w-full border-b border-gray-200 py-4 px-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-1 basis-0",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                            className: "flex items-center gap-x-2",
                            onClick: setScreenCountry,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_country_flag__WEBPACK_IMPORTED_MODULE_9___default()), {
                                    countryCode: countryCode || "us",
                                    svg: true
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_chevron_down__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-xl-semi uppercase",
                            children: "Acme"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex-1 basis-0 flex justify-end",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: close,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_x__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                size: 20
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-6 flex-1 flex flex-col justify-between p-6",
                children: [
                    process.env.FEATURE_SEARCH_ENABLED && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                        className: "bg-gray-50 flex items-center px-4 py-2 gap-x-2 text-gray-500",
                        onClick: setScreenSearch,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_search__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                size: 24
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                placeholder: "Search products",
                                className: "text-base-regular",
                                children: "Search products"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col flex-1 text-large-regular text-gray-900",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                            className: "flex flex-col gap-y-2",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                    className: "bg-gray-50 p-4",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                        href: "/store",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                className: "flex items-center justify-between w-full",
                                                onClick: close,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "sr-only",
                                                        children: "Go to Store"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        children: "Store"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_chevron_down__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                        className: "-rotate-90"
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                }),
                                collections ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: collections.map((collection)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                            className: "bg-gray-50 p-4",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                href: `/collections/${collection.id}`,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                        className: "flex items-center justify-between w-full",
                                                        onClick: close,
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                                className: "sr-only",
                                                                children: [
                                                                    "Go to ",
                                                                    collection.title,
                                                                    " collection"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                children: collection.title
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_chevron_down__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                                className: "-rotate-90"
                                                            })
                                                        ]
                                                    })
                                                })
                                            })
                                        }, collection.id))
                                }) : null
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col gap-y-8 text-small-regular",
                            children: [
                                !customer ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-y-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-gray-700 uppercase",
                                            children: "Account"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            href: `/account/login`,
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    className: "flex items-center justify-between border-b border-gray-200 py-2 w-full",
                                                    onClick: close,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "sr-only",
                                                            children: "Go to sign in page"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "normal-case",
                                                            children: "Sign in"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_chevron_down__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                            className: "-rotate-90"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-y-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-gray-700 uppercase",
                                            children: "Signed in as"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_8___default()), {
                                            href: `/account`,
                                            passHref: true,
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                    className: "flex items-center justify-between border-b border-gray-200 py-2 w-full",
                                                    onClick: close,
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "sr-only",
                                                            children: "Go to account page"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "normal-case",
                                                            children: customer.email
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_chevron_down__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                            className: "-rotate-90"
                                                        })
                                                    ]
                                                })
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex flex-col gap-y-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "text-gray-700 uppercase",
                                            children: "Delivery"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                            className: "flex items-center justify-between border-b border-gray-200 py-2",
                                            onClick: setScreenCountry,
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: "sr-only",
                                                    children: "Click to select shipping country"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "flex items-center gap-x-2",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_country_flag__WEBPACK_IMPORTED_MODULE_9___default()), {
                                                            countryCode: countryCode || "us",
                                                            svg: true
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                            className: "normal-case",
                                                            children: [
                                                                "Shipping to",
                                                                " ",
                                                                countries?.find((c)=>c.country === countryCode)?.label
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_chevron_down__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                    className: "-rotate-90"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1861:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_mobile_menu_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3300);
/* harmony import */ var _lib_search_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9770);
/* harmony import */ var _modules_common_icons_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8312);
/* harmony import */ var _modules_search_components_mobile_hit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2154);
/* harmony import */ var _modules_search_components_mobile_hits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2521);
/* harmony import */ var _modules_search_components_search_box__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9083);
/* harmony import */ var react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6269);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_search_components_mobile_hits__WEBPACK_IMPORTED_MODULE_5__, _modules_search_components_search_box__WEBPACK_IMPORTED_MODULE_6__, react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_7__]);
([_modules_search_components_mobile_hits__WEBPACK_IMPORTED_MODULE_5__, _modules_search_components_search_box__WEBPACK_IMPORTED_MODULE_6__, react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const SearchMenu = ()=>{
    const { screen: [_, setScreen] ,  } = (0,_lib_context_mobile_menu_context__WEBPACK_IMPORTED_MODULE_1__/* .useMobileMenu */ .Sn)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_7__.InstantSearch, {
        searchClient: _lib_search_client__WEBPACK_IMPORTED_MODULE_2__/* .searchClient */ .J,
        indexName: _lib_search_client__WEBPACK_IMPORTED_MODULE_2__/* .SEARCH_INDEX_NAME */ .t,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "flex flex-col flex-1",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-between w-full border-b border-gray-200 py-4 px-6",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-1 basis-0",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center gap-x-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_search__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        className: "text-gray-500",
                                        size: 20
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_search_components_search_box__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {})
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex justify-end ml-4",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                onClick: ()=>setScreen("main"),
                                className: "text-small-semi uppercase",
                                children: "Cancel"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "py-4 px-8",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_search_components_mobile_hits__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        hitComponent: _modules_search_components_mobile_hit__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5671:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_mobile_menu_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3300);
/* harmony import */ var _modules_mobile_menu_components_container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3090);
/* harmony import */ var _modules_mobile_menu_components_main_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(642);
/* harmony import */ var _components_country_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4856);
/* harmony import */ var _components_search_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1861);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_mobile_menu_components_container__WEBPACK_IMPORTED_MODULE_2__, _modules_mobile_menu_components_main_menu__WEBPACK_IMPORTED_MODULE_3__, _components_country_menu__WEBPACK_IMPORTED_MODULE_4__, _components_search_menu__WEBPACK_IMPORTED_MODULE_5__]);
([_modules_mobile_menu_components_container__WEBPACK_IMPORTED_MODULE_2__, _modules_mobile_menu_components_main_menu__WEBPACK_IMPORTED_MODULE_3__, _components_country_menu__WEBPACK_IMPORTED_MODULE_4__, _components_search_menu__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const MobileMenu = ()=>{
    const { screen: [currentScreen] ,  } = (0,_lib_context_mobile_menu_context__WEBPACK_IMPORTED_MODULE_1__/* .useMobileMenu */ .Sn)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_mobile_menu_components_container__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "flex flex-col flex-1",
            children: (()=>{
                switch(currentScreen){
                    case "country":
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_country_menu__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {});
                    case "search":
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_search_menu__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {});
                    default:
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_mobile_menu_components_main_menu__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {});
                }
            })()
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileMenu);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _thumbnail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3628);




const ProductPreview = ({ title , handle , thumbnail , price  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
        href: `/products/${handle}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_thumbnail__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        thumbnail: thumbnail,
                        size: "full"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-base-regular mt-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: title
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex items-center gap-x-2 mt-1",
                                children: price ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                    children: [
                                        price.price_type === "sale" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "line-through text-gray-500",
                                            children: price.original_price
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("font-semibold", {
                                                "text-rose-500": price.price_type === "sale"
                                            }),
                                            children: price.calculated_price
                                        })
                                    ]
                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-20 h-6 animate-pulse bg-gray-100"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPreview);


/***/ }),

/***/ 3628:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ thumbnail)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/modules/common/icons/placeholder-image.tsx


const PlaceholderImage = ({ size ="20" , color ="currentColor" , ...attributes })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
        width: size,
        height: size,
        viewBox: "0 0 20 20",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...attributes,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M15.3141 3.16699H4.68453C3.84588 3.16699 3.16602 3.84685 3.16602 4.6855V15.3151C3.16602 16.1537 3.84588 16.8336 4.68453 16.8336H15.3141C16.1527 16.8336 16.8326 16.1537 16.8326 15.3151V4.6855C16.8326 3.84685 16.1527 3.16699 15.3141 3.16699Z",
                stroke: color,
                strokeWidth: "1.53749",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M7.91699 9.16699C8.60735 9.16699 9.16699 8.60735 9.16699 7.91699C9.16699 7.22664 8.60735 6.66699 7.91699 6.66699C7.22664 6.66699 6.66699 7.22664 6.66699 7.91699C6.66699 8.60735 7.22664 9.16699 7.91699 9.16699Z",
                stroke: color,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M16.6667 12.5756L13.0208 9.1665L5 16.6665",
                stroke: color,
                strokeWidth: "1.5",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
/* harmony default export */ const placeholder_image = (PlaceholderImage);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__(8103);
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/modules/products/components/thumbnail/index.tsx





const Thumbnail = ({ thumbnail , images , size ="small" ,  })=>{
    const initialImage = thumbnail || images?.[0]?.url;
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_clsx_default()("relative aspect-[29/34]", {
            "w-[180px]": size === "small",
            "w-[290px]": size === "medium",
            "w-[440px]": size === "large",
            "w-full": size === "full"
        }),
        children: /*#__PURE__*/ jsx_runtime_.jsx(ImageOrPlaceholder, {
            image: initialImage,
            size: size
        })
    });
};
const ImageOrPlaceholder = ({ image , size  })=>{
    return image ? /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
        src: image,
        alt: "Thumbnail",
        layout: "fill",
        objectFit: "cover",
        objectPosition: "center",
        className: "absolute inset-0",
        draggable: false
    }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full h-full absolute inset-0 bg-gray-100 flex items-center justify-center",
        children: /*#__PURE__*/ jsx_runtime_.jsx(placeholder_image, {
            size: size === "small" ? 16 : 24
        })
    });
};
/* harmony default export */ const thumbnail = (Thumbnail);


/***/ }),

/***/ 2281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_modal_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8245);
/* harmony import */ var _modules_search_components_hit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3884);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




const DesktopHit = ({ hit  })=>{
    const { close  } = (0,_lib_context_modal_context__WEBPACK_IMPORTED_MODULE_1__/* .useModal */ .d)();
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const go = ()=>{
        push(`/products/${hit.handle}`);
        close();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "w-full text-left",
        onClick: go,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_search_components_hit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            hit: hit
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesktopHit);


/***/ }),

/***/ 1307:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6269);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_3__]);
react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const DesktopHits = ({ hitComponent: Hit , className , ...props })=>{
    const { hits  } = (0,react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_3__.useHits)(props);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: clsx__WEBPACK_IMPORTED_MODULE_1___default()("transition-[max-height,opacity] duration-300 ease-in-out overflow-hidden", className, {
            "max-h-[1000px] opacity-100": !!hits.length,
            "max-h-0 opacity-0": !hits.length
        }),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "grid grid-cols-1",
            children: hits.map((hit, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    className: "list-none",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Hit, {
                        hit: hit
                    })
                }, index))
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesktopHits);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_products_components_thumbnail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3628);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



const Hit = ({ hit  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "grid grid-cols-[86px_1fr] gap-4 w-full",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_products_components_thumbnail__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                thumbnail: hit.thumbnail,
                size: "full"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex flex-col justify-between",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col",
                    children: [
                        hit.collection_id && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: `/collections/${hit.collection_id}`,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                className: "text-small-regular text-gray-500",
                                children: hit.collection_handle
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-base-regular",
                            children: hit.title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "text-small-regular text-gray-700",
                            children: hit.description
                        })
                    ]
                })
            })
        ]
    }, hit.id);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hit);


/***/ }),

/***/ 2154:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_context_mobile_menu_context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3300);
/* harmony import */ var _modules_search_components_hit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3884);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




const MobileHit = ({ hit  })=>{
    const { close  } = (0,_lib_context_mobile_menu_context__WEBPACK_IMPORTED_MODULE_1__/* .useMobileMenu */ .Sn)();
    const { push  } = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const go = ()=>{
        push(`/products/${hit.handle}`);
        close();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: "w-full text-left",
        onClick: go,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_search_components_hit__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            hit: hit
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileHit);


/***/ }),

/***/ 2521:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6269);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_2__]);
react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const MobileHits = ({ hitComponent: Hit , className , ...props })=>{
    const { hits  } = (0,react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_2__.useHits)(props);
    const { query  } = (0,react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_2__.useSearchBox)();
    // If the query is empty, we don't want to show the initial hits
    if (!!query === false || !hits.length) {
        return null;
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: className,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-small-regular uppercase text-gray-700",
                children: "Results"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1 py-4",
                children: hits.map((hit, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        className: "list-none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Hit, {
                            hit: hit
                        })
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileHits);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4728:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6269);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__]);
react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const SearchBoxWrapper = ({ children , placeholder ="Search products..." , ...rest })=>{
    const { query , refine , isSearchStalled  } = (0,react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_1__.useSearchBox)(rest);
    const { 0: value , 1: setValue  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(query);
    const inputRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    const onReset = ()=>{
        setValue("");
    };
    const onChange = (event)=>{
        setValue(event.currentTarget.value);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (query !== value) {
            refine(value);
        }
    // We don't want to track when the InstantSearch query changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        value
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // We bypass the state update if the input is focused to avoid concurrent
        // updates when typing.
        if (document.activeElement !== inputRef.current && query !== value) {
            setValue(query);
        }
    // We don't want to track when the React state value changes.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        query
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);
    const state = {
        value,
        inputRef,
        isSearchStalled,
        onChange,
        onReset,
        placeholder
    };
    return children(state);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBoxWrapper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9083:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_common_icons_x__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7404);
/* harmony import */ var _search_box_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4728);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_search_box_wrapper__WEBPACK_IMPORTED_MODULE_2__]);
_search_box_wrapper__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ControlledSearchBox = ({ inputRef , isSearchStalled , onChange , onReset , onSubmit , placeholder , value , ...props })=>{
    const handleSubmit = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        if (onSubmit) {
            onSubmit(event);
        }
        if (inputRef.current) {
            inputRef.current.blur();
        }
    };
    const handleReset = (event)=>{
        event.preventDefault();
        event.stopPropagation();
        onReset(event);
        if (inputRef.current) {
            inputRef.current.focus();
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ...props,
        className: "w-full",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
            action: "",
            noValidate: true,
            onSubmit: handleSubmit,
            onReset: handleReset,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                        ref: inputRef,
                        autoComplete: "off",
                        autoCorrect: "off",
                        autoCapitalize: "off",
                        placeholder: placeholder,
                        spellCheck: false,
                        type: "search",
                        value: value,
                        onChange: onChange,
                        className: "text-base-regular placeholder:transition-colors placeholder:text-gray-500 focus:placeholder:text-gray-900 focus:outline-none flex-1 bg-transparent"
                    }),
                    value && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: handleReset,
                        type: "button",
                        className: "h-5 w-5 rounded-full flex items-center justify-center text-gray-900 bg-gray-200",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_x__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                            size: 12
                        })
                    })
                ]
            })
        })
    });
};
const SearchBox = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_search_box_wrapper__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
        children: (props)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ControlledSearchBox, {
                    ...props
                })
            });
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchBox);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3116:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hooks_use_toggle_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3721);
/* harmony import */ var _lib_search_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9770);
/* harmony import */ var _modules_common_components_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5847);
/* harmony import */ var _modules_common_icons_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8312);
/* harmony import */ var _modules_search_components_desktop_hit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2281);
/* harmony import */ var _modules_search_components_desktop_hits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1307);
/* harmony import */ var _modules_search_components_search_box__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9083);
/* harmony import */ var react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6269);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_common_components_modal__WEBPACK_IMPORTED_MODULE_3__, _modules_search_components_desktop_hits__WEBPACK_IMPORTED_MODULE_6__, _modules_search_components_search_box__WEBPACK_IMPORTED_MODULE_7__, react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_8__]);
([_modules_common_components_modal__WEBPACK_IMPORTED_MODULE_3__, _modules_search_components_desktop_hits__WEBPACK_IMPORTED_MODULE_6__, _modules_search_components_search_box__WEBPACK_IMPORTED_MODULE_7__, react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const DesktopSearchModal = ()=>{
    const { state , close , open  } = (0,_lib_hooks_use_toggle_state__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                onClick: open,
                className: "flex items-center gap-x-2 h-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_search__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                    "Search"
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_modal__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                isOpen: state,
                close: close,
                size: "large",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_modal__WEBPACK_IMPORTED_MODULE_3__/* ["default"].Body */ .Z.Body, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_instantsearch_hooks_web__WEBPACK_IMPORTED_MODULE_8__.InstantSearch, {
                        indexName: _lib_search_client__WEBPACK_IMPORTED_MODULE_2__/* .SEARCH_INDEX_NAME */ .t,
                        searchClient: _lib_search_client__WEBPACK_IMPORTED_MODULE_2__/* .searchClient */ .J,
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex flex-col h-full",
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "w-full flex items-center gap-x-2 bg-gray-50 p-4",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_search__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_search_components_search_box__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "overflow-y-scroll flex-1 no-scrollbar mt-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_search_components_desktop_hits__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                        hitComponent: _modules_search_components_desktop_hit__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z
                                    })
                                })
                            ]
                        })
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesktopSearchModal);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5986:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SkeletonProductPreview = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "animate-pulse",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "aspect-[29/34] w-full bg-gray-100"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-base-regular mt-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-3/5 h-6 bg-gray-100"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-2/5 h-6 bg-gray-100 mt-2"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonProductPreview);


/***/ })

};
;