import{d as e}from"./p-703d6e1e.js";import"./p-aad64c9f.js";import"./p-2af77f97.js";import"./p-f8f1a631.js";import"./p-cdbdef01.js";import"./p-05749d2a.js";import"./p-01f923a1.js";import"./p-f981b36b.js";import"./p-a431f44e.js";import"./p-8711f003.js";import"./p-efdd0667.js";import"./p-7a58b9e0.js";import"./p-74a05ecd.js";import"./p-021cd4d2.js";import"./p-d964b132.js";import"./p-523ead58.js";import"./p-b33f4035.js";import"./p-85d4ddf7.js";import"./p-24c81c10.js";import"./p-bba1f791.js";import"./p-d1ec478e.js";import"./p-c04ce53a.js";import"./p-cc309983.js";import"./p-eb4cfde8.js";import"./p-7380fb1a.js";import"./p-05a0cbe8.js";import"./p-bf25cd6c.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.13.2
 */
function r(e){return e%100==2}function t(e){return e%100==3||e%100==4}function m(e,m,n,a){var i=e+" ";switch(n){case"s":return m||a?"nekaj sekund":"nekaj sekundami";case"m":return m?"ena minuta":"eno minuto";case"mm":if(r(e)){return i+(m||a?"minuti":"minutama")}if(t(e)){return i+(m||a?"minute":"minutami")}return i+(m||a?"minut":"minutami");case"h":return m?"ena ura":a?"eno uro":"eno uro";case"hh":if(r(e)){return i+(m||a?"uri":"urama")}if(t(e)){return i+(m||a?"ure":"urami")}return i+(m||a?"ur":"urami");case"d":return m||a?"en dan":"enim dnem";case"dd":if(r(e)){return i+(m||a?"dneva":"dnevoma")}return i+(m||a?"dni":"dnevi");case"M":return m||a?"en mesec":"enim mesecem";case"MM":if(r(e)){return i+(m||a?"meseca":"mesecema")}if(t(e)){return i+(m||a?"mesece":"meseci")}return i+(m||a?"mesecev":"meseci");case"y":return m||a?"eno leto":"enim letom";case"yy":if(r(e)){return i+(m||a?"leti":"letoma")}if(t(e)){return i+(m||a?"leta":"leti")}return i+(m||a?"let":"leti")}}var n={name:"sl",weekdays:"nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),months:"januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),weekStart:1,weekdaysShort:"ned._pon._tor._sre._čet._pet._sob.".split("_"),monthsShort:"jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),weekdaysMin:"ne_po_to_sr_če_pe_so".split("_"),ordinal:function e(r){return r+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd, D. MMMM YYYY H:mm",l:"D. M. YYYY"},relativeTime:{future:"čez %s",past:"pred %s",s:m,m,mm:m,h:m,hh:m,d:m,dd:m,M:m,MM:m,y:m,yy:m}};e.locale(n,null,true);export default n;
//# sourceMappingURL=p-98569d6e.js.map