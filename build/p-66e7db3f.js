import{a as n,H as a,aw as t,d as r,N as e,ax as i,T as o,B as u,ay as s,b as f,r as c,az as d,aA as m,aB as p,aC as w,aD as l,aE as v,aF as y,y as j}from"./p-2b5b515f.js";import"./p-3013819f.js";import"./p-3b51db5e.js";import"./p-1cf43261.js";import"./p-7db7fa08.js";import"./p-4953a39e.js";import"./p-ec95a4fb.js";import"./p-1f0b604e.js";import"./p-347800d3.js";import"./p-94b15954.js";function b(n,a){return n&&n.domain?"coded-value"===n.domain.type||"codedValue"===n.domain.type?e.convertObjectToArcadeDictionary({type:"codedValue",name:n.domain.name,dataType:i[n.field.type],codedValues:n.domain.codedValues.map((n=>({name:n.name,code:n.code})))},o(a)):e.convertObjectToArcadeDictionary({type:"range",name:n.domain.name,dataType:i[n.field.type],min:n.domain.minValue,max:n.domain.maxValue},o(a)):null}function h(i){"async"===i.mode&&(i.functions.domain=function(e,o){return i.standardFunctionAsync(e,o,(async(i,d,m)=>{if(n(m,2,3,e,o),a(m[0])){return b(t(m[0],r(m[1]),void 0===m[2]?void 0:m[2]),e)}if(u(m[0])){await m[0]._ensureLoaded();return b(s(r(m[1]),m[0],null,void 0===m[2]?void 0:m[2]),e)}throw new f(e,c.InvalidParameter,o)}))},i.functions.subtypes=function(t,r){return i.standardFunctionAsync(t,r,(async(i,s,m)=>{if(n(m,1,1,t,r),a(m[0])){const n=d(m[0]);return n?e.convertObjectToArcadeDictionary(n,o(t)):null}if(u(m[0])){await m[0]._ensureLoaded();const n=m[0].subtypeMetaData();return n?e.convertObjectToArcadeDictionary(n,o(t)):null}throw new f(t,c.InvalidParameter,r)}))},i.functions.domainname=function(t,e){return i.standardFunctionAsync(t,e,(async(i,o,d)=>{if(n(d,2,4,t,e),a(d[0]))return m(d[0],r(d[1]),d[2],void 0===d[3]?void 0:d[3]);if(u(d[0])){await d[0]._ensureLoaded();const n=s(r(d[1]),d[0],null,void 0===d[3]?void 0:d[3]);return p(n,d[2])}throw new f(t,c.InvalidParameter,e)}))},i.signatures.push({name:"domainname",min:2,max:4}),i.functions.domaincode=function(t,e){return i.standardFunctionAsync(t,e,(async(i,o,d)=>{if(n(d,2,4,t,e),a(d[0]))return w(d[0],r(d[1]),d[2],void 0===d[3]?void 0:d[3]);if(u(d[0])){await d[0]._ensureLoaded();const n=s(r(d[1]),d[0],null,void 0===d[3]?void 0:d[3]);return l(n,d[2])}throw new f(t,c.InvalidParameter,e)}))},i.signatures.push({name:"domaincode",min:2,max:4})),i.functions.text=function(a,t){return i.standardFunctionAsync(a,t,((r,e,i)=>{if(n(i,1,2,a,t),!u(i[0]))return v(i[0],i[1]);{const n=j(i[1],"");if(""===n)return i[0].castToText();if("schema"===n.toLowerCase())return i[0].convertToText("schema",r.abortSignal);if("featureset"===n.toLowerCase())return i[0].convertToText("featureset",r.abortSignal)}}))},i.functions.gdbversion=function(t,r){return i.standardFunctionAsync(t,r,(async(e,i,o)=>{if(n(o,1,1,t,r),a(o[0]))return o[0].gdbVersion();if(u(o[0])){return(await o[0].load()).gdbVersion}throw new f(t,c.InvalidParameter,r)}))},i.functions.schema=function(t,r){return i.standardFunctionAsync(t,r,(async(i,s,d)=>{if(n(d,1,1,t,r),u(d[0]))return await d[0].load(),e.convertObjectToArcadeDictionary(d[0].schema(),o(t));if(a(d[0])){const n=y(d[0]);return n?e.convertObjectToArcadeDictionary(n,o(t)):null}throw new f(t,c.InvalidParameter,r)}))}}export{h as registerFunctions};
//# sourceMappingURL=p-66e7db3f.js.map