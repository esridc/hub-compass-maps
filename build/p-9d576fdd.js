import{x as t}from"./p-aad64c9f.js";import{h as r}from"./p-5ae33da2.js";import{a as e}from"./p-17b3a90f.js";import{B as n}from"./p-25b70cc1.js";import"./p-2af77f97.js";import"./p-79c28fb7.js";import"./p-88dd7081.js";import"./p-1826fadd.js";import"./p-e51694e6.js";import"./p-66c1870a.js";import"./p-5d8d2e95.js";import"./p-dcc79702.js";import"./p-fa12d64c.js";import"./p-a0f1b2e3.js";class o{async createIndex(t,e){const n=new Array;if(!t.vertexAttributes?.position)return new r;const o=i(t),s=null!=e?await e.invoke("createIndexThread",o,{transferList:n}):this.createIndexThread(o).result;return p().fromJSON(s)}createIndexThread(t){const r=p();if(!t)return{result:r.toJSON()};const e=new Float64Array(t.position);return t.components?a(r,e,t.components.map((t=>new Uint32Array(t)))):s(r,e)}}function s(t,r){const e=new Array(r.length/9);let n=0;for(let t=0;t<r.length;t+=9)e[n++]=c(r,t,t+3,t+6);return t.load(e),{result:t.toJSON()}}function a(t,r,e){let n=0;for(const t of e)n+=t.length/3;const o=new Array(n);let s=0;for(const t of e)for(let e=0;e<t.length;e+=3)o[s++]=c(r,3*t[e],3*t[e+1],3*t[e+2]);return t.load(o),{result:t.toJSON()}}function i(t){const{vertexAttributes:{position:r},vertexSpace:o,spatialReference:s,transform:a}=t,i=n({vertexAttributes:{position:r},vertexSpace:o,spatialReference:s,transform:a},e.absolute,{allowBufferReuse:!0})?.position;return i?!t.components||t.components.some((t=>!t.faces))?{position:i.buffer}:{position:i.buffer,components:t.components.map((t=>t.faces))}:null}function p(){return new r(9,t("esri-csp-restrictions")?t=>t:[".minX",".minY",".maxX",".maxY"])}function c(t,r,e,n){return{minX:Math.min(t[r],t[e],t[n]),maxX:Math.max(t[r],t[e],t[n]),minY:Math.min(t[r+1],t[e+1],t[n+1]),maxY:Math.max(t[r+1],t[e+1],t[n+1]),p0:[t[r],t[r+1],t[r+2]],p1:[t[e],t[e+1],t[e+2]],p2:[t[n],t[n+1],t[n+2]]}}export default o;
//# sourceMappingURL=p-9d576fdd.js.map