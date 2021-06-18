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
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [blog.title, " | ", _config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: blog.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "canonical",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(blog.title, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: blog.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:url",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:site_name",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:image",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["API"], "/blog/photo/").concat(blog.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:image:secure_url",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["API"], "/blog/photo/").concat(blog.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:image:type",
        href: "image/jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
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
    return blog.catagories.map(function (c, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/catagories/".concat(c.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-primary ml-1 mr-1 mt-3",
          children: c.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }, _this);
    });
  };

  var blogTags = function blogTags() {
    return blog.tags.map(function (t, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/tags/".concat(t.slug),
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
          className: "btn btn-outline-primary ml-1 mr-1 mt-3",
          children: t.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
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
            lineNumber: 65,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
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
        lineNumber: 74,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 9
    }, _this);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, {
    children: [head(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_component_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
                  lineNumber: 90,
                  columnNumber: 45
                }, _this) : ''
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 86,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "display-2 pt-3 pb-3 text-center",
                  children: blog.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "lead mark mt-3",
                  children: ["Written by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "".concat(blog.postedBy.profile),
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: blog.postedBy.username
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 92
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 52
                  }, _this), " | Published ", moment__WEBPACK_IMPORTED_MODULE_6___default()(blog.updatedAt).fromNow()]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 99,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "pb-3",
                  children: [blogCatagories(), blogTags(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 106,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-md-12 lead blog-body",
                  children: react_render_html__WEBPACK_IMPORTED_MODULE_7___default()(blog.body)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 112,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container pb-5",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                className: "text-center pt-5 pb-5 h2",
                children: "Related Blogs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 119,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: ["  ", showRelatedBlogs()]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 117,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container pb-5",
              children: disqusComment()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 79,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlNpbmdsZUJsb2ciLCJibG9nIiwicXVlcnkiLCJoZWFkIiwidGl0bGUiLCJBUFBfTkFNRSIsIm1kZXNjIiwiRE9NQUlOIiwic2x1ZyIsIkFQSSIsInVzZVN0YXRlIiwiUmVsYXRlZEJsb2dzIiwic2V0UmVsYXRlZEJsb2dzIiwibG9hZFJlbGF0ZWRCbG9ncyIsIl9pZCIsImNhdGFnb3JpZXMiLCJyZWxhdGUiLCJsaXN0UmVsYXRlZEJsb2dzIiwidGhlbiIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYmxvZ3MiLCJ1c2VFZmZlY3QiLCJibG9nQ2F0YWdvcmllcyIsIm1hcCIsImMiLCJpIiwibmFtZSIsImJsb2dUYWdzIiwidGFncyIsInQiLCJzaG93UmVsYXRlZEJsb2dzIiwiZGlzcXVzQ29tbWVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwaG90byIsIndpZHRoIiwicG9zdGVkQnkiLCJwcm9maWxlIiwidXNlcm5hbWUiLCJtb21lbnQiLCJ1cGRhdGVkQXQiLCJmcm9tTm93IiwicmVuZGVySFRNTCIsImJvZHkiLCJnZXRJbml0aWFsUHJvcHMiLCJzaW5nbGVCbG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBcUI7QUFBQTs7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUNwQyxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLHdCQUNULHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0k7QUFBQSxtQkFBUUYsSUFBSSxDQUFDRyxLQUFiLFNBQXVCQyxnREFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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Q0F2SEQ7O0dBQU1sQyxVOztLQUFBQSxVOztBQXdITkEsVUFBVSxDQUFDK0MsZUFBWCxHQUE2QixpQkFBZTtBQUFBLE1BQVo3QyxLQUFZLFNBQVpBLEtBQVk7QUFFeEMsU0FBTzhDLGdFQUFVLENBQUM5QyxLQUFLLENBQUNNLElBQVAsQ0FBVixDQUNGVSxJQURFLENBQ0csVUFBQ0MsSUFBRCxFQUFVO0FBQ1osUUFBSUEsSUFBSSxDQUFDQyxHQUFULEVBQWM7QUFDVkMsYUFBTyxDQUFDQyxHQUFSLENBQVlILElBQUksQ0FBQ0MsR0FBakI7QUFDSCxLQUZELE1BR0s7QUFDRCxhQUFPO0FBQ0huQixZQUFJLEVBQUVrQixJQUFJLENBQUNsQixJQURSO0FBRUhDLGFBQUssRUFBTEE7QUFGRyxPQUFQO0FBSUg7QUFDSixHQVhFLENBQVA7QUFZSCxDQWREOztBQWVlRix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ibG9ncy9bc2x1Z10uOGMxMmRkNGI2NGU5MzEzZGVmMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uLy4uL2NvbXBvbmVudC9MYXlvdXQnXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHNpbmdsZUJsb2csIGxpc3RSZWxhdGVkQmxvZ3MgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2Jsb2cnXHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tIFwicmVhY3QtcmVuZGVyLWh0bWxcIlxyXG5pbXBvcnQgU21hbGxDYXJkIGZyb20gJy4uLy4uL2NvbXBvbmVudC9ibG9nL3NtYWxsQ2FyZCdcclxuaW1wb3J0IHsgQVBJLCBET01BSU4sIEFQUF9OQU1FIH0gZnJvbSAnLi4vLi4vY29uZmlnJ1xyXG5pbXBvcnQgRGlzcXVzVGhyZWFkIGZyb20gJy4uLy4uL2NvbXBvbmVudC9EaXNxdXNUaHJlYWQnXHJcblxyXG5jb25zdCBTaW5nbGVCbG9nID0gKHsgYmxvZywgcXVlcnkgfSkgPT4ge1xyXG4gICAgY29uc3QgaGVhZCA9ICgpID0+IChcclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPntibG9nLnRpdGxlfSB8IHtBUFBfTkFNRX08L3RpdGxlPlxyXG4gICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtibG9nLm1kZXNjfSAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtgJHtET01BSU59L2Jsb2dzLyR7cXVlcnkuc2x1Z31gfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YCR7YmxvZy50aXRsZX0gfCAke0FQUF9OQU1FfWB9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtibG9nLm1kZXNjfSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHByb3BlcnR5PVwib2c6dXJsXCIgaHJlZj17YCR7RE9NQUlOfS9ibG9ncy8ke3F1ZXJ5LnNsdWd9YH0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBocmVmPXtgJHtBUFBfTkFNRX1gfSAvPlxyXG4gICAgICAgICAgICA8bGluayBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgaHJlZj17YCR7QVBJfS9ibG9nL3Bob3RvLyR7YmxvZy5zbHVnfWB9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHByb3BlcnR5PVwib2c6aW1hZ2U6c2VjdXJlX3VybFwiIGhyZWY9e2Ake0FQSX0vYmxvZy9waG90by8ke2Jsb2cuc2x1Z31gfSAvPlxyXG4gICAgICAgICAgICA8bGluayBwcm9wZXJ0eT1cIm9nOmltYWdlOnR5cGVcIiBocmVmPXtgaW1hZ2UvanBnYH0gLz5cclxuXHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgKVxyXG4gICAgY29uc3QgW1JlbGF0ZWRCbG9ncywgc2V0UmVsYXRlZEJsb2dzXSA9IHVzZVN0YXRlKFtdKVxyXG4gICAgY29uc3QgbG9hZFJlbGF0ZWRCbG9ncyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCB7IF9pZCwgY2F0YWdvcmllcyB9ID0gYmxvZ1xyXG4gICAgICAgIGNvbnN0IHJlbGF0ZSA9IHsgX2lkLCBjYXRhZ29yaWVzIH1cclxuICAgICAgICByZXR1cm4gbGlzdFJlbGF0ZWRCbG9ncyh7IHJlbGF0ZSB9KVxyXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0UmVsYXRlZEJsb2dzKGRhdGEuYmxvZ3MpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBsb2FkUmVsYXRlZEJsb2dzKClcclxuICAgIH0sIFtdKVxyXG4gICAgY29uc3QgYmxvZ0NhdGFnb3JpZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2cuY2F0YWdvcmllcy5tYXAoKGMsIGkpID0+IChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtpfSBocmVmPXtgL2NhdGFnb3JpZXMvJHtjLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbWwtMSBtci0xIG10LTNcIj57Yy5uYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpXHJcbiAgICB9XHJcbiAgICBjb25zdCBibG9nVGFncyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYmxvZy50YWdzLm1hcCgodCwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBrZXk9e2l9IGhyZWY9e2AvdGFncy8ke3Quc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1sLTEgbXItMSBtdC0zXCI+e3QubmFtZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKVxyXG4gICAgfVxyXG4gICAgY29uc3Qgc2hvd1JlbGF0ZWRCbG9ncyA9ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBSZWxhdGVkQmxvZ3MubWFwKChibG9nLCBpKSA9PiBcclxuICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTRcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNtYWxsQ2FyZCBibG9nPXtibG9nfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgIClcclxufVxyXG5jb25zdCBkaXNxdXNDb21tZW50ID0gKCk9PntcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8RGlzcXVzVGhyZWFkIGlkPXtibG9nLl9pZH0gdGl0bGU9e2Jsb2cudGl0bGV9IHBhdGg9e2AvYmxvZ3MvJHtibG9nLnNsdWd9YH0vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAge2hlYWQoKX1cclxuICAgICAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgICAgIDxtYWluPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeShibG9nLnBob3RvKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzdHlsZT17e3dpZHRoOicxMDAlJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7QVBJfS9ibG9nL3Bob3RvLyR7YmxvZy5zbHVnfWB9IGFsdD17YCR7YmxvZy50aXRsZX1gfSBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkIGZlYXR1cmVkLWltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTIgcHQtMyBwYi0zIHRleHQtY2VudGVyXCI+e2Jsb2cudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZCBtYXJrIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFdyaXR0ZW4gYnkgPExpbmsgaHJlZj17YCR7YmxvZy5wb3N0ZWRCeS5wcm9maWxlfWB9PjxhPntibG9nLnBvc3RlZEJ5LnVzZXJuYW1lfTwvYT48L0xpbms+IHwgUHVibGlzaGVkIHttb21lbnQoYmxvZy51cGRhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBiLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9nQ2F0YWdvcmllcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2dUYWdzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIGxlYWQgYmxvZy1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cmVuZGVySFRNTChibG9nLmJvZHkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHBiLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgcHQtNSBwYi01IGgyXCI+UmVsYXRlZCBCbG9nczwvaDQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCBociAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+ICB7c2hvd1JlbGF0ZWRCbG9ncygpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Rpc3F1c0NvbW1lbnQoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8L21haW4+XHJcbiAgICAgICAgICAgIDwvTGF5b3V0PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQgPlxyXG4gICAgKVxyXG59XHJcblNpbmdsZUJsb2cuZ2V0SW5pdGlhbFByb3BzID0gKHsgcXVlcnkgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiBzaW5nbGVCbG9nKHF1ZXJ5LnNsdWcpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvZzogZGF0YS5ibG9nLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUJsb2dcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==