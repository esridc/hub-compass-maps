import{r as s,q as e,dC as i,eS as r,eR as t}from"./p-aad64c9f.js";import{i as a}from"./p-31b7e91d.js";let h=class extends a{get hasHighlight(){return this.children.some((s=>s.hasData))}renderChildren(s){this.attributeView.update(),s.drawPhase===i.HIGHLIGHT&&this.children.some((s=>s.hasData))&&(super.renderChildren(s),s.context.setColorMask(!0,!0,!0,!0),r(s,!0,(s=>{this._renderChildren(s,t.All)}),0))}};h=s([e("esri.views.2d.layers.graphics.HighlightGraphicContainer")],h);const p=h;export{p as h};
//# sourceMappingURL=p-f5662f64.js.map