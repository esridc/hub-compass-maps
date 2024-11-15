import{jo as e,n as t,hc as i,M as s,a3 as r,kU as n,kV as a,kW as o,kX as l,kY as h,s as u,P as c,U as d,k5 as p,r as v,p as y,hx as m,kZ as f,k_ as w,q as g,iP as b}from"./p-aad64c9f.js";import{p as k}from"./p-2adf4929.js";import"./p-2af77f97.js";import"./p-44e1cc72.js";import"./p-d8f50632.js";class T{constructor(e,t,i,s){this._hasNoDataValues=null,this._minValue=null,this._maxValue=null,"pixelData"in e?(this.values=e.pixelData,this.width=e.width,this.height=e.height,this.noDataValue=e.noDataValue):(this.values=e,this.width=t,this.height=i,this.noDataValue=s)}get hasNoDataValues(){if(null==this._hasNoDataValues){const e=this.noDataValue;this._hasNoDataValues=this.values.includes(e)}return this._hasNoDataValues}get minValue(){return this._ensureBounds(),this._minValue}get maxValue(){return this._ensureBounds(),this._maxValue}_ensureBounds(){if(null!=this._minValue)return;const{noDataValue:e,values:t}=this;let i=1/0,s=-1/0,r=!0;for(const n of t)n===e?this._hasNoDataValues=!0:(i=n<i?n:i,s=n>s?n:s,r=!1);r?(this._minValue=0,this._maxValue=0):(this._minValue=i,this._maxValue=s>-3e38?s:0)}}class j{constructor(i,s,r,n,a={}){this._mainMethod=s,this._transferLists=r,this._listeners=[],this._promise=e(i,{...a,schedule:n}).then((e=>{if(void 0===this._thread){this._thread=e,this._promise=null,a.hasInitialize&&this.broadcast({},"initialize");for(const e of this._listeners)this._connectListener(e)}else e.close()})),this._promise.catch((e=>t.getLogger("esri.core.workers.WorkerHandle").error(`Failed to initialize ${i} worker: ${e}`)))}on(e,t){const r={removed:!1,eventName:e,callback:t,threadHandle:null};return this._listeners.push(r),this._connectListener(r),i((()=>{r.removed=!0,s(this._listeners,r),this._thread&&null!=r.threadHandle&&r.threadHandle.remove()}))}destroy(){this._thread&&(this._thread.close(),this._thread=null),this._promise=null,this._listeners.length=0,this._transferLists={}}invoke(e,t){return this.invokeMethod(this._mainMethod,e,t)}invokeMethod(e,t,i){if(this._thread){const s=this._transferLists[e],r=s?s(t):[];return this._thread.invoke(e,t,{transferList:r,signal:i})}return this._promise?this._promise.then((()=>(r(i),this.invokeMethod(e,t,i)))):Promise.reject(null)}broadcast(e,t){return this._thread?Promise.all(this._thread.broadcast(t,e)).then((()=>{})):this._promise?this._promise.then((()=>this.broadcast(e,t))):Promise.reject()}get promise(){return this._promise}_connectListener(e){this._thread&&this._thread.on(e.eventName,e.callback).then((t=>{e.removed||(e.threadHandle=t)}))}}class S extends j{constructor(e=null){super("LercWorker","_decode",{_decode:e=>[e.buffer]},e,{strategy:"dedicated"}),this.schedule=e,this.ref=0}decode(e,t,i){return e&&0!==e.byteLength?this.invoke({buffer:e,options:t},i):Promise.resolve(null)}release(){--this.ref<=0&&(x.forEach(((e,t)=>{e===this&&x.delete(t)})),this.destroy())}}const x=new Map;function I(e=null){let t=x.get(e);return t||(null!=e?(t=new S((t=>e.immediate.schedule(t))),x.set(e,t)):(t=new S,x.set(null,t))),++t.ref,t}let V=class extends(k(n(a(o(l(b)))))){constructor(...e){super(...e),this.capabilities={operations:{supportsTileMap:!1}},this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=I()}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._lercDecoder=h(this._lercDecoder)}readCapabilities(e,t){const i=t.capabilities&&t.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!i)return{operations:{supportsTileMap:!1}};return{operations:{supportsTileMap:i.includes("tilemap")}}}readVersion(e,t){let i=t.currentVersion;return i||(i=9.3),i}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:e=>{if(e.typeKeywords)for(let t=0;t<e.typeKeywords.length;t++)if("elevation 3d layer"===e.typeKeywords[t].toLowerCase())return!0;throw new u("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(c).then((()=>this._fetchImageService(t)))),Promise.resolve(this)}fetchTile(e,t,i,s){const r=null!=(s=s||{signal:null}).signal?s.signal:s.signal=(new AbortController).signal,n={responseType:"array-buffer",signal:r},a={noDataValue:s.noDataValue,returnFileInfo:!0};return this.load().then((()=>this._fetchTileAvailability(e,t,i,s))).then((()=>d(this.getTileUrl(e,t,i),n))).then((e=>this._lercDecoder.decode(e.data,a,r))).then((e=>new T(e)))}getTileUrl(e,t,i){const s=!this.capabilities.operations.supportsTileMap&&this.supportsBlankTile,r=p({...this.parsedUrl.query,blankTile:!s&&null});return`${this.parsedUrl.path}/tile/${e}/${t}/${i}${r?"?"+r:""}`}async queryElevation(e,t){const{ElevationQuery:i}=await import("./p-347cd3c5.js");r(t);return(new i).query(this,e,t)}async createElevationSampler(e,t){const{ElevationQuery:i}=await import("./p-347cd3c5.js");r(t);return(new i).createSampler(this,e,t)}_fetchTileAvailability(e,t,i,s){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,t,i,s):Promise.resolve("unknown")}async _fetchImageService(e){if(this.sourceJSON)return this.sourceJSON;const t={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},i=await d(this.parsedUrl.path,t);i.ssl&&(this.url=this.url?.replace(/^http:/i,"https:")),this.sourceJSON=i.data,this.read(i.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile[$]}};v([y({readOnly:!0})],V.prototype,"capabilities",void 0),v([m("service","capabilities",["capabilities"])],V.prototype,"readCapabilities",null),v([y({json:{read:{source:"copyrightText"}}})],V.prototype,"copyright",void 0),v([y({readOnly:!0,type:f})],V.prototype,"heightModelInfo",void 0),v([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],V.prototype,"path",void 0),v([y({type:["show","hide"]})],V.prototype,"listMode",void 0),v([y({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],V.prototype,"minScale",void 0),v([y({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],V.prototype,"maxScale",void 0),v([y({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],V.prototype,"opacity",void 0),v([y({type:["ArcGISTiledElevationServiceLayer"]})],V.prototype,"operationalLayerType",void 0),v([y()],V.prototype,"sourceJSON",void 0),v([y({json:{read:!1},value:"elevation",readOnly:!0})],V.prototype,"type",void 0),v([y(w)],V.prototype,"url",void 0),v([y()],V.prototype,"version",void 0),v([m("version",["currentVersion"])],V.prototype,"readVersion",null),V=v([g("esri.layers.ElevationLayer")],V);const $=Symbol("default-fetch-tile");V.prototype.fetchTile[$]=!0;const E=V;export default E;
//# sourceMappingURL=p-93f8d3a8.js.map