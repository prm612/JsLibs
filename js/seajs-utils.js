define(function(require,a,b){var c=require("seajs-httpClient"),d=require("seajs-waiting"),e=require("/seajs-myUtils");String.prototype.replaceAll=function(a,b){return this.replace(new RegExp(a,"gm"),b)},HTMLElement.prototype.removeClass=function(a){var b=new RegExp(a+" *","g");this.className=this.className.replace(b,"")},HTMLElement.prototype.addClass=function(a){new RegExp(" "+a+" ","g").test(" "+this.className+" ")||(this.className+=" "+a)},HTMLElement.prototype.appendNodes=function(a){var b=[];if(a.length)for(var c,d,e=a.length-1;e>=0;e--)d=a[e],b.splice(0,0,d),this.insertBefore(d,c||null),c=d;else b.push(a),this.appendChild(a);return b},HTMLElement.prototype.insertNodesBefore=function(a,b){var c=[];if(a.length)for(var d,e,f=a.length-1;f>=0;f--)e=a[f],c.splice(0,0,e),this.insertBefore(e,d||b||null),d=e;else c.push(a),this.insertBefore(a,b);return c},Number.prototype.plusSign=function(){return this>0?"+"+this:this+""},String.prototype.plusSign=Number.prototype.plusSign,window.addEventListener("pageshow",function(a){a.persisted&&location.reload()}),Date.prototype.format=function(a){var b={"M+":this.getMonth()+1,"d+":this.getDate(),"h+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S+":this.getMilliseconds()};/(y+)/i.test(a)&&(a=a.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length)));for(var c in b)new RegExp("("+c+")").test(a)&&(a=a.replace(RegExp.$1,1==RegExp.$1.length?b[c]:("00"+b[c]).substr((""+b[c]).length)));return a};var f=new function(){var a={};this.main=function(b,d){if(a.hasOwnProperty(b)){var e=a[b];if(e.isLoading)return e.delayDo||(e.delayDo=[]),void e.delayDo.push(d);if(e.isLoadOver)return void(d&&d())}a[b]={isLoading:!0},c.get(b,function(c){var e=document.createElement("div");e.innerHTML=c;var f=document.body.appendNodes(e.childNodes);d&&d(f),e=null;var g=a[b];if(g.delayDo){for(var h=0,i=g.delayDo.length;i>h;h++)g.delayDo[h]&&g.delayDo[h]();g.delayDo=null}a[b].isLoading=!1,a[b].isLoadOver=!0})}},g=function(a,b){this.num=a.length,this.fuc=b,this.rValue={},d.show();for(var c=0;c<a.length;c++)this.loadFile(a[c]);d.hide()};g.prototype.loadFile=function(a){var b=this;"string"==typeof a&&(a=[a]);var c=a[0].split("."),d=c.length>1&&"html"==c[c.length-1]?f.main:seajs.use;1==a.length?d(a[0],function(c){b.rValue[a[0]]=c,0==--b.num&&b.fuc&&b.fuc(b.rValue)}):d(a[0],function(c){b.rValue[a[0]]=c,a.shift(),b.loadFile(a)})},a.use=function(a,b){seajs.use("seajs-css",function(){new g(a,b)})},a.$id=function(a){return document.getElementById(a)},a.$name=function(a){return document.getElementsByName(a)},a.$tagName=function(a){return document.getElementsByTagName(a)},a.go=function(a,b){d.show(),b?location.replace(a):location.href=a},"true"==sessionStorage.getItem("refresh")&&(sessionStorage.setItem("refresh",!1),location.reload()),a.back=function(a,b){return a===!0?(sessionStorage.setItem("refresh",!0),void history.go(-1)):(b&&sessionStorage.setItem("refresh",!0),void(a?history.go(-Math.abs(a)):history.go(-1)))},a.newInstance=function(){return a},a.getParameter=function(a){var b=location.href.split("?")[1];if(b){b=b.split("&");for(var c=b.length-1;c>=0;c--){var d=b[c].split("=");if(d[0]==a)return d[1]}return null}return null},a.bindClick=function(b,c){a.$id(b).addEventListener("click",c)},e.superInt&&e.superInt(a);for(var h in e){if(!e.hasOwnProperty(h))break;a[h]=e[h]}});