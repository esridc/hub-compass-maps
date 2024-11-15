import{g as e,hd as t,s as n,U as i,hP as s,r,p as o,q as a,ac as l,n as u,X as c,bi as h,bn as d,e6 as p,E as f,gF as y,c1 as w,oa as m,oS as g,os as b,kM as I,oF as T,oG as v,kN as N,o4 as E,kX as R,iP as S,pC as D,iU as M,nq as C,ot as A,jP as $,T as q,o7 as O,ae as k,oT as x,c2 as F,a0 as L,a7 as j,pD as _,pE as P,pF as B,pG as G,oy as H,ow as U,ox as Q,oh as W,oz as J,oA as V,or as z,pH as K,o9 as Y,jO as Z,oB as X,pI as ee,b7 as te,pJ as ne,oC as ie}from"./p-aad64c9f.js";import{o as se}from"./p-875cbb57.js";import{e as re}from"./p-da522976.js";import"./p-f590152b.js";import{W as oe,M as ae,r as le}from"./p-08eca8f5.js";import{s as ue}from"./p-a1bf330d.js";import{m as ce}from"./p-339b5e24.js";import{V as he}from"./p-02236077.js";import{y as de,u as pe}from"./p-4c90e3f2.js";const fe="ESRI__ID",ye="ESRI__OriginID",we="ESRI__DestID",me="ESRI__LayoutGeometry",ge="ESRI__AggregationCount",be="LC.ESRI__IsSpatial",Ie={initializeLayersFromClientData:async(e,t)=>{if(t||(t=[...e.layers,...e.tables].map((e=>e.graphTypeName))),0===t?.length)return;const n=new Map;for(const i of t)n.set(i,Te(e,i));const i=await oe(e.dataManager.knowledgeGraph,Array.from(n.values()));for(const t of[...e.layers,...e.tables]){const n=t.objectType.name;if(null===n)continue;const s=i.get(Te(e,n));if(s){const e=JSON.parse(s);null===e||"object"!=typeof e||e.hasOwnProperty("showLabels")||(e.showLabels=!1),t.read(e,{origin:"service"})}}}},Te=(e,t)=>"knowledge-graph"===e.type?`${t}/Map`:`${t}/LinkChart/LinkChartSubLayer`;async function ve(e,t){return Ie.initializeLayersFromClientData(e,t)}class Ne{constructor(){this._featureLookup=new Map}static getInstance(){return Ne.instance||(Ne.instance=new Ne),Ne.instance}static resetInstance(){Ne.instance&&(Ne.instance=null)}deleteFromStore(e){e.forEach((e=>{this._featureLookup.delete(e)}))}readFromStoreByList(e){const t=[];return e.forEach((e=>{const n=this.readFromStoreById(e);n&&t.push(n)})),t}readFromStoreById(e){return this._featureLookup.get(e)??null}writeToStore(t,n,i){const s=[];return t.forEach((t=>{if(!t?.id)return;t.properties||(t.properties=[]);let r,o=null;if(i&&t.properties[i]&&(o=se(t.properties[i])),"originId"in t&&"destinationId"in t&&(t.properties[ye]=t.originId,t.properties[we]=t.destinationId),t.properties[n]=t.id,t.id&&this._featureLookup.has(t.id)&&this._featureLookup.get(t.id).attributes){const s=this._featureLookup.get(t.id),a=JSON.parse(JSON.stringify(Object.assign(s.attributes,t.properties)));i&&t.properties[i]&&(a[i]=e(t.properties[i])),r=new re(o?JSON.parse(JSON.stringify(o)):s?.geometry?JSON.parse(JSON.stringify(s.geometry)):null,a,null,t.properties[n])}else r=new re(o?JSON.parse(JSON.stringify(o)):null,t.properties,null,t.properties[n]);this._featureLookup.set(`${t.typeName?`${t.typeName}__${t.id}`:t.id}`,r),s.push(r)})),s}}let Ee,Re=null;function Se(){return Ee||(Ee=import("./p-cf35e9ee.js").then((e=>e.l)).then((({default:e})=>e({locateFile:e=>t(`esri/libs/linkchartlayout/${e}`)}))).then((e=>{De(e)})),Ee)}function De(e){Re=e}var Me,Ce,Ae,$e;function qe(e){const t=Object.keys(Ae).filter((e=>isNaN(parseInt(e,10)))).indexOf(e.timeDirection),n=Object.keys($e).filter((e=>isNaN(parseInt(e,10)))).indexOf(e.eventsTicksVisualization);return{timeDirection:{value:t>-1?t:Ae.right},timeBannerUTCOffsetInMinutes:e.timeBannerUTCOffsetInMinutes,eventsTicksVisualization:{value:n>-1?n:$e.startAndEnd},showDurationLineForNonZeroDurationEntityEvents:e.showDurationLineForNonZeroDurationEntityEvents,durationLineWidth:e.durationLineWidth,entityPositionAtDurationRatio:e.entityPositionAtDurationRatio,showNonZeroDurationIntervalBounds:e.showNonZeroDurationIntervalBounds,separateTimeOverlaps:e.separateTimeOverlaps,separateTimelineOverlaps:e.separateTimelineOverlaps,moveFirstBends:e.moveFirstBends,secondBendRatio:e.secondBendRatio,lineSeparationMultiplier:e.lineSeparationMultiplier,spaceSeparatedLinesEvenly:e.spaceSeparatedLinesEvenly,useBezierCurves:e.useBezierCurves,separatedLineShapeRatio:e.separatedLineShapeRatio}}function Oe(e,t,n,i,s,r){const o=n.length,a=s.length,l=Float64Array.BYTES_PER_ELEMENT,u=Uint32Array.BYTES_PER_ELEMENT,c=Uint8Array.BYTES_PER_ELEMENT,h=16,d=h+o*(c+2*l)+a*(2*u),p=Re._malloc(d);try{const c=p+h-p%h,d=c+o*l,f=d+o*l,y=f+a*u,w=y+a*u,m=()=>[Re.HEAPF64.subarray(c>>3,(c>>3)+o),Re.HEAPF64.subarray(d>>3,(d>>3)+o),Re.HEAPU32.subarray(f>>2,(f>>2)+a),Re.HEAPU32.subarray(y>>2,(y>>2)+a),Re.HEAPU8.subarray(w,w+o)],[g,b,I,T,v]=m();g.set(n),b.set(i),I.set(s),T.set(r),v.set(t);let N=e(o,w,c,d,a,f,y),E=null,R=null;if(N){const e=Re.getLayoutLinksTypes(),t=Re.getLayoutLinksVerticesEndIndices(),n=Re.getLayoutLinksVertices(),i=Re.countLayoutLinksVertices();!a||e&&t?i&&!n?N=!1:(E={types:new Uint8Array(Re.HEAPU8.subarray(e,e+a)),vertexEndIndex:new Uint32Array(Re.HEAPU32.subarray(t>>2,(t>>2)+a)),vertices:new Float64Array(Re.HEAPF64.subarray(n>>3,(n>>3)+2*i))},R=Re.getAuxiliaryGraphicElements()):N=!1}const[S,D,M,C,A]=m();return n.set(S),i.set(D),s.set(M),r.set(C),t.set(A),{success:N,links:E,graphics:R}}finally{Re._free(p),Re.cleanupLayout()}}!function(e){e[e.None=0]="None",e[e.IsMovable=1]="IsMovable",e[e.IsGeographic=2]="IsGeographic",e[e.IsRoot=4]="IsRoot",e[e.IsOld=8]="IsOld"}(Me||(Me={})),function(e){e[e.Regular=0]="Regular",e[e.Curved=1]="Curved",e[e.Recursive=2]="Recursive"}(Ce||(Ce={})),function(e){e[e.right=0]="right",e[e.left=1]="left",e[e.top=2]="top",e[e.bottom=3]="bottom"}(Ae||(Ae={})),function(e){e[e.none=0]="none",e[e.startOnly=1]="startOnly",e[e.startAndEnd=2]="startAndEnd"}($e||($e={}));const ke=2,xe=1,Fe=-1;var Le,je,_e,Pe,Be,Ge,He,Ue,Qe;!function(e){function t(){return Re.getMinIdealEdgeLength()}function n(e,t,n,i,s,r=ke,o=xe,a=Fe){return Oe(((e,t,n,i,s,l,u)=>Re.applyForceDirectedLayout(e,t,n,i,s,l,u,r,o,a)),e,t,n,i,s)}e.getMinIdealEdgeLength=t,e.apply=n}(Le||(Le={})),function(e){function t(e,t,n,i,s,r=ke,o=xe,a=Fe){return Oe(((e,t,n,i,s,l,u)=>Re.applyCommunityLayout(e,t,n,i,s,l,u,r,o,a)),e,t,n,i,s)}e.apply=t}(je||(je={})),function(e){function t(e,t,n,i,s){return Oe(Re.applySimpleLayout,e,t,n,i,s)}e.apply=t}(_e||(_e={})),function(e){function t(e,t,n,i,s){return Oe(Re.applyHierarchicalLayout,e,t,n,i,s)}e.apply=t}(Pe||(Pe={})),function(e){function t(e,t,n,i,s){return Oe(Re.applyRadialTreeLayout,e,t,n,i,s)}e.apply=t}(Be||(Be={})),function(e){function t(e,t,n,i,s){return Oe(Re.applySmartTreeLayout,e,t,n,i,s)}e.apply=t}(Ge||(Ge={})),function(e){function t(e,t,n,i,s,r,o,a,l,u,c){const h={timeDirection:Ae.right,timeBannerUTCOffsetInMinutes:0,eventsTicksVisualization:$e.startAndEnd,showDurationLineForNonZeroDurationEntityEvents:!0,durationLineWidth:5,entityPositionAtDurationRatio:1,showNonZeroDurationIntervalBounds:!1,separateTimeOverlaps:!0,separateTimelineOverlaps:!0,moveFirstBends:!0,secondBendRatio:.3,lineSeparationMultiplier:1,spaceSeparatedLinesEvenly:!1,useBezierCurves:!1,separatedLineShapeRatio:0};return Oe(((e,t,n,r,o,d,p)=>{if(i.length!==e)return!1;if(s.length!==e)return!1;if(a.length!==o)return!1;if(l.length!==o)return!1;const f=Float64Array.BYTES_PER_ELEMENT,y=16,w=Re._malloc(y+e*f),m=Re._malloc(y+e*f),g=Re._malloc(y+o*f),b=Re._malloc(y+o*f),I=w+y-w%y,T=m+y-m%y,v=g+y-g%y,N=b+y-b%y;try{Re.HEAPF64.subarray(I>>3,(I>>3)+e).set(i),Re.HEAPF64.subarray(T>>3,(T>>3)+e).set(s),Re.HEAPF64.subarray(v>>3,(v>>3)+o).set(a),Re.HEAPF64.subarray(N>>3,(N>>3)+o).set(l);const f=qe(Object.assign(h,c));return Re.applyChronologicalLayout(e,t,n,r,I,T,o,d,p,v,N,u,f)}finally{Re._free(w),Re._free(m),Re._free(g),Re._free(b)}}),e,t,n,r,o)}e.apply=t}(He||(He={})),function(e){e[e.Undirected=0]="Undirected",e[e.Directed=1]="Directed",e[e.Reversed=2]="Reversed"}(Ue||(Ue={})),function(e){e[e.ByCC_Raw=0]="ByCC_Raw",e[e.ByCC_NormalizeGlobally=1]="ByCC_NormalizeGlobally",e[e.ByCC_NormalizeByCC=2]="ByCC_NormalizeByCC"}(Qe||(Qe={}));var We;!function(e){e.ELEMENTUID="ELEMENTUID",e.TYPENAME="TYPENAME"}(We||(We={}));var Je,Ve;!function(e){e[e.ELEMENTUID=0]="ELEMENTUID",e[e.TYPENAME=1]="TYPENAME"}(Je||(Je={})),function(e){e[e.ELEMENTUID=0]="ELEMENTUID",e[e.TYPENAME=1]="TYPENAME",e[e.FROMUID=2]="FROMUID",e[e.TOUID=3]="TOUID"}(Ve||(Ve={}));var ze,Ke,Ye,Ze;!function(e){e[e.featureResult=0]="featureResult",e[e.countResult=1]="countResult",e[e.idsResult=2]="idsResult"}(ze||(ze={})),function(e){e[e.upperLeft=0]="upperLeft",e[e.lowerLeft=1]="lowerLeft"}(Ke||(Ke={})),function(e){e[e.sqlTypeBigInt=0]="sqlTypeBigInt",e[e.sqlTypeBinary=1]="sqlTypeBinary",e[e.sqlTypeBit=2]="sqlTypeBit",e[e.sqlTypeChar=3]="sqlTypeChar",e[e.sqlTypeDate=4]="sqlTypeDate",e[e.sqlTypeDecimal=5]="sqlTypeDecimal",e[e.sqlTypeDouble=6]="sqlTypeDouble",e[e.sqlTypeFloat=7]="sqlTypeFloat",e[e.sqlTypeGeometry=8]="sqlTypeGeometry",e[e.sqlTypeGUID=9]="sqlTypeGUID",e[e.sqlTypeInteger=10]="sqlTypeInteger",e[e.sqlTypeLongNVarchar=11]="sqlTypeLongNVarchar",e[e.sqlTypeLongVarbinary=12]="sqlTypeLongVarbinary",e[e.sqlTypeLongVarchar=13]="sqlTypeLongVarchar",e[e.sqlTypeNChar=14]="sqlTypeNChar",e[e.sqlTypeNVarChar=15]="sqlTypeNVarChar",e[e.sqlTypeOther=16]="sqlTypeOther",e[e.sqlTypeReal=17]="sqlTypeReal",e[e.sqlTypeSmallInt=18]="sqlTypeSmallInt",e[e.sqlTypeSqlXml=19]="sqlTypeSqlXml",e[e.sqlTypeTime=20]="sqlTypeTime",e[e.sqlTypeTimestamp=21]="sqlTypeTimestamp",e[e.sqlTypeTimestamp2=22]="sqlTypeTimestamp2",e[e.sqlTypeTinyInt=23]="sqlTypeTinyInt",e[e.sqlTypeVarbinary=24]="sqlTypeVarbinary",e[e.sqlTypeVarchar=25]="sqlTypeVarchar"}(Ye||(Ye={})),function(e){e[e.OID_ARRAY=0]="OID_ARRAY",e[e.GLOBALID_ARRAY=1]="GLOBALID_ARRAY",e[e.STRING_ARRAY=2]="STRING_ARRAY",e[e.IDENTIFIER_ARRAY=3]="IDENTIFIER_ARRAY"}(Ze||(Ze={}));function Xe(e){if(!e.spatialReference.isWGS84)throw new n("knowledge-graph:layer-support-utils","The extentToInBoundsRings function only supports WGS84 spatial references.");return e.clone().normalize().map((e=>[[e.xmin,e.ymin],[e.xmin,e.ymax],[e.xmax,e.ymax],[e.xmax,e.ymin],[e.xmin,e.ymin]]))}async function et(e,t){const n=[],i=new Map,s=[];if(t.dataModel?.relationshipTypes)for(const e of t.dataModel.relationshipTypes)e.name&&i.set(e.name,[]);for(const t of e)i.has(t.typeName)&&i.get(t.typeName)?.push(t.id);for(const[e,r]of i){if(r.length<1)continue;const i=new ue({openCypherQuery:`MATCH (n)-[r:${e}]->(m) WHERE id(r) in $ids RETURN id(n), labels(n)[0], id(m), labels(m)[0]`,bindParameters:{ids:r}});s.push(ae(t,i).then((async e=>{const t=e.resultRowsStream.getReader();for(;;){const{done:e,value:i}=await t.read();if(e)break;for(const e of i)n.push({id:e[0],typeName:e[1]}),n.push({id:e[2],typeName:e[3]})}})))}return await Promise.all(s),n}async function tt(e,t){t??=!1;const n={generateAllSublayers:t,namedTypeDefinitions:new Map};return await st(e).then((e=>{ot(e,n)})),n}async function nt(e){const t=await le(),i=new t.MapOfObjectIdentifierSets;it(i,t,e);const s=new t.MapOfObjectIdentifierSetsEncoder;try{s.set_map_of_identifier_sets(i),s.encode();const e=s.get_encoding_result();if(0!==e.error.error_code)throw new n("knowledge-graph:layer-support-utils",e.error.error_message);const t=structuredClone(e.get_byte_buffer());return s.delete(),t}finally{i.delete()}}function it(e,t,n){for(const[i,s]of n.namedTypeDefinitions){if(!s.members||s.useAllData)continue;const n=s.members.keys();let r=!1,o=!0;const a=new t.ObjectIdArray,l=new t.StringArray,u=new t.GlobalIdArray,c=new t.IdentifierArray,h=new t.ObjectIdentifierSet;for(const e of n)o&&(r=!isNaN(Number(e)),o=!1),r?a.add_objectid(Number(e)):(l.add_string(e),u.add_globalid(e)),c.add_identifier(e);h.set_oid_array(a),h.set_string_array(l),h.set_globalid_array(u),h.set_identifier_array(c),a.delete(),l.delete(),u.delete(),c.delete(),e.put_identifier_set(i,h),h.delete()}return e}async function st(e){const t=await i(e,{responseType:"array-buffer"}),n=await t.data;return rt(new Uint8Array(n))}async function rt(e){const t=new((await le()).MapOfObjectIdentifierSetsDecoder),i=t.decode(new Uint8Array(e)),s=new Map;if(0!==i.error_code)throw new n("knowledge-graph:layer-support-utils",i.error_message);const r=t.get_map_of_identifier_sets(),o=r.keys,a=o.size();for(let e=0;e<a;e++){const t=o.get(e),i=r.query_identifier_set(t),a=[];if(i.id_array_type.value===Ze.GLOBALID_ARRAY){const e=i.get_globalid_array(),t=e.count();for(let n=0;n<t;n++)a.push(e.get_globalid_at(n))}else if(i.id_array_type.value===Ze.IDENTIFIER_ARRAY){const e=i.get_identifier_array(),t=e.count();for(let n=0;n<t;n++)a.push(e.get_identifier_at(n).toString())}else if(i.id_array_type.value===Ze.STRING_ARRAY){const e=i.get_string_array(),t=e.count();for(let n=0;n<t;n++)a.push(e.get_string_at(n))}else{if(i.id_array_type.value!==Ze.OID_ARRAY)throw new n("knowledge-graph:layer-support-utils","Tried to encode an unexpected ID Array type.");{const e=i.get_oid_array(),t=e.count();for(let n=0;n<t;n++)a.push(e.get_objectid_at(n).toString())}}s.set(t,a)}return t.delete(),s}function ot(e,t){for(const[n,i]of e){const e=s(t.namedTypeDefinitions,n,(()=>({useAllData:!1,members:new Map})));for(const t of i)e.members.has(t)||e.members.set(t,{id:t})}return t}let at=class extends l{constructor(e){super(e),this._processingCacheUpdatesLookup=new Map,this.knowledgeGraph=null,this.inclusionModeDefinition={generateAllSublayers:!0,namedTypeDefinitions:new Map},this.entityTypeNames=new Set,this.relationshipTypeNames=new Set,this.geographicLookup=new Map,this.sublayerCaches=new Map,this.nodeConnectionsLookup=new Map,this.relationshipConnectionsLookup=new Map,this.memberIdTypeLookup=new Map;const t=new Map;e.knowledgeGraph.dataModel.entityTypes?.forEach((n=>{n.name&&(t.set(n.name,"entity"),this._processingCacheUpdatesLookup.set(n.name,[]),e.inclusionModeDefinition&&!e.inclusionModeDefinition?.generateAllSublayers||this.entityTypeNames.add(n.name),n.properties?.forEach((e=>{e.geometryType&&"esriGeometryNull"!==e.geometryType&&this.geographicLookup.set(n.name,{name:e.name??"",geometryType:e.geometryType})})))})),e.knowledgeGraph.dataModel.relationshipTypes?.forEach((n=>{n.name&&(t.set(n.name,"relationship"),this._processingCacheUpdatesLookup.set(n.name,[]),e.inclusionModeDefinition&&!e.inclusionModeDefinition?.generateAllSublayers||this.relationshipTypeNames.add(n.name),n.properties?.forEach((e=>{e.geometryType&&"esriGeometryNull"!==e.geometryType&&this.geographicLookup.set(n.name,{name:e.name??"",geometryType:e.geometryType})})))})),e.inclusionModeDefinition?.namedTypeDefinitions.forEach(((n,i)=>{if("entity"===t.get(i))this.entityTypeNames.add(i);else{if("relationship"!==t.get(i))return u.getLogger(this).warn(`A named type, ${i}, was in the inclusion list that wasn't in the data model and will be removed`),void e.inclusionModeDefinition?.namedTypeDefinitions.delete(i);this.relationshipTypeNames.add(i)}const r=new Map;n.members?.forEach((e=>{s(this.memberIdTypeLookup,e.id,(()=>new Set)).add(i);const t=this.getById(e.id);t&&r.set(e.id,t)})),this.sublayerCaches.set(i,r)}))}addToLayer(e){e.forEach((({typeName:e,id:t})=>{if(!this.inclusionModeDefinition)throw new n("knowledge-graph:layer-data-manager","You cannot add to a layer's exclusion list if it was not created with an exclusion list originally");if(this.inclusionModeDefinition.namedTypeDefinitions.has(e)){if(this.inclusionModeDefinition.namedTypeDefinitions.has(e)){const n=this.inclusionModeDefinition.namedTypeDefinitions.get(e);n.members||(n.members=new Map),n.members.set(t,{id:t}),s(this.memberIdTypeLookup,t,(()=>new Set)).add(e)}}else{const n=new Map;n.set(t,{id:t}),this.inclusionModeDefinition.namedTypeDefinitions.set(e,{useAllData:!1,members:n}),s(this.memberIdTypeLookup,t,(()=>new Set)).add(e)}}))}getById(e){return Ne.getInstance().readFromStoreById(e)}async getData(e,t,n){if(t.objectType.name&&this.inclusionModeDefinition?.namedTypeDefinitions&&this.inclusionModeDefinition.namedTypeDefinitions.size>0&&!this.inclusionModeDefinition.namedTypeDefinitions.has(t.objectType.name))return[];let i;if(i=e||new c({where:"1=1",outFields:["*"]}),"link-chart"===t.parentCompositeLayer.type){const e=t.parentCompositeLayer,n=this._processingCacheUpdatesLookup.get(t.objectType.name??""),s=i.outFields;s&&1===s.length&&s[0]===fe&&"1=1"===i.where||await Promise.all(n??[]);const r=this.sublayerCaches.has(t.objectType.name??"")?Array.from(this.sublayerCaches.get(t.objectType.name)?.values()):[],o=[];return r.forEach((n=>{if(this.relationshipTypeNames.has(t.objectType.name)){n.geometry=e.relationshipLinkChartDiagramLookup.get(n.attributes[t.objectIdField]);const i=this.memberIdTypeLookup.get(n.attributes[ye]),s=this.memberIdTypeLookup.get(n.attributes[we]),r=this._isEndEntitySpatial(i,n,ye),o=this._isEndEntitySpatial(s,n,we);n.attributes[be]=Number(r&&o)}else{n.geometry=e.entityLinkChartDiagramLookup.get(n.attributes[t.objectIdField]);const i=this.geographicLookup.get(t.objectType.name);i&&n.attributes[i.name]?n.attributes[be]=1:n.attributes[be]=0}n.attributes[me]=n.geometry,o.push(n)})),o}return this.retrieveDataFromService(i,t,n)}async getConnectedRecordIds(e,t){const n=[];let i="";const s=[],r=new Map;if(e.forEach((e=>{if(this.memberIdTypeLookup.has(e))for(const t of this.memberIdTypeLookup.get(e)){if(!this.entityTypeNames.has(t))return;r.has(t)?r.get(t)?.push(e):r.set(t,[e])}})),t&&0!==t?.length){for(const e of t)i=i+e+"|";i=i.slice(0,-1)}const o={};let a="",l=-1;for(const[e,n]of r){l++,0!==l&&(a+=" UNION ");const s=`${e}_ids`;o[s]=n,a+=t&&0!==t?.length?`MATCH (n:${e}) WHERE id(n) IN $${s} WITH n MATCH (n)-[r:${i}]-(m) RETURN id(r), type(r), id(m), labels(m)[0]`:`MATCH (n:${e}) WHERE id(n) IN $${s} WITH n MATCH (n)-[r]-(m) RETURN id(r), type(r), id(m), labels(m)[0]`}if(!a)return n;const c=new Promise((e=>{(async()=>{const e=(await ae(this.knowledgeGraph,new ue({openCypherQuery:a,bindParameters:o}))).resultRowsStream.getReader();try{for(;;){const{done:t,value:i}=await e.read();if(t)break;for(let e=0;e<i.length;e++){const t=i[e];n.push({id:t[0],typeName:t[1]}),n.push({id:t[2],typeName:t[3]})}}}catch(e){if("AbortError"!==e.name)throw e;u.getLogger(this).info("Request aborted as expected")}})().then((()=>{e()}))}));return s.push(c),this.refreshCacheContent(),await Promise.all(s),n}async getRelationshipsBetweenNodes(e,t){const n=[],i="MATCH (n)-[r]->(m) WHERE id(n) IN $nodeIds AND id(m) in $nodeIds AND NOT id(r) IN $relationshipExclusionIds return id(r), type(r)",s=(await ae(this.knowledgeGraph,new ue({openCypherQuery:i,bindParameters:{nodeIds:e,relationshipExclusionIds:t}}))).resultRowsStream.getReader();try{for(;;){const{done:e,value:t}=await s.read();if(e)break;for(let e=0;e<t.length;e++){const i=t[e];n.push({id:i[0],typeName:i[1]})}}}catch(e){if("AbortError"!==e.name)throw e;u.getLogger(this).info("Request aborted as expected")}return n}async getRelationshipsFromNodes(e,t,n){const i=[],s="MATCH (n)-[r]-(m) WHERE id(n) IN $targetEntityIds AND id(m) in $possibleConnectionEntityIds AND NOT id(r) IN $relationshipExclusionIds return id(r), type(r)",r=(await ae(this.knowledgeGraph,new ue({openCypherQuery:s,bindParameters:{targetEntityIds:e,possibleConnectionEntityIds:t,relationshipExclusionIds:n}}))).resultRowsStream.getReader();try{for(;;){const{done:e,value:t}=await r.read();if(e)break;for(let e=0;e<t.length;e++){const n=t[e];i.push({id:n[0],typeName:n[1]})}}}catch(e){if("AbortError"!==e.name)throw e;u.getLogger(this).info("Request aborted as expected")}return i}async refreshCacheContent(e,t,i,r=!0){const o=Ne.getInstance(),a=[],l=new Map,u=new Map;this.knowledgeGraph.dataModel.entityTypes?.forEach((e=>{e.name&&u.set(e.name,e)})),this.knowledgeGraph.dataModel.relationshipTypes?.forEach((e=>{e.name&&u.set(e.name,e)})),e||this.inclusionModeDefinition?e?e.forEach((e=>{if(this.memberIdTypeLookup.has(e))for(const t of this.memberIdTypeLookup.get(e))l.has(t)?l.get(t)?.push(e):l.set(t,[e])})):this.inclusionModeDefinition?.namedTypeDefinitions?.forEach(((e,t)=>{e.useAllData?l.set(t,null):e.members&&e.members.forEach((e=>{l.has(t)&&null!==l.get(t)?l.get(t)?.push(e.id):l.set(t,[e.id])}))})):(this.knowledgeGraph.dataModel.entityTypes?.forEach((e=>{e.name&&l.set(e.name,null)})),this.knowledgeGraph.dataModel.entityTypes?.forEach((e=>{e.name&&l.set(e.name,null)})));for(const[e,c]of l){const l=new Promise((a=>{const l=async()=>{const a=new Set,l=[];let h,d="",p=!1;if(t||u.get(e)?.properties?.forEach((e=>{e.name&&a.add(e.name)})),i&&this.geographicLookup.has(e)){const t=this.geographicLookup.get(e)?.name;t&&a.add(t)}if(this.entityTypeNames.has(e))d=`MATCH (n:${e}) ${c?"WHERE id(n) IN $ids ":""}return ID(n)`,a.forEach((e=>{d+=`, n.${e}`,l.push(e)}));else{if(!this.relationshipTypeNames.has(e))throw new n("knowledge-graph:layer-data-manager",`The graph type of ${e} could not be determined. Was this type set in the KG data model and inclusion definition?`);p=!0,d=`MATCH ()-[n:${e}]->() ${c?"WHERE id(n) IN $ids ":""}return ID(n), id(startNode(n)), id(endNode(n))`,a.forEach((e=>{d+=`, n.${e}`,l.push(e)}))}h=new ue(c?{openCypherQuery:d,bindParameters:{ids:c}}:{openCypherQuery:d});const f=(await ae(this.knowledgeGraph,h)).resultRowsStream.getReader();for(;;){const{done:t,value:n}=await f.read();if(t)break;const i=[];for(let e=0;e<n.length;e++){const t=n[e];let r=0,o=0;const a={properties:{}};for(a.id=t[r],r++,o++,p&&(a.originId=t[r],r++,o++,a.destinationId=t[r],r++,o++,s(this.nodeConnectionsLookup,a.originId,(()=>new Set)).add(a.id),s(this.nodeConnectionsLookup,a.destinationId,(()=>new Set)).add(a.id),s(this.relationshipConnectionsLookup,a.id,(()=>[a.originId,a.destinationId])));r<t.length;r++)a.properties[l[r-o]]=t[r];i.push(a)}const a=o.writeToStore(i,fe,this.geographicLookup.get(e)?.name);this.sublayerCaches.has(e)||this.sublayerCaches.set(e,new Map),r&&!this.inclusionModeDefinition?.namedTypeDefinitions.has(e)&&this.inclusionModeDefinition?.namedTypeDefinitions.set(e,{useAllData:!1,members:new Map}),r&&!this.inclusionModeDefinition?.namedTypeDefinitions.get(e).members&&(this.inclusionModeDefinition.namedTypeDefinitions.get(e).members=new Map);const u=this.sublayerCaches.get(e);a.forEach((t=>{u?.set(t.attributes[fe],t),r&&!this.inclusionModeDefinition?.namedTypeDefinitions.get(e).members.has(t.attributes[fe])&&(this.inclusionModeDefinition?.namedTypeDefinitions.get(e).members.set(t.attributes[fe],{id:t.attributes[fe]}),s(this.memberIdTypeLookup,t.attributes[fe],(()=>new Set)).add(e))}))}};l().then((()=>{a(null)}))}));a.push(l),this._processingCacheUpdatesLookup.get(e)?.push(l)}await Promise.all(a)}removeFromLayer(e){const t=new Set,n=new Set(e.map((e=>e.id)));for(const n of e)t.add(n.typeName),1===this.memberIdTypeLookup.get(n.id)?.size?this.memberIdTypeLookup.delete(n.id):this.memberIdTypeLookup.get(n.id)?.delete(n.typeName),this.inclusionModeDefinition?.namedTypeDefinitions.forEach(((e,t)=>{t===n.typeName&&e.members?.has(n.id)&&e.members.delete(n.id)}));t.forEach((e=>{this.sublayerCaches.get(e)?.forEach(((t,i)=>{n.has(i)&&this.sublayerCaches.get(e)?.delete(i)}))}))}async retrieveDataFromService(e,t,i){const s=Ne.getInstance(),r=new Set,o=[];let a,l="",u=[];const c="relationship"===t.graphType,m=this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData,g=t.parentCompositeLayer.sublayerIdsCache.get(t.objectType.name);let b=!m&&g?Array.from(g).sort():null;if(this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData)this.inclusionModeDefinition?.namedTypeDefinitions?.get(t.objectType.name)?.useAllData&&null!=e.objectIds&&(b=e.objectIds);else if(null!=e.objectIds&&b&&b.length>0){const t=e.objectIds;e.objectIds=b.filter((e=>t.includes(e)))}else if(null!=e.objectIds)b=e.objectIds;else{if(this.inclusionModeDefinition?.namedTypeDefinitions.has(t.objectType.name)&&(!this.inclusionModeDefinition.namedTypeDefinitions.get(t.objectType.name)?.members||this.inclusionModeDefinition.namedTypeDefinitions.get(t.objectType.name)?.members?.size<1))return e.objectIds=[],[];e.objectIds=b}if(null!=e.outFields){const n=e.outFields;n.includes("*")?t.fields.forEach((e=>{r.add(e.name)})):n.forEach((e=>{e!==fe&&e!==t.geometryFieldName&&r.add(e)}))}if(null!=e.geometry){const i=e.geometry;let s;const u=t.parentCompositeLayer.dataManager.knowledgeGraph.serviceDefinition,m=u?.spatialReference,g=u?.serviceCapabilities?.geometryCapabilities;let b=g?.geometryMaxBoundingRectangleSizeX,I=g?.geometryMaxBoundingRectangleSizeY;if("point"===i.type){let e=i;e.spatialReference?.isWGS84||(await h(e.spatialReference,d),e=p(e,d)),s=new f({spatialReference:d,xmin:e.x-1e-4,ymin:e.y-1e-4,xmax:e.x+1e-4,ymax:e.y+1e-4})}else i?.extent?.spatialReference&&!i.spatialReference?.isWGS84?(await h(i.extent.spatialReference,d),s=p(i.extent,d)):s=i.extent;if(b&&I&&m){if(4326!==m.wkid){const e=new f({spatialReference:m,xmax:b,ymax:I}),t=p(e,d);b=t.xmax,I=t.ymax}if(s.xmax-s.xmin>b)throw new n("knowledge-graph:layer-data-manager",`Extent x bounds should be within ${b}° latitude, limit exceeded`);if(s.ymax-s.ymin>I)throw new n("knowledge-graph:layer-data-manager",`Extent y bounds should be within ${I}° longitude, limit exceeded`)}if(null!=e.where&&"1=1"!==e.where){const n=await y(e.where.toUpperCase(),t.fieldsIndex);t.fields.forEach((e=>{n.fieldNames.includes(e.name)&&r.add(e.name)}))}l=c?`Match ()-[n:${t.objectType.name}]->() WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t.geometryFieldName}) return ID(n), id(startNode(r)), id(endNode(r))`:`Match (n:${t.objectType.name}) WHERE esri.graph.ST_Intersects($param_filter_geom, n.${t.geometryFieldName}) return ID(n)`,t.geometryFieldName&&r.add(t.geometryFieldName),r.forEach((e=>{l+=`, n.${e}`,o.push(e)})),a=new ue({openCypherQuery:l,bindParameters:{param_filter_geom:new w({rings:Xe(s)})}})}else{let n="";if(null!=e.where&&"1=1"!==e.where){const i=await y(e.where,t.fieldsIndex);t.fields.forEach((e=>{i.fieldNames.includes(e.name)&&r.add(e.name)}));const s=new Set(["column-reference","string","number","binary-expression"]),o=new Set(["=","<","<=","<>",">",">=","AND","OR","LIKE"]);let a=!1;const l=e=>{if("column-reference"===e.type)return`n.${e.column}`;if("string"===e.type)return`'${e.value}'`;if("number"===e.type)return`${e.value}`;if("binary-expression"===e.type&&s.has(e.left.type)&&s.has(e.right.type)&&o.has(e.operator))return`${l(e.left)} ${e.operator} ${l(e.right)}`;if("binary-expression"===e.type&&"LIKE"===e.operator){let t="";if("function"===e.left.type&&"column-reference"===e.left.args.value[0].type)t+=`lower(n.${e.left.args.value[0].column})`;else{if("column-reference"!==e.left.type)return a=!0,"";t+=`lower(n.${e.left.column})`}if(t+=" CONTAINS (","string"!==e.right.type)return a=!0,"";{let n=e.right.value;"%"===n.charAt(0)&&(n=n.slice(1)),"%"===n.charAt(n.length-1)&&(n=n.slice(0,-1)),t+=`'${n.toLowerCase()}')`}return t}return a=!0,""};n=l(i.parseTree),a&&(n="")}let i="";i=c?`Match ()-[n:${t.objectType.name}]->()`:`Match (n:${t.objectType.name})`;let s=!1;b&&(s=!0,i+=" WHERE ID(n) IN $ids"),n&&(i+=s?" AND":" WHERE",i+=` ${n}`),i+=" return ID(n)",c&&(i+=", id(startNode(n)), id(endNode(n))"),e.returnGeometry&&t.geometryFieldName&&r.add(t.geometryFieldName),r.forEach((e=>{i+=`, n.${e}`,o.push(e)})),a=new ue(b?{openCypherQuery:i,bindParameters:{ids:b}}:{openCypherQuery:i})}const I=(await ae(t.parentCompositeLayer.dataManager.knowledgeGraph,a,i)).resultRowsStream.getReader();for(;;){const{done:e,value:n}=await I.read();if(e)break;const i=[];for(let e=0;e<n.length;e++){const t=n[e];let s=0,r=0;const a={properties:{}};for(a.id=t[s],s++,r++,c&&(a.originId=t[s],s++,r++,a.destinationId=t[s],s++,r++);s<t.length;s++)a.properties[o[s-r]]=t[s];i.push(a)}u=u.concat(s.writeToStore(i,fe,t.parentCompositeLayer.dataManager.geographicLookup.get(t.objectType.name)?.name))}return u}_isEndEntitySpatial(e,t,n){for(const i of e??[])if(this.entityTypeNames.has(i)){const e=this.geographicLookup.get(i),s=e&&this.sublayerCaches.get(i)?.get(t.attributes[n]);if(e&&s?.attributes[e.name])return!0}return!1}};r([o()],at.prototype,"knowledgeGraph",void 0),r([o()],at.prototype,"inclusionModeDefinition",void 0),r([o()],at.prototype,"entityTypeNames",void 0),r([o()],at.prototype,"relationshipTypeNames",void 0),r([o()],at.prototype,"geographicLookup",void 0),r([o()],at.prototype,"sublayerCaches",void 0),r([o()],at.prototype,"nodeConnectionsLookup",void 0),r([o()],at.prototype,"relationshipConnectionsLookup",void 0),r([o()],at.prototype,"memberIdTypeLookup",void 0),at=r([a("esri.layers.knowledgeGraph.KnowledgeGraphLayerDataManager")],at);const lt=m(),ut=e=>{let t=class extends e{constructor(){super(...arguments),this.fields=[],this.fieldsIndex=null}};return r([o(lt.fields)],t.prototype,"fields",void 0),r([o(lt.fieldsIndex)],t.prototype,"fieldsIndex",void 0),t=r([a("esri.layers.knowledgeGraph.KnowledgeGraphSublayerBase")],t),t};function ct(e){if(!e.json)return e;e.json.write=ht(e.json.write);const t=e.json.origins;if(!t)return e;let n;for(n in t){const e=t[n];e&&(e.write=ht(e.write))}return e}function ht(e){return"object"==typeof e&&e?(!1!==e.enabled&&(e.overridePolicy=dt(e)),e):!0===e?pt():e}function dt(e){const{target:t,writer:n,overridePolicy:i,...s}=e;return function(e,t){const n=ft.call(this,e,t);return n.enabled?{...s,...n}:n}}function pt(){return{overridePolicy:ft}}function ft(e,t){const n=!!this.geometryType;let i={enabled:n};return n&&(i={...i,...yt.call(this,e,t)}),i}function yt(e,t){return{ignoreOrigin:this.originIdOf(t)>ie.DEFAULTS}}let wt=class extends(ut(g(b(I(T(v(N(E(R(S)))))))))){constructor(e){super(e),this.blendMode="normal",this.capabilities=de(!1,!1),this.charts=null,this.definitionExpression=null,this.displayField="",this.effect=null,this.elevationInfo=null,this.featureEffect=null,this.graphType=null,this.labelsVisible=!0,this.labelingInfo=null,this.layerType=null,this.legendEnabled=!0,this.maxScale=0,this.minScale=0,this.objectIdField=fe,this.objectType=null,this.opacity=1,this.orderBy=null,this.parent=null,this.parentCompositeLayer=null,this.persistenceEnabled=!0,this.popupEnabled=!0,this.popupTemplate=null,this.refreshInterval=0,this.source={openPorts:()=>this.load().then((()=>{const e=new MessageChannel;return new D(e.port1,{channel:e,client:{queryFeatures:(e,t={})=>{const n=c.fromJSON(e);return this.queryFeaturesJSON(n,t)}}}),[e.port2]}))},this.type="knowledge-graph-sublayer",this.useViewTime=!0,this.visible=!0}get defaultPopupTemplate(){return this.createPopupTemplate()}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}get fields(){const e=[];return this.objectType?.properties?.forEach((t=>{const n="esriFieldTypeOID"===t.fieldType?"esriFieldTypeInteger":t.fieldType;e.push(M.fromJSON({name:t.name,type:n,alias:t.alias,defaultValue:t.defaultValue,editable:t.editable,nullable:t.nullable}))})),e.push(M.fromJSON({name:this.objectIdField,type:"esriFieldTypeString",alias:this.objectIdField,editable:!1}),M.fromJSON({name:ge,type:"esriFieldTypeInteger",alias:ge,editable:!1}),M.fromJSON({name:be,type:"esriFieldTypeInteger",alias:be,editable:!1})),e}get geometryType(){if("link-chart"===this.parentCompositeLayer?.type)return"relationship"===this.graphType?"polyline":"point";const e=this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name),t=e?.geometryType;return t&&"esriGeometryNull"!==t?C.fromJSON(t):null}get geometryFieldName(){if("link-chart"===this.parentCompositeLayer?.type)return me;const e=this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name);return e?.name??null}get graphTypeName(){return this.objectType?.name}get hasM(){const e=this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name),t=e?.name,n=t?this.objectType?.properties?.[t]:null;return n?.hasM??!1}get hasZ(){const e=this.parentCompositeLayer?.dataManager.geographicLookup.get(this.objectType?.name),t=e?.name,n=t?this.objectType?.properties?.[t]:null;return n?.hasZ??!1}set renderer(e){A(e,this.fieldsIndex),this._set("renderer",e)}get renderer(){return this._isOverridden("renderer")?this._get("renderer"):"link-chart"===this.parentCompositeLayer?.type?"relationship"===this.graphType?$(pe(C.toJSON("polyline")).renderer):$(pe(C.toJSON("point")).renderer):$(pe(C.toJSON(this.geometryType)).renderer)}get spatialReference(){return this.parentCompositeLayer?.dataManager?.knowledgeGraph?.dataModel?.spatialReference??q.WGS84}set timeInfo(e){this._set("timeInfo",e)}get title(){return this._isOverridden("title")?this._get("title"):this.graphTypeName}set title(e){this._set("title",e)}writeTitle(e,t){t.title=e??"Layer"}createPopupTemplate(e){return O(this,e)}createQuery(){return new c({where:"1=1",outFields:["*"]})}getField(e){for(let t=0;t<this.fields.length;t++)if(this.fields[t].name===e)return this.fields[t];return null}getFieldDomain(e,t){return null}async queryFeatures(e,t){const{resolvedQuery:n,queryEngine:i}=await this._setupQueryObjects(e),s=k.fromJSON(await i.executeQuery(n.toJSON(),t?.signal));return s.features.forEach((e=>{e.sourceLayer=this})),s}async queryFeaturesJSON(e,t){const{resolvedQuery:n,queryEngine:i}=await this._setupQueryObjects(e);return await i.executeQuery(n.toJSON(),t?.signal)}async queryFeatureCount(e,t){const{resolvedQuery:n,queryEngine:i}=await this._setupQueryObjects(e);return i.executeQueryForCount(n.toJSON(),t?.signal)}async queryExtent(e={},t){const n={...e,returnGeometry:!0},{resolvedQuery:i,queryEngine:s}=await this._setupQueryObjects(n),r=await s.executeQueryForExtent(i.toJSON(),t?.signal);let o;return o=null!=r.extent?.xmin&&null!=r.extent?.xmax&&null!=r.extent?.ymin&&null!=r.extent?.ymax?new f(r.extent):new f,{count:r.count,extent:o}}async queryObjectIds(e,t){const n=c.from(e);let i;if("link-chart"===this.parentCompositeLayer.type&&this._cachedQueryEngine)i=this._cachedQueryEngine;else{const e=await this.parentCompositeLayer.dataManager.getData(n,this,t);i=this.loadQueryEngine(e)}return i.executeQueryForIds(n.toJSON(),t?.signal)}loadQueryEngine(e){const t=new ce({geometryType:C.toJSON(this.geometryType),hasM:this.hasM,hasZ:this.hasZ}),n=new he({fieldsIndex:this.fieldsIndex.toJSON(),geometryType:C.toJSON(this.geometryType),hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:this.spatialReference.toJSON(),timeInfo:this.timeInfo?.toJSON(),featureStore:t});return n.featureStore.addMany(e),n}async refreshCachedQueryEngine(){const e=await this.parentCompositeLayer.dataManager.getData(new c({where:"1=1",outFields:[fe]}),this);this._cachedQueryEngine=this.loadQueryEngine(e)}load(e){return this.addResolvingPromise(this.parent.load(e).then((()=>{x(this.timeInfo,this.fieldsIndex)}))),Promise.resolve(this)}async _setupQueryObjects(e,t){const n=c.from(e),i=n.geometry;let s;if(i&&!i.spatialReference?.isWGS84&&(await h(i.spatialReference,d),n.geometry=p(i instanceof w||i instanceof F||i instanceof L?i:i.extent,d)),"link-chart"===this.parentCompositeLayer.type&&this._cachedQueryEngine)s=this._cachedQueryEngine;else{const e=await this.parentCompositeLayer.dataManager.getData(n,this,t);s=this.loadQueryEngine(e)}return{resolvedQuery:n,queryEngine:s}}};r([o(ct(j(_)))],wt.prototype,"blendMode",void 0),r([o()],wt.prototype,"capabilities",void 0),r([o({json:{origins:{"web-scene":{write:!1}},write:pt()}})],wt.prototype,"charts",void 0),r([o({readOnly:!0})],wt.prototype,"defaultPopupTemplate",null),r([o({type:String,json:{origins:{service:{read:!1}},name:"layerDefinition.definitionExpression",write:{ignoreOrigin:!0}}})],wt.prototype,"definitionExpression",void 0),r([o()],wt.prototype,"displayField",void 0),r([o(ct(j(P)))],wt.prototype,"effect",void 0),r([o()],wt.prototype,"elevationInfo",void 0),r([o(ct(j(B)))],wt.prototype,"featureEffect",void 0),r([o(ct(j(G)))],wt.prototype,"featureReduction",null),r([o()],wt.prototype,"fields",null),r([o()],wt.prototype,"geometryType",null),r([o()],wt.prototype,"geometryFieldName",null),r([o({type:["entity","relationship"],nonNullable:!0,json:{write:{isRequired:!0,ignoreOrigin:!0}}})],wt.prototype,"graphType",void 0),r([o({type:String,nonNullable:!0,json:{write:{isRequired:!0,ignoreOrigin:!0}}})],wt.prototype,"graphTypeName",null),r([o()],wt.prototype,"hasM",null),r([o()],wt.prototype,"hasZ",null),r([o({type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}},write:{ignoreOrigin:!0}}})],wt.prototype,"id",void 0),r([o(ct(j(H)))],wt.prototype,"labelsVisible",void 0),r([o({type:[U],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:Q,write:pt()}})],wt.prototype,"labelingInfo",void 0),r([o({readOnly:!0,json:{read:!1,write:{writer(e,t){switch(this.parentCompositeLayer.type){case"link-chart":t.layerType="LinkChartSubLayer";break;case"knowledge-graph":t.layerType=this.geometryType?"KnowledgeGraphSubLayer":"KnowledgeGraphSubTable"}},isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],wt.prototype,"layerType",void 0),r([o(ct(j(W)))],wt.prototype,"legendEnabled",void 0),r([o(ct(j(J)))],wt.prototype,"maxScale",void 0),r([o(ct(j(V)))],wt.prototype,"minScale",void 0),r([o()],wt.prototype,"objectIdField",void 0),r([o()],wt.prototype,"objectType",void 0),r([o(ct(j(z)))],wt.prototype,"opacity",void 0),r([o(ct(j(K)))],wt.prototype,"orderBy",void 0),r([o({clonable:!1})],wt.prototype,"parent",void 0),r([o()],wt.prototype,"parentCompositeLayer",void 0),r([o(ct(j(Y)))],wt.prototype,"popupEnabled",void 0),r([o({type:Z,json:{name:"popupInfo",write:{ignoreOrigin:!0}}})],wt.prototype,"popupTemplate",void 0),r([o({type:Number,json:{write:{overridePolicy:yt}}})],wt.prototype,"refreshInterval",void 0),r([o({types:X,json:{name:"layerDefinition.drawingInfo.renderer",write:pt()}})],wt.prototype,"renderer",null),r([o()],wt.prototype,"source",void 0),r([o()],wt.prototype,"spatialReference",null),r([o({type:ee,json:{name:"layerDefinition.timeInfo",write:!0,origins:{"web-document":{name:"layerDefinition.timeInfo",read:!0,write:!0},"portal-item":{name:"layerDefinition.timeInfo",read:!0,write:!0}}}})],wt.prototype,"timeInfo",null),r([o({type:String,json:{write:{isRequired:!0,ignoreOrigin:!0,writerEnsuresNonNull:!0}}})],wt.prototype,"title",null),r([te("title")],wt.prototype,"writeTitle",null),r([o({json:{read:!1}})],wt.prototype,"type",void 0),r([o(ct(j(ne)))],wt.prototype,"useViewTime",void 0),r([o({type:Boolean,json:{name:"visibility",write:pt()}})],wt.prototype,"visible",void 0),wt=r([a("esri.layers.knowledgeGraph.KnowledgeGraphSublayer")],wt);const mt=wt;export{et as A,at as E,tt as F,Ge as L,nt as R,fe as a,Se as b,ve as c,Ce as d,ge as e,He as f,je as g,Pe as h,Le as i,Be as m,me as n,Ne as o,we as r,Me as s,ye as t,mt as u,_e as v};
//# sourceMappingURL=p-e58b8b4b.js.map