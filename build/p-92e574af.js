import{d as a}from"./p-81562e63.js";import"./p-028496e2.js";import"./p-3b51db5e.js";import"./p-8793cc2f.js";import"./p-49ae4733.js";import"./p-fe91e791.js";import"./p-9cc1ce24.js";import"./p-efc7ad18.js";import"./p-f148cf8f.js";import"./p-b007e81c.js";import"./p-483e769b.js";import"./p-0d934a08.js";import"./p-19172bea.js";import"./p-ef727936.js";import"./p-5f256b4d.js";import"./p-f01cda96.js";import"./p-bc3602fa.js";import"./p-6a8fad16.js";import"./p-738beb1e.js";import"./p-5625675b.js";import"./p-01c3f132.js";import"./p-661d8950.js";import"./p-8ba7cdd1.js";import"./p-6aa1859c.js";import"./p-920fef3c.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */
var p="siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_");var s="siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_");var r=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;var t=function a(t,e){if(r.test(e)){return p[t.month()]}return s[t.month()]};t.s=s;t.f=p;var e={name:"hr",weekdays:"nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),weekdaysShort:"ned._pon._uto._sri._čet._pet._sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),months:t,monthsShort:"sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),weekStart:1,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm"},relativeTime:{future:"za %s",past:"prije %s",s:"sekunda",m:"minuta",mm:"%d minuta",h:"sat",hh:"%d sati",d:"dan",dd:"%d dana",M:"mjesec",MM:"%d mjeseci",y:"godina",yy:"%d godine"},ordinal:function a(p){return p+"."}};a.locale(e,null,true);export default e;
//# sourceMappingURL=p-92e574af.js.map