"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[2988],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17700:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="Interacting with RPC endpoints",s={unversionedId:"rpc/interact-rpc",id:"rpc/interact-rpc",title:"Interacting with RPC endpoints",description:"As shown on the RPC specifications, there are different endpoints to communicate with the Osmosis chain. Unlike the LCD rest api, the RPC endpoints provide genereic endpoints to communicate with the various modules available. For example the ABCI Query allows you the query different data from Osmosis.",source:"@site/docs/apis/rpc/interact-rpc.mdx",sourceDirName:"rpc",slug:"/rpc/interact-rpc",permalink:"/apis/rpc/interact-rpc",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/apis/rpc/interact-rpc.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RPC Gateway",permalink:"/apis/rpc/"},next:{title:"Rest Endpoints",permalink:"/apis/interact-rest"}},c={},l=[{value:"Querying the ABCI Query with Javascript via Telescope",id:"querying-the-abci-query-with-javascript-via-telescope",level:2},{value:"Setting up Telescope",id:"setting-up-telescope",level:2},{value:"Simple query example",id:"simple-query-example",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"interacting-with-rpc-endpoints"},"Interacting with RPC endpoints"),(0,o.kt)("p",null,"As shown on the RPC specifications, there are different endpoints to communicate with the Osmosis chain. Unlike the LCD rest api, the RPC endpoints provide genereic endpoints to communicate with the various modules available. For example the ",(0,o.kt)("a",{parentName:"p",href:"/api?v=RPC#/operations/abci_query"},"ABCI Query")," allows you the query different data from Osmosis."),(0,o.kt)("p",null,"For more information please read generating, ","[signing and boradcasting transactions.]"," ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.46/run-node/txs.html"},"https://docs.cosmos.network/v0.46/run-node/txs.html")," on the cosmos-sdk docs. "),(0,o.kt)("h2",{id:"querying-the-abci-query-with-javascript-via-telescope"},"Querying the ABCI Query with Javascript via Telescope"),(0,o.kt)("p",null,"If you are looking to query, sign and broadcast transactions using Javascript. Telescope and OsmoJS make this very easy. The following is a very simple example of you could acomplish this using Telescope."),(0,o.kt)("h2",{id:"setting-up-telescope"},"Setting up Telescope"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Install dependencies\nyarn install\n# Install Telescope\nnpm install -g @osmonauts/telescope\n# Select the chains you would like to interact with\ntelescope install\n# Generate types \nyarn codegen\n")),(0,o.kt)("h2",{id:"simple-query-example"},"Simple query example"),(0,o.kt)("p",null,"Edit src/index.ts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},'\nimport { osmosis } from "./codegen";\nconst { createRPCQueryClient } = osmosis.ClientFactory;\n\n\nasync function getBalance() {\n\n    const client = await createRPCQueryClient({ rpcEndpoint: "https://rpc.osmosis.zone" });\n    // // now you can query the cosmos modules\n    const balance = await client.cosmos.bank.v1beta1\n        .allBalances({ address: \'osmo1fl48vsnmsdzcv85q5d2q4z5ajdha8yu3aq6l09\' });\n}\n\nasync function getPools() {\n\n    const client = await createRPCQueryClient({ rpcEndpoint: "https://rpc.osmosis.zone" });\n    const pools = await client.osmosis.gamm.v1beta1.pools();\n    console.log(pools);\n}\n\ngetPools().catch(console.error);\ngetBalance().catch(console.error);\n\n')),(0,o.kt)("p",null,"Run the code and see the responses from the rpc endpoint. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn dev\n")),(0,o.kt)("p",null,"For extended details and documentations, see the documentation for Telescope."))}u.isMDXComponent=!0}}]);