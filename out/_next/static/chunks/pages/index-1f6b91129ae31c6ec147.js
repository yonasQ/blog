(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8043:function(n,t,e){"use strict";e.d(t,{fh:function(){return a},q:function(){return l},IU:function(){return f},xJ:function(){return h},ej:function(){return d},sM:function(){return p},m3:function(){return j},uf:function(){return g},$D:function(){return b},gF:function(){return m},c0:function(){return x}});var r=e(4301),c=e.n(r),o=e(6808),i=e.n(o),u=e(1163),s=e(2025),a=function(n){401==n.status&&g((function(){u.default.push({pathname:"/signin",query:{message:"Your session is expired. please signin."}})}))},l=function(n){return c()("".concat(s.bl,"/pre-signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},f=function(n){return c()("".concat(s.bl,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},h=function(n){return c()("".concat(s.bl,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},d=function(n){return i().get(n)},p=function(n,t){localStorage.setItem(n,JSON.stringify(t))},j=function(n,t){var e,r;e="token",r=n.token,i().set(e,r,{expires:1}),p("user",n.user),t()},g=function(n){var t;return t="token",i().remove(t,{expires:1}),function(n){localStorage.removeItem(n)}("user"),n(),c()("".concat(s.bl,"/signout"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},b=function(){if(d("token"))return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))},m=function(n){return c()("".concat(s.bl,"/forgot-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:n})}).then((function(n){return n.json()})).catch((function(n){return n}))},x=function(n){return c()("".concat(s.bl,"/reset-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))}},8975:function(n,t,e){"use strict";e.d(t,{Vh:function(){return a},r4:function(){return l},Ch:function(){return f},qH:function(){return h},pb:function(){return d},T7:function(){return p},zZ:function(){return j},mx:function(){return g}});var r,c=e(4301),o=e.n(c),i=e(2025),u=e(7563),s=e(8043);(0,s.$D)()&&1==(0,s.$D)().role?r="".concat(i.bl):(0,s.$D)()&&0==(0,s.$D)().role&&(r="".concat(i.bl,"/user"));var a=function(n,t){return o()("".concat(r,"/blog"),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(n){return(0,s.fh)(n),n.json()})).catch((function(n){return n}))},l=function(n,t){var e={skip:n,limit:t};return o()("".concat(i.bl,"/blogs-catagories-tags"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(n){return n.json()})).catch((function(n){return n}))},f=function(n){return o()("".concat(i.bl,"/blog/").concat(n),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},h=function(n){return o()("".concat(i.bl,"/blog/related"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},d=function(n){var t=n?"".concat(i.bl,"/").concat(n):"".concat(i.bl);return o()("".concat(t,"/blog"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},p=function(n,t){return o()("".concat(r,"/blog/").concat(n),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(n){return(0,s.fh)(n),n.json()})).catch((function(n){return n}))},j=function(n,t,e){return o()("".concat(r,"/blog/").concat(e),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(n){return(0,s.fh)(n),n.json()})).catch((function(n){return n}))},g=function(n){var t=u.stringify(n);return o()("".concat(i.bl,"/blogs/search?").concat(t),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))}},6616:function(n,t,e){"use strict";e.d(t,{Z:function(){return T}});var r=e(5893),c=e(7294),o=e(2025),i=e(1664),u=e(4865),s=e.n(u),a=e(9544),l=e(6992),f=e(5614),h=e(627),d=e(7243),p=e(3999),j=e(8008),g=e(8043),b=e(1163),m=e(6156),x=e(8975);function y(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function v(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?y(Object(e),!0).forEach((function(t){(0,m.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var O=(0,b.withRouter)((function(n){var t=n.router,e=(0,c.useState)({search:void 0,results:[],searched:!1,message:""}),o=e[0],u=e[1],s=o.search,a=o.searched,l=o.results,f=o.message;(0,c.useEffect)((function(){u(v(v({},o),{},{searched:!1,search:""}))}),[t]);var h=function(n){n.preventDefault(),(0,x.mx)({search:s}).then((function(n){u(v(v({},o),{},{results:n.blogs,searched:!0,message:"".concat(n.blogs.length," blogs found.")}))}))},d=function(n){u(v(v({},o),{},{search:n.target.value,searched:!1,result:[]}))};return(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)("div",{className:"pt-3 pb-3",children:(0,r.jsx)("form",{onSubmit:h,children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-8",children:(0,r.jsx)("input",{type:"search",className:"form-control",value:s,onChange:d,placeholder:"search blogs"})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsx)("button",{className:"btn btn-outline-primary btn-block",type:"submit",children:"Search"})})]})})}),a&&(0,r.jsx)("div",{style:{marginTop:"-80px",marginBottom:"-80px"},children:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,r.jsxs)("div",{className:"jumbotron bg-white",children:[f&&(0,r.jsx)("p",{className:"pt-4 text-muted font-italic",children:f}),n.map((function(n,t){return(0,r.jsx)("div",{children:(0,r.jsx)(i.default,{href:"/blogs/".concat(n.slug),children:(0,r.jsx)("a",{className:"text-primary",children:n.title})})},t)}))]})}(l)})]})}));b.default.onRouteChangeStart=function(n){return s().start()},b.default.onRouteChangeComplete=function(n){return s().done()},b.default.onRouteChangeError=function(n){return s().done()};var S=function(n){var t=(0,c.useState)(!1),e=t[0],u=t[1];return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsxs)(a.Z,{color:"light",light:!0,expand:"md",children:[(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)(l.Z,{className:"font-weight-bold",style:{cursor:"pointer"},children:o.iC})}),(0,r.jsx)(f.Z,{onClick:function(){return u(!e)}}),(0,r.jsx)(h.Z,{isOpen:e,navbar:!0,children:(0,r.jsxs)(d.Z,{className:"ml-auto",navbar:!0,children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/blogs",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"blogs"})})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/Contact",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"Contact"})})}),!(0,g.$D)()&&(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/signin",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"signin"})})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/signup",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"signup"})})})]}),(0,g.$D)()&&1==(0,g.$D)().role&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/admin",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"".concat((0,g.$D)().name,"'s Dashboard")})})}),(0,g.$D)()&&0==(0,g.$D)().role&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/user",children:(0,r.jsx)(j.Z,{style:{cursor:"pointer"},children:"".concat((0,g.$D)().name,"'s Dashboard")})})}),(0,g.$D)()&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(j.Z,{onClick:function(){(0,g.uf)((function(){b.default.replace("/signin")}))},style:{cursor:"pointer"},children:"signout"})})]})})]}),(0,r.jsx)(O,{})]})},T=function(n){var t=n.children;return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(S,{}),t]})}},2025:function(n,t,e){"use strict";e.d(t,{bl:function(){return r},yK:function(){return c},iC:function(){return o},CT:function(){return i}});var r="https://quest-blog.herokuapp.com/api",c="http://localhost:3000",o="SEOBLOG",i="blog-7690exkuju"},6124:function(n,t,e){"use strict";e.r(t);var r=e(5893),c=e(6616),o=e(1664);t.default=function(){return(0,r.jsxs)(c.Z,{children:[(0,r.jsx)("h1",{children:"hello world"}),(0,r.jsx)(o.default,{href:"/signin",children:"signin"})]})}},8581:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(6124)}])}},function(n){n.O(0,[774,769,888,179],(function(){return t=8581,n(n.s=t);var t}));var t=n.O();_N_E=t}]);