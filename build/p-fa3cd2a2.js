import{d as a}from"./p-703d6e1e.js";import"./p-aad64c9f.js";import"./p-2af77f97.js";import"./p-f8f1a631.js";import"./p-cdbdef01.js";import"./p-05749d2a.js";import"./p-01f923a1.js";import"./p-f981b36b.js";import"./p-a431f44e.js";import"./p-8711f003.js";import"./p-efdd0667.js";import"./p-7a58b9e0.js";import"./p-74a05ecd.js";import"./p-021cd4d2.js";import"./p-d964b132.js";import"./p-523ead58.js";import"./p-b33f4035.js";import"./p-85d4ddf7.js";import"./p-24c81c10.js";import"./p-bba1f791.js";import"./p-d1ec478e.js";import"./p-c04ce53a.js";import"./p-cc309983.js";import"./p-eb4cfde8.js";import"./p-7380fb1a.js";import"./p-05a0cbe8.js";import"./p-bf25cd6c.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
var p="siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_");var s="siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_");var r=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;var t=function a(t,o){if(r.test(o)){return p[t.month()]}return s[t.month()]};t.s=s;t.f=p;var o={name:"hr",weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),months:t,monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},relativeTime:{future:"za %s",past:"prije %s",s:"sekunda",m:"minuta",mm:"%d minuta",h:"sat",hh:"%d sati",d:"dan",dd:"%d dana",M:"mjesec",MM:"%d mjeseci",y:"godina",yy:"%d godine"},ordinal:function a(p){return p+"."}};a.locale(o,null,true);export default o;
//# sourceMappingURL=p-fa3cd2a2.js.map