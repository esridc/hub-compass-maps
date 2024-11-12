import{ch as e,dQ as r,a as t}from"./p-028496e2.js";import{n as a}from"./p-82d7ddb5.js";import{e as s}from"./p-94b15954.js";import{s as n,t as c}from"./p-1f0b604e.js";import{e as i}from"./p-347800d3.js";const o=["esriGeometryPoint","esriGeometryMultipoint","esriGeometryPolyline","esriGeometryPolygon"];class l{constructor(e){this._options=e,this.geometryTypes=o,this._coordinatePtr=0,this._vertexDimension=0}createFeatureResult(){return new i}prepareFeatures(e){this._vertexDimension=2,e.hasZ&&this._vertexDimension++,e.hasM&&this._vertexDimension++}finishFeatureResult(t){if(!t?.features||!t.hasZ||!this._options.sourceSpatialReference||!t.spatialReference||e(t.spatialReference,this._options.sourceSpatialReference)||t.spatialReference.vcsWkid)return;const a=r(this._options.sourceSpatialReference)/r(t.spatialReference);if(1!==a)for(const e of t.features){if(!n(e))continue;const r=e.geometry.coords;for(let e=2;e<r.length;e+=3)r[e]*=a}}addFeature(e,r){e.features.push(r)}createFeature(){return new c}createSpatialReference(){return{wkid:0}}createGeometry(){return new s}addField(e,r){e.fields.push(r)}allocateCoordinates(e){e.coords.length=e.lengths.reduce(((e,r)=>e+r),0)*this._vertexDimension,this._coordinatePtr=0}addCoordinate(e,r){e.coords[this._coordinatePtr++]=r}addCoordinatePoint(e,r){e.coords.push(r)}addLength(e,r){e.lengths.push(r)}addQueryGeometry(e,r){e.queryGeometry=r.queryGeometry,e.queryGeometryType=r.queryGeometryType}createPointGeometry(){return new s}}const u=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString","esriFieldTypeDate","esriFieldTypeOID","esriFieldTypeGeometry","esriFieldTypeBlob","esriFieldTypeRaster","esriFieldTypeGUID","esriFieldTypeGlobalID","esriFieldTypeXML","esriFieldTypeBigInteger","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"],f=["sqlTypeBigInt","sqlTypeBinary","sqlTypeBit","sqlTypeChar","sqlTypeDate","sqlTypeDecimal","sqlTypeDouble","sqlTypeFloat","sqlTypeGeometry","sqlTypeGUID","sqlTypeInteger","sqlTypeLongNVarchar","sqlTypeLongVarbinary","sqlTypeLongVarchar","sqlTypeNChar","sqlTypeNVarchar","sqlTypeOther","sqlTypeReal","sqlTypeSmallInt","sqlTypeSqlXml","sqlTypeTime","sqlTypeTimestamp","sqlTypeTimestamp2","sqlTypeTinyInt","sqlTypeVarbinary","sqlTypeVarchar"],y=["upperLeft","lowerLeft"];function p(e){return e>=u.length?null:u[e]}function b(e){return e>=f.length?null:f[e]}function d(e){return e>=y.length?null:y[e]}function k(e,r){return r>=e.geometryTypes.length?null:e.geometryTypes[r]}function T(e,r,t){const a=3,s=e.asUnsafe(),n=r.createPointGeometry(t);for(;s.next();)switch(s.tag()){case a:{const e=s.getUInt32(),t=s.pos()+e;let a=0;for(;s.pos()<t;)r.addCoordinatePoint(n,s.getSInt64(),a++);break}default:s.skip()}return n}function h(e,r,t){const a=2,s=3,n=e.asUnsafe(),c=r.createGeometry(t),i=2+(t.hasZ?1:0)+(t.hasM?1:0);for(;n.next();)switch(n.tag()){case a:{const e=n.getUInt32(),t=n.pos()+e;let a=0;for(;n.pos()<t;)r.addLength(c,n.getUInt32(),a++);break}case s:{const e=n.getUInt32(),t=n.pos()+e;let a=0;for(r.allocateCoordinates(c);n.pos()<t;)r.addCoordinate(c,n.getSInt64(),a),a++,a===i&&(a=0);break}default:n.skip()}return c}function m(e){const r=1,t=2,a=3,n=e.asUnsafe(),c=new s;let i="esriGeometryPoint";for(;n.next();)switch(n.tag()){case t:{const e=n.getUInt32(),r=n.pos()+e;for(;n.pos()<r;)c.lengths.push(n.getUInt32());break}case a:{const e=n.getUInt32(),r=n.pos()+e;for(;n.pos()<r;)c.coords.push(n.getSInt64());break}case r:i=o[n.getEnum()];break;default:n.skip()}return{queryGeometry:c,queryGeometryType:i}}function q(e){const r=1,t=2,a=3,s=4,n=5,c=6,i=7,o=8,l=9,u=e.asUnsafe();for(;u.next();)switch(u.tag()){case r:return u.getString();case t:return u.getFloat();case a:return u.getDouble();case s:return u.getSInt32();case n:return u.getUInt32();case c:return u.getInt64();case i:return u.getUInt64();case o:return u.getSInt64();case l:return u.getBool();default:return u.skip(),null}return null}function w(e){const r=1,t=2,a=3,s=4,n=5,c=6,i=e.asUnsafe(),o={type:p(0)};for(;i.next();)switch(i.tag()){case r:o.name=i.getString();break;case t:o.type=p(i.getEnum());break;case a:o.alias=i.getString();break;case s:o.sqlType=b(i.getEnum());break;case n:i.skip();break;case c:o.defaultValue=i.getString();break;default:i.skip()}return o}function F(e){const r=1,t=2,a={},s=e.asUnsafe();for(;s.next();)switch(s.tag()){case r:a.name=s.getString();break;case t:a.isSystemMaintained=s.getBool();break;default:s.skip()}return a}function g(e,r,t,a){const s=1,n=2,c=4,i=r.createFeature(t);let o=0;for(;e.next();)switch(e.tag()){case s:{const r=a[o++].name;i.attributes[r]=e.processMessage(q);break}case n:i.geometry=e.processMessageWithArgs(h,r,t);break;case c:i.centroid=e.processMessageWithArgs(T,r,t);break;default:e.skip()}return i}function G(e){const r=1,t=2,a=3,s=4,n=[1,1,1,1],c=e.asUnsafe();for(;c.next();)switch(c.tag()){case r:n[0]=c.getDouble();break;case t:n[1]=c.getDouble();break;case s:n[2]=c.getDouble();break;case a:n[3]=c.getDouble();break;default:c.skip()}return n}function D(e){const r=1,t=2,a=3,s=4,n=[0,0,0,0],c=e.asUnsafe();for(;c.next();)switch(c.tag()){case r:n[0]=c.getDouble();break;case t:n[1]=c.getDouble();break;case s:n[2]=c.getDouble();break;case a:n[3]=c.getDouble();break;default:c.skip()}return n}function I(e){const r=1,t=2,a=3,s={originPosition:d(0)},n=e.asUnsafe();for(;n.next();)switch(n.tag()){case r:s.originPosition=d(n.getEnum());break;case t:s.scale=n.processMessage(G);break;case a:s.translate=n.processMessage(D);break;default:n.skip()}return s}function P(e){const r=1,t=2,a=3,s={},n=e.asUnsafe();for(;n.next();)switch(n.tag()){case r:s.shapeAreaFieldName=n.getString();break;case t:s.shapeLengthFieldName=n.getString();break;case a:s.units=n.getString();break;default:n.skip()}return s}function L(e,r){const t=1,a=2,s=3,n=4,c=5,i=r.createSpatialReference();for(;e.next();)switch(e.tag()){case t:i.wkid=e.getUInt32();break;case c:i.wkt=e.getString();break;case a:i.latestWkid=e.getUInt32();break;case s:i.vcsWkid=e.getUInt32();break;case n:i.latestVcsWkid=e.getUInt32();break;default:e.skip()}return i}function S(e,r){const t=1,a=2,s=3,n=4,c=5,i=7,o=8,l=9,u=10,f=11,y=12,p=13,b=15,d=r.createFeatureResult(),T=e.asUnsafe();d.geometryType=k(r,0);let h=!1;for(;T.next();)switch(T.tag()){case t:d.objectIdFieldName=T.getString();break;case s:d.globalIdFieldName=T.getString();break;case n:d.geohashFieldName=T.getString();break;case c:d.geometryProperties=T.processMessage(P);break;case i:d.geometryType=k(r,T.getEnum());break;case o:d.spatialReference=T.processMessageWithArgs(L,r);break;case u:d.hasZ=T.getBool();break;case f:d.hasM=T.getBool();break;case y:d.transform=T.processMessage(I);break;case l:d.exceededTransferLimit=T.getBool();break;case p:r.addField(d,T.processMessage(w));break;case b:h||(r.prepareFeatures(d),h=!0),r.addFeature(d,T.processMessageWithArgs(g,r,d,d.fields));break;case a:d.uniqueIdField=T.processMessage(F);break;default:T.skip()}return r.finishFeatureResult(d),d}function V(e,r){const t=1,a=4,s={};let n=null;for(;e.next();)switch(e.tag()){case a:n=e.processMessageWithArgs(m);break;case t:s.featureResult=e.processMessageWithArgs(S,r);break;default:e.skip()}return null!=n&&s.featureResult&&r.addQueryGeometry(s,n),s}function B(e,r){try{const t=2,s=new a(new Uint8Array(e),new DataView(e)),n={};for(;s.next();)if(s.tag()===t)n.queryResult=s.processMessageWithArgs(V,r);else s.skip();return n}catch(e){throw new t("query:parsing-pbf","Error while parsing FeatureSet PBF payload",{error:e})}}function j(e,r){const t=B(e,r),a=t.queryResult.featureResult,s=t.queryResult.queryGeometry,n=t.queryResult.queryGeometryType;if(a&&a.features&&a.features.length&&a.objectIdFieldName){const e=a.objectIdFieldName;for(const r of a.features)r.attributes&&(r.objectId=r.attributes[e])}return a&&(a.queryGeometry=s,a.queryGeometryType=n),a}export{l as a,w as b,I as h,j as t};
//# sourceMappingURL=p-0120bda4.js.map