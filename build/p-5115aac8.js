import{dA as t,nC as p,cB as s}from"./p-3013819f.js";import{d as o}from"./p-5d36a036.js";import"./p-3b51db5e.js";import"./p-71d25f62.js";import"./p-a71453e3.js";import"./p-ad726e47.js";import"./p-94b15954.js";import"./p-1f0b604e.js";import"./p-347800d3.js";async function i(i,r,a){const e=t(i),n=await o(e,p.from(r),{...a}),m=n.data.extent;return!m||isNaN(m.xmin)||isNaN(m.ymin)||isNaN(m.xmax)||isNaN(m.ymax)?{count:n.data.count,extent:null}:{count:n.data.count,extent:s.fromJSON(m)}}export{i as executeForTopExtents};
//# sourceMappingURL=p-5115aac8.js.map