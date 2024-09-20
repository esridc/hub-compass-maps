import{cJ as a,cK as e,cL as t,a as o,ch as n,cM as r,cN as i,cO as s,cP as c,cQ as l,cR as f,cS as u,cT as p,cU as w,cV as d,cW as m,bt as y,cX as _,cY as h,cZ as v,c_ as W,c$ as b,d0 as g}from"./p-3013819f.js";import{i as R}from"./p-055b59cb.js";import{p as O}from"./p-52a3c31d.js";import{i as P}from"./p-5f878e96.js";import{r as $,t as j}from"./p-897087fa.js";import"./p-3b51db5e.js";import"./p-8be499c9.js";import"./p-a76822de.js";const A=["NatGeo_World_Map","Ocean_Basemap","USA_Topo_Maps","World_Imagery","World_Street_Map","World_Terrain_Base","World_Topo_Map","World_Hillshade","Canvas/World_Light_Gray_Base","Canvas/World_Light_Gray_Reference","Canvas/World_Dark_Gray_Base","Canvas/World_Dark_Gray_Reference","Ocean/World_Ocean_Base","Ocean/World_Ocean_Reference","Reference/World_Boundaries_and_Places","Reference/World_Reference_Overlay","Reference/World_Transportation"].map((a=>a.toLowerCase()));async function M(t,o,n){n??={},k(t,o),await a((()=>!o.updatingFromView)),await o.load(),await T(o),await $(o),await C(t,o);const r=o.portalItem,i=e(r,"web-map",!0),s=o.write({},i);return await Promise.all(i.resources.pendingOperations),j(i,{errorName:`${t.name}:save`},n),await L(o,r),await ma(t,o,r,s,i),await Promise.all([o.updateItemThumbnail(),O(o.resourceReferences,i)]),r}async function D(t,o,n,r){r??={};const i=S(t,n);await a((()=>!o.updatingFromView)),await o.load(),B(t,o),await T(o),await $(o),await C(t,o);const s=e(i,"web-map",!0),c=o.write({},s);await Promise.all(s.resources.pendingOperations),j(s,{errorName:`${t.name}:save`},r),await q(o,i);const l=o.getThumbnailState();return await ya(t,o,i,c,s,r)&&(o.resourceReferences.portalItem=i),o.restoreThumbnailFromState(l),await Promise.all([o.updateItemThumbnail(),O(o.resourceReferences,s)]),i}function k(a,e){if(!e.portalItem)throw new o(`${a.name}:portal-item-not-set`,"Portal item to save to has not been set on the WebMap");P(e.portalItem),G(a,e.portalItem)}function G(a,e){if(e.type!==a.itemType)throw new o(`${a.name}:portal-item-wrong-type`,`Portal item needs to have type "${a.itemType}"`)}function B(a,e){const t=e.allLayers.filter((a=>"unsupported"===a.type&&"KnowledgeGraphLayer"===a.resourceInfo?.layerType));if(t.length)throw new o(`${a.name}:save-as-invalid-configuration`,`Failed to save a copy of ${a.name} to prevent persisting invalid configuration. See 'details.layers'`,{layers:t.toArray()})}async function C(e,t){if(!t.basemap?.baseLayers.length)throw new o(`${e.name}:save`,"Map does not have a valid basemap with a base layer.");let r=null;if(await a((()=>{const a=b(t.initialViewProperties,t.basemap);return r=a.spatialReference,!a.updating})),!n(r,t.initialViewProperties.spatialReference))throw new o(`${e.name}:save`,"The spatial reference of the basemap is not compatible with the one from the map.",{expected:t.initialViewProperties.spatialReference,actual:r})}function S(a,e){let o=r.from(e);return o.id&&(o=o.clone(),o.id=null),o.type||(o.type=a.itemType),o.portal||(o.portal=t.getDefault()),P(o),G(a,o),o}function T(a){const e=[];return a.basemap&&e.push(a.basemap.load()),a.ground&&e.push(a.ground.load()),Promise.allSettled(e).then((()=>{}))}async function L(a,e){e.extent=await fa(a.portalItem,a.initialViewProperties.viewpoint.targetGeometry),await z(a,e)}const N=g.JSAPI,U="CollectorDisabled",I="Collector",x="Data Editing",F="OfflineDisabled",K="Offline",V="Workforce Project",E="Workforce Worker",H="Workforce Dispatcher",J="Offline Map Areas",Q="FieldMapsDisabled",X=g.DEVELOPER_BASEMAP,Y="UtilityNetwork",Z="IPS";async function q(a,e){i(e,U),i(e,Q),i(e,g.METADATA),i(e,F),i(e,J),i(e,H),i(e,V),i(e,E),await L(a,e)}async function z(a,e){s(e,N),await aa(a),na(a,e),ra(a,e),ia(a,e),sa(a,e),ca(a,e),la(a,e),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((a,e,t)=>t.indexOf(a)===e)))}function aa(a){const e=ea(a).map((a=>a.load())).toArray();return Promise.allSettled(e).then((()=>{}))}function ea(a){return a.allLayers.concat(a.allTables)}function ta(a){return ea(a).some((a=>a.loaded&&l(a)&&a.capabilities.operations.supportsEditing&&a.editingEnabled&&("subtype-group"!==a.type||a.sublayers.some((a=>a.editingEnabled)))))}function oa(a){return ea(a).filter((a=>"group"!==a.type)).every((e=>e.loaded&&wa(a,e)))}function na(a,e){c(e,U)||c(e,V)||c(e,E)||c(e,H)||!ta(a)?i(e,I):s(e,I)}function ra(a,e){ta(a)?s(e,x):i(e,x)}function ia(a,e){!c(e,F)&&oa(a)?s(e,K):i(e,K)}function sa(a,e){w(a.basemap)?s(e,X):i(e,X)}function ca(a,e){a.utilityNetworks?.length?s(e,Y):i(e,Y)}function la(a,e){a.ipsInfo?s(e,Z):i(e,Z)}async function fa(a,e){const t=e.clone().normalize();let o;if(t.length>1)for(const a of t)o?a.width>o.width&&(o=a):o=a;else o=t[0];return ua(a,o)}async function ua(a,e){const t=e.spatialReference;if(t.isWGS84)return e.clone();if(t.isWebMercator)return d(e);const{getGeometryServiceURL:o}=await import("./p-7f617485.js"),n=await o(a),r=new m;r.geometries=[e],r.outSpatialReference=y.WGS84;return(await _(n,r))[0]}function pa(a){return f(a)||"map-notes"===a.type||"route"===a.type}function wa(a,e){return l(e)&&e.capabilities.operations.supportsSync||pa(e)&&!e.portalItem||("tile"===e.type||"vector-tile"===e.type)&&(e.capabilities.operations.supportsExportTiles||da(e)||p(e))&&e.spatialReference.equals(a.initialViewProperties.spatialReference)}function da(a){return"tile"===a.type&&(u(a.url)&&A.some((e=>a.url?.toLowerCase().includes("/"+e+"/"))))}async function ma(a,e,t,o,n){await t.update({data:o}),va(a,e,t,o,n)}async function ya(a,e,t,n,r,i){const s=e.portalItem,c={item:s,authenticated:!(!s?.id||!s.portal.user)},l=t.portal;await l.signIn();const{copyAllowed:f,itemReloaded:u}=await _a(c,l);if(c.authenticated||=u,!f)throw new o(`${a.name}:save-as-copy-not-allowed`,"Owner of this map does not allow others to save a copy");const p=await ha(t,c,n,i);return e.portalItem=t,va(a,e,t,n,r),p}async function _a(a,e){const{item:t,authenticated:o}=a;return t?.id&&t.typeKeywords?.includes("useOnly")?t.portal.portalHostname!==e.portalHostname?{copyAllowed:!1,itemReloaded:!1}:(o||await t.reload(),{copyAllowed:"admin"===t.itemControl||"update"===t.itemControl,itemReloaded:!0}):{copyAllowed:!0,itemReloaded:!1}}async function ha(a,e,t,o){const n=a.portal,{item:r}=e,{folder:i,copyAllResources:s}=o;let c=!1;if(s&&r?.id&&h(r.portal.url,n.url)&&parseInt(r.portal.currentVersion,10)>=2023){const{total:a}=await r.fetchResources();c=!!a}if(c){const e=await r.copy({copyResources:"all",folder:i});a.id=e.id,a.portal=e.portal;const o=a.toJSON();await a.load(),a.read(o),await a.update({data:t})}else await(n.user?.addItem({item:a,folder:i,data:t}));return c}function va(a,e,t,o,n){v.prototype.read.call(e,{version:o.version,authoringApp:o.authoringApp,authoringAppVersion:o.authoringAppVersion},{origin:a.origin,ignoreDefaults:!0,url:t.itemUrl?W(t.itemUrl):void 0}),R(n),e.resourceInfo=o}export{M as save,D as saveAs};
//# sourceMappingURL=p-58ecea73.js.map