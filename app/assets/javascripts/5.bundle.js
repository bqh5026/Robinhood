(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{506:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(8),o=a(2),c=a(11),i=a(72),s=a(74);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?u(Object(a),!0).forEach((function(t){f(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):u(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function f(e,t,a){return(t=function(e){var t=function(e,t){if("object"!==m(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var n=a.call(e,t||"default");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===m(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var n,r,l,o,c=[],i=!0,s=!1;try{if(l=(a=a.call(e)).next,0===t){if(Object(a)!==a)return;i=!1}else for(;!(i=(n=l.call(a)).done)&&(c.push(n.value),c.length!==t);i=!0);}catch(e){s=!0,r=e}finally{try{if(!i&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(s)throw r}}return c}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return p(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var d=a(12);t.default=Object(l.b)((function(e){return{currentUser:e.session.currentUser}}),(function(e){return{logout:function(){return e(Object(d.e)())}}}))((function(e){var t=e.currentUser,a=e.logout,l=h(Object(n.useState)(""),2),m=l[0],u=l[1],f=h(Object(n.useState)(""),2),p=(f[0],f[1]),d=h(Object(n.useState)(!1),2),E=d[0],g=d[1],v=h(Object(n.useState)([]),2),y=v[0],k=v[1],N=h(Object(n.useState)([]),2),w=(N[0],N[1]),j=(Object(o.g)(),h(Object(n.useState)("Cathay Bank"),2)),O=j[0],S=j[1],C=h(Object(n.useState)("Roberthood"),2),A=C[0],B=C[1],P=h(Object(n.useState)(null),2),R=P[0],_=P[1];Object(n.useEffect)((function(){document.title="Account | Robinhood"})),Object(n.useEffect)((function(){Object(i.a)({method:"GET",url:"https://roberthood-edcdd.firebaseio.com/portfolios/".concat(t.username,".json")}).then((function(e){var t=[];for(var a in e.data)t.push(b(b({},e.data[a]),{},{firebaseID:a}));k(t)})).catch((function(e){return console.log(e)}))}),[y]),Object(n.useEffect)((function(){Object(i.a)({method:"GET",url:"https://roberthood-edcdd.firebaseio.com/".concat(t.username,".json")}).then((function(e){var t=[];for(var a in e.data)t.push(b(b({},e.data[a]),{},{firebaseID:a}));w(t)})).catch((function(e){return console.log(e)}))}));var L=function(){$.ajax("/api/stocks/quote/".concat(m)).done((function(e){console.log(e),p(e)})),$.ajax("/api/stocks/chart/".concat(m)).done((function(e){setChartData(e)})),x("/stocks/".concat(m))},D=Object(o.f)(),x=function(e){var t=e;D.push(t)};return r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"navbar-left"},r.a.createElement("div",null,r.a.createElement(c.b,{to:"/dashboard"},r.a.createElement("img",{className:"dashboard-roberthood-hat",src:roberthoodHatURL}))),r.a.createElement("div",{className:"predictive-search"},r.a.createElement("div",{className:"search-box"},r.a.createElement("form",null,r.a.createElement("button",{onClick:L,className:"search-btn"},r.a.createElement("i",{className:"fas fa-search"})),r.a.createElement("input",{className:"search-txt",type:"text",name:"",placeholder:"Search",onChange:function(e){!function(e){u(e.target.value)}(e)},value:m,onKeyPress:function(e){"Enter"===e.key&&L()},alt:"search"}))),r.a.createElement("div",{className:"auto-suggestions"},r.a.createElement("ul",null,s.a.map((function(e){if(0!==m.length)return e.symbol.toLowerCase().startsWith(m.toLowerCase())?r.a.createElement("li",{key:e.symbol,onClick:function(){return u(e.symbol),L(),void u("")}},r.a.createElement("strong",{style:{paddingRight:"3rem"}},e.symbol),e.name):null})))))),r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-bar"},r.a.createElement("a",{href:"https://angel.co/u/ben-hsieh-6",target:"_blank"},r.a.createElement("span",{className:"nav-menu-item"},"AngelList")),r.a.createElement("a",{href:"https://github.com/benhsieh-dev",target:"_blank"},r.a.createElement("span",{className:"nav-menu-item"},"GitHub")),r.a.createElement("a",{href:"https://www.linkedin.com/in/ben-hsieh-05522542/",target:"_blank"},r.a.createElement("span",{className:"nav-menu-item"},"Linkedin")," "),r.a.createElement(c.b,{to:"/dashboard"},r.a.createElement("span",{className:"nav-menu-item"},"Portfolio")),r.a.createElement("div",{className:"dropdown"},r.a.createElement("button",{className:"nav-menu-item dropdown",onClick:function(){g(!E)}},"Account"),E&&r.a.createElement("ul",{className:"dropdown-menu"},r.a.createElement("li",null,r.a.createElement("div",null,"Ben Hsieh"),r.a.createElement("hr",{className:"horizontal-bar"})),r.a.createElement("li",{className:"dropdown-list"},r.a.createElement("i",{class:"fab fa-angellist menu-icon"}),r.a.createElement("a",{href:"https://angel.co/u/ben-hsieh-6",target:"_blank"},r.a.createElement("span",{className:"dropdown-menu-item"},"AngelList"))),r.a.createElement("li",{className:"dropdown-list"},r.a.createElement("i",{class:"fab fa-github menu-icon"}),r.a.createElement("a",{href:"https://github.com/benhsieh-dev",target:"_blank"},r.a.createElement("span",{className:"dropdown-menu-item"},"GitHub"))),r.a.createElement("li",{className:"dropdown-list"},r.a.createElement("i",{class:"fab fa-linkedin-in menu-icon"}),r.a.createElement("a",{href:"https://www.linkedin.com/in/ben-hsieh-05522542/",target:"_blank"},r.a.createElement("span",{className:"dropdown-menu-item"},"Linkedin"))),r.a.createElement("li",{className:"dropdown-list"},r.a.createElement("i",{className:"fas fa-briefcase menu-icon"}),r.a.createElement(c.b,{to:"/account"},r.a.createElement("span",{className:"dropdown-menu-item"},"Account"))),r.a.createElement("li",{className:"dropdown-list"},r.a.createElement("i",{class:"fas fa-university menu-icon"}),r.a.createElement(c.b,{to:"/account/banking"},r.a.createElement("span",{className:"dropdown-menu-item"},"Banking"))),r.a.createElement("li",{className:"dropdown-list"},r.a.createElement("i",{className:"fas fa-sign-out-alt menu-icon"}),r.a.createElement("span",{className:"dropdown-menu-item logout",onClick:a},"Log Out"))))))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("div",{className:"user-account"},r.a.createElement("h1",null,t.first_name," ",t.last_name),r.a.createElement("nav",{className:"user-nav-bar"},r.a.createElement(c.b,{to:"/account",className:"banking-page-link"},"Account"),r.a.createElement(c.b,{to:"/account/banking",className:"banking-page-link"},"Banking"),r.a.createElement("a",{href:"https://angel.co/u/ben-hsieh-6",className:"banking-page-link",target:"_blank"},"Angel List"),r.a.createElement("a",{href:"https://github.com/benhsieh-dev",className:"banking-page-link",target:"_blank"},"GitHub"),r.a.createElement("a",{href:"https://www.linkedin.com/in/ben-hsieh-05522542/",className:"banking-page-link",target:"_blank"},"LinkedIn"),r.a.createElement("a",{href:"https://benhsieh-dev.github.io/",className:"banking-page-link",target:"_blank"},"Personal Site"))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("form",{className:"banking-page-transfer-form"},r.a.createElement("h3",null,"Transfer"),r.a.createElement("hr",null),r.a.createElement("div",{className:"banking-page-input-fields"},r.a.createElement("label",{htmlFor:"from"},"From","Roberthood"===A?r.a.createElement("select",{id:"from",name:"from",className:"banking-page-input",onChange:function(e){var t=e.target.value;S(t)}},r.a.createElement("option",{value:"Cathay Bank"},"Cathay Bank"),r.a.createElement("option",{value:"Roberthood"},"Roberthood")):r.a.createElement("select",{id:"from",name:"from",className:"banking-page-input",onChange:function(e){var t=e.target.value;S(t)}},r.a.createElement("option",{value:"Roberthood"},"Roberthood"),r.a.createElement("option",{value:"Cathay Bank"},"Cathay Bank"))),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"to"},"To","Cathay Bank"===O?r.a.createElement("select",{id:"to",name:"to",className:"banking-page-input",onChange:function(e){var t=e.target.value;B(t)}},r.a.createElement("option",{value:"Roberthood"},"Roberthood"),r.a.createElement("option",{value:"Cathay Bank"},"Cathay Bank")):r.a.createElement("select",{id:"to",name:"to",className:"banking-page-input",onChange:function(e){var t=e.target.value;B(t)}},r.a.createElement("option",{value:"Cathay Bank"},"Cathay Bank"),r.a.createElement("option",{value:"Roberthood"},"Roberthood"))),r.a.createElement("br",null),r.a.createElement("label",null,"Amount",r.a.createElement("input",{type:"number",className:"banking-page-amount",placeholder:"$0.00",onChange:function(e){_(e.target.value)}}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{className:"banking-page-btn",onClick:function(e){e.preventDefault(),i.a.patch("./portfolios/".concat(t.username,"/Cash.json"),{cashBalance:R}).then(console.log("State: ".concat(R)))}},"Submit"))))}))}}]);
//# sourceMappingURL=5.bundle.js.map