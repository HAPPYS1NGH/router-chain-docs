"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[8746],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||s;return t?r.createElement(f,o(o({ref:n},d),{},{components:t})):r.createElement(f,o({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=p;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},44857:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const s={title:"Request a Quote",sidebar_position:1},o=void 0,i={unversionedId:"tools/voyager-js-sdk/performing-cross-chain-transaction/request-quote",id:"tools/voyager-js-sdk/performing-cross-chain-transaction/request-quote",title:"Request a Quote",description:"For transferring native assets, use the native token addresses given here.",source:"@site/docs/voyager/tools/voyager-js-sdk/performing-cross-chain-transaction/request-quote.md",sourceDirName:"tools/voyager-js-sdk/performing-cross-chain-transaction",slug:"/tools/voyager-js-sdk/performing-cross-chain-transaction/request-quote",permalink:"/voyager/tools/voyager-js-sdk/performing-cross-chain-transaction/request-quote",draft:!1,editUrl:"https://github.com/router-protocol/docs/tree/main/docs/voyager/tools/voyager-js-sdk/performing-cross-chain-transaction/request-quote.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Request a Quote",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Performing a cross-chain transaction",permalink:"/voyager/tools/voyager-js-sdk/performing-cross-chain-transaction/"},next:{title:"Check and Set Allowances",permalink:"/voyager/tools/voyager-js-sdk/performing-cross-chain-transaction/check-set-allowance"}},c={},l=[{value:"Sample Request and Response",id:"sample-request-and-response",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3}],d={toc:l};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"For transferring native assets, use the native token addresses given ",(0,a.kt)("a",{parentName:"p",href:"../../configurations/native-assets"},"here"),".")),(0,a.kt)("h2",{id:"sample-request-and-response"},"Sample Request and Response"),(0,a.kt)("p",null,"Getting a quote for transferring 10 USDC from Polygon to Fantom:"),(0,a.kt)("h3",{id:"request"},"Request"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { RouterProtocol } from "@routerprotocol/router-js-sdk"\nimport { ethers } from "ethers";\n\nconst main = async() => {\n\n// initialize a RouterProtocol instance\n\n// getting a quote for USDC transfer from Polygon to Fantom\nlet args = {\n    amount: (ethers.utils.parseUnits("10.0", 6)).toString(), // 10 USDC\n    dest_chain_id: 250, // Fantom\n    src_token_address: "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC on Polygon\n    dest_token_address: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75", // USDC on Fantom\n    user_address: "YOUR_WALLET_ADDRESS",\n    fee_token_address: "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4", // ROUTE on Polygon\n    slippage_tolerance: 1.0\n}\n\nconst quote = await routerprotocol.getQuote(args.amount, args.dest_chain_id, args.src_token_address, args.dest_token_address, args.user_address, args.fee_token_address, args.slippage_tolerance)\nconsole.log(quote)\n}\n\nmain()\n')),(0,a.kt)("h3",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"{\n  source: {\n    asset: {\n      decimals: 6,\n      symbol: 'USDC',\n      name: 'USDC',\n      chainId: 137,\n      address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',\n      resourceID: '0x00000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa8417400',\n      isMintable: false,\n      isWrappedAsset: false,\n      tokenInstance: [Object]\n    },\n    stableReserveAsset: {\n      decimals: 6,\n      symbol: 'USDC',\n      name: 'USDC',\n      chainId: 137,\n      address: '0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174',\n      resourceID: '0x00000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa8417400',\n      isMintable: false,\n      isWrappedAsset: false\n    },\n    tokenAmount: '10000000',\n    stableReserveAmount: '10000000',\n    path: [],\n    flags: [],\n    priceImpact: '0',\n    bridgeFeeAmount: '2300',\n    tokenPath: '',\n    dataTx: [ '0x00' ]\n  },\n  destination: {\n    asset: {\n      decimals: 6,\n      symbol: 'USDC',\n      name: 'USD Coin',\n      chainId: 250,\n      address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',\n      resourceID: '0x00000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa8417400',\n      isMintable: false,\n      isWrappedAsset: false,\n      tokenInstance: [Object]\n    },\n    stableReserveAsset: {\n      decimals: 6,\n      symbol: 'USDC',\n      name: 'USD Coin',\n      chainId: 250,\n      address: '0x04068DA6C83AFCFA0e13ba15A6696662335D5B75',\n      resourceID: '0x00000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa8417400',\n      isMintable: false,\n      isWrappedAsset: false\n    },\n    tokenAmount: '10000000',\n    stableReserveAmount: '10000000',\n    path: [],\n    flags: [],\n    priceImpact: '0.00',\n    tokenPath: 'USDC',\n    dataTx: [ '0x00' ]\n  }\n}\n")))}u.isMDXComponent=!0}}]);