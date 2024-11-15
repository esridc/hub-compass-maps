import{mD as t,$ as n,ap as r,ag as e,lM as s,lN as o,eo as u,aX as i,aU as c,aW as a,dv as f,ep as h,nb as l,mQ as M,aT as d,aJ as m,nc as p,aI as g,mU as S,nd as j,m2 as R,lJ as _,lK as b,ne as x,nf as y,na as A,ng as v}from"./p-aad64c9f.js";import"./p-79c28fb7.js";import{c as w,f as C,a as P}from"./p-a040372a.js";class E{constructor(t){this._allocator=t,this._items=[],this._itemsPtr=0,this._grow()}get(){return 0===this._itemsPtr&&t((()=>this._reset())),this._itemsPtr===this._items.length&&this._grow(),this._items[this._itemsPtr++]}_reset(){const t=Math.min(3*Math.max(8,this._itemsPtr),this._itemsPtr+3*O);this._items.length=Math.min(t,this._items.length),this._itemsPtr=0}_grow(){for(let t=0;t<Math.max(8,Math.min(this._items.length,O));t++)this._items.push(this._allocator())}}const O=1024;function T(t){return t?q(r(t.origin),r(t.direction)):q(n(),n())}function q(t,n){return{origin:t,direction:n}}function J(t,n){const r=I.get();return r.origin=t,r.direction=n,r}function N(t,n=T()){return k(t.origin,t.direction,n)}function U(t,n,r=T()){return e(r.origin,t),s(r.direction,n,t),r}function k(t,n,r=T()){return e(r.origin,t),e(r.direction,n),r}function D(t,n){const r=c(w.get(),a(w.get(),t.direction),s(w.get(),n,t.origin));return i(r,r)}function F(t,n,r){const e=i(t.direction,s(r,n,t.origin));return o(r,t.origin,u(r,t.direction,e)),r}const I=new E((()=>T()));function K(t,n){const r=h(t),e=l(t[2]/r),s=Math.atan2(t[1]/r,t[0]/r);return f(n,r,e,s),n}const L=Q();function Q(){return M()}const V=d,W=d;function X(t,n){return m(n,t)}function $(t,n){return p(t[0],t[1],t[2],n)}function z(t){return t}function B(t){t[0]=t[1]=t[2]=t[3]=0}function G(t,n){return t[0]=t[1]=t[2]=0,t[3]=n,t}function H(t){return t[3]}function Y(t){return t}function Z(t,n,r,e){return p(t,n,r,e)}function tt(t,n,r){return t!==r&&(r[0]=t[0],r[1]=t[1],r[2]=t[2]),r[3]=t[3]+n,r}function nt(t,n,r){return t!==r&&X(t,r),r}function rt(t,n){return n}function et(t,n,r){if(null==n)return!1;if(!ut(t,n,ot))return!1;let{t0:e,t1:s}=ot;if((e<0||s<e&&s>0)&&(e=s),e<0)return!1;if(r){const{origin:t,direction:s}=n;r[0]=t[0]+s[0]*e,r[1]=t[1]+s[1]*e,r[2]=t[2]+s[2]*e}return!0}function st(t,r,e){const s=U(r,e);if(!ut(t,s,ot))return[];const{origin:o,direction:u}=s,{t0:i,t1:c}=ot,a=r=>{const e=n();return S(e,o,u,r),Mt(t,e,e)};return Math.abs(i-c)<g()?[a(i)]:[a(i),a(c)]}const ot={t0:0,t1:0};function ut(t,n,r){const{origin:e,direction:s}=n,o=it;o[0]=e[0]-t[0],o[1]=e[1]-t[1],o[2]=e[2]-t[2];const u=s[0]*s[0]+s[1]*s[1]+s[2]*s[2];if(0===u)return!1;const i=2*(s[0]*o[0]+s[1]*o[1]+s[2]*o[2]),c=i*i-4*u*(o[0]*o[0]+o[1]*o[1]+o[2]*o[2]-t[3]*t[3]);if(c<0)return!1;const a=Math.sqrt(c);return r.t0=(-i-a)/(2*u),r.t1=(-i+a)/(2*u),!0}const it=n();function ct(t,n){return et(t,n,null)}function at(t,n,r){if(et(t,n,r))return r;const e=ft(t,n,w.get());return o(r,n.origin,u(w.get(),n.direction,_(n.origin,e)/h(n.direction))),r}function ft(t,n,r){const e=w.get(),s=C.get();c(e,n.origin,n.direction);const o=H(t);c(r,e,n.origin),u(r,r,1/h(r)*o);const i=mt(t,n.origin),a=P(n.origin,r);return j(s,a+i,e),R(r,r,s),r}function ht(t,n,r,e){const s=H(t),o=s*s,u=n+.5*Math.PI,i=r*r+o-2*Math.cos(u)*r*s,c=Math.sqrt(i),a=i-o;if(a<=0)return.5;const f=Math.sqrt(a),h=Math.acos(f/c)-Math.asin(s/(c/Math.sin(u)));return Math.min(1,(h+.5*e)/e)}function lt(t,n,r){return et(t,n,r)?r:(F(n,Y(t),r),Mt(t,r,r))}function Mt(t,n,r){const e=s(w.get(),n,Y(t)),i=u(w.get(),e,t[3]/h(e));return o(r,i,Y(t))}function dt(t,n){const r=s(w.get(),n,Y(t)),e=A(r),o=t[3]*t[3];return Math.sqrt(Math.abs(e-o))}function mt(t,n){const r=s(w.get(),n,Y(t)),e=h(r),o=H(t),u=o+Math.abs(o-e);return b(o/u)}const pt=n();function gt(t,n,r,e){const o=s(pt,n,Y(t));switch(r){case x.X:{const t=K(o,pt)[2];return f(e,-Math.sin(t),Math.cos(t),0)}case x.Y:{const t=K(o,pt),n=t[1],r=t[2],s=Math.sin(n);return f(e,-s*Math.cos(r),-s*Math.sin(r),Math.cos(n))}case x.Z:return a(e,o);default:return}}function St(t,n){const r=s(bt,n,Y(t));return h(r)-t[3]}function jt(t,n,r,e){const s=St(t,n),i=gt(t,n,x.Z,bt),c=u(bt,i,r-s);return o(e,n,c)}function Rt(t,n){const r=v(Y(t),n),e=H(t);return r<=e*e}function _t(t,n,r=M()){const e=_(Y(t),Y(n)),s=t[3],o=n[3];return e+o<s?(m(r,t),r):e+s<o?(m(r,n),r):(y(r,Y(t),Y(n),(e+o-s)/(2*e)),r[3]=(e+s+o)/2,r)}const bt=n(),xt=Q(),yt=Object.freeze(Object.defineProperty({__proto__:null,NullSphere:L,altitudeAt:St,angleToSilhouette:mt,axisAt:gt,cameraFrustumCoverage:ht,clear:B,closestPoint:lt,closestPointOnSilhouette:ft,containsPoint:Rt,copy:X,create:Q,distanceToSilhouette:dt,elevate:tt,equals:W,exactEquals:V,fromCenterAndRadius:$,fromRadius:G,fromValues:Z,getCenter:Y,getExtent:rt,getRadius:H,intersectLine:st,intersectRay:et,intersectRayClosestSilhouette:at,intersectsRay:ct,projectPoint:Mt,setAltitudeAt:jt,setExtent:nt,tmpSphere:xt,union:_t,wrap:z},Symbol.toStringTag,{value:"Module"}));export{Mt as $,Q as E,ct as H,st as I,H as N,$ as O,z as T,Y as U,Z as V,V as _,D as a,T as b,yt as f,Rt as i,J as k,E as s,N as v,X as w};
//# sourceMappingURL=p-175d4a9b.js.map