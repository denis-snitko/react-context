(this["webpackJsonpreact-context"]=this["webpackJsonpreact-context"]||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(6),u=n.n(c),l=(n(14),n(15),n(3)),o=n(8),i=Object(r.createContext)(),p=[];function s(e,t){switch(t.type){case"ADD":return Object(o.a)(t.payload);case"DELETE":var n=t.payload;return e.filter((function(e){return e.id!==n}));default:return e}}var d=n(4),m=n.n(d),f=n(7),E=function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.next=5,n.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(r.useContext)(i).dispatch,t=Object(r.useState)(""),n=Object(l.a)(t,2),c=n[0],u=n[1];return a.a.createElement("div",{style:{padding:"8px",border:"1px solid salmon"}},"Wrapper Three",a.a.createElement("div",null,a.a.createElement("input",{type:"number",placeholder:"\u0427\u0438\u0441\u043b\u043e...",value:c,onChange:function(e){u(e.target.value)}}),a.a.createElement("button",{onClick:function(){e({type:"DELETE",payload:Number(c)})}},"Delete")))},b=function(){var e=Object(r.useContext)(i).state,t={padding:"8px",border:"1px solid salmon"},n=e.map((function(e){return a.a.createElement("div",{style:t,key:e.id},a.a.createElement("div",null,e.id),a.a.createElement("div",null,e.name," - ",a.a.createElement("a",{href:e.phone},e.phone)))}));return a.a.createElement("div",{style:t},"Wrapper Two",n,a.a.createElement(v,null))},h=function(){return a.a.createElement("div",{style:{padding:"8px",border:"1px solid orange"}},"Wrapper One",a.a.createElement(b,null))};function y(){var e=Object(r.useReducer)(s,p),t=Object(l.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){E("https://jsonplaceholder.typicode.com/users/").then((function(e){return c({type:"ADD",payload:e||[]})}))}),[]);return a.a.createElement("div",{style:{padding:"8px"}},a.a.createElement(i.Provider,{value:{state:n,dispatch:c}},"App",a.a.createElement(h,null)))}u.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(y,null)),document.getElementById("root"))},9:function(e,t,n){e.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.c279a65f.chunk.js.map