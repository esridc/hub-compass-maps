import"./p-aad64c9f.js";function t(t,o,e){n(t.typedBuffer,o.typedBuffer,e,t.typedBufferStride,o.typedBufferStride)}function n(t,n,o,e=3,r=e){if(t.length/e!==Math.ceil(n.length/r))return t;const f=t.length/e,c=o[0],a=o[1],i=o[2],l=o[4],s=o[5],u=o[6],M=o[8],h=o[9],m=o[10],p=o[12],w=o[13],V=o[14];let _=0,b=0;for(let o=0;o<f;o++){const o=n[_],f=n[_+1],j=n[_+2];t[b]=c*o+l*f+M*j+p,t[b+1]=a*o+s*f+h*j+w,t[b+2]=i*o+u*f+m*j+V,_+=r,b+=e}return t}function o(t,n,o){e(t.typedBuffer,n.typedBuffer,o,t.typedBufferStride,n.typedBufferStride)}function e(t,n,o,e=3,r=e){if(t.length/e!==Math.ceil(n.length/r))return;const f=t.length/e,c=o[0],a=o[1],i=o[2],l=o[3],s=o[4],u=o[5],M=o[6],h=o[7],m=o[8];let p=0,w=0;for(let o=0;o<f;o++){const o=n[p],f=n[p+1],V=n[p+2];t[w]=c*o+l*f+M*V,t[w+1]=a*o+s*f+h*V,t[w+2]=i*o+u*f+m*V,p+=r,w+=e}}function r(t,n,o){f(t.typedBuffer,n.typedBuffer,o,t.typedBufferStride,n.typedBufferStride)}function f(t,n,o,e=3,r=e){const f=Math.min(t.length/e,n.length/r);let c=0,a=0;for(let i=0;i<f;i++)t[a]=o*n[c],t[a+1]=o*n[c+1],t[a+2]=o*n[c+2],c+=r,a+=e;return t}function c(t,n,o,e=3,r=e){const f=t.length/e;if(f!==Math.ceil(n.length/r))return t;let c=0,a=0;for(let i=0;i<f;i++)t[a]=n[c]+o[0],t[a+1]=n[c+1]+o[1],t[a+2]=n[c+2]+o[2],c+=r,a+=e;return t}function a(t,n){i(t.typedBuffer,n.typedBuffer,t.typedBufferStride,n.typedBufferStride)}function i(t,n,o=3,e=o){const r=Math.min(t.length/o,n.length/e);let f=0,c=0;for(let a=0;a<r;a++){const r=n[f],a=n[f+1],i=n[f+2],l=r*r+a*a+i*i;if(l>0){const n=1/Math.sqrt(l);t[c]=n*r,t[c+1]=n*a,t[c+2]=n*i}f+=e,c+=o}}function l(t,n,o){const e=Math.min(t.count,n.count),r=t.typedBuffer,f=t.typedBufferStride,c=n.typedBuffer,a=n.typedBufferStride;let i=0,l=0;for(let t=0;t<e;t++)r[l]=c[i]>>o,r[l+1]=c[i+1]>>o,r[l+2]=c[i+2]>>o,i+=a,l+=f}Object.freeze(Object.defineProperty({__proto__:null,normalize:i,normalizeView:a,scale:f,scaleView:r,shiftRight:l,transformMat3:e,transformMat3View:o,transformMat4:n,transformMat4View:t,translate:c},Symbol.toStringTag,{value:"Module"}));export{n as e,e as f,c as i,i as l,r as n,f as o,o as r,t,a as u};
//# sourceMappingURL=p-dcc79702.js.map