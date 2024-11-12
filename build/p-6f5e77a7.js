import{o as r}from"./p-028496e2.js";var n,t,u,i={exports:{}};n=i,t=function(){function r(r,t,i){i=i||2;var f,e,o,v,l,c,h,s=t&&t.length,d=s?t[0]*i:r.length,w=n(r,0,d,i,!0),M=[];if(!w||w.next===w.prev)return M;if(s&&(w=a(r,t,w,i)),r.length>80*i){f=o=r[0],e=v=r[1];for(var p=i;p<d;p+=i)(l=r[p])<f&&(f=l),(c=r[p+1])<e&&(e=c),l>o&&(o=l),c>v&&(v=c);h=0!==(h=Math.max(o-f,v-e))?1/h:0}return u(w,M,i,f,e,h),M}function n(r,n,t,u,i){var f,e;if(i===F(r,n,t,u)>0)for(f=n;f<t;f+=u)e=C(f,r[f],r[f+1],e);else for(f=t-u;f>=n;f-=u)e=C(f,r[f],r[f+1],e);if(e&&x(e,e.next)){var o=e.next;D(e),e=o}return e}function t(r,n){if(!r)return r;n||(n=r);var t,u=r;do{if(t=!1,u.steiner||!x(u,u.next)&&0!==m(u.prev,u,u.next))u=u.next;else{var i=u.prev;if(D(u),(u=n=i)===u.next)break;t=!0}}while(t||u!==n);return n}function u(r,n,a,v,l,c,h){if(r){!h&&c&&d(r,v,l,c);for(var s,w,M=r;r.prev!==r.next;)if(s=r.prev,w=r.next,c?f(r,v,l,c):i(r))n.push(s.i/a),n.push(r.i/a),n.push(w.i/a),D(r),r=w.next,M=w.next;else if((r=w)===M){h?1===h?u(r=e(t(r),n,a),n,a,v,l,c,2):2===h&&o(r,n,a,v,l,c):u(t(r),n,a,v,l,c,1);break}}}function i(r){var n=r.prev,t=r,u=r.next;if(m(n,t,u)>=0)return!1;for(var i=r.next.next;i!==r.prev;){if(b(n.x,n.y,t.x,t.y,u.x,u.y,i.x,i.y)&&m(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function f(r,n,t,u){var i=r.prev,f=r,e=r.next;if(m(i,f,e)>=0)return!1;for(var o=i.x<f.x?i.x<e.x?i.x:e.x:f.x<e.x?f.x:e.x,a=i.y<f.y?i.y<e.y?i.y:e.y:f.y<e.y?f.y:e.y,v=i.x>f.x?i.x>e.x?i.x:e.x:f.x>e.x?f.x:e.x,l=i.y>f.y?i.y>e.y?i.y:e.y:f.y>e.y?f.y:e.y,c=M(o,a,n,t,u),h=M(v,l,n,t,u),s=r.prevZ,d=r.nextZ;s&&s.z>=c&&d&&d.z<=h;){if(s!==r.prev&&s!==r.next&&b(i.x,i.y,f.x,f.y,e.x,e.y,s.x,s.y)&&m(s.prev,s,s.next)>=0)return!1;if(s=s.prevZ,d!==r.prev&&d!==r.next&&b(i.x,i.y,f.x,f.y,e.x,e.y,d.x,d.y)&&m(d.prev,d,d.next)>=0)return!1;d=d.nextZ}for(;s&&s.z>=c;){if(s!==r.prev&&s!==r.next&&b(i.x,i.y,f.x,f.y,e.x,e.y,s.x,s.y)&&m(s.prev,s,s.next)>=0)return!1;s=s.prevZ}for(;d&&d.z<=h;){if(d!==r.prev&&d!==r.next&&b(i.x,i.y,f.x,f.y,e.x,e.y,d.x,d.y)&&m(d.prev,d,d.next)>=0)return!1;d=d.nextZ}return!0}function e(r,n,u){var i=r;do{var f=i.prev,e=i.next.next;!x(f,e)&&j(f,i,i.next,e)&&z(f,e)&&z(e,f)&&(n.push(f.i/u),n.push(i.i/u),n.push(e.i/u),D(i),D(i.next),i=r=e),i=i.next}while(i!==r);return t(i)}function o(r,n,i,f,e,o){var a=r;do{for(var v=a.next.next;v!==a.prev;){if(a.i!==v.i&&k(a,v)){var l=B(a,v);return a=t(a,a.next),l=t(l,l.next),u(a,n,i,f,e,o),void u(l,n,i,f,e,o)}v=v.next}a=a.next}while(a!==r)}function a(r,u,i,f){var e,o,a,l=[];for(e=0,o=u.length;e<o;e++)(a=n(r,u[e]*f,e<o-1?u[e+1]*f:r.length,f,!1))===a.next&&(a.steiner=!0),l.push(p(a));for(l.sort(v),e=0;e<l.length;e++)i=t(i=c(l[e],i),i.next);return i}function v(r,n){return r.x-n.x}function l(r){if(r.next.prev===r)return r;let n=r;for(;;){const t=n.next;if(t.prev===n||t===n||t===r)break;n=t}return n}function c(r,n){var u=h(r,n);if(!u)return n;var i=B(u,r),f=t(u,u.next);let e=l(i);return t(e,e.next),f=l(f),l(n===u?f:n)}function h(r,n){var t,u=n,i=r.x,f=r.y,e=-1/0;do{if(f<=u.y&&f>=u.next.y&&u.next.y!==u.y){var o=u.x+(f-u.y)*(u.next.x-u.x)/(u.next.y-u.y);if(o<=i&&o>e){if(e=o,o===i){if(f===u.y)return u;if(f===u.next.y)return u.next}t=u.x<u.next.x?u:u.next}}u=u.next}while(u!==n);if(!t)return null;if(i===e)return t;var a,v=t,l=t.x,c=t.y,h=1/0;u=t;do{i>=u.x&&u.x>=l&&i!==u.x&&b(f<c?i:e,f,l,c,f<c?e:i,f,u.x,u.y)&&(a=Math.abs(f-u.y)/(i-u.x),z(u,r)&&(a<h||a===h&&(u.x>t.x||u.x===t.x&&s(t,u)))&&(t=u,h=a)),u=u.next}while(u!==v);return t}function s(r,n){return m(r.prev,r,n.prev)<0&&m(n.next,r,r.next)<0}function d(r,n,t,u){var i=r;do{null===i.z&&(i.z=M(i.x,i.y,n,t,u)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next}while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,w(i)}function w(r){var n,t,u,i,f,e,o,a,v=1;do{for(t=r,r=null,f=null,e=0;t;){for(e++,u=t,o=0,n=0;n<v&&(o++,u=u.nextZ);n++);for(a=v;o>0||a>0&&u;)0!==o&&(0===a||!u||t.z<=u.z)?(i=t,t=t.nextZ,o--):(i=u,u=u.nextZ,a--),f?f.nextZ=i:r=i,i.prevZ=f,f=i;t=u}f.nextZ=null,v*=2}while(e>1);return r}function M(r,n,t,u,i){return(r=1431655765&((r=858993459&((r=252645135&((r=16711935&((r=32767*(r-t)*i)|r<<8))|r<<4))|r<<2))|r<<1))|(n=1431655765&((n=858993459&((n=252645135&((n=16711935&((n=32767*(n-u)*i)|n<<8))|n<<4))|n<<2))|n<<1))<<1}function p(r){var n=r,t=r;do{(n.x<t.x||n.x===t.x&&n.y<t.y)&&(t=n),n=n.next}while(n!==r);return t}function b(r,n,t,u,i,f,e,o){return(i-e)*(n-o)-(r-e)*(f-o)>=0&&(r-e)*(u-o)-(t-e)*(n-o)>=0&&(t-e)*(f-o)-(i-e)*(u-o)>=0}function k(r,n){return r.next.i!==n.i&&r.prev.i!==n.i&&!y(r,n)&&(z(r,n)&&z(n,r)&&A(r,n)&&(m(r.prev,r,n.prev)||m(r,n.prev,n))||x(r,n)&&m(r.prev,r,r.next)>0&&m(n.prev,n,n.next)>0)}function m(r,n,t){return(n.y-r.y)*(t.x-n.x)-(n.x-r.x)*(t.y-n.y)}function x(r,n){return r.x===n.x&&r.y===n.y}function j(r,n,t,u){var i=q(m(r,n,t)),f=q(m(r,n,u)),e=q(m(t,u,r)),o=q(m(t,u,n));return i!==f&&e!==o||!(0!==i||!g(r,t,n))||!(0!==f||!g(r,u,n))||!(0!==e||!g(t,r,u))||!(0!==o||!g(t,n,u))}function g(r,n,t){return n.x<=Math.max(r.x,t.x)&&n.x>=Math.min(r.x,t.x)&&n.y<=Math.max(r.y,t.y)&&n.y>=Math.min(r.y,t.y)}function q(r){return r>0?1:r<0?-1:0}function y(r,n){var t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==n.i&&t.next.i!==n.i&&j(t,t.next,r,n))return!0;t=t.next}while(t!==r);return!1}function z(r,n){return m(r.prev,r,r.next)<0?m(r,n,r.next)>=0&&m(r,r.prev,n)>=0:m(r,n,r.prev)<0||m(r,r.next,n)<0}function A(r,n){var t=r,u=!1,i=(r.x+n.x)/2,f=(r.y+n.y)/2;do{t.y>f!=t.next.y>f&&t.next.y!==t.y&&i<(t.next.x-t.x)*(f-t.y)/(t.next.y-t.y)+t.x&&(u=!u),t=t.next}while(t!==r);return u}function B(r,n){var t=new E(r.i,r.x,r.y),u=new E(n.i,n.x,n.y),i=r.next,f=n.prev;return r.next=n,n.prev=r,t.next=i,i.prev=t,u.next=t,t.prev=u,f.next=u,u.prev=f,u}function C(r,n,t,u){var i=new E(r,n,t);return u?(i.next=u.next,i.prev=u,u.next.prev=i,u.next=i):(i.prev=i,i.next=i),i}function D(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function E(r,n,t){this.i=r,this.x=n,this.y=t,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}function F(r,n,t,u){for(var i=0,f=n,e=t-u;f<t;f+=u)i+=(r[e]-r[f])*(r[f+1]+r[e+1]),e=f;return i}return r.deviation=function(r,n,t,u){var i=n&&n.length,f=i?n[0]*t:r.length,e=Math.abs(F(r,0,f,t));if(i)for(var o=0,a=n.length;o<a;o++){var v=n[o]*t,l=o<a-1?n[o+1]*t:r.length;e-=Math.abs(F(r,v,l,t))}var c=0;for(o=0;o<u.length;o+=3){var h=u[o]*t,s=u[o+1]*t,d=u[o+2]*t;c+=Math.abs((r[h]-r[d])*(r[s+1]-r[h+1])-(r[h]-r[s])*(r[d+1]-r[h+1]))}return 0===e&&0===c?0:Math.abs((c-e)/e)},r.flatten=function(r){for(var n=r[0][0].length,t={vertices:[],holes:[],dimensions:n},u=0,i=0;i<r.length;i++){for(var f=0;f<r[i].length;f++)for(var e=0;e<n;e++)t.vertices.push(r[i][f][e]);i>0&&(u+=r[i-1].length,t.holes.push(u))}return t},r},void 0!==(u=t())&&(n.exports=u);const f=r(i.exports);export{f as i};
//# sourceMappingURL=p-6f5e77a7.js.map