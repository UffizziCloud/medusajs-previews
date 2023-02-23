"use strict";
(() => {
var exports = {};
exports.id = 314;
exports.ids = [314];
exports.modules = {

/***/ 6067:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ getCollectionIds)
/* harmony export */ });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_config__WEBPACK_IMPORTED_MODULE_0__]);
_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const getCollectionIds = async ()=>{
    const data = await _config__WEBPACK_IMPORTED_MODULE_0__/* .medusaClient.collections.list */ .pZ.collections.list({
        limit: 100
    }).then(({ collections  })=>{
        return collections.map(({ id  })=>id);
    });
    return data;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3137:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_hooks_use_previews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3088);
/* harmony import */ var _lib_util_get_number_of_skeletons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(217);
/* harmony import */ var _lib_util_repeat__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1692);
/* harmony import */ var _modules_products_components_product_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8948);
/* harmony import */ var _modules_skeletons_components_skeleton_product_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5986);
/* harmony import */ var _pages_collections_id___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6449);
/* harmony import */ var medusa_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5756);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4009);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_hooks_use_previews__WEBPACK_IMPORTED_MODULE_1__, _pages_collections_id___WEBPACK_IMPORTED_MODULE_4__, medusa_react__WEBPACK_IMPORTED_MODULE_5__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__]);
([_lib_hooks_use_previews__WEBPACK_IMPORTED_MODULE_1__, _pages_collections_id___WEBPACK_IMPORTED_MODULE_4__, medusa_react__WEBPACK_IMPORTED_MODULE_5__, react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const CollectionTemplate = ({ collection ,  })=>{
    const { cart  } = (0,medusa_react__WEBPACK_IMPORTED_MODULE_5__.useCart)();
    const { ref , inView  } = (0,react_intersection_observer__WEBPACK_IMPORTED_MODULE_7__.useInView)();
    const { data: infiniteData , hasNextPage , fetchNextPage , isFetchingNextPage , isLoading ,  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useInfiniteQuery)([
        `get_collection_products`,
        collection.id,
        cart?.id
    ], ({ pageParam  })=>(0,_pages_collections_id___WEBPACK_IMPORTED_MODULE_4__.fetchCollectionProducts)({
            pageParam,
            id: collection.id,
            cartId: cart?.id
        }), {
        getNextPageParam: (lastPage)=>lastPage.nextPage
    });
    const previews = (0,_lib_hooks_use_previews__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)({
        pages: infiniteData?.pages,
        region: cart?.region
    });
    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        inView,
        hasNextPage
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "content-container py-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mb-8 text-2xl-semi",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: collection.title
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                className: "grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-4 gap-y-8",
                children: [
                    previews.map((p)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_products_components_product_preview__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                ...p
                            })
                        }, p.id)),
                    isLoading && !previews.length && (0,_lib_util_repeat__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(8).map((index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_skeletons_components_skeleton_product_preview__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                        }, index)),
                    isFetchingNextPage && (0,_lib_util_repeat__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)((0,_lib_util_get_number_of_skeletons__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(infiniteData?.pages)).map((index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_skeletons_components_skeleton_product_preview__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {})
                        }, index))
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "py-16 flex justify-center items-center text-small-regular text-gray-700",
                ref: ref,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    ref: ref
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionTemplate);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1660:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_util_repeat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1692);
/* harmony import */ var _modules_skeletons_components_skeleton_product_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5986);



const SkeletonCollectionPage = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "content-container py-6",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "animate-pulse mb-8",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "w-96 h-20 bg-gray-100"
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                className: "grid grid-cols-2 small:grid-cols-3 medium:grid-cols-4 gap-x-4 gap-y-8 flex-1",
                children: (0,_lib_util_repeat__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(8).map((index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_skeletons_components_skeleton_product_preview__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                    }, index))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SkeletonCollectionPage);


/***/ }),

/***/ 6449:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "fetchCollectionProducts": () => (/* binding */ fetchCollectionProducts),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7590);
/* harmony import */ var _lib_constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(7469);
/* harmony import */ var _lib_util_get_collection_ids__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6067);
/* harmony import */ var _modules_collections_templates__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3137);
/* harmony import */ var _modules_common_components_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3269);
/* harmony import */ var _modules_layout_templates__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7688);
/* harmony import */ var _modules_skeletons_templates_skeleton_collection_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1660);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9752);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_config__WEBPACK_IMPORTED_MODULE_1__, _lib_util_get_collection_ids__WEBPACK_IMPORTED_MODULE_2__, _modules_collections_templates__WEBPACK_IMPORTED_MODULE_3__, _modules_layout_templates__WEBPACK_IMPORTED_MODULE_5__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__]);
([_lib_config__WEBPACK_IMPORTED_MODULE_1__, _lib_util_get_collection_ids__WEBPACK_IMPORTED_MODULE_2__, _modules_collections_templates__WEBPACK_IMPORTED_MODULE_3__, _modules_layout_templates__WEBPACK_IMPORTED_MODULE_5__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










const fetchCollection = async (id)=>{
    return await _lib_config__WEBPACK_IMPORTED_MODULE_1__/* .medusaClient.collections.retrieve */ .pZ.collections.retrieve(id).then(({ collection  })=>({
            id: collection.id,
            title: collection.title
        }));
};
const fetchCollectionProducts = async ({ pageParam =0 , id , cartId  })=>{
    const { products , count , offset  } = await _lib_config__WEBPACK_IMPORTED_MODULE_1__/* .medusaClient.products.list */ .pZ.products.list({
        limit: 12,
        offset: pageParam,
        collection_id: [
            id
        ],
        cart_id: cartId
    });
    return {
        response: {
            products,
            count
        },
        nextPage: count > offset + 12 ? offset + 12 : null
    };
};
const CollectionPage = ({ notFound ,  })=>{
    const { query , isFallback , replace  } = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const id = typeof query.id === "string" ? query.id : "";
    const { data , isError , isSuccess , isLoading  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useQuery)([
        "get_collection",
        id
    ], ()=>fetchCollection(id));
    if (notFound) {
        if (_lib_constants__WEBPACK_IMPORTED_MODULE_9__/* .IS_BROWSER */ .Q) {
            replace("/404");
        }
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_skeletons_templates_skeleton_collection_page__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {});
    }
    if (isError) {
        replace("/404");
    }
    if (isFallback || isLoading || !data) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_skeletons_templates_skeleton_collection_page__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {});
    }
    if (isSuccess) {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_common_components_head__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                    title: data.title,
                    description: `${data.title} collection`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_collections_templates__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                    collection: data
                })
            ]
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
CollectionPage.getLayout = (page)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_modules_layout_templates__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
        children: page
    });
};
const getStaticPaths = async ()=>{
    const ids = await (0,_lib_util_get_collection_ids__WEBPACK_IMPORTED_MODULE_2__/* .getCollectionIds */ .U)();
    return {
        paths: ids.map((id)=>({
                params: {
                    id
                }
            })),
        fallback: true
    };
};
const getStaticProps = async (context)=>{
    const queryClient = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.QueryClient();
    const id = context.params?.id;
    await queryClient.prefetchQuery([
        "get_collection",
        id
    ], ()=>fetchCollection(id));
    await queryClient.prefetchInfiniteQuery([
        "get_collection_products",
        id
    ], ({ pageParam  })=>fetchCollectionProducts({
            pageParam,
            id
        }), {
        getNextPageParam: (lastPage)=>lastPage.nextPage
    });
    const queryData = await queryClient.getQueryData([
        `get_collection`,
        id
    ]);
    if (!queryData) {
        return {
            props: {
                notFound: true
            }
        };
    }
    return {
        props: {
            // Work around see – https://github.com/TanStack/query/issues/1458#issuecomment-747716357
            dehydratedState: JSON.parse(JSON.stringify((0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.dehydrate)(queryClient))),
            notFound: false
        }
    };
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CollectionPage);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6335:
/***/ ((module) => {

module.exports = require("@meilisearch/instant-meilisearch");

/***/ }),

/***/ 8103:
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ 6517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 3901:
/***/ ((module) => {

module.exports = require("lodash/omit");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 5534:
/***/ ((module) => {

module.exports = require("react-country-flag");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1185:
/***/ ((module) => {

module.exports = import("@headlessui/react");;

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

/***/ }),

/***/ 6269:
/***/ ((module) => {

module.exports = import("react-instantsearch-hooks-web");;

/***/ }),

/***/ 4009:
/***/ ((module) => {

module.exports = import("react-intersection-observer");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,571,788,300,688,338], () => (__webpack_exec__(6449)));
module.exports = __webpack_exports__;

})();