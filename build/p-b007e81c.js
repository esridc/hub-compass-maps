import{m as n,q as t,a as e}from"./p-49ae4733.js";import{c}from"./p-483e769b.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */const o="calciteInternalLabelClick";const s="calciteInternalLabelConnected";const r="calciteInternalLabelDisconnected";const i="calcite-label";const a=new WeakMap;const u=new WeakMap;const f=new WeakMap;const l=new WeakMap;const m=new Set;const d=n=>{const{id:c}=n;const o=c&&t(n,{selector:`${i}[for="${c}"]`});if(o){return o}const s=e(n,i);if(!s||b(s,n)){return null}return s};function b(n,t){let e;const c="custom-element-ancestor-check";const o=c=>{c.stopImmediatePropagation();const o=c.composedPath();e=o.slice(o.indexOf(t),o.indexOf(n))};n.addEventListener(c,o,{once:true});t.dispatchEvent(new CustomEvent(c,{composed:true,bubbles:true}));n.removeEventListener(c,o);const s=e.filter((e=>e!==t&&e!==n)).filter((n=>n.tagName?.includes("-")));return s.length>0}function p(n){if(!n){return}const t=d(n.el);if(u.has(t)&&t===n.labelEl||!t&&m.has(n)){return}const e=C.bind(n);if(t){n.labelEl=t;const c=a.get(t)||[];c.push(n);a.set(t,c.sort(k));if(!u.has(n.labelEl)){u.set(n.labelEl,M);n.labelEl.addEventListener(o,M)}m.delete(n);document.removeEventListener(s,f.get(n));l.set(n,e);document.addEventListener(r,e)}else if(!m.has(n)){e();document.removeEventListener(r,l.get(n))}}function h(n){if(!n){return}m.delete(n);document.removeEventListener(s,f.get(n));document.removeEventListener(r,l.get(n));f.delete(n);l.delete(n);if(!n.labelEl){return}const t=a.get(n.labelEl);if(t.length===1){n.labelEl.removeEventListener(o,u.get(n.labelEl));u.delete(n.labelEl)}a.set(n.labelEl,t.filter((t=>t!==n)).sort(k));n.labelEl=null}function k(t,e){return n(t.el,e.el)?-1:1}function w(n){return n.label||n.labelEl?.textContent?.trim()||""}function M(n){const t=n.detail.sourceEvent.target;const e=a.get(this);const c=e.find((n=>n.el===t));const o=e.includes(c);if(o){return}const s=e[0];if(s.disabled){return}s.onLabelClick(n)}function W(){if(m.has(this)){p(this)}}function C(){m.add(this);const n=f.get(this)||W.bind(this);f.set(this,n);document.addEventListener(s,n)}async function I(n){await c(n);const t=a.has(n);if(t){return}const e=n.ownerDocument?.getElementById(n.for);if(!e){return}requestAnimationFrame((()=>{for(const n of m){if(n.el===e){p(n);break}}}))}export{I as a,r as b,p as c,h as d,w as g,s as l};
//# sourceMappingURL=p-b007e81c.js.map