import{a as n,H as a,aw as t,d as r,N as e,ax as i,T as o,B as u,ay as s,b as d,r as c,az as f,aA as m,aB as p,aC as w,aD as l,aE as v,aF as y,y as j}from"./p-32a39338.js";import"./p-028496e2.js";import"./p-3b51db5e.js";import"./p-ecde740d.js";import"./p-7db7fa08.js";import"./p-2b21de69.js";import"./p-854d8fad.js";import"./p-1f0b604e.js";import"./p-347800d3.js";import"./p-94b15954.js";function h(n,a){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?e.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:i[n.field.type],codedValues:n.domain.codedValues.map((n=>({name:n.name,code:n.code})))},o(a)):e.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:i[n.field.type],min:n.domain.minValue,max:n.domain.maxValue},o(a)):null}function b(i){"async"===i.mode&&(i.functions.domain=function(e,o){return i.standardFunctionAsync(e,o,(async(i,f,m)=>{if(n(m,2,3,e,o),a(m[0])){return h(t(m[0],r(m[1]),void 0===m[2]?void 0:m[2]),e)}if(u(m[0])){await m[0]._ensureLoaded();return h(s(r(m[1]),m[0],null,void 0===m[2]?void 0:m[2]),e)}throw new d(e,c.InvalidParameter,o)}))},i.functions.subtypes=function(t,r){return i.standardFunctionAsync(t,r,(async(i,s,m)=>{if(n(m,1,1,t,r),a(m[0])){const n=f(m[0]);return n?e.convertObjectToArcadeDictionary(n,o(t)):null}if(u(m[0])){await m[0]._ensureLoaded();const n=m[0].subtypeMetaData();return n?e.convertObjectToArcadeDictionary(n,o(t)):null}throw new d(t,c.InvalidParameter,r)}))},i.functions.domainname=function(t,e){return i.standardFunctionAsync(t,e,(async(i,o,f)=>{if(n(f,2,4,t,e),a(f[0]))return m(f[0],r(f[1]),f[2],void 0===f[3]?void 0:f[3]);if(u(f[0])){await f[0]._ensureLoaded();const n=s(r(f[1]),f[0],null,void 0===f[3]?void 0:f[3]);return p(n,f[2])}throw new d(t,c.InvalidParameter,e)}))},i.signatures.push({name:"domainname",min:2,max:4}),i.functions.domaincode=function(t,e){return i.standardFunctionAsync(t,e,(async(i,o,f)=>{if(n(f,2,4,t,e),a(f[0]))return w(f[0],r(f[1]),f[2],void 0===f[3]?void 0:f[3]);if(u(f[0])){await f[0]._ensureLoaded();const n=s(r(f[1]),f[0],null,void 0===f[3]?void 0:f[3]);return l(n,f[2])}throw new d(t,c.InvalidParameter,e)}))},i.signatures.push({name:"domaincode",min:2,max:4})),i.functions.text=function(a,t){return i.standardFunctionAsync(a,t,((r,e,i)=>{if(n(i,1,2,a,t),!u(i[0]))return v(i[0],i[1]);{const n=j(i[1],"");if(""===n)return i[0].castToText();if("schema"===n.toLowerCase())return i[0].convertToText("schema",r.abortSignal);if("featureset"===n.toLowerCase())return i[0].convertToText("featureset",r.abortSignal)}}))},i.functions.gdbversion=function(t,r){return i.standardFunctionAsync(t,r,(async(e,i,o)=>{if(n(o,1,1,t,r),a(o[0]))return o[0].gdbVersion();if(u(o[0])){return(await o[0].load()).gdbVersion}throw new d(t,c.InvalidParameter,r)}))},i.functions.schema=function(t,r){return i.standardFunctionAsync(t,r,(async(i,s,f)=>{if(n(f,1,1,t,r),u(f[0]))return await f[0].load(),e.convertObjectToArcadeDictionary(f[0].schema(),o(t));if(a(f[0])){const n=y(f[0]);return n?e.convertObjectToArcadeDictionary(n,o(t)):null}throw new d(t,c.InvalidParameter,r)}))}}export{b as registerFunctions};
//# sourceMappingURL=p-f055b034.js.map