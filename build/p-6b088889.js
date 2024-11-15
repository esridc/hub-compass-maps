import{o as n}from"./p-ccf595c8.js";var r,t={exports:{}};function e(){return r||(r=1,n=t,e="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,i=function(n={}){var r,t,i=void 0!==n?n:{};i.ready=new Promise(((n,e)=>{r=n,t=e}));var o=Object.assign({},i),u="object"==typeof window,a="function"==typeof importScripts;"object"==typeof process&&"object"==typeof process.versions&&process.versions.node;var f,c="";function s(n){return i.locateFile?i.locateFile(n,c):c+n}(u||a)&&(a?c=self.location.href:"undefined"!=typeof document&&document.currentScript&&(c=document.currentScript.src),e&&(c=e),c=0!==c.indexOf("blob:")?c.substr(0,c.replace(/[?#].*/,"").lastIndexOf("/")+1):"",a&&(f=n=>{var r=new XMLHttpRequest;return r.open("GET",n,!1),r.responseType="arraybuffer",r.send(null),new Uint8Array(r.response)}));var v,l,d=i.print||console.log.bind(console),h=i.printErr||console.warn.bind(console);Object.assign(i,o),o=null,i.wasmBinary&&(v=i.wasmBinary),"object"!=typeof WebAssembly&&D("no native wasm support detected");var y,m,p,w,_,g,b,A,T,k=!1;function W(){var n=l.buffer;i.HEAP8=y=new Int8Array(n),i.HEAP16=p=new Int16Array(n),i.HEAP32=_=new Int32Array(n),i.HEAPU8=m=new Uint8Array(n),i.HEAPU16=w=new Uint16Array(n),i.HEAPU32=g=new Uint32Array(n),i.HEAPF32=b=new Float32Array(n),i.HEAPF64=A=new Float64Array(n)}var F=[],P=[],S=[];function U(){if(i.preRun)for("function"==typeof i.preRun&&(i.preRun=[i.preRun]);i.preRun.length;)C(i.preRun.shift());Z(F)}function j(){Z(P)}function E(){if(i.postRun)for("function"==typeof i.postRun&&(i.postRun=[i.postRun]);i.postRun.length;)I(i.postRun.shift());Z(S)}function C(n){F.unshift(n)}function x(n){P.unshift(n)}function I(n){S.unshift(n)}var V=0,M=null;function O(n){V++,i.monitorRunDependencies&&i.monitorRunDependencies(V)}function z(n){if(V--,i.monitorRunDependencies&&i.monitorRunDependencies(V),0==V&&M){var r=M;M=null,r()}}function D(n){i.onAbort&&i.onAbort(n),h(n="Aborted("+n+")"),k=!0,n+=". Build with -sASSERTIONS for more info.";var r=new WebAssembly.RuntimeError(n);throw t(r),r}var R,B="data:application/octet-stream;base64,";function q(n){return n.startsWith(B)}function H(n){try{if(n==R&&v)return new Uint8Array(v);if(f)return f(n);throw"both async and sync fetching of the wasm failed"}catch(n){D(n)}}function N(n){return v||!u&&!a||"function"!=typeof fetch?Promise.resolve().then((()=>H(n))):fetch(n,{credentials:"same-origin"}).then((r=>{if(!r.ok)throw"failed to load wasm binary file at '"+n+"'";return r.arrayBuffer()})).catch((()=>H(n)))}function G(n,r,t){return N(n).then((n=>WebAssembly.instantiate(n,r))).then((n=>n)).then(t,(n=>{h("failed to asynchronously prepare wasm: "+n),D(n)}))}function L(n,r,t,e){return n||"function"!=typeof WebAssembly.instantiateStreaming||q(r)||"function"!=typeof fetch?G(r,t,e):fetch(r,{credentials:"same-origin"}).then((n=>WebAssembly.instantiateStreaming(n,t).then(e,(function(n){return h("wasm streaming compile failed: "+n),h("falling back to ArrayBuffer instantiation"),G(r,t,e)}))))}function X(){var n={env:jr,wasi_snapshot_preview1:jr};function r(n,r){var t=n.exports;return i.asm=t,l=i.asm.memory,W(),T=i.asm.__indirect_function_table,x(i.asm.__wasm_call_ctors),z(),t}function e(n){r(n.instance)}if(O(),i.instantiateWasm)try{return i.instantiateWasm(n,r)}catch(n){h("Module.instantiateWasm callback failed with error: "+n),t(n)}return L(v,R,n,e).catch(t),{}}function Z(n){for(;n.length>0;)n.shift()(i)}q(R="i3s.wasm")||(R=s(R));var $=[];function J(n){var r=$[n];return r||(n>=$.length&&($.length=n+1),$[n]=r=T.get(n)),r}function K(n,r){J(n)(r)}function Q(n){this.excPtr=n,this.ptr=n-24,this.set_type=function(n){g[this.ptr+4>>2]=n},this.get_type=function(){return g[this.ptr+4>>2]},this.set_destructor=function(n){g[this.ptr+8>>2]=n},this.get_destructor=function(){return g[this.ptr+8>>2]},this.set_caught=function(n){n=n?1:0,y[this.ptr+12|0]=n},this.get_caught=function(){return 0!=y[this.ptr+12|0]},this.set_rethrown=function(n){n=n?1:0,y[this.ptr+13|0]=n},this.get_rethrown=function(){return 0!=y[this.ptr+13|0]},this.init=function(n,r){this.set_adjusted_ptr(0),this.set_type(n),this.set_destructor(r)},this.set_adjusted_ptr=function(n){g[this.ptr+16>>2]=n},this.get_adjusted_ptr=function(){return g[this.ptr+16>>2]},this.get_exception_ptr=function(){if(Vr(this.get_type()))return g[this.excPtr>>2];var n=this.get_adjusted_ptr();return 0!==n?n:this.excPtr}}function Y(n,r,t){throw new Q(n).init(r,t),n}var nn={};function rn(n){for(;n.length;){var r=n.pop();n.pop()(r)}}function tn(n){return this.fromWireType(_[n>>2])}var en={},on={},un={},an=48,fn=57;function cn(n){if(void 0===n)return"_unknown";var r=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=an&&r<=fn?"_"+n:n}function sn(n,r){return n=cn(n),{[n]:function(){return r.apply(this,arguments)}}[n]}function vn(n,r){var t=sn(r,(function(n){this.name=r,this.message=n;var t=new Error(n).stack;void 0!==t&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return t.prototype=Object.create(n.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},t}var ln=void 0;function dn(n){throw new ln(n)}function hn(n,r,t){function e(r){var e=t(r);e.length!==n.length&&dn("Mismatched type converter count");for(var i=0;i<n.length;++i)Tn(n[i],e[i])}n.forEach((function(n){un[n]=r}));var i=new Array(r.length),o=[],u=0;r.forEach(((n,r)=>{on.hasOwnProperty(n)?i[r]=on[n]:(o.push(n),en.hasOwnProperty(n)||(en[n]=[]),en[n].push((()=>{i[r]=on[n],++u===o.length&&e(i)})))})),0===o.length&&e(i)}function yn(n){var r=nn[n];delete nn[n];var t=r.rawConstructor,e=r.rawDestructor,i=r.fields;hn([n],i.map((n=>n.getterReturnType)).concat(i.map((n=>n.setterArgumentType))),(n=>{var o={};return i.forEach(((r,t)=>{var e=r.fieldName,u=n[t],a=r.getter,f=r.getterContext,c=n[t+i.length],s=r.setter,v=r.setterContext;o[e]={read:n=>u.fromWireType(a(f,n)),write:(n,r)=>{var t=[];s(v,n,c.toWireType(t,r)),rn(t)}}})),[{name:r.name,fromWireType:function(n){var r={};for(var t in o)r[t]=o[t].read(n);return e(n),r},toWireType:function(n,r){for(var i in o)if(!(i in r))throw new TypeError('Missing field:  "'+i+'"');var u=t();for(i in o)o[i].write(u,r[i]);return null!==n&&n.push(e,u),u},argPackAdvance:8,readValueFromPointer:tn,destructorFunction:e}]}))}function mn(n,r,t,e,i){}function pn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}function wn(){for(var n=new Array(256),r=0;r<256;++r)n[r]=String.fromCharCode(r);_n=n}var _n=void 0;function gn(n){for(var r="",t=n;m[t];)r+=_n[m[t++]];return r}var bn=void 0;function An(n){throw new bn(n)}function Tn(n,r,t={}){if(!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=r.name;if(n||An('type "'+e+'" must have a positive integer typeid pointer'),on.hasOwnProperty(n)){if(t.ignoreDuplicateRegistrations)return;An("Cannot register type '"+e+"' twice")}if(on[n]=r,delete un[n],en.hasOwnProperty(n)){var i=en[n];delete en[n],i.forEach((n=>n()))}}function kn(n,r,t,e,i){var o=pn(t);Tn(n,{name:r=gn(r),fromWireType:function(n){return!!n},toWireType:function(n,r){return r?e:i},argPackAdvance:8,readValueFromPointer:function(n){var e;if(1===t)e=y;else if(2===t)e=p;else{if(4!==t)throw new TypeError("Unknown boolean type size: "+r);e=_}return this.fromWireType(e[n>>o])},destructorFunction:null})}function Wn(){this.allocated=[void 0],this.freelist=[],this.get=function(n){return this.allocated[n]},this.allocate=function(n){let r=this.freelist.pop()||this.allocated.length;return this.allocated[r]=n,r},this.free=function(n){this.allocated[n]=void 0,this.freelist.push(n)}}var Fn=new Wn;function Pn(n){n>=Fn.reserved&&0==--Fn.get(n).refcount&&Fn.free(n)}function Sn(){for(var n=0,r=Fn.reserved;r<Fn.allocated.length;++r)void 0!==Fn.allocated[r]&&++n;return n}function Un(){Fn.allocated.push({value:void 0},{value:null},{value:!0},{value:!1}),Fn.reserved=Fn.allocated.length,i.count_emval_handles=Sn}var jn={toValue:n=>(n||An("Cannot use deleted val. handle = "+n),Fn.get(n).value),toHandle:n=>{switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:return Fn.allocate({refcount:1,value:n})}}};function En(n,r){Tn(n,{name:r=gn(r),fromWireType:function(n){var r=jn.toValue(n);return Pn(n),r},toWireType:function(n,r){return jn.toHandle(r)},argPackAdvance:8,readValueFromPointer:tn,destructorFunction:null})}function Cn(n,r){switch(r){case 2:return function(n){return this.fromWireType(b[n>>2])};case 3:return function(n){return this.fromWireType(A[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function xn(n,r,t){var e=pn(t);Tn(n,{name:r=gn(r),fromWireType:function(n){return n},toWireType:function(n,r){return r},argPackAdvance:8,readValueFromPointer:Cn(r,e),destructorFunction:null})}function In(n,r,t,e,i,o){var u=r.length;u<2&&An("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==r[1]&&null!==t,f=!1,c=1;c<r.length;++c)if(null!==r[c]&&void 0===r[c].destructorFunction){f=!0;break}var s="void"!==r[0].name,v=u-2,l=new Array(v),d=[],h=[];return function(){var t;arguments.length!==v&&An("function "+n+" called with "+arguments.length+" arguments, expected "+v+" args!"),h.length=0,d.length=a?2:1,d[0]=i,a&&(t=r[1].toWireType(h,this),d[1]=t);for(var o=0;o<v;++o)l[o]=r[o+2].toWireType(h,arguments[o]),d.push(l[o]);function u(n){if(f)rn(h);else for(var e=a?1:2;e<r.length;e++){var i=1===e?t:l[e-2];null!==r[e].destructorFunction&&r[e].destructorFunction(i)}if(s)return r[0].fromWireType(n)}return u(e.apply(null,d))}}function Vn(n,r,t){if(void 0===n[r].overloadTable){var e=n[r];n[r]=function(){return n[r].overloadTable.hasOwnProperty(arguments.length)||An("Function '"+t+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[r].overloadTable+")!"),n[r].overloadTable[arguments.length].apply(this,arguments)},n[r].overloadTable=[],n[r].overloadTable[e.argCount]=e}}function Mn(n,r,t){i.hasOwnProperty(n)?((void 0===t||void 0!==i[n].overloadTable&&void 0!==i[n].overloadTable[t])&&An("Cannot register public name '"+n+"' twice"),Vn(i,n,n),i.hasOwnProperty(t)&&An("Cannot register multiple overloads of a function with the same number of arguments ("+t+")!"),i[n].overloadTable[t]=r):(i[n]=r,void 0!==t&&(i[n].numArguments=t))}function On(n,r){for(var t=[],e=0;e<n;e++)t.push(g[r+4*e>>2]);return t}function zn(n,r,t){i.hasOwnProperty(n)||dn("Replacing nonexistant public symbol"),void 0!==i[n].overloadTable&&void 0!==t?i[n].overloadTable[t]=r:(i[n]=r,i[n].argCount=t)}function Dn(n,r,t){var e=i["dynCall_"+n];return t&&t.length?e.apply(null,[r].concat(t)):e.call(null,r)}function Rn(n,r,t){return n.includes("j")?Dn(n,r,t):J(r).apply(null,t)}function Bn(n,r){var t=[];return function(){return t.length=0,Object.assign(t,arguments),Rn(n,r,t)}}function qn(n,r){function t(){return n.includes("j")?Bn(n,r):J(r)}n=gn(n);var e=t();return"function"!=typeof e&&An("unknown function pointer with signature "+n+": "+r),e}var Hn=void 0;function Nn(n){var r=xr(n),t=gn(r);return Cr(r),t}function Gn(n,r){var t=[],e={};function i(n){e[n]||on[n]||(un[n]?un[n].forEach(i):(t.push(n),e[n]=!0))}throw r.forEach(i),new Hn(n+": "+t.map(Nn).join([", "]))}function Ln(n,r,t,e,i,o,u){var a=On(r,t);n=gn(n),i=qn(e,i),Mn(n,(function(){Gn("Cannot call "+n+" due to unbound types",a)}),r-1),hn([],a,(function(t){var e=[t[0],null].concat(t.slice(1));return zn(n,In(n,e,null,i,o),r-1),[]}))}function Xn(n,r,t){switch(r){case 0:return t?function(n){return y[n]}:function(n){return m[n]};case 1:return t?function(n){return p[n>>1]}:function(n){return w[n>>1]};case 2:return t?function(n){return _[n>>2]}:function(n){return g[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function Zn(n,r,t,e,i){r=gn(r);var o=pn(t),u=n=>n;if(0===e){var a=32-8*t;u=n=>n<<a>>>a}var f=r.includes("unsigned");Tn(n,{name:r,fromWireType:u,toWireType:f?function(n,r){return r>>>0}:function(n,r){return r},argPackAdvance:8,readValueFromPointer:Xn(r,o,0!==e),destructorFunction:null})}function $n(n,r,t){var e=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function i(n){var r=g,t=r[n>>=2],i=r[n+1];return new e(r.buffer,i,t)}Tn(n,{name:t=gn(t),fromWireType:i,argPackAdvance:8,readValueFromPointer:i},{ignoreDuplicateRegistrations:!0})}function Jn(n,r,t,e){if(!(e>0))return 0;for(var i=t,o=t+e-1,u=0;u<n.length;++u){var a=n.charCodeAt(u);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&n.charCodeAt(++u)),a<=127){if(t>=o)break;r[t++]=a}else if(a<=2047){if(t+1>=o)break;r[t++]=192|a>>6,r[t++]=128|63&a}else if(a<=65535){if(t+2>=o)break;r[t++]=224|a>>12,r[t++]=128|a>>6&63,r[t++]=128|63&a}else{if(t+3>=o)break;r[t++]=240|a>>18,r[t++]=128|a>>12&63,r[t++]=128|a>>6&63,r[t++]=128|63&a}}return r[t]=0,t-i}function Kn(n,r,t){return Jn(n,m,r,t)}function Qn(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e<=127?r++:e<=2047?r+=2:e>=55296&&e<=57343?(r+=4,++t):r+=3}return r}var Yn="undefined"!=typeof TextDecoder?new TextDecoder("utf8"):void 0;function nr(n,r,t){for(var e=r+t,i=r;n[i]&&!(i>=e);)++i;if(i-r>16&&n.buffer&&Yn)return Yn.decode(n.subarray(r,i));for(var o="";r<i;){var u=n[r++];if(128&u){var a=63&n[r++];if(192!=(224&u)){var f=63&n[r++];if((u=224==(240&u)?(15&u)<<12|a<<6|f:(7&u)<<18|a<<12|f<<6|63&n[r++])<65536)o+=String.fromCharCode(u);else{var c=u-65536;o+=String.fromCharCode(55296|c>>10,56320|1023&c)}}else o+=String.fromCharCode((31&u)<<6|a)}else o+=String.fromCharCode(u)}return o}function rr(n,r){return n?nr(m,n,r):""}function tr(n,r){var t="std::string"===(r=gn(r));Tn(n,{name:r,fromWireType:function(n){var r,e=g[n>>2],i=n+4;if(t)for(var o=i,u=0;u<=e;++u){var a=i+u;if(u==e||0==m[a]){var f=rr(o,a-o);void 0===r?r=f:(r+=String.fromCharCode(0),r+=f),o=a+1}}else{var c=new Array(e);for(u=0;u<e;++u)c[u]=String.fromCharCode(m[i+u]);r=c.join("")}return Cr(n),r},toWireType:function(n,r){var e;r instanceof ArrayBuffer&&(r=new Uint8Array(r));var i="string"==typeof r;i||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||An("Cannot pass non-string to std::string"),e=t&&i?Qn(r):r.length;var o=Er(4+e+1),u=o+4;if(g[o>>2]=e,t&&i)Kn(r,u,e+1);else if(i)for(var a=0;a<e;++a){var f=r.charCodeAt(a);f>255&&(Cr(u),An("String has UTF-16 code units that do not fit in 8 bits")),m[u+a]=f}else for(a=0;a<e;++a)m[u+a]=r[a];return null!==n&&n.push(Cr,o),o},argPackAdvance:8,readValueFromPointer:tn,destructorFunction:function(n){Cr(n)}})}var er="undefined"!=typeof TextDecoder?new TextDecoder("utf-16le"):void 0;function ir(n,r){for(var t=n,e=t>>1,i=e+r/2;!(e>=i)&&w[e];)++e;if((t=e<<1)-n>32&&er)return er.decode(m.subarray(n,t));for(var o="",u=0;!(u>=r/2);++u){var a=p[n+2*u>>1];if(0==a)break;o+=String.fromCharCode(a)}return o}function or(n,r,t){if(void 0===t&&(t=2147483647),t<2)return 0;for(var e=r,i=(t-=2)<2*n.length?t/2:n.length,o=0;o<i;++o){var u=n.charCodeAt(o);p[r>>1]=u,r+=2}return p[r>>1]=0,r-e}function ur(n){return 2*n.length}function ar(n,r){for(var t=0,e="";!(t>=r/4);){var i=_[n+4*t>>2];if(0==i)break;if(++t,i>=65536){var o=i-65536;e+=String.fromCharCode(55296|o>>10,56320|1023&o)}else e+=String.fromCharCode(i)}return e}function fr(n,r,t){if(void 0===t&&(t=2147483647),t<4)return 0;for(var e=r,i=e+t-4,o=0;o<n.length;++o){var u=n.charCodeAt(o);if(u>=55296&&u<=57343&&(u=65536+((1023&u)<<10)|1023&n.charCodeAt(++o)),_[r>>2]=u,(r+=4)+4>i)break}return _[r>>2]=0,r-e}function cr(n){for(var r=0,t=0;t<n.length;++t){var e=n.charCodeAt(t);e>=55296&&e<=57343&&++t,r+=4}return r}function sr(n,r,t){var e,i,o,u,a;t=gn(t),2===r?(e=ir,i=or,u=ur,o=()=>w,a=1):4===r&&(e=ar,i=fr,u=cr,o=()=>g,a=2),Tn(n,{name:t,fromWireType:function(n){for(var t,i=g[n>>2],u=o(),f=n+4,c=0;c<=i;++c){var s=n+4+c*r;if(c==i||0==u[s>>a]){var v=e(f,s-f);void 0===t?t=v:(t+=String.fromCharCode(0),t+=v),f=s+r}}return Cr(n),t},toWireType:function(n,e){"string"!=typeof e&&An("Cannot pass non-string to C++ string type "+t);var o=u(e),f=Er(4+o+r);return g[f>>2]=o>>a,i(e,f+4,o+r),null!==n&&n.push(Cr,f),f},argPackAdvance:8,readValueFromPointer:tn,destructorFunction:function(n){Cr(n)}})}function vr(n,r,t,e,i,o){nn[n]={name:gn(r),rawConstructor:qn(t,e),rawDestructor:qn(i,o),fields:[]}}function lr(n,r,t,e,i,o,u,a,f,c){nn[n].fields.push({fieldName:gn(r),getterReturnType:t,getter:qn(e,i),getterContext:o,setterArgumentType:u,setter:qn(a,f),setterContext:c})}function dr(n,r){Tn(n,{isVoid:!0,name:r=gn(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(n,r){}})}function hr(n){n>4&&(Fn.get(n).refcount+=1)}var yr={};function mr(n){var r=yr[n];return void 0===r?gn(n):r}function pr(n){return jn.toHandle(mr(n))}function wr(n,r){var t=on[n];return void 0===t&&An(r+" has unknown type "+Nn(n)),t}function _r(n,r){var t=(n=wr(n,"_emval_take_value")).readValueFromPointer(r);return jn.toHandle(t)}function gr(){D("")}function br(n,r,t){m.copyWithin(n,r,r+t)}function Ar(){return 2147483648}function Tr(n){var r=l.buffer;try{return l.grow(n-r.byteLength+65535>>>16),W(),1}catch(n){}}function kr(n){var r=m.length;n>>>=0;var t=Ar();if(n>t)return!1;let e=(n,r)=>n+(r-n%r)%r;for(var i=1;i<=4;i*=2){var o=r*(1+.2/i);if(o=Math.min(o,n+100663296),Tr(Math.min(t,e(Math.max(n,o),65536))))return!0}return!1}function Wr(n){return 52}function Fr(n,r,t,e,i){return 70}var Pr=[null,[],[]];function Sr(n,r){var t=Pr[n];0===r||10===r?((1===n?d:h)(nr(t,0)),t.length=0):t.push(r)}function Ur(n,r,t,e){for(var i=0,o=0;o<t;o++){var u=g[r>>2],a=g[r+4>>2];r+=8;for(var f=0;f<a;f++)Sr(n,m[u+f]);i+=a}return g[e>>2]=i,0}ln=i.InternalError=vn(Error,"InternalError"),wn(),bn=i.BindingError=vn(Error,"BindingError"),Un(),Hn=i.UnboundTypeError=vn(Error,"UnboundTypeError");var jr={__call_sighandler:K,__cxa_throw:Y,_embind_finalize_value_object:yn,_embind_register_bigint:mn,_embind_register_bool:kn,_embind_register_emval:En,_embind_register_float:xn,_embind_register_function:Ln,_embind_register_integer:Zn,_embind_register_memory_view:$n,_embind_register_std_string:tr,_embind_register_std_wstring:sr,_embind_register_value_object:vr,_embind_register_value_object_field:lr,_embind_register_void:dr,_emval_decref:Pn,_emval_incref:hr,_emval_new_cstring:pr,_emval_take_value:_r,abort:gr,emscripten_memcpy_big:br,emscripten_resize_heap:kr,fd_close:Wr,fd_seek:Fr,fd_write:Ur};X();var Er=function(){return(Er=i.asm.malloc).apply(null,arguments)},Cr=function(){return(Cr=i.asm.free).apply(null,arguments)},xr=function(){return(xr=i.asm.__getTypeName).apply(null,arguments)};i.__embind_initialize_bindings=function(){return(i.__embind_initialize_bindings=i.asm._embind_initialize_bindings).apply(null,arguments)};var Ir,Vr=function(){return(Vr=i.asm.__cxa_is_pointer_type).apply(null,arguments)};function Mr(){function n(){Ir||(Ir=!0,i.calledRun=!0,k||(j(),r(i),i.onRuntimeInitialized&&i.onRuntimeInitialized(),E()))}V>0||(U(),V>0||(i.setStatus?(i.setStatus("Running..."),setTimeout((function(){setTimeout((function(){i.setStatus("")}),1),n()}),1)):n()))}if(i.dynCall_vij=function(){return(i.dynCall_vij=i.asm.dynCall_vij).apply(null,arguments)},i.dynCall_jiji=function(){return(i.dynCall_jiji=i.asm.dynCall_jiji).apply(null,arguments)},M=function n(){Ir||Mr(),Ir||(M=n)},i.preInit)for("function"==typeof i.preInit&&(i.preInit=[i.preInit]);i.preInit.length>0;)i.preInit.pop()();return Mr(),n.ready},n.exports=i),t.exports;var n,e,i}const i=n(e()),o=Object.freeze(Object.defineProperty({__proto__:null,default:i},Symbol.toStringTag,{value:"Module"}));export{o as i};
//# sourceMappingURL=p-6b088889.js.map