import{gP as t,dQ as s,e5 as e,W as i,j8 as n,g as r,e as h,an as o,ao as a,ap as c,am as u,aj as l,j9 as f,gu as d,aR as p,aO as y,ja as g,jb as w,jc as m,c9 as b,d7 as _,f7 as v,aw as S,ds as F,b_ as j,cB as C,du as E,s as I,cH as O,jd as T,g0 as x,je as R,jf as M,g1 as P,jg as A,jh as $,hl as z,y as D,Z as N,bt as q,h2 as k,ah as H,cJ as J,b$ as Z}from"./p-3013819f.js";import{m as B}from"./p-aa275c19.js";import{$ as U}from"./p-37d27f4e.js";import{i as G,c as Q,g as V}from"./p-ec95a4fb.js";import{a as L}from"./p-a71453e3.js";import{x as W,f as K,c as X,S as Y}from"./p-71d25f62.js";import{E as tt}from"./p-bc7fdef1.js";import{o as st}from"./p-6dec395d.js";import"./p-3b51db5e.js";import"./p-8b1f6523.js";import"./p-94b15954.js";import"./p-4f73c6ea.js";import"./p-1f0b604e.js";import"./p-a20ea8a0.js";import"./p-1cf43261.js";import"./p-976040d8.js";import"./p-9a63ab56.js";import"./p-c1b8730f.js";import"./p-2779f4bc.js";import"./p-347800d3.js";import"./p-ad726e47.js";import"./p-9a9a9a0b.js";function et(t=!1,s){if(t){const{elevationInfo:t,alignPointsInFeatures:e}=s;return new rt(t,e)}return new it}class it{async alignCandidates(t,s,e){return t}notifyElevationSourceChange(){}}const nt=1024;class rt{constructor(s,e){this._elevationInfo=s,this._alignPointsInFeatures=e,this._alignmentsCache=new t(nt),this._cacheVersion=0}async alignCandidates(t,s,e){const i=this._elevationInfo;return null==i||"absolute-height"!==i.mode||i.featureExpressionInfo?this._alignComputedElevationCandidates(t,s,e):(this._alignAbsoluteElevationCandidates(t,s,i),t)}notifyElevationSourceChange(){this._alignmentsCache.clear(),this._cacheVersion++}_alignAbsoluteElevationCandidates(t,e,i){const{offset:r,unit:h}=i;if(null==r)return;const o=s(e),a=r*(n(h??"meters")/o);for(const s of t)switch(s.type){case"edge":s.start.z+=a,s.end.z+=a;continue;case"vertex":s.target.z+=a;continue}}async _alignComputedElevationCandidates(t,s,n){const r=new Map;for(const s of t)e(r,s.objectId,at).push(s);const[h,o,a]=this._prepareQuery(r,s),c=await this._alignPointsInFeatures(h,n);i(n);if(a!==this._cacheVersion)return this._alignComputedElevationCandidates(t,s,n);this._applyCacheAndResponse(h,c,o);const{drapedObjectIds:u,failedObjectIds:l}=c,f=[];for(const s of t){const{objectId:t}=s;u.has(t)&&"edge"===s.type&&(s.draped=!0),l.has(t)||f.push(s)}return f}_prepareQuery(t,s){const e=[],i=[];for(const[s,n]of t){const t=[];for(const e of n)this._addToQueriesOrCachedResult(s,e.target,t,i),"edge"===e.type&&(this._addToQueriesOrCachedResult(s,e.start,t,i),this._addToQueriesOrCachedResult(s,e.end,t,i));0!==t.length&&e.push({objectId:s,points:t})}return[{spatialReference:s.toJSON(),pointsInFeatures:e},i,this._cacheVersion]}_addToQueriesOrCachedResult(t,s,e,i){const n=ot(t,s),r=this._alignmentsCache.get(n);null==r?e.push(s):i.push(new ht(s,r))}_applyCacheAndResponse(t,{elevations:s,drapedObjectIds:e,failedObjectIds:i},n){for(const t of n)t.apply();let r=0;const h=this._alignmentsCache;for(const{objectId:n,points:o}of t.pointsInFeatures){if(i.has(n)){r+=o.length;continue}const t=!e.has(n);for(const e of o){const i=ot(n,e),o=s[r++];e.z=o,t&&h.put(i,o,1)}}}}class ht{constructor(t,s){this.point=t,this.z=s}apply(){this.point.z=this.z}}function ot(t,{x:s,y:e,z:i,spatialReference:n}){return`${t}-${s}-${e}-${i??0}}-wkid:${n?.wkid}`}function at(){return[]}class ct{filter(t,s){return s}notifyElevationSourceChange(){}}class ut{filter(t,s){const{point:e,distance:i}=t,{z:n}=e;if(!(null!=n))return s;if(0===s.length)return s;const r=gt(i),h=this._updateCandidatesTo3D(s,e,r).filter(lt);return h.sort(wt),h}_updateCandidatesTo3D(t,s,e){for(const i of t)switch(i.type){case"edge":dt(i,s,e);continue;case"vertex":yt(i,s,e);continue}return t}}function lt(t){return t.distance<=1}function ft(t=!1){return t?new ut:new ct}function dt(t,s,{x:e,y:i,z:n}){const{start:r,end:h,target:o}=t;t.draped||pt(o,s,r,h);const a=(s.x-o.x)/e,c=(s.y-o.y)/i,u=(s.z-o.z)/n;t.distance=Math.sqrt(a*a+c*c+u*u)}function pt(t,s,e,i){const n=i.x-e.x,r=i.y-e.y,h=i.z-e.z,o=n*n+r*r+h*h,a=(s.x-e.x)*n+(s.y-e.y)*r+h*(s.z-e.z),c=Math.min(1,Math.max(0,a/o)),u=e.x+n*c,l=e.y+r*c,f=e.z+h*c;t.x=u,t.y=l,t.z=f}function yt(t,s,{x:e,y:i,z:n}){const{target:r}=t,h=(s.x-r.x)/e,o=(s.y-r.y)/i,a=(s.z-r.z)/n,c=Math.sqrt(h*h+o*o+a*a);t.distance=c}function gt(t){return"number"==typeof t?{x:t,y:t,z:t}:t}function wt(t,s){return t.distance-s.distance}function mt(t=!1,s){return t?new vt(s):new bt}class bt{async fetch(){return[]}notifySymbologyChange(){}}const _t=1024;class vt{constructor(s){this._getSymbologyCandidates=s,this._candidatesCache=new t(_t),this._cacheVersion=0}async fetch(t,s){if(0===t.length)return[];const e=[],n=[],h=this._candidatesCache;for(const s of t){const t=St(s),i=h.get(t);if(i)for(const t of i)n.push(r(t));else e.push(s),h.put(t,[],1)}if(0===e.length)return n;const o=this._cacheVersion,{candidates:a,sourceCandidateIndices:c}=await this._getSymbologyCandidates(e,s);i(s);if(o!==this._cacheVersion)return this.fetch(t,s);const u=[],{length:l}=a;for(let t=0;t<l;++t){const s=a[t],i=St(e[c[t]]),n=h.get(i);n.push(s),h.put(i,n,n.length),u.push(r(s))}return n.concat(u)}notifySymbologyChange(){this._candidatesCache.clear(),this._cacheVersion++}}function St(t){switch(t.type){case"vertex":{const{objectId:s,target:e}=t,i=`${s}-vertex-${e.x}-${e.y}-${e.z??0}`;return h(i).toString()}case"edge":{const{objectId:s,start:e,end:i}=t,n=`${s}-edge-${e.x}-${e.y}-${e.z??0}-to-${i.x}-${i.y}-${i.z??0}`;return h(n).toString()}default:return""}}let Ft=class extends u{constructor(){super(...arguments),this.updating=!1,this._pending=[]}push(t,s){this._pending.push({promise:t,callback:s}),1===this._pending.length&&this._process()}_process(){if(!this._pending.length)return void(this.updating=!1);this.updating=!0;const t=this._pending[0];t.promise.then((s=>t.callback(s))).catch((()=>{})).then((()=>{this._pending.shift(),this._process()}))}};o([a()],Ft.prototype,"updating",void 0),Ft=o([c("esri.core.AsyncSequence")],Ft);class jt{constructor(t,s){this.data=t,this.resolution=s,this.state={type:Ct.CREATED},this.alive=!0}process(t){switch(this.state.type){case Ct.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case Ct.FETCH_COUNT:break;case Ct.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case Ct.FETCH_FEATURES:break;case Ct.FETCHED_FEATURES:this.state=this._goToDone(this.state,t)}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case Ct.CREATED:case Ct.FETCH_COUNT:return 0;case Ct.FETCHED_COUNT:return this.state.featureCount;case Ct.FETCH_FEATURES:return this.state.previous.featureCount;case Ct.FETCHED_FEATURES:return this.state.features.length;case Ct.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case Ct.CREATED:return"created";case Ct.FETCH_COUNT:return"fetch-count";case Ct.FETCHED_COUNT:return"fetched-count";case Ct.FETCH_FEATURES:return"fetch-features";case Ct.FETCHED_FEATURES:return"fetched-features";case Ct.DONE:return"done"}}_gotoFetchCount(t,s){return{type:Ct.FETCH_COUNT,previous:t,task:l((async t=>{const e=await f(s.fetchCount(this,t));this.state.type===Ct.FETCH_COUNT&&(this.state=this._gotoFetchedCount(this.state,e.ok?e.value:1/0))}))}}_gotoFetchedCount(t,s){return{type:Ct.FETCHED_COUNT,featureCount:s,previous:t}}_gotoFetchFeatures(t,s){return{type:Ct.FETCH_FEATURES,previous:t,task:l((async e=>{const i=await f(s.fetchFeatures(this,t.featureCount,e));this.state.type===Ct.FETCH_FEATURES&&(this.state=this._gotoFetchedFeatures(this.state,i.ok?i.value:[]))}))}}_gotoFetchedFeatures(t,s){return{type:Ct.FETCHED_FEATURES,previous:t,features:s}}_goToDone(t,s){return s.finish(this,t.features),{type:Ct.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:Ct.CREATED},t.type){case Ct.CREATED:case Ct.FETCHED_COUNT:case Ct.FETCHED_FEATURES:case Ct.DONE:break;case Ct.FETCH_COUNT:case Ct.FETCH_FEATURES:t.task.abort()}}intersects(t){return null==t||!this.data.extent||(d(t,Et),p(this.data.extent,Et))}}var Ct;!function(t){t[t.CREATED=0]="CREATED",t[t.FETCH_COUNT=1]="FETCH_COUNT",t[t.FETCHED_COUNT=2]="FETCHED_COUNT",t[t.FETCH_FEATURES=3]="FETCH_FEATURES",t[t.FETCHED_FEATURES=4]="FETCHED_FEATURES",t[t.DONE=5]="DONE"}(Ct||(Ct={}));const Et=y();let It=class extends u{get _minimumVerticesPerFeature(){switch(this.store?.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}get _mandatoryOutFields(){const t=new Set;return this.objectIdField&&t.add(this.objectIdField),this.globalIdField&&t.add(this.globalIdField),t}set outFields(t){const s=this._get("outFields"),e=g(t,this._mandatoryOutFields);w(e,s)||(this._set("outFields",e),m(e,s)||this.refresh())}get outFields(){return this._get("outFields")??this._mandatoryOutFields}set filter(t){const s=this._get("filter"),e=this._filterProperties(t);JSON.stringify(s)!==JSON.stringify(e)&&this._set("filter",e)}set customParameters(t){const s=this._get("customParameters");JSON.stringify(s)!==JSON.stringify(t)&&this._set("customParameters",t)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(t){const s=this._get("tileInfo");s!==t&&(null!=t&&null!=s&&JSON.stringify(t)===JSON.stringify(s)||(this._set("tileInfo",t),this.store.tileInfo=t))}set tileSize(t){this._get("tileSize")!==t&&this._set("tileSize",t)}get updating(){return this.updatingExcludingEdits||this._pendingEdits.updating}get updatingExcludingEdits(){return this._updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(t){super(t),this.suspended=!0,this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._updatingHandles=new b,this._pendingEdits=new Ft,this._pendingEditsAbortController=new AbortController}initialize(){this._initializeFetchExtent(),this._updatingHandles.add((()=>this._configuration),(()=>this.refresh())),this._updatingHandles.add((()=>this.tilesOfInterest),((t,s)=>{_(t,s,(({id:t},{id:s})=>t===s))||this._process()}),v),this.addHandles(S((()=>!this.suspended),(()=>this._process())))}destroy(){this._pendingTiles.forEach((t=>this._deletePendingTile(t))),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._pendingEditsAbortController.abort(),this._pendingEditsAbortController=null,this._updatingHandles.destroy()}refresh(){this.store.refresh(),this._pendingTiles.forEach((t=>this._deletePendingTile(t))),this._process()}applyEdits(t){this._pendingEdits.push(t,(async t=>{if(0===t.addedFeatures.length&&0===t.updatedFeatures.length&&0===t.deletedFeatures.length)return;for(const[,t]of this._pendingTiles)t.reset();const s={...t,deletedFeatures:t.deletedFeatures.map((({objectId:t,globalId:s})=>t&&-1!==t?t:this._lookupObjectIdByGlobalId(s)))};await this._updatingHandles.addPromise(this.store.processEdits(s,((t,s)=>this._queryFeaturesById(t,s)),this._pendingEditsAbortController.signal)),this._processPendingTiles()}))}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!F(this.url))return;const t=l((async t=>{try{const s=await W(this.url,new j({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:this.capabilities.query.supportsCacheHint??void 0}),{query:this._configuration.customParameters,signal:t});this.store.extent=C.fromJSON(s.data?.extent)}catch(t){E(t),I.getLogger(this).warn("Failed to fetch data extent",t)}}));this._updatingHandles.addPromise(t.promise.then((()=>this._process()))),this.addHandles(O((()=>t.abort())))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map((t=>t.debugInfo)),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,t]of this._pendingTiles)t.alive=!1}_createPendingTiles(){if(this.suspended)return;const t=this._collectMissingTilesInfo();if(this._setAvailability(null==t?1:t.coveredArea/t.fullArea),null!=t)for(const{data:s,resolution:e}of t.missingTiles){const t=this._pendingTiles.get(s.id);t?(t.resolution=e,t.alive=!0):this._createPendingTile(s,e)}}_collectMissingTilesInfo(){let t=null;for(let s=this.tilesOfInterest.length-1;s>=0;s--){const e=this.tilesOfInterest[s],i=this.store.process(e,((t,s)=>this._verifyTileComplexity(t,s)),this.outFields);null==t?t=i:t.prepend(i)}return t}_deletePendingTiles(){for(const[,t]of this._pendingTiles)t.alive||this._deletePendingTile(t)}_processPendingTiles(){const t={fetchCount:(t,s)=>this._fetchCount(t,s),fetchFeatures:(t,s,e)=>this._fetchFeatures(t,s,e),finish:(t,s)=>this._finishPendingTile(t,s),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(t))for(const[,s]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(s.data),s.resolution)&&this._updatingHandles.addPromise(s.process(t))}_verifyTileComplexity(t,s){return this._verifyVertexComplexity(t)&&this._verifyFeatureDensity(t,s)}_verifyVertexComplexity(t){return t*this._minimumVerticesPerFeature<xt}_verifyFeatureDensity(t,s){if(null==this.tileInfo)return!1;const e=this.tileSize*s;return t*(Rt/(e*e))<Mt}_ensureFetchAllCounts(t){let s=!0;for(const[,e]of this._pendingTiles)e.state.type<Ct.FETCHED_COUNT&&this._updatingHandles.addPromise(e.process(t)),e.state.type<=Ct.FETCH_COUNT&&(s=!1);return s}_finishPendingTile(t,s){this.store.add(t.data,s),this._deletePendingTile(t),this._updateAvailability()}_updateAvailability(){const t=this._collectMissingTilesInfo();this._setAvailability(null==t?1:t.coveredArea/t.fullArea)}_setAvailability(t){this._set("availability",t)}_createPendingTile(t,s){const e=new jt(t,s);return this._pendingTiles.set(t.id,e),e}_deletePendingTile(t){t.reset(),this._pendingTiles.delete(t.data.id)}async _fetchCount(t,s){return this.store.fetchCount(t.data,this.url,this._createCountQuery(t),{query:this.customParameters,timeout:Tt,signal:s})}async _fetchFeatures(t,s,e){let i=0;const n=[];let r=0,h=s;for(;;){const o=this._createFeaturesQuery(t),a=this._setPagingParameters(o,i,h),{features:c,exceededTransferLimit:u}=await this._queryFeatures(o,e);a&&(i+=o.num),r+=c.length;for(const t of c)n.push(t);if(h=s-r,!a||!u||h<=0)return n}}_filterProperties(t){return null==t?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:t.where||"1=1",timeExtent:t.timeExtent,gdbVersion:t.gdbVersion}}_lookupObjectIdByGlobalId(t){const s=this.globalIdField,e=this.objectIdField;if(null==s)throw new Error("Expected globalIdField to be defined");let i=null;if(this.store.featureStore.forEach((n=>{t===n.attributes[s]&&(i=n.objectId??n.attributes[e])})),null==i)throw new Error(`Expected to find a feature with globalId ${t}`);return i}_queryFeaturesById(t,s){const e=this._createFeaturesQuery();return e.objectIds=t,this._queryFeatures(e,s)}_queryFeatures(t,s){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(t,s):this._queryFeaturesJSON(t,s)}async _queryFeaturesPBF(t,s){const{sourceSpatialReference:e}=this,{data:i}=await K(this.url,t,new L({sourceSpatialReference:e}),{query:this._configuration.customParameters,timeout:Tt,signal:s});return G(i)}async _queryFeaturesJSON(t,s){const{sourceSpatialReference:e}=this,{data:i}=await X(this.url,t,e,{query:this._configuration.customParameters,timeout:Tt,signal:s});return Q(i,this.objectIdField)}_createCountQuery(t){const s=this._createBaseQuery(t);return this.capabilities.query.supportsCacheHint&&(s.cacheHint=!0),s}_createFeaturesQuery(t=null){const s=this._createBaseQuery(t),e=null!=t?.data?this.store.getAttributesForTile(t?.data?.id):null,i=g(T(this.outFields,e??new Set),this._mandatoryOutFields);return s.outFields=Array.from(i),s.returnGeometry=!0,null!=t&&(this.capabilities.query.supportsResultType?s.resultType="tile":this.capabilities.query.supportsCacheHint&&(s.cacheHint=!0)),s}_createBaseQuery(t){const s=new j({returnZ:this.hasZ,returnM:!1,geometry:null!=this.tileInfo&&null!=t?x(t.data.extent,this.tileInfo.spatialReference):void 0}),e=this._configuration.filter;return null!=e&&(s.where=e.where,s.gdbVersion=e.gdbVersion,s.timeExtent=e.timeExtent),s.outSpatialReference=this.spatialReference,s}_setPagingParameters(t,s,e){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:i,supportsCacheHint:n,tileMaxRecordCount:r,maxRecordCount:h,supportsResultType:o}=this.capabilities.query,a=i?j.MAX_MAX_RECORD_COUNT_FACTOR:1,c=a*((o||n)&&r?r:h||Ot);return t.start=s,i?(t.maxRecordCountFactor=Math.min(a,Math.ceil(e/c)),t.num=Math.min(e,t.maxRecordCountFactor*c)):t.num=Math.min(e,c),!0}};o([a({constructOnly:!0})],It.prototype,"url",void 0),o([a({constructOnly:!0})],It.prototype,"objectIdField",void 0),o([a({constructOnly:!0})],It.prototype,"globalIdField",void 0),o([a({constructOnly:!0})],It.prototype,"capabilities",void 0),o([a({constructOnly:!0})],It.prototype,"sourceSpatialReference",void 0),o([a({constructOnly:!0})],It.prototype,"spatialReference",void 0),o([a({constructOnly:!0})],It.prototype,"store",void 0),o([a({readOnly:!0})],It.prototype,"_minimumVerticesPerFeature",null),o([a()],It.prototype,"_mandatoryOutFields",null),o([a()],It.prototype,"outFields",null),o([a()],It.prototype,"suspended",void 0),o([a()],It.prototype,"filter",null),o([a()],It.prototype,"customParameters",null),o([a({readOnly:!0})],It.prototype,"_configuration",null),o([a()],It.prototype,"tileInfo",null),o([a()],It.prototype,"tileSize",null),o([a()],It.prototype,"tilesOfInterest",void 0),o([a({readOnly:!0})],It.prototype,"updating",null),o([a({readOnly:!0})],It.prototype,"updatingExcludingEdits",null),o([a({readOnly:!0})],It.prototype,"availability",void 0),o([a()],It.prototype,"hasZ",null),It=o([c("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],It);const Ot=2e3,Tt=6e5,xt=1e6,Rt=25,Mt=1;class Pt{constructor(){this._store=new Map,this._byteSize=0}set(t,s){this.delete(t),this._store.set(t,s),this._byteSize+=s.byteSize}delete(t){const s=this._store.get(t);return!!this._store.delete(t)&&(null!=s&&(this._byteSize-=s.byteSize),!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,s){for(const[e,i]of this._store){if(this._byteSize<=t)break;this.delete(e),s(i)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const s=this._store.get(t);s&&(this._store.delete(t),this._store.set(t,s))}}let At=class extends u{constructor(t){super(t),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*tt.MEGABYTES,this._tileBounds=new st,this._tiles=new Pt,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=y()}add(t,s){for(const t of s)this._referenceFeature(t.objectId);const e=this.featureStore.upsertMany(s),i=e.map((t=>new Set(Object.keys(t.attributes)))).reduce(((t,s)=>R(t,s)),new Set(Object.keys(e[0]?.attributes??[])));this._addTileStorage(t,new Set(e.map((t=>t.objectId))),$t(e),i),this._tiles.applyByteSizeLimit(this.maximumByteSize,(t=>this._removeTileStorage(t)))}getAttributesForTile(t){return t?this._tiles.get(t)?.attributeKeys:null}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(t,s,e){return this._processEditsDelete(t.deletedFeatures.concat(t.updatedFeatures)),this._processEditsRefetch(t.addedFeatures.concat(t.updatedFeatures),s,e)}_addTileStorage(t,s,e,i){const n=t.id;this._tiles.set(n,new Nt(t,s,e,i)),this._tileBounds.set(n,t.extent),this._tileFeatureCounts.set(n,s.size)}_remove({id:t}){const s=this._tiles.get(t);s&&this._removeTileStorage(s)}_removeTileStorage(t){const s=[];for(const e of t.objectIds)this._unreferenceFeature(e)===Zt.REMOVED&&s.push(e);this.featureStore.removeManyById(s);const e=t.data.id;this._tiles.delete(e),this._tileBounds.delete(e)}_processEditsDelete(t){this.featureStore.removeManyById(t);for(const[,s]of this._tiles){for(const e of t)s.objectIds.delete(e);this._tileFeatureCounts.set(s.data.id,s.objectIds.size)}for(const s of t)this._refCounts.delete(s)}async _processEditsRefetch(t,s,e){const i=(await s(t,e)).features,{hasZ:n,hasM:r}=this.featureStore;for(const t of i){const s=V(this._tmpBoundingRect,t.geometry,n,r);null!=s&&this._tileBounds.forEachInBounds(s,(s=>{const e=this._tiles.get(s);this.featureStore.add(t);const i=t.objectId;e.objectIds.has(i)||(e.objectIds.add(i),this._referenceFeature(i),this._tileFeatureCounts.set(e.data.id,e.objectIds.size))}))}}process(t,s=(()=>!0),e){if(null==this.tileInfo||!t.extent||null!=this.extent&&!p(d(this.extent,this._tmpBoundingRect),t.extent))return new kt(t);const i=this.getAttributesForTile(t.id);if(m(e,i))return new kt(t);const n=this._createTileTree(t,this.tileInfo);return this._simplify(n,s,null,0,1),this._collectMissingTiles(t,n,this.tileInfo,e)}get debugInfo(){return Array.from(this._tiles.values()).map((({data:t})=>({data:t,featureCount:this._tileFeatureCounts.get(t.id)||0})))}getFeatureCount(t){return this._tileFeatureCounts.get(t.id)??0}async fetchCount(t,s,e,i){const n=this._tileFeatureCounts.get(t.id);if(null!=n)return n;const r=await Y(s,e,i);return this._tileFeatureCounts.set(t.id,r.data.count),r.data.count}_createTileTree(t,s){const e=new qt(t.level,t.row,t.col);return s.updateTileInfo(e,P.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(t.extent,(i=>{const n=this._tiles.get(i)?.data;n&&this._tilesAreRelated(t,n)&&this._populateChildren(e,n,s,this._tileFeatureCounts.get(n.id)||0)})),e}_tilesAreRelated(t,s){if(!t||!s)return!1;if(t.level===s.level)return t.row===s.row&&t.col===s.col;const e=t.level<s.level,i=e?t:s,n=e?s:t,r=1<<n.level-i.level;return Math.floor(n.row/r)===i.row&&Math.floor(n.col/r)===i.col}_populateChildren(t,s,e,i){const n=s.level-t.level-1;if(n<0)return void(t.isLeaf=!0);const r=s.row>>n,h=s.col>>n,o=t.row<<1,a=h-(t.col<<1)+(r-o<<1),c=t.children[a];if(null!=c)this._populateChildren(c,s,e,i);else{const n=new qt(t.level+1,r,h);e.updateTileInfo(n,P.ExtrapolateOptions.POWER_OF_TWO),t.children[a]=n,this._populateChildren(n,s,e,i)}}_simplify(t,s,e,i,n){const r=n*n;if(t.isLeaf)return s(this.getFeatureCount(t),n)?0:(this._remove(t),null!=e&&(e.children[i]=null),r);const h=n/2,o=h*h;let a=0;for(let e=0;e<t.children.length;e++){const i=t.children[e];a+=null!=i?this._simplify(i,s,t,e,h):o}return 0===a?this._mergeChildren(t):1-a/r<Jt&&(this._purge(t),null!=e&&(e.children[i]=null),a=r),a}_mergeChildren(t){const s=new Set;let e,i=0;this._forEachLeaf(t,(t=>{const n=this._tiles.get(t.id);if(n){e=e?R(e,n.attributeKeys):new Set(n.attributeKeys),i+=n.byteSize;for(const t of n.objectIds)s.has(t)||(s.add(t),this._referenceFeature(t));this._remove(t)}})),this._addTileStorage(t,s,i,e??new Set),t.isLeaf=!0,t.children[0]=t.children[1]=t.children[2]=t.children[3]=null,this._tileFeatureCounts.set(t.id,s.size)}_forEachLeaf(t,s){for(const e of t.children)null!=e&&(e.isLeaf?s(e):this._forEachLeaf(e,s))}_purge(t){if(null!=t)if(t.isLeaf)this._remove(t);else for(let s=0;s<t.children.length;s++){const e=t.children[s];this._purge(e),t.children[s]=null}}_collectMissingTiles(t,s,e,i){const n=new Ht(e,t,this.extent);return this._collectMissingTilesRecurse(s,n,1,i),n.info}_collectMissingTilesRecurse(t,s,e,i){const n=this.getAttributesForTile(t.id),r=n&&!m(i,n);if(r&&s.addMissing(t.level,t.row,t.col,e),t.isLeaf)return;if(!t.hasChildren)return void(r||s.addMissing(t.level,t.row,t.col,e));const h=e/2;for(let e=0;e<t.children.length;e++){const n=t.children[e];null==n?s.addMissing(t.level+1,(t.row<<1)+((2&e)>>1),(t.col<<1)+(1&e),h):this._collectMissingTilesRecurse(n,s,h,i)}}_referenceFeature(t){const s=(this._refCounts.get(t)||0)+1;return this._refCounts.set(t,s),1===s?Zt.ADDED:Zt.UNCHANGED}_unreferenceFeature(t){const s=(this._refCounts.get(t)||0)-1;return 0===s?(this._refCounts.delete(t),Zt.REMOVED):(s>0&&this._refCounts.set(t,s),Zt.UNCHANGED)}get test(){return{tiles:Array.from(this._tiles.values()).map((t=>`${t.data.id}:[${Array.from(t.objectIds)}]`)),featureReferences:Array.from(this._refCounts.keys()).map((t=>`${t}:${this._refCounts.get(t)}`))}}};function $t(t){return t.reduce(((t,s)=>t+zt(s)),0)}function zt(t){return 32+Dt(t.geometry)+M(t.attributes)}function Dt(t){if(null==t)return 0;const s=A(t.lengths,4);return 32+A(t.coords,8)+s}o([a({constructOnly:!0})],At.prototype,"featureStore",void 0),o([a()],At.prototype,"tileInfo",void 0),o([a()],At.prototype,"extent",void 0),o([a()],At.prototype,"maximumByteSize",void 0),At=o([c("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],At);class Nt{constructor(t,s,e,i){this.data=t,this.objectIds=s,this.byteSize=e,this.attributeKeys=i}}class qt{constructor(t,s,e){this.level=t,this.row=s,this.col=e,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(null!=this.children[0]||null!=this.children[1]||null!=this.children[2]||null!=this.children[3])}}class kt{constructor(t,s=[]){this.missingTiles=s,this.fullArea=0,this.coveredArea=0,this.fullArea=$(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}}class Ht{constructor(t,s,e){this._tileInfo=t,this._extent=null,this.info=new kt(s),null!=e&&(this._extent=d(e))}addMissing(t,s,e,i){const n=new z(null,t,s,e);this._tileInfo.updateTileInfo(n,P.ExtrapolateOptions.POWER_OF_TWO),null==n.extent||null!=this._extent&&!p(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:i}),this.info.coveredArea-=$(n.extent))}}const Jt=.18751;var Zt;!function(t){t[t.ADDED=0]="ADDED",t[t.REMOVED=1]="REMOVED",t[t.UNCHANGED=2]="UNCHANGED"}(Zt||(Zt={}));let Bt=class extends D.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=N(),this._elevationAligner=et(),this._elevationFilter=ft(),this._symbologyCandidatesFetcher=mt(),this._updatingHandles=new b,this._editsUpdatingHandles=new b,this._pendingApplyEdits=new Map,this._alignPointsInFeatures=async(t,s)=>{const e={query:t},n=await this.remoteClient.invoke("alignElevation",e,{signal:s});return i(s),n},this._getSymbologyCandidates=async(t,s)=>{const e={candidates:t,spatialReference:this._spatialReference.toJSON()},n=await this.remoteClient.invoke("getSymbologyCandidates",e,{signal:s});return i(s),n}}get updating(){return this.updatingExcludingEdits||this._editsUpdatingHandles.updating||this._featureFetcher.updating}get updatingExcludingEdits(){return this._featureFetcher.updatingExcludingEdits||this._isInitializing||this._updatingHandles.updating}destroy(){this._featureFetcher?.destroy(),this._queryEngine?.destroy(),this._featureStore?.clear()}async setup(t){if(this.destroyed)return{result:{}};const{geometryType:s,objectIdField:e,timeInfo:i,fieldsIndex:n}=t.serviceInfo,{hasZ:r}=t,h=q.fromJSON(t.spatialReference);this._spatialReference=h,this._featureStore=new B({...t.serviceInfo,hasZ:r,hasM:!1}),this._queryEngine=new U({spatialReference:t.spatialReference,featureStore:this._featureStore,geometryType:s,fieldsIndex:n,hasZ:r,hasM:!1,objectIdField:e,timeInfo:i}),this._featureFetcher=new It({store:new At({featureStore:this._featureStore}),url:t.serviceInfo.url,objectIdField:t.serviceInfo.objectIdField,globalIdField:t.serviceInfo.globalIdField,capabilities:t.serviceInfo.capabilities,spatialReference:h,sourceSpatialReference:q.fromJSON(t.serviceInfo.spatialReference),customParameters:t.configuration.customParameters});const o="3d"===t.configuration.viewType;return this._elevationAligner=et(o,{elevationInfo:null!=t.elevationInfo?k.fromJSON(t.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures}),this._elevationFilter=ft(o),this.addHandles([H((()=>this._featureFetcher.availability),(t=>this.emit("notify-availability",{availability:t})),v),H((()=>this.updating),(()=>this._notifyUpdating()))]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(t.configuration)}async configure(t){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(t),Qt}async setSuspended(t,s){return await this._updatingHandles.addPromise(this._whenSetup.promise),i(s),this._featureFetcher.suspended=t,Qt}async updateOutFields(t,s){return await this._updatingHandles.addPromise(this._whenSetup.promise),i(s),this._featureFetcher.outFields=new Set(t??[]),Qt}async fetchCandidates(t,s){await this._whenSetup.promise,i(s);const e=Gt(t),n=s?.signal,r=await this._queryEngine.executeQueryForSnapping(e,n);i(n);const h=await this._elevationAligner.alignCandidates(r.candidates,q.fromJSON(t.point.spatialReference)??q.WGS84,n);i(n);const o=await this._symbologyCandidatesFetcher.fetch(h,n);i(n);const a=0===o.length?h:h.concat(o);return{result:{candidates:this._elevationFilter.filter(e,a)}}}async updateTiles(t,s){return await this._updatingHandles.addPromise(this._whenSetup.promise),i(s),this._featureFetcher.tileSize=t.tileSize,this._featureFetcher.tilesOfInterest=t.tiles,this._featureFetcher.tileInfo=null!=t.tileInfo?P.fromJSON(t.tileInfo):null,Qt}async refresh(t,s){return await this._updatingHandles.addPromise(this._whenSetup.promise),i(s),this._featureFetcher.refresh(),Qt}async whenNotUpdating(t,s){return await this._updatingHandles.addPromise(this._whenSetup.promise),i(s),await J((()=>!this.updatingExcludingEdits),s),i(s),Qt}async getDebugInfo(t,s){return i(s),{result:this._featureFetcher.debugInfo}}async beginApplyEdits(t,s){this._updatingHandles.addPromise(this._whenSetup.promise),i(s);const e=N();return this._pendingApplyEdits.set(t.id,e),this._featureFetcher.applyEdits(e.promise),this._editsUpdatingHandles.addPromise(e.promise),Qt}async endApplyEdits(t,s){const e=this._pendingApplyEdits.get(t.id);return e&&e.resolve(t.edits),i(s),Qt}async notifyElevationSourceChange(t,s){return this._elevationAligner.notifyElevationSourceChange(),Qt}async notifySymbologyChange(t,s){return this._symbologyCandidatesFetcher.notifySymbologyChange(),Qt}async setSymbologySnappingSupported(t){return this._symbologyCandidatesFetcher=mt(t,this._getSymbologyCandidates),Qt}_updateFeatureFetcherConfiguration(t){this._featureFetcher.filter=null!=t.filter?j.fromJSON(t.filter):null,this._featureFetcher.customParameters=t.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};o([a({readOnly:!0})],Bt.prototype,"updating",null),o([a({readOnly:!0})],Bt.prototype,"updatingExcludingEdits",null),o([a()],Bt.prototype,"_isInitializing",void 0),Bt=o([c("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],Bt);const Ut=Bt;function Gt(t){if(!t.filter)return{...t,query:{where:"1=1"}};const{distance:s,units:e,spatialRel:i,where:n,timeExtent:r,objectIds:h}=t.filter,o={geometry:t.filter.geometry?Z(t.filter.geometry):void 0,distance:s,units:e,spatialRel:i,timeExtent:r,objectIds:h,where:n??"1=1"};return{...t,query:o}}const Qt={result:{}};export default Ut;
//# sourceMappingURL=p-32a70fe7.js.map