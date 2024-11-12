import{dR as t,dS as i,dU as s,dV as n,dW as e}from"./p-028496e2.js";import{g as c,t as a}from"./p-49ae4733.js";import{c as o}from"./p-f148cf8f.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */const l={icon:"icon",flipRtl:"flip-rtl"};const r={};const h={};const d={s:16,m:24,l:32};async function p({icon:t,scale:i}){const s=d[i];const n=u(t);const c=n.charAt(n.length-1)==="F";const a=c?n.substring(0,n.length-1):n;const o=`${a}${s}${c?"F":""}`;if(r[o]){return r[o]}if(!h[o]){h[o]=fetch(e(`./assets/icon/${o}.json`)).then((t=>t.json())).catch((()=>{console.error(`"${o}" is not a valid calcite-ui-icon name`);return""}))}const l=await h[o];r[o]=l;return l}function u(t){const i=!isNaN(Number(t.charAt(0)));const s=t.split("-");const n=s.length>0;if(n){const i=/[a-z]/i;t=s.map(((t,s)=>t.replace(i,(function t(i,n){const e=s===0&&n===0;if(e){return i}return i.toUpperCase()})))).join("")}return i?`i${t}`:t}const f=":host{display:inline-flex;color:var(--calcite-ui-icon-color)}:host([scale=s]){inline-size:16px;block-size:16px;min-inline-size:16px;min-block-size:16px}:host([scale=m]){inline-size:24px;block-size:24px;min-inline-size:24px;min-block-size:24px}:host([scale=l]){inline-size:32px;block-size:32px;min-inline-size:32px;min-block-size:32px}.flip-rtl{transform:scaleX(-1)}.svg{display:block}:host([hidden]){display:none}[hidden]{display:none}";const m=t(class t extends i{constructor(){super();this.__registerHost();this.__attachShadow();this.icon=null;this.flipRtl=false;this.scale="m";this.textLabel=undefined;this.pathData=undefined;this.visible=false}connectedCallback(){this.waitUntilVisible((()=>{this.visible=true;this.loadIconPathData()}))}disconnectedCallback(){this.intersectionObserver?.disconnect();this.intersectionObserver=null}async componentWillLoad(){this.loadIconPathData()}render(){const{el:t,flipRtl:i,pathData:e,scale:o,textLabel:r}=this;const h=c(t);const p=d[o];const u=!!r;const f=[].concat(e||"");return s(n,{"aria-hidden":a(!u),"aria-label":u?r:null,role:u?"img":null},s("svg",{"aria-hidden":"true",class:{[l.flipRtl]:h==="rtl"&&i,svg:true},fill:"currentColor",height:"100%",viewBox:`0 0 ${p} ${p}`,width:"100%",xmlns:"http://www.w3.org/2000/svg"},f.map((t=>typeof t==="string"?s("path",{d:t}):s("path",{d:t.d,opacity:"opacity"in t?t.opacity:1})))))}async loadIconPathData(){const{icon:t,scale:i,visible:s}=this;if(!t||!s){return}const n=await p({icon:t,scale:i});if(t!==this.icon){return}this.pathData=n}waitUntilVisible(t){this.intersectionObserver=o("intersection",(i=>{i.forEach((i=>{if(i.isIntersecting){this.intersectionObserver.disconnect();this.intersectionObserver=null;t()}}))}),{rootMargin:"50px"});if(!this.intersectionObserver){t();return}this.intersectionObserver.observe(this.el)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{icon:["loadIconPathData"],scale:["loadIconPathData"]}}static get style(){return f}},[1,"calcite-icon",{icon:[513],flipRtl:[516,"flip-rtl"],scale:[513],textLabel:[1,"text-label"],pathData:[32],visible:[32]},undefined,{icon:["loadIconPathData"],scale:["loadIconPathData"]}]);function x(){if(typeof customElements==="undefined"){return}const t=["calcite-icon"];t.forEach((t=>{switch(t){case"calcite-icon":if(!customElements.get(t)){customElements.define(t,m)}break}}))}x();export{m as I,x as d};
//# sourceMappingURL=p-ef727936.js.map