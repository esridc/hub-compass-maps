import{Y as e,a as r,cL as n,cW as t,cX as i}from"./p-3013819f.js";import"./p-3b51db5e.js";async function o(t=null,i){if(e.geometryServiceUrl)return e.geometryServiceUrl;if(!t)throw new r("internal:geometry-service-url-not-configured");let o;o="portal"in t?t.portal||n.getDefault():t,await o.load({signal:i});const a=o.helperServices?.geometry?.url;if(!a)throw new r("internal:geometry-service-url-not-configured");return a}async function a(e,n,a=null,s){const c=await o(a,s),l=new t;l.geometries=[e],l.outSpatialReference=n;const f=await i(c,l,{signal:s});if(f&&Array.isArray(f)&&1===f.length)return f[0];throw new r("internal:geometry-service-projection-failed")}export{o as getGeometryServiceURL,a as projectGeometry};
//# sourceMappingURL=p-7f617485.js.map