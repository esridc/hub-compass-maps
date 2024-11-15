import{bo as e,bp as t,bs as o}from"./p-aad64c9f.js";import{c as s,d as a}from"./p-ed44eec3.js";import{c as n,s as i,a as c}from"./p-8711f003.js";import{c as l,d as r}from"./p-efdd0667.js";import{u as d,c as u,d as m,s as p}from"./p-021cd4d2.js";import{d as h,S as f}from"./p-7fe7333d.js";import{s as g}from"./p-cdbdef01.js";import{d as b}from"./p-85d4ddf7.js";import{d as x}from"./p-d964b132.js";import{d as v}from"./p-24c81c10.js";import{d as y}from"./p-c04ce53a.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */const k={menuActions:"menu-actions",menuTooltip:"menu-tooltip"};const j={menu:"ellipsis"};const C={container:"container"};const E=':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;background-color:transparent;border-color:var(--calcite-action-group-border-color, var(--calcite-color-border-3));border-style:solid;border-width:0}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-internal-action-group-columns:1}:host([columns="2"]){--calcite-internal-action-group-columns:2}:host([columns="3"]){--calcite-internal-action-group-columns:3}:host([columns="4"]){--calcite-internal-action-group-columns:4}:host([columns="5"]){--calcite-internal-action-group-columns:5}:host([columns="6"]){--calcite-internal-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:transparent;grid-template-columns:repeat(var(--calcite-action-group-columns, var(--calcite-internal-action-group-columns, 3)), auto);gap:var(--calcite-action-group-gap, 1px);padding:var(--calcite-action-group-gap, 1px)}:host([hidden]){display:none}[hidden]{display:none}';const z=E;const L=e(class e extends t{constructor(){super();this.__registerHost();this.__attachShadow();this.setMenuOpen=e=>{this.menuOpen=!!e.target.open};this.handleMenuActionsSlotChange=e=>{this.hasMenuActions=g(e)};this.expanded=false;this.label=undefined;this.layout="vertical";this.columns=undefined;this.menuOpen=false;this.overlayPositioning="absolute";this.scale=undefined;this.menuFlipPlacements=undefined;this.menuPlacement=undefined;this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale="";this.defaultMessages=undefined;this.hasMenuActions=false}expandedHandler(){this.menuOpen=false}onMessagesChange(){}effectiveLocaleChange(){d(this,this.effectiveLocale)}async setFocus(){await n(this);this.el.focus()}connectedCallback(){l(this);u(this);s(this)}disconnectedCallback(){r(this);m(this);a(this)}async componentWillLoad(){i(this);await p(this)}componentDidLoad(){c(this)}renderMenu(){const{expanded:e,menuOpen:t,scale:s,layout:a,messages:n,overlayPositioning:i,hasMenuActions:c,menuFlipPlacements:l,menuPlacement:r}=this;return o("calcite-action-menu",{expanded:e,flipPlacements:l??(a==="horizontal"?["top","bottom"]:["left","right"]),hidden:!c,label:n.more,onCalciteActionMenuOpen:this.setMenuOpen,open:t,overlayPositioning:i,placement:r??(a==="horizontal"?"bottom-start":"leading-start"),scale:s},o("calcite-action",{icon:j.menu,scale:s,slot:f.trigger,text:n.more,textEnabled:e}),o("slot",{name:k.menuActions,onSlotchange:this.handleMenuActionsSlotChange}),o("slot",{name:k.menuTooltip,slot:f.tooltip}))}render(){return o("div",{key:"8143606c5745053f15140f34ff5ea375a683325f","aria-label":this.label,class:C.container,role:"group"},o("slot",{key:"e8c2821b9ce2e9d0293478989fc31d24f043f9c3"}),this.renderMenu())}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return z}},[17,"calcite-action-group",{expanded:[516],label:[1],layout:[513],columns:[514],menuOpen:[1540,"menu-open"],overlayPositioning:[513,"overlay-positioning"],scale:[513],menuFlipPlacements:[16],menuPlacement:[513,"menu-placement"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],hasMenuActions:[32],setFocus:[64]},undefined,{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function M(){if(typeof customElements==="undefined"){return}const e=["calcite-action-group","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"];e.forEach((e=>{switch(e){case"calcite-action-group":if(!customElements.get(e)){customElements.define(e,L)}break;case"calcite-action":if(!customElements.get(e)){b()}break;case"calcite-action-menu":if(!customElements.get(e)){h()}break;case"calcite-icon":if(!customElements.get(e)){x()}break;case"calcite-loader":if(!customElements.get(e)){v()}break;case"calcite-popover":if(!customElements.get(e)){y()}break}}))}M();export{L as A,k as S,M as d};
//# sourceMappingURL=p-07db700e.js.map