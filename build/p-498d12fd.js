import{b5 as e,an as i,dF as a,ao as s,ap as n,dG as t}from"./p-028496e2.js";const l=new e({esriClassifyEqualInterval:"equal-interval",esriClassifyManual:"manual",esriClassifyNaturalBreaks:"natural-breaks",esriClassifyQuantile:"quantile",esriClassifyStandardDeviation:"standard-deviation",esriClassifyDefinedInterval:"defined-interval"}),r=new e({esriNormalizeByLog:"log",esriNormalizeByPercentOfTotal:"percent-of-total",esriNormalizeByField:"field"});let o=class extends t{constructor(e){super(e),this.type="class-breaks-definition",this.breakCount=null,this.classificationField=null,this.classificationMethod=null,this.normalizationField=null,this.normalizationType=null}set standardDeviationInterval(e){"standard-deviation"===this.classificationMethod&&this._set("standardDeviationInterval",e)}set definedInterval(e){"defined-interval"===this.classificationMethod&&this._set("definedInterval",e)}};i([a({classBreaksDef:"class-breaks-definition"})],o.prototype,"type",void 0),i([s({json:{write:!0}})],o.prototype,"breakCount",void 0),i([s({json:{write:!0}})],o.prototype,"classificationField",void 0),i([s({type:String,json:{read:l.read,write:l.write}})],o.prototype,"classificationMethod",void 0),i([s({json:{write:!0}})],o.prototype,"normalizationField",void 0),i([s({json:{read:r.read,write:r.write}})],o.prototype,"normalizationType",void 0),i([s({value:null,json:{write:!0}})],o.prototype,"standardDeviationInterval",null),i([s({value:null,json:{write:!0}})],o.prototype,"definedInterval",null),o=i([n("esri.rest.support.ClassBreaksDefinition")],o);const d=o;export{d};
//# sourceMappingURL=p-498d12fd.js.map