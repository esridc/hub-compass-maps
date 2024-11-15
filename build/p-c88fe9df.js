import{aH as e,aG as t,jb as i,jc as r,jd as s,je as n,r as o,p as a,b6 as l,g as u,b7 as c,E as p,T as h,G as y,q as f,_ as d,gZ as m,e as w,hx as g,jf as v,ay as b,hu as j,U as x,a8 as P,hv as F,hc as N,ac as O,v as M,bE as V,s as G,az as E,F as S,jg as A,hP as T,e0 as H,x as I,e4 as R,a3 as U,jh as $,ji as _}from"./p-aad64c9f.js";import{H as B}from"./p-63562f76.js";import{o as z}from"./p-25b1687c.js";import{n as L,p as Z}from"./p-b323b506.js";function q(i,r){const{dpi:s,gdbVersion:n,geometry:o,geometryPrecision:a,height:l,historicMoment:u,layerOption:c,mapExtent:p,maxAllowableOffset:h,returnFieldName:y,returnGeometry:f,returnUnformattedValues:d,returnZ:m,spatialReference:w,timeExtent:g,tolerance:v,width:b}=i.toJSON(),{dynamicLayers:j,layerDefs:x,layerIds:P}=J(i),F=null!=r?.geometry?r.geometry:null,N={historicMoment:u,geometryPrecision:a,maxAllowableOffset:h,returnFieldName:y,returnGeometry:f,returnUnformattedValues:d,returnZ:m,tolerance:v},O=F?.toJSON()||o;N.imageDisplay=`${b},${l},${s}`,n&&(N.gdbVersion=n),O&&(delete O.spatialReference,N.geometry=JSON.stringify(O),N.geometryType=e(O));const M=w??O?.spatialReference??p?.spatialReference;if(M&&(N.sr=t(M)),N.time=g?[g.start,g.end].join(","):null,p){const{xmin:e,ymin:t,xmax:i,ymax:r}=p;N.mapExtent=`${e},${t},${i},${r}`}return x&&(N.layerDefs=x),j&&!x&&(N.dynamicLayers=j),N.layers="popup"===c?"visible":c,P&&!j&&(N.layers+=`:${P.join(",")}`),N}function J(e){const{mapExtent:t,floors:n,width:o,sublayers:a,layerIds:l,layerOption:u,gdbVersion:c}=e,p=a?.find((e=>null!=e.layer))?.layer?.serviceSublayers,h="popup"===u,y={},f=i({extent:t,width:o,spatialReference:t?.spatialReference}),d=[],m=e=>{const t=0===f,i=0===e.minScale||f<=e.minScale,r=0===e.maxScale||f>=e.maxScale;if(e.visible&&(t||i&&r))if(e.sublayers)e.sublayers.forEach(m);else{if(!1===l?.includes(e.id)||h&&(!e.popupTemplate||!e.popupEnabled))return;d.unshift(e)}};if(a?.forEach(m),a&&!d.length)y.layerIds=[];else{const e=r(d,p,c),t=d.map((e=>{const t=s(n,e);return e.toExportImageJSON(t)}));if(e)y.dynamicLayers=JSON.stringify(t);else{if(a){let e=d.map((({id:e})=>e));l&&(e=e.filter((e=>l.includes(e)))),y.layerIds=e}else l?.length&&(y.layerIds=l);const e=k(n,d);if(null!=e&&e.length){const t={};for(const i of e)i.definitionExpression&&(t[i.id]=i.definitionExpression);Object.keys(t).length&&(y.layerDefs=JSON.stringify(t))}}}return y}function k(e,t){const i=!!e?.length,r=t.filter((e=>null!=e.definitionExpression||i&&null!=e.floorInfo));return r.length?r.map((t=>{const i=s(e,t),r=n(i,t.definitionExpression);return{id:t.id,definitionExpression:r??void 0}})):null}var D;let Q=D=class extends d{static from(e){return m(D,e)}constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(e,t){t.historicMoment=e&&e.getTime()}};o([a({type:Number,json:{write:!0}})],Q.prototype,"dpi",void 0),o([a()],Q.prototype,"floors",void 0),o([a({type:String,json:{write:!0}})],Q.prototype,"gdbVersion",void 0),o([a({types:l,json:{read:u,write:!0}})],Q.prototype,"geometry",void 0),o([a({type:Number,json:{write:!0}})],Q.prototype,"geometryPrecision",void 0),o([a({type:Number,json:{write:!0}})],Q.prototype,"height",void 0),o([a({type:Date})],Q.prototype,"historicMoment",void 0),o([c("historicMoment")],Q.prototype,"writeHistoricMoment",null),o([a({type:[Number],json:{write:!0}})],Q.prototype,"layerIds",void 0),o([a({type:["top","visible","all","popup"],json:{write:!0}})],Q.prototype,"layerOption",void 0),o([a({type:p,json:{write:!0}})],Q.prototype,"mapExtent",void 0),o([a({type:Number,json:{write:!0}})],Q.prototype,"maxAllowableOffset",void 0),o([a({type:Boolean,json:{write:!0}})],Q.prototype,"returnFieldName",void 0),o([a({type:Boolean,json:{write:!0}})],Q.prototype,"returnGeometry",void 0),o([a({type:Boolean,json:{write:!0}})],Q.prototype,"returnM",void 0),o([a({type:Boolean,json:{write:!0}})],Q.prototype,"returnUnformattedValues",void 0),o([a({type:Boolean,json:{write:!0}})],Q.prototype,"returnZ",void 0),o([a({type:h,json:{write:!0}})],Q.prototype,"spatialReference",void 0),o([a()],Q.prototype,"sublayers",void 0),o([a({type:y,json:{write:!0}})],Q.prototype,"timeExtent",void 0),o([a({type:Number,json:{write:!0}})],Q.prototype,"tolerance",void 0),o([a({type:Number,json:{write:!0}})],Q.prototype,"width",void 0),Q=D=o([f("esri.rest.support.IdentifyParameters")],Q);const W=Q;let C=class extends d{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return w.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:i,geometry:r}=e;i&&(t.attributes={...i}),null!=r&&(t.geometry=r.toJSON(),t.geometryType=v.toJSON(r.type))}};o([a({type:String,json:{write:!0}})],C.prototype,"displayFieldName",void 0),o([a({type:w})],C.prototype,"feature",void 0),o([g("feature",["attributes","geometry"])],C.prototype,"readFeature",null),o([c("feature")],C.prototype,"writeFeature",null),o([a({type:Number,json:{write:!0}})],C.prototype,"layerId",void 0),o([a({type:String,json:{write:!0}})],C.prototype,"layerName",void 0),C=o([f("esri.rest.support.IdentifyResult")],C);const K=C;async function X(e,t,i){const r=(t=ee(t)).geometry?[t.geometry]:[],s=P(e);return s.path+="/identify",b(r).then((e=>{const r=q(t,{geometry:e?.[0]}),n=j({...s.query,f:"json",...r}),o=F(n,i);return x(s.path,o).then(Y).then((e=>te(e,t.sublayers)))}))}function Y(e){const t=e.data;return t.results=t.results||[],t.exceededTransferLimit=Boolean(t.exceededTransferLimit),t.results=t.results.map((e=>K.fromJSON(e))),t}function ee(e){return e=W.from(e)}function te(e,t){if(!t?.length)return e;const i=new Map;function r(e){i.set(e.id,e),e.sublayers&&e.sublayers.forEach(r)}t.forEach(r);for(const t of e.results)t.feature.sourceLayer=i.get(t.layerId);return e}const ie=N();let re=null;function se(e,t){return"tile"===t.type||"map-image"===t.type}let ne=class extends O{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=M((async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch((()=>{})))}))}initialize(){const e=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch((()=>{}))),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([V((()=>this.highlightGraphics),"change",(t=>e(t.added)),{onListenerAdd:t=>e(t)})])}async fetchPopupFeaturesAtLocation(e,t){const{layerView:{layer:i,view:{scale:r}}}=this;if(!e)throw new G("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:i});const s=oe(i.sublayers,r,t);if(!s.length)return[];const n=await le(i,s);if(!((i.capabilities?.operations?.supportsIdentify??!0)&&i.version>=10.5)&&!n)throw new G("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:i});return n?this._fetchPopupFeaturesUsingQueries(e,s,t):this._fetchPopupFeaturesUsingIdentify(e,s,t)}clearHighlights(){this.highlightGraphics?.removeAll()}highlight(e){const t=this.highlightGraphics;if(!e||!t)return ie;let i=B(e)?[e]:E.isCollection(e)?e.toArray():Array.isArray(e)?e:[];if(i=i?.filter(S),0===(i?.length??0))return ie;for(const e of i){const{sourceLayer:t}=e;null!=t&&"geometryType"in t&&"point"===t.geometryType&&(e.visible=!1)}return t.addMany(i),N((()=>t.removeMany(i??[])))}async _updateHighlightedFeaturesSymbols(e){const{layerView:{view:t},highlightGraphics:i,highlightGraphicUpdated:r}=this;if(i&&r)for(const s of e){const e=s.sourceLayer&&"renderer"in s.sourceLayer&&s.sourceLayer.renderer;s.sourceLayer&&"geometryType"in s.sourceLayer&&"point"===s.sourceLayer.geometryType&&e&&"getSymbolAsync"in e&&e.getSymbolAsync(s).then((async n=>{n||=new A;let o=null;const a="visualVariables"in e?e.visualVariables?.find((e=>"size"===e.type)):void 0;a&&(re||(re=(await import("./p-aad64c9f.js").then((function(e){return e.sZ}))).getSize),o=re(a,s,{view:t.type,scale:t.scale,shape:"simple-marker"===n.type?n.style:null})),o||="width"in n&&"height"in n&&null!=n.width&&null!=n.height?Math.max(n.width,n.height):"size"in n?n.size:16,i.includes(s)&&(s.symbol=new A({style:"square",size:o,xoffset:"xoffset"in n?n.xoffset:0,yoffset:"yoffset"in n?n.yoffset:0}),r(s,"symbol"),s.visible=!0)}))}}async _updateHighlightedFeaturesGeometries(e){const{layerView:{layer:t,view:i},highlightGraphics:r,highlightGraphicUpdated:s}=this;if(this._highlightGeometriesResolution=e,!s||!r?.length||!t.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(e),o=new Map;for(const e of r)if(!this._featuresResolutions.has(e)||this._featuresResolutions.get(e)>n){const t=e.sourceLayer;T(o,t,(()=>new Map)).set(e.getObjectId(),e)}const a=Array.from(o,(([e,t])=>{const r=e.createQuery();return r.objectIds=[...t.keys()],r.outFields=[e.objectIdField],r.returnGeometry=!0,r.maxAllowableOffset=n,r.outSpatialReference=i.spatialReference,e.queryFeatures(r)})),l=await Promise.all(a);if(!this.destroyed)for(const{features:e}of l)for(const t of e){const e=t.sourceLayer,i=o.get(e).get(t.getObjectId());i&&r.includes(i)&&(i.geometry=t.geometry,s(i,"geometry"),this._featuresResolutions.set(i,n))}}_getTargetResolution(e){const t=e*H(this.layerView.view.spatialReference),i=t/16;return i<=10?0:e/t*i}async _fetchPopupFeaturesUsingIdentify(e,t,i){const r=await this._createIdentifyParameters(e,t,i);if(null==r)return[];const{results:s}=await X(this.layerView.layer.parsedUrl,r,i);return s.map((e=>e.feature))}async _createIdentifyParameters(e,t,i){const{floors:r,layer:s,timeExtent:n,view:{spatialReference:o,scale:a}}=this.layerView;if(!t.length)return null;await Promise.all(t.map((({sublayer:e})=>e.load(i).catch((()=>{})))));const l=Math.min(I("mapservice-popup-identify-max-tolerance"),s.allSublayers.reduce(((e,t)=>t.renderer?z({renderer:t.renderer,pointerType:i?.pointerType}):e),2)),u=this.createFetchPopupFeaturesQueryGeometry(e,l),c=R(a,o),h=Math.round(u.width/c),y=new p({xmin:u.center.x-c*h,ymin:u.center.y-c*h,xmax:u.center.x+c*h,ymax:u.center.y+c*h,spatialReference:u.spatialReference});return new W({floors:r,gdbVersion:"gdbVersion"in s?s.gdbVersion:void 0,geometry:e,height:h,layerOption:"popup",mapExtent:y,returnGeometry:!0,spatialReference:o,sublayers:s.sublayers,timeExtent:n,tolerance:l,width:h})}async _fetchPopupFeaturesUsingQueries(e,t,i){const{layerView:{floors:r,timeExtent:o}}=this,a=t.map((async({sublayer:t,popupTemplate:a})=>{if(await t.load(i).catch((()=>{})),t.capabilities&&!t.capabilities.operations.supportsQuery)return[];const l=t.createQuery(),u=z({renderer:t.renderer,pointerType:i?.pointerType}),c=this.createFetchPopupFeaturesQueryGeometry(e,u),p=new Set,[h]=await Promise.all([L(t,a),t.renderer?.collectRequiredFields(p,t.fieldsIndex)]);U(i),$(p,t.fieldsIndex,h);const y=Array.from(p).sort();l.geometry=c,l.outFields=y,l.timeExtent=o;const f=s(r,t);l.where=n(l.where,f);const d=this._getTargetResolution(c.width/u),m=await ae(a);U(i);const w="point"===t.geometryType||m&&m.arcadeUtils.hasGeometryOperations(a);w||(l.maxAllowableOffset=d);let{features:g}=await t.queryFeatures(l,i);const v=w?0:d;g=await ue(t,g,i);for(const e of g)this._featuresResolutions.set(e,v);return g}));return(await Promise.allSettled(a)).reduce(((e,t)=>"fulfilled"===t.status?[...e,...t.value]:e),[]).filter(S)}};function oe(e,t,i){const r=[];if(!e)return r;const s=e=>{const n=0===e.minScale||t<=e.minScale,o=0===e.maxScale||t>=e.maxScale;if(e.visible&&n&&o)if(e.sublayers)e.sublayers.forEach(s);else if(e.popupEnabled){const t=Z(e,{...i,defaultPopupTemplateEnabled:!1});null!=t&&r.unshift({sublayer:e,popupTemplate:t})}};return e.map(s),r}function ae(e){return e.expressionInfos?.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?_():Promise.resolve()}async function le(e,t){if(e.capabilities?.operations?.supportsQuery)return!0;try{return await Promise.any(t.map((({sublayer:e})=>e.load().then((()=>e.capabilities.operations.supportsQuery)))))}catch{return!1}}async function ue(e,t,i){const r=e.renderer;return r&&"defaultSymbol"in r&&!r.defaultSymbol&&(t=r.valueExpression?await Promise.all(t.map((e=>r.getSymbolAsync(e,i).then((t=>t?e:null))))).then((e=>e.filter((e=>null!=e)))):t.filter((e=>null!=r.getSymbol(e)))),t}o([a({constructOnly:!0})],ne.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),o([a({constructOnly:!0})],ne.prototype,"layerView",void 0),o([a({constructOnly:!0})],ne.prototype,"highlightGraphics",void 0),o([a({constructOnly:!0})],ne.prototype,"highlightGraphicUpdated",void 0),o([a({constructOnly:!0})],ne.prototype,"updatingHandles",void 0),ne=o([f("esri.views.layers.support.MapServiceLayerViewHelper")],ne);export{ne as R,se as _};
//# sourceMappingURL=p-c88fe9df.js.map