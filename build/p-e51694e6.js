import{m9 as n,ma as t,mb as a,mc as r,md as s,j as u,me as o,mf as c,$ as l,mg as f,ah as e}from"./p-aad64c9f.js";function m(n,t,a){const r=Math.sin(n),s=Math.cos(n),u=Math.sin(t),o=Math.cos(t),c=a;return c[0]=-r,c[4]=-u*s,c[8]=o*s,c[12]=0,c[1]=s,c[5]=-u*r,c[9]=o*r,c[13]=0,c[2]=0,c[6]=o,c[10]=u,c[14]=0,c[3]=0,c[7]=0,c[11]=0,c[15]=1,c}function i(t,a,r){return m(t,a,r),n(r,r),r}function h(n,l,e,h){if(null==n||null==h)return!1;const b=t(n,a),g=t(h,r);if(b===g&&!M(g)&&(b!==s.UNKNOWN||u(n,h)))return o(e,l),!0;if(M(g)){const n=f[b][s.LON_LAT],t=f[s.LON_LAT][g];return null!=n&&null!=t&&(n(l,0,d,0),t(d,0,j,0),m(p*d[0],p*d[1],e),e[12]=j[0],e[13]=j[1],e[14]=j[2],!0)}const x=M(b);if((g===s.WEB_MERCATOR||g===s.PLATE_CARREE||g===s.WGS84||g===s.CGCS2000)&&(b===s.WGS84||x||b===s.WEB_MERCATOR||b===s.CGCS2000)){const n=f[b][s.LON_LAT],t=f[s.LON_LAT][g];return null!=n&&null!=t&&(n(l,0,d,0),t(d,0,j,0),x?i(p*d[0],p*d[1],e):c(e),e[12]=j[0],e[13]=j[1],e[14]=j[2],!0)}return!1}function M(n){return n===s.SPHERICAL_ECEF||n===s.SPHERICAL_MARS_PCPF||n===s.SPHERICAL_MOON_PCPF||n===s.WGS84_ECEF}const p=e(1),d=l(),j=l();export{h as C};
//# sourceMappingURL=p-e51694e6.js.map