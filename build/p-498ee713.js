import{C as t,X as n,M as e,L as r,f as a,m as i,s as o,p as s,N as c,e as u,a as l,D as w,b as f}from"./p-448d8eb2.js";import{g as h,L as d,a as p,r as y,N as v,a3 as m,a4 as b,M as x,v as S,_ as j,a0 as g,ac as E,P as F,E as I,z as R,h as k,U as M,X as A,d as C,a1 as D,m as T,a2 as V,A as Z,H as L,a5 as B,a6 as N,K as P,a7 as q,a8 as G}from"./p-63562f76.js";import{registerFunctions as H}from"./p-21d77617.js";import{T as U,i$ as X}from"./p-aad64c9f.js";import"./p-4295487d.js";import"./p-11492679.js";import"./p-875cbb57.js";import"./p-da522976.js";import"./p-aff89b86.js";import"./p-d492d39b.js";import"./p-1bb606f6.js";import"./p-7950bc60.js";import"./p-180be586.js";import"./p-4e3882f9.js";import"./p-2af77f97.js";const z=100;async function O(t,n){const e=[];for(let r=0;r<n.arguments.length;r++)e.push(await K(t,n.arguments[r]));return e}async function W(t,n,e){if(!0===n.preparsed)return e(t,null,n.arguments);return e(t,n,await O(t,n))}class $ extends q{constructor(t,n){super(),this.definition=null,this.context=null,this.definition=t,this.context=n}createFunction(t){return(...n)=>{const e={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeZone:this.context.timeZone??null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:t.depthCounter+1},globalScope:this.context.globalScope};if(e.depthCounter.depth>64)throw new p(t,y.MaximumCallDepth,null);return Lt(this.definition,e,n,null)}}call(t,n){return J(t,n,((e,r,a)=>{const i={spatialReference:t.spatialReference,services:t.services,console:t.console,libraryResolver:t.libraryResolver,exports:t.exports,lrucache:t.lrucache,timeZone:t.timeZone??null,interceptor:t.interceptor,localScope:{},abortSignal:t.abortSignal,globalScope:t.globalScope,depthCounter:{depth:t.depthCounter.depth+1}};if(i.depthCounter.depth>64)throw new p(t,y.MaximumCallDepth,n);return Lt(this.definition,i,a,n)}))}marshalledCall(t,n,e,r){return r(t,n,(async(a,i,o)=>{const s={spatialReference:t.spatialReference,globalScope:e.globalScope,depthCounter:{depth:t.depthCounter.depth+1},libraryResolver:t.libraryResolver,exports:t.exports,console:t.console,abortSignal:t.abortSignal,lrucache:t.lrucache,timeZone:t.timeZone??null,interceptor:t.interceptor,localScope:{}};return o=o.map((n=>!S(n)||n instanceof N?n:G(n,t,r))),G(await Lt(this.definition,s,o,n),e,r)}))}}class _ extends B{constructor(t){super(),this.source=t}async global(t){const n=this.executingContext.globalScope[t.toLowerCase()];if(n.valueset||(n.value=await K(this.executingContext,n.node),n.valueset=!0),S(n.value)&&!(n.value instanceof N)){const t=new N;t.fn=n.value,t.parameterEvaluator=J,t.context=this.executingContext,n.value=t}return n.value}setGlobal(t,n){if(S(n))throw new p(null,y.AssignModuleFunction,null);this.executingContext.globalScope[t.toLowerCase()]={value:n,valueset:!0,node:null}}hasGlobal(t){return void 0===this.executingContext.exports[t]&&(t=t.toLowerCase()),void 0!==this.executingContext.exports[t]}async loadModule(t){let n=t.spatialReference;null==n&&(n=new U({wkid:102100})),this.moduleScope=Pt({},t.customfunctions,t.timeZone),this.executingContext={spatialReference:n,services:t.services,libraryResolver:new f(t.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:void 0===t.abortSignal||null===t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:this.moduleScope,console:t.console??qt,lrucache:t.lrucache,timeZone:t.timeZone??null,interceptor:t.interceptor,localScope:null,depthCounter:{depth:1}},await vt(this.executingContext,this.source.syntax)}}async function J(t,n,e){if(!0===n.preparsed)return e(t,null,n.arguments);return e(t,n,await O(t,n))}async function K(t,n){n.breakpoint&&await n.breakpoint();try{switch(n.type){case"UpdateExpression":return await ft(t,n);case"AssignmentExpression":return await dt(t,n);case"TemplateLiteral":return await Dt(t,n);case"Identifier":return await At(t,n);case"MemberExpression":return await Ft(t,n);case"Literal":return n.value;case"CallExpression":return await Ct(t,n);case"UnaryExpression":return await It(t,n);case"BinaryExpression":return await kt(t,n);case"LogicalExpression":return await Mt(t,n);case"ArrayExpression":return await Rt(t,n);case"ObjectExpression":return await Y(t,n);default:throw new p(t,y.Unrecognized,n)}}catch(e){throw E(t,n,e)}}async function Q(t,n){n.breakpoint&&await n.breakpoint();try{switch(n.type){case"ImportDeclaration":return await St(t,n);case"ExportNamedDeclaration":return await jt(t,n);case"VariableDeclaration":return await gt(t,n,0);case"BlockStatement":return await vt(t,n);case"FunctionDeclaration":return await xt(t,n);case"ReturnStatement":return await bt(t,n);case"IfStatement":return await yt(t,n);case"ExpressionStatement":return await pt(t,n);case"ForStatement":return await at(t,n);case"WhileStatement":return await tt(t,n);case"ForInStatement":return await wt(t,n);case"BreakStatement":return j;case"EmptyStatement":return x;case"ContinueStatement":return g;default:throw new p(t,y.Unrecognized,n)}}catch(e){throw E(t,n,e)}}async function Y(t,n){const e=[];for(let r=0;r<n.properties.length;r++){const a=n.properties[r],i=await K(t,a.value),o="Identifier"===a.key.type?a.key.name:await K(t,a.key);e[r]={key:o,value:i}}const r={},a=new Map;for(let i=0;i<e.length;i++){const o=e[i];if(S(o.value))throw new p(t,y.NoFunctionInDictionary,n);if(!1===F(o.key))throw new p(t,y.KeyMustBeString,n);let s=o.key.toString();const c=s.toLowerCase();a.has(c)?s=a.get(c):a.set(c,s),o.value===x?r[s]=null:r[s]=o.value}const i=new c(r);return i.immutable=!1,i}async function tt(t,n){const e={testResult:!0,lastAction:x};if(e.testResult=await K(t,n.test),!1===e.testResult)return x;if(!0!==e.testResult)throw new p(t,y.BooleanConditionRequired,n);for(;!0===e.testResult&&(e.lastAction=await Q(t,n.body),e.lastAction!==j)&&!(e.lastAction instanceof m);)if(e.testResult=await K(t,n.test),!0!==e.testResult&&!1!==e.testResult)throw new p(t,y.BooleanConditionRequired,n);return e.lastAction instanceof m?e.lastAction:x}async function nt(t,n,e){const r=await Q(t,n.body);return e.lastAction=r,e.lastAction===j||e.lastAction instanceof m?(e.testResult=!1,e):null!==n.update?(await K(t,n.update),e):e}async function et(t,n,e){if(null!==n.test){const r=await K(t,n.test);if(!0===t.abortSignal?.aborted)throw new p(t,y.Cancelled,n);if(e.testResult=r,!1===e.testResult)return e;if(!0!==e.testResult)throw new p(t,y.BooleanConditionRequired,n);return nt(t,n,e)}return nt(t,n,e)}function rt(t,n,e,r,a,i){try{et(t,n,e).then((()=>{try{!0===e.testResult?++i>z?(i=0,setTimeout((()=>{rt(t,n,e,r,a,i)}),0)):rt(t,n,e,r,a,i):e.lastAction instanceof m?r(e.lastAction):r(x)}catch(t){a(t)}}),(t=>{a(t)}))}catch(t){a(t)}}async function at(t,n){try{return null!==n.init&&("VariableDeclaration"===n.init.type?await Q(t,n.init):await K(t,n.init)),await new Promise(((e,r)=>{rt(t,n,{testResult:!0,lastAction:x},(t=>{e(t)}),(t=>{r(t)}),0)}))}catch(t){throw t}}function it(t,n,e,r,a,i,o,s,c,u){try{if(r<=i)return void s(x);a.value="k"===o?e[i]:i,Q(t,n.body).then((l=>{try{l instanceof m?s(l):l===j?s(x):++u>z?(u=0,setTimeout((()=>{it(t,n,e,r,a,i+1,o,s,c,u)}),0)):it(t,n,e,r,a,i+1,o,s,c,u)}catch(t){c(t)}}),(t=>{c(t)}))}catch(t){c(t)}}function ot(t,n,e,r,a,i,o,s,c){try{if(e.length()<=a)return void o(x);r.value="k"===i?e.get(a):a,Q(t,n.body).then((u=>{u instanceof m?o(u):u===j?o(x):++c>z?(c=0,setTimeout((()=>{ot(t,n,e,r,a+1,i,o,s,c)}),0)):ot(t,n,e,r,a+1,i,o,s,c)}),(t=>{s(t)}))}catch(t){s(t)}}function st(t,n,e,r,a,i){try{if(void 0===i&&(i="i"),0===e.length)return void r.resolve(x);it(t,n,e,e.length,a,0,i,(t=>{r.resolve(t)}),(t=>{r.reject(t)}),0)}catch(t){r.reject(t)}}function ct(t,n,e,r,a,i){try{if(void 0===i&&(i="i"),0===e.length())return void r.resolve(x);ot(t,n,e,a,0,i,(t=>{r.resolve(t)}),(t=>{r.reject(t)}),0)}catch(t){r.reject(t)}}function ut(t,n,e,r,a){try{st(t,n,e.keys(),r,a,"k")}catch(t){r.reject(t)}}function lt(t,n,e,r,a,i,o,s){try{t.next().then((c=>{try{if(null===c)i(x);else{const u=w.createFromGraphicLikeObject(c.geometry,c.attributes,r,n.timeZone);u._underlyingGraphic=c,a.value=u;Q(n,e.body).then((c=>{try{c===j?i(x):c instanceof m?i(c):++s>z?(s=0,setTimeout((()=>{lt(t,n,e,r,a,i,o,s)}),0)):lt(t,n,e,r,a,i,o,s)}catch(t){o(t)}}),(t=>{o(t)}))}}catch(t){o(t)}}),(t=>{o(t)}))}catch(t){o(t)}}async function wt(t,n){return new Promise(((e,r)=>{K(t,n.right).then((a=>{try{let i;i="VariableDeclaration"===n.left.type?Q(t,n.left):Promise.resolve(),i.then((()=>{try{const i=u("VariableDeclaration"===n.left.type?n.left.declarations[0].id:n.left);let o=null;if(null!=t.localScope&&void 0!==t.localScope[i]&&(o=t.localScope[i]),null===o&&void 0!==t.globalScope[i]&&(o=t.globalScope[i]),null===o)return void r(new p(t,y.InvalidIdentifier,n));I(a)||F(a)?st(t,n,a,{reject:r,resolve:e},o):A(a)?ct(t,n,a,{reject:r,resolve:e},o):a instanceof c||M(a)?ut(t,n,a,{reject:r,resolve:e},o):P(a)?lt(a.iterator(t.abortSignal),t,n,a,o,(t=>{e(t)}),(t=>{r(t)}),0):st(t,n,[],{reject:r,resolve:e},o)}catch(t){r(t)}}),r)}catch(t){r(t)}}),r)}))}async function ft(t,n){const e=n.argument;if("CallExpression"===e.type)throw new p(t,y.NeverReach,n);if("MemberExpression"===e.type){const r=await K(t,e.object);let a,i;if(!0===e.computed)a=await K(t,e.property);else{if("Identifier"!==e.property.type)throw new p(t,y.Unrecognized,n);a=e.property.name}if(I(r)){if(!R(a))throw new p(t,y.ArrayAccessorMustBeNumber,n);if(a<0&&(a=r.length+a),a<0||a>=r.length)throw new p(t,y.OutOfBounds,n);i=k(r[a]),r[a]="++"===n.operator?i+1:i-1}else if(r instanceof c){if(!1===F(a))throw new p(t,y.KeyAccessorMustBeString,n);if(!0!==r.hasField(a))throw new p(t,y.FieldNotFound,n,{key:a});i=k(r.field(a)),r.setField(a,"++"===n.operator?i+1:i-1)}else if(r instanceof _){if(!1===F(a))throw new p(t,y.ModuleAccessorMustBeString,n);if(!0!==r.hasGlobal(a))throw new p(t,y.ModuleExportNotFound,n);i=k(await r.global(a)),r.setGlobal(a,"++"===n.operator?i+1:i-1)}else{if(!M(r))throw A(r)?new p(t,y.Immutable,n):new p(t,y.InvalidParameter,n);if(!1===F(a))throw new p(t,y.KeyAccessorMustBeString,n);if(!0!==r.hasField(a))throw new p(t,y.FieldNotFound,n,{key:a});i=k(r.field(a)),r.setField(a,"++"===n.operator?i+1:i-1)}return!1===n.prefix?i:"++"===n.operator?i+1:i-1}const r=u(e);let a;if(null!=t.localScope&&void 0!==t.localScope[r])return a=k(t.localScope[r].value),t.localScope[r]={value:"++"===n.operator?a+1:a-1,valueset:!0,node:n},!1===n.prefix?a:"++"===n.operator?a+1:a-1;if(void 0!==t.globalScope[r])return a=k(t.globalScope[r].value),t.globalScope[r]={value:"++"===n.operator?a+1:a-1,valueset:!0,node:n},!1===n.prefix?a:"++"===n.operator?a+1:a-1;throw new p(t,y.InvalidIdentifier,n)}function ht(t,n,e,r,a){switch(n){case"=":return t===x?null:t;case"/=":return k(e)/k(t);case"*=":return k(e)*k(t);case"-=":return k(e)-k(t);case"+=":return F(e)||F(t)?C(e)+C(t):k(e)+k(t);case"%=":return k(e)%k(t);default:throw new p(a,y.UnsupportedOperator,r)}}async function dt(t,n){const e=n.left;if("MemberExpression"===e.type){const r=await K(t,e.object);let a;if(!0===e.computed)a=await K(t,e.property);else{if("Identifier"!==e.property.type)throw new p(t,y.InvalidIdentifier,n);a=e.property.name}const i=await K(t,n.right);if(I(r)){if(!R(a))throw new p(t,y.ArrayAccessorMustBeNumber,n);if(a<0&&(a=r.length+a),a<0||a>r.length)throw new p(t,y.OutOfBounds,n);if(a===r.length){if("="!==n.operator)throw new p(t,y.OutOfBounds,n);r[a]=ht(i,n.operator,r[a],n,t)}else r[a]=ht(i,n.operator,r[a],n,t)}else if(r instanceof c){if(!1===F(a))throw new p(t,y.KeyAccessorMustBeString,n);if(!0===r.hasField(a))r.setField(a,ht(i,n.operator,r.field(a),n,t));else{if("="!==n.operator)throw new p(t,y.FieldNotFound,n,{key:a});r.setField(a,ht(i,n.operator,null,n,t))}}else if(r instanceof _){if(!1===F(a))throw new p(t,y.KeyAccessorMustBeString,n);if(!0!==r.hasGlobal(a))throw new p(t,y.ModuleExportNotFound,n);r.setGlobal(a,ht(i,n.operator,await r.global(a),n,t))}else{if(!M(r))throw A(r)?new p(t,y.Immutable,n):new p(t,y.InvalidParameter,n);if(!1===F(a))throw new p(t,y.KeyAccessorMustBeString,n);if(!0===r.hasField(a))r.setField(a,ht(i,n.operator,r.field(a),n,t));else{if("="!==n.operator)throw new p(t,y.FieldNotFound,n,{key:a});r.setField(a,ht(i,n.operator,null,n,t))}}return x}const r=u(e);if(null!=t.localScope&&void 0!==t.localScope[r]){const e=await K(t,n.right);return t.localScope[r]={value:ht(e,n.operator,t.localScope[r].value,n,t),valueset:!0,node:n.right},x}if(void 0!==t.globalScope[r]){const e=await K(t,n.right);return t.globalScope[r]={value:ht(e,n.operator,t.globalScope[r].value,n,t),valueset:!0,node:n.right},x}throw new p(t,y.InvalidIdentifier,n)}async function pt(t,n){const e=await K(t,n.expression);return e===x?x:new b(e)}async function yt(t,n){const e=await K(t,n.test);if(!0===e)return Q(t,n.consequent);if(!1===e)return null!==n.alternate?Q(t,n.alternate):x;throw new p(t,y.BooleanConditionRequired,n)}async function vt(t,n){return mt(t,n,0)}async function mt(t,n,e){if(e>=n.body.length)return x;const r=await Q(t,n.body[e]);return r instanceof m||r===j||r===g||e===n.body.length-1?r:mt(t,n,e+1)}async function bt(t,n){if(null===n.argument)return new m(x);const e=await K(t,n.argument);return new m(e)}async function xt(t,n){const e=u(n.id);return t.globalScope[e]={valueset:!0,node:null,value:new $(n,t)},x}async function St(t,n){const e=u(n.specifiers[0].local),r=t.libraryResolver.loadLibrary(e);let a;return t.libraryResolver._moduleSingletons?.has(r.uri)?a=t.libraryResolver._moduleSingletons.get(r.uri):(a=new _(r),await a.loadModule(t),t.libraryResolver._moduleSingletons?.set(r.uri,a)),t.globalScope[e]={value:a,valueset:!0,node:n},x}async function jt(t,n){if(await Q(t,n.declaration),"FunctionDeclaration"===n.declaration.type)t.exports[u(n.declaration.id)]="function";else if("VariableDeclaration"===n.declaration.type)for(const e of n.declaration.declarations)t.exports[u(e.id)]="variable";return x}async function gt(t,n,e){return e>=n.declarations.length?x:(await Et(t,n.declarations[e]),e===n.declarations.length-1||await gt(t,n,e+1),x)}async function Et(t,n){let e=null;if(e=null===n.init?null:await K(t,n.init),null!==t.localScope){if(e===x&&(e=null),"Identifier"!==n.id.type)throw new p(t,y.InvalidIdentifier,n);const r=u(n.id);return void(null!=t.localScope&&(t.localScope[r]={value:e,valueset:!0,node:n.init}))}if("Identifier"!==n.id.type)throw new p(t,y.InvalidIdentifier,n);const r=u(n.id);e===x&&(e=null),t.globalScope[r]={value:e,valueset:!0,node:n.init}}async function Ft(t,n){const e=await K(t,n.object);if(null===e)throw new p(t,y.MemberOfNull,n);if(!1===n.computed){if("Identifier"===n.property.type){if(e instanceof c||M(e))return e.field(n.property.name);if(e instanceof X)return l(e,n.property.name,t,n);if(e instanceof _){if(!e.hasGlobal(n.property.name))throw new p(t,y.InvalidIdentifier,n);return e.global(n.property.name)}throw new p(t,y.InvalidMemberAccessKey,n)}throw new p(t,y.InvalidMemberAccessKey,n)}let r=await K(t,n.property);if(e instanceof c||M(e)){if(F(r))return e.field(r);throw new p(t,y.InvalidMemberAccessKey,n)}if(e instanceof _){if(F(r))return e.global(r);throw new p(t,y.InvalidMemberAccessKey,n)}if(e instanceof X){if(F(r))return l(e,r,t,n);throw new p(t,y.InvalidMemberAccessKey,n)}if(I(e)){if(R(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=e.length+r),r>=e.length||r<0)throw new p(t,y.OutOfBounds,n);return e[r]}throw new p(t,y.InvalidMemberAccessKey,n)}if(A(e)){if(R(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=e.length()+r),r>=e.length()||r<0)throw new p(t,y.OutOfBounds,n);return e.get(r)}throw new p(t,y.InvalidMemberAccessKey,n)}if(F(e)){if(R(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=e.length+r),r>=e.length||r<0)throw new p(t,y.OutOfBounds,n);return e[r]}throw new p(t,y.InvalidMemberAccessKey,n)}throw new p(t,y.InvalidMemberAccessKey,n)}async function It(t,n){const e=await K(t,n.argument);if(d(e)){if("!"===n.operator)return!e;if("-"===n.operator)return-1*k(e);if("+"===n.operator)return 1*k(e);if("~"===n.operator)return~k(e);throw new p(t,y.UnsupportedUnaryOperator,n)}if("-"===n.operator)return-1*k(e);if("+"===n.operator)return 1*k(e);if("~"===n.operator)return~k(e);throw new p(t,y.UnsupportedUnaryOperator,n)}async function Rt(t,n){const e=[];for(let r=0;r<n.elements.length;r++)e.push(await K(t,n.elements[r]));for(let r=0;r<e.length;r++){if(S(e[r]))throw new p(t,y.NoFunctionInArray,n);e[r]===x&&(e[r]=null)}return e}async function kt(t,n){const e=await K(t,n.left),r=await K(t,n.right);switch(n.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return V(k(e),k(r),n.operator);case"==":return T(e,r);case"!=":return!T(e,r);case"<":case">":case"<=":case">=":return D(e,r,n.operator);case"+":return F(e)||F(r)?C(e)+C(r):k(e)+k(r);case"-":return k(e)-k(r);case"*":return k(e)*k(r);case"/":return k(e)/k(r);case"%":return k(e)%k(r);default:throw new p(t,y.UnsupportedOperator,n)}}async function Mt(t,n){const e=await K(t,n.left);if(!d(e))throw new p(t,y.LogicalExpressionOnlyBoolean,n);switch(n.operator){case"||":{if(!0===e)return e;const r=await K(t,n.right);if(d(r))return r;throw new p(t,y.LogicExpressionOrAnd,n)}case"&&":{if(!1===e)return e;const r=await K(t,n.right);if(d(r))return r;throw new p(t,y.LogicExpressionOrAnd,n)}default:throw new p(t,y.LogicExpressionOrAnd,n)}}async function At(t,n){const e=u(n);if(null!=t.localScope&&void 0!==t.localScope[e]){const n=t.localScope[e];if(!0===n.valueset)return n.value;if(null!==n.d)return n.d;n.d=K(t,n.node);const r=await n.d;return n.value=r,n.valueset=!0,r}if(void 0!==t.globalScope[e]){const n=t.globalScope[e];if(!0===n.valueset)return n.value;if(null!==n.d)return n.d;n.d=K(t,n.node);const r=await n.d;return n.value=r,n.valueset=!0,r}throw new p(t,y.InvalidIdentifier,n)}async function Ct(t,n){if("MemberExpression"===n.callee.type){const e=await K(t,n.callee.object);if(!(e instanceof _))throw new p(t,y.FunctionNotFound,n);const r=!1===n.callee.computed?n.callee.property.name:await K(t,n.callee.property);if(!e.hasGlobal(r))throw new p(t,y.FunctionNotFound,n);const a=await e.global(r);if(!S(a))throw new p(t,y.CallNonFunction,n);return a.call(t,n)}if("Identifier"!==n.callee.type)throw new p(t,y.FunctionNotFound,n);const e=u(n.callee);if(null!=t.localScope&&void 0!==t.localScope[e]){const r=t.localScope[e];if(S(r.value))return r.value.call(t,n);throw new p(t,y.CallNonFunction,n)}if(void 0!==t.globalScope[e]){const r=t.globalScope[e];if(S(r.value))return r.value.call(t,n);throw new p(t,y.CallNonFunction,n)}throw new p(t,y.FunctionNotFound,n)}async function Dt(t,n){let e="",r=0;for(const a of n.quasis)if(e+=a.value?a.value.cooked:"",!1===a.tail){if(n.expressions[r]){const a=await K(t,n.expressions[r]);if(S(a))throw new p(t,y.NoFunctionInTemplateLiteral,n);e+=C(a)}r++}return e}const Tt={};async function Vt(t,n,e,r){const a=await K(t,n.arguments[e]);if(T(a,r))return K(t,n.arguments[e+1]);const i=n.arguments.length-e;return 1===i?K(t,n.arguments[e]):2===i?null:3===i?K(t,n.arguments[e+2]):Vt(t,n,e+2,r)}async function Zt(t,n,e,r){if(!0===r)return K(t,n.arguments[e+1]);if(3===n.arguments.length-e)return K(t,n.arguments[e+2]);const a=await K(t,n.arguments[e+2]);if(!1===d(a))throw new p(t,y.ModuleExportNotFound,n.arguments[e+2]);return Zt(t,n,e+2,a)}async function Lt(t,n,e,r){const a=t.body;if(e.length!==t.params.length)throw new p(n,y.WrongNumberOfParameters,null);for(let r=0;r<e.length;r++){const a=t.params[r];"Identifier"===a.type&&null!=n.localScope&&(n.localScope[u(a)]={d:null,value:e[r],valueset:!0,node:null})}const i=await Q(n,a);if(i instanceof m)return i.value;if(i===j)throw new p(n,y.UnexpectedToken,r);if(i===g)throw new p(n,y.UnexpectedToken,r);return i instanceof b?i.value:i}t(Tt,W),n(Tt,W),e(Tt,W),r(Tt,W),a(Tt,W),H({functions:Tt,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:W,standardFunctionAsync:J}),Tt.iif=async function(t,n){h(null===n.arguments?[]:n.arguments,3,3,t,n);const e=await K(t,n.arguments[0]);if(!1===d(e))throw new p(t,y.BooleanConditionRequired,n);return K(t,e?n.arguments[1]:n.arguments[2])},Tt.defaultvalue=async function(t,n){h(null===n.arguments?[]:n.arguments,2,3,t,n);const e=await K(t,n.arguments[0]);if(3===n.arguments.length){const r=await K(t,n.arguments[1]),a=i(e,r);return null!=a&&""!==a?a:K(t,n.arguments[2])}return null==e||""===e?K(t,n.arguments[1]):e},Tt.decode=async function(t,n){if(n.arguments.length<2)throw new p(t,y.WrongNumberOfParameters,n);if(2===n.arguments.length)return K(t,n.arguments[1]);if((n.arguments.length-1)%2==0)throw new p(t,y.WrongNumberOfParameters,n);return Vt(t,n,1,await K(t,n.arguments[0]))},Tt.when=async function(t,n){if(n.arguments.length<3)throw new p(t,y.WrongNumberOfParameters,n);if(n.arguments.length%2==0)throw new p(t,y.WrongNumberOfParameters,n);const e=await K(t,n.arguments[0]);if(!1===d(e))throw new p(t,y.BooleanConditionRequired,n.arguments[0]);return Zt(t,n,0,e)};const Bt={fixSpatialReference:Z,parseArguments:O,standardFunction:W,standardFunctionAsync:J,evaluateIdentifier:At};for(const t in Tt)Tt[t]={value:new v(Tt[t]),valueset:!0,node:null};const Nt=function(){};function Pt(t,n,e){const r=new Nt;null==t&&(t={}),null==n&&(n={});const a=new c({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});a.immutable=!1,r.textformatting={value:a,valueset:!0,node:null};for(const t in n)r[t]={value:new v(n[t]),native:!0,valueset:!0,node:null};for(const n in t)r[n]={value:L(t[n])?w.createFromGraphic(t[n],e):t[n],valueset:!0,node:null};return r}function qt(t){console.log(t)}Nt.prototype=Tt,Nt.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},Nt.prototype.pi={value:Math.PI,valueset:!0,node:null};const Gt=Bt;function Ht(t){const n={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:W,standardFunctionAsync:J,evaluateIdentifier:At};for(let e=0;e<t.length;e++)t[e].registerFunctions(n);for(const t in n.functions)Tt[t]={value:new v(n.functions[t]),valueset:!0,node:null},Nt.prototype[t]=Tt[t];for(let t=0;t<n.signatures.length;t++)o(n.signatures[t],"async")}async function Ut(t,n){let e=n.spatialReference;null==e&&(e=new U({wkid:102100}));let r=null;t.usesModules&&(r=new f(new Map,t.loadedModules));const a=Pt(n.vars,n.customfunctions,n.timeZone),i={spatialReference:e,services:n.services,exports:{},libraryResolver:r,abortSignal:void 0===n.abortSignal||null===n.abortSignal?{aborted:!1}:n.abortSignal,globalScope:a,console:n.console??qt,timeZone:n.timeZone??null,lrucache:n.lrucache,interceptor:n.interceptor,localScope:null,depthCounter:{depth:1}},o=await vt(i,t);if(o instanceof m||o instanceof b){const t=o.value;if(t===x)return null;if(S(t))throw new p(i,y.IllegalResult,null);return t}if(o===x)return null;if(o===j)throw new p(i,y.IllegalResult,null);if(o===g)throw new p(i,y.IllegalResult,null);throw new p(i,y.NeverReach,null)}Ht([s]);export{Ut as executeScript,Ht as extend,Gt as functionHelper};
//# sourceMappingURL=p-498ee713.js.map