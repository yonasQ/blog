webpackHotUpdate_N_E("pages/catagories/[slug]",{

/***/ "./pages/catagories/[slug].js":
/*!************************************!*\
  !*** ./pages/catagories/[slug].js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_Quest_Desktop_seoblog_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Quest_Desktop_seoblog_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_Quest_Desktop_seoblog_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_Quest_Desktop_seoblog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _component_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../component/Layout */ "./component/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _actions_catagory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../actions/catagory */ "./actions/catagory.js");
/* harmony import */ var _component_blog_Card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../component/blog/Card */ "./component/blog/Card.js");




var _jsxFileName = "C:\\Users\\Quest\\Desktop\\seoblog\\frontend\\pages\\catagories\\[slug].js",
    _this = undefined;











var Catagory = function Catagory(_ref) {
  var catagory = _ref.catagory,
      blogs = _ref.blogs,
      qu = _ref.qu,
      router = _ref.router;
  var query = router.query;
  console.log(query.slug);

  var head = function head() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("title", {
        children: [catagory ? catagory.name : '', " | ", _config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        rel: "canonical",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"], "/catagories/").concat(qu.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(catagory ? catagory.name : '', " | ").concat(_config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        property: "og:url",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"], "/catagories/").concat(qu.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("link", {
        property: "og:site_name",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, {
    children: [head(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_Layout__WEBPACK_IMPORTED_MODULE_5__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("main", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "container-fluid text-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("header", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
              className: "col-md-12 pt-3",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
                className: "display-4 font-weight-bold",
                style: {
                  textTransform: 'capitalize'
                },
                children: catagory ? catagory.name : ''
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 33
              }, _this), blogs && blogs.map(function (blog, i) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("article", {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_component_blog_Card__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    blog: blog
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 45,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("hr", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 46,
                    columnNumber: 41
                  }, _this)]
                }, i, true, {
                  fileName: _jsxFileName,
                  lineNumber: 44,
                  columnNumber: 44
                }, _this);
              })]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, _this);
};

_c = Catagory;

Catagory.getInitialProps = /*#__PURE__*/function () {
  var _ref3 = Object(C_Users_Quest_Desktop_seoblog_frontend_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_Quest_Desktop_seoblog_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query;
    return C_Users_Quest_Desktop_seoblog_frontend_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            _context.next = 3;
            return Object(_actions_catagory__WEBPACK_IMPORTED_MODULE_10__["getCatagory"])(query.slug).then(function (data) {
              if (data.err) {
                console.log(data.err);
              } else {
                return {
                  catagory: data.catagory,
                  blogs: data.blogs,
                  qu: query
                };
              }
            });

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(Catagory));

var _c, _c2;

$RefreshReg$(_c, "Catagory");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2F0YWdvcmllcy9bc2x1Z10uanMiXSwibmFtZXMiOlsiQ2F0YWdvcnkiLCJjYXRhZ29yeSIsImJsb2dzIiwicXUiLCJyb3V0ZXIiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJzbHVnIiwiaGVhZCIsIm5hbWUiLCJBUFBfTkFNRSIsIkRPTUFJTiIsInRleHRUcmFuc2Zvcm0iLCJtYXAiLCJibG9nIiwiaSIsImdldEluaXRpYWxQcm9wcyIsImdldENhdGFnb3J5IiwidGhlbiIsImRhdGEiLCJlcnIiLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQW1DO0FBQUEsTUFBaENDLFFBQWdDLFFBQWhDQSxRQUFnQztBQUFBLE1BQXRCQyxLQUFzQixRQUF0QkEsS0FBc0I7QUFBQSxNQUFoQkMsRUFBZ0IsUUFBaEJBLEVBQWdCO0FBQUEsTUFBWkMsTUFBWSxRQUFaQSxNQUFZO0FBQUEsTUFDN0NDLEtBRDZDLEdBQ3JDRCxNQURxQyxDQUM3Q0MsS0FENkM7QUFFcERDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFLLENBQUNHLElBQWxCOztBQUNJLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsd0JBQ1QscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBLG1CQUFRUixRQUFRLEdBQUNBLFFBQVEsQ0FBQ1MsSUFBVixHQUFlLEVBQS9CLFNBQXNDQyxnREFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFHSTtBQUFNLFdBQUcsRUFBQyxXQUFWO0FBQXNCLFlBQUksWUFBS0MsOENBQUwseUJBQTBCVCxFQUFFLENBQUNLLElBQTdCO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFISixlQUlJO0FBQU0sZ0JBQVEsRUFBQyxVQUFmO0FBQTBCLGVBQU8sWUFBTVAsUUFBUSxHQUFDQSxRQUFRLENBQUNTLElBQVYsR0FBZSxFQUE3QixnQkFBcUNDLGdEQUFyQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFNSTtBQUFNLGdCQUFRLEVBQUMsU0FBZjtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQU5KLGVBT0k7QUFBTSxnQkFBUSxFQUFDLFFBQWY7QUFBd0IsWUFBSSxZQUFLQyw4Q0FBTCx5QkFBMEJULEVBQUUsQ0FBQ0ssSUFBN0I7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVBKLGVBUUk7QUFBTSxnQkFBUSxFQUFDLGNBQWY7QUFBOEIsWUFBSSxZQUFLRyxnREFBTDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFM7QUFBQSxHQUFiOztBQWlCQSxzQkFDSSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSxlQUNLRixJQUFJLEVBRFQsZUFFSSxxRUFBQyx5REFBRDtBQUFBLDZCQUNJO0FBQUEsK0JBQ0k7QUFBSyxtQkFBUyxFQUFDLDZCQUFmO0FBQUEsaUNBQ0k7QUFBQSxtQ0FDSTtBQUFLLHVCQUFTLEVBQUMsZ0JBQWY7QUFBQSxzQ0FDSTtBQUFJLHlCQUFTLEVBQUMsNEJBQWQ7QUFBMkMscUJBQUssRUFBRTtBQUFFSSwrQkFBYSxFQUFFO0FBQWpCLGlCQUFsRDtBQUFBLDBCQUNNWixRQUFRLEdBQUNBLFFBQVEsQ0FBQ1MsSUFBVixHQUFlO0FBRDdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosRUFLS1IsS0FBSyxJQUFJQSxLQUFLLENBQUNZLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUM3QixvQ0FBTztBQUFBLDBDQUNILHFFQUFDLDZEQUFEO0FBQU0sd0JBQUksRUFBRUQ7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURHLGVBRUg7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRztBQUFBLG1CQUFjQyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQVA7QUFJSCxlQUxTLENBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBeUJILENBN0NEOztLQUFNaEIsUTs7QUE4Q05BLFFBQVEsQ0FBQ2lCLGVBQVQ7QUFBQSxxU0FBMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVFaLGlCQUFSLFNBQVFBLEtBQVI7QUFBQTtBQUFBLG1CQUNWYSxzRUFBVyxDQUFDYixLQUFLLENBQUNHLElBQVAsQ0FBWCxDQUNSVyxJQURRLENBQ0gsVUFBQUMsSUFBSSxFQUFJO0FBQ1Ysa0JBQUlBLElBQUksQ0FBQ0MsR0FBVCxFQUFjO0FBQ1ZmLHVCQUFPLENBQUNDLEdBQVIsQ0FBWWEsSUFBSSxDQUFDQyxHQUFqQjtBQUNILGVBRkQsTUFHSztBQUNELHVCQUFPO0FBQ0hwQiwwQkFBUSxFQUFFbUIsSUFBSSxDQUFDbkIsUUFEWjtBQUVIQyx1QkFBSyxFQUFFa0IsSUFBSSxDQUFDbEIsS0FGVDtBQUdIQyxvQkFBRSxFQUFDRTtBQUhBLGlCQUFQO0FBS0g7QUFDSixhQVpRLENBRFU7O0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUEzQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFnQmUscUVBQUFpQiw4REFBVSxDQUFDdEIsUUFBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXRhZ29yaWVzL1tzbHVnXS5kMmNkYzlmMmU2ZWZmMjc1OGIyYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50L0xheW91dCdcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IHJlbmRlckhUTUwgZnJvbSBcInJlYWN0LXJlbmRlci1odG1sXCJcclxuaW1wb3J0IHsgQVBJLCBET01BSU4sIEFQUF9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5pbXBvcnQgeyBnZXRDYXRhZ29yeSB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY2F0YWdvcnknXHJcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudC9ibG9nL0NhcmQnXHJcblxyXG5jb25zdCBDYXRhZ29yeSA9ICh7IGNhdGFnb3J5LCBibG9ncyxxdSwgcm91dGVyfSkgPT4ge1xyXG5jb25zdCB7cXVlcnl9ID1yb3V0ZXJcclxuY29uc29sZS5sb2cocXVlcnkuc2x1ZylcclxuICAgIGNvbnN0IGhlYWQgPSAoKSA9PiAoXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDx0aXRsZT57Y2F0YWdvcnk/Y2F0YWdvcnkubmFtZTonJ30gfCB7QVBQX05BTUV9PC90aXRsZT5cclxuICAgICAgICAgICAgey8qIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJwcm9ncmFtbWluZyBibG9ncyB3aXRoIHJlYWN0IG5vZGUgbmV4dFwiIC8+ICovfVxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtgJHtET01BSU59L2NhdGFnb3JpZXMvJHtxdS5zbHVnfWB9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHsgY2F0YWdvcnk/Y2F0YWdvcnkubmFtZTonJ30gfCAke0FQUF9OQU1FfWB9IC8+XHJcbiAgICAgICAgICAgIHsvKiA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD1cInByb2dyYW1taW5nIGJsb2dzIHdpdGggcmVhY3Qgbm9kZSBuZXh0XCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcHJvcGVydHk9XCJvZzp1cmxcIiBocmVmPXtgJHtET01BSU59L2NhdGFnb3JpZXMvJHtxdS5zbHVnfWB9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgaHJlZj17YCR7QVBQX05BTUV9YH0gLz5cclxuICAgICAgICAgICAgey8qIDxsaW5rIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPlxyXG4gICAgPGxpbmsgcHJvcGVydHk9XCJvZzppbWFnZTpzZWN1cmVfdXJsXCIgaHJlZj17YCR7QVBQX05BTUV9YH0gLz5cclxuICAgIDxsaW5rIHByb3BlcnR5PVwib2c6aW1hZ2U6dHlwZVwiIGhyZWY9e2Ake0FQUF9OQU1FfWB9IC8+IFxyXG4gICAgIDxsaW5rIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgaHJlZj17YCR7QVBQX05BTUV9YH0gLz4gICovfVxyXG5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICApXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAge2hlYWQoKX1cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktNCBmb250LXdlaWdodC1ib2xkXCIgc3R5bGU9e3sgdGV4dFRyYW5zZm9ybTogJ2NhcGl0YWxpemUnIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNhdGFnb3J5P2NhdGFnb3J5Lm5hbWU6Jyd9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2dzICYmIGJsb2dzLm1hcCgoYmxvZywgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGFydGljbGUga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkIGJsb2c9e2Jsb2d9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbkNhdGFnb3J5LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jKHsgcXVlcnkgfSkgPT4ge1xyXG4gICAgcmV0dXJuIGF3YWl0IGdldENhdGFnb3J5KHF1ZXJ5LnNsdWcpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhdGFnb3J5OiBkYXRhLmNhdGFnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2dzOiBkYXRhLmJsb2dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1OnF1ZXJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKENhdGFnb3J5KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9