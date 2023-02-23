"use strict";
exports.id = 993;
exports.ids = [993];
exports.modules = {

/***/ 6993:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "XS": () => (/* binding */ LOGIN_VIEW),
/* harmony export */   "mA": () => (/* binding */ useAccount),
/* harmony export */   "uv": () => (/* binding */ AccountProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7590);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9752);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5756);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_config__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_3__]);
([_lib_config__WEBPACK_IMPORTED_MODULE_1__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__, medusa_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






var LOGIN_VIEW;
(function(LOGIN_VIEW) {
    LOGIN_VIEW["SIGN_IN"] = "sign-in";
    LOGIN_VIEW["REGISTER"] = "register";
})(LOGIN_VIEW || (LOGIN_VIEW = {}));
const AccountContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_5__.createContext)(null);
const handleDeleteSession = ()=>{
    return _lib_config__WEBPACK_IMPORTED_MODULE_1__/* .medusaClient.auth.deleteSession */ .pZ.auth.deleteSession();
};
const AccountProvider = ({ children  })=>{
    const { customer , isLoading: retrievingCustomer , refetch , remove ,  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_3__.useMeCustomer)({
        onError: ()=>{}
    });
    const loginView = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(LOGIN_VIEW.SIGN_IN);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();
    const checkSession = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        if (!customer && !retrievingCustomer) {
            router.push("/account/login");
        }
    }, [
        customer,
        retrievingCustomer,
        router
    ]);
    const useDeleteSession = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)({
        mutationFn: handleDeleteSession,
        mutationKey: [
            "delete-session"
        ]
    });
    const handleLogout = ()=>{
        useDeleteSession.mutate(undefined, {
            onSuccess: ()=>{
                remove();
                loginView[1](LOGIN_VIEW.SIGN_IN);
                router.push("/");
            }
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(AccountContext.Provider, {
        value: {
            customer,
            retrievingCustomer,
            loginView,
            checkSession,
            refetchCustomer: refetch,
            handleLogout
        },
        children: children
    });
};
const useAccount = ()=>{
    const context = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(AccountContext);
    if (context === null) {
        throw new Error("useAccount must be used within a AccountProvider");
    }
    return context;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;