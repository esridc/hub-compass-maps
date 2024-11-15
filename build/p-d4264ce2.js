import{m as e}from"./p-4295487d.js";import{N as n,t,D as r,l as i}from"./p-448d8eb2.js";import{g as o,n as s,t as l,K as a,a as f,r as u,P as c,d as m,c as w,e as d,W as p,S as E,j as y,E as h,U as N,X as x,v as I,h as $,af as b,J as A,B as D,V as g}from"./p-63562f76.js";import{M as L,q as T,f as j,c as F,e as M,a as S,b as O,T as Z,E as k,N as C,O as H,L as z,B as R,d as G,R as U,k as W}from"./p-a5e68840.js";import{t as _}from"./p-11492679.js";import{l as v}from"./p-180be586.js";import{u as B,O as P}from"./p-cf77d7c5.js";import{y as J}from"./p-7950bc60.js";import{b as K,jj as V,ik as q,iU as X}from"./p-aad64c9f.js";import{Z as Y}from"./p-cea3971b.js";import"./p-875cbb57.js";import"./p-da522976.js";import"./p-aff89b86.js";import"./p-d492d39b.js";import"./p-1bb606f6.js";import"./p-4e3882f9.js";import"./p-2af77f97.js";function Q(e){if(1===e.length){if(h(e[0]))return i("distinct",e[0],-1);if(x(e[0]))return i("distinct",e[0].toArray(),-1)}return i("distinct",e,-1)}async function ee(e,n,t){const r=e.getVariables();if(r.length>0){const i=[];for(let e=0;e<r.length;e++){const o={name:r[e]};i.push(await n.evaluateIdentifier(t,o))}const o={};for(let e=0;e<r.length;e++)o[r[e]]=i[e];return e.parameters=o,e}return e}function ne(e,n,t=null){for(const t in e)if(t.toLowerCase()===n.toLowerCase())return e[t];return t}function te(e){if(null===e)return null;const n={type:ne(e,"type",""),name:ne(e,"name","")};if("range"===n.type)n.range=ne(e,"range",[]);else{n.codedValues=[];for(const t of ne(e,"codedValues",[]))n.codedValues.push({name:ne(t,"name",""),code:ne(t,"code",null)})}return n}function re(e){if(null===e)return null;const n={},t=ne(e,"wkt");null!==t&&(n.wkt=t);const r=ne(e,"wkid");return null!==r&&(n.wkid=r),n}function ie(e){if(null===e)return null;const n={hasZ:ne(e,"hasz",!1),hasM:ne(e,"hasm",!1)},t=ne(e,"spatialreference");null!=t&&(n.spatialReference=re(t));const r=ne(e,"x",null);if(null!==r)return n.x=r,n.y=ne(e,"y",null),n.hasZ&&(n.z=ne(e,"z",null)),n.hasM&&(n.m=ne(e,"m",null)),n;const i=ne(e,"rings",null);if(null!==i)return n.rings=i,n;const o=ne(e,"paths",null);if(null!==o)return n.paths=o,n;const s=ne(e,"points",null);if(null!==s)return n.points=s,n;for(const t of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const r=ne(e,t,null);null!==r&&(n[t]=r)}return n}function oe(e,n){for(const t of n)if(t===e)return!0;return!1}function se(e){return!!e.layerDefinition&&(!!e.featureSet&&(!1!==oe(e.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&(!1!==h(e.layerDefinition.fields)&&!1!==h(e.featureSet.features))))}function le(e){return"utc"===e?.toLowerCase()?"UTC":"unknown"===e?.toLowerCase()?"Unknown":e}function ae(i){"async"===i.mode&&(i.functions.timezone=function(t,r){return i.standardFunctionAsync(t,r,(async(i,d,p)=>{if(o(p,1,2,t,r),s(p[0]))return"Unknown";if(l(p[0]))return"Unknown";if(a(p[0])){if(await p[0].load(),1===p.length||null===p[1])return p[0].datesInUnknownTimezone?le("unknown"):le(p[0].dateFieldsTimeZone);if(!(p[1]instanceof n)||!1===p[1].hasField("type"))throw new f(t,u.InvalidParameter,r);const e=p[1].field("type");if(!1===c(e))throw new f(t,u.InvalidParameter,r);switch(m(e).toLowerCase()){case"preferredtimezone":return le(p[0].preferredTimeZone);case"editfieldsinfo":return le(p[0].editFieldsInfo?.timeZone??null);case"timeinfo":return le(p[0].timeInfo?.timeZone??null);case"field":if(p[1].hasField("fieldname")&&c(p[1].field("fieldname")))return le(p[0].fieldTimeZone(m(p[1].field("fieldname"))))}throw new f(t,u.InvalidParameter,r)}const E=w(p[0],D(t));if(null===E)return null;const y=E.timeZone;return"system"===y?e.systemTimeZoneCanonicalName:"utc"===y.toLowerCase()?"UTC":"unknown"===y.toLowerCase()?"Unknown":y}))},i.functions.sqltimestamp=function(e,n){return i.standardFunctionAsync(e,n,(async(t,r,i)=>{o(i,1,3,e,n);const s=i[0];if(d(s)){if(1===i.length)return s.toSQLWithKeyword();if(2===i.length)return s.changeTimeZone(m(i[1])).toSQLWithKeyword();throw new f(e,u.InvalidParameter,n)}if(l(s))return s.toSQLWithKeyword();if(a(s)){if(3!==i.length)throw new f(e,u.InvalidParameter,n);await s.load();const t=m(i[1]);if(l(i[2]))return i[2].toSQLWithKeyword();if(!1===d(i[2]))throw new f(e,u.InvalidParameter,n);const r=s.fieldTimeZone(t);return null===r?i[2].toSQLWithKeyword():i[2].changeTimeZone(r).toSQLWithKeyword()}throw new f(e,u.InvalidParameter,n)}))},i.signatures.push({name:"sqltimestamp",min:2,max:4}),i.functions.featuresetbyid=function(e,n){return i.standardFunctionAsync(e,n,((t,r,i)=>{if(o(i,2,4,e,n),p(i[0])){const t=m(i[1]);let r=y(i[2],null);const o=E(y(i[3],!0));if(null===r&&(r=["*"]),!1===h(r))throw new f(e,u.InvalidParameter,n);return i[0].featureSetById(t,o,r)}throw new f(e,u.InvalidParameter,n)}))},i.signatures.push({name:"featuresetbyid",min:2,max:4}),i.functions.getfeatureset=function(e,n){return i.standardFunctionAsync(e,n,(async(t,r,i)=>{if(o(i,1,2,e,n),N(i[0])){let n=y(i[1],"datasource");return null===n&&(n="datasource"),n=m(n).toLowerCase(),L(i[0].fullSchema(),n,e.lrucache,e.interceptor,e.spatialReference??null)}throw new f(e,u.InvalidParameter,n)}))},i.signatures.push({name:"getfeatureset",min:1,max:2}),i.functions.featuresetbyportalitem=function(e,n){return i.standardFunctionAsync(e,n,((r,i,s)=>{if(o(s,2,5,e,n),null===s[0])throw new f(e,u.PortalRequired,n);if(s[0]instanceof t){const t=m(s[1]),r=m(s[2]);let i=y(s[3],null);const o=E(y(s[4],!0));if(null===i&&(i=["*"]),!1===h(i))throw new f(e,u.InvalidParameter,n);let l;return l=e.services?.portal?e.services.portal:K.getDefault(),l=v(s[0],l),T(t,r,e.spatialReference??null,i,o,l,e.lrucache,e.interceptor)}if(!1===c(s[0]))throw new f(e,u.PortalRequired,n);const l=m(s[0]),a=m(s[1]);let w=y(s[2],null);const d=E(y(s[3],!0));if(null===w&&(w=["*"]),!1===h(w))throw new f(e,u.InvalidParameter,n);return T(l,a,e.spatialReference??null,w,d,e.services?.portal??K.getDefault(),e.lrucache,e.interceptor)}))},i.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),i.functions.featuresetbyname=function(e,n){return i.standardFunctionAsync(e,n,((t,r,i)=>{if(o(i,2,4,e,n),p(i[0])){const t=m(i[1]);let r=y(i[2],null);const o=E(y(i[3],!0));if(null===r&&(r=["*"]),!1===h(r))throw new f(e,u.InvalidParameter,n);return i[0].featureSetByName(t,o,r)}throw new f(e,u.InvalidParameter,n)}))},i.signatures.push({name:"featuresetbyname",min:2,max:4}),i.functions.featureset=function(e,t){return i.standardFunction(e,t,((r,i,s)=>{o(s,1,1,e,t);const l={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",hasM:!1,hasZ:!1,fields:[]},featureSet:{geometryType:"",features:[]}};if(c(s[0])){const e=JSON.parse(s[0]);void 0!==e.layerDefinition?(l.layerDefinition=e.layerDefinition,l.featureSet=e.featureSet,e.layerDefinition.spatialReference&&(l.layerDefinition.spatialReference=e.layerDefinition.spatialReference)):(l.featureSet.features=e.features,l.featureSet.geometryType=e.geometryType,l.layerDefinition.geometryType=l.featureSet.geometryType,l.layerDefinition.objectIdField=e.objectIdFieldName??"",l.layerDefinition.typeIdField=e.typeIdFieldName,l.layerDefinition.globalIdField=e.globalIdFieldName,l.layerDefinition.fields=e.fields,e.spatialReference&&(l.layerDefinition.spatialReference=e.spatialReference))}else{if(!(s[0]instanceof n))throw new f(e,u.InvalidParameter,t);{const n=JSON.parse(s[0].castToText(!0)),r=ne(n,"layerdefinition");if(null!==r){l.layerDefinition.geometryType=ne(r,"geometrytype",""),l.featureSet.geometryType=l.layerDefinition.geometryType,l.layerDefinition.globalIdField=ne(r,"globalidfield",""),l.layerDefinition.objectIdField=ne(r,"objectidfield",""),l.layerDefinition.typeIdField=ne(r,"typeidfield",""),l.layerDefinition.hasZ=!0===ne(r,"hasz",!1),l.layerDefinition.hasM=!0===ne(r,"hasm",!1);const e=ne(r,"spatialreference");e&&(l.layerDefinition.spatialReference=re(e));const t=[];for(const e of ne(r,"fields",[])){const n={name:ne(e,"name",""),alias:ne(e,"alias",""),type:ne(e,"type",""),nullable:ne(e,"nullable",!0),editable:ne(e,"editable",!0),length:ne(e,"length",null),domain:te(ne(e,"domain"))};t.push(n)}l.layerDefinition.fields=t;const i=ne(n,"featureset");if(i){const e={};for(const n of t)e[n.name.toLowerCase()]=n.name;for(const n of ne(i,"features",[])){const t={},r=ne(n,"attributes",{});for(const n in r)t[e[n.toLowerCase()]]=r[n];l.featureSet.features.push({attributes:t,geometry:ie(ne(n,"geometry"))})}}}else{l.layerDefinition.hasZ=!0===ne(n,"hasz",!1),l.layerDefinition.hasM=!0===ne(n,"hasm",!1),l.layerDefinition.geometryType=ne(n,"geometrytype",""),l.featureSet.geometryType=l.layerDefinition.geometryType,l.layerDefinition.objectIdField=ne(n,"objectidfieldname",""),l.layerDefinition.typeIdField=ne(n,"typeidfieldname","");const r=ne(n,"spatialreference");r&&(l.layerDefinition.spatialReference=re(r));const i=[],o=ne(n,"fields",null);if(!h(o))throw new f(e,u.InvalidParameter,t);for(const e of o){const n={name:ne(e,"name",""),alias:ne(e,"alias",""),type:ne(e,"type",""),nullable:ne(e,"nullable",!0),editable:ne(e,"editable",!0),length:ne(e,"length",null),domain:te(ne(e,"domain"))};i.push(n)}l.layerDefinition.fields=i;const s={};for(const e of i)s[e.name.toLowerCase()]=e.name;let a=ne(n,"features",null);if(h(a))for(const e of a){const n={},t=ne(e,"attributes",{});for(const e in t)n[s[e.toLowerCase()]]=t[e];l.featureSet.features.push({attributes:n,geometry:ie(ne(e,"geometry",null))})}else a=null,l.featureSet.features=a}}}if(!1===se(l))throw new f(e,u.InvalidParameter,t);return l.layerDefinition.geometryType||(l.layerDefinition.geometryType="esriGeometryNull"),j.create(l,e.spatialReference)}))},i.signatures.push({name:"featureset",min:1,max:1}),i.functions.filter=function(e,n){return i.standardFunctionAsync(e,n,(async(t,r,s)=>{if(o(s,2,2,e,n),h(s[0])||x(s[0])){const t=[];let r,i=s[0];if(i instanceof _&&(i=i.toArray()),!I(s[1]))throw new f(e,u.InvalidParameter,n);r=s[1].createFunction(e);for(const e of i){const n=r(e);V(n)?!0===await n&&t.push(e):!0===n&&t.push(e)}return t}if(a(s[0])){const n=await s[0].load(),t=Y.create(s[1],{fieldsIndex:n.getFieldsIndex(),timeZone:n.dateFieldsTimeZoneDefaultUTC}),r=t.getVariables();if(r.length>0){const n=[];for(let t=0;t<r.length;t++){const o={name:r[t]};n.push(await i.evaluateIdentifier(e,o))}const o={};for(let e=0;e<r.length;e++)o[r[e]]=n[e];return t.parameters=o,new F({parentfeatureset:s[0],whereclause:t})}return new F({parentfeatureset:s[0],whereclause:t})}throw new f(e,u.InvalidParameter,n)}))},i.signatures.push({name:"filter",min:2,max:2}),i.functions.orderby=function(e,n){return i.standardFunctionAsync(e,n,(async(t,r,i)=>{if(o(i,2,2,e,n),a(i[0])){const e=new M(i[1]);return new S({parentfeatureset:i[0],orderbyclause:e})}throw new f(e,u.InvalidParameter,n)}))},i.signatures.push({name:"orderby",min:2,max:2}),i.functions.top=function(e,n){return i.standardFunctionAsync(e,n,(async(t,r,i)=>{if(o(i,2,2,e,n),a(i[0]))return new O({parentfeatureset:i[0],topnum:i[1]});if(h(i[0]))return $(i[1])>=i[0].length?i[0].slice():i[0].slice(0,$(i[1]));if(x(i[0]))return $(i[1])>=i[0].length()?i[0].slice():i[0].slice(0,$(i[1]));throw new f(e,u.InvalidParameter,n)}))},i.signatures.push({name:"top",min:2,max:2}),i.functions.first=function(e,n){return i.standardFunctionAsync(e,n,(async(t,i,s)=>{if(o(s,1,1,e,n),a(s[0])){const n=await s[0].first(t.abortSignal);if(null!==n){const t=r.createFromGraphicLikeObject(n.geometry,n.attributes,s[0],e.timeZone);return t._underlyingGraphic=n,t}return n}return h(s[0])?0===s[0].length?null:s[0][0]:x(s[0])?0===s[0].length()?null:s[0].get(0):null}))},i.signatures.push({name:"first",min:1,max:1}),i.functions.attachments=function(e,t){return i.standardFunctionAsync(e,t,(async(r,i,s)=>{o(s,1,2,e,t);const l={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(s.length>1)if(s[1]instanceof n){if(s[1].hasField("minsize")&&(l.minsize=$(s[1].field("minsize"))),s[1].hasField("metadata")&&(l.returnMetadata=E(s[1].field("metadata"))),s[1].hasField("maxsize")&&(l.maxsize=$(s[1].field("maxsize"))),s[1].hasField("types")){const e=b(s[1].field("types"),!1);e.length>0&&(l.types=e)}}else if(null!==s[1])throw new f(e,u.InvalidParameter,t);if(N(s[0])){let n=s[0]._layer;return n instanceof q&&(n=Z(n,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===n?[]:!1===a(n)?[]:(await n.load(),n.queryAttachments(s[0].field(n.objectIdField),l.minsize,l.maxsize,l.types,l.returnMetadata))}if(null===s[0])return[];throw new f(e,u.InvalidParameter,t)}))},i.signatures.push({name:"attachments",min:1,max:2}),i.functions.featuresetbyrelationshipname=function(e,n){return i.standardFunctionAsync(e,n,(async(t,r,i)=>{o(i,2,4,e,n);const s=i[0],l=m(i[1]);let c=y(i[2],null);const w=E(y(i[3],!0));if(null===c&&(c=["*"]),!1===h(c))throw new f(e,u.InvalidParameter,n);if(null===i[0])return null;if(!N(i[0]))throw new f(e,u.InvalidParameter,n);let d=s._layer;if(d instanceof q&&(d=Z(d,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===d)return null;if(!1===a(d))return null;d=await d.load();const p=d.relationshipMetaData().filter((e=>e.name===l));if(0===p.length)return null;if(void 0!==p[0].relationshipTableId&&null!==p[0].relationshipTableId&&p[0].relationshipTableId>-1)return k(d,p[0],s.field(d.objectIdField),d.spatialReference,c,w,e.lrucache,e.interceptor);let x=d.serviceUrl();if(!x)return null;x="/"===x.charAt(x.length-1)?x+p[0].relatedTableId.toString():x+"/"+p[0].relatedTableId.toString();const I=await C(x,d.spatialReference,c,w,e.lrucache,e.interceptor);await I.load();let $=I.relationshipMetaData();if($=$.filter((e=>e.id===p[0].id)),!1===s.hasField(p[0].keyField)||null===s.field(p[0].keyField)){const e=await d.getFeatureByObjectId(s.field(d.objectIdField),[p[0].keyField]);if(e){const n=Y.create($[0].keyField+"= @id",{fieldsIndex:I.getFieldsIndex(),timeZone:I.dateFieldsTimeZoneDefaultUTC});return n.parameters={id:e.attributes[p[0].keyField]},I.filter(n)}return new B({parentfeatureset:I})}const b=Y.create($[0].keyField+"= @id",{fieldsIndex:I.getFieldsIndex(),timeZone:I.dateFieldsTimeZoneDefaultUTC});return b.parameters={id:s.field(p[0].keyField)},I.filter(b)}))},i.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),i.functions.featuresetbyassociation=function(e,n){return i.standardFunctionAsync(e,n,(async(t,r,i)=>{o(i,2,3,e,n);const s=i[0],l=m(y(i[1],"")).toLowerCase(),w=c(i[2])?m(i[2]):null;if(null===i[0])return null;if(!N(i[0]))throw new f(e,u.InvalidParameter,n);let d=s._layer;if(d instanceof q&&(d=Z(d,e.spatialReference,["*"],!0,e.lrucache,e.interceptor)),null===d)return null;if(!1===a(d))return null;await d.load();const p=d.serviceUrl(),E=await H(p,e.spatialReference);let h=null,x=null,I=!1;if(null!==w&&""!==w&&void 0!==w){for(const e of E.terminals)e.terminalName===w&&(x=e.terminalId);null===x&&(I=!0)}const $=E.associations.getFieldsIndex(),b=$.get("TOGLOBALID").name,D=$.get("FROMGLOBALID").name,g=$.get("TOTERMINALID").name,L=$.get("FROMTERMINALID").name,T=$.get("FROMNETWORKSOURCEID").name,j=$.get("TONETWORKSOURCEID").name,F=$.get("ASSOCIATIONTYPE").name,M=$.get("ISCONTENTVISIBLE").name,S=$.get("OBJECTID").name;for(const e of d.fields)if("global-id"===e.type){h=s.field(e.name);break}let O=null,k=new z(new X({name:"percentalong",alias:"percentalong",type:"double"}),Y.create("0",{fieldsIndex:E.associations.getFieldsIndex(),timeZone:E.associations.dateFieldsTimeZoneDefaultUTC})),C=new z(new X({name:"side",alias:"side",type:"string"}),Y.create("''",{fieldsIndex:E.associations.getFieldsIndex(),timeZone:E.associations.dateFieldsTimeZoneDefaultUTC}));const _="globalid",v="globalId",B={};for(const e in E.lkp)B[e]=E.lkp[e].sourceId;const P=new R(new X({name:"classname",alias:"classname",type:"string"}),null,B);let K="";switch(l){case"midspan":{K=`((${b}='${h}') OR ( ${D}='${h}')) AND (${F} IN (5))`,P.codefield=Y.create(`CASE WHEN (${b}='${h}') THEN ${T} ELSE ${j} END`,{fieldsIndex:E.associations.getFieldsIndex(),timeZone:E.associations.dateFieldsTimeZoneDefaultUTC});const e=J(U.findField(E.associations.fields,D));e.name=_,e.alias=_,O=new z(e,Y.create(`CASE WHEN (${D}='${h}') THEN ${b} ELSE ${D} END`,{fieldsIndex:E.associations.getFieldsIndex(),timeZone:E.associations.dateFieldsTimeZoneDefaultUTC})),k=E.unVersion>=4?new W(U.findField(E.associations.fields,$.get("PERCENTALONG").name)):new z(new X({name:"percentalong",alias:"percentalong",type:"double"}),Y.create("0",{fieldsIndex:E.associations.getFieldsIndex(),timeZone:E.associations.dateFieldsTimeZoneDefaultUTC}));break}case"junctionedge":{K=`((${b}='${h}') OR ( ${D}='${h}')) AND (${F} IN (4,6))`,P.codefield=Y.create(`CASE WHEN (${b}='${h}') THEN ${T} ELSE ${j} END`,{fieldsIndex:E.associations.getFieldsIndex(),timeZone:E.associations.dateFieldsTimeZoneDefaultUTC});const e=J(U.findField(E.associations.fields,D));e.name=_,e.alias=_,O=new z(e,Y.create(`CASE WHEN (${D}='${h}') THEN ${b} ELSE ${D} END`,{fieldsIndex:E.associations.getFieldsIndex(),timeZone:E.associations.dateFieldsTimeZoneDefaultUTC})),C=new z(new X({name:"side",alias:"side",type:"string"}),Y.create(`CASE WHEN (${F}=4) THEN 'from' ELSE 'to' END`,{fieldsIndex:E.associations.getFieldsIndex(),timeZone:E.associations.dateFieldsTimeZoneDefaultUTC}));break}case"connected":{let e=`${b}='@T'`,n=`${D}='@T'`;null!==x&&(e+=` AND ${g}=@A`,n+=` AND ${L}=@A`),K="(("+e+") OR ("+n+"))",K=A(K,"@T",h??""),e=A(e,"@T",h??""),null!==x&&(e=A(e,"@A",x.toString()),K=A(K,"@A",x.toString())),P.codefield=Y.create("CASE WHEN "+e+` THEN ${T} ELSE ${j} END`,{fieldsIndex:E.associations.getFieldsIndex(),timeZone:E.associations.dateFieldsTimeZoneDefaultUTC});const t=J(U.findField(E.associations.fields,D));t.name=_,t.alias=_,O=new z(t,Y.create("CASE WHEN "+e+` THEN ${D} ELSE ${b} END`,{fieldsIndex:E.associations.getFieldsIndex(),timeZone:E.associations.dateFieldsTimeZoneDefaultUTC}));break}case"container":K=`${b}='${h}' AND ${F} = 2`,null!==x&&(K+=` AND ${g} = `+x.toString()),P.codefield=T,K="( "+K+" )",O=new G(U.findField(E.associations.fields,D),_,_);break;case"content":K=`(${D}='${h}' AND ${F} = 2)`,null!==x&&(K+=` AND ${L} = `+x.toString()),P.codefield=j,K="( "+K+" )",O=new G(U.findField(E.associations.fields,b),_,_);break;case"structure":K=`(${b}='${h}' AND ${F} = 3)`,null!==x&&(K+=` AND ${g} = `+x.toString()),P.codefield=T,K="( "+K+" )",O=new G(U.findField(E.associations.fields,D),_,v);break;case"attached":K=`(${D}='${h}' AND ${F} = 3)`,null!==x&&(K+=` AND ${L} = `+x.toString()),P.codefield=j,K="( "+K+" )",O=new G(U.findField(E.associations.fields,b),_,v);break;default:throw new f(e,u.InvalidParameter,n)}I&&(K="1 <> 1");return new U({parentfeatureset:E.associations,adaptedFields:[new W(U.findField(E.associations.fields,S)),new W(U.findField(E.associations.fields,M)),O,C,P,k],extraFilter:K?Y.create(K,{fieldsIndex:E.associations.getFieldsIndex(),timeZone:E.associations.dateFieldsTimeZoneDefaultUTC}):null})}))},i.signatures.push({name:"featuresetbyassociation",min:2,max:6}),i.functions.groupby=function(e,t){return i.standardFunctionAsync(e,t,(async(r,s,l)=>{if(o(l,3,3,e,t),!a(l[0]))throw new f(e,u.InvalidParameter,t);const w=await l[0].load(),d=[],p=[];let E=!1,y=[];if(c(l[1]))y.push(l[1]);else if(l[1]instanceof n)y.push(l[1]);else if(h(l[1]))y=l[1];else{if(!x(l[1]))throw new f(e,u.InvalidParameter,t);y=l[1].toArray()}for(const r of y)if(c(r)){const e=Y.create(m(r),{fieldsIndex:w.getFieldsIndex(),timeZone:w.dateFieldsTimeZoneDefaultUTC}),n=!0===P(e)?m(r):"%%%%FIELDNAME";d.push({name:n,expression:e}),"%%%%FIELDNAME"===n&&(E=!0)}else{if(!(r instanceof n))throw new f(e,u.InvalidParameter,t);{const n=r.hasField("name")?r.field("name"):"%%%%FIELDNAME",i=r.hasField("expression")?r.field("expression"):"";if("%%%%FIELDNAME"===n&&(E=!0),!n)throw new f(e,u.InvalidParameter,t);d.push({name:n,expression:Y.create(i||n,{fieldsIndex:w.getFieldsIndex(),timeZone:w.dateFieldsTimeZoneDefaultUTC})})}}if(y=[],c(l[2]))y.push(l[2]);else if(h(l[2]))y=l[2];else if(x(l[2]))y=l[2].toArray();else{if(!(l[2]instanceof n))throw new f(e,u.InvalidParameter,t);y.push(l[2])}for(const r of y){if(!(r instanceof n))throw new f(e,u.InvalidParameter,t);{const n=r.hasField("name")?r.field("name"):"",i=r.hasField("statistic")?r.field("statistic"):"",o=r.hasField("expression")?r.field("expression"):"";if(!n||!i||!o)throw new f(e,u.InvalidParameter,t);p.push({name:n,statistic:i.toLowerCase(),expression:Y.create(o,{fieldsIndex:w.getFieldsIndex(),timeZone:w.dateFieldsTimeZoneDefaultUTC})})}}if(E){const e={};for(const n of w.fields)e[n.name.toLowerCase()]=1;for(const n of d)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);for(const n of p)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let n=0;for(const t of d)if("%%%%FIELDNAME"===t.name){for(;1===e["field_"+n.toString()];)n++;e["field_"+n.toString()]=1,t.name="FIELD_"+n.toString()}}for(const n of d)await ee(n.expression,i,e);for(const n of p)await ee(n.expression,i,e);return l[0].groupby(d,p)}))},i.signatures.push({name:"groupby",min:3,max:3}),i.functions.distinct=function(e,t){return i.standardFunctionAsync(e,t,(async(r,s,l)=>{if(a(l[0])){o(l,2,2,e,t);const r=await l[0].load(),s=[];let a=[];if(c(l[1]))a.push(l[1]);else if(l[1]instanceof n)a.push(l[1]);else if(h(l[1]))a=l[1];else{if(!x(l[1]))throw new f(e,u.InvalidParameter,t);a=l[1].toArray()}let w=!1;for(const i of a)if(c(i)){const e=Y.create(m(i),{fieldsIndex:r.getFieldsIndex(),timeZone:r.dateFieldsTimeZoneDefaultUTC}),n=!0===P(e)?m(i):"%%%%FIELDNAME";s.push({name:n,expression:e}),"%%%%FIELDNAME"===n&&(w=!0)}else{if(!(i instanceof n))throw new f(e,u.InvalidParameter,t);{const n=i.hasField("name")?i.field("name"):"%%%%FIELDNAME",o=i.hasField("expression")?i.field("expression"):"";if("%%%%FIELDNAME"===n&&(w=!0),!n)throw new f(e,u.InvalidParameter,t);s.push({name:n,expression:Y.create(o||n,{fieldsIndex:r.getFieldsIndex(),timeZone:r.dateFieldsTimeZoneDefaultUTC})})}}if(w){const e={};for(const n of r.fields)e[n.name.toLowerCase()]=1;for(const n of s)"%%%%FIELDNAME"!==n.name&&(e[n.name.toLowerCase()]=1);let n=0;for(const t of s)if("%%%%FIELDNAME"===t.name){for(;1===e["field_"+n.toString()];)n++;e["field_"+n.toString()]=1,t.name="FIELD_"+n.toString()}}for(const n of s)await ee(n.expression,i,e);return l[0].groupby(s,[])}return Q(l)}))},i.functions.getfeaturesetinfo=function(e,t){return i.standardFunctionAsync(e,t,(async(r,i,s)=>{if(o(s,1,1,e,t),!a(s[0]))return null;const l=await s[0].getFeatureSetInfo();return l?n.convertObjectToArcadeDictionary({layerId:l.layerId,layerName:l.layerName,itemId:l.itemId,serviceLayerUrl:l.serviceLayerUrl,webMapLayerId:l.webMapLayerId??null,webMapLayerTitle:l.webMapLayerTitle??null,className:null,objectClassId:null},D(e),!1,!1):null}))},i.signatures.push({name:"getfeaturesetinfo",min:1,max:1}),i.functions.filterbysubtypecode=function(e,n){return i.standardFunctionAsync(e,n,(async(t,r,i)=>{if(o(i,2,2,e,n),a(i[0])){const t=await i[0].load(),r=i[1];if(!g(r))throw new f(e,u.InvalidParameter,n);if(t.subtypeField){const e=Y.create(`${t.subtypeField}= ${i[1]}`,{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC});return new F({parentfeatureset:i[0],whereclause:e})}if(null===t.typeIdField||""===t.typeIdField)throw new f(e,u.FeatureSetDoesNotHaveSubtypes,n);const o=Y.create(`${t.typeIdField}= ${i[1]}`,{fieldsIndex:t.getFieldsIndex(),timeZone:t.dateFieldsTimeZoneDefaultUTC});return new F({parentfeatureset:i[0],whereclause:o})}throw new f(e,u.InvalidParameter,n)}))},i.signatures.push({name:"filterbysubtypecode",min:2,max:2}))}export{ae as registerFunctions};
//# sourceMappingURL=p-d4264ce2.js.map