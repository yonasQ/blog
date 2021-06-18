webpackHotUpdate_N_E("pages/blogs/[slug]",{

/***/ "./pages/blogs/[slug].js":
/*!*******************************!*\
  !*** ./pages/blogs/[slug].js ***!
  \*******************************/
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
/* harmony import */ var _actions_blog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/blog */ "./actions/blog.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-render-html */ "./node_modules/react-render-html/index.js");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _component_blog_smallCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../component/blog/smallCard */ "./component/blog/smallCard.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var _component_DisqusThread__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../component/DisqusThread */ "./component/DisqusThread.js");


var _jsxFileName = "C:\\Users\\Quest\\Desktop\\seoblog\\frontend\\pages\\blogs\\[slug].js",
    _this = undefined,
    _s = $RefreshSig$();












var SingleBlog = function SingleBlog(_ref) {
  _s();

  var blog = _ref.blog,
      query = _ref.query;

  var head = function head() {
    return blog && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [blog.title, " | ", _config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: blog.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "canonical",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(blog.title, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: blog.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:url",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:site_name",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:image",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["API"], "/blog/photo/").concat(blog.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:image:secure_url",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["API"], "/blog/photo/").concat(blog.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:image:type",
        href: "image/jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 26
    }, _this);
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      RelatedBlogs = _useState[0],
      setRelatedBlogs = _useState[1];

  var loadRelatedBlogs = function loadRelatedBlogs() {
    var _id = blog._id,
        catagories = blog.catagories;
    var relate = {
      _id: _id,
      catagories: catagories
    };
    return Object(_actions_blog__WEBPACK_IMPORTED_MODULE_5__["listRelatedBlogs"])({
      relate: relate
    }).then(function (data) {
      if (data.err) {
        console.log(err);
      }

      setRelatedBlogs(data.blogs);
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    loadRelatedBlogs();
  }, []);

  var blogCatagories = function blogCatagories() {
    return blog && blog.catagories.map(function (c, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/catagories/".concat(c.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-primary ml-1 mr-1 mt-3",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, _this);
    });
  };

  var blogTags = function blogTags() {
    return blog && blog.tags.map(function (t, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/tags/".concat(t.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-outline-primary ml-1 mr-1 mt-3",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 13
      }, _this);
    });
  };

  var showRelatedBlogs = function showRelatedBlogs() {
    return RelatedBlogs.map(function (blog, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_blog_smallCard__WEBPACK_IMPORTED_MODULE_8__["default"], {
            blog: blog
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 14
      }, _this);
    });
  };

  var disqusComment = function disqusComment() {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_DisqusThread__WEBPACK_IMPORTED_MODULE_10__["default"], {
        id: blog._id,
        title: blog.title,
        path: "/blogs/".concat(blog.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    children: [head(), blog && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("article", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "container-fluid",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: JSON.stringify(blog.photo) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  style: {
                    width: '100%'
                  },
                  src: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["API"], "/blog/photo/").concat(blog.slug),
                  alt: "".concat(blog.title),
                  className: "img img-fluid featured-image"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 92,
                  columnNumber: 45
                }, _this) : ''
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "display-2 pt-3 pb-3 text-center",
                  children: blog.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 100,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "lead mark mt-3",
                  children: ["Written by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "".concat(blog.postedBy.profile),
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: blog.postedBy.username
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 102,
                      columnNumber: 92
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 52
                  }, _this), " | Published ", moment__WEBPACK_IMPORTED_MODULE_6___default()(blog.updatedAt).fromNow()]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "pb-3",
                  children: [blogCatagories(), blogTags(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 107,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 104,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-md-12 lead blog-body",
                  children: react_render_html__WEBPACK_IMPORTED_MODULE_7___default()(blog.body)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 114,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 113,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 112,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container pb-5",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                className: "text-center pt-5 pb-5 h2",
                children: "Related Blogs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: ["  ", showRelatedBlogs()]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container pb-5",
              children: disqusComment()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 22
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 81,
    columnNumber: 9
  }, _this);
};

_s(SingleBlog, "9eSiSXefEhNo9d9VUPF7SoYASa0=");

_c = SingleBlog;

SingleBlog.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return Object(_actions_blog__WEBPACK_IMPORTED_MODULE_5__["singleBlog"])(query.slug).then(function (data) {
    if (data.err) {
      console.log(data.err);
    } else {
      return {
        blog: data.blog,
        query: query
      };
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (SingleBlog);

var _c;

$RefreshReg$(_c, "SingleBlog");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlNpbmdsZUJsb2ciLCJibG9nIiwicXVlcnkiLCJoZWFkIiwidGl0bGUiLCJBUFBfTkFNRSIsIm1kZXNjIiwiRE9NQUlOIiwic2x1ZyIsIkFQSSIsInVzZVN0YXRlIiwiUmVsYXRlZEJsb2dzIiwic2V0UmVsYXRlZEJsb2dzIiwibG9hZFJlbGF0ZWRCbG9ncyIsIl9pZCIsImNhdGFnb3JpZXMiLCJyZWxhdGUiLCJsaXN0UmVsYXRlZEJsb2dzIiwidGhlbiIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYmxvZ3MiLCJ1c2VFZmZlY3QiLCJibG9nQ2F0YWdvcmllcyIsIm1hcCIsImMiLCJpIiwibmFtZSIsImJsb2dUYWdzIiwidGFncyIsInQiLCJzaG93UmVsYXRlZEJsb2dzIiwiZGlzcXVzQ29tbWVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwaG90byIsIndpZHRoIiwicG9zdGVkQnkiLCJwcm9maWxlIiwidXNlcm5hbWUiLCJtb21lbnQiLCJ1cGRhdGVkQXQiLCJmcm9tTm93IiwicmVuZGVySFRNTCIsImJvZHkiLCJnZXRJbml0aWFsUHJvcHMiLCJzaW5nbGVCbG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBcUI7QUFBQTs7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUNwQyxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUNWO0FBQ0UsV0FBUUYsSUFBSSxpQkFBSSxxRUFBQyxnREFBRDtBQUFBLDhCQUNiO0FBQUEsbUJBQVFBLElBQUksQ0FBQ0csS0FBYixTQUF1QkMsZ0RBQXZCO0FBQUE7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O0FBQUE7QUFBQSxhQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBcURILENBekhEOztHQUFNbEMsVTs7S0FBQUEsVTs7QUEwSE5BLFVBQVUsQ0FBQytDLGVBQVgsR0FBNkIsaUJBQWU7QUFBQSxNQUFaN0MsS0FBWSxTQUFaQSxLQUFZO0FBRXhDLFNBQU84QyxnRUFBVSxDQUFDOUMsS0FBSyxDQUFDTSxJQUFQLENBQVYsQ0FDRlUsSUFERSxDQUNHLFVBQUNDLElBQUQsRUFBVTtBQUNaLFFBQUlBLElBQUksQ0FBQ0MsR0FBVCxFQUFjO0FBQ1ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFJLENBQUNDLEdBQWpCO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsYUFBTztBQUNIbkIsWUFBSSxFQUFFa0IsSUFBSSxDQUFDbEIsSUFEUjtBQUVIQyxhQUFLLEVBQUxBO0FBRkcsT0FBUDtBQUlIO0FBQ0osR0FYRSxDQUFQO0FBWUgsQ0FkRDs7QUFlZUYseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZ3MvW3NsdWddLmVhM2E1MDQyZTgzNmM2OTg4MDI1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnQvTGF5b3V0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzaW5nbGVCbG9nLCBsaXN0UmVsYXRlZEJsb2dzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9ibG9nJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IHJlbmRlckhUTUwgZnJvbSBcInJlYWN0LXJlbmRlci1odG1sXCJcclxuaW1wb3J0IFNtYWxsQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnQvYmxvZy9zbWFsbENhcmQnXHJcbmltcG9ydCB7IEFQSSwgRE9NQUlOLCBBUFBfTkFNRSB9IGZyb20gJy4uLy4uL2NvbmZpZydcclxuaW1wb3J0IERpc3F1c1RocmVhZCBmcm9tICcuLi8uLi9jb21wb25lbnQvRGlzcXVzVGhyZWFkJ1xyXG5cclxuY29uc3QgU2luZ2xlQmxvZyA9ICh7IGJsb2csIHF1ZXJ5IH0pID0+IHtcclxuICAgIGNvbnN0IGhlYWQgPSAoKSA9PiBcclxuICAgICAgIHsgXHJcbiAgICAgICAgIHJldHVybiAgYmxvZyAmJiA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntibG9nLnRpdGxlfSB8IHtBUFBfTkFNRX08L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtibG9nLm1kZXNjfSAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtgJHtET01BSU59L2Jsb2dzLyR7cXVlcnkuc2x1Z31gfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YCR7YmxvZy50aXRsZX0gfCAke0FQUF9OQU1FfWB9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtibG9nLm1kZXNjfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHByb3BlcnR5PVwib2c6dXJsXCIgaHJlZj17YCR7RE9NQUlOfS9ibG9ncy8ke3F1ZXJ5LnNsdWd9YH0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPlxyXG4gICAgICAgICAgICA8bGluayBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgaHJlZj17YCR7QVBJfS9ibG9nL3Bob3RvLyR7YmxvZy5zbHVnfWB9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHByb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiIGhyZWY9e2Ake0FQSX0vYmxvZy9waG90by8ke2Jsb2cuc2x1Z31gfSAvPlxyXG4gICAgICAgICAgICA8bGluayBwcm9wZXJ0eT1cIm9nOmltYWdlOnR5cGVcIiBocmVmPXtgaW1hZ2UvanBnYH0gLz5cclxuXHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb25zdCBbUmVsYXRlZEJsb2dzLCBzZXRSZWxhdGVkQmxvZ3NdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBsb2FkUmVsYXRlZEJsb2dzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgX2lkLCBjYXRhZ29yaWVzIH0gPSBibG9nXHJcbiAgICAgICAgY29uc3QgcmVsYXRlID0geyBfaWQsIGNhdGFnb3JpZXMgfVxyXG4gICAgICAgIHJldHVybiBsaXN0UmVsYXRlZEJsb2dzKHsgcmVsYXRlIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRSZWxhdGVkQmxvZ3MoZGF0YS5ibG9ncylcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRSZWxhdGVkQmxvZ3MoKVxyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBibG9nQ2F0YWdvcmllcyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYmxvZyAmJiBibG9nLmNhdGFnb3JpZXMubWFwKChjLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17YC9jYXRhZ29yaWVzLyR7Yy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG1sLTEgbXItMSBtdC0zXCI+e2MubmFtZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKVxyXG4gICAgfVxyXG4gICAgY29uc3QgYmxvZ1RhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2cgJiYgYmxvZy50YWdzLm1hcCgodCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e2l9IGhyZWY9e2AvdGFncy8ke3Quc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1sLTEgbXItMSBtdC0zXCI+e3QubmFtZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd1JlbGF0ZWRCbG9ncyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBSZWxhdGVkQmxvZ3MubWFwKChibG9nLCBpKSA9PiBcclxuICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNtYWxsQ2FyZCBibG9nPXtibG9nfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIClcclxufVxyXG5jb25zdCBkaXNxdXNDb21tZW50ID0gKCk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RGlzcXVzVGhyZWFkIGlkPXtibG9nLl9pZH0gdGl0bGU9e2Jsb2cudGl0bGV9IHBhdGg9e2AvYmxvZ3MvJHtibG9nLnNsdWd9YH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAge2hlYWQoKX1cclxuICAgICAgICAgICAge2Jsb2cgJiYgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShibG9nLnBob3RvKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOicxMDAlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7QVBJfS9ibG9nL3Bob3RvLyR7YmxvZy5zbHVnfWB9IGFsdD17YCR7YmxvZy50aXRsZX1gfSBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkIGZlYXR1cmVkLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTIgcHQtMyBwYi0zIHRleHQtY2VudGVyXCI+e2Jsb2cudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCBtYXJrIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdyaXR0ZW4gYnkgPExpbmsgaHJlZj17YCR7YmxvZy5wb3N0ZWRCeS5wcm9maWxlfWB9PjxhPntibG9nLnBvc3RlZEJ5LnVzZXJuYW1lfTwvYT48L0xpbms+IHwgUHVibGlzaGVkIHttb21lbnQoYmxvZy51cGRhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9nQ2F0YWdvcmllcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2dUYWdzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGxlYWQgYmxvZy1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVySFRNTChibG9nLmJvZHkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHBiLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHQtNSBwYi01IGgyXCI+UmVsYXRlZCBCbG9nczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+ICB7c2hvd1JlbGF0ZWRCbG9ncygpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rpc3F1c0NvbW1lbnQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0Pn1cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50ID5cclxuICAgIClcclxufVxyXG5TaW5nbGVCbG9nLmdldEluaXRpYWxQcm9wcyA9ICh7IHF1ZXJ5IH0pID0+IHtcclxuXHJcbiAgICByZXR1cm4gc2luZ2xlQmxvZyhxdWVyeS5zbHVnKVxyXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGJsb2c6IGRhdGEuYmxvZyxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxufVxyXG5leHBvcnQgZGVmYXVsdCBTaW5nbGVCbG9nXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=