import{s,a8 as o,hv as t,hu as i,U as a}from"./p-aad64c9f.js";import"./p-2af77f97.js";async function r(r,e,n,d){if(!e)throw new s("post:missing-guid","guid for version is missing");const f=o(r),p=n.toJSON(),m=t(f.query,{query:i({...p,f:"json"}),...d,method:"post"});e.startsWith("{")&&(e=e.slice(1,-1));const u=`${f.path}/versions/${e}/deleteForwardEdits`,{data:c}=await a(u,m);return c}export{r as deleteForwardEdits};
//# sourceMappingURL=p-5ed8cabb.js.map