import{be as t,bf as n,j as i,av as s,bg as e,aE as r,bh as a,F as o,bi as u,bj as l,m as c,bk as f,bl as h,ay as m,g as p,a$ as b,b0 as S,J as w,bm as y,aC as R,bn as g}from"./p-aad64c9f.js";import{t as x}from"./p-bac7b09c.js";const d=[0,0];function j(t,n){if(!n)return null;if("x"in n){const i={x:0,y:0};return[i.x,i.y]=t(n.x,n.y,d),null!=n.z&&(i.z=n.z),null!=n.m&&(i.m=n.m),i}if("xmin"in n){const i={xmin:0,ymin:0,xmax:0,ymax:0};return[i.xmin,i.ymin]=t(n.xmin,n.ymin,d),[i.xmax,i.ymax]=t(n.xmax,n.ymax,d),n.hasZ&&(i.zmin=n.zmin,i.zmax=n.zmax,i.hasZ=!0),n.hasM&&(i.mmin=n.mmin,i.mmax=n.mmax,i.hasM=!0),i}return"rings"in n?{rings:M(n.rings,t),hasM:n.hasM,hasZ:n.hasZ}:"paths"in n?{paths:M(n.paths,t),hasM:n.hasM,hasZ:n.hasZ}:"points"in n?{points:U(n.points,t),hasM:n.hasM,hasZ:n.hasZ}:null}function M(t,n){const i=[];for(const s of t)i.push(U(s,n));return i}function U(t,n){const i=[];for(const s of t){const t=n(s[0],s[1],[0,0]);i.push(t),s.length>2&&t.push(s[2]),s.length>3&&t.push(s[3])}return i}async function _(t,n){if(!t||!n)return;const i=Array.isArray(t)?t.map((t=>null!=t.geometry?t.geometry.spatialReference:null)).filter(o):[t];await u(i.map((t=>({source:t,dest:n}))))}const v=j.bind(null,t),F=j.bind(null,n);function T(t,n,s,o){if(!t)return t;if(s||(s=n,n=t.spatialReference),!l(n)||!l(s)||i(n,s))return t;if(e(n,s)){const n=r(s)?v(t):F(t);return n.spatialReference=s,n}return a(x,[t],n,s,null,o)[0]}class A{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,n,e,r){if(!t?.length||!n||!e||i(n,e))return t;const a={geometries:t,inSpatialReference:n,outSpatialReference:e,geographicTransformation:r,resolve:s()};return this._jobs.push(a),this._timer??=setTimeout(this._process,10),a.resolve.promise}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:n,inSpatialReference:i,outSpatialReference:s,resolve:o,geographicTransformation:u}=t;e(i,s)?r(s)?o(n.map(v)):o(n.map(F)):o(a(x,n,i,s,u,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const Z=new A;function k(t,n,i,s){return Z.push(t,n,i,s)}const B=new c({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),E=Object.freeze({});async function N(t,n,i){const{outFields:s,orderByFields:e,groupByFieldsForStatistics:r,outStatistics:a}=t;if(s)for(let t=0;t<s.length;t++)s[t]=s[t].trim();if(e)for(let t=0;t<e.length;t++)e[t]=e[t].trim();if(r)for(let t=0;t<r.length;t++)r[t]=r[t].trim();if(a)for(let t=0;t<a.length;t++)a[t].onStatisticField&&(a[t].onStatisticField=a[t].onStatisticField.trim());return t.geometry&&!t.outSR&&(t.outSR=t.geometry.spatialReference),O(t,n,i)}async function O(t,n,i){if(!t)return null;let{where:s}=t;if(t.where=s=s?.trim(),(!s||/^1 *= *1$/.test(s)||n&&n===s)&&(t.where=null),!t.geometry)return t;let e=await z(t);if(t.distance=0,t.units=null,"esriSpatialRelEnvelopeIntersects"===t.spatialRel){const{spatialReference:n}=t.geometry;e=f(e),e.spatialReference=n}if(e){await _(e.spatialReference,i),e=q(e,i);const n=(await m(p(e)))[0];if(null==n)throw E;const s="quantizationParameters"in t&&t.quantizationParameters?.tolerance||"maxAllowableOffset"in t&&t.maxAllowableOffset||0,r=s&&$(e,i)?{densificationStep:8*s}:void 0,a=n.toJSON(),o=T(a,a.spatialReference,i,r);if(!o)throw E;o.spatialReference=i,t.geometry=o}return t}function $(t,n){if(!t)return!1;const s=t.spatialReference;return(h(t)||b(t)||S(t))&&!i(s,n)&&!w(s,n)}function q(t,n){const i=t.spatialReference;return $(t,n)&&h(t)?{spatialReference:i,rings:[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]}:t}async function z(t){const{distance:n,units:i}=t,s=t.geometry;if(null==n||"vertexAttributes"in s)return s;const e=s.spatialReference,a=i?B.fromJSON(i):y(e),o=e&&(R(e)||r(e))?s:await _(e,g).then((()=>T(s,g)));return(await C())(o.spatialReference,o,n,a)}async function C(){return(await import("./p-a9020a78.js")).geodesicBuffer}export{B as R,N as S,O as a,k as b,E as g,T as j,_ as x};
//# sourceMappingURL=p-e3657bc3.js.map