webpackHotUpdate_N_E("pages/tags/[slug]",{

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
                children: agtag.name
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdGFncy9bc2x1Z10uanMiXSwibmFtZXMiOlsiVGFnIiwidGFnIiwiYmxvZ3MiLCJxdWVyeSIsImhlYWQiLCJuYW1lIiwiQVBQX05BTUUiLCJET01BSU4iLCJzbHVnIiwidGV4dFRyYW5zZm9ybSIsImFndGFnIiwibWFwIiwiYmxvZyIsImkiLCJnZXRJbml0aWFsUHJvcHMiLCJnZXRUYWciLCJ0aGVuIiwiZGF0YSIsImVyciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLEdBQUcsR0FBRyxTQUFOQSxHQUFNLE9BQTJCO0FBQUEsTUFBeEJDLEdBQXdCLFFBQXhCQSxHQUF3QjtBQUFBLE1BQW5CQyxLQUFtQixRQUFuQkEsS0FBbUI7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQ25DLE1BQU1DLElBQUksR0FBRyxTQUFQQSxJQUFPO0FBQUEsd0JBQ1QscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDSTtBQUFBLG1CQUFRSCxHQUFHLENBQUNJLElBQVosU0FBcUJDLGdEQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUdJO0FBQU0sV0FBRyxFQUFDLFdBQVY7QUFBc0IsWUFBSSxZQUFLQyw4Q0FBTCxtQkFBb0JKLEtBQUssQ0FBQ0ssSUFBMUI7QUFBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhKLGVBSUk7QUFBTSxnQkFBUSxFQUFDLFVBQWY7QUFBMEIsZUFBTyxZQUFLUCxHQUFHLENBQUNJLElBQVQsZ0JBQW1CQyxnREFBbkI7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpKLGVBTUk7QUFBTSxnQkFBUSxFQUFDLFNBQWY7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSixlQU9JO0FBQU0sZ0JBQVEsRUFBQyxRQUFmO0FBQXdCLFlBQUksWUFBS0MsOENBQUwsbUJBQW9CSixLQUFLLENBQUNLLElBQTFCO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFQSixlQVFJO0FBQU0sZ0JBQVEsRUFBQyxjQUFmO0FBQThCLFlBQUksWUFBS0YsZ0RBQUw7QUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURTO0FBQUEsR0FBYjs7QUFpQkEsc0JBQ0kscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsZUFDS0YsSUFBSSxFQURULGVBRUkscUVBQUMseURBQUQ7QUFBQSw2QkFDSTtBQUFBLCtCQUNJO0FBQUssbUJBQVMsRUFBQyw2QkFBZjtBQUFBLGlDQUNJO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLGdCQUFmO0FBQUEsc0NBQ0k7QUFBSSx5QkFBUyxFQUFDLDRCQUFkO0FBQTJDLHFCQUFLLEVBQUU7QUFBRUssK0JBQWEsRUFBRTtBQUFqQixpQkFBbEQ7QUFBQSwwQkFDS0MsS0FBSyxDQUFDTDtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREosRUFLS0gsS0FBSyxJQUFJQSxLQUFLLENBQUNTLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLENBQVAsRUFBYTtBQUM3QixvQ0FBTztBQUFBLDBDQUNILHFFQUFDLDREQUFEO0FBQU0sd0JBQUksRUFBRUQ7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQURHLGVBRUg7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFGRztBQUFBLG1CQUFjQyxDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBQVA7QUFJSCxlQUxTLENBTGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBeUJILENBM0NEOztLQUFNYixHOztBQTRDTkEsR0FBRyxDQUFDYyxlQUFKLEdBQXNCLGlCQUFlO0FBQUEsTUFBWlgsS0FBWSxTQUFaQSxLQUFZO0FBQ2pDLFNBQU9ZLDJEQUFNLENBQUNaLEtBQUssQ0FBQ0ssSUFBUCxDQUFOLENBQ0ZRLElBREUsQ0FDRyxVQUFBQyxJQUFJLEVBQUk7QUFDVixRQUFJQSxJQUFJLENBQUNDLEdBQVQsRUFBYztBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBSSxDQUFDQyxHQUFqQjtBQUNILEtBRkQsTUFHSztBQUNELGFBQU87QUFDSGpCLFdBQUcsRUFBRWdCLElBQUksQ0FBQ2hCLEdBRFA7QUFFSEMsYUFBSyxFQUFFZSxJQUFJLENBQUNmLEtBRlQ7QUFHSEMsYUFBSyxFQUFMQTtBQUhHLE9BQVA7QUFLSDtBQUNKLEdBWkUsQ0FBUDtBQWFILENBZEQ7O0FBZWVILGtFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3RhZ3MvW3NsdWddLjdmYzdjNTZhZWY1NjRjODNmNTM0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnQvTGF5b3V0J1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tIFwicmVhY3QtcmVuZGVyLWh0bWxcIlxyXG5pbXBvcnQgeyBBUEksIERPTUFJTiwgQVBQX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcnXHJcbmltcG9ydCB7IGdldFRhZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvdGFnJ1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnQvYmxvZy9DYXJkJ1xyXG5jb25zdCBUYWcgPSAoeyB0YWcsIGJsb2dzLCBxdWVyeSB9KSA9PiB7XHJcbiAgICBjb25zdCBoZWFkID0gKCkgPT4gKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e3RhZy5uYW1lfSB8IHtBUFBfTkFNRX08L3RpdGxlPlxyXG4gICAgICAgICAgICB7LyogPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cInByb2dyYW1taW5nIGJsb2dzIHdpdGggcmVhY3Qgbm9kZSBuZXh0XCIgLz4gKi99XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Ake0RPTUFJTn0vdGFncy8ke3F1ZXJ5LnNsdWd9YH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e2Ake3RhZy5uYW1lfSB8ICR7QVBQX05BTUV9YH0gLz5cclxuICAgICAgICAgICAgey8qIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwicHJvZ3JhbW1pbmcgYmxvZ3Mgd2l0aCByZWFjdCBub2RlIG5leHRcIiAvPiAqL31cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgICAgICA8bGluayBwcm9wZXJ0eT1cIm9nOnVybFwiIGhyZWY9e2Ake0RPTUFJTn0vdGFncy8ke3F1ZXJ5LnNsdWd9YH0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPlxyXG4gICAgICAgICAgICB7LyogPGxpbmsgcHJvcGVydHk9XCJvZzppbWFnZVwiIGhyZWY9e2Ake0FQUF9OQU1FfWB9IC8+XHJcbiAgICA8bGluayBwcm9wZXJ0eT1cIm9nOmltYWdlOnNlY3VyZV91cmxcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPlxyXG4gICAgPGxpbmsgcHJvcGVydHk9XCJvZzppbWFnZTp0eXBlXCIgaHJlZj17YCR7QVBQX05BTUV9YH0gLz4gXHJcbiAgICAgPGxpbmsgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPiAgKi99XHJcblxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgIClcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB7aGVhZCgpfVxyXG4gICAgICAgICAgICA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIHB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS00IGZvbnQtd2VpZ2h0LWJvbGRcIiBzdHlsZT17eyB0ZXh0VHJhbnNmb3JtOiAnY2FwaXRhbGl6ZScgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthZ3RhZy5uYW1lfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9ncyAmJiBibG9ncy5tYXAoKGJsb2csIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxhcnRpY2xlIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZCBibG9nPXtibG9nfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgIClcclxufVxyXG5UYWcuZ2V0SW5pdGlhbFByb3BzID0gKHsgcXVlcnkgfSkgPT4ge1xyXG4gICAgcmV0dXJuIGdldFRhZyhxdWVyeS5zbHVnKVxyXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWc6IGRhdGEudGFnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJsb2dzOiBkYXRhLmJsb2dzLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRhZ1xyXG4iXSwic291cmNlUm9vdCI6IiJ9