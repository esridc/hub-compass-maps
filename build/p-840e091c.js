import{bo as e,bp as t,bv as i,bs as s,bu as n}from"./p-aad64c9f.js";import{s as o,t as a,v as r,u as l}from"./p-cdbdef01.js";import{g as c}from"./p-a431f44e.js";import{s as d,a as h,c as u}from"./p-8711f003.js";import{N as m,c as f,d as p}from"./p-efdd0667.js";import{o as g}from"./p-7380fb1a.js";import{c as b,s as v,d as k,u as x}from"./p-021cd4d2.js";import{K as y}from"./p-735c7442.js";import{d as w}from"./p-e7015938.js";import{d as z}from"./p-d964b132.js";import"./p-2af77f97.js";import"./p-01f923a1.js";import"./p-7a58b9e0.js";import"./p-05749d2a.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const C={slow:14e3,medium:1e4,fast:6e3};const j={actionsEnd:"actions-end",title:"title",message:"message",link:"link"};const E={actionsEnd:"actions-end",close:"close",container:"container",containerBottom:"container--bottom",containerBottomEnd:"container--bottom-end",containerBottomStart:"container--bottom-start",containerActive:"container--active",containerTop:"container--top",containerTopEnd:"container--top-end",containerTopStart:"container--top-start",content:"content",contentContainer:"content-container",dismissProgress:"dismiss-progress",footer:"footer",icon:"icon",containerEmbedded:"container--embedded",queueCount:"queue-count",queueCountActive:"queue-count--active",textContainer:"text-container",focused:"focused"};const A=300;class D{constructor(){this.registeredElements=[];this.queueTimeoutId=null}registerElement(e){const{registeredElements:t}=this;if(!t.includes(e)){switch(e.queue){case"immediate":t.unshift(e);break;case"next":t.splice(1,0,e);break;case"last":t.push(e);break}this.updateAlerts()}}unregisterElement(e){const{registeredElements:t}=this;const i=t.indexOf(e);if(i!==-1){t.splice(i,1)}e.active=false;this.updateAlerts()}updateAlerts(){window.clearTimeout(this.queueTimeoutId);this.queueTimeoutId=null;this.registeredElements.forEach(((e,t)=>{e.openAlertCount=this.registeredElements.length;if(t===0){this.queueTimeoutId=window.setTimeout((()=>e.active=true),A)}else{e.active=false}}))}}const q=':host{--calcite-internal-alert-edge-distance:2rem;display:block;inline-size:var(--calcite-alert-width)}.container{pointer-events:none;position:fixed;z-index:var(--calcite-z-index-toast);margin-inline:auto;margin-block:0px;box-sizing:border-box;display:flex;inline-size:100%;min-inline-size:min-content;align-items:center;justify-content:center;text-align:start;opacity:0;--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--calcite-alert-shadow, var(--tw-ring-offset-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-ring-shadow, 0 0 rgba(0, 0, 0, 0)), var(--tw-shadow));background-color:var(--calcite-alert-background-color, var(--calcite-color-foreground-1));border-radius:var(--calcite-alert-corner-radius, var(--calcite-border-radius));border-block-start:0 solid transparent;border-inline:1px solid var(--calcite-color-border-3);border-block-end:1px solid var(--calcite-color-border-3);max-inline-size:calc(100% - var(--calcite-internal-alert-edge-distance) * 2);transition:opacity var(--calcite-internal-animation-timing-slow) cubic-bezier(0.215, 0.44, 0.42, 0.88), all var(--calcite-animation-timing) ease-in-out}.container--bottom,.container--top{inset-inline-end:0;inset-inline-start:0}.container[class*=bottom]{transform:translate3d(0, var(--calcite-internal-alert-edge-distance), 0);inset-block-end:var(--calcite-internal-alert-edge-distance)}.container[class*=top]{transform:translate3d(0, calc(-1 * var(--calcite-internal-alert-edge-distance)), 0);inset-block-start:var(--calcite-internal-alert-edge-distance)}.container[class*=start]{inset-inline-start:var(--calcite-internal-alert-edge-distance);inset-inline-end:auto}.container[class*=end]{inset-inline-end:var(--calcite-internal-alert-edge-distance);inset-inline-start:auto}.icon{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0px;margin-block:auto;margin-inline-end:auto}.close{display:flex;cursor:pointer;align-items:center;justify-content:flex-end;align-self:stretch;border-style:none;background-color:transparent;color:var(--calcite-color-text-3);outline:2px solid transparent;outline-offset:2px;-webkit-appearance:none;border-start-end-radius:var(--calcite-alert-corner-radius, var(--calcite-border-radius));border-end-end-radius:var(--calcite-alert-corner-radius, var(--calcite-border-radius));outline-color:transparent}.close:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.close:hover,.close:focus{color:var(--calcite-color-text-1);background-color:var(--calcite-color-foreground-2)}.close:active{background-color:var(--calcite-color-foreground-3)}.queue-count{visibility:hidden;display:flex;min-inline-size:min-content;cursor:default;align-items:center;justify-content:space-around;align-self:stretch;overflow:hidden;text-align:center;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-2);opacity:0;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline:0 solid transparent;border-start-end-radius:0}.queue-count--active{visibility:visible;opacity:1}.dismiss-progress{position:absolute;display:block;inline-size:100%;overflow:hidden;inset-inline:0;inset-block-start:-2px;block-size:2px;border-radius:var(--calcite-border-radius) var(--calcite-border-radius) 0 0}.dismiss-progress::after{position:absolute;inset-block-start:0px;display:block;block-size:2px;content:"";background-color:var(--calcite-color-transparent-tint);inset-inline-end:0}.actions-end{display:flex;align-self:stretch}.text-container{box-sizing:border-box;display:flex;min-inline-size:0px;flex:1 1 auto;flex-direction:column;overflow-wrap:break-word}.footer{position:relative;display:flex;inline-size:auto;justify-content:flex-end;align-self:stretch;padding-block-start:1px;block-size:inherit}:host([scale=s]) slot[name=title]::slotted(*),:host([scale=s]) *::slotted([slot=title]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=s]) slot[name=message]::slotted(*),:host([scale=s]) *::slotted([slot=message]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) slot[name=link]::slotted(*),:host([scale=s]) *::slotted([slot=link]){font-size:var(--calcite-font-size--2);line-height:1.375}:host([scale=s]) .queue-count{margin-inline:0.5rem}:host([scale=s]) .container{--calcite-internal-alert-min-height:3.5rem;inline-size:var(--calcite-alert-width, 40em)}:host([scale=s]) .close{padding:0.75rem}:host([scale=s]) .icon{padding-inline-start:0.75rem}:host([scale=s]) .text-container{padding-block:0.5rem;padding-inline:0.75rem 0.5rem}:host([scale=m]) slot[name=title]::slotted(*),:host([scale=m]) *::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=m]) slot[name=message]::slotted(*),:host([scale=m]) *::slotted([slot=message]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) slot[name=link]::slotted(*),:host([scale=m]) *::slotted([slot=link]){font-size:var(--calcite-font-size--1);line-height:1.375}:host([scale=m]) .queue-count{margin-inline:0.75rem}:host([scale=m]) .container{--calcite-internal-alert-min-height:4.1875rem;inline-size:var(--calcite-alert-width, 50em)}:host([scale=m]) .close{padding:1rem}:host([scale=m]) .icon{padding-inline-start:1rem}:host([scale=m]) .text-container{padding-block:0.75rem;padding-inline:1rem 0.75rem}:host([scale=l]) slot[name=title]::slotted(*),:host([scale=l]) *::slotted([slot=title]){margin-block-end:0.25rem;font-size:var(--calcite-font-size-1);line-height:1.375}:host([scale=l]) slot[name=message]::slotted(*),:host([scale=l]) *::slotted([slot=message]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) slot[name=link]::slotted(*),:host([scale=l]) *::slotted([slot=link]){font-size:var(--calcite-font-size-0);line-height:1.375}:host([scale=l]) .queue-count{margin-inline:1rem}:host([scale=l]) .container{--calcite-internal-alert-min-height:5.625rem;inline-size:var(--calcite-alert-width, 60em)}:host([scale=l]) .close{padding:1.25rem}:host([scale=l]) .icon{padding-inline-start:1.25rem}:host([scale=l]) .text-container{padding-block:1rem;padding-inline:1.25rem 1rem}:host([open]) .container--active{border-block-start-width:2px;opacity:1;pointer-events:initial}:host([open]) .container--active[class*=bottom]{transform:translate3d(0, calc(-1 * var(--calcite-internal-alert-edge-distance)), inherit)}:host([open]) .container--active[class*=top]{transform:translate3d(0, var(--calcite-internal-alert-edge-distance), inherit)}:host([auto-close])>.queue-count{border-inline-end:0 solid transparent}slot[name=title]::slotted(*),*::slotted([slot=title]){font-size:var(--calcite-font-size-0);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-color-text-1)}slot[name=message]::slotted(*),*::slotted([slot=message]){margin:0px;display:inline;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-normal);margin-inline-end:0.5rem;color:var(--calcite-color-text-2)}slot[name=link]::slotted(*),*::slotted([slot=link]){display:inline-flex;color:var(--calcite-color-text-link)}:host([kind=brand]) .container{border-block-start-color:var(--calcite-color-brand)}:host([kind=brand]) .container .icon{color:var(--calcite-color-brand)}:host([kind=info]) .container{border-block-start-color:var(--calcite-color-status-info)}:host([kind=info]) .container .icon{color:var(--calcite-color-status-info)}:host([kind=danger]) .container{border-block-start-color:var(--calcite-color-status-danger)}:host([kind=danger]) .container .icon{color:var(--calcite-color-status-danger)}:host([kind=success]) .container{border-block-start-color:var(--calcite-color-status-success)}:host([kind=success]) .container .icon{color:var(--calcite-color-status-success)}:host([kind=warning]) .container{border-block-start-color:var(--calcite-color-status-warning)}:host([kind=warning]) .container .icon{color:var(--calcite-color-status-warning)}:host([auto-close-duration=fast]) .dismiss-progress:after{animation:dismissProgress 6000ms ease-out}:host(:hover[auto-close-duration=fast]) .dismiss-progress:after,:host(:focus[auto-close-duration=fast]) .dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=medium]) .dismiss-progress:after{animation:dismissProgress 10000ms ease-out}:host(:hover[auto-close-duration=medium]) .dismiss-progress:after,:host(:focus[auto-close-duration=medium]) .dismiss-progress:after{animation-play-state:paused}:host([auto-close-duration=slow]) .dismiss-progress:after{animation:dismissProgress 14000ms ease-out}:host(:hover[auto-close-duration=slow]) .dismiss-progress:after,:host(:focus[auto-close-duration=slow]) .dismiss-progress:after{animation-play-state:paused}.container.focused .dismiss-progress::after{animation-play-state:paused}@keyframes dismissProgress{0%{inline-size:0px;opacity:0.75}100%{inline-size:100%;opacity:1}}.container--embedded{position:absolute}:host([hidden]){display:none}[hidden]{display:none}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}';const S=q;const F=new D;const L=e(class e extends t{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteAlertBeforeClose=i(this,"calciteAlertBeforeClose",6);this.calciteAlertClose=i(this,"calciteAlertClose",6);this.calciteAlertBeforeOpen=i(this,"calciteAlertBeforeOpen",6);this.calciteAlertOpen=i(this,"calciteAlertOpen",6);this.handleKeyBoardFocus=()=>{this.isFocused=true;this.handleFocus()};this.handleKeyBoardBlur=()=>{this.isFocused=false;if(!this.isHovered){this.handleBlur()}};this.autoCloseTimeoutId=null;this.totalOpenTime=0;this.totalHoverTime=0;this.openTransitionProp="opacity";this.setTransitionEl=e=>{this.transitionEl=e};this.closeAlert=()=>{this.open=false;this.clearAutoCloseTimeout()};this.actionsEndSlotChangeHandler=e=>{this.hasEndActions=o(e)};this.handleMouseOver=()=>{this.isHovered=true;this.handleFocus()};this.handleMouseLeave=()=>{this.isHovered=false;if(!this.isFocused){this.handleBlur()}};this.handleFocus=()=>{this.clearAutoCloseTimeout();this.totalOpenTime=Date.now()-this.initialOpenTime;this.lastMouseOverBegin=Date.now()};this.handleBlur=()=>{const e=Date.now()-this.lastMouseOverBegin;const t=C[this.autoCloseDuration]-this.totalOpenTime+this.totalHoverTime;this.totalHoverTime=this.totalHoverTime?e+this.totalHoverTime:e;this.autoCloseTimeoutId=window.setTimeout((()=>this.closeAlert()),t)};this.active=false;this.openAlertCount=0;this.open=false;this.autoClose=false;this.autoCloseDuration="medium";this.embedded=false;this.kind="brand";this.icon=undefined;this.iconFlipRtl=false;this.label=undefined;this.numberingSystem=undefined;this.placement="bottom";this.scale="m";this.messages=undefined;this.messageOverrides=undefined;this.queue="last";this.defaultMessages=undefined;this.effectiveLocale="";this.numberStringFormatter=new m;this.hasEndActions=false;this.isFocused=false}handleActiveChange(){this.clearAutoCloseTimeout();if(this.active&&this.autoClose&&!this.autoCloseTimeoutId){this.initialOpenTime=Date.now();this.autoCloseTimeoutId=window.setTimeout((()=>this.closeAlert()),C[this.autoCloseDuration])}}openHandler(){g(this);if(this.open){F.registerElement(this.el)}else{F.unregisterElement(this.el)}}updateDuration(){if(this.autoClose&&this.autoCloseTimeoutId){this.clearAutoCloseTimeout();this.autoCloseTimeoutId=window.setTimeout((()=>this.closeAlert()),C[this.autoCloseDuration])}}onMessagesChange(){}handleQueueChange(){if(this.open){F.unregisterElement(this.el);F.registerElement(this.el)}}connectedCallback(){f(this);b(this);const e=this.open;if(e){F.registerElement(this.el)}this.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"}}async componentWillLoad(){d(this);await v(this);if(this.open){g(this)}}componentDidLoad(){h(this)}disconnectedCallback(){F.unregisterElement(this.el);this.clearAutoCloseTimeout();p(this);k(this);this.embedded=false}render(){const{open:e,autoClose:t,label:i,placement:o,active:r,openAlertCount:c}=this;const d=t?"alert":"alertdialog";const h=!e;const u=l(y,this.icon,this.kind);const m=c>1;return s(n,{key:"cecedeaa678e4f6e22fd2aabc4d29bc8589430f6","aria-hidden":a(h),"aria-label":i,"calcite-hydrated-hidden":h,role:d},s("div",{key:"ca85d5f5ec313f3a305e01dcc8cbbad9647dd516",class:{[E.container]:true,[E.containerActive]:r,[`${E.container}--${o}`]:true,[E.containerEmbedded]:this.embedded,[E.focused]:this.isFocused},onPointerEnter:this.autoClose&&this.autoCloseTimeoutId?this.handleMouseOver:null,onPointerLeave:this.autoClose?this.handleMouseLeave:null,ref:this.setTransitionEl},u&&this.renderIcon(u),s("div",{key:"1f72f255c3e0630eed63bb62d3d50f4a2ba6a528",class:E.textContainer,onFocusin:this.autoClose&&this.autoCloseTimeoutId?this.handleKeyBoardFocus:null,onFocusout:this.autoClose?this.handleKeyBoardBlur:null},s("slot",{key:"aade607960adea0a10f5eac85b119444085c9cf9",name:j.title}),s("slot",{key:"1f47158cfbf8c0626cd49246142fb750311b1d4a",name:j.message}),s("slot",{key:"5ba06e024b517f23168311828cc8ce41c21926a6",name:j.link})),this.renderActionsEnd(),m?this.renderQueueCount():null,this.renderCloseButton(),e&&r&&t?s("div",{class:E.dismissProgress}):null))}renderCloseButton(){return s("button",{"aria-label":this.messages.close,class:E.close,key:"close",onClick:this.closeAlert,onFocusin:this.autoClose?this.handleKeyBoardFocus:null,onFocusout:this.autoClose?this.handleKeyBoardBlur:null,ref:e=>this.closeButton=e,type:"button"},s("calcite-icon",{icon:"x",scale:c(this.scale)}))}renderQueueCount(){const{openAlertCount:e}=this;const t=e>2?e-1:1;const i=this.numberStringFormatter.numberFormatter.format(t);return s("div",{class:{[E.queueCount]:true,[E.queueCountActive]:e>1},key:"queue-count"},s("calcite-chip",{scale:this.scale,value:i},i))}renderActionsEnd(){return s("div",{class:E.actionsEnd},s("slot",{name:j.actionsEnd,onSlotchange:this.actionsEndSlotChangeHandler}))}renderIcon(e){return s("div",{class:E.icon},s("calcite-icon",{flipRtl:this.iconFlipRtl,icon:e,scale:c(this.scale)}))}async setFocus(){await u(this);const e=r(this.el,{selector:"calcite-link"});if(!this.closeButton&&!e){return}else if(e){return e.setFocus()}else if(this.closeButton){this.closeButton.focus()}}effectiveLocaleChange(){x(this,this.effectiveLocale);this.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"}}numberingSystemChange(){this.numberStringFormatter.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,signDisplay:"always"}}clearAutoCloseTimeout(){window.clearTimeout(this.autoCloseTimeoutId);this.autoCloseTimeoutId=null}onBeforeOpen(){this.calciteAlertBeforeOpen.emit()}onOpen(){this.calciteAlertOpen.emit()}onBeforeClose(){this.calciteAlertBeforeClose.emit()}onClose(){this.calciteAlertClose.emit()}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{active:["handleActiveChange"],open:["openHandler"],autoCloseDuration:["updateDuration"],messageOverrides:["onMessagesChange"],queue:["handleQueueChange"],effectiveLocale:["effectiveLocaleChange"],numberingSystem:["numberingSystemChange"]}}static get style(){return S}},[1,"calcite-alert",{active:[4],openAlertCount:[2,"open-alert-count"],open:[1540],autoClose:[516,"auto-close"],autoCloseDuration:[513,"auto-close-duration"],embedded:[1028],kind:[513],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],label:[1],numberingSystem:[513,"numbering-system"],placement:[513],scale:[513],messages:[1040],messageOverrides:[1040],queue:[513],defaultMessages:[32],effectiveLocale:[32],numberStringFormatter:[32],hasEndActions:[32],isFocused:[32],setFocus:[64]},undefined,{active:["handleActiveChange"],open:["openHandler"],autoCloseDuration:["updateDuration"],messageOverrides:["onMessagesChange"],queue:["handleQueueChange"],effectiveLocale:["effectiveLocaleChange"],numberingSystem:["numberingSystemChange"]}]);function B(){if(typeof customElements==="undefined"){return}const e=["calcite-alert","calcite-chip","calcite-icon"];e.forEach((e=>{switch(e){case"calcite-alert":if(!customElements.get(e)){customElements.define(e,L)}break;case"calcite-chip":if(!customElements.get(e)){w()}break;case"calcite-icon":if(!customElements.get(e)){z()}break}}))}B();const O=L;const P=B;export{O as CalciteAlert,P as defineCustomElement};
//# sourceMappingURL=p-840e091c.js.map