import{kz as e,U as o,s as r,l5 as n,$ as s,k8 as i,l6 as a}from"./p-aad64c9f.js";import"./p-2af77f97.js";let t=c();function c(){return new e(50)}function u(){t=c()}async function l(e,o){if(e.resource?.href)return f(e.resource.href).then((e=>[e.width,e.height]));if(e.resource?.primitive)return null!=o?[o,o]:[256,256];throw new r("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function f(e){return o(e,{responseType:"image"}).then((e=>e.data))}async function m(e,o=null){if(!e.isPrimitive){const o=e.resource?.href;if(!o)throw new r("symbol:invalid-resource","The symbol does not have a valid resource");const i=t.get(o);if(void 0!==i)return i;const{fetch:a}=await import("./p-5cdc51dc.js"),c=await a(o,{disableTextures:!0,spherical:!0,doublePrecisionRequiresObfuscation:!0}),u=n(c.referenceBoundingBox,s());return t.put(o,u),u}if(!e.resource?.primitive)throw new r("symbol:invalid-resource","The symbol does not have a valid resource");const c=i(a(e.resource.primitive));if(null!=o)for(let e=0;e<c.length;e++)c[e]*=o;return n(c,s())}export{u as clearBoundingBoxCache,l as computeIconLayerResourceSize,m as computeObjectLayerResourceSize};
//# sourceMappingURL=p-e35898b3.js.map