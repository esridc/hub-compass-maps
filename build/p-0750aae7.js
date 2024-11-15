import{r as t,Z as r,q as s,E as e,a0 as n,n0 as o}from"./p-aad64c9f.js";import{a as i,f as a,W as l,E as c,b as u,D as m,R as f,u as p,s as d}from"./p-54df2e8e.js";import{m as y,j as h,_ as x,h as w}from"./p-7f9df147.js";import{a as P,c as j,y as v,T as S}from"./p-aefb8b57.js";import{w as b,v as g,i as B}from"./p-a8618b5c.js";import"./p-2af77f97.js";import"./p-ccf595c8.js";var T;let k=T=class extends P{constructor(){super(...arguments),this.type="identity"}clone(){return new T}};t([r({IdentityXform:"identity"})],k.prototype,"type",void 0),k=T=t([s("esri.layers.support.rasterTransforms.IdentityTransform")],k);const I=k;const z={GCSShiftXform:j,IdentityXform:I,PolynomialXform:v};function D(t){const r=t?.type;if(!r)return null;const s=z[t?.type];if(s){const r=new s;return r.read(t),r}return null}class F{convertVectorFieldData(t){const r=i.fromJSON(t.pixelBlock),s=a(r,t.type);return Promise.resolve(null!=s?s.toJSON():null)}computeStatisticsHistograms(t){const r=i.fromJSON(t.pixelBlock),s=y(r);return Promise.resolve(s)}async decode(t){const r=await h(t.data,t.options);return r&&r.toJSON()}symbolize(t){t.pixelBlock=i.fromJSON(t.pixelBlock),t.extent=t.extent?e.fromJSON(t.extent):null;const r=this.symbolizer.symbolize(t);return Promise.resolve(null!=r?r.toJSON():null)}async updateSymbolizer(t){this.symbolizer=x.fromJSON(t.symbolizerJSON),t.histograms&&"rasterStretch"===this.symbolizer?.rendererJSON.type&&(this.symbolizer.rendererJSON.histograms=t.histograms)}async updateRasterFunction(t){this.rasterFunction=S(t.rasterFunctionJSON)}async process(t){const r=this.rasterFunction.process({extent:e.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map((t=>null!=t?i.fromJSON(t):null)),primaryPixelSizes:t.primaryPixelSizes?.map((t=>null!=t?n.fromJSON(t):null)),primaryRasterIds:t.primaryRasterIds});return null!=r?r.toJSON():null}stretch(t){const r=this.symbolizer.simpleStretch(i.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(r?.toJSON())}estimateStatisticsHistograms(t){const r=w(i.fromJSON(t.srcPixelBlock));return Promise.resolve(r)}split(t){const r=l(i.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel??0,!1===t.useBilinear);return r&&r.forEach(((t,s)=>{r.set(s,t?.toJSON())})),Promise.resolve(r)}clipTile(t){const r=i.fromJSON(t.pixelBlock),s=c({...t,pixelBlock:r});return Promise.resolve(s?.toJSON())}async mosaicAndTransform(t){const r=t.srcPixelBlocks.map((t=>t?new i(t):null)),s=u(r,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let e,n=s;return t.coefs&&(n=m(s,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(e=f(t.destDimension,t.gcsGrid),n=p(n,t.isUV?"vector-uv":"vector-magdir",e)),{pixelBlock:n?.toJSON(),localNorthDirections:e}}async createFlowMesh(t,r){const s={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:e,indexData:n}=await d(t.meshType,t.simulationSettings,s,r.signal);return{result:{vertexBuffer:e.buffer,indexBuffer:n.buffer},transferList:[e.buffer,n.buffer]}}async getProjectionOffsetGrid(t){const r=e.fromJSON(t.projectedExtent),s=e.fromJSON(t.srcBufferExtent);let n=null;t.datumTransformationSteps&&(n=new o({steps:t.datumTransformationSteps})),(t.includeGCSGrid||b(r.spatialReference,s.spatialReference,n))&&await g();const i=t.rasterTransform?D(t.rasterTransform):null;return B({...t,projectedExtent:r,srcBufferExtent:s,datumTransformation:n,rasterTransform:i})}}export default F;
//# sourceMappingURL=p-0750aae7.js.map