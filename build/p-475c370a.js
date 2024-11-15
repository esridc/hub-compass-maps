import{hd as t,T as r,lR as e}from"./p-aad64c9f.js";import{a as o,b as n}from"./p-17b3a90f.js";import{f as a,l as i}from"./p-dcc79702.js";import"./p-175d4a9b.js";import"./p-7e44e1c8.js";import"./p-2af77f97.js";import"./p-79c28fb7.js";import"./p-a040372a.js";import"./p-88dd7081.js";import"./p-93091a88.js";import"./p-37da71be.js";import"./p-e91c4d32.js";import"./p-de84037a.js";import"./p-3b7ff27a.js";import"./p-dddb66c6.js";import"./p-17d8c81f.js";import"./p-436c45c7.js";import"./p-dfaba342.js";import"./p-1826fadd.js";import"./p-e51694e6.js";var s,c;!function(t){t[t.None=0]="None",t[t.Int16=1]="Int16",t[t.Int32=2]="Int32"}(s||(s={})),function(t){t[t.Replace=0]="Replace",t[t.Outside=1]="Outside",t[t.Inside=2]="Inside",t[t.Finished=3]="Finished"}(c||(c={}));function f(){return u||(u=new Promise((t=>import("./p-6b088889.js").then((t=>t.i)).then((({default:r})=>{const e=r({locateFile:l,onRuntimeInitialized:()=>t(e)});delete e.then})))).catch((t=>{throw t}))),u}function l(r){return t(`esri/libs/i3s/${r}`)}let u;var p,d,m,w,y;!function(t){t[t.Unmodified=0]="Unmodified",t[t.Culled=1]="Culled",t[t.NotChecked=2]="NotChecked"}(p||(p={})),function(t){t[t.Unmodified=0]="Unmodified",t[t.PotentiallyModified=1]="PotentiallyModified",t[t.Culled=2]="Culled",t[t.Unknown=3]="Unknown",t[t.NotChecked=4]="NotChecked"}(d||(d={}));!function(t){t[t.Unknown=0]="Unknown",t[t.Uncached=1]="Uncached",t[t.Cached=2]="Cached"}(m||(m={})),function(t){t[t.None=0]="None",t[t.MaxScreenThreshold=1]="MaxScreenThreshold",t[t.ScreenSpaceRelative=2]="ScreenSpaceRelative",t[t.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",t[t.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(w||(w={})),function(t){t[t.Hole=0]="Hole",t[t.Leaf=1]="Leaf"}(y||(y={}));async function j(t){M=await S();const r=[t.geometryBuffer];return{result:R(M,t,r),transferList:r}}async function b(t){M=await S();const r=[t.geometryBuffer],{geometryBuffer:e}=t,o=e.byteLength,n=M._malloc(o),a=new Uint8Array(M.HEAPU8.buffer,n,o);a.set(new Uint8Array(e));const i=M.dracoDecompressPointCloudData(n,a.byteLength);if(M._free(n),i.error.length>0)throw new Error(`i3s.wasm: ${i.error}`);const s=i.featureIds?.length>0?i.featureIds.slice():null,c=i.positions.slice();return s&&r.push(s.buffer),r.push(c.buffer),{result:{positions:c,featureIds:s},transferList:r}}async function A(t){await S(),D(t);const r={buffer:t.buffer};return{result:r,transferList:[r.buffer]}}async function h(t){await S(),N(t)}async function F(t){M=await S(),M.setLegacySchema(t.context,t.jsonSchema)}async function x(t){const{localMatrix:e,origin:a,positions:i,vertexSpace:s}=t,c=r.fromJSON(t.inSpatialReference),f=r.fromJSON(t.outSpatialReference);let l;const[{projectBuffer:u},{initializeProjection:p}]=await Promise.all([import("./p-aad64c9f.js").then((function(t){return t.sW})),import("./p-aad64c9f.js").then((function(t){return t.sX}))]);await p(c,f);const d=[0,0,0];if(!u(a,c,0,d,f,0))throw new Error("Failed to project");if("georeferenced"===s.type&&null==s.origin){if(l=new Float64Array(i.length),!u(i,c,0,l,f,0,l.length/3))throw new Error("Failed to project")}else{const t="georeferenced"===s.type?o.fromJSON(s):n.fromJSON(s),{projectMeshVertexPositions:r}=await import("./p-256ea87b.js"),a=r({vertexAttributes:{position:i},transform:e?{localMatrix:e}:void 0,vertexSpace:t,spatialReference:c},f);if(!a)throw new Error("Failed to project");l=a}const m=l.length,[w,y,j]=d;for(let t=0;t<m;t+=3)l[t]-=w,l[t+1]-=y,l[t+2]-=j;return{result:{projected:l,original:i,projectedOrigin:d},transferList:[l.buffer,i.buffer]}}async function g({normalMatrix:t,normals:r}){const o=new Float32Array(r.length);return a(o,r,t),e(t)&&i(o,o),{result:{transformed:o,original:r},transferList:[o.buffer,r.buffer]}}function v(t){P(t)}let U,M;function N(t){if(!M)return;const r=t.modifications,e=M._malloc(8*r.length),o=new Float64Array(M.HEAPU8.buffer,e,r.length);for(let t=0;t<r.length;++t)o[t]=r[t];M.setModifications(t.context,e,r.length,t.isGeodetic),M._free(e)}function R(t,r,e){const{context:o,globalTrafo:n,mbs:a,obbData:i,elevationOffset:c,geometryBuffer:f,geometryDescriptor:l,indexToVertexProjector:u,vertexToRenderProjector:p}=r,d=t._malloc(f.byteLength),m=33,w=t._malloc(m*Float64Array.BYTES_PER_ELEMENT),y=new Uint8Array(t.HEAPU8.buffer,d,f.byteLength);y.set(new Uint8Array(f));const j=new Float64Array(t.HEAPU8.buffer,w,m);I(j,[NaN,NaN,NaN]);let b=j.byteOffset+3*j.BYTES_PER_ELEMENT,A=new Float64Array(j.buffer,b);I(A,n),b+=16*j.BYTES_PER_ELEMENT,A=new Float64Array(j.buffer,b),I(A,a),b+=4*j.BYTES_PER_ELEMENT,i&&(A=new Float64Array(j.buffer,b),I(A,i));const h=l,F={isDraco:!1,isLegacy:!1,color:r.layouts.some((t=>t.some((t=>"color"===t.name)))),normal:r.needNormals&&r.layouts.some((t=>t.some((t=>"normalCompressed"===t.name)))),uv0:r.layouts.some((t=>t.some((t=>"uv0"===t.name)))),uvRegion:r.layouts.some((t=>t.some((t=>"uvRegion"===t.name)))),featureIndex:h.featureIndex},x=t.process(o,!!r.obbData,d,y.byteLength,h,F,w,c,u,p,r.normalReferenceFrame);if(t._free(w),t._free(d),x.error.length>0)throw new Error(`i3s.wasm: ${x.error}`);if(x.discarded)return null;const g=x.componentOffsets.length>0?x.componentOffsets.slice():null,v=x.featureIds.length>0?x.featureIds.slice():null,U=x.anchorIds.length>0?Array.from(x.anchorIds):null,M=x.anchors.length>0?Array.from(x.anchors):null,N=x.interleavedVertedData.slice().buffer,R=x.indicesType===s.Int16?new Uint16Array(x.indices.buffer,x.indices.byteOffset,x.indices.byteLength/2).slice():new Uint32Array(x.indices.buffer,x.indices.byteOffset,x.indices.byteLength/4).slice(),C=x.positions.slice(),D=x.positionIndicesType===s.Int16?new Uint16Array(x.positionIndices.buffer,x.positionIndices.byteOffset,x.positionIndices.byteLength/2).slice():new Uint32Array(x.positionIndices.buffer,x.positionIndices.byteOffset,x.positionIndices.byteLength/4).slice(),P={layout:r.layouts[0],interleavedVertexData:N,indices:R,hasColors:x.hasColors,hasModifications:x.hasModifications,positionData:{data:C,indices:D}};return v&&e.push(v.buffer),g&&e.push(g.buffer),e.push(N),e.push(R.buffer),e.push(C.buffer),e.push(D.buffer),{componentOffsets:g,featureIds:v,anchorIds:U,anchors:M,transformedGeometry:P,obb:x.obb,globalTrafo:n}}function C(t){return 0===t?d.Unmodified:1===t?d.PotentiallyModified:2===t?d.Culled:d.Unknown}function D(t){if(!M)return;const{context:r,buffer:e}=t,o=M._malloc(e.byteLength),n=e.byteLength/Float64Array.BYTES_PER_ELEMENT,a=new Float64Array(M.HEAPU8.buffer,o,n),i=new Float64Array(e);a.set(i),M.filterOBBs(r,o,n),i.set(a),M._free(o)}function P(t){M&&0===M.destroy(t)&&(M=null)}function I(t,r){for(let e=0;e<r.length;++e)t[e]=r[e]}async function L(){M||await S()}function S(){return M?Promise.resolve(M):(U||(U=f().then((t=>(M=t,U=null,M)))),U)}const O={transform:(t,r)=>M&&R(M,t,r),destroy:P};export{v as destroyContext,b as dracoDecompressPointCloudData,A as filterObbsForModifications,D as filterObbsForModificationsSync,L as initialize,C as interpretObbModificationResults,j as process,x as project,F as setLegacySchema,h as setModifications,N as setModificationsSync,O as test,g as transformNormals};
//# sourceMappingURL=p-475c370a.js.map