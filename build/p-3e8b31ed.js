import{r as e,p as t,q as s,Z as i,_ as o}from"./p-aad64c9f.js";let r=class extends o{constructor(){super(...arguments),this.nodesPerPage=null,this.rootIndex=0,this.lodSelectionMetricType=null}};e([t({type:Number})],r.prototype,"nodesPerPage",void 0),e([t({type:Number})],r.prototype,"rootIndex",void 0),e([t({type:String})],r.prototype,"lodSelectionMetricType",void 0),r=e([s("esri.layers.support.I3SLayerDefinitions.I3SNodePageDefinition")],r);let n=class extends o{constructor(){super(...arguments),this.factor=1}};e([t({type:Number,json:{read:{source:"textureSetDefinitionId"}}})],n.prototype,"id",void 0),e([t({type:Number})],n.prototype,"factor",void 0),n=e([s("esri.layers.support.I3SLayerDefinitions.I3SMaterialTexture")],n);let a=class extends o{constructor(){super(...arguments),this.baseColorFactor=[1,1,1,1],this.baseColorTexture=null,this.metallicRoughnessTexture=null,this.metallicFactor=1,this.roughnessFactor=1}};e([t({type:[Number]})],a.prototype,"baseColorFactor",void 0),e([t({type:n})],a.prototype,"baseColorTexture",void 0),e([t({type:n})],a.prototype,"metallicRoughnessTexture",void 0),e([t({type:Number})],a.prototype,"metallicFactor",void 0),e([t({type:Number})],a.prototype,"roughnessFactor",void 0),a=e([s("esri.layers.support.I3SLayerDefinitions.I3SMaterialPBRMetallicRoughness")],a);let l=class extends o{constructor(){super(...arguments),this.alphaMode="opaque",this.alphaCutoff=.25,this.doubleSided=!1,this.cullFace="none",this.normalTexture=null,this.occlusionTexture=null,this.emissiveTexture=null,this.emissiveFactor=null,this.pbrMetallicRoughness=null}};e([i({opaque:"opaque",mask:"mask",blend:"blend"})],l.prototype,"alphaMode",void 0),e([t({type:Number})],l.prototype,"alphaCutoff",void 0),e([t({type:Boolean})],l.prototype,"doubleSided",void 0),e([i({none:"none",back:"back",front:"front"})],l.prototype,"cullFace",void 0),e([t({type:n})],l.prototype,"normalTexture",void 0),e([t({type:n})],l.prototype,"occlusionTexture",void 0),e([t({type:n})],l.prototype,"emissiveTexture",void 0),e([t({type:[Number]})],l.prototype,"emissiveFactor",void 0),e([t({type:a})],l.prototype,"pbrMetallicRoughness",void 0),l=e([s("esri.layers.support.I3SLayerDefinitions.I3SMaterialDefinition")],l);let p=class extends o{};e([t({type:String,json:{read:{source:["name","index"],reader:(e,t)=>null!=e?e:`${t.index}`}}})],p.prototype,"name",void 0),e([i({jpg:"jpg",png:"png",dds:"dds","ktx-etc2":"ktx-etc2",ktx2:"ktx2",basis:"basis"})],p.prototype,"format",void 0),p=e([s("esri.layers.support.I3SLayerDefinitions.I3STextureFormat")],p);let d=class extends o{constructor(){super(...arguments),this.atlas=!1}};e([t({type:[p]})],d.prototype,"formats",void 0),e([t({type:Boolean})],d.prototype,"atlas",void 0),d=e([s("esri.layers.support.I3SLayerDefinitions.I3STextureSetDefinition")],d);let u=class extends o{};e([i({Float32:"Float32",UInt64:"UInt64",UInt32:"UInt32",UInt16:"UInt16",UInt8:"UInt8"})],u.prototype,"type",void 0),e([t({type:Number})],u.prototype,"component",void 0),u=e([s("esri.layers.support.I3SLayerDefinitions.I3SGeometryAttribute")],u);let y=class extends o{};e([i({draco:"draco"})],y.prototype,"encoding",void 0),e([t({type:[String]})],y.prototype,"attributes",void 0),y=e([s("esri.layers.support.I3SLayerDefinitions.I3SGeometryCompressedAttributes")],y);let c=class extends o{constructor(){super(...arguments),this.offset=0}};e([t({type:Number})],c.prototype,"offset",void 0),e([t({type:u})],c.prototype,"position",void 0),e([t({type:u})],c.prototype,"normal",void 0),e([t({type:u})],c.prototype,"uv0",void 0),e([t({type:u})],c.prototype,"color",void 0),e([t({type:u})],c.prototype,"uvRegion",void 0),e([t({type:u})],c.prototype,"featureId",void 0),e([t({type:u})],c.prototype,"faceRange",void 0),e([t({type:y})],c.prototype,"compressedAttributes",void 0),c=e([s("esri.layers.support.I3SLayerDefinitions.I3SGeometryBuffer")],c);let v=class extends o{};e([i({triangle:"triangle"})],v.prototype,"topology",void 0),e([t()],v.prototype,"geometryBuffers",void 0),v=e([s("esri.layers.support.I3SLayerDefinitions.I3SGeometryDefinition")],v);export{l as a,v as m,r as p,d as y};
//# sourceMappingURL=p-3e8b31ed.js.map