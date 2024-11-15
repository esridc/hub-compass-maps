import{br as n,bt as t}from"./p-aad64c9f.js";import{g as s}from"./p-efdd0667.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const c={};async function o(n,s){const o=`${s}_${n}`;if(c[o]){return c[o]}c[o]=fetch(t(`./assets/${s}/t9n/messages_${n}.json`)).then((n=>{if(!n.ok){a()}return n.json()})).catch((()=>a()));return c[o]}function a(){throw new Error("could not fetch component message bundle")}function r(n){n.messages={...n.defaultMessages,...n.messageOverrides}}function e(){}async function f(n){n.defaultMessages=await i(n,n.effectiveLocale);r(n)}async function i(t,c){if(!n()){return{}}const{el:a}=t;const r=a.tagName.toLowerCase();const e=r.replace("calcite-","");return o(s(c,"t9n"),e)}async function u(n,t){n.defaultMessages=await i(n,t);r(n)}function m(n){n.onMessagesChange=p}function d(n){n.onMessagesChange=e}function p(){r(this)}export{m as c,d,f as s,u};
//# sourceMappingURL=p-021cd4d2.js.map