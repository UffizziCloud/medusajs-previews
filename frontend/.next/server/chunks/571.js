"use strict";
exports.id = 571;
exports.ids = [571];
exports.modules = {

/***/ 7590:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Eh": () => (/* binding */ queryClient),
/* harmony export */   "n1": () => (/* binding */ MEDUSA_BACKEND_URL),
/* harmony export */   "pZ": () => (/* binding */ medusaClient)
/* harmony export */ });
/* harmony import */ var _medusajs_medusa_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1035);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_medusajs_medusa_js__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);
([_medusajs_medusa_js__WEBPACK_IMPORTED_MODULE_0__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// Defaults to standard port for Medusa server
let MEDUSA_BACKEND_URL = "http://localhost:9000";
if (true) {
    MEDUSA_BACKEND_URL = "http://localhost:9000";
}
const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 60 * 24,
            retry: 1
        }
    }
});
const medusaClient = new _medusajs_medusa_js__WEBPACK_IMPORTED_MODULE_0__["default"]({
    baseUrl: MEDUSA_BACKEND_URL,
    maxRetries: 3
});


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7052:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "iv": () => (/* binding */ CartDropdownProvider),
/* harmony export */   "qt": () => (/* binding */ useCartDropdown)
/* harmony export */ });
/* unused harmony export CartDropdownContext */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hooks_use_toggle_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3721);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const CartDropdownContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)(null);
const CartDropdownProvider = ({ children  })=>{
    const { state , close , open  } = (0,_lib_hooks_use_toggle_state__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
    const { 0: activeTimer , 1: setActiveTimer  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(undefined);
    const timedOpen = ()=>{
        open();
        const timer = setTimeout(close, 5000);
        setActiveTimer(timer);
    };
    const openAndCancel = ()=>{
        if (activeTimer) {
            clearTimeout(activeTimer);
        }
        open();
    };
    // Clean up the timer when the component unmounts
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        return ()=>{
            if (activeTimer) {
                clearTimeout(activeTimer);
            }
        };
    }, [
        activeTimer
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CartDropdownContext.Provider, {
        value: {
            state,
            close,
            open: openAndCancel,
            timedOpen
        },
        children: children
    });
};
const useCartDropdown = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(CartDropdownContext);
    if (context === null) {
        throw new Error("useCartDropdown must be used within a CartDropdownProvider");
    }
    return context;
};


/***/ }),

/***/ 6571:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ StoreProvider),
/* harmony export */   "o": () => (/* binding */ useStore)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7590);
/* harmony import */ var _lib_util_handle_error__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7791);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _cart_dropdown_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7052);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_config__WEBPACK_IMPORTED_MODULE_1__, medusa_react__WEBPACK_IMPORTED_MODULE_2__]);
([_lib_config__WEBPACK_IMPORTED_MODULE_1__, medusa_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const StoreContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3___default().createContext(null);
const useStore = ()=>{
    const context = react__WEBPACK_IMPORTED_MODULE_3___default().useContext(StoreContext);
    if (context === null) {
        throw new Error("useStore must be used within a StoreProvider");
    }
    return context;
};
const IS_SERVER = "undefined" === "undefined";
const CART_KEY = "medusa_cart_id";
const REGION_KEY = "medusa_region";
const StoreProvider = ({ children  })=>{
    const { cart , setCart , createCart , updateCart  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_2__.useCart)();
    const { 0: countryCode , 1: setCountryCode  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(undefined);
    const { timedOpen  } = (0,_cart_dropdown_context__WEBPACK_IMPORTED_MODULE_4__/* .useCartDropdown */ .qt)();
    const addLineItem = (0,medusa_react__WEBPACK_IMPORTED_MODULE_2__.useCreateLineItem)(cart?.id);
    const removeLineItem = (0,medusa_react__WEBPACK_IMPORTED_MODULE_2__.useDeleteLineItem)(cart?.id);
    const adjustLineItem = (0,medusa_react__WEBPACK_IMPORTED_MODULE_2__.useUpdateLineItem)(cart?.id);
    const storeRegion = (regionId, countryCode)=>{
        if (!IS_SERVER) {
            localStorage.setItem(REGION_KEY, JSON.stringify({
                regionId,
                countryCode
            }));
            setCountryCode(countryCode);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!IS_SERVER) {
            const storedRegion = localStorage.getItem(REGION_KEY);
            if (storedRegion) {
                const { countryCode  } = JSON.parse(storedRegion);
                setCountryCode(countryCode);
            }
        }
    }, []);
    const getRegion = ()=>{
        if (!IS_SERVER) {
            const region = localStorage.getItem(REGION_KEY);
            if (region) {
                return JSON.parse(region);
            }
        }
        return null;
    };
    const setRegion = async (regionId, countryCode)=>{
        await updateCart.mutateAsync({
            region_id: regionId
        }, {
            onSuccess: ({ cart  })=>{
                setCart(cart);
                storeCart(cart.id);
                storeRegion(regionId, countryCode);
            },
            onError: (error)=>{
                if (false) {}
            }
        });
    };
    const ensureRegion = (region, countryCode)=>{
        if (!IS_SERVER) {
            const { regionId , countryCode: defaultCountryCode  } = getRegion() || {
                regionId: region.id,
                countryCode: region.countries[0].iso_2
            };
            const finalCountryCode = countryCode || defaultCountryCode;
            if (regionId !== region.id) {
                setRegion(region.id, finalCountryCode);
            }
            storeRegion(region.id, finalCountryCode);
            setCountryCode(finalCountryCode);
        }
    };
    const storeCart = (id)=>{
        if (!IS_SERVER) {
            localStorage.setItem(CART_KEY, id);
        }
    };
    const getCart = ()=>{
        if (!IS_SERVER) {
            return localStorage.getItem(CART_KEY);
        }
        return null;
    };
    const deleteCart = ()=>{
        if (!IS_SERVER) {
            localStorage.removeItem(CART_KEY);
        }
    };
    const deleteRegion = ()=>{
        if (!IS_SERVER) {
            localStorage.removeItem(REGION_KEY);
        }
    };
    const createNewCart = async (regionId)=>{
        await createCart.mutateAsync({
            region_id: regionId
        }, {
            onSuccess: ({ cart  })=>{
                setCart(cart);
                storeCart(cart.id);
                ensureRegion(cart.region, cart.shipping_address?.country_code);
            },
            onError: (error)=>{
                if (false) {}
            }
        });
    };
    const resetCart = ()=>{
        deleteCart();
        const savedRegion = getRegion();
        createCart.mutate({
            region_id: savedRegion?.regionId
        }, {
            onSuccess: ({ cart  })=>{
                setCart(cart);
                storeCart(cart.id);
                ensureRegion(cart.region, cart.shipping_address?.country_code);
            },
            onError: (error)=>{
                if (false) {}
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const ensureCart = async ()=>{
            const cartId = getCart();
            const region = getRegion();
            if (cartId) {
                const cartRes = await _lib_config__WEBPACK_IMPORTED_MODULE_1__/* .medusaClient.carts.retrieve */ .pZ.carts.retrieve(cartId).then(({ cart  })=>{
                    return cart;
                }).catch(async (_)=>{
                    return null;
                });
                if (!cartRes || cartRes.completed_at) {
                    deleteCart();
                    deleteRegion();
                    await createNewCart();
                    return;
                }
                setCart(cartRes);
                ensureRegion(cartRes.region);
            } else {
                await createNewCart(region?.regionId);
            }
        };
        if (!IS_SERVER && !cart?.id) {
            ensureCart();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const addItem = ({ variantId , quantity  })=>{
        addLineItem.mutate({
            variant_id: variantId,
            quantity: quantity
        }, {
            onSuccess: ({ cart  })=>{
                setCart(cart);
                storeCart(cart.id);
                timedOpen();
            },
            onError: (error)=>{
                (0,_lib_util_handle_error__WEBPACK_IMPORTED_MODULE_5__/* .handleError */ .S)(error);
            }
        });
    };
    const deleteItem = (lineId)=>{
        removeLineItem.mutate({
            lineId
        }, {
            onSuccess: ({ cart  })=>{
                setCart(cart);
                storeCart(cart.id);
            },
            onError: (error)=>{
                (0,_lib_util_handle_error__WEBPACK_IMPORTED_MODULE_5__/* .handleError */ .S)(error);
            }
        });
    };
    const updateItem = ({ lineId , quantity  })=>{
        adjustLineItem.mutate({
            lineId,
            quantity
        }, {
            onSuccess: ({ cart  })=>{
                setCart(cart);
                storeCart(cart.id);
            },
            onError: (error)=>{
                (0,_lib_util_handle_error__WEBPACK_IMPORTED_MODULE_5__/* .handleError */ .S)(error);
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(StoreContext.Provider, {
        value: {
            countryCode,
            setRegion,
            addItem,
            deleteItem,
            updateItem,
            resetCart
        },
        children: children
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3721:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 *
 * @param initialState - boolean
 * @returns An array like object with `state`, `open`, `close`, and `toggle` properties
 *  to allow both object and array destructuring
 *
 * ```
 *  const [showModal, openModal, closeModal, toggleModal] = useToggleState()
 *  // or
 *  const { state, open, close, toggle } = useToggleState()
 * ```
 */ const useToggleState = (initialState = false)=>{
    const { 0: state , 1: setState  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialState);
    const close = ()=>{
        setState(false);
    };
    const open = ()=>{
        setState(true);
    };
    const toggle = ()=>{
        setState((state)=>!state);
    };
    const hookData = [
        state,
        open,
        close,
        toggle
    ];
    hookData.state = state;
    hookData.open = open;
    hookData.close = close;
    hookData.toggle = toggle;
    return hookData;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useToggleState);


/***/ }),

/***/ 7791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ handleError)
/* harmony export */ });
const handleError = (error)=>{
    if (false) {}
// TODO: user facing error message
};


/***/ })

};
;