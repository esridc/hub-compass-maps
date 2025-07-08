import{bv as n,bu as a}from"./p-c9c64150.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const e=new WeakMap;const t=new WeakMap;function r(n){t.set(n,new Promise((a=>e.set(n,a))))}function s(n){e.get(n)()}function o(n){return t.get(n)}async function i(e){await o(e);if(!n()){return}a(e);return new Promise((n=>requestAnimationFrame((()=>n()))))}export{s as a,i as c,r as s};
//# sourceMappingURL=p-2d3854fe.js.map