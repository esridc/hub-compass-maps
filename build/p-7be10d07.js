import{d as _}from"./p-81562e63.js";import"./p-028496e2.js";import"./p-3b51db5e.js";import"./p-8793cc2f.js";import"./p-49ae4733.js";import"./p-fe91e791.js";import"./p-9cc1ce24.js";import"./p-efc7ad18.js";import"./p-f148cf8f.js";import"./p-b007e81c.js";import"./p-483e769b.js";import"./p-0d934a08.js";import"./p-19172bea.js";import"./p-ef727936.js";import"./p-5f256b4d.js";import"./p-f01cda96.js";import"./p-bc3602fa.js";import"./p-6a8fad16.js";import"./p-738beb1e.js";import"./p-5625675b.js";import"./p-01c3f132.js";import"./p-661d8950.js";import"./p-8ba7cdd1.js";import"./p-6aa1859c.js";import"./p-920fef3c.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/main/LICENSE.md for details.
 * v2.7.0
 */
var r="января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_");var t="январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_");var p="янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_");var e="янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_");var m=/D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;function i(_,r){var t=_.split("_");return r%10===1&&r%100!==11?t[0]:r%10>=2&&r%10<=4&&(r%100<10||r%100>=20)?t[1]:t[2]}function s(_,r,t){var p={mm:r?"минута_минуты_минут":"минуту_минуты_минут",hh:"час_часа_часов",dd:"день_дня_дней",MM:"месяц_месяца_месяцев",yy:"год_года_лет"};if(t==="m"){return r?"минута":"минуту"}return _+" "+i(p[t],+_)}var o=function _(p,e){if(m.test(e)){return r[p.month()]}return t[p.month()]};o.s=t;o.f=r;var a=function _(r,t){if(m.test(t)){return p[r.month()]}return e[r.month()]};a.s=e;a.f=p;var f={name:"ru",weekdays:"воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),weekdaysShort:"вск_пнд_втр_срд_чтв_птн_сбт".split("_"),weekdaysMin:"вс_пн_вт_ср_чт_пт_сб".split("_"),months:o,monthsShort:a,weekStart:1,yearStart:4,formats:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D MMMM YYYY г.",LLL:"D MMMM YYYY г., H:mm",LLLL:"dddd, D MMMM YYYY г., H:mm"},relativeTime:{future:"через %s",past:"%s назад",s:"несколько секунд",m:s,mm:s,h:"час",hh:s,d:"день",dd:s,M:"месяц",MM:s,y:"год",yy:s},ordinal:function _(r){return r},meridiem:function _(r){if(r<4){return"ночи"}else if(r<12){return"утра"}else if(r<17){return"дня"}return"вечера"}};_.locale(f,null,true);export default f;
//# sourceMappingURL=p-7be10d07.js.map