import{r as t,p as e,q as i,dN as s,s as r,a3 as a,di as p,n as o,w as h,E as n}from"./p-aad64c9f.js";import{a as m}from"./p-43638f6d.js";import{j as c,y as u}from"./p-bbb18646.js";import{_ as d}from"./p-b1288cb0.js";import{i as f}from"./p-3e7cecc4.js";import{a as l}from"./p-5ed633a9.js";import{i as w}from"./p-c2679c90.js";import"./p-2af77f97.js";import"./p-682c165c.js";import"./p-22458323.js";import"./p-1c4b55c0.js";import"./p-2ea4a2b9.js";import"./p-7ce0ff48.js";import"./p-a0004a96.js";import"./p-44881b12.js";import"./p-e7002be3.js";import"./p-717596a8.js";import"./p-3f2fef32.js";import"./p-204b6b8c.js";import"./p-9ad0e060.js";import"./p-c0b174ee.js";import"./p-875cbb57.js";import"./p-da522976.js";import"./p-aff89b86.js";import"./p-d492d39b.js";import"./p-2527295a.js";const x=p=>{let o=class extends p{initialize(){this.exportImageParameters=new l({layer:this.layer})}destroy(){this.exportImageParameters=s(this.exportImageParameters)}get exportImageVersion(){return this.exportImageParameters?.commitProperty("version"),this.commitProperty("timeExtent"),(this._get("exportImageVersion")||0)+1}get timeExtent(){return w(this.layer,this.view?.timeExtent,this._get("timeExtent"))}async fetchPopupFeaturesAtLocation(t,e){const{layer:i}=this;if(!t)throw new r("wmslayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:s}=i;if(!s)throw new r("wmslayerview:fetchPopupFeatures","popupEnabled should be true",{popupEnabled:s});const p=this.createFetchPopupFeaturesQuery(t);if(!p)return[];const{extent:o,width:h,height:n,x:m,y:c}=p;if(!(o&&h&&n))throw new r("wmslayerview:fetchPopupFeatures","WMSLayer does not support fetching features.",{extent:o,width:h,height:n});const u=await i.fetchFeatureInfo(o,h,n,m,c);return a(e),u}};return t([e()],o.prototype,"exportImageParameters",void 0),t([e({readOnly:!0})],o.prototype,"exportImageVersion",null),t([e()],o.prototype,"layer",void 0),t([e({readOnly:!0})],o.prototype,"timeExtent",null),o=t([i("esri.views.layers.WMSLayerView")],o),o};let y=class extends(x(f(c(u)))){constructor(){super(...arguments),this.bitmapContainer=new m}supportsSpatialReference(t){return this.layer.serviceSupportsSpatialReference(t)}update(t){this.strategy.update(t).catch((t=>{p(t)||o.getLogger(this).error(t)}))}attach(){const{layer:t}=this,{imageMaxHeight:e,imageMaxWidth:i}=t;this.bitmapContainer=new m,this.container.addChild(this.bitmapContainer),this.strategy=new d({container:this.bitmapContainer,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:e,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.addAttachHandles(h((()=>this.exportImageVersion),(()=>this.requestUpdate())))}detach(){this.strategy=s(this.strategy),this.container.removeAllChildren()}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(t){const{view:e,bitmapContainer:i}=this,{x:s,y:r}=t,{spatialReference:a}=e;let p,o=0,h=0;if(i.children.some((t=>{const{width:e,height:i,resolution:m,x:c,y:u}=t,d=c+m*e,f=u-m*i;return s>=c&&s<=d&&r<=u&&r>=f&&(p=new n({xmin:c,ymin:f,xmax:d,ymax:u,spatialReference:a}),o=e,h=i,!0)})),!p)return null;const m=p.width/o,c=Math.round((s-p.xmin)/m),u=Math.round((p.ymax-r)/m);return{extent:p,width:o,height:h,x:c,y:u}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(t,e,i,s){return this.layer.fetchImageBitmap(t,e,i,{timeExtent:this.timeExtent,...s})}};t([e()],y.prototype,"strategy",void 0),t([e()],y.prototype,"updating",void 0),y=t([i("esri.views.2d.layers.WMSLayerView2D")],y);const j=y;export default j;
//# sourceMappingURL=p-4e7e4d3a.js.map