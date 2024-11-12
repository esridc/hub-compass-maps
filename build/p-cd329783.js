import{dN as t,b3 as e,dA as s,b_ as i}from"./p-028496e2.js";import{p as r,r as n}from"./p-854d8fad.js";import{f as a}from"./p-c439e241.js";function h(t,e){return e}function o(t,e,s,i){switch(s){case 0:return d(t,e+i,0);case 1:return"lowerLeft"===t.originPosition?d(t,e+i,1):f(t,e+i,1)}}function l(t,e,s,i){return 2===s?d(t,e,2):o(t,e,s,i)}function c(t,e,s,i){return 2===s?0===e?0:d(t,e,3):o(t,e,s,i)}function u(t,e,s,i){return 3===s?0===e?0:d(t,e,3):l(t,e,s,i)}function d({translate:t,scale:e},s,i){return t[i]+s*e[i]}function f({translate:t,scale:e},s,i){return t[i]-s*e[i]}class y{constructor(t){this._options=t,this.geometryTypes=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"],this._previousCoordinate=[0,0],this._transform=null,this._applyTransform=h,this._lengths=[],this._currentLengthIndex=0,this._toAddInCurrentPath=0,this._vertexDimension=0,this._mValueOffset=null,this._coordinateBuffer=null,this._coordinateBufferPtr=0,this._attributesConstructor=class{}}createFeatureResult(){return{fields:[],features:[]}}finishFeatureResult(e){if(this._options.applyTransform&&(e.transform=null),this._attributesConstructor=class{},this._coordinateBuffer=null,this._lengths.length=0,!e.hasZ)return;const s=t(e.geometryType,this._options.sourceSpatialReference,e.spatialReference);if(null!=s)for(const t of e.features)s(t.geometry)}createSpatialReference(){return{}}addField(t,s){const i=t.fields;e(i),i.push(s);const r=i.map((t=>t.name));this._attributesConstructor=function(){for(const t of r)this[t]=null}}addFeature(t,e){t.features.push(e)}prepareFeatures(t){switch(this._transform=t.transform,this._options.applyTransform&&t.transform&&(this._applyTransform=this._deriveApplyTransform(t)),this._mValueOffset=null,this._vertexDimension=2,t.hasZ&&this._vertexDimension++,t.hasM&&(this._mValueOffset=this._vertexDimension,this._vertexDimension++),t.geometryType){case"esriGeometryPoint":this.addCoordinate=(t,e,s)=>this.addCoordinatePoint(t,e,s),this.createGeometry=t=>this.createPointGeometry(t);break;case"esriGeometryPolygon":this.addCoordinate=(t,e,s)=>this._addCoordinatePolygon(t,e,s),this.createGeometry=t=>this._createPolygonGeometry(t);break;case"esriGeometryPolyline":this.addCoordinate=(t,e,s)=>this._addCoordinatePolyline(t,e,s),this.createGeometry=t=>this._createPolylineGeometry(t);break;case"esriGeometryMultipoint":this.addCoordinate=(t,e,s)=>this._addCoordinateMultipoint(t,e,s),this.createGeometry=t=>this._createMultipointGeometry(t)}}createFeature(){return this._lengths.length=0,this._currentLengthIndex=0,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0,this._coordinateBuffer=null,this._coordinateBufferPtr=0,{attributes:new this._attributesConstructor}}allocateCoordinates(){}addLength(t,e,s){0===this._lengths.length&&(this._toAddInCurrentPath=e),this._lengths.push(e)}addQueryGeometry(t,e){const{queryGeometry:s,queryGeometryType:i}=e,a=r(s.clone(),s,!1,!1,this._transform),h=n(a,i,!1,!1);t.queryGeometryType=i,t.queryGeometry={...h}}createPointGeometry(t){const e={x:0,y:0,spatialReference:t.spatialReference};return t.hasZ&&(e.z=0),t.hasM&&(e.m=0),e}addCoordinatePoint(t,e,s){const i=this._transform;switch(e=this._applyTransform(i,e,s,0),s){case 0:t.x=e;break;case 1:t.y=e;break;case 2:"z"in t?t.z=e:t.m=e;break;case 3:t.m=e}}_transformPathLikeValue(t,e){let s=0;e<=1&&(s=this._previousCoordinate[e],this._previousCoordinate[e]+=t);const i=this._transform;return null===this._mValueOffset||0!==t||e%this._mValueOffset?this._applyTransform(i,t,e,s):0}_addCoordinatePolyline(t,e,s){this._dehydratedAddPointsCoordinate(t.paths,e,s)}_addCoordinatePolygon(t,e,s){this._dehydratedAddPointsCoordinate(t.rings,e,s)}_addCoordinateMultipoint(t,e,s){0===s&&t.points.push([]);const i=this._transformPathLikeValue(e,s);t.points[t.points.length-1].push(i)}_createPolygonGeometry(t){return{rings:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createPolylineGeometry(t){return{paths:[[]],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_createMultipointGeometry(t){return{points:[],spatialReference:t.spatialReference,hasZ:!!t.hasZ,hasM:!!t.hasM}}_dehydratedAddPointsCoordinate(t,e,s){0===s&&0==this._toAddInCurrentPath--&&(t.push([]),this._toAddInCurrentPath=this._lengths[++this._currentLengthIndex]-1,this._previousCoordinate[0]=0,this._previousCoordinate[1]=0);const i=this._transformPathLikeValue(e,s),r=t[t.length-1];0===s&&(this._coordinateBufferPtr=0,this._coordinateBuffer=new Array(this._vertexDimension),r.push(this._coordinateBuffer)),this._coordinateBuffer[this._coordinateBufferPtr++]=i}_deriveApplyTransform(t){const{hasZ:e,hasM:s}=t;return e&&s?u:e?l:s?c:o}}async function p(t,e,r){const n=s(t),h={...r},o=i.from(e),l=!o.quantizationParameters,{data:c}=await a(n,o,new y({sourceSpatialReference:o.sourceSpatialReference,applyTransform:l}),h);return c}export{p as n};
//# sourceMappingURL=p-cd329783.js.map