import{E as t,e0 as n}from"./p-aad64c9f.js";function e(t,n){return n?"xoffset"in n&&n.xoffset?Math.max(t,Math.abs(n.xoffset)):"yoffset"in n&&n.yoffset?Math.max(t,Math.abs(n.yoffset||0)):t:t}function r(t){let n=0,e=0;for(let r=0;r<t.length;r++){const u=t[r].size;"number"==typeof u&&(n+=u,e++)}return n/e}function u(t,n){return"number"==typeof t?t:t?.stops?.length?r(t.stops):n}function i(t,n){if(!n)return t;const e=n.filter((t=>"size"===t.type)).map((n=>{const{maxSize:e,minSize:r}=n;return(u(e,t)+u(r,t))/2}));let r=0;const i=e.length;if(0===i)return t;for(let t=0;t<i;t++)r+=e[t];const o=Math.floor(r/i);return Math.max(o,t)}function o(t){const n=t?.renderer,r=t?.pointerType,u="touch"===r?9:6;if(!n)return u;const o="visualVariables"in n?i(u,n.visualVariables):u;if("simple"===n.type)return e(o,n.symbol);if("unique-value"===n.type){let t=o;return n.uniqueValueInfos?.forEach((n=>{t=e(t,n.symbol)})),t}if("class-breaks"===n.type){let t=o;return n.classBreakInfos.forEach((n=>{t=e(t,n.symbol)})),t}return o}function f(e,r,u,i=new t){let o=0;if("2d"===u.type)o=r*(u.resolution??0);else if("3d"===u.type){const t=u.overlayPixelSizeInMapUnits(e),i=u.basemapSpatialReference;o=null==i||i.equals(u.spatialReference)?r*t:n(i)/n(u.spatialReference)}const f=e.x-o,s=e.y-o,a=e.x+o,c=e.y+o,{spatialReference:l}=u;return i.xmin=Math.min(f,a),i.ymin=Math.min(s,c),i.xmax=Math.max(f,a),i.ymax=Math.max(s,c),i.spatialReference=l,i}function s(t,n,e){const r=e.toMap(t);if(null==r)return!1;return f(r,o(),e,a).intersects(n)}const a=new t;export{s as i,o,f as r};
//# sourceMappingURL=p-25b1687c.js.map