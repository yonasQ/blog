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
        children: [tag.name, " | ", _config__WEBPACK_IMPORTED_MODULE_7__["APP_NAME"]]
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
        content: "".concat(tag.name, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_7__["APP_NAME"])
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
                children: tagtag.name
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy90YWcuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3RhZ3MvW3NsdWddLmpzIl0sIm5hbWVzIjpbImNyZWF0ZSIsInRhZyIsInRva2VuIiwiZmV0Y2giLCJBUEkiLCJtZXRob2QiLCJoZWFkZXJzIiwiQWNjZXB0IiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGhlbiIsInJlc3BvbnNlIiwidXNlclNlc3Npb25FeHBpcmVkIiwianNvbiIsImVyciIsImdldFRhZ3MiLCJyZW1vdmVUYWciLCJzbHVnIiwiZ2V0VGFnIiwiVGFnIiwiYmxvZ3MiLCJxdWVyeSIsImhlYWQiLCJuYW1lIiwiQVBQX05BTUUiLCJET01BSU4iLCJ0ZXh0VHJhbnNmb3JtIiwidGFndGFnIiwibWFwIiwiYmxvZyIsImkiLCJnZXRJbml0aWFsUHJvcHMiLCJkYXRhIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEdBQUQsRUFBTUMsS0FBTixFQUFnQjtBQUNsQyxTQUFPQyx1REFBSyxXQUFJQywyQ0FBSixXQUFlO0FBQ3ZCQyxVQUFNLEVBQUUsTUFEZTtBQUV2QkMsV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxrQkFESDtBQUVMLHNCQUFnQixrQkFGWDtBQUdMQyxtQkFBYSxtQkFBWU4sS0FBWjtBQUhSLEtBRmM7QUFPdkJPLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVWLEdBQWY7QUFQaUIsR0FBZixDQUFMLENBU0ZXLElBVEUsQ0FTRyxVQUFBQyxRQUFRLEVBQUk7QUFDZEMsb0VBQWtCLENBQUNELFFBQUQsQ0FBbEI7QUFDQSxXQUFPQSxRQUFRLENBQUNFLElBQVQsRUFBUDtBQUNILEdBWkUs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LENBQUNsQixHQUFULEVBQWM7QUFDVm1CLGFBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFJLENBQUNsQixHQUFqQjtBQUNILEtBRkQsTUFHSztBQUNELGFBQU87QUFDSGYsV0FBRyxFQUFFaUMsSUFBSSxDQUFDakMsR0FEUDtBQUVIcUIsYUFBSyxFQUFFWSxJQUFJLENBQUNaLEtBRlQ7QUFHSEMsYUFBSyxFQUFMQTtBQUhHLE9BQVA7QUFLSDtBQUNKLEdBWkUsQ0FBUDtBQWFILENBZEQ7O0FBZWVGLGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RhZ3MvW3NsdWddLjIzY2NhNmVjZGVlNmNkYWU5Y2Y1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCdcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSAnLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyB1c2VyU2Vzc2lvbkV4cGlyZWQgfSBmcm9tICcuL2F1dGgnXHJcbmV4cG9ydCBjb25zdCBjcmVhdGUgPSAodGFnLCB0b2tlbikgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vdGFnYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh0YWcpXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdXNlclNlc3Npb25FeHBpcmVkKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGVycilcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0VGFncyA9ICgpID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L3RhZ3NgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gZXJyKVxyXG59XHJcbmV4cG9ydCBjb25zdCByZW1vdmVUYWcgPSAoc2x1ZywgdG9rZW4pID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L3RhZy8ke3NsdWd9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgIH0sXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgdXNlclNlc3Npb25FeHBpcmVkKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGVycilcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0VGFnID0gKHNsdWcpID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L3RhZy8ke3NsdWd9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGVycilcclxufSIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudC9MYXlvdXQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCByZW5kZXJIVE1MIGZyb20gXCJyZWFjdC1yZW5kZXItaHRtbFwiXHJcbmltcG9ydCB7IEFQSSwgRE9NQUlOLCBBUFBfTkFNRSB9IGZyb20gJy4uLy4uL2NvbmZpZydcclxuaW1wb3J0IHsgZ2V0VGFnIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy90YWcnXHJcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudC9ibG9nL0NhcmQnXHJcbmNvbnN0IFRhZyA9ICh7IHRhZywgYmxvZ3MsIHF1ZXJ5IH0pID0+IHtcclxuICAgIGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57dGFnLm5hbWV9IHwge0FQUF9OQU1FfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIHsvKiA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwicHJvZ3JhbW1pbmcgYmxvZ3Mgd2l0aCByZWFjdCBub2RlIG5leHRcIiAvPiAqL31cclxuICAgICAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YCR7RE9NQUlOfS90YWdzLyR7cXVlcnkuc2x1Z31gfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YCR7dGFnLm5hbWV9IHwgJHtBUFBfTkFNRX1gfSAvPlxyXG4gICAgICAgICAgICB7LyogPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJwcm9ncmFtbWluZyBibG9ncyB3aXRoIHJlYWN0IG5vZGUgbmV4dFwiIC8+ICovfVxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHByb3BlcnR5PVwib2c6dXJsXCIgaHJlZj17YCR7RE9NQUlOfS90YWdzLyR7cXVlcnkuc2x1Z31gfSAvPlxyXG4gICAgICAgICAgICA8bGluayBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGhyZWY9e2Ake0FQUF9OQU1FfWB9IC8+XHJcbiAgICAgICAgICAgIHsvKiA8bGluayBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgaHJlZj17YCR7QVBQX05BTUV9YH0gLz5cclxuICAgIDxsaW5rIHByb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiIGhyZWY9e2Ake0FQUF9OQU1FfWB9IC8+XHJcbiAgICA8bGluayBwcm9wZXJ0eT1cIm9nOmltYWdlOnR5cGVcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPiBcclxuICAgICA8bGluayBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGhyZWY9e2Ake0FQUF9OQU1FfWB9IC8+ICAqL31cclxuXHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgKVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHtoZWFkKCl9XHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgcHQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTQgZm9udC13ZWlnaHQtYm9sZFwiIHN0eWxlPXt7IHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RhZ3RhZy5uYW1lfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9ncyAmJiBibG9ncy5tYXAoKGJsb2csIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhcnRpY2xlIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBibG9nPXtibG9nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5UYWcuZ2V0SW5pdGlhbFByb3BzID0gKHsgcXVlcnkgfSkgPT4ge1xyXG4gICAgcmV0dXJuIGdldFRhZyhxdWVyeS5zbHVnKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWc6IGRhdGEudGFnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2dzOiBkYXRhLmJsb2dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRhZ1xyXG4iXSwic291cmNlUm9vdCI6IiJ9