import{$ as e,j as r}from"./p-2848d626.js";import{cK as a,cP as t,cN as s,d0 as o,cO as i}from"./p-028496e2.js";import{p}from"./p-0ad23f47.js";import"./p-055b59cb.js";import"./p-8be499c9.js";import"./p-ec296019.js";import"./p-16e782ba.js";import"./p-3b51db5e.js";import"./p-d5b8a8c9.js";const n="Group Layer",c="group-layer-save",m="group-layer-save-as",u=o.GROUP_LAYER_MAP;function y(e){return{isValid:"group"===e.type,errorMessage:"Layer.type should be 'group'"}}function l(e){return{isValid:t(e,u),errorMessage:`Layer.portalItem.typeKeywords should have '${u}'`}}function d(e,r){return{...a(e,"web-map",!0),initiator:r}}function f(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function b(e,r){r.title||=e.title,s(r,o.METADATA),i(r,u)}async function j(r,a){return e({layer:r,itemType:n,validateLayer:y,validateItem:l,createJSONContext:e=>d(e,r),createItemData:f,errorNamePrefix:c,saveResources:async(e,a)=>(r.sourceIsPortalItem||await e.removeAllResources().catch((()=>{})),p(r.resourceReferences,a))},a)}async function v(e,a,t){return r({layer:e,itemType:n,validateLayer:y,createJSONContext:r=>d(r,e),createItemData:f,errorNamePrefix:m,newItem:a,setItemProperties:b,saveResources:(r,a)=>p(e.resourceReferences,a)},t)}export{j as save,v as saveAs};
//# sourceMappingURL=p-30de8a50.js.map