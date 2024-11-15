import{d8 as t,de as e,rG as r,s as n,n_ as o,ax as s,rF as a,c9 as i,hP as u,m0 as l,nW as c,rH as f,m1 as d,mF as h,pN as p,qJ as w,n as m,d3 as g}from"./p-aad64c9f.js";import{e as T,r as x}from"./p-88dd7081.js";import{v as b}from"./p-dfaba342.js";import{e as v}from"./p-93091a88.js";import{g as y,d as _,i as A,c as M,u as O,x as S,L as N,O as R,E,F,w as C,q as U,A as I,V as L,B as P}from"./p-fa12d64c.js";import{n as D,t as k,o as B,r as j}from"./p-c2c2e8b2.js";import"./p-2af77f97.js";import"./p-79c28fb7.js";import"./p-dc92c2ea.js";function V(t,e){const r=t.count;e||(e=new t.TypedArrayConstructor(r));for(let n=0;n<r;n++)e[n]=t.get(n);return e}Object.freeze(Object.defineProperty({__proto__:null,makeDense:V},Symbol.toStringTag,{value:"Module"}));function $(t={}){return{color:[1,1,1],opacity:1,alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1,castShadows:!0,receiveShadows:!0,receiveAmbientOcclustion:!0,textureColor:null,textureNormal:null,textureOcclusion:null,textureEmissive:null,textureMetallicRoughness:null,colorTextureTransform:null,normalTextureTransform:null,occlusionTextureTransform:null,emissiveTextureTransform:null,metallicRoughnessTextureTransform:null,emissiveFactor:[0,0,0],metallicFactor:1,roughnessFactor:1,colorMixMode:"multiply",...t}}function G(e,r={}){return{data:e,parameters:{wrap:{s:t.REPEAT,t:t.REPEAT,...r.wrap},noUnpackFlip:!0,mipmap:!1,...r}}}class H{constructor(t){this._data=t,this._offset4=0,this._dataUint32=new Uint32Array(this._data,0,Math.floor(this._data.byteLength/4))}readUint32(){const t=this._offset4;return this._offset4+=1,this._dataUint32[t]}readUint8Array(t){const e=4*this._offset4;return this._offset4+=t/4,new Uint8Array(this._data,e,t)}remainingBytes(){return this._data.byteLength-4*this._offset4}}var J,z;!function(t){t.SCALAR="SCALAR",t.VEC2="VEC2",t.VEC3="VEC3",t.VEC4="VEC4",t.MAT2="MAT2",t.MAT3="MAT3",t.MAT4="MAT4"}(J||(J={})),function(t){t[t.ARRAY_BUFFER=34962]="ARRAY_BUFFER",t[t.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER"}(z||(z={}));const K={baseColorFactor:[1,1,1,1],metallicFactor:1,roughnessFactor:1},q={pbrMetallicRoughness:K,emissiveFactor:[0,0,0],alphaMode:"OPAQUE",alphaCutoff:.5,doubleSided:!1},X={ESRI_externalColorMixMode:"tint",ESRI_receiveShadows:!0,ESRI_receiveAmbientOcclusion:!0},Y=(t={})=>{const e={...K,...t.pbrMetallicRoughness},r=Q({...X,...t.extras});return{...q,...t,pbrMetallicRoughness:e,extras:r}};function Q(t){switch(t.ESRI_externalColorMixMode){case"multiply":case"tint":case"ignore":case"replace":break;default:t.ESRI_externalColorMixMode="tint"}return t}const W={magFilter:e.LINEAR,minFilter:e.LINEAR_MIPMAP_LINEAR,wrapS:t.REPEAT,wrapT:t.REPEAT},Z=t=>({...W,...t});function tt(t){let e,r;return t.replace(/^(.*\/)?([^/]*)$/,((t,n,o)=>(e=n||"",r=o||"",""))),{dirPart:e,filePart:r}}const et={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};class rt{constructor(t,e,r,o){if(this._context=t,this.uri=e,this.json=r,this._glbBuffer=o,this._bufferLoaders=new Map,this._textureLoaders=new Map,this._textureCache=new Map,this._materialCache=new Map,this._nodeParentMap=new Map,this._nodeTransformCache=new Map,this._supportedExtensions=["KHR_texture_basisu","KHR_texture_transform"],this._baseUri=tt(this.uri).dirPart,this._checkVersionSupported(),this._checkRequiredExtensionsSupported(),null==r.scenes)throw new n("gltf-loader-unsupported-feature","Scenes must be defined.");if(null==r.meshes)throw new n("gltf-loader-unsupported-feature","Meshes must be defined");if(null==r.nodes)throw new n("gltf-loader-unsupported-feature","Nodes must be defined.");this._computeNodeParents()}static async load(t,e,r){if(o(e)){const r=s(e);if(r&&"model/gltf-binary"!==r.mediaType)try{const n=JSON.parse(r.isBase64?atob(r.data):r.data);return new rt(t,e,n)}catch{}const n=a(e);if(rt._isGLBData(n))return this._fromGLBData(t,e,n)}if(ft.test(e)||"gltf"===r?.expectedType){const n=await t.loadJSON(e,r);return new rt(t,e,n)}const i=await t.loadBinary(e,r);if(rt._isGLBData(i))return this._fromGLBData(t,e,i);if(dt.test(e)||"glb"===r?.expectedType)throw new n("gltf-loader-invalid-glb","This is not a valid glb file.");const u=await t.loadJSON(e,r);return new rt(t,e,u)}static _isGLBData(t){if(null==t)return!1;const e=new H(t);return e.remainingBytes()>=4&&e.readUint32()===et.MAGIC}static async _fromGLBData(t,e,r){const n=await rt._parseGLBData(r);return new rt(t,e,n.json,n.binaryData)}static async _parseGLBData(t){const e=new H(t);if(e.remainingBytes()<12)throw new n("gltf-loader-error","glb binary data is insufficiently large.");const r=e.readUint32(),o=e.readUint32(),s=e.readUint32();if(r!==et.MAGIC)throw new n("gltf-loader-error","Magic first 4 bytes do not fit to expected glb value.");if(t.byteLength<s)throw new n("gltf-loader-error","glb binary data is smaller than header specifies.");if(2!==o)throw new n("gltf-loader-unsupported-feature","An unsupported glb container version was detected. Only version 2 is supported.");let a,i,u=0;for(;e.remainingBytes()>=8;){const t=e.readUint32(),r=e.readUint32();if(0===u){if(r!==et.CHUNK_TYPE_JSON)throw new n("gltf-loader-error","First glb chunk must be JSON.");if(t<0)throw new n("gltf-loader-error","No JSON data found.");a=await D(e.readUint8Array(t))}else if(1===u){if(r!==et.CHUNK_TYPE_BIN)throw new n("gltf-loader-unsupported-feature","Second glb chunk expected to be BIN.");i=e.readUint8Array(t)}else m.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] More than 2 glb chunks detected. Skipping.");u+=1}if(!a)throw new n("gltf-loader-error","No glb JSON chunk detected.");return{json:a,binaryData:i}}async getBuffer(t,e){const r=this.json.buffers[t];if(null==r.uri){if(null==this._glbBuffer)throw new n("gltf-loader-error","glb buffer not present");return this._glbBuffer}const o=await this._getBufferLoader(t,e);if(o.byteLength!==r.byteLength)throw new n("gltf-loader-error","Buffer byte lengths should match.");return o}async _getBufferLoader(t,e){const r=this._bufferLoaders.get(t);if(r)return r;const n=this.json.buffers[t].uri,o=this._context.loadBinary(this._resolveUri(n),e).then((t=>new Uint8Array(t)));return this._bufferLoaders.set(t,o),o}async getAccessor(t,e){if(!this.json.accessors)throw new n("gltf-loader-unsupported-feature","Accessors missing.");const r=this.json.accessors[t];if(null==r?.bufferView)throw new n("gltf-loader-unsupported-feature","Some accessor does not specify a bufferView.");if(r.type in[J.MAT2,J.MAT3,J.MAT4])throw new n("gltf-loader-unsupported-feature",`AttributeType ${r.type} is not supported`);const o=this.json.bufferViews[r.bufferView],s=await this.getBuffer(o.buffer,e),a=at[r.type],i=it[r.componentType],u=a*i,l=o.byteStride||u;return{raw:s.buffer,byteStride:l,byteOffset:s.byteOffset+(o.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:l===u,componentCount:a,componentByteSize:i,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}}async getIndexData(t,e){if(null==t.indices)return;const r=await this.getAccessor(t.indices,e);if(r.isDenselyPacked)switch(r.componentType){case i.UNSIGNED_BYTE:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case i.UNSIGNED_SHORT:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case i.UNSIGNED_INT:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case i.UNSIGNED_BYTE:return V(lt(_,r));case i.UNSIGNED_SHORT:return V(lt(y,r));case i.UNSIGNED_INT:return V(lt(P,r))}}async getPositionData(t,e){if(null==t.attributes.POSITION)throw new n("gltf-loader-unsupported-feature","No POSITION vertex data found.");const r=await this.getAccessor(t.attributes.POSITION,e);if(r.componentType!==i.FLOAT)throw new n("gltf-loader-unsupported-feature","Expected type FLOAT for POSITION vertex attribute, but found "+i[r.componentType]);if(3!==r.componentCount)throw new n("gltf-loader-unsupported-feature","POSITION vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return lt(A,r)}async getNormalData(t,e){if(null==t.attributes.NORMAL)throw new n("gltf-loader-error","No NORMAL vertex data found.");const r=await this.getAccessor(t.attributes.NORMAL,e);if(r.componentType!==i.FLOAT)throw new n("gltf-loader-unsupported-feature","Expected type FLOAT for NORMAL vertex attribute, but found "+i[r.componentType]);if(3!==r.componentCount)throw new n("gltf-loader-unsupported-feature","NORMAL vertex attribute must have 3 components, but found "+r.componentCount.toFixed());return lt(A,r)}async getTangentData(t,e){if(null==t.attributes.TANGENT)throw new n("gltf-loader-error","No TANGENT vertex data found.");const r=await this.getAccessor(t.attributes.TANGENT,e);if(r.componentType!==i.FLOAT)throw new n("gltf-loader-unsupported-feature","Expected type FLOAT for TANGENT vertex attribute, but found "+i[r.componentType]);if(4!==r.componentCount)throw new n("gltf-loader-unsupported-feature","TANGENT vertex attribute must have 4 components, but found "+r.componentCount.toFixed());return lt(M,r)}async getTextureCoordinates(t,e){if(null==t.attributes.TEXCOORD_0)throw new n("gltf-loader-error","No TEXCOORD_0 vertex data found.");const r=await this.getAccessor(t.attributes.TEXCOORD_0,e);if(2!==r.componentCount)throw new n("gltf-loader-unsupported-feature","TEXCOORD_0 vertex attribute must have 2 components, but found "+r.componentCount.toFixed());if(r.componentType===i.FLOAT)return lt(O,r);if(!r.normalized)throw new n("gltf-loader-unsupported-feature","Integer component types are only supported for a normalized accessor for TEXCOORD_0.");return ut(r)}async getVertexColors(t,e){if(null==t.attributes.COLOR_0)throw new n("gltf-loader-error","No COLOR_0 vertex data found.");const r=await this.getAccessor(t.attributes.COLOR_0,e);if(4!==r.componentCount&&3!==r.componentCount)throw new n("gltf-loader-unsupported-feature","COLOR_0 attribute must have 3 or 4 components, but found "+r.componentCount.toFixed());if(4===r.componentCount){if(r.componentType===i.FLOAT)return lt(M,r);if(r.componentType===i.UNSIGNED_BYTE)return lt(S,r);if(r.componentType===i.UNSIGNED_SHORT)return lt(N,r)}else if(3===r.componentCount){if(r.componentType===i.FLOAT)return lt(A,r);if(r.componentType===i.UNSIGNED_BYTE)return lt(R,r);if(r.componentType===i.UNSIGNED_SHORT)return lt(E,r)}throw new n("gltf-loader-unsupported-feature","Unsupported component type for COLOR_0 attribute: "+i[r.componentType])}hasPositions(t){return void 0!==t.attributes.POSITION}hasNormals(t){return void 0!==t.attributes.NORMAL}hasVertexColors(t){return void 0!==t.attributes.COLOR_0}hasTextureCoordinates(t){return void 0!==t.attributes.TEXCOORD_0}hasTangents(t){return void 0!==t.attributes.TANGENT}async getMaterial(t,e,r){let n=t.material?this._materialCache.get(t.material):void 0;if(!n){const o=null!=t.material?Y(this.json.materials[t.material]):Y(),s=o.pbrMetallicRoughness,a=this.hasVertexColors(t),i=this.getTexture(s.baseColorTexture,e),u=this.getTexture(o.normalTexture,e),l=r?this.getTexture(o.occlusionTexture,e):void 0,c=r?this.getTexture(o.emissiveTexture,e):void 0,f=r?this.getTexture(s.metallicRoughnessTexture,e):void 0,d=null!=t.material?t.material:-1;n={alphaMode:o.alphaMode,alphaCutoff:o.alphaCutoff,color:s.baseColorFactor,doubleSided:!!o.doubleSided,colorTexture:await i,normalTexture:await u,name:o.name,id:d,occlusionTexture:await l,emissiveTexture:await c,emissiveFactor:o.emissiveFactor,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,metallicRoughnessTexture:await f,hasVertexColors:a,ESRI_externalColorMixMode:o.extras.ESRI_externalColorMixMode,colorTextureTransform:s?.baseColorTexture?.extensions?.KHR_texture_transform,normalTextureTransform:o.normalTexture?.extensions?.KHR_texture_transform,occlusionTextureTransform:o.occlusionTexture?.extensions?.KHR_texture_transform,emissiveTextureTransform:o.emissiveTexture?.extensions?.KHR_texture_transform,metallicRoughnessTextureTransform:s?.metallicRoughnessTexture?.extensions?.KHR_texture_transform,receiveAmbientOcclusion:o.extras.ESRI_receiveAmbientOcclusion,receiveShadows:o.extras.ESRI_receiveShadows}}return n}async getTexture(t,e){if(!t)return;if(0!==(t.texCoord||0))throw new n("gltf-loader-unsupported-feature","Only TEXCOORD with index 0 is supported.");const r=t.index,o=this.json.textures[r],s=Z(null!=o.sampler?this.json.samplers[o.sampler]:{}),a=ct(o),i=this.json.images[a],l=await this._loadTextureImageData(r,o,e);return u(this._textureCache,r,(()=>{const t=t=>33071===t||33648===t||10497===t,e=t=>{throw new n("gltf-loader-error",`Unexpected TextureSampler WrapMode: ${t}`)};return{data:l,wrapS:t(s.wrapS)?s.wrapS:e(s.wrapS),wrapT:t(s.wrapT)?s.wrapT:e(s.wrapT),minFilter:s.minFilter,name:i.name,id:r}}))}getNodeTransform(t){if(void 0===t)return nt;let e=this._nodeTransformCache.get(t);if(!e){const r=this.getNodeTransform(this._getNodeParent(t)),n=this.json.nodes[t];n.matrix?e=l(T(),r,n.matrix):n.translation||n.rotation||n.scale?(e=x(r),n.translation&&c(e,e,n.translation),n.rotation&&(st[3]=b(st,n.rotation),f(e,e,st[3],st)),n.scale&&d(e,e,n.scale)):e=x(r),this._nodeTransformCache.set(t,e)}return e}_resolveUri(t){return h(t,this._baseUri)}_getNodeParent(t){return this._nodeParentMap.get(t)}_checkVersionSupported(){const t=p.parse(this.json.asset.version,"glTF");ot.validate(t)}_checkRequiredExtensionsSupported(){const t=this.json;if(t.extensionsRequired){if(!t.extensionsRequired.every((t=>this._supportedExtensions.includes(t))))throw new n("gltf-loader-unsupported-feature","gltf loader was not able to load unsupported feature. Required extensions: "+t.extensionsRequired.join(", "))}}_computeNodeParents(){this.json.nodes.forEach(((t,e)=>{t.children&&t.children.forEach((t=>{this._nodeParentMap.set(t,e)}))}))}async _loadTextureImageData(t,e,r){const n=this._textureLoaders.get(t);if(n)return n;const o=this._createTextureLoader(e,r);return this._textureLoaders.set(t,o),o}async _createTextureLoader(t,e){const r=ct(t),o=this.json.images[r];if(o.uri){if(o.uri.endsWith(".ktx2")){const t=await this._context.loadBinary(this._resolveUri(o.uri),e);return new k(new Uint8Array(t))}return this._context.loadImage(this._resolveUri(o.uri),e)}if(null==o.bufferView)throw new n("gltf-loader-unsupported-feature","Image bufferView must be defined.");if(null==o.mimeType)throw new n("gltf-loader-unsupported-feature","Image mimeType must be defined.");const s=this.json.bufferViews[o.bufferView],a=await this.getBuffer(s.buffer,e);if(null!=s.byteStride)throw new n("gltf-loader-unsupported-feature","byteStride not supported for image buffer");const i=a.byteOffset+(s.byteOffset||0);return B(new Uint8Array(a.buffer,i,s.byteLength),o.mimeType)}async getLoadedBuffersSize(){if(this._glbBuffer)return this._glbBuffer.byteLength;const t=await w(Array.from(this._bufferLoaders.values())),e=await w(Array.from(this._textureLoaders.values()));return t.reduce(((t,e)=>t+(e?.byteLength??0)),0)+e.reduce(((t,e)=>t+(e?j(e)?e.data.byteLength:e.width*e.height*4:0)),0)}}const nt=r(T(),Math.PI/2),ot=new p(2,0,"glTF"),st=v(),at={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},it={[i.BYTE]:1,[i.UNSIGNED_BYTE]:1,[i.SHORT]:2,[i.UNSIGNED_SHORT]:2,[i.HALF_FLOAT]:2,[i.FLOAT]:4,[i.INT]:4,[i.UNSIGNED_INT]:4};function ut(t){switch(t.componentType){case i.BYTE:return new L(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case i.UNSIGNED_BYTE:return new I(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case i.SHORT:return new U(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case i.UNSIGNED_SHORT:return new C(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case i.UNSIGNED_INT:return new F(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount);case i.FLOAT:return new O(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*t.entryCount)}}function lt(t,e){return new t(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*(e.entryCount-1)+e.componentByteSize*e.componentCount)}function ct(t){if(null!=t.extensions?.KHR_texture_basisu)return t.extensions.KHR_texture_basisu.source;if(null!==t.source)return t.source;throw new n("gltf-loader-unsupported-feature","Source is expected to be defined for a texture. It can also be omitted in favour of an KHR_texture_basisu extension tag.")}const ft=/\.gltf$/i,dt=/\.glb$/i;let ht=0;async function pt(t,e,r={},n=!0){const o=await rt.load(t,e,r),s="gltf_"+ht++,a={lods:[],materials:new Map,textures:new Map,meta:wt(o)},i=!(!o.json.asset.extras||"symbolResource"!==o.json.asset.extras.ESRI_type),u=o.json.asset.extras?.ESRI_webstyleSymbol?.webstyle,l=new Map;await mt(o,(async(t,e,i,u)=>{const c=l.get(i)??0;l.set(i,c+1);const f=void 0!==t.mode?t.mode:g.TRIANGLES,d=f===g.TRIANGLES||f===g.TRIANGLE_STRIP||f===g.TRIANGLE_FAN?f:null;if(null==d)return void m.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Unsupported primitive mode ("+g[f]+"). Skipping primitive.");if(!o.hasPositions(t))return void m.getLogger("esri.views.3d.glTF").warn("Skipping primitive without POSITION vertex attribute.");const h=o.getPositionData(t,r),p=o.getMaterial(t,r,n),w=o.hasNormals(t)?o.getNormalData(t,r):null,T=o.hasTangents(t)?o.getTangentData(t,r):null,b=o.hasTextureCoordinates(t)?o.getTextureCoordinates(t,r):null,v=o.hasVertexColors(t)?o.getVertexColors(t,r):null,y=o.getIndexData(t,r),_={name:u,transform:x(e),attributes:{position:await h,normal:w?await w:null,texCoord0:b?await b:null,color:v?await v:null,tangent:T?await T:null},indices:await y,primitiveType:d,material:Tt(a,await p,s)};let A=null;null!=a.meta?.ESRI_lod&&"screenSpaceRadius"===a.meta.ESRI_lod.metric&&(A=a.meta.ESRI_lod.thresholds[i]),a.lods[i]=a.lods[i]||{parts:[],name:u,lodThreshold:A},a.lods[i].parts[c]=_}));for(const t of a.lods)t.parts=t.parts.filter((t=>!!t));const c=await o.getLoadedBuffersSize();return{model:a,meta:{isEsriSymbolResource:i,uri:o.uri,ESRI_webstyle:u},customMeta:{},size:c}}function wt(t){const e=t.json;let r=null;return e.nodes.forEach((t=>{const e=t.extras;null!=e&&(e.ESRI_proxyEllipsoid||e.ESRI_lod)&&(r=e)})),r}async function mt(t,e){const r=t.json,n=r.scenes[r.scene||0].nodes,o=n.length>1,s=[];for(const t of n){const e=r.nodes[t];if(s.push(a(t,0)),gt(e)&&!o){e.extensions.MSFT_lod.ids.forEach(((t,e)=>a(t,e+1)))}}async function a(n,o){const i=r.nodes[n],u=t.getNodeTransform(n);if(null!=i.weights&&m.getLogger("esri.views.3d.glTF").warn("[Unsupported Feature] Morph targets are not supported."),null!=i.mesh){const t=r.meshes[i.mesh];for(const r of t.primitives)s.push(e(r,u,o,t.name))}for(const t of i.children||[])s.push(a(t,o))}await Promise.all(s)}function gt(t){return t.extensions?.MSFT_lod&&Array.isArray(t.extensions.MSFT_lod.ids)}function Tt(t,e,r){const n=e=>{const n=`${r}_tex_${e&&e.id}${e?.name?"_"+e.name:""}`;if(e&&!t.textures.has(n)){const r=G(e.data,{wrap:{s:e.wrapS,t:e.wrapT},mipmap:xt.has(e.minFilter),noUnpackFlip:!0});t.textures.set(n,r)}return n},o=`${r}_mat_${e.id}_${e.name}`;if(!t.materials.has(o)){const r=$({color:[e.color[0],e.color[1],e.color[2]],opacity:e.color[3],alphaMode:e.alphaMode,alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,colorMixMode:e.ESRI_externalColorMixMode,textureColor:e.colorTexture?n(e.colorTexture):void 0,textureNormal:e.normalTexture?n(e.normalTexture):void 0,textureOcclusion:e.occlusionTexture?n(e.occlusionTexture):void 0,textureEmissive:e.emissiveTexture?n(e.emissiveTexture):void 0,textureMetallicRoughness:e.metallicRoughnessTexture?n(e.metallicRoughnessTexture):void 0,emissiveFactor:[e.emissiveFactor[0],e.emissiveFactor[1],e.emissiveFactor[2]],colorTextureTransform:e.colorTextureTransform,normalTextureTransform:e.normalTextureTransform,occlusionTextureTransform:e.occlusionTextureTransform,emissiveTextureTransform:e.emissiveTextureTransform,metallicRoughnessTextureTransform:e.metallicRoughnessTextureTransform,metallicFactor:e.metallicFactor,roughnessFactor:e.roughnessFactor,receiveShadows:e.receiveShadows,receiveAmbientOcclustion:e.receiveAmbientOcclusion});t.materials.set(o,r)}return o}const xt=new Set([e.LINEAR_MIPMAP_LINEAR,e.LINEAR_MIPMAP_NEAREST]);export{pt as loadGLTF};
//# sourceMappingURL=p-fdeec28b.js.map