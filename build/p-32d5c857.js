import{r as t,p as i,q as s,kc as e,iW as p,di as r,n as o,w as a}from"./p-aad64c9f.js";import{a as h}from"./p-43638f6d.js";import{j as m,y as n}from"./p-bbb18646.js";import{F as c}from"./p-4f2b7ad8.js";import{h as d}from"./p-f5662f64.js";import{_ as j}from"./p-b1288cb0.js";import{i as f}from"./p-c2679c90.js";import{i as l}from"./p-3e7cecc4.js";import{R as u}from"./p-c88fe9df.js";import{r as b}from"./p-25b1687c.js";import"./p-2af77f97.js";import"./p-682c165c.js";import"./p-22458323.js";import"./p-1c4b55c0.js";import"./p-2ea4a2b9.js";import"./p-7ce0ff48.js";import"./p-a0004a96.js";import"./p-44881b12.js";import"./p-e7002be3.js";import"./p-717596a8.js";import"./p-3f2fef32.js";import"./p-204b6b8c.js";import"./p-9ad0e060.js";import"./p-c0b174ee.js";import"./p-875cbb57.js";import"./p-da522976.js";import"./p-aff89b86.js";import"./p-d492d39b.js";import"./p-559f4b2d.js";import"./p-7281a451.js";import"./p-b947b9d2.js";import"./p-b8a25c33.js";import"./p-e7a66915.js";import"./p-fa2632fc.js";import"./p-4295487d.js";import"./p-1c285990.js";import"./p-e3657bc3.js";import"./p-bac7b09c.js";import"./p-2d2f231a.js";import"./p-17d8c81f.js";import"./p-dc645a50.js";import"./p-591e796f.js";import"./p-deddb82e.js";import"./p-2250105d.js";import"./p-31b7e91d.js";import"./p-23e8befe.js";import"./p-d6556377.js";import"./p-2527295a.js";import"./p-63562f76.js";import"./p-11492679.js";import"./p-7950bc60.js";import"./p-1bb606f6.js";import"./p-b323b506.js";const g=p=>{let r=class extends p{initialize(){this.exportImageParameters=new e({layer:this.layer})}destroy(){this.exportImageParameters.destroy(),this.exportImageParameters=null}get floors(){return this.view?.floors??null}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),this.commitProperty("floors"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return f(this.layer,this.view?.timeExtent,this._get("timeExtent"))}canResume(){return!!super.canResume()&&!this.timeExtent?.isEmpty}};return t([i()],r.prototype,"exportImageParameters",void 0),t([i({readOnly:!0})],r.prototype,"floors",null),t([i({readOnly:!0})],r.prototype,"exportImageVersion",null),t([i()],r.prototype,"layer",void 0),t([i()],r.prototype,"suspended",void 0),t([i({readOnly:!0})],r.prototype,"timeExtent",null),r=t([s("esri.views.layers.MapImageLayerView")],r),r};let y=class extends(g(l(m(n)))){constructor(){super(...arguments),this._highlightGraphics=new p,this._updateHash=""}fetchPopupFeaturesAtLocation(t,i){return this._popupHighlightHelper.fetchPopupFeaturesAtLocation(t,i)}update(t){const i=`${this.exportImageVersion}/${t.state.id}/${t.pixelRatio}/${t.stationary}`;this._updateHash!==i&&(this._updateHash=i,this.strategy.update(t).catch((t=>{r(t)||o.getLogger(this).error(t)})),t.stationary&&this._popupHighlightHelper.updateHighlightedFeatures(t.state.resolution)),this._highlightView.processUpdate(t)}attach(){const{imageMaxWidth:t,imageMaxHeight:i,version:s}=this.layer,e=s>=10.3,p=s>=10;this._bitmapContainer=new h,this.container.addChild(this._bitmapContainer),this._highlightView=new c({view:this.view,graphics:this._highlightGraphics,requestUpdateCallback:()=>this.requestUpdate(),container:new d(this.view.featuresTilingScheme),defaultPointSymbolEnabled:!1}),this.container.addChild(this._highlightView.container),this._popupHighlightHelper=new u({createFetchPopupFeaturesQueryGeometry:(t,i)=>b(t,i,this.view),highlightGraphics:this._highlightGraphics,highlightGraphicUpdated:(t,i)=>{this._highlightView.graphicUpdateHandler({graphic:t,property:i})},layerView:this,updatingHandles:this._updatingHandles}),this.strategy=new j({container:this._bitmapContainer,fetchSource:this.fetchImageBitmap.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxWidth:t,imageMaxHeight:i,imageRotationSupported:e,imageNormalizationSupported:p,hidpi:!0}),this.addAttachHandles(a((()=>this.exportImageVersion),(()=>this.requestUpdate()))),this.requestUpdate()}detach(){this.strategy.destroy(),this.container.removeAllChildren(),this._bitmapContainer.removeAllChildren(),this._highlightView.destroy(),this._popupHighlightHelper.destroy()}viewChange(){}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}async doRefresh(){this._updateHash="",this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,i,s,e){return this.layer.fetchImage(t,i,s,{timeExtent:this.timeExtent,floors:this.floors,...e})}fetchImageBitmap(t,i,s,e){return this.layer.fetchImageBitmap(t,i,s,{timeExtent:this.timeExtent,floors:this.floors,...e})}highlight(t){return this._popupHighlightHelper.highlight(t)}};t([i()],y.prototype,"strategy",void 0),t([i()],y.prototype,"updating",void 0),y=t([s("esri.views.2d.layers.MapImageLayerView2D")],y);const x=y;export default x;
//# sourceMappingURL=p-32d5c857.js.map