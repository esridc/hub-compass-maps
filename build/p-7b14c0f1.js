import{w as s,bD as t,ae as p,az as i,jO as o,jP as r,jQ as e,r as a,q as m}from"./p-aad64c9f.js";import{j as h,y as j}from"./p-bbb18646.js";import{t as c}from"./p-d8c74537.js";import{F as f}from"./p-4f2b7ad8.js";import"./p-2af77f97.js";import"./p-3f2fef32.js";import"./p-31b7e91d.js";import"./p-23e8befe.js";import"./p-2d2f231a.js";import"./p-17d8c81f.js";import"./p-dc645a50.js";import"./p-1c4b55c0.js";import"./p-2ea4a2b9.js";import"./p-22458323.js";import"./p-7ce0ff48.js";import"./p-a0004a96.js";import"./p-d6556377.js";import"./p-682c165c.js";import"./p-44881b12.js";import"./p-e7002be3.js";import"./p-717596a8.js";import"./p-204b6b8c.js";import"./p-9ad0e060.js";import"./p-c0b174ee.js";import"./p-875cbb57.js";import"./p-da522976.js";import"./p-aff89b86.js";import"./p-d492d39b.js";import"./p-591e796f.js";import"./p-559f4b2d.js";import"./p-7281a451.js";import"./p-b947b9d2.js";import"./p-b8a25c33.js";import"./p-e7a66915.js";import"./p-deddb82e.js";import"./p-fa2632fc.js";import"./p-4295487d.js";import"./p-1c285990.js";import"./p-e3657bc3.js";import"./p-bac7b09c.js";import"./p-2250105d.js";let n=class extends(h(j)){constructor(){super(...arguments),this._graphicsViewMap={},this._popupTemplates=new Map,this.graphicsViews=[]}async hitTest(s,t){if(!this.graphicsViews.length)return null;const p=this.layer;return this.graphicsViews.reverse().flatMap((t=>{const i=this._popupTemplates.get(t),o=t.hitTest(s);for(const s of o)s.layer=p,s.sourceLayer=p,s.popupTemplate=i;return o})).map((t=>({type:"graphic",graphic:t,layer:p,mapPoint:s})))}update(s){if(this.graphicsViews)for(const t of this.graphicsViews)t.processUpdate(s)}attach(){this.addAttachHandles([s((()=>this.layer?.featureCollections),(s=>{this._clear();for(const{popupInfo:t,featureSet:e,layerDefinition:a}of s){const s=p.fromJSON(e),m=new i(s.features),h=a.drawingInfo,j=t?o.fromJSON(t):null,n=r(h.renderer),b=new f({requestUpdateCallback:()=>this.requestUpdate(),view:this.view,graphics:m,renderer:n,container:new c(this.view.featuresTilingScheme)});this._graphicsViewMap[s.geometryType]=b,this._popupTemplates.set(b,j),"polygon"!==s.geometryType||this.layer.polygonSymbol?"polyline"!==s.geometryType||this.layer.lineSymbol?"point"!==s.geometryType||this.layer.pointSymbol||(this.layer.pointSymbol=n.symbol):this.layer.lineSymbol=n.symbol:this.layer.polygonSymbol=n.symbol,this.graphicsViews.push(b),this.container.addChild(b.container)}}),t),s((()=>this.layer?.polygonSymbol),(s=>{this._graphicsViewMap.polygon.renderer=new e({symbol:s})}),t),s((()=>this.layer?.lineSymbol),(s=>{this._graphicsViewMap.polyline.renderer=new e({symbol:s})}),t),s((()=>this.layer?.pointSymbol),(s=>{this._graphicsViewMap.point.renderer=new e({symbol:s})}),t)])}detach(){this._clear()}moveEnd(){}viewChange(){for(const s of this.graphicsViews)s.viewChange()}_clear(){this.container.removeAllChildren();for(const s of this.graphicsViews)s.destroy();this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}};n=a([m("esri.views.2d.layers.GeoRSSLayerView2D")],n);const b=n;export default b;
//# sourceMappingURL=p-7b14c0f1.js.map