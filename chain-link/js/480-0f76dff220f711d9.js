(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[480],{32224:function(t,e,n){"use strict";n.d(e,{Jf:function(){return u},S3:function(){return d},Ql:function(){return l}});var i=n(68208),r=n(97458),a=n(52983),o=n(95754),c=function(t,e){return new Date(t)<=new Date(e)},s=function(t){if(!t||!(null===(e=t.migration_access)||void 0===e?void 0:e.datetime)||!(null===(n=t.early_access)||void 0===n?void 0:n.datetime)||!(null===(i=t.general_access)||void 0===i?void 0:i.datetime))return{currentPhase:void 0,endTimestamp:0};for(var e,n,i,r,a,s=new Date().toUTCString(),l=(null===(r=t.check_access)||void 0===r?void 0:r.datetime)!==void 0?new Date(null===(a=t.check_access)||void 0===a?void 0:a.datetime).getTime():0,u=o.A.BeforeCheckEligibility,d=Object.values(t).sort(function(t,e){return t.phaseEnum-e.phaseEnum}),h=0;h<d.length;h++){var C=d[h];if(c(s,C.datetime))break;u=C.phaseEnum,l=h===d.length-1?0:new Date(d[h+1].datetime).getTime()}return{currentPhase:u,endTimestamp:l}};function l(){var t=a.useContext(u);if(!t)throw Error("useElegibilityPhase must be used within a EligibilityPhaseProvider");return t}var u=(0,a.createContext)(null),d=function(t){var e,n,l,d=t.children,h=(0,i._)((0,a.useState)(new Date().toUTCString()),2),C=h[0],f=h[1],_=(n=(e=(0,i._)(a.useState({check_access:{title:"",timeline:"",datetime:"",phaseEnum:o.A.CheckEligibility},migration_access:{title:"",timeline:"",datetime:"",phaseEnum:o.A.Migration},early_access:{title:"",timeline:"",datetime:"",phaseEnum:o.A.Early},general_access:{title:"",timeline:"",datetime:"",phaseEnum:o.A.General}}),2))[0],l=e[1],a.useEffect(function(){fetch("/api/dates").then(function(t){return t.json()}).then(function(t){return t.data}).catch(function(){return null}).then(l)},[]),n),m=s(_),p=(null==_?void 0:_.check_access)!==void 0&&!!_.check_access.datetime&&!c(C,_.check_access.datetime);return(0,a.useEffect)(function(){setInterval(function(){return f(new Date().toUTCString())},1e3)},[]),(0,r.jsx)(u.Provider,{value:{poolAccessData:_,eligibilityPhase:m,isAfterCheckAccessDate:p},children:d})}},88578:function(t,e,n){"use strict";n.d(e,{g:function(){return s}});var i=n(97458),r=n(52983),a=n(94448),o=n(99098),c=n.n(o),s=function(){return r.useEffect(function(){window.scrollTo(0,0)},[]),(0,i.jsx)("div",{id:"loading-wallet",className:c().container,children:(0,i.jsx)("img",{src:(0,a.Jn)("/destiny/loading.svg")})})}},26266:function(t,e,n){"use strict";n.d(e,{M:function(){return s}});var i=n(4965),r=n(68208),a=n(10335),o=n(88802),c=n(52983),s=function(t){var e,n=(0,r._)(c.useState(!1),2),s=n[0],l=n[1];return{subscribeOnHubspot:(e=(0,i._)(function(e,n){var i,r,c;return(0,o.Jh)(this,function(o){return e&&(i=new URLSearchParams(window.location.search),r=["utm_term","utm_campaign","utm_source","utm_content","utm_medium"].reduce(function(t,e){var n=i.get(e);return null!=n?t.concat({name:e,value:n}):t},[]),c=[{name:"email",value:e}].concat((0,a._)(n?[{name:"mailchimp_tags",value:n}]:[]),(0,a._)(r)),l(!0),fetch(t,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({fields:c})}).then(function(t){if(!t.ok)throw Error(t.statusText);l(!1)})),[2]})}),function(t,n){return e.apply(this,arguments)}),isSubscribing:s}}},11393:function(t,e,n){"use strict";n.d(e,{C:function(){return i}});var i="^[a-zA-Z0-9+_.\\-]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9]+$"},46907:function(t,e,n){"use strict";n.d(e,{c:function(){return r}});var i=n(97458);n(52983);var r={wallet:(0,i.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M12.5827 12C12.2099 11.9994 11.842 11.9156 11.5057 11.7547C11.1694 11.5939 10.8733 11.36 10.639 11.0701C10.4046 10.7802 10.2379 10.4416 10.151 10.0791C10.0641 9.71663 10.0592 9.3393 10.1367 8.97467C10.2673 8.4072 10.5885 7.90165 11.0467 7.54231C11.5049 7.18298 12.0725 6.99157 12.6547 7h24.25C14.3384 7 14.4232 6.96488 14.4857 6.90237C14.5483 6.83986 14.5834 6.75507 14.5834 6.66667C14.5834 6.138 14.5834 5.164 14.5834 5.164C14.5834 4.72197 14.4078 4.29805 14.0952 3.98549C13.7827 3.67293 13.3587 3.49733 12.9167 3.49733C9.93271 3.49733 18.8247 3.49067 3.58337 3.49067C3.45077 3.49067 3.32359 3.43799 3.22982 3.34422C3.13605 3.25045 3.08337 3.12328 3.08337 2.99067C3.08337 2.85806 3.13605 2.73088 3.22982 2.63711C3.32359 2.54335 3.45077 2.49067 3.58337 2.49067h22.4167C12.4608 2.49067 12.5031 2.4732 12.5343 2.44209C12.5656 2.41098 12.5832 2.36875 12.5834 2.32467V2.16667C12.5834 1.24733 11.5367 0.5 10.25 0.5H2.91671C2.29787 0.5 1.70438 0.745833 1.26679 1.18342C0.829207 1.621 0.583374 2.21449 0.583374 2.83333V13.1667C0.583374 13.7855 0.829207 14.379 1.26679 14.8166C1.70438 15.2542 2.29787 15.5 2.91671 15.5h22.9167C13.3587 15.5 13.7827 15.3244 14.0952 15.0118C14.4078 14.6993 14.5834 14.2754 14.5834 13.8333V12.1667C14.5834 12.1225 14.5658 12.0801 14.5346 12.0488C14.5033 12.0176 14.4609 12 14.4167 12h22.5827Z",fill:"#F5F7FD"}),(0,i.jsx)("path",{d:"M14.5826 8h22.5826C12.1848 8 11.8033 8.15804 11.522 8.43934C11.2407 8.72064 11.0826 9.10218 11.0826 9.5C11.0826 9.89782 11.2407 10.2794 11.522 10.5607C11.8033 10.842 12.1848 11 12.5826 11h24.5826C14.8177 10.9595 15.0306 10.8366 15.1833 10.6533C15.336 10.4701 15.4185 10.2385 15.416 10V9C15.4185 8.7615 15.336 8.52989 15.1833 8.34665C15.0306 8.16342 14.8177 8.04053 14.5826 8Z",fill:"#F5F7FD"})]}),info:(0,i.jsxs)("svg",{width:"13",height:"12",viewBox:"0 0 13 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("circle",{cx:"6.3335",cy:"6",r:"5.5",fill:"white",stroke:"#B7BAC0"}),(0,i.jsx)("path",{d:"M6.86393 9V5.064H5.79993V9H6.86393ZM5.67193 3.776C5.67193 4.128 5.96793 4.424 6.32793 4.424C6.69593 4.424 6.98393 4.128 6.98393 3.776C6.98393 3.408 6.69593 3.112 6.32793 3.112C5.96793 3.112 5.67193 3.408 5.67193 3.776Z",fill:"#B7BAC0"})]}),twitter:(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M5.50638 13.3333C10.5445 13.3333 13.2926 9.24611 13.2926 5.70718C13.2926 5.60749 13.2926 5.45795 13.2926 5.35826C13.8524 4.95951 14.3104 4.51092 14.6667 3.96263C14.1578 4.16201 13.6489 4.31153 13.0891 4.36138C13.6489 4.01247 14.1069 3.51403 14.3104 2.86605C13.8015 3.16512 13.1909 3.41433 12.5802 3.51402C12.0713 3.01558 11.3588 2.66666 10.5954 2.66666C9.06871 2.66666 7.84733 3.86294 7.84733 5.35826C7.84733 5.55764 7.84735 5.75702 7.89824 5.9564C5.60816 5.85671 3.62341 4.76012 2.24937 3.16511C1.99491 3.56386 1.89316 4.01246 1.89316 4.5109C1.89316 5.45794 2.40205 6.25545 3.11451 6.75389C2.6565 6.75389 2.24939 6.60435 1.89316 6.40498C1.89316 6.40498 1.89316 6.405 1.89316 6.45484C1.89316 7.75079 2.86007 8.84735 4.08145 9.09658C3.82699 9.14642 3.62342 9.19627 3.36897 9.19627C3.21629 9.19627 3.01273 9.19625 2.86006 9.14641C3.21629 10.1931 4.23411 10.9906 5.40459 10.9906C4.48856 11.6885 3.26718 12.1371 1.99491 12.1371C1.79135 12.1371 1.53691 12.1371 1.33334 12.0872C2.55472 12.8847 3.97966 13.3333 5.50638 13.3333Z",fill:"#F5F7FD"})}),chainlink:(0,i.jsx)("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M16.6068 6.7801L24.6506 11.3735V20.5971L16.6289 25.2199L8.58502 20.6338V11.4102L16.6068 6.7801ZM16.6068 0L13.6549 1.70236L5.61838 6.33249L2.6665 8.03485V11.4249V20.6411V24.0312L5.61838 25.7189L13.6623 30.3123L16.6141 32L19.566 30.2976L27.5877 25.6675L30.5396 23.9725V20.5824V11.3589V7.96881L27.5877 6.28113L19.5439 1.68769L16.592 0H16.6068Z",fill:"#375BD2"})})}},41554:function(t,e,n){"use strict";n.d(e,{F:function(){return p}});var i=n(4965),r=n(85709),a=n(68208),o=n(88802),c=n(97458),s=n(52983),l=n(73457),u=n(8765),d=n(94448),h=n(24755),C=n(84790),f=n.n(C),_=["MetaMask","WalletConnect","CoinbaseWallet"];function m(t){var e=t.closeModal,n=t.isConnecting,r=t.setIsConnecting,u=t.walletOptions,C=t.isOpen,_=t.termsURL,m=(0,a._)(s.useState(n),2),p=m[0],v=m[1];return(0,c.jsxs)(l.u_,{isOpen:C,onRequestClose:e,className:f().modalContent,children:[(0,c.jsxs)("h3",{children:["Connect your wallet",!n&&(0,c.jsx)("button",{onClick:e,style:{border:"none",background:"unset"},children:(0,c.jsx)("img",{src:(0,d.m_)("Close_gray")})})]}),(0,c.jsx)(l.XZ,{checked:p,id:"accept-terms",onChange:function(){return v(!p)},children:(0,c.jsxs)("span",{children:["I accept the Chainlink Foundation"," ",(0,c.jsx)("a",{style:{color:"var(--color-text-link)"},target:"_blank",rel:"noreferrer",href:void 0===_?"https://chain.link/terms":_,children:"Terms of Service"})]})}),(0,c.jsx)("div",{className:p?f().buttons:(0,h.W)(f().buttons,f().disabled),children:u.map(function(t){var a=t.onClick,s=t.iconUrl,l=t.title;return(0,c.jsxs)("button",{className:"text-300",disabled:n||!p,onClick:(0,i._)(function(){return(0,o.Jh)(this,function(t){switch(t.label){case 0:return r(!0),[4,a()];case 1:return t.sent(),r(!1),e(),[2]}})}),children:[(0,c.jsx)("img",{src:(0,d.m_)(s)}),l]},l)})}),(0,c.jsx)("p",{className:"support-text",children:"Many 3rd party wallet applications do not currently have stable support for WalletConnect. If you are unable to connect, please contact your wallet provider for support before reaching out to Chainlink Labs."})]})}function p(t){var e,n=t.wallet,d=t.termsURL,h=t.network,C=(0,a._)(s.useState(!1),2),f=C[0],p=C[1],v=(0,l.dd)(),g=v.isOpen,w=(0,r._)(v,["isOpen"]),x=s.useCallback(function(){f||w.openModal()},[f,g]),b=s.useCallback(function(){f||w.closeModal()},[f,g]),y=s.useCallback((e=(0,i._)(function(t){var e,i;return(0,o.Jh)(this,function(r){switch(r.label){case 0:if(e=t.walletProviderType,n.isConnected||n.isConnecting)throw Error("Cannot connect on a connected wallet");return i=h?u.S7[h].chainId:void 0,[4,n.connect({walletProviderType:e,chainId:i})];case 1:return r.sent(),b(),[2]}})}),function(t){return e.apply(this,arguments)}),[n.isConnected,n.isConnecting,!n.isConnected&&n.connect,b,h]),k=_.map(function(t){return{title:t,iconUrl:t,onClick:function(){return y({walletProviderType:t})}}});return{ConnectWalletModal:s.useCallback(function(){return(0,c.jsx)(m,{closeModal:b,isConnecting:f,setIsConnecting:p,walletOptions:k,isOpen:g,termsURL:d})},[b,g]),openModal:x,closeModal:b,isOpen:g}}},55824:function(t,e,n){"use strict";n.d(e,{x:function(){return s}});var i=n(5079),r=n(95264),a=n(53539),o=n(76811);function c(){var t=(0,i._)(["\n  margin: 0;\n\n  ","\n  ","\n  ","\n  ","\n\n  ","\n  ","\n  ","\n  ","\n  ","\n"]);return c=function(){return t},t}var s=a.ZP.div(c(),function(t){return(0,r.ZP)(t.__css)(t.theme)},function(t){var e=t.theme,n=t.variant,i=t.tx,a=void 0===i?"variants":i;return"string"==typeof n?(0,r.ZP)((0,r.U2)(e,a+"."+n,(0,r.U2)(e,n)))(e):{}},function(t){return t.css},function(t){return(0,r.ZP)(t.sx)(t.theme)},o.Dh,o.bK,o.cp,o.$_,o.GQ)},61694:function(t,e,n){"use strict";n.d(e,{x:function(){return u}});var i,r,a,o=n(5079);n(52983);var c=n(53539),s=n(55824);function l(){var t=(0,o._)([""]);return l=function(){return t},t}var u=(0,c.ZP)(s.x).attrs(function(t){return{as:null!==(i=t.as)&&void 0!==i?i:"p",tx:null!==(r=t.tx)&&void 0!==r?r:"text",variant:null!==(a=t.variant)&&void 0!==a?a:"body.regular"}})(l());u.displayName="Text"},99098:function(t){t.exports={container:"loading_container__Z6boW"}},56307:function(t){t.exports={container:"card_container__GTjDK",full_page:"card_full_page__JoMrA",actions:"card_actions__xO_gW"}},35087:function(t){t.exports={primary:"button_primary__ONUAX paragraph-100",secondary:"button_secondary__Lu5Pf paragraph-100",tertiary:"button_tertiary___DuQQ paragraph-100",reset:"button_reset__s_UII",tag:"button_tag__RSU_w"}},84790:function(t){t.exports={modalContent:"ConnectWalletModal_modalContent__m6_k9",buttons:"ConnectWalletModal_buttons__p0DYw",disabled:"ConnectWalletModal_disabled__49GQH",disclaimer:"ConnectWalletModal_disclaimer__o2iRn"}}}]);