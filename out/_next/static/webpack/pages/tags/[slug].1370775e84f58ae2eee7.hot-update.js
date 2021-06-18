webpackHotUpdate_N_E("pages/tags/[slug]",{

/***/ "./actions/tag.js":
/*!************************!*\
  !*** ./actions/tag.js ***!
  \************************/
/*! exports provided: create, getTags, removeTag, getTag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTags", function() { return getTags; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeTag", function() { return removeTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTag", function() { return getTag; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./actions/auth.js");



var create = function create(tag, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/tag"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(tag)
  }).then(function (response) {
    Object(_auth__WEBPACK_IMPORTED_MODULE_2__["userSessionExpired"])(response);
    return response.json();
  })["catch"](function (err) {
    return err;
  });
};
var getTags = function getTags() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/tags"), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return err;
  });
};
var removeTag = function removeTag(slug, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/tag/").concat(slug), {
    method: 'DELETE',
    headers: {
      Authorization: "Bearer ".concat(token)
    }
  }).then(function (response) {
    Object(_auth__WEBPACK_IMPORTED_MODULE_2__["userSessionExpired"])(response);
    return response.json();
  })["catch"](function (err) {
    return err;
  });
};
var getTag = function getTag(slug) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/tag/").concat(slug), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return err;
  });
};

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./pages/tags/[slug].js":
/*!******************************!*\
  !*** ./pages/tags/[slug].js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../component/Layout */ "./component/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _actions_tag__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/tag */ "./actions/tag.js");
/* harmony import */ var _component_blog_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../component/blog/Card */ "./component/blog/Card.js");


var _jsxFileName = "C:\\Users\\Quest\\Desktop\\seoblog\\frontend\\pages\\tags\\[slug].js",
    _this = undefined;











var Tag = function Tag(_ref) {
  var tag = _ref.tag,
      blogs = _ref.blogs,
      query = _ref.query;

  var head = function head() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [tag ? tag.name : '', " | ", _config__WEBPACK_IMPORTED_MODULE_7__["APP_NAME"]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "canonical",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["DOMAIN"], "/tags/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(tag ? tag.name : '', " | ").concat(_config__WEBPACK_IMPORTED_MODULE_7__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:url",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["DOMAIN"], "/tags/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:site_name",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    children: [head(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "container-fluid text-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-md-12 pt-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                className: "display-4 font-weight-bold",
                style: {
                  textTransform: 'capitalize'
                },
                children: tag ? tag.name : ''
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 33
              }, _this), blogs && blogs.map(function (blog, i) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_blog_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    blog: blog
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 42,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 43,
                    columnNumber: 41
                  }, _this)]
                }, i, true, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 44
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 9
  }, _this);
};

_c = Tag;

Tag.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return Object(_actions_tag__WEBPACK_IMPORTED_MODULE_8__["getTag"])(query.slug).then(function (data) {
    if (data.err) {
      console.log(data.err);
    } else {
      return {
        tag: data.tag,
        blogs: data.blogs,
        query: query
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Tag);

var _c;

$RefreshReg$(_c, "Tag");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy90YWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RhZ3MvW3NsdWddLmpzIl0sIm5hbWVzIjpbImNyZWF0ZSIsInRhZyIsInRva2VuIiwiZmV0Y2giLCJBUEkiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwidXNlclNlc3Npb25FeHBpcmVkIiwianNvbiIsImVyciIsImdldFRhZ3MiLCJyZW1vdmVUYWciLCJzbHVnIiwiZ2V0VGFnIiwiVGFnIiwiYmxvZ3MiLCJxdWVyeSIsImhlYWQiLCJuYW1lIiwiQVBQX05BTUUiLCJET01BSU4iLCJ0ZXh0VHJhbnNmb3JtIiwibWFwIiwiYmxvZyIsImkiLCJnZXRJbml0aWFsUHJvcHMiLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUNsQyxTQUFPQyx1REFBSyxXQUFJQywyQ0FBSixXQUFlO0FBQ3ZCQyxVQUFNLEVBQUUsTUFEZTtBQUV2QkMsV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxrQkFESDtBQUVMLHNCQUFnQixrQkFGWDtBQUdMQyxtQkFBYSxtQkFBWU4sS0FBWjtBQUhSLEtBRmM7QUFPdkJPLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVWLEdBQWY7QUFQaUIsR0FBZixDQUFMLENBU0ZXLElBVEUsQ0FTRyxVQUFBQyxRQUFRLEVBQUk7QUFDZEMsb0VBQWtCLENBQUNELFFBQUQsQ0FBbEI7QUFDQSxXQUFPQSxRQUFRLENBQUNFLElBQVQsRUFBUDtBQUNILEdBWkUsV0FhSSxVQUFB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LElBQVAsQ0FBTixDQUNGUCxJQURFLENBQ0csVUFBQXFCLElBQUksRUFBSTtBQUNWLFFBQUlBLElBQUksQ0FBQ2pCLEdBQVQsRUFBYztBQUNWa0IsYUFBTyxDQUFDQyxHQUFSLENBQVlGLElBQUksQ0FBQ2pCLEdBQWpCO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsYUFBTztBQUNIZixXQUFHLEVBQUVnQyxJQUFJLENBQUNoQyxHQURQO0FBRUhxQixhQUFLLEVBQUVXLElBQUksQ0FBQ1gsS0FGVDtBQUdIQyxhQUFLLEVBQUxBO0FBSEcsT0FBUDtBQUtIO0FBQ0osR0FaRSxDQUFQO0FBYUgsQ0FkRDs7QUFlZUYsa0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvdGFncy9bc2x1Z10uMTM3MDc3NWU4NGY1OGFlMmVlZTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tICdpc29tb3JwaGljLWZldGNoJ1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tICcuLi9jb25maWcnXHJcbmltcG9ydCB7IHVzZXJTZXNzaW9uRXhwaXJlZCB9IGZyb20gJy4vYXV0aCdcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZSA9ICh0YWcsIHRva2VuKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS90YWdgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRhZylcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB1c2VyU2Vzc2lvbkV4cGlyZWQocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gZXJyKVxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRUYWdzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vdGFnc2AsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBlcnIpXHJcbn1cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVRhZyA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vdGFnLyR7c2x1Z31gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB1c2VyU2Vzc2lvbkV4cGlyZWQocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gZXJyKVxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRUYWcgPSAoc2x1ZykgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vdGFnLyR7c2x1Z31gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gZXJyKVxyXG59IiwiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50L0xheW91dCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IHJlbmRlckhUTUwgZnJvbSBcInJlYWN0LXJlbmRlci1odG1sXCJcclxuaW1wb3J0IHsgQVBJLCBET01BSU4sIEFQUF9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBnZXRUYWcgfSBmcm9tICcuLi8uLi9hY3Rpb25zL3RhZydcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50L2Jsb2cvQ2FyZCdcclxuY29uc3QgVGFnID0gKHsgdGFnLCBibG9ncywgcXVlcnkgfSkgPT4ge1xyXG4gICAgY29uc3QgaGVhZCA9ICgpID0+IChcclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPnt0YWc/dGFnLm5hbWU6Jyd9IHwge0FQUF9OQU1FfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIHsvKiA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwicHJvZ3JhbW1pbmcgYmxvZ3Mgd2l0aCByZWFjdCBub2RlIG5leHRcIiAvPiAqL31cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YCR7RE9NQUlOfS90YWdzLyR7cXVlcnkuc2x1Z31gfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YCR7dGFnP3RhZy5uYW1lOicnfSB8ICR7QVBQX05BTUV9YH0gLz5cclxuICAgICAgICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwicHJvZ3JhbW1pbmcgYmxvZ3Mgd2l0aCByZWFjdCBub2RlIG5leHRcIiAvPiAqL31cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgICA8bGluayBwcm9wZXJ0eT1cIm9nOnVybFwiIGhyZWY9e2Ake0RPTUFJTn0vdGFncy8ke3F1ZXJ5LnNsdWd9YH0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPlxyXG4gICAgICAgICAgICB7LyogPGxpbmsgcHJvcGVydHk9XCJvZzppbWFnZVwiIGhyZWY9e2Ake0FQUF9OQU1FfWB9IC8+XHJcbiAgICA8bGluayBwcm9wZXJ0eT1cIm9nOmltYWdlOnNlY3VyZV91cmxcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPlxyXG4gICAgPGxpbmsgcHJvcGVydHk9XCJvZzppbWFnZTp0eXBlXCIgaHJlZj17YCR7QVBQX05BTUV9YH0gLz4gXHJcbiAgICAgPGxpbmsgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPiAgKi99XHJcblxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgIClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB7aGVhZCgpfVxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIHB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00IGZvbnQtd2VpZ2h0LWJvbGRcIiBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0YWc/dGFnLm5hbWU6Jyd9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2dzICYmIGJsb2dzLm1hcCgoYmxvZywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGFydGljbGUga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGJsb2c9e2Jsb2d9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblRhZy5nZXRJbml0aWFsUHJvcHMgPSAoeyBxdWVyeSB9KSA9PiB7XHJcbiAgICByZXR1cm4gZ2V0VGFnKHF1ZXJ5LnNsdWcpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZzogZGF0YS50YWcsXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvZ3M6IGRhdGEuYmxvZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVGFnXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=