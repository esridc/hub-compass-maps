import{r as t,p as r,bZ as n,q as o,_ as s,n as a,a7 as i}from"./p-aad64c9f.js";function e(t,r,n,o){const{loggerTag:s,stride:a}=r;return t.length%a!=0?(o.error(s,`Invalid array length, expected a multiple of ${a}`),new n([])):t}function l(t,r,n,o,s){if(!t)return t;if(t instanceof r)return e(t,o,r,s);for(const a of n)if(t instanceof a)return e(new r(t),o,r,s);if(Array.isArray(t))return e(new r(t),o,r,s);{const o=n.map((t=>`'${t.name}'`));return s.error(`Failed to set property, expected one of ${o}, but got ${t.constructor.name}`),new r([])}}function u(t,r,n){r[n]=c(t)}function c(t){const r=new Array(t.length);for(let n=0;n<t.length;n++)r[n]=t[n];return r}var g;let h=g=class extends s{constructor(t){super(t),this.color=null,this.position=new Float64Array(0),this.uv=null,this.normal=null,this.tangent=null}castColor(t){return l(t,Uint8Array,[Uint8ClampedArray],{loggerTag:".color=",stride:4},a.getLogger(this))}castPosition(t){t&&t instanceof Float32Array&&a.getLogger(this).warn(".position=","Setting position attribute from a Float32Array may cause precision problems. Consider storing data in a Float64Array or a regular number array");return l(t,Float64Array,[Float32Array],{loggerTag:".position=",stride:3},a.getLogger(this))}castUv(t){return l(t,Float32Array,[Float64Array],{loggerTag:".uv=",stride:2},a.getLogger(this))}castNormal(t){return l(t,Float32Array,[Float64Array],{loggerTag:".normal=",stride:3},a.getLogger(this))}castTangent(t){return l(t,Float32Array,[Float64Array],{loggerTag:".tangent=",stride:4},a.getLogger(this))}clone(){const t={position:i(this.position),uv:i(this.uv),normal:i(this.normal),tangent:i(this.tangent),color:i(this.color)};return new g(t)}clonePositional(){const t={position:i(this.position),normal:i(this.normal),tangent:i(this.tangent),uv:this.uv,color:this.color};return new g(t)}get memoryUsage(){let t=0;return t+=this.position.byteLength,null!=this.uv&&(t+=this.uv.byteLength),null!=this.normal&&(t+=this.normal.byteLength),null!=this.tangent&&(t+=this.tangent.byteLength),null!=this.color&&(t+=this.color.byteLength),t}};t([r({json:{write:u}})],h.prototype,"color",void 0),t([n("color")],h.prototype,"castColor",null),t([r({nonNullable:!0,json:{write:u}})],h.prototype,"position",void 0),t([n("position")],h.prototype,"castPosition",null),t([r({json:{write:u}})],h.prototype,"uv",void 0),t([n("uv")],h.prototype,"castUv",null),t([r({json:{write:u}})],h.prototype,"normal",void 0),t([n("normal")],h.prototype,"castNormal",null),t([r({json:{write:u}})],h.prototype,"tangent",void 0),t([n("tangent")],h.prototype,"castTangent",null),h=g=t([o("esri.geometry.support.MeshVertexAttributes")],h);export{l as n,h as p,u as r};
//# sourceMappingURL=p-fefc46e8.js.map