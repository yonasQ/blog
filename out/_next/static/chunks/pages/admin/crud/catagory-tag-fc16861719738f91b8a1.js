(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[986],{8043:function(n,t,e){"use strict";e.d(t,{fh:function(){return a},q:function(){return l},IU:function(){return f},xJ:function(){return d},ej:function(){return h},sM:function(){return p},m3:function(){return m},uf:function(){return j},$D:function(){return g},gF:function(){return b},c0:function(){return x}});var r=e(4301),c=e.n(r),o=e(6808),i=e.n(o),s=e(1163),u=e(2025),a=function(n){401==n.status&&j((function(){s.default.push({pathname:"/signin",query:{message:"Your session is expired. please signin."}})}))},l=function(n){return c()("".concat(u.bl,"/pre-signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},f=function(n){return c()("".concat(u.bl,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},d=function(n){return c()("".concat(u.bl,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},h=function(n){return i().get(n)},p=function(n,t){localStorage.setItem(n,JSON.stringify(t))},m=function(n,t){var e,r;e="token",r=n.token,i().set(e,r,{expires:1}),p("user",n.user),t()},j=function(n){var t;return t="token",i().remove(t,{expires:1}),function(n){localStorage.removeItem(n)}("user"),n(),c()("".concat(u.bl,"/signout"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},g=function(){if(h("token"))return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))},b=function(n){return c()("".concat(u.bl,"/forgot-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:n})}).then((function(n){return n.json()})).catch((function(n){return n}))},x=function(n){return c()("".concat(u.bl,"/reset-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))}},8975:function(n,t,e){"use strict";e.d(t,{Vh:function(){return a},r4:function(){return l},Ch:function(){return f},qH:function(){return d},pb:function(){return h},T7:function(){return p},zZ:function(){return m},mx:function(){return j}});var r,c=e(4301),o=e.n(c),i=e(2025),s=e(7563),u=e(8043);(0,u.$D)()&&1==(0,u.$D)().role?r="".concat(i.bl):(0,u.$D)()&&0==(0,u.$D)().role&&(r="".concat(i.bl,"/user"));var a=function(n,t){return o()("".concat(r,"/blog"),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(n){return(0,u.fh)(n),n.json()})).catch((function(n){return n}))},l=function(n,t){var e={skip:n,limit:t};return o()("".concat(i.bl,"/blogs-catagories-tags"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(n){return n.json()})).catch((function(n){return n}))},f=function(n){return o()("".concat(i.bl,"/blog/").concat(n),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},d=function(n){return o()("".concat(i.bl,"/blog/related"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},h=function(n){var t=n?"".concat(i.bl,"/").concat(n):"".concat(i.bl);return o()("".concat(t,"/blog"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},p=function(n,t){return o()("".concat(r,"/blog/").concat(n),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(n){return(0,u.fh)(n),n.json()})).catch((function(n){return n}))},m=function(n,t,e){return o()("".concat(r,"/blog/").concat(e),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(n){return(0,u.fh)(n),n.json()})).catch((function(n){return n}))},j=function(n){var t=s.stringify(n);return o()("".concat(i.bl,"/blogs/search?").concat(t),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))}},3706:function(n,t,e){"use strict";e.d(t,{Ue:function(){return s},e:function(){return u},Pq:function(){return a},p2:function(){return l}});var r=e(4301),c=e.n(r),o=e(2025),i=e(8043),s=function(n,t){return c()("".concat(o.bl,"/catagory"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(n)}).then((function(n){return(0,i.fh)(n),n.json()})).catch((function(n){return n}))},u=function(){return c()("".concat(o.bl,"/catagories"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},a=function(n,t){return c()("".concat(o.bl,"/catagory/").concat(n),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}}).then((function(n){return(0,i.fh)(n),n.json()})).catch((function(n){return n}))},l=function(n){return c()("".concat(o.bl,"/catagory/").concat(n),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))}},2199:function(n,t,e){"use strict";e.d(t,{Ue:function(){return s},NJ:function(){return u},tc:function(){return a},h1:function(){return l}});var r=e(4301),c=e.n(r),o=e(2025),i=e(8043),s=function(n,t){return c()("".concat(o.bl,"/tag"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(n)}).then((function(n){return(0,i.fh)(n),n.json()})).catch((function(n){return n}))},u=function(){return c()("".concat(o.bl,"/tags"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},a=function(n,t){return c()("".concat(o.bl,"/tag/").concat(n),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}}).then((function(n){return(0,i.fh)(n),n.json()})).catch((function(n){return n}))},l=function(n){return c()("".concat(o.bl,"/tag/").concat(n),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))}},6616:function(n,t,e){"use strict";e.d(t,{Z:function(){return T}});var r=e(5893),c=e(7294),o=e(2025),i=e(1664),s=e(4865),u=e.n(s),a=e(9544),l=e(6992),f=e(5614),d=e(627),h=e(7243),p=e(3999),m=e(8008),j=e(8043),g=e(1163),b=e(6156),x=e(8975);function y(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function v(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?y(Object(e),!0).forEach((function(t){(0,b.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var O=(0,g.withRouter)((function(n){var t=n.router,e=(0,c.useState)({search:void 0,results:[],searched:!1,message:""}),o=e[0],s=e[1],u=o.search,a=o.searched,l=o.results,f=o.message;(0,c.useEffect)((function(){s(v(v({},o),{},{searched:!1,search:""}))}),[t]);var d=function(n){n.preventDefault(),(0,x.mx)({search:u}).then((function(n){s(v(v({},o),{},{results:n.blogs,searched:!0,message:"".concat(n.blogs.length," blogs found.")}))}))},h=function(n){s(v(v({},o),{},{search:n.target.value,searched:!1,result:[]}))};return(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)("div",{className:"pt-3 pb-3",children:(0,r.jsx)("form",{onSubmit:d,children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-8",children:(0,r.jsx)("input",{type:"search",className:"form-control",value:u,onChange:h,placeholder:"search blogs"})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsx)("button",{className:"btn btn-outline-primary btn-block",type:"submit",children:"Search"})})]})})}),a&&(0,r.jsx)("div",{style:{marginTop:"-80px",marginBottom:"-80px"},children:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,r.jsxs)("div",{className:"jumbotron bg-white",children:[f&&(0,r.jsx)("p",{className:"pt-4 text-muted font-italic",children:f}),n.map((function(n,t){return(0,r.jsx)("div",{children:(0,r.jsx)(i.default,{href:"/blogs/".concat(n.slug),children:(0,r.jsx)("a",{className:"text-primary",children:n.title})})},t)}))]})}(l)})]})}));g.default.onRouteChangeStart=function(n){return u().start()},g.default.onRouteChangeComplete=function(n){return u().done()},g.default.onRouteChangeError=function(n){return u().done()};var N=function(n){var t=(0,c.useState)(!1),e=t[0],s=t[1];return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsxs)(a.Z,{color:"light",light:!0,expand:"md",children:[(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)(l.Z,{className:"font-weight-bold",style:{cursor:"pointer"},children:o.iC})}),(0,r.jsx)(f.Z,{onClick:function(){return s(!e)}}),(0,r.jsx)(d.Z,{isOpen:e,navbar:!0,children:(0,r.jsxs)(h.Z,{className:"ml-auto",navbar:!0,children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/blogs",children:(0,r.jsx)(m.Z,{style:{cursor:"pointer"},children:"blogs"})})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/Contact",children:(0,r.jsx)(m.Z,{style:{cursor:"pointer"},children:"Contact"})})}),!(0,j.$D)()&&(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/signin",children:(0,r.jsx)(m.Z,{style:{cursor:"pointer"},children:"signin"})})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/signup",children:(0,r.jsx)(m.Z,{style:{cursor:"pointer"},children:"signup"})})})]}),(0,j.$D)()&&1==(0,j.$D)().role&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/admin",children:(0,r.jsx)(m.Z,{style:{cursor:"pointer"},children:"".concat((0,j.$D)().name,"'s Dashboard")})})}),(0,j.$D)()&&0==(0,j.$D)().role&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/user",children:(0,r.jsx)(m.Z,{style:{cursor:"pointer"},children:"".concat((0,j.$D)().name,"'s Dashboard")})})}),(0,j.$D)()&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(m.Z,{onClick:function(){(0,j.uf)((function(){g.default.replace("/signin")}))},style:{cursor:"pointer"},children:"signout"})})]})})]}),(0,r.jsx)(O,{})]})},T=function(n){var t=n.children;return(0,r.jsxs)(c.Fragment,{children:[(0,r.jsx)(N,{}),t]})}},3565:function(n,t,e){"use strict";var r=e(5893),c=e(1163),o=e(7294),i=e(8043);t.Z=function(n){var t=n.children;return(0,o.useEffect)((function(){(0,i.$D)()?1!=(0,i.$D)().role&&c.default.push("/"):c.default.push("/signin")}),[]),(0,r.jsx)(o.Fragment,{children:t})}},2025:function(n,t,e){"use strict";e.d(t,{bl:function(){return r},yK:function(){return c},iC:function(){return o},CT:function(){return i}});var r="https://quest-blog.herokuapp.com/api",c="http://localhost:3000",o="SEOBLOG",i="blog-7690exkuju"},2029:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return g}});var r=e(5893),c=e(6616),o=e(3565),i=e(6156),s=e(7294),u=e(8043),a=e(3706);function l(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function f(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?l(Object(e),!0).forEach((function(t){(0,i.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var d=function(){var n=(0,s.useState)({name:"",error:!1,success:!1,catagories:[],removed:!1,reload:!1}),t=n[0],e=n[1],c=t.name,o=t.error,i=t.success,l=t.catagories,d=t.removed,h=t.reload,p=(0,u.ej)("token");(0,s.useEffect)((function(){m()}),[h]);var m=function(){(0,a.e)().then((function(n){n.err?console.log(err):e(f(f({},t),{},{catagories:n.catagories}))}))},j=function(n){g(n)},g=function(n){window.confirm("Are you sure you want to delete this catagory?")&&(0,a.Pq)(n,p).then((function(n){n.err?e(f(f({},t),{},{error:n.err})):e(f(f({},t),{},{reload:!h,removed:!0,error:!1,success:!1}))}))},b=function(n){e(f(f({},t),{},{name:n.target.value,error:!1,success:!1,removed:""}))},x=function(n){n.preventDefault(),(0,a.Ue)({name:c},p).then((function(n){n.err?e(f(f({},t),{},{error:n.err,reload:!1})):e(f(f({},t),{},{error:!1,success:!0,name:"",reload:!h,removed:!1}))}))};return(0,r.jsxs)(s.Fragment,{children:[function(){if(i)return(0,r.jsx)("p",{className:"text-success",children:"New catagory is created. "})}(),function(){if(o)return(0,r.jsx)("p",{className:"text-danger",children:"Catagory already exists."})}(),function(){if(d)return(0,r.jsx)("p",{className:"text-danger",children:"Catagory is removed"})}(),(0,r.jsxs)("div",{onMouseMove:function(){e(f(f({},t),{},{success:"",error:"",removed:""}))},children:[(0,r.jsxs)("form",{onSubmit:x,children:[(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{className:"text-muted",children:"Name"}),(0,r.jsx)("input",{type:"text",className:"form-control",value:c,onChange:b,required:!0})]}),(0,r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create"})]}),l.map((function(n,t){return(0,r.jsx)("button",{onDoubleClick:function(){j(n.slug)},title:"double click to delete",style:{textTransform:"capitalize"},className:"btn btn-outline-primary ml-1 mr-1 mt-3",children:n.name},t)}))]})]})},h=e(2199);function p(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function m(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?p(Object(e),!0).forEach((function(t){(0,i.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var j=function(){var n=(0,s.useState)({name:"",error:!1,success:!1,tags:[],removed:!1,reload:!1}),t=n[0],e=n[1],c=t.name,o=t.error,i=t.success,a=t.tags,l=t.removed,f=t.reload,d=(0,u.ej)("token");(0,s.useEffect)((function(){p()}),[f]);var p=function(){(0,h.NJ)().then((function(n){n.err?console.log(err):e(m(m({},t),{},{tags:n.tags}))}))},j=function(n){g(n)},g=function(n){window.confirm("Are you sure you want to delete this tag?")&&(0,h.tc)(n,d).then((function(n){n.err?e(m(m({},t),{},{error:n.err})):e(m(m({},t),{},{reload:!f,removed:!0,error:!1,success:!1}))}))},b=function(n){e(m(m({},t),{},{name:n.target.value,error:!1,success:!1,removed:""}))},x=function(n){n.preventDefault(),(0,h.Ue)({name:c},d).then((function(n){n.err?e(m(m({},t),{},{error:n.err,reload:!1})):e(m(m({},t),{},{error:!1,success:!0,name:"",reload:!f,removed:!1}))}))};return(0,r.jsxs)(s.Fragment,{children:[function(){if(i)return(0,r.jsx)("p",{className:"text-success",children:"New tag is created. "})}(),function(){if(o)return(0,r.jsx)("p",{className:"text-danger",children:"Tag already exists."})}(),function(){if(l)return(0,r.jsx)("p",{className:"text-danger",children:"Tag is removed"})}(),(0,r.jsxs)("div",{onMouseMove:function(){e(m(m({},t),{},{success:"",error:"",removed:""}))},children:[(0,r.jsxs)("form",{onSubmit:x,children:[(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{className:"text-muted",children:"Name"}),(0,r.jsx)("input",{type:"text",className:"form-control",value:c,onChange:b,required:!0})]}),(0,r.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Create"})]}),a.map((function(n,t){return(0,r.jsx)("button",{onDoubleClick:function(){j(n.slug)},title:"double click to delete",style:{textTransform:"capitalize"},className:"btn btn-outline-primary ml-1 mr-1 mt-3",children:n.name},t)}))]})]})},g=function(){return(0,r.jsx)(c.Z,{children:(0,r.jsx)(o.Z,{children:(0,r.jsx)("div",{className:"container-fluid",children:(0,r.jsxs)("div",{className:"row pb-5",children:[(0,r.jsx)("div",{className:"col-md-12 pt-5 pb-5",children:(0,r.jsx)("h1",{children:"Manage Catagories and Tags"})}),(0,r.jsxs)("div",{className:"col-md-6",children:[(0,r.jsx)("p",{children:"Catagories"}),(0,r.jsx)(d,{})]}),(0,r.jsxs)("div",{className:"col-md-6",children:[(0,r.jsx)("p",{children:"Tags"}),(0,r.jsx)(j,{})]})]})})})})}},6489:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/crud/catagory-tag",function(){return e(2029)}])}},function(n){n.O(0,[774,769,888,179],(function(){return t=6489,n(n.s=t);var t}));var t=n.O();_N_E=t}]);