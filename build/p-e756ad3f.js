import{d9 as e,a as r,he as a,hf as t,c_ as n,ha as s}from"./p-3013819f.js";import{s as l}from"./p-60807dd5.js";import{t as o}from"./p-6e6347a2.js";import{a as c,t as i}from"./p-1cc0bf3b.js";import"./p-3b51db5e.js";const u={FeatureLayer:!0,SceneLayer:!0};async function y(e){const r=e.properties?.customParameters,a=await v(e.url,r),t={...e.properties,url:e.url};if(a.layers.length+a.tables.length===0)return null!=a.layerId&&(t.layerId=a.layerId),null!=a.sourceJSON&&(t.sourceJSON=a.sourceJSON),new a.Constructor(t);const n=new((await import("./p-2672fbe7.js")).default)({title:a.parsedUrl.title});return await f(n,a,t),n}function m(e,r){return e?e.find((e=>e.id===r)):null}async function f(e,r,a){function t(e,r,t,n){const s={...a,layerId:r,sublayerTitleMode:"service-name"};return null!=e&&(s.url=e),null!=t&&(s.sourceJSON=t),n(s)}const n=r.sublayerConstructorProvider;for(const{id:a,serverUrl:s}of r.layers){const l=m(r.sublayerInfos,a),o=(l&&n?.(l))??r.Constructor,c=t(s,a,l,(e=>new o(e)));e.add(c)}if(r.tables.length){const a=await L("FeatureLayer");r.tables.forEach((({id:n,serverUrl:s})=>{const l=t(s,n,m(r.tableInfos,n),(e=>new a(e)));e.tables.add(l)}))}}async function v(a,t){let n=e(a);if(null==n&&(n=await w(a,t)),null==n)throw new r("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:a});const{serverType:l,sublayer:o}=n;let c;const y={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"},m="FeatureServer"===l,f="SceneServer"===l,v={parsedUrl:n,Constructor:null,layerId:m||f?o??void 0:void 0,layers:[],tables:[]};switch(l){case"MapServer":if(null!=o)c="FeatureLayer";else{c=await b(a,t)?"TileLayer":"MapImageLayer"}break;case"ImageServer":{const e=await i(a,{customParameters:t}),{tileInfo:r,cacheType:n}=e;c=r?"LERC"!==r?.format?.toUpperCase()||n&&"elevation"!==n.toLowerCase()?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const e=await i(n.url.path,{customParameters:t});if(c="SceneLayer",e){const r=e?.layers;if("Voxel"===e?.layerType)c="VoxelLayer";else if(r?.length){const e=r[0]?.layerType;null!=e&&null!=s[e]&&(c=s[e])}}break}case"3DTilesServer":throw new r("arcgis-layers:unsupported","fromUrl() not supported for 3DTiles layers");case"FeatureServer":if(c="FeatureLayer",null!=o){const e=await i(a,{customParameters:t});v.sourceJSON=e,"Oriented Imagery Layer"===e.type&&(c="OrientedImageryLayer")}break;default:c=y[l]}if(u[c]&&null==o){const e=await d(a,l,t);m&&(v.sublayerInfos=e.layerInfos,v.tableInfos=e.tableInfos);if(1!==e.layers.length+e.tables.length)v.layers=e.layers,v.tables=e.tables,m&&e.layerInfos?.length&&(v.sublayerConstructorProvider=await I(e.layerInfos));else if(m||f){const r=e.layerInfos?.[0]??e.tableInfos?.[0];v.layerId=e.layers[0]?.id??e.tables[0]?.id,v.sourceJSON=r,m&&"Oriented Imagery Layer"===r?.type&&(c="OrientedImageryLayer")}}return v.Constructor=await L(c),v}async function w(e,r){const s=await i(e,{customParameters:r});let l=null,o=null;const c=s.type;if("Feature Layer"===c||"Table"===c?(l="FeatureServer",o=s.id??null):"indexedVector"===c?l="VectorTileServer":s.hasOwnProperty("mapName")?l="MapServer":s.hasOwnProperty("bandCount")&&s.hasOwnProperty("pixelSizeX")?l="ImageServer":s.hasOwnProperty("maxRecordCount")&&s.hasOwnProperty("allowGeometryUpdates")?l="FeatureServer":s.hasOwnProperty("streamUrls")?l="StreamServer":S(s)?(l="SceneServer",o=s.id):s.hasOwnProperty("layers")&&S(s.layers?.[0])&&(l="SceneServer"),!l)return null;const u=null!=o?a(e):null;return{title:null!=u&&s.name||t(e),serverType:l,sublayer:o,url:{path:null!=u?u.serviceUrl:n(e).path}}}function S(e){return null!=e&&e.hasOwnProperty("store")&&e.hasOwnProperty("id")&&"number"==typeof e.id}async function d(e,r,a){let t,n,s=!1;switch(r){case"FeatureServer":{const r=await o(e,{customParameters:a});s=!!r.layersJSON,t=r.layersJSON||r.serviceJSON;break}case"SceneServer":{const r=await p(e,a);t=r.serviceInfo,n=r.tableServerUrl;break}default:t=await i(e,{customParameters:a})}const l=t?.layers,c=t?.tables;return{layers:l?.map((e=>({id:e.id}))).reverse()||[],tables:c?.map((e=>({serverUrl:n,id:e.id}))).reverse()||[],layerInfos:s?l:[],tableInfos:s?c:[]}}async function p(e,r){const a=await i(e,{customParameters:r}),t=a.layers?.[0];if(!t)return{serviceInfo:a};try{const{serverUrl:t}=await l(e),n=await i(t,{customParameters:r}).catch((()=>null));return n&&(a.tables=n.tables),{serviceInfo:a,tableServerUrl:t}}catch{return{serviceInfo:a}}}async function L(e){return(0,c[e])()}async function b(e,r){return(await i(e,{customParameters:r})).tileInfo}async function I(e){const r=[],a=[];if(e.forEach((e=>{const{type:t}=e;"Oriented Imagery Layer"===t?(r.push(t),a.push(L("OrientedImageryLayer"))):(r.push(t),a.push(L("FeatureLayer")))})),!a.length)return;const t=await Promise.all(a),n=new Map;return r.forEach(((e,r)=>{n.set(e,t[r])})),e=>n.get(e.type)}export{y as fromUrl};
//# sourceMappingURL=p-e756ad3f.js.map