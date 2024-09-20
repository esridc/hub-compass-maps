import{dK as t,gy as i,ai as s,aY as r,cH as e,ah as o,an as p,ao as h,ap as n}from"./p-3013819f.js";import{m as a,c,O as m,f,j as l,g as u,a as j}from"./p-9611d645.js";import{t as d}from"./p-7b13247d.js";import{m as b,u as g}from"./p-4e55d8f0.js";import{t as w}from"./p-9cf72458.js";import{$ as y}from"./p-6d5c327b.js";import"./p-3b51db5e.js";import"./p-0d83e514.js";import"./p-b362a32c.js";import"./p-8567e6fe.js";import"./p-c268fbe3.js";import"./p-17c1fa4b.js";import"./p-b6b871c6.js";import"./p-ffa11fc1.js";import"./p-808395fb.js";import"./p-30a1f911.js";import"./p-508fdb0a.js";import"./p-f1aede5a.js";import"./p-94b15954.js";import"./p-a9376829.js";import"./p-3811f238.js";import"./p-e6812c2f.js";import"./p-a925664a.js";import"./p-a897fcf8.js";import"./p-c7810a6f.js";import"./p-201cec5f.js";import"./p-89242a33.js";import"./p-7580bdba.js";import"./p-a62b18ce.js";import"./p-2d8c68ca.js";import"./p-d97e7de8.js";import"./p-595ce045.js";import"./p-10e5b6ea.js";import"./p-3b8b0ae8.js";import"./p-ec95a4fb.js";import"./p-1f0b604e.js";import"./p-347800d3.js";import"./p-72db18d5.js";import"./p-325c6878.js";import"./p-721433ed.js";import"./p-1cf43261.js";import"./p-8b1f6523.js";import"./p-4f73c6ea.js";import"./p-ffb26433.js";const _=["route-info","direction-line","direction-point","polygon-barrier","polyline-barrier","point-barrier","stop"],v={graphic:null,property:null,oldValue:null,newValue:null};function I(t){return t instanceof a||t instanceof c||t instanceof m||t instanceof f||t instanceof l||t instanceof u||t instanceof j}function V(i){return t.isCollection(i)&&i.length&&I(i.at(0))}function C(t){return Array.isArray(t)&&t.length>0&&I(t[0])}let F=class extends(b(g)){constructor(){super(...arguments),this._graphics=new t,this._highlightIds=new Map,this._networkFeatureMap=new Map,this._networkGraphicMap=new Map}get _routeItems(){return new i({getCollections:()=>null==this.layer||this.destroyed?[]:[null!=this.layer.routeInfo?new t([this.layer.routeInfo]):null,this.layer.directionLines,this.layer.directionPoints,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.pointBarriers,this.layer.stops]})}initialize(){this._updatingHandles.addOnCollectionChange((()=>this._routeItems),(t=>this._routeItemsChanged(t)),s)}destroy(){this._networkFeatureMap.clear(),this._networkGraphicMap.clear(),this._graphics.removeAll(),this._get("_routeItems")?.destroy()}attach(){this._createGraphicsView()}detach(){this._destroyGraphicsView()}async fetchPopupFeaturesAtLocation(t,i){return this._graphicsView.hitTest(t).filter((({popupTemplate:t})=>!!t))}highlight(t){let i;i=I(t)?[this._getNetworkFeatureUid(t)]:C(t)?t.map((t=>this._getNetworkFeatureUid(t))):V(t)?t.map((t=>this._getNetworkFeatureUid(t))).toArray():[t.uid];const s=i.filter(r);return s.length?(this._addHighlight(s),e((()=>this._removeHighlight(s)))):e()}async hitTest(t,i){if(this.suspended)return null;const s=this._graphicsView.hitTest(t).filter(r).map((t=>this._networkGraphicMap.get(t)));if(!s.length)return null;const{layer:e}=this;return s.reverse().map((i=>({type:"route",layer:e,mapPoint:t,networkFeature:i})))}isUpdating(){return this._graphicsView.updating}moveStart(){}moveEnd(){}update(t){this._graphicsView.processUpdate(t)}viewChange(){this._graphicsView.viewChange()}_addHighlight(t){for(const i of t)if(this._highlightIds.has(i)){const t=this._highlightIds.get(i);this._highlightIds.set(i,t+1)}else this._highlightIds.set(i,1);this._updateHighlight()}_createGraphic(t){const i=t.toGraphic();return i.layer=this.layer,i.sourceLayer=this.layer,i}_createGraphicsView(){const t=this.view,i=()=>this.requestUpdate(),s=new w(t.featuresTilingScheme);this._graphicsView=new y({container:s,graphics:this._graphics,requestUpdateCallback:i,view:t}),this.container.addChild(s),this._updateHighlight()}_destroyGraphicsView(){this.container.removeChild(this._graphicsView.container),this._graphicsView.destroy()}_getDrawOrder(t){const i=this._networkGraphicMap.get(t);return _.indexOf(i.type)}_getNetworkFeatureUid(t){return this._networkFeatureMap.has(t)?this._networkFeatureMap.get(t).uid:null}_removeHighlight(t){for(const i of t)if(this._highlightIds.has(i)){const t=this._highlightIds.get(i)-1;0===t?this._highlightIds.delete(i):this._highlightIds.set(i,t)}this._updateHighlight()}_routeItemsChanged(t){if(t.removed.length){this._graphics.removeMany(t.removed.map((t=>{const i=this._networkFeatureMap.get(t);return this._networkFeatureMap.delete(t),this._networkGraphicMap.delete(i),i})));for(const i of t.removed)this.removeHandles(i)}if(t.added.length){this._graphics.addMany(t.added.map((t=>{const i=this._createGraphic(t);return null==i.symbol?null:(this._networkFeatureMap.set(t,i),this._networkGraphicMap.set(i,t),i)})).filter(r));for(const i of t.added)this.addHandles([o((()=>i.geometry),((t,s)=>{this._updateGraphic(i,"geometry",t,s)})),o((()=>i.symbol),((t,s)=>{this._updateGraphic(i,"symbol",t,s)}))],i);this._graphics.sort(((t,i)=>this._getDrawOrder(t)-this._getDrawOrder(i)))}}_updateGraphic(t,i,s,r){if(!this._networkFeatureMap.has(t)){const i=this._createGraphic(t);return this._networkFeatureMap.set(t,i),this._networkGraphicMap.set(i,t),void this._graphics.add(i)}const e=this._networkFeatureMap.get(t);e[i]=s,v.graphic=e,v.property=i,v.oldValue=r,v.newValue=s,this._graphicsView.graphicUpdateHandler(v)}_updateHighlight(){const t=Array.from(this._highlightIds.keys()),i=d("highlight");this._graphicsView.setHighlight(t.map((t=>({objectId:t,highlightFlags:i}))))}};p([h()],F.prototype,"_graphics",void 0),p([h()],F.prototype,"_routeItems",null),F=p([n("esri.views.2d.layers.RouteLayerView2D")],F);const G=F;export default G;
//# sourceMappingURL=p-df91aaaf.js.map