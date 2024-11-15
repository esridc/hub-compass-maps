import{bs as e,bo as t,bp as i,bu as s}from"./p-aad64c9f.js";import{u as n}from"./p-cdbdef01.js";import{d as c}from"./p-d964b132.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const a={validationContainer:"validation-container"};const o=({scale:t,status:i,id:s,icon:n,message:c})=>e("div",{class:a.validationContainer},e("calcite-input-message",{"aria-live":"polite",icon:n,id:s,scale:t,status:i},c))
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */;const l={valid:"check-circle",invalid:"exclamation-mark-triangle",idle:"information"};const r=":host{box-sizing:border-box;display:flex;block-size:auto;inline-size:100%;align-items:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1);opacity:1;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;--calcite-input-message-spacing-value:0.25rem;margin-block-start:var(--calcite-input-message-spacing-value)}.calcite-input-message-icon{pointer-events:none;display:inline-flex;flex-shrink:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;margin-inline-end:0.5rem}:host([status=invalid]) .calcite-input-message-icon{color:var(--calcite-color-status-danger)}:host([status=warning]) .calcite-input-message-icon{color:var(--calcite-color-status-warning)}:host([status=valid]) .calcite-input-message-icon{color:var(--calcite-color-status-success)}:host([status=idle]) .calcite-input-message-icon{color:var(--calcite-color-brand)}:host([scale=s]){font-size:var(--calcite-font-size--3);line-height:0.75rem}:host([scale=m]){font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([hidden]){display:none}[hidden]{display:none}";const d=r;const u=t(class t extends i{constructor(){super();this.__registerHost();this.__attachShadow();this.icon=undefined;this.iconFlipRtl=false;this.scale="m";this.status="idle"}handleIconEl(){this.requestedIcon=n(l,this.icon,this.status)}connectedCallback(){this.requestedIcon=n(l,this.icon,this.status)}render(){const t=this.el.hidden;return e(s,{key:"c7d1b37721cec28dee1020b81ff66dee7fc8bc44","calcite-hydrated-hidden":t},this.renderIcon(this.requestedIcon),e("slot",{key:"7147d81e906765c154b4a61e31706a72c1ef3ae0"}))}renderIcon(t){if(t){return e("calcite-icon",{class:"calcite-input-message-icon",flipRtl:this.iconFlipRtl,icon:t,scale:"s"})}}get el(){return this}static get watchers(){return{status:["handleIconEl"],icon:["handleIconEl"]}}static get style(){return d}},[1,"calcite-input-message",{icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],scale:[513],status:[513]},undefined,{status:["handleIconEl"],icon:["handleIconEl"]}]);function h(){if(typeof customElements==="undefined"){return}const e=["calcite-input-message","calcite-icon"];e.forEach((e=>{switch(e){case"calcite-input-message":if(!customElements.get(e)){customElements.define(e,u)}break;case"calcite-icon":if(!customElements.get(e)){c()}break}}))}h();export{o as V,h as d};
//# sourceMappingURL=p-523ead58.js.map