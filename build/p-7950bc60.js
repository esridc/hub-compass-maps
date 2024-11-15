import{n as e,m as i,a as r}from"./p-4295487d.js";import{iU as t,h3 as n,E as l}from"./p-aad64c9f.js";var o,s;function y(e){return t.fromJSON(e.toJSON())}function p(e){return e.toJSON?e.toJSON():e}function u(e){return e instanceof Date}function a(e){return e instanceof n.DateTime}function c(e){return e instanceof i}function m(e){return e instanceof r}function d(i){return i instanceof e}function f(e){if(null==e)return null;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":return 109404;case"miles":case"mile":return 109439;case"kilometers":case"kilometer":case"km":return 109414}return null}function T(e){if(null==e)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new l({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null}function F(e){if(null==e)return null;if("number"==typeof e)return e;if("number"==typeof e)return e;switch(e.toLowerCase()){case"meters":case"meter":return 9001;case"miles":case"mile":return 9093;case"kilometers":case"kilometer":case"km":return 9036}return null}!function(e){e[e.Standardised=0]="Standardised",e[e.StandardisedNoInterval=1]="StandardisedNoInterval",e[e.SqlServer=2]="SqlServer",e[e.Oracle=3]="Oracle",e[e.Postgres=4]="Postgres",e[e.PGDB=5]="PGDB",e[e.FILEGDB=6]="FILEGDB",e[e.NotEvaluated=7]="NotEvaluated"}(o||(o={})),function(e){e[e.InFeatureSet=0]="InFeatureSet",e[e.NotInFeatureSet=1]="NotInFeatureSet",e[e.Unknown=2]="Unknown"}(s||(s={}));const g=1e3;const G={point:"point",polygon:"polygon",polyline:"polyline",multipoint:"multipoint",extent:"extent",esriGeometryPoint:"point",esriGeometryPolygon:"polygon",esriGeometryPolyline:"polyline",esriGeometryMultipoint:"multipoint",esriGeometryEnvelope:"extent",envelope:"extent"},b={point:"esriGeometryPoint",polygon:"esriGeometryPolygon",polyline:"esriGeometryPolyline",multipoint:"esriGeometryMultipoint",extent:"esriGeometryEnvelope",esriGeometryPoint:"esriGeometryPoint",esriGeometryPolygon:"esriGeometryPolygon",esriGeometryPolyline:"esriGeometryPolyline",esriGeometryMultipoint:"esriGeometryMultipoint",esriGeometryEnvelope:"esriGeometryEnvelope",envelope:"esriGeometryEnvelope"},v={"small-integer":"esriFieldTypeSmallInteger",integer:"esriFieldTypeInteger",long:"esriFieldTypeLong",single:"esriFieldTypeSingle",double:"esriFieldTypeDouble",string:"esriFieldTypeString",date:"esriFieldTypeDate","date-only":"esriFieldTypeDateOnly","time-only":"esriFieldTypeTimeOnly","timestamp-offset":"esriFieldTypeTimestampOffset",oid:"esriFieldTypeOID",geometry:"esriFieldTypeGeometry",blob:"esriFieldTypeBlob",raster:"esriFieldTypeRaster",guid:"esriFieldTypeGUID","global-id":"esriFieldTypeGlobalID",xml:"esriFieldTypeXML","big-integer":"esriFieldTypeBigInteger",esriFieldTypeSmallInteger:"esriFieldTypeSmallInteger",esriFieldTypeInteger:"esriFieldTypeInteger",esriFieldTypeLong:"esriFieldTypeLong",esriFieldTypeSingle:"esriFieldTypeSingle",esriFieldTypeDouble:"esriFieldTypeDouble",esriFieldTypeString:"esriFieldTypeString",esriFieldTypeDate:"esriFieldTypeDate",esriFieldTypeDateOnly:"esriFieldTypeDateOnly",esriFieldTypeTimeOnly:"esriFieldTypeTimeOnly",esriFieldTypeTimestampOffset:"esriFieldTypeTimestampOffset",esriFieldTypeOID:"esriFieldTypeOID",esriFieldTypeGeometry:"esriFieldTypeGeometry",esriFieldTypeBlob:"esriFieldTypeBlob",esriFieldTypeRaster:"esriFieldTypeRaster",esriFieldTypeGUID:"esriFieldTypeGUID",esriFieldTypeGlobalID:"esriFieldTypeGlobalID",esriFieldTypeXML:"esriFieldTypeXML",esriFieldTypeBigInteger:"esriFieldTypeBigInteger"};function I(e){return void 0===e?"":e=(e=(e=e.replace(/\/featureserver\/[0-9]*/i,"/FeatureServer")).replace(/\/mapserver\/[0-9]*/i,"/MapServer")).split("?")[0]}function D(e,i){i||(i={}),"function"==typeof i&&(i={cmp:i});const r="boolean"==typeof i.cycles&&i.cycles,t=i.cmp&&(n=i.cmp,function(e){return function(i,r){const t={key:i,value:e[i]},l={key:r,value:e[r]};return n(t,l)}});var n;const l=[];return function e(i){if(i?.toJSON&&"function"==typeof i.toJSON&&(i=i.toJSON()),void 0===i)return;if("number"==typeof i)return isFinite(i)?""+i:"null";if("object"!=typeof i)return JSON.stringify(i);let n,o;if(Array.isArray(i)){for(o="[",n=0;n<i.length;n++)n&&(o+=","),o+=e(i[n])||"null";return o+"]"}if(null===i)return"null";if(l.includes(i)){if(r)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}const s=l.push(i)-1,y=Object.keys(i).sort(t?.(i));for(o="",n=0;n<y.length;n++){const r=y[n],t=e(i[r]);t&&(o&&(o+=","),o+=JSON.stringify(r)+":"+t)}return l.splice(s,1),"{"+o+"}"}(e)}function S(e){switch(e.type){case"catalog":case"csv":case"feature":case"geojson":case"oriented-imagery":case"subtype-group":case"wfs":return!0;default:return!1}}function O(e){switch(e.type){case"catalog-footprint":case"subtype-sublayer":return!0;default:return S(e)}}export{g as D,v as E,d as F,D as J,S as M,G as N,f as O,m as T,F as b,a as d,u as f,c as g,O as j,I as k,o as l,s,p as u,T as v,b as w,y};
//# sourceMappingURL=p-7950bc60.js.map