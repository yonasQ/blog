(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{2137:function(n,t,e){"use strict";function r(n,t,e,r,o,c,i){try{var s=n[c](i),a=s.value}catch(u){return void e(u)}s.done?t(a):Promise.resolve(a).then(r,o)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(o,c){var i=n.apply(t,e);function s(n){r(i,o,c,s,a,"next",n)}function a(n){r(i,o,c,s,a,"throw",n)}s(void 0)}))}}e.d(t,{Z:function(){return o}})},6230:function(n){n.exports="object"==typeof self?self.FormData:window.FormData},8043:function(n,t,e){"use strict";e.d(t,{fh:function(){return u},q:function(){return l},IU:function(){return f},xJ:function(){return h},ej:function(){return d},sM:function(){return p},m3:function(){return m},uf:function(){return j},$D:function(){return g},gF:function(){return b},c0:function(){return x}});var r=e(4301),o=e.n(r),c=e(6808),i=e.n(c),s=e(1163),a=e(2025),u=function(n){401==n.status&&j((function(){s.default.push({pathname:"/signin",query:{message:"Your session is expired. please signin."}})}))},l=function(n){return o()("".concat(a.bl,"/pre-signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},f=function(n){return o()("".concat(a.bl,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},h=function(n){return o()("".concat(a.bl,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},d=function(n){return i().get(n)},p=function(n,t){localStorage.setItem(n,JSON.stringify(t))},m=function(n,t){var e,r;e="token",r=n.token,i().set(e,r,{expires:1}),p("user",n.user),t()},j=function(n){var t;return t="token",i().remove(t,{expires:1}),function(n){localStorage.removeItem(n)}("user"),n(),o()("".concat(a.bl,"/signout"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},g=function(){if(d("token"))return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))},b=function(n){return o()("".concat(a.bl,"/forgot-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:n})}).then((function(n){return n.json()})).catch((function(n){return n}))},x=function(n){return o()("".concat(a.bl,"/reset-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))}},8975:function(n,t,e){"use strict";e.d(t,{Vh:function(){return u},r4:function(){return l},Ch:function(){return f},qH:function(){return h},pb:function(){return d},T7:function(){return p},zZ:function(){return m},mx:function(){return j}});var r,o=e(4301),c=e.n(o),i=e(2025),s=e(7563),a=e(8043);(0,a.$D)()&&1==(0,a.$D)().role?r="".concat(i.bl):(0,a.$D)()&&0==(0,a.$D)().role&&(r="".concat(i.bl,"/user"));var u=function(n,t){return c()("".concat(r,"/blog"),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(n){return(0,a.fh)(n),n.json()})).catch((function(n){return n}))},l=function(n,t){var e={skip:n,limit:t};return c()("".concat(i.bl,"/blogs-catagories-tags"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(n){return n.json()})).catch((function(n){return n}))},f=function(n){return c()("".concat(i.bl,"/blog/").concat(n),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},h=function(n){return c()("".concat(i.bl,"/blog/related"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(n){return n.json()})).catch((function(n){return n}))},d=function(n){var t=n?"".concat(i.bl,"/").concat(n):"".concat(i.bl);return c()("".concat(t,"/blog"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},p=function(n,t){return c()("".concat(r,"/blog/").concat(n),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(n){return(0,a.fh)(n),n.json()})).catch((function(n){return n}))},m=function(n,t,e){return c()("".concat(r,"/blog/").concat(e),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:n}).then((function(n){return(0,a.fh)(n),n.json()})).catch((function(n){return n}))},j=function(n){var t=s.stringify(n);return c()("".concat(i.bl,"/blogs/search?").concat(t),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))}},3706:function(n,t,e){"use strict";e.d(t,{Ue:function(){return s},e:function(){return a},Pq:function(){return u},p2:function(){return l}});var r=e(4301),o=e.n(r),c=e(2025),i=e(8043),s=function(n,t){return o()("".concat(c.bl,"/catagory"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(n)}).then((function(n){return(0,i.fh)(n),n.json()})).catch((function(n){return n}))},a=function(){return o()("".concat(c.bl,"/catagories"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},u=function(n,t){return o()("".concat(c.bl,"/catagory/").concat(n),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}}).then((function(n){return(0,i.fh)(n),n.json()})).catch((function(n){return n}))},l=function(n){return o()("".concat(c.bl,"/catagory/").concat(n),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))}},2199:function(n,t,e){"use strict";e.d(t,{Ue:function(){return s},NJ:function(){return a},tc:function(){return u},h1:function(){return l}});var r=e(4301),o=e.n(r),c=e(2025),i=e(8043),s=function(n,t){return o()("".concat(c.bl,"/tag"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(n)}).then((function(n){return(0,i.fh)(n),n.json()})).catch((function(n){return n}))},a=function(){return o()("".concat(c.bl,"/tags"),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))},u=function(n,t){return o()("".concat(c.bl,"/tag/").concat(n),{method:"DELETE",headers:{Authorization:"Bearer ".concat(t)}}).then((function(n){return(0,i.fh)(n),n.json()})).catch((function(n){return n}))},l=function(n){return o()("".concat(c.bl,"/tag/").concat(n),{method:"GET"}).then((function(n){return n.json()})).catch((function(n){return n}))}},6616:function(n,t,e){"use strict";e.d(t,{Z:function(){return S}});var r=e(5893),o=e(7294),c=e(2025),i=e(1664),s=e(4865),a=e.n(s),u=e(9544),l=e(6992),f=e(5614),h=e(627),d=e(7243),p=e(3999),m=e(8008),j=e(8043),g=e(1163),b=e(6156),x=e(8975);function y(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function v(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?y(Object(e),!0).forEach((function(t){(0,b.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):y(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var O=(0,g.withRouter)((function(n){var t=n.router,e=(0,o.useState)({search:void 0,results:[],searched:!1,message:""}),c=e[0],s=e[1],a=c.search,u=c.searched,l=c.results,f=c.message;(0,o.useEffect)((function(){s(v(v({},c),{},{searched:!1,search:""}))}),[t]);var h=function(n){n.preventDefault(),(0,x.mx)({search:a}).then((function(n){s(v(v({},c),{},{results:n.blogs,searched:!0,message:"".concat(n.blogs.length," blogs found.")}))}))},d=function(n){s(v(v({},c),{},{search:n.target.value,searched:!1,result:[]}))};return(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)("div",{className:"pt-3 pb-3",children:(0,r.jsx)("form",{onSubmit:h,children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-8",children:(0,r.jsx)("input",{type:"search",className:"form-control",value:a,onChange:d,placeholder:"search blogs"})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsx)("button",{className:"btn btn-outline-primary btn-block",type:"submit",children:"Search"})})]})})}),u&&(0,r.jsx)("div",{style:{marginTop:"-80px",marginBottom:"-80px"},children:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,r.jsxs)("div",{className:"jumbotron bg-white",children:[f&&(0,r.jsx)("p",{className:"pt-4 text-muted font-italic",children:f}),n.map((function(n,t){return(0,r.jsx)("div",{children:(0,r.jsx)(i.default,{href:"/blogs/".concat(n.slug),children:(0,r.jsx)("a",{className:"text-primary",children:n.title})})},t)}))]})}(l)})]})}));g.default.onRouteChangeStart=function(n){return a().start()},g.default.onRouteChangeComplete=function(n){return a().done()},g.default.onRouteChangeError=function(n){return a().done()};var N=function(n){var t=(0,o.useState)(!1),e=t[0],s=t[1];return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)(u.Z,{color:"light",light:!0,expand:"md",children:[(0,r.jsx)(i.default,{href:"/",children:(0,r.jsx)(l.Z,{className:"font-weight-bold",style:{cursor:"pointer"},children:c.iC})}),(0,r.jsx)(f.Z,{onClick:function(){return s(!e)}}),(0,r.jsx)(h.Z,{isOpen:e,navbar:!0,children:(0,r.jsxs)(d.Z,{className:"ml-auto",navbar:!0,children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/blogs",children:(0,r.jsx)(m.Z,{style:{cursor:"pointer"},children:"blogs"})})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/Contact",children:(0,r.jsx)(m.Z,{style:{cursor:"pointer"},children:"Contact"})})}),!(0,j.$D)()&&(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/signin",children:(0,r.jsx)(m.Z,{style:{cursor:"pointer"},children:"signin"})})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/signup",children:(0,r.jsx)(m.Z,{style:{cursor:"pointer"},children:"signup"})})})]}),(0,j.$D)()&&1==(0,j.$D)().role&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/admin",children:(0,r.jsx)(m.Z,{style:{cursor:"pointer"},children:"".concat((0,j.$D)().name,"'s Dashboard")})})}),(0,j.$D)()&&0==(0,j.$D)().role&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(i.default,{href:"/user",children:(0,r.jsx)(m.Z,{style:{cursor:"pointer"},children:"".concat((0,j.$D)().name,"'s Dashboard")})})}),(0,j.$D)()&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(m.Z,{onClick:function(){(0,j.uf)((function(){g.default.replace("/signin")}))},style:{cursor:"pointer"},children:"signout"})})]})})]}),(0,r.jsx)(O,{})]})},S=function(n){var t=n.children;return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(N,{}),t]})}},1803:function(n,t,e){"use strict";var r=e(5893),o=e(18),c=e(7757),i=e.n(c),s=e(2137),a=e(6156),u=e(7294),l=e(1163),f=e(5152),h=e(8043),d=e(3706),p=e(2199),m=e(8975),j=e(1994),g=e(2025),b=e(6230),x=e.n(b),y=e(6955),v=e(3686);function O(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}function N(n){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?O(Object(e),!0).forEach((function(t){(0,a.Z)(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):O(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}var S=(0,f.default)((function(){return Promise.all([e.e(774),e.e(937),e.e(764),e.e(167)]).then(e.t.bind(e,1167,23))}),{ssr:!1,loadableGenerated:{webpack:function(){return[1167]},modules:["..\\component\\crud\\BlogUpdate.js -> react-quill"]}});t.Z=(0,l.withRouter)((function(n){var t=n.router,e=(0,u.useState)(""),c=e[0],l=e[1],f=(0,u.useState)({title:"",error:"",formData:"",success:"",loading:!1,contentReady:!1}),b=f[0],O=f[1],D=(0,u.useState)({}),w=D[0],T=D[1],Z=(0,u.useState)([]),k=Z[0],C=Z[1],P=(0,u.useState)([]),E=P[0],A=P[1],$=(0,u.useState)([]),J=$[0],z=$[1],q=(0,u.useState)([]),B=q[0],G=q[1];(0,u.useEffect)((function(){O(N(N({},b),{},{formData:new(x())})),Q(),W(),X()}),[t]);var _=(0,u.useState)(!0),F=_[0],U=_[1],R=b.title,I=b.error,L=b.success,H=b.formData,Y=b.loading,K=b.contentReady,M=function(){if(I)U(!1);else{if(h.$D&&0===(0,h.$D)().role)return t.replace("/user");if(h.$D&&1===(0,h.$D)().role)return t.replace("/admin")}},V=(0,h.ej)("token"),Q=function(){var n=(0,s.Z)(i().mark((function n(){return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!t.query.slug){n.next=3;break}return n.next=3,(0,m.Ch)(t.query.slug).then((function(n){n.err?console.log(n.err):(T(n.blog),O(N(N({},b),{},{title:n.blog?n.blog.title:"",contentReady:!0})),l(n.blog?n.blog.body:""),z(n.blog.tags.map((function(n){return n._id}))),G(n.blog.catagories.map((function(n){return n._id}))))}));case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),W=function(){(0,d.e)().then((function(n){n.err?O(N(N({},b),{},{err:n.err})):C(n.catagories)}))},X=function(){(0,p.NJ)().then((function(n){n.err?O(N(N({},b),{},{err:n.err})):A(n.tags)}))},nn=new(x()),tn=function(n){return function(t){var e,r="photo"==n?t.target.files[0]:t.target.value;nn.set(n,r),O(N(N({},b),{},(e={},(0,a.Z)(e,n,r),(0,a.Z)(e,"formData",nn),(0,a.Z)(e,"error",!1),e)))}},en=function(n){l(n),nn.set("body",n),O(N(N({},b),{},{formData:nn,error:!1}))},rn=function(n){return function(){var t=J.indexOf(n),e=(0,o.Z)(J);-1===t?e.push(n):e.splice(t,1),z(e),nn.set("tags",e),O(N(N({},b),{},{formData:nn,error:!1}))}},on=function(n){return function(){var t=B.indexOf(n),e=(0,o.Z)(B);-1===t?e.push(n):e.splice(t,1),G(e),nn.set("catagories",e),O(N(N({},b),{},{formData:nn,error:!1}))}},cn=function(n){n.preventDefault(),O(N(N({},b),{},{loading:!0})),(0,m.zZ)(H,V,t.query.slug).then((function(n){n.err?(U(!0),O(N(N({},b),{},{success:"",error:n.err,loading:!1}))):(U(!0),console.log(n),O(N(N({},b),{},{error:"",loading:!1,success:'Blog titled "'.concat(n.response.title,'" is successfully updated')})))}))};return(0,r.jsx)(u.Fragment,{children:(0,r.jsxs)("div",{className:"container-fluid pb-5",children:[(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"mb-3 col-md-8 ",children:[I?(0,r.jsx)(v.Z,{color:"danger",isOpen:F,toggle:M,children:I}):"",L?(0,r.jsx)(v.Z,{color:"success",isOpen:F,toggle:M,children:L}):""]})}),K?(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"col-md-8",children:[(0,r.jsxs)("form",{method:"post",onSubmit:cn,children:[(0,r.jsxs)("div",{className:"form-group",children:[(0,r.jsx)("label",{className:"text-muted",children:"Title"}),(0,r.jsx)("input",{type:"text",onChange:tn("title"),value:R,className:"form-control"})]}),(0,r.jsx)("div",{className:"form-group",children:(0,r.jsx)(S,{modules:j.J,formats:j.$,value:c,placeholder:"what's on your mind",onChange:en})}),(0,r.jsxs)("button",{className:"btn btn-primary",type:"submit",children:["Update",Y&&(0,r.jsx)(y.Z,{size:"sm",className:"ml-1",color:"light"})]})]}),JSON.stringify(w.photo)?(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"pt-5 pb-3 mb-0 font-weight-light",children:"Featured image"}),(0,r.jsx)("img",{style:{width:"100%"},src:"".concat(g.bl,"/blog/photo/").concat(w.slug),alt:"".concat(w.title),className:" img img-fluid featured-image"})]}):""]}),(0,r.jsxs)("div",{className:"col-md-4",children:[(0,r.jsx)("div",{children:(0,r.jsxs)("div",{className:"form-group pb-2",children:[(0,r.jsx)("h5",{children:"Featured image"}),(0,r.jsx)("hr",{}),(0,r.jsx)("small",{className:"text-muted",children:"max size: 1mb"}),(0,r.jsx)("br",{}),(0,r.jsxs)("label",{className:"btn btn-outline-info",children:["Upload featured image",(0,r.jsx)("input",{onChange:tn("photo"),type:"file",accept:"image/*",hidden:!0})]})]})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h5",{children:"Catagories"}),(0,r.jsx)("hr",{}),(0,r.jsxs)("ul",{style:{maxHeight:"200px",overflowY:"scroll"},children:[" ",k&&k.map((function(n,t){return(0,r.jsxs)("li",{className:"list-unstyled",children:[(0,r.jsx)("input",{onChange:on(n._id),checked:(e=n._id,-1!=B.indexOf(e)),type:"checkbox",className:"mr-2"}),(0,r.jsx)("label",{className:"form-check-label",children:n.name})]},t);var e}))]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h5",{children:"Tags"}),(0,r.jsx)("hr",{}),(0,r.jsxs)("ul",{style:{maxHeight:"200px",overflowY:"scroll"},children:[" ",E.map((function(n,t){return(0,r.jsxs)("li",{className:"list-unstyled",children:[(0,r.jsx)("input",{onChange:rn(n._id),checked:(e=n._id,-1!=J.indexOf(e)),type:"checkbox",className:"mr-2"}),(0,r.jsx)("label",{className:"form-check-label",children:n.name})]},t);var e}))]})]})]})]}):(0,r.jsx)(y.Z,{size:"lg",style:{display:"block"},className:"mx-auto",color:"primary"})]})})}))},2025:function(n,t,e){"use strict";e.d(t,{bl:function(){return r},yK:function(){return o},iC:function(){return c},CT:function(){return i}});var r="https://quest-blog.herokuapp.com/api",o="http://localhost:3000",c="SEOBLOG",i="blog-7690exkuju"},1994:function(n,t,e){"use strict";e.d(t,{J:function(){return r},$:function(){return o}});var r={toolbar:[[{header:"1"},{header:"2"},{header:[3,4,5,6]},{font:[]}],[{size:[]}],["bold","italic","underline","strike","blockquote"],[{list:"ordered"},{list:"bullet"}],["image","video","link"],["clean"],["code-block"]]},o=["header","font","size","bold","italic","underline","strike","blockquote","list","bullet","image","video","link","code-block"]}}]);