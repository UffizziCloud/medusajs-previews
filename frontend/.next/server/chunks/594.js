"use strict";
exports.id = 594;
exports.ids = [594];
exports.modules = {

/***/ 9594:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_q": () => (/* binding */ fetchProductsList)
/* harmony export */ });
/* unused harmony exports getSiteData, getProductData, getCollectionData */
/* harmony import */ var _lib_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_config__WEBPACK_IMPORTED_MODULE_0__]);
_lib_config__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const COL_LIMIT = 15;
const getFeaturedProducts = async ()=>{
    const payload = {};
    if (process.env.FEATURED_PRODUCTS) {
        payload.id = process.env.FEATURED_PRODUCTS;
    } else {
        payload.limit = 3;
    }
    const products = await medusaClient.products.list(payload).then(({ products  })=>products).catch((_)=>[]);
    return products;
};
// get global data used in header and footer
const getGlobalData = async ()=>{
    let totalCount = 0;
    const collections = await medusaClient.collections.list({
        limit: COL_LIMIT
    }).then(({ collections , count  })=>{
        totalCount = count;
        return collections;
    }).catch((_)=>undefined);
    const featuredProducts = await getFeaturedProducts();
    return {
        navData: {
            hasMoreCollections: totalCount > COL_LIMIT,
            collections: collections?.map((c)=>({
                    id: c.id,
                    title: c.title
                })) || [],
            featuredProducts
        }
    };
};
const getSiteData = async ()=>{
    const globalData = await getGlobalData();
    return {
        site: globalData
    };
};
// get data for a specific product, as well as global data
const getProductData = async (handle)=>{
    const data = await medusaClient.products.list({
        handle
    }).then(({ products  })=>products);
    const product = data[0];
    if (!product) {
        throw new Error(`Product with handle ${handle} not found`);
    }
    return {
        page: {
            data: product
        }
    };
};
const getInitialProducts = async (collectionId)=>{
    const result = await medusaClient.products.list({
        collection_id: [
            collectionId
        ],
        limit: 10
    }).then(({ products , count  })=>{
        return {
            initialProducts: products,
            count: count,
            hasMore: count > 10
        };
    }).catch((_)=>({
            initialProducts: [],
            count: 0,
            hasMore: false
        }));
    return result;
};
// get data for a specific collection, as well as global data
const getCollectionData = async (id)=>{
    const siteData = await getGlobalData();
    const data = await medusaClient.collections.retrieve(id).then(({ collection  })=>collection).catch(()=>undefined);
    if (!data) {
        throw new Error(`Collection with handle ${id} not found`);
    }
    const additionalData = await getInitialProducts(id);
    return {
        page: {
            data,
            additionalData
        },
        site: siteData
    };
};
const fetchProductsList = async ({ pageParam =0 , queryParams  })=>{
    const { products , count , offset  } = await _lib_config__WEBPACK_IMPORTED_MODULE_0__/* .medusaClient.products.list */ .pZ.products.list({
        limit: 12,
        offset: pageParam,
        ...queryParams
    });
    return {
        response: {
            products,
            count
        },
        nextPage: count > offset + 12 ? offset + 12 : null
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;