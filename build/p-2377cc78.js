import{P as e,$ as r}from"./p-645faad3.js";import{o as a,hf as t,a as s,f as o,i}from"./p-aad64c9f.js";import{p as n}from"./p-9fbfb741.js";import"./p-f3c2956c.js";import"./p-7523d580.js";import"./p-cc72a972.js";import"./p-2af77f97.js";import"./p-11802a1b.js";const p="Group Layer",c="group-layer-save",m="group-layer-save-as",u=o.GROUP_LAYER_MAP;function f(e){return{isValid:"group"===e.type,errorMessage:"Layer.type should be 'group'"}}function y(e){return{isValid:t(e,u),errorMessage:`Layer.portalItem.typeKeywords should have '${u}'`}}function l(e,r){return{...a(e,"web-map",!0),initiator:r}}function d(e){const r=e.layerJSON;return Promise.resolve(r&&Object.keys(r).length?r:null)}async function v(e,r){r.title||=e.title,s(r,o.METADATA),i(r,u)}async function j(r,a){return e({layer:r,itemType:p,validateLayer:f,validateItem:y,createJSONContext:e=>l(e,r),createItemData:d,errorNamePrefix:c,saveResources:async(e,a)=>(r.sourceIsPortalItem||await e.removeAllResources().catch((()=>{})),n(r.resourceReferences,a))},a)}async function b(e,a,t){return r({layer:e,itemType:p,validateLayer:f,createJSONContext:r=>l(r,e),createItemData:d,errorNamePrefix:m,newItem:a,setItemProperties:v,saveResources:(r,a)=>n(e.resourceReferences,a)},t)}export{j as save,b as saveAs};
//# sourceMappingURL=p-2377cc78.js.map