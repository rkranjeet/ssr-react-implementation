!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=10)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router-config")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("prop-types")},function(e,t){e.exports=require("react-dom/server")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("redux-thunk")},function(e,t,r){r(11),e.exports=r(12)},function(e,t){e.exports=require("@babel/polyfill")},function(e,t,r){"use strict";r.r(t);var n=r(5),o=r.n(n),a=r(2),c=r(0),u=r.n(c),i=function(){return u.a.createElement(u.a.Fragment,null,u.a.createElement("h2",null,"This is a Server Side Rendered Single Page App with Two Routes"),u.a.createElement("h2",null,"First route load some data from server and Some data on the Browser And share this data by redux to second route"))},l=function(){return u.a.createElement("h1",null,"404 Not Found")},s=r(1),f=function(){var e=Object(s.useSelector)((function(e){return e.setData})).serverData,t=Object(s.useSelector)((function(e){return e.setData})).browserData,r=Object(s.useDispatch)();return Object(c.useEffect)((function(){!function(e,t){e({type:"set_browser_data",payload:t})}(r,"Dummy Data from Browser")}),[]),u.a.createElement("div",{style:{flexDirection:"column"}},u.a.createElement("div",{style:{flexDirection:"row"}},u.a.createElement("h3",null,"Data from Server"),u.a.createElement("h2",null,JSON.stringify(e))),u.a.createElement("div",{style:{flexDirection:"row"}},u.a.createElement("h3",null,"Data from Browser"),u.a.createElement("h2",null,JSON.stringify(t))))},p=function(){var e=Object(s.useSelector)((function(e){return e.setData}));return u.a.createElement("div",{style:{flexDirection:"column"}},u.a.createElement("div",{style:{flexDirection:"row"}},u.a.createElement("h3",null,"Data Shared by First"),u.a.createElement("h2",null,JSON.stringify(e))))},d=r(6),b=r.n(d),m=r(4),y=function(){return u.a.createElement("ul",null,u.a.createElement("li",null,u.a.createElement(m.Link,{to:"/"},"Home")),u.a.createElement("li",null,u.a.createElement(m.Link,{to:"/first"},"First")),u.a.createElement("li",null,u.a.createElement(m.Link,{to:"/second"},"Second")),u.a.createElement("li",null,u.a.createElement(m.Link,{to:"otherPage"},"Other page")))},O=function(e){var t=e.route;return u.a.createElement("div",null,u.a.createElement(y,null),Object(a.renderRoutes)(t.routes))};function v(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?v(Object(r),!0).forEach((function(t){g(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):v(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}O.propTypes={route:b.a.objectOf(b.a.any)},O.defaultProps={route:null};var h=[j(j({},{component:O}),{},{routes:[{component:i,path:"/",exact:!0},{component:f,path:"/first",exact:!0},{component:p,path:"/second",exact:!0},{component:l,path:"*"}]})],E=r(7),D=r(8),w=r(3),x=r(9),P=r.n(x);function S(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?S(Object(r),!0).forEach((function(t){q(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R=Object(w.combineReducers)({setData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"set_server_data":return _(_({},e),{},{serverData:t.payload});case"set_browser_data":return _(_({},e),{},{browserData:t.payload});default:return e}}}),T=o()();T.use(o.a.static("dist"));var k,F=Object(w.createStore)(R,k,Object(w.applyMiddleware)(P.a)),L=F.dispatch;L({type:"set_server_data",payload:"Dummy Data From Server"}),console.log(F.getState()),T.get("*",(function(e,t){var r=Object(a.matchRoutes)(h,e.path).map((function(e){var t=e.route;return t.loadData?t.loadData(L):null}));Promise.all(r).then((function(){var r=function(e,t){var r=t.getState(),n=Object(E.renderToString)(u.a.createElement(s.Provider,{store:t},u.a.createElement(D.StaticRouter,{location:e.path},u.a.createElement("div",null,Object(a.renderRoutes)(h)))));return'\n    <html>\n      <body>\n        <div id="root">'.concat(n,"</div>\n        <script>\n          window.__PRELOADED_STATE__ = ").concat(JSON.stringify(r).replace(/</g,"\\u003c"),'\n        <\/script>\n        <script src="./bundle.js"><\/script>\n      </body>\n    </html>\n  ')}(e,F);t.send(r)}))}));var M=process.env.PORT||3e3;T.listen(M,(function(){console.log("Listening on port: ".concat(M))}))}]);