import{n as t,s as r,ci as s,c4 as e,da as n,gN as i,cE as o,c9 as a}from"./p-aad64c9f.js";import"./p-1c4b55c0.js";import{t as c}from"./p-7ce0ff48.js";import{i as f}from"./p-a0004a96.js";class u{constructor(t,r,s,e,n,i,o){this.instanceId=t,this.textureKey=r,this.indexStart=s,this.indexCount=e,this.vertexStart=n,this.vertexCount=i,this.overlaps=o}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new u(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,r,s,e,n,i,o,a){t.push(r),t.push(s),t.push(e),t.push(n),t.push(i),t.push(o),t.push(a)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){const r=t.readInt32(),s=t.readInt32(),e=t.readInt32(),n=t.readInt32(),i=t.readInt32(),o=t.readInt32(),a=t.readInt32();return new u(r,s,e,n,i,o,a)}}u.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;function l(t,r){if(null!==r){t.push(r.length);for(const s of r)s.serialize(t);return t}t.push(0)}function h(t,r,s){const e=t.readInt32(),n=new Array(e);for(let e=0;e<n.length;e++)n[e]=r.deserialize(t,s);return n}class y{constructor(t,r){this.id=t,this.sortKey=r,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),l(t,this.records),t}static deserialize(t){const r=t.readInt32(),s=t.readF32(),e=new y(r,s);return e.records=h(t,u)??[],e}}y.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+u.byteSizeHint;const w=()=>t.getLogger("esri.views.2d.engine.webgl.Utils");function A(t){switch(t){case s.UNSIGNED_BYTE:return 1;case s.UNSIGNED_SHORT_4_4_4_4:return 2;case s.FLOAT:return 4;default:return void w().error(new r("webgl-utils",`Unable to handle type ${t}`))}}function b(t){switch(t){case s.UNSIGNED_BYTE:return Uint8Array;case s.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case s.FLOAT:return Float32Array;default:return void w().error(new r("webgl-utils",`Unable to handle type ${t}`))}}function M(t){const r=new Map;for(const s in t){const e=t[s];let n=0;r.set(s,e.map((t=>{const r=new c(t.name,t.count,t.type,n,0,t.normalized||!1);return n+=t.count*i(t.type),r}))),r.get(s).forEach((t=>t.stride=n))}return r}const d=t=>{const r=new Map;for(const s in t)for(const e of t[s])r.set(e.name,e.location);return r},p=t=>{const r={};return t.forEach(((t,s)=>r[s]=t?.length?t[0].stride:0)),r},U=new Map,I=(t,r)=>{if(!U.has(t)){const s=M(r),e={strides:p(s),bufferLayouts:s,attributes:d(r)};U.set(t,e)}return U.get(t)},k=t=>t.includes("data:image/svg+xml");function m(t){const r=[];for(let s=0;s<t.length;s++)r.push(t.charCodeAt(s));return r}function C(t,r,s){const i=new n(r.width,r.height);return i.dataType=r.dataType,r.depth&&(i.depth=r.depth),r.flipped&&(i.flipped=r.flipped),r.hasMipmap&&(i.hasMipmap=r.hasMipmap),i.internalFormat=r.internalFormat,r.isImmutable&&(i.isImmutable=r.isImmutable),r.isOpaque&&(i.isOpaque=r.isOpaque),r.maxAnisotropy&&(i.maxAnisotropy=r.maxAnisotropy),i.pixelFormat=r.pixelFormat,r.preMultiplyAlpha&&(i.preMultiplyAlpha=r.preMultiplyAlpha),r.samplingMode&&(i.samplingMode=r.samplingMode),r.target&&(i.target=r.target),i.uniform=r.uniform,r.unpackAlignment&&(i.unpackAlignment=r.unpackAlignment),r.wrapMode&&(i.wrapMode=r.wrapMode),new e(t,i,s)}function g(t){return"url"in t&&"urlHash"in t?{...t,url:""}:t}const z=new Float32Array(1),v=new Uint32Array(z.buffer);function F(t){return z[0]=t,v[0]}function $(t,r){return 65535&t|r<<16}function j(t){const r=F(t),s=r>>>31;let e=r>>>23&255,n=8388607&r;return e-=127,e>15?s<<15|31744:e<-25?0:(e<-14&&(n+=8388608,n/=2**(-14-e),e=-15),e+=15,n/=8192,n=x(n,1023),s<<15|e<<10|n)}function x(t,r){const s=Math.floor(t),e=t-s;return s<r&&(e>.5||.5===e&&s%2==1)?s+1:s}function S(t){let r=t>>>15,s=t>>10&31,e=1023&t;return r=r?-1:1,s-=15,e/=1024,s>-15?e+=1:s=-14,r*2**s*e}function P(t){const r=t.map((({name:t,count:r,type:s})=>`${t}.${r}.${s}`)).join(",");return o(r)}function H(t,r,s,e,n,i,o){if(t.primitiveName===r){let r=e?.readWithDefault(n,i,t[s]&&o);return"text"===t.type&&(r=r.toString()),void(t[s]=r)}if("type"in t&&null!=t.type){if(t.effects)for(const a of t.effects)H(a,r,s,e,n,i,o);switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(t.symbolLayers)for(const a of t.symbolLayers)H(a,r,s,e,n,i,o);break;case"CIMTextSymbol":t.symbol&&H(t.symbol,r,s,e,n,i,o);break;case"CIMHatchFill":t.lineSymbol&&H(t.lineSymbol,r,s,e,n,i,o);break;case"CIMPictureMarker":case"CIMCharacterMarker":case"CIMVectorMarker":if(t.markerPlacement&&H(t.markerPlacement,r,s,e,n,i,o),"CIMVectorMarker"===t.type&&t.markerGraphics)for(const a of t.markerGraphics)H(a,r,s,e,n,i,o),H(a.symbol,r,s,e,n,i,o)}}}const L=400;function V(t){const r=t.width;return null!=t.effects?L:Math.max(1.25*r,8)}function B(t,r,s,e){const n=s.packPrecisionFactor??1;switch(s.type){case a.BYTE:if(1===s.count)t.setInt8(e+s.offset,r*n);else for(let i=0;i<s.count;i++){const o=i*Int8Array.BYTES_PER_ELEMENT;t.setInt8(e+s.offset+o,r[i]*n)}break;case a.UNSIGNED_BYTE:if(1===s.count)t.setUint8(e+s.offset,r*n);else for(let i=0;i<s.count;i++){const o=i*Uint8Array.BYTES_PER_ELEMENT;t.setUint8(e+s.offset+o,r[i]*n)}break;case a.SHORT:if(1===s.count)t.setInt16(e+s.offset,r*n,!0);else for(let i=0;i<s.count;i++){const o=i*Int16Array.BYTES_PER_ELEMENT;t.setInt16(e+s.offset+o,r[i]*n,!0)}break;case a.UNSIGNED_SHORT:if(1===s.count)t.setUint16(e+s.offset,r*n,!0);else for(let i=0;i<s.count;i++){const o=i*Uint16Array.BYTES_PER_ELEMENT;t.setUint16(e+s.offset+o,r[i]*n,!0)}break;case a.INT:if(1===s.count)t.setInt32(e+s.offset,r*n,!0);else for(let i=0;i<s.count;i++){const o=i*Int32Array.BYTES_PER_ELEMENT;t.setInt32(e+s.offset+o,r[i]*n,!0)}break;case a.UNSIGNED_INT:if(1===s.count)t.setUint32(e+s.offset,r*n,!0);else for(let i=0;i<s.count;i++){const o=i*Uint32Array.BYTES_PER_ELEMENT;t.setUint32(e+s.offset+o,r[i]*n,!0)}break;case a.FLOAT:if(1===s.count)t.setFloat32(e+s.offset,r*n,!0);else for(let i=0;i<s.count;i++){const o=i*Float32Array.BYTES_PER_ELEMENT;t.setFloat32(e+s.offset+o,r[i]*n,!0)}break;case a.HALF_FLOAT:if(1===s.count)t.setUint16(e+s.offset,j(r*n),!0);else for(let i=0;i<s.count;i++){const o=i*Uint16Array.BYTES_PER_ELEMENT;t.setUint16(e+s.offset+o,j(r[i]*n),!0)}}}function E(t,r,s){switch(r.type){case a.BYTE:{if(1===r.count)return t.getInt8(s+r.offset);const e=[];for(let n=0;n<r.count;n++){const i=n*Int8Array.BYTES_PER_ELEMENT;e.push(t.getInt8(s+r.offset+i))}return e}case a.UNSIGNED_BYTE:{if(1===r.count)return t.getUint8(s+r.offset);const e=[];for(let n=0;n<r.count;n++){const i=n*Uint8Array.BYTES_PER_ELEMENT;e.push(t.getUint8(s+r.offset+i))}return e}case a.SHORT:{if(1===r.count)return t.getInt16(s+r.offset,!0);const e=[];for(let n=0;n<r.count;n++){const i=n*Int16Array.BYTES_PER_ELEMENT;e.push(t.getInt16(s+r.offset+i,!0))}return e}case a.UNSIGNED_SHORT:{if(1===r.count)return t.getUint16(s+r.offset,!0);const e=[];for(let n=0;n<r.count;n++){const i=n*Uint16Array.BYTES_PER_ELEMENT;e.push(t.getUint16(s+r.offset+i,!0))}return e}case a.INT:{if(1===r.count)return t.getInt32(s+r.offset,!0);const e=[];for(let n=0;n<r.count;n++){const i=n*Int32Array.BYTES_PER_ELEMENT;e.push(t.getInt32(s+r.offset+i,!0))}return e}case a.UNSIGNED_INT:{if(1===r.count)return t.getUint32(s+r.offset,!0);const e=[];for(let n=0;n<r.count;n++){const i=n*Uint32Array.BYTES_PER_ELEMENT;e.push(t.getUint32(s+r.offset+i,!0))}return e}case a.FLOAT:{if(1===r.count)return t.getFloat32(s+r.offset,!0);const e=[];for(let n=0;n<r.count;n++){const i=n*Float32Array.BYTES_PER_ELEMENT;e.push(t.getFloat32(s+r.offset+i,!0))}return e}case a.HALF_FLOAT:{if(1===r.count)return S(t.getUint16(s+r.offset,!0));const e=[];for(let n=0;n<r.count;n++){const i=n*Uint16Array.BYTES_PER_ELEMENT;e.push(S(t.getUint16(s+r.offset+i,!0)))}return e}}}class N{constructor(t,r,s,e,n,i,o,a,c=[]){this.entityTexel=t,this.anchorX=r,this.anchorY=s,this.directionX=e,this.directionY=n,this.maxScale=i,this.minScale=o,this.referenceBounds=a,this.bounds=c}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),null===this.referenceBounds?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),l(t,this.bounds)}static deserialize(t){const r=t.readInt32(),s=t.readF32(),e=t.readF32(),n=t.readF32(),i=t.readF32(),o=t.readF32(),a=t.readF32(),c=t.readF32(),u=t.readF32(),l=t.readF32(),y=h(t,f)??[];return new N(r,s,e,n,i,o,a,{size:c,offsetX:u,offsetY:l},y)}}export{m as A,C as T,$ as a,I as b,y as c,N as d,V as e,u as f,b as g,A as h,g as j,h as n,B as o,P as r,E as s,H as t,k as y};
//# sourceMappingURL=p-22458323.js.map