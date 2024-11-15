import{h5 as e,jj as n,a0 as r,i$ as t,c1 as i,c2 as u,c3 as o,E as s,X as a,h6 as l,h3 as c,g as f,jk as d,jl as p,T as h,K as m}from"./p-aad64c9f.js";import{m as y,n as b,a as g,h as S}from"./p-4295487d.js";import{t as N}from"./p-11492679.js";import{u as w,w as Z}from"./p-7950bc60.js";import{l as k,p as x}from"./p-1bb606f6.js";class F{}var v;!function(e){e.AsyncNotEnabled="AsyncNotEnabled",e.ModulesNotSupported="ModulesNotSupported",e.CircularModules="CircularModules",e.CannotCompareDateAndTime="CannotCompareDateAndTime",e.NeverReach="NeverReach",e.UnsupportedHashType="UnsupportedHashType",e.InvalidParameter="InvalidParameter",e.FeatureSetDoesNotHaveSubtypes="FeatureSetDoesNotHaveSubtypes",e.UnexpectedToken="UnexpectedToken",e.Unrecognized="Unrecognized",e.UnrecognizedType="UnrecognizedType",e.MaximumCallDepth="MaximumCallDepth",e.BooleanConditionRequired="BooleanConditionRequired",e.TypeNotAllowedInFeature="TypeNotAllowedInFeature",e.KeyMustBeString="KeyMustBeString",e.WrongNumberOfParameters="WrongNumberOfParameters",e.CallNonFunction="CallNonFunction",e.NoFunctionInTemplateLiteral="NoFunctionInTemplateLiteral",e.NoFunctionInDictionary="NoFunctionInDictionary",e.NoFunctionInArray="NoFunctionInArray",e.AssignModuleFunction="AssignModuleFunction",e.LogicExpressionOrAnd="LogicExpressionOrAnd",e.LogicalExpressionOnlyBoolean="LogicalExpressionOnlyBoolean",e.FunctionNotFound="FunctionNotFound",e.InvalidMemberAccessKey="InvalidMemberAccessKey",e.UnsupportedUnaryOperator="UnsupportUnaryOperator",e.InvalidIdentifier="InvalidIdentifier",e.MemberOfNull="MemberOfNull",e.UnsupportedOperator="UnsupportedOperator",e.Cancelled="Cancelled",e.ModuleAccessorMustBeString="ModuleAccessorMustBeString",e.ModuleExportNotFound="ModuleExportNotFound",e.Immutable="Immutable",e.OutOfBounds="OutOfBounds",e.IllegalResult="IllegalResult",e.FieldNotFound="FieldNotFound",e.PortalRequired="PortalRequired",e.LogicError="LogicError",e.ArrayAccessorMustBeNumber="ArrayAccessMustBeNumber",e.KeyAccessorMustBeString="KeyAccessorMustBeString",e.WrongSpatialReference="WrongSpatialReference",e.CannotChangeTimeZoneTime="CannotChangeTimeZoneTime",e.CannotChangeTimeZoneDateOnly="CannotChangeTimeZoneDateOnly"}(v||(v={}));const C={[v.TypeNotAllowedInFeature]:"Feature attributes only support dates, numbers, strings, guids.",[v.LogicError]:"Logic error - {reason}",[v.CannotCompareDateAndTime]:"Cannot compare date or dateonly with timeonly types",[v.NeverReach]:"Encountered unreachable logic",[v.AsyncNotEnabled]:"Async Arcade must be enabled for this script",[v.ModuleAccessorMustBeString]:"Module accessor must be a string",[v.ModuleExportNotFound]:"Module has no export with provided identifier",[v.ModulesNotSupported]:"Current profile does not support modules",[v.ArrayAccessorMustBeNumber]:"Array accessor must be a number",[v.FunctionNotFound]:"Function not found",[v.FieldNotFound]:"Key not found - {key}",[v.CircularModules]:"Circular module dependencies are not allowed",[v.Cancelled]:"Execution cancelled",[v.UnsupportedHashType]:"Type not supported in hash function",[v.IllegalResult]:"Value is not a supported return type",[v.PortalRequired]:"Portal is required",[v.InvalidParameter]:"Invalid parameter",[v.WrongNumberOfParameters]:"Call with wrong number of parameters",[v.Unrecognized]:"Unrecognized code structure",[v.UnrecognizedType]:"Unrecognized type",[v.WrongSpatialReference]:"Cannot work with geometry in this spatial reference. It is different to the execution spatial reference",[v.BooleanConditionRequired]:"Conditions must use booleans",[v.NoFunctionInDictionary]:"Dictionaries cannot contain functions.",[v.NoFunctionInArray]:"Arrays cannot contain functions.",[v.NoFunctionInTemplateLiteral]:"Template Literals do not expect functions by value.",[v.KeyAccessorMustBeString]:"Accessor must be a string",[v.KeyMustBeString]:"Object keys must be a string",[v.Immutable]:"Object is immutable",[v.UnexpectedToken]:"Unexpected token",[v.MemberOfNull]:"Cannot access property of null object",[v.MaximumCallDepth]:"Exceeded maximum function depth",[v.OutOfBounds]:"Out of bounds",[v.InvalidIdentifier]:"Identifier not recognized",[v.CallNonFunction]:"Expression is not a function",[v.InvalidMemberAccessKey]:"Cannot access value using a key of this type",[v.AssignModuleFunction]:"Cannot assign function to module variable",[v.UnsupportedUnaryOperator]:"Unsupported unary operator",[v.UnsupportedOperator]:"Unsupported operator",[v.LogicalExpressionOnlyBoolean]:"Logical expressions must be boolean",[v.LogicExpressionOrAnd]:"Logical expression can only be combined with || or &&",[v.CannotChangeTimeZoneTime]:"Cannot change the timezone of a Time",[v.CannotChangeTimeZoneDateOnly]:"Cannot change the timezone of a DateOnly",[v.FeatureSetDoesNotHaveSubtypes]:"FeatureSet does not have subtypes"};class D extends Error{constructor(...e){super(...e)}}class M extends D{constructor(e,n){super(O(n)+e.message,{cause:e}),this.loc=null,Error.captureStackTrace&&Error.captureStackTrace(this,M),n?.loc&&(this.loc=n.loc)}}class A extends Error{constructor(n,r,t,i){super("Execution error - "+O(t)+e(C[r],i)),this.loc=null,this.declaredRootClass="esri.arcade.arcadeexecutionerror",Error.captureStackTrace&&Error.captureStackTrace(this,A),t?.loc&&(this.loc=t.loc)}}function O(e){return e&&e.loc?`Line : ${e.loc.start?.line}, ${e.loc.start?.column}: `:""}class T extends Error{constructor(n,r,t,i){super("Compilation error - "+O(t)+e(C[r],i)),this.loc=null,this.declaredRootClass="esri.arcade.arcadecompilationerror",Error.captureStackTrace&&Error.captureStackTrace(this,T),t?.loc&&(this.loc=t.loc)}}class E extends Error{constructor(){super("Uncompilable code structures"),this.declaredRootClass="esri.arcade.arcadeuncompilableerror",Error.captureStackTrace&&Error.captureStackTrace(this,E)}}function j(e,n,r){return"esri.arcade.arcadeexecutionerror"===r.declaredRootClass||"esri.arcade.arcadecompilationerror"===r.declaredRootClass?null===r.loc&&n?.loc?new M(r,{cause:r}):r:n?.loc?new M(r,{cause:r}):r}var L;!function(e){e.UnrecognizedUri="UnrecognizedUri",e.UnsupportedUriProtocol="UnsupportedUriProtocol"}(L||(L={}));const Y={[L.UnrecognizedUri]:"Unrecognized uri - {uri}",[L.UnsupportedUriProtocol]:"Unrecognized uri protocol"};class U extends Error{constructor(n,r){super(e(Y[n],r)),this.declaredRootClass="esri.arcade.arcademoduleerror",Error.captureStackTrace&&Error.captureStackTrace(this,U)}}class R{constructor(){}}function I(e,n,r){if(e instanceof R&&!(e instanceof z)){const t=new z;return t.fn=e,t.parameterEvaluator=r,t.context=n,t}return e}class P extends R{constructor(e){super(),this.fn=e}createFunction(e){return(...n)=>this.fn(e,{preparsed:!0,arguments:n})}call(e,n){return this.fn(e,n)}marshalledCall(e,r,t,i){return i(e,r,((r,u,o)=>{o=o.map((n=>n instanceof R&&!(n instanceof z)?I(n,e,i):n));const s=this.call(t,{args:o});return n(s)?s.then((e=>I(e,t,i))):s}))}}class z extends R{constructor(){super(...arguments),this.fn=null,this.context=null}createFunction(e){return this.fn.createFunction(this.context)}call(e,n){return this.fn.marshalledCall(e,n,this.context,this.parameterEvaluator)}marshalledCall(e,n,r){return this.fn.marshalledCall(e,n,this.context,this.parameterEvaluator)}}class G extends N{constructor(e,n,r,t,i,u){super(e),this._lazyPt=[],this._hasZ=!1,this._hasM=!1,this._spRef=n,this._hasZ=r,this._hasM=t,this._cacheId=i,this._partId=u}get(e){if(void 0===this._lazyPt[e]){const n=this._elements[e];if(void 0===n)return;const t=this._hasZ,i=this._hasM;let u;u=t&&!i?new r(n[0],n[1],n[2],void 0,this._spRef):i&&!t?new r(n[0],n[1],void 0,n[2],this._spRef):t&&i?new r(n[0],n[1],n[2],n[3],this._spRef):new r(n[0],n[1],this._spRef),u.cache._arcadeCacheId=this._cacheId.toString()+"-"+this._partId.toString()+"-"+e.toString(),this._lazyPt[e]=u}return this._lazyPt[e]}equalityTest(e){return e===this||null!==e&&(e instanceof G!=!1&&e.getUniqueHash()===this.getUniqueHash())}getUniqueHash(){return this._cacheId.toString()+"-"+this._partId.toString()}}class J extends N{constructor(e,n,r,t,i){super(e),this._lazyPath=[],this._hasZ=!1,this._hasM=!1,this._hasZ=r,this._hasM=t,this._spRef=n,this._cacheId=i}get(e){if(void 0===this._lazyPath[e]){const n=this._elements[e];if(void 0===n)return;this._lazyPath[e]=new G(n,this._spRef,this._hasZ,this._hasM,this._cacheId,e)}return this._lazyPath[e]}equalityTest(e){return e===this||null!==e&&(e instanceof J!=!1&&e.getUniqueHash()===this.getUniqueHash())}getUniqueHash(){return this._cacheId.toString()}}class B{constructor(e){this.value=e}}class H{constructor(e){this.value=e}}const q={type:"VOID"},K=Symbol("BREAK"),_=Symbol("CONTINUE");function $(e,n,r){return""===n||null==n||n===r||n===r?e:e=e.split(n).join(r)}function V(e){return e instanceof R}function W(e){return e instanceof F}function Q(e){return!!ne(e)||(!!te(e)||(!!me(e)||(!!ye(e)||(!!be(e)||(!!re(e)||(null===e||(e===q||"number"==typeof e)))))))}function X(e,n){return void 0===e?n:e}function ee(e){return null==e?"":oe(e)||he(e)?"Array":me(e)?"Date":be(e)?"Time":ye(e)?"DateOnly":ne(e)?"String":re(e)?"Boolean":te(e)?"Number":"esri.arcade.Attachment"===e?.declaredClass?"Attachment":"esri.arcade.Portal"===e?.declaredClass?"Portal":"esri.arcade.Dictionary"===e?.declaredClass?"Dictionary":pe(e)?"KnowledgeGraph":e instanceof F?"Module":se(e)?"Feature":e instanceof r?"Point":e instanceof i?"Polygon":e instanceof u?"Polyline":e instanceof o?"Multipoint":e instanceof s?"Extent":V(e)?"Function":ce(e)?"FeatureSet":de(e)?"FeatureSetCollection":e===q?"":"number"==typeof e&&isNaN(e)?"Number":"Unrecognized Type"}function ne(e){return"string"==typeof e||e instanceof String}function re(e){return"boolean"==typeof e}function te(e){return"number"==typeof e}function ie(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}function ue(e){return e instanceof t}function oe(e){return Array.isArray(e)}function se(e){return"esri.arcade.Feature"===e?.arcadeDeclaredClass}function ae(e){return"esri.Graphic"===e?.declaredClass}function le(e){return e instanceof a}function ce(e){return"esri.arcade.featureset.support.FeatureSet"===e?.declaredRootClass}function fe(e){return"esri.arcade.Dictionary"===e?.declaredClass}function de(e){return"esri.arcade.featureSetCollection"===e?.declaredRootClass}function pe(e){return"esri.rest.knowledgeGraph.KnowledgeGraph"===e?.declaredClass}function he(e){return e instanceof N}function me(e){return e instanceof y}function ye(e){return e instanceof g}function be(e){return e instanceof b}function ge(e){return null!=e&&"object"==typeof e}function Se(e){return e instanceof Date}function Ne(e,n,r,t,i){if(e.length<n||e.length>r)throw new A(t,v.WrongNumberOfParameters,i)}function we(e){return e<0?-Math.round(-e):Math.round(e)}function Ze(e,n){return isNaN(e)||null==n||""===n?e.toString():(n=$(n,"‰",""),n=$(n,"¤",""),k(e,{pattern:n}))}function ke(e,n){return null==n||""===n?e.toISOString(!0):e.toFormat(xe(n),{locale:l(),numberingSystem:"latn"})}function xe(e,n=!1){e=e.replaceAll(/LTS|LT|L{1,4}|l{1,4}/g,"[$&]");let r="";const t=/(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|M{1,4}|Do|DDDo|D{1,4}|d{2,4}|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|Z{1,5}|.)/g;for(const i of e.match(t)||[])switch(i){case"D":r+="d";break;case"DD":r+="dd";break;case"DDD":r+="o";break;case"d":r+="c";break;case"ddd":r+="ccc";break;case"dddd":r+="cccc";break;case"M":r+="L";break;case"MM":r+="LL";break;case"MMM":r+="LLL";break;case"MMMM":r+="LLLL";break;case"YY":r+="yy";break;case"Y":case"YYYY":r+="yyyy";break;case"Q":r+="q";break;case"Z":r+="Z";break;case"ZZ":r+="ZZ";break;case"ZZZ":r+="ZZZ";break;case"ZZZZ":r+=n?"[ZZZZ]":"ZZZZ";break;case"ZZZZZ":r+=n?"[ZZZZZ]":"ZZZZZ";break;case"S":r+="'S'";break;case"SS":r+="'SS'";break;case"SSS":r+="u";break;case"A":case"a":r+="a";break;case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":case"X":case"x":r+=i;break;default:i.length>=2&&"["===i.slice(0,1)&&"]"===i.slice(-1)?r+=`'${i.slice(1,-1)}'`:r+=`'${i}'`}return r}function Fe(e,n,r){switch(r){case">":return e>n;case"<":return e<n;case">=":return e>=n;case"<=":return e<=n}return!1}function ve(e,n,r){if(null===e){if(null===n||n===q)return Fe(null,null,r);if(te(n))return Fe(0,n,r);if(ne(n))return Fe(0,Te(n),r);if(re(n))return Fe(0,Te(n),r);if(me(n))return Fe(0,n.toNumber(),r);if(be(n))return Fe(e,n.toNumber(),r);if(ye(n))return Fe(e,n.toNumber(),r)}if(e===q){if(null===n||n===q)return Fe(null,null,r);if(te(n))return Fe(0,n,r);if(ne(n))return Fe(0,Te(n),r);if(re(n))return Fe(0,Te(n),r);if(me(n))return Fe(0,n.toNumber(),r);if(be(n))return Fe(e,n.toNumber(),r);if(ye(n))return Fe(e,n.toNumber(),r)}else if(te(e)){if(te(n))return Fe(e,n,r);if(re(n))return Fe(e,Te(n),r);if(null===n||n===q)return Fe(e,0,r);if(ne(n))return Fe(e,Te(n),r);if(me(n))return Fe(e,n.toNumber(),r);if(be(n))return Fe(e,n.toNumber(),r);if(ye(n))return Fe(e,n.toNumber(),r)}else if(ne(e)){if(ne(n))return Fe(De(e),De(n),r);if(me(n))return Fe(Te(e),n.toNumber(),r);if(be(n))return Fe(Te(e),n.toNumber(),r);if(ye(n))return Fe(Te(e),n.toNumber(),r);if(te(n))return Fe(Te(e),n,r);if(null===n||n===q)return Fe(Te(e),0,r);if(re(n))return Fe(Te(e),Te(n),r)}else if(me(e)){if(me(n))return e.timeZone!==n.timeZone&&(e.isUnknownTimeZone?e=y.arcadeDateAndZoneToArcadeDate(e,n.timeZone):n.isUnknownTimeZone&&(n=y.arcadeDateAndZoneToArcadeDate(n,e.timeZone))),Fe(e.toNumber(),n.toNumber(),r);if(null===n||n===q)return Fe(e.toNumber(),0,r);if(te(n))return Fe(e.toNumber(),n,r);if(re(n))return Fe(e.toNumber(),Te(n),r);if(ne(n))return Fe(e.toNumber(),Te(n),r);if(be(n))throw new A(null,v.CannotCompareDateAndTime,null);if(ye(n))return Fe(e.toNumber(),n.toNumber(),r)}else if(re(e)){if(re(n))return Fe(e,n,r);if(te(n))return Fe(Te(e),Te(n),r);if(me(n))return Fe(Te(e),n.toNumber(),r);if(be(n))return Fe(Te(e),n.toNumber(),r);if(ye(n))return Fe(Te(e),n.toNumber(),r);if(null===n||n===q)return Fe(Te(e),0,r);if(ne(n))return Fe(Te(e),Te(n),r)}else if(ye(e)){if(me(n))return Fe(e.toNumber(),n.toNumber(),r);if(null===n||n===q)return Fe(e.toNumber(),0,r);if(te(n))return Fe(e.toNumber(),n,r);if(re(n))return Fe(e.toNumber(),Te(n),r);if(ne(n))return Fe(e.toNumber(),Te(n),r);if(be(n))throw new A(null,v.CannotCompareDateAndTime,null);if(ye(n))return Fe(e.toNumber(),n.toNumber(),r)}else if(be(e)){if(me(n))throw new A(null,v.CannotCompareDateAndTime,null);if(null===n||n===q)return Fe(e.toNumber(),0,r);if(te(n))return Fe(e.toNumber(),n,r);if(re(n))return Fe(e.toNumber(),Te(n),r);if(ne(n))return Fe(e.toNumber(),Te(n),r);if(be(n))return Fe(e.toNumber(),n.toNumber(),r);if(ye(n))throw new A(null,v.CannotCompareDateAndTime,null)}return!!Ce(e,n)&&("<="===r||">="===r)}function Ce(e,n){if(e===n)return!0;if(null===e&&n===q||null===n&&e===q)return!0;if(me(e)&&me(n))return e.equals(n);if(be(e)&&be(n))return e.equals(n);if(ye(e)&&ye(n))return e.equals(n);if(e instanceof J)return e.equalityTest(n);if(e instanceof G)return e.equalityTest(n);if(e instanceof r&&n instanceof r){const r=e.cache._arcadeCacheId,t=n.cache._arcadeCacheId;if(null!=r)return r===t}if(ge(e)&&ge(n)){if(e._arcadeCacheId===n._arcadeCacheId&&void 0!==e._arcadeCacheId&&null!==e._arcadeCacheId)return!0;if(e._underlyingGraphic===n._underlyingGraphic&&void 0!==e._underlyingGraphic&&null!==e._underlyingGraphic)return!0}return!1}function De(e,n){if(ne(e))return e;if(null===e)return"";if(te(e))return Ze(e,n);if(re(e))return e.toString();if(me(e))return ke(e,n);if(be(e))return e.toFormat(n);if(ye(e))return e.toFormat(n);if(e instanceof t)return JSON.stringify(e.toJSON());if(oe(e)){const n=[];for(let r=0;r<e.length;r++)n[r]=Oe(e[r]);return"["+n.join(",")+"]"}if(e instanceof N){const n=[];for(let r=0;r<e.length();r++)n[r]=Oe(e.get(r));return"["+n.join(",")+"]"}return null!==e&&"object"==typeof e&&void 0!==e.castToText?e.castToText():V(e)?"object, Function":e===q?"":W(e)?"object, Module":""}function Me(e){const n=[];if(!oe(e))return null;if(e instanceof N){for(let r=0;r<e.length();r++)n[r]=Te(e.get(r));return n}for(let r=0;r<e.length;r++)n[r]=Te(e[r]);return n}function Ae(e,n,r=!1){if(ne(e))return e;if(null===e)return"";if(te(e))return Ze(e,n);if(re(e))return e.toString();if(me(e))return ke(e,n);if(be(e))return e.toFormat(n);if(ye(e))return e.toFormat(n);if(e instanceof t)return e instanceof s?'{"xmin":'+e.xmin.toString()+',"ymin":'+e.ymin.toString()+","+(e.hasZ?'"zmin":'+e.zmin.toString()+",":"")+(e.hasM?'"mmin":'+e.mmin.toString()+",":"")+'"xmax":'+e.xmax.toString()+',"ymax":'+e.ymax.toString()+","+(e.hasZ?'"zmax":'+e.zmax.toString()+",":"")+(e.hasM?'"mmax":'+e.mmax.toString()+",":"")+'"spatialReference":'+Je(e.spatialReference)+"}":Je(e.toJSON(),((e,n)=>e.key===n.key?0:"spatialReference"===e.key?1:"spatialReference"===n.key||e.key<n.key?-1:e.key>n.key?1:0));if(oe(e)){const n=[];for(let t=0;t<e.length;t++)n[t]=Oe(e[t],r);return"["+n.join(",")+"]"}if(e instanceof N){const n=[];for(let t=0;t<e.length();t++)n[t]=Oe(e.get(t),r);return"["+n.join(",")+"]"}return null!==e&&"object"==typeof e&&void 0!==e.castToText?e.castToText(r):V(e)?"object, Function":e===q?"":W(e)?"object, Module":""}function Oe(e,n=!1){if(null===e)return"null";if(re(e)||te(e)||ne(e))return JSON.stringify(e);if(e instanceof t)return Ae(e,null,n);if(e instanceof N)return Ae(e,null,n);if(Array.isArray(e))return Ae(e,null,n);if(me(e))return n?JSON.stringify(e.getTime()):JSON.stringify(ke(e,""));if(be(e))return JSON.stringify(e.toString());if(ye(e))return JSON.stringify(e.toString());if(null!==e&&"object"==typeof e){if(void 0!==e.castToText)return e.castToText(n)}else if(e===q)return"null";return"null"}function Te(e,n){return te(e)?e:null===e||""===e?0:me(e)||ye(e)||be(e)?NaN:re(e)?e?1:0:oe(e)||""===e||void 0===e?NaN:void 0!==n&&ne(e)?(n=$(n,"‰",""),n=$(n,"¤",""),x(e,{pattern:n})):e===q?0:Number(e)}function Ee(e,n){if(me(e))return e;if(ne(e)){const r=je(e,n);if(r)return y.dateTimeToArcadeDate(r)}return null}function je(e,n){const r=/ (\d\d)/,t=S(n);let i=c.DateTime.fromISO(e,{zone:t});return i.isValid||r.test(e)&&(e=e.replace(r,"T$1"),i=c.DateTime.fromISO(e,{zone:n}),i.isValid)?i:null}function Le(e){return re(e)?e:ne(e)?"true"===(e=e.toLowerCase()):!!te(e)&&(0!==e&&!isNaN(e))}function Ye(e,n){const r=JSON.parse(e);return r&&!r.spatialReference&&(r.spatialReference=n),f(r)}function Ue(e,n){return null==e?null:(null!==e.spatialReference&&void 0!==e.spatialReference||(e.spatialReference=n),e)}function Re(e){if(null===e)return null;if(e instanceof r)return"NaN"===e.x||null===e.x||isNaN(e.x)?null:e;if(e instanceof i){if(0===e.rings.length)return null;for(const n of e.rings)if(n.length>0)return e;return null}if(e instanceof u){if(0===e.paths.length)return null;for(const n of e.paths)if(n.length>0)return e;return null}return e instanceof o?0===e.points.length?null:e:e instanceof s?"NaN"===e.xmin||null===e.xmin||isNaN(e.xmin)?null:e:null}function Ie(e,n){if(!e)return n;if(!e.domain)return n;let r=null,t=null;if(me(n))r=n.toNumber();else if(ye(n))r=n.toString();else if(be(n))r=n.toStorageString();else if("string"===e.field.type||"esriFieldTypeString"===e.field.type)r=De(n);else{if(null==n)return null;if(""===n)return n;r=Te(n)}for(let n=0;n<e.domain.codedValues.length;n++){const i=e.domain.codedValues[n];i.code===r&&(t=i)}return null===t?De(n):t.name}function Pe(e,n){if(!e)return n;if(!e.domain)return n;let r=null;const t=De(n);for(let n=0;n<e.domain.codedValues.length;n++){const i=e.domain.codedValues[n];i.name===t&&(r=i)}return null===r?n:r.code}function ze(e,n,r=null,t=null){if(!n)return null;if(!n.fields)return null;let i,u,o=null;for(let r=0;r<n.fields.length;r++){const t=n.fields[r];t.name.toLowerCase()===e.toString().toLowerCase()&&(o=t)}if(null===o)throw new A(null,v.FieldNotFound,null,{key:e});let s=n.typeIdField,a="id",l=n.types;if(n.subtypeField&&(s=n.subtypeField,a="code",l=n.subtypes??[]),null===t&&r&&s)t=r.hasField(s)?r.field(s):null;else if(s&&null!==t){let e=!1;for(const n of l||[])if(t===n[a]){e=!0;break}if(!e)for(const n of l||[])if(t===n.name){t=n[a],e=!0;break}e||(t=null,r&&s&&(t=r.hasField(s)?r.field(s):null))}return null!=t&&l.some((e=>e[a]===t&&(i=e.domains?.[o.name],i&&"inherited"===i.type&&(i=Ge(o.name,n),u=!0),!0))),u||i||(i=Ge(e,n)),{field:o,domain:i}}function Ge(e,n){let r;return n.fields.some((n=>(n.name.toLowerCase()===e.toLowerCase()&&(r=n.domain),!!r))),r}function Je(e,n){n||(n={}),"function"==typeof n&&(n={cmp:n});const r="boolean"==typeof n.cycles&&n.cycles,t=n.cmp&&(i=n.cmp,function(e){return function(n,r){const t={key:n,value:e[n]},u={key:r,value:e[r]};return i(t,u)}});var i;const u=[];return function e(n){if(n?.toJSON&&"function"==typeof n.toJSON&&(n=n.toJSON()),void 0===n)return;if("number"==typeof n)return isFinite(n)?""+n:"null";if("object"!=typeof n)return JSON.stringify(n);let i,o;if(Array.isArray(n)){for(o="[",i=0;i<n.length;i++)i&&(o+=","),o+=e(n[i])||"null";return o+"]"}if(null===n)return"null";if(u.includes(n)){if(r)return JSON.stringify("__cycle__");throw new TypeError("Converting circular structure to JSON")}const s=u.push(n)-1,a=Object.keys(n).sort(t?.(n));for(o="",i=0;i<a.length;i++){const r=a[i],t=e(n[r]);t&&(o&&(o+=","),o+=JSON.stringify(r)+":"+t)}return u.splice(s,1),"{"+o+"}"}(e)}function Be(e){if(null===e)return null;const n=[];for(const r of e)r?.arcadeDeclaredClass&&"esri.arcade.Feature"===r.arcadeDeclaredClass?n.push(r.geometry()):n.push(r);return n}function He(e,n){if(!(n instanceof r))throw new A(null,v.InvalidParameter,null);e.push(n.hasZ?n.hasM?[n.x,n.y,n.z,n.m]:[n.x,n.y,n.z]:[n.x,n.y])}function qe(e,n){if(oe(e)||he(e)){let r=!1,t=!1,u=[],o=n;if(oe(e)){for(const n of e)He(u,n);u.length>0&&(o=e[0].spatialReference,r=e[0].hasZ,t=e[0].hasM)}else if(e instanceof G)u=e._elements,u.length>0&&(r=e._hasZ,t=e._hasM,o=e.get(0).spatialReference);else{if(!he(e))throw new A(null,v.InvalidParameter,null);for(const n of e.toArray())He(u,n);u.length>0&&(o=e.get(0).spatialReference,r=!0===e.get(0).hasZ,t=!0===e.get(0).hasM)}if(0===u.length)return null;return d(u)||(u=u.slice().reverse()),new i({rings:[u],spatialReference:o,hasZ:r,hasM:t})}return e}function Ke(e,n){if(oe(e)||he(e)){let r=!1,t=!1,i=[],o=n;if(oe(e)){for(const n of e)He(i,n);i.length>0&&(o=e[0].spatialReference,r=!0===e[0].hasZ,t=!0===e[0].hasM)}else if(e instanceof G)i=e._elements,i.length>0&&(r=e._hasZ,t=e._hasM,o=e.get(0).spatialReference);else if(he(e)){for(const n of e.toArray())He(i,n);i.length>0&&(o=e.get(0).spatialReference,r=!0===e.get(0).hasZ,t=!0===e.get(0).hasM)}return 0===i.length?null:new u({paths:[i],spatialReference:o,hasZ:r,hasM:t})}return e}function _e(e,n){if(oe(e)||he(e)){let r=!1,t=!1,i=[],u=n;if(oe(e)){for(const n of e)He(i,n);i.length>0&&(u=e[0].spatialReference,r=!0===e[0].hasZ,t=!0===e[0].hasM)}else if(e instanceof G)i=e._elements,i.length>0&&(r=e._hasZ,t=e._hasM,u=e.get(0).spatialReference);else if(he(e)){for(const n of e.toArray())He(i,n);i.length>0&&(u=e.get(0).spatialReference,r=!0===e.get(0).hasZ,t=!0===e.get(0).hasM)}return 0===i.length?null:new o({points:i,spatialReference:u,hasZ:r,hasM:t})}return e}function $e(e,n=!1){const r=[];if(null===e)return r;if(!0===oe(e)){for(let t=0;t<e.length;t++){const i=De(e[t]);""===i&&!0!==n||r.push(i)}return r}if(e instanceof N){for(let t=0;t<e.length();t++){const i=De(e.get(t));""===i&&!0!==n||r.push(i)}return r}if(Q(e)){const t=De(e);return""===t&&!0!==n||r.push(t),r}return[]}let Ve=0;function We(e){return Ve++,Ve%100==0?(Ve=0,new Promise((n=>{setTimeout((()=>{n(e)}),0)}))):e}function Qe(e,n,r){switch(r){case"&":return e&n;case"|":return e|n;case"^":return e^n;case"<<":return e<<n;case">>":return e>>n;case">>>":return e>>>n}}function Xe(e,n=null){return null==e?null:re(e)||te(e)||ne(e)?e:e instanceof t?!0===n?.keepGeometryType?e:e.toJSON():e instanceof N?e.toArray().map((e=>Xe(e,n))):Array.isArray(e)?e.map((e=>Xe(e,n))):Se(e)?e:me(e)?e.toJSDate():be(e)?e.toString():ye(e)?e.toJSDate():null!==e&&"object"==typeof e&&void 0!==e.castAsJson?e.castAsJson(n):null}async function en(e,n,r,t,i){const u=await nn(e,n,r);i[t]=u}async function nn(e,n=null,r=null){if(e instanceof N&&(e=e.toArray()),null==e)return null;if(Q(e)||e instanceof t||Se(e)||me(e))return Xe(e,r);if(Array.isArray(e)){const i=[],u=[];for(const o of e)null===o||Q(o)||o instanceof t||Se(o)||me(o)?u.push(Xe(o,r)):(u.push(null),i.push(en(o,n,r,u.length-1,u)));return i.length>0&&await Promise.all(i),u}return null!==e&&"object"==typeof e&&void 0!==e.castAsJsonAsync?e.castAsJsonAsync(n,r):null}function rn(e){return tn(e)?e.parent:e}function tn(e){return e&&"declaredClass"in e&&"esri.layers.support.SubtypeSublayer"===e.declaredClass}function un(e){return e&&"declaredClass"in e&&"esri.layers.SubtypeGroupLayer"===e.declaredClass}function on(e,n,r){const t=rn(e.fullSchema());if(null===t)return null;if(!t.fields)return null;return ze(n,t,e,r)}function sn(e){const n=rn(e.fullSchema());return null===n?null:n.fields?n.subtypeField?{subtypeField:n.subtypeField,subtypes:n.subtypes?n.subtypes.map((e=>({name:e.name,code:e.code}))):[]}:n.typeIdField?{subtypeField:n.typeIdField,subtypes:n.types?n.types.map((e=>({name:e.name,code:e.id}))):[]}:null:null}function an(e,n,r,t){const i=rn(e.fullSchema());if(null===i)return null;if(!i.fields)return null;const u=ze(n,i,e,t);if(void 0===r)try{r=e.field(n)}catch(e){return null}return Ie(u,r)}function ln(e,n,r,t){const i=rn(e.fullSchema());if(null===i)return null;if(!i.fields)return null;if(void 0===r){try{r=e.field(n)}catch(e){return null}return r}return Pe(ze(n,i,e,t),r)}function cn(e){return e?.timeZone??"system"}function fn(e){const n=rn(e.fullSchema());if(null===n)return null;if(!n.fields)return null;const r=[];for(const e of n.fields)r.push(w(e));return{objectIdField:n.objectIdField,globalIdField:n.globalIdField??"",geometryType:void 0===Z[n.geometryType]?"":Z[n.geometryType],fields:r}}function dn(e,n){return"system"===e&&(e=y.systemTimeZoneCanonicalName),{version:pn,engineVersion:p,timeZone:e,spatialReference:n instanceof h?n.toJSON():n,application:m.applicationName??"",engine:"web",locale:l()}}const pn="1.28",hn=Object.freeze(Object.defineProperty({__proto__:null,ImplicitResult:H,ReturnResult:B,absRound:we,arcadeVersion:pn,autoCastArrayOfPointsToMultiPoint:_e,autoCastArrayOfPointsToPolygon:qe,autoCastArrayOfPointsToPolyline:Ke,autoCastFeatureToGeometry:Be,binaryOperator:Qe,breakResult:K,castAsJson:Xe,castAsJsonAsync:nn,continueResult:_,defaultExecutingContext:dn,defaultTimeZone:cn,defaultUndefined:X,equalityTest:Ce,featureDomainCodeLookup:ln,featureDomainValueLookup:an,featureFullDomain:on,featureSchema:fn,featureSubtypes:sn,fixNullGeometry:Re,fixSpatialReference:Ue,formatDate:ke,formatNumber:Ze,getDomain:ze,getDomainCode:Pe,getDomainValue:Ie,getType:ee,greaterThanLessThan:ve,isArray:oe,isBoolean:re,isDate:me,isDateOnly:ye,isDictionary:fe,isFeature:se,isFeatureSet:ce,isFeatureSetCollection:de,isFunctionParameter:V,isGeometry:ue,isGraphic:ae,isImmutableArray:he,isInteger:ie,isJsDate:Se,isKnowledgeGraph:pe,isModule:W,isNumber:te,isObject:ge,isQuery:le,isSimpleType:Q,isString:ne,isSubtypeGrouplayer:un,isSubtypeSublayer:tn,isTime:be,multiReplace:$,parseGeometryFromJson:Ye,pcCheck:Ne,stableStringify:Je,standardiseDateFormat:xe,tick:We,toBoolean:Le,toDate:Ee,toNumber:Te,toNumberArray:Me,toString:De,toStringArray:$e,toStringExplicit:Ae,voidOperation:q},Symbol.toStringTag,{value:"Module"}));export{hn as $,Ue as A,cn as B,an as C,ln as D,oe as E,dn as F,ee as G,ae as H,Q as I,$ as J,ce as K,re as L,q as M,P as N,Ke as O,ne as P,fe as Q,_e as R,Le as S,Re as T,se as U,ie as V,de as W,he as X,Xe as Y,T as Z,K as _,A as a,_ as a0,ve as a1,Qe as a2,B as a3,H as a4,F as a5,z as a6,R as a7,I as a8,E as a9,U as aa,L as ab,j as ac,We as ad,tn as ae,$e as af,ze as ag,Ie as ah,Pe as ai,pe as aj,Se as ak,nn as b,Ee as c,De as d,me as e,J as f,Ne as g,Te as h,G as i,X as j,qe as k,xe as l,Ce as m,be as n,we as o,Me as p,ue as q,v as r,fn as s,ye as t,sn as u,V as v,Be as w,on as x,Ae as y,te as z};
//# sourceMappingURL=p-63562f76.js.map