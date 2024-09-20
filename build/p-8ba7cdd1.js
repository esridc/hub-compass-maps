/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */
var n=typeof global=="object"&&global&&global.Object===Object&&global;var e=typeof self=="object"&&self&&self.Object===Object&&self;var r=n||e||Function("return this")();var t=r.Symbol;var u=Object.prototype;var i=u.hasOwnProperty;var f=u.toString;var a=t?t.toStringTag:undefined;function o(n){var e=i.call(n,a),r=n[a];try{n[a]=undefined;var t=true}catch(n){}var u=f.call(n);if(t){if(e){n[a]=r}else{delete n[a]}}return u}var c=Object.prototype;var v=c.toString;function d(n){return v.call(n)}var l="[object Null]",s="[object Undefined]";var b=t?t.toStringTag:undefined;function p(n){if(n==null){return n===undefined?s:l}return b&&b in Object(n)?o(n):d(n)}function y(n){return n!=null&&typeof n=="object"}var j="[object Symbol]";function m(n){return typeof n=="symbol"||y(n)&&p(n)==j}var h=/\s/;function T(n){var e=n.length;while(e--&&h.test(n.charAt(e))){}return e}var g=/^\s+/;function O(n){return n?n.slice(0,T(n)+1).replace(g,""):n}function x(n){var e=typeof n;return n!=null&&(e=="object"||e=="function")}var w=0/0;var $=/^[-+]0x[0-9a-f]+$/i;var E=/^0b[01]+$/i;var M=/^0o[0-7]+$/i;var S=parseInt;function F(n){if(typeof n=="number"){return n}if(m(n)){return w}if(x(n)){var e=typeof n.valueOf=="function"?n.valueOf():n;n=x(e)?e+"":e}if(typeof n!="string"){return n===0?n:+n}n=O(n);var r=E.test(n);return r||M.test(n)?S(n.slice(2),r?2:8):$.test(n)?w:+n}var I=function(){return r.Date.now()};var N="Expected a function";var U=Math.max,W=Math.min;function k(n,e,r){var t,u,i,f,a,o,c=0,v=false,d=false,l=true;if(typeof n!="function"){throw new TypeError(N)}e=F(e)||0;if(x(r)){v=!!r.leading;d="maxWait"in r;i=d?U(F(r.maxWait)||0,e):i;l="trailing"in r?!!r.trailing:l}function s(e){var r=t,i=u;t=u=undefined;c=e;f=n.apply(i,r);return f}function b(n){c=n;a=setTimeout(j,e);return v?s(n):f}function p(n){var r=n-o,t=n-c,u=e-r;return d?W(u,i-t):u}function y(n){var r=n-o,t=n-c;return o===undefined||r>=e||r<0||d&&t>=i}function j(){var n=I();if(y(n)){return m(n)}a=setTimeout(j,p(n))}function m(n){a=undefined;if(l&&t){return s(n)}t=u=undefined;return f}function h(){if(a!==undefined){clearTimeout(a)}c=0;t=o=u=a=undefined}function T(){return a===undefined?f:m(I())}function g(){var n=I(),r=y(n);t=arguments;u=this;o=n;if(r){if(a===undefined){return b(o)}if(d){clearTimeout(a);a=setTimeout(j,e);return s(o)}}if(a===undefined){a=setTimeout(j,e)}return f}g.cancel=h;g.flush=T;return g}export{t as S,m as a,p as b,x as c,k as d,n as f,y as i,r};
//# sourceMappingURL=p-8ba7cdd1.js.map