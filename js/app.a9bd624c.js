(function(e){function t(t){for(var r,a,c=t[0],u=t[1],s=t[2],d=0,l=[];d<c.length;d++)a=c[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&l.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(l.length)l.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return u.p+"js/"+({CityDetails:"CityDetails",MainPage:"MainPage"}[e]||e)+"."+{CityDetails:"cf302d14",MainPage:"05d371ab"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={CityDetails:1,MainPage:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({CityDetails:"CityDetails",MainPage:"MainPage"}[e]||e)+"."+{CityDetails:"876a7783",MainPage:"a892d9e6"}[e]+".css",o=u.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var s=i[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===o))return t()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){s=l[c],d=s.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=c(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,n[1](l)}o[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/weather/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"fade"}},[n("router-view")],1)],1)},o=[],i=(n("5c0b"),n("2877")),c={},u=Object(i["a"])(c,a,o,!1,null,null,null),s=u.exports,d=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f"));r["a"].use(d["a"]);var l=[{path:"/",name:"MainPage",component:function(){return n.e("MainPage").then(n.bind(null,"4385"))}},{path:"/:cityName",name:"CityDetails",component:function(){return n.e("CityDetails").then(n.bind(null,"d888"))},props:!0}],f=new d["a"]({mode:"history",routes:l}),p=f,h=n("b85c"),m=n("1da1"),y=(n("96cf"),n("ac1f"),n("1276"),n("99af"),n("caad"),n("2532"),n("b0c0"),n("4160"),n("159b"),n("a15b"),n("c740"),n("4de4"),n("2f62")),g=n("bc3a"),v=n.n(g);r["a"].use(y["a"]);var C=[],b="edc896dcc917ea71a2156d703a604d3f",w=new y["a"].Store({state:{Cities:[],City:{},Lat:null,Lon:null,isCityMissing:!0,isCityAlreadyAdded:!1,HourlyWeather:[]},mutations:{setSavedCitiesInfo:function(e,t){e.Cities=t},setCurrentCity:function(e,t){e.City=t},setCurrentCityLat:function(e,t){e.Lat=t},setCurrentCityLon:function(e,t){e.Lon=t},cityIsMissing:function(e,t){e.isCityMissing=t},cityIsAlreadyAdded:function(e,t){e.isCityAlreadyAdded=t},setHourlyWeather:function(e,t){e.HourlyWeather=t}},actions:{fetchSavedCitiesInfo:function(e){return Object(m["a"])(regeneratorRuntime.mark((function t(){var n,r,a,o,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=e.commit,!document.cookie.length||"-"===document.cookie){t.next=21;break}C=[],r=document.cookie.split(","),a=Object(h["a"])(r),t.prev=5,a.s();case 7:if((o=a.n()).done){t.next=13;break}return i=o.value,t.next=11,v.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(i,"&units=metric&appid=").concat(b)).then((function(e){var t=e.data,r=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),o=Math.floor(256*Math.random());t.color="rgb("+r+","+a+","+o+")",C.push(t),n("setSavedCitiesInfo",C)}));case 11:t.next=7;break;case 13:t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](5),a.e(t.t0);case 18:return t.prev=18,a.f(),t.finish(18);case 21:case"end":return t.stop()}}),t,null,[[5,15,18,21]])})))()},addCity:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,v.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=").concat(b)).then((function(e){if(!document.cookie.includes(e.data.name)){var t=e.data,n=Math.floor(256*Math.random()),a=Math.floor(256*Math.random()),o=Math.floor(256*Math.random());t.color="rgb("+n+","+a+","+o+")",C.push(t);var i=[];C.forEach((function(e){return i.push(e.name)})),document.cookie=i.join(),r("setSavedCitiesInfo",C)}}));case 3:case"end":return n.stop()}}),n)})))()},updateCityWeather:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,v.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=").concat(b)).then((function(e){var n=C.findIndex((function(e){return e.name===t}));C[n]=e.data;var a=[];C.forEach((function(e){return a.push(e.name)})),document.cookie=a.join(),r("setSavedCitiesInfo",C)}));case 3:case"end":return n.stop()}}),n)})))()},removeCity:function(e,t){var n=e.commit;C=C.filter((function(e){return e.name!==t}));var r=[];C.forEach((function(e){return r.push(e.name)})),document.cookie=r.join(),r.length||(document.cookie="-"),n("setSavedCitiesInfo",C)},getCoordinates:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,v.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=").concat(b)).then((function(e){r("setCurrentCity",e.data),r("setCurrentCityLat",e.data.coord.lat),r("setCurrentCityLon",e.data.coord.lon)}));case 3:case"end":return n.stop()}}),n)})))()},getHourlyWeather:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,a=e.commit,o=e.getters,n.next=3,r("getCoordinates",t);case 3:return n.next=5,v.a.get("https://api.openweathermap.org/data/2.5/onecall?lat=".concat(o.Lat,"&lon=").concat(o.Lon,"&exclude=daily,minutely,current,alerts&units=metric&appid=").concat(b)).then((function(e){a("setHourlyWeather",e.data.hourly)}));case 5:case"end":return n.stop()}}),n)})))()},checkCityName:function(e,t){return Object(m["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.prev=1,n.next=4,v.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=").concat(b)).then((function(e){"OK"===e.statusText&&r("cityIsMissing",!1),document.cookie.includes(e.data.name)?r("cityIsAlreadyAdded",!0):r("cityIsAlreadyAdded",!1)}));case 4:n.next=10;break;case 6:n.prev=6,n.t0=n["catch"](1),console.log("City not found"),r("cityIsMissing",!0);case 10:case"end":return n.stop()}}),n,null,[[1,6]])})))()}},getters:{Cities:function(e){return e.Cities},City:function(e){return e.City},Lat:function(e){return e.Lat},Lon:function(e){return e.Lon},isCityMissing:function(e){return e.isCityMissing},isCityAlreadyAdded:function(e){return e.isCityAlreadyAdded},HourlyWeather:function(e){return e.HourlyWeather}},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:p,store:w,render:function(e){return e(s)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.a9bd624c.js.map