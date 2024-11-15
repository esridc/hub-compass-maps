import{bs as n}from"./p-aad64c9f.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */function t(){const{disabled:n}=this;if(!n){HTMLElement.prototype.click.call(this)}}function i(n){const t=n.target;if(t.disabled){n.preventDefault()}}const o=["mousedown","mouseup","click"];function c(n){const t=n.target;if(t.disabled){n.stopImmediatePropagation();n.preventDefault()}}const e={capture:true};function s(n){if(n.disabled){n.el.setAttribute("aria-disabled","true");if(n.el.contains(document.activeElement)){document.activeElement.blur()}a(n);return}d(n);n.el.removeAttribute("aria-disabled")}function a(n){n.el.click=t;u(n.el)}function u(n){n.addEventListener("pointerdown",i,e);o.forEach((t=>n.addEventListener(t,c,e)))}function d(n){delete n.el.click;r(n.el)}function r(n){n.removeEventListener("pointerdown",i,e);o.forEach((t=>n.removeEventListener(t,c,e)))}const f={container:"interaction-container"};const l=({disabled:t},i)=>n("div",{class:f.container,inert:t},...i);export{l as I,s as u};
//# sourceMappingURL=p-05749d2a.js.map