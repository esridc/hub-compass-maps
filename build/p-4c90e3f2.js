import{a4 as t,a5 as s,a6 as r,a7 as e,x as p}from"./p-aad64c9f.js";import{t as o}from"./p-1317d6d9.js";import{s as u}from"./p-e33d4456.js";function n(e){return{renderer:{type:"simple",symbol:"esriGeometryPoint"===e||"esriGeometryMultipoint"===e?t:"esriGeometryPolyline"===e?s:r}}}const a=/^[_$a-zA-Z][_$a-zA-Z0-9]*$/;let i=1;function c(t,s){if(p("esri-csp-restrictions"))return()=>({[s]:null,...t});try{let r=`this${l(s)} = null;`;for(const s in t){r+=`this${l(s)} = ${JSON.stringify(t[s])};`}const e=new Function(`\n      return class AttributesClass$${i++} {\n        constructor() {\n          ${r};\n        }\n      }\n    `)();return()=>new e}catch(r){return()=>({[s]:null,...t})}}function l(t){return a.test(t)?`.${t}`:`["${t}"]`}function d(t={}){return[{name:"New Feature",description:"",prototype:{attributes:e(t)}}]}function y(t,s){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,isBranchVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:t},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:s,supportsDelete:s,supportsEditing:s,supportsChangeTracking:!1,supportsQuery:!0,supportsQueryBins:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:s,supportsExceedsLimitStatistics:!0,supportsAsyncConvert3D:!1},query:o,queryRelated:{supportsCount:!0,supportsOrderBy:!0,supportsPagination:!0,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},queryBins:u,editing:{supportsGeometryUpdate:s,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateWithoutM:!1,supportsUploadWithItemId:!1,supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsAsyncApplyEdits:!1,zDefault:void 0}}}export{c as a,d as l,n as u,y};
//# sourceMappingURL=p-4c90e3f2.js.map