import{s as t,a as n,br as e,b0 as r,a_ as o,bq as s,ce as u,bZ as l,bF as i,b3 as c}from"./p-028496e2.js";import{t as f}from"./p-1f0b604e.js";import{e as a}from"./p-347800d3.js";import{e as m}from"./p-94b15954.js";function y(t,n){return t?n?4:3:n?3:2}const d=()=>t.getLogger("esri.layers.graphics.featureConversionUtils"),g={esriGeometryPoint:0,esriGeometryPolyline:2,esriGeometryPolygon:3,esriGeometryMultipoint:0,esriGeometryEnvelope:0},h=(t,n,e,r,o,s)=>{t[e]=o,t[e+1]=s},p=(t,n,e,r,o,s)=>{t[e]=o,t[e+1]=s,t[e+2]=n[r+2]},b=(t,n,e,r,o,s)=>{t[e]=o,t[e+1]=s,t[e+2]=n[r+3]},w=(t,n,e,r,o,s)=>{t[e]=o,t[e+1]=s,t[e+2]=n[r+2],t[e+3]=n[r+3]};function G(t,n,e,r){if(t){if(e)return n&&r?w:p;if(n&&r)return b}else if(n&&r)return p;return h}function M({scale:t,translate:n},e){return Math.round((e-n[0])/t[0])}function P({scale:t,translate:n},e){return Math.round((n[1]-e)/t[1])}function v({scale:t,translate:n},e,r){return e*t[r]+n[r]}function Z(t,n,e){return t?n?e?x(t):T(t):e?k(t):F(t):null}function F(t){const n=t.coords;return{x:n[0],y:n[1]}}function N(t,n){return t.coords[0]=n.x,t.coords[1]=n.y,t}function T(t){const n=t.coords;return{x:n[0],y:n[1],z:n[2]}}function j(t,n){return t.coords[0]=n.x,t.coords[1]=n.y,t.coords[2]=n.z,t}function k(t){const n=t.coords;return{x:n[0],y:n[1],m:n[2]}}function I(t,n){return t.coords[0]=n.x,t.coords[1]=n.y,t.coords[2]=n.m,t}function x(t){const n=t.coords;return{x:n[0],y:n[1],z:n[2],m:n[3]}}function q(t,n){return t.coords[0]=n.x,t.coords[1]=n.y,t.coords[2]=n.z,t.coords[3]=n.m,t}function U(t,n,e,r){let o=F;e&&r?o=x:e?o=T:r&&(o=k);for(const e of n){const{geometry:n,attributes:r}=e,s=null!=n?o(n):null;t.push({attributes:r,geometry:s})}return t}function $(t,n){return t&&n?q:t?j:n?I:N}function z(t,n,e,r,o){const s=$(e,r);for(const{geometry:e,attributes:r}of n){const n=null!=e?s(new m,e):null;t.push(new f(n,r,null,o?r[o]:void 0))}return t}function L(t,n,e=$(null!=n.z,null!=n.m)){return e(t,n)}function R(t,n,e,r){for(const{geometry:o,attributes:s}of n)t.push({attributes:s,geometry:null!=o?S(o,e,r):null});return t}function S(t,n,e){if(null==t)return null;const r=y(n,e),o=[];for(let n=0;n<t.coords.length;n+=r){const e=[];for(let o=0;o<r;o++)e.push(t.coords[n+o]);o.push(e)}return n?e?{points:o,hasZ:n,hasM:e}:{points:o,hasZ:n}:e?{points:o,hasM:e}:{points:o}}function C(t,n,e,r,o){const s=y(e,r);for(const{geometry:e,attributes:r}of n){const n=null!=e?E(new m,e,s):null;t.push(new f(n,r,null,o?r[o]:void 0))}return t}function E(t,n,e=y(n.hasZ,n.hasM)){t.lengths[0]=n.points.length;const r=t.coords;let o=0;for(const t of n.points)for(let n=0;n<e;n++)r[o++]=t[n];return t}function _(t,n,e,r){for(const{geometry:o,attributes:s}of n)t.push({attributes:s,geometry:null!=o?A(o,e,r):null});return t}function A(t,n,e){if(!t)return null;const r=y(n,e),{coords:o,lengths:s}=t,u=[];let l=0;for(const t of s){const n=[];for(let e=0;e<t;e++){const t=[];for(let n=0;n<r;n++)t.push(o[l++]);n.push(t)}u.push(n)}return n?e?{paths:u,hasZ:n,hasM:e}:{paths:u,hasZ:n}:e?{paths:u,hasM:e}:{paths:u}}function B(t,n,e,r,o){const s=y(e,r);for(const{geometry:e,attributes:r,centroid:u}of n){const n=null!=e?D(new m,e,s):null,l=null!=u?L(new m,u):null;t.push(new f(n,r,l,o?r[o]:void 0))}return t}function D(t,n,e=y(n.hasZ,n.hasM)){const{lengths:r,coords:o}=t;let s=0;for(const t of n.paths){for(const n of t)for(let t=0;t<e;t++)o[s++]=n[t];r.push(t.length)}return t}function H(t,n,e,r){for(const{geometry:o,attributes:s,centroid:u}of n){const n=null!=o?J(o,e,r):null;if(null!=u){const e=F(u);t.push({attributes:s,centroid:e,geometry:n})}else t.push({attributes:s,geometry:n})}return t}function J(t,n,e){if(!t)return null;const r=y(n,e),{coords:o,lengths:s}=t,u=[];let l=0;for(const t of s){const n=[];for(let e=0;e<t;e++){const t=[];for(let n=0;n<r;n++)t.push(o[l++]);n.push(t)}u.push(n)}return n?e?{rings:u,hasZ:n,hasM:e}:{rings:u,hasZ:n}:e?{rings:u,hasM:e}:{rings:u}}function K(t,n,e,r,o){for(const{geometry:s,centroid:u,attributes:l}of n){const n=null!=s?O(new m,s,e,r):null,i=o?l[o]:void 0;null!=u?t.push(new f(n,l,N(new m,u),i)):t.push(new f(n,l,null,i))}return t}function O(t,n,e=n.hasZ,r=n.hasM){return Q(t,n.rings,e,r)}function Q(t,n,e,r){const o=y(e,r),{lengths:s,coords:u}=t;let l=0;bt(t);for(const t of n){for(const n of t)for(let t=0;t<o;t++)u[l++]=n[t];s.push(t.length)}return t}const V=[],W=[];function X(t,n,e,r,o){V[0]=t;const[s]=Y(W,V,n,e,r,o);return wt(V),wt(W),s}function Y(t,e,r,o,s,u){if(wt(t),!r){for(const n of e){const e=u?n.attributes[u]:void 0;t.push(new f(null,n.attributes,null,e))}return t}switch(r){case"esriGeometryPoint":return z(t,e,o,s,u);case"esriGeometryMultipoint":return C(t,e,o,s,u);case"esriGeometryPolyline":return B(t,e,o,s,u);case"esriGeometryPolygon":return K(t,e,o,s,u);default:d().error("convertToFeatureSet:unknown-geometry",new n(`Unable to parse unknown geometry type '${r}'`)),wt(t)}return t}function tt(t,n,e,r){W[0]=t,ot(V,W,n,e,r);const o=V[0];return wt(V),wt(W),o}function nt(t,u,l){if(null==t)return null;const i=new m;if("hasZ"in t&&null==u&&(u=t.hasZ),"hasM"in t&&null==l&&(l=t.hasM),e(t)){return $(null!=u?u:null!=t.z,null!=l?l:null!=t.m)(i,t)}return r(t)?O(i,t,u,l):o(t)?D(i,t,y(u,l)):s(t)?E(i,t,y(u,l)):void d().error("convertFromGeometry:unknown-geometry",new n(`Unable to parse unknown geometry type '${t}'`))}function et(t,e,r,o){const s=t&&("coords"in t?t:t.geometry);if(null==s)return null;switch(e){case"esriGeometryPoint":{let t=F;return r&&o?t=x:r?t=T:o&&(t=k),t(s)}case"esriGeometryMultipoint":return S(s,r,o);case"esriGeometryPolyline":return A(s,r,o);case"esriGeometryPolygon":return J(s,r,o);default:return d().error("convertToGeometry:unknown-geometry",new n(`Unable to parse unknown geometry type '${e}'`)),null}}function rt(t,n){for(const e of n)t.push({attributes:e.attributes});return t}function ot(t,e,r,o,s){if(wt(t),null==r)return rt(t,e);switch(r){case"esriGeometryPoint":return U(t,e,o,s);case"esriGeometryMultipoint":return R(t,e,o,s);case"esriGeometryPolyline":return _(t,e,o,s);case"esriGeometryPolygon":return H(t,e,o,s);default:d().error("convertToFeatureSet:unknown-geometry",new n(`Unable to parse unknown geometry type '${r}'`))}return t}function st(t){const{objectIdFieldName:n,spatialReference:e,transform:r,fields:o,hasM:s,hasZ:u,features:l,geometryType:i,exceededTransferLimit:c,uniqueIdField:f,queryGeometry:a,queryGeometryType:m}=t,y={features:ot([],l,i,u,s),fields:o,geometryType:i,objectIdFieldName:n,spatialReference:e,uniqueIdField:f,queryGeometry:et(a,m,!1,!1)};return r&&(y.transform=r),c&&(y.exceededTransferLimit=c),s&&(y.hasM=s),u&&(y.hasZ=u),y}function ut(t,e){const r=new a,{hasM:o,hasZ:s,features:u,objectIdFieldName:l,spatialReference:i,geometryType:c,exceededTransferLimit:f,transform:m,fields:y}=t;return y&&(r.fields=y),r.geometryType=c??null,r.objectIdFieldName=l??e??null,r.spatialReference=i??null,r.objectIdFieldName?(u&&Y(r.features,u,c,s,o,r.objectIdFieldName),f&&(r.exceededTransferLimit=f),o&&(r.hasM=o),s&&(r.hasZ=s),m&&(r.transform=m),r):(d().error(new n("optimized-features:invalid-objectIdFieldName","objectIdFieldName is missing")),r)}function lt(t){const{transform:n,features:e,hasM:r,hasZ:o}=t;if(!n)return t;for(const t of e)null!=t.geometry&&dt(t.geometry,t.geometry,r,o,n),null!=t.centroid&&dt(t.centroid,t.centroid,r,o,n);return t.transform=null,t}function it(t,n){const{geometryType:e,features:r,hasM:o,hasZ:s}=n;if(!t)return n;for(let n=0;n<r.length;n++){const u=r[n],l=u.weakClone();l.geometry=new m,ct(l.geometry,u.geometry,o,s,e,t),u.centroid&&(l.centroid=new m,ct(l.centroid,u.centroid,o,s,"esriGeometryPoint",t)),r[n]=l}return n.transform=t,n}function ct(t,n,e,r,o,s,u=e,l=r){if(bt(t),!n?.coords.length)return null;const i=g[o],{coords:c,lengths:f}=n,a=y(e,r),m=y(e&&u,r&&l),d=G(e,r,u,l);if(!f.length)return d(t.coords,c,0,0,M(s,c[0]),P(s,c[1])),bt(t,a,0),t;let h,p,b,w,v=0,Z=0,F=Z;for(const n of f){if(n<i)continue;let e=0;Z=F,b=h=M(s,c[v]),w=p=P(s,c[v+1]),d(t.coords,c,Z,v,b,w),e++,v+=a,Z+=m;for(let r=1;r<n;r++,v+=a)b=M(s,c[v]),w=P(s,c[v+1]),b===h&&w===p||(d(t.coords,c,Z,v,b-h,w-p),Z+=m,e++,h=b,p=w);e>=i&&(t.lengths.push(e),F=Z)}return wt(t.coords,F),t.coords.length?t:null}function ft(t,n,e,r,o,s,u=e,l=r){if(bt(t),!n?.coords.length)return null;const i=g[o],{coords:c,lengths:f}=n,a=y(e,r),m=y(e&&u,r&&l),d=G(e,r,u,l);if(!f.length)return d(t.coords,c,0,0,c[0],c[1]),bt(t,a,0),t;let h=0;const p=s*s;for(const n of f){if(n<i){h+=n*a;continue}const e=t.coords.length/m,r=h,o=h+(n-1)*a;d(t.coords,c,t.coords.length,r,c[r],c[r+1]),mt(t.coords,c,a,p,d,r,o),d(t.coords,c,t.coords.length,o,c[o],c[o+1]);const s=t.coords.length/m-e;s>=i?t.lengths.push(s):wt(t.coords,e*m),h+=n*a}return t.coords.length?t:null}function at(t,n,e,r){const o=t[n],s=t[n+1],u=t[e],l=t[e+1],i=t[r],c=t[r+1];let f=u,a=l,m=i-f,y=c-a;if(0!==m||0!==y){const t=((o-f)*m+(s-a)*y)/(m*m+y*y);t>1?(f=i,a=c):t>0&&(f+=m*t,a+=y*t)}return m=o-f,y=s-a,m*m+y*y}function mt(t,n,e,r,o,s,u){let l,i=r,c=0;for(let t=s+e;t<u;t+=e)l=at(n,t,s,u),l>i&&(c=t,i=l);i>r&&(c-s>e&&mt(t,n,e,r,o,s,c),o(t,n,t.length,c,n[c],n[c+1]),u-c>e&&mt(t,n,e,r,o,c,u))}function yt(t,n,e,r){if(!n?.coords?.length)return null;const o=y(e,r);let s=Number.POSITIVE_INFINITY,c=Number.POSITIVE_INFINITY,f=Number.NEGATIVE_INFINITY,a=Number.NEGATIVE_INFINITY;if(n&&n.coords){const t=n.coords;for(let n=0;n<t.length;n+=o){const e=t[n],r=t[n+1];s=Math.min(s,e),f=Math.max(f,e),c=Math.min(c,r),a=Math.max(a,r)}}return u(t)?l(t,s,c,f,a):i(s,c,f,a,t),t}function dt(t,n,e,r,o){const{coords:s,lengths:u}=n,l=y(e,r);if(!s.length)return t!==n&&bt(t),t;c(o);const{originPosition:i,scale:f,translate:a}=o,m=Gt;m.originPosition=i;const d=m.scale;d[0]=f[0]??1,d[1]=-(f[1]??1),d[2]=f[2]??1,d[3]=f[3]??1;const g=m.translate;if(g[0]=a[0]??0,g[1]=a[1]??0,g[2]=a[2]??0,g[3]=a[3]??0,!u.length){for(let n=0;n<l;++n)t.coords[n]=v(m,s[n],n);return t!==n&&bt(t,l,0),t}let h=0;for(let n=0;n<u.length;n++){const e=u[n];t.lengths[n]=e;for(let n=0;n<l;++n)t.coords[h+n]=v(m,s[h+n],n);let r=t.coords[h],o=t.coords[h+1];h+=l;for(let n=1;n<e;n++,h+=l){r+=s[h]*d[0],o+=s[h+1]*d[1],t.coords[h]=r,t.coords[h+1]=o;for(let n=2;n<l;++n)t.coords[h+n]=v(m,s[h+n],n)}}return t!==n&&bt(t,s.length,u.length),t}function gt(t,n,e,r,o,s){if(bt(t),t.lengths.push(...n.lengths),e===o&&r===s)for(let e=0;e<n.coords.length;e++)t.coords.push(n.coords[e]);else{const u=y(e,r),l=G(e,r,o,s),i=n.coords;for(let n=0;n<i.length;n+=u)l(t.coords,i,t.coords.length,n,i[n],i[n+1])}return t}function ht(t,n,e,r){let o=0,s=t[r*n],u=t[r*(n+1)];for(let l=1;l<e;l++){const e=s+t[r*(n+l)],i=u+t[r*(n+l)+1],c=(e-s)*(i+u);s=e,u=i,o+=c}return.5*o}function pt(t,n){const{coords:e,lengths:r}=t;let o=0,s=0;for(let t=0;t<r.length;t++){const u=r[t];s+=ht(e,o,u,n),o+=u}return Math.abs(s)}function bt(t,n=0,e=0){wt(t.lengths,e),wt(t.coords,n)}function wt(t,n=0){t.length!==n&&(t.length=n)}const Gt={originPosition:"lowerLeft",scale:[1,1,1,1],translate:[0,0,0,0]};export{A as $,J as H,gt as I,O as K,pt as N,L as O,Q,S as U,ct as a,M as b,ut as c,Y as e,it as f,yt as g,ft as h,lt as i,st as l,tt as n,nt as o,dt as p,et as r,X as t,P as w,Z as x};
//# sourceMappingURL=p-854d8fad.js.map