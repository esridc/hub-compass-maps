import{d as e}from"./p-81562e63.js";import"./p-028496e2.js";import"./p-3b51db5e.js";import"./p-8793cc2f.js";import"./p-49ae4733.js";import"./p-fe91e791.js";import"./p-9cc1ce24.js";import"./p-efc7ad18.js";import"./p-f148cf8f.js";import"./p-b007e81c.js";import"./p-483e769b.js";import"./p-0d934a08.js";import"./p-19172bea.js";import"./p-ef727936.js";import"./p-5f256b4d.js";import"./p-f01cda96.js";import"./p-bc3602fa.js";import"./p-6a8fad16.js";import"./p-738beb1e.js";import"./p-5625675b.js";import"./p-01c3f132.js";import"./p-661d8950.js";import"./p-8ba7cdd1.js";import"./p-6aa1859c.js";import"./p-920fef3c.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */
var a={words:{m:["jedan minut","jednog minuta"],mm:["%d minut","%d minuta","%d minuta"],h:["jedan sat","jednog sata"],hh:["%d sat","%d sata","%d sati"],d:["jedan dan","jednog dana"],dd:["%d dan","%d dana","%d dana"],M:["jedan mesec","jednog meseca"],MM:["%d mesec","%d meseca","%d meseci"],y:["jednu godinu","jedne godine"],yy:["%d godinu","%d godine","%d godina"]},correctGrammarCase:function e(a,r){if(a%10>=1&&a%10<=4&&(a%100<10||a%100>=20)){return a%10===1?r[0]:r[1]}return r[2]},relativeTimeFormatter:function e(r,t,d,m){var o=a.words[d];if(d.length===1){if(d==="y"&&t)return"jedna godina";return m||t?o[0]:o[1]}var p=a.correctGrammarCase(r,o);if(d==="yy"&&t&&p==="%d godinu")return r+" godina";return p.replace("%d",r)}};var r={name:"sr",weekdays:"Nedelja_Ponedeljak_Utorak_Sreda_Četvrtak_Petak_Subota".split("_"),weekdaysShort:"Ned._Pon._Uto._Sre._Čet._Pet._Sub.".split("_"),weekdaysMin:"ne_po_ut_sr_če_pe_su".split("_"),months:"Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"),monthsShort:"Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"),weekStart:1,relativeTime:{future:"za %s",past:"pre %s",s:"nekoliko sekundi",m:a.relativeTimeFormatter,mm:a.relativeTimeFormatter,h:a.relativeTimeFormatter,hh:a.relativeTimeFormatter,d:a.relativeTimeFormatter,dd:a.relativeTimeFormatter,M:a.relativeTimeFormatter,MM:a.relativeTimeFormatter,y:a.relativeTimeFormatter,yy:a.relativeTimeFormatter},ordinal:function e(a){return a+"."},formats:{LT:"H:mm",LTS:"H:mm:ss",L:"D. M. YYYY.",LL:"D. MMMM YYYY.",LLL:"D. MMMM YYYY. H:mm",LLLL:"dddd, D. MMMM YYYY. H:mm"}};e.locale(r,null,true);export default r;
//# sourceMappingURL=p-7c73354e.js.map