import{h3 as e,h4 as t,h5 as s,h6 as r,E as n}from"./p-aad64c9f.js";var a;!function(e){e.TimeZoneNotRecognized="TimeZoneNotRecognized"}(a||(a={}));const i={[a.TimeZoneNotRecognized]:"Timezone identifier has not been recognized."};class c extends Error{constructor(e,t){super(s(i[e],t)),this.declaredRootClass="esri.arcade.arcadedate.dateerror",Error.captureStackTrace&&Error.captureStackTrace(this,c)}}function u(e,t,s){return e<t?e-t:e>s?e-s:0}function o(e,t,s){return e<t?t:e>s?s:e}class h{constructor(e){this._date=e,this.declaredRootClass="esri.arcade.arcadedate"}static fromParts(t=0,s=1,r=1,n=0,a=0,i=0,c=0,m){if(isNaN(t)||isNaN(s)||isNaN(r)||isNaN(n)||isNaN(a)||isNaN(i)||isNaN(c))return null;const d=e.DateTime.local(t,s).daysInMonth;let f=e.DateTime.fromObject({day:o(r,1,d),year:t,month:o(s,1,12),hour:o(n,0,23),minute:o(a,0,59),second:o(i,0,59),millisecond:o(c,0,999)},{zone:l(m)});return f=f.plus({months:u(s,1,12),days:u(r,1,d),hours:u(n,0,23),minutes:u(a,0,59),seconds:u(i,0,59),milliseconds:u(c,0,999)}),new h(f)}static get systemTimeZoneCanonicalName(){return Intl.DateTimeFormat().resolvedOptions().timeZone??"system"}static arcadeDateAndZoneToArcadeDate(e,s){const r=l(s);return e.isUnknownTimeZone||r===t.instance?h.fromParts(e.year,e.monthJS+1,e.day,e.hour,e.minute,e.second,e.millisecond,r):new h(e._date.setZone(r))}static dateJSToArcadeDate(t){return new h(e.DateTime.fromJSDate(t,{zone:"system"}))}static dateJSAndZoneToArcadeDate(t,s="system"){const r=l(s);return new h(e.DateTime.fromJSDate(t,{zone:r}))}static unknownEpochToArcadeDate(s){return new h(e.DateTime.fromMillis(s,{zone:t.instance}))}static unknownDateJSToArcadeDate(s){return new h(e.DateTime.fromMillis(s.getTime(),{zone:t.instance}))}static epochToArcadeDate(t,s="system"){const r=l(s);return new h(e.DateTime.fromMillis(t,{zone:r}))}static dateTimeToArcadeDate(e){return new h(e)}clone(){return new h(this._date)}changeTimeZone(e){const t=l(e);return h.dateTimeToArcadeDate(this._date.setZone(t))}static dateTimeAndZoneToArcadeDate(e,s){const r=l(s);return e.zone===t.instance||r===t.instance?h.fromParts(e.year,e.month,e.day,e.hour,e.minute,e.second,e.millisecond,r):new h(e.setZone(r))}static nowToArcadeDate(t){const s=l(t);return new h(e.DateTime.fromJSDate(new Date,{zone:s}))}static nowUTCToArcadeDate(){return new h(e.DateTime.utc())}get isSystem(){return"system"===this.timeZone||this.timeZone===h.systemTimeZoneCanonicalName}equals(e){return this.isSystem&&e.isSystem?this.toNumber()===e.toNumber():this.isUnknownTimeZone===e.isUnknownTimeZone&&this._date.equals(e._date)}get isUnknownTimeZone(){return this._date.zone===t.instance}get isValid(){return this._date.isValid}get hour(){return this._date.hour}get second(){return this._date.second}get day(){return this._date.day}get dayOfWeekISO(){return this._date.weekday}get dayOfWeekJS(){let e=this._date.weekday;return e>6&&(e=0),e}get millisecond(){return this._date.millisecond}get monthISO(){return this._date.month}get weekISO(){return this._date.weekNumber}get yearISO(){return this._date.weekYear}get monthJS(){return this._date.month-1}get year(){return this._date.year}get minute(){return this._date.minute}get zone(){return this._date.zone}get timeZoneOffset(){return this.isUnknownTimeZone?0:this._date.offset}get timeZone(){if(this.isUnknownTimeZone)return"unknown";if("system"===this._date.zone.type)return"system";const e=this.zone;return"fixed"===e.type?0===e.fixed?"UTC":e.formatOffset(0,"short"):e.name}stringify(){return JSON.stringify(this.toJSDate())}plus(e){return new h(this._date.plus(e))}diff(e,t="milliseconds"){return this._date.diff(e._date,t)[t]}toISODate(){return this._date.toISODate()}toISOString(e){return e?this._date.toISO({suppressMilliseconds:!0,includeOffset:!this.isUnknownTimeZone}):this._date.toISO({includeOffset:!this.isUnknownTimeZone})}toISOTime(e,t){return this._date.toISOTime({suppressMilliseconds:e,includeOffset:t&&!this.isUnknownTimeZone})}toFormat(e,t){return this.isUnknownTimeZone&&(e=e.replaceAll("Z","")),this._date.toFormat(e,t)}toJSDate(){return this._date.toJSDate()}toSQLValue(){return this._date.toFormat("yyyy-LL-dd HH:mm:ss")}toSQLWithKeyword(){return`timestamp '${this.toSQLValue()}'`}toDateTime(){return this._date}toNumber(){return this._date.toMillis()}getTime(){return this._date.toMillis()}toUTC(){return new h(this._date.toUTC())}toLocal(){return new h(this._date.toLocal())}toString(){return this.toISOString(!0)}static fromReaderAsTimeStampOffset(t){if(!t)return null;const s=e.DateTime.fromISO(t,{setZone:!0});return new h(s)}}function l(s,r=!0){if(s instanceof e.Zone)return s;if("system"===s.toLowerCase())return"system";if("utc"===s.toLowerCase())return"UTC";if("unknown"===s.toLowerCase())return t.instance;if(/^[+-]?[0-9]{1,2}([:][0-9]{2})?$/.test(s)){const t=e.FixedOffsetZone.parseSpecifier("UTC"+(s.startsWith("+")||s.startsWith("-")?"":"+")+s);if(t)return t}const n=e.IANAZone.create(s);if(!n.isValid){if(r)throw new c(a.TimeZoneNotRecognized);return null}return n}function m(e){e=e.replaceAll(/LTS|LT|L{1,4}|l{1,4}/g,"[$&]");let t="";const s=/(\[[^[]*\])|(\\)?([Hh]mm(ss)?|Mo|M{1,4}|Do|DDDo|D{1,4}|d{2,4}|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;for(const r of e.match(s)||[])switch(r){case"D":t+="d";break;case"DD":t+="dd";break;case"DDD":t+="o";break;case"d":t+="c";break;case"ddd":t+="ccc";break;case"dddd":t+="cccc";break;case"M":t+="L";break;case"MM":t+="LL";break;case"MMM":t+="LLL";break;case"MMMM":t+="LLLL";break;case"YY":t+="yy";break;case"Y":case"YYYY":t+="yyyy";break;case"Q":t+="q";break;case"X":case"x":t+=r;break;default:r.length>=2&&"["===r.slice(0,1)&&"]"===r.slice(-1)?t+=`'${r.slice(1,-1)}'`:t+=`'${r}'`}return t}class d{constructor(e,t,s){this._year=e,this._month=t,this._day=s,this.declaredRootClass="esri.core.sql.dateonly"}get month(){return this._month}get monthJS(){return this._month-1}get year(){return this._year}get day(){return this._day}get isValid(){return this.toDateTime("unknown").isValid}equals(e){return e instanceof d&&e.day===this.day&&e.month===this.month&&e.year===this.year}clone(){return new d(this._year,this._month,this._day)}toDateTime(t){return e.DateTime.fromObject({day:this.day,month:this.month,year:this.year},{zone:l(t)})}toDateTimeLuxon(t){return e.DateTime.fromObject({day:this.day,month:this.month,year:this.year},{zone:l(t)})}toString(){return`${this.year.toString().padStart(4,"0")}-${this.month.toString().padStart(2,"0")}-${this.day.toString().padStart(2,"0")}`}toFormat(e=null,t=!0){if(null===e||""===e)return this.toString();if(t&&(e=m(e)),!e)return"";const s=this.toDateTime("unknown");return h.dateTimeToArcadeDate(s).toFormat(e,{locale:r(),numberingSystem:"latn"})}toArcadeDate(){const e=this.toDateTime("unknown");return h.dateTimeToArcadeDate(e)}toNumber(){return this.toDateTime("unknown").toMillis()}toJSDate(){return this.toDateTime("unknown").toJSDate()}toStorageFormat(){return this.toFormat("yyyy-LL-dd",!1)}toSQLValue(){return this.toFormat("yyyy-LL-dd",!1)}toSQLWithKeyword(){return"date '"+this.toFormat("yyyy-LL-dd",!1)+"'"}plus(e,t){return d.fromDateTime(this.toUTCDateTime().plus({[e]:t}))}toUTCDateTime(){return e.DateTime.utc(this.year,this.month,this.day,0,0,0,0)}difference(e,t){switch(t.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(e.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return"M"===t?this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(e.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(e.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(e.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(e.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(e.toUTCDateTime(),"years").years}}static fromMilliseconds(t){const s=e.DateTime.fromMillis(t,{zone:e.FixedOffsetZone.utcInstance});return s.isValid?d.fromParts(s.year,s.month,s.day):null}static fromSeconds(t){const s=e.DateTime.fromSeconds(t,{zone:e.FixedOffsetZone.utcInstance});return s.isValid?d.fromParts(s.year,s.month,s.day):null}static fromReader(e){if(!e)return null;const t=e.split("-");return 3!==t.length?null:new d(parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10))}static fromParts(e,t,s){const r=new d(e,t,s);return!1===r.isValid?null:r}static fromDateJS(e){return d.fromParts(e.getFullYear(),e.getMonth()+1,e.getDay())}static fromDateTime(e){return d.fromParts(e.year,e.month,e.day)}static fromSqlTimeStampOffset(e){return this.fromDateTime(e.toDateTime())}static fromString(t,s=null){if(""===t)return null;if(null===t)return null;const r=[];if(s)(s=m(s))&&r.push(s);else if(null===s||""===s){const s=e.DateTime.fromISO(t,{setZone:!0});return s.isValid?d.fromParts(s.year,s.month,s.day):null}for(const n of r){const r=e.DateTime.fromFormat(t,s??n);if(r.isValid)return new d(r.year,r.month,r.day)}return null}static fromNow(t="system"){const s=e.DateTime.fromJSDate(new Date).setZone(l(t));return new d(s.year,s.month,s.day)}}function f(e){if(null==e)return null;if("number"==typeof e)return e;let t=e.toLowerCase();switch(t=t.replaceAll(/\s/g,""),t=t.replaceAll("-",""),t){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 109404;case"miles":case"mile":case"squaremile":case"squaremiles":return 109439;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 109414;case"acres":case"acre":case"ac":return 109402;case"hectares":case"hectare":case"ha":return 109401;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 109442;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 109405;case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 109409}return null}function y(e){if(null==e)return null;switch(e.type){case"polygon":case"multipoint":case"polyline":return e.extent;case"point":return new n({xmin:e.x,ymin:e.y,xmax:e.x,ymax:e.y,spatialReference:e.spatialReference});case"extent":return e}return null}function S(e){if(null==e)return null;if("number"==typeof e)return e;let t=e.toLowerCase();switch(t=t.replaceAll(/\s/g,""),t=t.replaceAll("-",""),t){case"meters":case"meter":case"m":case"squaremeters":case"squaremeter":return 9001;case"miles":case"mile":case"squaremile":case"squaremiles":return 9093;case"kilometers":case"kilometer":case"squarekilometers":case"squarekilometer":case"km":return 9036;case"yard":case"yd":case"yards":case"squareyards":case"squareyard":return 9096;case"feet":case"ft":case"foot":case"squarefeet":case"squarefoot":return 9002;case"nmi":case"nauticalmile":case"nauticalmiles":case"squarenauticalmile":case"squarenauticalmiles":return 9030}return null}function w(e){if(null==e)return null;const t=e.clone();return void 0!==e.cache._geVersion&&(t.cache._geVersion=e.cache._geVersion),t}function g(e){return"number"==typeof e&&isFinite(e)&&Math.floor(e)===e}function k(e){if(!e)return"";const t=/(a|A|hh?|HH?|mm?|ss?|SSS|S|.)/g;let s="";for(const r of e.match(t)||[])switch(r){case"SSS":case"m":case"mm":case"h":case"hh":case"H":case"HH":case"s":case"ss":s+=r;break;case"A":case"a":s+="a";break;default:s+=`'${r}'`}return s}class D{constructor(e,t,s,r){this._hour=e,this._minute=t,this._second=s,this._millisecond=r,this.declaredRootClass="esri.core.sql.timeonly"}get hour(){return this._hour}get minute(){return this._minute}get second(){return this._second}get millisecond(){return this._millisecond}equals(e){return e instanceof D&&e.hour===this.hour&&e.minute===this.minute&&e.second===this.second&&e.millisecond===this.millisecond}clone(){return new D(this.hour,this.minute,this.second,this.millisecond)}isValid(){return g(this.hour)&&g(this.minute)&&g(this.second)&&g(this.millisecond)&&this.hour>=0&&this.hour<24&&this.minute>=0&&this.minute<60&&this.second>=0&&this.second<60&&this.millisecond>=0&&this.millisecond<1e3}toString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`+(this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):"")}toSQLValue(){return this.toString()}toSQLWithKeyword(){return`time '${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}${this.millisecond>0?"."+this.millisecond.toString().padStart(3,"0"):""}'`}toStorageString(){return`${this.hour.toString().padStart(2,"0")}:${this.minute.toString().padStart(2,"0")}:${this.second.toString().padStart(2,"0")}`}toFormat(t=null){if(null===t||""===t)return this.toString();if(!(t=k(t)))return"";return e.DateTime.local(1970,1,1,this._hour,this._minute,this._second,this._millisecond).toFormat(t,{locale:r(),numberingSystem:"latn"})}toNumber(){return this.millisecond+1e3*this.second+1e3*this.minute*60+60*this.hour*60*1e3}static fromParts(e,t,s,r){const n=new D(e,t,s,r);return n.isValid()?n:null}static fromReader(e){if(!e)return null;const t=e.split(":");return 3!==t.length?null:new D(parseInt(t[0],10),parseInt(t[1],10),parseInt(t[2],10),0)}static fromMilliseconds(e){if(e>864e5||e<0)return null;const t=Math.floor(e/1e3%60),s=Math.floor(e/6e4%60),r=Math.floor(e/36e5%24),n=Math.floor(e%1e3);return new D(r,s,t,n)}static fromDateJS(e){return new D(e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds())}static fromDateTime(e){return new D(e.hour,e.minute,e.second,e.millisecond)}static fromSqlTimeStampOffset(e){return this.fromDateTime(e.toDateTime())}static fromString(t,s=null){if(""===t)return null;if(null===t)return null;const r=[];s?(s=k(s))&&r.push(s):null!==s&&""!==s||(r.push("HH:mm:ss"),r.push("HH:mm:ss.SSS"),r.push("hh:mm:ss a"),r.push("hh:mm:ss.SSS a"),r.push("HH:mm"),r.push("hh:mm a"),r.push("H:mm"),r.push("h:mm a"),r.push("H:mm:ss"),r.push("h:mm:ss a"),r.push("H:mm:ss.SSS"),r.push("h:mm:ss.SSS a"));for(const s of r){const r=e.DateTime.fromFormat(t,s);if(r.isValid)return new D(r.hour,r.minute,r.second,r.millisecond)}return null}plus(e,t){switch(e){case"days":case"years":case"months":return this.clone();case"hours":case"minutes":case"seconds":case"milliseconds":return D.fromDateTime(this.toUTCDateTime().plus({[e]:t}))}return null}toUTCDateTime(){return e.DateTime.utc(1970,1,1,this.hour,this.minute,this.second,this.millisecond)}difference(e,t){switch(t.toLowerCase()){case"days":case"day":case"d":return this.toUTCDateTime().diff(e.toUTCDateTime(),"days").days;case"months":case"month":return this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months;case"minutes":case"minute":case"m":return"M"===t?this.toUTCDateTime().diff(e.toUTCDateTime(),"months").months:this.toUTCDateTime().diff(e.toUTCDateTime(),"minutes").minutes;case"seconds":case"second":case"s":return this.toUTCDateTime().diff(e.toUTCDateTime(),"seconds").seconds;case"milliseconds":case"millisecond":case"ms":default:return this.toUTCDateTime().diff(e.toUTCDateTime(),"milliseconds").milliseconds;case"hours":case"hour":case"h":return this.toUTCDateTime().diff(e.toUTCDateTime(),"hours").hours;case"years":case"year":case"y":return this.toUTCDateTime().diff(e.toUTCDateTime(),"years").years}}}export{d as a,S as b,w as c,l as h,h as m,D as n,f as r,y as s};
//# sourceMappingURL=p-4295487d.js.map