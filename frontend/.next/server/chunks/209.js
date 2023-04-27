"use strict";
exports.id = 209;
exports.ids = [209];
exports.modules = {

/***/ 8282:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const Help = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-base-semi",
                children: "Need help?"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-base-regular my-2",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: "gap-y-2 flex flex-col",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/contact",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: "Contact"
                                })
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                href: "/contact",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: "Returns & Exchanges"
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Help);


/***/ }),

/***/ 4394:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hooks_use_enrich_line_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4551);
/* harmony import */ var _modules_common_components_line_item_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2452);
/* harmony import */ var _modules_common_components_line_item_price__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2001);
/* harmony import */ var _modules_products_components_thumbnail__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3628);
/* harmony import */ var _modules_skeletons_components_skeleton_line_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2371);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_use_enrich_line_items__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_line_item_price__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_hooks_use_enrich_line_items__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_line_item_price__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Items = ({ items , region , cartId  })=>{
    const enrichedItems = (0,_lib_hooks_use_enrich_line_items__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)(items, cartId);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "p-10 border-b border-gray-200 gap-y-4 flex flex-col",
        children: enrichedItems?.length ? enrichedItems.map((item)=>{
            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "grid grid-cols-[122px_1fr] gap-x-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[122px]",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_products_components_thumbnail__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            thumbnail: item.thumbnail,
                            size: "full"
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "flex flex-col justify-between flex-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex flex-col flex-1 text-small-regular",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-start justify-between",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                className: "text-base-regular overflow-ellipsis overflow-hidden whitespace-nowrap mr-4",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {
                                                    href: `/products/${item.variant.product.handle}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        children: item.title
                                                    })
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_line_item_options__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
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
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_line_item_price__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            region: region,
                                            item: item
                                        })
                                    })
                                ]
                            })
                        })
                    })
                ]
            }, item.id);
        }) : Array.from(Array(items.length).keys()).map((i)=>{
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_skeletons_components_skeleton_line_item__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}, i);
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Items);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const OrderDetails = ({ order , showStatus  })=>{
    const items = order.items.reduce((acc, i)=>acc + i.quantity, 0);
    const formatStatus = (str)=>{
        const formatted = str.split("_").join(" ");
        return formatted.slice(0, 1).toUpperCase() + formatted.slice(1);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "p-10 border-b border.gray-200",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "text-gray-700 text-small-regular uppercase",
                children: "Thank you, your order was successfully placed"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
                className: "mt-2 uppercase text-2xl-semi",
                children: [
                    "#",
                    order.display_id
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                children: order.id.split("order_")[1]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center text-gray-700 text-small-regular gap-x-4 mt-4",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: new Date(order.created_at).toDateString()
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: `${items} ${items !== 1 ? "items" : "item"}`
                    }),
                    showStatus && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: formatStatus(order.fulfillment_status)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: formatStatus(order.payment_status)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderDetails);


/***/ }),

/***/ 403:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5756);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([medusa_react__WEBPACK_IMPORTED_MODULE_1__]);
medusa_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const OrderSummary = ({ order  })=>{
    const getAmount = (amount)=>{
        if (!amount) {
            return;
        }
        return (0,medusa_react__WEBPACK_IMPORTED_MODULE_1__.formatAmount)({
            amount,
            region: order.region,
            includeTaxes: false
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-base-semi",
                children: "Order Summary"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-small-regular text-gray-700 my-2",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between text-base-regular text-gray-900 mb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Subtotal"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: getAmount(order.subtotal)
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col gap-y-1",
                        children: [
                            order.discount_total > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Discount"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            "- ",
                                            getAmount(order.discount_total)
                                        ]
                                    })
                                ]
                            }),
                            order.gift_card_total > 0 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Discount"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                        children: [
                                            "- ",
                                            getAmount(order.gift_card_total)
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Shipping"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: getAmount(order.shipping_total)
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "Taxes"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: getAmount(order.tax_total)
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-px w-full border-b border-gray-200 border-dashed my-4"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between text-base-regular text-gray-900 mb-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "Total"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: getAmount(order.total)
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (OrderSummary);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9651:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ShippingDetails = ({ address , shippingMethods  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "text-base-regular",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "text-base-semi",
                children: "Delivery"
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "my-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-small-regular text-gray-700",
                        children: "Address"
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: `${address.first_name} ${address.last_name}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: `${address.address_1}${address.address_2 && ", " + address.address_2}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: `${address.city}, ${address.province} ${address.postal_code}`
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: address.country_code?.toUpperCase()
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "my-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "text-small-regular text-gray-700",
                        children: "Delivery method"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        children: shippingMethods.map((sm)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: sm.shipping_option.name
                            }, sm.id);
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShippingDetails);


/***/ }),

/***/ 8412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ skeleton_order_confirmed)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./src/modules/skeletons/components/skeleton-order-confirmed-header/index.tsx

const SkeletonOrderConfirmedHeader = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col gap-y-2 pb-10 animate-pulse",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-2/5 h-4 bg-gray-100"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-3/6 h-6 bg-gray-100"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex gap-x-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-16 h-4 bg-gray-100"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-12 h-4 bg-gray-100"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const skeleton_order_confirmed_header = (SkeletonOrderConfirmedHeader);

// EXTERNAL MODULE: ./src/modules/skeletons/components/skeleton-cart-totals/index.tsx
var skeleton_cart_totals = __webpack_require__(2401);
;// CONCATENATED MODULE: ./src/modules/skeletons/components/skeleton-order-information/index.tsx


const SkeletonOrderInformation = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-4 py-10 border-b border-gray-200",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-32 h-4 bg-gray-100 mb-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-2/6 h-3 bg-gray-100"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-3/6 h-3 bg-gray-100 my-2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-1/6 h-3 bg-gray-100"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-32 h-4 bg-gray-100 mb-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-2/6 h-3 bg-gray-100"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-3/6 h-3 bg-gray-100 my-2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-2/6 h-3 bg-gray-100"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-1/6 h-3 bg-gray-100 mt-2"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-32 h-4 bg-gray-100 my-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-1/6 h-3 bg-gray-100"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-4 py-10",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-32 h-4 bg-gray-100 mb-4"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-2/6 h-3 bg-gray-100"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-3/6 h-3 bg-gray-100 my-4"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(skeleton_cart_totals/* default */.Z, {})
                ]
            })
        ]
    });
};
/* harmony default export */ const skeleton_order_information = (SkeletonOrderInformation);

;// CONCATENATED MODULE: ./src/modules/skeletons/components/skeleton-order-items/index.tsx

const SkeletonOrderItems = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex flex-col gap-y-4 py-10 border-y border-gray-200",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-[122px_1fr] gap-x-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full aspect-[29/34] bg-gray-100"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-start justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col gap-y-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-48 h-6 bg-gray-100"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-24 h-4 bg-gray-100"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-32 h-4 bg-gray-100"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-32 h-6 bg-gray-100"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-[122px_1fr] gap-x-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full aspect-[29/34] bg-gray-100"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-start justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col gap-y-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-48 h-6 bg-gray-100"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-24 h-4 bg-gray-100"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-32 h-4 bg-gray-100"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-32 h-6 bg-gray-100"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "grid grid-cols-[122px_1fr] gap-x-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "w-full aspect-[29/34] bg-gray-100"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-start justify-between",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col gap-y-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-48 h-6 bg-gray-100"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-24 h-4 bg-gray-100"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-32 h-4 bg-gray-100"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-32 h-6 bg-gray-100"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const skeleton_order_items = (SkeletonOrderItems);

;// CONCATENATED MODULE: ./src/modules/skeletons/templates/skeleton-order-confirmed/index.tsx




const SkeletonOrderConfirmed = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "bg-gray-50 py-6 min-h-[calc(100vh-64px)] animate-pulse",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "content-container flex justify-center",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "max-w-4xl h-full bg-white w-full p-10",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(skeleton_order_confirmed_header, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(skeleton_order_items, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(skeleton_order_information, {})
                ]
            })
        })
    });
};
/* harmony default export */ const skeleton_order_confirmed = (SkeletonOrderConfirmed);


/***/ })

};
;