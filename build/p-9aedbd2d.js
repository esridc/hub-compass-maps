import{I as t}from"./p-ad63a882.js";import{I as r,f as e,u as n,a as s,d as a,m as i}from"./p-bc8871af.js";import"./p-7020cf1b.js";import"./p-3013819f.js";import"./p-3b51db5e.js";import"./p-6fe73432.js";import"./p-c887d4a8.js";import"./p-2e59108c.js";import"./p-c99b552a.js";import"./p-8567e6fe.js";import"./p-89242a33.js";function o(r,e){return e.push(r.buffer),{buffer:r.buffer,layout:new t(r.layout)}}class c{async extract(t){const r=p(t),n=e(r),s=[r.data.buffer];return{result:l(n,s),transferList:s}}async extractComponentsEdgeLocations(t){const r=p(t),e=n(r.data,r.skipDeduplicate,r.indices,r.indicesLength),a=s(e,d,j),i=[];return{result:o(a.regular.instancesData,i),transferList:i}}async extractEdgeLocations(t){const r=p(t),e=n(r.data,r.skipDeduplicate,r.indices,r.indicesLength),a=s(e,m,j),i=[];return{result:o(a.regular.instancesData,i),transferList:i}}}function p(t){return{data:r.createView(t.dataBuffer),indices:"Uint32Array"===t.indicesType?new Uint32Array(t.indices):"Uint16Array"===t.indicesType?new Uint16Array(t.indices):t.indices,indicesLength:t.indicesLength,writerSettings:t.writerSettings,skipDeduplicate:t.skipDeduplicate}}function l(t,r){r.push(t.regular.lodInfo.lengths.buffer),r.push(t.silhouette.lodInfo.lengths.buffer);return{regular:{instancesData:o(t.regular.instancesData,r),lodInfo:{lengths:t.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:o(t.silhouette.instancesData,r),lodInfo:{lengths:t.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:t.averageEdgeLength}}class u{allocate(t){return a.createBuffer(t)}trim(t,r){return t.slice(0,r)}write(t,r,e){t.position0.setVec(r,e.position0),t.position1.setVec(r,e.position1)}}class f{allocate(t){return i.createBuffer(t)}trim(t,r){return t.slice(0,r)}write(t,r,e){t.position0.setVec(r,e.position0),t.position1.setVec(r,e.position1),t.componentIndex.set(r,e.componentIndex)}}const m=new u,d=new f,j={allocate:()=>null,write:()=>{},trim:()=>null};export default c;
//# sourceMappingURL=p-9aedbd2d.js.map