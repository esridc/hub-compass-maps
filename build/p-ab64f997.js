import{eT as t,eU as s}from"./p-aad64c9f.js";class i{constructor(s){this._observable=new t,this._set=new Set(s)}get size(){return s(this._observable),this._set.size}add(t){const s=this._set.size;return this._set.add(t),this._set.size!==s&&this._observable.notify(),this}clear(){this._set.size>0&&(this._set.clear(),this._observable.notify())}delete(t){const s=this._set.delete(t);return s&&this._observable.notify(),s}entries(){return s(this._observable),this._set.entries()}forEach(t,i){s(this._observable),this._set.forEach(((s,h)=>t.call(i,s,h,this)),i)}has(t){return s(this._observable),this._set.has(t)}keys(){return s(this._observable),this._set.keys()}values(){return s(this._observable),this._set.values()}[Symbol.iterator](){return s(this._observable),this._set[Symbol.iterator]()}get[Symbol.toStringTag](){return this._set[Symbol.toStringTag]}}export{i as s};
//# sourceMappingURL=p-ab64f997.js.map