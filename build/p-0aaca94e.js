import{gP as e,U as r,a as o,hH as n,a0 as s,gn as t,hI as a}from"./p-3013819f.js";import"./p-3b51db5e.js";let i=u();function u(){return new e(50)}function c(){i=u()}async function l(e,r){if(e.resource?.href)return f(e.resource.href).then((e=>[e.width,e.height]));if(e.resource?.primitive)return null!=r?[r,r]:[256,256];throw new o("symbol3d:invalid-symbol-layer","symbol layers of type Icon must have either an href or a primitive resource")}function f(e){return r(e,{responseType:"image"}).then((e=>e.data))}async function m(e,r=null){if(!e.isPrimitive){const r=e.resource.href;if(!r)throw new o("symbol:invalid-resource","The symbol does not have a valid resource");const t=i.get(r);if(void 0!==t)return t;const{fetch:a}=await import("./p-75412b4b.js").then((function(e){return e.o})),u=await a(r,{disableTextures:!0}),c=n(u.referenceBoundingBox,s());return i.put(r,c),c}if(!e.resource?.primitive)throw new o("symbol:invalid-resource","The symbol does not have a valid resource");const u=t(a(e.resource.primitive));if(null!=r)for(let e=0;e<u.length;e++)u[e]*=r;return n(u,s())}export{c as clearBoundingBoxCache,l as computeIconLayerResourceSize,m as computeObjectLayerResourceSize};
//# sourceMappingURL=p-0aaca94e.js.map