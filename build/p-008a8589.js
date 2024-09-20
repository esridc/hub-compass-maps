import{nD as e}from"./p-3013819f.js";import{R as t,D as i,U as s,V as a,k as n}from"./p-3f169dbd.js";import{s as l,al as r,b as h,aq as u,ae as o,as as c,at as d,au as b,ak as p,w as f,av as g,aw as m,ax as v,ad as y,i as x,C as T,ay as w,ah as k,az as R,r as _,an as j,a as A}from"./p-6635e9bb.js";import{s as O}from"./p-8f7a8d08.js";import{l as L}from"./p-427e92ff.js";import"./p-3b51db5e.js";class S extends l{constructor(){super(...arguments),Object.defineProperty(this,"_display",{enumerable:!0,configurable:!0,writable:!0,value:this._root._renderer.makeRadialText("",this.textStyle)})}_afterNew(){super._afterNew()}_beforeChanged(){super._beforeChanged(),this._display.clear(),this.isDirty("textType")&&(this._display.textType=this.get("textType"),this.markDirtyBounds()),this.isDirty("radius")&&(this._display.radius=this.get("radius"),this.markDirtyBounds()),this.isDirty("startAngle")&&(this._display.startAngle=(this.get("startAngle",0)+90)*v,this.markDirtyBounds()),this.isDirty("inside")&&(this._display.inside=this.get("inside"),this.markDirtyBounds()),this.isDirty("orientation")&&(this._display.orientation=this.get("orientation"),this.markDirtyBounds()),this.isDirty("kerning")&&(this._display.kerning=this.get("kerning"),this.markDirtyBounds())}}Object.defineProperty(S,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialText"}),Object.defineProperty(S,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:l.classNames.concat([S.className])});class N extends r{constructor(){super(...arguments),Object.defineProperty(this,"_flipped",{enumerable:!0,configurable:!0,writable:!0,value:!1})}_afterNew(){this._textKeys.push("textType","kerning"),super._afterNew()}_makeText(){this._text=this.children.push(S.new(this._root,{}))}baseRadius(){const e=this.getPrivate("radius",0),t=this.getPrivate("innerRadius",0),i=this.get("baseRadius",0);return t+c(i,e-t)}radius(){const e=this.get("inside",!1);return this.baseRadius()+this.get("radius",0)*(e?-1:1)}_updateChildren(){if(super._updateChildren(),this.isDirty("baseRadius")||this.isPrivateDirty("radius")||this.isPrivateDirty("innerRadius")||this.isDirty("labelAngle")||this.isDirty("radius")||this.isDirty("inside")||this.isDirty("orientation")||this.isDirty("textType")){const e=this.get("textType","adjusted"),t=this.get("inside",!1),i=this.get("orientation");let s=y(this.get("labelAngle",0));this._text.set("startAngle",this.get("labelAngle",0)),this._text.set("inside",t);const a=m(s),n=g(s);let l=this.baseRadius(),r=this.radius();if(this._display.angle=0,"circular"==e)this.setAll({paddingTop:0,paddingBottom:0,paddingLeft:0,paddingRight:0}),this._text.set("orientation",i),this._text.set("radius",r);else{0==l&&(s=0,r=0);let t=r*n,h=r*a;"radial"==e?(this.setRaw("x",t),this.setRaw("y",h),s<90||s>270||"auto"!=i?(this._display.angle=s,this._flipped=!1):(this._display.angle=s+180,this._flipped=!0),this._dirty.rotation=!1):"adjusted"==e?(this.setRaw("centerX",u),this.setRaw("centerY",u),this.setRaw("x",t),this.setRaw("y",h)):"regular"==e&&(this.setRaw("x",t),this.setRaw("y",h))}this.markDirtyPosition(),this.markDirtyBounds()}}_updatePosition(){const e=this.get("textType","regular"),t=this.get("inside",!1);let i=0,s=0,a=this.get("labelAngle",0),n=this.localBounds(),l=n.right-n.left,r=n.bottom-n.top;if("radial"==e){if(this._flipped){let e=this.get("centerX");e instanceof o&&(l*=1-2*e.value),i=l*g(a),s=l*m(a)}}else t||"adjusted"!=e||(i=l/2*g(a),s=r/2*m(a));this.setRaw("dx",i),this.setRaw("dy",s),super._updatePosition()}get text(){return this._text}}Object.defineProperty(N,"className",{enumerable:!0,configurable:!0,writable:!0,value:"RadialLabel"}),Object.defineProperty(N,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:r.classNames.concat([N.className])});const P=Math.abs,D=Math.atan2,M=Math.cos,C=Math.max,I=Math.min,F=Math.sin,X=Math.sqrt,Y=1e-12,z=Math.PI,B=z/2,W=2*z;function U(e){return e>1?0:e<-1?z:Math.acos(e)}function E(e){return e>=1?B:e<=-1?-B:Math.asin(e)}function V(e){return e.innerRadius}function q(e){return e.outerRadius}function G(e){return e.startAngle}function H(e){return e.endAngle}function J(e){return e&&e.padAngle}function K(e,t,i,s,a,n,l,r){var h=i-e,u=s-t,o=l-a,c=r-n,d=c*h-o*u;if(!(d*d<Y))return[e+(d=(o*(t-n)-c*(e-a))/d)*h,t+d*u]}function Q(e,t,i,s,a,n,l){var r=e-i,h=t-s,u=(l?n:-n)/X(r*r+h*h),o=u*h,c=-u*r,d=e+o,b=t+c,p=i+o,f=s+c,g=(d+p)/2,m=(b+f)/2,v=p-d,y=f-b,x=v*v+y*y,T=a-n,w=d*f-p*b,k=(y<0?-1:1)*X(C(0,T*T*x-w*w)),R=(w*y-v*k)/x,_=(-w*v-y*k)/x,j=(w*y+v*k)/x,A=(-w*v+y*k)/x,O=R-g,L=_-m,S=j-g,N=A-m;return O*O+L*L>S*S+N*N&&(R=j,_=A),{cx:R,cy:_,x01:-o,y01:-c,x11:R*(a/T-1),y11:_*(a/T-1)}}function Z(){var e=V,t=q,i=n(0),s=null,l=G,r=H,h=J,u=null,o=a(c);function c(){var a,n,c=+e.apply(this,arguments),d=+t.apply(this,arguments),b=l.apply(this,arguments)-B,p=r.apply(this,arguments)-B,f=P(p-b),g=p>b;if(u||(u=a=o()),d<c&&(n=d,d=c,c=n),d>Y)if(f>W-Y)u.moveTo(d*M(b),d*F(b)),u.arc(0,0,d,b,p,!g),c>Y&&(u.moveTo(c*M(p),c*F(p)),u.arc(0,0,c,p,b,g));else{var m,v,y=b,x=p,T=b,w=p,k=f,R=f,_=h.apply(this,arguments)/2,j=_>Y&&(s?+s.apply(this,arguments):X(c*c+d*d)),A=I(P(d-c)/2,+i.apply(this,arguments)),O=A,L=A;if(j>Y){var S=E(j/c*F(_)),N=E(j/d*F(_));(k-=2*S)>Y?(T+=S*=g?1:-1,w-=S):(k=0,T=w=(b+p)/2),(R-=2*N)>Y?(y+=N*=g?1:-1,x-=N):(R=0,y=x=(b+p)/2)}var C=d*M(y),V=d*F(y),q=c*M(w),G=c*F(w);if(A>Y){var H,J=d*M(x),Z=d*F(x),$=c*M(T),ee=c*F(T);if(f<z)if(H=K(C,V,$,ee,J,Z,q,G)){var te=C-H[0],ie=V-H[1],se=J-H[0],ae=Z-H[1],ne=1/F(U((te*se+ie*ae)/(X(te*te+ie*ie)*X(se*se+ae*ae)))/2),le=X(H[0]*H[0]+H[1]*H[1]);O=I(A,(c-le)/(ne-1)),L=I(A,(d-le)/(ne+1))}else O=L=0}R>Y?L>Y?(m=Q($,ee,C,V,d,L,g),v=Q(J,Z,q,G,d,L,g),u.moveTo(m.cx+m.x01,m.cy+m.y01),L<A?u.arc(m.cx,m.cy,L,D(m.y01,m.x01),D(v.y01,v.x01),!g):(u.arc(m.cx,m.cy,L,D(m.y01,m.x01),D(m.y11,m.x11),!g),u.arc(0,0,d,D(m.cy+m.y11,m.cx+m.x11),D(v.cy+v.y11,v.cx+v.x11),!g),u.arc(v.cx,v.cy,L,D(v.y11,v.x11),D(v.y01,v.x01),!g))):(u.moveTo(C,V),u.arc(0,0,d,y,x,!g)):u.moveTo(C,V),c>Y&&k>Y?O>Y?(m=Q(q,G,J,Z,c,-O,g),v=Q(C,V,$,ee,c,-O,g),u.lineTo(m.cx+m.x01,m.cy+m.y01),O<A?u.arc(m.cx,m.cy,O,D(m.y01,m.x01),D(v.y01,v.x01),!g):(u.arc(m.cx,m.cy,O,D(m.y01,m.x01),D(m.y11,m.x11),!g),u.arc(0,0,c,D(m.cy+m.y11,m.cx+m.x11),D(v.cy+v.y11,v.cx+v.x11),g),u.arc(v.cx,v.cy,O,D(v.y11,v.x11),D(v.y01,v.x01),!g))):u.arc(0,0,c,w,T,g):u.lineTo(q,G)}else u.moveTo(0,0);if(u.closePath(),a)return u=null,a+""||null}return c.centroid=function(){var i=(+e.apply(this,arguments)+ +t.apply(this,arguments))/2,s=(+l.apply(this,arguments)+ +r.apply(this,arguments))/2-z/2;return[M(s)*i,F(s)*i]},c.innerRadius=function(t){return arguments.length?(e="function"==typeof t?t:n(+t),c):e},c.outerRadius=function(e){return arguments.length?(t="function"==typeof e?e:n(+e),c):t},c.cornerRadius=function(e){return arguments.length?(i="function"==typeof e?e:n(+e),c):i},c.padRadius=function(e){return arguments.length?(s=null==e?null:"function"==typeof e?e:n(+e),c):s},c.startAngle=function(e){return arguments.length?(l="function"==typeof e?e:n(+e),c):l},c.endAngle=function(e){return arguments.length?(r="function"==typeof e?e:n(+e),c):r},c.padAngle=function(e){return arguments.length?(h="function"==typeof e?e:n(+e),c):h},c.context=function(e){return arguments.length?(u=e??null,c):u},c}class $ extends h{constructor(){super(...arguments),Object.defineProperty(this,"ix",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"iy",{enumerable:!0,configurable:!0,writable:!0,value:0}),Object.defineProperty(this,"_generator",{enumerable:!0,configurable:!0,writable:!0,value:Z()})}_getTooltipPoint(){let e=this.get("tooltipX"),t=this.get("tooltipY"),i=0,s=0;T(e)&&(i=e),T(t)&&(s=t);let a=this.get("radius",0),n=this.get("innerRadius",0);return a+=this.get("dRadius",0),n+=this.get("dInnerRadius",0),n<0&&(n=a+n),e instanceof o&&(i=this.ix*(n+(a-n)*e.value)),t instanceof o&&(s=this.iy*(n+(a-n)*t.value)),this.get("arc")>=360&&0==n&&(i=0,s=0),{x:i,y:s}}_beforeChanged(){super._beforeChanged(),(this.isDirty("radius")||this.isDirty("arc")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("dRadius")||this.isDirty("dInnerRadius")||this.isDirty("cornerRadius")||this.isDirty("shiftRadius"))&&(this._clear=!0)}_changed(){if(super._changed(),this._clear){let e=this.get("startAngle",0),t=this.get("arc",0);const i=this._generator;t<0&&(e+=t,t*=-1),t>.1&&i.cornerRadius(this.get("cornerRadius",0)),i.context(this._display);let s=this.get("radius",0),a=this.get("innerRadius",0);s+=this.get("dRadius",0),a+=this.get("dInnerRadius",0),a<0&&(a=s+a),i({innerRadius:a,outerRadius:s,startAngle:(e+90)*v,endAngle:(e+t+90)*v});let n=e+t/2;this.ix=g(n),this.iy=m(n);const l=this.get("shiftRadius",0);this.setRaw("dx",this.ix*l),this.setRaw("dy",this.iy*l),this.markDirtyPosition()}}}Object.defineProperty($,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Slice"}),Object.defineProperty($,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:h.classNames.concat([$.className])});class ee extends j{setupDefaultRules(){super.setupDefaultRules();const e=this._root.interfaceColors,t=this.rule.bind(this);t("PercentSeries").setAll({legendLabelText:"{category}",legendValueText:"{valuePercentTotal.formatNumber('0.00p')}",colors:O.new(this._root,{}),width:_,height:_}),t("PieChart").setAll({radius:A(80),startAngle:-90,endAngle:270}),t("PieSeries").setAll({alignLabels:!0,startAngle:-90,endAngle:270}),t("PieSeries").states.create("hidden",{endAngle:-90,opacity:0}),t("Slice",["pie"]).setAll({position:"absolute",isMeasured:!1,x:0,y:0,toggleKey:"active",tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}",strokeWidth:1,strokeOpacity:1,role:"figure",lineJoin:"round"}),t("Slice",["pie"]).states.create("active",{shiftRadius:20,scale:1}),t("Slice",["pie"]).states.create("hoverActive",{scale:1.04}),t("Slice",["pie"]).states.create("hover",{scale:1.04}),t("RadialLabel",["pie"]).setAll({textType:"aligned",radius:10,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",paddingTop:5,paddingBottom:5,populateText:!0}),t("Tick",["pie"]).setAll({location:1}),t("SlicedChart").setAll({paddingLeft:10,paddingRight:10,paddingTop:10,paddingBottom:10}),t("FunnelSeries").setAll({startLocation:0,endLocation:1,orientation:"vertical",alignLabels:!0,sequencedInterpolation:!0}),t("FunnelSlice").setAll({interactive:!0,expandDistance:0}),t("FunnelSlice").states.create("hover",{expandDistance:.15}),t("Label",["funnel"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:u}),t("Label",["funnel","horizontal"]).setAll({centerX:0,centerY:u,rotation:-90}),t("Label",["funnel","vertical"]).setAll({centerY:u,centerX:0}),t("Tick",["funnel"]).setAll({location:1}),t("FunnelSlice",["funnel","link"]).setAll({fillOpacity:.5,strokeOpacity:0,expandDistance:-.1}),t("FunnelSlice",["funnel","link","vertical"]).setAll({height:10}),t("FunnelSlice",["funnel","link","horizontal"]).setAll({width:10}),t("PyramidSeries").setAll({valueIs:"area"}),t("FunnelSlice",["pyramid","link"]).setAll({fillOpacity:.5}),t("FunnelSlice",["pyramid","link","vertical"]).setAll({height:0}),t("FunnelSlice",["pyramid","link","horizontal"]).setAll({width:0}),t("FunnelSlice",["pyramid"]).setAll({interactive:!0,expandDistance:0}),t("FunnelSlice",["pyramid"]).states.create("hover",{expandDistance:.15}),t("Label",["pyramid"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:u}),t("Label",["pyramid","horizontal"]).setAll({centerX:0,centerY:u,rotation:-90}),t("Label",["pyramid","vertical"]).setAll({centerY:u,centerX:0}),t("Tick",["pyramid"]).setAll({location:1}),t("FunnelSlice",["pictorial"]).setAll({interactive:!0,tooltipText:"{category}: {valuePercentTotal.formatNumber('0.00p')}"}),t("Label",["pictorial"]).setAll({populateText:!0,text:"{category}: {valuePercentTotal.formatNumber('0.00p')}",centerY:u}),t("Label",["pictorial","horizontal"]).setAll({centerX:0,centerY:u,rotation:-90}),t("Label",["pictorial","vertical"]).setAll({centerY:u,centerX:0}),t("FunnelSlice",["pictorial","link"]).setAll({fillOpacity:.5,width:0,height:0}),t("Tick",["pictorial"]).setAll({location:.5});{const i=t("Graphics",["pictorial","background"]);i.setAll({fillOpacity:.2}),L(i,"fill",e,"alternativeBackground")}}}class te extends t{_afterNew(){this._defaultThemes.push(ee.new(this._root)),super._afterNew(),this.chartContainer.children.push(this.seriesContainer),this.seriesContainer.children.push(this.bulletsContainer)}_processSeries(e){super._processSeries(e),this.seriesContainer.children.moveValue(this.bulletsContainer,this.seriesContainer.children.length-1)}}Object.defineProperty(te,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentChart"}),Object.defineProperty(te,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:t.classNames.concat([te.className])});class ie extends i{constructor(){super(...arguments),Object.defineProperty(this,"slicesContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(x.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"labelsContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(x.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"ticksContainer",{enumerable:!0,configurable:!0,writable:!0,value:this.children.push(x.new(this._root,{position:"absolute",isMeasured:!1}))}),Object.defineProperty(this,"_lLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_rLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"_hLabels",{enumerable:!0,configurable:!0,writable:!0,value:[]}),Object.defineProperty(this,"slices",{enumerable:!0,configurable:!0,writable:!0,value:this._makeSlices()}),Object.defineProperty(this,"labels",{enumerable:!0,configurable:!0,writable:!0,value:this._makeLabels()}),Object.defineProperty(this,"ticks",{enumerable:!0,configurable:!0,writable:!0,value:this._makeTicks()})}makeSlice(e){const t=this.slicesContainer.children.push(this.slices.make());return t.on("fill",(()=>{this.updateLegendMarker(e)})),t.on("stroke",(()=>{this.updateLegendMarker(e)})),t._setDataItem(e),e.set("slice",t),this.slices.push(t),t}makeLabel(e){const t=this.labelsContainer.children.push(this.labels.make());return t._setDataItem(e),e.set("label",t),this.labels.push(t),t}_shouldMakeBullet(e){return null!=e.get("value")}makeTick(e){const t=this.ticksContainer.children.push(this.ticks.make());return t._setDataItem(e),e.set("tick",t),this.ticks.push(t),t}_afterNew(){this.fields.push("category","fill"),super._afterNew()}_onDataClear(){const e=this.get("colors");e&&e.reset()}_prepareChildren(){if(super._prepareChildren(),this._lLabels=[],this._rLabels=[],this._hLabels=[],this._valuesDirty){let e=0,t=0,i=0,s=1/0,a=0;f(this._dataItems,(i=>{let s=i.get("valueWorking",0);e+=s,t+=Math.abs(s)})),f(this._dataItems,(e=>{let n=e.get("valueWorking",0);n>i&&(i=n),n<s&&(s=n),a++;let l=n/t;0==t&&(l=0),e.setRaw("valuePercentTotal",100*l)})),this.setPrivateRaw("valueLow",s),this.setPrivateRaw("valueHigh",i),this.setPrivateRaw("valueSum",e),this.setPrivateRaw("valueAverage",e/a),this.setPrivateRaw("valueAbsoluteSum",t)}}show(t){const i=Object.create(null,{show:{get:()=>super.show}});return e(this,void 0,void 0,(function*(){let e=[];e.push(i.show.call(this,t)),e.push(this._sequencedShowHide(!0,t)),yield Promise.all(e)}))}hide(t){const i=Object.create(null,{hide:{get:()=>super.hide}});return e(this,void 0,void 0,(function*(){let e=[];e.push(i.hide.call(this,t)),e.push(this._sequencedShowHide(!1,t)),yield Promise.all(e)}))}_updateChildren(){super._updateChildren(),this._valuesDirty&&f(this._dataItems,(e=>{e.get("label").text.markDirtyText()})),(this.isDirty("legendLabelText")||this.isDirty("legendValueText"))&&f(this._dataItems,(e=>{this.updateLegendValue(e)})),this._arrange()}_arrange(){this._arrangeDown(this._lLabels),this._arrangeUp(this._lLabels),this._arrangeDown(this._rLabels),this._arrangeUp(this._rLabels),this._arrangeLeft(this._hLabels),this._arrangeRight(this._hLabels),f(this.dataItems,(e=>{this._updateTick(e)}))}_afterChanged(){super._afterChanged(),this._arrange()}processDataItem(e){if(super.processDataItem(e),null==e.get("fill")){let t=this.get("colors");t&&e.setRaw("fill",t.next())}}showDataItem(t,i){const s=Object.create(null,{showDataItem:{get:()=>super.showDataItem}});return e(this,void 0,void 0,(function*(){const e=[s.showDataItem.call(this,t,i)];T(i)||(i=this.get("stateAnimationDuration",0));const a=this.get("stateAnimationEasing");let n=t.get("value");const l=t.animate({key:"valueWorking",to:n,duration:i,easing:a});l&&e.push(l.waitForStop());const r=t.get("tick");r&&e.push(r.show(i));const h=t.get("label");h&&e.push(h.show(i));const u=t.get("slice");u&&e.push(u.show(i)),u.get("active")&&u.states.applyAnimate("active"),yield Promise.all(e)}))}hideDataItem(t,i){const s=Object.create(null,{hideDataItem:{get:()=>super.hideDataItem}});return e(this,void 0,void 0,(function*(){const e=[s.hideDataItem.call(this,t,i)],a=this.states.create("hidden",{});T(i)||(i=a.get("stateAnimationDuration",this.get("stateAnimationDuration",0)));const n=a.get("stateAnimationEasing",this.get("stateAnimationEasing")),l=t.animate({key:"valueWorking",to:0,duration:i,easing:n});l&&e.push(l.waitForStop());const r=t.get("tick");r&&e.push(r.hide(i));const h=t.get("label");h&&e.push(h.hide(i));const u=t.get("slice");u.hideTooltip(),u&&e.push(u.hide(i)),yield Promise.all(e)}))}disposeDataItem(e){super.disposeDataItem(e);let t=e.get("label");t&&(this.labels.removeValue(t),t.dispose());let i=e.get("tick");i&&(this.ticks.removeValue(i),i.dispose());let s=e.get("slice");s&&(this.slices.removeValue(s),s.dispose())}hoverDataItem(e){const t=e.get("slice");t&&!t.isHidden()&&t.hover()}unhoverDataItem(e){const t=e.get("slice");t&&t.unhover()}updateLegendMarker(e){if(e){const t=e.get("slice");if(t){const i=e.get("legendDataItem");if(i){const e=i.get("markerRectangle");f(w,(i=>{null!=t.get(i)&&e.set(i,t.get(i))}))}}}}_arrangeDown(e){if(e){let t=this._getNextDown();e.sort(((e,t)=>e.y>t.y?1:e.y<t.y?-1:0)),f(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.top;e.y+s<t&&(e.y=t-s),e.label.set("y",e.y),t=e.y+i.bottom}))}}_getNextUp(){return this.labelsContainer.maxHeight()}_getNextDown(){return 0}_arrangeUp(e){if(e){let t=this._getNextUp();e.sort(((e,t)=>e.y<t.y?1:e.y>t.y?-1:0)),f(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.bottom;e.y+s>t&&(e.y=t-s),e.label.set("y",e.y),t=e.y+i.top}))}}_arrangeRight(e){if(e){let t=0;e.sort(((e,t)=>e.y>t.y?1:e.y<t.y?-1:0)),f(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.left;e.y+s<t&&(e.y=t-s),e.label.set("x",e.y),t=e.y+i.right}))}}_arrangeLeft(e){if(e){let t=this.labelsContainer.maxWidth();e.sort(((e,t)=>e.y<t.y?1:e.y>t.y?-1:0)),f(e,(e=>{const i=e.label.adjustedLocalBounds();let s=i.right;e.y+s>t&&(e.y=t-s),e.label.set("x",e.y),t=e.y+i.left}))}}_updateSize(){super._updateSize(),this.markDirty()}_updateTick(e){}_dispose(){super._dispose();const e=this.chart;e&&e.series.removeValue(this)}}Object.defineProperty(ie,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PercentSeries"}),Object.defineProperty(ie,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:i.classNames.concat([ie.className])});class se extends te{constructor(){super(...arguments),Object.defineProperty(this,"_maxRadius",{enumerable:!0,configurable:!0,writable:!0,value:1})}_afterNew(){super._afterNew(),this.seriesContainer.setAll({x:u,y:u})}_prepareChildren(){super._prepareChildren();const e=this.chartContainer,t=e.innerWidth(),i=e.innerHeight(),s=this.get("startAngle",0),a=this.get("endAngle",0),n=this.get("innerRadius");let l=k(0,0,s,a,1);const r=t/(l.right-l.left),h=i/(l.bottom-l.top);let u={left:0,right:0,top:0,bottom:0};if(n instanceof o){let e=n.value,l=Math.min(r,h);e=Math.max(l*e,l-Math.min(i,t))/l,u=k(0,0,s,a,e),this.setPrivateRaw("irModifyer",e/n.value)}l=R([l,u]);const d=this._maxRadius;this._maxRadius=Math.min(r,h);const b=c(this.get("radius",0),this._maxRadius);this.seriesContainer.setAll({dy:-b*(l.bottom+l.top)/2,dx:-b*(l.right+l.left)/2}),(this.isDirty("startAngle")||this.isDirty("endAngle")||d!=this._maxRadius)&&this.series.each((e=>{e._markDirtyKey("startAngle")})),(this.isDirty("innerRadius")||this.isDirty("radius"))&&this.series.each((e=>{e._markDirtyKey("innerRadius")}))}radius(e){let t=c(this.get("radius",0),this._maxRadius),i=c(this.get("innerRadius",0),t);if(e){let s=this.series.indexOf(e),a=this.series.length,n=e.get("radius");return null!=n?i+c(n,t-i):i+(t-i)/a*(s+1)}return t}innerRadius(e){const t=this.radius();let i=c(this.get("innerRadius",0),t);if(i<0&&(i=t+i),e){let s=this.series.indexOf(e),a=this.series.length,n=e.get("innerRadius");return null!=n?i+c(n,t-i):i+(t-i)/a*s}return i}}Object.defineProperty(se,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieChart"}),Object.defineProperty(se,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:te.classNames.concat([se.className])});class ae extends ie{_makeSlices(){return new d(b.new({}),(()=>$._new(this._root,{themeTags:p(this.slices.template.get("themeTags",[]),["pie","series"])},[this.slices.template])))}_makeLabels(){return new d(b.new({}),(()=>N._new(this._root,{themeTags:p(this.labels.template.get("themeTags",[]),["pie","series"])},[this.labels.template])))}_makeTicks(){return new d(b.new({}),(()=>s._new(this._root,{themeTags:p(this.ticks.template.get("themeTags",[]),["pie","series"])},[this.ticks.template])))}processDataItem(e){super.processDataItem(e);const t=this.makeSlice(e);t.on("scale",(()=>{this._updateTick(e)})),t.on("shiftRadius",(()=>{this._updateTick(e)})),t.events.on("positionchanged",(()=>{this._updateTick(e)}));const i=this.makeLabel(e);i.events.on("positionchanged",(()=>{this._updateTick(e)})),this.makeTick(e),t.events.on("positionchanged",(()=>{i.markDirty()}))}_getNextUp(){const e=this.chart;return e?e._maxRadius:this.labelsContainer.maxHeight()/2}_getNextDown(){const e=this.chart;return e?-e._maxRadius:-this.labelsContainer.maxHeight()/2}_prepareChildren(){super._prepareChildren();const e=this.chart;if(e){if(this.isDirty("alignLabels")){let e=this.labels.template;if(this.get("alignLabels"))e.set("textType","aligned");else{let t=e.get("textType");null!=t&&"aligned"!=t||e.set("textType","adjusted")}}if(this._valuesDirty||this.isDirty("radius")||this.isDirty("innerRadius")||this.isDirty("startAngle")||this.isDirty("endAngle")||this.isDirty("alignLabels")){this.markDirtyBounds();const t=this.get("startAngle",e.get("startAngle",-90)),i=this.get("endAngle",e.get("endAngle",270))-t;let s=t;const a=e.radius(this);this.setPrivateRaw("radius",a);let n=e.innerRadius(this)*e.getPrivate("irModifyer",1);n<0&&(n=a+n),f(this._dataItems,(e=>{this.updateLegendValue(e);let t=i*e.get("valuePercentTotal")/100;const l=e.get("slice");if(l){l.set("radius",a),l.set("innerRadius",n),l.set("startAngle",s),l.set("arc",t);const i=e.get("fill");l._setDefault("fill",i),l._setDefault("stroke",i)}let r=y(s+t/2);const h=e.get("label");if(h&&(h.setPrivate("radius",a),h.setPrivate("innerRadius",n),h.set("labelAngle",r),"aligned"==h.get("textType"))){let e=a+h.get("radius",0),t=a*m(r);r>90&&r<=270?(h.isHidden()||h.isHiding()||this._lLabels.push({label:h,y:t}),e*=-1,e-=this.labelsContainer.get("paddingLeft",0),h.set("centerX",_),h.setPrivateRaw("left",!0)):(h.isHidden()||h.isHiding()||this._rLabels.push({label:h,y:t}),e+=this.labelsContainer.get("paddingRight",0),h.set("centerX",0),h.setPrivateRaw("left",!1)),h.set("x",e),h.set("y",a*m(r))}s+=t,this._updateTick(e)}))}}}_updateTick(e){const t=e.get("tick"),i=e.get("label"),s=e.get("slice"),a=t.get("location",1);if(t&&i&&s){const e=(s.get("shiftRadius",0)+s.get("radius",0))*s.get("scale",1)*a,n=i.get("labelAngle",0),l=g(n),r=m(n),h=this.labelsContainer,u=h.get("paddingLeft",0),o=h.get("paddingRight",0);let c=0,d=0;c=i.x(),d=i.y();let b=[];if(0!=c&&0!=d){if("circular"==i.get("textType")){const e=i.radius()-i.get("paddingBottom",0),t=i.get("labelAngle",0);c=e*g(t),d=e*m(t)}let t=-o;i.getPrivate("left")&&(t=u),b=[{x:s.x()+e*l,y:s.y()+e*r},{x:c+t,y:d},{x:c,y:d}]}t.set("points",b)}}_positionBullet(e){const t=e.get("sprite");if(t){const i=t.dataItem.get("slice");if(i){const s=i.get("innerRadius",0),a=i.get("radius",0),n=i.get("startAngle",0)+i.get("arc",0)*e.get("locationX",.5),l=s+(a-s)*e.get("locationY",.5);t.setAll({x:g(n)*l,y:m(n)*l})}}}}Object.defineProperty(ae,"className",{enumerable:!0,configurable:!0,writable:!0,value:"PieSeries"}),Object.defineProperty(ae,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:ie.classNames.concat([ae.className])});export{se as PieChartAm5,ae as PieSeriesAm5};
//# sourceMappingURL=p-008a8589.js.map