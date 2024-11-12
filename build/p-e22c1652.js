import{dR as t,dS as e,dX as i,dU as n,d_ as s,dV as o}from"./p-028496e2.js";import{p as r,r as a,u as l,g as c}from"./p-49ae4733.js";import{s as h,c as u,i as d,d as p,H as b}from"./p-8793cc2f.js";import{c as m,d as f,u as g,I as v}from"./p-9cc1ce24.js";import{n as x,e as k,p as y,f as w,g as z,u as I,c as j,a as E,d as L,b as W,s as C,B as D,h as F}from"./p-efc7ad18.js";import{c as B,d as R,g as V}from"./p-b007e81c.js";import{s as K,a as M,c as O}from"./p-0d934a08.js";import{c as T}from"./p-f148cf8f.js";import{g as $}from"./p-483e769b.js";import{d as q,V as A}from"./p-f01cda96.js";import{d as N,s as P}from"./p-5625675b.js";import{d as S}from"./p-ef727936.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */const U={loader:"loader",clearButton:"clear-button",editingEnabled:"editing-enabled",inlineChild:"inline-child",inputIcon:"icon",prefix:"prefix",suffix:"suffix",numberButtonWrapper:"number-button-wrapper",buttonItemHorizontal:"number-button-item--horizontal",wrapper:"element-wrapper",inputWrapper:"wrapper",actionWrapper:"action-wrapper",resizeIconWrapper:"resize-icon-wrapper",numberButtonItem:"number-button-item"};const H={tel:"phone",password:"lock",email:"email-address",date:"calendar",time:"clock",search:"search"};const G={action:"action"};const X=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:block}:host([scale=s]) input,:host([scale=s]) .prefix,:host([scale=s]) .suffix{block-size:1.5rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=s]) textarea{block-size:1.5rem;min-block-size:1.5rem}:host([scale=s]) .number-button-wrapper,:host([scale=s]) .action-wrapper calcite-button,:host([scale=s]) .action-wrapper calcite-button button{block-size:1.5rem}:host([scale=s]) input[type=file]{block-size:1.5rem}:host([scale=s]) .clear-button{min-block-size:1.5rem;min-inline-size:1.5rem}:host([scale=s]) textarea{block-size:auto;padding-block:0.25rem;padding-inline:0.5rem;font-size:var(--calcite-font-size--2);line-height:1rem}:host([scale=m]) input,:host([scale=m]) .prefix,:host([scale=m]) .suffix{block-size:2rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=m]) textarea{min-block-size:2rem}:host([scale=m]) .number-button-wrapper,:host([scale=m]) .action-wrapper calcite-button,:host([scale=m]) .action-wrapper calcite-button button{block-size:2rem}:host([scale=m]) input[type=file]{block-size:2rem}:host([scale=m]) .clear-button{min-block-size:2rem;min-inline-size:2rem}:host([scale=m]) textarea{block-size:auto;padding-block:0.5rem;padding-inline:0.75rem;font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) input,:host([scale=l]) .prefix,:host([scale=l]) .suffix{block-size:2.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([scale=l]) textarea{min-block-size:2.75rem}:host([scale=l]) .number-button-wrapper,:host([scale=l]) .action-wrapper calcite-button,:host([scale=l]) .action-wrapper calcite-button button{block-size:2.75rem}:host([scale=l]) input[type=file]{block-size:2.75rem}:host([scale=l]) .clear-button{min-block-size:2.75rem;min-inline-size:2.75rem}:host([scale=l]) textarea{block-size:auto;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}:host([disabled]) textarea{resize:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}textarea,input{transition:var(--calcite-animation-timing), block-size 0, outline-offset 0s;-webkit-appearance:none;position:relative;margin:0px;box-sizing:border-box;display:flex;max-block-size:100%;inline-size:100%;max-inline-size:100%;flex:1 1 0%;border-radius:0px;background-color:var(--calcite-color-foreground-1);font-family:inherit;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-color-text-1)}input[type=search]::-webkit-search-decoration{-webkit-appearance:none}input,textarea{text-overflow:ellipsis;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);color:var(--calcite-color-text-1)}input:placeholder-shown,textarea:placeholder-shown{text-overflow:ellipsis}input:focus,textarea:focus{border-color:var(--calcite-color-brand);color:var(--calcite-color-text-1)}input[readonly],textarea[readonly]{background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium)}input[readonly]:focus,textarea[readonly]:focus{color:var(--calcite-color-text-1)}calcite-icon{color:var(--calcite-color-text-3)}textarea,input{outline-color:transparent}textarea:focus,input:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([status=invalid]) input,:host([status=invalid]) textarea{border-color:var(--calcite-color-status-danger)}:host([status=invalid]) input:focus,:host([status=invalid]) textarea:focus{outline:2px solid var(--calcite-color-status-danger);outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}:host([scale=s]) .icon{inset-inline-start:0.5rem}:host([scale=m]) .icon{inset-inline-start:0.75rem}:host([scale=l]) .icon{inset-inline-start:1rem}:host([icon][scale=s]) input{padding-inline-start:2rem}:host([icon][scale=m]) input{padding-inline-start:2.5rem}:host([icon][scale=l]) input{padding-inline-start:3.5rem}.element-wrapper{position:relative;order:3;display:inline-flex;flex:1 1 0%;align-items:center}.icon{pointer-events:none;position:absolute;display:block;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.icon,.resize-icon-wrapper{z-index:var(--calcite-z-index)}input[type=text]::-ms-clear,input[type=text]::-ms-reveal{display:none;block-size:0px;inline-size:0px}input[type=search]::-webkit-search-decoration,input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-results-button,input[type=search]::-webkit-search-results-decoration,input[type=date]::-webkit-clear-button,input[type=time]::-webkit-clear-button{display:none}.clear-button{pointer-events:initial;order:4;margin:0px;box-sizing:border-box;display:flex;min-block-size:100%;cursor:pointer;align-items:center;justify-content:center;align-self:stretch;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);outline-color:transparent;border-inline-start-width:0px}.clear-button:hover{background-color:var(--calcite-color-foreground-2);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:hover calcite-icon{color:var(--calcite-color-text-1);transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.clear-button:active{background-color:var(--calcite-color-foreground-3)}.clear-button:active calcite-icon{color:var(--calcite-color-text-1)}.clear-button:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand-hover, var(--calcite-color-brand)));outline-offset:calc(\n            -2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-offset-invert-focus),\n                1\n              )\n            )\n          )}.clear-button:disabled{opacity:var(--calcite-opacity-disabled)}.loader{inset-block-start:1px;inset-inline:1px;pointer-events:none;position:absolute;display:block}.action-wrapper{order:7;display:flex}.prefix,.suffix{box-sizing:border-box;display:flex;block-size:auto;min-block-size:100%;-webkit-user-select:none;user-select:none;align-content:center;align-items:center;overflow-wrap:break-word;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-background);font-weight:var(--calcite-font-weight-medium);line-height:1;color:var(--calcite-color-text-2)}.prefix{order:2;border-inline-end-width:0px}.suffix{order:5;border-inline-start-width:0px}:host([alignment=start]) textarea,:host([alignment=start]) input{text-align:start}:host([alignment=end]) textarea,:host([alignment=end]) input{text-align:end}input[type=number]{-moz-appearance:textfield}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none;-moz-appearance:textfield;margin:0px}.number-button-wrapper{pointer-events:none;order:6;box-sizing:border-box;display:flex;flex-direction:column;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}:host([number-button-type=vertical]) .wrapper{flex-direction:row;display:flex}:host([number-button-type=vertical]) input,:host([number-button-type=vertical]) textarea{order:2}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=down] calcite-icon{transform:rotate(-90deg)}:host([number-button-type=horizontal]) .calcite--rtl .number-button-item[data-adjustment=up] calcite-icon{transform:rotate(-90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down],.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:1;max-block-size:100%;min-block-size:100%;align-self:stretch}.number-button-item.number-button-item--horizontal[data-adjustment=down] calcite-icon,.number-button-item.number-button-item--horizontal[data-adjustment=up] calcite-icon{transform:rotate(90deg)}.number-button-item.number-button-item--horizontal[data-adjustment=down]{border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);border-inline-end-width:0px}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}.number-button-item.number-button-item--horizontal[data-adjustment=up]{order:5}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}.number-button-item.number-button-item--horizontal[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover{background-color:var(--calcite-color-foreground-2)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=up]:hover calcite-icon{color:var(--calcite-color-text-1)}:host([number-button-type=vertical]) .number-button-item[data-adjustment=down]{border-block-start-width:0px}.number-button-item{max-block-size:50%;min-block-size:50%;pointer-events:initial;margin:0px;box-sizing:border-box;display:flex;cursor:pointer;align-items:center;align-self:center;border-width:1px;border-style:solid;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);padding-block:0px;padding-inline:0.5rem;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s;border-inline-start-width:0px}.number-button-item calcite-icon{pointer-events:none;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}.number-button-item:focus{background-color:var(--calcite-color-foreground-2)}.number-button-item:focus calcite-icon{color:var(--calcite-color-text-1)}.number-button-item:active{background-color:var(--calcite-color-foreground-3)}.number-button-item:disabled{pointer-events:none}.wrapper{position:relative;display:flex;flex-direction:row;align-items:center}:input::-webkit-calendar-picker-indicator{display:none}input[type=date]::-webkit-input-placeholder{visibility:hidden !important}textarea::-webkit-resizer{position:absolute;inset-block-end:0px;box-sizing:border-box;padding-block:0px;padding-inline:0.25rem;inset-inline-end:0}.resize-icon-wrapper{inset-block-end:2px;inset-inline-end:2px;pointer-events:none;position:absolute;block-size:0.75rem;inline-size:0.75rem;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-3)}.resize-icon-wrapper calcite-icon{inset-block-end:0.25rem;inset-inline-end:0.25rem;transform:rotate(-45deg)}.calcite--rtl .resize-icon-wrapper calcite-icon{transform:rotate(45deg)}:host([type=color]) input{padding:0.25rem}:host([type=file]) input{cursor:pointer;border-width:1px;border-style:dashed;border-color:var(--calcite-color-border-input);background-color:var(--calcite-color-foreground-1);text-align:center}:host([type=file][scale=s]) input{padding-block:1px;padding-inline:0.5rem}:host([type=file][scale=m]) input{padding-block:0.25rem;padding-inline:0.75rem}:host([type=file][scale=l]) input{padding-block:0.5rem;padding-inline:1rem}:host(.no-bottom-border) input{border-block-end-width:0px}:host(.border-top-color-one) input{border-block-start-color:var(--calcite-color-border-1)}input.inline-child{background-color:transparent;transition:background-color, block-size, border-color, box-shadow, color, inset-block-end, inset-block-start, inset-inline-end, inset-inline-start inset-size, opacity, outline-color, transform var(--calcite-animation-timing) ease-in-out 0s, outline 0s, outline-offset 0s}input.inline-child .editing-enabled{background-color:inherit}input.inline-child:not(.editing-enabled){display:flex;cursor:pointer;text-overflow:ellipsis;border-color:transparent;padding-inline-start:0}.validation-container{display:flex;flex-direction:column;align-items:flex-start;align-self:stretch}:host([scale=m]) .validation-container,:host([scale=l]) .validation-container{padding-block-start:0.5rem}:host([scale=s]) .validation-container{padding-block-start:0.25rem}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}";const _=t(class t extends e{constructor(){super();this.__registerHost();this.__attachShadow();this.calciteInternalInputFocus=i(this,"calciteInternalInputFocus",6);this.calciteInternalInputBlur=i(this,"calciteInternalInputBlur",6);this.calciteInputInput=i(this,"calciteInputInput",7);this.calciteInputChange=i(this,"calciteInputChange",6);this.childElType="input";this.previousValueOrigin="initial";this.mutationObserver=T("mutation",(()=>this.setDisabledAction()));this.userChangedValue=false;this.keyDownHandler=t=>{if(this.readOnly||this.disabled){return}if(this.isClearable&&t.key==="Escape"){this.clearInputValue(t);t.preventDefault()}if(t.key==="Enter"&&!t.defaultPrevented){if(h(this)){t.preventDefault()}}};this.clearInputValue=t=>{this.setValue({committing:true,nativeEvent:t,origin:"user",value:""})};this.emitChangeIfUserModified=()=>{if(this.previousValueOrigin==="user"&&this.value!==this.previousEmittedValue){this.calciteInputChange.emit();this.setPreviousEmittedValue(this.value)}};this.inputBlurHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId);this.calciteInternalInputBlur.emit();this.emitChangeIfUserModified()};this.clickHandler=t=>{if(this.disabled){return}const e=r(this.el,"action");if(t.target!==e){this.setFocus()}};this.inputFocusHandler=()=>{this.calciteInternalInputFocus.emit()};this.inputChangeHandler=()=>{if(this.type==="file"){this.files=this.childEl.files}};this.inputInputHandler=t=>{if(this.disabled||this.readOnly){return}this.setValue({nativeEvent:t,origin:"user",value:t.target.value})};this.inputKeyDownHandler=t=>{if(this.disabled||this.readOnly){return}if(t.key==="Enter"){this.emitChangeIfUserModified()}};this.inputNumberInputHandler=t=>{if(this.disabled||this.readOnly){return}if(this.value==="Infinity"||this.value==="-Infinity"){return}const e=t.target.value;x.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};const i=x.delocalize(e);if(t.inputType==="insertFromPaste"){if(!k(i)){t.preventDefault()}this.setValue({nativeEvent:t,origin:"user",value:y(i)});this.childNumberEl.value=this.displayedValue}else{this.setValue({nativeEvent:t,origin:"user",value:i})}};this.inputNumberKeyDownHandler=t=>{if(this.type!=="number"||this.disabled||this.readOnly){return}if(this.value==="Infinity"||this.value==="-Infinity"){t.preventDefault();if(t.key==="Backspace"||t.key==="Delete"){this.clearInputValue(t)}return}if(t.key==="ArrowUp"){t.preventDefault();this.nudgeNumberValue("up",t);return}if(t.key==="ArrowDown"){this.nudgeNumberValue("down",t);return}const e=[...F,"ArrowLeft","ArrowRight","Backspace","Delete","Enter","Escape","Tab"];if(t.altKey||t.ctrlKey||t.metaKey){return}const i=t.shiftKey&&t.key==="Tab";if(e.includes(t.key)||i){if(t.key==="Enter"){this.emitChangeIfUserModified()}return}x.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator};if(t.key===x.decimal){if(!this.value&&!this.childNumberEl.value){return}if(this.value&&this.childNumberEl.value.indexOf(x.decimal)===-1){return}}if(/[eE]/.test(t.key)){if(!this.value&&!this.childNumberEl.value){return}if(this.value&&!/[eE]/.test(this.childNumberEl.value)){return}}if(t.key==="-"){if(!this.value&&!this.childNumberEl.value){return}if(this.value&&this.childNumberEl.value.split("-").length<=2){return}}t.preventDefault()};this.nudgeNumberValue=(t,e)=>{if(e instanceof KeyboardEvent&&e.repeat||this.type!=="number"){return}const i=this.maxString?parseFloat(this.maxString):null;const n=this.minString?parseFloat(this.minString):null;const s=150;this.incrementOrDecrementNumberValue(t,i,n,e);if(this.nudgeNumberValueIntervalId){window.clearInterval(this.nudgeNumberValueIntervalId)}let o=true;this.nudgeNumberValueIntervalId=window.setInterval((()=>{if(o){o=false;return}this.incrementOrDecrementNumberValue(t,i,n,e)}),s)};this.numberButtonPointerUpAndOutHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)};this.numberButtonPointerDownHandler=t=>{if(!a(t)){return}t.preventDefault();const e=t.target.dataset.adjustment;if(!this.disabled){this.nudgeNumberValue(e,t)}};this.onHiddenFormInputInput=t=>{if(t.target.name===this.name){this.setValue({value:t.target.value,origin:"direct"})}this.setFocus();t.stopPropagation()};this.setChildElRef=t=>{this.childEl=t};this.setChildNumberElRef=t=>{this.childNumberEl=t};this.setInputValue=t=>{if(this.type==="text"&&!this.childEl){return}if(this.type==="number"&&!this.childNumberEl){return}this[`child${this.type==="number"?"Number":""}El`].value=t};this.setPreviousEmittedValue=t=>{this.previousEmittedValue=this.normalizeValue(t)};this.setPreviousValue=t=>{this.previousValue=this.normalizeValue(t)};this.setValue=({committing:t=false,nativeEvent:e,origin:i,previousValue:n,value:s})=>{this.setPreviousValue(n??this.value);this.previousValueOrigin=i;if(this.type==="number"){x.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:this.groupSeparator,signDisplay:"never"};const t=this.previousValue?.length>s.length||this.value?.length>s.length;const e=s.charAt(s.length-1)===".";const n=e&&t?s:w(s);const o=s&&!n?k(this.previousValue)?this.previousValue:"":n;let r=x.localize(o);if(i!=="connected"&&!e){r=z(r,o,x)}this.displayedValue=e&&t?`${r}${x.decimal}`:r;this.userChangedValue=i==="user"&&this.value!==o;this.value=["-","."].includes(o)?"":o}else{this.userChangedValue=i==="user"&&this.value!==s;this.value=s}if(i==="direct"){this.setInputValue(s);this.previousEmittedValue=s}if(e){const e=this.calciteInputInput.emit();if(e.defaultPrevented){this.value=this.previousValue;this.displayedValue=this.type==="number"?x.localize(this.previousValue):this.previousValue}else if(t){this.emitChangeIfUserModified()}}};this.inputKeyUpHandler=()=>{window.clearInterval(this.nudgeNumberValueIntervalId)};this.alignment="start";this.autofocus=false;this.clearable=false;this.disabled=false;this.form=undefined;this.groupSeparator=false;this.icon=undefined;this.iconFlipRtl=false;this.label=undefined;this.loading=false;this.numberingSystem=undefined;this.localeFormat=false;this.max=undefined;this.min=undefined;this.maxLength=undefined;this.minLength=undefined;this.validationMessage=undefined;this.validationIcon=undefined;this.name=undefined;this.numberButtonType="vertical";this.placeholder=undefined;this.prefixText=undefined;this.readOnly=false;this.required=false;this.scale="m";this.status="idle";this.step=undefined;this.autocomplete=undefined;this.pattern=undefined;this.accept=undefined;this.multiple=false;this.inputMode="text";this.enterKeyHint=undefined;this.suffixText=undefined;this.editingEnabled=false;this.type="text";this.value="";this.files=undefined;this.messages=undefined;this.messageOverrides=undefined;this.defaultMessages=undefined;this.effectiveLocale="";this.displayedValue=undefined;this.slottedActionElDisabledInternally=false}disabledWatcher(){this.setDisabledAction()}maxWatcher(){this.maxString=this.max?.toString()||null}minWatcher(){this.minString=this.min?.toString()||null}onMessagesChange(){}valueWatcher(t,e){if(!this.userChangedValue){if(this.type==="number"&&(t==="Infinity"||t==="-Infinity")){this.displayedValue=t;this.previousEmittedValue=t;return}this.setValue({origin:"direct",previousValue:e,value:t==null||t==""?"":this.type==="number"?k(t)?t:this.previousValue||"":t});this.warnAboutInvalidNumberValue(t)}this.userChangedValue=false}updateRequestedIcon(){this.requestedIcon=l(H,this.icon,this.type)}get isClearable(){return!this.isTextarea&&(this.clearable||this.type==="search")&&this.value?.length>0}get isTextarea(){return this.childElType==="textarea"}effectiveLocaleChange(){I(this,this.effectiveLocale)}connectedCallback(){m(this);j(this);E(this);this.inlineEditableEl=this.el.closest("calcite-inline-editable");if(this.inlineEditableEl){this.editingEnabled=this.inlineEditableEl.editingEnabled||false}B(this);u(this);this.mutationObserver?.observe(this.el,{childList:true});this.setDisabledAction();this.el.addEventListener(d,this.onHiddenFormInputInput)}disconnectedCallback(){f(this);R(this);p(this);L(this);W(this);this.mutationObserver?.disconnect();this.el.removeEventListener(d,this.onHiddenFormInputInput)}async componentWillLoad(){K(this);this.childElType=this.type==="textarea"?"textarea":"input";this.maxString=this.max?.toString();this.minString=this.min?.toString();this.requestedIcon=l(H,this.icon,this.type);await C(this);this.setPreviousEmittedValue(this.value);this.setPreviousValue(this.value);if(this.type==="number"){if(this.value==="Infinity"||this.value==="-Infinity"){this.displayedValue=this.value;this.previousEmittedValue=this.value}else{this.warnAboutInvalidNumberValue(this.value);this.setValue({origin:"connected",value:k(this.value)?this.value:""})}}}componentDidLoad(){M(this)}componentShouldUpdate(t,e,i){if(this.type==="number"&&i==="value"&&t&&!k(t)){this.setValue({origin:"reset",value:e});return false}return true}componentDidRender(){g(this)}async setFocus(){await O(this);if(this.type==="number"){this.childNumberEl?.focus()}else{this.childEl?.focus()}}async selectText(){if(this.type==="number"){this.childNumberEl?.select()}else{this.childEl?.select()}}onLabelClick(){this.setFocus()}incrementOrDecrementNumberValue(t,e,i,n){const{value:s}=this;if(s==="Infinity"||s==="-Infinity"){return}const o=t==="up"?1:-1;const r=this.step==="any"?1:Math.abs(this.step||1);const a=new D(s!==""?s:"0");const l=a.add(`${r*o}`);const c=()=>typeof i==="number"&&!isNaN(i)&&l.subtract(`${i}`).isNegative;const h=()=>typeof e==="number"&&!isNaN(e)&&!l.subtract(`${e}`).isNegative;const u=c()?`${i}`:h()?`${e}`:l.toString();this.setValue({committing:true,nativeEvent:n,origin:"user",value:u})}syncHiddenFormInput(t){P(this.type,this,t)}setDisabledAction(){const t=r(this.el,"action");if(!t){return}if(this.disabled){if(t.getAttribute("disabled")==null){this.slottedActionElDisabledInternally=true}t.setAttribute("disabled","")}else if(this.slottedActionElDisabledInternally){t.removeAttribute("disabled");this.slottedActionElDisabledInternally=false}}normalizeValue(t){return this.type==="number"?k(t)?t:"":t}warnAboutInvalidNumberValue(t){if(this.type==="number"&&t&&!k(t)){console.warn(`The specified value "${t}" cannot be parsed, or is out of range.`)}}render(){const t=c(this.el);const e=n("div",{class:U.loader},n("calcite-progress",{label:this.messages.loading,type:"indeterminate"}));const i=n("button",{"aria-label":this.messages.clear,class:U.clearButton,disabled:this.disabled||this.readOnly,onClick:this.clearInputValue,tabIndex:-1,type:"button"},n("calcite-icon",{icon:"x",scale:$(this.scale)}));const r=n("calcite-icon",{class:U.inputIcon,flipRtl:this.iconFlipRtl,icon:this.requestedIcon,scale:$(this.scale)});const a=this.numberButtonType==="horizontal";const l=n("button",{"aria-hidden":"true",class:{[U.numberButtonItem]:true,[U.buttonItemHorizontal]:a},"data-adjustment":"up",disabled:this.disabled||this.readOnly,onPointerDown:this.numberButtonPointerDownHandler,onPointerOut:this.numberButtonPointerUpAndOutHandler,onPointerUp:this.numberButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},n("calcite-icon",{icon:"chevron-up",scale:$(this.scale)}));const h=n("button",{"aria-hidden":"true",class:{[U.numberButtonItem]:true,[U.buttonItemHorizontal]:a},"data-adjustment":"down",disabled:this.disabled||this.readOnly,onPointerDown:this.numberButtonPointerDownHandler,onPointerOut:this.numberButtonPointerUpAndOutHandler,onPointerUp:this.numberButtonPointerUpAndOutHandler,tabIndex:-1,type:"button"},n("calcite-icon",{icon:"chevron-down",scale:$(this.scale)}));const u=n("div",{class:U.numberButtonWrapper},l,h);const d=n("div",{class:U.prefix},this.prefixText);const p=n("div",{class:U.suffix},this.suffixText);const m=this.type==="number"?n("input",{accept:this.accept,"aria-label":V(this),autocomplete:this.autocomplete,autofocus:this.autofocus?true:null,defaultValue:this.defaultValue,disabled:this.disabled?true:null,enterKeyHint:this.enterKeyHint,inputMode:this.inputMode,key:"localized-input",maxLength:this.maxLength,minLength:this.minLength,multiple:this.multiple,name:undefined,onBlur:this.inputBlurHandler,onFocus:this.inputFocusHandler,onInput:this.inputNumberInputHandler,onKeyDown:this.inputNumberKeyDownHandler,onKeyUp:this.inputKeyUpHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,type:"text",value:this.displayedValue,ref:this.setChildNumberElRef}):null;const f=this.type!=="number"?[n(this.childElType,{accept:this.accept,"aria-label":V(this),autocomplete:this.autocomplete,autofocus:this.autofocus?true:null,class:{[U.editingEnabled]:this.editingEnabled,[U.inlineChild]:!!this.inlineEditableEl},defaultValue:this.defaultValue,disabled:this.disabled?true:null,enterKeyHint:this.enterKeyHint,inputMode:this.inputMode,max:this.maxString,maxLength:this.maxLength,min:this.minString,minLength:this.minLength,multiple:this.multiple,name:this.name,onBlur:this.inputBlurHandler,onChange:this.inputChangeHandler,onFocus:this.inputFocusHandler,onInput:this.inputInputHandler,onKeyDown:this.inputKeyDownHandler,onKeyUp:this.inputKeyUpHandler,pattern:this.pattern,placeholder:this.placeholder||"",readOnly:this.readOnly,required:this.required?true:null,step:this.step,tabIndex:this.disabled||this.inlineEditableEl&&!this.editingEnabled?-1:null,type:this.type,value:this.value,ref:this.setChildElRef}),this.isTextarea?n("div",{class:U.resizeIconWrapper},n("calcite-icon",{icon:"chevron-down",scale:$(this.scale)})):null]:null;return n(o,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},n(v,{disabled:this.disabled},n("div",{class:{[U.inputWrapper]:true,[s.rtl]:t==="rtl"}},this.type==="number"&&this.numberButtonType==="horizontal"&&!this.readOnly?h:null,this.prefixText?d:null,n("div",{class:U.wrapper},m,f,this.isClearable?i:null,this.requestedIcon?r:null,this.loading?e:null),n("div",{class:U.actionWrapper},n("slot",{name:G.action})),this.type==="number"&&this.numberButtonType==="vertical"&&!this.readOnly?u:null,this.suffixText?p:null,this.type==="number"&&this.numberButtonType==="horizontal"&&!this.readOnly?l:null,n(b,{component:this})),this.validationMessage&&this.status==="invalid"?n(A,{icon:this.validationIcon,message:this.validationMessage,scale:this.scale,status:this.status}):null))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return X}},[1,"calcite-input",{alignment:[513],autofocus:[516],clearable:[516],disabled:[516],form:[513],groupSeparator:[516,"group-separator"],icon:[520],iconFlipRtl:[516,"icon-flip-rtl"],label:[1],loading:[516],numberingSystem:[513,"numbering-system"],localeFormat:[4,"locale-format"],max:[514],min:[514],maxLength:[514,"max-length"],minLength:[514,"min-length"],validationMessage:[1,"validation-message"],validationIcon:[520,"validation-icon"],name:[513],numberButtonType:[513,"number-button-type"],placeholder:[1],prefixText:[1,"prefix-text"],readOnly:[516,"read-only"],required:[516],scale:[513],status:[513],step:[520],autocomplete:[1],pattern:[1],accept:[1],multiple:[4],inputMode:[1,"input-mode"],enterKeyHint:[1,"enter-key-hint"],suffixText:[1,"suffix-text"],editingEnabled:[1540,"editing-enabled"],type:[513],value:[1025],files:[16],messages:[1040],messageOverrides:[1040],defaultMessages:[32],effectiveLocale:[32],displayedValue:[32],slottedActionElDisabledInternally:[32],setFocus:[64],selectText:[64]},undefined,{disabled:["disabledWatcher"],max:["maxWatcher"],min:["minWatcher"],messageOverrides:["onMessagesChange"],value:["valueWatcher"],icon:["updateRequestedIcon"],type:["updateRequestedIcon"],effectiveLocale:["effectiveLocaleChange"]}]);function J(){if(typeof customElements==="undefined"){return}const t=["calcite-input","calcite-icon","calcite-input-message","calcite-progress"];t.forEach((t=>{switch(t){case"calcite-input":if(!customElements.get(t)){customElements.define(t,_)}break;case"calcite-icon":if(!customElements.get(t)){S()}break;case"calcite-input-message":if(!customElements.get(t)){q()}break;case"calcite-progress":if(!customElements.get(t)){N()}break}}))}J();export{_ as I,J as d};
//# sourceMappingURL=p-e22c1652.js.map