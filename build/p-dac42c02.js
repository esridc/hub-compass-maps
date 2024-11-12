import{an as t,ao as i,ap as s,am as e,X as r,s as a,dc as h,di as n,cB as o,ah as p,fn as l,U as c,dP as u,fR as d,a as m,W as f,b_ as w,av as g,fh as y,f7 as x,dK as v,cH as j,h as b}from"./p-028496e2.js";import{d as R,f as V,a as D}from"./p-9736f7d2.js";import{m as P,u as _}from"./p-a29a1b7a.js";import{$ as S}from"./p-eccdd480.js";import{h as B}from"./p-19bf412d.js";import{M as k,m as E,f as $}from"./p-4995a65a.js";import{a as T}from"./p-57a8581d.js";import{h as F,E as I}from"./p-d1d0c06b.js";import{l as q}from"./p-f3b54403.js";import{v as z}from"./p-a1b5c35f.js";import{J as N}from"./p-1fb2423d.js";import{c as U}from"./p-b0afd947.js";import{p as A}from"./p-a28115c2.js";import{i as L}from"./p-28063917.js";import"./p-3b51db5e.js";import"./p-5a65512b.js";import"./p-711ed159.js";import"./p-8567e6fe.js";import"./p-0b0f20ea.js";import"./p-89242a33.js";import"./p-5c282fdd.js";import"./p-30a1f911.js";import"./p-851e644d.js";import"./p-6b5df147.js";import"./p-3811f238.js";import"./p-8e631d44.js";import"./p-94b15954.js";import"./p-7b65c278.js";import"./p-b362a32c.js";import"./p-a925664a.js";import"./p-18b49978.js";import"./p-eaa7279e.js";import"./p-91f3f02f.js";import"./p-6f5e77a7.js";import"./p-7580bdba.js";import"./p-95e79972.js";import"./p-a62b18ce.js";import"./p-ecde740d.js";import"./p-3a28ec18.js";import"./p-854d8fad.js";import"./p-1f0b604e.js";import"./p-347800d3.js";import"./p-4f73c6ea.js";import"./p-6339641f.js";import"./p-f87a9f21.js";import"./p-262e0e67.js";import"./p-44dc1c97.js";import"./p-af8cc455.js";import"./p-325c6878.js";import"./p-10e5b6ea.js";import"./p-3b8b0ae8.js";let M=class extends e{constructor(){super(...arguments),this.attached=!1,this.container=new F,this.updateRequested=!1,this.type="imagery",this._bitmapView=new T}destroy(){this.attached&&(this.detach(),this.attached=!1),this.updateRequested=!1}get updating(){return!this.attached||this.isUpdating()}update(t){this.strategy.update(t).catch((t=>{r(t)||a.getLogger(this).error(t)}))}hitTest(t){return new h({attributes:{},geometry:t.clone(),layer:this.layer})}attach(){this.container.addChild(this._bitmapView);const t=this.layer.version>=10,i=this.layer.version>=10.1?this.layer.imageMaxHeight:2048,s=this.layer.version>=10.1?this.layer.imageMaxWidth:2048;this.strategy=new z({container:this._bitmapView,imageNormalizationSupported:t,imageMaxHeight:i,imageMaxWidth:s,fetchSource:this._fetchImage.bind(this),requestUpdate:()=>this.requestUpdate()})}detach(){this.strategy.destroy(),this._bitmapView.removeAllChildren(),this.container.removeAllChildren(),this.updateRequested=!1}redraw(){this.strategy.updateExports((async t=>{const{source:i}=t;if(!i||i instanceof ImageBitmap)return;const s=await this.layer.applyRenderer({extent:i.extent,pixelBlock:i.originalPixelBlock??i.pixelBlock});i.filter=t=>this.layer.pixelFilter?this.layer.applyFilter(t):{...s,extent:i.extent}})).catch((t=>{r(t)||a.getLogger(this).error(t)}))}requestUpdate(){this.updateRequested||(this.updateRequested=!0,this.view.requestUpdate())}isUpdating(){return this.strategy.updating||this.updateRequested}getPixelData(){if(this.updating)return null;const t=this.strategy.bitmaps;if(1===t.length&&t[0].source)return{extent:t[0].source.extent,pixelBlock:t[0].source.originalPixelBlock};if(t.length>1){const i=this.view.extent,s=t.map((t=>t.source)).filter((t=>t.extent&&t.extent.intersects(i))).map((t=>({extent:t.extent,pixelBlock:t.originalPixelBlock}))),e=k(s,i);return null!=e?{extent:e.extent,pixelBlock:e.pixelBlock}:null}return null}async _fetchImage(t,i,s,e){(e=e||{}).timeExtent=this.timeExtent,e.requestAsImageElement=!0,e.returnImageBitmap=!0;const r=await this.layer.fetchImage(t,i,s,e);if(r.imageBitmap)return r.imageBitmap;const a=await this.layer.applyRenderer(r.pixelData,{signal:e.signal}),h=new q(a.pixelBlock,a.extent?.clone(),r.pixelData.pixelBlock);return h.filter=t=>this.layer.applyFilter(t),h}};t([i()],M.prototype,"attached",void 0),t([i()],M.prototype,"container",void 0),t([i()],M.prototype,"layer",void 0),t([i()],M.prototype,"strategy",void 0),t([i()],M.prototype,"timeExtent",void 0),t([i()],M.prototype,"view",void 0),t([i()],M.prototype,"updateRequested",void 0),t([i()],M.prototype,"updating",null),t([i()],M.prototype,"type",void 0),M=t([s("esri.views.2d.layers.imagery.ImageryView2D")],M);const C=M;class H extends U{constructor(){super(...arguments),this.symbolTypes=["triangle"]}prepareRenderPasses(t){const i=t.registerRenderPass({name:"imagery (vf)",brushes:[R],target:()=>this.children,drawPhase:I.MAP});return[...super.prepareRenderPasses(t),i]}doRender(t){this.visible&&t.drawPhase===I.MAP&&this.symbolTypes.forEach((i=>{t.renderPass=i,super.doRender(t)}))}}let W=class extends e{constructor(t){super(t),this._loading=null,this.update=n(((t,i)=>this._update(t,i).catch((t=>{r(t)||a.getLogger(this).error(t)}))))}get updating(){return!!this._loading}redraw(t){if(!this.container.children.length)return;const i=this.container.children[0];i.symbolizerParameters=t,i.invalidateVAO(),this.container.symbolTypes="wind_speed"===t.style?["scalar","triangle"]:"simple_scalar"===t.style?["scalar"]:["triangle"],this.container.requestRender()}async _update(t,i,s){if(!t.stationary)return;const{extent:e,spatialReference:r}=t.state,a=new o({xmin:e.xmin,ymin:e.ymin,xmax:e.xmax,ymax:e.ymax,spatialReference:r}),[h,n]=t.state.size;this._loading=this.fetchPixels(a,h,n,s);const p=await this._loading;this._addToDisplay(p,i,t.state),this._loading=null}_addToDisplay(t,i,s){if(null==t.pixelBlock)return this.container.children.forEach((t=>t.destroy())),void this.container.removeAllChildren();const{extent:e,pixelBlock:r}=t,a=new V(r);a.offset=[0,0],a.symbolizerParameters=i,a.rawPixelData=t,a.invalidateVAO(),a.x=e.xmin,a.y=e.ymax,a.pixelRatio=s.pixelRatio,a.rotation=s.rotation,a.resolution=s.resolution,a.width=r.width*i.symbolTileSize,a.height=r.height*i.symbolTileSize,this.container.children.forEach((t=>t.destroy())),this.container.removeAllChildren(),this.container.symbolTypes="wind_speed"===i.style?["scalar","triangle"]:"simple_scalar"===i.style?["scalar"]:["triangle"],this.container.addChild(a)}};t([i()],W.prototype,"fetchPixels",void 0),t([i()],W.prototype,"container",void 0),t([i()],W.prototype,"_loading",void 0),t([i()],W.prototype,"updating",null),W=t([s("esri.views.2d.layers.imagery.ImageryVFStrategy")],W);const J=W;let K=class extends e{constructor(){super(...arguments),this.attached=!1,this.container=new H,this.type="imageryVF",this._dataParameters={exportParametersVersion:0,bbox:"",symbolTileSize:0,time:""},this._fetchpixels=async(t,i,s,e)=>{const r=await this._projectFullExtentPromise,{symbolTileSize:a}=this.layer.renderer,{extent:h,width:n,height:o}=E(t,i,s,a,r);if(null!=r&&!r.intersects(t))return{extent:h,pixelBlock:null};const p={bbox:`${h.xmin}, ${h.ymin}, ${h.xmax}, ${h.ymax}`,exportParametersVersion:this.layer.exportImageServiceParameters.version,symbolTileSize:a,time:JSON.stringify(this.timeExtent||"")};if(this._canReuseVectorFieldData(p)){const t=this.getPixelData();if(null!=t){if(`${t.extent.xmin}, ${t.extent.ymin}, ${t.extent.xmax}, ${t.extent.ymax}`===p.bbox)return t}}const{pixelData:l}=await this.layer.fetchImage(h,n,o,{timeExtent:this.timeExtent,requestAsImageElement:!1,signal:e});this._dataParameters=p;const c=l?.pixelBlock;if(null==c)return{extent:h,pixelBlock:null};return{extent:h,pixelBlock:"vector-uv"===this.layer.rasterInfo.dataType?$(c,"vector-uv"):c}}}get updating(){return!this.attached||this._strategy.updating}attach(){this._projectFullExtentPromise=this._getProjectedFullExtent(this.view.spatialReference),this._strategy=new J({container:this.container,fetchPixels:this._fetchpixels}),this.addHandles(p((()=>this.layer.renderer),(t=>this._updateSymbolizerParams(t)),l),"attach")}detach(){this._strategy.destroy(),this.container.children.forEach((t=>t.destroy())),this.container.removeAllChildren(),this.removeHandles("attach"),this._strategy=this.container=this._projectFullExtentPromise=null}getPixelData(){const t=this.container.children[0]?.rawPixelData;if(this.updating||!t)return null;const{extent:i,pixelBlock:s}=t;return{extent:i,pixelBlock:s}}hitTest(t){return new h({attributes:{},geometry:t.clone(),layer:this.layer})}update(t){this._strategy.update(t,this._symbolizerParams).catch((t=>{r(t)||a.getLogger(this).error(t)}))}redraw(){const{renderer:t}=this.layer;t&&(this._updateSymbolizerParams(t),this._strategy.redraw(this._symbolizerParams))}_canReuseVectorFieldData(t){const i=this._dataParameters.exportParametersVersion===t.exportParametersVersion,s=this._dataParameters.time===t.time,e=this._dataParameters.symbolTileSize===t.symbolTileSize,r=this._dataParameters.bbox===t.bbox;return i&&s&&e&&r}async _getProjectedFullExtent(t){try{return N(this.layer.fullExtent,t)}catch(i){try{const i=(await c(this.layer.url,{query:{option:"footprints",outSR:u(t),f:"json"}})).data.featureCollection.layers[0].layerDefinition.extent;return i?o.fromJSON(i):null}catch{return null}}}_updateSymbolizerParams(t){"vector-field"===t.type&&(this._symbolizerParams=this.layer.symbolizer.generateWebGLParameters({pixelBlock:null}))}};t([i()],K.prototype,"attached",void 0),t([i()],K.prototype,"container",void 0),t([i()],K.prototype,"layer",void 0),t([i()],K.prototype,"timeExtent",void 0),t([i()],K.prototype,"type",void 0),t([i()],K.prototype,"view",void 0),t([i()],K.prototype,"updating",null),K=t([s("esri.views.2d.layers.imagery.VectorFieldView2D")],K);const O=K;const X=e=>{let r=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeaturesAtLocation(t,i){const{layer:s}=this;if(!t)throw new m("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:s});const{popupEnabled:e}=s,r=A(s,i);if(!e||null==r)throw new m("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:e,popupTemplate:r});const a=await r.getRequiredFields();f(i);const h=new w;h.timeExtent=this.timeExtent,h.geometry=t,h.outFields=a,h.outSpatialReference=t.spatialReference;const{resolution:n,spatialReference:o}=this.view,p="2d"===this.view.type?new g(n,n,o):new g(.5*n,.5*n,o),{returnTopmostRaster:l,showNoDataRecords:c}=r.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},u={returnDomainValues:!0,returnTopmostRaster:l,pixelSize:p,showNoDataRecords:c,signal:i?.signal};return s.queryVisibleRasters(h,u).then((t=>t))}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return t([i()],r.prototype,"layer",void 0),t([i()],r.prototype,"suspended",void 0),t([i(d)],r.prototype,"timeExtent",void 0),t([i()],r.prototype,"view",void 0),r=t([s("esri.views.layers.ImageryLayerView")],r),r};let G=class extends(X(L(P(_)))){constructor(){super(...arguments),this._exportImageVersion=-1,this._highlightGraphics=new y,this._highlightView=void 0,this.layer=null,this.subview=null}get pixelData(){const{subview:t}=this;return this.updating||!t?null:"getPixelData"in t?t.getPixelData():null}update(t){this.subview?.update(t)}attach(){this.layer.increaseRasterJobHandlerUsage(),this._setSubView(),this.view&&(this._highlightView=new S({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new B(this.view.featuresTilingScheme)}),this.container.addChild(this._highlightView.container)),this.addAttachHandles([p((()=>this.layer.exportImageServiceParameters.version),(t=>{t&&this._exportImageVersion!==t&&(this._exportImageVersion=t,this.requestUpdate())}),x),p((()=>this.timeExtent),(t=>{const{subview:i}=this;i&&(i.timeExtent=t,"redraw"in i?this.requestUpdate():i.redrawOrRefetch())}),x),this.layer.on("redraw",(()=>{const{subview:t}=this;t&&("redraw"in t?t.redraw():t.redrawOrRefetch())})),p((()=>this.layer.renderer),(()=>this._setSubView()))])}detach(){this.layer.decreaseRasterJobHandlerUsage(),this.container.removeAllChildren(),this._detachSubview(this.subview),this.subview?.destroy(),this.subview=null,this._highlightView?.destroy(),this._exportImageVersion=-1}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}highlight(t,i){if(!((Array.isArray(t)?t[0]:v.isCollection(t)?t.at(0):t)instanceof h))return j();let s=[];return Array.isArray(t)||v.isCollection(t)?s=t.map((t=>t.clone())):t instanceof h&&(s=[t.clone()]),this._highlightGraphics.addMany(s),j((()=>this._highlightGraphics.removeMany(s)))}async doRefresh(){this.requestUpdate()}isUpdating(){const t=!this.subview||this.subview.updating||!!this._highlightView?.updating;return b("esri-2d-log-updating")&&console.log(`Updating ImageryLayerView2D (${this.layer.id}): ${t}\n-> subview ${!this.subview||this.subview.updating}\n-> higlightView ${this._highlightView?.updating}\n`),t}_setSubView(){if(!this.view)return;const t=this.layer.renderer?.type;let i="imagery";if("vector-field"===t?i="imageryVF":"flow"===t&&(i="flow"),this.subview){const{type:t}=this.subview;if(t===i)return this._attachSubview(this.subview),void("flow"===t?this.subview.redrawOrRefetch():"imagery"===t&&"lerc"===this.layer.format?this.subview.redraw():this.requestUpdate());this._detachSubview(this.subview),this.subview?.destroy()}this.subview="imagery"===i?new C({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):"imageryVF"===i?new O({layer:this.layer,view:this.view,timeExtent:this.timeExtent}):new D({layer:this.layer,layerView:this}),this._attachSubview(this.subview),this.requestUpdate()}_attachSubview(t){t&&!t.attached&&(t.attach(),t.attached=!0,this.container.addChildAt(t.container,0))}_detachSubview(t){t?.attached&&(this.container.removeChild(t.container),t.detach(),t.attached=!1)}};t([i()],G.prototype,"pixelData",null),t([i()],G.prototype,"subview",void 0),G=t([s("esri.views.2d.layers.ImageryLayerView2D")],G);const Q=G;export default Q;
//# sourceMappingURL=p-dac42c02.js.map