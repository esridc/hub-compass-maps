import{r as e,p as t,q as i,pI as s,G as r,qv as n,oT as a,_ as o,oN as l,az as d,c1 as p,J as u,nj as c,pn as h,hx as y,bE as f,iM as m,po as w,U as g,a7 as b,s as v,I as j,oE as I,kU as S,kV as F,kW as T,kN as x,kX as O,od as L,oe as E,Y as P,iP as D,dN as A,eM as q,qw as N,ot as R,n as U,P as C,hK as k,X as _,jz as G,e as V,o7 as $,H as z,qx as M,a0 as Q,oC as K,p2 as W,di as H,he as B,qy as J,qz as Z,pT as X,oi as Y,oy as ee,ow as te,ox as ie,oh as se,qA as re,o8 as ne,o9 as ae,jO as oe,oV as le,pJ as de,oa as pe}from"./p-aad64c9f.js";import{$ as ue}from"./p-a68c6147.js";import{i as ce,m as he,t as ye}from"./p-a4b98f81.js";import{R as fe,V as me}from"./p-e08fbefe.js";import{s as we}from"./p-86923af6.js";import{t as ge}from"./p-e33d4456.js";import{p as be,a as ve,y as je,m as Ie}from"./p-3e8b31ed.js";import{r as Se,n as Fe}from"./p-d5a66c42.js";import{a as Te}from"./p-c679ddd9.js";import{j as xe}from"./p-4d009bad.js";import{$ as Oe,P as Le,w as Ee}from"./p-5a6692f0.js";import{V as Pe}from"./p-7e44e1c8.js";import{n as De,p as Ae}from"./p-b323b506.js";import"./p-2af77f97.js";import"./p-e11049fd.js";import"./p-88dd7081.js";import"./p-dfaba342.js";import"./p-79c28fb7.js";import"./p-93091a88.js";import"./p-fefc46e8.js";import"./p-17b3a90f.js";import"./p-5d8d2e95.js";import"./p-c0b174ee.js";import"./p-5b459e36.js";import"./p-a040372a.js";import"./p-f9e31f43.js";import"./p-66c1870a.js";import"./p-25b70cc1.js";import"./p-1826fadd.js";import"./p-e51694e6.js";import"./p-dcc79702.js";import"./p-fa12d64c.js";import"./p-a0f1b2e3.js";import"./p-cde3f633.js";import"./p-f3c2956c.js";import"./p-7523d580.js";import"./p-9fbfb741.js";import"./p-11802a1b.js";import"./p-cc72a972.js";import"./p-2c974bfd.js";import"./p-175d4a9b.js";import"./p-37da71be.js";import"./p-e91c4d32.js";import"./p-de84037a.js";import"./p-3b7ff27a.js";import"./p-dddb66c6.js";import"./p-17d8c81f.js";import"./p-436c45c7.js";function qe({associatedLayer:e,serviceUpdateTimeStamp:t}){const i=e?.editingInfo?.lastEditDate,s=e?.serverGens,r=null!=i,n=null!=t,a=r&&n&&t.lastUpdate!==i.getTime();return r&&(a||!n&&s?.minServerGen!==s?.serverGen)}const Ne=o=>{let l=class extends o{constructor(){super(...arguments),this.serviceTimeInfo=null}get timeInfo(){const e=this.associatedLayer?.timeInfo;if(null==e)return null;const t=e.clone();return a(t,this.fieldsIndex),t}set timeInfo(e){a(e,this.fieldsIndex),this._override("timeInfo",e)}get timeExtent(){return this.associatedLayer?.timeExtent}set timeExtent(e){this._override("timeExtent",e)}get timeOffset(){return this.associatedLayer?.timeOffset}set timeOffset(e){this._override("timeOffset",e)}get datesInUnknownTimezone(){return this.associatedLayer?.datesInUnknownTimezone??!1}set datesInUnknownTimezone(e){this._override("datesInUnknownTimezone",e)}async loadTimeInfoFromService(e){const{serviceTimeInfo:t}=this;if(null==t)return;const{startTimeField:i,endTimeField:n}=t;if(null==i&&null==n)return;if(qe({associatedLayer:this.associatedLayer,serviceUpdateTimeStamp:this.serviceUpdateTimeStamp}))return;const a=async t=>{let s=null;try{const i=await(this.fetchStatistics?.(t,e));s=i?.stats}catch{}if(null==s)return null;const{minTimeStr:r,min:n,maxTimeStr:a,max:o}=s,l=t===i?r??n:a??o;return null!=l?new Date(l):null},[o,l]=await Promise.all([a(i),a(n)]);if(null!=i&&null==o||null!=n&&null==l)return;const d=new r({start:o,end:l});this.setAtOrigin("timeInfo",new s({endField:n,startField:i,fullTimeExtent:d}),"service")}};return e([t({type:s,json:{read:!1,write:!1}})],l.prototype,"timeInfo",null),e([t({type:r,json:{read:!1,write:!1}})],l.prototype,"timeExtent",null),e([t({type:n,json:{read:!1,write:!1}})],l.prototype,"timeOffset",null),e([t({type:Boolean,nonNullable:!0,json:{read:!1,write:!1}})],l.prototype,"datesInUnknownTimezone",null),e([t({type:Re,readOnly:!0,json:{read:{source:"timeInfo"}}})],l.prototype,"serviceTimeInfo",void 0),l=e([i("esri.layers.mixins.TemporalSceneLayer")],l),l};let Re=class extends o{constructor(){super(...arguments),this.endTimeField=null,this.startTimeField=null}};e([t({type:String})],Re.prototype,"endTimeField",void 0),e([t({type:String})],Re.prototype,"startTimeField",void 0),Re=e([i("esri.layers.mixins.TemporalSceneLayer.SceneServiceTimeInfo")],Re);let Ue=class extends o{constructor(){super(...arguments),this.name=null,this.field=null,this.currentRangeExtent=null,this.fullRangeExtent=null,this.type="rangeInfo"}};e([t({type:String,json:{read:!0,write:!0}})],Ue.prototype,"name",void 0),e([t({type:String,json:{read:!0,write:!0}})],Ue.prototype,"field",void 0),e([t({type:[Number],json:{read:!0,write:!0}})],Ue.prototype,"currentRangeExtent",void 0),e([t({type:[Number],json:{read:!0,write:!0}})],Ue.prototype,"fullRangeExtent",void 0),e([t({type:["rangeInfo"],readOnly:!0,json:{read:!1,write:!0}})],Ue.prototype,"type",void 0),Ue=e([i("esri.layers.support.RangeInfo")],Ue);var Ce;let ke=Ce=class extends(l(d.ofType(p))){constructor(e){super(e)}clone(){return new Ce(this.items.map((e=>e.clone())))}write(e,t){return this.toJSON(t)}toJSON(e){const t=e?.layer?.spatialReference;return t?this.toArray().map((i=>{if(!t.equals(i.spatialReference)){if(!u(i.spatialReference,t))return e?.messages?.push(new c("scenefilter:unsupported","Scene filters with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),null;const s=new p;h(i,s,t),i=s}const s=i.toJSON(e);return delete s.spatialReference,s})).filter((e=>null!=e)):(e?.messages?.push(new c("scenefilter:unsupported","Writing Scene filters without context layer is not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})),this.toArray().map((t=>t.toJSON(e))))}static fromJSON(e,t){const i=new Ce;return e.forEach((e=>i.add(p.fromJSON(e,t)))),i}};ke=Ce=e([i("esri.layers.support.PolygonCollection")],ke);const _e=ke;var Ge;let Ve=Ge=class extends o{constructor(e){super(e),this.spatialRelationship="disjoint",this.geometries=new _e,this._geometriesSource=null}initialize(){this.addHandles(f((()=>this.geometries),"after-changes",(()=>this.geometries=this.geometries),m))}readGeometries(e,t,i){Array.isArray(e)?this.geometries=_e.fromJSON(e,i):this._geometriesSource={url:w(e,i),context:i}}async loadGeometries(e,t){if(null==this._geometriesSource)return;const{url:i,context:s}=this._geometriesSource,r=await g(i,{responseType:"json",signal:t?.signal}),n=e.toJSON(),a=r.data.map((e=>({...e,spatialReference:n})));this.geometries=_e.fromJSON(a,s),this._geometriesSource=null}clone(){const e=new Ge({geometries:b(this.geometries),spatialRelationship:this.spatialRelationship});return e._geometriesSource=this._geometriesSource,e}};e([t({type:["disjoint","contains"],nonNullable:!0,json:{write:!0}})],Ve.prototype,"spatialRelationship",void 0),e([t({type:_e,nonNullable:!0,json:{write:!0}}),xe({origins:["web-scene","portal-item"],type:"resource",prefix:"geometries",contentAddressed:!0})],Ve.prototype,"geometries",void 0),e([y(["web-scene","portal-item"],"geometries")],Ve.prototype,"readGeometries",null),Ve=Ge=e([i("esri.layers.support.SceneFilter")],Ve);const $e=Ve;async function ze({fieldName:e,statisticsInfo:t,errorContext:i,fieldsIndex:s,path:r,customParameters:n,apiKey:a,signal:o}){if(null==t)throw new v(`${i}:no-cached-statistics`,"Cached statistics are not available for this layer");const l=s.get(e);if(null==l)throw new v(`${i}:field-unexisting`,`Field '${e}' does not exist on the layer`);const d=t.find((e=>e.name===l.name));if(null==d)throw new v(`${i}:no-cached-statistics`,"Cached statistics for this attribute are not available");const p=j(r,d.href),{data:u}=await g(p,{query:{f:"json",...n,token:a},responseType:"json",signal:o});return u}async function Me(e){const t=[];for(const i of e)i.name.toLowerCase().endsWith(".zip")?t.push(Qe(i)):t.push(Promise.resolve(i));return(await Promise.all(t)).flat()}async function Qe(e){const{BlobReader:t,ZipReader:i,BlobWriter:s}=await import("./p-9d3a2225.js"),r=[],n=new i(new t(e));return(await n.getEntries()).forEach((e=>{if(e.directory||/^__MACOS/i.test(e.filename))return;const t=new s,i=e.getData?.(t).then((t=>new File([t],e.filename)));i&&r.push(i)})),Promise.all(r)}const Ke=new Set(["3DObject","Point"]),We=pe();let He=class extends(Ne(I(fe(S(F(T(x(O(L(E(P(D)))))))))))){constructor(...e){super(...e),this.featureReduction=null,this.rangeInfos=null,this.operationalLayerType="ArcGISSceneServiceLayer",this.type="scene",this.fields=null,this.floorInfo=null,this.outFields=null,this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.excludeObjectIds=new d,this.definitionExpression=null,this.filter=null,this.path=null,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.priority=null,this.semantic=null,this.cachedDrawingInfo={color:!1},this.popupEnabled=!0,this.popupTemplate=null,this.objectIdField=null,this.globalIdField=null,this._fieldUsageInfo={},this.screenSizePerspectiveEnabled=!0,this.serviceItemId=void 0}normalizeCtorArgs(e,t){return"string"==typeof e?{url:e,...t}:e}destroy(){this._set("renderer",null),this.associatedLayer=A(this.associatedLayer)}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){const i=this.getFeatureType(t?.feature)?.domains?.[e];return i&&"inherited"!==i.type?i:this.getField(e)?.domain??null}getFeatureType(e){return e&&this.associatedLayer?this.associatedLayer.getFeatureType(e):null}get types(){return this.associatedLayer?.types??[]}get typeIdField(){return this.associatedLayer?.typeIdField??null}get templates(){return this.associatedLayer?.templates??null}get formTemplate(){return this.associatedLayer?.formTemplate??null}get attributeTableTemplate(){return this.associatedLayer?.attributeTableTemplate??null}get fieldsIndex(){return new q(this.fields)}readNodePages(e,t,i){return"Point"===t.layerType&&(e=t.pointNodePages),null==e||"object"!=typeof e?null:be.fromJSON(e,i)}set elevationInfo(e){this._set("elevationInfo",e),this.loaded&&this._validateElevationInfo()}get effectiveCapabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.effectiveCapabilities)}get effectiveEditingEnabled(){return null!=this.associatedLayer&&N(this.associatedLayer)}get geometryType(){return Je[this.profile]||"mesh"}set renderer(e){R(e,this.fieldsIndex),this._set("renderer",e)}readCachedDrawingInfo(e){return null!=e&&"object"==typeof e||(e={}),null==e.color&&(e.color=!1),e}get capabilities(){return this._capabilitiesFromAssociatedFeatureLayer(this.associatedLayer?.capabilities)}_capabilitiesFromAssociatedFeatureLayer(e){e=null!=e?e:ge;const{query:t,queryRelated:i,editing:{supportsGlobalId:s,supportsRollbackOnFailure:r,supportsUploadWithItemId:n,supportsGeometryUpdate:a,supportsReturnServiceEditsInSourceSpatialReference:o},data:{supportsZ:l,supportsM:d,isVersioned:p,supportsAttachment:u},operations:{supportsEditing:c,supportsAdd:h,supportsUpdate:y,supportsDelete:f,supportsQuery:m,supportsQueryAttachments:w,supportsAsyncConvert3D:g}}=e,b=e.operations.supportsChangeTracking,v=!!this.associatedLayer?.infoFor3D;return{query:t,queryRelated:i,editing:{supportsGlobalId:s,supportsReturnServiceEditsInSourceSpatialReference:o,supportsRollbackOnFailure:r,supportsGeometryUpdate:v&&a,supportsUploadWithItemId:n},data:{supportsAttachment:u,supportsZ:l,supportsM:d,isVersioned:p},operations:{supportsQuery:m,supportsQueryAttachments:w,supportsEditing:c&&b,supportsAdd:v&&h&&b,supportsDelete:v&&f&&b,supportsUpdate:y&&b,supportsAsyncConvert3D:g}}}get editingEnabled(){return this._isOverridden("editingEnabled")?this._get("editingEnabled"):this.associatedLayer?.editingEnabled??!1}set editingEnabled(e){this._overrideIfSome("editingEnabled",e)}get infoFor3D(){return this.associatedLayer?.infoFor3D??null}get relationships(){return this.associatedLayer?.relationships}get defaultPopupTemplate(){return this.associatedLayer||this.attributeStorageInfo?this.createPopupTemplate():null}readObjectIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeOID"===t.type&&(e=t.name),!!e))),e||void 0}readGlobalIdField(e,t){return!e&&t.fields&&t.fields.some((t=>("esriFieldTypeGlobalID"===t.type&&(e=t.name),!!e))),e||void 0}get displayField(){return this.associatedLayer?.displayField??null}readProfile(e,t){const i=t.store.profile;return null!=i&&Be[i]?Be[i]:(U.getLogger(this).error("Unknown or missing profile",{profile:i,layer:this}),"mesh-pyramids")}get useViewTime(){return this.associatedLayer?.useViewTime??!0}set useViewTime(e){this._override("useViewTime",e)}load(e){return this.addResolvingPromise(this._load(e)),Promise.resolve(this)}async _load(e){const t=null!=e?e.signal:null;await this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(C),await this._fetchService(t),await Promise.all([this._fetchIndexAndUpdateExtent(this.nodePages,t),this._setAssociatedFeatureLayer(t),this._loadFilterGeometries()]),this._validateElevationInfo(),this._applyAssociatedLayerOverrides(),this._populateFieldUsageInfo(),await this.loadTimeInfoFromService(e),await k(this,{origin:"service"},t),R(this.renderer,this.fieldsIndex),await this.finishLoadEditablePortalLayer(e)}async beforeSave(){null!=this.filter&&(this.filter=this.filter.clone(),await this.load())}async _loadFilterGeometries(){if(this.filter)try{await this.filter.loadGeometries(this.spatialReference)}catch(e){U.getLogger(this).error("#_loadFilterGeometries()",this,"Failed to load filter geometries. Geometry filter will not be applied for this layer.",{error:e}),this.filter=null}}createQuery(){const e=new _;return"mesh"===this.geometryType?this.associatedLayer?.infoFor3D&&(e.returnGeometry=!0):(e.returnGeometry=!0,e.returnZ=!0),e.where=this.definitionExpression||"1=1",e.sqlFormat="standard",e.outFields=["*"],e}queryExtent(e,t){return this._getAssociatedLayerForQuery().then((i=>i.queryExtent(e||this.createQuery(),t)))}queryFeatureCount(e,t){return this._getAssociatedLayerForQuery().then((i=>i.queryFeatureCount(e||this.createQuery(),t)))}queryFeatures(e,t){return this._getAssociatedLayerForQuery().then((i=>i.queryFeatures(e||this.createQuery(),t))).then((e=>{if(e?.features)for(const t of e.features)t.layer=this,t.sourceLayer=this;return e}))}async queryRelatedFeatures(e,t){if(await this.load(),!this.associatedLayer)throw new v("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeatures(e,t)}async queryRelatedFeaturesCount(e,t){if(await this.load(),!this.associatedLayer)throw new v("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});return this.associatedLayer.queryRelatedFeaturesCount(e,t)}async queryCachedAttributes(e,t){const i=G(this.fieldsIndex,await De(this,Ae(this)));return Pe(this.parsedUrl?.path??"",this.attributeStorageInfo??[],e,t,i,this.apiKey,this.customParameters)}async queryCachedFeature(e,t){const i=await this.queryCachedAttributes(e,[t]);if(!i||0===i.length)throw new v("scenelayer:feature-not-in-cached-data","Feature not found in cached data");const s=new V;return s.attributes=i[0],s.layer=this,s.sourceLayer=this,s}queryObjectIds(e,t){return this._getAssociatedLayerForQuery().then((i=>i.queryObjectIds(e||this.createQuery(),t)))}queryAttachments(e,t){return this._getAssociatedLayerForQuery().then((i=>i.queryAttachments(e,t)))}getFieldUsageInfo(e){const t={supportsLabelingInfo:!1,supportsRenderer:!1,supportsPopupTemplate:!1,supportsLayerQuery:!1};return this.loaded?this._fieldUsageInfo[e]||t:(U.getLogger(this).error("#getFieldUsageInfo()","Unavailable until layer is loaded"),t)}createPopupTemplate(e){return $(this,e)}_getAssociatedLayerForQuery(){const e=this.associatedLayer;return e?.loaded?Promise.resolve(e):this._loadAssociatedLayerForQuery()}async _loadAssociatedLayerForQuery(){if(await this.load(),!this.associatedLayer)throw new v("scenelayer:query-not-available","SceneLayer queries are not available without an associated feature layer",{layer:this});try{await this.associatedLayer.load()}catch(e){throw new v("scenelayer:query-not-available","SceneLayer associated feature layer could not be loaded",{layer:this,error:e})}return this.associatedLayer}hasCachedStatistics(e){return null!=this.statisticsInfo&&this.statisticsInfo.some((t=>t.name===e))}async queryCachedStatistics(e,t){return await this.load(t),await this.fetchStatistics(e,t)}async saveAs(e,t){return this._debouncedSaveOperations(me.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"scene"};return this._debouncedSaveOperations(me.SAVE,e)}async applyEdits(e,t){const{applyEdits:i}=await import("./p-572c8d83.js");let s=t;await this.load();const r=this.associatedLayer;if(!r)throw new v(`${this.type}-layer:not-editable`,"Service is not editable");await r.load();const{globalIdField:n}=r,a=!!r.infoFor3D,o=s?.globalIdUsed??!0;if(a&&null==n)throw new v(`${this.type}-layer:not-editable`,"Valid globalIdField expected on editable SceneLayer");if(a&&!o)throw new v(`${this.type}-layer:globalid-required`,"globalIdUsed must not be false for SceneLayer editing as globalIds are required.");return z(r.url)&&a&&null!=e.deleteFeatures&&null!=n&&(s={...s,globalIdToObjectId:await M(r,e.deleteFeatures,n)}),i(this,r.source,e,s)}async uploadAssets(e,t){if(await this.load(),null==this.associatedLayer)throw new v(`${this.type}-layer:not-editable`,"Service is not editable");return await this.associatedLayer.load(),this.associatedLayer.uploadAssets(e,t)}on(e,t){return super.on(e,t)}async convertMesh(e,t){t??={};const i=e=>{throw U.getLogger(this).error(".convertMesh()",e.message),e};await this.load(),this.infoFor3D||i(new v("invalid:layer","SceneLayer has no capability for mesh conversion"));const s=await this.extractAndFilterFiles(e),r=s.reduce(((e,t)=>Se(this.infoFor3D,t)?e+1:e),0);0===r&&i(new ce),r>1&&i(new he);const n=this.spatialReference,a=t.location??new Q({x:0,y:0,z:0,spatialReference:n}),o=a.spatialReference.isGeographic?"local":"georeferenced",l=ue.createWithExternalSource(a,s,{vertexSpace:o,transform:ye(a.spatialReference),unitConversionDisabled:!0}),[d]=await this.uploadAssets([l],{...t,useAssetOrigin:!t.location});return d}async extractAndFilterFiles(e){await this.load();const t=this.infoFor3D;if(!t)return e;return(await Me(e)).filter((e=>Fe(t,e)))}validateLayer(e){if(e.layerType&&!Ke.has(e.layerType))throw new v("scenelayer:layer-type-not-supported","SceneLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new v("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});if(this.version.major>2)throw new v("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x, 2.x"});function t(e,t){let i=!1,s=!1;if(null==e)i=!0,s=!0;else{const r=t&&t.isGeographic;switch(e){case"east-north-up":case"earth-centered":i=!0,s=r;break;case"vertex-reference-frame":i=!0,s=!r;break;default:i=!1}}if(!i)throw new v("scenelayer:unsupported-normal-reference-frame","Normal reference frame is invalid.");if(!s)throw new v("scenelayer:incompatible-normal-reference-frame","Normal reference frame is incompatible with layer spatial reference.")}t(this.normalReferenceFrame,this.spatialReference)}_getTypeKeywords(){const e=[];if("points"===this.profile)e.push("Point");else{if("mesh-pyramids"!==this.profile)throw new v("scenelayer:unknown-profile","SceneLayer:save() encountered an unknown SceneLayer profile: "+this.profile);e.push("3DObject")}return e}_populateFieldUsageInfo(){if(this._fieldUsageInfo={},this.fields)for(const e of this.fields){const t=!!this.attributeStorageInfo?.some((t=>t.name===e.name)),i=!!this.associatedLayer?.fields?.some((t=>t&&e.name===t.name)),s={supportsLabelingInfo:t,supportsRenderer:t,supportsPopupTemplate:t||i,supportsLayerQuery:i};this._fieldUsageInfo[e.name]=s}}_applyAssociatedLayerOverrides(){this._applyAssociatedLayerFieldsOverrides(),this._applyAssociatedLayerPopupOverrides(),this._applyAssociatedLayerExtentOverride(),this._applyAssociatedLayerPrivileges()}_applyAssociatedLayerFieldsOverrides(){if(!this.associatedLayer?.fields)return;let e=null;for(const t of this.associatedLayer.fields){const i=this.getField(t.name);i?(!i.domain&&t.domain&&(i.domain=t.domain.clone()),i.editable=t.editable,i.nullable=t.nullable,i.length=t.length):(e||(e=this.fields?this.fields.slice():[]),e.push(t.clone()))}e&&this._set("fields",e)}_applyAssociatedLayerPopupOverrides(){if(!this.associatedLayer)return;const e=["popupTemplate","popupEnabled"],t=W(this);for(let i=0;i<e.length;i++){const s=e[i],r=this.originIdOf(s),n=this.associatedLayer.originIdOf(s);r<n&&(n===K.SERVICE||n===K.PORTAL_ITEM)&&t.setAtOrigin(s,this.associatedLayer[s],n)}}_applyAssociatedLayerExtentOverride(){const e=this.associatedLayer?.getAtOrigin("fullExtent","service");if(null==this.associatedLayer?.infoFor3D||!e||!z(this.associatedLayer?.url)||!qe(this))return;W(this).setAtOrigin("fullExtent",e.clone(),K.SERVICE)}_applyAssociatedLayerPrivileges(){const e=this.associatedLayer;e&&(this._set("userHasEditingPrivileges",e.userHasEditingPrivileges),this._set("userHasFullEditingPrivileges",e.userHasFullEditingPrivileges),this._set("userHasUpdateItemPrivileges",e.userHasUpdateItemPrivileges))}async _setAssociatedFeatureLayer(e){if(["mesh-pyramids","points"].includes(this.profile))try{const{serverUrl:t,layerId:i,portalItem:s}=await we(`${this.url}/layers/${this.layerId}`,{sceneLayerItem:this.portalItem,customParameters:this.customParameters,apiKey:this.apiKey,signal:e}),r=await Te.FeatureLayer();this.associatedLayer=new r({url:t,customParameters:this.customParameters,layerId:i,portalItem:s}),await this.associatedLayer.load()}catch(e){H(e)||this._logWarningOnPopupEnabled()}}async _logWarningOnPopupEnabled(){await B((()=>this.popupEnabled&&null!=this.popupTemplate));const e=`this SceneLayer: ${this.title}`;null==this.attributeStorageInfo?U.getLogger(this).warn(`Associated FeatureLayer could not be loaded and no binary attributes found. Popups will not work on ${e}`):U.getLogger(this).info(`Associated FeatureLayer could not be loaded. Falling back to binary attributes for Popups on ${e}`)}_validateElevationInfo(){const e=this.elevationInfo;"mesh-pyramids"===this.profile&&Oe(U.getLogger(this),Le("Mesh scene layers","relative-to-scene",e)),Oe(U.getLogger(this),Ee("Scene layers",e))}async fetchStatistics(e,t){return await ze({fieldName:e,statisticsInfo:this.statisticsInfo,errorContext:"scenelayer",fieldsIndex:this.fieldsIndex,path:this.parsedUrl?.path??"",customParameters:this.customParameters,apiKey:this.apiKey,signal:t?.signal})}};e([t({types:{key:"type",base:J,typeMap:{selection:Z}},json:{origins:{"web-scene":{name:"layerDefinition.featureReduction",write:!0},"portal-item":{name:"layerDefinition.featureReduction",write:!0}}}})],He.prototype,"featureReduction",void 0),e([t({type:[Ue],json:{read:!1,origins:{"web-scene":{name:"layerDefinition.rangeInfos",write:!0},"portal-item":{name:"layerDefinition.rangeInfos",write:!0}}}})],He.prototype,"rangeInfos",void 0),e([t({json:{read:!1}})],He.prototype,"associatedLayer",void 0),e([t({type:["show","hide"]})],He.prototype,"listMode",void 0),e([t({type:["ArcGISSceneServiceLayer"]})],He.prototype,"operationalLayerType",void 0),e([t({json:{read:!1},readOnly:!0})],He.prototype,"type",void 0),e([t({...We.fields,readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],He.prototype,"fields",void 0),e([t()],He.prototype,"types",null),e([t()],He.prototype,"typeIdField",null),e([t()],He.prototype,"templates",null),e([t()],He.prototype,"formTemplate",null),e([t()],He.prototype,"attributeTableTemplate",null),e([t({readOnly:!0,clonable:!1})],He.prototype,"fieldsIndex",null),e([t({type:X,json:{read:{source:"layerDefinition.floorInfo"},write:{target:"layerDefinition.floorInfo"}}})],He.prototype,"floorInfo",void 0),e([t(We.outFields)],He.prototype,"outFields",void 0),e([t({type:be,readOnly:!0,json:{read:!1}})],He.prototype,"nodePages",void 0),e([y("service","nodePages",["nodePages","pointNodePages"])],He.prototype,"readNodePages",null),e([t({type:[ve],readOnly:!0})],He.prototype,"materialDefinitions",void 0),e([t({type:[je],readOnly:!0})],He.prototype,"textureSetDefinitions",void 0),e([t({type:[Ie],readOnly:!0})],He.prototype,"geometryDefinitions",void 0),e([t({readOnly:!0})],He.prototype,"serviceUpdateTimeStamp",void 0),e([t({readOnly:!0})],He.prototype,"attributeStorageInfo",void 0),e([t({readOnly:!0})],He.prototype,"statisticsInfo",void 0),e([t({type:d.ofType(Number),nonNullable:!0,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.excludeObjectIds",write:{enabled:!0}}})],He.prototype,"excludeObjectIds",void 0),e([t({type:String,json:{origins:{service:{read:!1,write:!1}},name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],He.prototype,"definitionExpression",void 0),e([t({type:$e,json:{name:"layerDefinition.polygonFilter",write:{enabled:!0,allowNull:!0},origins:{service:{read:!1,write:!1}}}})],He.prototype,"filter",void 0),e([t({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],He.prototype,"path",void 0),e([t(Y)],He.prototype,"elevationInfo",null),e([t({readOnly:!0,json:{read:!1}})],He.prototype,"effectiveCapabilities",null),e([t({readOnly:!0})],He.prototype,"effectiveEditingEnabled",null),e([t({type:String})],He.prototype,"geometryType",null),e([t(ee)],He.prototype,"labelsVisible",void 0),e([t({type:[te],json:{origins:{service:{name:"drawingInfo.labelingInfo",read:{reader:ie},write:!1}},name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ie},write:!0}})],He.prototype,"labelingInfo",void 0),e([t(se)],He.prototype,"legendEnabled",void 0),e([t({type:Number,json:{origins:{"web-document":{default:1,write:{enabled:!0,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}},read:{source:["opacity","layerDefinition.drawingInfo.transparency"],reader(e,t){if("number"==typeof e&&e>=0&&e<=1)return e;const i=t.layerDefinition?.drawingInfo?.transparency;return void 0!==i?re(i):void 0}}},"portal-item":{write:!0},service:{read:!1}}}})],He.prototype,"opacity",void 0),e([t({type:["Low","High"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],He.prototype,"priority",void 0),e([t({type:["Labels"],readOnly:!0,json:{read:!1,origins:{service:{read:!0}}}})],He.prototype,"semantic",void 0),e([t({types:ne,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:!0},value:null})],He.prototype,"renderer",null),e([t({json:{read:!1}})],He.prototype,"cachedDrawingInfo",void 0),e([y("service","cachedDrawingInfo")],He.prototype,"readCachedDrawingInfo",null),e([t({readOnly:!0,json:{read:!1}})],He.prototype,"capabilities",null),e([t({type:Boolean,json:{read:!1}})],He.prototype,"editingEnabled",null),e([t({readOnly:!0,json:{write:!1,read:!1}})],He.prototype,"infoFor3D",null),e([t({readOnly:!0,json:{write:!1,read:!1}})],He.prototype,"relationships",null),e([t(ae)],He.prototype,"popupEnabled",void 0),e([t({type:oe,json:{name:"popupInfo",write:!0}})],He.prototype,"popupTemplate",void 0),e([t({readOnly:!0,json:{read:!1}})],He.prototype,"defaultPopupTemplate",null),e([t({type:String,json:{read:!1}})],He.prototype,"objectIdField",void 0),e([y("service","objectIdField",["objectIdField","fields"])],He.prototype,"readObjectIdField",null),e([t({type:String,json:{read:!1}})],He.prototype,"globalIdField",void 0),e([y("service","globalIdField",["globalIdField","fields"])],He.prototype,"readGlobalIdField",null),e([t({readOnly:!0,type:String,json:{read:!1}})],He.prototype,"displayField",null),e([t({type:String,json:{read:!1}})],He.prototype,"profile",void 0),e([y("service","profile",["store.profile"])],He.prototype,"readProfile",null),e([t({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],He.prototype,"normalReferenceFrame",void 0),e([t(le)],He.prototype,"screenSizePerspectiveEnabled",void 0),e([t({json:{read:!1,origins:{service:{read:!0}}}})],He.prototype,"serviceItemId",void 0),e([t(de)],He.prototype,"useViewTime",null),He=e([i("esri.layers.SceneLayer")],He);const Be={"mesh-pyramids":"mesh-pyramids",meshpyramids:"mesh-pyramids","features-meshes":"mesh-pyramids",points:"points","features-points":"points",lines:"lines","features-lines":"lines",polygons:"polygons","features-polygons":"polygons"},Je={"mesh-pyramids":"mesh",points:"point"},Ze=He;export default Ze;
//# sourceMappingURL=p-70c568ad.js.map