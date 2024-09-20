import{e as t}from"./p-c887d4a8.js";import{H as n}from"./p-ad63a882.js";import{e as r}from"./p-c99b552a.js";import{C as o}from"./p-8567e6fe.js";import{t as e}from"./p-89242a33.js";import{i6 as s,i7 as a,a2 as c,i8 as i,i9 as f,ia as u,ib as l,ic as h,id as d,ie as p,a0 as w,M as g,al as m,ig as y,bh as A}from"./p-3013819f.js";function M(t,n=0){const r=t.stride;return Array.from(t.fields.keys()).map((o=>{const s=t.fields.get(o),a=s.constructor.ElementCount,c=I(s.constructor.ElementType),i=s.offset,f=!(!s.optional||!s.optional.glNormalized);return new e(o,a,c,i,r,f,n)}))}function I(t){const n=S[t];if(n)return n;throw new Error("BufferType not supported in WebGL")}const S={u8:o.UNSIGNED_BYTE,u16:o.UNSIGNED_SHORT,u32:o.UNSIGNED_INT,i8:o.BYTE,i16:o.SHORT,i32:o.INT,f32:o.FLOAT};const B=n().vec3f(r.POSITION).u16(r.COMPONENTINDEX),j=n().vec2u8(r.SIDENESS);M(j);const v=n().vec3f(r.POSITION0).vec3f(r.POSITION1).vec2i16(r.NORMALCOMPRESSED).u16(r.COMPONENTINDEX).u8(r.VARIANTOFFSET,{glNormalized:!0}).u8(r.VARIANTSTROKE).u8(r.VARIANTEXTENSION,{glNormalized:!0}),N=n().vec3f(r.POSITION0).vec3f(r.POSITION1).vec2i16(r.NORMALCOMPRESSED).vec2i16(r.NORMAL2COMPRESSED).u16(r.COMPONENTINDEX).u8(r.VARIANTOFFSET,{glNormalized:!0}).u8(r.VARIANTSTROKE).u8(r.VARIANTEXTENSION,{glNormalized:!0});const b=-1;var F;function L(t,n,r,o=G){const e=t.vertices.position,u=t.vertices.componentIndex,l=g(o.anglePlanar),h=g(o.angleSignificantEdge),d=Math.cos(h),p=Math.cos(l),w=T.edge,m=w.position0,y=w.position1,A=w.faceNormal0,M=w.faceNormal1,I=x(t),S=D(t),B=S.length/4,j=n.allocate(B);let v=0;const N=B,F=r.allocate(N);let L=0,C=0,H=0;const K=s(0,B),O=new Float32Array(B);O.forEach(((t,n,r)=>{e.getVec(S[4*n],m),e.getVec(S[4*n+1],y),r[n]=a(m,y)})),K.sort(((t,n)=>O[n]-O[t]));const P=new Array,W=new Array;for(let t=0;t<B;t++){const o=K[t],s=O[o],a=S[4*o],h=S[4*o+1],g=S[4*o+2],B=S[4*o+3],N=B===b;if(e.getVec(a,m),e.getVec(h,y),N)c(A,I[3*g],I[3*g+1],I[3*g+2]),i(M,A),w.componentIndex=u.get(a),w.cosAngle=f(A,M);else{if(c(A,I[3*g],I[3*g+1],I[3*g+2]),c(M,I[3*B],I[3*B+1],I[3*B+2]),w.componentIndex=u.get(a),w.cosAngle=f(A,M),z(w,p))continue;w.cosAngle<-.9999&&i(M,A)}C+=s,H++,N||U(w,d)?(n.write(j,v++,w),P.push(s)):E(w,l)&&(r.write(F,L++,w),W.push(s))}const k=new Float32Array(P.reverse()),q=new Float32Array(W.reverse());return{regular:{instancesData:n.trim(j,v),lodInfo:{lengths:k}},silhouette:{instancesData:r.trim(F,L),lodInfo:{lengths:q}},averageEdgeLength:C/H}}function U(t,n){return t.cosAngle<n}function z(t,n){return t.cosAngle>n}function E(t,n){const r=l(t.cosAngle),o=T.fwd,e=T.ortho;h(o,t.position1,t.position0);return r*(f(u(e,t.faceNormal0,t.faceNormal1),o)>0?-1:1)>n}function D(t){const n=t.faces.length/3,r=t.faces,o=t.neighbors;let e=0;for(let t=0;t<n;t++){const n=o[3*t],s=o[3*t+1],a=o[3*t+2],c=r[3*t],i=r[3*t+1],f=r[3*t+2];e+=n===b||c<i?1:0,e+=s===b||i<f?1:0,e+=a===b||f<c?1:0}const s=new Int32Array(4*e);let a=0;for(let t=0;t<n;t++){const n=o[3*t],e=o[3*t+1],c=o[3*t+2],i=r[3*t],f=r[3*t+1],u=r[3*t+2];(n===b||i<f)&&(s[a++]=i,s[a++]=f,s[a++]=t,s[a++]=n),(e===b||f<u)&&(s[a++]=f,s[a++]=u,s[a++]=t,s[a++]=e),(c===b||u<i)&&(s[a++]=u,s[a++]=i,s[a++]=t,s[a++]=c)}return s}function x(t){const n=t.faces.length/3,r=t.vertices.position,o=t.faces,e=C.v0,s=C.v1,a=C.v2,c=new Float32Array(3*n);for(let t=0;t<n;t++){const n=o[3*t],i=o[3*t+1],f=o[3*t+2];r.getVec(n,e),r.getVec(i,s),r.getVec(f,a),d(s,s,e),d(a,a,e),u(e,s,a),p(e,e),c[3*t]=e[0],c[3*t+1]=e[1],c[3*t+2]=e[2]}return c}!function(t){t[t.SOLID=0]="SOLID",t[t.SKETCH=1]="SKETCH"}(F||(F={}));const T={edge:{position0:w(),position1:w(),faceNormal0:w(),faceNormal1:w(),componentIndex:0,cosAngle:0},ortho:w(),fwd:w()},C={v0:w(),v1:w(),v2:w()},G={anglePlanar:4,angleSignificantEdge:35};function H(t,n,r){const o=n/3,e=new Uint32Array(r+1),s=new Uint32Array(r+1),a=(t,n)=>{t<n?e[t+1]++:s[n+1]++};for(let n=0;n<o;n++){const r=t[3*n],o=t[3*n+1],e=t[3*n+2];a(r,o),a(o,e),a(e,r)}let c=0,i=0;for(let t=0;t<r;t++){const n=e[t+1],r=s[t+1];e[t+1]=c,s[t+1]=i,c+=n,i+=r}const f=new Uint32Array(6*o),u=e[r],l=(t,n,r)=>{if(t<n){const o=e[t+1]++;f[2*o]=n,f[2*o+1]=r}else{const o=s[n+1]++;f[2*u+2*o]=t,f[2*u+2*o+1]=r}};for(let n=0;n<o;n++){const r=t[3*n],o=t[3*n+1],e=t[3*n+2];l(r,o,n),l(o,e,n),l(e,r,n)}const h=(t,n)=>{const r=2*t,o=n-t;for(let t=1;t<o;t++){const n=f[r+2*t],o=f[r+2*t+1];let e=t-1;for(;e>=0&&f[r+2*e]>n;e--)f[r+2*e+2]=f[r+2*e],f[r+2*e+3]=f[r+2*e+1];f[r+2*e+2]=n,f[r+2*e+3]=o}};for(let t=0;t<r;t++)h(e[t],e[t+1]),h(u+s[t],u+s[t+1]);const d=new Int32Array(3*o),p=(n,r)=>n===t[3*r]?0:n===t[3*r+1]?1:n===t[3*r+2]?2:-1,w=(t,n)=>{const r=p(t,n);d[3*n+r]=-1},g=(t,n,r,o)=>{const e=p(t,n);d[3*n+e]=o;const s=p(r,o);d[3*o+s]=n};for(let t=0;t<r;t++){let n=e[t];const r=e[t+1];let o=s[t];const a=s[t+1];for(;n<r&&o<a;){const r=f[2*n],e=f[2*u+2*o];r===e?(g(t,f[2*n+1],e,f[2*u+2*o+1]),n++,o++):r<e?(w(t,f[2*n+1]),n++):(w(e,f[2*u+2*o+1]),o++)}for(;n<r;)w(t,f[2*n+1]),n++;for(;o<a;){w(f[2*u+2*o],f[2*u+2*o+1]),o++}}return d}function K(t,n,r,o,e,s=2){const a=1/(Math.abs(r)+Math.abs(o)+Math.abs(e)),c=r*a,i=o*a,f=e<=0?(c>=0?1:-1)*(1-Math.abs(i)):c,u=e<=0?(i>=0?1:-1)*(1-Math.abs(c)):i,l=n*s;t[l]=O(f),t[l+1]=O(u)}function O(t){return m(Math.round(32767*t),-32767,32767)}class P{updateSettings(t){this.settings=t,this._edgeHashFunction=t.reducedPrecision?Q:J}write(t,n,r){const o=this._edgeHashFunction(r);_.seed=o;const e=_.getIntRange(0,255),s=_.getIntRange(0,this.settings.variants-1),a=.7,c=_.getFloat(),i=255*(.5*X(-(1-Math.min(c/a,1))+Math.max(0,c-a)/(1-a),1.2)+.5);t.position0.setVec(n,r.position0),t.position1.setVec(n,r.position1),t.componentIndex.set(n,r.componentIndex),t.variantOffset.set(n,e),t.variantStroke.set(n,s),t.variantExtension.set(n,i)}trim(t,n){return t.slice(0,n)}}const W=new Float32Array(6),k=new Uint32Array(W.buffer),q=new Uint32Array(1);function J(t){const n=W;n[0]=t.position0[0],n[1]=t.position0[1],n[2]=t.position0[2],n[3]=t.position1[0],n[4]=t.position1[1],n[5]=t.position1[2],q[0]=5381;for(let t=0;t<k.length;t++)q[0]=31*q[0]+k[t];return q[0]}function Q(t){const n=W;n[0]=V(t.position0[0]),n[1]=V(t.position0[1]),n[2]=V(t.position0[2]),n[3]=V(t.position1[0]),n[4]=V(t.position1[1]),n[5]=V(t.position1[2]),q[0]=5381;for(let t=0;t<k.length;t++)q[0]=31*q[0]+k[t];return q[0]}const R=1e4;function V(t){return Math.round(t*R)/R}function X(t,n){const r=t<0?-1:1;return Math.abs(t)**n*r}class Y{constructor(){this._commonWriter=new P}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return v.createBuffer(t)}write(t,n,r){this._commonWriter.write(t,n,r),y($,r.faceNormal0,r.faceNormal1),p($,$);const{typedBuffer:o,typedBufferStride:e}=t.normalCompressed;K(o,n,$[0],$[1],$[2],e)}trim(t,n){return this._commonWriter.trim(t,n)}}Y.Layout=v,Y.glLayout=M(v,1);class Z{constructor(){this._commonWriter=new P}updateSettings(t){this._commonWriter.updateSettings(t)}allocate(t){return N.createBuffer(t)}write(t,n,r){this._commonWriter.write(t,n,r);{const{typedBuffer:o,typedBufferStride:e}=t.normalCompressed;K(o,n,r.faceNormal0[0],r.faceNormal0[1],r.faceNormal0[2],e)}{const{typedBuffer:o,typedBufferStride:e}=t.normal2Compressed;K(o,n,r.faceNormal1[0],r.faceNormal1[1],r.faceNormal1[2],e)}}trim(t,n){return this._commonWriter.trim(t,n)}}Z.Layout=N,Z.glLayout=M(N,1);const $=w(),_=new A;function tt(t){const n=nt(t.data,t.skipDeduplicate,t.indices,t.indicesLength);return ot.updateSettings(t.writerSettings),et.updateSettings(t.writerSettings),L(n,ot,et)}function nt(n,r,o,e){if(r){const t=H(o,e,n.count);return new rt(o,e,t,n)}const s=t(n.buffer,n.stride/4,{originalIndices:o,originalIndicesLength:e}),a=H(s.indices,e,s.uniqueCount);return{faces:s.indices,facesLength:s.indices.length,neighbors:a,vertices:B.createView(s.buffer)}}class rt{constructor(t,n,r,o){this.faces=t,this.facesLength=n,this.neighbors=r,this.vertices=o}}const ot=new Y,et=new Z,st=n().vec3f(r.POSITION0).vec3f(r.POSITION1),at=n().vec3f(r.POSITION0).vec3f(r.POSITION1).u16(r.COMPONENTINDEX);export{B as I,L as a,st as d,tt as f,at as m,nt as u};
//# sourceMappingURL=p-bc8871af.js.map