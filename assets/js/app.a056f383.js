(function(e){function n(n){for(var c,u,o=n[0],h=n[1],i=n[2],f=0,l=[];f<o.length;f++)u=o[f],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&l.push(r[u][0]),r[u]=0;for(c in h)Object.prototype.hasOwnProperty.call(h,c)&&(e[c]=h[c]);p&&p(n);while(l.length)l.shift()();return a.push.apply(a,i||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],c=!0,u=1;u<t.length;u++){var o=t[u];0!==r[o]&&(c=!1)}c&&(a.splice(n--,1),e=h(h.s=t[0]))}return e}var c={},u={app:0},r={app:0},a=[];function o(e){return h.p+"assets/js/"+({}[e]||e)+"."+{"chunk-0e446552":"7ef43d4b","chunk-15e9e439":"c441ed93","chunk-1d80062b":"5498b07f","chunk-4d889682":"23076454","chunk-53384583":"492ddfd0","chunk-6e2be058":"2e7e3b85","chunk-732def84":"3cbd23f9","chunk-787e9dc6":"787e044b","chunk-cfbf3b50":"93592c24","chunk-e607062e":"471728af","chunk-eec730f0":"0bfbbff4","chunk-f3e25510":"28dbb118"}[e]+".js"}function h(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,h),t.l=!0,t.exports}h.e=function(e){var n=[],t={"chunk-0e446552":1,"chunk-15e9e439":1,"chunk-1d80062b":1,"chunk-4d889682":1,"chunk-53384583":1,"chunk-6e2be058":1,"chunk-732def84":1,"chunk-787e9dc6":1,"chunk-cfbf3b50":1,"chunk-e607062e":1,"chunk-eec730f0":1,"chunk-f3e25510":1};u[e]?n.push(u[e]):0!==u[e]&&t[e]&&n.push(u[e]=new Promise((function(n,t){for(var c="assets/css/"+({}[e]||e)+"."+{"chunk-0e446552":"e3d96279","chunk-15e9e439":"2d16e293","chunk-1d80062b":"e3d96279","chunk-4d889682":"e3d96279","chunk-53384583":"e3d96279","chunk-6e2be058":"e3d96279","chunk-732def84":"e3d96279","chunk-787e9dc6":"e3d96279","chunk-cfbf3b50":"e3d96279","chunk-e607062e":"c45ca818","chunk-eec730f0":"31917cd6","chunk-f3e25510":"4ae38640"}[e]+".css",r=h.p+c,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var i=a[o],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===c||f===r))return n()}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){i=l[o],f=i.getAttribute("data-href");if(f===c||f===r)return n()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=n,p.onerror=function(n){var c=n&&n.target&&n.target.src||r,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete u[e],p.parentNode.removeChild(p),t(a)},p.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){u[e]=0})));var c=r[e];if(0!==c)if(c)n.push(c[2]);else{var a=new Promise((function(n,t){c=r[e]=[n,t]}));n.push(c[2]=a);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,h.nc&&f.setAttribute("nonce",h.nc),f.src=o(e);var l=new Error;i=function(n){f.onerror=f.onload=null,clearTimeout(p);var t=r[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),u=n&&n.target&&n.target.src;l.message="Loading chunk "+e+" failed.\n("+c+": "+u+")",l.name="ChunkLoadError",l.type=c,l.request=u,t[1](l)}r[e]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(n)},h.m=e,h.c=c,h.d=function(e,n,t){h.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},h.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},h.t=function(e,n){if(1&n&&(e=h(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(h.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)h.d(t,c,function(n){return e[n]}.bind(null,c));return t},h.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return h.d(n,"a",n),n},h.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},h.p="",h.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var p=f;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],a={components:{},name:"App"},o=a,h=t("2877"),i=Object(h["a"])(o,u,r,!1,null,null,null),f=i.exports,l=t("5c96"),p=t.n(l),d=(t("0fae"),t("a7c1"),t("8c4f"));c["default"].use(d["a"]);var s=new d["a"]({scrollBehavior:function(e,n,t){return t||(c=window.innerWidth>=700?676:267,{x:0,y:c});var c},routes:[{path:"/",component:function(e){return t.e("chunk-eec730f0").then(function(){var n=[t("bc13")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{auth:!0},name:"home"},{path:"/Home",component:function(e){return t.e("chunk-eec730f0").then(function(){var n=[t("bc13")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{auth:!0},name:"Home"},{path:"/Aboutme",component:function(e){return t.e("chunk-0e446552").then(function(){var n=[t("193e")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{auth:!0},name:"Aboutme"},{path:"/Share",component:function(e){return t.e("chunk-15e9e439").then(function(){var n=[t("bc7d")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{auth:!0},name:"Share"},{path:"/Game",component:function(e){return t.e("chunk-f3e25510").then(function(){var n=[t("25e0")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{auth:!0},name:"game"},{path:"/Note",component:function(e){return t.e("chunk-e607062e").then(function(){var n=[t("3723")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{auth:!0},name:"Note"},{path:"/Speech",component:function(e){return t.e("chunk-6e2be058").then(function(){var n=[t("851a")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{auth:!0},name:"Speech"},{path:"/Api",component:function(e){return t.e("chunk-732def84").then(function(){var n=[t("fb56")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{auth:!0},name:"Api"},{path:"/Movie",component:function(e){return t.e("chunk-53384583").then(function(){var n=[t("e8b3")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{auth:!0},name:"movie"},{path:"/Play",component:function(e){return t.e("chunk-4d889682").then(function(){var n=[t("1cd7")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{auth:!0},name:"play"},{path:"/Countdown",component:function(e){return t.e("chunk-1d80062b").then(function(){var n=[t("81eb")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{auth:!0},name:"countdown"},{path:"/Register",component:function(e){return t.e("chunk-cfbf3b50").then(function(){var n=[t("2f50")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{auth:!0},name:"register"},{path:"/Css",component:function(e){return t.e("chunk-787e9dc6").then(function(){var n=[t("93bc")];e.apply(null,n)}.bind(this)).catch(t.oe)},meta:{auth:!0},name:"css"}]});c["default"].config.productionTip=!1,c["default"].use(p.a),new c["default"]({render:function(e){return e(f)},router:s}).$mount("#app")},a7c1:function(e,n,t){}});
//# sourceMappingURL=app.a056f383.js.map