import{o as t}from"./p-44a36259.js";import{aQ as o}from"./p-3013819f.js";import{t as n}from"./p-a9376829.js";import{$ as r}from"./p-b362a32c.js";function f(t){switch(t.type){case"CIMPointSymbol":{const o=t.symbolLayers;if(!o||1!==o.length)return null;const n=o[0];return"CIMVectorMarker"!==n.type?null:f(n)}case"CIMVectorMarker":{const o=t.markerGraphics;if(!o||1!==o.length)return null;const n=o[0];if(!n)return null;const r=n.geometry;if(!r)return null;const f=n.symbol;return!f||"CIMPolygonSymbol"!==f.type&&"CIMLineSymbol"!==f.type||f.symbolLayers?.some((t=>!!t.effects))?null:{type:"sdf",geom:r,asFill:"CIMPolygonSymbol"===f.type}}}}function e(t){return t?t.rings?t.rings:t.paths?t.paths:void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax?[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]:null:null}function l(t){let o=1/0,r=-1/0,f=1/0,e=-1/0;for(const n of t)for(const t of n)t[0]<o&&(o=t[0]),t[0]>r&&(r=t[0]),t[1]<f&&(f=t[1]),t[1]>e&&(e=t[1]);return new n(o,f,r-o,e-f)}function c(t){let o=1/0,n=-1/0,r=1/0,f=-1/0;for(const e of t)for(const t of e)t[0]<o&&(o=t[0]),t[0]>n&&(n=t[0]),t[1]<r&&(r=t[1]),t[1]>f&&(f=t[1]);return[o,r,n,f]}function s(t){return t?t.rings?c(t.rings):t.paths?c(t.paths):o(t)?[t.xmin,t.ymin,t.xmax,t.ymax]:null:null}function u(t,o,n,f,e){const[l,c,s,u]=t;if(s<l||u<c)return[0,0,0,1];const i=s-l,a=u-c,M=128,h=r,m=Math.floor(.5*(.5*M-h)),p=(M-2*(m+h))/Math.max(i,a),y=Math.round(i*p)+2*m,C=Math.round(a*p)+2*m;let I=1;if(o){I=C/p/(o.ymax-o.ymin)}let b=0,d=0,j=1;f&&(e?o&&n&&o.ymax-o.ymin>0&&(j=(o.xmax-o.xmin)/(o.ymax-o.ymin),b=f.x/(n*j),d=f.y/n):(b=f.x,d=f.y)),o&&(b=.5*(o.xmax+o.xmin)+b*(o.xmax-o.xmin),d=.5*(o.ymax+o.ymin)+d*(o.ymax-o.ymin)),b-=l,d-=c,b*=p,d*=p,b+=m,d+=m;let v=b/y-.5,w=d/C-.5;return e&&n&&(v*=n*j,w*=n),[I,v,w,j]}function i(t){const o=e(t.geom),n=l(o),f=128,c=r,s=Math.floor(.5*(.5*f-c)),u=(f-2*(s+c))/Math.max(n.width,n.height),i=Math.round(n.width*u)+2*s,m=Math.round(n.height*u)+2*s,p=[];for(const r of o)if(r&&r.length>1){const o=[];for(const f of r){let[r,e]=f;r-=n.x,e-=n.y,r*=u,e*=u,r+=s-.5,e+=s-.5,t.asFill?o.push([r,e]):o.push([Math.round(r),Math.round(e)])}if(t.asFill){const t=o.length-1;o[0][0]===o[t][0]&&o[0][1]===o[t][1]||o.push(o[0])}p.push(o)}const y=a(p,i,m,s);return t.asFill&&M(p,i,m,s,y),[h(y,s),i,m]}function a(t,o,n,r){const f=o*n,e=new Array(f),l=r*r+1;for(let t=0;t<f;++t)e[t]=l;for(const f of t){const t=f.length;for(let l=1;l<t;++l){const t=f[l-1],c=f[l];let s,u,i,a;t[0]<c[0]?(s=t[0],u=c[0]):(s=c[0],u=t[0]),t[1]<c[1]?(i=t[1],a=c[1]):(i=c[1],a=t[1]);let M=Math.floor(s)-r,h=Math.floor(u)+r,m=Math.floor(i)-r,p=Math.floor(a)+r;M<0&&(M=0),h>o&&(h=o),m<0&&(m=0),p>n&&(p=n);const y=c[0]-t[0],C=c[1]-t[1],I=y*y+C*C;for(let r=M;r<h;r++)for(let f=m;f<p;f++){let l,s,u=(r-t[0])*y+(f-t[1])*C;u<0?(l=t[0],s=t[1]):u>I?(l=c[0],s=c[1]):(u/=I,l=t[0]+u*y,s=t[1]+u*C);const i=(r-l)*(r-l)+(f-s)*(f-s),a=(n-f-1)*o+r;i<e[a]&&(e[a]=i)}}}for(let t=0;t<f;++t)e[t]=Math.sqrt(e[t]);return e}function M(t,o,n,r,f){for(const e of t){const t=e.length;for(let l=1;l<t;++l){const t=e[l-1],c=e[l];let s,u,i,a;t[0]<c[0]?(s=t[0],u=c[0]):(s=c[0],u=t[0]),t[1]<c[1]?(i=t[1],a=c[1]):(i=c[1],a=t[1]);let M=Math.floor(s),h=Math.floor(u)+1,m=Math.floor(i),p=Math.floor(a)+1;M<r&&(M=r),h>o-r&&(h=o-r),m<r&&(m=r),p>n-r&&(p=n-r);for(let e=m;e<p;++e){if(t[1]>e==c[1]>e)continue;const l=(n-e-1)*o;for(let o=M;o<h;++o)o<(c[0]-t[0])*(e-t[1])/(c[1]-t[1])+t[0]&&(f[l+o]=-f[l+o]);for(let t=r;t<M;++t)f[l+t]=-f[l+t]}}}}function h(o,n){const r=2*n,f=o.length,e=new Uint8Array(4*f);for(let n=0;n<f;++n){const f=.5-o[n]/r;t(f,e,4*n)}return e}export{i as a,f as e,s as f,u as m};
//# sourceMappingURL=p-5f4832a0.js.map