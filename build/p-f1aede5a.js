import{cc as t}from"./p-3013819f.js";const s=512;var i,h;!function(t){t[t.Unknown=0]="Unknown",t[t.Point=1]="Point",t[t.LineString=2]="LineString",t[t.Polygon=3]="Polygon"}(i||(i={}));class n{constructor(t,s){this.x=t,this.y=s}clone(){return new n(this.x,this.y)}equals(t,s){return t===this.x&&s===this.y}isEqual(t){return t.x===this.x&&t.y===this.y}setCoords(t,s){return this.x=t,this.y=s,this}normalize(){const t=this.x,s=this.y,i=Math.sqrt(t*t+s*s);return this.x/=i,this.y/=i,this}rightPerpendicular(){const t=this.x;return this.x=this.y,this.y=-t,this}leftPerpendicular(){const t=this.x;return this.x=-this.y,this.y=t,this}move(t,s){return this.x+=t,this.y+=s,this}assign(t){return this.x=t.x,this.y=t.y,this}assignAdd(t,s){return this.x=t.x+s.x,this.y=t.y+s.y,this}assignSub(t,s){return this.x=t.x-s.x,this.y=t.y-s.y,this}rotate(t,s){const i=this.x,h=this.y;return this.x=i*t-h*s,this.y=i*s+h*t,this}scale(t){return this.x*=t,this.y*=t,this}length(){const t=this.x,s=this.y;return Math.sqrt(t*t+s*s)}sub(t){return this.x-=t.x,this.y-=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}static distance(t,s){const i=s.x-t.x,h=s.y-t.y;return Math.sqrt(i*i+h*h)}static add(t,s){return new n(t.x+s.x,t.y+s.y)}static sub(t,s){return new n(t.x-s.x,t.y-s.y)}}class e{constructor(t,s,i){this.ratio=t,this.x=s,this.y=i}}class r{constructor(t,i,h,n=8,e=8){this._lines=[],this._starts=[],this.validateTessellation=!0,this._pixelRatio=n,this._pixelMargin=e,this._tileSize=s*n,this._dz=t,this._yPos=i,this._xPos=h}setPixelMargin(t){t!==this._pixelMargin&&(this._pixelMargin=t,this.setExtent(this._extent))}setExtent(t){this._extent=t,this._finalRatio=this._tileSize/t*(1<<this._dz);let s=this._pixelRatio*this._pixelMargin;s/=this._finalRatio;const i=t>>this._dz;s>i&&(s=i),this._margin=s,this._xmin=i*this._xPos-s,this._ymin=i*this._yPos-s,this._xmax=this._xmin+i+2*s,this._ymax=this._ymin+i+2*s}reset(t){this._type=t,this._lines=[],this._starts=[],this._line=null,this._start=0}moveTo(t,s){this._pushLine(),this._prevIsIn=this._isIn(t,s),this._moveTo(t,s,this._prevIsIn),this._prevPt=new n(t,s),this._firstPt=new n(t,s),this._dist=0}lineTo(t,s){const i=this._isIn(t,s),h=new n(t,s),r=n.distance(this._prevPt,h);let o,c,a,l,u,f,w,M;if(i)this._prevIsIn?this._lineTo(t,s,!0):(o=this._prevPt,c=h,a=this._intersect(c,o),this._start=this._dist+r*(1-this._r),this._lineTo(a.x,a.y,!0),this._lineTo(c.x,c.y,!0));else if(this._prevIsIn)c=this._prevPt,o=h,a=this._intersect(c,o),this._lineTo(a.x,a.y,!0),this._lineTo(o.x,o.y,!1);else{const t=this._prevPt,s=h;if(t.x<=this._xmin&&s.x<=this._xmin||t.x>=this._xmax&&s.x>=this._xmax||t.y<=this._ymin&&s.y<=this._ymin||t.y>=this._ymax&&s.y>=this._ymax)this._lineTo(s.x,s.y,!1);else{const i=[];if((t.x<this._xmin&&s.x>this._xmin||t.x>this._xmin&&s.x<this._xmin)&&(l=(this._xmin-t.x)/(s.x-t.x),M=t.y+l*(s.y-t.y),M<=this._ymin?f=!1:M>=this._ymax?f=!0:i.push(new e(l,this._xmin,M))),(t.x<this._xmax&&s.x>this._xmax||t.x>this._xmax&&s.x<this._xmax)&&(l=(this._xmax-t.x)/(s.x-t.x),M=t.y+l*(s.y-t.y),M<=this._ymin?f=!1:M>=this._ymax?f=!0:i.push(new e(l,this._xmax,M))),(t.y<this._ymin&&s.y>this._ymin||t.y>this._ymin&&s.y<this._ymin)&&(l=(this._ymin-t.y)/(s.y-t.y),w=t.x+l*(s.x-t.x),w<=this._xmin?u=!1:w>=this._xmax?u=!0:i.push(new e(l,w,this._ymin))),(t.y<this._ymax&&s.y>this._ymax||t.y>this._ymax&&s.y<this._ymax)&&(l=(this._ymax-t.y)/(s.y-t.y),w=t.x+l*(s.x-t.x),w<=this._xmin?u=!1:w>=this._xmax?u=!0:i.push(new e(l,w,this._ymax))),0===i.length)u?f?this._lineTo(this._xmax,this._ymax,!0):this._lineTo(this._xmax,this._ymin,!0):f?this._lineTo(this._xmin,this._ymax,!0):this._lineTo(this._xmin,this._ymin,!0);else if(i.length>1&&i[0].ratio>i[1].ratio)this._start=this._dist+r*i[1].ratio,this._lineTo(i[1].x,i[1].y,!0),this._lineTo(i[0].x,i[0].y,!0);else{this._start=this._dist+r*i[0].ratio;for(let t=0;t<i.length;t++)this._lineTo(i[t].x,i[t].y,!0)}this._lineTo(s.x,s.y,!1)}}this._dist+=r,this._prevIsIn=i,this._prevPt=h}close(){if(this._line.length>2){const t=this._firstPt,s=this._prevPt;t.x===s.x&&t.y===s.y||this.lineTo(t.x,t.y);const i=this._line;let h=i.length;for(;h>=4&&(i[0].x===i[1].x&&i[0].x===i[h-2].x||i[0].y===i[1].y&&i[0].y===i[h-2].y);)i.pop(),i[0].x=i[h-2].x,i[0].y=i[h-2].y,--h}}result(t=!0){return this._pushLine(),0===this._lines.length?null:(this._type===i.Polygon&&t&&c.simplify(this._tileSize,this._margin*this._finalRatio,this._lines),this._lines)}resultWithStarts(){if(this._type!==i.LineString)throw new Error("Only valid for lines");this._pushLine();const t=this._lines,s=t.length;if(0===s)return null;const h=[];for(let i=0;i<s;i++)h.push({line:t[i],start:this._starts[i]||0});return h}_isIn(t,s){return t>=this._xmin&&t<=this._xmax&&s>=this._ymin&&s<=this._ymax}_intersect(t,s){let i,h,e;if(s.x>=this._xmin&&s.x<=this._xmax)h=s.y<=this._ymin?this._ymin:this._ymax,e=(h-t.y)/(s.y-t.y),i=t.x+e*(s.x-t.x);else if(s.y>=this._ymin&&s.y<=this._ymax)i=s.x<=this._xmin?this._xmin:this._xmax,e=(i-t.x)/(s.x-t.x),h=t.y+e*(s.y-t.y);else{h=s.y<=this._ymin?this._ymin:this._ymax,i=s.x<=this._xmin?this._xmin:this._xmax;const n=(i-t.x)/(s.x-t.x),r=(h-t.y)/(s.y-t.y);n<r?(e=n,h=t.y+n*(s.y-t.y)):(e=r,i=t.x+r*(s.x-t.x))}return this._r=e,new n(i,h)}_pushLine(){this._line&&(this._type===i.Point?this._line.length>0&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===i.LineString?this._line.length>1&&(this._lines.push(this._line),this._starts.push(this._start)):this._type===i.Polygon&&this._line.length>3&&(this._lines.push(this._line),this._starts.push(this._start))),this._line=[],this._start=0}_moveTo(t,s,h){this._type!==i.Polygon?h&&(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line.push(new n(t,s))):(h||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),s<this._ymin&&(s=this._ymin),s>this._ymax&&(s=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line.push(new n(t,s)),this._isH=!1,this._isV=!1)}_lineTo(t,s,h){let e,r;if(this._type!==i.Polygon)if(h){if(t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line.length>0&&(e=this._line[this._line.length-1],e.equals(t,s)))return;this._line.push(new n(t,s))}else this._line&&this._line.length>0&&this._pushLine();else if(h||(t<this._xmin&&(t=this._xmin),t>this._xmax&&(t=this._xmax),s<this._ymin&&(s=this._ymin),s>this._ymax&&(s=this._ymax)),t=Math.round((t-(this._xmin+this._margin))*this._finalRatio),s=Math.round((s-(this._ymin+this._margin))*this._finalRatio),this._line&&this._line.length>0){e=this._line[this._line.length-1];const i=e.x===t,h=e.y===s;if(i&&h)return;this._isH&&i||this._isV&&h?(e.x=t,e.y=s,r=this._line[this._line.length-2],r.x===t&&r.y===s?(this._line.pop(),this._line.length<=1?(this._isH=!1,this._isV=!1):(r=this._line[this._line.length-2],this._isH=r.x===t,this._isV=r.y===s)):(this._isH=r.x===t,this._isV=r.y===s)):(this._line.push(new n(t,s)),this._isH=i,this._isV=h)}else this._line.push(new n(t,s))}}class o{setExtent(t){this._ratio=4096===t?1:4096/t}get validateTessellation(){return this._ratio<1}reset(t){this._lines=[],this._line=null}moveTo(t,s){this._line&&this._lines.push(this._line),this._line=[];const i=this._ratio;this._line.push(new n(t*i,s*i))}lineTo(t,s){const i=this._ratio;this._line.push(new n(t*i,s*i))}close(){const t=this._line;t&&!t[0].isEqual(t[t.length-1])&&t.push(t[0])}result(){return this._line&&this._lines.push(this._line),0===this._lines.length?null:this._lines}}!function(t){t[t.sideLeft=0]="sideLeft",t[t.sideRight=1]="sideRight",t[t.sideTop=2]="sideTop",t[t.sideBottom=3]="sideBottom"}(h||(h={}));class c{static simplify(t,s,i){if(!i)return;const n=-s,e=t+s,r=-s,o=t+s,a=[],l=[],u=i.length;for(let t=0;t<u;++t){const s=i[t];if(!s||s.length<2)continue;let c,u=s[0];const f=s.length;for(let i=1;i<f;++i)c=s[i],u.x===c.x&&(u.x<=n&&(u.y>c.y?(a.push(t),a.push(i),a.push(h.sideLeft),a.push(-1)):(l.push(t),l.push(i),l.push(h.sideLeft),l.push(-1))),u.x>=e&&(u.y<c.y?(a.push(t),a.push(i),a.push(h.sideRight),a.push(-1)):(l.push(t),l.push(i),l.push(h.sideRight),l.push(-1)))),u.y===c.y&&(u.y<=r&&(u.x<c.x?(a.push(t),a.push(i),a.push(h.sideTop),a.push(-1)):(l.push(t),l.push(i),l.push(h.sideTop),l.push(-1))),u.y>=o&&(u.x>c.x?(a.push(t),a.push(i),a.push(h.sideBottom),a.push(-1)):(l.push(t),l.push(i),l.push(h.sideBottom),l.push(-1)))),u=c}if(0===a.length||0===l.length)return;c.fillParent(i,l,a),c.fillParent(i,a,l);const f=[];c.calcDeltas(f,l,a),c.calcDeltas(f,a,l),c.addDeltas(f,i)}static fillParent(t,s,i){const n=i.length,e=s.length;for(let r=0;r<e;r+=4){const e=s[r],o=s[r+1],c=s[r+2],l=t[e][o-1],u=t[e][o];let f=8092,w=-1;for(let s=0;s<n;s+=4){if(i[s+2]!==c)continue;const n=i[s],e=i[s+1],r=t[n][e-1],o=t[n][e];switch(c){case h.sideLeft:case h.sideRight:if(a(l.y,r.y,o.y)&&a(u.y,r.y,o.y)){const t=Math.abs(o.y-r.y);t<f&&(f=t,w=s)}break;case h.sideTop:case h.sideBottom:if(a(l.x,r.x,o.x)&&a(u.x,r.x,o.x)){const t=Math.abs(o.x-r.x);t<f&&(f=t,w=s)}}}s[r+3]=w}}static calcDeltas(t,s,i){const h=s.length;for(let n=0;n<h;n+=4){const h=[],e=c.calcDelta(n,s,i,h);t.push(s[n]),t.push(s[n+1]),t.push(s[n+2]),t.push(e)}}static calcDelta(t,s,i,h){const n=s[t+3];if(-1===n)return 0;const e=h.length;return e>1&&h[e-2]===n?0:(h.push(n),c.calcDelta(n,i,s,h)+1)}static addDeltas(t,s){const i=t.length;let n=0;for(let s=0;s<i;s+=4){const i=t[s+3];i>n&&(n=i)}for(let e=0;e<i;e+=4){const i=s[t[e]],r=t[e+1],o=n-t[e+3];switch(t[e+2]){case h.sideLeft:i[r-1].x-=o,i[r].x-=o,1===r&&(i[i.length-1].x-=o),r===i.length-1&&(i[0].x-=o);break;case h.sideRight:i[r-1].x+=o,i[r].x+=o,1===r&&(i[i.length-1].x+=o),r===i.length-1&&(i[0].x+=o);break;case h.sideTop:i[r-1].y-=o,i[r].y-=o,1===r&&(i[i.length-1].y-=o),r===i.length-1&&(i[0].y-=o);break;case h.sideBottom:i[r-1].y+=o,i[r].y+=o,1===r&&(i[i.length-1].y+=o),r===i.length-1&&(i[0].y+=o)}}}}const a=(t,s,i)=>t>=s&&t<=i||t>=i&&t<=s;const l=Number.POSITIVE_INFINITY,u=Math.PI,f=2*u,w=128/u,M=256/360,d=u/180,g=1/Math.LN2;function m(t,s){return(t%=s)>=0?t:t+s}function b(t){return m(t*w,256)}function p(t){return m(t*M,256)}function v(t){return Math.log(t)*g}function T(t,s,i){return t*(1-i)+s*i}const P=8,k=14,_=16;function x(t){return P+Math.max((t-k)*_,0)}function E(t,s,i){let h,n,e,r=0;for(const o of i){h=o.length;for(let i=1;i<h;++i){if(n=o[i-1],e=o[i],n.y>s==e.y>s)continue;(e.x-n.x)*(s-n.y)-(e.y-n.y)*(t-n.x)>0?r++:r--}}return 0!==r}function y(s,i,h,n){let e,r,o,c;const a=n*n;for(const n of h){const h=n.length;if(!(h<2)){e=n[0].x,r=n[0].y;for(let l=1;l<h;++l){if(o=n[l].x,c=n[l].y,t(s,i,e,r,o,c)<a)return!0;e=o,r=c}}}return!1}function D(t,s,i,h,n,e,r){const o=Math.max(h,Math.min(s,e))-s,c=Math.max(n,Math.min(i,r))-i;return o*o+c*c<=t*t}function L(t,s){if(0===s||Number.isNaN(s))return t;const i=[],h=new n(0,0),e=new n(0,0),r=new n(0,0);for(let o=0;o<t.length;o++){const c=t[o],a=[];for(let t=0;t<c.length;t++){const i=c[t-1],o=c[t],l=c[t+1];0===t?h.setCoords(0,0):h.assignSub(o,i).normalize().rightPerpendicular(),t===c.length-1?e.setCoords(0,0):e.assignSub(l,o).normalize().rightPerpendicular(),r.assignAdd(h,e).normalize();const u=r.x*e.x+r.y*e.y;0!==u&&r.scale(1/u),a.push(n.add(o,r.scale(s)))}i.push(a)}return i}function S(t,s,i,h){const e=new n(t[0],t[1]);if(e.scale(h),"viewport"===s){const t=-i*(Math.PI/180),s=Math.cos(t),h=Math.sin(t);e.rotate(s,h)}return e}export{E as I,y as N,L as P,o as _,m as a,S as b,f as c,x as d,r as e,b as f,v as g,n as h,i,p as l,u as o,T as p,l as r,d as s,D as w};
//# sourceMappingURL=p-f1aede5a.js.map