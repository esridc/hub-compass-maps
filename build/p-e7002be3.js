import{r as t}from"./p-1c4b55c0.js";class r{constructor(t){this._readFile=t}resolveIncludes(t){return this._resolve(t)}_resolve(t,r=new Map){if(r.has(t))return r.get(t);const n=this._read(t);if(!n)throw new Error(`cannot find shader file ${t}`);const e=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let s=e.exec(n);const o=[];for(;null!=s;)o.push({path:s[1],start:s.index,length:s[0].length}),s=e.exec(n);let c=0,i="";return o.forEach((t=>{i+=n.slice(c,t.start),i+=r.has(t.path)?"":this._resolve(t.path,r),c=t.start+t.length})),i+=n.slice(c),r.set(t,i),i}_read(t){return this._readFile(t)}}function n(r,n,e=""){return new t(r,e+n.shaders.vertexShader,e+n.shaders.fragmentShader,n.attributes)}export{n as a,r as e};
//# sourceMappingURL=p-e7002be3.js.map