import{d as e}from"./p-81562e63.js";import"./p-028496e2.js";import"./p-3b51db5e.js";import"./p-8793cc2f.js";import"./p-49ae4733.js";import"./p-fe91e791.js";import"./p-9cc1ce24.js";import"./p-efc7ad18.js";import"./p-f148cf8f.js";import"./p-b007e81c.js";import"./p-483e769b.js";import"./p-0d934a08.js";import"./p-19172bea.js";import"./p-ef727936.js";import"./p-5f256b4d.js";import"./p-f01cda96.js";import"./p-bc3602fa.js";import"./p-6a8fad16.js";import"./p-738beb1e.js";import"./p-5625675b.js";import"./p-01c3f132.js";import"./p-661d8950.js";import"./p-8ba7cdd1.js";import"./p-6aa1859c.js";import"./p-920fef3c.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */
function r(e){return e%100==2}function t(e){return e%100==3||e%100==4}function m(e,m,n,a){var i=e+" ";switch(n){case"s":return m||a?"nekaj sekund":"nekaj sekundami";case"m":return m?"ena minuta":"eno minuto";case"mm":if(r(e)){return i+(m||a?"minuti":"minutama")}if(t(e)){return i+(m||a?"minute":"minutami")}return i+(m||a?"minut":"minutami");case"h":return m?"ena ura":a?"eno uro":"eno uro";case"hh":if(r(e)){return i+(m||a?"uri":"urama")}if(t(e)){return i+(m||a?"ure":"urami")}return i+(m||a?"ur":"urami");case"d":return m||a?"en dan":"enim dnem";case"dd":if(r(e)){return i+(m||a?"dneva":"dnevoma")}return i+(m||a?"dni":"dnevi");case"M":return m||a?"en mesec":"enim mesecem";case"MM":if(r(e)){return i+(m||a?"meseca":"mesecema")}if(t(e)){return i+(m||a?"mesece":"meseci")}return i+(m||a?"mesecev":"meseci");case"y":return m||a?"eno leto":"enim letom";case"yy":if(r(e)){return i+(m||a?"leti":"letoma")}if(t(e)){return i+(m||a?"leta":"leti")}return i+(m||a?"let":"leti")}}var n={name:"sl",weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),weekStart:1,weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),ordinal:function e(r){return r+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"čez %s",past:"pred %s",s:m,m,mm:m,h:m,hh:m,d:m,dd:m,M:m,MM:m,y:m,yy:m}};e.locale(n,null,true);export default n;
//# sourceMappingURL=p-00525e2a.js.map