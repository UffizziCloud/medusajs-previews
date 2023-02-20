"use strict";
exports.id = 580;
exports.ids = [580];
exports.modules = {

/***/ 3580:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_common_components_native_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1639);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_modules_common_components_native_select__WEBPACK_IMPORTED_MODULE_1__, medusa_react__WEBPACK_IMPORTED_MODULE_2__]);
([_modules_common_components_native_select__WEBPACK_IMPORTED_MODULE_1__, medusa_react__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const CountrySelect = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.forwardRef)(({ placeholder ="Country" , ...props }, ref)=>{
    const innerRef = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useImperativeHandle)(ref, ()=>innerRef.current);
    const { regions  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_2__.useRegions)();
    const { cart  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_2__.useCart)();
    const countryOptions = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(()=>{
        const currentRegion = regions?.find((r)=>r.id === cart?.region_id);
        if (!currentRegion) {
            return [];
        }
        return currentRegion.countries.map((country)=>({
                value: country.iso_2,
                label: country.display_name
            }));
    }, [
        regions,
        cart
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_native_select__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
        ref: innerRef,
        placeholder: placeholder,
        ...props,
        children: countryOptions.map(({ value , label  }, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                value: value,
                children: label
            }, index))
    });
});
CountrySelect.displayName = "CountrySelect";
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountrySelect);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;