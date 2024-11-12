import{dT as t}from"./p-028496e2.js";import{c as o}from"./p-f148cf8f.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */const f=new Set;let n;const c={childList:true};function s(t){if(!n){n=o("mutation",r)}n.observe(t.el,c)}function i(t){f.delete(t.el);r(n.takeRecords());n.disconnect();for(const[t]of f.entries()){n.observe(t,c)}}function r(o){o.forEach((({target:o})=>{t(o)}))}export{s as c,i as d};
//# sourceMappingURL=p-39364fed.js.map