import{r as s,p as n,q as t,ac as e,kf as o,iI as r,c1 as l,dv as a,f2 as u,kg as i,e8 as d,eY as c,eZ as p,kh as m,$ as f}from"./p-aad64c9f.js";import{p as h}from"./p-2250105d.js";import{e as g}from"./p-79c28fb7.js";let z=class extends e{constructor(s){super(s)}get bounds(){const s=this.coords;return null==s?.extent?null:o(s.extent)}get coords(){const s=this.element.georeference?.coords;return r(s,this.spatialReference).geometry}get normalizedCoords(){return l.fromJSON(h(this.coords))}get normalizedBounds(){const s=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=s?o(s):null}};s([n()],z.prototype,"spatialReference",void 0),s([n()],z.prototype,"element",void 0),s([n()],z.prototype,"bounds",null),s([n()],z.prototype,"coords",null),s([n()],z.prototype,"normalizedCoords",null),s([n()],z.prototype,"normalizedBounds",null),z=s([t("esri.layers.support.MediaElementView")],z);const b=f(),j=g(),k=g(),v=g();function x(s,n,t){return a(b,n[0],n[1],1),u(b,b,i(j,t)),0===b[2]?d(s,b[0],b[1]):d(s,b[0]/b[2],b[1]/b[2])}function B(s,n,t){return C(k,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),C(v,t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]),p(s,m(k,k),v),0!==s[8]&&(s[0]/=s[8],s[1]/=s[8],s[2]/=s[8],s[3]/=s[8],s[4]/=s[8],s[5]/=s[8],s[6]/=s[8],s[7]/=s[8],s[8]/=s[8]),s}function C(s,n,t,e,o,r,l,d,f){c(s,n,e,r,t,o,l,1,1,1),a(b,d,f,1),m(j,s);const[h,g,z]=u(b,b,i(j,j));return c(j,h,0,0,0,g,0,0,0,z),p(s,j,s)}export{B as j,z as m,x as p};
//# sourceMappingURL=p-30a1162b.js.map