import{U as e,aG as t,i5 as o,a8 as n,ae as r}from"./p-aad64c9f.js";import{t as s}from"./p-1062e8df.js";import"./p-2af77f97.js";import"./p-4e60756f.js";import"./p-21ce5524.js";import"./p-aff89b86.js";import"./p-da522976.js";import"./p-d492d39b.js";function a(e,o){const n=e.toJSON();return n.objectIds&&(n.objectIds=n.objectIds.join(",")),n.orderByFields&&(n.orderByFields=n.orderByFields.join(",")),n.outFields&&!o?.returnCountOnly?n.outFields.includes("*")?n.outFields="*":n.outFields=n.outFields.join(","):delete n.outFields,n.outSR&&(n.outSR=t(n.outSR)),n.dynamicDataSource&&(n.layer=JSON.stringify({source:n.dynamicDataSource}),delete n.dynamicDataSource),n}async function c(e,t,o){const n=await f(e,t,o),r=n.data,s=r.geometryType,a=r.spatialReference,c={};for(const e of r.relatedRecordGroups){const t={fields:void 0,objectIdFieldName:void 0,geometryType:s,spatialReference:a,hasZ:!!r.hasZ,hasM:!!r.hasM,features:e.relatedRecords};if(null!=e.objectId)c[e.objectId]=t;else for(const o of Object.keys(e))"relatedRecords"!==o&&(c[e[o]]=t)}return{...n,data:c}}async function i(e,t,o){const n=await f(e,t,o,{returnCountOnly:!0}),r=n.data,s={};for(const e of r.relatedRecordGroups)null!=e.objectId&&(s[e.objectId]=e.count);return{...n,data:s}}async function f(t,o,n={},r){const c=s({...t.query,f:"json",...r,...a(o,r)});return e(t.path+"/queryRelatedRecords",{...n,query:{...n.query,...c}})}async function u(e,t,s){t=o.from(t);const a=n(e);return c(a,t,s).then((e=>{const t=e.data,o={};return Object.keys(t).forEach((e=>o[e]=r.fromJSON(t[e]))),o}))}async function p(e,t,r){t=o.from(t);const s=n(e);return i(s,t,{...r}).then((e=>e.data))}export{u as executeRelationshipQuery,p as executeRelationshipQueryForCount};
//# sourceMappingURL=p-c04b22cd.js.map