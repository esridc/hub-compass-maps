class t{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(t,s){return this._outer.get(t)?.get(s)}getInner(t){return this._outer.get(t)}set(t,s,e){const r=this._outer.get(t);r?r.set(s,e):this._outer.set(t,new Map([[s,e]]))}delete(t,s){const e=this._outer.get(t);e&&(e.delete(s),0===e.size&&this._outer.delete(t))}forEach(t){this._outer.forEach(((s,e)=>t(s,e)))}forAll(t){for(const s of this._outer.values())for(const e of s.values())t(e)}}export{t};
//# sourceMappingURL=p-af33d18c.js.map