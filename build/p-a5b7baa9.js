import{rr as s,hc as t,x as e,hP as o,rs as n,fQ as r,I as a,U as i,a3 as c,H as u,R as l,P as p,n as f,W as d,T as m,N as h}from"./p-aad64c9f.js";import{m as w,a as y,i as g,b,N as T}from"./p-cde3f633.js";import{r as j,n as A,u as P,p as v,a as I,d as E,c as F,l as D,t as M,b as N}from"./p-a4b98f81.js";import{m as C,l as S,s as q,u as x,a as R}from"./p-d5a66c42.js";import{i as B,n as $}from"./p-f03dac64.js";import"./p-2af77f97.js";import"./p-e11049fd.js";import"./p-88dd7081.js";import"./p-dfaba342.js";import"./p-79c28fb7.js";import"./p-93091a88.js";const U={upload:{createFromFiles:.8,loadMesh:.2},uploadAssetBlobs:{prepareAssetItems:.9,uploadAssetItems:.1},uploadConvertibleSource:{uploadEditSource:.5,serviceAssetsToGlb:.5},uploadLocalMesh:{meshToAssetBlob:.5,uploadAssetBlobs:.5}};function k(s,t=(s=>{}),e){return new H(s,t,e)}class H{constructor(s,t=(s=>{}),e){if(this.onProgress=t,this.taskName=e,this._progressMap=new Map,this._startTime=void 0,this._timingsMap=new Map,"number"==typeof s){this._weights={};for(let t=0;t<s;t++){const e=t,o=1/s;this._weights[e]=o,this._progressMap.set(e,0)}}else this._weights=s;this.emitProgress()}emitProgress(){let s=0;for(const[t,e]of this._progressMap.entries()){s+=e*this._weights[t]}if(1===s&&e("enable-feature:esri-3dofl-upload-timings")){const s=Math.round(performance.now()-(this._startTime??0))/1e3;console.log(`${this.taskName} done in ${s} sec`);for(const[t,e]of this._timingsMap){const o=Math.round(e.end-e.start)/1e3,n=Math.round(o/s*100);console.log(this.taskName??"Task",{stepKey:t,stepTime:o,relativeTime:n})}}this.onProgress(s)}setProgress(s,t){if(this._progressMap.set(s,t),e("enable-feature:esri-3dofl-upload-timings")){const e=performance.now();this._startTime??=e;const n=o(this._timingsMap,s,(()=>({start:e,end:0})));1===t&&(n.end=e)}this.emitProgress()}simulate(s,t){return L((t=>this.setProgress(s,t)),t)}makeOnProgress(s){return t=>this.setProgress(s,t)}}function L(s=(s=>{}),e=Q){const o=performance.now();s(0);const n=setInterval((()=>{const t=performance.now()-o,n=1-Math.exp(-t/e);s(n)}),K);return t((()=>{clearInterval(n),s(1)}))}function O(t,e=J){return s(n(t*_/e))}function G(t,e=W){return s(n(t*_/e))}const J=10,W=10,_=8e-6,K=r(50),Q=r(1e3);const z=1e6,V=20*z,X=2e9,Y=3;async function Z({data:s,name:t,description:e},o,n){let r=null;try{const l=a(o,"uploads"),p=a(l,"info"),{data:f}=await i(p,{query:{f:"json"},responseType:"json"});c(n);const d=u(o),m=f.maxUploadFileSize*z,h=d?X:m,w=d?Math.min(V,m):V;if(s.size>h)throw new Error("Data too large");const y=a(l,"register"),{data:g}=await i(y,{query:{f:"json",itemName:ss(t),description:e},responseType:"json",method:"post"});if(c(n),!g.success)throw new Error("Registration failed");const{itemID:b}=g.item;r=a(l,b);const T=a(r,"uploadPart"),j=Math.ceil(s.size/w),A=new Array;for(let t=0;t<j;++t)A.push(s.slice(t*w,Math.min((t+1)*w,s.size)));const P=A.slice().reverse(),v=new Array,I=k(j,n?.onProgress,"uploadItem"),E=async()=>{for(;0!==P.length;){const s=A.length-P.length,t=P.pop(),e=new FormData,o=I.simulate(s,O(t.size));try{e.append("f","json"),e.append("file",t),e.append("partId",`${s}`);const{data:r}=await i(T,{timeout:0,body:e,responseType:"json",method:"post"});if(c(n),!r.success)throw new Error("Part upload failed")}finally{o.remove()}}};for(let s=0;s<Y&&0!==P.length;++s)v.push(E());await Promise.all(v);const F=a(r,"commit"),{data:D}=await i(F,{query:{f:"json",parts:A.map(((s,t)=>t)).join(",")},responseType:"json",method:"post"});if(c(n),!D.success)throw new Error("Commit failed");return D.item}catch(s){if(null!=r){const s=a(r,"delete");await i(s,{query:{f:"json"},responseType:"json",method:"post"})}throw s}}function ss(s){return s.replaceAll("/","_").replaceAll("\\","_")}async function ts(s,t,e){const o=s.length;if(!o)return e?.onProgress?.(1),[];const n=k(o,e?.onProgress,"uploadAssets");return Promise.all(s.map(((s,o)=>es(s,t,{...e,onProgress:n.makeOnProgress(o)}))))}async function es(s,{layer:t,ongoingUploads:e},o){const n=e.get(s);if(n)return n;if(!Ps(t))throw new j;if(os(s,t))return o?.onProgress?.(1),s;const r=ns(s,t,o);e.set(s,r);try{await r}finally{e.delete(s)}return s}function os(s,t){const{parsedUrl:e}=t;return null!=e&&s.metadata.externalSources.some((s=>w(s,e)))}async function ns(s,t,o){const{metadata:n}=s,{displaySource:r}=n,a=ls(r?.source,t,{checkForConversionRequired:e("enable-feature:georeferenced-uploads")}),i=null!=a?rs(a,t,o):n.externalSources.length>0?as(s,t,o):is(s,t,o),u=await i;return c(o),s.addExternalSources([u]),s}async function rs(s,t,e){return{source:await fs(s,t,e),original:!0,unitConversionDisabled:!0}}async function as(s,t,e){const o=vs(t),{externalSources:n}=s.metadata,r=us(n,t);if(!r)throw new A;const a=k(U.uploadConvertibleSource,e?.onProgress,"uploadConvertibleSource"),i=await fs(r,t,{onProgress:a.makeOnProgress("uploadEditSource")});s.addExternalSources([{source:i,original:!0}]);const c=r.reduce(((s,{asset:t})=>t instanceof File?s+t.size:s),0),u=a.simulate("serviceAssetsToGlb",G(c));try{const{source:n,transform:r,origin:a}=await bs(i,t,o);return s.transform=r,a&&(s.metadata.georeferenced=!0,e?.useAssetOrigin&&(s.vertexSpace.origin=[a.x,a.y,a.z??0],s.spatialReference=a.spatialReference)),{source:n,unitConversionDisabled:!0}}finally{u.remove()}}async function is(s,t,e){const o=k(U.uploadLocalMesh,e?.onProgress,"uploadLocalMesh"),n=cs(s,t,{...e,onProgress:o.makeOnProgress("meshToAssetBlob")});return{source:await ds([n],t,{...e,onProgress:o.makeOnProgress("uploadAssetBlobs")}),extent:s.extent.clone(),original:!0}}async function cs(s,t,e){const o=vs(t),n=await s.load(e),r=await n.toBinaryGLTF({origin:n.origin,signal:e?.signal,ignoreLocalTransform:!0,unitConversionDisabled:!0});return c(e),{blob:new Blob([r],{type:"model/gltf-binary"}),assetName:`${l()}.glb`,assetType:o}}function us(s,t){for(const e of s){const s=ls(e.source,t);if(s)return s}return null}function ls(s,{infoFor3D:t},e={}){if(!s)return null;const{supportedFormats:o,editFormats:n}=t,r=T(s),a=new Array,i=C(t),c=S(t);let u=!1;for(const s of r){const t=ps(s,o);if(!t)return null;const{assetType:r}=t;if(e.checkForConversionRequired&&(r===i||r===c))return null;n.includes(r)&&(u=!0),a.push(t)}return u?a:null}function ps(s,t){const e=b(s,t);return e?{asset:s,assetType:e}:null}async function fs(s,t,e){return ds(s.map((s=>ms(s,e))),t,e)}async function ds(s,t,e){const o=k(U.uploadAssetBlobs,e?.onProgress,"uploadAssetBlobs"),n=await ws(s,t,{...e,onProgress:o.makeOnProgress("prepareAssetItems")});c(e);const r=n.map((({item:s})=>s)),{uploadResults:a}=await ys(r,t,{...e,onProgress:o.makeOnProgress("uploadAssetItems")});return c(e),s.map(((s,e)=>gs(n[e],a[e],t)))}async function ms(s,t){const{asset:e,assetType:o}=s;if(e instanceof File)return{blob:e,assetName:e.name,assetType:o};const n=await e.toBlob(t);return c(t),{blob:n,assetName:e.assetName,assetType:o}}async function hs(s,t,e){const{blob:o,assetType:n,assetName:r}=s;let a=null;try{const s=await Z({data:o,name:r},t.url,e);c(e),a={assetType:n,assetUploadId:s.itemID}}catch(s){p(s),Is().warnOnce(`Service ${t.url} does not support the REST Uploads API.`)}if(!a){const s=await d(o);if(c(e),!s.isBase64)throw new P;a={assetType:n,assetData:s.data}}if(!a)throw new v;return{item:a,assetName:r}}function ws(s,t,e){const o=k(s.length,e?.onProgress,"prepareAssetItems");return Promise.all(s.map((async(s,n)=>{const r=hs(await s,t,{...e,onProgress:o.makeOnProgress(n)});return c(e),r})))}async function ys(s,t,e){const o=L(e?.onProgress);try{const o=await i(a(t.parsedUrl.path,"uploadAssets"),{timeout:0,query:{f:"json",assets:JSON.stringify(s)},method:"post",responseType:"json"});if(c(e),o.data.uploadResults.length!==s.length)throw new I(s.length,o.data.uploadResults.length);return o.data}finally{o.remove()}}function gs(s,t,e){const{success:o}=t;if(!o){const{error:e}=t;throw new E(s.assetName,e)}const{assetHash:n}=t,{assetName:r,item:{assetType:a}}=s,{infoFor3D:{supportedFormats:i}}=e,c=q(a,i);if(!c)throw new F(a);return new y(r,c,[new g(`${e.parsedUrl.path}/assets/${n}`,n)])}async function bs(s,t,e){const o=s.map((({assetName:s,parts:t})=>({assetName:s,assetHash:t[0].partHash})));let n;try{const s=a(t.parsedUrl.path,"convert3D"),r=t.capabilities?.operations.supportsAsyncConvert3D;n=(await(r?As:js)(s,{query:{f:"json",assets:JSON.stringify(o),transportType:"esriTransportTypeUrl",targetFormat:e,async:r},responseType:"json",timeout:0})).data}catch(s){throw new D}return Ts(t,n)}function Ts(s,t){const o={source:t.assets.map((t=>{const e=x(t.contentType,s.infoFor3D.supportedFormats);if(!e)throw new F(e);return new y(t.assetName,t.contentType,[new g(t.assetURL,t.assetHash)])})),origin:void 0,transform:void 0};if(e("enable-feature:georeferenced-uploads")&&t.transform){if(o.transform=B(t.transform),t.spatialReference){const s=m.fromJSON(t.spatialReference);o.origin=$(t.transform,s)}}else o.transform=M(s.spatialReference);return o}function js(s,t){return i(s,t)}async function As(s,t){const e=(await i(s,t)).data.statusUrl;for(;;){const s=(await i(e,{query:{f:"json"},responseType:"json"})).data;switch(s.status){case"Completed":return i(s.resultUrl,{query:{f:"json"},responseType:"json"});case"CompletedWithErrors":throw new Error(s.status);case"Failed ImportChanges":case"InProgress":case"Pending":case"ExportAttachments":case"ExportChanges":case"ExportingData":case"ExportingSnapshot":case"ImportAttachments":case"ProvisioningReplica":case"UnRegisteringReplica":break;default:throw new Error}await h(Es)}}function Ps(s){return!!s.infoFor3D&&!!s.url}function vs({infoFor3D:s}){const t=R(s);if(!t)throw new N;return t}function Is(){return f.getLogger("esri.layers.graphics.sources.support.uploadAssets")}const Es=r(1e3);export{ts as uploadAssets};
//# sourceMappingURL=p-a5b7baa9.js.map