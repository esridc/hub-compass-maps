import{hy as e,ij as t,i as o,jm as i,a2 as n,ig as r,as as a,a0 as s,nF as l,it as c,c4 as u,b9 as h,nG as d,nH as v,cI as f,s as m,a as p,y as g,lK as x,mf as w,jv as b,nI as y,W as C,nJ as M,S,V as T,r as A,ac as _,hu as E,hC as F,nr as R,nK as O,nL as I,ia as L,ie as z,al as G,gn as N,nM as D,az as P,at as B,jI as j,jF as V,nN as H,nO as U,gY as W,iE as $,iF as k,id as Y,nP as q,an as J,iB as X,ii as Z,jE as K,k0 as Q,ao as ee,ap as te,am as oe,nQ as ie,i7 as ne,aE as re,aA as ae,ah as se,fn as le,bl as ce,ip as ue,h as he,i8 as de,gv as ve,i9 as fe,nR as me,lU as pe,hj as ge,U as xe,du as we,lY as be,nS as ye,nT as Ce,is as Me,ns as Se,j_ as Te}from"./p-028496e2.js";import{t as Ae,e as _e,o as Ee}from"./p-10315be7.js";import{o as Fe,r as Re,e as Oe}from"./p-5f148c96.js";import{x as Ie,c as Le,y as ze,u as Ge,q as Ne,i as De,L as Pe,O as Be,E as je}from"./p-5b5798d6.js";import{r as Ve,n as He,u as Ue}from"./p-f251e1c8.js";import{l as We,n as $e,o as ke,f as Ye,a as qe,u as Je,t as Xe,b as Ze,c as Ke}from"./p-060522cc.js";import{r as Qe}from"./p-bcd4a623.js";import{t as et}from"./p-bb7a38bc.js";import{t as tt,l as ot}from"./p-76761730.js";import{t as it}from"./p-506548f5.js";import{O as nt,L as rt,t as at}from"./p-063c1865.js";import{t as st,u as lt,a as ct,i as ut,N as ht,s as dt,e as vt,n as ft}from"./p-894e6a6a.js";import{d as mt,e as pt,o as gt}from"./p-795373cb.js";import{e as xt}from"./p-c99b552a.js";import{L as wt,c as bt,G as yt,D as Ct,E as Mt,O as St,I as Tt,t as At,_ as _t}from"./p-8567e6fe.js";import{m as Et,a as Ft,d as Rt,b as Ot}from"./p-711ed159.js";import{H as It}from"./p-c67db40b.js";import{o as Lt,n as zt,a as Gt}from"./p-54d1d89d.js";import{a as Nt}from"./p-7580bdba.js";import{o as Dt,r as Pt,S as Bt,_ as jt,c as Vt,A as Ht,h as Ut,l as Wt,a as $t,b as kt,d as Yt}from"./p-2e4751c2.js";import{w as qt,Z as Jt}from"./p-a6f5fa00.js";import{n as Xt}from"./p-d6e149e3.js";function Zt(t,o=!1){return t<=e?o?new Array(t).fill(0):new Array(t):new Float32Array(t)}function Kt(i){if(i.length<e)return Array.from(i);if(t(i))return Float64Array.from(i);if(!("BYTES_PER_ELEMENT"in i))return Array.from(i);switch(i.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(i);case 2:return o(i)?Uint16Array.from(i):Int16Array.from(i);case 4:return Float32Array.from(i);default:return Float64Array.from(i)}}class Qt{constructor(){this.id=i()}}function eo(e,t){if(!e)return!1;const{size:o,data:i,indices:s}=e;n(t,0,0,0),n(ao,0,0,0);let l=0,c=0;for(let e=0;e<s.length-2;e+=3){const u=s[e]*o,h=s[e+1]*o,d=s[e+2]*o;n(io,i[u],i[u+1],i[u+2]),n(no,i[h],i[h+1],i[h+2]),n(ro,i[d],i[d+1],i[d+2]);const v=mt(io,no,ro);v?(r(io,io,no),r(io,io,ro),a(io,io,1/3*v),r(t,t,io),l+=v):(r(ao,ao,io),r(ao,ao,no),r(ao,ao,ro),c+=3)}return(0!==c||0!==l)&&(0!==l?(a(t,t,1/l),!0):0!==c&&(a(t,ao,1/c),!0))}function to(e,t){if(!e)return!1;const{size:o,data:i,indices:r}=e;n(t,0,0,0);let s=-1,l=0;for(let e=0;e<r.length;e++){const n=r[e]*o;s!==n&&(t[0]+=i[n],t[1]+=i[n+1],t[2]+=i[n+2],l++),s=n}return l>1&&a(t,t,1/l),l>0}function oo(e,t,o){if(!e)return!1;n(o,0,0,0),n(ao,0,0,0);let i=0,s=0;const{size:c,data:u,indices:h}=e,d=h.length-1,v=d+(t?2:0);for(let e=0;e<v;e+=2){const t=e<d?e+1:0,n=h[e<d?e:d]*c,v=h[t]*c;io[0]=u[n],io[1]=u[n+1],io[2]=u[n+2],no[0]=u[v],no[1]=u[v+1],no[2]=u[v+2],a(io,r(io,io,no),.5);const f=l(io,no);f>0?(r(o,o,a(io,io,f)),i+=f):0===i&&(r(ao,ao,io),s++)}return 0!==i?(a(o,o,1/i),!0):0!==s&&(a(o,ao,1/s),!0)}const io=s(),no=s(),ro=s(),ao=s();class so{constructor(e){this.channel=e,this.id=i()}}function lo(e,t){return null==e&&(e=[]),e.push(t),e}function co(e,t){if(null==e)return null;const o=e.filter((e=>e!==t));return 0===o.length?null:o}class uo extends Qt{constructor(e,t,o=null,i=pt.Mesh,n=null,r=-1){super(),this.material=e,this.mapPositions=o,this.type=i,this.objectAndLayerIdColor=n,this.edgeIndicesLength=r,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[e,o]of t)this._attributes.set(e,{...o,indices:tt(o.indices)}),e===xt.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(e).indices.length:this.edgeIndicesLength)}instantiate(e={}){const t=new uo(e.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach(((e,o)=>{e.exclusive=!1,t._attributes.set(o,e)})),t._boundingInfo=this._boundingInfo,t.transformation=e.transformation||this.transformation,t}get attributes(){return this._attributes}getMutableAttribute(e){let t=this._attributes.get(e);return t&&!t.exclusive&&(t={...t,exclusive:!0,data:Kt(t.data)},this._attributes.set(e,t)),t}setAttributeData(e,t){const o=this._attributes.get(e);o&&this._attributes.set(e,{...o,exclusive:!0,data:t})}get indexCount(){const e=this._attributes.values().next().value.indices;return e?.length??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return null==this._boundingInfo&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(e){return!!(this.type===pt.Mesh?this._computeAttachmentOriginTriangles(e):this.type===pt.Line?this._computeAttachmentOriginLines(e):this._computeAttachmentOriginPoints(e))&&(null!=this._transformation&&c(e,e,this._transformation),!0)}_computeAttachmentOriginTriangles(e){const t=this.attributes.get(xt.POSITION);return eo(t,e)}_computeAttachmentOriginLines(e){const t=this.attributes.get(xt.POSITION);return oo(t,ho(this.material.parameters,t),e)}_computeAttachmentOriginPoints(e){const t=this.attributes.get(xt.POSITION);return to(t,e)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const e=this.attributes.get(xt.POSITION);if(!e||0===e.indices.length)return null;const t=this.type===pt.Mesh?3:1;u(e.indices.length%t==0,"Indexing error: "+e.indices.length+" not divisible by "+t);const o=ot(e.indices.length/t);return new gt(o,t,e)}get transformation(){return this._transformation??Fe}set transformation(e){this._transformation=e&&e!==Fe?Re(e):null}addHighlight(){const e=new so(st.Highlight);return this.highlights=lo(this.highlights,e),e}removeHighlight(e){this.highlights=co(this.highlights,e)}}function ho(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}function vo(e){if(null==e)return null;const t=null!=e.offset?e.offset:d,o=null!=e.rotation?e.rotation:0,i=null!=e.scale?e.scale:v,n=Ae(1,0,0,0,1,0,t[0],t[1],1),r=Ae(Math.cos(o),-Math.sin(o),0,Math.sin(o),Math.cos(o),0,0,0,1),a=Ae(i[0],0,0,0,i[1],0,0,0,1),s=_e();return h(s,r,a),h(s,n,s),s}class fo{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}}class mo{constructor(e,t,o){this.name=e,this.lodThreshold=t,this.pivotOffset=o,this.stageResources=new fo,this.numberOfVertices=0}}function po(){if(null==go){const e=e=>f(`esri/libs/basisu/${e}`);go=import("./p-e684a629.js").then((e=>e.b)).then((({default:t})=>t({locateFile:e}).then((e=>(e.initializeBasis(),delete e.then,e)))))}return go}let go;var xo;!function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"}(xo||(xo={}));let wo=null,bo=null;async function yo(){return null==bo&&(bo=po(),wo=await bo),bo}function Co(e,t){if(null==wo)return e.byteLength;const o=new wo.BasisFile(new Uint8Array(e)),i=To(o)?So(o.getNumLevels(0),o.getHasAlpha(),o.getImageWidth(0,0),o.getImageHeight(0,0),t):0;return o.close(),o.delete(),i}function Mo(e,t){if(null==wo)return e.byteLength;const o=new wo.KTX2File(new Uint8Array(e)),i=Ao(o)?So(o.getLevels(),o.getHasAlpha(),o.getWidth(),o.getHeight(),t):0;return o.close(),o.delete(),i}function So(e,t,o,i,n){const r=Ft(t?bt.COMPRESSED_RGBA8_ETC2_EAC:bt.COMPRESSED_RGB8_ETC2),a=n&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(o*i*r*a)}function To(e){return e.getNumImages()>=1&&!e.isUASTC()}function Ao(e){return e.getFaces()>=1&&e.isETC1S()}async function _o(e,t,o){null==wo&&(wo=await yo());const i=new wo.BasisFile(new Uint8Array(o));if(!To(i))return null;i.startTranscoding();const n=Fo(e,t,i.getNumLevels(0),i.getHasAlpha(),i.getImageWidth(0,0),i.getImageHeight(0,0),((e,t)=>i.getImageTranscodedSizeInBytes(0,e,t)),((e,t,o)=>i.transcodeImage(o,0,e,t,0,0)));return i.close(),i.delete(),n}async function Eo(e,t,o){null==wo&&(wo=await yo());const i=new wo.KTX2File(new Uint8Array(o));if(!Ao(i))return null;i.startTranscoding();const n=Fo(e,t,i.getLevels(),i.getHasAlpha(),i.getWidth(),i.getHeight(),((e,t)=>i.getImageTranscodedSizeInBytes(e,0,0,t)),((e,t,o)=>i.transcodeImage(o,e,0,0,t,0,-1,-1)));return i.close(),i.delete(),n}function Fo(e,t,o,i,n,r,a,s){const{compressedTextureETC:l,compressedTextureS3TC:c}=e.capabilities,[u,h]=l?i?[xo.ETC2_RGBA,bt.COMPRESSED_RGBA8_ETC2_EAC]:[xo.ETC1_RGB,bt.COMPRESSED_RGB8_ETC2]:c?i?[xo.BC3_RGBA,bt.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[xo.BC1_RGB,bt.COMPRESSED_RGB_S3TC_DXT1_EXT]:[xo.RGBA32,yt.RGBA],d=t.hasMipmap?o:Math.min(1,o),v=[];for(let e=0;e<d;e++)v.push(new Uint8Array(a(e,u))),s(e,u,v[e]);return t.internalFormat=h,t.hasMipmap=v.length>1,t.samplingMode=t.hasMipmap?wt.LINEAR_MIPMAP_LINEAR:wt.LINEAR,t.width=n,t.height=r,new Et(e,t,{type:"compressed",levels:v})}const Ro=()=>m.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),Oo=542327876,Io=131072,Lo=4;function zo(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function Go(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const No=zo("DXT1"),Do=zo("DXT3"),Po=zo("DXT5"),Bo=31,jo=0,Vo=1,Ho=2,Uo=3,Wo=4,$o=7,ko=20,Yo=21;function qo(e,t,o){const i=Jo(o,t.hasMipmap??!1);if(null==i)throw new Error("DDS texture data is null");const{textureData:n,internalFormat:r,width:a,height:s}=i;return t.samplingMode=n.levels.length>1?wt.LINEAR_MIPMAP_LINEAR:wt.LINEAR,t.hasMipmap=n.levels.length>1,t.internalFormat=r,t.width=a,t.height=s,new Et(e,t,n)}function Jo(e,t){const o=new Int32Array(e,0,Bo);if(o[jo]!==Oo)return Ro().error("Invalid magic number in DDS header"),null;if(!(o[ko]&Lo))return Ro().error("Unsupported format, must contain a FourCC code"),null;const i=o[Yo];let n,r;switch(i){case No:n=8,r=bt.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Do:n=16,r=bt.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Po:n=16,r=bt.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Ro().error("Unsupported FourCC code:",Go(i)),null}let a=1,s=o[Wo],l=o[Uo];0==(3&s)&&0==(3&l)||(Ro().warn("Rounding up compressed texture size to nearest multiple of 4."),s=s+3&-4,l=l+3&-4);const c=s,u=l;let h,d;o[Ho]&Io&&!1!==t&&(a=Math.max(1,o[$o]));let v=o[Vo]+4;const f=[];for(let t=0;t<a;++t)d=(s+3>>2)*(l+3>>2)*n,h=new Uint8Array(e,v,d),f.push(h),v+=d,s=Math.max(1,s>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:f},internalFormat:r,width:c,height:u}}function Xo(e,t){const o=1048576,i=4096,n=2;let r=e.width*e.height;if(r<i)return e instanceof ImageData?Qo(e):e;let a=e.width,s=e.height;do{a=Math.ceil(a/n),s=Math.ceil(s/n),r=a*s}while(r>o||null!=t&&(a>t||s>t));return Ko(e,a,s)}function Zo(e,t){const o=Math.max(e.width,e.height);if(o<=t)return e;const i=t/o;return Ko(e,Math.round(e.width*i),Math.round(e.height*i))}function Ko(e,t,o){if(e instanceof ImageData)return Ko(Qo(e),t,o);const i=document.createElement("canvas");i.width=t,i.height=o;return i.getContext("2d").drawImage(e,0,0,i.width,i.height),i}function Qo(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const o=t.getContext("2d");if(null==o)throw new p("Failed to create 2d context from HTMLCanvasElement");return o.putImageData(e,0,0),t}class ei extends Qt{get parameters(){return this._parameters}constructor(e,t){super(),this._data=e,this.type=pt.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new g,this._parameters={...ni,...t},this._startPreload(e)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(e){null!=e&&(e instanceof HTMLVideoElement?(this.frameUpdate=t=>this._frameUpdate(e,t),this._startPreloadVideoElement(e)):e instanceof HTMLImageElement&&this._startPreloadImageElement(e))}_startPreloadVideoElement(e){if(!(x(e.src)||"auto"===e.preload&&e.crossOrigin)){e.preload="auto",e.crossOrigin="anonymous";const t=!e.paused;if(e.src=e.src,t&&e.autoplay){const t=()=>{e.removeEventListener("canplay",t),e.play()};e.addEventListener("canplay",t)}}}_startPreloadImageElement(e){w(e.src)||x(e.src)||e.crossOrigin||(e.crossOrigin="anonymous",e.src=e.src)}_createDescriptor(e){const t=new Rt;return t.wrapMode=this._parameters.wrap??Ct.REPEAT,t.flipped=!this._parameters.noUnpackFlip,t.samplingMode=this._parameters.mipmap?wt.LINEAR_MIPMAP_LINEAR:wt.LINEAR,t.hasMipmap=!!this._parameters.mipmap,t.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,t.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?e.parameters.maxMaxAnisotropy:1),t}get glTexture(){return this._glTexture}get memoryEstimate(){return this._glTexture?.usedMemory||ti(this._data,this._parameters)}load(e){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const t=this._data;return null==t?(this._glTexture=new Et(e,this._createDescriptor(e),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),"string"==typeof t?this._loadFromURL(e,t):t instanceof Image?this._loadFromImageElement(e,t):t instanceof HTMLVideoElement?this._loadFromVideoElement(e,t):t instanceof ImageData||t instanceof HTMLCanvasElement?this._loadFromImage(e,t):(b(t)||y(t))&&this._parameters.encoding===lt.DDS_ENCODING?this._loadFromDDSData(e,t):(b(t)||y(t))&&this._parameters.encoding===lt.KTX2_ENCODING?this._loadFromKTX2(e,t):(b(t)||y(t))&&this._parameters.encoding===lt.BASIS_ENCODING?this._loadFromBasis(e,t):y(t)?this._loadFromPixelData(e,t):b(t)?this._loadFromPixelData(e,new Uint8Array(t)):null)}_frameUpdate(e,t){return null==this._glTexture||e.readyState<ii.HAVE_CURRENT_DATA||t===e.currentTime?t:(this._glTexture.setData(e),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),e.currentTime)}_loadFromDDSData(e,t){return this._glTexture=qo(e,this._createDescriptor(e),t),this._glTexture}_loadFromKTX2(e,t){return this._loadAsync((()=>Eo(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromBasis(e,t){return this._loadAsync((()=>_o(e,this._createDescriptor(e),t).then((e=>(this._glTexture=e,e)))))}_loadFromPixelData(e,t){u(this._parameters.width>0&&this._parameters.height>0);const o=this._createDescriptor(e);return o.pixelFormat=1===this._parameters.components?yt.LUMINANCE:3===this._parameters.components?yt.RGB:yt.RGBA,o.width=this._parameters.width??0,o.height=this._parameters.height??0,this._glTexture=new Et(e,o,t),this._glTexture}_loadFromURL(e,t){return this._loadAsync((async o=>{const i=await it(t,{signal:o});return C(o),this._loadFromImage(e,i)}))}_loadFromImageElement(e,t){return t.complete?this._loadFromImage(e,t):this._loadAsync((async o=>{const i=await M(t,t.src,!1,o);return C(o),this._loadFromImage(e,i)}))}_loadFromVideoElement(e,t){return t.readyState>=ii.HAVE_CURRENT_DATA?this._loadFromImage(e,t):this._loadFromVideoElementAsync(e,t)}_loadFromVideoElementAsync(e,t){return this._loadAsync((o=>new Promise(((i,n)=>{const r=()=>{t.removeEventListener("loadeddata",a),t.removeEventListener("error",s),_(l)},a=()=>{t.readyState>=ii.HAVE_CURRENT_DATA&&(r(),i(this._loadFromImage(e,t)))},s=e=>{r(),n(e||new p("Failed to load video"))};t.addEventListener("loadeddata",a),t.addEventListener("error",s);const l=S(o,(()=>s(T())))}))))}_loadFromImage(e,t){let o=t;if(!(o instanceof HTMLVideoElement)){const{maxTextureSize:t}=e.parameters;o=this._parameters.downsampleUncompressed?Xo(o,t):Zo(o,t)}const i=oi(o);this._parameters.width=i.width,this._parameters.height=i.height;const n=this._createDescriptor(e);return n.pixelFormat=3===this._parameters.components?yt.RGB:yt.RGBA,n.width=i.width,n.height=i.height,this._glTexture=new Et(e,n,o),this._glTexture}_loadAsync(e){const t=new AbortController;this._loadingController=t;const o=e(t.signal);this._loadingPromise=o;const i=()=>{this._loadingController===t&&(this._loadingController=null),this._loadingPromise===o&&(this._loadingPromise=null)};return o.then(i,i),o}unload(){if(this._glTexture=A(this._glTexture),null!=this._loadingController){const e=this._loadingController;this._loadingController=null,this._loadingPromise=null,e.abort()}this.events.emit("unloaded")}}function ti(e,t){if(null==e)return 0;if(b(e)||y(e))return t.encoding===lt.KTX2_ENCODING?Mo(e,!!t.mipmap):t.encoding===lt.BASIS_ENCODING?Co(e,!!t.mipmap):e.byteLength;const{width:o,height:i}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?oi(e):t;return(t.mipmap?4/3:1)*o*i*(t.components||4)||0}function oi(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var ii;!function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"}(ii||(ii={}));const ni={wrap:{s:Ct.REPEAT,t:Ct.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var ri;function ai(e){return e===ri.Shadow||e===ri.ShadowHighlight||e===ri.ShadowExcludeHighlight}function si(e){return hi(e)||e===ri.Normal}function li(e){return e===ri.Highlight||e===ri.ObjectAndLayerIdColor}function ci(e){return e===ri.Color||e===ri.Alpha}function ui(e){return ci(e)||li(e)}function hi(e){return ui(e)||e===ri.LinearDepth}!function(e){e[e.Color=0]="Color",e[e.LinearDepth=1]="LinearDepth",e[e.Depth=2]="Depth",e[e.Normal=3]="Normal",e[e.Shadow=4]="Shadow",e[e.ShadowHighlight=5]="ShadowHighlight",e[e.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",e[e.Highlight=7]="Highlight",e[e.Alpha=8]="Alpha",e[e.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",e[e.CompositeColor=10]="CompositeColor",e[e.COUNT=11]="COUNT"}(ri||(ri={}));function di(e,t){switch(t.normalType){case vi.Compressed:e.attributes.add(xt.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(Lt`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case vi.Attribute:e.attributes.add(xt.NORMAL,"vec3"),e.vertex.code.add(Lt`vec3 normalModel() {
return normal;
}`);break;case vi.ScreenDerivative:e.fragment.code.add(Lt`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:case vi.COUNT:case vi.Ground:}}var vi;!function(e){e[e.Attribute=0]="Attribute",e[e.Compressed=1]="Compressed",e[e.Ground=2]="Ground",e[e.ScreenDerivative=3]="ScreenDerivative",e[e.COUNT=4]="COUNT"}(vi||(vi={}));function fi(e,t){const o=e.fragment;switch(o.code.add(Lt`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),t.doubleSidedMode){case mi.None:o.code.add(Lt`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case mi.View:o.code.add(Lt`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case mi.WindingOrder:o.code.add(Lt`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:case mi.COUNT:}}var mi;!function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"}(mi||(mi={}));var pi;function gi(e,t){switch(t.textureCoordinateType){case pi.Default:return e.attributes.add(xt.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(Lt`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case pi.Compressed:return e.attributes.add(xt.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(Lt`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case pi.Atlas:return e.attributes.add(xt.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(xt.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(Lt`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:case pi.None:return void e.vertex.code.add(Lt`void forwardTextureCoordinates() {}`);case pi.COUNT:return}}!function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"}(pi||(pi={}));function xi(e){e.fragment.code.add(Lt`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function wi(e,t){switch(e.include(gi,t),t.textureCoordinateType){case pi.Default:case pi.Compressed:return void e.fragment.code.add(Lt`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case pi.Atlas:return e.include(xi),void e.fragment.code.add(Lt`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:case pi.None:case pi.COUNT:return}}class bi{constructor(e,t,o,i,n=null){if(this.name=e,this.type=t,this.arraySize=n,this.bind={[Nt.Pass]:null,[Nt.Draw]:null},i)switch(o){case Nt.Pass:this.bind[Nt.Pass]=i;break;case Nt.Draw:this.bind[Nt.Draw]=i}}equals(e){return this.type===e.type&&this.name===e.name&&this.arraySize===e.arraySize}}class yi extends bi{constructor(e,t){super(e,"vec3",Nt.Draw,((o,i,n,r)=>o.setUniform3fv(e,t(i,n,r))))}}class Ci extends bi{constructor(e,t){super(e,"vec3",Nt.Pass,((o,i,n)=>o.setUniform3fv(e,t(i,n))))}}class Mi extends bi{constructor(e,t){super(e,"sampler2D",Nt.Draw,((o,i,n)=>o.bindTexture(e,t(i,n))))}}class Si extends bi{constructor(e,t){super(e,"sampler2D",Nt.Pass,((o,i,n)=>o.bindTexture(e,t(i,n))))}}class Ti{constructor(e){this._material=e.material,this._techniqueRepository=e.techniqueRep,this._output=e.output}dispose(){this._techniqueRepository.release(this._technique)}get technique(){return this._technique}get _stippleTextureRepository(){return this._techniqueRepository.constructionContext.stippleTextureRepository}get _markerTextureRepository(){return this._techniqueRepository.constructionContext.markerTextureRepository}ensureTechnique(e,t){return this._technique=this._techniqueRepository.releaseAndAcquire(e,this._material.getConfiguration(this._output,t),this._technique),this._technique}ensureResources(e){return ct.LOADED}}class Ai extends Ti{constructor(e){super(e),this._numLoading=0,this._disposed=!1,this._textureRepository=e.textureRepository,this._textureId=e.textureId,this._acquire(e.textureId,(e=>this._texture=e)),this._acquire(e.normalTextureId,(e=>this._textureNormal=e)),this._acquire(e.emissiveTextureId,(e=>this._textureEmissive=e)),this._acquire(e.occlusionTextureId,(e=>this._textureOcclusion=e)),this._acquire(e.metallicRoughnessTextureId,(e=>this._textureMetallicRoughness=e))}dispose(){this._texture=E(this._texture),this._textureNormal=E(this._textureNormal),this._textureEmissive=E(this._textureEmissive),this._textureOcclusion=E(this._textureOcclusion),this._textureMetallicRoughness=E(this._textureMetallicRoughness),this._disposed=!0}ensureResources(e){return 0===this._numLoading?ct.LOADED:ct.LOADING}get textureBindParameters(){return new _i(null!=this._texture?this._texture.glTexture:null,null!=this._textureNormal?this._textureNormal.glTexture:null,null!=this._textureEmissive?this._textureEmissive.glTexture:null,null!=this._textureOcclusion?this._textureOcclusion.glTexture:null,null!=this._textureMetallicRoughness?this._textureMetallicRoughness.glTexture:null)}updateTexture(e){null!=this._texture&&e===this._texture.id||(this._texture=E(this._texture),this._textureId=e,this._acquire(this._textureId,(e=>this._texture=e)))}_acquire(e,t){if(null==e)return void t(null);const o=this._textureRepository.acquire(e);if(F(o))return++this._numLoading,void o.then((e=>{if(this._disposed)return E(e),void t(null);t(e)})).finally((()=>--this._numLoading));t(o)}}class _i extends zt{constructor(e=null,t=null,o=null,i=null,n=null,r,a){super(),this.texture=e,this.textureNormal=t,this.textureEmissive=o,this.textureOcclusion=i,this.textureMetallicRoughness=n,this.scale=r,this.normalTextureTransformMatrix=a}}var Ei;!function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"}(Ei||(Ei={}));function Fi(e,t){const o=e.fragment,i=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===Ei.Normal&&i&&e.include(wi,t),t.pbrMode!==Ei.Schematic)if(t.pbrMode!==Ei.Disabled){if(t.pbrMode===Ei.Normal){o.code.add(Lt`vec3 mrr;
vec3 emission;
float occlusion;`);const e=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(o.uniforms.add(e===Nt.Pass?new Si("texMetallicRoughness",(e=>e.textureMetallicRoughness)):new Mi("texMetallicRoughness",(e=>e.textureMetallicRoughness))),o.code.add(Lt`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(o.uniforms.add(e===Nt.Pass?new Si("texEmission",(e=>e.textureEmissive)):new Mi("texEmission",(e=>e.textureEmissive))),o.code.add(Lt`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(o.uniforms.add(e===Nt.Pass?new Si("texOcclusion",(e=>e.textureOcclusion)):new Mi("texOcclusion",(e=>e.textureOcclusion))),o.code.add(Lt`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):o.code.add(Lt`float getBakedOcclusion() { return 1.0; }`),e===Nt.Pass?o.uniforms.add(new Ci("emissionFactor",(e=>e.emissiveFactor)),new Ci("mrrFactors",(e=>e.mrrFactors))):o.uniforms.add(new yi("emissionFactor",(e=>e.emissiveFactor)),new yi("mrrFactors",(e=>e.mrrFactors))),o.code.add(Lt`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?Lt`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?Lt`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?Lt`applyEmission(${t.hasEmissiveTextureTransform?Lt`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?Lt`applyOcclusion(${t.hasOcclusionTextureTransform?Lt`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else o.code.add(Lt`float getBakedOcclusion() { return 1.0; }`);else o.code.add(Lt`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}const Ri=new Map([[xt.POSITION,0],[xt.NORMAL,1],[xt.NORMALCOMPRESSED,1],[xt.UV0,2],[xt.COLOR,3],[xt.COLORFEATUREATTRIBUTE,3],[xt.SIZE,4],[xt.TANGENT,4],[xt.CENTEROFFSETANDDISTANCE,5],[xt.SYMBOLCOLOR,5],[xt.FEATUREATTRIBUTE,6],[xt.INSTANCEFEATUREATTRIBUTE,6],[xt.INSTANCECOLOR,7],[xt.OBJECTANDLAYERIDCOLOR,7],[xt.INSTANCEOBJECTANDLAYERIDCOLOR,7],[xt.INSTANCEMODEL,8],[xt.INSTANCEMODELNORMAL,12],[xt.INSTANCEMODELORIGINHI,11],[xt.INSTANCEMODELORIGINLO,15]]);function Oi(e){return Math.abs(e*e*e)}function Ii(e,t,o){const i=o.parameters;return Gi.scale=Math.min(i.divisor/(t-i.offset),1),Gi.factor=Oi(e),Gi}function Li(e,t){return R(e*Math.max(t.scale,t.minScaleFactor),e,t.factor)}function zi(e,t,o,i){return Li(e,Ii(t,o,i))}const Gi={scale:0,factor:0,minScaleFactor:0};const Ni=N();function Di(e,t,o,i,n,r){if(e.visible)if(e.boundingInfo){u(e.type===pt.Mesh);const a=t.tolerance;Bi(e.boundingInfo,o,i,a,n,r)}else{const t=e.attributes.get(xt.POSITION),a=t.indices;Vi(o,i,0,a.length/3,a,t,void 0,n,r)}}const Pi=s();function Bi(e,t,o,i,n,r){if(null==e)return;const a=ki(t,o,Pi);if(O(Ni,e.bbMin),I(Ni,e.bbMax),null!=n&&n.applyToAabb(Ni),Yi(Ni,t,a,i)){const{primitiveIndices:a,position:s}=e,l=a?a.length:s.indices.length/3;if(l>en){const a=e.getChildren();if(void 0!==a){for(const e of a)Bi(e,t,o,i,n,r);return}}Vi(t,o,0,l,s.indices,s,a,n,r)}}const ji=s();function Vi(e,t,o,i,n,r,a,s,l){if(a)return Hi(e,t,o,i,n,r,a,s,l);const{data:c,stride:u}=r,h=e[0],d=e[1],v=e[2],f=t[0]-h,m=t[1]-d,p=t[2]-v;for(let e=o,t=3*o;e<i;++e){let o=u*n[t++],i=c[o++],r=c[o++],a=c[o];o=u*n[t++];let g=c[o++],x=c[o++],w=c[o];o=u*n[t++];let b=c[o++],y=c[o++],C=c[o];null!=s&&([i,r,a]=s.applyToVertex(i,r,a,e),[g,x,w]=s.applyToVertex(g,x,w,e),[b,y,C]=s.applyToVertex(b,y,C,e));const M=g-i,S=x-r,T=w-a,A=b-i,_=y-r,E=C-a,F=m*E-_*p,R=p*A-E*f,O=f*_-A*m,I=M*F+S*R+T*O;if(Math.abs(I)<=Number.EPSILON)continue;const L=h-i,z=d-r,G=v-a,N=L*F+z*R+G*O;if(I>0){if(N<0||N>I)continue}else if(N>0||N<I)continue;const D=z*T-S*G,P=G*M-T*L,B=L*S-M*z,j=f*D+m*P+p*B;if(I>0){if(j<0||N+j>I)continue}else if(j>0||N+j<I)continue;const V=(A*D+_*P+E*B)/I;if(V>=0){l(V,$i(M,S,T,A,_,E,ji),e,!1)}}}function Hi(e,t,o,i,n,r,a,s,l){const{data:c,stride:u}=r,h=e[0],d=e[1],v=e[2],f=t[0]-h,m=t[1]-d,p=t[2]-v;for(let e=o;e<i;++e){const t=a[e];let o=3*t,i=u*n[o++],r=c[i++],g=c[i++],x=c[i];i=u*n[o++];let w=c[i++],b=c[i++],y=c[i];i=u*n[o];let C=c[i++],M=c[i++],S=c[i];null!=s&&([r,g,x]=s.applyToVertex(r,g,x,e),[w,b,y]=s.applyToVertex(w,b,y,e),[C,M,S]=s.applyToVertex(C,M,S,e));const T=w-r,A=b-g,_=y-x,E=C-r,F=M-g,R=S-x,O=m*R-F*p,I=p*E-R*f,L=f*F-E*m,z=T*O+A*I+_*L;if(Math.abs(z)<=Number.EPSILON)continue;const G=h-r,N=d-g,D=v-x,P=G*O+N*I+D*L;if(z>0){if(P<0||P>z)continue}else if(P>0||P<z)continue;const B=N*_-A*D,j=D*T-_*G,V=G*A-T*N,H=f*B+m*j+p*V;if(z>0){if(H<0||P+H>z)continue}else if(H>0||P+H<z)continue;const U=(E*B+F*j+R*V)/z;if(U>=0){l(U,$i(T,A,_,E,F,R,ji),t,!1)}}}const Ui=s(),Wi=s();function $i(e,t,o,i,r,a,s){return n(Ui,e,t,o),n(Wi,i,r,a),L(s,Ui,Wi),z(s,s),s}function ki(e,t,o){return n(o,1/(t[0]-e[0]),1/(t[1]-e[1]),1/(t[2]-e[2]))}function Yi(e,t,o,i){return qi(e,t,o,i,1/0)}function qi(e,t,o,i,n){const r=(e[0]-i-t[0])*o[0],a=(e[3]+i-t[0])*o[0];let s=Math.min(r,a),l=Math.max(r,a);const c=(e[1]-i-t[1])*o[1],u=(e[4]+i-t[1])*o[1];if(l=Math.min(l,Math.max(c,u)),l<0)return!1;if(s=Math.max(s,Math.min(c,u)),s>l)return!1;const h=(e[2]-i-t[2])*o[2],d=(e[5]+i-t[2])*o[2];return l=Math.min(l,Math.max(h,d)),!(l<0)&&(s=Math.max(s,Math.min(h,d)),!(s>l)&&s<n)}function Ji(e,t,o,i,n){let r=(o.screenLength||0)*e.pixelRatio;null!=n&&(r=zi(r,i,t,n));const a=r*Math.tan(.5*e.fovY)/(.5*e.fullHeight);return G(a*t,o.minWorldLength||0,null!=o.maxWorldLength?o.maxWorldLength:1/0)}function Xi(e,t){const o=t?Xi(t):{};for(const t in e){let i=e[t];i?.forEach&&(i=Ki(i)),null==i&&t in o||(o[t]=i)}return o}function Zi(e,t){let o=!1;for(const i in t){const n=t[i];void 0!==n&&(Array.isArray(n)?null===e[i]?(e[i]=n.slice(),o=!0):D(e[i],n)&&(o=!0):e[i]!==n&&(o=!0,e[i]=n))}return o}function Ki(e){const t=[];return e.forEach((e=>t.push(e))),t}const Qi={multiply:1,ignore:2,replace:3,tint:4},en=1e3;class tn extends Qt{constructor(e,t){super(),this.type=pt.Material,this.supportsEdges=!1,this._visible=!0,this._renderPriority=0,this._vertexAttributeLocations=Ri,this._pp0=P(0,0,1),this._pp1=P(0,0,0),this._parameters=Xi(e,t),this.validateParameters(this._parameters)}get parameters(){return this._parameters}update(e){return!1}setParameters(e,t=!0){Zi(this._parameters,e)&&(this.validateParameters(this._parameters),t&&this.parametersChanged())}validateParameters(e){}get visible(){return this._visible}set visible(e){e!==this._visible&&(this._visible=e,this.parametersChanged())}shouldRender(e){return this.isVisible()&&this.isVisibleForOutput(e.output)&&(!this.parameters.isDecoration||e.bindParameters.decorations===ut.ON)&&0!=(this.parameters.renderOccluded&e.renderOccludedMask)}isVisibleForOutput(e){return!0}get renderPriority(){return this._renderPriority}set renderPriority(e){e!==this._renderPriority&&(this._renderPriority=e,this.parametersChanged())}get vertexAttributeLocations(){return this._vertexAttributeLocations}isVisible(){return this._visible}parametersChanged(){this.repository?.materialChanged(this)}queryRenderOccludedState(e){return this.isVisible()&&this.parameters.renderOccluded===e}intersectDraped(e,t,o,i,n,r){return this._pp0[0]=this._pp1[0]=i[0],this._pp0[1]=this._pp1[1]=i[1],this.intersect(e,t,o,this._pp0,this._pp1,n)}}var on;!function(e){e[e.None=0]="None",e[e.Occlude=1]="Occlude",e[e.Transparent=2]="Transparent",e[e.OccludeAndTransparent=4]="OccludeAndTransparent",e[e.OccludeAndTransparentStencil=8]="OccludeAndTransparentStencil",e[e.Opaque=16]="Opaque"}(on||(on={}));var nn;!function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.ANTIALIASING=12]="ANTIALIASING",e[e.COMPOSITE=13]="COMPOSITE",e[e.BLIT=14]="BLIT",e[e.SSAO=15]="SSAO",e[e.HIGHLIGHT=16]="HIGHLIGHT",e[e.SHADOW_HIGHLIGHT=17]="SHADOW_HIGHLIGHT",e[e.ENVIRONMENT_OPAQUE=18]="ENVIRONMENT_OPAQUE",e[e.ENVIRONMENT_TRANSPARENT=19]="ENVIRONMENT_TRANSPARENT",e[e.LASERLINES=20]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=21]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=22]="HUD_MATERIAL",e[e.LABEL_MATERIAL=23]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=24]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=25]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=26]="DRAPED_MATERIAL",e[e.DRAPED_WATER=27]="DRAPED_WATER",e[e.VOXEL=28]="VOXEL",e[e.MAX_SLOTS=29]="MAX_SLOTS"}(nn||(nn={}));class rn{constructor(e=0){this.componentLocalOriginLength=0,this._totalOffset=0,this._offset=0,this._tmpVertex=s(),this._tmpMbs=qt(),this._tmpObb=new nt,this._resetOffset(e)}_resetOffset(e){this._offset=e,this._totalOffset=e}set offset(e){this._resetOffset(e)}get offset(){return this._offset}set componentOffset(e){this._totalOffset=this._offset+e}set localOrigin(e){this.componentLocalOriginLength=B(e)}applyToVertex(e,t,o){const i=n(cn,e,t,o),r=n(un,e,t,o+this.componentLocalOriginLength),a=this._totalOffset/B(r);return j(this._tmpVertex,i,r,a),this._tmpVertex}applyToAabb(e){const t=this.componentLocalOriginLength,o=e[0],i=e[1],n=e[2]+t,r=e[3],a=e[4],s=e[5]+t,l=Math.abs(o),c=Math.abs(i),u=Math.abs(n),h=Math.abs(r),d=Math.abs(a),v=Math.abs(s),f=.5*(1+Math.sign(o*r))*Math.min(l,h),m=.5*(1+Math.sign(i*a))*Math.min(c,d),p=.5*(1+Math.sign(n*s))*Math.min(u,v),g=Math.max(l,h),x=Math.max(c,d),w=Math.max(u,v),b=Math.sqrt(f*f+m*m+p*p),y=Math.sign(l+o),C=Math.sign(c+i),M=Math.sign(u+n),S=Math.sign(h+r),T=Math.sign(d+a),A=Math.sign(v+s),_=this._totalOffset;if(b<_)return e[0]-=(1-y)*_,e[1]-=(1-C)*_,e[2]-=(1-M)*_,e[3]+=S*_,e[4]+=T*_,e[5]+=A*_,e;const E=_/Math.sqrt(g*g+x*x+w*w),F=_/b,R=F-E,O=-R;return e[0]+=o*(y*O+F),e[1]+=i*(C*O+F),e[2]+=n*(M*O+F),e[3]+=r*(S*R+E),e[4]+=a*(T*R+E),e[5]+=s*(A*R+E),e}applyToMbs(e){const t=B(Jt(e)),o=this._totalOffset/t;return j(Jt(this._tmpMbs),Jt(e),Jt(e),o),this._tmpMbs[3]=e[3]+e[3]*this._totalOffset/t,this._tmpMbs}applyToObb(e){return rt(e,this._totalOffset,this._totalOffset,V.Global,this._tmpObb),this._tmpObb}}class an{constructor(e=0){this.offset=e,this.sphere=qt(),this.tmpVertex=s()}applyToVertex(e,t,o){const i=this.objectTransform.transform,r=n(cn,e,t,o),a=c(r,r,i),s=this.offset/B(a);j(a,a,a,s);const l=this.objectTransform.inverse;return c(this.tmpVertex,a,l),this.tmpVertex}applyToMinMax(e,t){const o=this.offset/B(e);j(e,e,e,o);const i=this.offset/B(t);j(t,t,t,i)}applyToAabb(e){const t=this.offset/Math.sqrt(e[0]*e[0]+e[1]*e[1]+e[2]*e[2]);e[0]+=e[0]*t,e[1]+=e[1]*t,e[2]+=e[2]*t;const o=this.offset/Math.sqrt(e[3]*e[3]+e[4]*e[4]+e[5]*e[5]);return e[3]+=e[3]*o,e[4]+=e[4]*o,e[5]+=e[5]*o,e}applyToBoundingSphere(e){const t=B(Jt(e)),o=this.offset/t;return j(Jt(this.sphere),Jt(e),Jt(e),o),this.sphere[3]=e[3]+e[3]*this.offset/t,this.sphere}}const sn=new an;function ln(e){return null!=e?(sn.offset=e,sn):null}new rn;const cn=s(),un=s();function hn(e,t,o){const{data:i,indices:n}=e,r=t.typedBuffer,a=t.typedBufferStride,s=n.length;o*=a;for(let e=0;e<s;++e){const t=2*n[e];r[o]=i[t],r[o+1]=i[t+1],o+=a}}function dn(e,t,o,i){const{data:n,indices:r}=e,a=t.typedBuffer,s=t.typedBufferStride,l=r.length;if(o*=s,null==i||1===i)for(let e=0;e<l;++e){const t=3*r[e];a[o]=n[t],a[o+1]=n[t+1],a[o+2]=n[t+2],o+=s}else for(let e=0;e<l;++e){const t=3*r[e];for(let e=0;e<i;++e)a[o]=n[t],a[o+1]=n[t+1],a[o+2]=n[t+2],o+=s}}function vn(e,t,o,i=1){const{data:n,indices:r}=e,a=t.typedBuffer,s=t.typedBufferStride,l=r.length;if(o*=s,1===i)for(let e=0;e<l;++e){const t=4*r[e];a[o]=n[t],a[o+1]=n[t+1],a[o+2]=n[t+2],a[o+3]=n[t+3],o+=s}else for(let e=0;e<l;++e){const t=4*r[e];for(let e=0;e<i;++e)a[o]=n[t],a[o+1]=n[t+1],a[o+2]=n[t+2],a[o+3]=n[t+3],o+=s}}function fn(e,t,o,i,n=1){if(!t)return void dn(e,o,i,n);const{data:r,indices:a}=e,s=o.typedBuffer,l=o.typedBufferStride,c=a.length,u=t[0],h=t[1],d=t[2],v=t[4],f=t[5],m=t[6],p=t[8],g=t[9],x=t[10],w=t[12],b=t[13],y=t[14];i*=l;let C=0,M=0,S=0;const T=H(t)?e=>{C=r[e]+w,M=r[e+1]+b,S=r[e+2]+y}:e=>{const t=r[e],o=r[e+1],i=r[e+2];C=u*t+v*o+p*i+w,M=h*t+f*o+g*i+b,S=d*t+m*o+x*i+y};if(1===n)for(let e=0;e<c;++e)T(3*a[e]),s[i]=C,s[i+1]=M,s[i+2]=S,i+=l;else for(let e=0;e<c;++e){T(3*a[e]);for(let e=0;e<n;++e)s[i]=C,s[i+1]=M,s[i+2]=S,i+=l}}function mn(e,t,o,i,n=1){if(!t)return void dn(e,o,i,n);const{data:r,indices:a}=e,s=t,l=o.typedBuffer,c=o.typedBufferStride,u=a.length,h=s[0],d=s[1],v=s[2],f=s[4],m=s[5],p=s[6],g=s[8],x=s[9],w=s[10],b=!U(s),y=1e-6,C=1-y;i*=c;let M=0,S=0,T=0;const A=H(s)?e=>{M=r[e],S=r[e+1],T=r[e+2]}:e=>{const t=r[e],o=r[e+1],i=r[e+2];M=h*t+f*o+g*i,S=d*t+m*o+x*i,T=v*t+p*o+w*i};if(1===n)if(b)for(let e=0;e<u;++e){A(3*a[e]);const t=M*M+S*S+T*T;if(t<C&&t>y){const e=1/Math.sqrt(t);l[i]=M*e,l[i+1]=S*e,l[i+2]=T*e}else l[i]=M,l[i+1]=S,l[i+2]=T;i+=c}else for(let e=0;e<u;++e)A(3*a[e]),l[i]=M,l[i+1]=S,l[i+2]=T,i+=c;else for(let e=0;e<u;++e){if(A(3*a[e]),b){const e=M*M+S*S+T*T;if(e<C&&e>y){const t=1/Math.sqrt(e);M*=t,S*=t,T*=t}}for(let e=0;e<n;++e)l[i]=M,l[i+1]=S,l[i+2]=T,i+=c}}function pn(e,t,o,i,n=1){if(!t)return void vn(e,o,i,n);const{data:r,indices:a}=e,s=t,l=o.typedBuffer,c=o.typedBufferStride,u=a.length,h=s[0],d=s[1],v=s[2],f=s[4],m=s[5],p=s[6],g=s[8],x=s[9],w=s[10],b=!U(s),y=1e-6,C=1-y;if(i*=c,1===n)for(let e=0;e<u;++e){const t=4*a[e],o=r[t],n=r[t+1],s=r[t+2],u=r[t+3];let M=h*o+f*n+g*s,S=d*o+m*n+x*s,T=v*o+p*n+w*s;if(b){const e=M*M+S*S+T*T;if(e<C&&e>y){const t=1/Math.sqrt(e);M*=t,S*=t,T*=t}}l[i]=M,l[i+1]=S,l[i+2]=T,l[i+3]=u,i+=c}else for(let e=0;e<u;++e){const t=4*a[e],o=r[t],s=r[t+1],u=r[t+2],M=r[t+3];let S=h*o+f*s+g*u,T=d*o+m*s+x*u,A=v*o+p*s+w*u;if(b){const e=S*S+T*T+A*A;if(e<C&&e>y){const t=1/Math.sqrt(e);S*=t,T*=t,A*=t}}for(let e=0;e<n;++e)l[i]=S,l[i+1]=T,l[i+2]=A,l[i+3]=M,i+=c}}function gn(e,t,o,i,n=1){const{data:r,indices:a}=e,s=o.typedBuffer,l=o.typedBufferStride,c=a.length;if(i*=l,t!==r.length||4!==t)if(1!==n)if(4!==t)for(let e=0;e<c;++e){const t=3*a[e];for(let e=0;e<n;++e)s[i]=r[t],s[i+1]=r[t+1],s[i+2]=r[t+2],s[i+3]=255,i+=l}else for(let e=0;e<c;++e){const t=4*a[e];for(let e=0;e<n;++e)s[i]=r[t],s[i+1]=r[t+1],s[i+2]=r[t+2],s[i+3]=r[t+3],i+=l}else{if(4===t){for(let e=0;e<c;++e){const t=4*a[e];s[i]=r[t],s[i+1]=r[t+1],s[i+2]=r[t+2],s[i+3]=r[t+3],i+=l}return}for(let e=0;e<c;++e){const t=3*a[e];s[i]=r[t],s[i+1]=r[t+1],s[i+2]=r[t+2],s[i+3]=255,i+=l}}else{s[i]=r[0],s[i+1]=r[1],s[i+2]=r[2],s[i+3]=r[3];const e=new Uint32Array(o.typedBuffer.buffer,o.start),t=l/4,a=e[i/=4];i+=t;const u=c*n;for(let o=1;o<u;++o)e[i]=a,i+=t}}function xn(e,t,o){const{data:i,indices:n}=e,r=t.typedBuffer,a=t.typedBufferStride,s=n.length,l=i[0];o*=a;for(let e=0;e<s;++e)r[o]=l,o+=a}function wn(e,t,o,i,n=1){const r=t.typedBuffer,a=t.typedBufferStride;if(i*=a,1===n)for(let t=0;t<o;++t)r[i]=e[0],r[i+1]=e[1],r[i+2]=e[2],r[i+3]=e[3],i+=a;else for(let t=0;t<o;++t)for(let t=0;t<n;++t)r[i]=e[0],r[i+1]=e[1],r[i+2]=e[2],r[i+3]=e[3],i+=a}function bn(e,t,o,i,n,r){for(const a of t.fields.keys()){const t=e.attributes.get(a),s=t?.indices;if(t&&s)yn(a,t,o,i,n,r);else if(a===xt.OBJECTANDLAYERIDCOLOR&&null!=e.objectAndLayerIdColor){const t=e.attributes.get(xt.POSITION)?.indices;if(t){const o=t.length,i=n.getField(a,Ie);wn(e.objectAndLayerIdColor,i,o,r)}}}}function yn(e,t,o,i,n,r){switch(e){case xt.POSITION:{u(3===t.size);const i=n.getField(e,De);u(!!i,`No buffer view for ${e}`),i&&fn(t,o,i,r);break}case xt.NORMAL:{u(3===t.size);const o=n.getField(e,De);u(!!o,`No buffer view for ${e}`),o&&mn(t,i,o,r);break}case xt.NORMALCOMPRESSED:{u(2===t.size);const o=n.getField(e,Ne);u(!!o,`No buffer view for ${e}`),o&&hn(t,o,r);break}case xt.UV0:{u(2===t.size);const o=n.getField(e,Ge);u(!!o,`No buffer view for ${e}`),o&&hn(t,o,r);break}case xt.COLOR:case xt.SYMBOLCOLOR:{const o=n.getField(e,Ie);u(!!o,`No buffer view for ${e}`),u(3===t.size||4===t.size),!o||3!==t.size&&4!==t.size||gn(t,t.size,o,r);break}case xt.COLORFEATUREATTRIBUTE:{const o=n.getField(e,ze);u(!!o,`No buffer view for ${e}`),u(1===t.size),o&&1===t.size&&xn(t,o,r);break}case xt.TANGENT:{u(4===t.size);const o=n.getField(e,Le);u(!!o,`No buffer view for ${e}`),o&&pn(t,i,o,r);break}case xt.PROFILERIGHT:case xt.PROFILEUP:case xt.PROFILEVERTEXANDNORMAL:case xt.FEATUREVALUE:{u(4===t.size);const o=n.getField(e,Le);u(!!o,`No buffer view for ${e}`),o&&vn(t,o,r)}}}class Cn{constructor(e){this.vertexBufferLayout=e}elementCount(e){return e.attributes.get(xt.POSITION).indices.length}write(e,t,o,i,n){bn(o,this.vertexBufferLayout,e,t,i,n)}}function Mn(e){e.attributes.add(xt.POSITION,"vec3"),e.vertex.code.add(Lt`vec3 positionModel() { return position; }`)}function Sn({code:e},t){t.doublePrecisionRequiresObfuscation?e.add(Lt`vec3 dpPlusFrc(vec3 a, vec3 b) {
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
}`):e.add(Lt`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}class Tn extends bi{constructor(e,t){super(e,"mat3",Nt.Draw,((o,i,n)=>o.setUniformMatrix3fv(e,t(i,n))))}}class An extends bi{constructor(e,t){super(e,"mat3",Nt.Pass,((o,i,n)=>o.setUniformMatrix3fv(e,t(i,n))))}}class _n extends bi{constructor(e,t){super(e,"mat4",Nt.Pass,((o,i,n)=>o.setUniformMatrix4fv(e,t(i,n))))}}function En(e,t){e.include(Mn);const o=e.vertex;o.include(Sn,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),o.uniforms.add(new Ci("transformWorldFromViewTH",(e=>e.transformWorldFromViewTH)),new Ci("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL)),new An("transformViewFromCameraRelativeRS",(e=>e.transformViewFromCameraRelativeRS)),new _n("transformProjFromView",(e=>e.transformProjFromView)),new Tn("transformWorldFromModelRS",(e=>e.transformWorldFromModelRS)),new yi("transformWorldFromModelTH",(e=>e.transformWorldFromModelTH)),new yi("transformWorldFromModelTL",(e=>e.transformWorldFromModelTL))),o.code.add(Lt`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),o.code.add(Lt`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?Lt`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:Lt`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new Ci("transformWorldFromViewTL",(e=>e.transformWorldFromViewTL))),o.code.add(Lt`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(Lt`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}class Fn extends zt{constructor(){super(...arguments),this.transformWorldFromViewTH=s(),this.transformWorldFromViewTL=s(),this.transformViewFromCameraRelativeRS=_e(),this.transformProjFromView=Oe()}}function Rn(e,t){switch(t.normalType){case vi.Attribute:case vi.Compressed:e.include(di,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new Tn("transformNormalGlobalFromModel",(e=>e.transformNormalGlobalFromModel)),new An("transformNormalViewFromGlobal",(e=>e.transformNormalViewFromGlobal))),e.vertex.code.add(Lt`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case vi.Ground:e.include(En,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(Lt`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?Lt`normalize(vPositionWorldCameraRelative);`:Lt`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case vi.ScreenDerivative:e.vertex.code.add(Lt`void forwardNormal() {}`);break;default:case vi.COUNT:}}class On extends Fn{constructor(){super(...arguments),this.transformNormalViewFromGlobal=_e()}}const In=.1,Ln=.001;class zn{constructor(e,t){this._module=e,this._loadModule=t}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}}class Gn{constructor(e,t,o){this.release=o,this.initializeConfiguration(e,t),this._configuration=t.snapshot(),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}destroy(){this._program=A(this._program),this._pipeline=this._configuration=null}reload(e){A(this._program),this._program=this.initializeProgram(e),this._pipeline=this.initializePipeline(e)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(e){this.program.assertCompatibleVertexAttributeLocations(e)}get primitiveType(){return Mt.TRIANGLES}getPipeline(e,t,o){return this._pipeline}initializeConfiguration(e,t){}}class Nn{constructor(e,t,o){this._context=e,this._locations=o,this._textures=new Map,this._freeTextureUnits=new W({deallocator:null}),this._glProgram=e.programCache.acquire(t.generate("vertex"),t.generate("fragment"),o),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=t.generateBindPass(this),this.bindDraw=t.generateBindDraw(this),this._fragmentUniforms=Ot()?t.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(e,t){this._glProgram.setUniform1i(e,t?1:0)}setUniform1i(e,t){this._glProgram.setUniform1i(e,t)}setUniform1f(e,t){this._glProgram.setUniform1f(e,t)}setUniform2fv(e,t){this._glProgram.setUniform2fv(e,t)}setUniform3fv(e,t){this._glProgram.setUniform3fv(e,t)}setUniform4fv(e,t){this._glProgram.setUniform4fv(e,t)}setUniformMatrix3fv(e,t){this._glProgram.setUniformMatrix3fv(e,t)}setUniformMatrix4fv(e,t){this._glProgram.setUniformMatrix4fv(e,t)}setUniform1fv(e,t){this._glProgram.setUniform1fv(e,t)}setUniform1iv(e,t){this._glProgram.setUniform1iv(e,t)}setUniform2iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform3iv(e,t){this._glProgram.setUniform3iv(e,t)}setUniform4iv(e,t){this._glProgram.setUniform4iv(e,t)}assertCompatibleVertexAttributeLocations(e){e.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(e,t){if(null==t?.glName){const t=this._textures.get(e);return t&&(this._context.bindTexture(null,t.unit),this._freeTextureUnit(t),this._textures.delete(e)),null}let o=this._textures.get(e);return null==o?(o=this._allocTextureUnit(t),this._textures.set(e,o)):o.texture=t,this._context.useProgram(this),this.setUniform1i(e,o.unit),this._context.bindTexture(t,o.unit),o.unit}rebindTextures(){this._context.useProgram(this),this._textures.forEach(((e,t)=>{this._context.bindTexture(e.texture,e.unit),this.setUniform1i(t,e.unit)})),this._fragmentUniforms?.forEach((e=>{"sampler2D"!==e.type&&"samplerCube"!==e.type||this._textures.has(e.name)||console.error(`Texture sampler ${e.name} has no bound texture`)}))}_allocTextureUnit(e){return{texture:e,unit:0===this._freeTextureUnits.length?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(e){this._freeTextureUnits.push(e.unit)}}const Dn={mask:255},Pn={function:{func:St.ALWAYS,ref:ht.OutlineVisualElementMask,mask:ht.OutlineVisualElementMask},operation:{fail:Tt.KEEP,zFail:Tt.KEEP,zPass:Tt.ZERO}},Bn={function:{func:St.ALWAYS,ref:ht.OutlineVisualElementMask,mask:ht.OutlineVisualElementMask},operation:{fail:Tt.KEEP,zFail:Tt.KEEP,zPass:Tt.REPLACE}};function jn({normalTexture:e,metallicRoughnessTexture:t,metallicFactor:o,roughnessFactor:i,emissiveTexture:n,emissiveFactor:r,occlusionTexture:a}){return null==e&&null==t&&null==n&&(null==r||$(r,k))&&null==a&&(null==i||1===i)&&(null==o||1===o)}const Vn=[1,1,.5],Hn=[0,.6,.2],Un=[0,1,.2];class Wn extends bi{constructor(e,t){super(e,"vec2",Nt.Pass,((o,i,n)=>o.setUniform2fv(e,t(i,n))))}}function $n(e){e.varyings.add("linearDepth","float")}function kn(e){e.vertex.uniforms.add(new Wn("nearFar",((e,t)=>t.camera.nearFar)))}function Yn(e){e.vertex.code.add(Lt`float calculateLinearDepth(vec2 nearFar,float z) {
return (-z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`)}function qn(e,t){const{vertex:o}=e;switch(t.output){case ri.Color:if(t.receiveShadows)return $n(e),void o.code.add(Lt`void forwardLinearDepth() { linearDepth = gl_Position.w; }`);break;case ri.LinearDepth:case ri.Shadow:case ri.ShadowHighlight:case ri.ShadowExcludeHighlight:return e.include(En,t),$n(e),kn(e),Yn(e),void o.code.add(Lt`void forwardLinearDepth() {
linearDepth = calculateLinearDepth(nearFar, vPosition_view.z);
}`)}o.code.add(Lt`void forwardLinearDepth() {}`)}function Jn(e){e.vertex.code.add(Lt`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function Xn(e,t){Zn(e,t,new yi("slicePlaneOrigin",((e,o)=>tr(t,e,o))),new yi("slicePlaneBasis1",((e,o)=>or(t,e,o,o.slicePlane?.basis1))),new yi("slicePlaneBasis2",((e,o)=>or(t,e,o,o.slicePlane?.basis2))))}function Zn(e,t,...o){if(!t.hasSlicePlane){const o=Lt`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(o),void e.fragment.code.add(o)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...o),e.fragment.uniforms.add(...o);const i=Lt`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,n=Lt`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,r=t.hasSliceHighlight?Lt`
        ${n}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:Lt`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(r)}function Kn(e,t,o){return e.instancedDoublePrecision?n(ir,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function Qn(e,t){return null!=e?Y(nr,t.origin,e):t.origin}function er(e,t,o){return e.hasSliceTranslatedView?null!=t?q(ar,o.camera.viewMatrix,t):o.camera.viewMatrix:null}function tr(e,t,o){if(null==o.slicePlane)return k;const i=Kn(e,t,o),n=Qn(i,o.slicePlane),r=er(e,i,o);return null!=r?c(nr,n,r):n}function or(e,t,o,i){if(null==i||null==o.slicePlane)return k;const n=Kn(e,t,o),a=Qn(n,o.slicePlane),s=er(e,n,o);return null!=s?(r(rr,i,a),c(nr,a,s),c(rr,rr,s),Y(rr,rr,nr)):i}const ir=s(),nr=s(),rr=s(),ar=Oe();function sr(e){Yn(e),e.vertex.code.add(Lt`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = calculateLinearDepth(nearFar,eye.z);
return proj * eye;
}`),e.vertex.code.add(Lt`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`)}class lr extends bi{constructor(e,t){super(e,"float",Nt.Pass,((o,i,n)=>o.setUniform1f(e,t(i,n))))}}class cr extends bi{constructor(e,t){super(e,"mat4",Nt.Draw,((o,i,n)=>o.setUniformMatrix4fv(e,t(i,n))))}}function ur(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",k):e.uniforms.add(new yi("cameraPosition",((e,t)=>n(vr,t.camera.viewInverseTransposeMatrix[3]-e.origin[0],t.camera.viewInverseTransposeMatrix[7]-e.origin[1],t.camera.viewInverseTransposeMatrix[11]-e.origin[2]))))}function hr(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new _n("proj",((e,t)=>t.camera.projectionMatrix)),new cr("view",((e,t)=>q(dr,t.camera.viewMatrix,e.origin))),new yi("localOrigin",(e=>e.origin)));const o=e=>n(vr,e.camera.viewInverseTransposeMatrix[3],e.camera.viewInverseTransposeMatrix[7],e.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new _n("proj",((e,t)=>t.camera.projectionMatrix)),new _n("view",((e,t)=>q(dr,t.camera.viewMatrix,o(t)))),new Ci("localOrigin",((e,t)=>o(t))))}const dr=Oe(),vr=s();function fr(e){e.uniforms.add(new _n("viewNormal",((e,t)=>t.camera.viewInverseTransposeMatrix)))}class mr extends zt{constructor(){super(),this._key="",this._keyDirty=!1,this._parameterBits=this._parameterBits?this._parameterBits.map((()=>0)):[],this._parameterNames||(this._parameterNames=[])}get key(){return this._keyDirty&&(this._keyDirty=!1,this._key=String.fromCharCode.apply(String,this._parameterBits)),this._key}snapshot(){const e=this._parameterNames,t={key:this.key};for(const o of e)t[o]=this[o];return t}}function pr(e={}){return(t,o)=>{if(t._parameterNames=t._parameterNames??[],t._parameterNames.push(o),null!=e.constValue)Object.defineProperty(t,o,{get:()=>e.constValue});else{const i=t._parameterNames.length-1,n=e.count||2,r=Math.ceil(Math.log2(n)),a=t._parameterBits??[0];let s=0;for(;a[s]+r>16;)s++,s>=a.length&&a.push(0);t._parameterBits=a;const l=a[s],c=(1<<r)-1<<l;a[s]+=r,Object.defineProperty(t,o,{get(){return this[i]},set(e){if(this[i]!==e&&(this[i]=e,this._keyDirty=!0,this._parameterBits[s]=this._parameterBits[s]&~c|+e<<l&c,"number"!=typeof e&&"boolean"!=typeof e))throw new Error("Configuration value for "+o+" must be boolean or number, got "+typeof e)}})}}}class gr extends mr{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}J([pr()],gr.prototype,"instancedDoublePrecision",void 0),J([pr()],gr.prototype,"hasModelTransformation",void 0);const xr=_e();function wr(e,t){const o=t.hasModelTransformation,i=t.instancedDoublePrecision;o&&(e.vertex.uniforms.add(new _n("model",(e=>e.modelTransformation??Fe))),e.vertex.uniforms.add(new An("normalLocalOriginFromModel",(e=>(X(xr,e.modelTransformation??Fe),xr))))),t.instanced&&i&&(e.attributes.add(xt.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(xt.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(xt.INSTANCEMODEL,"mat3"),e.attributes.add(xt.INSTANCEMODELNORMAL,"mat3"));const r=e.vertex;i&&(r.include(Sn,t),r.uniforms.add(new yi("viewOriginHi",((e,t)=>Dt(n(br,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),br))),new yi("viewOriginLo",((e,t)=>Pt(n(br,t.camera.viewInverseTransposeMatrix[3],t.camera.viewInverseTransposeMatrix[7],t.camera.viewInverseTransposeMatrix[11]),br))))),r.code.add(Lt`
    vec3 getVertexInLocalOriginSpace() {
      return ${o?i?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":i?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${i?Lt`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),r.code.add(Lt`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${o?i?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":i?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===ri.Normal&&(fr(r),r.code.add(Lt`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${o?i?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":i?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&r.code.add(Lt`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${o?i?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":i?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const br=s();function yr(e){e.vertex.code.add(Lt`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${Lt.int(Xt.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${Lt.int(Xt.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${Lt.int(Xt.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${Lt.int(Xt.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}class Cr extends bi{constructor(e,t){super(e,"int",Nt.Pass,((o,i,n)=>o.setUniform1i(e,t(i,n))))}}function Mr(e,t){t.hasSymbolColors?(e.include(yr),e.attributes.add(xt.SYMBOLCOLOR,"vec4"),e.varyings.add("colorMixMode","mediump float"),e.vertex.code.add(Lt`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(e.fragment.uniforms.add(new Cr("colorMixMode",(e=>Qi[e.colorMixMode]))),e.vertex.code.add(Lt`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function Sr(e,t){t.hasVertexColors?(e.attributes.add(xt.COLOR,"vec4"),e.varyings.add("vColor","vec4"),e.vertex.code.add(Lt`void forwardVertexColor() { vColor = color; }`),e.vertex.code.add(Lt`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`)):e.vertex.code.add(Lt`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`)}function Tr(e){e.vertex.code.add(Lt`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),e.vertex.code.add(Lt`vec3 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec3 params) {
return vec3(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z
);
}`),e.vertex.code.add(Lt`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(Lt`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),e.vertex.code.add(Lt`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec3 factor) {
return mix(size * clamp(factor.x, factor.z, 1.0), size, factor.y);
}`),e.vertex.code.add(Lt`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec3 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`)}function Ar(e){e.uniforms.add(new Ci("screenSizePerspectiveAlignment",(e=>_r(e.screenSizePerspectiveAlignment||e.screenSizePerspective))))}function _r(e){return n(Er,e.parameters.divisor,e.parameters.offset,e.minScaleFactor)}const Er=s();class Fr extends bi{constructor(e,t){super(e,"vec4",Nt.Pass,((o,i,n)=>o.setUniform4fv(e,t(i,n))))}}function Rr(e,t){const o=e.vertex;t.hasVerticalOffset?(Ir(o),t.hasScreenSizePerspective&&(e.include(Tr),Ar(o),ur(e.vertex,t)),o.code.add(Lt`
      vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
        ${t.spherical?Lt`vec3 worldNormal = normalize(worldPos + localOrigin);`:Lt`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`}
        ${t.hasScreenSizePerspective?Lt`
            float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
            float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`:Lt`
            float verticalOffsetScreenHeight = verticalOffset.x;`}
        // Screen sized offset in world space, used for example for line callouts
        float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
        return worldNormal * worldOffset;
      }

      vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
        return worldPos + calculateVerticalOffset(worldPos, localOrigin);
      }
    `)):o.code.add(Lt`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`)}const Or=K();function Ir(e){e.uniforms.add(new Fr("verticalOffset",((e,t)=>{const{minWorldLength:o,maxWorldLength:i,screenLength:n}=e.verticalOffset,r=Math.tan(.5*t.camera.fovY)/(.5*t.camera.fullViewport[3]),a=t.camera.pixelRatio||1;return Z(Or,n*a,r,o,i)})))}function Lr(e,t){const o=t.output===ri.ObjectAndLayerIdColor,i=t.objectAndLayerIdColorInstanced;o&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),i?e.attributes.add(xt.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(xt.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(Lt`
     void forwardObjectAndLayerIdColor() {
      ${o?i?Lt`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:Lt`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:Lt``} }`),e.fragment.code.add(Lt`
      void outputObjectAndLayerIdColor() {
        ${o?Lt`fragColor = objectAndLayerIdColorVarying;`:Lt``} }`)}function zr(e){e.code.add(Lt`const float MAX_RGBA4_FLOAT =
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
}`)}function Gr(e){e.code.add(Lt`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`)}function Nr(e,t){switch(t.output){case ri.Shadow:case ri.ShadowHighlight:case ri.ShadowExcludeHighlight:e.fragment.include(zr),e.fragment.code.add(Lt`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`);break;case ri.LinearDepth:e.fragment.include(Gr),e.fragment.code.add(Lt`void outputDepth(float _linearDepth) {
fragColor = float2rgba(_linearDepth);
}`)}}const Dr=Q(1,1,0,1),Pr=Q(1,0,1,1);function Br(e){e.fragment.uniforms.add(new Si("depthTexture",((e,t)=>t.mainDepth))),e.fragment.constants.add("occludedHighlightFlag","vec4",Dr).add("unoccludedHighlightFlag","vec4",Pr),e.fragment.code.add(Lt`void outputHighlight() {
float sceneDepth = float(texelFetch(depthTexture, ivec2(gl_FragCoord.xy), 0).x);
if (gl_FragCoord.z > sceneDepth + 5e-7) {
fragColor = occludedHighlightFlag;
} else {
fragColor = unoccludedHighlightFlag;
}
}`)}class jr extends bi{constructor(e,t,o){super(e,"vec4",Nt.Pass,((o,i,n)=>o.setUniform4fv(e,t(i,n))),o)}}class Vr extends bi{constructor(e,t,o){super(e,"float",Nt.Pass,((o,i,n)=>o.setUniform1fv(e,t(i,n))),o)}}let Hr=class extends oe{constructor(){super(...arguments),this.SCENEVIEW_HITTEST_RETURN_INTERSECTOR=!1,this.DECONFLICTOR_SHOW_VISIBLE=!1,this.DECONFLICTOR_SHOW_INVISIBLE=!1,this.DECONFLICTOR_SHOW_GRID=!1,this.LABELS_SHOW_BORDER=!1,this.TEXT_SHOW_BASELINE=!1,this.TEXT_SHOW_BORDER=!1,this.OVERLAY_DRAW_DEBUG_TEXTURE=!1,this.OVERLAY_SHOW_CENTER=!1,this.SHOW_POI=!1,this.TESTS_DISABLE_OPTIMIZATIONS=!1,this.TESTS_DISABLE_FAST_UPDATES=!1,this.DRAW_MESH_GEOMETRY_NORMALS=!1,this.FEATURE_TILE_FETCH_SHOW_TILES=!1,this.FEATURE_TILE_TREE_SHOW_TILES=!1,this.TERRAIN_TILE_TREE_SHOW_TILES=!1,this.I3S_TREE_SHOW_TILES=!1,this.I3S_SHOW_MODIFICATIONS=!1,this.LOD_INSTANCE_RENDERER_DISABLE_UPDATES=!1,this.LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL=!1,this.EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES=!1,this.LINE_WIREFRAMES=!1}};J([ee()],Hr.prototype,"SCENEVIEW_HITTEST_RETURN_INTERSECTOR",void 0),J([ee()],Hr.prototype,"DECONFLICTOR_SHOW_VISIBLE",void 0),J([ee()],Hr.prototype,"DECONFLICTOR_SHOW_INVISIBLE",void 0),J([ee()],Hr.prototype,"DECONFLICTOR_SHOW_GRID",void 0),J([ee()],Hr.prototype,"LABELS_SHOW_BORDER",void 0),J([ee()],Hr.prototype,"TEXT_SHOW_BASELINE",void 0),J([ee()],Hr.prototype,"TEXT_SHOW_BORDER",void 0),J([ee()],Hr.prototype,"OVERLAY_DRAW_DEBUG_TEXTURE",void 0),J([ee()],Hr.prototype,"OVERLAY_SHOW_CENTER",void 0),J([ee()],Hr.prototype,"SHOW_POI",void 0),J([ee()],Hr.prototype,"TESTS_DISABLE_OPTIMIZATIONS",void 0),J([ee()],Hr.prototype,"TESTS_DISABLE_FAST_UPDATES",void 0),J([ee()],Hr.prototype,"DRAW_MESH_GEOMETRY_NORMALS",void 0),J([ee()],Hr.prototype,"FEATURE_TILE_FETCH_SHOW_TILES",void 0),J([ee()],Hr.prototype,"FEATURE_TILE_TREE_SHOW_TILES",void 0),J([ee()],Hr.prototype,"TERRAIN_TILE_TREE_SHOW_TILES",void 0),J([ee()],Hr.prototype,"I3S_TREE_SHOW_TILES",void 0),J([ee()],Hr.prototype,"I3S_SHOW_MODIFICATIONS",void 0),J([ee()],Hr.prototype,"LOD_INSTANCE_RENDERER_DISABLE_UPDATES",void 0),J([ee()],Hr.prototype,"LOD_INSTANCE_RENDERER_COLORIZE_BY_LEVEL",void 0),J([ee()],Hr.prototype,"EDGES_SHOW_HIDDEN_TRANSPARENT_EDGES",void 0),J([ee()],Hr.prototype,"LINE_WIREFRAMES",void 0),Hr=J([te("esri.views.3d.support.DebugFlags")],Hr);new Hr;var Ur,Wr;!function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"}(Ur||(Ur={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(Wr||(Wr={}));const $r=8;function kr(e,t){const{vertex:o,attributes:i}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&i.add(xt.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(o.uniforms.add(new Ci("vvSizeMinSize",(e=>e.vvSize.minSize))),o.uniforms.add(new Ci("vvSizeMaxSize",(e=>e.vvSize.maxSize))),o.uniforms.add(new Ci("vvSizeOffset",(e=>e.vvSize.offset))),o.uniforms.add(new Ci("vvSizeFactor",(e=>e.vvSize.factor))),o.uniforms.add(new An("vvSymbolRotationMatrix",(e=>e.vvSymbolRotationMatrix))),o.uniforms.add(new Ci("vvSymbolAnchor",(e=>e.vvSymbolAnchor))),o.code.add(Lt`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),o.code.add(Lt`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?Lt`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):o.code.add(Lt`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(o.constants.add("vvColorNumber","int",$r),o.uniforms.add(new Vr("vvColorValues",(e=>e.vvColor.values),$r),new jr("vvColorColors",(e=>e.vvColor.colors),$r)),o.code.add(Lt`
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

      ${t.hasVvInstancing?Lt`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):o.code.add(Lt`vec4 vvColor() { return vec4(1.0); }`)}function Yr(e){e.fragment.code.add(Lt`
    #define discardOrAdjustAlpha(color) { if (color.a < ${Lt.float(Ln)}) { discard; } }
  `)}function qr(e,t){Jr(e,t,new lr("textureAlphaCutoff",(e=>e.textureAlphaCutoff)))}function Jr(e,t,o){const i=e.fragment;switch(t.alphaDiscardMode!==dt.Mask&&t.alphaDiscardMode!==dt.MaskBlend||i.uniforms.add(o),t.alphaDiscardMode){case dt.Blend:return e.include(Yr);case dt.Opaque:i.code.add(Lt`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case dt.Mask:i.code.add(Lt`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case dt.MaskBlend:e.fragment.code.add(Lt`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function Xr(e,t){const{vertex:o,fragment:i}=e,n=t.hasColorTexture&&t.alphaDiscardMode!==dt.Opaque;switch(t.output){case ri.LinearDepth:case ri.Shadow:case ri.ShadowHighlight:case ri.ShadowExcludeHighlight:case ri.ObjectAndLayerIdColor:hr(o,t),e.include(sr,t),e.include(gi,t),e.include(kr,t),e.include(Nr,t),e.include(Xn,t),e.include(Lr,t),kn(e),e.varyings.add("depth","float"),n&&i.uniforms.add(new Si("tex",(e=>e.texture))),o.code.add(Lt`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),e.include(qr,t),i.code.add(Lt`
          void main(void) {
            discardBySlice(vpos);
            ${n?Lt`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?Lt`colorUV`:Lt`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${t.output===ri.ObjectAndLayerIdColor?Lt`outputObjectAndLayerIdColor();`:Lt`outputDepth(depth);`}
          }
        `);break;case ri.Normal:{hr(o,t),e.include(sr,t),e.include(di,t),e.include(Rn,t),e.include(gi,t),e.include(kr,t),n&&i.uniforms.add(new Si("tex",(e=>e.texture))),t.normalType===vi.ScreenDerivative&&e.varyings.add("vPositionView","vec3");const r=t.normalType===vi.Attribute||t.normalType===vi.Compressed;o.code.add(Lt`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${r?Lt`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:Lt`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),e.include(Xn,t),e.include(qr,t),i.code.add(Lt`
          void main() {
            discardBySlice(vpos);
            ${n?Lt`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?Lt`colorUV`:Lt`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${t.normalType===vi.ScreenDerivative?Lt`vec3 normal = screenDerivativeNormal(vPositionView);`:Lt`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case ri.Highlight:hr(o,t),e.include(sr,t),e.include(gi,t),e.include(kr,t),n&&i.uniforms.add(new Si("tex",(e=>e.texture))),o.code.add(Lt`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),e.include(Xn,t),e.include(qr,t),e.include(Br,t),i.code.add(Lt`
          void main() {
            discardBySlice(vpos);
            ${n?Lt`
                    vec4 texColor = texture(tex, ${t.hasColorTextureTransform?Lt`colorUV`:Lt`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function Zr(e,t){const o=e.fragment;t.hasVertexTangents?(e.attributes.add(xt.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),t.doubleSidedMode===mi.WindingOrder?o.code.add(Lt`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):o.code.add(Lt`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):o.code.add(Lt`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
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
}`),t.textureCoordinateType!==pi.None&&(e.include(wi,t),o.uniforms.add(t.pbrTextureBindType===Nt.Pass?new Si("normalTexture",(e=>e.textureNormal)):new Mi("normalTexture",(e=>e.textureNormal))),t.hasNormalTextureTransform&&(o.uniforms.add(new Wn("scale",(e=>e.scale??ie))),o.uniforms.add(new An("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??Ee)))),o.code.add(Lt`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),t.hasNormalTextureTransform&&o.code.add(Lt`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),o.code.add(Lt`return tangentSpace * rawNormal;
}`))}var Kr,Qr;!function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"}(Kr||(Kr={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(Qr||(Qr={}));const ea=3e5,ta=5e5;const oa={required:[]},ia={required:[ri.Depth,ri.Normal]};class na extends oe{consumes(){return oa}get usedMemory(){return 0}get isDecoration(){return!1}get running(){return!1}get materialReference(){return null}modify(e){}get numGeometries(){return 0}get hasOccludees(){return!1}queryRenderOccludedState(e){return!1}}class ra extends na{}function aa(e,t=!0){e.attributes.add(xt.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(Lt`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?Lt`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}function sa(e){e.include(Gr),e.code.add(Lt`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return linearDepthFromRGBA(texelFetch(depthTexture, iuv, 0), nearFar);
}`)}function la(e){e.code.add(Lt`float linearizeDepth(float depth, vec2 nearFar) {
float depthNdc = depth * 2.0 - 1.0;
return (2.0 * nearFar[0] * nearFar[1]) / (depthNdc * (nearFar[1] - nearFar[0]) - (nearFar[1] + nearFar[0]));
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return linearizeDepth(depth, nearFar);
}`)}class ca extends bi{constructor(e,t){super(e,"vec2",Nt.Draw,((o,i,n,r)=>o.setUniform2fv(e,t(i,n,r))))}}const ua=()=>m.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");class ha{constructor(){this._includedModules=new Map}include(e,t){if(this._includedModules.has(e)){const o=this._includedModules.get(e);if(o!==t){ua().error("Shader module included multiple times with different configuration.");const t=new Set;for(const i of Object.keys(o))o[i]!==e[i]&&t.add(i);for(const i of Object.keys(e))o[i]!==e[i]&&t.add(i);t.forEach((t=>console.error(`  ${t}: current ${o[t]} new ${e[t]}`)))}}else this._includedModules.set(e,t),e(this.builder,t)}}class da extends ha{constructor(){super(...arguments),this.vertex=new ma,this.fragment=new ma,this.attributes=new pa,this.varyings=new ga,this.extensions=new xa,this.constants=new ba,this.outputs=new wa}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(e){const t=this.extensions.generateSource(e),o=this.attributes.generateSource(e),i=this.varyings.generateSource(e),n="vertex"===e?this.vertex:this.fragment,r=n.uniforms.generateSource(),a=n.code.generateSource(),s="vertex"===e?Ca:ya,l=this.constants.generateSource().concat(n.constants.generateSource()),c=this.outputs.generateSource(e);return`#version 300 es\n${t.join("\n")}\n\n${s}\n\n${l.join("\n")}\n\n${r.join("\n")}\n\n${o.join("\n")}\n\n${i.join("\n")}\n\n${c.join("\n")}\n\n${a.join("\n")}`}generateBindPass(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const o=e.bind[Nt.Pass];o&&t.set(e.name,o)})),this.fragment.uniforms.entries.forEach((e=>{const o=e.bind[Nt.Pass];o&&t.set(e.name,o)}));const o=Array.from(t.values()),i=o.length;return(t,n)=>{for(let r=0;r<i;++r)o[r](e,t,n)}}generateBindDraw(e){const t=new Map;this.vertex.uniforms.entries.forEach((e=>{const o=e.bind[Nt.Draw];o&&t.set(e.name,o)})),this.fragment.uniforms.entries.forEach((e=>{const o=e.bind[Nt.Draw];o&&t.set(e.name,o)}));const o=Array.from(t.values()),i=o.length;return(t,n,r)=>{for(let a=0;a<i;++a)o[a](e,t,n,r)}}}class va{constructor(){this._entries=new Map}add(...e){for(const t of e)this._add(t)}get(e){return this._entries.get(e)}_add(e){if(null!=e){if(this._entries.has(e.name)&&!this._entries.get(e.name).equals(e))throw new p(`Duplicate uniform name ${e.name} for different uniform type`);this._entries.set(e.name,e)}else ua().error(`Trying to add null Uniform from ${(new Error).stack}.`)}generateSource(){return Array.from(this._entries.values()).map((e=>null!=e.arraySize?`uniform ${e.type} ${e.name}[${e.arraySize}];`:`uniform ${e.type} ${e.name};`))}get entries(){return Array.from(this._entries.values())}}class fa{constructor(){this._entries=new Array}add(e){this._entries.push(e)}generateSource(){return this._entries}}class ma extends ha{constructor(){super(...arguments),this.uniforms=new va,this.code=new fa,this.constants=new ba}get builder(){return this}}class pa{constructor(){this._entries=new Array}add(e,t){this._entries.push([e,t])}generateSource(e){return"fragment"===e?[]:this._entries.map((e=>`in ${e[1]} ${e[0]};`))}}class ga{constructor(){this._entries=new Map}add(e,t){this._entries.has(e)&&u(this._entries.get(e)===t),this._entries.set(e,t)}generateSource(e){const t=new Array;return this._entries.forEach(((o,i)=>t.push("vertex"===e?`out ${o} ${i};`:`in ${o} ${i};`))),t}}class xa{constructor(){this._entries=new Set}add(e){this._entries.add(e)}generateSource(e){const t="vertex"===e?xa.ALLOWLIST_VERTEX:xa.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter((e=>t.includes(e))).map((e=>`#extension ${e} : enable`))}}xa.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],xa.ALLOWLIST_VERTEX=[];class wa{constructor(){this._entries=new Map}add(e,t,o=0){const i=this._entries.get(o);i?u(i.name===e&&i.type===t,`Fragment shader output location ${o} occupied`):this._entries.set(o,{name:e,type:t})}generateSource(e){if("vertex"===e)return[];0===this._entries.size&&this._entries.set(0,{name:wa.DEFAULT_NAME,type:wa.DEFAULT_TYPE});const t=new Array;return this._entries.forEach(((e,o)=>t.push(`layout(location = ${o}) out ${e.type} ${e.name};`))),t}}wa.DEFAULT_TYPE="vec4",wa.DEFAULT_NAME="fragColor";class ba{constructor(){this._entries=new Set}add(e,t,o){let i="ERROR_CONSTRUCTOR_STRING";switch(t){case"float":i=ba._numberToFloatStr(o);break;case"int":i=ba._numberToIntStr(o);break;case"bool":i=o.toString();break;case"vec2":i=`vec2(${ba._numberToFloatStr(o[0])},                            ${ba._numberToFloatStr(o[1])})`;break;case"vec3":i=`vec3(${ba._numberToFloatStr(o[0])},                            ${ba._numberToFloatStr(o[1])},                            ${ba._numberToFloatStr(o[2])})`;break;case"vec4":i=`vec4(${ba._numberToFloatStr(o[0])},                            ${ba._numberToFloatStr(o[1])},                            ${ba._numberToFloatStr(o[2])},                            ${ba._numberToFloatStr(o[3])})`;break;case"ivec2":i=`ivec2(${ba._numberToIntStr(o[0])},                             ${ba._numberToIntStr(o[1])})`;break;case"ivec3":i=`ivec3(${ba._numberToIntStr(o[0])},                             ${ba._numberToIntStr(o[1])},                             ${ba._numberToIntStr(o[2])})`;break;case"ivec4":i=`ivec4(${ba._numberToIntStr(o[0])},                             ${ba._numberToIntStr(o[1])},                             ${ba._numberToIntStr(o[2])},                             ${ba._numberToIntStr(o[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${t}(${Array.prototype.map.call(o,(e=>ba._numberToFloatStr(e))).join(", ")})`}return this._entries.add(`const ${t} ${e} = ${i};`),this}static _numberToIntStr(e){return e.toFixed(0)}static _numberToFloatStr(e){return Number.isInteger(e)?e.toFixed(1):e.toString()}generateSource(){return Array.from(this._entries)}}const ya="#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif",Ca="precision highp float;\nprecision highp sampler2D;";const Ma=4;function Sa(){const e=new da,t=e.fragment;e.include(aa);const o=(Ma+1)/2,i=1/(2*o*o);return t.include(la),t.uniforms.add(new Si("depthMap",(e=>e.depthTexture)),new Mi("tex",(e=>e.colorTexture)),new ca("blurSize",(e=>e.blurSize)),new lr("projScale",((e,t)=>{const o=ne(t.camera.eye,t.camera.center);return o>5e4?Math.max(0,e.projScale-(o-5e4)):e.projScale})),new Wn("nearFar",((e,t)=>t.camera.nearFar))),t.code.add(Lt`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv, nearFar);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${Lt.float(i)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),e.outputs.add("fragBlur","float"),t.code.add(Lt`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv, nearFar);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${Lt.int(Ma)}; r <= ${Lt.int(Ma)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),e}const Ta=Object.freeze(Object.defineProperty({__proto__:null,build:Sa},Symbol.toStringTag,{value:"Module"}));class Aa extends Gn{initializeProgram(e){return new Nn(e.rctx,Aa.shader.get().build(),Ri)}initializePipeline(){return Bt({colorWrite:jt})}}Aa.shader=new zn(Ta,(()=>import("./p-6c5ccaaf.js")));const _a="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";class Ea extends zt{constructor(){super(...arguments),this.projScale=1}}class Fa extends Ea{constructor(){super(...arguments),this.intensity=1}}class Ra extends zt{}class Oa extends Ra{constructor(){super(...arguments),this.blurSize=re()}}function Ia(e){e.fragment.uniforms.add(new Fr("projInfo",((e,t)=>La(t.camera)))),e.fragment.uniforms.add(new Wn("zScale",((e,t)=>Ga(t.camera)))),e.fragment.code.add(Lt`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function La(e){const t=e.projectionMatrix;return 0===t[11]?Z(za,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):Z(za,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}const za=K();function Ga(e){return 0===e.projectionMatrix[11]?ae(Na,0,1):ae(Na,1,0)}const Na=re();const Da=16;function Pa(){const e=new da,t=e.fragment;return e.include(aa),e.include(Ia),t.include(la),t.uniforms.add(new lr("radius",((e,t)=>Ba(t.camera)))),t.code.add(Lt`vec3 sphere[16] = vec3[16](
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
}`),t.code.add(Lt`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),t.uniforms.add(new Wn("nearFar",((e,t)=>t.camera.nearFar)),new Si("normalMap",(e=>e.normalTexture)),new Si("depthMap",(e=>e.depthTexture)),new lr("projScale",(e=>e.projScale)),new Si("rnm",(e=>e.noiseTexture)),new Wn("rnmScale",((e,t)=>ae(ja,t.camera.fullWidth/e.noiseTexture.descriptor.width,t.camera.fullHeight/e.noiseTexture.descriptor.height))),new lr("intensity",(e=>e.intensity)),new Wn("screenSize",((e,t)=>ae(ja,t.camera.fullWidth,t.camera.fullHeight)))),e.outputs.add("fragOcclusion","float"),t.code.add(Lt`
    void main(void) {
      float currentPixelDepth = linearDepthFromTexture(depthMap, uv, nearFar);

      if (-currentPixelDepth > nearFar.y || -currentPixelDepth < nearFar.x) {
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

      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${Lt.int(Da)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap, nearFar);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${Lt.int(Da)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),e}function Ba(e){return Math.max(10,20*e.computeScreenPixelSizeAtDist(Math.abs(4*e.relativeElevation)))}const ja=re(),Va=Object.freeze(Object.defineProperty({__proto__:null,build:Pa,getRadius:Ba},Symbol.toStringTag,{value:"Module"}));class Ha extends Gn{initializeProgram(e){return new Nn(e.rctx,Ha.shader.get().build(),Ri)}initializePipeline(){return Bt({colorWrite:jt})}}Ha.shader=new zn(Va,(()=>import("./p-6035bed0.js")));var Ua;!function(e){e[e.Antialiasing=0]="Antialiasing",e[e.HighQualityTransparency=1]="HighQualityTransparency",e[e.HighResolutionVoxel=2]="HighResolutionVoxel",e[e.HighResolutionAtmosphere=3]="HighResolutionAtmosphere",e[e.SSAO=4]="SSAO",e[e.WaterReflection=5]="WaterReflection",e[e.HighResolutionShadows=6]="HighResolutionShadows",e[e.PhysicalPixelRendering=7]="PhysicalPixelRendering"}(Ua||(Ua={}));const Wa=2;let $a=class extends ra{constructor(e){super(e),this._context=null,this._passParameters=new Fa,this._drawParameters=new Oa,this.produces=new Map([[nn.SSAO,()=>this._produces()]])}_getCameraElevation(){return this._context?.renderContext.bindParameters.camera.relativeElevation??1/0}_produces(){return null!=this._enableTime&&null!=this._context&&this._getCameraElevation()<ta}consumes(){return this._produces()?ia:oa}initializeRenderContext(e){this._context=e,this.addHandles([se((()=>this.view.qualitySettings.ambientOcclusion||this._context?.isFeatureEnabled(Ua.SSAO)),(e=>e?this._enable():this._disable()),le)])}uninitializeRenderContext(){this._disable(),this._context=null}_disable(){this._passParameters.noiseTexture=A(this._passParameters.noiseTexture),this._enableTime=null}destroy(){this._disable()}_enable(){if(null!=this._enableTime||!this._context)return;const e=Uint8Array.from(atob(_a),(e=>e.charCodeAt(0))),t=new Rt;t.wrapMode=Ct.CLAMP_TO_EDGE,t.pixelFormat=yt.RGB,t.wrapMode=Ct.REPEAT,t.hasMipmap=!0,t.width=32,t.height=32,this._passParameters.noiseTexture=new Et(this._context.renderContext.rctx,t,e),null==this._ssaoTechnique&&(this._ssaoTechnique=this._context.techniqueRepository.acquire(Ha)),null==this._blurTechnique&&(this._blurTechnique=this._context.techniqueRepository.acquire(Aa)),this._enableTime=ce(0),this._context?.requestRender()}renderNode(e,t,o){const i=e.bindParameters,n=o?.get("normals"),r=n?.getTexture(),a=n?.getTexture(At);if(null==this._enableTime||null==this._context||!r||!a)return;if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=e.time,void this._context.requestRender();0===this._enableTime&&(this._enableTime=e.time);const s=e.rctx,l=i.camera,c=this.view.qualitySettings.fadeDuration,u=l.relativeElevation,h=G((ta-u)/(ta-ea),0,1),d=c>0?Math.min(c,e.time-this._enableTime)/c:1,v=d*h;this._passParameters.normalTexture=r,this._passParameters.depthTexture=a,this._passParameters.projScale=1/l.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*ka/Ba(l)**6*v;const f=l.fullViewport[2],m=l.fullViewport[3],p=Math.round(f/Wa),g=Math.round(m/Wa),x=this._context.fbos,w=x.acquire(f,m,"ssao input",Kr.RG);s.unbindTexture(w.fbo.colorTexture),s.bindFramebuffer(w.fbo),s.setViewport(0,0,f,m),s.bindTechnique(this._ssaoTechnique,i,this._passParameters,this._drawParameters),s.screen.draw();const b=x.acquire(p,g,"ssao blur",Kr.RED);s.unbindTexture(b.fbo.colorTexture),s.bindFramebuffer(b.fbo),this._drawParameters.colorTexture=w.getTexture(),ae(this._drawParameters.blurSize,0,Wa/m),s.bindTechnique(this._blurTechnique,i,this._passParameters,this._drawParameters),s.setViewport(0,0,p,g),s.screen.draw(),w.release();const y=x.acquire(p,g,"ssao",Kr.RED);return s.unbindTexture(y.fbo.colorTexture),s.bindFramebuffer(y.fbo),s.setViewport(0,0,f,m),s.setClearColor(1,1,1,0),s.clear(_t.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=b.getTexture(),ae(this._drawParameters.blurSize,Wa/f,0),s.bindTechnique(this._blurTechnique,i,this._passParameters,this._drawParameters),s.setViewport(0,0,p,g),s.screen.draw(),s.setViewport4fv(l.fullViewport),b.release(),d<1&&this._context.requestRender(),y}};J([ee({constructOnly:!0})],$a.prototype,"view",void 0),J([ee()],$a.prototype,"_context",void 0),$a=J([te("esri.views.3d.webgl-engine.effects.ssao.SSAO")],$a);const ka=.5;function Ya(e,t){const o=e.fragment;t.receiveAmbientOcclusion?(o.uniforms.add(new Si("ssaoTex",((e,t)=>t.ssao?.getTexture()))),o.constants.add("blurSizePixelsInverse","float",1/Wa),o.code.add(Lt`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):o.code.add(Lt`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function qa(e,t){const o=e.fragment,i=void 0!==t.lightingSphericalHarmonicsOrder?t.lightingSphericalHarmonicsOrder:2;0===i?(o.uniforms.add(new Ci("lightingAmbientSH0",((e,t)=>n(Ja,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0])))),o.code.add(Lt`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===i?(o.uniforms.add(new Fr("lightingAmbientSH_R",((e,t)=>Z(Xa,t.lighting.sh.r[0],t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3]))),new Fr("lightingAmbientSH_G",((e,t)=>Z(Xa,t.lighting.sh.g[0],t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3]))),new Fr("lightingAmbientSH_B",((e,t)=>Z(Xa,t.lighting.sh.b[0],t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3])))),o.code.add(Lt`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`)):2===i&&(o.uniforms.add(new Ci("lightingAmbientSH0",((e,t)=>n(Ja,t.lighting.sh.r[0],t.lighting.sh.g[0],t.lighting.sh.b[0]))),new Fr("lightingAmbientSH_R1",((e,t)=>Z(Xa,t.lighting.sh.r[1],t.lighting.sh.r[2],t.lighting.sh.r[3],t.lighting.sh.r[4]))),new Fr("lightingAmbientSH_G1",((e,t)=>Z(Xa,t.lighting.sh.g[1],t.lighting.sh.g[2],t.lighting.sh.g[3],t.lighting.sh.g[4]))),new Fr("lightingAmbientSH_B1",((e,t)=>Z(Xa,t.lighting.sh.b[1],t.lighting.sh.b[2],t.lighting.sh.b[3],t.lighting.sh.b[4]))),new Fr("lightingAmbientSH_R2",((e,t)=>Z(Xa,t.lighting.sh.r[5],t.lighting.sh.r[6],t.lighting.sh.r[7],t.lighting.sh.r[8]))),new Fr("lightingAmbientSH_G2",((e,t)=>Z(Xa,t.lighting.sh.g[5],t.lighting.sh.g[6],t.lighting.sh.g[7],t.lighting.sh.g[8]))),new Fr("lightingAmbientSH_B2",((e,t)=>Z(Xa,t.lighting.sh.b[5],t.lighting.sh.b[6],t.lighting.sh.b[7],t.lighting.sh.b[8])))),o.code.add(Lt`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
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
}`),t.pbrMode!==Ei.Normal&&t.pbrMode!==Ei.Schematic||o.code.add(Lt`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Ja=s(),Xa=K();function Za(e){e.uniforms.add(new Ci("mainLightDirection",((e,t)=>t.lighting.mainLight.direction)))}function Ka(e){e.uniforms.add(new Ci("mainLightIntensity",((e,t)=>t.lighting.mainLight.intensity)))}function Qa(e){Za(e.fragment),Ka(e.fragment),e.fragment.code.add(Lt`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function es(e){const t=e.fragment.code;t.add(Lt`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(Lt`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(Lt`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function ts(e){e.vertex.code.add(Lt`const float PI = 3.141592653589793;`),e.fragment.code.add(Lt`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function os(e,t){const o=e.fragment.code;e.include(ts),t.pbrMode!==Ei.Normal&&t.pbrMode!==Ei.Schematic&&t.pbrMode!==Ei.Simplified&&t.pbrMode!==Ei.TerrainWithWater||(o.add(Lt`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),o.add(Lt`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==Ei.Normal&&t.pbrMode!==Ei.Schematic||(e.include(es),o.add(Lt`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
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
};`),o.add(Lt`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),o.add(Lt`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),o.add(Lt`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}class is extends bi{constructor(e,t){super(e,"bool",Nt.Pass,((o,i,n)=>o.setUniform1b(e,t(i,n))))}}const ns=.4;function rs(e){e.constants.add("ambientBoostFactor","float",ns)}function as(e){e.uniforms.add(new lr("lightingGlobalFactor",((e,t)=>t.lighting.globalFactor)))}function ss(e,t){const o=e.fragment;switch(e.include(Ya,t),t.pbrMode!==Ei.Disabled&&e.include(os,t),e.include(qa,t),e.include(ts),o.code.add(Lt`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${t.pbrMode===Ei.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),rs(o),as(o),Za(o),o.code.add(Lt`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${t.spherical?Lt`normalize(vPosWorld)`:Lt`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Ka(o),o.code.add(Lt`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),t.pbrMode){case Ei.Disabled:case Ei.WaterOnIntegratedMesh:case Ei.Water:e.include(Qa),o.code.add(Lt`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case Ei.Normal:case Ei.Schematic:o.code.add(Lt`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),o.code.add(Lt`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),t.useFillLights?o.uniforms.add(new is("hasFillLights",((e,t)=>t.enableFillLights))):o.constants.add("hasFillLights","bool",!1),o.code.add(Lt`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),o.uniforms.add(new lr("lightingSpecularStrength",((e,t)=>t.lighting.mainLight.specularStrength)),new lr("lightingEnvironmentStrength",((e,t)=>t.lighting.mainLight.environmentStrength))),o.code.add(Lt`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),o.code.add(Lt`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${t.pbrMode!==Ei.Schematic||t.hasColorTexture?Lt`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:Lt`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case Ei.Simplified:case Ei.TerrainWithWater:e.include(Qa),o.code.add(Lt`const float roughnessTerrain = 0.5;
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
}`);break;default:case Ei.COUNT:}}function ls(e,t){if(!t.multipassEnabled)return;e.fragment.include(sa),e.fragment.uniforms.add(new Si("terrainDepthTexture",((e,t)=>t.multipassTerrain.linearDepth?.getTexture())),new Wn("nearFar",((e,t)=>t.camera.nearFar)));const o=t.occlusionPass;e.fragment.code.add(Lt`
   ${o?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      vec4 data = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0);
      float linearDepth = linearDepthFromRGBA(data, nearFar);
      ${o?Lt`return fragmentDepth < linearDepth && data != vec4(0.0, 0.0, 0.0, 1.0);`:Lt`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}class cs extends bi{constructor(e,t,o){super(e,"mat4",Nt.Draw,((o,i,n,r)=>o.setUniformMatrix4fv(e,t(i,n,r))),o)}}class us extends bi{constructor(e,t,o){super(e,"mat4",Nt.Pass,((o,i,n)=>o.setUniformMatrix4fv(e,t(i,n))),o)}}function hs(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new us("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),vs(e))}function ds(e,t){t.receiveShadows&&(e.fragment.uniforms.add(new cs("shadowMapMatrix",((e,t)=>t.shadowMap.getShadowMapMatrices(e.origin)),4)),vs(e))}function vs(e){const t=e.fragment;t.include(zr),t.uniforms.add(new Si("shadowMap",((e,t)=>t.shadowMap.depthTexture)),new Cr("numCascades",((e,t)=>t.shadowMap.numCascades)),new Fr("cascadeDistances",((e,t)=>t.shadowMap.cascadeDistances))),t.code.add(Lt`int chooseCascade(float depth, out mat4 mat) {
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
}`)}function fs(e,t){t.hasColorTextureTransform?(e.vertex.uniforms.add(new An("colorTextureTransformMatrix",(e=>e.colorTextureTransformMatrix??Ee))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(Lt`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(Lt`void forwardColorUV(){}`)}function ms(e,t){t.hasNormalTextureTransform&&t.textureCoordinateType!==pi.None?(e.vertex.uniforms.add(new An("normalTextureTransformMatrix",(e=>e.normalTextureTransformMatrix??Ee))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(Lt`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(Lt`void forwardNormalUV(){}`)}function ps(e,t){t.hasEmissionTextureTransform&&t.textureCoordinateType!==pi.None?(e.vertex.uniforms.add(new An("emissiveTextureTransformMatrix",(e=>e.emissiveTextureTransformMatrix??Ee))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(Lt`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(Lt`void forwardEmissiveUV(){}`)}function gs(e,t){t.hasOcclusionTextureTransform&&t.textureCoordinateType!==pi.None?(e.vertex.uniforms.add(new An("occlusionTextureTransformMatrix",(e=>e.occlusionTextureTransformMatrix??Ee))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(Lt`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(Lt`void forwardOcclusionUV(){}`)}function xs(e,t){t.hasMetallicRoughnessTextureTransform&&t.textureCoordinateType!==pi.None?(e.vertex.uniforms.add(new An("metallicRoughnessTextureTransformMatrix",(e=>e.metallicRoughnessTextureTransformMatrix??Ee))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(Lt`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(Lt`void forwardMetallicRoughnessUV(){}`)}function ws(e){e.code.add(Lt`vec4 premultiplyAlpha(vec4 v) {
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
}`)}function bs(e){e.include(ws),e.code.add(Lt`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${Lt.int(Xt.Multiply)}) {
        return allMixed;
      }
      if (mode == ${Lt.int(Xt.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${Lt.int(Xt.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${Lt.int(Xt.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${Lt.int(Xt.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function ys(e){const t=new da,{vertex:o,fragment:i,varyings:n}=t;if(hr(o,e),t.include(Mn),n.add("vpos","vec3"),t.include(kr,e),t.include(wr,e),t.include(Rr,e),t.include(fs,e),e.output===ri.Color||e.output===ri.Alpha){t.include(ms,e),t.include(ps,e),t.include(gs,e),t.include(xs,e),ur(o,e),t.include(di,e),t.include(sr,e);const i=e.normalType===vi.Attribute||e.normalType===vi.Compressed;i&&e.offsetBackfaces&&t.include(Jn),t.include(Zr,e),t.include(Rn,e),e.instancedColor&&t.attributes.add(xt.INSTANCECOLOR,"vec4"),n.add("vPositionLocal","vec3"),t.include(gi,e),t.include(qn,e),t.include(Mr,e),t.include(Sr,e),o.uniforms.add(new Fr("externalColor",(e=>e.externalColor))),n.add("vcolorExt","vec4"),e.multipassEnabled&&n.add("depth","float"),o.code.add(Lt`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${Lt.float(Ln)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${i?Lt`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${i&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `)}switch(e.output){case ri.Alpha:t.include(Xn,e),t.include(qr,e),t.include(ls,e),i.uniforms.add(new lr("opacity",(e=>e.opacity)),new lr("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&i.uniforms.add(new Si("tex",(e=>e.texture))),i.include(bs),i.code.add(Lt`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?Lt`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?Lt`colorUV`:Lt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Lt`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?Lt`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Lt`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        fragColor = vec4(opacity_);
      }
    `);break;case ri.Color:t.include(Xn,e),t.include(ss,e),t.include(Ya,e),t.include(qr,e),t.include(e.instancedDoublePrecision?hs:ds,e),t.include(ls,e),ur(i,e),i.uniforms.add(o.uniforms.get("localOrigin"),new Ci("ambient",(e=>e.ambient)),new Ci("diffuse",(e=>e.diffuse)),new lr("opacity",(e=>e.opacity)),new lr("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&i.uniforms.add(new Si("tex",(e=>e.texture))),t.include(Fi,e),t.include(os,e),i.include(bs),t.include(fi,e),rs(i),as(i),Ka(i),i.code.add(Lt`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?Lt`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?Lt`colorUV`:Lt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Lt`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===vi.ScreenDerivative?Lt`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:Lt`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===Ei.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?Lt`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Lt`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?Lt`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?Lt`normalUV`:"vuv0"});`:Lt`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?Lt`normalize(posWorld);`:Lt`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?Lt`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===Ei.Normal||e.pbrMode===Ei.Schematic?Lt`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?Lt`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:Lt`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Gt.Color?Lt`fragColor = premultiplyAlpha(fragColor);`:""}
      }
    `)}return t.include(Xr,e),t}const Cs=Object.freeze(Object.defineProperty({__proto__:null,build:ys},Symbol.toStringTag,{value:"Module"}));class Ms extends On{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=ue(Vn),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=vt.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=P(0,0,0),this.instancedDoublePrecision=!1,this.normalType=vi.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=P(.2,.2,.2),this.diffuse=P(.8,.8,.8),this.externalColor=Q(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=s(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=ft.Less,this.textureAlphaMode=dt.Blend,this.textureAlphaCutoff=In,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=on.Occlude,this.isDecoration=!1}}class Ss extends Gn{initializeConfiguration(e,t){t.spherical=e.viewingMode===V.Global,t.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,t.textureCoordinateType=t.hasColorTexture||t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture||t.hasNormalTexture?pi.Default:pi.None,t.objectAndLayerIdColorInstanced=t.instanced}initializeProgram(e){return this._initializeProgram(e,Ss.shader)}_initializeProgram(e,t){return new Nn(e.rctx,t.get().build(this.configuration),Ri)}_convertDepthTestFunction(e){return e===ft.Lequal?St.LEQUAL:St.LESS}_makePipeline(e,t){const o=this.configuration,i=e===Gt.NONE,n=e===Gt.FrontFace;return Bt({blending:o.output!==ri.Color&&o.output!==ri.Alpha||!o.transparent?null:i?Vt:Ht(e),culling:Ts(o)?Ut(o.cullFace):null,depthTest:{func:Wt(e,this._convertDepthTestFunction(o.customDepthTest))},depthWrite:(i||n)&&o.writeDepth?$t:null,colorWrite:jt,stencilWrite:o.hasOccludees?Dn:null,stencilTest:o.hasOccludees?t?Bn:Pn:null,polygonOffset:i||n?null:kt(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}}function Ts(e){return e.cullFace!==vt.None||!e.hasSlicePlane&&(!e.transparent&&!e.doubleSidedMode)}Ss.shader=new zn(Cs,(()=>import("./p-18ff8702.js")));class As extends gr{}J([pr({constValue:!0})],As.prototype,"hasSliceHighlight",void 0),J([pr({constValue:!1})],As.prototype,"hasSliceInVertexProgram",void 0),J([pr({constValue:Nt.Pass})],As.prototype,"pbrTextureBindType",void 0);class _s extends As{constructor(){super(...arguments),this.output=ri.Color,this.alphaDiscardMode=dt.Opaque,this.doubleSidedMode=mi.None,this.pbrMode=Ei.Disabled,this.cullFace=vt.None,this.transparencyPassType=Gt.NONE,this.normalType=vi.Attribute,this.textureCoordinateType=pi.None,this.customDepthTest=ft.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}J([pr({count:ri.COUNT})],_s.prototype,"output",void 0),J([pr({count:dt.COUNT})],_s.prototype,"alphaDiscardMode",void 0),J([pr({count:mi.COUNT})],_s.prototype,"doubleSidedMode",void 0),J([pr({count:Ei.COUNT})],_s.prototype,"pbrMode",void 0),J([pr({count:vt.COUNT})],_s.prototype,"cullFace",void 0),J([pr({count:Gt.COUNT})],_s.prototype,"transparencyPassType",void 0),J([pr({count:vi.COUNT})],_s.prototype,"normalType",void 0),J([pr({count:pi.COUNT})],_s.prototype,"textureCoordinateType",void 0),J([pr({count:ft.COUNT})],_s.prototype,"customDepthTest",void 0),J([pr()],_s.prototype,"spherical",void 0),J([pr()],_s.prototype,"hasVertexColors",void 0),J([pr()],_s.prototype,"hasSymbolColors",void 0),J([pr()],_s.prototype,"hasVerticalOffset",void 0),J([pr()],_s.prototype,"hasSlicePlane",void 0),J([pr()],_s.prototype,"hasSliceHighlight",void 0),J([pr()],_s.prototype,"hasColorTexture",void 0),J([pr()],_s.prototype,"hasMetallicRoughnessTexture",void 0),J([pr()],_s.prototype,"hasEmissionTexture",void 0),J([pr()],_s.prototype,"hasOcclusionTexture",void 0),J([pr()],_s.prototype,"hasNormalTexture",void 0),J([pr()],_s.prototype,"hasScreenSizePerspective",void 0),J([pr()],_s.prototype,"hasVertexTangents",void 0),J([pr()],_s.prototype,"hasOccludees",void 0),J([pr()],_s.prototype,"multipassEnabled",void 0),J([pr()],_s.prototype,"hasModelTransformation",void 0),J([pr()],_s.prototype,"offsetBackfaces",void 0),J([pr()],_s.prototype,"vvSize",void 0),J([pr()],_s.prototype,"vvColor",void 0),J([pr()],_s.prototype,"receiveShadows",void 0),J([pr()],_s.prototype,"receiveAmbientOcclusion",void 0),J([pr()],_s.prototype,"textureAlphaPremultiplied",void 0),J([pr()],_s.prototype,"instanced",void 0),J([pr()],_s.prototype,"instancedColor",void 0),J([pr()],_s.prototype,"objectAndLayerIdColorInstanced",void 0),J([pr()],_s.prototype,"instancedDoublePrecision",void 0),J([pr()],_s.prototype,"doublePrecisionRequiresObfuscation",void 0),J([pr()],_s.prototype,"writeDepth",void 0),J([pr()],_s.prototype,"transparent",void 0),J([pr()],_s.prototype,"enableOffset",void 0),J([pr()],_s.prototype,"cullAboveGround",void 0),J([pr()],_s.prototype,"snowCover",void 0),J([pr()],_s.prototype,"hasColorTextureTransform",void 0),J([pr()],_s.prototype,"hasEmissionTextureTransform",void 0),J([pr()],_s.prototype,"hasNormalTextureTransform",void 0),J([pr()],_s.prototype,"hasOcclusionTextureTransform",void 0),J([pr()],_s.prototype,"hasMetallicRoughnessTextureTransform",void 0),J([pr({constValue:!1})],_s.prototype,"occlusionPass",void 0),J([pr({constValue:!0})],_s.prototype,"hasVvInstancing",void 0),J([pr({constValue:!1})],_s.prototype,"useCustomDTRExponentForWater",void 0),J([pr({constValue:!1})],_s.prototype,"supportsTextureAtlas",void 0),J([pr({constValue:!0})],_s.prototype,"useFillLights",void 0);function Es(e){const t=new da,{vertex:o,fragment:i,varyings:n}=t;return hr(o,e),t.include(Mn),n.add("vpos","vec3"),t.include(kr,e),t.include(wr,e),t.include(Rr,e),e.output!==ri.Color&&e.output!==ri.Alpha||(ur(t.vertex,e),t.include(di,e),t.include(sr,e),e.offsetBackfaces&&t.include(Jn),e.instancedColor&&t.attributes.add(xt.INSTANCECOLOR,"vec4"),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3"),e.multipassEnabled&&n.add("depth","float"),t.include(gi,e),t.include(qn,e),t.include(Mr,e),t.include(Sr,e),o.uniforms.add(new Fr("externalColor",(e=>e.externalColor))),n.add("vcolorExt","vec4"),o.code.add(Lt`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${Lt.float(Ln)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${e.multipassEnabled?Lt`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),e.output===ri.Alpha&&(t.include(Xn,e),t.include(qr,e),t.include(ls,e),i.uniforms.add(new lr("opacity",(e=>e.opacity)),new lr("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&i.uniforms.add(new Si("tex",(e=>e.texture))),i.include(bs),i.code.add(Lt`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?Lt`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?Lt`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?Lt`colorUV`:Lt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Lt`vec4 texColor = vec4(1.0);`}
        ${e.hasVertexColors?Lt`float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Lt`float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}

        fragColor = vec4(opacity_);
      }
    `)),e.output===ri.Color&&(t.include(Xn,e),t.include(ss,e),t.include(Ya,e),t.include(qr,e),t.include(e.instancedDoublePrecision?hs:ds,e),t.include(ls,e),ur(t.fragment,e),Za(i),rs(i),as(i),i.uniforms.add(o.uniforms.get("localOrigin"),o.uniforms.get("view"),new Ci("ambient",(e=>e.ambient)),new Ci("diffuse",(e=>e.diffuse)),new lr("opacity",(e=>e.opacity)),new lr("layerOpacity",(e=>e.layerOpacity))),e.hasColorTexture&&i.uniforms.add(new Si("tex",(e=>e.texture))),t.include(Fi,e),t.include(os,e),i.include(bs),Ka(i),i.code.add(Lt`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?Lt`terrainDepthTest(depth);`:""}
        ${e.hasColorTexture?Lt`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?Lt`colorUV`:Lt`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:Lt`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode===Ei.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${e.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":e.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?Lt`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:Lt`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.snowCover?Lt`albedo = mix(albedo, vec3(1), 0.9);`:Lt``}
        ${Lt`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${e.pbrMode===Ei.Normal||e.pbrMode===Ei.Schematic?e.spherical?Lt`vec3 normalGround = normalize(vpos + localOrigin);`:Lt`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:Lt``}
        ${e.pbrMode===Ei.Normal||e.pbrMode===Ei.Schematic?Lt`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?Lt`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:Lt`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===Gt.Color?Lt`fragColor = premultiplyAlpha(fragColor);`:Lt``}
      }
    `)),t.include(Xr,e),t}const Fs=Object.freeze(Object.defineProperty({__proto__:null,build:Es},Symbol.toStringTag,{value:"Module"}));class Rs extends Ss{initializeConfiguration(e,t){super.initializeConfiguration(e,t),t.hasMetallicRoughnessTexture=!1,t.hasEmissionTexture=!1,t.hasOcclusionTexture=!1,t.hasNormalTexture=!1,t.hasModelTransformation=!1,t.normalType=vi.Attribute,t.doubleSidedMode=mi.WindingOrder,t.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Rs.shader)}}Rs.shader=new zn(Fs,(()=>import("./p-0f49ff70.js")));class Os extends tn{constructor(e){super(e,zs),this.supportsEdges=!0,this.produces=new Map([[nn.OPAQUE_MATERIAL,e=>(si(e)||ai(e))&&!this.parameters.transparent],[nn.TRANSPARENT_MATERIAL,e=>(si(e)||ai(e))&&this.parameters.transparent&&this.parameters.writeDepth],[nn.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,e=>(si(e)||ai(e))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new _s,this._vertexBufferLayout=Gs(this.parameters)}isVisibleForOutput(e){return e!==ri.Shadow&&e!==ri.ShadowExcludeHighlight&&e!==ri.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||0===e.layerOpacity)return!1;const{hasInstancedColor:t,hasVertexColors:o,hasSymbolColors:i,vvColor:n}=e,r="replace"===e.colorMixMode,a=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,l=t||n||i;return o&&l?r||a:o?r?s:a:l?r||a:r?s:a}getConfiguration(e,t){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=null!=this.parameters.verticalOffset,this._configuration.hasScreenSizePerspective=null!=this.parameters.screenSizePerspective,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,null!=this.parameters.customDepthTest&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?vt.None:this.parameters.cullFace,this._configuration.multipassEnabled=t.multipassEnabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=null!=this.parameters.modelTransformation,e!==ri.Color&&e!==ri.Alpha||(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=mi.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&"normal"===this.parameters.doubleSidedType?mi.View:this.parameters.doubleSided&&"winding-order"===this.parameters.doubleSidedType?mi.WindingOrder:mi.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&null!=t.ssao,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?Ei.Schematic:Ei.Normal:Ei.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<Yt,this._configuration.snowCover=this.hasSnowCover(t),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return null!=e.weather&&e.weatherVisible&&"snowy"===e.weather.type&&"enabled"===e.weather.snowCover}intersect(e,t,o,i,r,s){if(null!=this.parameters.verticalOffset){const e=o.camera;n(Vs,t[12],t[13],t[14]);let s=null;switch(o.viewingMode){case V.Global:s=z(Bs,Vs);break;case V.Local:s=de(Bs,Ps)}let l=0;const c=Y(Hs,Vs,e.eye),u=B(c),h=a(c,c,1/u);let d=null;this.parameters.screenSizePerspective&&(d=fe(s,h)),l+=Ji(e,u,this.parameters.verticalOffset,d??0,this.parameters.screenSizePerspective),a(s,s,l),ve(js,s,o.transform.inverseRotation),i=Y(Ns,i,js),r=Y(Ds,r,js)}Di(e,o,i,r,ln(o.verticalOffset),s)}createGLMaterial(e){return new Is(e)}createBufferWriter(){return new Cn(this._vertexBufferLayout)}}class Is extends Ai{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output!==ri.Color&&this._output!==ri.Alpha||(this._updateShadowState(e),this._updateOccludeeState(e));const t=this._material.parameters;this.updateTexture(t.textureId);const o=e.camera.viewInverseTransposeMatrix;return n(t.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(t.treeRendering?Rs:Ss,e)}}class Ls extends Ms{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const zs=new Ls;function Gs(e){const t=It().vec3f(xt.POSITION);e.normalType===vi.Compressed?t.vec2i16(xt.NORMALCOMPRESSED,{glNormalized:!0}):t.vec3f(xt.NORMAL),e.hasVertexTangents&&t.vec4f(xt.TANGENT);return(e.textureId||e.normalTextureId||e.metallicRoughnessTextureId||e.emissiveTextureId||e.occlusionTextureId)&&t.vec2f(xt.UV0),e.hasVertexColors&&t.vec4u8(xt.COLOR),e.hasSymbolColors&&t.vec4u8(xt.SYMBOLCOLOR),he("enable-feature:objectAndLayerId-rendering")&&t.vec4u8(xt.OBJECTANDLAYERIDCOLOR),t}const Ns=s(),Ds=s(),Ps=P(0,0,1),Bs=s(),js=s(),Vs=s(),Hs=s();const Us=()=>m.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Ws(e,t){const o=await $s(e,t),i=await Zs(o.textureDefinitions??{},t);let n=0;for(const e in i)if(i.hasOwnProperty(e)){const t=i[e];n+=t?.image?t.image.width*t.image.height*4:0}return{resource:o,textures:i,size:n+me(o)}}async function $s(e,t){const o=t?.streamDataRequester;if(o)return ks(e,o,t);const i=await ge(xe(e,t));if(!0===i.ok)return i.value.data;we(i.error),Ys(i.error)}async function ks(e,t,o){const i=await ge(t.request(e,"json",o));if(!0===i.ok)return i.value;we(i.error),Ys(i.error.details.url)}function Ys(e){throw new p("",`Request for object resource failed: ${e}`)}function qs(e){const t=e.params,o=t.topology;let i=!0;switch(t.vertexAttributes||(Us().warn("Geometry must specify vertex attributes"),i=!1),t.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const e=t.faces;if(e){if(t.vertexAttributes)for(const o in t.vertexAttributes){const t=e[o];t?.values?(null!=t.valueType&&"UInt32"!==t.valueType&&(Us().warn(`Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`),i=!1),null!=t.valuesPerElement&&1!==t.valuesPerElement&&(Us().warn(`Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`),i=!1)):(Us().warn(`Indexed geometry does not specify face indices for '${o}' attribute`),i=!1)}}else Us().warn("Indexed geometries must specify faces"),i=!1;break}default:Us().warn(`Unsupported topology '${o}'`),i=!1}e.params.material||(Us().warn("Geometry requires material"),i=!1);const n=e.params.vertexAttributes;for(const e in n){n[e].values||(Us().warn("Geometries with externally defined attributes are not yet supported"),i=!1)}return i}function Js(e,t){const o=new Array,i=new Array,n=new Array,r=new et,a=e.resource,s=be.parse(a.version||"1.0","wosr");el.validate(s);const l=a.model.name,c=a.model.geometries,u=a.materialDefinitions??{},h=e.textures;let d=0;const v=new Map;for(let e=0;e<c.length;e++){const a=c[e];if(!qs(a))continue;const s=Qs(a),l=a.params.vertexAttributes,f=[],m=e=>{if("PerAttributeArray"===a.params.topology)return null;const t=a.params.faces;for(const o in t)if(o===e)return t[o].values;return null},p=l[xt.POSITION],g=p.values.length/p.valuesPerElement;for(const e in l){const t=l[e],o=t.values,i=m(e)??ot(g);f.push([e,new at(o,i,t.valuesPerElement,!0)])}const x=s.texture,w=h&&h[x];if(w&&!v.has(x)){const{image:e,parameters:t}=w,o=new ei(e,t);i.push(o),v.set(x,o)}const b=v.get(x),y=b?b.id:void 0,C=s.material;let M=r.get(C,x);if(null==M){const e=u[C.substring(C.lastIndexOf("/")+1)].params;1===e.transparency&&(e.transparency=0);const o=w&&w.alphaChannelUsage,i=e.transparency>0||"transparency"===o||"maskAndTransparency"===o,n=w?Ks(w.alphaChannelUsage):void 0,a={ambient:ue(e.diffuse),diffuse:ue(e.diffuse),opacity:1-(e.transparency||0),transparent:i,textureAlphaMode:n,textureAlphaCutoff:.33,textureId:y,initTextureTransparent:!0,doubleSided:!0,cullFace:vt.None,colorMixMode:e.externalColorMixMode||"tint",textureAlphaPremultiplied:w?.parameters.preMultiplyAlpha??!1};t?.materialParameters&&Object.assign(a,t.materialParameters),M=new Os(a),r.set(C,x,M)}n.push(M);const S=new uo(M,f);d+=f.find((e=>e[0]===xt.POSITION))?.[1]?.indices.length??0,o.push(S)}return{engineResources:[{name:l,stageResources:{textures:i,materials:n,geometries:o},pivotOffset:a.model.pivotOffset,numberOfVertices:d,lodThreshold:null}],referenceBoundingBox:Xs(o)}}function Xs(e){const t=ye();return e.forEach((e=>{const o=e.boundingInfo;null!=o&&(pe(t,o.bbMin),pe(t,o.bbMax))})),t}async function Zs(e,t){const o=new Array;for(const i in e){const n=e[i],r=n.images[0].data;if(!r){Us().warn("Externally referenced texture data is not yet supported");continue}const a=n.encoding+";base64,"+r,s="/textureDefinitions/"+i,l="rgba"===n.channels?n.alphaChannelUsage||"transparency":"none",c={noUnpackFlip:!0,wrap:{s:Ct.REPEAT,t:Ct.REPEAT},preMultiplyAlpha:Ks(l)!==dt.Opaque},u=null!=t&&t.disableTextures?Promise.resolve(null):it(a,t);o.push(u.then((e=>({refId:s,image:e,parameters:c,alphaChannelUsage:l}))))}const i=await Promise.all(o),n={};for(const e of i)n[e.refId]=e;return n}function Ks(e){switch(e){case"mask":return dt.Mask;case"maskAndTransparency":return dt.MaskBlend;case"none":return dt.Opaque;default:return dt.Blend}}function Qs(e){const t=e.params;return{id:1,material:t.material,texture:t.texture,region:t.texture}}const el=new be(1,2,"wosr");async function tl(e,t){const o=ol(Ce(e));if("wosr"===o.fileType){const e=await(t.cache?t.cache.loadWOSR(o.url,t):Ws(o.url,t)),{engineResources:i,referenceBoundingBox:n}=Js(e,t);return{lods:i,referenceBoundingBox:n,isEsriSymbolResource:!1,isWosr:!0}}const i=await(t.cache?t.cache.loadGLTF(o.url,t,!!t.usePBR):We(new $e(t.streamDataRequester),o.url,t,t.usePBR)),n=i.model.meta?.ESRI_proxyEllipsoid,r=i.meta.isEsriSymbolResource&&null!=n&&"EsriRealisticTreesStyle"===i.meta.ESRI_webstyle;r&&!i.customMeta.esriTreeRendering&&(i.customMeta.esriTreeRendering=!0,ll(i,n));const a=!!t.usePBR,s=i.meta.isEsriSymbolResource?{usePBR:a,isSchematic:!1,treeRendering:r,mrrFactors:[...Un]}:{usePBR:a,isSchematic:!1,treeRendering:!1,mrrFactors:[...Vn]},l={...t.materialParameters,treeRendering:r},{engineResources:c,referenceBoundingBox:u}=il(i,s,l,t.skipHighLods&&null==o.specifiedLodIndex?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:o.specifiedLodIndex});return{lods:c,referenceBoundingBox:u,isEsriSymbolResource:i.meta.isEsriSymbolResource,isWosr:!1}}function ol(e){const t=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);if(t)return{fileType:"gltf",url:t[1],specifiedLodIndex:null!=t[4]?Number(t[4]):null};return e.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:e,specifiedLodIndex:null}:{fileType:"unknown",url:e,specifiedLodIndex:null}}function il(e,t,o,i){const n=e.model,r=new Array,a=new Map,s=new Map,l=n.lods.length,c=ye();return n.lods.forEach(((e,u)=>{const h=!0===i.skipHighLods&&(l>1&&0===u||l>3&&1===u)||!1===i.skipHighLods&&null!=i.singleLodIndex&&u!==i.singleLodIndex;if(h&&0!==u)return;const d=new mo(e.name,e.lodThreshold,[0,0,0]);e.parts.forEach((e=>{const i=h?new Os({}):nl(n,e,d,t,o,a,s),{geometry:r,vertexCount:l}=rl(e,null!=i?i:new Os({})),v=r.boundingInfo;null!=v&&0===u&&(pe(c,v.bbMin),pe(c,v.bbMax)),null!=i&&(d.stageResources.geometries.push(r),d.numberOfVertices+=l)})),h||r.push(d)})),{engineResources:r,referenceBoundingBox:c}}function nl(e,t,o,i,n,r,a){const s=t.material+(t.attributes.normal?"_normal":"")+(t.attributes.color?"_color":"")+(t.attributes.texCoord0?"_texCoord0":"")+(t.attributes.tangent?"_tangent":""),l=e.materials.get(t.material),c=null!=t.attributes.texCoord0,u=null!=t.attributes.normal;if(null==l)return null;const h=sl(l.alphaMode);if(!r.has(s)){if(c){const t=(t,o=!1)=>{if(null!=t&&!a.has(t)){const i=e.textures.get(t);if(null!=i){const e=i.data;a.set(t,new ei(Qe(e)?e.data:e,{...i.parameters,preMultiplyAlpha:!Qe(e)&&o,encoding:Qe(e)&&null!=e.encoding?e.encoding:void 0}))}}};t(l.textureColor,h!==dt.Opaque),t(l.textureNormal),t(l.textureOcclusion),t(l.textureEmissive),t(l.textureMetallicRoughness)}const o=l.color[0]**(1/Ke),d=l.color[1]**(1/Ke),v=l.color[2]**(1/Ke),f=l.emissiveFactor[0]**(1/Ke),m=l.emissiveFactor[1]**(1/Ke),p=l.emissiveFactor[2]**(1/Ke),g=null!=l.textureColor&&c?a.get(l.textureColor):null,x=jn({normalTexture:l.textureNormal,metallicRoughnessTexture:l.textureMetallicRoughness,metallicFactor:l.metallicFactor,roughnessFactor:l.roughnessFactor,emissiveTexture:l.textureEmissive,emissiveFactor:l.emissiveFactor,occlusionTexture:l.textureOcclusion}),w=null!=l.normalTextureTransform?.scale?l.normalTextureTransform?.scale:ie;r.set(s,new Os({...i,transparent:h===dt.Blend,customDepthTest:ft.Lequal,textureAlphaMode:h,textureAlphaCutoff:l.alphaCutoff,diffuse:[o,d,v],ambient:[o,d,v],opacity:l.opacity,doubleSided:l.doubleSided,doubleSidedType:"winding-order",cullFace:l.doubleSided?vt.None:vt.Back,hasVertexColors:!!t.attributes.color,hasVertexTangents:!!t.attributes.tangent,normalType:u?vi.Attribute:vi.ScreenDerivative,castShadows:!0,receiveShadows:l.receiveShadows,receiveAmbientOcclusion:l.receiveAmbientOcclustion,textureId:null!=g?g.id:void 0,colorMixMode:l.colorMixMode,normalTextureId:null!=l.textureNormal&&c?a.get(l.textureNormal).id:void 0,textureAlphaPremultiplied:null!=g&&!!g.parameters.preMultiplyAlpha,occlusionTextureId:null!=l.textureOcclusion&&c?a.get(l.textureOcclusion).id:void 0,emissiveTextureId:null!=l.textureEmissive&&c?a.get(l.textureEmissive).id:void 0,metallicRoughnessTextureId:null!=l.textureMetallicRoughness&&c?a.get(l.textureMetallicRoughness).id:void 0,emissiveFactor:[f,m,p],mrrFactors:x?[...Hn]:[l.metallicFactor,l.roughnessFactor,i.mrrFactors[2]],isSchematic:x,colorTextureTransformMatrix:vo(l.colorTextureTransform),normalTextureTransformMatrix:vo(l.normalTextureTransform),scale:[w[0],w[1]],occlusionTextureTransformMatrix:vo(l.occlusionTextureTransform),emissiveTextureTransformMatrix:vo(l.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:vo(l.metallicRoughnessTextureTransform),...n}))}const d=r.get(s);if(o.stageResources.materials.push(d),c){const e=e=>{null!=e&&o.stageResources.textures.push(a.get(e))};e(l.textureColor),e(l.textureNormal),e(l.textureOcclusion),e(l.textureEmissive),e(l.textureMetallicRoughness)}return d}function rl(e,t){const o=e.attributes.position.count,i=ke(e.indices||o,e.primitiveType),n=Zt(3*o),{typedBuffer:r,typedBufferStride:a}=e.attributes.position;Ve(n,r,e.transform,3,a);const s=[[xt.POSITION,new at(n,i,3,!0)]];if(null!=e.attributes.normal){const t=Zt(3*o),{typedBuffer:n,typedBufferStride:r}=e.attributes.normal;X(al,e.transform),He(t,n,al,3,r),s.push([xt.NORMAL,new at(t,i,3,!0)])}if(null!=e.attributes.tangent){const t=Zt(4*o),{typedBuffer:n,typedBufferStride:r}=e.attributes.tangent;X(al,e.transform),Ye(t,n,al,4,r),s.push([xt.TANGENT,new at(t,i,4,!0)])}if(null!=e.attributes.texCoord0){const t=Zt(2*o),{typedBuffer:n,typedBufferStride:r}=e.attributes.texCoord0;qe(t,n,2,r),s.push([xt.UV0,new at(t,i,2,!0)])}if(null!=e.attributes.color){const t=new Uint8Array(4*o);4===e.attributes.color.elementCount?e.attributes.color instanceof Le?Je(t,e.attributes.color,255):e.attributes.color instanceof Ie?Xe(t,e.attributes.color):e.attributes.color instanceof Pe&&Je(t,e.attributes.color,1/256):(t.fill(255),e.attributes.color instanceof De?Ue(t,e.attributes.color,255,4):e.attributes.color instanceof Be?Ze(t,e.attributes.color.typedBuffer,4,e.attributes.color.typedBufferStride):e.attributes.color instanceof je&&Ue(t,e.attributes.color,1/256,4)),s.push([xt.COLOR,new at(t,i,4,!0)])}return{geometry:new uo(t,s),vertexCount:o}}const al=_e();function sl(e){switch(e){case"BLEND":return dt.Blend;case"MASK":return dt.Mask;case"OPAQUE":case null:case void 0:return dt.Opaque}}function ll(e,t){for(let o=0;o<e.model.lods.length;++o){const i=e.model.lods[o];for(const n of i.parts){const i=n.attributes.normal;if(null==i)return;const r=n.attributes.position,a=r.count,l=s(),u=s(),h=s(),d=new Uint8Array(4*a),v=new Float64Array(3*a),f=Me(Oe(),n.transform);let m=0,p=0;for(let s=0;s<a;s++){r.getVec(s,u),i.getVec(s,l),c(u,u,n.transform),Y(h,u,t.center),Se(h,h,t.radius);const a=h[2],g=B(h),x=Math.min(.45+.55*g*g,1);Se(h,h,t.radius),null!==f&&c(h,h,f),z(h,h),o+1!==e.model.lods.length&&e.model.lods.length>1&&Te(h,h,l,a>-1?.2:Math.min(-4*a-3.8,1)),v[m]=h[0],v[m+1]=h[1],v[m+2]=h[2],m+=3,d[p]=255*x,d[p+1]=255*x,d[p+2]=255*x,d[p+3]=255,p+=4}n.attributes.normal=new De(v),n.attributes.color=new Ie(d)}}}const cl=Object.freeze({__proto__:null,fetch:tl,gltfToEngineResources:il,parseUrl:ol});export{ys as H,Es as I,Ba as d,Pa as f,cl as o,Sa as u};
//# sourceMappingURL=p-45f8cab0.js.map