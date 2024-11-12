import{dR as e,dS as t,dU as s}from"./p-028496e2.js";import{c as a,d as o}from"./p-39364fed.js";import{c as i,s as c,a as n}from"./p-0d934a08.js";import{u as l,c as r,a as d,d as u,b as p,s as m}from"./p-efc7ad18.js";import{d as h,S as g}from"./p-8a328d81.js";import{s as f}from"./p-49ae4733.js";import{d as x}from"./p-bc3602fa.js";import{d as b}from"./p-ef727936.js";import{d as v}from"./p-6a8fad16.js";import{d as y}from"./p-01c3f132.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */const k={menuActions:"menu-actions",menuTooltip:"menu-tooltip"};const j={menu:"ellipsis"};const C={container:"container"};const E=':host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:flex;flex-direction:column;padding:0px;--calcite-action-group-columns:3;--calcite-action-group-gap:1px;--calcite-action-group-padding:1px}.container{display:flex;flex-grow:1;flex-direction:column}:host([columns="1"]){--calcite-action-group-columns:1}:host([columns="2"]){--calcite-action-group-columns:2}:host([columns="3"]){--calcite-action-group-columns:3}:host([columns="4"]){--calcite-action-group-columns:4}:host([columns="5"]){--calcite-action-group-columns:5}:host([columns="6"]){--calcite-action-group-columns:6}:host(:first-child){padding-block-start:0px}:host([layout=horizontal]),:host([layout=horizontal]) .container{flex-direction:row}:host([layout=grid]){display:grid}:host([layout=grid]) .container{display:grid;place-content:stretch;background-color:var(--calcite-color-background);gap:var(--calcite-action-group-gap);padding:var(--calcite-action-group-gap);grid-template-columns:repeat(var(--calcite-action-group-columns), auto)}:host([hidden]){display:none}[hidden]{display:none}';const L=e(class e extends t{constructor(){super();this.__registerHost();this.__attachShadow();this.setMenuOpen=e=>{this.menuOpen=!!e.target.open};this.handleMenuActionsSlotChange=e=>{this.hasMenuActions=f(e)};this.expanded=false;this.label=undefined;this.layout="vertical";this.columns=undefined;this.menuOpen=false;this.overlayPositioning="absolute";this.scale=undefined;this.messages=undefined;this.messageOverrides=undefined;this.effectiveLocale="";this.defaultMessages=undefined;this.hasMenuActions=false}expandedHandler(){this.menuOpen=false}onMessagesChange(){}effectiveLocaleChange(){l(this,this.effectiveLocale)}async setFocus(){await i(this);this.el.focus()}connectedCallback(){r(this);d(this);a(this)}disconnectedCallback(){u(this);p(this);o(this)}async componentWillLoad(){c(this);await m(this)}componentDidLoad(){n(this)}renderMenu(){const{expanded:e,menuOpen:t,scale:a,layout:o,messages:i,overlayPositioning:c,hasMenuActions:n}=this;return s("calcite-action-menu",{expanded:e,flipPlacements:["left","right"],hidden:!n,label:i.more,onCalciteActionMenuOpen:this.setMenuOpen,open:t,overlayPositioning:c,placement:o==="horizontal"?"bottom-start":"leading-start",scale:a},s("calcite-action",{icon:j.menu,scale:a,slot:g.trigger,text:i.more,textEnabled:e}),s("slot",{name:k.menuActions,onSlotchange:this.handleMenuActionsSlotChange}),s("slot",{name:k.menuTooltip,slot:g.tooltip}))}render(){return s("div",{"aria-label":this.label,class:C.container,role:"group"},s("slot",null),this.renderMenu())}static get delegatesFocus(){return true}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return E}},[17,"calcite-action-group",{expanded:[516],label:[1],layout:[513],columns:[514],menuOpen:[1540,"menu-open"],overlayPositioning:[513,"overlay-positioning"],scale:[513],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],hasMenuActions:[32],setFocus:[64]},undefined,{expanded:["expandedHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function M(){if(typeof customElements==="undefined"){return}const e=["calcite-action-group","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"];e.forEach((e=>{switch(e){case"calcite-action-group":if(!customElements.get(e)){customElements.define(e,L)}break;case"calcite-action":if(!customElements.get(e)){x()}break;case"calcite-action-menu":if(!customElements.get(e)){h()}break;case"calcite-icon":if(!customElements.get(e)){b()}break;case"calcite-loader":if(!customElements.get(e)){v()}break;case"calcite-popover":if(!customElements.get(e)){y()}break}}))}M();export{L as A,k as S,M as d};
//# sourceMappingURL=p-fb5e8671.js.map