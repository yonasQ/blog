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
    blog && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: [blog.title, " | ", _config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"]]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        name: "description",
        content: blog.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        rel: "canonical",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:title",
        content: "".concat(blog.title, " | ").concat(_config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:description",
        content: blog.mdesc
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
        property: "og:type",
        content: "website"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:url",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["DOMAIN"], "/blogs/").concat(query.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:site_name",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["APP_NAME"])
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:image",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["API"], "/blog/photo/").concat(blog.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:image:secure_url",
        href: "".concat(_config__WEBPACK_IMPORTED_MODULE_9__["API"], "/blog/photo/").concat(blog.slug)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 13
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
        property: "og:image:type",
        href: "image/jpg"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 13
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 12
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
          lineNumber: 51,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
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
          lineNumber: 58,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
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
            lineNumber: 68,
            columnNumber: 21
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }, _this)
      }, i, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
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
        lineNumber: 77,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
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
                  lineNumber: 93,
                  columnNumber: 45
                }, _this) : ''
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  className: "display-2 pt-3 pb-3 text-center",
                  children: blog.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 101,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "lead mark mt-3",
                  children: ["Written by ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                    href: "".concat(blog.postedBy.profile),
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      children: blog.postedBy.username
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 103,
                      columnNumber: 92
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 52
                  }, _this), " | Published ", moment__WEBPACK_IMPORTED_MODULE_6___default()(blog.updatedAt).fromNow()]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 102,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "pb-3",
                  children: [blogCatagories(), blogTags(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 105,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("section", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-md-12 lead blog-body",
                  children: react_render_html__WEBPACK_IMPORTED_MODULE_7___default()(blog.body)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 115,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 114,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container pb-5",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h4", {
                className: "text-center pt-5 pb-5 h2",
                children: "Related Blogs"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: ["  ", showRelatedBlogs()]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 120,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container pb-5",
              children: disqusComment()
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 125,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 22
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 82,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYmxvZ3MvW3NsdWddLmpzIl0sIm5hbWVzIjpbIlNpbmdsZUJsb2ciLCJibG9nIiwicXVlcnkiLCJoZWFkIiwidGl0bGUiLCJBUFBfTkFNRSIsIm1kZXNjIiwiRE9NQUlOIiwic2x1ZyIsIkFQSSIsInVzZVN0YXRlIiwiUmVsYXRlZEJsb2dzIiwic2V0UmVsYXRlZEJsb2dzIiwibG9hZFJlbGF0ZWRCbG9ncyIsIl9pZCIsImNhdGFnb3JpZXMiLCJyZWxhdGUiLCJsaXN0UmVsYXRlZEJsb2dzIiwidGhlbiIsImRhdGEiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYmxvZ3MiLCJ1c2VFZmZlY3QiLCJibG9nQ2F0YWdvcmllcyIsIm1hcCIsImMiLCJpIiwibmFtZSIsImJsb2dUYWdzIiwidGFncyIsInQiLCJzaG93UmVsYXRlZEJsb2dzIiwiZGlzcXVzQ29tbWVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJwaG90byIsIndpZHRoIiwicG9zdGVkQnkiLCJwcm9maWxlIiwidXNlcm5hbWUiLCJtb21lbnQiLCJ1cGRhdGVkQXQiLCJmcm9tTm93IiwicmVuZGVySFRNTCIsImJvZHkiLCJnZXRJbml0aWFsUHJvcHMiLCJzaW5nbGVCbG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBcUI7QUFBQTs7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUNwQyxNQUFNQyxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUNWO0FBQ0lGLFFBQUksaUJBQ0oscUVBQUMsZ0RBQUQ7QUFBQSw4QkFDQztBQUFBLG1CQUFRQSxJQUFJLENBQUNHLEtBQWIsU0FBdUJDLGdEQUF2QjtBQUFBO0FBQUE7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QUFBQSxhQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBcURILENBMUhEOztHQUFNbEMsVTs7S0FBQUEsVTs7QUEySE5BLFVBQVUsQ0FBQytDLGVBQVgsR0FBNkIsaUJBQWU7QUFBQSxNQUFaN0MsS0FBWSxTQUFaQSxLQUFZO0FBRXhDLFNBQU84QyxnRUFBVSxDQUFDOUMsS0FBSyxDQUFDTSxJQUFQLENBQVYsQ0FDRlUsSUFERSxDQUNHLFVBQUNDLElBQUQsRUFBVTtBQUNaLFFBQUlBLElBQUksQ0FBQ0MsR0FBVCxFQUFjO0FBQ1ZDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxJQUFJLENBQUNDLEdBQWpCO0FBQ0gsS0FGRCxNQUdLO0FBQ0QsYUFBTztBQUNIbkIsWUFBSSxFQUFFa0IsSUFBSSxDQUFDbEIsSUFEUjtBQUVIQyxhQUFLLEVBQUxBO0FBRkcsT0FBUDtBQUlIO0FBQ0osR0FYRSxDQUFQO0FBWUgsQ0FkRDs7QUFlZUYseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYmxvZ3MvW3NsdWddLmU1NmYzNWE4MDBhY2JiNDY2ODkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi8uLi9jb21wb25lbnQvTGF5b3V0J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBzaW5nbGVCbG9nLCBsaXN0UmVsYXRlZEJsb2dzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9ibG9nJ1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcclxuaW1wb3J0IHJlbmRlckhUTUwgZnJvbSBcInJlYWN0LXJlbmRlci1odG1sXCJcclxuaW1wb3J0IFNtYWxsQ2FyZCBmcm9tICcuLi8uLi9jb21wb25lbnQvYmxvZy9zbWFsbENhcmQnXHJcbmltcG9ydCB7IEFQSSwgRE9NQUlOLCBBUFBfTkFNRSB9IGZyb20gJy4uLy4uL2NvbmZpZydcclxuaW1wb3J0IERpc3F1c1RocmVhZCBmcm9tICcuLi8uLi9jb21wb25lbnQvRGlzcXVzVGhyZWFkJ1xyXG5cclxuY29uc3QgU2luZ2xlQmxvZyA9ICh7IGJsb2csIHF1ZXJ5IH0pID0+IHtcclxuICAgIGNvbnN0IGhlYWQgPSAoKSA9PiBcclxuICAgICAgIHsgXHJcbiAgICAgICAgICAgYmxvZyAmJlxyXG4gICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICA8dGl0bGU+e2Jsb2cudGl0bGV9IHwge0FQUF9OQU1FfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Jsb2cubWRlc2N9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e2Ake0RPTUFJTn0vYmxvZ3MvJHtxdWVyeS5zbHVnfWB9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtgJHtibG9nLnRpdGxlfSB8ICR7QVBQX05BTUV9YH0gLz5cclxuICAgICAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Jsb2cubWRlc2N9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgICAgICAgPGxpbmsgcHJvcGVydHk9XCJvZzp1cmxcIiBocmVmPXtgJHtET01BSU59L2Jsb2dzLyR7cXVlcnkuc2x1Z31gfSAvPlxyXG4gICAgICAgICAgICA8bGluayBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGhyZWY9e2Ake0FQUF9OQU1FfWB9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBocmVmPXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtibG9nLnNsdWd9YH0gLz5cclxuICAgICAgICAgICAgPGxpbmsgcHJvcGVydHk9XCJvZzppbWFnZTpzZWN1cmVfdXJsXCIgaHJlZj17YCR7QVBJfS9ibG9nL3Bob3RvLyR7YmxvZy5zbHVnfWB9IC8+XHJcbiAgICAgICAgICAgIDxsaW5rIHByb3BlcnR5PVwib2c6aW1hZ2U6dHlwZVwiIGhyZWY9e2BpbWFnZS9qcGdgfSAvPlxyXG5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbnN0IFtSZWxhdGVkQmxvZ3MsIHNldFJlbGF0ZWRCbG9nc10gPSB1c2VTdGF0ZShbXSlcclxuICAgIGNvbnN0IGxvYWRSZWxhdGVkQmxvZ3MgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgeyBfaWQsIGNhdGFnb3JpZXMgfSA9IGJsb2dcclxuICAgICAgICBjb25zdCByZWxhdGUgPSB7IF9pZCwgY2F0YWdvcmllcyB9XHJcbiAgICAgICAgcmV0dXJuIGxpc3RSZWxhdGVkQmxvZ3MoeyByZWxhdGUgfSlcclxuICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldFJlbGF0ZWRCbG9ncyhkYXRhLmJsb2dzKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9hZFJlbGF0ZWRCbG9ncygpXHJcbiAgICB9LCBbXSlcclxuICAgIGNvbnN0IGJsb2dDYXRhZ29yaWVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBibG9nICYmIGJsb2cuY2F0YWdvcmllcy5tYXAoKGMsIGkpID0+IChcclxuICAgICAgICAgICAgPExpbmsga2V5PXtpfSBocmVmPXtgL2NhdGFnb3JpZXMvJHtjLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnkgbWwtMSBtci0xIG10LTNcIj57Yy5uYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpXHJcbiAgICB9XHJcbiAgICBjb25zdCBibG9nVGFncyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gYmxvZyAmJiBibG9nLnRhZ3MubWFwKCh0LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGtleT17aX0gaHJlZj17YC90YWdzLyR7dC5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbWwtMSBtci0xIG10LTNcIj57dC5uYW1lfTwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICkpXHJcbiAgICB9XHJcbiAgICBjb25zdCBzaG93UmVsYXRlZEJsb2dzID0gKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIFJlbGF0ZWRCbG9ncy5tYXAoKGJsb2csIGkpID0+IFxyXG4gICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNFwiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICA8YXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgICAgICA8U21hbGxDYXJkIGJsb2c9e2Jsb2d9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKVxyXG59XHJcbmNvbnN0IGRpc3F1c0NvbW1lbnQgPSAoKT0+e1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxEaXNxdXNUaHJlYWQgaWQ9e2Jsb2cuX2lkfSB0aXRsZT17YmxvZy50aXRsZX0gcGF0aD17YC9ibG9ncy8ke2Jsb2cuc2x1Z31gfS8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICB7aGVhZCgpfVxyXG4gICAgICAgICAgICB7YmxvZyAmJiA8TGF5b3V0PlxyXG4gICAgICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEpTT04uc3RyaW5naWZ5KGJsb2cucGhvdG8pID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHN0eWxlPXt7d2lkdGg6JzEwMCUnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L2Jsb2cvcGhvdG8vJHtibG9nLnNsdWd9YH0gYWx0PXtgJHtibG9nLnRpdGxlfWB9IGNsYXNzTmFtZT1cImltZyBpbWctZmx1aWQgZmVhdHVyZWQtaW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRpc3BsYXktMiBwdC0zIHBiLTMgdGV4dC1jZW50ZXJcIj57YmxvZy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkIG1hcmsgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV3JpdHRlbiBieSA8TGluayBocmVmPXtgJHtibG9nLnBvc3RlZEJ5LnByb2ZpbGV9YH0+PGE+e2Jsb2cucG9zdGVkQnkudXNlcm5hbWV9PC9hPjwvTGluaz4gfCBQdWJsaXNoZWQge21vbWVudChibG9nLnVwZGF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2Jsb2dDYXRhZ29yaWVzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YmxvZ1RhZ3MoKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxiciAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgbGVhZCBibG9nLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtyZW5kZXJIVE1MKGJsb2cuYm9keSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgcGItNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBwdC01IHBiLTUgaDJcIj5SZWxhdGVkIEJsb2dzPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IGhyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj4gIHtzaG93UmVsYXRlZEJsb2dzKCl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHBiLTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZGlzcXVzQ29tbWVudCgpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cclxuICAgICAgICAgICAgICAgIDwvbWFpbj5cclxuICAgICAgICAgICAgPC9MYXlvdXQ+fVxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQgPlxyXG4gICAgKVxyXG59XHJcblNpbmdsZUJsb2cuZ2V0SW5pdGlhbFByb3BzID0gKHsgcXVlcnkgfSkgPT4ge1xyXG5cclxuICAgIHJldHVybiBzaW5nbGVCbG9nKHF1ZXJ5LnNsdWcpXHJcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGEuZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmxvZzogZGF0YS5ibG9nLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUJsb2dcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==