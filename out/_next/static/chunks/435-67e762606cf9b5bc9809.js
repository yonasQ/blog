(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[435],{8043:function(e,n,t){"use strict";t.d(n,{fh:function(){return u},q:function(){return l},IU:function(){return f},xJ:function(){return d},ej:function(){return h},sM:function(){return p},m3:function(){return b},uf:function(){return g},$D:function(){return j},gF:function(){return m},c0:function(){return y}});var r=t(4301),o=t.n(r),c=t(6808),s=t.n(c),i=t(1163),a=t(2025),u=function(e){401==e.status?(console.log("1"),g((function(){i.default.push({pathname:"/signin",query:{message:"Your session is expired. please signin."}})}))):console.log("3")},l=function(e){return o()("".concat(a.bl,"/pre-signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e}))},f=function(e){return o()("".concat(a.bl,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e}))},d=function(e){return o()("".concat(a.bl,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e}))},h=function(e){return s().get(e)},p=function(e,n){localStorage.setItem(e,JSON.stringify(n))},b=function(e,n){var t,r;t="token",r=e.token,s().set(t,r,{expires:1}),p("user",e.user),n()},g=function(e){var n;return n="token",s().remove(n,{expires:1}),function(e){localStorage.removeItem(e)}("user"),e(),o()("".concat(a.bl,"/signout"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e}))},j=function(){if(h("token"))return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))},m=function(e){return o()("".concat(a.bl,"/forgot-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e})}).then((function(e){return e.json()})).catch((function(e){return e}))},y=function(e){return o()("".concat(a.bl,"/reset-password"),{method:"PUT",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e}))}},8975:function(e,n,t){"use strict";t.d(n,{Vh:function(){return u},r4:function(){return l},Ch:function(){return f},qH:function(){return d},pb:function(){return h},T7:function(){return p},zZ:function(){return b},mx:function(){return g}});var r,o=t(4301),c=t.n(o),s=t(2025),i=t(7563),a=t(8043);(0,a.$D)()&&1==(0,a.$D)().role?r="".concat(s.bl):(0,a.$D)()&&0==(0,a.$D)().role&&(r="".concat(s.bl,"/user"));var u=function(e,n){return c()("".concat(r,"/blog"),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},body:e}).then((function(e){return(0,a.fh)(e),e.json()})).catch((function(e){return e}))},l=function(e,n){var t={skip:e,limit:n};return c()("".concat(s.bl,"/blogs-catagories-tags"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return e}))},f=function(e){return c()("".concat(s.bl,"/blog/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e}))},d=function(e){return c()("".concat(s.bl,"/blog/related"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return e}))},h=function(e){var n=e?"".concat(s.bl,"/").concat(e):"".concat(s.bl);return c()("".concat(n,"/blog"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e}))},p=function(e,n){return c()("".concat(r,"/blog/").concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return(0,a.fh)(e),e.json()})).catch((function(e){return e}))},b=function(e,n,t){return c()("".concat(r,"/blog/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(n)},body:e}).then((function(e){return(0,a.fh)(e),e.json()})).catch((function(e){return e}))},g=function(e){var n=i.stringify(e);return c()("".concat(s.bl,"/blogs/search?").concat(n),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e}))}},6616:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var r=t(5893),o=t(7294),c=t(2025),s=t(1664),i=t(4865),a=t.n(i),u=t(9544),l=t(6992),f=t(5614),d=t(627),h=t(7243),p=t(3999),b=t(8008),g=t(8043),j=t(1163),m=t(6156),y=t(8975);function O(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function x(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?O(Object(t),!0).forEach((function(n){(0,m.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):O(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var v=(0,j.withRouter)((function(e){var n=e.router,t=(0,o.useState)({search:void 0,results:[],searched:!1,message:""}),c=t[0],i=t[1],a=c.search,u=c.searched,l=c.results,f=c.message;(0,o.useEffect)((function(){i(x(x({},c),{},{searched:!1,search:""}))}),[n]);var d=function(e){e.preventDefault(),(0,y.mx)({search:a}).then((function(e){i(x(x({},c),{},{results:e.blogs,searched:!0,message:"".concat(e.blogs.length," blogs found.")}))}))},h=function(e){i(x(x({},c),{},{search:e.target.value,searched:!1,result:[]}))};return(0,r.jsxs)("div",{className:"container-fluid",children:[(0,r.jsx)("div",{className:"pt-3 pb-3",children:(0,r.jsx)("form",{onSubmit:d,children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("div",{className:"col-md-8",children:(0,r.jsx)("input",{type:"search",className:"form-control",value:a,onChange:h,placeholder:"search blogs"})}),(0,r.jsx)("div",{className:"col-md-4",children:(0,r.jsx)("button",{className:"btn btn-outline-primary btn-block",type:"submit",children:"Search"})})]})})}),u&&(0,r.jsx)("div",{style:{marginTop:"-80px",marginBottom:"-80px"},children:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return(0,r.jsxs)("div",{className:"jumbotron bg-white",children:[f&&(0,r.jsx)("p",{className:"pt-4 text-muted font-italic",children:f}),e.map((function(e,n){return(0,r.jsx)("div",{children:(0,r.jsx)(s.default,{href:"/blogs/".concat(e.slug),children:(0,r.jsx)("a",{className:"text-primary",children:e.title})})},n)}))]})}(l)})]})}));j.default.onRouteChangeStart=function(e){return a().start()},j.default.onRouteChangeComplete=function(e){return a().done()},j.default.onRouteChangeError=function(e){return a().done()};var N=function(e){var n=(0,o.useState)(!1),t=n[0],i=n[1];return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsxs)(u.Z,{color:"light",light:!0,expand:"md",children:[(0,r.jsx)(s.default,{href:"/",children:(0,r.jsx)(l.Z,{className:"font-weight-bold",style:{cursor:"pointer"},children:c.iC})}),(0,r.jsx)(f.Z,{onClick:function(){return i(!t)}}),(0,r.jsx)(d.Z,{isOpen:t,navbar:!0,children:(0,r.jsxs)(h.Z,{className:"ml-auto",navbar:!0,children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(s.default,{href:"/blogs",children:(0,r.jsx)(b.Z,{style:{cursor:"pointer"},children:"blogs"})})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(s.default,{href:"/Contact",children:(0,r.jsx)(b.Z,{style:{cursor:"pointer"},children:"Contact"})})}),!(0,g.$D)()&&(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(p.Z,{children:(0,r.jsx)(s.default,{href:"/signin",children:(0,r.jsx)(b.Z,{style:{cursor:"pointer"},children:"signin"})})}),(0,r.jsx)(p.Z,{children:(0,r.jsx)(s.default,{href:"/signup",children:(0,r.jsx)(b.Z,{style:{cursor:"pointer"},children:"signup"})})})]}),(0,g.$D)()&&1==(0,g.$D)().role&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(s.default,{href:"/admin",children:(0,r.jsx)(b.Z,{style:{cursor:"pointer"},children:"".concat((0,g.$D)().name,"'s Dashboard")})})}),(0,g.$D)()&&0==(0,g.$D)().role&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(s.default,{href:"/user",children:(0,r.jsx)(b.Z,{style:{cursor:"pointer"},children:"".concat((0,g.$D)().name,"'s Dashboard")})})}),(0,g.$D)()&&(0,r.jsx)(p.Z,{children:(0,r.jsx)(b.Z,{onClick:function(){(0,g.uf)((function(){j.default.replace("/signin")}))},style:{cursor:"pointer"},children:"signout"})})]})})]}),(0,r.jsx)(v,{})]})},C=function(e){var n=e.children;return(0,r.jsxs)(o.Fragment,{children:[(0,r.jsx)(N,{}),n]})}},694:function(e,n,t){"use strict";var r=t(5893),o=t(7294),c=t(8043),s=t(8975),i=(t(1163),t(1664)),a=t(381),u=t.n(a),l=t(3686);n.Z=function(e){var n=e.username,t=(0,o.useState)([]),a=t[0],f=t[1],d=(0,o.useState)(""),h=d[0],p=d[1],b=(0,o.useState)(!0),g=b[0],j=b[1],m=(0,c.ej)("token");(0,o.useEffect)((function(){y()}),[]);var y=function(){return(0,s.pb)(n).then((function(e){e.err?console.log(e.err):f(e.blogs)}))},O=function(e){return c.$D&&0===(0,c.$D)().role?(0,r.jsx)(i.default,{href:"/user/crud/".concat(e.slug),children:(0,r.jsx)("a",{className:"btn btn-sm btn-warning",children:"Update"})}):c.$D&&1===(0,c.$D)().role?(0,r.jsx)(i.default,{href:"/admin/crud/".concat(e.slug),children:(0,r.jsx)("a",{className:"btn btn-sm btn-warning",children:"Update"})}):void 0};return(0,r.jsx)(o.Fragment,{children:(0,r.jsx)("div",{className:"row",children:(0,r.jsxs)("div",{className:"col-md-12",children:[h&&(0,r.jsx)(l.Z,{color:"warning",isOpen:g,toggle:function(){j(!1)},children:h}),a.map((function(e,n){return(0,r.jsxs)("div",{className:"pb-5",children:[(0,r.jsx)("h3",{children:e.title}),(0,r.jsxs)("p",{className:"mark",children:["Written by ",e.postedBy.name," | Published on ",u()(e.createdAt).fromNow()]}),(0,r.jsx)("button",{className:"btn mr-2 btn-sm btn-danger",onClick:function(){return n=e.slug,void(window.confirm("Are you sure you want to delete this blog?")&&(0,s.T7)(n,m).then((function(e){e.err?(j(!0),console.log(e.err)):(j(!0),p(e.message),y())})));var n},children:"Remove"}),O(e)]},n)}))]})})})}},2025:function(e,n,t){"use strict";t.d(n,{bl:function(){return r},yK:function(){return o},iC:function(){return c},CT:function(){return s}});var r="https://quest-blog.herokuapp.com/api",o="http://localhost:3000",c="SEOBLOG",s="blog-7690exkuju"},3686:function(e,n,t){"use strict";t.d(n,{Z:function(){return C}});var r=t(2122),o=t(9756),c=t(6156),s=t(7294),i=t(5697),a=t.n(i),u=t(4184),l=t.n(u),f=t(3663),d=t(4317);function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var b=p(p({},d.Transition.propTypes),{},{children:a().oneOfType([a().arrayOf(a().node),a().node]),tag:f.iC,baseClass:a().string,baseClassActive:a().string,className:a().string,cssModule:a().object,innerRef:a().oneOfType([a().object,a().string,a().func])}),g=p(p({},d.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:f.wF.Fade,appear:!0,enter:!0,exit:!0,in:!0});function j(e){var n=e.tag,t=e.baseClass,c=e.baseClassActive,i=e.className,a=e.cssModule,u=e.children,h=e.innerRef,p=(0,o.Z)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),b=(0,f.ei)(p,f.rb),g=(0,f.CE)(p,f.rb);return s.createElement(d.Transition,b,(function(e){var o="entered"===e,d=(0,f.mx)(l()(i,t,o&&c),a);return s.createElement(n,(0,r.Z)({className:d},g,{ref:h}),u)}))}j.propTypes=b,j.defaultProps=g;var m=j;function y(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function O(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?y(Object(t),!0).forEach((function(n){(0,c.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):y(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var x={children:a().node,className:a().string,closeClassName:a().string,closeAriaLabel:a().string,cssModule:a().object,color:a().string,fade:a().bool,isOpen:a().bool,toggle:a().func,tag:f.iC,transition:a().shape(m.propTypes),innerRef:a().oneOfType([a().object,a().string,a().func])},v={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:O(O({},m.defaultProps),{},{unmountOnExit:!0})};function N(e){var n=e.className,t=e.closeClassName,c=e.closeAriaLabel,i=e.cssModule,a=e.tag,u=e.color,d=e.isOpen,h=e.toggle,p=e.children,b=e.transition,g=e.fade,j=e.innerRef,y=(0,o.Z)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),x=(0,f.mx)(l()(n,"alert","alert-"+u,{"alert-dismissible":h}),i),v=(0,f.mx)(l()("close",t),i),N=O(O(O({},m.defaultProps),b),{},{baseClass:g?b.baseClass:"",timeout:g?b.timeout:0});return s.createElement(m,(0,r.Z)({},y,N,{tag:a,className:x,in:d,role:"alert",innerRef:j}),h?s.createElement("button",{type:"button",className:v,"aria-label":c,onClick:h},s.createElement("span",{"aria-hidden":"true"},"\xd7")):null,p)}N.propTypes=x,N.defaultProps=v;var C=N}}]);