import{kZ as s,dE as t,aW as a,am as e,aY as i,an as n,ao as l,ap as r}from"./p-3013819f.js";let o=0,c=class extends(s(t(a(e)))){constructor(s){super(s),this.id=`${Date.now().toString(16)}-analysis-${o++}`,this.title=null}get parent(){return this._get("parent")}set parent(s){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",s)}get isEditable(){return this.requiredPropertiesForEditing.every(i)}};n([l({type:String,constructOnly:!0,clonable:!1})],c.prototype,"id",void 0),n([l({type:String})],c.prototype,"title",void 0),n([l({clonable:!1,value:null})],c.prototype,"parent",null),n([l({readOnly:!0})],c.prototype,"isEditable",null),c=n([r("esri.analysis.Analysis")],c);const p=c;export{p as c};
//# sourceMappingURL=p-4c1e1ecc.js.map