"use strict";
exports.id = 832;
exports.ids = [832];
exports.modules = {

/***/ 9787:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7590);
/* harmony import */ var _modules_common_components_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7391);
/* harmony import */ var _modules_common_components_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1642);
/* harmony import */ var _modules_common_icons_trash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6037);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9137);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_config__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_input__WEBPACK_IMPORTED_MODULE_3__, medusa_react__WEBPACK_IMPORTED_MODULE_5__, react_hook_form__WEBPACK_IMPORTED_MODULE_7__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__]);
([_lib_config__WEBPACK_IMPORTED_MODULE_1__, _modules_common_components_input__WEBPACK_IMPORTED_MODULE_3__, medusa_react__WEBPACK_IMPORTED_MODULE_5__, react_hook_form__WEBPACK_IMPORTED_MODULE_7__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const DiscountCode = ({ cart  })=>{
    const { id , discounts , region  } = cart;
    const { mutate , isLoading  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_5__.useUpdateCart)(id);
    const { setCart  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_5__.useCart)();
    const { isLoading: mutationLoading , mutate: removeDiscount  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)((payload)=>{
        return _lib_config__WEBPACK_IMPORTED_MODULE_1__/* .medusaClient.carts.deleteDiscount */ .pZ.carts.deleteDiscount(payload.cartId, payload.code);
    });
    const appliedDiscount = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>{
        if (!discounts || !discounts.length) {
            return undefined;
        }
        switch(discounts[0].rule.type){
            case "percentage":
                return `${discounts[0].rule.value}%`;
            case "fixed":
                return `- ${(0,medusa_react__WEBPACK_IMPORTED_MODULE_5__.formatAmount)({
                    amount: discounts[0].rule.value,
                    region: region
                })}`;
            default:
                return "Free shipping";
        }
    }, [
        discounts,
        region
    ]);
    const { register , handleSubmit , setError , formState: { errors  } ,  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_7__.useForm)({
        mode: "onSubmit"
    });
    const onApply = (data)=>{
        mutate({
            discounts: [
                {
                    code: data.discount_code
                }
            ]
        }, {
            onSuccess: ({ cart  })=>setCart(cart),
            onError: ()=>{
                setError("discount_code", {
                    message: "Code is invalid"
                }, {
                    shouldFocus: true
                });
            }
        });
    };
    const onRemove = ()=>{
        removeDiscount({
            cartId: id,
            code: discounts[0].code
        }, {
            onSuccess: ({ cart  })=>{
                setCart(cart);
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "w-full bg-white flex flex-col",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-4",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "text-base-semi",
                    children: "Discount"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-small-regular",
                children: appliedDiscount ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Code: "
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: "font-semibold",
                                    children: appliedDiscount
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                className: "flex items-center gap-x-2",
                                onClick: onRemove,
                                disabled: isLoading,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_trash__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        size: 16
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "sr-only",
                                        children: "Remove gift card from order"
                                    })
                                ]
                            })
                        })
                    ]
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("form", {
                    onSubmit: handleSubmit(onApply),
                    className: "w-full",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-[1fr_80px] gap-x-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_input__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                label: "Code",
                                ...register("discount_code", {
                                    required: "Code is required"
                                }),
                                errors: errors
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_button__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                    className: "!min-h-[0] h-[46px] w-[80px]",
                                    disabled: isLoading,
                                    isLoading: isLoading,
                                    children: "Apply"
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DiscountCode);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9581:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([medusa_react__WEBPACK_IMPORTED_MODULE_1__]);
medusa_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const CartTotals = ({ cart  })=>{
    const { subtotal , discount_total , gift_card_total , tax_total , shipping_total , total ,  } = cart;
    const getAmount = (amount)=>{
        return (0,medusa_react__WEBPACK_IMPORTED_MODULE_1__.formatAmount)({
            amount: amount || 0,
            region: cart.region,
            includeTaxes: false
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "text-small-regular text-gray-700",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center justify-between text-base-regular text-gray-900 mb-2",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: "Subtotal"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: getAmount(subtotal)
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col gap-y-1",
                    children: [
                        !!discount_total && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Discount"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "- ",
                                        getAmount(discount_total)
                                    ]
                                })
                            ]
                        }),
                        !!gift_card_total && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    children: "Gift card"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                    children: [
                                        "- ",
                                        getAmount(gift_card_total)
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
                                    children: getAmount(shipping_total)
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
                                    children: getAmount(tax_total)
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
                            children: getAmount(total)
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CartTotals);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;