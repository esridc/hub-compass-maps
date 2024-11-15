import{bo as e,bp as t,bv as o,bs as i,bu as s}from"./p-aad64c9f.js";import{e as a,t as c}from"./p-cdbdef01.js";import{c as n,d as r,H as l}from"./p-f8f1a631.js";import{u as d,I as h}from"./p-05749d2a.js";import{i as b}from"./p-01f923a1.js";import{c as p,d as m,g as f}from"./p-f981b36b.js";import{c as u,s as k,a as v}from"./p-8711f003.js";import"./p-2af77f97.js";import"./p-a431f44e.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const y={container:"container",track:"track",handle:"handle"};const x=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]) .container{block-size:0.75rem}:host([scale=s]) .track{block-size:0.75rem;inline-size:1.5rem}:host([scale=s]) .handle{block-size:0.5rem;inline-size:0.5rem}:host([scale=m]) .container{block-size:1rem}:host([scale=m]) .track{block-size:1rem;inline-size:2rem}:host([scale=m]) .handle{block-size:0.75rem;inline-size:0.75rem}:host([scale=l]) .container{block-size:1.5rem}:host([scale=l]) .track{block-size:1.5rem;inline-size:3rem}:host([scale=l]) .handle{block-size:1.25rem;inline-size:1.25rem}:host{position:relative;display:inline-block;inline-size:auto;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}.container{outline-width:0px}.track{pointer-events:none;position:relative;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-2);background-color:var(--calcite-color-foreground-2);vertical-align:top;outline-color:transparent}.container:focus .track{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-block-start:-1px;inset-inline:-1px auto}.container:hover .handle,.container:focus .handle{border-color:var(--calcite-color-brand);box-shadow:inset 0 0 0 1px var(--calcite-color-brand)}:host([checked]) .track{border-color:var(--calcite-color-brand-hover);background-color:var(--calcite-color-brand)}:host([checked]) .handle{border-color:var(--calcite-color-brand);inset-inline:auto -1px}:host([checked]) .container:hover .handle{border-color:var(--calcite-color-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-color-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";const g=x;const z=e(class e extends t{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteSwitchChange=o(this,"calciteSwitchChange",6);this.keyDownHandler=e=>{if(!this.disabled&&b(e.key)){this.toggle();e.preventDefault()}};this.clickHandler=()=>{if(this.disabled){return}this.toggle()};this.setSwitchEl=e=>{this.switchEl=e};this.disabled=false;this.form=undefined;this.label=undefined;this.name=undefined;this.scale="m";this.checked=false;this.value=undefined}async setFocus(){await u(this);a(this.switchEl)}syncHiddenFormInput(e){e.type="checkbox"}onLabelClick(){if(!this.disabled){this.toggle();this.setFocus()}}toggle(){this.checked=!this.checked;this.calciteSwitchChange.emit()}connectedCallback(){p(this);n(this)}componentWillLoad(){k(this)}componentDidLoad(){v(this)}disconnectedCallback(){m(this);r(this)}componentDidRender(){d(this)}render(){return i(s,{key:"7731df888262acc136e2099fe599c6290967fea7",onClick:this.clickHandler,onKeyDown:this.keyDownHandler},i(h,{key:"6bc3781eb46221cbe022c6e6b3e7bad267e4d2c6",disabled:this.disabled},i("div",{key:"1670db00b1cdb4ad8f013ff0dae914683db2004c","aria-checked":c(this.checked),"aria-label":f(this),class:y.container,ref:this.setSwitchEl,role:"switch",tabIndex:0},i("div",{key:"3c6e6d5abc6df9d745e361a65d06f4e7c1a3da16",class:y.track},i("div",{key:"0973b399396b9bd44ac9d2c17b374e2fbfe77b5e",class:y.handle})),i(l,{key:"7776a1881b7b6d43c543e4f388ae6cb4301b4181",component:this}))))}get el(){return this}static get style(){return g}},[1,"calcite-switch",{disabled:[516],form:[513],label:[1],name:[513],scale:[513],checked:[1540],value:[8],setFocus:[64]}]);function w(){if(typeof customElements==="undefined"){return}const e=["calcite-switch"];e.forEach((e=>{switch(e){case"calcite-switch":if(!customElements.get(e)){customElements.define(e,z)}break}}))}w();
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const j=z;const C=w;export{j as CalciteSwitch,C as defineCustomElement};
//# sourceMappingURL=p-19ab385b.js.map