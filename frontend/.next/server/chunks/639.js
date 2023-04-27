"use strict";
exports.id = 639;
exports.ids = [639];
exports.modules = {

/***/ 1639:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hookform_error_message__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3218);
/* harmony import */ var _hookform_error_message__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_hookform_error_message__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_common_icons_chevron_down__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7001);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9137);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_5__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const NativeSelect = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(({ placeholder ="Select..." , errors , touched , className , children , ...props }, ref)=>{
    const innerRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
    const { 0: isPlaceholder , 1: setIsPlaceholder  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useImperativeHandle)(ref, ()=>innerRef.current);
    const hasError = props.name ? (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.get)(errors, props.name) && (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.get)(touched, props.name) : false;
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        if (innerRef.current && innerRef.current.value === "") {
            setIsPlaceholder(true);
        } else {
            setIsPlaceholder(false);
        }
    }, [
        innerRef.current?.value
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                onFocus: ()=>innerRef.current?.focus(),
                onBlur: ()=>innerRef.current?.blur(),
                className: clsx__WEBPACK_IMPORTED_MODULE_3___default()("relative flex items-center text-base-regular border border-gray-200", className, {
                    "text-gray-500": isPlaceholder
                }),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                        ref: innerRef,
                        ...props,
                        className: "appearance-none flex-1 bg-transparent border-none px-4 py-2.5 transition-colors duration-150 focus:border-gray-700 outline-none",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                value: "",
                                children: placeholder
                            }),
                            children
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "absolute right-4 inset-y-0 flex items-center pointer-events-none",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_icons_chevron_down__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                    })
                ]
            }),
            hasError && props.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_hookform_error_message__WEBPACK_IMPORTED_MODULE_1__.ErrorMessage, {
                errors: errors,
                name: props.name,
                render: ({ message  })=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "pt-1 pl-2 text-rose-500 text-xsmall-regular",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: message
                        })
                    });
                }
            })
        ]
    });
});
NativeSelect.displayName = "NativeSelect";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NativeSelect);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;