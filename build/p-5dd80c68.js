import{bo as e,bp as t,bv as s,bs as i,bu as d}from"./p-aad64c9f.js";import{u as a,I as n}from"./p-05749d2a.js";import{M as o}from"./p-d3d5d5ce.js";import"./p-2af77f97.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const c={container:"container",heading:"heading"};const l=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex;flex-direction:column;background-color:var(--calcite-color-foreground-1)}:host([filter-hidden]){display:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{margin:0px;display:flex;flex:1 1 0%;padding:0.75rem;font-size:var(--calcite-font-size--1);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2)}.heading{padding:0px}:host([hidden]){display:none}[hidden]{display:none}";const r=l;const f=e(class e extends t{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteInternalListItemGroupDefaultSlotChange=s(this,"calciteInternalListItemGroupDefaultSlotChange",6);this.handleDefaultSlotChange=()=>{this.calciteInternalListItemGroupDefaultSlotChange.emit()};this.disabled=false;this.filterHidden=false;this.heading=undefined}componentDidRender(){a(this)}render(){const{disabled:e,heading:t}=this;return i(d,{key:"e1e0304c3d4fe02909fd0075de2e4f5ef806be39"},i(n,{key:"5fb0861fb58de90808e98b7061d3c906c822203c",disabled:e},i("tr",{key:"c77af78f937c3135601df2c4574b858662d5fcdb",class:c.container},i("td",{key:"f1ae6b9e09e78f87b814287f8eaeb0a105575c7a",class:c.heading,colSpan:o},t)),i("slot",{key:"7346d5d774173403910eddd35bf700ccd1437c4f",onSlotchange:this.handleDefaultSlotChange})))}get el(){return this}static get style(){return r}},[1,"calcite-list-item-group",{disabled:[516],filterHidden:[516,"filter-hidden"],heading:[513]}]);function h(){if(typeof customElements==="undefined"){return}const e=["calcite-list-item-group"];e.forEach((e=>{switch(e){case"calcite-list-item-group":if(!customElements.get(e)){customElements.define(e,f)}break}}))}h();const p=f;const b=h;export{p as CalciteListItemGroup,b as defineCustomElement};
//# sourceMappingURL=p-5dd80c68.js.map