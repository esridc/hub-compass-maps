import{hd as t}from"./p-aad64c9f.js";import"./p-2af77f97.js";var n,e,i,o,r,a,s,c,u,f,l,p,m,N,d;!function(t){t.U8="U8",t.I8="I8",t.U16="U16",t.I16="I16",t.U32="U32",t.I32="I32",t.F32="F32",t.F64="F64",t.Utf8String="Utf8String",t.NotSet="NotSet"}(n||(n={})),function(t){t.Png="Png",t.Jpeg="Jpeg",t.Dds="Dds",t.Raw="Raw",t.Dxt1="Dxt1",t.Dxt5="Dxt5",t.Etc2="Etc2",t.Astc="Astc",t.Pvrtc="Pvrtc",t.NotSet="NotSet"}(e||(e={})),function(t){t.Rgb8="Rgb8",t.Rgba8="Rgba8",t.R8="R8",t.Bgr8="Bgr8",t.Bgra8="Bgra8",t.Rg8="Rg8",t.Dxt1="Dxt1",t.Dxt5="Dxt5",t.NotSet="NotSet"}(i||(i={})),function(t){t.Position="Position",t.Normal="Normal",t.TexCoord="TexCoord",t.Color="Color",t.Tangent="Tangent",t.FeatureIndex="FeatureIndex",t.UvRegion="UvRegion",t.NotSet="NotSet"}(o||(o={})),function(t){t.Opaque="Opaque",t.Mask="Mask",t.Blend="Blend"}(r||(r={})),function(t){t.None="None",t.Mask="Mask",t.Alpha="Alpha",t.PreMultAlpha="PreMultAlpha",t.NotSet="NotSet"}(a||(a={})),function(t){t.Points="Points",t.Lines="Lines",t.LineStrip="LineStrip",t.Triangles="Triangles",t.TriangleStrip="TriangleStrip",t.NotSet="NotSet"}(s||(s={})),function(t){t.None="None",t.WrapXBit="WrapXBit",t.WrapYBit="WrapYBit",t.WrapXy="WrapXy",t.NotSet="NotSet"}(c||(c={})),function(t){t.Linear="Linear",t.Nearest="Nearest",t.NotSet="NotSet"}(u||(u={})),function(t){t.Linear="Linear",t.Nearest="Nearest",t.NearestMipmapNearest="NearestMipmapNearest",t.LinearMipmapNearest="LinearMipmapNearest",t.NearestMipmapLinear="NearestMipmapLinear",t.LinearMipmapLinear="LinearMipmapLinear",t.NotSet="NotSet"}(f||(f={})),function(t){t.FeatureId="FeatureId",t.GlobalUid="GlobalUid",t.UnspecifiedDateTime="UnspecifiedDateTime",t.EcmaIso8601DateTime="EcmaIso8601DateTime",t.EcmaIso8601DateOnly="EcmaIso8601DateOnly",t.TimeOnly="TimeOnly",t.TimeStamp="TimeStamp",t.ColorRgb="ColorRgb",t.ColorRgba="ColorRgba",t.Unrecognized="Unrecognized",t.NotSet="NotSet"}(l||(l={})),function(t){t.Texture="Texture",t.VertexAtrb="VertexAtrb",t.Implicit="Implicit",t.NotSet="NotSet"}(p||(p={})),function(t){t.Front="Front",t.Back="Back",t.None="None",t.NotSet="NotSet"}(m||(m={})),function(t){t.Pbr="Pbr",t.Unlit="Unlit"}(N||(N={})),function(t){t[t.Succeeded=0]="Succeeded",t[t.Failed=1]="Failed",t[t.MissingInputs=2]="MissingInputs"}(d||(d={}));function g(){return new Promise((t=>import("./p-0ab246d7.js").then((t=>t.l)).then((({default:n})=>{const e=n({locateFile:S,onRuntimeInitialized:()=>t(e)})})))).catch((t=>{throw t}))}function S(n){return t(`esri/libs/lyr3d/${n}`)}let U,I;async function b(t){if(await x(),t.inputs.length<1)return{result:{status:d.Failed,error:"",jobDescJson:"",data:new Uint8Array(0),missingInputUrls:[]},transferList:[]};const n={ptrs:[],sizes:[]};for(const e of t.inputs){const t=I._malloc(e.byteLength);new Uint8Array(I.HEAPU8.buffer,t,e.byteLength).set(new Uint8Array(e)),n.ptrs.push(t),n.sizes.push(e.byteLength)}const e=I.process(t.jobDescJson,n,t.isMissingResourceCase),i=e.status===d.Succeeded&&e.data,o=e.status===d.MissingInputs&&e.missingInputUrls.length>0;if(i){const t=e.data.slice();e.data=t}else o&&(e.jobDescJson=e.jobDescJson.slice(),e.originalInputs=t.inputs);for(let t=0;t<n.ptrs.length;++t)I._free(n.ptrs[t]);const r=[];if(i)r.push(e.data.buffer);else if(o)for(const n of t.inputs)r.push(n);return{result:e,transferList:r}}function L(){I&&(I.uninitialize_lyr3d_worker_wasm(),I=null)}function x(){return I?Promise.resolve():(U||(U=g().then((t=>{I=t,I.initialize_lyr3d_worker_wasm(),U=null}))),U)}export{L as destroyWasm,x as initialize,b as process};
//# sourceMappingURL=p-6f654afb.js.map