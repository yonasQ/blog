_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[36],{"0c6W":function(e,t,r){"use strict";r.d(t,"b",(function(){return o})),r.d(t,"a",(function(){return i})),r.d(t,"c",(function(){return l}));var a=r("LpSC"),s=r.n(a),n=r("obyI"),c=r("iuBY"),o=function(e){return s()("".concat(n.a,"/user/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return e}))},i=function(e){return s()("".concat(n.a,"/profile"),{method:"GET",headers:{Accept:"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return Object(c.k)(e),e.json()})).catch((function(e){return e}))},l=function(e,t){return s()("".concat(n.a,"/user/update"),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(e)},body:t}).then((function(e){return Object(c.k)(e),e.json()})).catch((function(e){return e}))}},GGaf:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/user/update",function(){return r("j0R5")}])},aLZG:function(e,t,r){"use strict";var a=r("wx14"),s=r("zLVn"),n=r("rePB"),c=r("q1tI"),o=r.n(c),i=r("17x9"),l=r.n(i),u=r("TSYQ"),b=r.n(u),j=r("33Jr"),d=r("1w3K");function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var O=m(m({},d.Transition.propTypes),{},{children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]),tag:j.g,baseClass:l.a.string,baseClassActive:l.a.string,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])}),f=m(m({},d.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:j.c.Fade,appear:!0,enter:!0,exit:!0,in:!0});function g(e){var t=e.tag,r=e.baseClass,n=e.baseClassActive,c=e.className,i=e.cssModule,l=e.children,u=e.innerRef,p=Object(s.a)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),m=Object(j.f)(p,j.a),O=Object(j.e)(p,j.a);return o.a.createElement(d.Transition,m,(function(e){var s="entered"===e,d=Object(j.d)(b()(c,r,s&&n),i);return o.a.createElement(t,Object(a.a)({className:d},O,{ref:u}),l)}))}g.propTypes=O,g.defaultProps=f;var h=g;function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var x={children:l.a.node,className:l.a.string,closeClassName:l.a.string,closeAriaLabel:l.a.string,cssModule:l.a.object,color:l.a.string,fade:l.a.bool,isOpen:l.a.bool,toggle:l.a.func,tag:j.g,transition:l.a.shape(h.propTypes),innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},N={color:"success",isOpen:!0,tag:"div",closeAriaLabel:"Close",fade:!0,transition:v(v({},h.defaultProps),{},{unmountOnExit:!0})};function w(e){var t=e.className,r=e.closeClassName,n=e.closeAriaLabel,c=e.cssModule,i=e.tag,l=e.color,u=e.isOpen,d=e.toggle,p=e.children,m=e.transition,O=e.fade,f=e.innerRef,g=Object(s.a)(e,["className","closeClassName","closeAriaLabel","cssModule","tag","color","isOpen","toggle","children","transition","fade","innerRef"]),y=Object(j.d)(b()(t,"alert","alert-"+l,{"alert-dismissible":d}),c),x=Object(j.d)(b()("close",r),c),N=v(v(v({},h.defaultProps),m),{},{baseClass:O?m.baseClass:"",timeout:O?m.timeout:0});return o.a.createElement(h,Object(a.a)({},g,N,{tag:i,className:y,in:u,role:"alert",innerRef:f}),d?o.a.createElement("button",{type:"button",className:x,"aria-label":n,onClick:d},o.a.createElement("span",{"aria-hidden":"true"},"\xd7")):null,p)}w.propTypes=x,w.defaultProps=N;t.a=w},bTjV:function(e,t,r){"use strict";var a=r("wx14"),s=r("zLVn"),n=r("q1tI"),c=r.n(n),o=r("17x9"),i=r.n(o),l=r("TSYQ"),u=r.n(l),b=r("33Jr"),j={tag:b.g,type:i.a.string,size:i.a.string,color:i.a.string,className:i.a.string,cssModule:i.a.object,children:i.a.string},d=function(e){var t=e.className,r=e.cssModule,n=e.type,o=e.size,i=e.color,l=e.children,j=e.tag,d=Object(s.a)(e,["className","cssModule","type","size","color","children","tag"]),p=Object(b.d)(u()(t,!!o&&"spinner-"+n+"-"+o,"spinner-"+n,!!i&&"text-"+i),r);return c.a.createElement(j,Object(a.a)({role:"status"},d,{className:p}),l&&c.a.createElement("span",{className:Object(b.d)("sr-only",r)},l))};d.propTypes=j,d.defaultProps={tag:"div",type:"border",children:"Loading..."},t.a=d},j0R5:function(e,t,r){"use strict";r.r(t);var a=r("nKUr"),s=r("rePB"),n=(r("YFqc"),r("20a2"),r("q1tI")),c=r.n(n),o=r("bTjV"),i=r("aLZG"),l=r("iuBY"),u=r("0c6W"),b=r("obyI");function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){Object(s.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=function(){var e=Object(n.useState)({username:"",name:"",password:"",email:"",about:"",error:!1,success:!1,loading:!1,photo:"",userData:""}),t=e[0],r=e[1],j=Object(l.c)("token"),p=Object(n.useState)(!0),m=p[0],O=p[1],f=function(){O(!1)},g=t.userData,h=t.username,y=t.name,v=t.password,x=t.email,N=t.error,w=t.success,P=t.loading,E=t.photo,C=t.about;Object(n.useEffect)((function(){T()}),[]);var T=function(){return Object(u.a)(j).then((function(e){e.err?r(d(d({},t),{},{error:e.err})):r(d(d({},t),{},{username:e.user.username,email:e.user.email,photo:e.user.photo?e.user.photo:"",name:e.user.name,about:e.user.about}))}))},D=function(e){return function(a){var n,c="photo"==e?a.target.files[0]:a.target.value,o=new FormData;o.set(e,c),"password"!=e&&(""!=v&&o.set("password",v)),"password"==e&&""==c&&o.delete("password"),r(d(d({},t),{},(n={},Object(s.a)(n,e,c),Object(s.a)(n,"userData",o),Object(s.a)(n,"error",!1),Object(s.a)(n,"success",!1),n)))}},S=function(e){e.preventDefault(),r(d(d({},t),{},{loading:!0})),Object(u.c)(j,g).then((function(e){e.user?(O(!0),r(d(d({},t),{},{username:e.user.username,email:e.user.email,name:e.user.name,about:e.user.about,loading:!1,success:!0})),Object(l.g)("user",e.user)):(O(!0),r(d(d({},t),{},{error:e.err,success:!1,loading:!1})))}))};return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsx)("div",{className:"container",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-4",children:E&&Object(a.jsx)("img",{src:"".concat(b.a,"/user/photo/").concat(Object(l.d)()&&Object(l.d)().username),alt:"user profile",style:{borderRadius:"50%",maxHeight:"auto",width:"100%"},className:"img img-fluid mb-3"})}),Object(a.jsxs)("div",{className:"col-md-8 mb-5",children:[N?Object(a.jsx)(i.a,{color:"danger",isOpen:m,toggle:f,children:N}):"",w?Object(a.jsx)(i.a,{color:"success",isOpen:m,toggle:f,children:"Profile updated."}):"",Object(a.jsxs)("form",{onSubmit:S,children:[Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Profile Photo"}),Object(a.jsx)("br",{}),Object(a.jsxs)("label",{className:"btn btn-outline-info",children:["Select Photo",Object(a.jsx)("input",{type:"file",accept:"image/*",hidden:!0,onChange:D("photo")})]})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Username"}),Object(a.jsx)("input",{type:"text",className:"form-control",value:h,onChange:D("username")})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Name"}),Object(a.jsx)("input",{type:"text",className:"form-control",value:y,onChange:D("name")})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Email"}),Object(a.jsx)("input",{type:"email",className:"form-control",value:x,onChange:D("email")})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"About"}),Object(a.jsx)("textarea",{type:"text",className:"form-control",value:C,onChange:D("about")})]}),Object(a.jsxs)("div",{className:"form-group",children:[Object(a.jsx)("label",{className:"text-muted",children:"Password"}),Object(a.jsx)("input",{type:"password",className:"form-control",value:v,onChange:D("password")})]}),Object(a.jsxs)("button",{type:"submit",className:"btn btn-primary",children:["Submit",P&&Object(a.jsx)(o.a,{size:"sm",className:"ml-1",color:"light"})]})]})]})]})})})},m=r("ezhv");t.default=function(){return Object(a.jsx)(m.a,{children:Object(a.jsx)("div",{className:"container-fluid",children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)(p,{})})})})}}},[["GGaf",1,0,2,3]]]);