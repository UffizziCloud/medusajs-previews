"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2957:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7590);
/* harmony import */ var _lib_context_account_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6993);
/* harmony import */ var _lib_context_cart_dropdown_context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7052);
/* harmony import */ var _lib_context_mobile_menu_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3300);
/* harmony import */ var _lib_context_store_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6571);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9752);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5756);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_config__WEBPACK_IMPORTED_MODULE_1__, _lib_context_account_context__WEBPACK_IMPORTED_MODULE_2__, _lib_context_store_context__WEBPACK_IMPORTED_MODULE_5__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__, medusa_react__WEBPACK_IMPORTED_MODULE_7__]);
([_lib_config__WEBPACK_IMPORTED_MODULE_1__, _lib_context_account_context__WEBPACK_IMPORTED_MODULE_2__, _lib_context_store_context__WEBPACK_IMPORTED_MODULE_5__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__, medusa_react__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









function App({ Component , pageProps  }) {
    const getLayout = Component.getLayout ?? ((page)=>page);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(medusa_react__WEBPACK_IMPORTED_MODULE_7__.MedusaProvider, {
        baseUrl: _lib_config__WEBPACK_IMPORTED_MODULE_1__/* .MEDUSA_BACKEND_URL */ .n1,
        queryClientProviderProps: {
            client: _lib_config__WEBPACK_IMPORTED_MODULE_1__/* .queryClient */ .Eh
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_6__.Hydrate, {
            state: pageProps.dehydratedState,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_context_cart_dropdown_context__WEBPACK_IMPORTED_MODULE_3__/* .CartDropdownProvider */ .iv, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_context_mobile_menu_context__WEBPACK_IMPORTED_MODULE_4__/* .MobileMenuProvider */ .AN, {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(medusa_react__WEBPACK_IMPORTED_MODULE_7__.CartProvider, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_context_store_context__WEBPACK_IMPORTED_MODULE_5__/* .StoreProvider */ .g, {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_lib_context_account_context__WEBPACK_IMPORTED_MODULE_2__/* .AccountProvider */ .uv, {
                                children: getLayout(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                                    ...pageProps
                                }))
                            })
                        })
                    })
                })
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1035:
/***/ ((module) => {

module.exports = import("@medusajs/medusa-js");;

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 5756:
/***/ ((module) => {

module.exports = import("medusa-react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [571,300,993], () => (__webpack_exec__(2957)));
module.exports = __webpack_exports__;

})();