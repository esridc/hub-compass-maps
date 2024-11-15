import{aC as t,gW as e,gX as n,s as a,e3 as i,gY as o,aE as r,T as s,c2 as c,c1 as h,gZ as l}from"./p-aad64c9f.js";function f(t){if(!t)return null;const n=t.wkid;if(n)return e[n];const a=t.wkt2??t.wkt;return a?u(a):null}function u(t){const e=n.exec(t);if(!e||2!==e.length)return null;const a=e[1].split(",");if(!a||a.length<3)return null;const i=parseFloat(a[1]),o=parseFloat(a[2]);if(isNaN(i)||isNaN(o))return null;return{a:i,f:0===o?0:1/o}}function M(t){const e=f(t);if(p(e))return e;const n=e.a*(1-e.f);return Object.assign(e,{b:n,eSq:1-(n/e.a)**2,radius:(2*e.a+n)/3,densificationRatio:1e4/((2*e.a+n)/3)})}function p(t){return null!=t&&"b"in t&&"eSq"in t&&"radius"in t}function d(t,e,n){const{a,eSq:i}=M(n),r=Math.sqrt(i),s=Math.sin(e[1]*o),c=a*e[0]*o;let h;if(i>0){h=a*((1-i)*(s/(1-i*(s*s))-1/(2*r)*Math.log((1-r*s)/(1+r*s))))*.5}else h=a*s;return t[0]=c,t[1]=h,t}function g(e){return t(e)&&!!f(e)}function w(t,e="square-meters"){if(t.some((t=>!g(t.spatialReference))))throw new a("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");const n=[];for(let e=0;e<t.length;e++){const a=t[e],i=a.spatialReference,{radius:o,densificationRatio:r}=M(i),s=o*r;n.push(y(a,s))}const o=[],r=[0,0],s=[0,0];for(let t=0;t<n.length;t++){const{rings:a,spatialReference:c}=n[t];let h=0;for(let t=0;t<a.length;t++){const e=a[t];d(r,e[0],c),d(s,e[e.length-1],c);let n=s[0]*r[1]-r[0]*s[1];for(let t=0;t<e.length-1;t++)d(r,e[t+1],c),d(s,e[t],c),n+=s[0]*r[1]-r[0]*s[1];h+=n}h=i(h,"square-meters",e),o.push(h/-2)}return o}function m(t,e="meters"){if(!t)throw new a("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(t.some((t=>!g(t.spatialReference))))throw new a("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const n=[];for(let a=0;a<t.length;a++){const o=t[a],{spatialReference:r}=o,s="polyline"===o.type?o.paths:o.rings;let c=0;for(let t=0;t<s.length;t++){const e=s[t];let n=0;for(let t=1;t<e.length;t++){const a=e[t-1][0],i=e[t][0],o=e[t-1][1],s=e[t][1];if(o!==s||a!==i){const t=new v;N(t,[a,o],[i,s],r),n+=t.distance}}c+=n}c=i(c,"meters",e),n.push(c)}return n}function y(t,e){if("polyline"!==t.type&&"polygon"!==t.type)throw new a("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const{spatialReference:n}=t;if(!g(n))throw new a("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");const i="polyline"===t.type?t.paths:t.rings,o=[],r=[0,0],f=new v;for(const t of i){const a=[];o.push(a),a.push([t[0][0],t[0][1]]);let i,s,c=t[0][0],h=t[0][1];for(let o=0;o<t.length-1;o++){if(i=t[o+1][0],s=t[o+1][1],c===i&&h===s)continue;const l=[c,h];N(f,[c,h],[i,s],n);const{azimuth:u,distance:M}=f,p=M/e;if(p>1){for(let t=1;t<=p-1;t++){R(r,l,u,t*e,n),a.push(r.slice())}R(r,l,u,(M+Math.floor(p-1)*e)/2,n),a.push(r.slice())}R(r,l,u,M,n),a.push(r.slice()),c=r[0],h=r[1]}}const u=l(s,n);return"polyline"===t.type?new c({paths:o,spatialReference:u}):new h({rings:o,spatialReference:u})}class v{constructor(t=0,e=void 0,n=void 0){this.distance=t,this.azimuth=e,this.reverseAzimuth=n}}function R(t,e,n,a,i){const r=e[0],s=e[1],c=r*o,h=s*o,l=(n??0)*o,{a:f,b:u,f:p}=M(i),d=Math.sin(l),g=Math.cos(l),w=(1-p)*Math.tan(h),m=1/Math.sqrt(1+w*w),y=w*m,v=Math.atan2(w,g),R=m*d,N=R*R,b=1-N,q=b*(f*f-u*u)/(u*u),S=1+q/16384*(4096+q*(q*(320-175*q)-768)),j=q/1024*(256+q*(q*(74-47*q)-128));let F,x,z,C,E=a/(u*S),O=2*Math.PI;for(;Math.abs(E-O)>1e-12;)z=Math.cos(2*v+E),F=Math.sin(E),x=Math.cos(E),C=j*F*(z+j/4*(x*(2*z*z-1)-j/6*z*(4*F*F-3)*(4*z*z-3))),O=E,E=a/(u*S)+C;const T=y*F-m*x*g,W=Math.atan2(y*x+m*F*g,(1-p)*Math.sqrt(N+T*T)),X=Math.atan2(F*d,m*x-y*F*g),Y=p/16*b*(4+p*(4-3*b)),Z=W/o,k=(c+(X-(1-Y)*p*R*(E+Y*F*(z+Y*x*(2*z*z-1)))))/o;return t[0]=k,t[1]=Z,t}function N(t,e,n,a){const i=e[0]*o,r=e[1]*o,s=n[0]*o,c=n[1]*o,{a:h,b:l,f,radius:u}=M(a),p=s-i,d=Math.atan((1-f)*Math.tan(r)),g=Math.atan((1-f)*Math.tan(c)),w=Math.sin(d),m=Math.cos(d),y=Math.sin(g),v=Math.cos(g);let R,N,b,q,S,j,F,x,z,C,E=1e3,O=p;do{if(F=Math.sin(O),x=Math.cos(O),b=Math.sqrt(v*F*(v*F)+(m*y-w*v*x)*(m*y-w*v*x)),0===b)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;S=w*y+m*v*x,j=Math.atan2(b,S),z=m*v*F/b,N=1-z*z,q=S-2*w*y/N,isNaN(q)&&(q=0),C=f/16*N*(4+f*(4-3*N)),R=O,O=p+(1-C)*f*z*(j+C*b*(q+C*S*(2*q*q-1)))}while(Math.abs(O-R)>1e-12&&--E>0);if(0===E){const e=u,n=Math.acos(Math.sin(r)*Math.sin(c)+Math.cos(r)*Math.cos(c)*Math.cos(s-i))*e,a=s-i,h=Math.sin(a)*Math.cos(c),l=Math.cos(r)*Math.sin(c)-Math.sin(r)*Math.cos(c)*Math.cos(a),f=Math.atan2(h,l);return t.azimuth=f/o,t.distance=n,t.reverseAzimuth=void 0,t}const T=N*(h*h-l*l)/(l*l),W=T/1024*(256+T*(T*(74-47*T)-128)),X=l*(1+T/16384*(4096+T*(T*(320-175*T)-768)))*(j-W*b*(q+W/4*(S*(2*q*q-1)-W/6*q*(4*b*b-3)*(4*q*q-3)))),Y=Math.atan2(v*Math.sin(O),m*y-w*v*Math.cos(O)),Z=Math.atan2(m*Math.sin(O),m*y*Math.cos(O)-w*v);return t.azimuth=Y/o,t.distance=X,t.reverseAzimuth=Z/o,t}function b(t){return g(t)?t:r(t)?s.WGS84:null}export{b as N,m as R,v as b,R as j,N as q,w as v,g as y};
//# sourceMappingURL=p-f7f8e29b.js.map