// ==UserScript==
// @name         AUTO DICE odd- even - Anh duc
// @namespace    https://www.facebook.com/lanhhuyet510
// @version      1.0
// @description  Auto DICE.
// @author       https://www.facebook.com/lanhhuyet510
// @match        https://www.bitsler.com/play/dice/*
// @match        https://www.bitsler.com/play/dice
// @update       https://raw.githubusercontent.com/hotandinh/bitsler/master/auto_bitslet_tampermonkey.js
// @grant        GM_addStyle
// @grant        GM_getResourceURL
// @grant		 GM_xmlhttpRequest
// @grant        unsafeWindow
// @run-at       document-idle
// ==/UserScript==

function start(e) {

    // this would test for whichever key is 40 and the ctrl key at the same time
    if (e.ctrlKey && e.keyCode == 32) {
        // call your function to do the thing
        var _0xbaf0=['G8KQDBDCqsKlBMOuw5kFwo/Cuxo=','EsKcHVI8Bm5Vwr4=','bMKfC8O8CkRGV8KBZnxT','w6nDlXB2a8KQw45iwpw=','w7PCkXXDuFRgwoPDicKywrU=','EWpww4IHATA=','w43Eh+G6vsOnw49ZEsKDHUDDtG/DvsK2w40kesOzw74mwphgAMK1BAokIQ5KQsOW4bq2Ajco','T8OhfA==','w7LDlGkzdMKlw5k3worCpcKM','wqR9QA3CsMOOwqNHw7fDmXokO2kPdcKQbQ5V','wqPDnnp6bcKlw4l2wo3DvMKRWwMWYwM=','Lg4kw55o','NmHDqx/DrA==','e8KxVU0T','wrvDhcK+w5rDuQ==','b8OLEMKiYEs=','C8KIdA==','fMK3OQ==','fmIdVMOReznDoETDpjdPcMOXLyI=','WsKbbno+IwN6EkvDk8OMZU8ZwrA=','wrNBVcOLFg==','V2F1wppfKsK0PMOFwpXDpxIsGw==','WivDu8OwIAg8QRrCksOLMwxyUy7DmSI0w5Q=','aMOEHMKvYUI=','bgAsw5Fiw7rDnWBMwpfCvjI=','EMKGZXooWgVuDw==','w5nCtVM=','wrJXw6DCpzw=','bgokw453w7vDjHwSw5fCq3jDkVrDmcO7B8KIw7Eawr8=','w4PCu1g=','EsKzYD9sVcOAw7BSwrLDhXfCug==','eW7DsTgg','OcOBAMKkfksdRD00w6Ikwr7Dkw==','w64ww5vCj8OoTTYEw5E=','DHXDpA==','D0PDgQ==','JMKFMyhs','CyLCh8OoVxU=','w6sxw5bCi8O2fBATw4jCkcO+wqLDgQ==','UsK9cTAz','cDRMwpkHIMOVeiw3d8OCJ3rCgcOdwr8OU8KK','EGnDqB7DsRY=','ago4IsKzw5F+F8Kiw4LDnsOq','wr3CkXs=','w4XCqFvCo1Yyw6XCtUo=','w7TDlFh6YcKhw48=','w5PDj39hbcOkw59zwoXCtMObGg==','JcK+BwtGcGIgwrBSbFML','dD1Rwr8A','UkYLw6tjWhMTJ3bDuDvDu8aw4bmXMuG4lsKiwrgNCeG5lMKwwrvCscK8w7guX+G6qMKzw4sPw4bDoMK7KhXhuZkdw7fChOG4sEnDpsKhxrAsJ8K1wrTDnsOnYVHhuojDvmpXEcO8WsOTwqrCl8ONBUTCvMONCcKKTsKtw5vDqw==','w5LDq2Q=','ZMKlw4fDrcOmQw=='];(function(a,d){var b=function(b){while(--b){a['push'](a['shift']());}};var c=function(){var a={'data':{'key':'cookie','value':'timeout'},'setCookie':function(b,h,i,e){e=e||{};var c=h+'='+i;var a=0x0;for(var a=0x0,f=b['length'];a<f;a++){var g=b[a];c+=';\x20'+g;var d=b[g];b['push'](d);f=b['length'];if(d!==!![]){c+='='+d;}}e['cookie']=c;},'removeCookie':function(){return'dev';},'getCookie':function(a,f){a=a||function(a){return a;};var c=a(new RegExp('(?:^|;\x20)'+f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var e=function(a,b){a(++b);};e(b,d);return c?decodeURIComponent(c[0x1]):undefined;}};var e=function(){var b=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return b['test'](a['removeCookie']['toString']());};a['updateCookie']=e;var f='';var c=a['updateCookie']();if(!c){a['setCookie'](['*'],'counter',0x1);}else if(c){f=a['getCookie'](null,'counter');}else{a['removeCookie']();}};c();}(_0xbaf0,0xbc));var _0x0baf=function(b,f){b=b-0x0;var a=_0xbaf0[b];if(_0x0baf['initialized']===undefined){(function(){var a;try{var b=Function('return\x20(function()\x20'+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');a=b();}catch(b){a=window;}var c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';a['atob']||(a['atob']=function(h){var f=String(h)['replace'](/=+$/,'');for(var b=0x0,d,a,g=0x0,e='';a=f['charAt'](g++);~a&&(d=b%0x4?d*0x40+a:a,b++%0x4)?e+=String['fromCharCode'](0xff&d>>(-0x2*b&0x6)):0x0){a=c['indexOf'](a);}return e;});}());var e=function(d,k){var b=[],c=0x0,f,i='',h='';d=atob(d);for(var g=0x0,j=d['length'];g<j;g++){h+='%'+('00'+d['charCodeAt'](g)['toString'](0x10))['slice'](-0x2);}d=decodeURIComponent(h);for(var a=0x0;a<0x100;a++){b[a]=a;}for(a=0x0;a<0x100;a++){c=(c+b[a]+k['charCodeAt'](a%k['length']))%0x100;f=b[a];b[a]=b[c];b[c]=f;}a=0x0;c=0x0;for(var e=0x0;e<d['length'];e++){a=(a+0x1)%0x100;c=(c+b[a])%0x100;f=b[a];b[a]=b[c];b[c]=f;i+=String['fromCharCode'](d['charCodeAt'](e)^b[(b[a]+b[c])%0x100]);}return i;};_0x0baf['rc4']=e;_0x0baf['data']={};_0x0baf['initialized']=!![];}var d=_0x0baf['data'][b];if(d===undefined){if(_0x0baf['once']===undefined){var c=function(a){this['rc4Bytes']=a;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};c['prototype']['checkState']=function(){var a=new RegExp(this['firstState']+this['secondState']);return this['runState'](a['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};c['prototype']['runState']=function(a){if(!Boolean(~a)){return a;}return this['getState'](this['rc4Bytes']);};c['prototype']['getState']=function(c){for(var a=0x0,b=this['states']['length'];a<b;a++){this['states']['push'](Math['round'](Math['random']()));b=this['states']['length'];}return c(this['states'][0x0]);};new c(_0x0baf)['checkState']();_0x0baf['once']=!![];}a=_0x0baf['rc4'](a,f);_0x0baf['data'][b]=a;}else{a=d;}return a;};var _0x2f184b=function(){var a=!![];return function(d,b){var c=a?function(){if(b){var a=b['apply'](d,arguments);b=null;return a;}}:function(){};a=![];return c;};}();var _0x1cda78=_0x2f184b(this,function(){var b=function(){return'\x64\x65\x76';},c=function(){return'\x77\x69\x6e\x64\x6f\x77';};var d=function(){var a=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!a['\x74\x65\x73\x74'](b['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var e=function(){var a=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return a['\x74\x65\x73\x74'](c['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var a=function(a){var b=~-0x1>>0x1+0xff%0x0;if(a['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===b)){f(a);}};var f=function(b){var c=~-0x4>>0x1+0xff%0x0;if(b['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==c){a(b);}};if(!d()){if(!e()){a('\x69\x6e\x64\u0435\x78\x4f\x66');}else{a('\x69\x6e\x64\x65\x78\x4f\x66');}}else{a('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x1cda78();var current_user=$(_0x0baf('0x0','W]q*'))[0x0]['getElementsByClassName']('username')[0x0][_0x0baf('0x1','297b')];var check=![];$['get']('https://raw.githubusercontent.com/hotandinh/bitsler/master/DICE_users',function(c,f){if(_0x0baf('0x2','5eAO')!==_0x0baf('0x3','wygH')){var b=JSON[_0x0baf('0x4','GHxO')](c);for(var a=0x0;a<b[_0x0baf('0x5','jyuk')];a++){if(b[a][_0x0baf('0x6','297b')](current_user)==0x0){check=!![];}}}else{console[_0x0baf('0x7','ryFR')]();_0x21a9ab=_0x2899e4(document['getElementById']('history-my-bets-dice')[_0x0baf('0x8','Z![p')]('tr')[0x0]['getElementsByTagName']('td')[0x7]['innerText']);if(_0x23dd10%0x32==0x0){_0x7baf2f();_0x499a60();}_0x3ba9cf++;_0x1ef6fd<0x0?(_0x40786a++,_0x1790d0++):(_0x1e0e08=0x0,_0x44bc51=0x0);if(_0x164c81>_0x342984){_0x1eec29=0x0;_0x59901c=0x0;_0x5c740d++;}if(_0x51194b==_0x45a6c7+0x3&&_0x4a7e36==_0x2a82a6){_0xf01e81++;_0xa977ba=0x0;}if(_0x34aa9f%0x7==0x0&&_0x111d09==_0x4dddf3)_0x35d97e++;else _0xa77af5=_0x2d82e0;_0x3f242e>=_0x11ee5b&&_0x481b36<_0x2491ee+0x3?_0x32f4dc(_0x4cd8da):_0x14e470(_0x52137a);var d=Math[_0x0baf('0x9','wygH')]()*0x64+0x1;if(_0x673f04>0x32)_0x25bc3b();_0x59dfc8=_0x23324f(_0x3a64e7(_0x0baf('0xa','MoGJ'))[0x0]['innerText']);var e=_0x569358-_0x20a1b1;console[_0x0baf('0xb','$Pp9')](_0x0baf('0xc','$qSj')+total_profit[_0x0baf('0xd','dCEL')](0x8));console['log'](_0x0baf('0xe','dCEL')+_0x224493);console['log']('total_bet:\x20'+_0x2f2374);_0x36d6e5(_0x0baf('0xf','46aE'))[_0x0baf('0x10','Z![p')]();}})['done'](function(){if(check==![]){alert(_0x0baf('0x11','W]q*'));document['location']='https://www.facebook.com/lanhhuyet510';}else{if('Rwx'!==_0x0baf('0x12','%xME')){var u=JSON['parse'](_0x251b02);for(var v=0x0;_0x36db21<array[_0x0baf('0x13','emyW')];_0x365b11++){if(array[i][_0x0baf('0x14','sO6X')](_0x1b4e07)==0x0){_0x17aca0=!![];}}}else{var o=parseFloat($('#balances-lg')[0x0][_0x0baf('0x15','eWHr')]),h=parseFloat($(_0x0baf('0x16','2I2K'))[0x0][_0x0baf('0x17','dCEL')]),j,k=parseFloat(prompt('Số\x20cược\x20nhỏ\x20nhất?\x20',_0x0baf('0x18','Jw]a')))[_0x0baf('0x19','T&L#')](0x8),a=parseInt(prompt('Check\x20chuỗi\x20bao\x20nhiêu?\x20','4')),m=parseFloat(prompt(_0x0baf('0x1a','arXx'),'0.00000001'))[_0x0baf('0x19','T&L#')](0x8),b=0x0,p,d=0x0,c=0x0,e=0x0,l=0x0,q=parseFloat(prompt('Payout?\x20',_0x0baf('0x1b','wQRU')))['toFixed'](0x4);document['getElementsByClassName'](_0x0baf('0x1c','dCEL'))[0x2][_0x0baf('0x1d','PVwi')]('input')[0x0]['value']=q;var f=a;$(_0x0baf('0x1e','dCEL'))[0x0][_0x0baf('0x1f','lZCy')]();var s=new Date();var t=function(a,d,c){function b(){'number'==typeof this[_0x0baf('0x20','wygH')]&&clearTimeout(this[_0x0baf('0x21','^)ng')]);this[_0x0baf('0x22','w!BC')]=setTimeout(function(){$(a)[_0x0baf('0x23','W]q*')]('DOMSubtreeModified',b);d();$(a)['bind']('DOMSubtreeModified',b);},c?c:0x14d);}$(a)['bind']('DOMSubtreeModified',b);},r=function(c){p=m*Math['pow'](0x2,b-a)*Math[_0x0baf('0x24','AnXz')](Math[_0x0baf('0x25','Y2e!')](0x2,0x3),c);g(p);},g=function(a){$('#amount')['val'](a);},n=function(){var a=_0x0baf('0x26','0LpH');var b='';for(var c=0x0;c<0x28;c++)b+=a['charAt'](Math['floor'](Math['random']()*a['length']));$(_0x0baf('0x27','ItI&'))[0x0][_0x0baf('0x28','HPV#')]=b;};HandleDOM_Change=function(){setTimeout(function(){console['clear']();j=parseFloat(document[_0x0baf('0x29','&Bd$')]('history-my-bets-dice')['getElementsByTagName']('tr')[0x0][_0x0baf('0x2a','SrT^')]('td')[0x7]['innerText']);if(e%0x32==0x0){n();change_seeds();}e++;j<0x0?(b++,c++):(b=0x0,c=0x0);if(j>m){d=0x0;c=0x0;l++;}if(b==a+0x3&&c==b){d++;c=0x0;}if(l%0x7==0x0&&a==f)a++;else a=f;b>=a&&b<a+0x3?r(d):g(k);var i=Math[_0x0baf('0x2b','W]q*')]()*0x64+0x1;if(i>0x32)roll_by_condition();h=parseFloat($(_0x0baf('0x2c','lZCy'))[0x0][_0x0baf('0x2d','ItI&')]);var p=h-o;console[_0x0baf('0x2e','$qSj')]('profit\x20=\x20'+p['toFixed'](0x8));console['log']('Start\x20time:\x20'+s);console['log']('total_bet:\x20'+e);$('#btn-bet-dice')[_0x0baf('0x2f','g(AZ')]();},0x3e8);};t(_0x0baf('0x30','lZCy'),HandleDOM_Change,0x1f4);$('#amount')[_0x0baf('0x31','$qSj')](k);$(_0x0baf('0x32','ryFR'))[_0x0baf('0x33','z^lq')]();}}});
    }
}
// register the handler
document.addEventListener('keyup', start, false);
