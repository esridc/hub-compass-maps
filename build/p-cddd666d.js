import{nv as t,nB as e,U as n}from"./p-028496e2.js";import{t as o}from"./p-c439e241.js";import{a as r}from"./p-0aeccf8c.js";import"./p-3b51db5e.js";import"./p-0120bda4.js";import"./p-82d7ddb5.js";import"./p-94b15954.js";import"./p-1f0b604e.js";import"./p-347800d3.js";function s(t){const e=t.toJSON();return e.attachmentTypes&&(e.attachmentTypes=e.attachmentTypes.join(",")),e.keywords&&(e.keywords=e.keywords.join(",")),e.globalIds&&(e.globalIds=e.globalIds.join(",")),e.objectIds&&(e.objectIds=e.objectIds.join(",")),e.size&&(e.size=e.size.join(",")),e}function c(n,o){const s={};for(const c of o){const{parentObjectId:o,parentGlobalId:a,attachmentInfos:p}=c;for(const c of p){const{id:p}=c,m=t(e(`${n.path}/${o}/attachments/${p}`)),f=r.fromJSON(c);f.set({url:m,parentObjectId:o,parentGlobalId:a}),s[o]?s[o].push(f):s[o]=[f]}}return s}function a(t,e,r){let c={query:o({...t.query,f:"json",...s(e)})};return r&&(c={...r,...c,query:{...r.query,...c.query}}),n(t.path+"/queryAttachments",c).then((t=>t.data.attachmentGroups))}async function p(t,e,o){const{objectIds:r}=e,s=[];for(const e of r)s.push(n(t.path+"/"+e+"/attachments",o));return Promise.all(s).then((t=>r.map(((e,n)=>({parentObjectId:e,attachmentInfos:t[n].data.attachmentInfos})))))}export{a as executeAttachmentQuery,p as fetchAttachments,c as processAttachmentQueryResult};
//# sourceMappingURL=p-cddd666d.js.map