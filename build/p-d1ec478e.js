import{bo as e,bp as t,bs as i,bA as r}from"./p-aad64c9f.js";import{g as a}from"./p-cdbdef01.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const n=":host{position:relative;display:block;inline-size:100%}.track,.bar{position:absolute;inset-block-start:0px;block-size:2px}.track{z-index:var(--calcite-z-index);inline-size:100%;overflow:hidden;background-color:var(--calcite-progress-background-color, var(--calcite-color-border-3))}.bar{z-index:var(--calcite-z-index);background-color:var(--calcite-progress-fill-color, var(--calcite-color-brand))}@media (forced-colors: active){.track{background-color:highlightText}.bar{background-color:linkText}}.indeterminate{inline-size:20%;animation:looping-progress-bar-ani calc(var(--calcite-internal-animation-timing-medium) / var(--calcite-internal-duration-factor) * 11 / var(--calcite-internal-duration-factor)) linear infinite}.indeterminate.calcite--rtl{animation-name:looping-progress-bar-ani-rtl}.reversed{animation-direction:reverse}.text{padding-inline:0px;padding-block:1rem 0px;text-align:center;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-progress-text-color, var(--calcite-color-text-2))}@keyframes looping-progress-bar-ani{0%{transform:translate3d(-100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(600%, 0, 0)}}@keyframes looping-progress-bar-ani-rtl{0%{transform:translate3d(100%, 0, 0)}50%{inline-size:40%}100%{transform:translate3d(-600%, 0, 0)}}:host([hidden]){display:none}[hidden]{display:none}";const s=n;const o=e(class e extends t{constructor(){super();this.__registerHost();this.__attachShadow();this.type="determinate";this.value=0;this.label=undefined;this.text=undefined;this.reversed=false}render(){const e=this.type==="determinate";const t=e?{width:`${this.value*100}%`}:{};const n=a(this.el);return i("div",{key:"92597fefec948e4494425db28cd87bfad3cc76f8","aria-label":this.label||this.text,"aria-valuemax":1,"aria-valuemin":0,"aria-valuenow":this.value,role:"progressbar"},i("div",{key:"d2a8ec085909b4bd35f443d0e831d645fb159317",class:"track"},i("div",{key:"2dd26e56a0f344d02f1b4068167f61d9da4d2cbd",class:{bar:true,indeterminate:this.type==="indeterminate",[r.rtl]:n==="rtl",reversed:this.reversed},style:t})),this.text?i("div",{class:"text"},this.text):null)}get el(){return this}static get style(){return s}},[1,"calcite-progress",{type:[513],value:[2],label:[1],text:[1],reversed:[516]}]);function c(){if(typeof customElements==="undefined"){return}const e=["calcite-progress"];e.forEach((e=>{switch(e){case"calcite-progress":if(!customElements.get(e)){customElements.define(e,o)}break}}))}c();export{o as P,c as d};
//# sourceMappingURL=p-d1ec478e.js.map