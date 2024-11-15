import{s as t,e,g as s,j as a,k as r,J as i,Q as n,V as o,W as u,n as c,m as l,r as d,p as h,q as p,t as y,v as f,w as m,x as w,y as g,U as b,F as j,z as q,A as I,B as E,C as F,D as A,E as S,G as x,H as R,I as v,K as O,M as C,N as M,O as N,P as T,R as _,T as D,X as P}from"./p-aad64c9f.js";import{a as J}from"./p-17b3a90f.js";import{a as $}from"./p-5d8d2e95.js";import{A as U}from"./p-cde3f633.js";import{N as k}from"./p-e11049fd.js";import{isFeatureIdentifierArrayWithGlobalId as G,isFeatureIdentifierArrayWithObjectId as L}from"./p-572c8d83.js";import{u as V}from"./p-4c90e3f2.js";import{j as W}from"./p-dad6a156.js";import{M as B}from"./p-d5a66c42.js";import{s as H}from"./p-c783c054.js";import"./p-2af77f97.js";import"./p-88dd7081.js";import"./p-dfaba342.js";import"./p-79c28fb7.js";import"./p-93091a88.js";import"./p-1317d6d9.js";import"./p-e33d4456.js";import"./p-07c8b3b5.js";import"./p-1062e8df.js";import"./p-4e60756f.js";import"./p-21ce5524.js";import"./p-aff89b86.js";import"./p-da522976.js";import"./p-d492d39b.js";import"./p-875cbb57.js";async function z(t,e,s){const{geometry:u}=e,c={...e.attributes};if(null!=s&&"mesh"===u?.type){const{transformFieldRoles:e}=s,{origin:l,spatialReference:d,vertexSpace:h}=u,p=u.transform??new k,y="local"===h.type,f=t.spatialReference,m=f.isGeographic,w=a(f,d),g=r(d,f)&&i(d,f);if(!(y&&m&&g||!y&&!m&&w))return null;const b=n(l,d,f);if(null==b)return null;if(c[e.originX]=b.x,c[e.originY]=b.y,c[e.originZ]=b.z??0,null!=p){const{translation:t,scale:s,rotation:a}=p,r=y?1:o(d)/o(f);c[e.translationX]=t[0]*r,c[e.translationY]=t[2]*r,c[e.translationZ]=-t[1]*r,c[e.scaleX]=s[0],c[e.scaleY]=s[2],c[e.scaleZ]=s[1],c[e.rotationX]=a[0],c[e.rotationY]=a[2],c[e.rotationZ]=-a[1],c[e.rotationDeg]=a[3]}return{attributes:c}}return null==u?{attributes:c}:"mesh"===u.type||"extent"===u.type?null:{geometry:u.toJSON(),attributes:c}}async function K(t,e){const s=await Promise.all((e.addAttachments??[]).map((e=>Q(t,e)))),a=await Promise.all((e.updateAttachments??[]).map((e=>Q(t,e)))),r=e.deleteAttachments??[];return s.length||a.length||r.length?{adds:s,updates:a,deletes:[...r]}:null}async function Q(t,e){const{feature:s,attachment:a}=e,{globalId:r,name:i,contentType:n,data:o,uploadId:c}=a,l={globalId:r};if(s&&("attributes"in s?l.parentGlobalId=s.attributes?.[t.globalIdField]:s.globalId&&(l.parentGlobalId=s.globalId)),c)l.uploadId=c;else if(o){const t=await u(o);t&&(l.contentType=t.mediaType,l.data=t.data),o instanceof File&&(l.name=o.name)}return i&&(l.name=i),n&&(l.contentType=n),l}function X(t,e,s){if(!e||0===e.length)return[];if(s&&G(e))return e.map((t=>t.globalId));if(L(e))return e.map((t=>t.objectId));const a=s?t.globalIdField:t.objectIdField;return a?e.map((t=>t.getAttribute(a))):[]}function Y(t){const e=t?.assetMaps;if(e){for(const t of e.addResults)t.success||c.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${t.globalId}.`);for(const t of e.updateResults)t.success||c.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${t.globalId}.`)}const s=t?.attachments,a={addFeatureResults:t?.addResults?.map(Z)??[],updateFeatureResults:t?.updateResults?.map(Z)??[],deleteFeatureResults:t?.deleteResults?.map(Z)??[],addAttachmentResults:s?.addResults?s.addResults.map(Z):[],updateAttachmentResults:s?.updateResults?s.updateResults.map(Z):[],deleteAttachmentResults:s?.deleteResults?s.deleteResults.map(Z):[]};return t?.editMoment&&(a.editMoment=t.editMoment),a}function Z(e){const s=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:s?new t("feature-layer-source:edit-failure",s.description,{code:s.code}):null}}function tt(t,a){return new e({attributes:t.attributes,geometry:s({...t.geometry,spatialReference:a})})}function et(t,e){return{adds:t?.adds?.map((t=>tt(t,e)))||[],updates:t?.updates?.map((t=>({original:tt(t[0],e),current:tt(t[1],e)})))||[],deletes:t?.deletes?.map((t=>tt(t,e)))||[],spatialReference:e}}function st(t){const e=t.details.raw,s=+e.code,a=+e.extendedCode;return 500===s&&(-2147217144===a||-2147467261===a)}const at=new l({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),rt=new l({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let it=class extends y{constructor(t){super(t),this.type="feature-layer",this.supportedSourceTypes=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),this.refresh=f((async()=>{await this.load();const t=this.sourceJSON.editingInfo?.lastEditDate;if(null==t)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const e=t!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:e,updates:e?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})),this._ongoingAssetUploads=new Map}load(t){const e=this.layer.sourceJSON,s=this._fetchService(e,{...t}).then((()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,t))).then((()=>this._ensureLatestMetadata(t)));return this.addResolvingPromise(s),Promise.resolve(this)}initialize(){this.addHandles([m((()=>{const t=this.layer;return t&&"lastEditsEventDate"in t?t.lastEditsEventDate:null}),(t=>this._handleLastEditsEventChange(t)))])}destroy(){this._removeEditInterceptor()}get queryTask(){const{capabilities:t,parsedUrl:e,gdbVersion:s,spatialReference:a,fieldsIndex:r}=this.layer,i="infoFor3D"in this.layer?this.layer.infoFor3D:null,n="dynamicDataSource"in this.layer?this.layer.dynamicDataSource:null,o=w("featurelayer-pbf")&&t?.query.supportsFormatPBF&&null==i,u=t?.operations?.supportsQueryAttachments??!1;return new W({url:e.path,pbfSupported:o,fieldsIndex:r,infoFor3D:i,dynamicDataSource:n,gdbVersion:s,sourceSpatialReference:a,queryAttachmentsSupported:u})}async addAttachment(t,e){await this.load();const{layer:s}=this;await g(s,"editing");const a=t.attributes[s.objectIdField],r=s.parsedUrl.path+"/"+a+"/addAttachment",i=this._getLayerRequestOptions(),n=this._getFormDataForAttachment(e,i.query);try{const t=await b(r,{body:n});return Z(t.data.addAttachmentResult)}catch(t){throw this._createAttachmentErrorResult(a,t)}}async updateAttachment(t,e,s){await this.load();const{layer:a}=this;await g(a,"editing");const r=t.attributes[a.objectIdField],i=a.parsedUrl.path+"/"+r+"/updateAttachment",n=this._getLayerRequestOptions({query:{attachmentId:e}}),o=this._getFormDataForAttachment(s,n.query);try{const t=await b(i,{body:o});return Z(t.data.updateAttachmentResult)}catch(t){throw this._createAttachmentErrorResult(r,t)}}async applyEdits(e,s){await this.load();const{layer:a}=this;await g(a,"editing");const r="infoFor3D"in a?a.infoFor3D:null,i=null!=r,n=i||(s?.globalIdUsed??!1),o=i?await this._uploadMeshesAndGetAssetMapEditsJSON(e):null,u=e.addFeatures?.map((t=>z(this.layer,t,r)))??[],c=(await Promise.all(u)).filter(j),l=e.updateFeatures?.map((t=>z(this.layer,t,r)))??[],d=(await Promise.all(l)).filter(j),h=X(this.layer,e.deleteFeatures,n);q(c,d,a.spatialReference);const p=await K(this.layer,e),y=a.capabilities.editing.supportsAsyncApplyEdits&&i,f=s?.gdbVersion||a.gdbVersion,m={gdbVersion:f,rollbackOnFailure:s?.rollbackOnFailureEnabled,useGlobalIds:n,returnEditMoment:s?.returnEditMoment,usePreviousEditMoment:s?.usePreviousEditMoment,async:y};await I(this.layer.url,f,!0);const w=E(this.layer.url,f||null);if(await F(a.url,f,a.historicMoment))throw new t("feature-layer-source:historic-version","Editing a historic version is not allowed");s?.returnServiceEditsOption?(m.edits=JSON.stringify([{id:a.layerId,adds:c.length?c:null,updates:d.length?d:null,deletes:h.length?h:null,attachments:p,assetMaps:o}]),m.returnServiceEditsOption=at.toJSON(s?.returnServiceEditsOption),m.returnServiceEditsInSourceSR=s?.returnServiceEditsInSourceSR):(m.adds=c.length?JSON.stringify(c):null,m.updates=d.length?JSON.stringify(d):null,m.deletes=h.length?n?JSON.stringify(h):h.join(","):null,m.attachments=p&&JSON.stringify(p),m.assetMaps=null!=o?JSON.stringify(o):void 0);const S=this._getLayerRequestOptions({method:"post",query:m});w&&(S.authMode="immediate",S.query.returnEditMoment=!0,S.query.sessionId=A);const x=s?.returnServiceEditsOption?a.url:a.parsedUrl.path;let R;try{R=y?await this._asyncApplyEdits(x+"/applyEdits",S):await b(x+"/applyEdits",S)}catch(t){if(!st(t))throw t;S.authMode="immediate",R=y?await this._asyncApplyEdits(x+"/applyEdits",S):await b(x+"/applyEdits",S)}return this._createEditsResult(R)}async deleteAttachments(t,e){await this.load();const{layer:s}=this;await g(s,"editing");const a=t.attributes[s.objectIdField],r=s.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await b(r,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(Z)}catch(t){throw this._createAttachmentErrorResult(a,t)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then((async()=>{const e=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:s,url:a}=this.layer,{data:r}=await b(`${a}/${s}`,e),{id:i,extent:n,fullExtent:o,timeExtent:u}=r,c=n||o;return{id:i,fullExtent:c&&S.fromJSON(c),timeExtent:u&&x.fromJSON({start:u[0],end:u[1]})}}))}async queryAttachments(t,e={}){await this.load();const s=this._getLayerRequestOptions(e);return this.queryTask.executeAttachmentQuery(t,s)}async queryFeatures(t,e){await this.load();const s=await this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)});return t.outStatistics?.length&&s.features.length&&s.features.forEach((e=>{const s=e.attributes;t.outStatistics?.forEach((({outStatisticFieldName:t})=>{if(t){const e=t.toLowerCase();e&&e in s&&t!==e&&(s[t]=s[e],delete s[e])}}))})),s}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryBins(t,e){return await this.load(),this.queryTask.executeBinsQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}async fetchPublishingStatus(){if(!R(this.layer.url))return"unavailable";const t=v(this.layer.url,"status"),e=await b(t,{query:{f:"json"}});return rt.fromJSON(e.data.status)}async uploadAssets(t,e){const{uploadAssets:s}=await import("./p-a5b7baa9.js");return s(t,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},e)}_handleLastEditsEventChange(t){const e=this.layer;if(null==t||!("capabilities"in e)||!("effectiveCapabilities"in e))return;if(!(!e.capabilities?.operations?.supportsEditing&&e.effectiveCapabilities?.operations?.supportsEditing))return;const s=e.url;if(null==s)return;"layerId"in e&&v(s,e.layerId.toString());this._getOrCreateEditInterceptor(s).before=e=>{const s=e.requestOptions.method??"auto";if("auto"===s||"head"===s){const s=e.requestOptions.query??{};s._ts=t.getTime(),e.requestOptions.query=s}}}_getOrCreateEditInterceptor(t){return null==this._editInterceptor&&(this._editInterceptor={urls:t},O.request.internalInterceptors.push(this._editInterceptor)),this._editInterceptor}_removeEditInterceptor(){null!=this._editInterceptor&&(C(O.request.internalInterceptors,this._editInterceptor),this._editInterceptor=null)}async _asyncApplyEdits(e,s){const a=(await b(e,s)).data.statusUrl;for(;;){const e=(await b(a,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return b(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new t("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new t("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await M(nt)}}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t?.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(e,s){if(!e){const t={};w("featurelayer-advanced-symbols")&&(t.returnAdvancedSymbols=!0),s?.cacheBust&&(t._ts=Date.now());const{data:a}=await b(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:t,signal:s?.signal}));e=a}this.sourceJSON=await this._patchServiceJSON(e,s?.signal);const a=e.type;if(!this.supportedSourceTypes.has(a))throw new t("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}async _patchServiceJSON(t,e){if("Table"!==t.type&&t.geometryType&&!t?.drawingInfo?.renderer&&!t.defaultSymbol){const e=V(t.geometryType).renderer;N("drawingInfo.renderer",e,t)}if("esriGeometryMultiPatch"===t.geometryType&&t.infoFor3D&&(t.geometryType="mesh"),null==t.extent)try{const{data:s}=await b(this.layer.url,this._getLayerRequestOptions({signal:e}));s.spatialReference&&(t.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:s.spatialReference})}catch(t){T(t)}return t}async _ensureLatestMetadata(t){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...t,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(e){const{addAssetFeatures:s}=e;if(!s?.length)return null;if(await this._areAllAssetsAlreadyMapped(s))return null;const a=e.addFeatures.filter((t=>t.geometry));if(s.length!==a.length+e.updateFeatures.length)throw new t("feature-layer-source:unsupported-mesh-edits","Mixing attribute only edits with mesh geometry edits is not currently supported");const r=new Array,i=new Map;for(const t of s){const{geometry:e}=t,{vertexSpace:s}=e;if($(s))r.push(e);else{const s=e.origin,{convertMeshVertexSpace:a}=await import("./p-86731423.js"),n=await a(e,new J({origin:[s.x,s.y,s.z??0]}));i.set(n,e),t.geometry=n,r.push(n)}}await this.uploadAssets(r);for(const[t,e]of i)e.addExternalSources(t.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(s),updates:[],deletes:[]}}_getAssetMapEditsJSON(t){const e=new Array,s=this.layer.globalIdField,a=this.layer.parsedUrl;for(const r of t){const t=r.geometry,{metadata:i}=t,n=i.getExternalSourcesOnService(a),o=r.getAttribute(s);if(0===n.length){c.getLogger(this).error(`Skipping feature ${o}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:u}=n.find(U)??n[0];for(const t of u)1===t.parts.length?e.push({globalId:_(),parentGlobalId:o,assetName:t.assetName,assetHash:t.parts[0].partHash,flags:[]}):c.getLogger(this).error(`Skipping asset ${t.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return e}_createEditsResult(t){const e=t.data,{layerId:s}=this.layer,a=[];let r=null;if(Array.isArray(e))for(const t of e)a.push({id:t.id,editedFeatures:t.editedFeatures}),t.id===s&&(r={addResults:t.addResults??[],updateResults:t.updateResults??[],deleteResults:t.deleteResults??[],attachments:t.attachments,editMoment:t.editMoment});else r=e;const i=Y(r);if(a.length>0){i.editedFeatureResults=[];for(const t of a){const{editedFeatures:e}=t,s=e?.spatialReference?new D(e.spatialReference):null;i.editedFeatureResults.push({layerId:t.id,editedFeatures:et(e,s)})}}return i}_createAttachmentErrorResult(e,s){const a=s.details.messages?.[0]||s.message,r=s.details.httpStatus||s.details.messageCode;return{objectId:e,globalId:null,error:new t("feature-layer-source:attachment-failure",a,{code:r})}}_getFormDataForAttachment(t,e){const s=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(s)for(const t in e){const a=e[t];null!=a&&(s.set?s.set(t,a):s.append(t,a))}return s}_getLayerRequestOptions(t={}){const{layer:e,layer:{parsedUrl:s,gdbVersion:a}}=this;return{...t,query:{gdbVersion:a,layer:"dynamicDataSource"in e&&e.dynamicDataSource?JSON.stringify({source:e.dynamicDataSource}):void 0,...s.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}async _areAllAssetsAlreadyMapped(t){const{layer:e}=this,{globalIdField:s,parsedUrl:a}=e,r="infoFor3D"in e?e.infoFor3D:null;if(null==r||null==s)return!1;const i=B(r);if(null==i)return!1;const n=v(a.path,`../${i.id}`),o=new Array;for(const e of t){if(!(e.geometry.metadata.getExternalSourcesOnService(a).length>0))return!1;o.push(e)}const u=o.map((t=>t.getAttribute(s))).filter(j);if(0===u.length)return!1;const{assetMapFieldRoles:{parentGlobalId:c,assetHash:l}}=r,d=new P({where:`${c} IN (${u.map((t=>`'${t}'`))})`,outFields:[l,c],returnGeometry:!1}),h=await H(n,d),{features:p}=h;return 0!==p.length&&!o.some((t=>{const e=t.getAttribute(s);if(!e)return!0;const{metadata:r}=t.geometry,i=p.filter((t=>t.getAttribute(c)===e));if(0===i.length)return!0;const n=i.map((t=>t.getAttribute(l)));return r.getExternalSourcesOnService(a).flatMap((({source:t})=>t.flatMap((t=>t.parts.map((t=>t.partHash)))))).some((t=>n.every((e=>t!==e))))}))}};d([h()],it.prototype,"type",void 0),d([h({constructOnly:!0})],it.prototype,"layer",void 0),d([h({constructOnly:!0})],it.prototype,"supportedSourceTypes",void 0),d([h({readOnly:!0})],it.prototype,"queryTask",null),it=d([p("esri.layers.graphics.sources.FeatureLayerSource")],it);const nt=1e3,ot=it;export default ot;
//# sourceMappingURL=p-00d0ebf5.js.map