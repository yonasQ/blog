webpackHotUpdate_N_E("pages/catagories/[slug]",{

/***/ "./actions/catagory.js":
/*!*****************************!*\
  !*** ./actions/catagory.js ***!
  \*****************************/
/*! exports provided: create, getCatagories, removeCatagory, getCatagory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "create", function() { return create; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCatagories", function() { return getCatagories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCatagory", function() { return removeCatagory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCatagory", function() { return getCatagory; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./actions/auth.js");



var create = function create(catagory, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/catagory"), {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer ".concat(token)
    },
    body: JSON.stringify(catagory)
  }).then(function (response) {
    Object(_auth__WEBPACK_IMPORTED_MODULE_2__["userSessionExpired"])(response);
    return response.json();
  })["catch"](function (err) {
    return err;
  });
};
var getCatagories = function getCatagories() {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/catagories"), {
    method: 'GET'
  }).then(function (response) {
    return response.json();
  })["catch"](function (err) {
    return err;
  });
};
var removeCatagory = function removeCatagory(slug, token) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/catagory/").concat(slug), {
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
var getCatagory = function getCatagory(slug) {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()("".concat(_config__WEBPACK_IMPORTED_MODULE_1__["API"], "/catagory/").concat(slug), {
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

/***/ "./pages/catagories/[slug].js":
/*!************************************!*\
  !*** ./pages/catagories/[slug].js ***!
  \************************************/
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
/* harmony import */ var _actions_catagory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../actions/catagory */ "./actions/catagory.js");
/* harmony import */ var _component_blog_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../component/blog/Card */ "./component/blog/Card.js");


var _jsxFileName = "C:\\Users\\Quest\\Desktop\\seoblog\\frontend\\pages\\catagories\\[slug].js",
    _this = undefined;











var Catagory = function Catagory(_ref) {
  var catagory = _ref.catagory,
      blogs = _ref.blogs,
      query = _ref.query;

  var head = function head() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [catagory.name, " | ", _config__WEBPACK_IMPORTED_MODULE_7__["APP_NAME"]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "canonical",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["DOMAIN"], "/catagories/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(catagory.name, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_7__["APP_NAME"])
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
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_7__["DOMAIN"], "/catagories/").concat(query.slug)
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
                children: catagory.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 33
              }, _this), blogs.map(function (blog, i) {
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
}; // Catagory.getInitialProps = ({ query }) => {
//     return getCatagory(query.slug)
//         .then(data => {
//             if (data.err) {
//                 console.log(data.err)
//             }
//             else {
//                 return {
//                     catagory: data.catagory,
//                     blogs: data.blogs,
//                     query
//                 }
//             }
//         })
// }


_c = Catagory;
/* harmony default export */ __webpack_exports__["default"] = (Catagory);

var _c;

$RefreshReg$(_c, "Catagory");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYWN0aW9ucy9jYXRhZ29yeS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0YWdvcmllcy9bc2x1Z10uanMiXSwibmFtZXMiOlsiY3JlYXRlIiwiY2F0YWdvcnkiLCJ0b2tlbiIsImZldGNoIiwiQVBJIiwibWV0aG9kIiwiaGVhZGVycyIsIkFjY2VwdCIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXNwb25zZSIsInVzZXJTZXNzaW9uRXhwaXJlZCIsImpzb24iLCJlcnIiLCJnZXRDYXRhZ29yaWVzIiwicmVtb3ZlQ2F0YWdvcnkiLCJzbHVnIiwiZ2V0Q2F0YWdvcnkiLCJDYXRhZ29yeSIsImJsb2dzIiwicXVlcnkiLCJoZWFkIiwibmFtZSIsIkFQUF9OQU1FIiwiRE9NQUlOIiwidGV4dFRyYW5zZm9ybSIsIm1hcCIsImJsb2ciLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ08sSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsUUFBRCxFQUFXQyxLQUFYLEVBQXFCO0FBQ3ZDLFNBQU9DLHVEQUFLLFdBQUlDLDJDQUFKLGdCQUFvQjtBQUM1QkMsVUFBTSxFQUFFLE1BRG9CO0FBRTVCQyxXQUFPLEVBQUU7QUFDTEMsWUFBTSxFQUFFLGtCQURIO0FBRUwsc0JBQWdCLGtCQUZYO0FBR0xDLG1CQUFhLG1CQUFZTixLQUFaO0FBSFIsS0FGbUI7QUFPNUJPLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVWLFFBQWY7QUFQc0IsR0FBcEIsQ0FBTCxDQVNGVyxJQVRFLENBU0csVUFBQUMsUUFBUSxFQUFJO0FBQ2RDLG9FQUFrQixDQUFDRCxRQUFELENBQWxCO0FBQ0EsV0FBT0EsUUFBUSxDQUFDRSxJQUFULEVBQVA7QUFDSCxHQVpFLFdBYUksVUFB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QUE7QUFBQTtBQUFBO0FBQUEsYUFEUztBQUFBLEdBQWI7O0FBaUJBLHNCQUNJLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLGVBQ0tGLElBQUksRUFEVCxlQUVJLHFFQUFDLHlEQUFEO0FBQUEsNkJBQ0k7QUFBQSwrQkFDSTtBQUFLLG1CQUFTLEVBQUMsNkJBQWY7QUFBQSxpQ0FDSTtBQUFBLG1DQUNJO0FBQUssdUJBQVMsRUFBQyxnQkFBZjtBQUFBLHNDQUNJO0FBQUkseUJBQVMsRUFBQyw0QkFBZDtBQUEyQyxxQkFBSyxFQUFFO0FBQUVJLCtCQUFhLEVBQUU7QUFBakIsaUJBQWxEO0FBQUEsMEJBQ00zQixRQUFRLENBQUN3QjtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosRUFLS0gsS0FBSyxDQUFDTyxHQUFOLENBQVUsVUFBQ0MsSUFBRCxFQUFPQyxDQUFQLEVBQWE7QUFDcEIsb0NBQU87QUFBQSwwQ0FDSCxxRUFBQyw0REFBRDtBQUFNLHdCQUFJLEVBQUVEO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFERyxlQUVIO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkc7QUFBQSxtQkFBY0MsQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUFQO0FBSUgsZUFMQSxDQUxMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXlCSCxDQTNDRCxDLENBNENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0tBMURNVixRO0FBNERTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRhZ29yaWVzL1tzbHVnXS44ZjdmMmU5M2MwZWUwODM0ZGZmNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gJ2lzb21vcnBoaWMtZmV0Y2gnXHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZydcclxuaW1wb3J0IHsgdXNlclNlc3Npb25FeHBpcmVkIH0gZnJvbSAnLi9hdXRoJ1xyXG5leHBvcnQgY29uc3QgY3JlYXRlID0gKGNhdGFnb3J5LCB0b2tlbikgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vY2F0YWdvcnlgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGNhdGFnb3J5KVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHVzZXJTZXNzaW9uRXhwaXJlZChyZXNwb25zZSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBlcnIpXHJcbn1cclxuZXhwb3J0IGNvbnN0IGdldENhdGFnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9jYXRhZ29yaWVzYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGVycilcclxufVxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ2F0YWdvcnkgPSAoc2x1ZywgdG9rZW4pID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L2NhdGFnb3J5LyR7c2x1Z31gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICB1c2VyU2Vzc2lvbkV4cGlyZWQocmVzcG9uc2UpXHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gZXJyKVxyXG59XHJcbmV4cG9ydCBjb25zdCBnZXRDYXRhZ29yeSA9IChzbHVnKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9jYXRhZ29yeS8ke3NsdWd9YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGVycilcclxufSIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudC9MYXlvdXQnXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCByZW5kZXJIVE1MIGZyb20gXCJyZWFjdC1yZW5kZXItaHRtbFwiXHJcbmltcG9ydCB7IEFQSSwgRE9NQUlOLCBBUFBfTkFNRSB9IGZyb20gJy4uLy4uL2NvbmZpZydcclxuaW1wb3J0IHsgZ2V0Q2F0YWdvcnkgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NhdGFnb3J5J1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnQvYmxvZy9DYXJkJ1xyXG5jb25zdCBDYXRhZ29yeSA9ICh7IGNhdGFnb3J5LCBibG9ncywgcXVlcnkgfSkgPT4ge1xyXG4gICAgY29uc3QgaGVhZCA9ICgpID0+IChcclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntjYXRhZ29yeS5uYW1lfSB8IHtBUFBfTkFNRX08L3RpdGxlPlxyXG4gICAgICAgICAgICB7LyogPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cInByb2dyYW1taW5nIGJsb2dzIHdpdGggcmVhY3Qgbm9kZSBuZXh0XCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Ake0RPTUFJTn0vY2F0YWdvcmllcy8ke3F1ZXJ5LnNsdWd9YH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2AkeyBjYXRhZ29yeS5uYW1lfSB8ICR7QVBQX05BTUV9YH0gLz5cclxuICAgICAgICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwicHJvZ3JhbW1pbmcgYmxvZ3Mgd2l0aCByZWFjdCBub2RlIG5leHRcIiAvPiAqL31cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgICA8bGluayBwcm9wZXJ0eT1cIm9nOnVybFwiIGhyZWY9e2Ake0RPTUFJTn0vY2F0YWdvcmllcy8ke3F1ZXJ5LnNsdWd9YH0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPlxyXG4gICAgICAgICAgICB7LyogPGxpbmsgcHJvcGVydHk9XCJvZzppbWFnZVwiIGhyZWY9e2Ake0FQUF9OQU1FfWB9IC8+XHJcbiAgICA8bGluayBwcm9wZXJ0eT1cIm9nOmltYWdlOnNlY3VyZV91cmxcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPlxyXG4gICAgPGxpbmsgcHJvcGVydHk9XCJvZzppbWFnZTp0eXBlXCIgaHJlZj17YCR7QVBQX05BTUV9YH0gLz4gXHJcbiAgICAgPGxpbmsgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPiAgKi99XHJcblxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgIClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB7aGVhZCgpfVxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIHB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00IGZvbnQtd2VpZ2h0LWJvbGRcIiBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2F0YWdvcnkubmFtZX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvZ3MubWFwKChibG9nLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8YXJ0aWNsZSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcmQgYmxvZz17YmxvZ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuLy8gQ2F0YWdvcnkuZ2V0SW5pdGlhbFByb3BzID0gKHsgcXVlcnkgfSkgPT4ge1xyXG4vLyAgICAgcmV0dXJuIGdldENhdGFnb3J5KHF1ZXJ5LnNsdWcpXHJcbi8vICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbi8vICAgICAgICAgICAgIGlmIChkYXRhLmVycikge1xyXG4vLyAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnIpXHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGNhdGFnb3J5OiBkYXRhLmNhdGFnb3J5LFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJsb2dzOiBkYXRhLmJsb2dzLFxyXG4vLyAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICB9KVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXRhZ29yeVxyXG4iXSwic291cmNlUm9vdCI6IiJ9