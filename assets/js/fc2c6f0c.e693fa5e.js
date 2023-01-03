"use strict";(self.webpackChunkosmosis_docs=self.webpackChunkosmosis_docs||[]).push([[3195],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(o),m=n,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return o?r.createElement(h,a(a({ref:t},u),{},{components:o})):r.createElement(h,a({ref:t},u))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},30757:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=o(87462),n=(o(67294),o(3905));const i={title:"Overview",sidebar_position:1},a=void 0,s={unversionedId:"overview",id:"overview",title:"Overview",description:"Background",source:"@site/docs/crosstalk/overview.md",sourceDirName:".",slug:"/overview",permalink:"/crosstalk/overview",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/crosstalk/overview.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Overview",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/crosstalk/"},next:{title:"Understanding CrossTalk",permalink:"/crosstalk/understanding-crosstalk/"}},l={},c=[{value:"Background",id:"background",level:2},{value:"Motivation",id:"motivation",level:2},{value:"About CrossTalk",id:"about-crosstalk",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"background"},"Background"),(0,n.kt)("p",null,"Web 3.0 has witnessed an exponential surge in new users over the last few years. Every day, developers work to create more decentralized applications, protocols, and networks to solve user problems. However, despite these collective efforts, one key component to unlock the true potential of Web 3.0 has been missing for a long time - blockchain interoperability. "),(0,n.kt)("p",null,"Imagine a situation where you live in a city with no exits. You can move around the city and go to as many places as you want within the same city, but you can never venture out and explore new possibilities in other cities. Well, something similar happens in the case of isolated blockchain networks. You can explore the options of the blockchain network on which your DApp is deployed, but that\u2019s about it."),(0,n.kt)("h2",{id:"motivation"},"Motivation"),(0,n.kt)("p",null,"To unlock the true potential of a product, it should ideally have the functionality to operate on multiple blockchain networks, thereby gaining exposure to the entire Web 3.0 community and not being limited to the users of one ecosystem. However, building a cross-chain product needs a lot of development time and expertise in multiple programming languages. To combat this, there is a need for a tooling suite that simplifies the process of creating and deploying cross-chain DApps. This is where Router CrossTalk comes into the picture - simply plug into this framework and transform your existing single-chain or multi-chain DApps into cross-chain DApps!"),(0,n.kt)("h2",{id:"about-crosstalk"},"About CrossTalk"),(0,n.kt)("p",null,"Router's CrossTalk library is an extensible cross-chain framework that enables seamless state transitions across multiple chains. In simple terms, this library leverages Router's infrastructure to allow contracts on one chain to communicate with contracts deployed on some other chain. The library is structured in a way that it can be integrated seamlessly into your development environment to allow for cross-chain message passing without disturbing other parts of your product."))}p.isMDXComponent=!0}}]);