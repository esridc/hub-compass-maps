import{aA as t,a2 as s,ii as r}from"./p-3013819f.js";class e{constructor(t,s,r=0,e,i){this.TypedArrayConstructor=t,this.elementCount=9;const n=this.TypedArrayConstructor;void 0===e&&(e=9*n.BYTES_PER_ELEMENT);const h=0===s.byteLength?0:r;this.typedBuffer=null==i?new n(s,h):new n(s,h,(i-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=e/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,s,r=this.count-s){const e=this.typedBuffer.byteOffset+s*this.stride;return new t(this.buffer,e,this.stride,e+r*this.stride)}getMat(t,s){let r=t*this.typedBufferStride;for(let t=0;t<9;t++)s[t]=this.typedBuffer[r++];return s}setMat(t,s){let r=t*this.typedBufferStride;for(let t=0;t<9;t++)this.typedBuffer[r++]=s[t]}get(t,s){return this.typedBuffer[t*this.typedBufferStride+s]}set(t,s,r){this.typedBuffer[t*this.typedBufferStride+s]=r}copyFrom(t,s,r){const e=this.typedBuffer,i=s.typedBuffer;let n=t*this.typedBufferStride,h=r*s.typedBufferStride;for(let t=0;t<9;++t)e[n++]=i[h++]}get buffer(){return this.typedBuffer.buffer}}e.ElementCount=9;class i{constructor(t,s,r=0,e,i){this.TypedArrayConstructor=t,this.elementCount=16;const n=this.TypedArrayConstructor;void 0===e&&(e=16*n.BYTES_PER_ELEMENT);const h=0===s.byteLength?0:r;this.typedBuffer=null==i?new n(s,h):new n(s,h,(i-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=e/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,s,r=this.count-s){const e=this.typedBuffer.byteOffset+s*this.stride;return new t(this.buffer,e,this.stride,e+r*this.stride)}getMat(t,s){let r=t*this.typedBufferStride;for(let t=0;t<16;t++)s[t]=this.typedBuffer[r++];return s}setMat(t,s){let r=t*this.typedBufferStride;for(let t=0;t<16;t++)this.typedBuffer[r++]=s[t]}get(t,s){return this.typedBuffer[t*this.typedBufferStride+s]}set(t,s,r){this.typedBuffer[t*this.typedBufferStride+s]=r}copyFrom(t,s,r){const e=this.typedBuffer,i=s.typedBuffer;let n=t*this.typedBufferStride,h=r*s.typedBufferStride;for(let t=0;t<16;++t)e[n++]=i[h++]}get buffer(){return this.typedBuffer.buffer}}i.ElementCount=16;class n{constructor(t,s,r=0,e,i){this.TypedArrayConstructor=t,this.elementCount=1;const n=this.TypedArrayConstructor;void 0===e&&(e=n.BYTES_PER_ELEMENT);const h=0===s.byteLength?0:r;this.typedBuffer=null==i?new n(s,h):new n(s,h,(i-r)/n.BYTES_PER_ELEMENT),this.stride=e,this.typedBufferStride=e/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride)}sliceBuffer(t,s,r=this.count-s){const e=this.typedBuffer.byteOffset+s*this.stride;return new t(this.buffer,e,this.stride,e+r*this.stride)}get(t){return this.typedBuffer[t*this.typedBufferStride]}set(t,s){this.typedBuffer[t*this.typedBufferStride]=s}get buffer(){return this.typedBuffer.buffer}}n.ElementCount=1;class h{constructor(t,s,r=0,e,i){this.TypedArrayConstructor=t,this.elementCount=2;const n=this.TypedArrayConstructor;void 0===e&&(e=2*n.BYTES_PER_ELEMENT);const h=0===s.byteLength?0:r;this.typedBuffer=null==i?new n(s,h):new n(s,h,(i-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=e/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,s,r=this.count-s){const e=this.typedBuffer.byteOffset+s*this.stride;return new t(this.buffer,e,this.stride,e+r*this.stride)}getVec(s,r){return s*=this.typedBufferStride,t(r,this.typedBuffer[s],this.typedBuffer[s+1])}setVec(t,s){t*=this.typedBufferStride,this.typedBuffer[t++]=s[0],this.typedBuffer[t]=s[1]}get(t,s){return this.typedBuffer[t*this.typedBufferStride+s]}set(t,s,r){this.typedBuffer[t*this.typedBufferStride+s]=r}setValues(t,s,r){t*=this.typedBufferStride,this.typedBuffer[t++]=s,this.typedBuffer[t]=r}copyFrom(t,s,r){const e=this.typedBuffer,i=s.typedBuffer;let n=t*this.typedBufferStride,h=r*s.typedBufferStride;e[n++]=i[h++],e[n]=i[h]}get buffer(){return this.typedBuffer.buffer}}h.ElementCount=2;class c{constructor(t,s,r=0,e,i){this.TypedArrayConstructor=t,this.elementCount=3;const n=this.TypedArrayConstructor;void 0===e&&(e=3*n.BYTES_PER_ELEMENT);const h=0===s.byteLength?0:r;this.typedBuffer=null==i?new n(s,h):new n(s,h,(i-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=e/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,s,r=this.count-s){const e=this.typedBuffer.byteOffset+s*this.stride;return new t(this.buffer,e,this.stride,e+r*this.stride)}getVec(t,r){return t*=this.typedBufferStride,s(r,this.typedBuffer[t],this.typedBuffer[t+1],this.typedBuffer[t+2])}setVec(t,s){t*=this.typedBufferStride,this.typedBuffer[t++]=s[0],this.typedBuffer[t++]=s[1],this.typedBuffer[t]=s[2]}get(t,s){return this.typedBuffer[t*this.typedBufferStride+s]}set(t,s,r){this.typedBuffer[t*this.typedBufferStride+s]=r}setValues(t,s,r,e){t*=this.typedBufferStride,this.typedBuffer[t++]=s,this.typedBuffer[t++]=r,this.typedBuffer[t]=e}copyFrom(t,s,r){const e=this.typedBuffer,i=s.typedBuffer;let n=t*this.typedBufferStride,h=r*s.typedBufferStride;e[n++]=i[h++],e[n++]=i[h++],e[n]=i[h]}get buffer(){return this.typedBuffer.buffer}}c.ElementCount=3;class u{constructor(t,s,r=0,e,i){this.TypedArrayConstructor=t,this.start=r,this.elementCount=4;const n=this.TypedArrayConstructor;void 0===e&&(e=4*n.BYTES_PER_ELEMENT);const h=0===s.byteLength?0:r;this.typedBuffer=null==i?new n(s,h):new n(s,h,(i-r)/n.BYTES_PER_ELEMENT),this.typedBufferStride=e/n.BYTES_PER_ELEMENT,this.count=Math.ceil(this.typedBuffer.length/this.typedBufferStride),this.stride=this.typedBufferStride*this.TypedArrayConstructor.BYTES_PER_ELEMENT}sliceBuffer(t,s,r=this.count-s){const e=this.typedBuffer.byteOffset+s*this.stride;return new t(this.buffer,e,this.stride,e+r*this.stride)}getVec(t,s){return t*=this.typedBufferStride,r(s,this.typedBuffer[t++],this.typedBuffer[t++],this.typedBuffer[t++],this.typedBuffer[t])}setVec(t,s){t*=this.typedBufferStride,this.typedBuffer[t++]=s[0],this.typedBuffer[t++]=s[1],this.typedBuffer[t++]=s[2],this.typedBuffer[t]=s[3]}get(t,s){return this.typedBuffer[t*this.typedBufferStride+s]}set(t,s,r){this.typedBuffer[t*this.typedBufferStride+s]=r}setValues(t,s,r,e,i){t*=this.typedBufferStride,this.typedBuffer[t++]=s,this.typedBuffer[t++]=r,this.typedBuffer[t++]=e,this.typedBuffer[t]=i}copyFrom(t,s,r){const e=this.typedBuffer,i=s.typedBuffer;let n=t*this.typedBufferStride,h=r*s.typedBufferStride;e[n++]=i[h++],e[n++]=i[h++],e[n++]=i[h++],e[n]=i[h]}get buffer(){return this.typedBuffer.buffer}}u.ElementCount=4;class a extends n{constructor(t,s=0,r,e){super(Float32Array,t,s,r,e),this.elementType="f32"}static fromTypedArray(t,s){return new a(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}a.ElementType="f32";class o extends h{constructor(t,s=0,r,e){super(Float32Array,t,s,r,e),this.elementType="f32"}slice(t,s){return this.sliceBuffer(o,t,s)}static fromTypedArray(t,s){return new o(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}o.ElementType="f32";class l extends c{constructor(t,s=0,r,e){super(Float32Array,t,s,r,e),this.elementType="f32"}slice(t,s){return this.sliceBuffer(l,t,s)}static fromTypedArray(t,s){return new l(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}l.ElementType="f32";class y extends u{constructor(t,s=0,r,e){super(Float32Array,t,s,r,e),this.elementType="f32"}slice(t,s){return this.sliceBuffer(y,t,s)}static fromTypedArray(t,s){return new y(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}y.ElementType="f32";class f extends e{constructor(t,s=0,r,e){super(Float32Array,t,s,r,e),this.elementType="f32"}slice(t,s){return this.sliceBuffer(f,t,s)}static fromTypedArray(t,s){return new f(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}f.ElementType="f32";class p extends e{constructor(t,s=0,r,e){super(Float64Array,t,s,r,e),this.elementType="f64"}slice(t,s){return this.sliceBuffer(p,t,s)}static fromTypedArray(t,s){return new p(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}p.ElementType="f64";class d extends i{constructor(t,s=0,r,e){super(Float32Array,t,s,r,e),this.elementType="f32"}slice(t,s){return this.sliceBuffer(d,t,s)}static fromTypedArray(t,s){return new d(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}d.ElementType="f32";class A extends i{constructor(t,s=0,r,e){super(Float64Array,t,s,r,e),this.elementType="f64"}slice(t,s){return this.sliceBuffer(A,t,s)}static fromTypedArray(t,s){return new A(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}A.ElementType="f64";class w extends n{constructor(t,s=0,r,e){super(Float64Array,t,s,r,e),this.elementType="f64"}slice(t,s){return this.sliceBuffer(w,t,s)}static fromTypedArray(t,s){return new w(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}w.ElementType="f64";class m extends h{constructor(t,s=0,r,e){super(Float64Array,t,s,r,e),this.elementType="f64"}slice(t,s){return this.sliceBuffer(m,t,s)}static fromTypedArray(t,s){return new m(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}m.ElementType="f64";class x extends c{constructor(t,s=0,r,e){super(Float64Array,t,s,r,e),this.elementType="f64"}slice(t,s){return this.sliceBuffer(x,t,s)}static fromTypedArray(t,s){return new x(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}x.ElementType="f64";class T extends u{constructor(t,s=0,r,e){super(Float64Array,t,s,r,e),this.elementType="f64"}slice(t,s){return this.sliceBuffer(T,t,s)}static fromTypedArray(t,s){return new T(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}T.ElementType="f64";class g extends n{constructor(t,s=0,r,e){super(Uint8Array,t,s,r,e),this.elementType="u8"}slice(t,s){return this.sliceBuffer(g,t,s)}static fromTypedArray(t,s){return new g(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}g.ElementType="u8";class F extends h{constructor(t,s=0,r,e){super(Uint8Array,t,s,r,e),this.elementType="u8"}slice(t,s){return this.sliceBuffer(F,t,s)}static fromTypedArray(t,s){return new F(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}F.ElementType="u8";class I extends c{constructor(t,s=0,r,e){super(Uint8Array,t,s,r,e),this.elementType="u8"}slice(t,s){return this.sliceBuffer(I,t,s)}static fromTypedArray(t,s){return new I(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}I.ElementType="u8";class U extends u{constructor(t,s=0,r,e){super(Uint8Array,t,s,r,e),this.elementType="u8"}slice(t,s){return this.sliceBuffer(U,t,s)}static fromTypedArray(t,s){return new U(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}U.ElementType="u8";class M extends n{constructor(t,s=0,r,e){super(Uint16Array,t,s,r,e),this.elementType="u16"}slice(t,s){return this.sliceBuffer(M,t,s)}static fromTypedArray(t,s){return new M(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}M.ElementType="u16";class V extends h{constructor(t,s=0,r,e){super(Uint16Array,t,s,r,e),this.elementType="u16"}slice(t,s){return this.sliceBuffer(V,t,s)}static fromTypedArray(t,s){return new V(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}V.ElementType="u16";class b extends c{constructor(t,s=0,r,e){super(Uint16Array,t,s,r,e),this.elementType="u16"}slice(t,s){return this.sliceBuffer(b,t,s)}static fromTypedArray(t,s){return new b(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}b.ElementType="u16";class v extends u{constructor(t,s=0,r,e){super(Uint16Array,t,s,r,e),this.elementType="u16"}slice(t,s){return this.sliceBuffer(v,t,s)}static fromTypedArray(t,s){return new v(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}v.ElementType="u16";class B extends n{constructor(t,s=0,r,e){super(Uint32Array,t,s,r,e),this.elementType="u32"}slice(t,s){return this.sliceBuffer(B,t,s)}static fromTypedArray(t,s){return new B(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}B.ElementType="u32";class j extends h{constructor(t,s=0,r,e){super(Uint32Array,t,s,r,e),this.elementType="u32"}slice(t,s){return this.sliceBuffer(j,t,s)}static fromTypedArray(t,s){return new j(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}j.ElementType="u32";class k extends c{constructor(t,s=0,r,e){super(Uint32Array,t,s,r,e),this.elementType="u32"}slice(t,s){return this.sliceBuffer(k,t,s)}static fromTypedArray(t,s){return new k(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}k.ElementType="u32";class q extends u{constructor(t,s=0,r,e){super(Uint32Array,t,s,r,e),this.elementType="u32"}slice(t,s){return this.sliceBuffer(q,t,s)}static fromTypedArray(t,s){return new q(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}q.ElementType="u32";class z extends n{constructor(t,s=0,r,e){super(Int8Array,t,s,r,e),this.elementType="i8"}slice(t,s){return this.sliceBuffer(z,t,s)}static fromTypedArray(t,s){return new z(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}z.ElementType="i8";class C extends h{constructor(t,s=0,r,e){super(Int8Array,t,s,r,e),this.elementType="i8"}slice(t,s){return this.sliceBuffer(C,t,s)}static fromTypedArray(t,s){return new C(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}C.ElementType="i8";class D extends c{constructor(t,s=0,r,e){super(Int8Array,t,s,r,e),this.elementType="i8"}slice(t,s){return this.sliceBuffer(D,t,s)}static fromTypedArray(t,s){return new D(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}D.ElementType="i8";class E extends u{constructor(t,s=0,r,e){super(Int8Array,t,s,r,e),this.elementType="i8"}slice(t,s){return this.sliceBuffer(E,t,s)}static fromTypedArray(t,s){return new E(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}E.ElementType="i8";class G extends n{constructor(t,s=0,r,e){super(Int16Array,t,s,r,e),this.elementType="i16"}slice(t,s){return this.sliceBuffer(G,t,s)}static fromTypedArray(t,s){return new G(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}G.ElementType="i16";class H extends h{constructor(t,s=0,r,e){super(Int16Array,t,s,r,e),this.elementType="i16"}slice(t,s){return this.sliceBuffer(H,t,s)}static fromTypedArray(t,s){return new H(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}H.ElementType="i16";class J extends c{constructor(t,s=0,r,e){super(Int16Array,t,s,r,e),this.elementType="i16"}slice(t,s){return this.sliceBuffer(J,t,s)}static fromTypedArray(t,s){return new J(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}J.ElementType="i16";class K extends u{constructor(t,s=0,r,e){super(Int16Array,t,s,r,e),this.elementType="i16"}slice(t,s){return this.sliceBuffer(K,t,s)}static fromTypedArray(t,s){return new K(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}K.ElementType="i16";class L extends n{constructor(t,s=0,r,e){super(Int32Array,t,s,r,e),this.elementType="i32"}slice(t,s){return this.sliceBuffer(L,t,s)}static fromTypedArray(t,s){return new L(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}L.ElementType="i32";class N extends h{constructor(t,s=0,r,e){super(Int32Array,t,s,r,e),this.elementType="i32"}slice(t,s){return this.sliceBuffer(N,t,s)}static fromTypedArray(t,s){return new N(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}N.ElementType="i32";class O extends c{constructor(t,s=0,r,e){super(Int32Array,t,s,r,e),this.elementType="i32"}slice(t,s){return this.sliceBuffer(O,t,s)}static fromTypedArray(t,s){return new O(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}O.ElementType="i32";class P extends u{constructor(t,s=0,r,e){super(Int32Array,t,s,r,e),this.elementType="i32"}slice(t,s){return this.sliceBuffer(P,t,s)}static fromTypedArray(t,s){return new P(t.buffer,t.byteOffset,s,t.byteOffset+t.byteLength)}}P.ElementType="i32";export{F as A,B,L as C,N as D,b as E,j as F,O as G,P as H,k as I,v as L,D as M,I as O,E as S,x as T,q as U,C as V,p as a,A as b,y as c,g as d,M as g,T as h,l as i,z as j,G as k,f as l,m,w as o,d as p,H as q,o as u,J as v,V as w,U as x,a as y,K as z};
//# sourceMappingURL=p-7020cf1b.js.map