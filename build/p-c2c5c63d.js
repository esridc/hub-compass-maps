const n=[["binary","application/octet-stream","bin",""]];function t(n,t){return null!=a(t.name,n?.supportedFormats??[])}function r(n,t){if(!n)return!1;const r=e(t,n.supportedFormats??[]);return null!=r&&n.editFormats.includes(r)}function u(n,t){return l(s(n,t))}function o(n,t){return l(a(n,t))}function c(n,t){return p(f(n,t))}function e(n,t){return o(n.name,t)??u(n.type,t)}function i(t){return[...n,...t]}function f(n,t){return i(t).find((t=>l(t)===n))}function s(n,t){const r=n.toLowerCase();return i(t).find((n=>p(n)===r))}function a(n,t){const r=n.toLowerCase();return i(t).find((n=>b(n).some((n=>r.endsWith(n)))))}function l(n){return n?.[0]}function p(n){return n?.[1].toLowerCase()}function b(n){return n?.[2].split(",").map((n=>n.toLowerCase()))??[]}function m(n){return n.tables?.find((n=>"assetMaps"===n.role))}export{m as F,e as c,o as i,r,c as s,t,u};
//# sourceMappingURL=p-c2c5c63d.js.map