import{r as t,p as e,E as i,T as s,b7 as o,q as n,_ as r,gZ as a}from"./p-aad64c9f.js";import"./p-2af77f97.js";var c;let u=c=class extends r{static from(t){return a(c,t)}constructor(t){super(t),this.returnAttachmentAssociations=!1,this.returnConnectivityAssociations=!1,this.returnContainmentAssociations=!1,this.extent=null,this.maxGeometryCount=null,this.outSpatialReference=null,this.gdbVersion=null,this.moment=null}writeOutSR(t,e,i){if(null!=t){const{wkid:s,latestWkid:o,wkt:n,wkt2:r}=t;e[i]=JSON.stringify({wkid:s??void 0,latestWkid:o??void 0,wkt:n??void 0,wkt2:r??void 0})}}};t([e({type:Boolean,json:{read:{source:"attachmentAssociations"},write:{target:"attachmentAssociations"}}})],u.prototype,"returnAttachmentAssociations",void 0),t([e({type:Boolean,json:{read:{source:"connectivityAssociations"},write:{target:"connectivityAssociations"}}})],u.prototype,"returnConnectivityAssociations",void 0),t([e({type:Boolean,json:{read:{source:"containmentAssociations"},write:{target:"containmentAssociations"}}})],u.prototype,"returnContainmentAssociations",void 0),t([e({type:i,json:{write:!0}})],u.prototype,"extent",void 0),t([e({type:Number,json:{write:!0}})],u.prototype,"maxGeometryCount",void 0),t([e({type:s,json:{write:{target:"outSR"}}})],u.prototype,"outSpatialReference",void 0),t([o("outSpatialReference")],u.prototype,"writeOutSR",null),t([e({type:String,json:{write:!0}})],u.prototype,"gdbVersion",void 0),t([e({type:Date,json:{type:Number,write:{writer:(t,e)=>{e.moment=t?.getTime()}}}})],u.prototype,"moment",void 0),u=c=t([n("esri.rest.networks.support.SynthesizeAssociationGeometriesParameters")],u);const l=u;export default l;
//# sourceMappingURL=p-40872d08.js.map