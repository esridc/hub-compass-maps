import{cL as n,g7 as t,g8 as r,f5 as e,bt as a,cW as o,cX as i,cM as s,fl as f,cV as u,f8 as c,Y as p}from"./p-3013819f.js";import{a as l,b as m,r as w,a0 as h,d,G as y,aG as b,N as j,U as g,aH as T,E as x,aI as I,T as k,X as N,l as q,t as v,aJ as C,y as E}from"./p-2b5b515f.js";import{l as F}from"./p-f47e14f9.js";import{a as G,m as H,t as J,p as L,c as M}from"./p-1f2b7be7.js";import"./p-3b51db5e.js";import"./p-1cf43261.js";import"./p-7db7fa08.js";import"./p-4953a39e.js";import"./p-ec95a4fb.js";import"./p-1f0b604e.js";import"./p-347800d3.js";import"./p-94b15954.js";let P=null;async function Q(n){const s=p.geometryServiceUrl??"";if(!s){t()||await r();for(const t of n)t.container[t.indexer]=e(t.container[t.indexer],a.WGS84);return}const f=n.map((n=>n.container[n.indexer])),u=new o({geometries:f,outSpatialReference:a.WGS84}),c=await i(s,u);for(let t=0;t<c.length;t++){const r=n[t];r.container[r.indexer]=c[t]}}async function R(n,t){const r=new s({portal:n,id:t});return await r.load(),null===P&&(P=await import("./p-5cd0796e.js").then((function(n){return n.k}))),await P.fetchKnowledgeGraph(r.url)}function S(n,t,r,e,a){if(null===n)return null;if(y(n)||x(n))return n;if(N(n))return n.toJSDate();if(N(n))return n.toJSDate();if(q(n))return n.toStorageFormat();if(v(n))return n.toStorageString();if(C(n)){const o={};for(const i of n.keys())o[i]=S(n.field(i),t,r,e,a),o[i]instanceof f&&a.push({container:o,indexer:i});return o}if(g(n)){const o=n.map((n=>S(n,t,r,e,a)));for(let n=0;n<o.length;n++)o[n]instanceof f&&a.push({container:o,indexer:n});return o}if(T(n)){if(n.spatialReference.isWGS84)return n;if(n.spatialReference.isWebMercator&&t)return u(n);if(!t||!r)return n;throw new m(e,w.WrongSpatialReference,null)}}function V(n,t){if(!n)return n;if(n.spatialReference.isWGS84&&t.spatialReference.isWebMercator)return c(n);if(n.spatialReference.equals(t.spatialReference))return n;throw new m(t,w.WrongSpatialReference,null)}function W(n,t){if(!n)return null;const r={};for(const e in n)r[e]=X(n[e],t);return r}function X(n,t){return null===n?null:g(n)?n.map((n=>X(n,t))):n instanceof H?{graphTypeName:n.typeName,id:n.id,graphType:"entity",properties:W(n.properties,t)}:n instanceof J?{graphType:"object",properties:W(n.properties,t)}:n instanceof L?{graphTypeName:n.typeName,id:n.id,graphType:"relationship",originId:n.originId??null,destinationId:n.destinationId??null,properties:W(n.properties,t)}:n instanceof M?{graphType:"path",path:n.path?n.path.map((n=>X(n,t))):null}:T(n)?V(n,t):y(n)||x(n)||I(n)?n:null}function Y(t){"async"===t.mode&&(t.functions.knowledgegraphbyportalitem=function(r,e){return t.standardFunctionAsync(r,e,((t,a,o)=>{if(l(o,2,2,r,e),null===o[0])throw new m(r,w.PortalRequired,e);if(o[0]instanceof h){const t=d(o[1]);let e=null;e=r.services?.portal?r.services.portal:n.getDefault();return R(F(o[0],e),t)}if(!1===y(o[0]))throw new m(r,w.InvalidParameter,e);const i=d(o[0]);return R(r.services?.portal??n.getDefault(),i)}))},t.signatures.push({name:"knowledgegraphbyportalitem",min:2,max:2}),t.functions.querygraph=function(n,r){return t.standardFunctionAsync(n,r,(async(t,e,a)=>{l(a,2,4,n,r);const o=a[0];if(!b(o))throw new m(n,w.InvalidParameter,r);const i=a[1];if(!y(i))throw new m(n,w.InvalidParameter,r);null===P&&(P=await import("./p-5cd0796e.js").then((function(n){return n.k})));let s=null;const f=E(a[2],null);if(!(f instanceof j||null===f))throw new m(n,w.InvalidParameter,r);if(f){let t=[];s=S(f,!0,!1,n,t),t=t.filter((n=>!n.container[n.indexer].spatialReference.isWGS84)),t.length>0&&await Q(t)}const u=new G({openCypherQuery:i,bindParameters:s});(o?.serviceDefinition?.currentVersion??11.3)>11.2&&(u.outputSpatialReference=n.spatialReference);const c=(await P.executeQueryStreaming(o,u)).resultRowsStream.getReader(),p=[];try{for(;;){const{done:t,value:r}=await c.read();if(t)break;if(g(r))for(const t of r)p.push(X(t,n));else{const t=[];for(const e of r)t.push(X(r[e],n));p.push(t)}}}catch(n){throw n}return j.convertJsonToArcade(p,k(n),!1,!0)}))},t.signatures.push({name:"querygraph",min:2,max:4}))}export{Y as registerFunctions};
//# sourceMappingURL=p-73d9f9bd.js.map