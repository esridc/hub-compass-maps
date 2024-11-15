import{l0 as e,x as t,r as o,p as i,q as n,ac as r,$ as a,mQ as s,mw as c,ep as l,dv as h,mU as u,mR as d,m2 as v,nB as f,dX as m,c as p,kI as g,cm as x,d3 as b,cn as w,ao as M,dr as C,cg as T,d2 as S,du as y,mZ as A,a2 as _,mI as E,lM as O,nW as R,lN as I,lQ as L,aK as F,nO as z,nX as G,w as N,bD as D,s as P,e8 as B,ee as H,n as j,fQ as V,d8 as U,ch as W,c4 as $,cj as k,fp as q,da as Y,kY as J,jj as X,nc as Z,fN as K,hd as Q,de as ee,nY as te,ce as oe,bC as ie,nZ as ne,n_ as re,ca as ae,mG as se,a3 as ce,n$ as le,db as he,dc as ue,dT as de,mT as ve,o0 as fe,o1 as me,aU as pe,aW as ge,ag as xe,k8 as be,o2 as we,o3 as Me,eo as Ce,f2 as Te,aX as Se,nf as ye,ng as Ae,ap as _e,lP as Ee,cb as Oe}from"./p-aad64c9f.js";import{t as Re}from"./p-c65f105a.js";import{s as Ie,i as Le,a as Fe,O as ze,e as Ge,n as Ne,u as De}from"./p-dc92c2ea.js";import{s as Pe}from"./p-dc645a50.js";import{H as Be}from"./p-06c101b5.js";import{b as He,c as je,t as Ve,S as Ue,n as We,u as $e,d as ke,o as qe,r as Ye}from"./p-3b7ff27a.js";import{o as Je,t as Xe,r as Ze}from"./p-dddb66c6.js";import{e as Ke}from"./p-e91c4d32.js";import{a as Qe}from"./p-17d8c81f.js";import"./p-ed54582d.js";import{E as et,U as tt}from"./p-175d4a9b.js";import{B as ot,o as it,g as nt,c as rt,p as at,r as st,b as ct,d as lt,f as ht}from"./p-790e1969.js";import{e as ut,o as dt}from"./p-79c28fb7.js";import{e as vt,o as ft}from"./p-88dd7081.js";import{I as mt,L as pt}from"./p-436c45c7.js";import{x as gt,c as xt,y as bt,u as wt,q as Mt,i as Ct}from"./p-fa12d64c.js";function Tt(t,o=!1){return t<=e?o?new Array(t).fill(0):new Array(t):new Float32Array(t)}function St(e){e.vertex.code.add(Je`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${Je.int(He.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${Je.int(He.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${Je.int(He.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${Je.int(He.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}class yt{constructor(e,t,o,i,n=null){if(this.name=e,this.type=t,this.arraySize=n,this.bind={[Qe.Pass]:null,[Qe.Draw]:null},i)switch(o){case Qe.Pass:this.bind[Qe.Pass]=i;break;case Qe.Draw:this.bind[Qe.Draw]=i}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}class At extends yt{constructor(e,t){super(e,"sampler2D",Qe.Draw,((o,i,n)=>o.bindTexture(e,t(i,n))))}}function _t(){return!!t("enable-feature:objectAndLayerId-rendering")}function Et({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(Je`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):e.add(Je`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}class Ot extends yt{constructor(e,t){super(e,"vec3",Qe.Draw,((o,i,n,r)=>o.setUniform3fv(e,t(i,n,r))))}}class Rt extends yt{constructor(e,t){super(e,"vec3",Qe.Pass,((o,i,n)=>o.setUniform3fv(e,t(i,n))))}}class It extends yt{constructor(e,t){super(e,"float",Qe.Pass,((o,i,n)=>o.setUniform1f(e,t(i,n))))}}class Lt extends yt{constructor(e,t){super(e,"mat3",Qe.Draw,((o,i,n)=>o.setUniformMatrix3fv(e,t(i,n))))}}class Ft extends yt{constructor(e,t){super(e,"mat3",Qe.Pass,((o,i,n)=>o.setUniformMatrix3fv(e,t(i,n))))}}class zt extends yt{constructor(e,t){super(e,"mat4",Qe.Pass,((o,i,n)=>o.setUniformMatrix4fv(e,t(i,n))))}}let Gt=class extends r{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};o([i()],Gt.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),o([i()],Gt.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),o([i()],Gt.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),o([i()],Gt.prototype,"DECONFLICTOR_SHOW_GRID",void 0),o([i()],Gt.prototype,"LABELS_SHOW_BORDER",void 0),o([i()],Gt.prototype,"TEXT_SHOW_BASELINE",void 0),o([i()],Gt.prototype,"TEXT_SHOW_BORDER",void 0),o([i()],Gt.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),o([i()],Gt.prototype,"OVERLAY_SHOW_CENTER",void 0),o([i()],Gt.prototype,"SHOW_POI",void 0),o([i()],Gt.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),o([i()],Gt.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),o([i()],Gt.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),o([i()],Gt.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),o([i()],Gt.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),o([i()],Gt.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),o([i()],Gt.prototype,"I3S_TREE_SHOW_TILES",void 0),o([i()],Gt.prototype,"I3S_SHOW_MODIFICATIONS",void 0),o([i()],Gt.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),o([i()],Gt.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),o([i()],Gt.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),o([i()],Gt.prototype,"LINE_WIREFRAMES",void 0),Gt=o([n("esri.views.3d.support.debugFlags")],Gt);const Nt=new Gt;var Dt;!function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_MATERIAL_WITHOUT_NORMALS=3]="OPAQUE_MATERIAL_WITHOUT_NORMALS",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_MATERIAL_WITHOUT_NORMALS=5]="TRANSPARENT_MATERIAL_WITHOUT_NORMALS",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_MATERIAL_WITHOUT_DEPTH=7]="TRANSPARENT_MATERIAL_WITHOUT_DEPTH",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.HUD_MATERIAL=12]="HUD_MATERIAL",e[e.LABEL_MATERIAL=13]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=14]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=15]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=16]="DRAPED_MATERIAL",e[e.DRAPED_WATER=17]="DRAPED_WATER",e[e.VOXEL=18]="VOXEL",e[e.MAX_SLOTS=19]="MAX_SLOTS"}(Dt||(Dt={}));function Pt(e){e.attributes.add(Ke.POSITION,"vec3"),e.vertex.code.add(Je`vec3 positionModel() { return position; }`)}function Bt(e,t){e.include(Pt);const o=e.vertex;o.include(Et,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),o.uniforms.add(new Rt("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new Rt("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new Ft("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new zt("transformProjFromView",(e=>e.transformProjFromView)),new Lt("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new Ot("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new Ot("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),o.code.add(Je`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),o.code.add(Je`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?Je`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:Je`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new Rt("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),o.code.add(Je`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(Je`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class Ht extends Xe{constructor(){super(...arguments),this.transformWorldFromViewTH=a(),this.transformWorldFromViewTL=a(),this.transformViewFromCameraRelativeRS=ut(),this.transformProjFromView=vt()}}class jt extends Xe{constructor(){super(...arguments),this.transformWorldFromModelRS=ut(),this.transformWorldFromModelTH=a(),this.transformWorldFromModelTL=a()}}function Vt(e,t){switch(t.normalType){case je.Attribute:case je.Compressed:e.include(Ve,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new Lt("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new Ft("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(Je`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case je.ScreenDerivative:e.vertex.code.add(Je`void forwardNormal() {}`);break;default:case je.COUNT:}}class Ut extends Ht{constructor(){super(...arguments),this.transformNormalViewFromGlobal=ut()}}class Wt extends jt{constructor(){super(...arguments),this.transformNormalGlobalFromModel=ut(),this.toMapSpace=s()}}const $t=new Map([[Ke.POSITION,0],[Ke.NORMAL,1],[Ke.NORMALCOMPRESSED,1],[Ke.UV0,2],[Ke.COLOR,3],[Ke.COLORFEATUREATTRIBUTE,3],[Ke.SIZE,4],[Ke.TANGENT,4],[Ke.CENTEROFFSETANDDISTANCE,5],[Ke.SYMBOLCOLOR,5],[Ke.FEATUREATTRIBUTE,6],[Ke.INSTANCEFEATUREATTRIBUTE,6],[Ke.INSTANCECOLOR,7],[Ke.OBJECTANDLAYERIDCOLOR,7],[Ke.INSTANCEOBJECTANDLAYERIDCOLOR,7],[Ke.ROTATION,8],[Ke.INSTANCEMODEL,8],[Ke.INSTANCEMODELNORMAL,12],[Ke.INSTANCEMODELORIGINHI,11],[Ke.INSTANCEMODELORIGINLO,15]]);class kt{constructor(){this.id=c()}}class qt{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=a(),this._tmpMbs=et(),this._tmpObb=new mt,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=l(e)}applyToVertex(e,t,o){const i=h(Zt,e,t,o),n=h(Kt,e,t,o+this.componentLocalOriginLength),r=this._totalOffset/l(n);return u(this._tmpVertex,i,n,r),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,o=e[0],i=e[1],n=e[2]+t,r=e[3],a=e[4],s=e[5]+t,c=Math.abs(o),l=Math.abs(i),h=Math.abs(n),u=Math.abs(r),d=Math.abs(a),v=Math.abs(s),f=.5*(1+Math.sign(o*r))*Math.min(c,u),m=.5*(1+Math.sign(i*a))*Math.min(l,d),p=.5*(1+Math.sign(n*s))*Math.min(h,v),g=Math.max(c,u),x=Math.max(l,d),b=Math.max(h,v),w=Math.sqrt(f*f+m*m+p*p),M=Math.sign(c+o),C=Math.sign(l+i),T=Math.sign(h+n),S=Math.sign(u+r),y=Math.sign(d+a),A=Math.sign(v+s),_=this._totalOffset;if(w<_)return e[0]-=(1-M)*_,e[1]-=(1-C)*_,e[2]-=(1-T)*_,e[3]+=S*_,e[4]+=y*_,e[5]+=A*_,e;const E=_/Math.sqrt(g*g+x*x+b*b),O=_/w,R=O-E,I=-R;return e[0]+=o*(M*I+O),e[1]+=i*(C*I+O),e[2]+=n*(T*I+O),e[3]+=r*(S*R+E),e[4]+=a*(y*R+E),e[5]+=s*(A*R+E),e}applyToMbs(e){const t=l(tt(e)),o=this._totalOffset/t;return u(tt(this._tmpMbs),tt(e),tt(e),o),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return pt(e,this._totalOffset,this._totalOffset,d.Global,this._tmpObb),this._tmpObb}}class Yt{constructor(e=0){this.offset=e,this.sphere=et(),this.tmpVertex=a()}applyToVertex(e,t,o){const i=this.objectTransform.transform,n=h(Zt,e,t,o),r=v(n,n,i),a=this.offset/l(r);u(r,r,r,a);const s=this.objectTransform.inverse;return v(this.tmpVertex,r,s),this.tmpVertex}applyToMinMax(e,t){const o=this.offset/l(e);u(e,e,e,o);const i=this.offset/l(t);u(t,t,t,i)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const o=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*o,e[4]+=e[4]*o,e[5]+=e[5]*o,e}applyToBoundingSphere(e){const t=l(tt(e)),o=this.offset/t;return u(tt(this.sphere),tt(e),tt(e),o),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}}const Jt=new Yt;function Xt(e){return null!=e?(Jt.offset=e,Jt):null}new qt;const Zt=a(),Kt=a();function Qt(e){return Math.abs(e*e*e)}function eo(e,t,o){const i=o.parameters;return ao.scale=Math.min(i.divisor/(t-i.offset),1),ao.factor=Qt(e),ao}function to(e,t){return f(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function oo(e,t,o){const i=eo(e,t,o);return i.minScaleFactor=0,to(1,i)}function io(e,t,o,i){i.scale=oo(e,t,o),i.factor=0,i.minScaleFactor=o.minScaleFactor}function no(e,t,o=[0,0]){const i=Math.min(Math.max(t.scale,t.minScaleFactor),1);return o[0]=e[0]*i,o[1]=e[1]*i,o}function ro(e,t,o,i){return to(e,eo(t,o,i))}const ao={scale:0,factor:0,minScaleFactor:0};function so(e,t,o,i,n){let r=(o.screenLength||0)*e.pixelRatio;null!=n&&(r=ro(r,i,t,n));const a=r*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return m(a*t,o.minWorldLength||0,null!=o.maxWorldLength?o.maxWorldLength:1/0)}function co(e,t){let o=!1;for(const i in t){const n=t[i];void 0!==n&&(Array.isArray(n)?Array.isArray(e[i])&&p(n,e[i])||(e[i]=n.slice(),o=!0):e[i]!==n&&(o=!0,e[i]=n))}return o}const lo={multiply:1,ignore:2,replace:3,tint:4};class ho{constructor(e,t){this._module=e,this._load=t}get(){return this._module}async reload(){return this._module=await this._load(),this._module}}class uo{constructor(e,t,o){this._context=e,this._locations=o,this._textures=new Map,this._freeTextureUnits=new g({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),o),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=x()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform2iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let o=this._textures.get(e);return null==o?(o=this._allocTextureUnit(t),this._textures.set(e,o)):o.texture=t,this._context.useProgram(this),this.setUniform1i(e,o.unit),this._context.bindTexture(t,o.unit),o.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}class vo{constructor(e,t,o,i,n=$t){this.release=i,this.locations=n,this.primitiveType=b.TRIANGLES,this.key=t.key,this._program=new uo(e.rctx,o.get().build(t),n),this._pipeline=this.initializePipeline(t),this.reload=async i=>{if(i&&await o.reload(),!this.key.equals(t.key))throw new Error("Configuration was changed after construction, cannot reload shader");w(this._program),this._program=new uo(e.rctx,o.get().build(t),n),this._pipeline=this.initializePipeline(t)}}destroy(){this._program=w(this._program),this._pipeline=null}get program(){return this._program}get compiled(){return this.program.compiled}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}getPipeline(e,t){return this._pipeline}initializePipeline(e){return ot({blending:it,colorWrite:nt})}}var fo;!function(e){e[e.Layer=0]="Layer",e[e.Object=1]="Object",e[e.Mesh=2]="Mesh",e[e.Line=3]="Line",e[e.Point=4]="Point",e[e.Material=5]="Material",e[e.Texture=6]="Texture",e[e.COUNT=7]="COUNT"}(fo||(fo={}));class mo extends kt{constructor(e,t){super(),this.type=fo.Material,this.supportsEdges=!1,this._renderPriority=0,this.vertexAttributeLocations=$t,this._pp0=M(0,0,1),this._pp1=M(0,0,0),this._parameters=new t,co(this._parameters,e),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){co(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this._parametersChanged())}validateParameters(e){}shouldRender(e){return this.visible&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bind.decorations)&&!!(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this._parametersChanged())}_parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.visible&&this.parameters.renderOccluded===e}get hasEmissions(){return!1}intersectDraped(e,t,o,i,n,r){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,o,this._pp0,this._pp1,n)}}var po;!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(po||(po={}));var go;!function(e){e[e.NONE=0]="NONE",e[e.ColorAlpha=1]="ColorAlpha",e[e.FrontFace=2]="FrontFace",e[e.COUNT=3]="COUNT"}(go||(go={}));const xo=st(S.ONE,S.ZERO,S.ONE,S.ONE_MINUS_SRC_ALPHA);function bo(e){return e===go.FrontFace?null:xo}function wo(e){switch(e){case go.NONE:return rt;case go.ColorAlpha:return xo;case go.FrontFace:case go.COUNT:return null}}function Mo(e){if(e.draped)return null;switch(e.oitPass){case go.NONE:case go.FrontFace:return e.writeDepth?at:null;case go.ColorAlpha:case go.COUNT:return null}}const Co=5e5,To={factor:-1,units:-2};function So(e){return e?To:null}function yo(e,t=C.LESS){return e===go.NONE||e===go.FrontFace?t:C.LEQUAL}function Ao(e,t){const o=Ue(t);return e===go.ColorAlpha?o?{buffers:[T.COLOR_ATTACHMENT0,T.COLOR_ATTACHMENT1,T.COLOR_ATTACHMENT2]}:{buffers:[T.COLOR_ATTACHMENT0,T.COLOR_ATTACHMENT1]}:o?{buffers:[T.COLOR_ATTACHMENT0,T.COLOR_ATTACHMENT1]}:null}const _o={mask:255},Eo={function:{func:C.ALWAYS,ref:Ie.OutlineVisualElementMask,mask:Ie.OutlineVisualElementMask},operation:{fail:y.KEEP,zFail:y.KEEP,zPass:y.ZERO}},Oo={function:{func:C.ALWAYS,ref:Ie.OutlineVisualElementMask,mask:Ie.OutlineVisualElementMask},operation:{fail:y.KEEP,zFail:y.KEEP,zPass:y.REPLACE}};function Ro({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:o,roughnessFactor:i,emissiveTexture:n,emissiveFactor:r,occlusionTexture:a}){return null==e&&null==t&&null==n&&(null==r||_(r,E))&&null==a&&(null==i||1===i)&&(null==o||1===o)}const Io=A(1,1,.5),Lo=A(0,.6,.2),Fo=A(0,1,.2);class zo extends yt{constructor(e,t){super(e,"vec2",Qe.Pass,((o,i,n)=>o.setUniform2fv(e,t(i,n))))}}function Go(e){e.varyings.add("linearDepth","float")}function No(e){e.vertex.uniforms.add(new zo("nearFar",((e,t)=>t.camera.nearFar)))}function Do(e){e.vertex.code.add(Je`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function Po(e,t){const{vertex:o}=e;switch(t.output){case We.Color:case We.ColorEmission:if(t.receiveShadows)return Go(e),void o.code.add(Je`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case We.Shadow:case We.ShadowHighlight:case We.ShadowExcludeHighlight:case We.ViewshedShadow:return e.include(Bt,t),Go(e),No(e),Do(e),void o.code.add(Je`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}o.code.add(Je`void forwardLinearDepth() {}`)}function Bo(e){e.vertex.code.add(Je`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Ho(e,t){jo(e,t,new Ot("slicePlaneOrigin",((e,o)=>$o(t,e,o))),new Ot("slicePlaneBasis1",((e,o)=>ko(t,e,o,o.slicePlane?.basis1))),new Ot("slicePlaneBasis2",((e,o)=>ko(t,e,o,o.slicePlane?.basis2))))}function jo(e,t,...o){if(!t.hasSlicePlane){const o=Je`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(o),void e.fragment.code.add(o)}const i=Je`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,n=Je`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,r=t.hasSliceHighlight?Je`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:Je`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...o).code.add(i),e.fragment.uniforms.add(...o).code.add(i),e.fragment.code.add(r)}function Vo(e,t,o){return e.instancedDoublePrecision?h(qo,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function Uo(e,t){return null!=e?O(Yo,t.origin,e):t.origin}function Wo(e,t,o){return e.hasSliceTranslatedView?null!=t?R(Xo,o.camera.viewMatrix,t):o.camera.viewMatrix:null}function $o(e,t,o){if(null==o.slicePlane)return E;const i=Vo(e,t,o),n=Uo(i,o.slicePlane),r=Wo(e,i,o);return null!=r?v(Yo,n,r):n}function ko(e,t,o,i){if(null==i||null==o.slicePlane)return E;const n=Vo(e,t,o),r=Uo(n,o.slicePlane),a=Wo(e,n,o);return null!=a?(I(Jo,i,r),v(Yo,r,a),v(Jo,Jo,a),O(Jo,Jo,Yo)):i}const qo=a(),Yo=a(),Jo=a(),Xo=vt();function Zo(e){Do(e),e.vertex.code.add(Je`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(Je`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}class Ko extends yt{constructor(e,t){super(e,"mat4",Qe.Draw,((o,i,n)=>o.setUniformMatrix4fv(e,t(i,n))))}}function Qo(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",E):e.uniforms.add(new Ot("cameraPosition",((e,t)=>h(oi,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function ei(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new zt("proj",((e,t)=>t.camera.projectionMatrix)),new Ko("view",((e,t)=>R(ti,t.camera.viewMatrix,e.origin))),new Ot("localOrigin",(e=>e.origin)));const o=e=>h(oi,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new zt("proj",((e,t)=>t.camera.projectionMatrix)),new zt("view",((e,t)=>R(ti,t.camera.viewMatrix,o(t)))),new Rt("localOrigin",((e,t)=>o(t))))}const ti=vt(),oi=a();function ii(e){e.uniforms.add(new zt("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}function ni(e){e.uniforms.add(new It("pixelRatio",((e,t)=>t.camera.pixelRatio/t.overlayStretch)))}const ri=ut();function ai(e,t){const o=t.hasModelTransformation,i=t.instancedDoublePrecision;o&&(e.vertex.uniforms.add(new zt("model",(e=>e.modelTransformation??ft))),e.vertex.uniforms.add(new Ft("normalLocalOriginFromModel",(e=>(L(ri,e.modelTransformation??ft),ri))))),t.instanced&&i&&(e.attributes.add(Ke.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(Ke.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(Ke.INSTANCEMODEL,"mat3"),e.attributes.add(Ke.INSTANCEMODELNORMAL,"mat3"));const n=e.vertex;i&&(n.include(Et,t),n.uniforms.add(new Ot("viewOriginHi",((e,t)=>ct(h(si,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),si))),new Ot("viewOriginLo",((e,t)=>lt(h(si,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),si))))),n.code.add(Je`
    vec3 getVertexInLocalOriginSpace() {
      return ${o?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?Je`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),n.code.add(Je`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${o?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===We.Normal&&(ii(n),n.code.add(Je`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${o?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&n.code.add(Je`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${o?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const si=a();class ci extends yt{constructor(e,t){super(e,"int",Qe.Pass,((o,i,n)=>o.setUniform1i(e,t(i,n))))}}function li(e,t){t.hasSymbolColors?(e.include(St),e.attributes.add(Ke.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(Je`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new ci("colorMixMode",(e=>lo[e.colorMixMode]))),e.vertex.code.add(Je`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}var hi;function ui(e,t){switch(t.textureCoordinateType){case hi.Default:return e.attributes.add(Ke.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(Je`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case hi.Compressed:return e.attributes.add(Ke.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(Je`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case hi.Atlas:return e.attributes.add(Ke.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(Ke.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(Je`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:case hi.None:return void e.vertex.code.add(Je`void forwardTextureCoordinates() {}`);case hi.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(hi||(hi={}));function di(e,t){t.hasVertexColors?(e.attributes.add(Ke.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(Je`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(Je`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(Je`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function vi(e){e.vertex.code.add(Je`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(Je`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(Je`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(Je`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(Je`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(Je`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function fi(e){e.uniforms.add(new Rt("screenSizePerspective",(e=>pi(e.screenSizePerspective))))}function mi(e){e.uniforms.add(new Rt("screenSizePerspectiveAlignment",(e=>pi(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function pi(e){return h(gi,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const gi=a();class xi extends yt{constructor(e,t){super(e,"vec4",Qe.Pass,((o,i,n)=>o.setUniform4fv(e,t(i,n))))}}function bi(e,t){const o=e.vertex;t.hasVerticalOffset?(Mi(o),t.hasScreenSizePerspective&&(e.include(vi),mi(o),Qo(e.vertex,t)),o.code.add(Je`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?Je`vec3 worldNormal = normalize(worldPos + localOrigin);`:Je`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?Je`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:Je`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):o.code.add(Je`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const wi=s();function Mi(e){e.uniforms.add(new xi("verticalOffset",((e,t)=>{const{minWorldLength:o,maxWorldLength:i,screenLength:n}=e.verticalOffset,r=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),a=t.camera.pixelRatio||1;return F(wi,n*a,r,o,i)})))}function Ci(e,t){if(t.output!==We.ObjectAndLayerIdColor)return e.vertex.code.add(Je`void forwardObjectAndLayerIdColor() {}`),void e.fragment.code.add(Je`void outputObjectAndLayerIdColor() {}`);const o=t.objectAndLayerIdColorInstanced;e.varyings.add("objectAndLayerIdColorVarying","vec4"),e.attributes.add(o?Ke.INSTANCEOBJECTANDLAYERIDCOLOR:Ke.OBJECTANDLAYERIDCOLOR,"vec4"),e.vertex.code.add(Je`
    void forwardObjectAndLayerIdColor() {
      objectAndLayerIdColorVarying = ${o?"instanceObjectAndLayerIdColor":"objectAndLayerIdColor"} * 0.003921568627451;
    }`),e.fragment.code.add(Je`void outputObjectAndLayerIdColor() {
fragColor = objectAndLayerIdColorVarying;
}`)}function Ti(e){e.code.add(Je`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function Si(e,t){switch(t.output){case We.Shadow:case We.ShadowHighlight:case We.ShadowExcludeHighlight:case We.ViewshedShadow:e.fragment.include(Ti),e.fragment.code.add(Je`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}class yi extends yt{constructor(e,t){super(e,"ivec2",Qe.Pass,((o,i,n)=>o.setUniform2iv(e,t(i,n))))}}class Ai extends yt{constructor(e,t){super(e,"sampler2D",Qe.Pass,((o,i,n)=>o.bindTexture(e,t(i,n))))}}function _i(e,t){const{fragment:o}=e;t.output===We.Highlight?(o.uniforms.add(new Ai("depthTexture",((e,t)=>t.mainDepth)),new Ai("highlightTexture",((e,t)=>t.highlightMixTexture)),new ci("highlightLevel",((e,t)=>t.highlightLevel)),new yi("highlightMixOrigin",((e,t)=>t.highlightMixOrigin))),e.outputs.add("fragHighlight","vec2",0),o.code.add(Je`vec2 getAccumulatedHighlight() {
return texelFetch(highlightTexture, ivec2(gl_FragCoord.xy) - highlightMixOrigin, 0).rg;
}
void outputHighlight(bool occluded) {
if (highlightLevel == 0) {
uint bits = occluded ? 3u : 1u;
fragHighlight = vec2(float(bits) / 255.0, 0.0);
} else {
int ll = (highlightLevel & 3) << 1;
int li = (highlightLevel >> 2) & 3;
uint bits;
if (occluded) {
bits = 3u << ll;
} else {
bits = 1u << ll;
}
vec2 combinedHighlight = getAccumulatedHighlight();
uint accumulatedI = uint(combinedHighlight[li] * 255.0);
combinedHighlight[li] = float(bits | accumulatedI) / 255.0;
fragHighlight = combinedHighlight;
}
}
bool isHighlightOccluded() {
float sceneDepth = texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x;
return gl_FragCoord.z > sceneDepth + 5e-7;
}
void calculateOcclusionAndOutputHighlight() {
outputHighlight(isHighlightOccluded());
}`),t.canHaveOverlay&&(o.constants.add("occlusionAndMask","int",85),o.code.add(Je`void outputAllHighlights(vec2 highlightToAdd) {
if (highlightToAdd == vec2(0.0)) { discard; }
int occludedOrMask = isHighlightOccluded() ? 0xaa : 0;
ivec2 added = ivec2(highlightToAdd * 255.0);
ivec2 masked = (added & ivec2(occlusionAndMask)) | (ivec2(occludedOrMask) & (added<<1));
fragHighlight = vec2(masked) / 255.0;
}`))):o.code.add(Je`void calculateOcclusionAndOutputHighlight() {}`)}class Ei extends yt{constructor(e,t,o){super(e,"vec4",Qe.Pass,((o,i,n)=>o.setUniform4fv(e,t(i,n))),o)}}class Oi extends yt{constructor(e,t,o){super(e,"float",Qe.Pass,((o,i,n)=>o.setUniform1fv(e,t(i,n))),o)}}var Ri,Ii;!function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"}(Ri||(Ri={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(Ii||(Ii={}));function Li(e,t,o){if(!t.vvSize)return h(e,1,1,1),e;for(let i=0;i<3;++i){const n=t.vvSize.offset[i]+o[0]*t.vvSize.factor[i];e[i]=m(n,t.vvSize.minSize[i],t.vvSize.maxSize[i])}return e}const Fi=8;function zi(e,t){const{vertex:o,attributes:i}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&i.add(Ke.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(o.uniforms.add(new Rt("vvSizeMinSize",(e=>e.vvSize.minSize))),o.uniforms.add(new Rt("vvSizeMaxSize",(e=>e.vvSize.maxSize))),o.uniforms.add(new Rt("vvSizeOffset",(e=>e.vvSize.offset))),o.uniforms.add(new Rt("vvSizeFactor",(e=>e.vvSize.factor))),o.uniforms.add(new Ft("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),o.uniforms.add(new Rt("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),o.code.add(Je`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),o.code.add(Je`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?Je`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):o.code.add(Je`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(o.constants.add("vvColorNumber","int",Fi),o.uniforms.add(new Oi("vvColorValues",(e=>e.vvColor.values),Fi),new Ei("vvColorColors",(e=>e.vvColor.colors),Fi)),o.code.add(Je`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?Je`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):o.code.add(Je`vec4 vvColor() { return vec4(1.0); }`)}function Gi(e,t){Ni(e,t,new It("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function Ni(e,t,o){const i=e.fragment;switch(t.alphaDiscardMode){case Le.Blend:e.fragment.code.add(Je`
        #define discardOrAdjustAlpha(color) { if (color.a < ${Je.float(z)}) { discard; } }
      `);break;case Le.Opaque:i.code.add(Je`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case Le.Mask:i.uniforms.add(o).code.add(Je`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case Le.MaskBlend:i.uniforms.add(o).code.add(Je`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Di(e,t){const{vertex:o,fragment:i}=e,n=t.hasColorTexture&&t.alphaDiscardMode!==Le.Opaque,{output:r,normalType:a,hasColorTextureTransform:s}=t;switch(r){case We.Depth:ei(o,t),e.include(Zo,t),e.include(Ho,t),e.include(ui,t),n&&i.uniforms.add(new Ai("tex",(e=>e.texture))),o.main.add(Je`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(Gi,t),i.main.add(Je`
          discardBySlice(vpos);
          ${Ze(n,Je`vec4 texColor = texture(tex, ${s?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}`);break;case We.Shadow:case We.ShadowHighlight:case We.ShadowExcludeHighlight:case We.ViewshedShadow:case We.ObjectAndLayerIdColor:ei(o,t),e.include(Zo,t),e.include(ui,t),e.include(zi,t),e.include(Si,t),e.include(Ho,t),e.include(Ci,t),No(e),e.varyings.add("depth","float"),n&&i.uniforms.add(new Ai("tex",(e=>e.texture))),o.main.add(Je`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),e.include(Gi,t),i.main.add(Je`
          discardBySlice(vpos);
          ${Ze(n,Je`vec4 texColor = texture(tex, ${s?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          ${r===We.ObjectAndLayerIdColor?Je`outputObjectAndLayerIdColor();`:Je`outputDepth(depth);`}`);break;case We.Normal:{ei(o,t),e.include(Zo,t),e.include(Ve,t),e.include(Vt,t),e.include(ui,t),e.include(zi,t),n&&i.uniforms.add(new Ai("tex",(e=>e.texture))),a===je.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const r=a===je.Attribute||a===je.Compressed;o.main.add(Je`
          vpos = getVertexInLocalOriginSpace();
          ${r?Je`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:Je`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
          vpos = subtractOrigin(vpos);
          vpos = addVerticalOffset(vpos, localOrigin);
          gl_Position = transformPosition(proj, view, vpos);
          forwardTextureCoordinates();`),e.include(Ho,t),e.include(Gi,t),i.main.add(Je`
          discardBySlice(vpos);
          ${Ze(n,Je`vec4 texColor = texture(tex, ${s?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}

          ${a===je.ScreenDerivative?Je`vec3 normal = screenDerivativeNormal(vPositionView);`:Je`vec3 normal = normalize(vNormalWorld);
                     if (gl_FrontFacing == false){
                       normal = -normal;
                     }`}
          fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break}case We.Highlight:ei(o,t),e.include(Zo,t),e.include(ui,t),e.include(zi,t),n&&i.uniforms.add(new Ai("tex",(e=>e.texture))),o.main.add(Je`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),e.include(Ho,t),e.include(Gi,t),e.include(_i,t),i.main.add(Je`
          discardBySlice(vpos);
          ${Ze(n,Je`vec4 texColor = texture(tex, ${s?"colorUV":"vuv0"});
                 discardOrAdjustAlpha(texColor);`)}
          calculateOcclusionAndOutputHighlight();`)}}function Pi(e){e.fragment.code.add(Je`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function Bi(e,t){const{textureCoordinateType:o}=t;if(o===hi.None||o===hi.COUNT)return;e.include(ui,t);const i=o===hi.Atlas;i&&e.include(Pi),e.fragment.code.add(Je`
    vec4 textureLookup(sampler2D tex, vec2 uv) {
      return ${i?"textureAtlasLookup(tex, uv, vuvRegion)":"texture(tex, uv)"};
    }
  `)}function Hi(e,t){const o=e.fragment;switch(o.code.add(Je`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case ji.None:o.code.add(Je`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case ji.View:o.code.add(Je`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case ji.WindingOrder:o.code.add(Je`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:case ji.COUNT:}}var ji;!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(ji||(ji={}));function Vi(e,t){const o=e.fragment;t.hasVertexTangents?(e.attributes.add(Ke.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===ji.WindingOrder?o.code.add(Je`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(Je`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(Je`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),t.textureCoordinateType!==hi.None&&(e.include(Bi,t),o.uniforms.add(t.bindType===Qe.Pass?new Ai("normalTexture",(e=>e.textureNormal)):new At("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(o.uniforms.add(new zo("scale",(e=>e.scale??G))),o.uniforms.add(new Ft("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??dt)))),o.code.add(Je`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&o.code.add(Je`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),o.code.add(Je`return tangentSpace * rawNormal;
}`))}var Ui,Wi;!function(e){e.OPAQUE="opaque-color",e.TRANSPARENT="transparent-color",e.COMPOSITE="composite-color",e.FINAL="final-color"}(Ui||(Ui={})),function(e){e.SSAO="ssao",e.LASERLINES="laserline-color",e.ANTIALIASING="aa-color",e.HIGHLIGHTS="highlight-color",e.MAGNIFIER="magnifier-color",e.OCCLUDED="occluded-color",e.VIEWSHED="viewshed-color",e.OPAQUE_ENVIRONMENT="opaque-environment-color",e.TRANSPARENT_ENVIRONMENT="transparent-environment-color"}(Wi||(Wi={}));var $i,ki;!function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"}($i||($i={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(ki||(ki={}));let qi=class extends r{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces=Ui.COMPOSITE,this.requireGeometryDepth=!1,this._dirty=!0}initialize(){this.addHandles([N((()=>this.view.ready),(e=>{e&&this.view._stage?.renderer.addRenderNode(this)}),D)])}destroy(){this.view._stage?.renderer?.removeRenderNode(this)}precompile(){}render(){throw new P("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){const e=this._frameBuffer?.getTexture()?.descriptor,t=this.view._stage.renderer.fboCache.acquire(e?.width??640,e?.height??480,this.produces);return t.fbo?.initializeAndBind(),t}bindRenderTarget(){return this._frameBuffer?.fbo?.initializeAndBind(),this._frameBuffer}requestRender(e){e===Fe.UPDATE&&this.view._stage?.renderView.requestRender(e),this._dirty=!0}resetWebGLState(){this.renderingContext.resetState(),this.renderingContext.bindFramebuffer(this._frameBuffer?.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this.renderContext.bind}get renderingContext(){return this.view._stage.renderView.renderingContext}get renderContext(){return this.view._stage?.renderer.renderContext}updateAnimation(e){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e){this._frameBuffer=e.find((({name:e})=>e===this.produces));try{return this.render(e)}finally{this._frameBuffer=null}}};o([i({constructOnly:!0})],qi.prototype,"view",void 0),o([i({constructOnly:!0})],qi.prototype,"consumes",void 0),o([i()],qi.prototype,"produces",void 0),qi=o([n("esri.views.3d.webgl.RenderNode")],qi);const Yi=qi;const Ji=3e5,Xi=5e5;function Zi(e,t=!0){e.attributes.add(Ke.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.main.add(Je`
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?Je`uv = position * 0.5 + vec2(0.5);`:""}
  `)}function Ki(e){e.uniforms.add(new zo("zProjectionMap",((e,t)=>Qi(t.camera)))),e.code.add(Je`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add(Je`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add(Je`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function Qi(e){const t=e.projectionMatrix;return B(en,t[14],t[10])}const en=H();class tn extends yt{constructor(e,t){super(e,"vec2",Qe.Draw,((o,i,n,r)=>o.setUniform2fv(e,t(i,n,r))))}}const on=()=>j.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class nn{constructor(){this._includedModules=new Map}include(e,t){this._includedModules.has(e)?this._includedModules.get(e):(this._includedModules.set(e,t),e(this.builder,t))}}class rn extends nn{constructor(){super(...arguments),this.vertex=new ln,this.fragment=new ln,this.attributes=new hn,this.varyings=new un,this.extensions=new dn,this.outputs=new vn}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),o=this.attributes.generateSource(e),i=this.varyings.generateSource(e),n="vertex"===e?this.vertex:this.fragment,r=n.uniforms.generateSource(),a=n.code.generateSource(),s=n.main.generateSource(),c="vertex"===e?pn:mn,l=n.constants.generateSource(),h=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${c}\n\n${l.join("\n")}\n\n${r.join("\n")}\n\n${o.join("\n")}\n\n${i.join("\n")}\n\n${h.join("\n")}\n\n${a.join("\n")}\n\n${s.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const o=e.bind[Qe.Pass];o&&t.set(e.name,o)})),this.fragment.uniforms.entries.forEach((e=>{const o=e.bind[Qe.Pass];o&&t.set(e.name,o)}));const o=Array.from(t.values()),i=o.length;return(t,n)=>{for(let r=0;r<i;++r)o[r](e,t,n)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const o=e.bind[Qe.Draw];o&&t.set(e.name,o)})),this.fragment.uniforms.entries.forEach((e=>{const o=e.bind[Qe.Draw];o&&t.set(e.name,o)}));const o=Array.from(t.values()),i=o.length;return(t,n,r)=>{for(let a=0;a<i;++a)o[a](e,r,t,n)}}}class an{constructor(e){this._stage=e,this._entries=new Map}add(...e){for(const t of e)this._add(t);return this._stage}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new P(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else on().error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class sn{constructor(e){this._stage=e,this._bodies=new Array}add(e){return this._bodies.push(e),this._stage}generateSource(){if(this._bodies.length>0)return[`void main() {\n ${this._bodies.join("\n")||""} \n}`];throw new P("Shader does not contain main function body.")}}class cn{constructor(e){this._stage=e,this._entries=new Array}add(e){return this._entries.push(e),this._stage}generateSource(){return this._entries}}class ln extends nn{constructor(){super(...arguments),this.uniforms=new an(this),this.main=new sn(this),this.code=new cn(this),this.constants=new fn(this)}get builder(){return this}}class hn{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class un{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&Pe(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((o,i)=>t.push("vertex"===e?`out ${o} ${i};`:`in ${o} ${i};`))),t}}class dn{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?dn.ALLOWLIST_VERTEX:dn.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}dn.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],dn.ALLOWLIST_VERTEX=[];class vn{constructor(){this._entries=new Map}add(e,t,o=0){const i=this._entries.get(o);i?Pe(i.name===e&&i.type===t,`Fragment shader output location ${o} occupied`):this._entries.set(o,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:vn.DEFAULT_NAME,type:vn.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,o)=>t.push(`layout(location = ${o}) out ${e.type} ${e.name};`))),t}}vn.DEFAULT_TYPE="vec4",vn.DEFAULT_NAME="fragColor";class fn{constructor(e){this._stage=e,this._entries=new Set}add(e,t,o){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=fn._numberToFloatStr(o);break;case"int":i=fn._numberToIntStr(o);break;case"bool":i=o.toString();break;case"vec2":i=`vec2(${fn._numberToFloatStr(o[0])},                            ${fn._numberToFloatStr(o[1])})`;break;case"vec3":i=`vec3(${fn._numberToFloatStr(o[0])},                            ${fn._numberToFloatStr(o[1])},                            ${fn._numberToFloatStr(o[2])})`;break;case"vec4":i=`vec4(${fn._numberToFloatStr(o[0])},                            ${fn._numberToFloatStr(o[1])},                            ${fn._numberToFloatStr(o[2])},                            ${fn._numberToFloatStr(o[3])})`;break;case"ivec2":i=`ivec2(${fn._numberToIntStr(o[0])},                             ${fn._numberToIntStr(o[1])})`;break;case"ivec3":i=`ivec3(${fn._numberToIntStr(o[0])},                             ${fn._numberToIntStr(o[1])},                             ${fn._numberToIntStr(o[2])})`;break;case"ivec4":i=`ivec4(${fn._numberToIntStr(o[0])},                             ${fn._numberToIntStr(o[1])},                             ${fn._numberToIntStr(o[2])},                             ${fn._numberToIntStr(o[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(o,(e=>fn._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this._stage}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const mn="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",pn="precision highp float;\nprecision highp sampler2D;";const gn=4;function xn(){const e=new rn,t=e.fragment;e.include(Zi);const o=(gn+1)/2,i=1/(2*o*o);return t.include(Ki),t.uniforms.add(new Ai("depthMap",(e=>e.depthTexture)),new At("tex",(e=>e.colorTexture)),new tn("blurSize",(e=>e.blurSize)),new It("projScale",((e,t)=>{const o=t.camera.distance;return o>5e4?Math.max(0,e.projScale-(o-5e4)):e.projScale}))),t.code.add(Je`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${Je.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.main.add(Je`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${Je.int(gn)}; r <= ${Je.int(gn)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),e}const bn=Object.freeze(Object.defineProperty({__proto__:null,build:xn},Symbol.toStringTag,{value:"Module"}));class wn extends vo{constructor(e,t,o){super(e,t,new ho(bn,(()=>import("./p-43de0b09.js"))),o)}initializePipeline(){return ot({colorWrite:nt})}}const Mn="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";class Cn extends Xe{constructor(){super(...arguments),this.projScale=1}}class Tn extends Cn{constructor(){super(...arguments),this.intensity=1}}class Sn extends Xe{}class yn extends Sn{constructor(){super(...arguments),this.blurSize=H()}}function An(e){e.fragment.uniforms.add(new xi("projInfo",((e,t)=>_n(t.camera)))),e.fragment.uniforms.add(new zo("zScale",((e,t)=>On(t.camera)))),e.fragment.code.add(Je`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function _n(e){const t=e.projectionMatrix;return 0===t[11]?F(En,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):F(En,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}const En=s();function On(e){return 0===e.projectionMatrix[11]?B(Rn,0,1):B(Rn,1,0)}const Rn=H();const In=16;function Ln(){const e=new rn,t=e.fragment;return e.include(Zi),e.include(An),t.include(Ki),t.uniforms.add(new It("radius",((e,t)=>Fn(t.camera)))).code.add(Je`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),t.code.add(Je`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new Ai("normalMap",(e=>e.normalTexture)),new Ai("depthMap",(e=>e.depthTexture)),new It("projScale",(e=>e.projScale)),new Ai("rnm",(e=>e.noiseTexture)),new zo("rnmScale",((e,t)=>B(zn,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new It("intensity",(e=>e.intensity)),new zo("screenSize",((e,t)=>B(zn,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.main.add(Je`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${Je.int(In)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${Je.int(In)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),e}function Fn(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const zn=H(),Gn=Object.freeze(Object.defineProperty({__proto__:null,build:Ln,getRadius:Fn},Symbol.toStringTag,{value:"Module"}));class Nn extends vo{constructor(e,t,o){super(e,t,new ho(Gn,(()=>import("./p-4be66027.js"))),o)}initializePipeline(){return ot({colorWrite:nt})}}const Dn=2;let Pn=class extends Yi{constructor(e){super(e),this.consumes={required:["normals"]},this.produces=Wi.SSAO,this.isEnabled=()=>!1,this._enableTime=V(0),this._passParameters=new Tn,this._drawParameters=new yn}initialize(){const e=Uint8Array.from(atob(Mn),(e=>e.charCodeAt(0))),t=new Y;t.wrapMode=U.CLAMP_TO_EDGE,t.pixelFormat=W.RGB,t.wrapMode=U.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new $(this.renderingContext,t,e),this.techniques.precompile(Nn),this.techniques.precompile(wn),this.addHandles(N((()=>this.isEnabled()),(()=>this._enableTime=V(0))))}destroy(){this._passParameters.noiseTexture=w(this._passParameters.noiseTexture)}render(e){const t=this.bindParameters,o=e.find((({name:e})=>"normals"===e)),i=o?.getTexture(),n=o?.getTexture(k),r=this.fboCache,a=t.camera,s=a.fullViewport[2],c=a.fullViewport[3],l=Math.round(s/Dn),h=Math.round(c/Dn),u=this.techniques.acquire(Nn),d=this.techniques.acquire(wn);if(!u.compiled||!d.compiled)return this._enableTime=V(performance.now()),this.requestRender(Fe.UPDATE),u.release(),d.release(),r.acquire(l,h,Wi.SSAO,$i.RED);0===this._enableTime&&(this._enableTime=V(performance.now()));const v=this.renderingContext,f=this.view.qualitySettings.fadeDuration,p=a.relativeElevation,g=m((Xi-p)/(Xi-Ji),0,1),x=f>0?Math.min(f,performance.now()-this._enableTime)/f:1,b=x*g;this._passParameters.normalTexture=i,this._passParameters.depthTexture=n,this._passParameters.projScale=1/a.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*Bn/Fn(a)**6*b;const w=r.acquire(s,c,"ssao input",$i.RG);v.bindFramebuffer(w.fbo),v.setViewport(0,0,s,c),v.bindTechnique(u,t,this._passParameters,this._drawParameters),v.screen.draw(),u.release();const M=r.acquire(l,h,"ssao blur",$i.RED);v.bindFramebuffer(M.fbo),this._drawParameters.colorTexture=w.getTexture(),B(this._drawParameters.blurSize,0,Dn/c),v.bindTechnique(d,t,this._passParameters,this._drawParameters),v.setViewport(0,0,l,h),v.screen.draw(),w.release();const C=r.acquire(l,h,Wi.SSAO,$i.RED);return v.bindFramebuffer(C.fbo),v.setViewport(0,0,s,c),v.setClearColor(1,1,1,0),v.clear(q.COLOR),this._drawParameters.colorTexture=M.getTexture(),B(this._drawParameters.blurSize,Dn/s,0),v.bindTechnique(d,t,this._passParameters,this._drawParameters),v.setViewport(0,0,l,h),v.screen.draw(),d.release(),v.setViewport4fv(a.fullViewport),M.release(),x<1&&this.requestRender(Fe.UPDATE),C}};o([i()],Pn.prototype,"consumes",void 0),o([i()],Pn.prototype,"produces",void 0),o([i({constructOnly:!0})],Pn.prototype,"techniques",void 0),o([i({constructOnly:!0})],Pn.prototype,"isEnabled",void 0),Pn=o([n("esri.views.3d.webgl-engine.effects.ssao.SSAO")],Pn);const Bn=.5;function Hn(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(new Ai("ssaoTex",((e,t)=>t.ssao?.getTexture()))),o.constants.add("blurSizePixelsInverse","float",1/Dn),o.code.add(Je`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(Je`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}class jn{constructor(e){this._material=e.material,this._techniques=e.techniques,this._output=e.output}dispose(){}get _stippleTextures(){return this._techniques.context.stippleTextures}get _markerTextures(){return this._techniques.context.markerTextures}acquireTechnique(e,t){return this._techniques.acquire(e,this._material.getConfiguration(this._output,t))}ensureResources(e){return ze.LOADED}}class Vn extends jn{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textures=e.textures,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){super.dispose(),this._texture=J(this._texture),this._textureNormal=J(this._textureNormal),this._textureEmissive=J(this._textureEmissive),this._textureOcclusion=J(this._textureOcclusion),this._textureMetallicRoughness=J(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?ze.LOADED:ze.LOADING}get textureBindParameters(){return new Wn(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=J(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const o=this._textures.acquire(e);if(X(o))return++this._numLoading,void o.then((e=>{if(this._disposed)return J(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(o)}}class Un extends Xe{constructor(e=null){super(),this.textureEmissive=e}}class Wn extends Un{constructor(e=null,t=null,o=null,i=null,n=null,r,a){super(o),this.texture=e,this.textureNormal=t,this.textureOcclusion=i,this.textureMetallicRoughness=n,this.scale=r,this.normalTextureTransformMatrix=a}}var $n;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}($n||($n={}));function kn(e,t){const o=t.pbrMode,i=e.fragment;if(o!==$n.Schematic&&o!==$n.Disabled&&o!==$n.Normal)return void i.code.add(Je`void applyPBRFactors() {}`);if(o===$n.Disabled)return void i.code.add(Je`void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);if(o===$n.Schematic)return void i.code.add(Je`vec3 mrr = vec3(0.0, 0.6, 0.2);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);const{hasMetallicRoughnessTexture:n,hasMetallicRoughnessTextureTransform:r,hasOcclusionTexture:a,hasOcclusionTextureTransform:s,bindType:c}=t;(n||a)&&e.include(Bi,t),i.code.add(Je`vec3 mrr;
float occlusion;`),n&&i.uniforms.add(c===Qe.Pass?new Ai("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new At("texMetallicRoughness",(e=>e.textureMetallicRoughness))),a&&i.uniforms.add(c===Qe.Pass?new Ai("texOcclusion",(e=>e.textureOcclusion)):new At("texOcclusion",(e=>e.textureOcclusion))),i.uniforms.add(c===Qe.Pass?new Rt("mrrFactors",(e=>e.mrrFactors)):new Ot("mrrFactors",(e=>e.mrrFactors))),i.code.add(Je`
    ${Ze(n,Je`void applyMetallicRoughness(vec2 uv) {
            vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
            mrr[0] *= metallicRoughness.b;
            mrr[1] *= metallicRoughness.g;
          }`)}

    ${Ze(a,"void applyOcclusion(vec2 uv) { occlusion *= textureLookup(texOcclusion, uv).r; }")}

    float getBakedOcclusion() {
      return ${a?"occlusion":"1.0"};
    }

    void applyPBRFactors() {
      mrr = mrrFactors;
      occlusion = 1.0;

      ${Ze(n,`applyMetallicRoughness(${r?"metallicRoughnessUV":"vuv0"});`)}
      ${Ze(a,`applyOcclusion(${s?"occlusionUV":"vuv0"});`)}
    }
  `)}function qn(e,t){const o=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(o.uniforms.add(new Rt("lightingAmbientSH0",((e,t)=>h(Yn,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),o.code.add(Je`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(o.uniforms.add(new xi("lightingAmbientSH_R",((e,t)=>F(Jn,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new xi("lightingAmbientSH_G",((e,t)=>F(Jn,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new xi("lightingAmbientSH_B",((e,t)=>F(Jn,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),o.code.add(Je`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===i&&(o.uniforms.add(new Rt("lightingAmbientSH0",((e,t)=>h(Yn,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new xi("lightingAmbientSH_R1",((e,t)=>F(Jn,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new xi("lightingAmbientSH_G1",((e,t)=>F(Jn,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new xi("lightingAmbientSH_B1",((e,t)=>F(Jn,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new xi("lightingAmbientSH_R2",((e,t)=>F(Jn,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new xi("lightingAmbientSH_G2",((e,t)=>F(Jn,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new xi("lightingAmbientSH_B2",((e,t)=>F(Jn,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),o.code.add(Je`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),t.pbrMode!==$n.Normal&&t.pbrMode!==$n.Schematic||o.code.add(Je`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Yn=a(),Jn=s();function Xn(e){e.uniforms.add(new Rt("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function Zn(e){e.uniforms.add(new Rt("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function Kn(e){Xn(e.fragment),Zn(e.fragment),e.fragment.code.add(Je`vec3 applyShading(vec3 shadingNormalWorld, float shadow) {
float dotVal = clamp(dot(shadingNormalWorld, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadow) * dotVal);
}`)}function Qn(e){const t=e.fragment.code;t.add(Je`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(Je`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(Je`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function er(e){const t=3.141592653589793,o=.3183098861837907;e.vertex.constants.add("PI","float",t),e.fragment.constants.add("PI","float",t),e.fragment.constants.add("LIGHT_NORMALIZATION","float",o),e.fragment.constants.add("INV_PI","float",o),e.fragment.constants.add("HALF_PI","float",1.570796326794897),e.fragment.constants.add("TWO_PI","float",6.28318530717958)}function tr(e,t){const o=e.fragment.code;e.include(er),t.pbrMode!==$n.Normal&&t.pbrMode!==$n.Schematic&&t.pbrMode!==$n.Simplified&&t.pbrMode!==$n.TerrainWithWater||(o.add(Je`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),o.add(Je`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==$n.Normal&&t.pbrMode!==$n.Schematic||(e.include(Qn),o.add(Je`struct PBRShadingInfo
{
float NdotV;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),o.add(Je`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),o.add(Je`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),o.add(Je`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}class or extends yt{constructor(e,t){super(e,"bool",Qe.Pass,((o,i,n)=>o.setUniform1b(e,t(i,n))))}}const ir=.4;function nr(e){e.constants.add("ambientBoostFactor","float",ir)}function rr(e){e.uniforms.add(new It("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function ar(e,t){const o=e.fragment;switch(e.include(Hn,t),t.pbrMode!==$n.Disabled&&e.include(tr,t),e.include(qn,t),e.include(er),o.code.add(Je`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===$n.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),nr(o),rr(o),Xn(o),o.code.add(Je`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?Je`normalize(vPosWorld)`:Je`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Zn(o),o.code.add(Je`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case $n.Disabled:case $n.WaterOnIntegratedMesh:case $n.Water:e.include(Kn),o.code.add(Je`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case $n.Normal:case $n.Schematic:o.code.add(Je`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(Je`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new or("hasFillLights",((e,t)=>t.enableFillLights))):o.constants.add("hasFillLights","bool",!1),o.code.add(Je`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new It("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new It("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))).code.add(Je`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(Je`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==$n.Schematic||t.hasColorTexture?Je`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:Je`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case $n.Simplified:case $n.TerrainWithWater:Xn(o),Zn(o),o.code.add(Je`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:case $n.COUNT:}}class sr extends yt{constructor(e,t,o){super(e,"mat4",Qe.Draw,((o,i,n,r)=>o.setUniformMatrix4fv(e,t(i,n,r))),o)}}class cr extends yt{constructor(e,t,o){super(e,"mat4",Qe.Pass,((o,i,n)=>o.setUniformMatrix4fv(e,t(i,n))),o)}}function lr(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new cr("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),ur(e))}function hr(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new sr("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),ur(e))}function ur(e){const t=e.fragment;t.include(Ti),t.uniforms.add(new Ai("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new ci("numCascades",((e,t)=>t.shadowMap.numCascades)),new xi("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))).code.add(Je`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function dr(e,{occlusionPass:t,terrainDepthTest:o,cullAboveTerrain:i}){o?(e.fragment.include(Ki),e.fragment.uniforms.add(new Ai("terrainDepthTexture",((e,t)=>t.terrainDepth?.attachment))).code.add(Je`
   ${t?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${t?Je`return fragmentDepth < linearDepth && depth < 1.0;`:Je`if(fragmentDepth ${i?">":"<="} linearDepth) discard;`}
    }`)):t?e.fragment.code.add(Je`#define terrainDepthTest(fragmentDepth) false`):e.fragment.code.add(Je`#define terrainDepthTest(fragmentDepth) {}`)}function vr(e,t){t.hasColorTextureTransform?(e.varyings.add("colorUV","vec2"),e.vertex.uniforms.add(new Ft("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??dt))).code.add(Je`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(Je`void forwardColorUV(){}`)}function fr(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==hi.None?(e.varyings.add("normalUV","vec2"),e.vertex.uniforms.add(new Ft("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??dt))).code.add(Je`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(Je`void forwardNormalUV(){}`)}function mr(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==hi.None?(e.varyings.add("emissiveUV","vec2"),e.vertex.uniforms.add(new Ft("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??dt))).code.add(Je`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(Je`void forwardEmissiveUV(){}`)}function pr(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==hi.None?(e.varyings.add("occlusionUV","vec2"),e.vertex.uniforms.add(new Ft("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??dt))).code.add(Je`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(Je`void forwardOcclusionUV(){}`)}function gr(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==hi.None?(e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.uniforms.add(new Ft("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??dt))).code.add(Je`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(Je`void forwardMetallicRoughnessUV(){}`)}function xr(e){e.code.add(Je`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}function br(e){e.include(xr),e.code.add(Je`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${Je.int(He.Multiply)}) {
        return allMixed;
      }
      if (mode == ${Je.int(He.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${Je.int(He.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${Je.int(He.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${Je.int(He.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}var wr;!function(e){e[e.None=0]="None",e[e.Value=1]="Value",e[e.Texture=2]="Texture",e[e.COUNT=3]="COUNT"}(wr||(wr={}));function Mr(e,t){if(!$e(t.output))return;const{emissionSource:o,hasEmissiveTextureTransform:i,bindType:n}=t,r=o===wr.Texture;r&&(e.include(Bi,t),e.fragment.uniforms.add(n===Qe.Pass?new Ai("texEmission",(e=>e.textureEmissive)):new At("texEmission",(e=>e.textureEmissive))));const a=o===wr.Value||r;a&&e.fragment.uniforms.add(n===Qe.Pass?new Rt("emissionFactor",(e=>e.emissiveFactor)):new Ot("emissionFactor",(e=>e.emissiveFactor))),e.fragment.code.add(Je`
    vec4 getEmissions() {
      vec4 emissions = ${a?"vec4(emissionFactor, 1.0)":"vec4(0.0)"};
      ${Ze(r,`emissions *= textureLookup(texEmission, ${i?"emissiveUV":"vuv0"});\n         emissions.w = emissions.rgb == vec3(0.0) ? 0.0: emissions.w;`)};
      return emissions;
    }
  `)}function Cr(e,t){e.include(_i,t),e.include(Mr,t),e.fragment.include(xr);const o=t.output===We.ObjectAndLayerIdColor,i=Ue(t.output),n=$e(t.output)&&t.oitPass===go.ColorAlpha,r=$e(t.output)&&t.oitPass!==go.ColorAlpha,a=t.discardInvisibleFragments;let s=0;(r||i||n)&&e.outputs.add("fragColor","vec4",s++),i&&e.outputs.add("fragEmission","vec4",s++),n&&e.outputs.add("fragAlpha","float",s++),e.fragment.code.add(Je`
    void outputColorHighlightOID(vec4 finalColor, const in vec3 vWorldPosition) {
      ${Ze(o,Je`finalColor.a = 1.0;`)}

      ${Ze(a,Je`if (finalColor.a < ${Je.float(z)}){
              discard;
              return;
            }`)}

      finalColor = highlightSlice(finalColor, vWorldPosition);
      ${Ze(n,Je`fragColor = premultiplyAlpha(finalColor);
             fragAlpha = finalColor.a;`)}
      ${Ze(r,"fragColor = finalColor;")}
      ${Ze(i,"fragEmission = getEmissions();")}
      calculateOcclusionAndOutputHighlight();
      ${Ze(o,"outputObjectAndLayerIdColor();")}
    }
  `)}function Tr(e){const t=new rn,{vertex:o,fragment:i,varyings:n}=t,{output:r,normalType:a,offsetBackfaces:s,instancedColor:c,spherical:l,receiveShadows:h,snowCover:u,pbrMode:d,textureAlphaPremultiplied:v,instancedDoublePrecision:f,hasVertexColors:m,hasVertexTangents:p,hasColorTexture:g,hasNormalTexture:x,hasNormalTextureTransform:b,hasColorTextureTransform:w}=e;if(ei(o,e),t.include(Pt),n.add("vpos","vec3"),t.include(zi,e),t.include(ai,e),t.include(bi,e),t.include(vr,e),!$e(r))return t.include(Di,e),t;t.include(fr,e),t.include(mr,e),t.include(pr,e),t.include(gr,e),Qo(o,e),t.include(Ve,e),t.include(Zo,e);const M=a===je.Attribute||a===je.Compressed;return M&&s&&t.include(Bo),t.include(Vi,e),t.include(Vt,e),c&&t.attributes.add(Ke.INSTANCECOLOR,"vec4"),n.add("vPositionLocal","vec3"),t.include(ui,e),t.include(Po,e),t.include(li,e),t.include(di,e),o.uniforms.add(new xi("externalColor",(e=>e.externalColor))),n.add("vcolorExt","vec4"),e.terrainDepthTest&&n.add("depth","float"),o.main.add(Je`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${Ze(c,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    if (vcolorExt.a < ${Je.float(z)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    } else {
      vpos = getVertexInLocalOriginSpace();
      vPositionLocal = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      ${Ze(M,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
      vpos = addVerticalOffset(vpos, localOrigin);
      ${Ze(p,"vTangent = dpTransformVertexTangent(tangent);")}
      gl_Position = transformPosition(proj, view, vpos);
      ${Ze(M&&s,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
    }

    ${Ze(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();
  `),t.include(ar,e),t.include(Hn,e),t.include(Gi,e),t.include(f?lr:hr,e),t.include(dr,e),t.include(Ho,e),t.include(Cr,e),Qo(i,e),i.uniforms.add(o.uniforms.get("localOrigin"),new Rt("ambient",(e=>e.ambient)),new Rt("diffuse",(e=>e.diffuse)),new It("opacity",(e=>e.opacity)),new It("layerOpacity",(e=>e.layerOpacity))),g&&i.uniforms.add(new Ai("tex",(e=>e.texture))),t.include(kn,e),t.include(tr,e),i.include(br),t.include(Hi,e),nr(i),rr(i),Zn(i),i.main.add(Je`
      discardBySlice(vpos);
      ${Ze(e.terrainDepthTest,"terrainDepthTest(depth);")}
      ${g?Je`
              vec4 texColor = texture(tex, ${w?"colorUV":"vuv0"});
              ${Ze(v,"texColor.rgb /= texColor.a;")}
              discardOrAdjustAlpha(texColor);`:Je`vec4 texColor = vec4(1.0);`}
      shadingParams.viewDirection = normalize(vpos - cameraPosition);
      ${a===je.ScreenDerivative?Je`vec3 normal = screenDerivativeNormal(vPositionLocal);`:Je`shadingParams.normalView = vNormalWorld;
                 vec3 normal = shadingNormal(shadingParams);`}
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

      vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${h?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":Ze(l,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

      vec3 matColor = max(ambient, diffuse);
      vec3 albedo = mixExternalColor(${Ze(m,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
      float opacity_ = layerOpacity * mixExternalOpacity(${Ze(m,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
      ${x?`mat3 tangentSpace = computeTangentSpace(${p?"normal":"normal, vpos, vuv0"});\n             vec3 shadingNormal = computeTextureNormal(tangentSpace, ${b?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
      vec3 normalGround = ${l?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

      ${Ze(u,Je`
            float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
            albedo = mix(albedo, vec3(1), snow);
            shadingNormal = mix(shadingNormal, normal, snow);
            ssao = mix(ssao, 1.0, snow);`)}

      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

      ${d===$n.Normal||d===$n.Schematic?Je`
              float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
              ${Ze(u,Je`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
              vec4 emission = ${u?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
              vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:Je`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);
  `),t}const Sr=Object.freeze(Object.defineProperty({__proto__:null,build:Tr},Symbol.toStringTag,{value:"Module"}));class yr extends Ut{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Io,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=Ge.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=E,this.instancedDoublePrecision=!1,this.normalType=je.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=A(.2,.2,.2),this.diffuse=A(.8,.8,.8),this.externalColor=Z(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=a(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=Ne.Less,this.textureAlphaMode=Le.Blend,this.textureAlphaCutoff=z,this.textureAlphaPremultiplied=!1,this.renderOccluded=po.Occlude,this.isDecoration=!1}}class Ar extends Wt{constructor(){super(...arguments),this.origin=a(),this.slicePlaneLocalOrigin=this.origin}}class _r extends vo{constructor(e,t,o,i=new ho(Sr,(()=>import("./p-3bb2c5da.js")))){super(e,t,i,o),this.type="DefaultMaterialTechnique"}_makePipeline(e,t){const{oitPass:o,output:i,transparent:n,cullFace:r,customDepthTest:a,hasOccludees:s,enableOffset:c}=e,l=o===go.NONE,h=o===go.FrontFace;return ot({blending:$e(i)&&n?wo(o):null,culling:Or(e)?ht(r):null,depthTest:{func:yo(o,Er(a))},depthWrite:Mo(e),drawBuffers:i===We.Depth?{buffers:[K.NONE]}:Ao(o,i),colorWrite:nt,stencilWrite:s?_o:null,stencilTest:s?t?Oo:Eo:null,polygonOffset:l||h?null:So(c)})}initializePipeline(e){return this._occludeePipelineState=this._makePipeline(e,!0),this._makePipeline(e,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function Er(e){return e===Ne.Lequal?C.LEQUAL:C.LESS}function Or(e){return e.cullFace!==Ge.None||!e.hasSlicePlane&&(!e.transparent&&!e.doubleSidedMode)}function Rr(){return Ir??=(async()=>{const e=await import("./p-32362111.js"),t=await e.default({locateFile:e=>Q(`esri/libs/basisu/${e}`)});return t.initializeBasis(),t})(),Ir}let Ir;var Lr;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(Lr||(Lr={}));let Fr=null,zr=null;async function Gr(){return null==zr&&(zr=Rr(),Fr=await zr),zr}function Nr(e,t){if(null==Fr)return e.byteLength;const o=new Fr.BasisFile(new Uint8Array(e)),i=Br(o)?Pr(o.getNumLevels(0),o.getHasAlpha(),o.getImageWidth(0,0),o.getImageHeight(0,0),t):0;return o.close(),o.delete(),i}function Dr(e,t){if(null==Fr)return e.byteLength;const o=new Fr.KTX2File(new Uint8Array(e)),i=Hr(o)?Pr(o.getLevels(),o.getHasAlpha(),o.getWidth(),o.getHeight(),t):0;return o.close(),o.delete(),i}function Pr(e,t,o,i,n){const r=oe(t?te.COMPRESSED_RGBA8_ETC2_EAC:te.COMPRESSED_RGB8_ETC2),a=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(o*i*r*a)}function Br(e){return e.getNumImages()>=1&&!e.isUASTC()}function Hr(e){return e.getFaces()>=1&&e.isETC1S()}async function jr(e,t,o){null==Fr&&(Fr=await Gr());const i=new Fr.BasisFile(new Uint8Array(o));if(!Br(i))return null;i.startTranscoding();const n=Ur(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,o)=>i.transcodeImage(o,0,e,t,0,0)));return i.close(),i.delete(),n}async function Vr(e,t,o){null==Fr&&(Fr=await Gr());const i=new Fr.KTX2File(new Uint8Array(o));if(!Hr(i))return null;i.startTranscoding();const n=Ur(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,o)=>i.transcodeImage(o,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}function Ur(e,t,o,i,n,r,a,s){const{compressedTextureETC:c,compressedTextureS3TC:l}=e.capabilities,[h,u]=c?i?[Lr.ETC2_RGBA,te.COMPRESSED_RGBA8_ETC2_EAC]:[Lr.ETC1_RGB,te.COMPRESSED_RGB8_ETC2]:l?i?[Lr.BC3_RGBA,te.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[Lr.BC1_RGB,te.COMPRESSED_RGB_S3TC_DXT1_EXT]:[Lr.RGBA32,W.RGBA],d=t.hasMipmap?o:Math.min(1,o),v=[];for(let e=0;e<d;e++)v.push(new Uint8Array(a(e,h))),s(e,h,v[e]);return t.internalFormat=u,t.hasMipmap=v.length>1,t.samplingMode=t.hasMipmap?ee.LINEAR_MIPMAP_LINEAR:ee.LINEAR,t.width=n,t.height=r,new $(e,t,{type:"compressed",levels:v})}const Wr=()=>j.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),$r=542327876,kr=131072,qr=4;function Yr(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function Jr(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const Xr=Yr("DXT1"),Zr=Yr("DXT3"),Kr=Yr("DXT5"),Qr=31,ea=0,ta=1,oa=2,ia=3,na=4,ra=7,aa=20,sa=21;function ca(e,t,o){const i=la(o,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:n,internalFormat:r,width:a,height:s}=i;return t.samplingMode=n.levels.length>1?ee.LINEAR_MIPMAP_LINEAR:ee.LINEAR,t.hasMipmap=n.levels.length>1,t.internalFormat=r,t.width=a,t.height=s,new $(e,t,n)}function la(e,t){const o=new Int32Array(e.buffer,e.byteOffset,Qr);if(o[ea]!==$r)return Wr().error("Invalid magic number in DDS header"),null;if(!(o[aa]&qr))return Wr().error("Unsupported format, must contain a FourCC code"),null;const i=o[sa];let n,r;switch(i){case Xr:n=8,r=te.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Zr:n=16,r=te.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Kr:n=16,r=te.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Wr().error("Unsupported FourCC code:",Jr(i)),null}let a=1,s=o[na],c=o[ia];(3&s||3&c)&&(Wr().warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,c=c+3&-4);const l=s,h=c;let u,d;o[oa]&kr&&!1!==t&&(a=Math.max(1,o[ra]));let v=e.byteOffset+o[ta]+4;const f=[];for(let t=0;t<a;++t)d=(s+3>>2)*(c+3>>2)*n,u=new Uint8Array(e.buffer,v,d),f.push(u),v+=d,s=Math.max(1,s>>1),c=Math.max(1,c>>1);return{textureData:{type:"compressed",levels:f},internalFormat:r,width:l,height:h}}function ha(e,t){const o=1048576,i=4096,n=2;let r=e.width*e.height;if(r<i)return e instanceof ImageData?va(e):e;let a=e.width,s=e.height;do{a=Math.ceil(a/n),s=Math.ceil(s/n),r=a*s}while(r>o||null!=t&&(a>t||s>t));return da(e,a,s)}function ua(e,t){const o=Math.max(e.width,e.height);if(o<=t)return e;const i=t/o;return da(e,Math.round(e.width*i),Math.round(e.height*i))}function da(e,t,o){if(e instanceof ImageData)return da(va(e),t,o);const i=document.createElement("canvas");i.width=t,i.height=o;return i.getContext("2d").drawImage(e,0,0,i.width,i.height),i}function va(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const o=t.getContext("2d");if(null==o)throw new P("Failed to create 2d context from HTMLCanvasElement");return o.putImageData(e,0,0),t}class fa extends kt{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=fo.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new ie,this._parameters={...xa,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(ne(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){re(e.src)||ne(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new Y;return t.wrapMode=this._parameters.wrap??U.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?ee.LINEAR_MIPMAP_LINEAR:ee.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||ma(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new $(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):ae(t)&&this._parameters.encoding===De.DDS_ENCODING?this._loadFromDDSData(e,t):se(t)&&this._parameters.encoding===De.DDS_ENCODING?this._loadFromDDSData(e,new Uint8Array(t)):(se(t)||ae(t))&&this._parameters.encoding===De.KTX2_ENCODING?this._loadFromKTX2(e,t):(se(t)||ae(t))&&this._parameters.encoding===De.BASIS_ENCODING?this._loadFromBasis(e,t):ae(t)?this._loadFromPixelData(e,t):se(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<ga.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=ca(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>Vr(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>jr(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){Pe(this._parameters.width>0&&this._parameters.height>0);const o=this._createDescriptor(e);return o.pixelFormat=1===this._parameters.components?W.LUMINANCE:3===this._parameters.components?W.RGB:W.RGBA,o.width=this._parameters.width??0,o.height=this._parameters.height??0,this._glTexture=new $(e,o,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async o=>{const i=await Re(t,{signal:o});return ce(o),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async o=>{const i=await le(t,t.src,!1,o);return ce(o),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=ga.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((o=>new Promise(((i,n)=>{const r=()=>{t.removeEventListener("loadeddata",a),t.removeEventListener("error",s),de(c)},a=()=>{t.readyState>=ga.HAVE_CURRENT_DATA&&(r(),i(this._loadFromImage(e,t)))},s=e=>{r(),n(e||new P("Failed to load video"))};t.addEventListener("loadeddata",a),t.addEventListener("error",s);const c=he(o,(()=>s(ue())))}))))}_loadFromImage(e,t){let o=t;if(!(o instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;o=this._parameters.downsampleUncompressed?ha(o,t):ua(o,t)}const i=pa(o);this._parameters.width=i.width,this._parameters.height=i.height;const n=this._createDescriptor(e);return n.pixelFormat=3===this._parameters.components?W.RGB:W.RGBA,n.width=i.width,n.height=i.height,this._glTexture=new $(e,n,o),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const o=e(t.signal);this._loadingPromise=o;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===o&&(this._loadingPromise=null)};return o.then(i,i),o}unload(){if(this._glTexture=w(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function ma(e,t){if(null==e)return 0;if(se(e)||ae(e))return t.encoding===De.KTX2_ENCODING?Dr(e,!!t.mipmap):t.encoding===De.BASIS_ENCODING?Nr(e,!!t.mipmap):e.byteLength;const{width:o,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?pa(e):t;return(t.mipmap?4/3:1)*o*i*(t.components||4)||0}function pa(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var ga;!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(ga||(ga={}));const xa={wrap:{s:U.REPEAT,t:U.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};class ba{constructor(e=!1,t=!0){this.isVerticalRay=e,this.normalRequired=t}}const wa=be();function Ma(e,t,o,i,n,r){if(!e.visible)return;const a=ve(Ba,i,o),s=(e,t,o)=>{r(e,o,t,!1)},c=new ba(!1,t.options.normalRequired);if(e.boundingInfo){Pe(e.type===fo.Mesh);const i=t.tolerance;Ta(e.boundingInfo,o,a,i,n,c,s)}else{const t=e.attributes.get(Ke.POSITION),i=t.indices;Aa(o,a,0,i.length/3,i,t.data,t.stride,n,c,s)}}const Ca=a();function Ta(e,t,o,i,n,r,a){if(null==e)return;const s=za(o,Ca);if(fe(wa,e.bbMin),me(wa,e.bbMax),null!=n&&n.applyToAabb(wa),Ga(wa,t,s,i)){const{primitiveIndices:s,position:c}=e,l=s?s.length:c.indices.length/3;if(l>Da){const s=e.getChildren();if(void 0!==s){for(const e of s)Ta(e,t,o,i,n,r,a);return}}ya(t,o,0,l,c.indices,c.data,c.stride,s,n,r,a)}}const Sa=a();function ya(e,t,o,i,n,r,a,s,c,l,h){const u=e[0],d=e[1],v=e[2],f=t[0],m=t[1],p=t[2],{normalRequired:g}=l;for(let e=o;e<i;++e){const t=s[e],o=3*t,i=a*n[o];let l=r[i],x=r[i+1],b=r[i+2];const w=a*n[o+1];let M=r[w],C=r[w+1],T=r[w+2];const S=a*n[o+2];let y=r[S],A=r[S+1],_=r[S+2];null!=c&&([l,x,b]=c.applyToVertex(l,x,b,e),[M,C,T]=c.applyToVertex(M,C,T,e),[y,A,_]=c.applyToVertex(y,A,_,e));const E=M-l,O=C-x,R=T-b,I=y-l,L=A-x,F=_-b,z=m*F-L*p,G=p*I-F*f,N=f*L-I*m,D=E*z+O*G+R*N;if(Math.abs(D)<=Pa)continue;const P=u-l,B=d-x,H=v-b,j=P*z+B*G+H*N;if(D>0){if(j<0||j>D)continue}else if(j>0||j<D)continue;const V=B*R-O*H,U=H*E-R*P,W=P*O-E*B,$=f*V+m*U+p*W;if(D>0){if($<0||j+$>D)continue}else if($>0||j+$<D)continue;const k=(I*V+L*U+F*W)/D;if(k>=0){h(k,t,g?Ra(E,O,R,I,L,F,Sa):null)}}}function Aa(e,t,o,i,n,r,a,s,c,l){const u=t,d=Ha,v=Math.abs(u[0]),f=Math.abs(u[1]),m=Math.abs(u[2]),p=v>=f?v>=m?0:2:f>=m?1:2,g=p,x=u[g]<0?2:1,b=(p+x)%3,w=(p+(3-x))%3,M=u[b]/u[g],C=u[w]/u[g],T=1/u[g],S=_a,y=Ea,A=Oa,{normalRequired:_}=c;for(let t=o;t<i;++t){const o=3*t,i=a*n[o];h(d[0],r[i+0],r[i+1],r[i+2]);const c=a*n[o+1];h(d[1],r[c+0],r[c+1],r[c+2]);const u=a*n[o+2];h(d[2],r[u+0],r[u+1],r[u+2]),s&&(xe(d[0],s.applyToVertex(d[0][0],d[0][1],d[0][2],t)),xe(d[1],s.applyToVertex(d[1][0],d[1][1],d[1][2],t)),xe(d[2],s.applyToVertex(d[2][0],d[2][1],d[2][2],t))),ve(S,d[0],e),ve(y,d[1],e),ve(A,d[2],e);const v=S[b]-M*S[g],f=S[w]-C*S[g],m=y[b]-M*y[g],p=y[w]-C*y[g],x=A[b]-M*A[g],E=A[w]-C*A[g],O=x*p-E*m,R=v*E-f*x,I=m*f-p*v;if((O<0||R<0||I<0)&&(O>0||R>0||I>0))continue;const L=O+R+I;if(0===L)continue;const F=O*(T*S[g])+R*(T*y[g])+I*(T*A[g]);if(F*Math.sign(L)<0)continue;const z=F/L;if(z>=0){l(z,t,_?Ia(d):null)}}}const _a=a(),Ea=a(),Oa=a();function Ra(e,t,o,i,n,r,a){return h(La,e,t,o),h(Fa,i,n,r),pe(a,La,Fa),ge(a,a),a}function Ia(e){return ve(La,e[1],e[0]),ve(Fa,e[2],e[0]),pe(Sa,La,Fa),ge(Sa,Sa),Sa}const La=a(),Fa=a();function za(e,t){return h(t,1/e[0],1/e[1],1/e[2])}function Ga(e,t,o,i){return Na(e,t,o,i,1/0)}function Na(e,t,o,i,n){const r=(e[0]-i-t[0])*o[0],a=(e[3]+i-t[0])*o[0];let s=Math.min(r,a),c=Math.max(r,a);const l=(e[1]-i-t[1])*o[1],h=(e[4]+i-t[1])*o[1];if(c=Math.min(c,Math.max(l,h)),c<0)return!1;if(s=Math.max(s,Math.min(l,h)),s>c)return!1;const u=(e[2]-i-t[2])*o[2],d=(e[5]+i-t[2])*o[2];return c=Math.min(c,Math.max(u,d)),!(c<0)&&(s=Math.max(s,Math.min(u,d)),!(s>c)&&s<n)}const Da=1e3,Pa=1e-7,Ba=a(),Ha=[a(),a(),a()];function ja(e,t,o,i=1){const{data:n,indices:r}=e,a=t.typedBuffer,s=t.typedBufferStride,c=r.length;if(o*=s,1===i)for(let e=0;e<c;++e)a[o]=n[r[e]],o+=s;else for(let e=0;e<c;++e){const t=n[r[e]];for(let e=0;e<i;e++)a[o]=t,o+=s}}function Va(e,t,o){const{data:i,indices:n}=e,r=t.typedBuffer,a=t.typedBufferStride,s=n.length;o*=a;for(let e=0;e<s;++e){const t=2*n[e];r[o]=i[t],r[o+1]=i[t+1],o+=a}}function Ua(e,t,o,i){const{data:n,indices:r}=e,a=t.typedBuffer,s=t.typedBufferStride,c=r.length;if(o*=s,null==i||1===i)for(let e=0;e<c;++e){const t=3*r[e];a[o]=n[t],a[o+1]=n[t+1],a[o+2]=n[t+2],o+=s}else for(let e=0;e<c;++e){const t=3*r[e];for(let e=0;e<i;++e)a[o]=n[t],a[o+1]=n[t+1],a[o+2]=n[t+2],o+=s}}function Wa(e,t,o,i=1){const{data:n,indices:r}=e,a=t.typedBuffer,s=t.typedBufferStride,c=r.length;if(o*=s,1===i)for(let e=0;e<c;++e){const t=4*r[e];a[o]=n[t],a[o+1]=n[t+1],a[o+2]=n[t+2],a[o+3]=n[t+3],o+=s}else for(let e=0;e<c;++e){const t=4*r[e];for(let e=0;e<i;++e)a[o]=n[t],a[o+1]=n[t+1],a[o+2]=n[t+2],a[o+3]=n[t+3],o+=s}}function $a(e,t,o){const i=e.typedBuffer,n=e.typedBufferStride;t*=n;for(let e=0;e<o;++e)i[t]=0,i[t+1]=0,i[t+2]=0,i[t+3]=0,t+=n}function ka(e,t,o,i,n=1){if(!t)return void Ua(e,o,i,n);const{data:r,indices:a}=e,s=o.typedBuffer,c=o.typedBufferStride,l=a.length,h=t[0],u=t[1],d=t[2],v=t[4],f=t[5],m=t[6],p=t[8],g=t[9],x=t[10],b=t[12],w=t[13],M=t[14];i*=c;let C=0,T=0,S=0;const y=we(t)?e=>{C=r[e]+b,T=r[e+1]+w,S=r[e+2]+M}:e=>{const t=r[e],o=r[e+1],i=r[e+2];C=h*t+v*o+p*i+b,T=u*t+f*o+g*i+w,S=d*t+m*o+x*i+M};if(1===n)for(let e=0;e<l;++e)y(3*a[e]),s[i]=C,s[i+1]=T,s[i+2]=S,i+=c;else for(let e=0;e<l;++e){y(3*a[e]);for(let e=0;e<n;++e)s[i]=C,s[i+1]=T,s[i+2]=S,i+=c}}function qa(e,t,o,i,n=1){if(!t)return void Ua(e,o,i,n);const{data:r,indices:a}=e,s=t,c=o.typedBuffer,l=o.typedBufferStride,h=a.length,u=s[0],d=s[1],v=s[2],f=s[4],m=s[5],p=s[6],g=s[8],x=s[9],b=s[10],w=!Me(s),M=1e-6,C=1-M;i*=l;let T=0,S=0,y=0;const A=we(s)?e=>{T=r[e],S=r[e+1],y=r[e+2]}:e=>{const t=r[e],o=r[e+1],i=r[e+2];T=u*t+f*o+g*i,S=d*t+m*o+x*i,y=v*t+p*o+b*i};if(1===n)if(w)for(let e=0;e<h;++e){A(3*a[e]);const t=T*T+S*S+y*y;if(t<C&&t>M){const e=1/Math.sqrt(t);c[i]=T*e,c[i+1]=S*e,c[i+2]=y*e}else c[i]=T,c[i+1]=S,c[i+2]=y;i+=l}else for(let e=0;e<h;++e)A(3*a[e]),c[i]=T,c[i+1]=S,c[i+2]=y,i+=l;else for(let e=0;e<h;++e){if(A(3*a[e]),w){const e=T*T+S*S+y*y;if(e<C&&e>M){const t=1/Math.sqrt(e);T*=t,S*=t,y*=t}}for(let e=0;e<n;++e)c[i]=T,c[i+1]=S,c[i+2]=y,i+=l}}function Ya(e,t,o,i,n=1){if(!t)return void Wa(e,o,i,n);const{data:r,indices:a}=e,s=t,c=o.typedBuffer,l=o.typedBufferStride,h=a.length,u=s[0],d=s[1],v=s[2],f=s[4],m=s[5],p=s[6],g=s[8],x=s[9],b=s[10],w=!Me(s),M=1e-6,C=1-M;if(i*=l,1===n)for(let e=0;e<h;++e){const t=4*a[e],o=r[t],n=r[t+1],s=r[t+2],h=r[t+3];let T=u*o+f*n+g*s,S=d*o+m*n+x*s,y=v*o+p*n+b*s;if(w){const e=T*T+S*S+y*y;if(e<C&&e>M){const t=1/Math.sqrt(e);T*=t,S*=t,y*=t}}c[i]=T,c[i+1]=S,c[i+2]=y,c[i+3]=h,i+=l}else for(let e=0;e<h;++e){const t=4*a[e],o=r[t],s=r[t+1],h=r[t+2],T=r[t+3];let S=u*o+f*s+g*h,y=d*o+m*s+x*h,A=v*o+p*s+b*h;if(w){const e=S*S+y*y+A*A;if(e<C&&e>M){const t=1/Math.sqrt(e);S*=t,y*=t,A*=t}}for(let e=0;e<n;++e)c[i]=S,c[i+1]=y,c[i+2]=A,c[i+3]=T,i+=l}}function Ja(e,t,o,i,n=1){const{data:r,indices:a}=e,s=o.typedBuffer,c=o.typedBufferStride,l=a.length;if(i*=c,t!==r.length||4!==t)if(1!==n)if(4!==t)for(let e=0;e<l;++e){const t=3*a[e];for(let e=0;e<n;++e)s[i]=r[t],s[i+1]=r[t+1],s[i+2]=r[t+2],s[i+3]=255,i+=c}else for(let e=0;e<l;++e){const t=4*a[e];for(let e=0;e<n;++e)s[i]=r[t],s[i+1]=r[t+1],s[i+2]=r[t+2],s[i+3]=r[t+3],i+=c}else{if(4===t){for(let e=0;e<l;++e){const t=4*a[e];s[i]=r[t],s[i+1]=r[t+1],s[i+2]=r[t+2],s[i+3]=r[t+3],i+=c}return}for(let e=0;e<l;++e){const t=3*a[e];s[i]=r[t],s[i+1]=r[t+1],s[i+2]=r[t+2],s[i+3]=255,i+=c}}else{s[i]=r[0],s[i+1]=r[1],s[i+2]=r[2],s[i+3]=r[3];const e=new Uint32Array(o.typedBuffer.buffer,o.start),t=c/4,a=e[i/=4];i+=t;const h=l*n;for(let o=1;o<h;++o)e[i]=a,i+=t}}function Xa(e,t,o){const{data:i,indices:n}=e,r=t.typedBuffer,a=t.typedBufferStride,s=n.length,c=i[0];o*=a;for(let e=0;e<s;++e)r[o]=c,o+=a}function Za(e,t,o,i,n=1){const r=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===n)for(let t=0;t<o;++t)r[i]=e[0],r[i+1]=e[1],r[i+2]=e[2],r[i+3]=e[3],i+=a;else for(let t=0;t<o;++t)for(let t=0;t<n;++t)r[i]=e[0],r[i+1]=e[1],r[i+2]=e[2],r[i+3]=e[3],i+=a}function Ka(e,t,o,i,n,r,a){for(const s of o.fields.keys()){const o=e.get(s),c=o?.indices;if(o&&c)Qa(s,o,i,n,r,a);else if(s===Ke.OBJECTANDLAYERIDCOLOR&&null!=t){const o=e.get(Ke.POSITION)?.indices;if(o){const e=o.length;Za(t,r.getField(s,gt),e,a)}}}}function Qa(e,t,o,i,n,r){switch(e){case Ke.POSITION:{Pe(3===t.size);const i=n.getField(e,Ct);Pe(!!i,`No buffer view for ${e}`),i&&ka(t,o,i,r);break}case Ke.NORMAL:{Pe(3===t.size);const o=n.getField(e,Ct);Pe(!!o,`No buffer view for ${e}`),o&&qa(t,i,o,r);break}case Ke.NORMALCOMPRESSED:{Pe(2===t.size);const o=n.getField(e,Mt);Pe(!!o,`No buffer view for ${e}`),o&&Va(t,o,r);break}case Ke.UV0:{Pe(2===t.size);const o=n.getField(e,wt);Pe(!!o,`No buffer view for ${e}`),o&&Va(t,o,r);break}case Ke.COLOR:case Ke.SYMBOLCOLOR:{const o=n.getField(e,gt);Pe(!!o,`No buffer view for ${e}`),Pe(3===t.size||4===t.size),!o||3!==t.size&&4!==t.size||Ja(t,t.size,o,r);break}case Ke.COLORFEATUREATTRIBUTE:{const o=n.getField(e,bt);Pe(!!o,`No buffer view for ${e}`),Pe(1===t.size),o&&1===t.size&&Xa(t,o,r);break}case Ke.TANGENT:{Pe(4===t.size);const i=n.getField(e,xt);Pe(!!i,`No buffer view for ${e}`),i&&Ya(t,o,i,r);break}case Ke.PROFILERIGHT:case Ke.PROFILEUP:case Ke.PROFILEVERTEXANDNORMAL:case Ke.FEATUREVALUE:{Pe(4===t.size);const o=n.getField(e,xt);Pe(!!o,`No buffer view for ${e}`),o&&Wa(t,o,r)}}}class es{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.get(Ke.POSITION).indices.length}write(e,t,o,i,n,r){Ka(o,i,this.vertexBufferLayout,e,t,n,r)}}class ts{constructor(e){this._bits=[...e]}equals(e){return p(this._bits,e.bits)}get code(){return this._code??=String.fromCharCode(...this._bits),this._code}get bits(){return this._bits}}class os extends Xe{constructor(){super(),this._parameterBits=this._parameterBits?.map((()=>0))??[],this._parameterNames??=[]}get key(){return this._key??=new ts(this._parameterBits),this._key}decode(e=this.key){const t=this._parameterBits;this._parameterBits=[...e.bits];const o=this._parameterNames.map((e=>`    ${e}: ${this[e]}`)).join("\n");return this._parameterBits=t,o}}function is(e={}){return(t,o)=>{t.hasOwnProperty("_parameterNames")||Object.defineProperty(t,"_parameterNames",{value:t._parameterNames?.slice()??[],configurable:!0,writable:!0}),t.hasOwnProperty("_parameterBits")||Object.defineProperty(t,"_parameterBits",{value:t._parameterBits?.slice()??[0],configurable:!0,writable:!0}),t._parameterNames.push(o);const i=e.count||2,n=Math.ceil(Math.log2(i)),r=t._parameterBits;let a=0;for(;r[a]+n>16;)a++,a>=r.length&&r.push(0);const s=r[a],c=(1<<n)-1<<s;r[a]+=n,e.count?Object.defineProperty(t,o,{get(){return(this._parameterBits[a]&c)>>s},set(t){if(this[o]!==t){if(this._key=null,this._parameterBits[a]=this._parameterBits[a]&~c|+t<<s&c,"number"!=typeof t)throw new P(`Configuration value for ${o} must be a number, got ${typeof t}`);if(null==e.count)throw new P(`Configuration value for ${o} must provide a count option`)}}}):Object.defineProperty(t,o,{get(){return!!((this._parameterBits[a]&c)>>s)},set(e){if(this[o]!==e&&(this._key=null,this._parameterBits[a]=this._parameterBits[a]&~c|+e<<s&c,"boolean"!=typeof e))throw new P(`Configuration value for ${o} must be boolean, got ${typeof e}`)}})}}class ns extends os{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}o([is()],ns.prototype,"instancedDoublePrecision",void 0),o([is()],ns.prototype,"hasModelTransformation",void 0);class rs extends ns{constructor(){super(...arguments),this.output=We.Color,this.oitPass=go.NONE,this.hasSliceHighlight=!0,this.hasSliceInVertexProgram=!1,this.bindType=Qe.Pass,this.writeDepth=!0}}o([is({count:We.COUNT})],rs.prototype,"output",void 0),o([is({count:go.COUNT})],rs.prototype,"oitPass",void 0);class as extends rs{constructor(e,t){super(),this.spherical=e,this.doublePrecisionRequiresObfuscation=t,this.alphaDiscardMode=Le.Opaque,this.doubleSidedMode=ji.None,this.pbrMode=$n.Disabled,this.cullFace=Ge.None,this.normalType=je.Attribute,this.customDepthTest=Ne.Less,this.emissionSource=wr.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===wr.Texture||this.hasOcclusionTexture||this.hasNormalTexture?hi.Default:hi.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}o([is({count:Le.COUNT})],as.prototype,"alphaDiscardMode",void 0),o([is({count:ji.COUNT})],as.prototype,"doubleSidedMode",void 0),o([is({count:$n.COUNT})],as.prototype,"pbrMode",void 0),o([is({count:Ge.COUNT})],as.prototype,"cullFace",void 0),o([is({count:je.COUNT})],as.prototype,"normalType",void 0),o([is({count:Ne.COUNT})],as.prototype,"customDepthTest",void 0),o([is({count:wr.COUNT})],as.prototype,"emissionSource",void 0),o([is()],as.prototype,"hasVertexColors",void 0),o([is()],as.prototype,"hasSymbolColors",void 0),o([is()],as.prototype,"hasVerticalOffset",void 0),o([is()],as.prototype,"hasSlicePlane",void 0),o([is()],as.prototype,"hasSliceHighlight",void 0),o([is()],as.prototype,"hasColorTexture",void 0),o([is()],as.prototype,"hasMetallicRoughnessTexture",void 0),o([is()],as.prototype,"hasOcclusionTexture",void 0),o([is()],as.prototype,"hasNormalTexture",void 0),o([is()],as.prototype,"hasScreenSizePerspective",void 0),o([is()],as.prototype,"hasVertexTangents",void 0),o([is()],as.prototype,"hasOccludees",void 0),o([is()],as.prototype,"hasModelTransformation",void 0),o([is()],as.prototype,"offsetBackfaces",void 0),o([is()],as.prototype,"vvSize",void 0),o([is()],as.prototype,"vvColor",void 0),o([is()],as.prototype,"receiveShadows",void 0),o([is()],as.prototype,"receiveAmbientOcclusion",void 0),o([is()],as.prototype,"textureAlphaPremultiplied",void 0),o([is()],as.prototype,"instanced",void 0),o([is()],as.prototype,"instancedColor",void 0),o([is()],as.prototype,"writeDepth",void 0),o([is()],as.prototype,"transparent",void 0),o([is()],as.prototype,"enableOffset",void 0),o([is()],as.prototype,"terrainDepthTest",void 0),o([is()],as.prototype,"cullAboveTerrain",void 0),o([is()],as.prototype,"snowCover",void 0),o([is()],as.prototype,"hasColorTextureTransform",void 0),o([is()],as.prototype,"hasEmissionTextureTransform",void 0),o([is()],as.prototype,"hasNormalTextureTransform",void 0),o([is()],as.prototype,"hasOcclusionTextureTransform",void 0),o([is()],as.prototype,"hasMetallicRoughnessTextureTransform",void 0);function ss(e){const t=new rn,{vertex:o,fragment:i,varyings:n}=t,{output:r,offsetBackfaces:a,instancedColor:s,pbrMode:c,snowCover:l,spherical:h}=e,u=c===$n.Normal||c===$n.Schematic;if(ei(o,e),t.include(Pt),n.add("vpos","vec3"),t.include(zi,e),t.include(ai,e),t.include(bi,e),r===We.Color&&(Qo(t.vertex,e),t.include(Ve,e),t.include(Zo,e),a&&t.include(Bo),s&&t.attributes.add(Ke.INSTANCECOLOR,"vec4"),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3"),e.terrainDepthTest&&n.add("depth","float"),t.include(ui,e),t.include(Po,e),t.include(li,e),t.include(di,e),o.uniforms.add(new xi("externalColor",(e=>e.externalColor))),n.add("vcolorExt","vec4"),o.main.add(Je`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${Ze(s,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      if (vcolorExt.a < ${Je.float(z)}) {
        gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
      } else {
        vpos = getVertexInLocalOriginSpace();
        localvpos = vpos - view[3].xyz;
        vpos = subtractOrigin(vpos);
        vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        ${Ze(a,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}
      }
      ${Ze(e.terrainDepthTest,"depth = (view * vec4(vpos, 1.0)).z;")}
      forwardLinearDepth();
      forwardTextureCoordinates();`)),r===We.Color){const{hasColorTexture:n,hasColorTextureTransform:r,receiveShadows:a}=e;t.include(ar,e),t.include(Hn,e),t.include(Gi,e),t.include(e.instancedDoublePrecision?lr:hr,e),t.include(dr,e),t.include(Ho,e),t.include(Cr,e),Qo(t.fragment,e),Xn(i),nr(i),rr(i),i.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new Rt("ambient",(e=>e.ambient)),new Rt("diffuse",(e=>e.diffuse)),new It("opacity",(e=>e.opacity)),new It("layerOpacity",(e=>e.layerOpacity))),n&&i.uniforms.add(new Ai("tex",(e=>e.texture))),t.include(kn,e),t.include(tr,e),i.include(br),Zn(i),i.main.add(Je`
      discardBySlice(vpos);
      ${Ze(e.terrainDepthTest,"terrainDepthTest(depth);")}
      vec4 texColor = ${n?`texture(tex, ${r?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${Ze(n,`${Ze(e.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${a?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":h?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${e.hasVertexColors?Je`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Je`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${Ze(l,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${Je`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${Ze(u,`vec3 normalGround = ${h?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${u?Je`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${Ze(l,Je`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${l?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:Je`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return t.include(Di,e),t}const cs=Object.freeze(Object.defineProperty({__proto__:null,build:ss},Symbol.toStringTag,{value:"Module"}));class ls extends _r{constructor(e,t,o){super(e,t,o,new ho(cs,(()=>import("./p-baf9d279.js")))),this.type="RealisticTreeTechnique"}}class hs extends mo{constructor(e,t){super(e,ds),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[Dt.OPAQUE_MATERIAL,e=>(ke(e)||qe(e))&&!this.parameters.transparent],[Dt.TRANSPARENT_MATERIAL,e=>(ke(e)||qe(e))&&this.parameters.transparent&&this.parameters.writeDepth],[Dt.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,e=>(Ye(e)||qe(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=fs(this.parameters),this._configuration=new as(t.spherical,t.doublePrecisionRequiresObfuscation)}isVisibleForOutput(e){return e!==We.Shadow&&e!==We.ShadowExcludeHighlight&&e!==We.ShadowHighlight||this.parameters.castShadows}get visible(){const e=this.parameters;if(e.layerOpacity<z)return!1;const{hasInstancedColor:t,hasVertexColors:o,hasSymbolColors:i,vvColor:n}=e,r=t||n||i,a="replace"===e.colorMixMode,s=e.opacity>=z;if(o&&r)return a||s;const c=e.externalColor&&e.externalColor[3]>=z;return o?a?c:s:r?a||s:a?c:s}get hasEmissions(){return!!this.parameters.emissiveTextureId||!_(this.parameters.emissiveFactor,E)}getConfiguration(e,t){const o=this.parameters,{treeRendering:i,doubleSided:n,doubleSidedType:r}=o;return this._configuration.output=e,this._configuration.hasNormalTexture=!i&&!!o.normalTextureId,this._configuration.hasColorTexture=!!o.textureId,this._configuration.hasVertexTangents=!i&&o.hasVertexTangents,this._configuration.instanced=o.isInstanced,this._configuration.instancedDoublePrecision=o.instancedDoublePrecision,this._configuration.vvSize=!!o.vvSize,this._configuration.hasVerticalOffset=null!=o.verticalOffset,this._configuration.hasScreenSizePerspective=null!=o.screenSizePerspective,this._configuration.hasSlicePlane=o.hasSlicePlane,this._configuration.hasSliceHighlight=o.hasSliceHighlight,this._configuration.alphaDiscardMode=o.textureAlphaMode,this._configuration.normalType=i?je.Attribute:o.normalType,this._configuration.transparent=o.transparent,this._configuration.writeDepth=o.writeDepth,null!=o.customDepthTest&&(this._configuration.customDepthTest=o.customDepthTest),this._configuration.hasOccludees=t.hasOccludees,this._configuration.cullFace=o.hasSlicePlane?Ge.None:o.cullFace,this._configuration.terrainDepthTest=t.terrainDepthTest,this._configuration.cullAboveTerrain=t.cullAboveTerrain,this._configuration.hasModelTransformation=!i&&null!=o.modelTransformation,this._configuration.hasVertexColors=o.hasVertexColors,this._configuration.hasSymbolColors=o.hasSymbolColors,this._configuration.doubleSidedMode=i?ji.WindingOrder:n&&"normal"===r?ji.View:n&&"winding-order"===r?ji.WindingOrder:ji.None,this._configuration.instancedColor=o.hasInstancedColor,this._configuration.receiveShadows=o.receiveShadows&&o.receiveShadows,this._configuration.receiveAmbientOcclusion=o.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!o.vvColor,this._configuration.textureAlphaPremultiplied=!!o.textureAlphaPremultiplied,this._configuration.pbrMode=o.usePBR?o.isSchematic?$n.Schematic:$n.Normal:$n.Disabled,this._configuration.hasMetallicRoughnessTexture=!i&&!!o.metallicRoughnessTextureId,this._configuration.emissionSource=i?wr.None:null!=o.emissiveTextureId?wr.Texture:o.usePBR?wr.Value:wr.None,this._configuration.hasOcclusionTexture=!i&&!!o.occlusionTextureId,this._configuration.offsetBackfaces=!(!o.transparent||!o.offsetTransparentBackfaces),this._configuration.oitPass=t.oitPass,this._configuration.enableOffset=t.camera.relativeElevation<Co,this._configuration.snowCover=vs(t),this._configuration.hasColorTextureTransform=!!o.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!o.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!o.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!o.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!o.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(e,t,o,i,n,r){if(null!=this.parameters.verticalOffset){const e=o.camera;h(ws,t[12],t[13],t[14]);let r=null;switch(o.viewingMode){case d.Global:r=ge(xs,ws);break;case d.Local:r=xe(xs,gs)}let a=0;const s=O(Ms,ws,e.eye),c=l(s),u=Ce(s,s,1/c);let v=null;this.parameters.screenSizePerspective&&(v=Se(r,u)),a+=so(e,c,this.parameters.verticalOffset,v??0,this.parameters.screenSizePerspective),Ce(r,r,a),Te(bs,r,o.transform.inverseRotation),i=O(ms,i,bs),n=O(ps,n,bs)}Ma(e,o,i,n,Xt(o.verticalOffset),r)}createGLMaterial(e){return new us(e)}createBufferWriter(){return new es(this._vertexBufferLayout)}}class us extends Vn{constructor(e){super({...e,...e.material.parameters})}beginSlot(e){this._material.setParameters({receiveShadows:e.shadowMap.enabled});const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return h(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.acquireTechnique(t.treeRendering?ls:_r,e)}}class ds extends yr{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}function vs(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}function fs(e){const t=Be().vec3f(Ke.POSITION);e.normalType===je.Compressed?t.vec2i16(Ke.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(Ke.NORMAL),e.hasVertexTangents&&t.vec4f(Ke.TANGENT);return(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(Ke.UV0),e.hasVertexColors&&t.vec4u8(Ke.COLOR),e.hasSymbolColors&&t.vec4u8(Ke.SYMBOLCOLOR),_t()&&t.vec4u8(Ke.OBJECTANDLAYERIDCOLOR),t}const ms=a(),ps=a(),gs=M(0,0,1),xs=a(),bs=a(),ws=a(),Ms=a();class Cs{constructor(e,t,o){this.primitiveIndices=e,this._numIndexPerPrimitive=t,this.position=o,this._children=void 0,Pe(e.length>=1),Pe(3===o.size||4===o.size);const{data:i,size:n,indices:r}=o;Pe(r.length%this._numIndexPerPrimitive==0),Pe(r.length>=e.length*this._numIndexPerPrimitive);const s=e.length;let c=n*r[this._numIndexPerPrimitive*e[0]];Ts.clear(),Ts.push(c);const l=M(i[c],i[c+1],i[c+2]),h=_e(l);for(let t=0;t<s;++t){const o=this._numIndexPerPrimitive*e[t];for(let e=0;e<this._numIndexPerPrimitive;++e){c=n*r[o+e],Ts.push(c);let t=i[c];l[0]=Math.min(t,l[0]),h[0]=Math.max(t,h[0]),t=i[c+1],l[1]=Math.min(t,l[1]),h[1]=Math.max(t,h[1]),t=i[c+2],l[2]=Math.min(t,l[2]),h[2]=Math.max(t,h[2])}}this.bbMin=l,this.bbMax=h;const u=ye(a(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(h[0]-l[0],h[1]-l[1]),h[2]-l[2]);let d=this.radius*this.radius;for(let e=0;e<Ts.length;++e){c=Ts.at(e);const t=i[c]-u[0],o=i[c+1]-u[1],n=i[c+2]-u[2],r=t*t+o*o+n*n;if(r<=d)continue;const a=Math.sqrt(r),s=.5*(a-this.radius);this.radius=this.radius+s,d=this.radius*this.radius;const l=s/a;u[0]+=t*l,u[1]+=o*l,u[2]+=n*l}this.center=u,Ts.clear()}getChildren(){if(this._children||Ae(this.bbMin,this.bbMax)<=1)return this._children;const e=ye(a(),this.bbMin,this.bbMax,.5),t=this.primitiveIndices.length,o=new Uint8Array(t),i=new Array(8);for(let e=0;e<8;++e)i[e]=0;const{data:n,size:r,indices:s}=this.position;for(let a=0;a<t;++a){let t=0;const c=this._numIndexPerPrimitive*this.primitiveIndices[a];let l=r*s[c],h=n[l],u=n[l+1],d=n[l+2];for(let e=1;e<this._numIndexPerPrimitive;++e){l=r*s[c+e];const t=n[l],o=n[l+1],i=n[l+2];t<h&&(h=t),o<u&&(u=o),i<d&&(d=i)}h<e[0]&&(t|=1),u<e[1]&&(t|=2),d<e[2]&&(t|=4),o[a]=t,++i[t]}let c=0;for(let e=0;e<8;++e)i[e]>0&&++c;if(c<2)return;const l=new Array(8);for(let e=0;e<8;++e)l[e]=i[e]>0?new Uint32Array(i[e]):void 0;for(let e=0;e<8;++e)i[e]=0;for(let e=0;e<t;++e){const t=o[e];l[t][i[t]++]=this.primitiveIndices[e]}this._children=new Array;for(let e=0;e<8;++e)void 0!==l[e]&&this._children.push(new Cs(l[e],this._numIndexPerPrimitive,this.position));return this._children}static prune(){Ts.prune()}}const Ts=new g({deallocator:null});function Ss(t){if(t.length<e)return Array.from(t);if(Ee(t))return Float64Array.from(t);if(!("BYTES_PER_ELEMENT"in t))return Array.from(t);switch(t.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(t);case 2:return Oe(t)?Uint16Array.from(t):Int16Array.from(t);case 4:return Float32Array.from(t);default:return Float64Array.from(t)}}export{Za as $,Dt as A,ho as B,fa as C,Ao as D,is as E,rs as F,hi as G,wr as H,mo as I,to as J,no as K,io as L,Vn as M,Ar as N,$t as O,Ho as P,Wn as Q,po as R,_t as S,bo as T,ka as U,qa as V,Li as W,Ja as X,ja as Y,Wa as Z,$a as _,yt as a,so as a0,hs as a1,Lo as a2,Cs as a3,Tt as a4,Ss as a5,fo as a6,Ro as a7,Fo as a8,Io as a9,Tr as aa,ss as ab,xn as ac,Ln as ad,Fn as ae,It as b,Mi as c,ei as d,xi as e,Qo as f,mi as g,or as h,dr as i,Ai as j,rn as k,zi as l,Ci as m,Wt as n,lo as o,ii as p,xr as q,kt as r,vi as s,Nt as t,zo as u,fi as v,ni as w,_i as x,go as y,vo as z};
//# sourceMappingURL=p-967c3f9e.js.map