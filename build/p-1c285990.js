import{g$ as e,h0 as t,a$ as n,bl as r,h1 as i,h2 as l,s,bj as o,aH as u}from"./p-aad64c9f.js";import{h as a,a as c,I as f,P as p,$ as m,H as y,U as R,K as S}from"./p-875cbb57.js";import{s as h}from"./p-aff89b86.js";import{x as d}from"./p-e3657bc3.js";const G=new h,N=new h,P=new h,b={esriGeometryPoint:p,esriGeometryPolyline:m,esriGeometryPolygon:y,esriGeometryMultipoint:R};function w(e,t,n,r=e.hasZ,i=e.hasM){if(null==t)return null;const l=e.hasZ&&r,s=e.hasM&&i;if(n){const o=c(P,t,e.hasZ,e.hasM,"esriGeometryPoint",n,r,i);return p(o,l,s)}return p(t,l,s)}function M(e,t,n,r,i,l,s=t,o=n){const u=t&&s,p=n&&o,m=null!=r?"coords"in r?r:r.geometry:null;if(null==m)return null;if(i){let r=a(N,m,t,n,e,i,s,o);return l&&(r=c(P,r,u,p,e,l)),b[e]?.(r,u,p)??null}if(l){const r=c(P,m,t,n,e,l,s,o);return b[e]?.(r,u,p)??null}return f(G,m,t,n,s,o),b[e]?.(G,u,p)??null}function v(e){return e&&I in e?JSON.parse(JSON.stringify(e,g)):e}const I="_geVersion",g=(e,t)=>e!==I?t:void 0;function j(e,t){return e?t?4:3:t?3:2}function C(e,t,n,r){if(!t?.lengths.length)return null;e.lengths.length&&(e.lengths.length=0),e.coords.length&&(e.coords.length=0);const i=e.coords,l=[],s=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:o,coords:u}=t,a=j(n,r);let c=0;for(const e of o){const t=q(s,u,c,e,n,r);t&&l.push(t),c+=e*a}if(l.sort(((e,t)=>{let r=e[2]-t[2];return 0===r&&n&&(r=e[4]-t[4]),r})),l.length){let e=6*l[0][2];i[0]=l[0][0]/e,i[1]=l[0][1]/e,n&&(e=6*l[0][4],i[2]=0!==e?l[0][3]/e:0),(i[0]<s[0]||i[0]>s[1]||i[1]<s[2]||i[1]>s[3]||n&&(i[2]<s[4]||i[2]>s[5]))&&(i.length=0)}if(!i.length){const e=t.lengths[0]?T(u,0,o[0],n,r):null;if(!e)return null;i[0]=e[0],i[1]=e[1],n&&e.length>2&&(i[2]=e[2])}return e}function q(e,t,n,r,i,l){const s=j(i,l);let o=n,u=n+s,a=0,c=0,f=0,p=0,m=0;for(let n=0,l=r-1;n<l;n++,o+=s,u+=s){const n=t[o],r=t[o+1],l=t[o+2],s=t[u],y=t[u+1],R=t[u+2];let S=n*y-s*r;p+=S,a+=(n+s)*S,c+=(r+y)*S,i&&(S=n*R-s*l,f+=(l+R)*S,m+=S),n<e[0]&&(e[0]=n),n>e[1]&&(e[1]=n),r<e[2]&&(e[2]=r),r>e[3]&&(e[3]=r),i&&(l<e[4]&&(e[4]=l),l>e[5]&&(e[5]=l))}if(p>0&&(p*=-1),m>0&&(m*=-1),!p)return null;const y=[a,c,.5*p];return i&&(y[3]=f,y[4]=.5*m),y}function T(e,t,n,r,i){const l=j(r,i);let s=t,o=t+l,u=0,a=0,c=0,f=0;for(let t=0,i=n-1;t<i;t++,s+=l,o+=l){const t=e[s],n=e[s+1],i=e[s+2],l=e[o],p=e[o+1],m=e[o+2],y=r?F(t,n,i,l,p,m):E(t,n,l,p);if(y)if(u+=y,r){const e=x(t,n,i,l,p,m);a+=y*e[0],c+=y*e[1],f+=y*e[2]}else{const e=O(t,n,l,p);a+=y*e[0],c+=y*e[1]}}return u>0?r?[a/u,c/u,f/u]:[a/u,c/u]:n>0?r?[e[t],e[t+1],e[t+2]]:[e[t],e[t+1]]:null}function E(e,t,n,r){const i=n-e,l=r-t;return Math.sqrt(i*i+l*l)}function F(e,t,n,r,i,l){const s=r-e,o=i-t,u=l-n;return Math.sqrt(s*s+o*o+u*u)}function O(e,t,n,r){return[e+.5*(n-e),t+.5*(r-t)]}function x(e,t,n,r,i,l){return[e+.5*(r-e),t+.5*(i-t),n+.5*(l-n)]}function U(n){return"mesh"===n?e:t(n)}function D(e,t){return e?t?4:3:t?3:2}function J(e,t,n,r){return $(e,t,n,r.coords[0],r.coords[1])}function W(e,t,n,r,i,l){const s=D(i,l),{coords:o,lengths:u}=r;if(!u)return!1;for(let r=0,i=0;r<u.length;r++,i+=s)if(!$(e,t,n,o[i],o[i+1]))return!1;return!0}function $(e,t,n,r,i){if(!e)return!1;const l=D(t,n),{coords:s,lengths:o}=e;let u=!1,a=0;for(const e of o)u=H(u,s,l,a,e,r,i),a+=e*l;return u}function H(e,t,n,r,i,l,s){let o=e,u=r;for(let e=r,a=r+i*n;e<a;e+=n){u=e+n,u===a&&(u=r);const i=t[e],c=t[e+1],f=t[u],p=t[u+1];(c<s&&p>=s||p<s&&c>=s)&&i+(s-c)/(p-c)*(f-i)<l&&(o=!o)}return o}const V="unsupported-query",_={esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"intersects",esriSpatialRelIndexIntersects:null,esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:null},k={spatialRelationship:{esriSpatialRelIntersects:!0,esriSpatialRelContains:!0,esriSpatialRelWithin:!0,esriSpatialRelCrosses:!0,esriSpatialRelDisjoint:!0,esriSpatialRelTouches:!0,esriSpatialRelOverlaps:!0,esriSpatialRelEnvelopeIntersects:!0,esriSpatialRelIndexIntersects:!1,esriSpatialRelRelation:!1},queryGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!1,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!0},layerGeometry:{esriGeometryPoint:!0,esriGeometryMultiPatch:!0,esriGeometryMultipoint:!0,esriGeometryPolyline:!0,esriGeometryPolygon:!0,esriGeometryEnvelope:!1}};function z(e){return null!=e&&!0===k.spatialRelationship[e]}function A(e){return null!=e&&!0===k.queryGeometry[u(e)]}function B(e){return null!=e&&!0===k.layerGeometry[e]}function K(){return import("./p-a9020a78.js")}function L(e,t,s,o,u){if(n(t)&&"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e)){const e=S(new h,t,!1,!1);return Promise.resolve((t=>J(e,!1,!1,t)))}if(n(t)&&"esriGeometryMultipoint"===s){const n=S(new h,t,!1,!1);if("esriSpatialRelContains"===e)return Promise.resolve((e=>W(n,!1,!1,e,o,u)))}if(r(t)&&"esriGeometryPoint"===s&&("esriSpatialRelIntersects"===e||"esriSpatialRelContains"===e))return Promise.resolve((e=>i(t,M(s,o,u,e))));if(r(t)&&"esriGeometryMultipoint"===s&&"esriSpatialRelContains"===e)return Promise.resolve((e=>l(t,M(s,o,u,e))));if(r(t)&&"esriSpatialRelIntersects"===e){const e=U(s);return Promise.resolve((n=>e(t,M(s,o,u,n))))}return K().then((n=>{const r=n[_[e]].bind(null,t.spatialReference,t);return e=>r(M(s,o,u,e))}))}async function Q(e,t,n){const{spatialRel:r,geometry:i}=e;if(i){if(!z(r))throw new s(V,"Unsupported query spatial relationship",{query:e});if(o(i.spatialReference)&&o(n)){if(!A(i))throw new s(V,"Unsupported query geometry type",{query:e});if(!B(t))throw new s(V,"Unsupported layer geometry type",{query:e});if(e.outSR)return d(e.geometry?.spatialReference,e.outSR)}}}function X(e){if(r(e))return!0;if(n(e)){for(const t of e.rings){if(5!==t.length)return!1;if(t[0][0]!==t[1][0]||t[0][0]!==t[4][0]||t[2][0]!==t[3][0]||t[0][1]!==t[3][1]||t[0][1]!==t[4][1]||t[1][1]!==t[2][1])return!1}return!0}return!1}async function Y(e,t){if(!e)return null;const n=t.featureAdapter,{startTimeField:r,endTimeField:i}=e;let l=Number.POSITIVE_INFINITY,s=Number.NEGATIVE_INFINITY;if(r&&i)await t.forEach((e=>{const t=n.getAttribute(e,r),o=n.getAttribute(e,i);null==t||isNaN(t)||(l=Math.min(l,t)),null==o||isNaN(o)||(s=Math.max(s,o))}));else{const e=r||i;await t.forEach((t=>{const r=n.getAttribute(t,e);null==r||isNaN(r)||(l=Math.min(l,r),s=Math.max(s,r))}))}return{start:l,end:s}}function Z(e,t,n){if(!t||!e)return null;const{startTimeField:r,endTimeField:i}=e;if(!r&&!i)return null;const{start:l,end:s}=t;if(null===l&&null===s)return null;if(void 0===l&&void 0===s)return ne();const o=n.getAttributeAsTimestamp?.bind(n)??n.getAttribute.bind(n);return r&&i?ee(o,r,i,l,s):te(o,r||i,l,s)}function ee(e,t,n,r,i){return null!=r&&null!=i?l=>{const s=e(l,t),o=e(l,n);return(null==s||s<=i)&&(null==o||o>=r)}:null!=r?t=>{const i=e(t,n);return null==i||i>=r}:null!=i?n=>{const r=e(n,t);return null==r||r<=i}:void 0}function te(e,t,n,r){return null!=n&&null!=r&&n===r?r=>e(r,t)===n:null!=n&&null!=r?i=>{const l=e(i,t);return null!=l&&l>=n&&l<=r}:null!=n?r=>{const i=e(r,t);return null!=i&&i>=n}:null!=r?n=>{const i=e(n,t);return null!=i&&i<=r}:void 0}function ne(){return()=>!1}export{X as I,L as P,M as a,Y as b,v as h,C as n,Z as t,Q as v,w as y};
//# sourceMappingURL=p-1c285990.js.map