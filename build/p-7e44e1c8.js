import{U as n,nh as r,ni as o}from"./p-aad64c9f.js";import"./p-88dd7081.js";import"./p-175d4a9b.js";import{I as t}from"./p-37da71be.js";import"./p-de84037a.js";import"./p-3b7ff27a.js";import"./p-dddb66c6.js";import"./p-17d8c81f.js";import"./p-e91c4d32.js";import"./p-436c45c7.js";var i;!function(n){n[n.TRANSPARENT=0]="TRANSPARENT",n[n.OPAQUE=1]="OPAQUE"}(i||(i={}));var s;!function(n){n[n.Uniform=0]="Uniform",n[n.Varying=1]="Varying",n[n.COUNT=2]="COUNT"}(s||(s={}));var f,e;!function(n){n[n.Solid=0]="Solid",n[n.Sketch=1]="Sketch",n[n.Mixed=2]="Mixed",n[n.COUNT=3]="COUNT"}(f||(f={})),function(n){n[n.REGULAR=0]="REGULAR",n[n.SILHOUETTE=1]="SILHOUETTE"}(e||(e={}));var c;async function a(r,o,i,s,f,e,c,a){const p=[];for(const n of o)if(n&&f.includes(n.name)){const o=`${r}/nodes/${i}/attributes/${n.key}/0`;p.push({url:o,storageInfo:n})}const u=await Promise.allSettled(p.map((r=>n(r.url,{responseType:"array-buffer",query:{...c,token:e},signal:a?.signal}).then((n=>t(r.storageInfo,n.data)))))),E=[];for(const n of s){const r={};for(let o=0;o<u.length;o++){const t=u[o];if("fulfilled"===t.status){const i=t.value;r[p[o].storageInfo.name]=d(i,n)}}E.push(r)}return E}!function(n){n[n.OUTSIDE=0]="OUTSIDE",n[n.INTERSECTS_CENTER_OUTSIDE=1]="INTERSECTS_CENTER_OUTSIDE",n[n.INTERSECTS_CENTER_INSIDE=2]="INTERSECTS_CENTER_INSIDE",n[n.INSIDE=3]="INSIDE"}(c||(c={}));const p=-32768,u=-(2**31);function d(n,t){if(!n)return null;const i=n[t];if(r(n))return i===p?null:i;if(o(n))return i===u?null:i;return i!=i?null:i}({data:new Array(72),size:3,exclusive:!0,stride:3});export{a as V};
//# sourceMappingURL=p-7e44e1c8.js.map