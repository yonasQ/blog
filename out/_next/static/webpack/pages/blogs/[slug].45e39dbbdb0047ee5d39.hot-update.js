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
    return blog && blog.catagories.map(function (c, i) {
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
      columnNumber: 22
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlNpbmdsZUJsb2ciLCJibG9nIiwicXVlcnkiLCJoZWFkIiwidGl0bGUiLCJBUFBfTkFNRSIsIm1kZXNjIiwiRE9NQUlOIiwic2x1ZyIsIkFQSSIsInVzZVN0YXRlIiwiUmVsYXRlZEJsb2dzIiwic2V0UmVsYXRlZEJsb2dzIiwibG9hZFJlbGF0ZWRCbG9ncyIsIl9pZCIsImNhdGFnb3JpZXMiLCJyZWxhdGUiLCJsaXN0UmVsYXRlZEJsb2dzIiwidGhlbiIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYmxvZ3MiLCJ1c2VFZmZlY3QiLCJibG9nQ2F0YWdvcmllcyIsIm1hcCIsImMiLCJpIiwibmFtZSIsImJsb2dUYWdzIiwidGFncyIsInQiLCJzaG93UmVsYXRlZEJsb2dzIiwiZGlzcXVzQ29tbWVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwaG90byIsIndpZHRoIiwicG9zdGVkQnkiLCJwcm9maWxlIiwidXNlcm5hbWUiLCJtb21lbnQiLCJ1cGRhdGVkQXQiLCJmcm9tTm93IiwicmVuZGVySFRNTCIsImJvZHkiLCJnZXRJbml0aWFsUHJvcHMiLCJzaW5nbGVCbG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBcUI7QUFBQTs7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUNwQyxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTztBQUFBLHdCQUNULHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0k7QUFBQSxtQkFBUUYsSUFBSSxDQUFDRyxLQUFiLFNBQXVCQyxnREFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QTtBQUFBO0FBQUEsV0FESjtBQXFESCxDQXZIRDs7R0FBTWxDLFU7O0tBQUFBLFU7O0FBd0hOQSxVQUFVLENBQUMrQyxlQUFYLEdBQTZCLGlCQUFlO0FBQUEsTUFBWjdDLEtBQVksU0FBWkEsS0FBWTtBQUV4QyxTQUFPOEMsZ0VBQVUsQ0FBQzlDLEtBQUssQ0FBQ00sSUFBUCxDQUFWLENBQ0ZVLElBREUsQ0FDRyxVQUFDQyxJQUFELEVBQVU7QUFDWixRQUFJQSxJQUFJLENBQUNDLEdBQVQsRUFBYztBQUNWQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBSSxDQUFDQyxHQUFqQjtBQUNILEtBRkQsTUFHSztBQUNELGFBQU87QUFDSG5CLFlBQUksRUFBRWtCLElBQUksQ0FBQ2xCLElBRFI7QUFFSEMsYUFBSyxFQUFMQTtBQUZHLE9BQVA7QUFJSDtBQUNKLEdBWEUsQ0FBUDtBQVlILENBZEQ7O0FBZWVGLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Jsb2dzL1tzbHVnXS40NWUzOWRiYmRiMDA0N2VlNWQzOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50L0xheW91dCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgc2luZ2xlQmxvZywgbGlzdFJlbGF0ZWRCbG9ncyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYmxvZydcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnXHJcbmltcG9ydCByZW5kZXJIVE1MIGZyb20gXCJyZWFjdC1yZW5kZXItaHRtbFwiXHJcbmltcG9ydCBTbWFsbENhcmQgZnJvbSAnLi4vLi4vY29tcG9uZW50L2Jsb2cvc21hbGxDYXJkJ1xyXG5pbXBvcnQgeyBBUEksIERPTUFJTiwgQVBQX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcnXHJcbmltcG9ydCBEaXNxdXNUaHJlYWQgZnJvbSAnLi4vLi4vY29tcG9uZW50L0Rpc3F1c1RocmVhZCdcclxuXHJcbmNvbnN0IFNpbmdsZUJsb2cgPSAoeyBibG9nLCBxdWVyeSB9KSA9PiB7XHJcbiAgICBjb25zdCBoZWFkID0gKCkgPT4gKFxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e2Jsb2cudGl0bGV9IHwge0FQUF9OQU1FfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Jsb2cubWRlc2N9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Ake0RPTUFJTn0vYmxvZ3MvJHtxdWVyeS5zbHVnfWB9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHtibG9nLnRpdGxlfSB8ICR7QVBQX05BTUV9YH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Jsb2cubWRlc2N9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcHJvcGVydHk9XCJvZzp1cmxcIiBocmVmPXtgJHtET01BSU59L2Jsb2dzLyR7cXVlcnkuc2x1Z31gfSAvPlxyXG4gICAgICAgICAgICA8bGluayBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGhyZWY9e2Ake0FQUF9OQU1FfWB9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBocmVmPXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtibG9nLnNsdWd9YH0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcHJvcGVydHk9XCJvZzppbWFnZTpzZWN1cmVfdXJsXCIgaHJlZj17YCR7QVBJfS9ibG9nL3Bob3RvLyR7YmxvZy5zbHVnfWB9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHByb3BlcnR5PVwib2c6aW1hZ2U6dHlwZVwiIGhyZWY9e2BpbWFnZS9qcGdgfSAvPlxyXG5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICApXHJcbiAgICBjb25zdCBbUmVsYXRlZEJsb2dzLCBzZXRSZWxhdGVkQmxvZ3NdID0gdXNlU3RhdGUoW10pXHJcbiAgICBjb25zdCBsb2FkUmVsYXRlZEJsb2dzID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHsgX2lkLCBjYXRhZ29yaWVzIH0gPSBibG9nXHJcbiAgICAgICAgY29uc3QgcmVsYXRlID0geyBfaWQsIGNhdGFnb3JpZXMgfVxyXG4gICAgICAgIHJldHVybiBsaXN0UmVsYXRlZEJsb2dzKHsgcmVsYXRlIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRSZWxhdGVkQmxvZ3MoZGF0YS5ibG9ncylcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvYWRSZWxhdGVkQmxvZ3MoKVxyXG4gICAgfSwgW10pXHJcbiAgICBjb25zdCBibG9nQ2F0YWdvcmllcyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYmxvZyAmJiBibG9nLmNhdGFnb3JpZXMubWFwKChjLCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17YC9jYXRhZ29yaWVzLyR7Yy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IG1sLTEgbXItMSBtdC0zXCI+e2MubmFtZX08L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICApKVxyXG4gICAgfVxyXG4gICAgY29uc3QgYmxvZ1RhZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGJsb2cudGFncy5tYXAoKHQsIGkpID0+IChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtpfSBocmVmPXtgL3RhZ3MvJHt0LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtbC0xIG1yLTEgbXQtM1wiPnt0Lm5hbWV9PC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgKSlcclxuICAgIH1cclxuICAgIGNvbnN0IHNob3dSZWxhdGVkQmxvZ3MgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gUmVsYXRlZEJsb2dzLm1hcCgoYmxvZywgaSkgPT4gXHJcbiAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC00XCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgIDxhcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTbWFsbENhcmQgYmxvZz17YmxvZ30gLz5cclxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApXHJcbn1cclxuY29uc3QgZGlzcXVzQ29tbWVudCA9ICgpPT57XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPERpc3F1c1RocmVhZCBpZD17YmxvZy5faWR9IHRpdGxlPXtibG9nLnRpdGxlfSBwYXRoPXtgL2Jsb2dzLyR7YmxvZy5zbHVnfWB9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgIHtoZWFkKCl9XHJcbiAgICAgICAgICAgIHtibG9nICYmIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCIgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoYmxvZy5waG90bykgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3R5bGU9e3t3aWR0aDonMTAwJSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0vYmxvZy9waG90by8ke2Jsb2cuc2x1Z31gfSBhbHQ9e2Ake2Jsb2cudGl0bGV9YH0gY2xhc3NOYW1lPVwiaW1nIGltZy1mbHVpZCBmZWF0dXJlZC1pbWFnZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGlzcGxheS0yIHB0LTMgcGItMyB0ZXh0LWNlbnRlclwiPntibG9nLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImxlYWQgbWFyayBtdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBXcml0dGVuIGJ5IDxMaW5rIGhyZWY9e2Ake2Jsb2cucG9zdGVkQnkucHJvZmlsZX1gfT48YT57YmxvZy5wb3N0ZWRCeS51c2VybmFtZX08L2E+PC9MaW5rPiB8IFB1Ymxpc2hlZCB7bW9tZW50KGJsb2cudXBkYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvZ0NhdGFnb3JpZXMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtibG9nVGFncygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBsZWFkIGJsb2ctYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3JlbmRlckhUTUwoYmxvZy5ib2R5KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBwYi01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHB0LTUgcGItNSBoMlwiPlJlbGF0ZWQgQmxvZ3M8L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwgaHIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPiAge3Nob3dSZWxhdGVkQmxvZ3MoKX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcGItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtkaXNxdXNDb21tZW50KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgICAgICAgICAgPC9tYWluPlxyXG4gICAgICAgICAgICA8L0xheW91dD59XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudCA+XHJcbiAgICApXHJcbn1cclxuU2luZ2xlQmxvZy5nZXRJbml0aWFsUHJvcHMgPSAoeyBxdWVyeSB9KSA9PiB7XHJcblxyXG4gICAgcmV0dXJuIHNpbmdsZUJsb2cocXVlcnkuc2x1ZylcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5lcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBibG9nOiBkYXRhLmJsb2csXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU2luZ2xlQmxvZ1xyXG4iXSwic291cmNlUm9vdCI6IiJ9