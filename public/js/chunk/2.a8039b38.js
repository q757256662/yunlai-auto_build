(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./app/web/component/MarkdownEditor/index.vue":function(e,t,s){"use strict";s.r(t);var o=function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"simplemde-container",style:{height:this.height+"px",zIndex:this.zIndex}},[t("textarea",{attrs:{id:this.id}})])};o._withStripped=!0;var n=s("./node_modules/tslib/tslib.es6.js"),i=(s("./node_modules/font-awesome/css/font-awesome.min.css"),s("./node_modules/simplemde/dist/simplemde.min.css"),s("./node_modules/simplemde/src/js/simplemde.js")),r=s.n(i),a=s("./node_modules/vue/dist/vue.common.js"),l=s.n(a),d=s("./node_modules/vue-property-decorator/lib/vue-property-decorator.js"),c=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.simplemde=null,t.hasChange=!1,t}return Object(n.d)(t,e),t.prototype.mounted=function(){var e=this;this.simplemde=new r.a({element:document.getElementById(this.id||"markdown-editor-"+ +new Date),autoDownloadFontAwesome:!1,autofocus:this.autofocus,toolbar:this.toolbar,spellChecker:!1,insertTexts:{link:["[","]( )"]},placeholder:this.placeholder}),this.simplemde.codemirror.on("change",(function(){e.hasChange&&(e.hasChange=!0),e.$emit("input",e.simplemde.value())}))},t.prototype.destroyed=function(){this.simplemde.toTextArea(),this.simplemde=null},Object(n.c)([Object(d.c)(String),Object(n.f)("design:type",Object)],t.prototype,"id",void 0),Object(n.c)([Object(d.c)({type:Boolean,default:!1}),Object(n.f)("design:type",Object)],t.prototype,"autofocus",void 0),Object(n.c)([Object(d.c)({type:String,default:""}),Object(n.f)("design:type",Object)],t.prototype,"placeholder",void 0),Object(n.c)([Object(d.c)({type:Number,default:400}),Object(n.f)("design:type",Object)],t.prototype,"height",void 0),Object(n.c)([Object(d.c)({type:Number,default:10}),Object(n.f)("design:type",Object)],t.prototype,"zIndex",void 0),Object(n.c)([Object(d.c)({type:Array}),Object(n.f)("design:type",Object)],t.prototype,"toolbar",void 0),t=Object(n.c)([Object(d.a)({name:"simplemde-md"})],t)}(l.a),u=(s("./app/web/component/MarkdownEditor/index.vue?vue&type=style&index=0&id=28ae3108&scoped=true&lang=css&"),s("./node_modules/vue-loader/lib/runtime/componentNormalizer.js")),p=Object(u.a)(c,o,[],!1,null,"28ae3108",null);p.options.__file="app/web/component/MarkdownEditor/index.vue";t.default=p.exports},"./app/web/component/MarkdownEditor/index.vue?vue&type=style&index=0&id=28ae3108&scoped=true&lang=css&":function(e,t,s){"use strict";s("./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/MarkdownEditor/index.vue?vue&type=style&index=0&id=28ae3108&scoped=true&lang=css&")},"./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./app/web/component/MarkdownEditor/index.vue?vue&type=style&index=0&id=28ae3108&scoped=true&lang=css&":function(e,t,s){},"./node_modules/typo-js/typo.js":function(e,t,s){(function(t){var o;!function(){"use strict";(o=function(e,s,o,n){n=n||{},this.dictionary=null,this.rules={},this.dictionaryTable={},this.compoundRules=[],this.compoundRuleCodes={},this.replacementTable=[],this.flags=n.flags||{},this.memoized={},this.loaded=!1;var i,r,a,l,d,c=this;function u(e,t){var s=c._readFile(e,null,n.asyncLoad);n.asyncLoad?s.then((function(e){t(e)})):t(s)}function p(e){s=e,o&&f()}function h(e){o=e,s&&f()}function f(){for(c.rules=c._parseAFF(s),c.compoundRuleCodes={},r=0,l=c.compoundRules.length;r<l;r++){var e=c.compoundRules[r];for(a=0,d=e.length;a<d;a++)c.compoundRuleCodes[e[a]]=[]}for(r in"ONLYINCOMPOUND"in c.flags&&(c.compoundRuleCodes[c.flags.ONLYINCOMPOUND]=[]),c.dictionaryTable=c._parseDIC(o),c.compoundRuleCodes)0===c.compoundRuleCodes[r].length&&delete c.compoundRuleCodes[r];for(r=0,l=c.compoundRules.length;r<l;r++){var t=c.compoundRules[r],i="";for(a=0,d=t.length;a<d;a++){var u=t[a];u in c.compoundRuleCodes?i+="("+c.compoundRuleCodes[u].join("|")+")":i+=u}c.compoundRules[r]=new RegExp(i,"i")}c.loaded=!0,n.asyncLoad&&n.loadedCallback&&n.loadedCallback(c)}return e&&(c.dictionary=e,s&&o?f():"undefined"!=typeof window&&"chrome"in window&&"extension"in window.chrome&&"getURL"in window.chrome.extension?(i=n.dictionaryPath?n.dictionaryPath:"typo/dictionaries",s||u(chrome.extension.getURL(i+"/"+e+"/"+e+".aff"),p),o||u(chrome.extension.getURL(i+"/"+e+"/"+e+".dic"),h)):(i=n.dictionaryPath?n.dictionaryPath:t+"/dictionaries",s||u(i+"/"+e+"/"+e+".aff",p),o||u(i+"/"+e+"/"+e+".dic",h))),this}).prototype={load:function(e){for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t]);return this},_readFile:function(e,t,o){if(t=t||"utf8","undefined"!=typeof XMLHttpRequest){var n,i=new XMLHttpRequest;return i.open("GET",e,o),o&&(n=new Promise((function(e,t){i.onload=function(){200===i.status?e(i.responseText):t(i.statusText)},i.onerror=function(){t(i.statusText)}}))),i.overrideMimeType&&i.overrideMimeType("text/plain; charset="+t),i.send(null),o?n:i.responseText}var r=s(0);try{if(r.existsSync(e))return r.readFileSync(e,t);console.log("Path "+e+" does not exist.")}catch(e){return console.log(e),""}},_parseAFF:function(e){var t,s,o,n,i,r,a,l={},d=e.split(/\r?\n/);for(n=0,r=d.length;n<r;n++)if(t=(t=this._removeAffixComments(d[n])).trim()){var c=t.split(/\s+/),u=c[0];if("PFX"==u||"SFX"==u){var p=c[1],h=c[2],f=[];for(i=n+1,a=n+1+(s=parseInt(c[3],10));i<a;i++){var m=(o=d[i].split(/\s+/))[2],g=o[3].split("/"),v=g[0];"0"===v&&(v="");var b=this.parseRuleCodes(g[1]),y=o[4],w={};w.add=v,b.length>0&&(w.continuationClasses=b),"."!==y&&(w.match="SFX"===u?new RegExp(y+"$"):new RegExp("^"+y)),"0"!=m&&(w.remove="SFX"===u?new RegExp(m+"$"):m),f.push(w)}l[p]={type:u,combineable:"Y"==h,entries:f},n+=s}else if("COMPOUNDRULE"===u){for(i=n+1,a=n+1+(s=parseInt(c[1],10));i<a;i++)o=(t=d[i]).split(/\s+/),this.compoundRules.push(o[1]);n+=s}else"REP"===u?3===(o=t.split(/\s+/)).length&&this.replacementTable.push([o[1],o[2]]):this.flags[u]=c[1]}return l},_removeAffixComments:function(e){return e.match(/^\s*#/,"")?"":e},_parseDIC:function(e){var t=(e=this._removeDicComments(e)).split(/\r?\n/),s={};function o(e,t){s.hasOwnProperty(e)||(s[e]=null),t.length>0&&(null===s[e]&&(s[e]=[]),s[e].push(t))}for(var n=1,i=t.length;n<i;n++){var r=t[n];if(r){var a=r.split("/",2),l=a[0];if(a.length>1){var d=this.parseRuleCodes(a[1]);"NEEDAFFIX"in this.flags&&-1!=d.indexOf(this.flags.NEEDAFFIX)||o(l,d);for(var c=0,u=d.length;c<u;c++){var p=d[c],h=this.rules[p];if(h)for(var f=this._applyRule(l,h),m=0,g=f.length;m<g;m++){var v=f[m];if(o(v,[]),h.combineable)for(var b=c+1;b<u;b++){var y=d[b],w=this.rules[y];if(w&&w.combineable&&h.type!=w.type)for(var C=this._applyRule(v,w),x=0,O=C.length;x<O;x++){o(C[x],[])}}}p in this.compoundRuleCodes&&this.compoundRuleCodes[p].push(l)}}else o(l.trim(),[])}}return s},_removeDicComments:function(e){return e=e.replace(/^\t.*$/gm,"")},parseRuleCodes:function(e){if(!e)return[];if(!("FLAG"in this.flags))return e.split("");if("long"===this.flags.FLAG){for(var t=[],s=0,o=e.length;s<o;s+=2)t.push(e.substr(s,2));return t}return"num"===this.flags.FLAG?e.split(","):void 0},_applyRule:function(e,t){for(var s=t.entries,o=[],n=0,i=s.length;n<i;n++){var r=s[n];if(!r.match||e.match(r.match)){var a=e;if(r.remove&&(a=a.replace(r.remove,"")),"SFX"===t.type?a+=r.add:a=r.add+a,o.push(a),"continuationClasses"in r)for(var l=0,d=r.continuationClasses.length;l<d;l++){var c=this.rules[r.continuationClasses[l]];c&&(o=o.concat(this._applyRule(a,c)))}}}return o},check:function(e){if(!this.loaded)throw"Dictionary not loaded.";var t=e.replace(/^\s\s*/,"").replace(/\s\s*$/,"");if(this.checkExact(t))return!0;if(t.toUpperCase()===t){var s=t[0]+t.substring(1).toLowerCase();if(this.hasFlag(s,"KEEPCASE"))return!1;if(this.checkExact(s))return!0;if(this.checkExact(t.toLowerCase()))return!0}var o=t[0].toLowerCase()+t.substring(1);if(o!==t){if(this.hasFlag(o,"KEEPCASE"))return!1;if(this.checkExact(o))return!0}return!1},checkExact:function(e){if(!this.loaded)throw"Dictionary not loaded.";var t,s,o=this.dictionaryTable[e];if(void 0===o){if("COMPOUNDMIN"in this.flags&&e.length>=this.flags.COMPOUNDMIN)for(t=0,s=this.compoundRules.length;t<s;t++)if(e.match(this.compoundRules[t]))return!0}else{if(null===o)return!0;if("object"==typeof o)for(t=0,s=o.length;t<s;t++)if(!this.hasFlag(e,"ONLYINCOMPOUND",o[t]))return!0}return!1},hasFlag:function(e,t,s){if(!this.loaded)throw"Dictionary not loaded.";return!(!(t in this.flags)||(void 0===s&&(s=Array.prototype.concat.apply([],this.dictionaryTable[e])),!s||-1===s.indexOf(this.flags[t])))},alphabet:"",suggest:function(e,t){if(!this.loaded)throw"Dictionary not loaded.";if(t=t||5,this.memoized.hasOwnProperty(e)){var s=this.memoized[e].limit;if(t<=s||this.memoized[e].suggestions.length<s)return this.memoized[e].suggestions.slice(0,t)}if(this.check(e))return[];for(var o=0,n=this.replacementTable.length;o<n;o++){var i=this.replacementTable[o];if(-1!==e.indexOf(i[0])){var r=e.replace(i[0],i[1]);if(this.check(r))return[r]}}var a=this;function l(e,t){var s,o,n,i,r={},l=a.alphabet.length;if("string"==typeof e){var d=e;(e={})[d]=!0}for(var d in e)for(s=0,n=d.length+1;s<n;s++){var c=[d.substring(0,s),d.substring(s)];if(c[1]&&(i=c[0]+c[1].substring(1),t&&!a.check(i)||(i in r?r[i]+=1:r[i]=1)),c[1].length>1&&c[1][1]!==c[1][0]&&(i=c[0]+c[1][1]+c[1][0]+c[1].substring(2),t&&!a.check(i)||(i in r?r[i]+=1:r[i]=1)),c[1]){var u=c[1].substring(0,1).toUpperCase()===c[1].substring(0,1)?"uppercase":"lowercase";for(o=0;o<l;o++){var p=a.alphabet[o];"uppercase"===u&&(p=p.toUpperCase()),p!=c[1].substring(0,1)&&(i=c[0]+p+c[1].substring(1),t&&!a.check(i)||(i in r?r[i]+=1:r[i]=1))}}if(c[1])for(o=0;o<l;o++){u=c[0].substring(-1).toUpperCase()===c[0].substring(-1)&&c[1].substring(0,1).toUpperCase()===c[1].substring(0,1)?"uppercase":"lowercase",p=a.alphabet[o];"uppercase"===u&&(p=p.toUpperCase()),i=c[0]+p+c[1],t&&!a.check(i)||(i in r?r[i]+=1:r[i]=1)}}return r}return a.alphabet="abcdefghijklmnopqrstuvwxyz",this.memoized[e]={suggestions:function(e){var s,o=l(e),n=l(o,!0);for(var i in o)a.check(i)&&(i in n?n[i]+=o[i]:n[i]=o[i]);var r=[];for(s in n)n.hasOwnProperty(s)&&r.push([s,n[s]]);r.sort((function(e,t){var s=e[1],o=t[1];return s<o?-1:s>o?1:t[0].localeCompare(e[0])})).reverse();var d=[],c="lowercase";e.toUpperCase()===e?c="uppercase":e.substr(0,1).toUpperCase()+e.substr(1).toLowerCase()===e&&(c="capitalized");var u=t;for(s=0;s<Math.min(u,r.length);s++)"uppercase"===c?r[s][0]=r[s][0].toUpperCase():"capitalized"===c&&(r[s][0]=r[s][0].substr(0,1).toUpperCase()+r[s][0].substr(1)),a.hasFlag(r[s][0],"NOSUGGEST")||-1!=d.indexOf(r[s][0])?u++:d.push(r[s][0]);return d}(e),limit:t},this.memoized[e].suggestions}}}(),e.exports=o}).call(this,"/")},0:function(e,t){}}]);