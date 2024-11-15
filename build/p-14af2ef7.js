import{br as t}from"./p-aad64c9f.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const c="calcite-list";const n="calcite-list-item-group";const e="calcite-list-item";function s(t){return Array.from(t.assignedElements({flatten:true}).filter((t=>t.matches(c))))}function r(t){const s=t.assignedElements({flatten:true});const r=s.filter((t=>t?.matches(n))).map((t=>Array.from(t.querySelectorAll(e)))).reduce(((t,c)=>[...t,...c]),[]);const a=s.filter((t=>t?.matches(e)));const i=s.filter((t=>t?.matches(c))).map((t=>Array.from(t.querySelectorAll(e)))).reduce(((t,c)=>[...t,...c]),[]);return[...i,...r,...a]}function a(t){t.forEach((c=>{c.setPosition=t.indexOf(c)+1;c.setSize=t.length}))}function i(c,n=false){if(!t()){return 0}const e=n?"ancestor::calcite-list-item | ancestor::calcite-list-item-group":"ancestor::calcite-list-item";const s=document.evaluate(e,c,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);return s.snapshotLength}export{i as a,s as b,r as g,a as u};
//# sourceMappingURL=p-14af2ef7.js.map