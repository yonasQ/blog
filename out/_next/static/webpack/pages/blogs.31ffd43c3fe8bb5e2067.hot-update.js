webpackHotUpdate_N_E("pages/blogs",{

/***/ "./pages/blogs/index.js":
/*!******************************!*\
  !*** ./pages/blogs/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Quest_Desktop_seoblog_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../component/Layout */ "./component/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var _component_blog_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../component/blog/Card */ "./component/blog/Card.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config */ "./config.js");



var _jsxFileName = "C:\\Users\\Quest\\Desktop\\seoblog\\frontend\\pages\\blogs\\index.js",
    _this = undefined,
    _s = $RefreshSig$();










var Blogs = function Blogs(_ref) {
  _s();

  var blogs = _ref.blogs,
      catagories = _ref.catagories,
      tags = _ref.tags,
      totalBlogs = _ref.totalBlogs,
      blogsLimit = _ref.blogsLimit,
      blogsSkip = _ref.blogsSkip,
      router = _ref.router;

  var head = function head() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: ["programming blogs | ", _config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        name: "description",
        content: "programming blogs with react node next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        rel: "canonical",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"]).concat(router.pathname)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        property: "og:title",
        content: "latest tutorial on development ".concat(_config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        property: "og:description",
        content: "programming blogs with react node next"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        property: "og:url",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"]).concat(router.pathname)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
        property: "og:site_name",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }, _this);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(blogsLimit),
      Limit = _useState[0],
      setLimit = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(blogsSkip),
      Skip = _useState2[0],
      setSkip = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(totalBlogs),
      Size = _useState3[0],
      setSize = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      LoadedBlogs = _useState4[0],
      setLoadedBlogs = _useState4[1];

  var LoadMore = function LoadMore() {
    var toskip = Skip + Limit;
    Object(_actions_blog__WEBPACK_IMPORTED_MODULE_6__["listBlogsWithCatagoriesAndTags"])(toskip, Limit).then(function (data) {
      if (data.err) {
        console.log(data.err);
      } else {
        setLoadedBlogs([].concat(Object(C_Users_Quest_Desktop_seoblog_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(LoadedBlogs), Object(C_Users_Quest_Desktop_seoblog_frontend_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data.blogs)));
        setSkip(toskip);
        setSize(data.size);
      }
    });
  };

  var LoadMoreButtun = function LoadMoreButtun() {
    return Size > 0 && Size >= Limit && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("button", {
      onClick: LoadMore,
      className: "btn btn-primary",
      children: "Load More"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 42
    }, _this);
  };

  var showAllBlogs = function showAllBlogs() {
    return blogs && blogs.map(function (blog, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("article", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_component_blog_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
          blog: blog
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 20
      }, _this);
    });
  };

  var showLoadedBlogs = function showLoadedBlogs() {
    return LoadedBlogs.map(function (blog, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("article", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_component_blog_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
          blog: blog
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }, _this)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 20
      }, _this);
    });
  };

  var showAllCatagories = function showAllCatagories() {
    return catagories && catagories.map(function (catagory, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/catagories/".concat(catagory.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          className: "btn btn-primary ml-1 mr-1 mt-3",
          children: catagory.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 20
      }, _this);
    });
  };

  var showAllTags = function showAllTags() {
    return tags && tags.map(function (tag, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/tags/".concat(tag.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("a", {
          className: "btn btn-outline-primary ml-1 mr-1 mt-3",
          children: tag.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 20
      }, _this);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
    children: [head(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_component_Layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "container-fluid",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("header", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "col-md-12 pt-3",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
                className: "display-5 font-weight-bold text-center",
                children: "Programming blogs with react"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 94,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: "pb-5 text-center",
              children: [showAllCatagories(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 33
              }, _this), showAllTags()]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "container-fluid",
          children: showAllBlogs()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "container-fluid",
          children: showLoadedBlogs()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: "text-center pt-5 pb-5",
          children: LoadMoreButtun()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 21
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
    columnNumber: 9
  }, _this);
};

_s(Blogs, "PgpBBGwl+WdcNbK11DGt7dw5bwM=");

_c = Blogs;

Blogs.getInitialProps = function () {
  var skip = 0;
  var limit = 2;
  return Object(_actions_blog__WEBPACK_IMPORTED_MODULE_6__["listBlogsWithCatagoriesAndTags"])(skip, limit).then(function (data) {
    if (data.err) {
      console.log(data.err);
    } else {
      return {
        blogs: data.blogs,
        catagories: data.catagories,
        tags: data.tags,
        totalBlogs: data.size,
        blogsLimit: limit,
        blogsSkip: skip
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Blogs));

var _c, _c2;

$RefreshReg$(_c, "Blogs");
$RefreshReg$(_c2, "%default%");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiQmxvZ3MiLCJibG9ncyIsImNhdGFnb3JpZXMiLCJ0YWdzIiwidG90YWxCbG9ncyIsImJsb2dzTGltaXQiLCJibG9nc1NraXAiLCJyb3V0ZXIiLCJoZWFkIiwiQVBQX05BTUUiLCJET01BSU4iLCJwYXRobmFtZSIsInVzZVN0YXRlIiwiTGltaXQiLCJzZXRMaW1pdCIsIlNraXAiLCJzZXRTa2lwIiwiU2l6ZSIsInNldFNpemUiLCJMb2FkZWRCbG9ncyIsInNldExvYWRlZEJsb2dzIiwiTG9hZE1vcmUiLCJ0b3NraXAiLCJsaXN0QmxvZ3NXaXRoQ2F0YWdvcmllc0FuZFRhZ3MiLCJ0aGVuIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzaXplIiwiTG9hZE1vcmVCdXR0dW4iLCJzaG93QWxsQmxvZ3MiLCJtYXAiLCJibG9nIiwiaSIsInNob3dMb2FkZWRCbG9ncyIsInNob3dBbGxDYXRhZ29yaWVzIiwiY2F0YWdvcnkiLCJzbHVnIiwibmFtZSIsInNob3dBbGxUYWdzIiwidGFnIiwiZ2V0SW5pdGlhbFByb3BzIiwic2tpcCIsImxpbWl0Iiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUE0RTtBQUFBOztBQUFBLE1BQXpFQyxLQUF5RSxRQUF6RUEsS0FBeUU7QUFBQSxNQUFsRUMsVUFBa0UsUUFBbEVBLFVBQWtFO0FBQUEsTUFBdERDLElBQXNELFFBQXREQSxJQUFzRDtBQUFBLE1BQWhEQyxVQUFnRCxRQUFoREEsVUFBZ0Q7QUFBQSxNQUFwQ0MsVUFBb0MsUUFBcENBLFVBQW9DO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLE1BQWEsUUFB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QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBMEJILENBeEdEOztHQUFNOUIsSzs7S0FBQUEsSzs7QUF5R05BLEtBQUssQ0FBQzBDLGVBQU4sR0FBd0IsWUFBTTtBQUMxQixNQUFJQyxJQUFJLEdBQUcsQ0FBWDtBQUNBLE1BQUlDLEtBQUssR0FBRyxDQUFaO0FBQ0EsU0FBT3JCLG9GQUE4QixDQUFDb0IsSUFBRCxFQUFPQyxLQUFQLENBQTlCLENBQ0ZwQixJQURFLENBQ0csVUFBQ0MsSUFBRCxFQUFVO0FBQ1osUUFBSUEsSUFBSSxDQUFDQyxHQUFULEVBQWM7QUFDVkMsYUFBTyxDQUFDQyxHQUFSLENBQVlILElBQUksQ0FBQ0MsR0FBakI7QUFDSCxLQUZELE1BR0s7QUFDRCxhQUFPO0FBQ0h6QixhQUFLLEVBQUV3QixJQUFJLENBQUN4QixLQURUO0FBRUhDLGtCQUFVLEVBQUV1QixJQUFJLENBQUN2QixVQUZkO0FBR0hDLFlBQUksRUFBRXNCLElBQUksQ0FBQ3RCLElBSFI7QUFJSEMsa0JBQVUsRUFBRXFCLElBQUksQ0FBQ0ksSUFKZDtBQUtIeEIsa0JBQVUsRUFBRXVDLEtBTFQ7QUFNSHRDLGlCQUFTLEVBQUVxQztBQU5SLE9BQVA7QUFRSDtBQUNKLEdBZkUsQ0FBUDtBQWdCSCxDQW5CRDs7QUFvQmUscUVBQUFFLDhEQUFVLENBQUM3QyxLQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dzLjMxZmZkNDNjM2ZlOGJiNWUyMDY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnQvTGF5b3V0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbGlzdEJsb2dzV2l0aENhdGFnb3JpZXNBbmRUYWdzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9ibG9nJ1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnQvYmxvZy9DYXJkJ1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IEFQSSwgRE9NQUlOLCBBUFBfTkFNRSB9IGZyb20gJy4uLy4uL2NvbmZpZydcclxuY29uc3QgQmxvZ3MgPSAoeyBibG9ncywgY2F0YWdvcmllcywgdGFncywgdG90YWxCbG9ncywgYmxvZ3NMaW1pdCwgYmxvZ3NTa2lwLCByb3V0ZXIgfSkgPT4ge1xyXG4gICAgY29uc3QgaGVhZCA9ICgpID0+IChcclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPnByb2dyYW1taW5nIGJsb2dzIHwge0FQUF9OQU1FfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJwcm9ncmFtbWluZyBibG9ncyB3aXRoIHJlYWN0IG5vZGUgbmV4dFwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Ake0RPTUFJTn0ke3JvdXRlci5wYXRobmFtZX1gfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YGxhdGVzdCB0dXRvcmlhbCBvbiBkZXZlbG9wbWVudCAke0FQUF9OQU1FfWB9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwicHJvZ3JhbW1pbmcgYmxvZ3Mgd2l0aCByZWFjdCBub2RlIG5leHRcIiAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHByb3BlcnR5PVwib2c6dXJsXCIgaHJlZj17YCR7RE9NQUlOfSR7cm91dGVyLnBhdGhuYW1lfWB9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgaHJlZj17YCR7QVBQX05BTUV9YH0gLz5cclxuICAgICAgICAgICAgey8qIDxsaW5rIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPlxyXG4gICAgPGxpbmsgcHJvcGVydHk9XCJvZzppbWFnZTpzZWN1cmVfdXJsXCIgaHJlZj17YCR7QVBQX05BTUV9YH0gLz5cclxuICAgIDxsaW5rIHByb3BlcnR5PVwib2c6aW1hZ2U6dHlwZVwiIGhyZWY9e2Ake0FQUF9OQU1FfWB9IC8+IFxyXG4gICAgIDxsaW5rIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgaHJlZj17YCR7QVBQX05BTUV9YH0gLz4gICovfVxyXG5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICApXHJcbiAgICBjb25zdCBbTGltaXQsIHNldExpbWl0XSA9IHVzZVN0YXRlKGJsb2dzTGltaXQpXHJcbiAgICBjb25zdCBbU2tpcCwgc2V0U2tpcF0gPSB1c2VTdGF0ZShibG9nc1NraXApXHJcbiAgICBjb25zdCBbU2l6ZSwgc2V0U2l6ZV0gPSB1c2VTdGF0ZSh0b3RhbEJsb2dzKVxyXG4gICAgY29uc3QgW0xvYWRlZEJsb2dzLCBzZXRMb2FkZWRCbG9nc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICBjb25zdCBMb2FkTW9yZSA9ICgpID0+IHtcclxuICAgICAgICBsZXQgdG9za2lwID0gU2tpcCArIExpbWl0XHJcblxyXG4gICAgICAgIGxpc3RCbG9nc1dpdGhDYXRhZ29yaWVzQW5kVGFncyh0b3NraXAsIExpbWl0KVxyXG4gICAgICAgICAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGVkQmxvZ3MoWy4uLkxvYWRlZEJsb2dzLCAuLi5kYXRhLmJsb2dzXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2tpcCh0b3NraXApO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNpemUoZGF0YS5zaXplKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3QgTG9hZE1vcmVCdXR0dW4gPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgU2l6ZSA+IDAgJiYgU2l6ZSA+PSBMaW1pdCAmJiA8YnV0dG9uIG9uQ2xpY2s9e0xvYWRNb3JlfSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5Mb2FkIE1vcmU8L2J1dHRvbj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgc2hvd0FsbEJsb2dzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBibG9ncyAmJiBibG9ncy5tYXAoKGJsb2csIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxhcnRpY2xlIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBibG9nPXtibG9nfSAvPlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd0xvYWRlZEJsb2dzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBMb2FkZWRCbG9ncy5tYXAoKGJsb2csIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxhcnRpY2xlIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZCBibG9nPXtibG9nfSAvPlxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd0FsbENhdGFnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGNhdGFnb3JpZXMgJiYgY2F0YWdvcmllcy5tYXAoKGNhdGFnb3J5LCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8TGluayBrZXk9e2l9IGhyZWY9e2AvY2F0YWdvcmllcy8ke2NhdGFnb3J5LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbWwtMSBtci0xIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2F0YWdvcnkubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93QWxsVGFncyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gdGFncyAmJiB0YWdzLm1hcCgodGFnLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8TGluayBrZXk9e2l9IGhyZWY9e2AvdGFncy8ke3RhZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbWwtMSBtci0xIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGFnLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHtoZWFkKCl9XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgcHQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTUgZm9udC13ZWlnaHQtYm9sZCB0ZXh0LWNlbnRlclwiPlByb2dyYW1taW5nIGJsb2dzIHdpdGggcmVhY3Q8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItNSB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93QWxsQ2F0YWdvcmllcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93QWxsVGFncygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPntzaG93QWxsQmxvZ3MoKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPntzaG93TG9hZGVkQmxvZ3MoKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTUgcGItNVwiPntMb2FkTW9yZUJ1dHR1bigpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbkJsb2dzLmdldEluaXRpYWxQcm9wcyA9ICgpID0+IHtcclxuICAgIGxldCBza2lwID0gMFxyXG4gICAgbGV0IGxpbWl0ID0gMlxyXG4gICAgcmV0dXJuIGxpc3RCbG9nc1dpdGhDYXRhZ29yaWVzQW5kVGFncyhza2lwLCBsaW1pdClcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBibG9nczogZGF0YS5ibG9ncyxcclxuICAgICAgICAgICAgICAgICAgICBjYXRhZ29yaWVzOiBkYXRhLmNhdGFnb3JpZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgdGFnczogZGF0YS50YWdzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsQmxvZ3M6IGRhdGEuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICBibG9nc0xpbWl0OiBsaW1pdCxcclxuICAgICAgICAgICAgICAgICAgICBibG9nc1NraXA6IHNraXBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihCbG9ncykiXSwic291cmNlUm9vdCI6IiJ9