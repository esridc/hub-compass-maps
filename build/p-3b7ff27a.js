import"./p-aad64c9f.js";import{o as r}from"./p-dddb66c6.js";import{e as n}from"./p-e91c4d32.js";var e;!function(r){r[r.Multiply=1]="Multiply",r[r.Ignore=2]="Ignore",r[r.Replace=3]="Replace",r[r.Tint=4]="Tint"}(e||(e={}));var o;function t(r){return r===o.Shadow||r===o.ShadowHighlight||r===o.ShadowExcludeHighlight||r===o.ViewshedShadow}function i(r){return m(r)||r===o.Normal}function a(r){return f(r)||r===o.Normal}function c(r){return r===o.Highlight||r===o.ObjectAndLayerIdColor}function u(r){return r===o.Color}function s(r){return u(r)||v(r)}function l(r){return u(r)||c(r)}function d(r){return s(r)||c(r)}function m(r){return l(r)||p(r)}function f(r){return d(r)||p(r)}function p(r){return r===o.Depth}function v(r){return r===o.ColorEmission}!function(r){r[r.Color=0]="Color",r[r.ColorEmission=1]="ColorEmission",r[r.Depth=2]="Depth",r[r.Normal=3]="Normal",r[r.Shadow=4]="Shadow",r[r.ShadowHighlight=5]="ShadowHighlight",r[r.ShadowExcludeHighlight=6]="ShadowExcludeHighlight",r[r.ViewshedShadow=7]="ViewshedShadow",r[r.Highlight=8]="Highlight",r[r.ObjectAndLayerIdColor=9]="ObjectAndLayerIdColor",r[r.COUNT=10]="COUNT"}(o||(o={}));function h(e,o){switch(o.normalType){case b.Compressed:e.attributes.add(n.NORMALCOMPRESSED,"vec2"),e.vertex.code.add(r`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case b.Attribute:e.attributes.add(n.NORMAL,"vec3"),e.vertex.code.add(r`vec3 normalModel() {
return normal;
}`);break;case b.ScreenDerivative:e.fragment.code.add(r`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:case b.COUNT:}}var b;!function(r){r[r.Attribute=0]="Attribute",r[r.Compressed=1]="Compressed",r[r.ScreenDerivative=2]="ScreenDerivative",r[r.COUNT=3]="COUNT"}(b||(b={}));export{v as S,l as a,e as b,b as c,a as d,o as n,t as o,i as r,h as t,s as u};
//# sourceMappingURL=p-3b7ff27a.js.map