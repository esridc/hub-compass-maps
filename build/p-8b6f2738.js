import{bG as e,hn as t,r as s,p as i,hx as r,iV as n,o6 as l,q as o,t as a,j9 as u,eM as d,ik as p,n as y,o7 as c,U as h,X as f,jz as g,s as m,e as v,E as b,T as w,kO as j,o8 as S,o9 as O,jO as x,Z as I,m as F,oa as B,az as T,nj as L,ob as k,_ as q,a7 as A,oc as P,hp as N,kU as R,kV as M,kW as E,kN as V,kX as C,od as D,oe as _,iP as K,ki as U,I as Q,P as $,of as Z,og as z,oh as X,oi as G}from"./p-aad64c9f.js";import{t as W}from"./p-e33d4456.js";import{r as H,R as J,V as Y}from"./p-e08fbefe.js";import{p as ee,a as te,y as se,m as ie}from"./p-3e8b31ed.js";import{V as re}from"./p-7e44e1c8.js";import{n as ne,p as le}from"./p-b323b506.js";import{s as oe}from"./p-86923af6.js";import{$ as ae,Z as ue,w as de}from"./p-5a6692f0.js";import"./p-2af77f97.js";import"./p-f3c2956c.js";import"./p-7523d580.js";import"./p-9fbfb741.js";import"./p-11802a1b.js";import"./p-cc72a972.js";import"./p-88dd7081.js";import"./p-175d4a9b.js";import"./p-79c28fb7.js";import"./p-a040372a.js";import"./p-93091a88.js";import"./p-37da71be.js";import"./p-e91c4d32.js";import"./p-de84037a.js";import"./p-3b7ff27a.js";import"./p-dddb66c6.js";import"./p-17d8c81f.js";import"./p-436c45c7.js";import"./p-dfaba342.js";import"./p-1826fadd.js";import"./p-e51694e6.js";let pe=class extends(e(t)){constructor(e){super(e),this.title="",this.id=-1,this.modelName=null,this.isEmpty=null,this.legendEnabled=!0,this.visible=!0,this.opacity=1}readTitle(e,t){return"string"==typeof t.alias?t.alias:"string"==typeof t.name?t.name:""}readIdOnlyOnce(e){return-1!==this.id?this.id:"number"==typeof e?e:-1}};s([i({type:String,json:{origins:{"web-scene":{write:!0},"portal-item":{write:!0}}}})],pe.prototype,"title",void 0),s([r("service","title",["alias","name"])],pe.prototype,"readTitle",null),s([i()],pe.prototype,"layer",void 0),s([i({type:n,readOnly:!0,json:{read:!1,write:{ignoreOrigin:!0}}})],pe.prototype,"id",void 0),s([r("service","id")],pe.prototype,"readIdOnlyOnce",null),s([i(l(String))],pe.prototype,"modelName",void 0),s([i(l(Boolean))],pe.prototype,"isEmpty",void 0),s([i({type:Boolean,nonNullable:!0})],pe.prototype,"legendEnabled",void 0),s([i({type:Boolean,json:{name:"visibility",write:!0}})],pe.prototype,"visible",void 0),s([i({type:Number,json:{write:!0}})],pe.prototype,"opacity",void 0),pe=s([o("esri.layers.buildingSublayers.BuildingSublayer")],pe);const ye=pe;const ce=B();let he=class extends(a.LoadableMixin(u(ye))){constructor(e){super(e),this.type="building-component",this.nodePages=null,this.materialDefinitions=[],this.textureSetDefinitions=[],this.geometryDefinitions=[],this.indexInfo=null,this.serviceUpdateTimeStamp=null,this.store=null,this.attributeStorageInfo=[],this.fields=[],this.associatedLayer=null,this.outFields=null,this.listMode="show",this.renderer=null,this.definitionExpression=null,this.popupEnabled=!0,this.popupTemplate=null,this.layerType="3d-object"}get parsedUrl(){return this.layer?{path:`${this.layer.parsedUrl?.path}/sublayers/${this.id}`,query:this.layer.parsedUrl?.query}:{path:""}}get fieldsIndex(){return new d(this.fields)}readAssociatedLayer(e,t){const s=this.layer.associatedFeatureServiceItem,i=t.associatedLayerID;return null!=s&&"number"==typeof i?new p({portalItem:s,customParameters:this.customParameters,layerId:i}):null}get objectIdField(){if(null!=this.fields)for(const e of this.fields)if("oid"===e.type)return e.name;return null}get displayField(){return null!=this.associatedLayer?this.associatedLayer.displayField:void 0}get apiKey(){return this.layer.apiKey}get customParameters(){return this.layer.customParameters}get fullExtent(){return this.layer.fullExtent}get spatialReference(){return this.layer.spatialReference}get version(){return this.layer.version}get elevationInfo(){return this.layer.elevationInfo}get minScale(){return this.layer.minScale}get maxScale(){return this.layer.maxScale}get effectiveScaleRange(){return this.layer.effectiveScaleRange}get defaultPopupTemplate(){return this.createPopupTemplate()}load(e){const t=null!=e?e.signal:null,s=this._fetchService(t).then((()=>{this.indexInfo=H(this.parsedUrl.path,this.rootNode,this.nodePages,this.customParameters,this.apiKey,y.getLogger(this),t)}));return this.addResolvingPromise(s),Promise.resolve(this)}createPopupTemplate(e){return c(this,e)}async _fetchService(e){const t=(await h(this.parsedUrl.path,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:e})).data;this.read(t,{origin:"service",url:this.parsedUrl})}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const s=this.getFeatureType(t?.feature)?.domains?.[e];return s&&"inherited"!==s.type?s:this.getField(e)?.domain??null}getFeatureType(e){return e&&null!=this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return null!=this.associatedLayer?this.associatedLayer.types??[]:[]}get typeIdField(){return null!=this.associatedLayer?this.associatedLayer.typeIdField:null}get geometryType(){return"3d-object"===this.layerType?"mesh":"point"}get profile(){return"3d-object"===this.layerType?"mesh-pyramids":"points"}get capabilities(){const e=null!=this.associatedLayer&&this.associatedLayer.capabilities?this.associatedLayer.capabilities:W,{query:t,data:{supportsZ:s,supportsM:i,isVersioned:r}}=e;return{query:t,data:{supportsZ:s,supportsM:i,isVersioned:r}}}createQuery(){const e=new f;return"mesh"!==this.geometryType&&(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this.layer,t.sourceLayer=this;return e}))}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((s=>s.queryObjectIds(e||this.createQuery(),t)))}async queryCachedAttributes(e,t){const s=g(this.fieldsIndex,await ne(this,le(this)));return re(this.parsedUrl.path,this.attributeStorageInfo,e,t,s,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const s=await this.queryCachedAttributes(e,[t]);if(!s||0===s.length)throw new m("scenelayer:feature-not-in-cached-data","Feature not found in cached data");return new v({attributes:s[0],layer:this,sourceLayer:this})}getFieldUsageInfo(e){return this.fieldsIndex.has(e)?{supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1}:{supportsLabelingInfo:!1,supportsRenderer:!0,supportsPopupTemplate:!0,supportsLayerQuery:null!=this.associatedLayer}}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return null!=e&&e.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),null==this.associatedLayer)throw new m("buildingscenelayer:query-not-available","BuildingSceneLayer component layer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new m("buildingscenelayer:query-not-available","BuildingSceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}};s([i({readOnly:!0})],he.prototype,"parsedUrl",null),s([i({type:ee,readOnly:!0})],he.prototype,"nodePages",void 0),s([i({type:[te],readOnly:!0})],he.prototype,"materialDefinitions",void 0),s([i({type:[se],readOnly:!0})],he.prototype,"textureSetDefinitions",void 0),s([i({type:[ie],readOnly:!0})],he.prototype,"geometryDefinitions",void 0),s([i({readOnly:!0})],he.prototype,"serviceUpdateTimeStamp",void 0),s([i({readOnly:!0})],he.prototype,"store",void 0),s([i({type:String,readOnly:!0,json:{read:{source:"store.rootNode"}}})],he.prototype,"rootNode",void 0),s([i({readOnly:!0})],he.prototype,"attributeStorageInfo",void 0),s([i(ce.fields)],he.prototype,"fields",void 0),s([i({readOnly:!0})],he.prototype,"fieldsIndex",null),s([i({readOnly:!0,type:p})],he.prototype,"associatedLayer",void 0),s([r("service","associatedLayer",["associatedLayerID"])],he.prototype,"readAssociatedLayer",null),s([i(ce.outFields)],he.prototype,"outFields",void 0),s([i({type:String,readOnly:!0})],he.prototype,"objectIdField",null),s([i({readOnly:!0,type:String,json:{read:!1}})],he.prototype,"displayField",null),s([i({readOnly:!0,type:String})],he.prototype,"apiKey",null),s([i({readOnly:!0,type:String})],he.prototype,"customParameters",null),s([i({readOnly:!0,type:b})],he.prototype,"fullExtent",null),s([i({readOnly:!0,type:w})],he.prototype,"spatialReference",null),s([i({readOnly:!0})],he.prototype,"version",null),s([i({readOnly:!0,type:j})],he.prototype,"elevationInfo",null),s([i({readOnly:!0,type:Number})],he.prototype,"minScale",null),s([i({readOnly:!0,type:Number})],he.prototype,"maxScale",null),s([i({readOnly:!0,type:Number})],he.prototype,"effectiveScaleRange",null),s([i({type:["hide","show"],json:{write:!0}})],he.prototype,"listMode",void 0),s([i({types:S,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],he.prototype,"renderer",void 0),s([i({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],he.prototype,"definitionExpression",void 0),s([i(O)],he.prototype,"popupEnabled",void 0),s([i({type:x,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],he.prototype,"popupTemplate",void 0),s([i({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],he.prototype,"normalReferenceFrame",void 0),s([i({readOnly:!0,json:{read:!1}})],he.prototype,"defaultPopupTemplate",null),s([i()],he.prototype,"types",null),s([i()],he.prototype,"typeIdField",null),s([i({json:{write:!1}}),I(new F({"3DObject":"3d-object",Point:"point"}))],he.prototype,"layerType",void 0),s([i()],he.prototype,"geometryType",null),s([i()],he.prototype,"profile",null),s([i({readOnly:!0,json:{read:!1}})],he.prototype,"capabilities",null),s([i({readOnly:!0})],he.prototype,"statisticsInfo",void 0),he=s([o("esri.layers.buildingSublayers.BuildingComponentSublayer")],he);const fe=he;var ge;const me={type:T,readOnly:!0,json:{origins:{service:{read:{source:"sublayers",reader:ve}}},read:!1}};function ve(e,t,s){if(e&&Array.isArray(e))return new T(e.map((e=>{const t=we(e);if(t){const i=new t;return i.read(e,s),i}return s?.messages&&e&&s.messages.push(new L("building-scene-layer:unsupported-sublayer-type","Building scene sublayer of type '"+(e.type||"unknown")+"' are not supported",{definition:e,context:s})),null})))}let be=ge=class extends ye{constructor(e){super(e),this.type="building-group",this.listMode="show",this.sublayers=null}loadAll(){return k(this,(e=>ge.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)}))))}};function we(e){return"group"===e.layerType?be:fe}s([i({type:["hide","show","hide-children"],json:{write:!0}})],be.prototype,"listMode",void 0),s([i(me)],be.prototype,"sublayers",void 0),be=ge=s([o("esri.layers.buildingSublayers.BuildingGroupSublayer")],be),function(e){function t(e,s){e.forEach((e=>{s(e),"building-group"===e.type&&t(e.sublayers,s)}))}e.sublayersProperty=me,e.readSublayers=ve,e.forEachSublayer=t}(be||(be={}));const je=be;let Se=class extends q{constructor(){super(...arguments),this.type=null}};s([i({type:String,readOnly:!0,json:{write:!0}})],Se.prototype,"type",void 0),Se=s([o("esri.layers.support.BuildingFilterAuthoringInfo")],Se);const Oe=Se;var xe;let Ie=xe=class extends q{constructor(){super(...arguments),this.filterType=null,this.filterValues=null}clone(){return new xe({filterType:this.filterType,filterValues:A(this.filterValues)})}};s([i({type:String,json:{write:!0}})],Ie.prototype,"filterType",void 0),s([i({type:[String],json:{write:!0}})],Ie.prototype,"filterValues",void 0),Ie=xe=s([o("esri.layers.support.BuildingFilterAuthoringInfoType")],Ie);const Fe=Ie;var Be;const Te=T.ofType(Fe);let Le=Be=class extends q{clone(){return new Be({filterTypes:A(this.filterTypes)})}};s([i({type:Te,json:{write:!0}})],Le.prototype,"filterTypes",void 0),Le=Be=s([o("esri.layers.support.BuildingFilterAuthoringInfoBlock")],Le);const ke=Le;var qe;const Ae=T.ofType(ke);let Pe=qe=class extends Oe{constructor(){super(...arguments),this.type="checkbox"}clone(){return new qe({filterBlocks:A(this.filterBlocks)})}};s([i({type:["checkbox"]})],Pe.prototype,"type",void 0),s([i({type:Ae,json:{write:!0}})],Pe.prototype,"filterBlocks",void 0),Pe=qe=s([o("esri.layers.support.BuildingFilterAuthoringInfoCheckbox")],Pe);const Ne=Pe;let Re=class extends q{};s([i({readOnly:!0,json:{read:!1}})],Re.prototype,"type",void 0),Re=s([o("esri.layers.support.BuildingFilterMode")],Re);const Me=Re;var Ee;let Ve=Ee=class extends Me{constructor(){super(...arguments),this.type="solid"}clone(){return new Ee}};s([i({type:["solid"],readOnly:!0,json:{write:!0}})],Ve.prototype,"type",void 0),Ve=Ee=s([o("esri.layers.support.BuildingFilterModeSolid")],Ve);const Ce=Ve;var De;let _e=De=class extends Me{constructor(){super(...arguments),this.type="wire-frame",this.edges=null}clone(){return new De({edges:A(this.edges)})}};s([I({wireFrame:"wire-frame"})],_e.prototype,"type",void 0),s([i(P)],_e.prototype,"edges",void 0),_e=De=s([o("esri.layers.support.BuildingFilterModeWireFrame")],_e);const Ke=_e;var Ue;let Qe=Ue=class extends Me{constructor(){super(...arguments),this.type="x-ray"}clone(){return new Ue}};s([i({type:["x-ray"],readOnly:!0,json:{write:!0}})],Qe.prototype,"type",void 0),Qe=Ue=s([o("esri.layers.support.BuildingFilterModeXRay")],Qe);const $e=Qe;var Ze;const ze={nonNullable:!0,types:{key:"type",base:Me,typeMap:{solid:Ce,"wire-frame":Ke,"x-ray":$e}},json:{read:e=>{switch(e?.type){case"solid":return Ce.fromJSON(e);case"wireFrame":return Ke.fromJSON(e);case"x-ray":return $e.fromJSON(e);default:return}},write:{enabled:!0,isRequired:!0}}};let Xe=Ze=class extends q{constructor(){super(...arguments),this.filterExpression=null,this.filterMode=new Ce,this.title=""}clone(){return new Ze({filterExpression:this.filterExpression,filterMode:A(this.filterMode),title:this.title})}};s([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Xe.prototype,"filterExpression",void 0),s([i(ze)],Xe.prototype,"filterMode",void 0),s([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Xe.prototype,"title",void 0),Xe=Ze=s([o("esri.layers.support.BuildingFilterBlock")],Xe);const Ge=Xe;var We;const He=T.ofType(Ge);let Je=We=class extends q{constructor(){super(...arguments),this.description=null,this.filterBlocks=null,this.id=N(),this.name=null}clone(){return new We({description:this.description,filterBlocks:A(this.filterBlocks),id:this.id,name:this.name,filterAuthoringInfo:A(this.filterAuthoringInfo)})}};s([i({type:String,json:{write:!0}})],Je.prototype,"description",void 0),s([i({type:He,json:{write:{enabled:!0,isRequired:!0}}})],Je.prototype,"filterBlocks",void 0),s([i({types:{key:"type",base:Oe,typeMap:{checkbox:Ne}},json:{read:e=>"checkbox"===e?.type?Ne.fromJSON(e):null,write:!0}})],Je.prototype,"filterAuthoringInfo",void 0),s([i({type:String,constructOnly:!0,json:{write:{enabled:!0,isRequired:!0}}})],Je.prototype,"id",void 0),s([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],Je.prototype,"name",void 0),Je=We=s([o("esri.layers.support.BuildingFilter")],Je);const Ye=Je;let et=class extends q{constructor(){super(...arguments),this.fieldName=null,this.modelName=null,this.label=null,this.min=null,this.max=null,this.mostFrequentValues=null,this.subLayerIds=null}};s([i({type:String})],et.prototype,"fieldName",void 0),s([i({type:String})],et.prototype,"modelName",void 0),s([i({type:String})],et.prototype,"label",void 0),s([i({type:Number})],et.prototype,"min",void 0),s([i({type:Number})],et.prototype,"max",void 0),s([i({json:{read:e=>Array.isArray(e)&&(e.every((e=>"string"==typeof e))||e.every((e=>"number"==typeof e)))?e.slice():null}})],et.prototype,"mostFrequentValues",void 0),s([i({type:[Number]})],et.prototype,"subLayerIds",void 0),et=s([o("esri.layers.support.BuildingSummaryStatistics.BuildingFieldStatistics")],et);let tt=class extends(a.LoadableMixin(u(q))){constructor(){super(...arguments),this.url=null}get fields(){return this.loaded||"loading"===this.loadStatus?this._get("fields"):(y.getLogger(this).error("building summary statistics are not loaded"),null)}load(e){const t=null!=e?e.signal:null;return this.addResolvingPromise(this._fetchService(t)),Promise.resolve(this)}async _fetchService(e){const t=(await h(this.url,{query:{f:"json"},responseType:"json",signal:e})).data;this.read(t,{origin:"service"})}};s([i({constructOnly:!0,type:String})],tt.prototype,"url",void 0),s([i({readOnly:!0,type:[et],json:{read:{source:"summary"}}})],tt.prototype,"fields",null),tt=s([o("esri.layers.support.BuildingSummaryStatistics")],tt);const st=tt;const it=T.ofType(Ye),rt=A(je.sublayersProperty),nt=rt.json?.origins;nt&&(nt["web-scene"]={type:[fe],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}},nt["portal-item"]={type:[fe],write:{enabled:!0,overridePolicy:()=>({enabled:!1})}});let lt=class extends(J(R(M(E(V(C(D(_(K))))))))){constructor(e){super(e),this.operationalLayerType="BuildingSceneLayer",this.allSublayers=new U({getCollections:()=>[this.sublayers],getChildrenFunction:e=>"building-group"===e.type?e.sublayers:null}),this.sublayers=null,this._allSublayerOverrides=null,this.filters=new it,this.activeFilterId=null,this.summaryStatistics=null,this.outFields=null,this.legendEnabled=!0,this.type="building-scene"}normalizeCtorArgs(e){return"string"==typeof e?{url:e}:e??{}}destroy(){this.allSublayers.destroy()}readSublayers(e,t,s){const i=je.readSublayers(e,t,s);return je.forEachSublayer(i,(e=>e.layer=this)),this._allSublayerOverrides&&(ot(i,this._allSublayerOverrides),this._allSublayerOverrides=null),i}write(e,t){return e=super.write(e,t),!t||"web-scene"!==t.origin&&"portal-item"!==t.origin||(this.sublayers?dt(this.sublayers,e,t):this._allSublayerOverrides&&pt(this._allSublayerOverrides,e,t)),e}read(e,t){if(super.read(e,t),("web-scene"===t?.origin||"portal-item"===t?.origin)&&Array.isArray(e?.sublayers)){const s=ut(e.sublayers,t);this.sublayers?at(this.sublayers,s):(this._allSublayerOverrides??=new Map,this._allSublayerOverrides.set(t.origin,s))}}readSummaryStatistics(e,t){if("string"==typeof t.statisticsHRef){const e=Q(this.parsedUrl?.path,t.statisticsHRef);return new st({url:e})}return null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}load(e){const t=null!=e?e.signal:null,s=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch($).then((()=>this._fetchService(t))).then((()=>this._fetchAssociatedFeatureService(t)));return this.addResolvingPromise(s),Promise.resolve(this)}loadAll(){return Z(this,(e=>{je.forEachSublayer(this.sublayers,(t=>{"building-group"!==t.type&&e(t)})),this.summaryStatistics&&e(this.summaryStatistics)}))}async saveAs(e,t){return this._debouncedSaveOperations(Y.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"building-scene"};return this._debouncedSaveOperations(Y.SAVE,e)}validateLayer(e){if(!e.layerType||"Building"!==e.layerType)throw new m("buildingscenelayer:layer-type-not-supported","BuildingSceneLayer does not support this layer type",{layerType:e.layerType})}_getTypeKeywords(){return["Building"]}async _fetchAssociatedFeatureService(e){try{const{portalItem:t}=await oe(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e});this.associatedFeatureServiceItem=t}catch(e){y.getLogger(this).warn("Associated feature service item could not be loaded",e)}}_validateElevationInfo(){const e=this.elevationInfo,t="Building scene layers";ae(y.getLogger(this),ue(t,"absolute-height",e)),ae(y.getLogger(this),de(t,e))}};function ot(e,t){t.forEach((t=>at(e,t)))}function at(e,t){const{overrides:s,context:i}=t;je.forEachSublayer(e,(e=>e.read(s.get(e.id),i)))}function ut(e,t){const s=new Map;for(const i of e)null!=i&&"object"==typeof i&&"number"==typeof i.id?s.set(i.id,i):t.messages?.push(new m("building-scene-layer:invalid-sublayer-override","Invalid value for sublayer override. Not an object or no id specified.",{value:i}));return{overrides:s,context:t}}function dt(e,t,s){const i=[];je.forEachSublayer(e,(e=>{const t=e.write({},s);Object.keys(t).length>1&&i.push(t)})),i.length>0&&(t.sublayers=i)}function pt(e,t,s){const i=s?.origin&&e.get(s.origin);i&&(t.sublayers=[],i.overrides.forEach((e=>{t.sublayers.push(A(e))})))}s([i({type:["BuildingSceneLayer"]})],lt.prototype,"operationalLayerType",void 0),s([i({readOnly:!0})],lt.prototype,"allSublayers",void 0),s([i(rt)],lt.prototype,"sublayers",void 0),s([r("service","sublayers")],lt.prototype,"readSublayers",null),s([i({type:it,nonNullable:!0,json:{write:!0}})],lt.prototype,"filters",void 0),s([i({type:String,json:{write:!0}})],lt.prototype,"activeFilterId",void 0),s([i({readOnly:!0,type:st})],lt.prototype,"summaryStatistics",void 0),s([r("summaryStatistics",["statisticsHRef"])],lt.prototype,"readSummaryStatistics",null),s([i({type:[String],json:{read:!1}})],lt.prototype,"outFields",void 0),s([i(z)],lt.prototype,"fullExtent",void 0),s([i(X)],lt.prototype,"legendEnabled",void 0),s([i({type:["show","hide","hide-children"]})],lt.prototype,"listMode",void 0),s([i(l(w))],lt.prototype,"spatialReference",void 0),s([i(G)],lt.prototype,"elevationInfo",null),s([i({json:{read:!1},readOnly:!0})],lt.prototype,"type",void 0),s([i()],lt.prototype,"associatedFeatureServiceItem",void 0),lt=s([o("esri.layers.BuildingSceneLayer")],lt);const yt=lt;export default yt;
//# sourceMappingURL=p-8b6f2738.js.map