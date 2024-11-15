import{mG as t,F as r,T as e,lT as n,mH as o}from"./p-aad64c9f.js";import{O as s}from"./p-dfaba342.js";import{e as a}from"./p-93091a88.js";import{t as l,n as f}from"./p-717596a8.js";import{a as i,b as c,d as u}from"./p-1bc7dddf.js";import{I as p,w as d,c as m,l as b}from"./p-37da71be.js";import{I as w}from"./p-436c45c7.js";import"./p-2af77f97.js";import"./p-79c28fb7.js";import"./p-e91c4d32.js";import"./p-88dd7081.js";import"./p-1826fadd.js";import"./p-e51694e6.js";import"./p-a040372a.js";function j(t,r,e,n){const{rendererJSON:o,isRGBRenderer:s}=t;let a=null,l=null;if(r&&s)a=r;else if(r&&"pointCloudUniqueValueRenderer"===o?.type){l=i.fromJSON(o);const t=l.colorUniqueValueInfos;a=new Uint8Array(3*n);const e=k(l.fieldTransformType);for(let o=0;o<n;o++){const n=(e?e(r[o]):r[o])+"";for(let r=0;r<t.length;r++)if(t[r].values.includes(n)){a[3*o]=t[r].color.r,a[3*o+1]=t[r].color.g,a[3*o+2]=t[r].color.b;break}}}else if(r&&"pointCloudStretchRenderer"===o?.type){l=c.fromJSON(o);const t=l.stops;a=new Uint8Array(3*n);const e=k(l.fieldTransformType);for(let o=0;o<n;o++){const n=e?e(r[o]):r[o],s=t.length-1;if(n<t[0].value)a[3*o]=t[0].color.r,a[3*o+1]=t[0].color.g,a[3*o+2]=t[0].color.b;else if(n>=t[s].value)a[3*o]=t[s].color.r,a[3*o+1]=t[s].color.g,a[3*o+2]=t[s].color.b;else for(let r=1;r<t.length;r++)if(n<t[r].value){const e=(n-t[r-1].value)/(t[r].value-t[r-1].value);a[3*o]=t[r].color.r*e+t[r-1].color.r*(1-e),a[3*o+1]=t[r].color.g*e+t[r-1].color.g*(1-e),a[3*o+2]=t[r].color.b*e+t[r-1].color.b*(1-e);break}}}else if(r&&"pointCloudClassBreaksRenderer"===o?.type){l=u.fromJSON(o);const t=l.colorClassBreakInfos;a=new Uint8Array(3*n);const e=k(l.fieldTransformType);for(let o=0;o<n;o++){const n=e?e(r[o]):r[o];for(let r=0;r<t.length;r++)if(n>=t[r].minValue&&n<=t[r].maxValue){a[3*o]=t[r].color.r,a[3*o+1]=t[r].color.g,a[3*o+2]=t[r].color.b;break}}}else a=new Uint8Array(3*n).fill(255);if(e&&l?.colorModulation){const t=l.colorModulation.minValue,r=l.colorModulation.maxValue,o=.3;for(let s=0;s<n;s++){const n=e[s],l=n>=r?1:n<=t?o:o+(1-o)*(n-t)/(r-t);a[3*s]=l*a[3*s],a[3*s+1]=l*a[3*s+1],a[3*s+2]=l*a[3*s+2]}}return a}function h(t,r){if(null==t.encoding||""===t.encoding){const e=d(r,t);if(null==e.vertexAttributes.position)return;const n=b(r,e.vertexAttributes.position),o=e.header.fields,s=[o.offsetX,o.offsetY,o.offsetZ],a=[o.scaleX,o.scaleY,o.scaleZ],l=n.length/3,f=new Float64Array(3*l);for(let t=0;t<l;t++)f[3*t]=n[3*t]*a[0]+s[0],f[3*t+1]=n[3*t+1]*a[1]+s[1],f[3*t+2]=n[3*t+2]*a[2]+s[2];return f}if("lepcc-xyz"===t.encoding)return m(r).result}function y(t,r,e){return t?.attributeInfo.useElevation?r?A(r,e):null:t?.attributeInfo.storageInfo?p(t.attributeInfo.storageInfo,t.buffer,e):null}function A(t,r){const e=new Float64Array(r);for(let n=0;n<r;n++)e[n]=t[3*n+2];return e}function M(t,r,e,n,o){const s=t.length/3;let a=0;for(let l=0;l<s;l++){let s=!0;for(let t=0;t<n.length&&s;t++){const{filterJSON:r}=n[t],e=o[t].values[l];switch(r.type){case"pointCloudValueFilter":{const t="exclude"===r.mode;r.values.includes(e)===t&&(s=!1);break}case"pointCloudBitfieldFilter":{const t=C(r.requiredSetBits),n=C(r.requiredClearBits);((e&t)!==t||e&n)&&(s=!1);break}case"pointCloudReturnFilter":{const t=15&e,n=e>>>4&15,o=n>1,a=1===t,l=t===n;let f=!1;for(const t of r.includedReturns)if("last"===t&&l||"firstOfMany"===t&&a&&o||"lastOfMany"===t&&l&&o||"single"===t&&!o){f=!0;break}f||(s=!1);break}}}s&&(e[a]=l,t[3*a]=t[3*l],t[3*a+1]=t[3*l+1],t[3*a+2]=t[3*l+2],r[3*a]=r[3*l],r[3*a+1]=r[3*l+1],r[3*a+2]=r[3*l+2],a++)}return a}function k(t){switch(t){default:case null:case"none":return t=>t;case"low-four-bit":return t=>15&t;case"high-four-bit":return t=>(240&t)>>4;case"absolute-value":return t=>Math.abs(t);case"modulo-ten":return t=>t%10}}function C(t){let r=0;for(const e of t||[])r|=1<<e;return r}class F{transform(r){const e=this._transform(r),n=[e.points.buffer,e.rgb.buffer];null!=e.pointIdFilterMap&&n.push(e.pointIdFilterMap.buffer);for(const r of e.attributes)"buffer"in r.values&&t(r.values.buffer)&&r.values.buffer!==e.rgb.buffer&&n.push(r.values.buffer);return Promise.resolve({result:e,transferList:n})}_transform(t){const n=h(t.schema,t.geometryBuffer);let o=n.length/3,s=null;const a=new Array,l=y(t.primaryAttributeData,n,o);null!=t.primaryAttributeData&&l&&a.push({attributeInfo:t.primaryAttributeData.attributeInfo,values:l});const f=y(t.modulationAttributeData,n,o);null!=t.modulationAttributeData&&f&&a.push({attributeInfo:t.modulationAttributeData.attributeInfo,values:f});let i=j(t.rendererInfo,l,f,o);if(t.filterInfo&&t.filterInfo.length>0&&null!=t.filterAttributesData){const e=t.filterAttributesData.filter(r).map((t=>{const r=y(t,n,o),e={attributeInfo:t.attributeInfo,values:r};return a.push(e),e}));s=new Uint32Array(o),o=M(n,i,s,t.filterInfo,e)}for(const r of t.userAttributesData){const t=y(r,n,o);a.push({attributeInfo:r.attributeInfo,values:t})}3*o<i.length&&(i=new Uint8Array(i.buffer.slice(0,3*o))),U(n,o,t.elevationOffset);const c=I(n,o,w.fromData(t.obbData),e.fromJSON(t.inSR),e.fromJSON(t.outSR));return{obbData:t.obbData,points:c,rgb:i,attributes:a,pointIdFilterMap:s}}}function I(t,r,e,a,i){if(!n(t,a,0,t,i,0,r))throw new Error("Can't reproject");const c=l(e.center),u=f(),p=f(),d=l(e.halfSize);s(R,e.quaternion);const m=new Float32Array(3*r);for(let e=0;e<r;e++){let r=3*e;u[0]=t[r]-c[0],u[1]=t[r+1]-c[1],u[2]=t[r+2]-c[2],o(p,u,R),d[0]=Math.max(d[0],Math.abs(p[0])),d[1]=Math.max(d[1],Math.abs(p[1])),d[2]=Math.max(d[2],Math.abs(p[2])),m[r++]=u[0],m[r++]=u[1],m[r]=u[2]}return e.halfSize=d,m}function U(t,r,e){if(0!==e)for(let n=0;n<r;n++)t[3*n+2]+=e}const R=a();function v(){return new F}export default v;
//# sourceMappingURL=p-85de89af.js.map