"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[656],{25362:function(e,t,n){n.d(t,{j:function(){return o}});var i=n(36706),r=n(76779);class u extends i.l{constructor(){super(),this.setup=e=>{if(!r.sk&&window.addEventListener){let t=()=>e();return window.addEventListener("visibilitychange",t,!1),window.addEventListener("focus",t,!1),()=>{window.removeEventListener("visibilitychange",t),window.removeEventListener("focus",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setFocused(e):this.onFocus()})}setFocused(e){this.focused=e,e&&this.onFocus()}onFocus(){this.listeners.forEach(e=>{e()})}isFocused(){return"boolean"==typeof this.focused?this.focused:"undefined"==typeof document||[void 0,"visible","prerender"].includes(document.visibilityState)}}let o=new u},9198:function(e,t,n){n.d(t,{V:function(){return r}});var i=n(76779);let r=function(){let e=[],t=0,n=e=>{e()},r=e=>{e()},u=r=>{t?e.push(r):(0,i.A4)(()=>{n(r)})},o=()=>{let t=e;e=[],t.length&&(0,i.A4)(()=>{r(()=>{t.forEach(e=>{n(e)})})})};return{batch:e=>{let n;t++;try{n=e()}finally{--t||o()}return n},batchCalls:e=>(...t)=>{u(()=>{e(...t)})},schedule:u,setNotifyFunction:e=>{n=e},setBatchNotifyFunction:e=>{r=e}}}()},21190:function(e,t,n){n.d(t,{N:function(){return o}});var i=n(36706),r=n(76779);class u extends i.l{constructor(){super(),this.setup=e=>{if(!r.sk&&window.addEventListener){let t=()=>e();return window.addEventListener("online",t,!1),window.addEventListener("offline",t,!1),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",t)}}}}onSubscribe(){this.cleanup||this.setEventListener(this.setup)}onUnsubscribe(){if(!this.hasListeners()){var e;null==(e=this.cleanup)||e.call(this),this.cleanup=void 0}}setEventListener(e){var t;this.setup=e,null==(t=this.cleanup)||t.call(this),this.cleanup=e(e=>{"boolean"==typeof e?this.setOnline(e):this.onOnline()})}setOnline(e){this.online=e,e&&this.onOnline()}onOnline(){this.listeners.forEach(e=>{e()})}isOnline(){return"boolean"==typeof this.online?this.online:"undefined"==typeof navigator||void 0===navigator.onLine||navigator.onLine}}let o=new u},21694:function(e,t,n){n.d(t,{DV:function(){return l},Kw:function(){return s},Mz:function(){return c}});var i=n(25362),r=n(21190),u=n(76779);function o(e){return Math.min(1e3*2**e,3e4)}function s(e){return(null!=e?e:"online")!=="online"||r.N.isOnline()}class a{constructor(e){this.revert=null==e?void 0:e.revert,this.silent=null==e?void 0:e.silent}}function l(e){return e instanceof a}function c(e){let t,n,l,c=!1,p=0,f=!1,y=new Promise((e,t)=>{n=e,l=t}),d=()=>!i.j.isFocused()||"always"!==e.networkMode&&!r.N.isOnline(),h=i=>{f||(f=!0,null==e.onSuccess||e.onSuccess(i),null==t||t(),n(i))},b=n=>{f||(f=!0,null==e.onError||e.onError(n),null==t||t(),l(n))},m=()=>new Promise(n=>{t=e=>{let t=f||!d();return t&&n(e),t},null==e.onPause||e.onPause()}).then(()=>{t=void 0,f||null==e.onContinue||e.onContinue()}),v=()=>{let t;if(!f){try{t=e.fn()}catch(e){t=Promise.reject(e)}Promise.resolve(t).then(h).catch(t=>{var n,i;if(f)return;let r=null!=(n=e.retry)?n:3,s=null!=(i=e.retryDelay)?i:o,a="function"==typeof s?s(p,t):s,l=!0===r||"number"==typeof r&&p<r||"function"==typeof r&&r(p,t);if(c||!l){b(t);return}p++,null==e.onFail||e.onFail(p,t),(0,u.Gh)(a).then(()=>{if(d())return m()}).then(()=>{c?b(t):v()})})}};return s(e.networkMode)?v():m().then(v),{promise:y,cancel:t=>{f||(b(new a(t)),null==e.abort||e.abort())},continue:()=>{let e=null==t?void 0:t();return e?y:Promise.resolve()},cancelRetry:()=>{c=!0},continueRetry:()=>{c=!1}}}},36706:function(e,t,n){n.d(t,{l:function(){return i}});class i{constructor(){this.listeners=[],this.subscribe=this.subscribe.bind(this)}subscribe(e){return this.listeners.push(e),this.onSubscribe(),()=>{this.listeners=this.listeners.filter(t=>t!==e),this.onUnsubscribe()}}hasListeners(){return this.listeners.length>0}onSubscribe(){}onUnsubscribe(){}}},76779:function(e,t,n){n.d(t,{A4:function(){return g},G9:function(){return C},Gh:function(){return E},I6:function(){return l},Kp:function(){return s},PN:function(){return o},Rm:function(){return f},SE:function(){return u},VS:function(){return b},X7:function(){return p},ZT:function(){return r},_v:function(){return a},_x:function(){return c},oE:function(){return L},sk:function(){return i},to:function(){return d},yF:function(){return y}});let i="undefined"==typeof window||"Deno"in window;function r(){}function u(e,t){return"function"==typeof e?e(t):e}function o(e){return"number"==typeof e&&e>=0&&e!==1/0}function s(e,t){return Math.max(e+(t||0)-Date.now(),0)}function a(e,t,n){return T(e)?"function"==typeof t?{...n,queryKey:e,queryFn:t}:{...t,queryKey:e}:e}function l(e,t,n){return T(e)?[{...t,queryKey:e},n]:[e||{},t]}function c(e,t){let{type:n="all",exact:i,fetchStatus:r,predicate:u,queryKey:o,stale:s}=e;if(T(o)){if(i){if(t.queryHash!==f(o,t.options))return!1}else{if(!h(t.queryKey,o))return!1}}if("all"!==n){let e=t.isActive();if("active"===n&&!e||"inactive"===n&&e)return!1}return("boolean"!=typeof s||t.isStale()===s)&&(void 0===r||r===t.state.fetchStatus)&&(!u||!!u(t))}function p(e,t){let{exact:n,fetching:i,predicate:r,mutationKey:u}=e;if(T(u)){if(!t.options.mutationKey)return!1;if(n){if(y(t.options.mutationKey)!==y(u))return!1}else{if(!h(t.options.mutationKey,u))return!1}}return("boolean"!=typeof i||"loading"===t.state.status===i)&&(!r||!!r(t))}function f(e,t){let n=(null==t?void 0:t.queryKeyHashFn)||y;return n(e)}function y(e){return JSON.stringify(e,(e,t)=>v(t)?Object.keys(t).sort().reduce((e,n)=>(e[n]=t[n],e),{}):t)}function d(e,t){return h(e,t)}function h(e,t){return e===t||typeof e==typeof t&&!!e&&!!t&&"object"==typeof e&&"object"==typeof t&&!Object.keys(t).some(n=>!h(e[n],t[n]))}function b(e,t){if(e&&!t||t&&!e)return!1;for(let n in e)if(e[n]!==t[n])return!1;return!0}function m(e){return Array.isArray(e)&&e.length===Object.keys(e).length}function v(e){if(!w(e))return!1;let t=e.constructor;if(void 0===t)return!0;let n=t.prototype;return!!(w(n)&&n.hasOwnProperty("isPrototypeOf"))}function w(e){return"[object Object]"===Object.prototype.toString.call(e)}function T(e){return Array.isArray(e)}function E(e){return new Promise(t=>{setTimeout(t,e)})}function g(e){E(0).then(e)}function C(){if("function"==typeof AbortController)return new AbortController}function L(e,t,n){return null!=n.isDataEqual&&n.isDataEqual(e,t)?e:"function"==typeof n.structuralSharing?n.structuralSharing(e,t):!1!==n.structuralSharing?function e(t,n){if(t===n)return t;let i=m(t)&&m(n);if(i||v(t)&&v(n)){let r=i?t.length:Object.keys(t).length,u=i?n:Object.keys(n),o=u.length,s=i?[]:{},a=0;for(let r=0;r<o;r++){let o=i?r:u[r];s[o]=e(t[o],n[o]),s[o]===t[o]&&a++}return r===o&&a===r?t:s}return n}(e,t):t}},56941:function(e,t,n){n.d(t,{NL:function(){return s},aH:function(){return a}});var i=n(52983);let r=i.createContext(void 0),u=i.createContext(!1);function o(e,t){return e||(t&&"undefined"!=typeof window?(window.ReactQueryClientContext||(window.ReactQueryClientContext=r),window.ReactQueryClientContext):r)}let s=({context:e}={})=>{let t=i.useContext(o(e,i.useContext(u)));if(!t)throw Error("No QueryClient set, use QueryClientProvider to set one");return t},a=({client:e,children:t,context:n,contextSharing:r=!1})=>{i.useEffect(()=>(e.mount(),()=>{e.unmount()}),[e]);let s=o(n,r);return i.createElement(u.Provider,{value:!n&&r},i.createElement(s.Provider,{value:e},t))}},51530:function(e){e.exports=JSON.parse('[{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"remaining","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"balance","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"decimalPlaces","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"decreaseApproval","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"increaseApproval","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"tokenName","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"tokenSymbol","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"totalTokensIssued","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"transferAndCall","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"success","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]')}}]);