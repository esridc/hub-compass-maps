import{cf as t,cg as e,ch as n,Z as r,ci as i,cj as s,ck as l,aY as o,cl as u,cm as a,b5 as c,cn as f,aQ as p,co as m,b$ as y,b0 as h,a_ as S,cp as R,cq as d,cr as w,cs as g,ct as N,cu as G,cv as b,cw as M,a as v,aM as P}from"./p-028496e2.js";import{h as x,a as I,I as j,x as U,$ as T,H as q,U as F,K as _}from"./p-854d8fad.js";import{e as C}from"./p-94b15954.js";import{t as O}from"./p-4f73c6ea.js";const E=new C,Z=new C,A=new C,k={esriGeometryPoint:U,esriGeometryPolyline:T,esriGeometryPolygon:q,esriGeometryMultipoint:F};function B(t,e,n,r=t.hasZ,i=t.hasM){if(null==e)return null;const s=t.hasZ&&r,l=t.hasM&&i;if(n){const o=I(A,e,t.hasZ,t.hasM,"esriGeometryPoint",n,r,i);return U(o,s,l)}return U(e,s,l)}function D(t,e,n,r,i,s,l=e,o=n){const u=e&&l,a=n&&o,c=null!=r?"coords"in r?r:r.geometry:null;if(null==c)return null;if(i){let r=x(Z,c,e,n,t,i,l,o);return s&&(r=I(A,r,u,a,t,s)),k[t]?.(r,u,a)??null}if(s){const r=I(A,c,e,n,t,s,l,o);return k[t]?.(r,u,a)??null}return j(E,c,e,n,l,o),k[t]?.(E,u,a)??null}function J(t){return t&&W in t?JSON.parse(JSON.stringify(t,$)):t}const W="_geVersion",$=(t,e)=>t!==W?e:void 0;function z(t,e){return t?e?4:3:e?3:2}function K(t,e,n,r){if(!e?.lengths.length)return null;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const i=t.coords,s=[],l=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:o,coords:u}=e,a=z(n,r);let c=0;for(const t of o){const e=Q(l,u,c,t,n,r);e&&s.push(e),c+=t*a}if(s.sort(((t,e)=>{let r=t[2]-e[2];return 0===r&&n&&(r=t[4]-e[4]),r})),s.length){let t=6*s[0][2];i[0]=s[0][0]/t,i[1]=s[0][1]/t,n&&(t=6*s[0][4],i[2]=0!==t?s[0][3]/t:0),(i[0]<l[0]||i[0]>l[1]||i[1]<l[2]||i[1]>l[3]||n&&(i[2]<l[4]||i[2]>l[5]))&&(i.length=0)}if(!i.length){const t=e.lengths[0]?V(u,0,o[0],n,r):null;if(!t)return null;i[0]=t[0],i[1]=t[1],n&&t.length>2&&(i[2]=t[2])}return t}function Q(t,e,n,r,i,s){const l=z(i,s);let o=n,u=n+l,a=0,c=0,f=0,p=0,m=0;for(let n=0,s=r-1;n<s;n++,o+=l,u+=l){const n=e[o],r=e[o+1],s=e[o+2],l=e[u],y=e[u+1],h=e[u+2];let S=n*y-l*r;p+=S,a+=(n+l)*S,c+=(r+y)*S,i&&(S=n*h-l*s,f+=(s+h)*S,m+=S),n<t[0]&&(t[0]=n),n>t[1]&&(t[1]=n),r<t[2]&&(t[2]=r),r>t[3]&&(t[3]=r),i&&(s<t[4]&&(t[4]=s),s>t[5]&&(t[5]=s))}if(p>0&&(p*=-1),m>0&&(m*=-1),!p)return null;const y=[a,c,.5*p];return i&&(y[3]=f,y[4]=.5*m),y}function V(t,e,n,r,i){const s=z(r,i);let l=e,o=e+s,u=0,a=0,c=0,f=0;for(let e=0,i=n-1;e<i;e++,l+=s,o+=s){const e=t[l],n=t[l+1],i=t[l+2],s=t[o],p=t[o+1],m=t[o+2],y=r?H(e,n,i,s,p,m):Y(e,n,s,p);if(y)if(u+=y,r){const t=X(e,n,i,s,p,m);a+=y*t[0],c+=y*t[1],f+=y*t[2]}else{const t=L(e,n,s,p);a+=y*t[0],c+=y*t[1]}}return u>0?r?[a/u,c/u,f/u]:[a/u,c/u]:n>0?r?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function Y(t,e,n,r){const i=n-t,s=r-e;return Math.sqrt(i*i+s*s)}function H(t,e,n,r,i,s){const l=r-t,o=i-e,u=s-n;return Math.sqrt(l*l+o*o+u*u)}function L(t,e,n,r){return[t+.5*(n-t),e+.5*(r-e)]}function X(t,e,n,r,i,s){return[t+.5*(r-t),e+.5*(i-e),n+.5*(s-n)]}const tt=[0,0];function et(t,e){if(!e)return null;if("x"in e){const n={x:0,y:0};return[n.x,n.y]=t(e.x,e.y,tt),null!=e.z&&(n.z=e.z),null!=e.m&&(n.m=e.m),n}if("xmin"in e){const n={xmin:0,ymin:0,xmax:0,ymax:0};return[n.xmin,n.ymin]=t(e.xmin,e.ymin,tt),[n.xmax,n.ymax]=t(e.xmax,e.ymax,tt),e.hasZ&&(n.zmin=e.zmin,n.zmax=e.zmax,n.hasZ=!0),e.hasM&&(n.mmin=e.mmin,n.mmax=e.mmax,n.hasM=!0),n}return"rings"in e?{rings:nt(e.rings,t),hasM:e.hasM,hasZ:e.hasZ}:"paths"in e?{paths:nt(e.paths,t),hasM:e.hasM,hasZ:e.hasZ}:"points"in e?{points:rt(e.points,t),hasM:e.hasM,hasZ:e.hasZ}:null}function nt(t,e){const n=[];for(const r of t)n.push(rt(r,e));return n}function rt(t,e){const n=[];for(const r of t){const t=e(r[0],r[1],[0,0]);n.push(t),r.length>2&&t.push(r[2]),r.length>3&&t.push(r[3])}return n}async function it(t,e){if(!t||!e)return;const n=Array.isArray(t)?t.map((t=>null!=t.geometry?t.geometry.spatialReference:null)).filter(o):[t];await u(n.map((t=>({source:t,dest:e}))))}const st=et.bind(null,t),lt=et.bind(null,e);function ot(t,e,r,o){if(!t)return t;if(r||(r=e,e=t.spatialReference),!a(e)||!a(r)||n(e,r))return t;if(i(e,r)){const e=s(r)?st(t):lt(t);return e.spatialReference=r,e}return l(O,[t],e,r,null,o)[0]}class ut{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,i,s){if(!t?.length||!e||!i||n(e,i))return t;const l={geometries:t,inSpatialReference:e,outSpatialReference:i,geographicTransformation:s,resolve:r()};return this._jobs.push(l),this._timer??=setTimeout(this._process,10),l.resolve.promise}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:n,outSpatialReference:r,resolve:o,geographicTransformation:u}=t;i(n,r)?s(r)?o(e.map(st)):o(e.map(lt)):o(l(O,e,n,r,u,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const at=new ut;function ct(t,e,n,r){return at.push(t,e,n,r)}const ft=new c({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),pt=Object.freeze({});async function mt(t,e,n){const{outFields:r,orderByFields:i,groupByFieldsForStatistics:s,outStatistics:l}=t;if(r)for(let t=0;t<r.length;t++)r[t]=r[t].trim();if(i)for(let t=0;t<i.length;t++)i[t]=i[t].trim();if(s)for(let t=0;t<s.length;t++)s[t]=s[t].trim();if(l)for(let t=0;t<l.length;t++)l[t].onStatisticField&&(l[t].onStatisticField=l[t].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),yt(t,e,n)}async function yt(t,e,n){if(!t)return null;let{where:r}=t;if(t.where=r=r?.trim(),(!r||/^1 *= *1$/.test(r)||e&&e===r)&&(t.where=null),!t.geometry)return t;let i=await Rt(t);if(t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel){const{spatialReference:e}=t.geometry;i=f(i),i.spatialReference=e}if(i){await it(i.spatialReference,n),i=St(i,n);const e=(await m(y(i)))[0];if(null==e)throw pt;const r="quantizationParameters"in t&&t.quantizationParameters?.tolerance||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,s=r&&ht(i,n)?{densificationStep:8*r}:void 0,l=e.toJSON(),o=ot(l,l.spatialReference,n,s);if(!o)throw pt;o.spatialReference=n,t.geometry=o}return t}function ht(t,e){if(!t)return!1;const r=t.spatialReference;return(p(t)||h(t)||S(t))&&!n(r,e)&&!R(r,e)}function St(t,e){const n=t.spatialReference;return ht(t,e)&&p(t)?{spatialReference:n,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:t}async function Rt(t){const{distance:e,units:n}=t,r=t.geometry;if(null==e||"vertexAttributes"in r)return r;const i=r.spatialReference,l=n?ft.fromJSON(n):d(i),o=i&&(w(i)||s(i))?r:await it(i,g).then((()=>ot(r,g)));return(await dt())(o.spatialReference,o,e,l)}async function dt(){return(await import("./p-6d4e518a.js")).geodesicBuffer}function wt(t){return"mesh"===t?N:G(t)}function gt(t,e){return t?e?4:3:e?3:2}function Nt(t,e,n,r){return bt(t,e,n,r.coords[0],r.coords[1])}function Gt(t,e,n,r,i,s){const l=gt(i,s),{coords:o,lengths:u}=r;if(!u)return!1;for(let r=0,i=0;r<u.length;r++,i+=l)if(!bt(t,e,n,o[i],o[i+1]))return!1;return!0}function bt(t,e,n,r,i){if(!t)return!1;const s=gt(e,n),{coords:l,lengths:o}=t;let u=!1,a=0;for(const t of o)u=Mt(u,l,s,a,t,r,i),a+=t*s;return u}function Mt(t,e,n,r,i,s,l){let o=t,u=r;for(let t=r,a=r+i*n;t<a;t+=n){u=t+n,u===a&&(u=r);const i=e[t],c=e[t+1],f=e[u],p=e[u+1];(c<l&&p>=l||p<l&&c>=l)&&i+(l-c)/(p-c)*(f-i)<s&&(o=!o)}return o}const vt="unsupported-query",Pt={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},xt={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function It(t){return null!=t&&!0===xt.spatialRelationship[t]}function jt(t){return null!=t&&!0===xt.queryGeometry[P(t)]}function Ut(t){return null!=t&&!0===xt.layerGeometry[t]}function Tt(){return import("./p-6d4e518a.js")}function qt(t,e,n,r,i){if(h(e)&&"esriGeometryPoint"===n&&("esriSpatialRelIntersects"===t||"esriSpatialRelContains"===t)){const t=_(new C,e,!1,!1);return Promise.resolve((e=>Nt(t,!1,!1,e)))}if(h(e)&&"esriGeometryMultipoint"===n){const n=_(new C,e,!1,!1);if("esriSpatialRelContains"===t)return Promise.resolve((t=>Gt(n,!1,!1,t,r,i)))}if(p(e)&&"esriGeometryPoint"===n&&("esriSpatialRelIntersects"===t||"esriSpatialRelContains"===t))return Promise.resolve((t=>b(e,D(n,r,i,t))));if(p(e)&&"esriGeometryMultipoint"===n&&"esriSpatialRelContains"===t)return Promise.resolve((t=>M(e,D(n,r,i,t))));if(p(e)&&"esriSpatialRelIntersects"===t){const t=wt(n);return Promise.resolve((s=>t(e,D(n,r,i,s))))}return Tt().then((s=>{const l=s[Pt[t]].bind(null,e.spatialReference,e);return t=>l(D(n,r,i,t))}))}async function Ft(t,e,n){const{spatialRel:r,geometry:i}=t;if(i){if(!It(r))throw new v(vt,"Unsupported query spatial relationship",{query:t});if(a(i.spatialReference)&&a(n)){if(!jt(i))throw new v(vt,"Unsupported query geometry type",{query:t});if(!Ut(e))throw new v(vt,"Unsupported layer geometry type",{query:t});if(t.outSR)return it(t.geometry?.spatialReference,t.outSR)}}}function _t(t){if(p(t))return!0;if(h(t)){for(const e of t.rings){if(5!==e.length)return!1;if(e[0][0]!==e[1][0]||e[0][0]!==e[4][0]||e[2][0]!==e[3][0]||e[0][1]!==e[3][1]||e[0][1]!==e[4][1]||e[1][1]!==e[2][1])return!1}return!0}return!1}async function Ct(t,e){if(!t)return null;const n=e.featureAdapter,{startTimeField:r,endTimeField:i}=t;let s=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY;if(r&&i)await e.forEach((t=>{const e=n.getAttribute(t,r),o=n.getAttribute(t,i);null==e||isNaN(e)||(s=Math.min(s,e)),null==o||isNaN(o)||(l=Math.max(l,o))}));else{const t=r||i;await e.forEach((e=>{const r=n.getAttribute(e,t);null==r||isNaN(r)||(s=Math.min(s,r),l=Math.max(l,r))}))}return{start:s,end:l}}function Ot(t,e,n){if(!e||!t)return null;const{startTimeField:r,endTimeField:i}=t;if(!r&&!i)return null;const{start:s,end:l}=e;if(null===s&&null===l)return null;if(void 0===s&&void 0===l)return At();const o=n.getAttributeAsTimestamp?.bind(n)??n.getAttribute.bind(n);return r&&i?Et(o,r,i,s,l):Zt(o,r||i,s,l)}function Et(t,e,n,r,i){return null!=r&&null!=i?s=>{const l=t(s,e),o=t(s,n);return(null==l||l<=i)&&(null==o||o>=r)}:null!=r?e=>{const i=t(e,n);return null==i||i>=r}:null!=i?n=>{const r=t(n,e);return null==r||r<=i}:void 0}function Zt(t,e,n,r){return null!=n&&null!=r&&n===r?r=>t(r,e)===n:null!=n&&null!=r?i=>{const s=t(i,e);return null!=s&&s>=n&&s<=r}:null!=n?r=>{const i=t(r,e);return null!=i&&i>=n}:null!=r?n=>{const i=t(n,e);return null!=i&&i<=r}:void 0}function At(){return()=>!1}export{_t as I,Ft as P,mt as S,yt as a,D as b,Ct as c,ct as d,pt as g,J as h,ot as j,K as n,Ot as t,qt as v,it as x,B as y};
//# sourceMappingURL=p-3a28ec18.js.map