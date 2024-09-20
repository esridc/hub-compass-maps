import{a as t,dc as e,b$ as s,ch as a,dd as r,de as n,df as i,s as o,dg as u,cj as c,b5 as l,an as d,ao as h,ap as p,dh as y,di as f,h as m,dj as w,U as b,aY as g,dk as q,dl as j,dm as I,dn as F,dp as A,dq as S,cB as E,dr as R,ds as x,d5 as v,bm as O,dt as N,du as M,dv as T,bt as _,b_ as C}from"./p-3013819f.js";import{g as P,a as $}from"./p-5bd0bced.js";import{v as D}from"./p-4fb66b05.js";import{isFeatureIdentifierArrayWithGlobalId as J,isFeatureIdentifierArrayWithObjectId as k}from"./p-c4c86fe6.js";import{o as U}from"./p-a047dd27.js";import{x as G}from"./p-a6f8f87f.js";import{F as L}from"./p-c2c5c63d.js";import{s as V}from"./p-8b19323a.js";import"./p-3b51db5e.js";import"./p-1ed893a0.js";import"./p-53be785a.js";import"./p-976040d8.js";import"./p-d9641be7.js";import"./p-71d25f62.js";import"./p-a71453e3.js";import"./p-ad726e47.js";import"./p-94b15954.js";import"./p-1f0b604e.js";import"./p-347800d3.js";import"./p-72299f2e.js";import"./p-ec95a4fb.js";async function W(t,e,s){const{geometry:i}=e,o={...e.attributes};if(null!=s&&"mesh"===i?.type){const{transformFieldRoles:e}=s,{origin:l,spatialReference:d,transform:h,vertexSpace:p}=i,y="local"===p.type,f=t.spatialReference,m=f.isGeographic,w=a(f,d),b=w||u(f)&&(u(d)||c(d));if(!(y&&m&&b||!y&&!m&&w))return null;const g=r(l,d,f);if(null==g)return null;if(o[e.originX]=g.x,o[e.originY]=g.y,o[e.originZ]=g.z??0,null!=h){const{translation:t,scale:s,rotation:a}=h,r=y?1:n(d)/n(f);o[e.translationX]=t[0]*r,o[e.translationY]=t[2]*r,o[e.translationZ]=-t[1]*r,o[e.scaleX]=s[0],o[e.scaleY]=s[2],o[e.scaleZ]=s[1],o[e.rotationX]=a[0],o[e.rotationY]=a[2],o[e.rotationZ]=-a[1],o[e.rotationDeg]=a[3]}return{attributes:o}}return null==i?{attributes:o}:"mesh"===i.type||"extent"===i.type?null:{geometry:i.toJSON(),attributes:o}}async function B(t,e){const s=await Promise.all((e.addAttachments??[]).map((e=>H(t,e)))),a=await Promise.all((e.updateAttachments??[]).map((e=>H(t,e)))),r=e.deleteAttachments??[];return s.length||a.length||r.length?{adds:s,updates:a,deletes:[...r]}:null}async function H(t,e){const{feature:s,attachment:a}=e,{globalId:r,name:n,contentType:o,data:u,uploadId:c}=a,l={globalId:r};if(s&&("attributes"in s?l.parentGlobalId=s.attributes?.[t.globalIdField]:s.globalId&&(l.parentGlobalId=s.globalId)),c)l.uploadId=c;else if(u){const t=await i(u);t&&(l.contentType=t.mediaType,l.data=t.data),u instanceof File&&(l.name=u.name)}return n&&(l.name=n),o&&(l.contentType=o),l}function Q(t,e,s){if(!e||0===e.length)return[];if(s&&J(e))return e.map((t=>t.globalId));if(k(e))return e.map((t=>t.objectId));const a=s?t.globalIdField:t.objectIdField;return a?e.map((t=>t.getAttribute(a))):[]}function Y(t){const e=t?.assetMaps;if(e){for(const t of e.addResults)t.success||o.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${t.globalId}.`);for(const t of e.updateResults)t.success||o.getLogger("esri.layers.graphics.sources.support.sourceUtils").error(`Failed to map asset to feature with globalId ${t.globalId}.`)}const s=t?.attachments,a={addFeatureResults:t?.addResults?.map(z)??[],updateFeatureResults:t?.updateResults?.map(z)??[],deleteFeatureResults:t?.deleteResults?.map(z)??[],addAttachmentResults:s?.addResults?s.addResults.map(z):[],updateAttachmentResults:s?.updateResults?s.updateResults.map(z):[],deleteAttachmentResults:s?.deleteResults?s.deleteResults.map(z):[]};return t?.editMoment&&(a.editMoment=t.editMoment),a}function z(e){const s=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:s?new t("feature-layer-source:edit-failure",s.description,{code:s.code}):null}}function K(t,a){return new e({attributes:t.attributes,geometry:s({...t.geometry,spatialReference:a})})}function X(t,e){return{adds:t?.adds?.map((t=>K(t,e)))||[],updates:t?.updates?.map((t=>({original:K(t[0],e),current:K(t[1],e)})))||[],deletes:t?.deletes?.map((t=>K(t,e)))||[],spatialReference:e}}function Z(t){const e=t.details.raw,s=+e.code,a=+e.extendedCode;return 500===s&&(-2147217144===a||-2147467261===a)}const tt=new l({originalAndCurrentFeatures:"original-and-current-features",none:"none"}),et=new Set(["Feature Layer","Oriented Imagery Layer","Table","Catalog Layer"]),st=new l({Started:"published",Publishing:"publishing",Stopped:"unavailable"});let at=class extends y{constructor(){super(...arguments),this.type="feature-layer",this.refresh=f((async()=>{await this.load();const t=this.sourceJSON.editingInfo?.lastEditDate;if(null==t)return{dataChanged:!0,updates:{}};try{await this._fetchService(null)}catch{return{dataChanged:!0,updates:{}}}const e=t!==this.sourceJSON.editingInfo?.lastEditDate;return{dataChanged:e,updates:e?{editingInfo:this.sourceJSON.editingInfo,extent:this.sourceJSON.extent}:null}})),this._ongoingAssetUploads=new Map}load(t){const e=this.layer.sourceJSON,s=this._fetchService(e,{...t}).then((()=>this.layer.setUserPrivileges(this.sourceJSON.serviceItemId,t))).then((()=>this._ensureLatestMetadata(t)));return this.addResolvingPromise(s),Promise.resolve(this)}get queryTask(){const{capabilities:t,parsedUrl:e,dynamicDataSource:s,infoFor3D:a,gdbVersion:r,spatialReference:n,fieldsIndex:i}=this.layer,o=m("featurelayer-pbf")&&t?.query.supportsFormatPBF&&null==a,u=t?.operations?.supportsQueryAttachments??!1;return new G({url:e.path,pbfSupported:o,fieldsIndex:i,infoFor3D:a,dynamicDataSource:s,gdbVersion:r,sourceSpatialReference:n,queryAttachmentsSupported:u})}async addAttachment(t,e){await this.load();const{layer:s}=this;await w(s,"editing");const a=t.attributes[s.objectIdField],r=s.parsedUrl.path+"/"+a+"/addAttachment",n=this._getLayerRequestOptions(),i=this._getFormDataForAttachment(e,n.query);try{const t=await b(r,{body:i});return z(t.data.addAttachmentResult)}catch(t){throw this._createAttachmentErrorResult(a,t)}}async updateAttachment(t,e,s){await this.load();const{layer:a}=this;await w(a,"editing");const r=t.attributes[a.objectIdField],n=a.parsedUrl.path+"/"+r+"/updateAttachment",i=this._getLayerRequestOptions({query:{attachmentId:e}}),o=this._getFormDataForAttachment(s,i.query);try{const t=await b(n,{body:o});return z(t.data.updateAttachmentResult)}catch(t){throw this._createAttachmentErrorResult(r,t)}}async applyEdits(e,s){await this.load();const{layer:a}=this;await w(a,"editing");const r=a.infoFor3D,n=null!=r,i=n||(s?.globalIdUsed??!1),o=n?await this._uploadMeshesAndGetAssetMapEditsJSON(e):null,u=e.addFeatures?.map((t=>W(this.layer,t,r)))??[],c=(await Promise.all(u)).filter(g),l=e.updateFeatures?.map((t=>W(this.layer,t,r)))??[],d=(await Promise.all(l)).filter(g),h=Q(this.layer,e.deleteFeatures,i);q(c,d,a.spatialReference);const p=await B(this.layer,e),y=a.capabilities.editing.supportsAsyncApplyEdits&&n,f=s?.gdbVersion||a.gdbVersion,m={gdbVersion:f,rollbackOnFailure:s?.rollbackOnFailureEnabled,useGlobalIds:i,returnEditMoment:s?.returnEditMoment,usePreviousEditMoment:s?.usePreviousEditMoment,async:y};await j(this.layer.url,f,!0);const E=I(this.layer.url,f||null);if(await F(a.url,f,a.historicMoment))throw new t("feature-layer-source:historic-version","Editing a historic version is not allowed");s?.returnServiceEditsOption?(m.edits=JSON.stringify([{id:a.layerId,adds:c,updates:d,deletes:h,attachments:p,assetMaps:o}]),m.returnServiceEditsOption=tt.toJSON(s?.returnServiceEditsOption),m.returnServiceEditsInSourceSR=s?.returnServiceEditsInSourceSR):(m.adds=c.length?JSON.stringify(c):null,m.updates=d.length?JSON.stringify(d):null,m.deletes=h.length?i?JSON.stringify(h):h.join(","):null,m.attachments=p&&JSON.stringify(p),m.assetMaps=null!=o?JSON.stringify(o):void 0);const R=this._getLayerRequestOptions({method:"post",query:m});E&&(R.authMode="immediate",R.query.returnEditMoment=!0,R.query.sessionId=A);const x=s?.returnServiceEditsOption?a.url:a.parsedUrl.path;let v;try{v=y?await this._asyncApplyEdits(x+"/applyEdits",R):await b(x+"/applyEdits",R)}catch(t){if(!Z(t))throw t;R.authMode="immediate",v=y?await this._asyncApplyEdits(x+"/applyEdits",R):await b(x+"/applyEdits",R)}if(!a.capabilities.operations?.supportsEditing&&a.effectiveCapabilities?.operations?.supportsEditing){const t=S?.findCredential(a.url);await(t?.refreshToken())}return this._createEditsResult(v)}async deleteAttachments(t,e){await this.load();const{layer:s}=this;await w(s,"editing");const a=t.attributes[s.objectIdField],r=s.parsedUrl.path+"/"+a+"/deleteAttachments";try{return(await b(r,this._getLayerRequestOptions({query:{attachmentIds:e.join(",")},method:"post"}))).data.deleteAttachmentResults.map(z)}catch(t){throw this._createAttachmentErrorResult(a,t)}}fetchRecomputedExtents(t={}){const e=t.signal;return this.load({signal:e}).then((async()=>{const e=this._getLayerRequestOptions({...t,query:{returnUpdates:!0}}),{layerId:s,url:a}=this.layer,{data:r}=await b(`${a}/${s}`,e),{id:n,extent:i,fullExtent:o,timeExtent:u}=r,c=i||o;return{id:n,fullExtent:c&&E.fromJSON(c),timeExtent:u&&R.fromJSON({start:u[0],end:u[1]})}}))}async queryAttachments(t,e={}){await this.load();const s=this._getLayerRequestOptions(e);return this.queryTask.executeAttachmentQuery(t,s)}async queryFeatures(t,e){await this.load();const s=await this.queryTask.execute(t,{...e,query:this._createRequestQueryOptions(e)});return t.outStatistics?.length&&s.features.length&&s.features.forEach((e=>{const s=e.attributes;t.outStatistics?.forEach((({outStatisticFieldName:t})=>{if(t){const e=t.toLowerCase();e&&e in s&&t!==e&&(s[t]=s[e],delete s[e])}}))})),s}async queryFeaturesJSON(t,e){return await this.load(),this.queryTask.executeJSON(t,{...e,query:this._createRequestQueryOptions(e)})}async queryObjectIds(t,e){return await this.load(),this.queryTask.executeForIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryFeatureCount(t,e){return await this.load(),this.queryTask.executeForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryExtent(t,e){return await this.load(),this.queryTask.executeForExtent(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeatures(t,e){return await this.load(),this.queryTask.executeRelationshipQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryRelatedFeaturesCount(t,e){return await this.load(),this.queryTask.executeRelationshipQueryForCount(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopFeatures(t,e){return await this.load(),this.queryTask.executeTopFeaturesQuery(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopObjectIds(t,e){return await this.load(),this.queryTask.executeForTopIds(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopExtents(t,e){return await this.load(),this.queryTask.executeForTopExtents(t,{...e,query:this._createRequestQueryOptions(e)})}async queryTopCount(t,e){return await this.load(),this.queryTask.executeForTopCount(t,{...e,query:this._createRequestQueryOptions(e)})}async fetchPublishingStatus(){if(!x(this.layer.url))return"unavailable";const t=v(this.layer.url,"status"),e=await b(t,{query:{f:"json"}});return st.fromJSON(e.data.status)}async uploadAssets(t,e){const{uploadAssets:s}=await import("./p-84540f21.js");return s(t,{layer:this.layer,ongoingUploads:this._ongoingAssetUploads},e)}async _asyncApplyEdits(e,s){const a=(await b(e,s)).data.statusUrl;for(;;){const e=(await b(a,{query:{f:"json"},responseType:"json"})).data;switch(e.status){case"Completed":return b(e.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new t("async-applyEdits-failed","asynchronous applyEdits call failed.");case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new t("async-applyEdits-failed","asynchronous applyEdits call failed (undefined response status)")}await O(rt)}}_createRequestQueryOptions(t){const e={...this.layer.customParameters,token:this.layer.apiKey,...t?.query};return this.layer.datesInUnknownTimezone&&(e.timeReferenceUnknownClient=!0),e}async _fetchService(e,s){if(!e){const t={};m("featurelayer-advanced-symbols")&&(t.returnAdvancedSymbols=!0),s?.cacheBust&&(t._ts=Date.now());const{data:a}=await b(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:t,signal:s?.signal}));e=a}this.sourceJSON=await this._patchServiceJSON(e,s?.signal);const a=e.type;if(!et.has(a))throw new t("feature-layer-source:unsupported-type",`Source type "${a}" is not supported`)}async _patchServiceJSON(t,e){if("Table"!==t.type&&t.geometryType&&!t?.drawingInfo?.renderer&&!t.defaultSymbol){const e=U(t.geometryType).renderer;N("drawingInfo.renderer",e,t)}if("esriGeometryMultiPatch"===t.geometryType&&t.infoFor3D&&(t.geometryType="mesh"),null==t.extent)try{const{data:s}=await b(this.layer.url,this._getLayerRequestOptions({signal:e}));s.spatialReference&&(t.extent={xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:s.spatialReference})}catch(t){M(t)}return t}async _ensureLatestMetadata(t){if(this.layer.userHasUpdateItemPrivileges&&this.sourceJSON.cacheMaxAge>0)return this._fetchService(null,{...t,cacheBust:!0})}async _uploadMeshesAndGetAssetMapEditsJSON(t){const{addAssetFeatures:e}=t;if(!e?.length)return null;const s=await this._filterRedundantAssetMaps(e);if(!e?.length)return null;const a=new Array,r=new Map;for(const t of s){const{geometry:e}=t,{vertexSpace:s}=e;if(P(s))a.push(e);else{const s=$(e);r.set(s,e),t.geometry=s,a.push(s)}}await this.uploadAssets(a);for(const[t,e]of r)e.addExternalSources(t.metadata.externalSources.items);return{adds:this._getAssetMapEditsJSON(s),updates:[],deletes:[]}}_getAssetMapEditsJSON(t){const e=new Array,s=this.layer.globalIdField,a=this.layer.parsedUrl;for(const r of t){const t=r.geometry,{metadata:n}=t,i=n.getExternalSourcesOnService(a),u=r.getAttribute(s);if(0===i.length){o.getLogger(this).error(`Skipping feature ${u}. The mesh it is associated with has not been uploaded to the service and cannot be mapped to it.`);continue}const{source:c}=i.find(D)??i[0];for(const t of c)1===t.parts.length?e.push({globalId:T(),parentGlobalId:u,assetName:t.assetName,assetHash:t.parts[0].partHash,flags:[]}):o.getLogger(this).error(`Skipping asset ${t.assetName}. It does not have exactly one part, so we cannot map it to a feature.`)}return e}_createEditsResult(t){const e=t.data,{layerId:s}=this.layer,a=[];let r=null;if(Array.isArray(e))for(const t of e)a.push({id:t.id,editedFeatures:t.editedFeatures}),t.id===s&&(r={addResults:t.addResults??[],updateResults:t.updateResults??[],deleteResults:t.deleteResults??[],attachments:t.attachments,editMoment:t.editMoment});else r=e;const n=Y(r);if(a.length>0){n.editedFeatureResults=[];for(const t of a){const{editedFeatures:e}=t,s=e?.spatialReference?new _(e.spatialReference):null;n.editedFeatureResults.push({layerId:t.id,editedFeatures:X(e,s)})}}return n}_createAttachmentErrorResult(e,s){const a=s.details.messages?.[0]||s.message,r=s.details.httpStatus||s.details.messageCode;return{objectId:e,globalId:null,error:new t("feature-layer-source:attachment-failure",a,{code:r})}}_getFormDataForAttachment(t,e){const s=t instanceof FormData?t:t&&t.elements?new FormData(t):null;if(s)for(const t in e){const a=e[t];null!=a&&(s.set?s.set(t,a):s.append(t,a))}return s}_getLayerRequestOptions(t={}){const{parsedUrl:e,gdbVersion:s,dynamicDataSource:a}=this.layer;return{...t,query:{gdbVersion:s,layer:a?JSON.stringify({source:a}):void 0,...e.query,f:"json",...this._createRequestQueryOptions(t)},responseType:"json"}}async _filterRedundantAssetMaps(t){const{layer:e}=this,{globalIdField:s,infoFor3D:a,parsedUrl:r}=e;if(null==a||null==s)return t;const n=L(a);if(null==n)return t;const i=v(r.path,`../${n.id}`),o=new Array,u=new Array;for(const e of t)e.geometry.metadata.getExternalSourcesOnService(r).length>0?u.push(e):o.push(e);const c=u.map((t=>t.getAttribute(s))).filter(g);if(0===c.length)return t;const{assetMapFieldRoles:{parentGlobalId:l,assetHash:d}}=a,h=new C;h.where=`${l} IN (${c.map((t=>`'${t}'`))})`,h.outFields=[d,l],h.returnGeometry=!1;const p=await V(i,h),{features:y}=p;return 0===y.length?t:[...o,...u.filter((t=>{const e=t.getAttribute(s);if(!e)return!0;const{metadata:a}=t.geometry,n=y.filter((t=>t.getAttribute(l)===e));if(0===n.length)return!0;const i=n.map((t=>t.getAttribute(d)));return a.getExternalSourcesOnService(r).flatMap((({source:t})=>t.flatMap((t=>t.parts.map((t=>t.partHash)))))).some((t=>i.every((e=>t!==e))))}))]}};d([h()],at.prototype,"type",void 0),d([h({constructOnly:!0})],at.prototype,"layer",void 0),d([h({readOnly:!0})],at.prototype,"queryTask",null),at=d([p("esri.layers.graphics.sources.FeatureLayerSource")],at);const rt=1e3,nt=at;export default nt;
//# sourceMappingURL=p-cc5c7a0c.js.map