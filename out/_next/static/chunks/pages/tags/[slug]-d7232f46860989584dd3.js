(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[44],{8043:function(n,t,e){"use strict";e.d(t,{fh:function(){return u},q:function(){return l},IU:function(){return h},xJ:function(){return f},ej:function(){return d},sM:function(){return p},m3:function(){return j},uf:function(){return g},$D:function(){return m},gF:function(){return b},c0:function(){return x}});var r=e(4301),c=e.n(r),o=e(6808),i=e.n(o),s=e(1163),a=e(2025),u=function(n){401==n.status?(console.log("1"),g((function(){s.default.push({pathname:"/signin",query:{message:"Your session is expired. please signin."}})}))):console.log("3")},l=function(n){return c()("".concat(a.bl,"/pre-signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},h=function(n){return c()("".concat(a.bl,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},f=function(n){return c()("".concat(a.bl,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},d=function(n){return i().get(n)},p=function(n,t){localStorage.setItem(n,JSON.stringify(t))},j=function(n,t){var e,r;e="token",r=n.token,i().set(e,r,{expires:1}),p("user",n.user),t()},g=function(n){var t;return t="token",i().remove(t,{expires:1}),function(n){localStorage.removeItem(n)}("user"),n(),c()("".concat(a.bl,"/signout"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},m=function(){if(d("token"))return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))},b=function(n){return c()("".concat(a.bl,"/forgot-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:n})}).then((function(n){return n.json()})).catch((function(n){return n}))},x=function(n){return c()("".concat(a.bl,"/reset-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))}},8975:function(n,t,e){"use strict";e.d(t,{Vh:function(){return u},r4:function(){return l},Ch:function(){return h},qH:function(){return f},pb:function(){return d},T7:function(){return p},zZ:function(){return j},mx:function(){return g}});var r,c=e(4301),o=e.n(c),i=e(2025),s=e(7563),a=e(8043);(0,a.$D)()&&1==(0,a.$D)().role?r="".concat(i.bl):(0,a.$D)()&&0==(0,a.$D)().role&&(r="".concat(i.bl,"/user"));var u=function(n,t){return o()("".concat(r,"/blog"),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(n){return(0,a.fh)(n),n.json()})).catch((function(n){return n}))},l=function(n,t){var e={skip:n,limit:t};return o()("".concat(i.bl,"/blogs-catagories-tags"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(n){return n.json()})).catch((function(n){return n}))},h=function(n){return o()("".concat(i.bl,"/blog/").concat(n),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},f=function(n){return o()("".concat(i.bl,"/blog/related"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},d=function(n){var t=n?"".concat(i.bl,"/").concat(n):"".concat(i.bl);return o()("".concat(t,"/blog"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},p=function(n,t){return o()("".concat(r,"/blog/").concat(n),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(n){return(0,a.fh)(n),n.json()})).catch((function(n){return n}))},j=function(n,t,e){return o()("".concat(r,"/blog/").concat(e),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(n){return(0,a.fh)(n),n.json()})).catch((function(n){return n}))},g=function(n){var t=s.stringify(n);return o()("".concat(i.bl,"/blogs/search?").concat(t),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))}},2199:function(n,t,e){"use strict";e.d(t,{Ue:function(){return s},NJ:function(){return a},tc:function(){return u},h1:function(){return l}});var r=e(4301),c=e.n(r),o=e(2025),i=e(8043),s=function(n,t){return c()("".concat(o.bl,"/tag"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(n)}).then((function(n){return(0,i.fh)(n),n.json()})).catch((function(n){return n}))},a=function(){return c()("".concat(o.bl,"/tags"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},u=function(n,t){return c()("".concat(o.bl,"/tag/").concat(n),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}}).then((function(n){return(0,i.fh)(n),n.json()})).catch((function(n){return n}))},l=function(n){return c()("".concat(o.bl,"/tag/").concat(n),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))}},6616:function(n,t,e){"use strict";e.d(t,{Z:function(){return T}});var r=e(5893),c=e(7294),o=e(2025),i=e(1664),s=e(4865),a=e.n(s),u=e(9544),l=e(6992),h=e(5614),f=e(627),d=e(7243),p=e(3999),j=e(8008),g=e(8043),m=e(1163),b=e(6156),x=e(8975);function y(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function v(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?y(Object(e),!0).forEach((function(t){(0,b.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var N=(0,m.withRouter)((function(n){var t=n.router,e=(0,c.useState)({search:void 0,results:[],searched:!1,message:""}),o=e[0],s=e[1],a=o.search,u=o.searched,l=o.results,h=o.message;(0,c.useEffect)((function(){s(v(v({},o),{},{searched:!1,search:""}))}),[t]);var f=function(n){n.preventDefault(),(0,x.mx)({search:a}).then((function(n){s(v(v({},o),{},{results:n.blogs,searched:!0,message:"".concat(n.blogs.length," blogs found.")}))}))},d=function(n){s(v(v({},o),{},{search:n.target.value,searched:!1,result:[]}))};return(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)("div",{className:"pt-3 pb-3",children:(0,r.jsx)("form",{onSubmit:f,children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-8",children:(0,r.jsx)("input",{type:"search",className:"form-control",value:a,onChange:d,placeholder:"search blogs"})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsx)("button",{className:"btn btn-outline-primary btn-block",type:"submit",children:"Search"})})]})})}),u&&(0,r.jsx)("div",{style:{marginTop:"-80px",marginBottom:"-80px"},children:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,r.jsxs)("div",{className:"jumbotron bg-white",children:[h&&(0,r.jsx)("p",{className:"pt-4 text-muted font-italic",children:h}),n.map((function(n,t){return(0,r.jsx)("div",{children:(0,r.jsx)(i.default,{href:"/blogs/".concat(n.slug),children:(0,r.jsx)("a",{className:"text-primary",children:n.title})})},t)}))]})}(l)})]})}));m.default.onRouteChangeStart=function(n){return a().start()},m.default.onRouteChangeComplete=function(n){return a().done()},m.default.onRouteChangeError=function(n){return a().done()};var O=function(n){var t=(0,c.useState)(!1),e=t[0],s=t[1];return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsxs)(u.Z,{color:"light",light:!0,expand:"md",children:[(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)(l.Z,{className:"font-weight-bold",style:{cursor:"pointer"},children:o.iC})}),(0,r.jsx)(h.Z,{onClick:function(){return s(!e)}}),(0,r.jsx)(f.Z,{isOpen:e,navbar:!0,children:(0,r.jsxs)(d.Z,{className:"ml-auto",navbar:!0,children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/blogs",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"blogs"})})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/Contact",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"Contact"})})}),!(0,g.$D)()&&(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/signin",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"signin"})})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/signup",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"signup"})})})]}),(0,g.$D)()&&1==(0,g.$D)().role&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/admin",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"".concat((0,g.$D)().name,"'s Dashboard")})})}),(0,g.$D)()&&0==(0,g.$D)().role&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/user",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"".concat((0,g.$D)().name,"'s Dashboard")})})}),(0,g.$D)()&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(j.Z,{onClick:function(){(0,g.uf)((function(){m.default.replace("/signin")}))},style:{cursor:"pointer"},children:"signout"})})]})})]}),(0,r.jsx)(N,{})]})},T=function(n){var t=n.children;return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(O,{}),t]})}},908:function(n,t,e){"use strict";var r=e(5893),c=e(1664),o=e(381),i=e.n(o),s=e(8341),a=e.n(s),u=e(2025);t.Z=function(n){var t=n.blog;return(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"lead pb-4",children:[(0,r.jsx)("header",{children:(0,r.jsx)(c.default,{href:"/blogs/".concat(t.slug),children:(0,r.jsx)("a",{children:(0,r.jsx)("h1",{className:"font-weight-bold pt-3 pb-3",children:t.title})})})}),(0,r.jsx)("section",{children:(0,r.jsxs)("p",{className:"mark ml-1 pb-2 pt-2",children:["Written by  ",(0,r.jsx)(c.default,{href:"".concat(t.postedBy.profile),children:(0,r.jsx)("a",{children:t.postedBy.username})})," | Published ",i()(t.updatedAt).fromNow()]})}),(0,r.jsxs)("section",{children:[t.catagories.map((function(n,t){return(0,r.jsx)(c.default,{href:"/catagories/".concat(n.slug),children:(0,r.jsx)("a",{className:"btn btn-primary ml-1 mr-1 mt-3",children:n.name})},t)})),t.tags.map((function(n,t){return(0,r.jsx)(c.default,{href:"/tags/".concat(n.slug),children:(0,r.jsx)("a",{className:"btn btn-outline-primary ml-1 mr-1 mt-3",children:n.name})},t)})),(0,r.jsx)("br",{}),(0,r.jsx)("br",{})]}),(0,r.jsxs)("section",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsx)("section",{children:t.photo?(0,r.jsx)("img",{src:"".concat(u.bl,"/blog/photo/").concat(t.slug),alt:"".concat(t.title),style:{maxHeight:"auto",width:"100%"},className:"img img-fliud"}):""})}),(0,r.jsx)("div",{className:"col-md-8",children:(0,r.jsxs)("section",{children:[(0,r.jsx)("div",{className:"pb-3",children:a()(t.excerpt)}),(0,r.jsx)(c.default,{href:"/blogs/".concat(t.slug),children:(0,r.jsx)("a",{className:"btn btn-primary pt-2",children:"Read More"})})]})})]})]})})}},2025:function(n,t,e){"use strict";e.d(t,{bl:function(){return r},yK:function(){return c},iC:function(){return o},CT:function(){return i}});var r="https://quest-blog.herokuapp.com/api",c="http://localhost:3000",o="SEOBLOG",i="blog-7690exkuju"},6126:function(n,t,e){"use strict";e.r(t);var r=e(5893),c=e(9008),o=(e(1664),e(6616)),i=e(7294),s=(e(381),e(8341),e(2025)),a=e(2199),u=e(908),l=function(n){var t=n.tag,e=n.blogs,a=n.query;return(0,r.jsxs)(i.Fragment,{children:[(0,r.jsxs)(c.default,{children:[(0,r.jsxs)("title",{children:[t?t.name:""," | ",s.iC]}),(0,r.jsx)("link",{rel:"canonical",href:"".concat(s.yK,"/tags/").concat(a.slug)}),(0,r.jsx)("meta",{property:"og:title",content:"".concat(t?t.name:""," | ").concat(s.iC)}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),(0,r.jsx)("link",{property:"og:url",href:"".concat(s.yK,"/tags/").concat(a.slug)}),(0,r.jsx)("link",{property:"og:site_name",href:"".concat(s.iC)})]}),(0,r.jsx)(o.Z,{children:(0,r.jsx)("main",{children:(0,r.jsx)("div",{className:"container-fluid text-center",children:(0,r.jsx)("header",{children:(0,r.jsxs)("div",{className:"col-md-12 pt-3",children:[(0,r.jsx)("h1",{className:"display-4 font-weight-bold",style:{textTransform:"capitalize"},children:t?t.name:""}),e&&e.map((function(n,t){return(0,r.jsxs)("article",{children:[(0,r.jsx)(u.Z,{blog:n}),(0,r.jsx)("hr",{})]},t)}))]})})})})})]})};l.getInitialProps=function(n){var t=n.query;return(0,a.h1)(t.slug).then((function(n){if(!n.err)return{tag:n.tag,blogs:n.blogs,query:t};console.log(n.err)}))},t.default=l},7491:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tags/[slug]",function(){return e(6126)}])},2361:function(){},4616:function(){}},function(n){n.O(0,[774,885,769,764,242,888,179],(function(){return t=7491,n(n.s=t);var t}));var t=n.O();_N_E=t}]);