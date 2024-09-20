import{C as n,Y as t,M as e,W as r,f as i,a,z as o,b as s,r as c,Q as u,U as l,H as f,G as w,N as h,L as d,E as p,e as y,o as v,R as m,J as b,I as x,p as S,O as g,B as j,u as E,w as I,D as F,h as R,F as k,d as M,c as A,m as C,_ as D,Z as P,g as T,s as Z,n as V,i as B,j as G}from"./p-2b5b515f.js";import{registerFunctions as L}from"./p-3ef1a7b0.js";import{fl as q,bt as H}from"./p-3013819f.js";import"./p-1cf43261.js";import"./p-7db7fa08.js";import"./p-4953a39e.js";import"./p-ec95a4fb.js";import"./p-1f0b604e.js";import"./p-347800d3.js";import"./p-94b15954.js";import"./p-f47e14f9.js";import"./p-bc6b9750.js";import"./p-3b51db5e.js";const N=100;async function U(n,t){const e=[];for(let r=0;r<t.arguments.length;r++)e.push(await Q(n,t.arguments[r]));return e}async function W(n,t,e){if(!0===t.preparsed)return e(n,null,t.arguments);return e(n,t,await U(n,t))}class z extends T{constructor(n,t){super(),this.definition=null,this.context=null,this.definition=n,this.context=t}createFunction(n){return(...t)=>{const e={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeZone:this.context.timeZone??null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:n.depthCounter+1},globalScope:this.context.globalScope};if(e.depthCounter.depth>64)throw new s(n,c.MaximumCallDepth,null);return Vn(this.definition,e,t,null)}}call(n,t){return O(n,t,((e,r,i)=>{const a={spatialReference:n.spatialReference,services:n.services,console:n.console,libraryResolver:n.libraryResolver,exports:n.exports,lrucache:n.lrucache,timeZone:n.timeZone??null,interceptor:n.interceptor,localScope:{},abortSignal:n.abortSignal,globalScope:n.globalScope,depthCounter:{depth:n.depthCounter.depth+1}};if(a.depthCounter.depth>64)throw new s(n,c.MaximumCallDepth,t);return Vn(this.definition,a,i,t)}))}marshalledCall(n,t,e,r){return r(n,t,(async(i,a,o)=>{const s={spatialReference:n.spatialReference,globalScope:e.globalScope,depthCounter:{depth:n.depthCounter.depth+1},libraryResolver:n.libraryResolver,exports:n.exports,console:n.console,abortSignal:n.abortSignal,lrucache:n.lrucache,timeZone:n.timeZone??null,interceptor:n.interceptor,localScope:{}};return o=o.map((t=>!x(t)||t instanceof Z?t:V(t,n,r))),V(await Vn(this.definition,s,o,t),e,r)}))}}class J extends B{constructor(n){super(n)}async global(n){const t=this.executingContext.globalScope[n.toLowerCase()];if(t.valueset||(t.value=await Q(this.executingContext,t.node),t.valueset=!0),x(t.value)&&!(t.value instanceof Z)){const n=new Z;n.fn=t.value,n.parameterEvaluator=O,n.context=this.executingContext,t.value=n}return t.value}setGlobal(n,t){if(x(t))throw new s(null,c.AssignModuleFunction,null);this.executingContext.globalScope[n.toLowerCase()]={value:t,valueset:!0,node:null}}hasGlobal(n){return void 0===this.executingContext.exports[n]&&(n=n.toLowerCase()),void 0!==this.executingContext.exports[n]}async loadModule(n){let t=n.spatialReference;null==t&&(t=new H({wkid:102100})),this.moduleScope=Ln({},n.customfunctions,n.timeZone),this.executingContext={spatialReference:t,services:n.services,libraryResolver:new G(n.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:void 0===n.abortSignal||null===n.abortSignal?{aborted:!1}:n.abortSignal,globalScope:this.moduleScope,console:n.console??qn,lrucache:n.lrucache,timeZone:n.timeZone??null,interceptor:n.interceptor,localScope:null,depthCounter:{depth:1}},await Q(this.executingContext,this.source.syntax)}}async function O(n,t,e){if(!0===t.preparsed){const r=e(n,null,t.arguments);return r}const r=e(n,t,await U(n,t));return r}async function Q(n,t,e){if(t.breakpoint&&!0!==e){const e=t.breakpoint();return await e,Q(n,t,!0)}try{switch(t?.type){case"VariableDeclarator":return await gn(n,t);case"ImportDeclaration":return await bn(n,t);case"ExportNamedDeclaration":return await xn(n,t);case"VariableDeclaration":return await Sn(n,t,0);case"BlockStatement":case"Program":return await pn(n,t);case"FunctionDeclaration":return await mn(n,t);case"ReturnStatement":return await vn(n,t);case"IfStatement":return await dn(n,t);case"ExpressionStatement":return await hn(n,t);case"UpdateExpression":return await ln(n,t);case"AssignmentExpression":return await wn(n,t);case"ForStatement":return await tn(n,t);case"WhileStatement":return await K(n,t);case"ForInStatement":return await un(n,t);case"BreakStatement":return m;case"EmptyStatement":return g;case"ContinueStatement":return b;case"TemplateElement":return await An(n,t);case"TemplateLiteral":return await Dn(n,t);case"Identifier":return await kn(n,t);case"MemberExpression":return await jn(n,t);case"Literal":return t.value;case"CallExpression":return await Mn(n,t);case"UnaryExpression":return await En(n,t);case"BinaryExpression":return await Fn(n,t);case"LogicalExpression":return await Rn(n,t);case"ArrayExpression":return await In(n,t);case"ObjectExpression":return await Y(n,t);case"Property":return await _(n,t);default:throw new s(n,c.Unrecognized,t)}}catch(e){throw E(n,t,e)}}async function Y(n,t){const e=[];for(let r=0;r<t.properties.length;r++)e[r]=await Q(n,t.properties[r]);const r={},i=new Map;for(let a=0;a<e.length;a++){const o=e[a];if(x(o.value))throw new s(n,c.NoFunctionInDictionary,t);if(!1===w(o.key))throw new s(n,c.KeyMustBeString,t);let u=o.key.toString();const l=u.toLowerCase();i.has(l)?u=i.get(l):i.set(l,u),o.value===g?r[u]=null:r[u]=o.value}const a=new h(r);return a.immutable=!1,a}async function _(n,t){const e=await Q(n,t.value);if("Identifier"===t.key.type)return{key:t.key.name,value:e};return{key:await Q(n,t.key),value:e}}async function K(n,t){const e={testResult:!0,lastAction:g};if(e.testResult=await Q(n,t.test),!1===e.testResult)return g;if(!0!==e.testResult)throw new s(n,c.BooleanConditionRequired,t);for(;!0===e.testResult&&(e.lastAction=await Q(n,t.body),e.lastAction!==m)&&!(e.lastAction instanceof I);)if(e.testResult=await Q(n,t.test),!0!==e.testResult&&!1!==e.testResult)throw new s(n,c.BooleanConditionRequired,t);return e.lastAction instanceof I?e.lastAction:g}async function X(n,t,e){const r=await Q(n,t.body);return e.lastAction=r,e.lastAction===m||e.lastAction instanceof I?(e.testResult=!1,e):null!==t.update?(await Q(n,t.update),e):e}async function $(n,t,e){if(null!==t.test){const r=await Q(n,t.test);if(!0===n.abortSignal?.aborted)throw new s(n,c.Cancelled,t);if(e.testResult=r,!1===e.testResult)return e;if(!0!==e.testResult)throw new s(n,c.BooleanConditionRequired,t);return X(n,t,e)}return X(n,t,e)}function nn(n,t,e,r,i,a){try{$(n,t,e).then((()=>{try{!0===e.testResult?++a>N?(a=0,setTimeout((()=>{nn(n,t,e,r,i,a)}),0)):nn(n,t,e,r,i,a):e.lastAction instanceof I?r(e.lastAction):r(g)}catch(n){i(n)}}),(n=>{i(n)}))}catch(n){i(n)}}function tn(n,t){try{return null!==t.init?Q(n,t.init).then((()=>new Promise(((e,r)=>{nn(n,t,{testResult:!0,lastAction:g},(n=>{e(n)}),(n=>{r(n)}),0)})))):new Promise(((e,r)=>{nn(n,t,{testResult:!0,lastAction:g},(n=>{e(n)}),(n=>{r(n)}),0)}))}catch(n){return Promise.reject(n)}}function en(n,t,e,r,i,a,o,s,c,u){try{if(r<=a)return void s(g);i.value="k"===o?e[a]:a,Q(n,t.body).then((l=>{try{l instanceof I?s(l):l===m?s(g):++u>N?(u=0,setTimeout((()=>{en(n,t,e,r,i,a+1,o,s,c,u)}),0)):en(n,t,e,r,i,a+1,o,s,c,u)}catch(n){c(n)}}),(n=>{c(n)}))}catch(n){c(n)}}function rn(n,t,e,r,i,a,o,s,c){try{if(e.length()<=i)return void o(g);r.value="k"===a?e.get(i):i,Q(n,t.body).then((u=>{u instanceof I?o(u):u===m?o(g):++c>N?(c=0,setTimeout((()=>{rn(n,t,e,r,i+1,a,o,s,c)}),0)):rn(n,t,e,r,i+1,a,o,s,c)}),(n=>{s(n)}))}catch(n){s(n)}}function an(n,t,e,r,i,a){try{if(void 0===a&&(a="i"),0===e.length)return void r.resolve(g);en(n,t,e,e.length,i,0,a,(n=>{r.resolve(n)}),(n=>{r.reject(n)}),0)}catch(n){r.reject(n)}}function on(n,t,e,r,i,a){try{if(void 0===a&&(a="i"),0===e.length)return void r.resolve(g);rn(n,t,e,i,0,a,(n=>{r.resolve(n)}),(n=>{r.reject(n)}),0)}catch(n){r.reject(n)}}function sn(n,t,e,r,i){try{an(n,t,e.keys(),r,i,"k")}catch(n){r.reject(n)}}function cn(n,t,e,r,i,a,o,s){try{n.next().then((c=>{try{if(null===c)a(g);else{const u=F.createFromGraphicLikeObject(c.geometry,c.attributes,r,t.timeZone);u._underlyingGraphic=c,i.value=u;Q(t,e.body).then((c=>{try{c===m?a(g):c instanceof I?a(c):++s>N?(s=0,setTimeout((()=>{cn(n,t,e,r,i,a,o,s)}),0)):cn(n,t,e,r,i,a,o,s)}catch(n){o(n)}}),(n=>{o(n)}))}}catch(n){o(n)}}),(n=>{o(n)}))}catch(n){o(n)}}async function un(n,t){return new Promise(((e,r)=>{Q(n,t.right).then((i=>{try{let a=null;a="VariableDeclaration"===t.left.type?Q(n,t.left):Promise.resolve(),a.then((()=>{try{let a="";if("VariableDeclaration"===t.left.type){const n=t.left.declarations[0].id;"Identifier"===n.type&&(a=n.name)}else"Identifier"===t.left.type&&(a=t.left.name);if(!a)throw new s(n,c.InvalidIdentifier,t);a=a.toLowerCase();let o=null;if(null!=n.localScope&&void 0!==n.localScope[a]&&(o=n.localScope[a]),null===o&&void 0!==n.globalScope[a]&&(o=n.globalScope[a]),null===o)return void r(new s(n,c.InvalidIdentifier,t));l(i)||w(i)?an(n,t,i,{reject:r,resolve:e},o):u(i)?on(n,t,i,{reject:r,resolve:e},o):i instanceof h||f(i)?sn(n,t,i,{reject:r,resolve:e},o):j(i)?cn(i.iterator(n.abortSignal),n,t,i,o,(n=>{e(n)}),(n=>{r(n)}),0):an(n,t,[],{reject:r,resolve:e},o)}catch(n){r(n)}}),r)}catch(n){r(n)}}),r)}))}async function ln(n,t){const e=t.argument;if("MemberExpression"===e.type){const r={t:null},i=await Q(n,e.object);let a=null;r.t=i,!0===e.computed?a=await Q(n,e.property):"Identifier"===e.property.type&&(a=e.property.name);const o=r.t;let d;if(l(o)){if(!p(a))throw new s(n,c.ArrayAccessorMustBeNumber,t);if(a<0&&(a=o.length+a),a<0||a>=o.length)throw new s(n,c.OutOfBounds,t);d=R(o[a]),o[a]="++"===t.operator?d+1:d-1}else if(o instanceof h){if(!1===w(a))throw new s(n,c.KeyAccessorMustBeString,t);if(!0!==o.hasField(a))throw new s(n,c.FieldNotFound,t,{key:a});d=R(o.field(a)),o.setField(a,"++"===t.operator?d+1:d-1)}else if(o instanceof J){if(!1===w(a))throw new s(n,c.ModuleAccessorMustBeString,t);if(!0!==o.hasGlobal(a))throw new s(n,c.ModuleExportNotFound,t);d=R(await o.global(a)),o.setGlobal(a,"++"===t.operator?d+1:d-1)}else{if(!f(o))throw u(o)?new s(n,c.Immutable,t):new s(n,c.InvalidParameter,t);if(!1===w(a))throw new s(n,c.KeyAccessorMustBeString,t);if(!0!==o.hasField(a))throw new s(n,c.FieldNotFound,t,{key:a});d=R(o.field(a)),o.setField(a,"++"===t.operator?d+1:d-1)}return!1===t.prefix?d:"++"===t.operator?d+1:d-1}const r="Identifier"===t.argument.type?t.argument.name.toLowerCase():"";if(!r)throw new s(n,c.InvalidIdentifier,t);let i;if(null!=n.localScope&&void 0!==n.localScope[r])return i=R(n.localScope[r].value),n.localScope[r]={value:"++"===t.operator?i+1:i-1,valueset:!0,node:t},!1===t.prefix?i:"++"===t.operator?i+1:i-1;if(void 0!==n.globalScope[r])return i=R(n.globalScope[r].value),n.globalScope[r]={value:"++"===t.operator?i+1:i-1,valueset:!0,node:t},!1===t.prefix?i:"++"===t.operator?i+1:i-1;throw new s(n,c.InvalidIdentifier,t)}function fn(n,t,e,r,i){switch(t){case"=":return n===g?null:n;case"/=":return R(e)/R(n);case"*=":return R(e)*R(n);case"-=":return R(e)-R(n);case"+=":return w(e)||w(n)?M(e)+M(n):R(e)+R(n);case"%=":return R(e)%R(n);default:throw new s(i,c.UnsupportedOperator,r)}}async function wn(n,t){const e=t.left;if("MemberExpression"===e.type){const r=await Q(n,e.object);let i=null;if(!0===e.computed)i=await Q(n,e.property);else{if("Identifier"!==e.property.type)throw new s(n,c.InvalidIdentifier,t);i=e.property.name}const a=await Q(n,t.right);if(l(r)){if(!p(i))throw new s(n,c.ArrayAccessorMustBeNumber,t);if(i<0&&(i=r.length+i),i<0||i>r.length)throw new s(n,c.OutOfBounds,t);if(i===r.length){if("="!==t.operator)throw new s(n,c.OutOfBounds,t);r[i]=fn(a,t.operator,r[i],t,n)}else r[i]=fn(a,t.operator,r[i],t,n)}else if(r instanceof h){if(!1===w(i))throw new s(n,c.KeyAccessorMustBeString,t);if(!0===r.hasField(i))r.setField(i,fn(a,t.operator,r.field(i),t,n));else{if("="!==t.operator)throw new s(n,c.FieldNotFound,t,{key:i});r.setField(i,fn(a,t.operator,null,t,n))}}else if(r instanceof J){if(!1===w(i))throw new s(n,c.KeyAccessorMustBeString,t);if(!0!==r.hasGlobal(i))throw new s(n,c.ModuleExportNotFound,t);r.setGlobal(i,fn(a,t.operator,await r.global(i),t,n))}else{if(!f(r))throw u(r)?new s(n,c.Immutable,t):new s(n,c.InvalidParameter,t);if(!1===w(i))throw new s(n,c.KeyAccessorMustBeString,t);if(!0===r.hasField(i))r.setField(i,fn(a,t.operator,r.field(i),t,n));else{if("="!==t.operator)throw new s(n,c.FieldNotFound,t,{key:i});r.setField(i,fn(a,t.operator,null,t,n))}}return g}const r=e.name.toLowerCase();if(null!=n.localScope&&void 0!==n.localScope[r]){const e=await Q(n,t.right);return n.localScope[r]={value:fn(e,t.operator,n.localScope[r].value,t,n),valueset:!0,node:t.right},g}if(void 0!==n.globalScope[r]){const e=await Q(n,t.right);return n.globalScope[r]={value:fn(e,t.operator,n.globalScope[r].value,t,n),valueset:!0,node:t.right},g}throw new s(n,c.InvalidIdentifier,t)}async function hn(n,t){if("AssignmentExpression"===t.expression.type)return Q(n,t.expression);if("CallExpression"===t.expression.type){const e=await Q(n,t.expression);return e===g?g:new k(e)}const e=await Q(n,t.expression);return e===g?g:new k(e)}async function dn(n,t){const e=await Q(n,t.test);if(!0===e)return Q(n,t.consequent);if(!1===e)return null!==t.alternate?Q(n,t.alternate):g;throw new s(n,c.BooleanConditionRequired,t)}async function pn(n,t){return yn(n,t,0)}async function yn(n,t,e){if(e>=t.body.length)return g;const r=await Q(n,t.body[e]);return r instanceof I||r===m||r===b||e===t.body.length-1?r:yn(n,t,e+1)}async function vn(n,t){if(null===t.argument)return new I(g);const e=await Q(n,t.argument);return new I(e)}async function mn(n,t){const e=t.id.name.toLowerCase();return n.globalScope[e]={valueset:!0,node:null,value:new z(t,n)},g}async function bn(n,t){const e=t.specifiers[0].local.name.toLowerCase(),r=n.libraryResolver.loadLibrary(e);let i=null;return n.libraryResolver._moduleSingletons?.has(r.uri)?i=n.libraryResolver._moduleSingletons.get(r.uri):(i=new J(r),await i.loadModule(n),n.libraryResolver._moduleSingletons?.set(r.uri,i)),n.globalScope[e]={value:i,valueset:!0,node:t},g}async function xn(n,t){if(await Q(n,t.declaration),"FunctionDeclaration"===t.declaration.type)n.exports[t.declaration.id.name.toLowerCase()]="function";else if("VariableDeclaration"===t.declaration.type)for(const e of t.declaration.declarations)n.exports[e.id.name.toLowerCase()]="variable";return g}async function Sn(n,t,e){return e>=t.declarations.length?g:(await Q(n,t.declarations[e]),e===t.declarations.length-1||await Sn(n,t,e+1),g)}async function gn(n,t){let e=null;if(e=null===t.init?null:await Q(n,t.init),null!==n.localScope){if(e===g&&(e=null),"Identifier"!==t.id.type)throw new s(n,c.InvalidIdentifier,t);const r=t.id.name.toLowerCase();return null!=n.localScope&&(n.localScope[r]={value:e,valueset:!0,node:t.init}),g}if("Identifier"!==t.id.type)throw new s(n,c.InvalidIdentifier,t);const r=t.id.name.toLowerCase();return e===g&&(e=null),n.globalScope[r]={value:e,valueset:!0,node:t.init},g}async function jn(n,t){const e=await Q(n,t.object);if(null===e)throw new s(n,c.MemberOfNull,t);if(!1===t.computed){if("Identifier"===t.property.type){if(e instanceof h||f(e))return e.field(t.property.name);if(e instanceof q)return d(e,t.property.name,n,t);if(e instanceof J){if(!e.hasGlobal(t.property.name))throw new s(n,c.InvalidIdentifier,t);return e.global(t.property.name)}throw new s(n,c.InvalidMemberAccessKey,t)}throw new s(n,c.InvalidMemberAccessKey,t)}let r=await Q(n,t.property);if(e instanceof h||f(e)){if(w(r))return e.field(r);throw new s(n,c.InvalidMemberAccessKey,t)}if(e instanceof J){if(w(r))return e.global(r);throw new s(n,c.InvalidMemberAccessKey,t)}if(e instanceof q){if(w(r))return d(e,r,n,t);throw new s(n,c.InvalidMemberAccessKey,t)}if(l(e)){if(p(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=e.length+r),r>=e.length||r<0)throw new s(n,c.OutOfBounds,t);return e[r]}throw new s(n,c.InvalidMemberAccessKey,t)}if(u(e)){if(p(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=e.length()+r),r>=e.length()||r<0)throw new s(n,c.OutOfBounds,t);return e.get(r)}throw new s(n,c.InvalidMemberAccessKey,t)}if(w(e)){if(p(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=e.length+r),r>=e.length||r<0)throw new s(n,c.OutOfBounds,t);return e[r]}throw new s(n,c.InvalidMemberAccessKey,t)}throw new s(n,c.InvalidMemberAccessKey,t)}async function En(n,t){const e=await Q(n,t.argument);if(o(e)){if("!"===t.operator)return!e;if("-"===t.operator)return-1*R(e);if("+"===t.operator)return 1*R(e);if("~"===t.operator)return~R(e);throw new s(n,c.UnsupportedUnaryOperator,t)}if("-"===t.operator)return-1*R(e);if("+"===t.operator)return 1*R(e);if("~"===t.operator)return~R(e);throw new s(n,c.UnsupportedUnaryOperator,t)}async function In(n,t){const e=[];for(let r=0;r<t.elements.length;r++)e.push(await Q(n,t.elements[r]));for(let r=0;r<e.length;r++){if(x(e[r]))throw new s(n,c.NoFunctionInArray,t);e[r]===g&&(e[r]=null)}return e}async function Fn(n,t){const e=[];e[0]=await Q(n,t.left),e[1]=await Q(n,t.right);const r=e[0],i=e[1];switch(t.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return D(R(r),R(i),t.operator);case"==":return C(r,i);case"!=":return!C(r,i);case"<":case">":case"<=":case">=":return A(r,i,t.operator);case"+":return w(r)||w(i)?M(r)+M(i):R(r)+R(i);case"-":return R(r)-R(i);case"*":return R(r)*R(i);case"/":return R(r)/R(i);case"%":return R(r)%R(i);default:throw new s(n,c.UnsupportedOperator,t)}}async function Rn(n,t){const e=await Q(n,t.left);let r=null;if(!o(e))throw new s(n,c.LogicalExpressionOnlyBoolean,t);switch(t.operator){case"||":if(!0===e)return e;if(r=await Q(n,t.right),o(r))return r;throw new s(n,c.LogicExpressionOrAnd,t);case"&&":if(!1===e)return e;if(r=await Q(n,t.right),o(r))return r;throw new s(n,c.LogicExpressionOrAnd,t);default:throw new s(n,c.LogicExpressionOrAnd,t)}}async function kn(n,t){const e=t.name.toLowerCase();if(null!=n.localScope&&void 0!==n.localScope[e]){const t=n.localScope[e];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=Q(n,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}if(void 0!==n.globalScope[e]){const t=n.globalScope[e];if(!0===t.valueset)return t.value;if(null!==t.d)return t.d;t.d=Q(n,t.node);const r=await t.d;return t.value=r,t.valueset=!0,r}throw new s(n,c.InvalidIdentifier,t)}async function Mn(n,t){if("MemberExpression"===t.callee.type){const e=await Q(n,t.callee.object);if(!(e instanceof J))throw new s(n,c.FunctionNotFound,t);const r=!1===t.callee.computed?t.callee.property.name:await Q(n,t.callee.property);if(!e.hasGlobal(r))throw new s(n,c.FunctionNotFound,t);const i=await e.global(r);if(!x(i))throw new s(n,c.CallNonFunction,t);return i.call(n,t)}if("Identifier"!==t.callee.type)throw new s(n,c.FunctionNotFound,t);if(null!=n.localScope&&void 0!==n.localScope[t.callee.name.toLowerCase()]){const e=n.localScope[t.callee.name.toLowerCase()];if(x(e.value))return e.value.call(n,t);throw new s(n,c.CallNonFunction,t)}if(void 0!==n.globalScope[t.callee.name.toLowerCase()]){const e=n.globalScope[t.callee.name.toLowerCase()];if(x(e.value))return e.value.call(n,t);throw new s(n,c.CallNonFunction,t)}throw new s(n,c.FunctionNotFound,t)}async function An(n,t){return t.value?t.value.cooked:""}function Cn(n,t,e){if(x(n))throw new s(t,c.NoFunctionInTemplateLiteral,e);return n}async function Dn(n,t){const e=[];for(let r=0;r<t.expressions.length;r++){const i=await Q(n,t.expressions[r]);e[r]=M(i)}let r="",i=0;for(const a of t.quasis)if(r+=a.value?a.value.cooked:"",!1===a.tail){r+=e[i]?Cn(e[i],n,t):"",i++}return r}const Pn={};async function Tn(n,t,e,r){const i=await Q(n,t.arguments[e]);if(C(i,r))return Q(n,t.arguments[e+1]);const a=t.arguments.length-e;return 1===a?Q(n,t.arguments[e]):2===a?null:3===a?Q(n,t.arguments[e+2]):Tn(n,t,e+2,r)}async function Zn(n,t,e,r){if(!0===r)return Q(n,t.arguments[e+1]);if(3===t.arguments.length-e)return Q(n,t.arguments[e+2]);const i=await Q(n,t.arguments[e+2]);if(!1===o(i))throw new s(n,c.ModuleExportNotFound,t.arguments[e+2]);return Zn(n,t,e+2,i)}async function Vn(n,t,e,r){const i=n.body;if(e.length!==n.params.length)throw new s(t,c.WrongNumberOfParameters,null);for(let r=0;r<e.length;r++){const i=n.params[r];"Identifier"===i.type&&null!=t.localScope&&(t.localScope[i.name.toLowerCase()]={d:null,value:e[r],valueset:!0,node:null})}const a=await Q(t,i);if(a instanceof I)return a.value;if(a===m)throw new s(t,c.UnexpectedToken,r);if(a===b)throw new s(t,c.UnexpectedToken,r);return a instanceof k?a.value:a}n(Pn,W),t(Pn,W),e(Pn,W),r(Pn,W),i(Pn,W),L({functions:Pn,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:W,standardFunctionAsync:O}),Pn.iif=async function(n,t){a(null===t.arguments?[]:t.arguments,3,3,n,t);const e=await Q(n,t.arguments[0]);if(!1===o(e))throw new s(n,c.BooleanConditionRequired,t);return Q(n,e?t.arguments[1]:t.arguments[2])},Pn.defaultvalue=async function(n,t){a(null===t.arguments?[]:t.arguments,2,3,n,t);const e=await Q(n,t.arguments[0]);if(3===t.arguments.length){const r=await Q(n,t.arguments[1]);let i=[];if(u(r))i=r.toArray();else{if(!l(r))throw new s(n,c.InvalidParameter,t);i=r}let a=e;if(null===a)return Q(n,t.arguments[2]);for(const e of i)if(f(a)){if(!1===w(e))return Q(n,t.arguments[2]);if(!a.hasField(e))return Q(n,t.arguments[2]);a=a.field(e)}else if(a instanceof h){if(!1===w(e))return Q(n,t.arguments[2]);if(!a.hasField(e))return Q(n,t.arguments[2]);a=a.field(e)}else if(a instanceof q){if(!1===w(e))return Q(n,t.arguments[2]);if(a=d(a,e,null,null,2),null===a)return Q(n,t.arguments[2]);if("notfound"===a?.keystate)return Q(n,t.arguments[2])}else if(l(a)){if(!1===p(e))return Q(n,t.arguments[2]);if(a=a[e],null==a)return Q(n,t.arguments[2])}else{if(!u(a))return Q(n,t.arguments[2]);if(!1===p(e))return Q(n,t.arguments[2]);if(a=a.get(e),null==a)return Q(n,t.arguments[2])}return a}return null==e||""===e?Q(n,t.arguments[1]):e},Pn.decode=async function(n,t){if(t.arguments.length<2)throw new s(n,c.WrongNumberOfParameters,t);if(2===t.arguments.length)return Q(n,t.arguments[1]);if((t.arguments.length-1)%2==0)throw new s(n,c.WrongNumberOfParameters,t);return Tn(n,t,1,await Q(n,t.arguments[0]))},Pn.when=async function(n,t){if(t.arguments.length<3)throw new s(n,c.WrongNumberOfParameters,t);if(t.arguments.length%2==0)throw new s(n,c.WrongNumberOfParameters,t);const e=await Q(n,t.arguments[0]);if(!1===o(e))throw new s(n,c.BooleanConditionRequired,t.arguments[0]);return Zn(n,t,0,e)};const Bn={fixSpatialReference:P,parseArguments:U,standardFunction:W,standardFunctionAsync:O,evaluateIdentifier:kn};for(const n in Pn)Pn[n]={value:new y(Pn[n]),valueset:!0,node:null};const Gn=function(){};function Ln(n,t,e){const r=new Gn;null==n&&(n={}),null==t&&(t={});const i=new h({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});i.immutable=!1,r.textformatting={value:i,valueset:!0,node:null};for(const n in t)r[n]={value:new y(t[n]),native:!0,valueset:!0,node:null};for(const t in n)n[t]&&"esri.Graphic"===n[t].declaredClass?r[t]={value:F.createFromGraphic(n[t],e),valueset:!0,node:null}:r[t]={value:n[t],valueset:!0,node:null};return r}function qn(n){console.log(n)}Gn.prototype=Pn,Gn.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},Gn.prototype.pi={value:Math.PI,valueset:!0,node:null};const Hn=Bn;function Nn(n){const t={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:W,standardFunctionAsync:O,evaluateIdentifier:kn};for(let e=0;e<n.length;e++)n[e].registerFunctions(t);for(const n in t.functions)Pn[n]={value:new y(t.functions[n]),valueset:!0,node:null},Gn.prototype[n]=Pn[n];for(let n=0;n<t.signatures.length;n++)v(t.signatures[n],"async")}async function Un(n,t){let e=t.spatialReference;null==e&&(e=new H({wkid:102100}));let r=null;n.usesModules&&(r=new G(new Map,n.loadedModules));const i=Ln(t.vars,t.customfunctions,t.timeZone),a={spatialReference:e,services:t.services,exports:{},libraryResolver:r,abortSignal:void 0===t.abortSignal||null===t.abortSignal?{aborted:!1}:t.abortSignal,globalScope:i,console:t.console??qn,timeZone:t.timeZone??null,lrucache:t.lrucache,interceptor:t.interceptor,localScope:null,depthCounter:{depth:1}};let o=await Q(a,n);if(o instanceof I&&(o=o.value),o instanceof k&&(o=o.value),o===g&&(o=null),o===m)throw new s(a,c.IllegalResult,null);if(o===b)throw new s(a,c.IllegalResult,null);if(x(o))throw new s(a,c.IllegalResult,null);return o}Nn([S]);export{Un as executeScript,Nn as extend,Hn as functionHelper};
//# sourceMappingURL=p-f461ba88.js.map