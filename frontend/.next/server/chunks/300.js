"use strict";
exports.id = 300;
exports.ids = [300];
exports.modules = {

/***/ 7469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ IS_BROWSER)
/* harmony export */ });
const IS_BROWSER = "undefined" !== "undefined";


/***/ }),

/***/ 3300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AN": () => (/* binding */ MobileMenuProvider),
  "Sn": () => (/* binding */ useMobileMenu)
});

// UNUSED EXPORTS: MobileMenuContext

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/lib/constants.ts
var constants = __webpack_require__(7469);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/lib/hooks/use-current-width.tsx


const getWidth = ()=>{
    if (constants/* IS_BROWSER */.Q) {
        return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    }
    return 0;
};
const useCurrentWidth = ()=>{
    const { 0: width , 1: setWidth  } = (0,external_react_.useState)(getWidth());
    (0,external_react_.useEffect)(()=>{
        const resizeListener = ()=>{
            setWidth(getWidth());
        };
        window.addEventListener("resize", resizeListener);
        return ()=>{
            window.removeEventListener("resize", resizeListener);
        };
    }, []);
    return width;
};
/* harmony default export */ const use_current_width = (useCurrentWidth);

;// CONCATENATED MODULE: ./src/lib/hooks/use-debounce.tsx

const useDebounce = (value, delay)=>{
    const { 0: debouncedValue , 1: setDebouncedValue  } = (0,external_react_.useState)(value);
    (0,external_react_.useEffect)(()=>{
        const handler = setTimeout(()=>{
            setDebouncedValue(value);
        }, delay);
        return ()=>{
            clearTimeout(handler);
        };
    }, [
        value,
        delay
    ]);
    return debouncedValue;
};
/* harmony default export */ const use_debounce = (useDebounce);

// EXTERNAL MODULE: ./src/lib/hooks/use-toggle-state.tsx
var use_toggle_state = __webpack_require__(3721);
;// CONCATENATED MODULE: ./src/lib/context/mobile-menu-context.tsx





const MobileMenuContext = /*#__PURE__*/ (0,external_react_.createContext)(null);
const MobileMenuProvider = ({ children  })=>{
    const { state , close , open , toggle  } = (0,use_toggle_state/* default */.Z)();
    const { 0: screen , 1: setScreen  } = (0,external_react_.useState)("main");
    const windowWidth = use_current_width();
    const debouncedWith = use_debounce(windowWidth, 200);
    const closeMenu = (0,external_react_.useCallback)(()=>{
        close();
        setTimeout(()=>{
            setScreen("main");
        }, 500);
    }, [
        close
    ]);
    (0,external_react_.useEffect)(()=>{
        if (state && debouncedWith >= 1024) {
            closeMenu();
        }
    }, [
        debouncedWith,
        state,
        closeMenu
    ]);
    (0,external_react_.useEffect)(()=>{}, [
        debouncedWith
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx(MobileMenuContext.Provider, {
        value: {
            state,
            close: closeMenu,
            open,
            toggle,
            screen: [
                screen,
                setScreen
            ]
        },
        children: children
    });
};
const useMobileMenu = ()=>{
    const context = (0,external_react_.useContext)(MobileMenuContext);
    if (context === null) {
        throw new Error("useCartDropdown must be used within a CartDropdownProvider");
    }
    return context;
};


/***/ })

};
;