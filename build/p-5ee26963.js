import{b as e,r,k as t,B as n,a as i,d as s}from"./p-2b5b515f.js";import{s as a}from"./p-1cf43261.js";import{b as l,u as o}from"./p-dcd5924c.js";import{fl as u}from"./p-3013819f.js";import{crosses as f,touches as p,within as c,overlaps as m,contains as w,intersects as R,relate as S}from"./p-bc6b9750.js";import"./p-7db7fa08.js";import"./p-4953a39e.js";import"./p-ec95a4fb.js";import"./p-1f0b604e.js";import"./p-347800d3.js";import"./p-94b15954.js";import"./p-a20ea8a0.js";import"./p-3b51db5e.js";function h(e){return e instanceof u}function j(i,s,S,j){return j(i,s,(async(j,b,d)=>{if(d.length<2)throw new e(i,r.WrongNumberOfParameters,s);if(null===(d=t(d))[0]&&null===d[1])return!1;if(n(d[0])){if(d[1]instanceof u)return new l({parentfeatureset:d[0],relation:S,relationGeom:d[1]});if(null===d[1])return new o({parentfeatureset:d[0]});throw new e(i,r.InvalidParameter,s)}if(h(d[0])){if(h(d[1])){switch(S){case"esriSpatialRelEnvelopeIntersects":return R(a(d[0]),a(d[1]));case"esriSpatialRelIntersects":return R(d[0],d[1]);case"esriSpatialRelContains":return w(d[0],d[1]);case"esriSpatialRelOverlaps":return m(d[0],d[1]);case"esriSpatialRelWithin":return c(d[0],d[1]);case"esriSpatialRelTouches":return p(d[0],d[1]);case"esriSpatialRelCrosses":return f(d[0],d[1])}throw new e(i,r.InvalidParameter,s)}if(n(d[1]))return new l({parentfeatureset:d[1],relation:S,relationGeom:d[0]});if(null===d[1])return!1;throw new e(i,r.InvalidParameter,s)}if(null!==d[0])throw new e(i,r.InvalidParameter,s);return n(d[1])?new o({parentfeatureset:d[1]}):!(d[1]instanceof u||null===d[1])&&void 0}))}function b(a){"async"===a.mode&&(a.functions.intersects=function(e,r){return j(e,r,"esriSpatialRelIntersects",a.standardFunctionAsync)},a.functions.envelopeintersects=function(e,r){return j(e,r,"esriSpatialRelEnvelopeIntersects",a.standardFunctionAsync)},a.signatures.push({name:"envelopeintersects",min:2,max:2}),a.functions.contains=function(e,r){return j(e,r,"esriSpatialRelContains",a.standardFunctionAsync)},a.functions.overlaps=function(e,r){return j(e,r,"esriSpatialRelOverlaps",a.standardFunctionAsync)},a.functions.within=function(e,r){return j(e,r,"esriSpatialRelWithin",a.standardFunctionAsync)},a.functions.touches=function(e,r){return j(e,r,"esriSpatialRelTouches",a.standardFunctionAsync)},a.functions.crosses=function(e,r){return j(e,r,"esriSpatialRelCrosses",a.standardFunctionAsync)},a.functions.relate=function(l,f){return a.standardFunctionAsync(l,f,((a,p,c)=>{if(c=t(c),i(c,3,3,l,f),h(c[0])&&h(c[1]))return S(c[0],c[1],s(c[2]));if(c[0]instanceof u&&null===c[1])return!1;if(c[1]instanceof u&&null===c[0])return!1;if(n(c[0])&&null===c[1])return new o({parentfeatureset:c[0]});if(n(c[1])&&null===c[0])return new o({parentfeatureset:c[1]});if(n(c[0])&&c[1]instanceof u)return c[0].relate(c[1],s(c[2]));if(n(c[1])&&c[0]instanceof u)return c[1].relate(c[0],s(c[2]));if(null===c[0]&&null===c[1])return!1;throw new e(l,r.InvalidParameter,f)}))})}export{b as registerFunctions};
//# sourceMappingURL=p-5ee26963.js.map