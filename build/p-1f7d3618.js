import{jr as t,aE as r,a0 as e,jE as s,iE as n,id as i,ie as a,i9 as c}from"./p-3013819f.js";import{e as o}from"./p-10315be7.js";import{e as h}from"./p-5f148c96.js";import{e as f}from"./p-897991e6.js";class u{constructor(t){this._create=t,this._items=new Array,this._itemsPtr=0}get(){return 0===this._itemsPtr&&t((()=>this._reset())),this._itemsPtr>=this._items.length&&this._items.push(this._create()),this._items[this._itemsPtr++]}_reset(){const t=2*this._itemsPtr;this._items.length>t&&(this._items.length=t),this._itemsPtr=0}static createVec2f64(){return new u(r)}static createVec3f64(){return new u(e)}static createVec4f64(){return new u(s)}static createMat3f64(){return new u(o)}static createMat4f64(){return new u(h)}static createQuatf64(){return new u(f)}get test(){return{length:this._items.length}}}u.createVec2f64();const M=u.createVec3f64();u.createVec4f64();u.createMat3f64();const p=u.createMat4f64(),m=u.createQuatf64();function w(t=F){return[t[0],t[1],t[2],t[3]]}function I(t){return t}function N(t,r,e,s=w()){const n=e[0]-r[0],i=e[1]-r[1],a=e[2]-r[2],c=t[0]-r[0],o=t[1]-r[1],h=t[2]-r[2],f=i*h-a*o,u=a*c-n*h,M=n*o-i*c,p=f*f+u*u+M*M,m=Math.abs(p-1)>1e-5&&p>1e-12?1/Math.sqrt(p):1;return s[0]=f*m,s[1]=u*m,s[2]=M*m,s[3]=-(s[0]*t[0]+s[1]*t[1]+s[2]*t[2]),s}function j(t,r,e,s=0,o=Math.floor(e*(1/3)),h=Math.floor(e*(2/3))){if(e<3)return!1;r(g,s);let f=o,u=!1;for(;f<e-1&&!u;)r(l,f),f++,u=!n(g,l);if(!u)return!1;for(f=Math.max(f,h),u=!1;f<e&&!u;)r(A,f),f++,i(V,g,l),a(V,V),i(_,l,A),a(_,_),u=!n(g,A)&&!n(l,A)&&Math.abs(c(V,_))<E;return u?(N(g,l,A,t),!0):(0!==s||1!==o||2!==h)&&j(t,r,e,0,1,2)}const E=.99619469809,g=e(),l=e(),A=e(),V=e(),_=e();const F=[0,0,1,0];var T;!function(t){t[t.NONE=0]="NONE",t[t.CLAMP=1]="CLAMP",t[t.INFINITE_MIN=4]="INFINITE_MIN",t[t.INFINITE_MAX=8]="INFINITE_MAX"}(T||(T={}));export{w as E,I as F,j as X,M as c,p as f,m as o};
//# sourceMappingURL=p-1f7d3618.js.map