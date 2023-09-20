/*! For license information please see 310.1f185e8b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[310],{901:function(t,r,e){e.d(r,{i:function(){return i}});var n=e(439),o=e(791),i=function(t,r){var e=(0,o.useState)([]),i=(0,n.Z)(e,2),a=i[0],c=i[1];return(0,o.useEffect)((function(){t(r).then((function(t){return c(t)}))}),[t,r]),[a,c]}},263:function(t,r,e){e.d(r,{CN:function(){return s},Fg:function(){return f}});var n,o,i,a=e(168),c=e(87),u=e(867),s=u.ZP.ul(n||(n=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),f=(u.ZP.li(o||(o=(0,a.Z)(["\n  border: 1px solid white;\n"]))),(0,u.ZP)(c.rU)(i||(i=(0,a.Z)(["\n  text-decoration: none;\n  font-size: 20px;\n  color: inherit;\n  &:hover {\n    color: gray;\n  }\n"]))))},310:function(t,r,e){e.r(r),e.d(r,{default:function(){return j}});var n,o,i,a,c,u=e(413),s=e(439),f=e(901),l=e(263),h=e(887),p=e(87),d=e(689),v=e(390),y=e(168),g=e(867),m=g.ZP.ol(n||(n=(0,y.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),w=g.ZP.form(o||(o=(0,y.Z)(["\n  display: flex;\n  gap: 1rem;\n"]))),x=g.ZP.h2(i||(i=(0,y.Z)(["\n  font-size: 2rem;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n"]))),b=g.ZP.input(a||(a=(0,y.Z)(["\n  width: 240px;\n  height: 30px;\n  border-color: white;\n  border-radius: 10px;\n  background-color: #424242;\n  color: white;\n"]))),Z=g.ZP.button(c||(c=(0,y.Z)(["\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  height: 40px;\n  width: 80px;\n  text-decoration: none;\n  color: #99ff99;\n  background-color: #333333;\n  border: 1px solid black;\n  border-radius: 10%;\n  border-color: white;\n  margin-bottom: 1rem;\n\n  &:hover,\n  :focus {\n    background-color: #424242;\n    color: #ffffff;\n  }\n"]))),L=e(184),j=function(){var t=(0,h.cI)(),r=t.register,e=t.handleSubmit,n=(0,p.lr)(),o=(0,s.Z)(n,2),i=o[0],a=o[1],c=i.get("query")||"",y=(0,f.i)(v.Pt,c),g=(0,s.Z)(y,1)[0].results,j=(0,d.TH)();return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(x,{children:"Search movie by name:"}),(0,L.jsxs)(w,{onSubmit:e((function(t){a(t.queryStr&&{query:t.queryStr.trim()})})),children:[(0,L.jsx)(b,(0,u.Z)((0,u.Z)({},r("queryStr")),{},{type:"text"})),(0,L.jsx)(Z,{children:"Search"})]}),null!==g&&void 0!==g&&g.length?(0,L.jsx)(m,{children:null===g||void 0===g?void 0:g.map((function(t){var r=t.id,e=t.title;return(0,L.jsx)("li",{children:(0,L.jsx)(l.Fg,{state:{from:j},to:"".concat(r.toString()),children:e})},r)}))}):null,null!==g&&void 0!==g&&g.length||!c?null:(0,L.jsx)("p",{children:"Nothing found"})]})}},390:function(t,r,e){e.d(r,{Fb:function(){return a},Gc:function(){return u},Jh:function(){return s},Pg:function(){return c},Pt:function(){return f}});var n=e(861),o=e(243);function i(){i=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",s=a.toStringTag||"@@toStringTag";function f(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{f({},"")}catch(t){f=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var i=r&&r.prototype instanceof g?r:g,a=Object.create(i.prototype),c=new P(n||[]);return o(a,"_invoke",{value:k(t,e,c)}),a}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=l;var p="suspendedStart",d="executing",v="completed",y={};function g(){}function m(){}function w(){}var x={};f(x,c,(function(){return this}));var b=Object.getPrototypeOf,Z=b&&b(b(S([])));Z&&Z!==e&&n.call(Z,c)&&(x=Z);var L=w.prototype=g.prototype=Object.create(x);function j(t){["next","throw","return"].forEach((function(r){f(t,r,(function(t){return this._invoke(r,t)}))}))}function E(t,r){function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return e("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function k(r,e,n){var o=p;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===v){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=_(c,n);if(u){if(u===y)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=h(r,e,n);if("normal"===s.type){if(o=n.done?v:"suspendedYield",s.arg===y)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=v,n.method="throw",n.arg=s.arg)}}}function _(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,_(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),y;var i=h(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,y;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,y):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function N(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function S(r){if(r||""===r){var e=r[c];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(typeof r+" is not iterable")}return m.prototype=w,o(L,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:m,configurable:!0}),m.displayName=f(w,s,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===m||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,f(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},r.awrap=function(t){return{__await:t}},j(E.prototype),f(E.prototype,u,(function(){return this})),r.AsyncIterator=E,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},j(L),f(L,s,"Generator"),f(L,c,(function(){return this})),f(L,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=S,P.prototype={constructor:P,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return c.type="throw",c.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:S(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),y}},r}o.Z.defaults.headers={Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjYmY3Yzk1ODEzYzhjNGMxOTc0NGY1NTM0OTNiNThiZiIsInN1YiI6IjY1MDk5YTRhZmEyN2Y0MDE0ZWIyZjM2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WcXhs-LvYktYBLDy0cKPXkwiju7HU8RwqWXhXW2L-ws",accept:"application/json"},o.Z.defaults.params={language:"en-US"};var a=function(){var t=(0,n.Z)(i().mark((function t(){var r,e;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day");case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),c=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),u=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),s=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(i().mark((function t(r){var e,n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=310.1f185e8b.chunk.js.map