import{e as t}from"./p-dc92c2ea.js";import{dO as i,d2 as s,dP as n,fM as e}from"./p-aad64c9f.js";function h(t,i,s){for(let n=0;n<s;++n)i[2*n]=t[n],i[2*n+1]=t[n]-i[2*n]}function r(t,i){const s=t.length;for(let n=0;n<s;++n)l[0]=t[n],i[n]=l[0];return i}function o(t,i){const s=t.length;for(let n=0;n<s;++n)l[0]=t[n],l[1]=t[n]-l[0],i[n]=l[1];return i}const l=new Float32Array(2);function u(t,s,n=i.ADD,e=[0,0,0,0]){return{srcRgb:t,srcAlpha:t,dstRgb:s,dstAlpha:s,opRgb:n,opAlpha:n,color:{r:e[0],g:e[1],b:e[2],a:e[3]}}}function c(t,s,n,e,h=i.ADD,r=i.ADD,o=[0,0,0,0]){return{srcRgb:t,srcAlpha:s,dstRgb:n,dstAlpha:e,opRgb:h,opAlpha:r,color:{r:o[0],g:o[1],b:o[2],a:o[3]}}}const a=u(s.ZERO,s.ONE_MINUS_SRC_ALPHA),f=u(s.ONE,s.ONE_MINUS_SRC_ALPHA),g=c(s.SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA),d={face:n.BACK,mode:e.CCW},_={face:n.FRONT,mode:e.CCW},p=i=>i===t.Back?d:i===t.Front?_:null,w={zNear:0,zFar:1},b={r:!0,g:!0,b:!0,a:!0};function W(t){return P.intern(t)}function v(t){return z.intern(t)}function D(t){return M.intern(t)}function S(t){return N.intern(t)}function T(t){return q.intern(t)}function A(t){return G.intern(t)}function B(t){return I.intern(t)}function m(t){return K.intern(t)}function C(t){return Q.intern(t)}function R(t){return V.intern(t)}class y{constructor(t,i){this._makeKey=t,this._makeRef=i,this._interns=new Map}intern(t){if(!t)return null;const i=this._makeKey(t),s=this._interns;return s.has(i)||s.set(i,this._makeRef(t)),s.get(i)??null}}function O(t){return"["+t.join(",")+"]"}const P=new y(j,(t=>({__tag:"Blending",...t})));function j(t){return t?O([t.srcRgb,t.srcAlpha,t.dstRgb,t.dstAlpha,t.opRgb,t.opAlpha,t.color.r,t.color.g,t.color.b,t.color.a]):null}const z=new y(F,(t=>({__tag:"Culling",...t})));function F(t){return t?O([t.face,t.mode]):null}const M=new y(x,(t=>({__tag:"PolygonOffset",...t})));function x(t){return t?O([t.factor,t.units]):null}const N=new y(k,(t=>({__tag:"DepthTest",...t})));function k(t){return t?O([t.func]):null}const q=new y(E,(t=>({__tag:"StencilTest",...t})));function E(t){return t?O([t.function.func,t.function.ref,t.function.mask,t.operation.fail,t.operation.zFail,t.operation.zPass]):null}const G=new y(H,(t=>({__tag:"DepthWrite",...t})));function H(t){return t?O([t.zNear,t.zFar]):null}const I=new y(J,(t=>({__tag:"ColorWrite",...t})));function J(t){return t?O([t.r,t.g,t.b,t.a]):null}const K=new y(L,(t=>({__tag:"StencilWrite",...t})));function L(t){return t?O([t.mask]):null}const Q=new y(U,(t=>({__tag:"DrawBuffers",...t})));function U(t){return t?O(t.buffers):null}const V=new y(X,(t=>({blending:W(t.blending),culling:v(t.culling),polygonOffset:D(t.polygonOffset),depthTest:S(t.depthTest),stencilTest:T(t.stencilTest),depthWrite:A(t.depthWrite),colorWrite:B(t.colorWrite),stencilWrite:m(t.stencilWrite),drawBuffers:C(t.drawBuffers)})));function X(t){return t?O([j(t.blending),F(t.culling),x(t.polygonOffset),k(t.depthTest),E(t.stencilTest),H(t.depthWrite),J(t.colorWrite),L(t.stencilWrite),U(t.drawBuffers)]):null}class Y{constructor(t){this._pipelineInvalid=!0,this._blendingInvalid=!0,this._cullingInvalid=!0,this._polygonOffsetInvalid=!0,this._depthTestInvalid=!0,this._stencilTestInvalid=!0,this._depthWriteInvalid=!0,this._colorWriteInvalid=!0,this._stencilWriteInvalid=!0,this._drawBuffersInvalid=!0,this._stateSetters=t}setPipeline(t){(this._pipelineInvalid||t!==this._pipeline)&&(this._setBlending(t.blending),this._setCulling(t.culling),this._setPolygonOffset(t.polygonOffset),this._setDepthTest(t.depthTest),this._setStencilTest(t.stencilTest),this._setDepthWrite(t.depthWrite),this._setColorWrite(t.colorWrite),this._setStencilWrite(t.stencilWrite),this._setDrawBuffers(t.drawBuffers),this._pipeline=t),this._pipelineInvalid=!1}invalidateBlending(){this._blendingInvalid=!0,this._pipelineInvalid=!0}invalidateCulling(){this._cullingInvalid=!0,this._pipelineInvalid=!0}invalidatePolygonOffset(){this._polygonOffsetInvalid=!0,this._pipelineInvalid=!0}invalidateDepthTest(){this._depthTestInvalid=!0,this._pipelineInvalid=!0}invalidateStencilTest(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDepthWrite(){this._depthWriteInvalid=!0,this._pipelineInvalid=!0}invalidateColorWrite(){this._colorWriteInvalid=!0,this._pipelineInvalid=!0}invalidateStencilWrite(){this._stencilTestInvalid=!0,this._pipelineInvalid=!0}invalidateDrawBuffers(){this._drawBuffersInvalid=!0,this._pipelineInvalid=!0}_setBlending(t){this._blending=this._setSubState(t,this._blending,this._blendingInvalid,this._stateSetters.setBlending),this._blendingInvalid=!1}_setCulling(t){this._culling=this._setSubState(t,this._culling,this._cullingInvalid,this._stateSetters.setCulling),this._cullingInvalid=!1}_setPolygonOffset(t){this._polygonOffset=this._setSubState(t,this._polygonOffset,this._polygonOffsetInvalid,this._stateSetters.setPolygonOffset),this._polygonOffsetInvalid=!1}_setDepthTest(t){this._depthTest=this._setSubState(t,this._depthTest,this._depthTestInvalid,this._stateSetters.setDepthTest),this._depthTestInvalid=!1}_setStencilTest(t){this._stencilTest=this._setSubState(t,this._stencilTest,this._stencilTestInvalid,this._stateSetters.setStencilTest),this._stencilTestInvalid=!1}_setDepthWrite(t){this._depthWrite=this._setSubState(t,this._depthWrite,this._depthWriteInvalid,this._stateSetters.setDepthWrite),this._depthWriteInvalid=!1}_setColorWrite(t){this._colorWrite=this._setSubState(t,this._colorWrite,this._colorWriteInvalid,this._stateSetters.setColorWrite),this._colorWriteInvalid=!1}_setStencilWrite(t){this._stencilWrite=this._setSubState(t,this._stencilWrite,this._stencilWriteInvalid,this._stateSetters.setStencilWrite),this._stencilTestInvalid=!1}_setDrawBuffers(t){this._drawBuffers=this._setSubState(t,this._drawBuffers,this._drawBuffersInvalid,this._stateSetters.setDrawBuffers),this._drawBuffersInvalid=!1}_setSubState(t,i,s,n){return(s||t!==i)&&(n(t),this._pipelineInvalid=!0),t}}export{R as B,Y as Q,a,r as b,g as c,o as d,p as f,b as g,f as o,w as p,c as r,h as t};
//# sourceMappingURL=p-790e1969.js.map