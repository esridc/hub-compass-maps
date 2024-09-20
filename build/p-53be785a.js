import{s as t}from"./p-3013819f.js";const n=()=>t.getLogger("esri.views.3d.support.buffer.math");function e(t,n,e){o(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function o(t,n,e,o=3,r=o){if(t.length/o!==Math.ceil(n.length/r))return t;const s=t.length/o,a=e[0],f=e[1],i=e[2],c=e[4],l=e[5],u=e[6],m=e[8],h=e[9],M=e[10],b=e[12],d=e[13],p=e[14];let w=0,v=0;for(let e=0;e<s;e++){const e=n[w],s=n[w+1],V=n[w+2];t[v]=a*e+c*s+m*V+b,t[v+1]=f*e+l*s+h*V+d,t[v+2]=i*e+u*s+M*V+p,w+=r,v+=o}return t}function r(t,n,e){s(t.typedBuffer,n.typedBuffer,e,t.typedBufferStride,n.typedBufferStride)}function s(t,e,o,r=3,s=r){if(t.length/r!==Math.ceil(e.length/s))return void n().error("source and destination buffers need to have the same number of elements");const a=t.length/r,f=o[0],i=o[1],c=o[2],l=o[3],u=o[4],m=o[5],h=o[6],M=o[7],b=o[8];let d=0,p=0;for(let n=0;n<a;n++){const n=e[d],o=e[d+1],a=e[d+2];t[p]=f*n+l*o+h*a,t[p+1]=i*n+u*o+M*a,t[p+2]=c*n+m*o+b*a,d+=s,p+=r}}function a(t,n,e){f(t.typedBuffer,n,e,t.typedBufferStride)}function f(t,n,e,o=3){const r=Math.min(t.length/o,n.count),s=n.typedBuffer,a=n.typedBufferStride;let f=0,i=0;for(let n=0;n<r;n++)t[i]=e*s[f],t[i+1]=e*s[f+1],t[i+2]=e*s[f+2],f+=a,i+=o}function i(t,n,e,o=3,r=o){const s=t.length/o;if(s!==Math.ceil(n.length/r))return t;let a=0,f=0;for(let i=0;i<s;i++)t[f]=n[a]+e[0],t[f+1]=n[a+1]+e[1],t[f+2]=n[a+2]+e[2],a+=r,f+=o;return t}function c(t,n){l(t.typedBuffer,n.typedBuffer,t.typedBufferStride,n.typedBufferStride)}function l(t,n,e=3,o=e){const r=Math.min(t.length/e,n.length/o);let s=0,a=0;for(let f=0;f<r;f++){const r=n[s],f=n[s+1],i=n[s+2],c=r*r+f*f+i*i;if(c>0){const n=1/Math.sqrt(c);t[a]=n*r,t[a+1]=n*f,t[a+2]=n*i}s+=o,a+=e}}function u(t,n,e){const o=Math.min(t.count,n.count),r=t.typedBuffer,s=t.typedBufferStride,a=n.typedBuffer,f=n.typedBufferStride;let i=0,c=0;for(let t=0;t<o;t++)r[c]=a[i]>>e,r[c+1]=a[i+1]>>e,r[c+2]=a[i+2]>>e,i+=f,c+=s}Object.freeze(Object.defineProperty({__proto__:null,normalize:l,normalizeView:c,scale:f,scaleView:a,shiftRight:u,transformMat3:s,transformMat3View:r,transformMat4:o,transformMat4View:e,translate:i},Symbol.toStringTag,{value:"Module"}));export{e as a,c as b,n as e,r as f,i,s as n,a as o,o as r,l as s,f as u};
//# sourceMappingURL=p-53be785a.js.map