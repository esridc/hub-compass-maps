import{r as t,p as s,q as e,_ as i,g as h,i$ as r,E as n,c1 as l,az as a,j0 as o,j1 as u,j2 as p,s as c,w as d,j3 as g,j4 as y,bE as v,j5 as f,j6 as m,j7 as w,n as b,j8 as S,bG as j,j9 as O,bC as C,ac as R,dZ as x,dN as A,ja as P}from"./p-aad64c9f.js";import{n as E}from"./p-3f2fef32.js";let N=class extends i{get version(){return this.commitVersionProperties(),(this._get("version")||0)+1}};t([s({readOnly:!0})],N.prototype,"version",null),N=t([e("esri.views.layers.support.ClipArea")],N);const _=N;var k;let H=k=class extends _{constructor(t){super(t),this.type="rect",this.left=null,this.right=null,this.top=null,this.bottom=null}clone(){return new k({left:this.left,right:this.right,top:this.top,bottom:this.bottom})}commitVersionProperties(){this.commitProperty("left"),this.commitProperty("right"),this.commitProperty("top"),this.commitProperty("bottom")}};t([s({type:[Number,String],json:{write:!0}})],H.prototype,"left",void 0),t([s({type:[Number,String],json:{write:!0}})],H.prototype,"right",void 0),t([s({type:[Number,String],json:{write:!0}})],H.prototype,"top",void 0),t([s({type:[Number,String],json:{write:!0}})],H.prototype,"bottom",void 0),H=k=t([e("esri.views.layers.support.ClipRect")],H);const V=H;var q;const I={base:r,key:"type",typeMap:{extent:n,polygon:l}};let T=q=class extends _{constructor(t){super(t),this.type="geometry",this.geometry=null}clone(){return new q({geometry:this.geometry?.clone()??null})}commitVersionProperties(){this.commitProperty("geometry")}};t([s({types:I,json:{read:h,write:!0}})],T.prototype,"geometry",void 0),T=q=t([e("esri.views.layers.support.Geometry")],T);const $=T;let z=class extends _{constructor(t){super(t),this.type="path",this.path=[]}commitVersionProperties(){this.commitProperty("path")}};t([s({type:[[[Number]]],json:{write:!0}})],z.prototype,"path",void 0),z=t([e("esri.views.layers.support.Path")],z);const B=z;const M=a.ofType({key:"type",base:null,typeMap:{rect:V,path:B,geometry:$}}),U=new(a.ofType(o)),D=i=>{let h=class extends i{constructor(){super(...arguments),this.attached=!1,this.clips=new M,this.highlights=null,this.lastUpdateId=-1,this.moving=!1,this.updateRequested=!1,this._visibleAtCurrentScale=!0}initialize(){const t=this.view?.spatialReferenceLocked??!0,s=this.view?.spatialReference;s&&t&&!this.spatialReferenceSupported?this.addResolvingPromise(Promise.reject(new c("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",{layer:this.layer}))):(this.container||(this.container=new E),this.container.fadeTransitionEnabled=!0,this.container.visible=!1,this.container.endTransitions(),this.addHandles([d((()=>this.suspended),(t=>{this.container&&(this.container.visible=!t)}),g),d((()=>this.updateSuspended),(t=>{this.view&&!t&&this.updateRequested&&this.view.requestUpdate()}),g),d((()=>this.layer?.opacity??1),(t=>{this.container&&(this.container.opacity=t)}),g),d((()=>this.layer&&"blendMode"in this.layer?this.layer.blendMode:"normal"),(t=>{this.container&&(this.container.blendMode=t)}),g),d((()=>this.layer&&"effect"in this.layer?this.layer.effect:null),(t=>{this.container&&(this.container.effect=t)}),g),d((()=>this._mergedHighlights.items.map((t=>({name:t.name,options:{fillColor:t.options.color,haloColor:t.options.haloColor,fillOpacity:t.options.fillOpacity,haloOpacity:t.options.haloOpacity,haloWidth:t.options.haloWidth,haloBlur:t.options.haloBlur}})))),(()=>{this.container.highlightGradient=y(this.container.highlightGradient,this._mergedHighlights.items)}),g),d((()=>this._mergedHighlights.items.map((t=>t.name))),(()=>{this._updateHighlights()})),v((()=>this.clips),"change",(()=>{this.container&&(this.container.clips=this.clips)}),g),d((()=>({scale:this.view?.scale,scaleRange:this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null})),(({scale:t,scaleRange:s})=>{const e=S(s,t);e!==this._visibleAtCurrentScale&&(this._visibleAtCurrentScale=e)}),g)],"constructor"),this.view?.whenLayerView?this.view.whenLayerView(this.layer).then((t=>{t===this&&this.processAttach()}),(()=>{})):this.when().then((()=>{this.processAttach()}),(()=>{})))}_updateHighlights(){}destroy(){this.processDetach(),this.updateRequested=!1}get highlightOptions(){return f(this)}set highlightOptions(t){m(this,t)}get _mergedHighlights(){if(!this.view)return U;if(!this.highlights)return this.view.highlights;const t=this.view.highlights.clone();for(const s of this.highlights){const e=t.find((t=>t.name===s.name));e&&(e.options=s.options)}return t}get scheduler(){return this.view.scheduler}get spatialReferenceSupported(){const t=this.view?.spatialReference;return null==t||this.supportsSpatialReference(t)}get updating(){return this.spatialReferenceSupported&&(!this.attached||!this.suspended&&(this.updateRequested||this.isUpdating())||!!this._updatingHandles?.updating||this.container.transitioning)}get visibleAtCurrentScale(){return this._visibleAtCurrentScale}processAttach(){this.isResolved()&&!this.attached&&!this.destroyed&&this.spatialReferenceSupported&&(this.attach(),this.attached=!0,this.requestUpdate())}processDetach(){this.attached&&(this.attached=!1,this.removeHandles("attach"),this.detach(),this.updateRequested=!1)}requestUpdate(){this.destroyed||this.updateRequested||(this.updateRequested=!0,this.updateSuspended||this.view.requestUpdate())}processUpdate(t){!this.isFulfilled()||this.isResolved()?(this._set("updateParameters",t),this.updateRequested&&!this.updateSuspended&&(this.updateRequested=!1,this.update(t))):this.updateRequested=!1}hitTest(t,s){return Promise.resolve(null)}supportsSpatialReference(t){return!0}canResume(){if(!this.spatialReferenceSupported)return!1;switch(this.layer?.type){case"link-chart":case"knowledge-graph-sublayer":break;default:if(w(this.view)&&!this.view.inGeographicLayout)return!1}return!!super.canResume()&&this.visibleAtCurrentScale}getSuspendInfo(){const t=super.getSuspendInfo(),s=!this.spatialReferenceSupported;return s&&(t.spatialReferenceNotSupported=s),t}addAttachHandles(t){this.addHandles(t,"attach")}_getHighlightBits(t){t=new Set(t);let s=1,e=0;if(!this.view)return 0;const i=this._mergedHighlights;for(const{name:h}of i)t.delete(h)&&(e=s),s<<=1;for(const s of t)b.getLogger(this).error("#highlights",`${s} was not found. Features in this group will not be highlighted.`);return e}};return t([s()],h.prototype,"attached",void 0),t([s({type:M,set(t){const s=u(t,this._get("clips"),M);this._set("clips",s)}})],h.prototype,"clips",void 0),t([s()],h.prototype,"container",void 0),t([s({type:p})],h.prototype,"highlightOptions",null),t([s({type:a.ofType(o)})],h.prototype,"highlights",void 0),t([s()],h.prototype,"_mergedHighlights",null),t([s()],h.prototype,"moving",void 0),t([s({readOnly:!0})],h.prototype,"spatialReferenceSupported",null),t([s({readOnly:!0})],h.prototype,"updateParameters",void 0),t([s()],h.prototype,"updateRequested",void 0),t([s()],h.prototype,"updating",null),t([s()],h.prototype,"view",void 0),t([s()],h.prototype,"_visibleAtCurrentScale",void 0),t([s({readOnly:!0})],h.prototype,"visibleAtCurrentScale",null),h=t([e("esri.views.2d.layers.LayerView2D")],h),h};let F=class extends(j(O(C.EventedMixin(R)))){constructor(t){super(t),this._updatingHandles=new x,this.layer=null,this.parent=null}initialize(){this.when().catch((t=>{if("layerview:create-error"!==t.name){const s=this.layer&&this.layer.id||"no id",e=this.layer?.title||"no title";b.getLogger(this).error("#resolve()",`Failed to resolve layer view (layer title: '${e}', id: '${s}')`,t)}}))}destroy(){this._updatingHandles=A(this._updatingHandles)}get fullOpacity(){return(this.layer?.opacity??1)*(this.parent?.fullOpacity??1)}get suspended(){return this.destroyed||!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){return!this.suspended&&!0===this.layer?.legendEnabled}get updating(){return!(!this._updatingHandles?.updating&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get updateSuspended(){return this.suspended}get visible(){return!0===this.layer?.visible}set visible(t){this._overrideIfSome("visible",t)}get visibleAtCurrentScale(){return!0}get visibleAtCurrentTimeExtent(){const t=this.view.timeExtent,s=this.layer?.visibilityTimeExtent;return!t||!s||!t.intersection(s).isEmpty}canResume(){const t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return this.visible&&this.layer?.loaded&&!this.parent?.suspended&&this.view?.ready&&P(t)&&this.visibleAtCurrentScale&&this.visibleAtCurrentTimeExtent||!1}getSuspendInfo(){const t=this.parent?.suspended?this.parent.suspendInfo:{},s=this;s.view?.ready||(t.viewNotReady=!0),this.layer&&this.layer.loaded||(t.layerNotLoaded=!0);const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return P(e)&&this.visibleAtCurrentScale||(t.outsideScaleRange=!0),this.visibleAtCurrentTimeExtent||(t.outsideVisibilityTimeExtent=!0),this.visible||(t.layerInvisible=!0),t}isUpdating(){return!1}};t([s()],F.prototype,"view",void 0),t([s()],F.prototype,"fullOpacity",null),t([s()],F.prototype,"layer",void 0),t([s()],F.prototype,"parent",void 0),t([s({readOnly:!0})],F.prototype,"suspended",null),t([s({readOnly:!0})],F.prototype,"suspendInfo",null),t([s({readOnly:!0})],F.prototype,"legendEnabled",null),t([s({type:Boolean,readOnly:!0})],F.prototype,"updating",null),t([s({readOnly:!0})],F.prototype,"updatingProgress",null),t([s()],F.prototype,"updateSuspended",null),t([s()],F.prototype,"visible",null),t([s({readOnly:!0})],F.prototype,"visibleAtCurrentScale",null),t([s({readOnly:!0})],F.prototype,"visibleAtCurrentTimeExtent",null),F=t([e("esri.views.layers.LayerView")],F);const G=F;export{$ as a,D as j,G as y};
//# sourceMappingURL=p-bbb18646.js.map