import{bv as n,bx as t}from"./p-c9c64150.js";import{g as s}from"./p-d20fa6e2.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const c={};async function o(n,s){const o=`${s}_${n}`;if(c[o]){return c[o]}c[o]=fetch(t(`./assets/${s}/t9n/messages_${n}.json`)).then((n=>{if(!n.ok){a()}return n.json()})).catch((()=>a()));return c[o]}function a(){throw new Error("could not fetch component message bundle")}function e(n){n.messages={...n.defaultMessages,...n.messageOverrides}}function i(){}async function r(n){n.defaultMessages=await f(n,n.effectiveLocale);e(n)}async function f(t,c){if(!n()){return{}}const{el:a}=t;const e=a.tagName.toLowerCase();const i=e.replace("calcite-","");return o(s(c,"t9n"),i)}async function u(n,t){n.defaultMessages=await f(n,t);e(n)}function m(n){n.onMessagesChange=d}function p(n){n.onMessagesChange=i}function d(){e(this)}export{m as c,p as d,r as s,u};
//# sourceMappingURL=p-2f7e261c.js.map