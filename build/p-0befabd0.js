function o(n,f){if(n&&f)for(const i of n.children)if(i.localName in f){const n=f[i.localName];if("function"==typeof n){const f=n(i);f&&o(i,f)}else o(i,n)}}function*n(o,f){for(const i of o.children)if(i.localName in f){const o=f[i.localName];"function"==typeof o?yield o(i):yield*n(i,o)}}export{n,o};
//# sourceMappingURL=p-0befabd0.js.map