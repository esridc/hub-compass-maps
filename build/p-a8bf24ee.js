import{kW as e,kX as n,iP as s,ra as r,r as t,p as a,q as o,s as i}from"./p-aad64c9f.js";import"./p-2af77f97.js";let l=class extends(e(n(s))){constructor(e){super(e),this.resourceInfo=null,this.type="unknown"}initialize(){this.addResolvingPromise(new Promise(((e,n)=>{r((()=>{const e=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type);let s="Unknown layer type";e&&(s+=" "+e),n(new i("layer:unknown-layer-type",s,{layerType:e}))}))})))}read(e,n){super.read({resourceInfo:e},n)}write(e,n){return null}};t([a({readOnly:!0})],l.prototype,"resourceInfo",void 0),t([a({type:["show","hide"]})],l.prototype,"listMode",void 0),t([a({json:{read:!1},readOnly:!0,value:"unknown"})],l.prototype,"type",void 0),l=t([o("esri.layers.UnknownLayer")],l);const p=l;export default p;
//# sourceMappingURL=p-a8bf24ee.js.map