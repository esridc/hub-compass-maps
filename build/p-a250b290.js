import{a3 as e,s as r}from"./p-aad64c9f.js";async function t(t,a,o){let c;try{c=await createImageBitmap(t)}catch(e){throw new r("request:server",`Unable to load ${a}`,{url:a,error:e})}return e(o),c}async function a(t,a,o,c,n){let l;try{l=await createImageBitmap(t)}catch(e){throw new r("request:server",`Unable to load tile ${a}/${o}/${c}`,{error:e,level:a,row:o,col:c})}return e(n),l}export{a as o,t};
//# sourceMappingURL=p-a250b290.js.map