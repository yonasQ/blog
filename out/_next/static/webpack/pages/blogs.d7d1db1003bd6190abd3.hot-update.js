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
    return LoadedBlogs && LoadedBlogs.map(function (blog, i) {
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
    return tags.map(function (tag, i) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiQmxvZ3MiLCJibG9ncyIsImNhdGFnb3JpZXMiLCJ0YWdzIiwidG90YWxCbG9ncyIsImJsb2dzTGltaXQiLCJibG9nc1NraXAiLCJyb3V0ZXIiLCJoZWFkIiwiQVBQX05BTUUiLCJET01BSU4iLCJwYXRobmFtZSIsInVzZVN0YXRlIiwiTGltaXQiLCJzZXRMaW1pdCIsIlNraXAiLCJzZXRTa2lwIiwiU2l6ZSIsInNldFNpemUiLCJMb2FkZWRCbG9ncyIsInNldExvYWRlZEJsb2dzIiwiTG9hZE1vcmUiLCJ0b3NraXAiLCJsaXN0QmxvZ3NXaXRoQ2F0YWdvcmllc0FuZFRhZ3MiLCJ0aGVuIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzaXplIiwiTG9hZE1vcmVCdXR0dW4iLCJzaG93QWxsQmxvZ3MiLCJtYXAiLCJibG9nIiwiaSIsInNob3dMb2FkZWRCbG9ncyIsInNob3dBbGxDYXRhZ29yaWVzIiwiY2F0YWdvcnkiLCJzbHVnIiwibmFtZSIsInNob3dBbGxUYWdzIiwidGFnIiwiZ2V0SW5pdGlhbFByb3BzIiwic2tpcCIsImxpbWl0Iiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUE0RTtBQUFBOztBQUFBLE1BQXpFQyxLQUF5RSxRQUF6RUEsS0FBeUU7QUFBQSxNQUFsRUMsVUFBa0UsUUFBbEVBLFVBQWtFO0FBQUEsTUFBdERDLElBQXNELFFBQXREQSxJQUFzRDtBQUFBLE1BQWhEQyxVQUFnRCxRQUFoREEsVUFBZ0Q7QUFBQSxNQUFwQ0MsVUFBb0MsUUFBcENBLFVBQW9DO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLE1BQWEsUUFB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QTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUEwQkgsQ0F4R0Q7O0dBQU05QixLOztLQUFBQSxLOztBQXlHTkEsS0FBSyxDQUFDMEMsZUFBTixHQUF3QixZQUFNO0FBQzFCLE1BQUlDLElBQUksR0FBRyxDQUFYO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLENBQVo7QUFDQSxTQUFPckIsb0ZBQThCLENBQUNvQixJQUFELEVBQU9DLEtBQVAsQ0FBOUIsQ0FDRnBCLElBREUsQ0FDRyxVQUFDQyxJQUFELEVBQVU7QUFDWixRQUFJQSxJQUFJLENBQUNDLEdBQVQsRUFBYztBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBSSxDQUFDQyxHQUFqQjtBQUNILEtBRkQsTUFHSztBQUNELGFBQU87QUFDSHpCLGFBQUssRUFBRXdCLElBQUksQ0FBQ3hCLEtBRFQ7QUFFSEMsa0JBQVUsRUFBRXVCLElBQUksQ0FBQ3ZCLFVBRmQ7QUFHSEMsWUFBSSxFQUFFc0IsSUFBSSxDQUFDdEIsSUFIUjtBQUlIQyxrQkFBVSxFQUFFcUIsSUFBSSxDQUFDSSxJQUpkO0FBS0h4QixrQkFBVSxFQUFFdUMsS0FMVDtBQU1IdEMsaUJBQVMsRUFBRXFDO0FBTlIsT0FBUDtBQVFIO0FBQ0osR0FmRSxDQUFQO0FBZ0JILENBbkJEOztBQW9CZSxxRUFBQUUsOERBQVUsQ0FBQzdDLEtBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZ3MuZDdkMWRiMTAwM2JkNjE5MGFiZDMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudC9MYXlvdXQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBsaXN0QmxvZ3NXaXRoQ2F0YWdvcmllc0FuZFRhZ3MgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2Jsb2cnXHJcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudC9ibG9nL0NhcmQnXHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgQVBJLCBET01BSU4sIEFQUF9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5jb25zdCBCbG9ncyA9ICh7IGJsb2dzLCBjYXRhZ29yaWVzLCB0YWdzLCB0b3RhbEJsb2dzLCBibG9nc0xpbWl0LCBibG9nc1NraXAsIHJvdXRlciB9KSA9PiB7XHJcbiAgICBjb25zdCBoZWFkID0gKCkgPT4gKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+cHJvZ3JhbW1pbmcgYmxvZ3MgfCB7QVBQX05BTUV9PC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cInByb2dyYW1taW5nIGJsb2dzIHdpdGggcmVhY3Qgbm9kZSBuZXh0XCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YCR7RE9NQUlOfSR7cm91dGVyLnBhdGhuYW1lfWB9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgbGF0ZXN0IHR1dG9yaWFsIG9uIGRldmVsb3BtZW50ICR7QVBQX05BTUV9YH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJwcm9ncmFtbWluZyBibG9ncyB3aXRoIHJlYWN0IG5vZGUgbmV4dFwiIC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcHJvcGVydHk9XCJvZzp1cmxcIiBocmVmPXtgJHtET01BSU59JHtyb3V0ZXIucGF0aG5hbWV9YH0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPlxyXG4gICAgICAgICAgICB7LyogPGxpbmsgcHJvcGVydHk9XCJvZzppbWFnZVwiIGhyZWY9e2Ake0FQUF9OQU1FfWB9IC8+XHJcbiAgICA8bGluayBwcm9wZXJ0eT1cIm9nOmltYWdlOnNlY3VyZV91cmxcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPlxyXG4gICAgPGxpbmsgcHJvcGVydHk9XCJvZzppbWFnZTp0eXBlXCIgaHJlZj17YCR7QVBQX05BTUV9YH0gLz4gXHJcbiAgICAgPGxpbmsgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPiAgKi99XHJcblxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgIClcclxuICAgIGNvbnN0IFtMaW1pdCwgc2V0TGltaXRdID0gdXNlU3RhdGUoYmxvZ3NMaW1pdClcclxuICAgIGNvbnN0IFtTa2lwLCBzZXRTa2lwXSA9IHVzZVN0YXRlKGJsb2dzU2tpcClcclxuICAgIGNvbnN0IFtTaXplLCBzZXRTaXplXSA9IHVzZVN0YXRlKHRvdGFsQmxvZ3MpXHJcbiAgICBjb25zdCBbTG9hZGVkQmxvZ3MsIHNldExvYWRlZEJsb2dzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIGNvbnN0IExvYWRNb3JlID0gKCkgPT4ge1xyXG4gICAgICAgIGxldCB0b3NraXAgPSBTa2lwICsgTGltaXRcclxuXHJcbiAgICAgICAgbGlzdEJsb2dzV2l0aENhdGFnb3JpZXNBbmRUYWdzKHRvc2tpcCwgTGltaXQpXHJcbiAgICAgICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkZWRCbG9ncyhbLi4uTG9hZGVkQmxvZ3MsIC4uLmRhdGEuYmxvZ3NdKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTa2lwKHRvc2tpcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0U2l6ZShkYXRhLnNpemUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBMb2FkTW9yZUJ1dHR1biA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICBTaXplID4gMCAmJiBTaXplID49IExpbWl0ICYmIDxidXR0b24gb25DbGljaz17TG9hZE1vcmV9IGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiPkxvYWQgTW9yZTwvYnV0dG9uPlxyXG4gICAgICAgIClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzaG93QWxsQmxvZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2dzICYmIGJsb2dzLm1hcCgoYmxvZywgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPGFydGljbGUga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGJsb2c9e2Jsb2d9IC8+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93TG9hZGVkQmxvZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIExvYWRlZEJsb2dzICYmIExvYWRlZEJsb2dzLm1hcCgoYmxvZywgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPGFydGljbGUga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgIDxDYXJkIGJsb2c9e2Jsb2d9IC8+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93QWxsQ2F0YWdvcmllcyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gY2F0YWdvcmllcyYmIGNhdGFnb3JpZXMubWFwKChjYXRhZ29yeSwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPExpbmsga2V5PXtpfSBocmVmPXtgL2NhdGFnb3JpZXMvJHtjYXRhZ29yeS5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG1sLTEgbXItMSBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhdGFnb3J5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd0FsbFRhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRhZ3MubWFwKCh0YWcsIGkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxMaW5rIGtleT17aX0gaHJlZj17YC90YWdzLyR7dGFnLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtbC0xIG1yLTEgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0YWcubmFtZX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAge2hlYWQoKX1cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNSBmb250LXdlaWdodC1ib2xkIHRleHQtY2VudGVyXCI+UHJvZ3JhbW1pbmcgYmxvZ3Mgd2l0aCByZWFjdDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi01IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dBbGxDYXRhZ29yaWVzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dBbGxUYWdzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+e3Nob3dBbGxCbG9ncygpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+e3Nob3dMb2FkZWRCbG9ncygpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHQtNSBwYi01XCI+e0xvYWRNb3JlQnV0dHVuKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuQmxvZ3MuZ2V0SW5pdGlhbFByb3BzID0gKCkgPT4ge1xyXG4gICAgbGV0IHNraXAgPSAwXHJcbiAgICBsZXQgbGltaXQgPSAyXHJcbiAgICByZXR1cm4gbGlzdEJsb2dzV2l0aENhdGFnb3JpZXNBbmRUYWdzKHNraXAsIGxpbWl0KVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2dzOiBkYXRhLmJsb2dzLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhdGFnb3JpZXM6IGRhdGEuY2F0YWdvcmllcyxcclxuICAgICAgICAgICAgICAgICAgICB0YWdzOiBkYXRhLnRhZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWxCbG9nczogZGF0YS5zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2dzTGltaXQ6IGxpbWl0LFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2dzU2tpcDogc2tpcFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEJsb2dzKSJdLCJzb3VyY2VSb290IjoiIn0=