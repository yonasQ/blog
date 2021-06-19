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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiQmxvZ3MiLCJibG9ncyIsImNhdGFnb3JpZXMiLCJ0YWdzIiwidG90YWxCbG9ncyIsImJsb2dzTGltaXQiLCJibG9nc1NraXAiLCJyb3V0ZXIiLCJoZWFkIiwiQVBQX05BTUUiLCJET01BSU4iLCJwYXRobmFtZSIsInVzZVN0YXRlIiwiTGltaXQiLCJzZXRMaW1pdCIsIlNraXAiLCJzZXRTa2lwIiwiU2l6ZSIsInNldFNpemUiLCJMb2FkZWRCbG9ncyIsInNldExvYWRlZEJsb2dzIiwiTG9hZE1vcmUiLCJ0b3NraXAiLCJsaXN0QmxvZ3NXaXRoQ2F0YWdvcmllc0FuZFRhZ3MiLCJ0aGVuIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJzaXplIiwiTG9hZE1vcmVCdXR0dW4iLCJzaG93QWxsQmxvZ3MiLCJtYXAiLCJibG9nIiwiaSIsInNob3dMb2FkZWRCbG9ncyIsInNob3dBbGxDYXRhZ29yaWVzIiwiY2F0YWdvcnkiLCJzbHVnIiwibmFtZSIsInNob3dBbGxUYWdzIiwidGFnIiwiZ2V0SW5pdGlhbFByb3BzIiwic2tpcCIsImxpbWl0Iiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUE0RTtBQUFBOztBQUFBLE1BQXpFQyxLQUF5RSxRQUF6RUEsS0FBeUU7QUFBQSxNQUFsRUMsVUFBa0UsUUFBbEVBLFVBQWtFO0FBQUEsTUFBdERDLElBQXNELFFBQXREQSxJQUFzRDtBQUFBLE1BQWhEQyxVQUFnRCxRQUFoREEsVUFBZ0Q7QUFBQSxNQUFwQ0MsVUFBb0MsUUFBcENBLFVBQW9DO0FBQUEsTUFBeEJDLFNBQXdCLFFBQXhCQSxTQUF3QjtBQUFBLE1BQWJDLE1BQWEsUUFB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQTBCSCxDQXhHRDs7R0FBTTlCLEs7O0tBQUFBLEs7O0FBeUdOQSxLQUFLLENBQUMwQyxlQUFOLEdBQXdCLFlBQU07QUFDMUIsTUFBSUMsSUFBSSxHQUFHLENBQVg7QUFDQSxNQUFJQyxLQUFLLEdBQUcsQ0FBWjtBQUNBLFNBQU9yQixvRkFBOEIsQ0FBQ29CLElBQUQsRUFBT0MsS0FBUCxDQUE5QixDQUNGcEIsSUFERSxDQUNHLFVBQUNDLElBQUQsRUFBVTtBQUNaLFFBQUlBLElBQUksQ0FBQ0MsR0FBVCxFQUFjO0FBQ1ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFJLENBQUNDLEdBQWpCO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsYUFBTztBQUNIekIsYUFBSyxFQUFFd0IsSUFBSSxDQUFDeEIsS0FEVDtBQUVIQyxrQkFBVSxFQUFFdUIsSUFBSSxDQUFDdkIsVUFGZDtBQUdIQyxZQUFJLEVBQUVzQixJQUFJLENBQUN0QixJQUhSO0FBSUhDLGtCQUFVLEVBQUVxQixJQUFJLENBQUNJLElBSmQ7QUFLSHhCLGtCQUFVLEVBQUV1QyxLQUxUO0FBTUh0QyxpQkFBUyxFQUFFcUM7QUFOUixPQUFQO0FBUUg7QUFDSixHQWZFLENBQVA7QUFnQkgsQ0FuQkQ7O0FBb0JlLHFFQUFBRSw4REFBVSxDQUFDN0MsS0FBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9ncy41YzQ4ZTYxOTQ3NmI0YTdiZDg3ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50L0xheW91dCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGxpc3RCbG9nc1dpdGhDYXRhZ29yaWVzQW5kVGFncyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYmxvZydcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50L2Jsb2cvQ2FyZCdcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBBUEksIERPTUFJTiwgQVBQX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcnXHJcbmNvbnN0IEJsb2dzID0gKHsgYmxvZ3MsIGNhdGFnb3JpZXMsIHRhZ3MsIHRvdGFsQmxvZ3MsIGJsb2dzTGltaXQsIGJsb2dzU2tpcCwgcm91dGVyIH0pID0+IHtcclxuICAgIGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT5wcm9ncmFtbWluZyBibG9ncyB8IHtBUFBfTkFNRX08L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwicHJvZ3JhbW1pbmcgYmxvZ3Mgd2l0aCByZWFjdCBub2RlIG5leHRcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtgJHtET01BSU59JHtyb3V0ZXIucGF0aG5hbWV9YH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2BsYXRlc3QgdHV0b3JpYWwgb24gZGV2ZWxvcG1lbnQgJHtBUFBfTkFNRX1gfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cInByb2dyYW1taW5nIGJsb2dzIHdpdGggcmVhY3Qgbm9kZSBuZXh0XCIgLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgICA8bGluayBwcm9wZXJ0eT1cIm9nOnVybFwiIGhyZWY9e2Ake0RPTUFJTn0ke3JvdXRlci5wYXRobmFtZX1gfSAvPlxyXG4gICAgICAgICAgICA8bGluayBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGhyZWY9e2Ake0FQUF9OQU1FfWB9IC8+XHJcbiAgICAgICAgICAgIHsvKiA8bGluayBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgaHJlZj17YCR7QVBQX05BTUV9YH0gLz5cclxuICAgIDxsaW5rIHByb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiIGhyZWY9e2Ake0FQUF9OQU1FfWB9IC8+XHJcbiAgICA8bGluayBwcm9wZXJ0eT1cIm9nOmltYWdlOnR5cGVcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPiBcclxuICAgICA8bGluayBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGhyZWY9e2Ake0FQUF9OQU1FfWB9IC8+ICAqL31cclxuXHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgKVxyXG4gICAgY29uc3QgW0xpbWl0LCBzZXRMaW1pdF0gPSB1c2VTdGF0ZShibG9nc0xpbWl0KVxyXG4gICAgY29uc3QgW1NraXAsIHNldFNraXBdID0gdXNlU3RhdGUoYmxvZ3NTa2lwKVxyXG4gICAgY29uc3QgW1NpemUsIHNldFNpemVdID0gdXNlU3RhdGUodG90YWxCbG9ncylcclxuICAgIGNvbnN0IFtMb2FkZWRCbG9ncywgc2V0TG9hZGVkQmxvZ3NdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gICAgY29uc3QgTG9hZE1vcmUgPSAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHRvc2tpcCA9IFNraXAgKyBMaW1pdFxyXG5cclxuICAgICAgICBsaXN0QmxvZ3NXaXRoQ2F0YWdvcmllc0FuZFRhZ3ModG9za2lwLCBMaW1pdClcclxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRlZEJsb2dzKFsuLi5Mb2FkZWRCbG9ncywgLi4uZGF0YS5ibG9nc10pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFNraXAodG9za2lwKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRTaXplKGRhdGEuc2l6ZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IExvYWRNb3JlQnV0dHVuID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIFNpemUgPiAwICYmIFNpemUgPj0gTGltaXQgJiYgPGJ1dHRvbiBvbkNsaWNrPXtMb2FkTW9yZX0gY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+TG9hZCBNb3JlPC9idXR0b24+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNob3dBbGxCbG9ncyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYmxvZ3MgJiYgYmxvZ3MubWFwKChibG9nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8YXJ0aWNsZSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgPENhcmQgYmxvZz17YmxvZ30gLz5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHNob3dMb2FkZWRCbG9ncyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gTG9hZGVkQmxvZ3MgJiYgTG9hZGVkQmxvZ3MubWFwKChibG9nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8YXJ0aWNsZSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgPENhcmQgYmxvZz17YmxvZ30gLz5cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbnN0IHNob3dBbGxDYXRhZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBjYXRhZ29yaWVzICYmIGNhdGFnb3JpZXMubWFwKChjYXRhZ29yeSwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPExpbmsga2V5PXtpfSBocmVmPXtgL2NhdGFnb3JpZXMvJHtjYXRhZ29yeS5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG1sLTEgbXItMSBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NhdGFnb3J5Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd0FsbFRhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRhZ3MgJiYgdGFncy5tYXAoKHRhZywgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gPExpbmsga2V5PXtpfSBocmVmPXtgL3RhZ3MvJHt0YWcuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1sLTEgbXItMSBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RhZy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB7aGVhZCgpfVxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIHB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS01IGZvbnQtd2VpZ2h0LWJvbGQgdGV4dC1jZW50ZXJcIj5Qcm9ncmFtbWluZyBibG9ncyB3aXRoIHJlYWN0PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTUgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0FsbENhdGFnb3JpZXMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2hvd0FsbFRhZ3MoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj57c2hvd0FsbEJsb2dzKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj57c2hvd0xvYWRlZEJsb2dzKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwdC01IHBiLTVcIj57TG9hZE1vcmVCdXR0dW4oKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5CbG9ncy5nZXRJbml0aWFsUHJvcHMgPSAoKSA9PiB7XHJcbiAgICBsZXQgc2tpcCA9IDBcclxuICAgIGxldCBsaW1pdCA9IDJcclxuICAgIHJldHVybiBsaXN0QmxvZ3NXaXRoQ2F0YWdvcmllc0FuZFRhZ3Moc2tpcCwgbGltaXQpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvZ3M6IGRhdGEuYmxvZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0YWdvcmllczogZGF0YS5jYXRhZ29yaWVzLFxyXG4gICAgICAgICAgICAgICAgICAgIHRhZ3M6IGRhdGEudGFncyxcclxuICAgICAgICAgICAgICAgICAgICB0b3RhbEJsb2dzOiBkYXRhLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvZ3NMaW1pdDogbGltaXQsXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvZ3NTa2lwOiBza2lwXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoQmxvZ3MpIl0sInNvdXJjZVJvb3QiOiIifQ==