(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[964],{8043:function(n,t,e){"use strict";e.d(t,{fh:function(){return u},q:function(){return l},IU:function(){return h},xJ:function(){return d},ej:function(){return f},sM:function(){return p},m3:function(){return j},uf:function(){return g},$D:function(){return m},gF:function(){return x},c0:function(){return b}});var r=e(4301),c=e.n(r),o=e(6808),i=e.n(o),s=e(1163),a=e(2025),u=function(n){401==n.status&&g((function(){s.default.push({pathname:"/signin",query:{message:"Your session is expired. please signin."}})}))},l=function(n){return c()("".concat(a.bl,"/pre-signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},h=function(n){return c()("".concat(a.bl,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},d=function(n){return c()("".concat(a.bl,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},f=function(n){return i().get(n)},p=function(n,t){localStorage.setItem(n,JSON.stringify(t))},j=function(n,t){var e,r;e="token",r=n.token,i().set(e,r,{expires:1}),p("user",n.user),t()},g=function(n){var t;return t="token",i().remove(t,{expires:1}),function(n){localStorage.removeItem(n)}("user"),n(),c()("".concat(a.bl,"/signout"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},m=function(){if(f("token"))return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))},x=function(n){return c()("".concat(a.bl,"/forgot-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:n})}).then((function(n){return n.json()})).catch((function(n){return n}))},b=function(n){return c()("".concat(a.bl,"/reset-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))}},8975:function(n,t,e){"use strict";e.d(t,{Vh:function(){return u},r4:function(){return l},Ch:function(){return h},qH:function(){return d},pb:function(){return f},T7:function(){return p},zZ:function(){return j},mx:function(){return g}});var r,c=e(4301),o=e.n(c),i=e(2025),s=e(7563),a=e(8043);(0,a.$D)()&&1==(0,a.$D)().role?r="".concat(i.bl):(0,a.$D)()&&0==(0,a.$D)().role&&(r="".concat(i.bl,"/user"));var u=function(n,t){return o()("".concat(r,"/blog"),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(n){return(0,a.fh)(n),n.json()})).catch((function(n){return n}))},l=function(n,t){var e={skip:n,limit:t};return o()("".concat(i.bl,"/blogs-catagories-tags"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(n){return n.json()})).catch((function(n){return n}))},h=function(n){return o()("".concat(i.bl,"/blog/").concat(n),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},d=function(n){return o()("".concat(i.bl,"/blog/related"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},f=function(n){var t=n?"".concat(i.bl,"/").concat(n):"".concat(i.bl);return o()("".concat(t,"/blog"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},p=function(n,t){return o()("".concat(r,"/blog/").concat(n),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(n){return(0,a.fh)(n),n.json()})).catch((function(n){return n}))},j=function(n,t,e){return o()("".concat(r,"/blog/").concat(e),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(n){return(0,a.fh)(n),n.json()})).catch((function(n){return n}))},g=function(n){var t=s.stringify(n);return o()("".concat(i.bl,"/blogs/search?").concat(t),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))}},6616:function(n,t,e){"use strict";e.d(t,{Z:function(){return T}});var r=e(5893),c=e(7294),o=e(2025),i=e(1664),s=e(4865),a=e.n(s),u=e(9544),l=e(6992),h=e(5614),d=e(627),f=e(7243),p=e(3999),j=e(8008),g=e(8043),m=e(1163),x=e(6156),b=e(8975);function y(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function v(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?y(Object(e),!0).forEach((function(t){(0,x.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var N=(0,m.withRouter)((function(n){var t=n.router,e=(0,c.useState)({search:void 0,results:[],searched:!1,message:""}),o=e[0],s=e[1],a=o.search,u=o.searched,l=o.results,h=o.message;(0,c.useEffect)((function(){s(v(v({},o),{},{searched:!1,search:""}))}),[t]);var d=function(n){n.preventDefault(),(0,b.mx)({search:a}).then((function(n){s(v(v({},o),{},{results:n.blogs,searched:!0,message:"".concat(n.blogs.length," blogs found.")}))}))},f=function(n){s(v(v({},o),{},{search:n.target.value,searched:!1,result:[]}))};return(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)("div",{className:"pt-3 pb-3",children:(0,r.jsx)("form",{onSubmit:d,children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-8",children:(0,r.jsx)("input",{type:"search",className:"form-control",value:a,onChange:f,placeholder:"search blogs"})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsx)("button",{className:"btn btn-outline-primary btn-block",type:"submit",children:"Search"})})]})})}),u&&(0,r.jsx)("div",{style:{marginTop:"-80px",marginBottom:"-80px"},children:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,r.jsxs)("div",{className:"jumbotron bg-white",children:[h&&(0,r.jsx)("p",{className:"pt-4 text-muted font-italic",children:h}),n.map((function(n,t){return(0,r.jsx)("div",{children:(0,r.jsx)(i.default,{href:"/blogs/".concat(n.slug),children:(0,r.jsx)("a",{className:"text-primary",children:n.title})})},t)}))]})}(l)})]})}));m.default.onRouteChangeStart=function(n){return a().start()},m.default.onRouteChangeComplete=function(n){return a().done()},m.default.onRouteChangeError=function(n){return a().done()};var O=function(n){var t=(0,c.useState)(!1),e=t[0],s=t[1];return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsxs)(u.Z,{color:"light",light:!0,expand:"md",children:[(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)(l.Z,{className:"font-weight-bold",style:{cursor:"pointer"},children:o.iC})}),(0,r.jsx)(h.Z,{onClick:function(){return s(!e)}}),(0,r.jsx)(d.Z,{isOpen:e,navbar:!0,children:(0,r.jsxs)(f.Z,{className:"ml-auto",navbar:!0,children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/blogs",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"blogs"})})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/Contact",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"Contact"})})}),!(0,g.$D)()&&(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/signin",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"signin"})})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/signup",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"signup"})})})]}),(0,g.$D)()&&1==(0,g.$D)().role&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/admin",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"".concat((0,g.$D)().name,"'s Dashboard")})})}),(0,g.$D)()&&0==(0,g.$D)().role&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/user",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"".concat((0,g.$D)().name,"'s Dashboard")})})}),(0,g.$D)()&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(j.Z,{onClick:function(){(0,g.uf)((function(){m.default.replace("/signin")}))},style:{cursor:"pointer"},children:"signout"})})]})})]}),(0,r.jsx)(N,{})]})},T=function(n){var t=n.children;return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(O,{}),t]})}},3565:function(n,t,e){"use strict";var r=e(5893),c=e(1163),o=e(7294),i=e(8043);t.Z=function(n){var t=n.children;return(0,o.useEffect)((function(){(0,i.$D)()?1!=(0,i.$D)().role&&c.default.push("/"):c.default.push("/signin")}),[]),(0,r.jsx)(o.Fragment,{children:t})}},2025:function(n,t,e){"use strict";e.d(t,{bl:function(){return r},yK:function(){return c},iC:function(){return o},CT:function(){return i}});var r="https://quest-blog.herokuapp.com/api",c="http://localhost:3000",o="SEOBLOG",i="blog-7690exkuju"},2971:function(n,t,e){"use strict";e.r(t);var r=e(5893),c=e(6616),o=e(3565),i=e(1664);t.default=function(){return(0,r.jsx)(c.Z,{children:(0,r.jsx)(o.Z,{children:(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-12 pt-5 pb-5",children:(0,r.jsx)("h1",{children:"Admin dashboard"})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsxs)("ul",{className:"list-group",children:[(0,r.jsx)("li",{className:"list-group-item",children:(0,r.jsx)(i.default,{href:"/admin/crud/catagory-tag",children:(0,r.jsx)("a",{children:"Create Catagory"})})}),(0,r.jsx)("li",{className:"list-group-item",children:(0,r.jsx)(i.default,{href:"/admin/crud/catagory-tag",children:(0,r.jsx)("a",{children:"Create Tag"})})}),(0,r.jsx)("li",{className:"list-group-item",children:(0,r.jsx)(i.default,{href:"/admin/crud/blog",children:(0,r.jsx)("a",{children:"Create Blog"})})}),(0,r.jsx)("li",{className:"list-group-item",children:(0,r.jsx)(i.default,{href:"/admin/crud/blogs",children:(0,r.jsx)("a",{children:"Update/Delete Blog"})})}),(0,r.jsx)("li",{className:"list-group-item",children:(0,r.jsx)(i.default,{href:"/user/update",children:(0,r.jsx)("a",{children:"Update Profile"})})})]})}),(0,r.jsx)("div",{className:"col-md-8",children:"rigth"})]})})})})}},5469:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin",function(){return e(2971)}])}},function(n){n.O(0,[774,769,888,179],(function(){return t=5469,n(n.s=t);var t}));var t=n.O();_N_E=t}]);