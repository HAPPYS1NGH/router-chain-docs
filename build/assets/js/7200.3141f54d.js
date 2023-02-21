"use strict";(self.webpackChunkrouter_docs=self.webpackChunkrouter_docs||[]).push([[7200],{47200:(e,t,s)=>{s.r(t),s.d(t,{dyte_ended_screen:()=>i});var r=s(94196),a=s(61070),n=s(7147),o=s(79781),c=s(47502);s(72559),s(55752),s(41969);const i=class{constructor(e){(0,r.r)(this,e),this.config=c.d,this.icon=n.d,this.t=(0,a.u)(),this.message=""}connectedCallback(){this.statesChanged(this.states),(0,o.o)("roomLeftState",(()=>this.statesChanged()))}statesChanged(e){const t=e||o.s;if(null!=t)switch(null==t?void 0:t.roomLeftState){case"left":this.message="You left the meeting";break;case"kicked":this.message="You were removed from the meeting";break;case"disconnected":this.message="The call ended because the connection was lost.";break;case"rejected":this.message="Your request to join the meeting was denied.";break;case"breakout-rooms":this.message="Moving to a new room.";break;default:this.message="The meeting ended"}}render(){const e=this.states||o.s;return(0,r.h)(r.H,null,(0,r.h)("div",{class:"ctr",part:"container"},(0,r.h)("dyte-logo",{config:this.config,part:"logo"}),(0,r.h)("p",{part:"message"},this.t(this.message)),"disconnected"===(null==e?void 0:e.roomLeftState)&&(0,r.h)("span",{part:"description"},this.t("Please check your internet connection and try again."))))}static get watchers(){return{states:["statesChanged"]}}};i.style=":host{height:100%;width:100%;-webkit-user-select:none;-moz-user-select:none;user-select:none;font-family:var(--dyte-font-family, sans-serif);display:flex;flex-direction:column;align-items:center;justify-content:center}.ctr{display:flex;flex-direction:column;align-items:center}dyte-logo{margin-bottom:var(--dyte-space-8, 32px);height:var(--dyte-space-12, 48px)}.rejoin-button{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);padding-top:var(--dyte-space-6, 24px);padding-bottom:var(--dyte-space-6, 24px);padding-left:var(--dyte-space-16, 64px);padding-right:var(--dyte-space-16, 64px)}.rejoin-icon{margin-right:var(--dyte-space-2, 8px)}p{font-size:16px;border-radius:var(--dyte-border-radius-lg, 12px);--tw-bg-opacity:1;background-color:rgba(var(--dyte-colors-background-800, 30 30 30) / var(--tw-bg-opacity));padding-left:var(--dyte-space-8, 32px);padding-right:var(--dyte-space-8, 32px);padding-top:var(--dyte-space-4, 16px);padding-bottom:var(--dyte-space-4, 16px);color:rgb(var(--dyte-colors-text-1000, 255 255 255))}span{margin-top:var(--dyte-space-4, 16px);margin-bottom:var(--dyte-space-4, 16px);font-size:14px}"},61070:(e,t,s)=>{s.d(t,{g:()=>a,u:()=>n});var r=s(55752);const a=async e=>{if(null==e||"en"===e||""===e.trim())return r.d;try{const t=await fetch(`http://localhost:5000/${e}.json`);return t.ok?Object.assign({},r.d,await t.json()):r.d}catch(t){return r.d}},n=(e=r.d)=>t=>{var s;return null!==(s=e[t])&&void 0!==s?s:t}},79781:(e,t,s)=>{s.d(t,{o:()=>i,s:()=>c});var r=s(94196);const a=e=>!("isConnected"in e)||e.isConnected,n=((e,t)=>{let s;return(...r)=>{s&&clearTimeout(s),s=setTimeout((()=>{s=0,e(...r)}),t)}})((e=>{for(let t of e.keys())e.set(t,e.get(t).filter(a))}),2e3),o=(e,t)=>{const s=e.indexOf(t);s>=0&&(e[s]=e[e.length-1],e.length--)},{state:c,onChange:i}=((e,t)=>{const s=((e,t=((e,t)=>e!==t))=>{let s=new Map(Object.entries(null!=e?e:{}));const r={dispose:[],get:[],set:[],reset:[]},a=()=>{s=new Map(Object.entries(null!=e?e:{})),r.reset.forEach((e=>e()))},n=e=>(r.get.forEach((t=>t(e))),s.get(e)),c=(e,a)=>{const n=s.get(e);t(a,n,e)&&(s.set(e,a),r.set.forEach((t=>t(e,a,n))))},i="undefined"==typeof Proxy?{}:new Proxy(e,{get:(e,t)=>n(t),ownKeys:e=>Array.from(s.keys()),getOwnPropertyDescriptor:()=>({enumerable:!0,configurable:!0}),has:(e,t)=>s.has(t),set:(e,t,s)=>(c(t,s),!0)}),d=(e,t)=>(r[e].push(t),()=>{o(r[e],t)});return{state:i,get:n,set:c,on:d,onChange:(t,s)=>{const r=d("set",((e,r)=>{e===t&&s(r)})),a=d("reset",(()=>s(e[t])));return()=>{r(),a()}},use:(...e)=>{const t=e.reduce(((e,t)=>(t.set&&e.push(d("set",t.set)),t.get&&e.push(d("get",t.get)),t.reset&&e.push(d("reset",t.reset)),t.dispose&&e.push(d("dispose",t.dispose)),e)),[]);return()=>t.forEach((e=>e()))},dispose:()=>{r.dispose.forEach((e=>e())),a()},reset:a,forceUpdate:e=>{const t=s.get(e);r.set.forEach((s=>s(e,t,t)))}}})(e,t);return s.use((()=>{if("function"!=typeof r.a)return{};const e=new Map;return{dispose:()=>e.clear(),get:t=>{const s=(0,r.a)();s&&((e,t,s)=>{const r=e.get(t);r?r.includes(s)||r.push(s):e.set(t,[s])})(e,t,s)},set:t=>{const s=e.get(t);s&&e.set(t,s.filter(r.f)),n(e)},reset:()=>{e.forEach((e=>e.forEach(r.f))),n(e)}}})()),s})({})}}]);