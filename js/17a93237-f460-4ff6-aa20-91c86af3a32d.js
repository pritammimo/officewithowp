var MonoTypeWebFonts={};MonoTypeWebFonts.addEvent=function(e,n){if("undefined"!=typeof MonoTypeWebFonts.loadFonts)MonoTypeWebFonts.addEvent(e,n);else{var o=this;setTimeout(function(){o.addEvent(e,n)},0)}};mti_loadScript( function () {if(window.addEventListener){  window.addEventListener('load', function(){MonoTypeWebFonts.cleanup();}, false);}else if(window.attachEvent){  window.attachEvent('onload', function(){MonoTypeWebFonts.cleanup();});}MonoTypeWebFonts.loadColo = function(){};MonoTypeWebFonts.cleanupExecuted = false;MonoTypeWebFonts.cleanup = function(){if(MonoTypeWebFonts.cleanupExecuted === true){ return; }MonoTypeWebFonts.cleanupExecuted = (window['mti_element_cache'].length > 0);var className = document.documentElement.className;var MTIConfig = window['MTIConfig'] || { 'RemoveMTIClass': false };if(MTIConfig['RemoveMTIClass']==true){eval(function(p,a,c,k,e,d){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('8 l(2,n){n(2);2=2.D;r(2){l(2,n);2=2.A}}8 e(4){9(j.e){o j.e(4)}x{5 k=[];l(j.I,8(2){5 a,c=2.4,i;9(c){a=c.z(\' \');p(i=0;i<a.f;i++){9(a[i]===4){k.F(2);J}}}});o k}}H(8(){5 3=e(\'m\');5 u=E.K;5 h=u.B(),C=8(t){o h.G(t)>-1},b=(!(/R|T/i.q(h))&&/S\\s(\\d)/.q(h)),c=L;9((v.$1==6)||(v.$1==7)){c=Q}r(3.f>0){p(5 i=0;i<3.f;i++){5 w=3[i].4.z(\' \');9(w.f==1&&!c){3[i].M(\'N\')}x{3[i].4=3[i].4.y(/m/O,\' \').y(/^\\s+|\\s+$/g,\'\')}}3=e(\'m\')}},P);',56,56,'||node|mti_elements|className|var|||function|if|||||getElementsByClassName|length||ua||document|results|walkTheDOM|mti_font_element|func|return|for|test|while||||RegExp|classList|else|replace|split|nextSibling|toLowerCase|is|firstChild|navigator|push|indexOf|setTimeout|body|break|userAgent|false|removeAttribute|class|ig|40000|true|opera|msie|webtv'.split('|'),0,{}))}className = className;if(!document.getElementById('MonoTypeFontApiFontTracker')){eval(function(p,a,c,k,e,d){e=function(c){return c.toString(36)};if(!''.replace(/^/,String)){while(c--){d[e(c)]=k[c]||e(c)}k=[function(e){return d[e]}];e=function(){return'\\w+'};c=1};while(c--){if(k[c]){p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c])}}return p}('5 3="6://j.i.z/t/1.7";a(k.l.h==\'8:\'){3=3.g(/6:/,\'8:\')}5 b=9.d(\'e\')[0];5 2=9.v(\'w\');a(2){2.4(\'y\',\'u\');2.4(\'s\',\'o/7\');2.4(\'q\',\'r\');2.4(\'f\',3+"?p=x&n=m");b.c(2)}',36,36,'||cssEle|fontTrackingUrl|setAttribute|var|http|css|https|document|if|head|appendChild|getElementsByTagName|HEAD|href|replace|protocol|fonts|fast|window|location|17a93237-f460-4ff6-aa20-91c86af3a32d|projectid|text|apiType|rel|stylesheet|type||MonoTypeFontApiFontTracker|createElement|LINK|js|id|net'.split('|'),0,{}))}window['mti_element_cache'] = [];};MonoTypeWebFonts._fontActiveEventList = [];MonoTypeWebFonts._fontLoadingEventList = [];MonoTypeWebFonts._activeEventList = [];MonoTypeWebFonts._inActiveEventList = [];MonoTypeWebFonts.addEvent = function(eventName, callbackFunction){   if(eventName.toLowerCase() == 'fontactive'){      MonoTypeWebFonts._fontActiveEventList.push(callbackFunction);  }else if(eventName.toLowerCase() == 'fontloading'){      MonoTypeWebFonts._fontLoadingEventList.push(callbackFunction);  }else if(eventName.toLowerCase() == 'inactive'){      MonoTypeWebFonts._inActiveEventList.push(callbackFunction);  }else if(eventName.toLowerCase() == 'active'){      MonoTypeWebFonts._activeEventList.push(callbackFunction);  }};MonoTypeWebFonts.loadFonts = function(){MonoTypeWebFonts.load({monotype:{efg:false, reqSub:false, enableOtf: false, otfJsParentUrl: 'https://fast.fonts.net/jsapi/otjs/', pfL:[{'fontfamily' : "AvenirNextLTW01-Regular" ,contentIds :{EOT: 'e9167238-3b3f-4813-a04a-a384394eed42',WOFF: '1e9892c0-6927-4412-9874-1b82801ba47a',WOFF2: '2cd55546-ec00-4af9-aeca-4a3cd186da53',TTF: '46cf1067-688d-4aab-b0f7-bd942af6efd8'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "Avenir Next LT W01 Bold" ,contentIds :{EOT: 'dccb10af-07a2-404c-bfc7-7750e2716bc1',WOFF: 'b8e906a1-f5e8-4bf1-8e80-82c646ca4d5f',WOFF2: '14c73713-e4df-4dba-933b-057feeac8dd1',TTF: '890bd988-5306-43ff-bd4b-922bc5ebdeb4'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "AvenirNextLTW01-BoldIta" ,contentIds :{EOT: 'ac2d4349-4327-448f-9887-083a6a227a52',WOFF: '25e83bf5-47e3-4da7-98b1-755efffb0089',WOFF2: 'eaafcb26-9296-4a57-83e4-4243abc03db7',TTF: '4112ec87-6ded-438b-83cf-aaff98f7e987'}, enableSubsetting : false, enableOtf: false},{'fontfamily' : "AvenirNextLTW01-Heavy" ,contentIds :{EOT: '3418f6be-70a5-4c26-af1d-c09a8642ca20',WOFF: '181c847e-cdbc-43d5-ae14-03a81c8953b4',WOFF2: '5c57b2e2-f641-421e-a95f-65fcb47e409a',TTF: '045d1654-97f2-4ff0-9d24-21ba9dfee219'}, enableSubsetting : false, enableOtf: false}],selectorFontMap:{'h3' : {familyName:'AvenirNextLTW01-Heavy' },'blockquote' : {familyName:'AvenirNextLTW01-BoldIta' },'h4' : {familyName:'AvenirNextLTW01-Heavy' },'h2' : {familyName:'AvenirNextLTW01-Heavy' },'p' : {familyName:'Avenir Next LT W01 Bold' },'h1' : {familyName:'AvenirNextLTW01-Heavy' }},ck:'d44f19a684109620e484157ea590e818c697485401772eab3c70fc9291da1d8a04b3fe69fe167c628b28938a08b05147cb1ca23c45e522d8855a89a313d6892a42d2295d5fc79071d2b6e558fb802148014922942bcc88cd6b793cfb720d916ce6fddbf1a897b84bcc3c639d178e48c7092b9ad8d496ab474a0081bd802f07630e57f52641e1ab2799558e7b814c4c90c19bc2ae043ff13519363bb392e32b03a313315169373ebcd77063e6',fcURL:'http://fast.fonts.net/dv2/',env:'',projectId:'17a93237-f460-4ff6-aa20-91c86af3a32d',EOD:null},fontloading:function(fontFamily, fontDescription){  for(var i=0; i<MonoTypeWebFonts._fontLoadingEventList.length; i++){      MonoTypeWebFonts._fontLoadingEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription);  }},fontactive:function(fontFamily, fontDescription) {  for(var i=0; i<MonoTypeWebFonts._fontActiveEventList.length; i++){      MonoTypeWebFonts._fontActiveEventList[i].call(MonoTypeWebFonts, fontFamily, fontDescription);  }},inactive:function(){  MonoTypeWebFonts.cleanup();  for(var i=0; i<MonoTypeWebFonts._inActiveEventList.length; i++){      MonoTypeWebFonts._inActiveEventList[i].call(MonoTypeWebFonts);  }},active:function(){  MonoTypeWebFonts.cleanup();  for(var i=0; i<MonoTypeWebFonts._activeEventList.length; i++){      MonoTypeWebFonts._activeEventList[i].call(MonoTypeWebFonts);  }}});};try {MonoTypeWebFonts.loadFonts(); } catch (e) {}setTimeout(function(){ MonoTypeWebFonts.cleanup(); }, 40000);});function mti_loadScript(a) { "undefined"!=typeof MTIConfig&&1==MTIConfig.EnableCustomFOUTHandler&&(document.documentElement.style.visibility="hidden");var mti_coreJsURL="https://fast.fonts.net/jsapi/core/mt.js";var env="";var UA=navigator.userAgent.toLowerCase(),isIE8=-1!=UA.indexOf("msie")?parseInt(UA.split("msie")[1]):!1;isIE8&&(mti_coreJsURL="https://fast.fonts.net/jsapi/core/mti.js");"undefined"!=typeof MTIConfig&&1==MTIConfig.EnableDSForAllFonts&&(mti_coreJsURL=isIE8?"https://fast.fonts.net/jsapi/core/mti_cjk.js":"https://fast.fonts.net/jsapi/core/mt_cjk.js");if("undefined"!=typeof MTIConfig&&"undefined"!=typeof MTIConfig.version&&""!=MTIConfig.version){var fileName=mti_coreJsURL.split("/").pop();mti_coreJsURL="https://fast.fonts.net/jsapi/core/"+MTIConfig.version+"/"+fileName}var b=document.createElement("script");b.type="text/javascript",b.readyState?b.onreadystatechange=function(){("loaded"==b.readyState||"complete"==b.readyState)&&(b.onreadystatechange=null,a())}:b.onload=function(){a()},b.src=mti_coreJsURL,document.getElementsByTagName("head")[0].appendChild(b);};