import{fe as t,fd as s}from"./p-aad64c9f.js";class i{constructor(i,h,e,r){this.transformedX=0,this.transformedY=0,this.center=t(i,h),this.centerT=s(),this.halfWidth=e/2,this.halfHeight=r/2,this.width=e,this.height=r}get x(){return this.center[0]}get y(){return this.center[1]}get blX(){return this.center[0]+this.halfWidth}get blY(){return this.center[1]+this.halfHeight}get trX(){return this.center[0]-this.halfWidth}get trY(){return this.center[1]-this.halfHeight}get xmin(){return this.x-this.halfWidth}get xmax(){return this.x+this.halfWidth}get ymin(){return this.y-this.halfHeight}get ymax(){return this.y+this.halfHeight}set x(t){this.center[0]=t}set y(t){this.center[1]=t}clone(){return new i(this.x,this.y,this.width,this.height)}serialize(t){return t.writeF32(this.center[0]),t.writeF32(this.center[1]),t.push(this.width),t.push(this.height),t}findCollisionDelta(t,s=4){const i=Math.abs(t.centerT[0]-this.centerT[0]),h=Math.abs(t.centerT[1]-this.centerT[1]),e=(t.halfWidth+this.halfWidth+s)/i,r=(t.halfHeight+this.halfHeight+s)/h,n=Math.min(e,r);return Math.log2(n)}extend(t){const s=Math.min(this.xmin,t.xmin),i=Math.min(this.ymin,t.ymin),h=Math.max(this.xmax,t.xmax)-s,e=Math.max(this.ymax,t.ymax)-i,r=s+h/2,n=i+e/2;this.width=h,this.height=e,this.halfWidth=h/2,this.halfHeight=e/2,this.x=r,this.y=n}static deserialize(t){const s=t.readF32(),h=t.readF32(),e=t.readInt32(),r=t.readInt32();return new i(s,h,e,r)}}export{i};
//# sourceMappingURL=p-a0004a96.js.map