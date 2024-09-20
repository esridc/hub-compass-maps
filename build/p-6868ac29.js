import{an as e,ao as i,fx as t,cB as s,kF as r,kv as a,bt as l,ap as n,lY as o,lZ as u,W as c,ld as d,d5 as y,U as p,d9 as h,e5 as f,ht as b,aW as m,dh as v,a as g,dA as w,l_ as S,aX as I,l$ as x,h as j,m0 as F,s as D,m1 as T,lQ as L,dK as P,gk as M,lg as O,kt as E,b_ as q,g as k,e8 as A,fM as V,kd as C,hD as N,m2 as B,fg as R,kP as $,fv as _,g2 as Q,kS as G,ku as J,dB as W,fw as X,e7 as z,m3 as H,lH as K,ft as U,gy as Y,ah as Z,f7 as ee,m4 as ie,m5 as te}from"./p-3013819f.js";import{x as se}from"./p-a6f8f87f.js";const re=b=>{let m=class extends b{constructor(){super(...arguments),this.capabilities=void 0,this.copyright=null,this.fullExtent=null,this.legendEnabled=!0,this.spatialReference=null,this.version=void 0,this._allLayersAndTablesMap=null}readCapabilities(e,i){const t=i.capabilities&&i.capabilities.split(",").map((e=>e.toLowerCase().trim()));if(!t)return{operations:{supportsExportMap:!1,supportsExportTiles:!1,supportsIdentify:!1,supportsQuery:!1,supportsTileMap:!1},exportMap:null,exportTiles:null};const s=this.type,r="tile"!==s&&!!i.supportsDynamicLayers,a=t.includes("query"),l=t.includes("map"),n=!!i.exportTilesAllowed,u=t.includes("tilemap"),c=t.includes("data"),d="tile"!==s&&(!i.tileInfo||r),y="tile"!==s&&(!i.tileInfo||r),p="tile"!==s,h=i.cimVersion&&o.parse(i.cimVersion),f=h?.since(1,4)??!1,b=h?.since(2,0)??!1;return{operations:{supportsExportMap:l,supportsExportTiles:n,supportsIdentify:a,supportsQuery:c,supportsTileMap:u},exportMap:l?{supportsArcadeExpressionForLabeling:f,supportsSublayersChanges:p,supportsDynamicLayers:r,supportsSublayerVisibility:d,supportsSublayerDefinitionExpression:y,supportsCIMSymbols:b}:null,exportTiles:n?{maxExportTilesCount:+i.maxExportTilesCount}:null}}readVersion(e,i){let t=i.currentVersion;return t||(t=i.hasOwnProperty("capabilities")||i.hasOwnProperty("tables")?10:i.hasOwnProperty("supportedImageFormatTypes")?9.31:9.3),t}async fetchRelatedService(e){const i=this.portalItem;if(!i||!u(i))return null;this._relatedFeatureServicePromise||(this._relatedFeatureServicePromise=i.fetchRelatedItems({relationshipType:"Service2Service",direction:"reverse"},e).then((e=>e.find((e=>"Feature Service"===e.type))??null),(()=>null)));const t=await this._relatedFeatureServicePromise;return c(e),t?{itemId:t.id,url:t.url}:null}async fetchSublayerInfo(e,i){const{source:t}=e;if(this?.portalItem&&"tile"===this.type&&"map-layer"===t?.type&&u(this.portalItem)&&e.originIdOf("url")<d.SERVICE){const s=await this.fetchRelatedService(i);s&&(e.url=y(s.url,t.mapLayerId.toString()),e.layerItemId=s.itemId)}const{url:s}=e;let r;if("data-layer"===t.type){r=(await p(s,{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey},...i})).data}else if(s&&e.originIdOf("url")>d.SERVICE)try{const e=await this._fetchAllLayersAndTablesFromService(s),i=h(s)?.sublayer??t.mapLayerId;r=e.get(i)}catch{}else{let s=e.id;"map-layer"===t?.type&&(s=t.mapLayerId);try{r=(await this.fetchAllLayersAndTables(i)).get(s)}catch{}}return r}async fetchAllLayersAndTables(e){return this._fetchAllLayersAndTablesFromService(this.parsedUrl?.path,e)}async _fetchAllLayersAndTablesFromService(e,i){await this.load(i),this._allLayersAndTablesMap||=new Map;const t=h(e),s=f(this._allLayersAndTablesMap,t?.url.path,(()=>p(y(t?.url.path,"/layers"),{responseType:"json",query:{f:"json",...this.customParameters,token:this.apiKey}}).then((e=>{const i=new Map;for(const t of e.data.layers)i.set(t.id,t);return{result:i}}),(e=>({error:e}))))),r=await s;if(c(i),"result"in r)return r.result;throw r.error}};return e([i({readOnly:!0})],m.prototype,"capabilities",void 0),e([t("service","capabilities",["capabilities","exportTilesAllowed","maxExportTilesCount","supportsDynamicLayers","tileInfo"])],m.prototype,"readCapabilities",null),e([i({json:{read:{source:"copyrightText"}}})],m.prototype,"copyright",void 0),e([i({type:s})],m.prototype,"fullExtent",void 0),e([i(r)],m.prototype,"id",void 0),e([i({type:Boolean,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend"}}})],m.prototype,"legendEnabled",void 0),e([i(a)],m.prototype,"popupEnabled",void 0),e([i({type:l})],m.prototype,"spatialReference",void 0),e([i({readOnly:!0})],m.prototype,"version",void 0),e([t("version",["currentVersion","capabilities","tables","supportedImageFormatTypes"])],m.prototype,"readVersion",null),m=e([n("esri.layers.mixins.ArcGISMapService")],m),m};var ae;function le(e){return null!=e&&"esriSMS"===e.type}function ne(e,i,t){const s=this.originIdOf(i)>=K(t.origin);return{ignoreOrigin:!0,allowNull:s,enabled:!!t&&("map-image"===t.layer?.type&&(t.writeSublayerStructure||s))}}function oe(e,i,t){return{enabled:!!t&&("tile"===t.layer?.type&&(t.origin&&this.originIdOf(i)>=K(t.origin)||this._isOverridden(i)))}}function ue(e,i,t){return{ignoreOrigin:!0,enabled:t&&t.writeSublayerStructure||!1}}function ce(e,i,t){return{ignoreOrigin:!0,enabled:!!t&&(t.writeSublayerStructure||this.originIdOf(i)>=K(t.origin))}}let de=0;const ye=new Set;ye.add("layer"),ye.add("parent"),ye.add("loaded"),ye.add("loadStatus"),ye.add("loadError"),ye.add("loadWarnings");let pe=ae=class extends(b(m(v))){constructor(e){super(e),this.capabilities=void 0,this.maxScaleRange={minScale:0,maxScale:0},this.fields=null,this.fullExtent=null,this.geometryType=null,this.globalIdField=null,this.legendEnabled=!0,this.objectIdField=null,this.parent=null,this.popupEnabled=!0,this.popupTemplate=null,this.sourceJSON=null,this.title=null,this.typeIdField=null,this.type="sublayer",this.types=null,this._lastParsedUrl=null}async load(e){return this.addResolvingPromise((async()=>{const{layer:i,url:t}=this;if(!i&&!t)throw new g("sublayer:missing-layer","Sublayer can't be loaded without being part of a layer",{sublayer:this});const s=i?await i.fetchSublayerInfo(this,e):(await p(t,{responseType:"json",query:{f:"json"},...e})).data;s&&(this.sourceJSON=s,this.read({layerDefinition:s},{origin:"service",layer:i,url:w(t)}))})()),this}readCapabilities(e,i){i=i.layerDefinition||i;const{operations:{supportsQuery:t,supportsQueryAttachments:s},query:{supportsFormatPBF:r},data:{supportsAttachment:a},queryRelated:l}=S(i,this.url);return{exportMap:{supportsModification:!!i.canModifyLayer},operations:{supportsQuery:t,supportsQueryAttachments:s},data:{supportsAttachment:a},query:{supportsFormatPBF:r},queryRelated:l}}get defaultPopupTemplate(){return this.createPopupTemplate()}set definitionExpression(e){this._setAndNotifyLayer("definitionExpression",e)}get effectiveScaleRange(){const{minScale:e,maxScale:i}=this;return{minScale:e,maxScale:i}}readMaxScaleRange(e,i){return{minScale:(i=i.layerDefinition||i).minScale??0,maxScale:i.maxScale??0}}get fieldsIndex(){return new I(this.fields||[])}set floorInfo(e){this._setAndNotifyLayer("floorInfo",e)}readGlobalIdFieldFromService(e,i){if((i=i.layerDefinition||i).globalIdField)return i.globalIdField;if(i.fields)for(const e of i.fields)if("esriFieldTypeGlobalID"===e.type)return e.name}get id(){const e=this._get("id");return e??de++}set id(e){this._get("id")!==e&&(!1!==this.layer?.capabilities?.exportMap?.supportsDynamicLayers?this._set("id",e):this._logLockedError("id","capability not available 'layer.capabilities.exportMap.supportsDynamicLayers'"))}set labelingInfo(e){this._setAndNotifyLayer("labelingInfo",e)}writeLabelingInfo(e,i,t,s){e&&e.length&&(i.layerDefinition={drawingInfo:{labelingInfo:e.map((e=>e.write({},s)))}})}set labelsVisible(e){this._setAndNotifyLayer("labelsVisible",e)}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((i=>i.layer=e))}set listMode(e){this._set("listMode",e)}set minScale(e){this._setAndNotifyLayer("minScale",e)}readMinScale(e,i){return i.minScale||i.layerDefinition?.minScale||0}set maxScale(e){this._setAndNotifyLayer("maxScale",e)}readMaxScale(e,i){return i.maxScale||i.layerDefinition?.maxScale||0}readObjectIdFieldFromService(e,i){if((i=i.layerDefinition||i).objectIdField)return i.objectIdField;if(i.fields)for(const e of i.fields)if("esriFieldTypeOID"===e.type)return e.name}set opacity(e){this._setAndNotifyLayer("opacity",e)}readOpacity(e,i){const t=i.layerDefinition;return 1-.01*((null!=t?.transparency?t.transparency:t?.drawingInfo?.transparency)??0)}writeOpacity(e,i,t,s){i.layerDefinition={drawingInfo:{transparency:100-100*e}}}writeParent(e,i){this.parent&&this.parent!==this.layer?i.parentLayerId=x(this.parent.id):i.parentLayerId=-1}get queryTask(){if(!this.layer)return null;const{spatialReference:e}=this.layer,i="gdbVersion"in this.layer?this.layer.gdbVersion:void 0,{capabilities:t,fieldsIndex:s}=this,r=j("featurelayer-pbf")&&t?.query.supportsFormatPBF,a=t?.operations?.supportsQueryAttachments??!1;return new se({url:this.url,pbfSupported:r,fieldsIndex:s,gdbVersion:i,sourceSpatialReference:e,queryAttachmentsSupported:a})}set renderer(e){if(e)for(const i of e.getSymbols())if(F(i)){D.getLogger(this).warn("Sublayer renderer should use 2D symbols");break}this._setAndNotifyLayer("renderer",e)}get source(){return this._get("source")||new T({mapLayerId:this.id})}set source(e){this._setAndNotifyLayer("source",e)}set sublayers(e){this._handleSublayersChange(e,this._get("sublayers")),this._set("sublayers",e)}castSublayers(e){return L(P.ofType(ae),e)}writeSublayers(e,i,t){this.sublayers?.length&&(i[t]=this.sublayers.map((e=>e.id)).toArray().reverse())}readTitle(e,i){return i.layerDefinition?.name??i.name}readTypeIdField(e,i){let t=(i=i.layerDefinition||i).typeIdField;if(t&&i.fields){t=t.toLowerCase();const e=i.fields.find((e=>e.name.toLowerCase()===t));e&&(t=e.name)}return t}get url(){const e=this.layer?.parsedUrl??this._lastParsedUrl,i=this.source;if(!e)return null;if(this._lastParsedUrl=e,"map-layer"===i?.type)return`${e.path}/${i.mapLayerId}`;const t={layer:JSON.stringify({source:this.source})};return`${e.path}/dynamicLayer?${M(t)}`}set url(e){this._overrideIfSome("url",e)}set visible(e){this._setAndNotifyLayer("visible",e)}writeVisible(e,i,t,s){i[t]=this.getAtOrigin("defaultVisibility","service")||e}clone(){const{store:e}=O(this),i=new ae;return O(i).store=e.clone(ye),this.commitProperty("url"),i._lastParsedUrl=this._lastParsedUrl,i}createPopupTemplate(e){return E(this,e)}createQuery(){return new q({returnGeometry:!0,where:this.definitionExpression||"1=1"})}async createFeatureLayer(){if(this.hasOwnProperty("sublayers"))return null;const e=(await import("./p-3013819f.js").then((function(e){return e.o6}))).default,{layer:i,url:t}=this;let s;if(t&&this.originIdOf("url")>d.SERVICE)s=new e({url:t});else{if(!i?.parsedUrl)throw new g("createFeatureLayer:missing-information","Cannot create a FeatureLayer without a url or a parent layer");{const t=i.parsedUrl;s=new e({url:t.path}),t&&this.source&&("map-layer"===this.source.type?s.layerId=this.source.mapLayerId:s.dynamicDataSource=this.source)}}return null!=i?.refreshInterval&&(s.refreshInterval=i.refreshInterval),this.definitionExpression&&(s.definitionExpression=this.definitionExpression),this.floorInfo&&(s.floorInfo=k(this.floorInfo)),this.originIdOf("labelingInfo")>d.SERVICE&&(s.labelingInfo=k(this.labelingInfo)),this.originIdOf("labelsVisible")>d.DEFAULTS&&(s.labelsVisible=this.labelsVisible),this.originIdOf("legendEnabled")>d.DEFAULTS&&(s.legendEnabled=this.legendEnabled),this.originIdOf("visible")>d.DEFAULTS&&(s.visible=this.visible),this.originIdOf("minScale")>d.DEFAULTS&&(s.minScale=this.minScale),this.originIdOf("maxScale")>d.DEFAULTS&&(s.maxScale=this.maxScale),this.originIdOf("opacity")>d.DEFAULTS&&(s.opacity=this.opacity),this.originIdOf("popupTemplate")>d.DEFAULTS&&(s.popupTemplate=k(this.popupTemplate)),this.originIdOf("renderer")>d.SERVICE&&(s.renderer=k(this.renderer)),"data-layer"===this.source?.type&&(s.dynamicDataSource=this.source.clone()),this.originIdOf("title")>d.DEFAULTS&&(s.title=this.title),"map-image"===i?.type&&i.originIdOf("customParameters")>d.DEFAULTS&&(s.customParameters=i.customParameters),"tile"===i?.type&&i.originIdOf("customParameters")>d.DEFAULTS&&(s.customParameters=i.customParameters),s}getField(e){return this.fieldsIndex.get(e)}getFeatureType(e){const{typeIdField:i,types:t}=this;if(!i||!e)return null;const s=e.attributes?e.attributes[i]:void 0;if(null==s)return null;let r=null;return t?.some((e=>{const{id:i}=e;return null!=i&&(i.toString()===s.toString()&&(r=e),!!r)})),r}getFieldDomain(e,i){const t=i?.feature,s=this.getFeatureType(t);if(s){const i=s.domains&&s.domains[e];if(i&&"inherited"!==i.type)return i}return this._getLayerDomain(e)}async queryAttachments(e,i){await this.load(),e=A.from(e);const t=this.capabilities;if(!t?.data?.supportsAttachment)throw new g("queryAttachments:not-supported","this layer doesn't support attachments");const{attachmentTypes:s,objectIds:r,globalIds:a,num:l,size:n,start:o,where:u}=e;if(!t?.operations?.supportsQueryAttachments){if(s?.length>0||a?.length>0||n?.length>0||l||o||u)throw new g("queryAttachments:option-not-supported","when 'capabilities.operations.supportsQueryAttachments' is false, only objectIds is supported",e)}if(!(r?.length||a?.length||u))throw new g("queryAttachments:invalid-query","'objectIds', 'globalIds', or 'where' are required to perform attachment query",e);return this.queryTask.executeAttachmentQuery(e,i)}async queryFeatures(e=this.createQuery(),i){if(await this.load(),!this.capabilities.operations.supportsQuery)throw new g("queryFeatures:not-supported","this layer doesn't support queries.");if(!this.url)throw new g("queryFeatures:not-supported","this layer has no url.");const t=await this.queryTask.execute(e,{...i,query:{...this.layer?.customParameters,token:this.layer?.apiKey}});if(t?.features)for(const e of t.features)e.sourceLayer=this;return t}toExportImageJSON(e){const i={id:this.id,source:this.source?.toJSON()||{mapLayerId:this.id,type:"mapLayer"}},t=U(e,this.definitionExpression);null!=t&&(i.definitionExpression=t);const s=["renderer","labelingInfo","opacity","labelsVisible"].reduce(((e,i)=>(e[i]=this.originIdOf(i),e)),{}),r=Object.keys(s).some((e=>s[e]>d.SERVICE));if(r){const e=i.drawingInfo={};if(s.renderer>d.SERVICE&&(e.renderer=this.renderer?this.renderer.toJSON():null),s.labelsVisible>d.SERVICE&&(e.showLabels=this.labelsVisible),this.labelsVisible&&s.labelingInfo>d.SERVICE)if(this.labelingInfo){!this.loaded&&this.labelingInfo?.some((e=>!e.labelPlacement))&&D.getLogger(this).warnOnce(`A Sublayer (title: ${this.title}, id: ${this.id}) has an undefined 'labelPlacement' and so labels cannot be displayed. Either define a valid 'labelPlacement' or call Sublayer.load() to use a default value based on geometry type.`,{sublayer:this});let i=this.labelingInfo;null!=this.geometryType&&(i=V(this.labelingInfo,C.toJSON(this.geometryType))),e.showLabels=!0,e.labelingInfo=i.filter((e=>e.labelPlacement)).map((e=>e.toJSON({origin:"service",layer:this.layer})))}else e.showLabels=!1;s.opacity>d.SERVICE&&(e.transparency=100-100*this.opacity),this._assignDefaultSymbolColors(e.renderer)}return i}_assignDefaultSymbolColors(e){this._forEachSimpleMarkerSymbols(e,(e=>{e.color||"esriSMSX"!==e.style&&"esriSMSCross"!==e.style||(e.outline?.color?e.color=e.outline.color:e.color=[0,0,0,0])}))}_forEachSimpleMarkerSymbols(e,i){if(e){const t=("uniqueValueInfos"in e?e.uniqueValueInfos:"classBreakInfos"in e?e.classBreakInfos:null)??[];for(const e of t)le(e.symbol)&&i(e.symbol);"symbol"in e&&le(e.symbol)&&i(e.symbol),"defaultSymbol"in e&&le(e.defaultSymbol)&&i(e.defaultSymbol)}}_setAndNotifyLayer(e,i){const t=this.layer,s=this._get(e);let r,a;switch(e){case"definitionExpression":case"floorInfo":r="supportsSublayerDefinitionExpression";break;case"minScale":case"maxScale":case"visible":r="supportsSublayerVisibility";break;case"labelingInfo":case"labelsVisible":case"opacity":case"renderer":case"source":r="supportsDynamicLayers",a="supportsModification"}const l=O(this).getDefaultOrigin();if("service"!==l){if(r&&!1===this.layer?.capabilities?.exportMap?.[r])return void this._logLockedError(e,`capability not available 'layer.capabilities.exportMap.${r}'`);if(a&&!1===this.capabilities?.exportMap[a])return void this._logLockedError(e,`capability not available 'capabilities.exportMap.${a}'`)}"source"!==e||"not-loaded"===this.loadStatus?(this._set(e,i),"service"!==l&&s!==i&&t&&t.emit&&t.emit("sublayer-update",{propertyName:e,target:this})):this._logLockedError(e,"'source' can't be changed after calling sublayer.load()")}_handleSublayersChange(e,i){i&&(i.forEach((e=>{e.parent=null,e.layer=null})),this.removeAllHandles()),e&&(e.forEach((e=>{e.parent=this,e.layer=this.layer})),this.addHandles([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this.layer})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null})),e.on("before-changes",(e=>{const i=this.layer?.capabilities?.exportMap?.supportsSublayersChanges;null==i||i||(D.getLogger(this).error(new g("sublayer:sublayers-non-modifiable","Sublayer can't be added, moved, or removed from the layer's sublayers",{sublayer:this,layer:this.layer})),e.preventDefault())}))]))}_logLockedError(e,i){const{layer:t,declaredClass:s}=this;D.getLogger(s).error(new g("sublayer:locked",`Property '${String(e)}' can't be changed on Sublayer from the layer '${t?.id}'`,{reason:i,sublayer:this,layer:t}))}_getLayerDomain(e){const i=this.fieldsIndex.get(e);return i?i.domain:null}};pe.test={isMapImageLayerOverridePolicy:e=>e===ue||e===ne,isTileImageLayerOverridePolicy:e=>e===oe},e([i({readOnly:!0})],pe.prototype,"capabilities",void 0),e([t("service","capabilities",["layerDefinition.canModifyLayer","layerDefinition.capabilities"])],pe.prototype,"readCapabilities",null),e([i()],pe.prototype,"defaultPopupTemplate",null),e([i({type:String,value:null,json:{name:"layerDefinition.definitionExpression",write:{allowNull:!0,overridePolicy:ne}}})],pe.prototype,"definitionExpression",null),e([i({readOnly:!0})],pe.prototype,"effectiveScaleRange",null),e([t("service","maxScaleRange",["minScale","maxScale"])],pe.prototype,"readMaxScaleRange",null),e([i({type:[N],json:{origins:{service:{read:{source:"layerDefinition.fields"}}}}})],pe.prototype,"fields",void 0),e([i({readOnly:!0})],pe.prototype,"fieldsIndex",null),e([i({type:B,value:null,json:{name:"layerDefinition.floorInfo",read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo",overridePolicy:ne},origins:{"web-scene":{read:!1,write:!1}}}})],pe.prototype,"floorInfo",null),e([i({type:s,json:{read:{source:"layerDefinition.extent"}}})],pe.prototype,"fullExtent",void 0),e([i({type:C.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:C.read}}}}})],pe.prototype,"geometryType",void 0),e([i({type:String})],pe.prototype,"globalIdField",void 0),e([t("service","globalIdField",["layerDefinition.globalIdField","layerDefinition.fields"])],pe.prototype,"readGlobalIdFieldFromService",null),e([i({type:R,json:{write:{ignoreOrigin:!0}}})],pe.prototype,"id",null),e([i({value:null,type:[$],json:{read:{source:"layerDefinition.drawingInfo.labelingInfo"},write:{target:"layerDefinition.drawingInfo.labelingInfo",overridePolicy:ue}}})],pe.prototype,"labelingInfo",null),e([_("labelingInfo")],pe.prototype,"writeLabelingInfo",null),e([i({type:Boolean,value:!0,json:{read:{source:"layerDefinition.drawingInfo.showLabels"},write:{target:"layerDefinition.drawingInfo.showLabels",overridePolicy:ue}}})],pe.prototype,"labelsVisible",null),e([i({value:null})],pe.prototype,"layer",null),e([i({type:String,json:{write:{overridePolicy:oe}}})],pe.prototype,"layerItemId",void 0),e([i({type:Boolean,value:!0,json:{origins:{service:{read:{enabled:!1}}},read:{source:"showLegend"},write:{target:"showLegend",overridePolicy:ce}}})],pe.prototype,"legendEnabled",void 0),e([i({type:["show","hide","hide-children"],value:"show",json:{read:!1,write:!1,origins:{"web-scene":{read:!0,write:!0}}}})],pe.prototype,"listMode",null),e([i({type:Number,value:0,json:{write:{overridePolicy:ue}}})],pe.prototype,"minScale",null),e([t("minScale",["minScale","layerDefinition.minScale"])],pe.prototype,"readMinScale",null),e([i({type:Number,value:0,json:{write:{overridePolicy:ue}}})],pe.prototype,"maxScale",null),e([t("maxScale",["maxScale","layerDefinition.maxScale"])],pe.prototype,"readMaxScale",null),e([i({type:String})],pe.prototype,"objectIdField",void 0),e([t("service","objectIdField",["layerDefinition.objectIdField","layerDefinition.fields"])],pe.prototype,"readObjectIdFieldFromService",null),e([i({type:Number,value:1,json:{write:{target:"layerDefinition.drawingInfo.transparency",overridePolicy:ue}}})],pe.prototype,"opacity",null),e([t("opacity",["layerDefinition.drawingInfo.transparency","layerDefinition.transparency"])],pe.prototype,"readOpacity",null),e([_("opacity")],pe.prototype,"writeOpacity",null),e([i({json:{type:R,write:{target:"parentLayerId",writerEnsuresNonNull:!0,overridePolicy:ue}}})],pe.prototype,"parent",void 0),e([_("parent")],pe.prototype,"writeParent",null),e([i({type:Boolean,value:!0,json:{read:{source:"disablePopup",reader:(e,i)=>!i.disablePopup},write:{target:"disablePopup",overridePolicy:ce,writer(e,i,t){i[t]=!e}}}})],pe.prototype,"popupEnabled",void 0),e([i({type:Q,json:{read:{source:"popupInfo"},write:{target:"popupInfo",overridePolicy:ce}}})],pe.prototype,"popupTemplate",void 0),e([i({readOnly:!0})],pe.prototype,"queryTask",null),e([i({types:G,value:null,json:{name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:ue},origins:{"web-scene":{types:J,name:"layerDefinition.drawingInfo.renderer",write:{overridePolicy:ue}}}}})],pe.prototype,"renderer",null),e([i({types:{key:"type",base:null,typeMap:{"data-layer":W,"map-layer":T}},cast(e){if(e){if("mapLayerId"in e)return X(T,e);if("dataSource"in e)return X(W,e)}return e},json:{name:"layerDefinition.source",write:{overridePolicy:ue}}})],pe.prototype,"source",null),e([i()],pe.prototype,"sourceJSON",void 0),e([i({value:null,json:{type:[R],write:{target:"subLayerIds",allowNull:!0,overridePolicy:ue}}})],pe.prototype,"sublayers",null),e([z("sublayers")],pe.prototype,"castSublayers",null),e([_("sublayers")],pe.prototype,"writeSublayers",null),e([i({type:String,json:{name:"name",write:{overridePolicy:ce}}})],pe.prototype,"title",void 0),e([t("service","title",["name","layerDefinition.name"])],pe.prototype,"readTitle",null),e([i({type:String})],pe.prototype,"typeIdField",void 0),e([i({json:{read:!1},readOnly:!0,value:"sublayer"})],pe.prototype,"type",void 0),e([t("typeIdField",["layerDefinition.typeIdField"])],pe.prototype,"readTypeIdField",null),e([i({type:[H],json:{origins:{service:{read:{source:"layerDefinition.types"}}}}})],pe.prototype,"types",void 0),e([i({type:String,json:{name:"layerUrl",write:{overridePolicy:oe}}})],pe.prototype,"url",null),e([i({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"},write:{target:"defaultVisibility",overridePolicy:ue}}})],pe.prototype,"visible",null),e([_("visible")],pe.prototype,"writeVisible",null),pe=ae=e([n("esri.layers.support.Sublayer")],pe);const he=pe;function fe(e,i){const t=[],s={};return e?(e.forEach((e=>{const r=new he;if(r.read(e,i),s[r.id]=r,null!=e.parentLayerId&&-1!==e.parentLayerId){const i=s[e.parentLayerId];i.sublayers||(i.sublayers=[]),i.sublayers.unshift(r)}else t.unshift(r)})),t):t}const be=P.ofType(he);function me(e,i){e&&e.forEach((e=>{i(e),e.sublayers&&e.sublayers.length&&me(e.sublayers,i)}))}const ve=t=>{let s=class extends t{constructor(...e){super(...e),this.allSublayers=new Y({getCollections:()=>[this.sublayers],getChildrenFunction:e=>e.sublayers}),this.sublayersSourceJSON={[d.SERVICE]:{},[d.PORTAL_ITEM]:{},[d.WEB_SCENE]:{},[d.WEB_MAP]:{}},this.addHandles(Z((()=>this.sublayers),((e,i)=>this._handleSublayersChange(e,i)),ee))}destroy(){this.allSublayers.destroy()}readSublayers(e,i){if(!i||!e)return;const{sublayersSourceJSON:t}=this,s=K(i.origin);if(s<d.SERVICE)return;if(t[s]={context:i,visibleLayers:e.visibleLayers||t[s].visibleLayers,layers:e.layers||t[s].layers},s>d.SERVICE)return;this._set("serviceSublayers",this.createSublayersForOrigin("service").sublayers);const{sublayers:r,origin:a}=this.createSublayersForOrigin("web-document"),l=O(this);l.setDefaultOrigin(a),this._set("sublayers",new be(r)),l.setDefaultOrigin("user")}findSublayerById(e){return this.allSublayers.find((i=>i.id===e))}createServiceSublayers(){return this.createSublayersForOrigin("service").sublayers}createSublayersForOrigin(e){const i=K("web-document"===e?"web-map":e);let t=d.SERVICE,s=this.sublayersSourceJSON[d.SERVICE].layers,r=this.sublayersSourceJSON[d.SERVICE].context,a=null;const l=[d.PORTAL_ITEM,d.WEB_SCENE,d.WEB_MAP].filter((e=>e<=i));for(const e of l){const i=this.sublayersSourceJSON[e];ie(i.layers)&&(t=e,s=i.layers,r=i.context,i.visibleLayers&&(a={visibleLayers:i.visibleLayers,context:i.context}))}const n=[d.PORTAL_ITEM,d.WEB_SCENE,d.WEB_MAP].filter((e=>e>t&&e<=i));let o=null;for(const e of n){const{layers:i,visibleLayers:t,context:s}=this.sublayersSourceJSON[e];i&&(o={layers:i,context:s}),t&&(a={visibleLayers:t,context:s})}const u=fe(s,r),c=new Map,y=new Set;if(o)for(const e of o.layers)c.set(e.id,e);if(a?.visibleLayers)for(const e of a.visibleLayers)y.add(e);return me(u,(e=>{o&&e.read(c.get(e.id),o.context),a&&e.read({defaultVisibility:y.has(e.id)},a.context)})),{origin:te(t),sublayers:new be({items:u})}}read(e,i){super.read(e,i),this.readSublayers(e,i)}_handleSublayersChange(e,i){i&&(i.forEach((e=>{e.parent=null,e.layer=null})),this.removeHandles("sublayers-owner")),e&&(e.forEach((e=>{e.parent=this,e.layer=this})),this.addHandles([e.on("after-add",(({item:e})=>{e.parent=this,e.layer=this})),e.on("after-remove",(({item:e})=>{e.parent=null,e.layer=null}))],"sublayers-owner"),"tile"===this.type&&this.addHandles(e.on("before-changes",(e=>{D.getLogger("esri.layers.TileLayer").error(new g("tilelayer:sublayers-non-modifiable","ISublayer can't be added, moved, or removed from the layer's sublayers",{layer:this})),e.preventDefault()})),"sublayers-owner"))}};return e([i({readOnly:!0})],s.prototype,"allSublayers",void 0),e([i({readOnly:!0,type:P.ofType(he)})],s.prototype,"serviceSublayers",void 0),e([i({value:null,type:be,json:{read:!1,write:{allowNull:!0,ignoreOrigin:!0}}})],s.prototype,"sublayers",void 0),e([i({readOnly:!0})],s.prototype,"sublayersSourceJSON",void 0),s=e([n("esri.layers.mixins.SublayersOwner")],s),s};export{he as Y,re as f,ve as m};
//# sourceMappingURL=p-6868ac29.js.map