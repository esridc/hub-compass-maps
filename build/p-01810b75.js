import{dU as t}from"./p-3013819f.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */const o={arrow:"calcite-floating-ui-arrow",arrowStroke:"calcite-floating-ui-arrow__stroke"};const r={width:12,height:6,strokeWidth:1};const e=({floatingLayout:e,key:i,ref:s})=>{const{width:a,height:n,strokeWidth:h}=r;const c=a/2;const d=e==="vertical";const l="M0,0"+` H${a}`+` L${a-c},${n}`+` Q${c},${n} ${c},${n}`+" Z";return t("svg",{"aria-hidden":"true",class:o.arrow,height:a,key:i,viewBox:`0 0 ${a} ${a+(!d?h:0)}`,width:a+(d?h:0),ref:s},h>0&&t("path",{class:o.arrowStroke,d:l,fill:"none","stroke-width":h+1}),t("path",{d:l,stroke:"none"}))};export{e as F};
//# sourceMappingURL=p-01810b75.js.map