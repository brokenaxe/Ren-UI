﻿/*!
 * # renui.js - 2.8.0
 * https://github.com/brokenaxe/ren-ui
 * http://ren-ui.com/
 *
 * Copyright 2014 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */
function renui(){renui.prototype.name="Ren-UI";renui.prototype.version="2.7.0"}function url(){url.prototype.protocol=window.location.protocol;url.prototype.hostname=window.location.hostname;url.prototype.pathname=window.location.pathname;url.prototype.hash=window.location.hash;url.prototype.href=window.location.href;url.prototype.domain=domainname(window.location.hostname)}function browser(){browser.prototype.cookieEnabled=navigator.cookieEnabled;browser.prototype.appName=navigator.appName.toString();browser.prototype.appCodeName=navigator.appCodeName;browser.prototype.product=navigator.product;browser.prototype.appVersion=navigator.appVersion;browser.prototype.userAgent=navigator.userAgent;browser.prototype.platform=navigator.platform;browser.prototype.language=navigator.language;browser.prototype.online=navigator.onLine.toString();browser.prototype.javaEnabled=navigator.javaEnabled().toString()}function proto(n,t){var i="";t==="url.protocol"?i=url.protocol:t==="url.hostname"?i=url.hostname:t==="url.pathname"?i=url.pathname:t==="url.hash"?i=url.hash:t==="url.href"?i=url.href:t==="url.domain"?i=url.domain:t==="renui.version"?i=renui.version:t==="browser.cookieEnabled"?i=browser.cookieEnabled:t==="browser.appName"?i=browser.appName:t==="browser.appCodeName"?i=browser.appCodeName:t==="browser.product"?i=browser.product:t==="browser.appVersion"?i=browser.appVersion:t==="browser.userAgent"?i=browser.userAgent:t==="browser.platform"?i=browser.platform:t==="browser.language"?i=browser.language:t==="browser.online"?i=browser.online:t==="browser.javaEnabled"?i=browser.javaEnabled:t==="renui.name"?i=renui.name:t==="renui.version"?i=renui.version:t==="screen.width"?i=screen.width:t==="screen.height"?i=screen.height:t==="screen.availWidth"?i=screen.availWidth:t==="screen.availHeight"?i=screen.availHeight:t==="screen.colorDepth"?i=screen.colorDepth:t==="screen.pixelDepth"&&(i=screen.pixelDepth);$(n).html(i)}function domainname(n){var t,i;return(i=n.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im))&&(t=i[1],(i=t.match(/^[^\.]+\.(.+\..+)$/))&&(t=i[1])),t}var renui=new renui,url=new url,browser=new browser;currentVersion=renui.version;
function load(n,t){return n==="js"?new Promise(function(n,i){let r=document.createElement("script");r.src=t;r.type="text/javascript";r.onError=i;r.async=!0;r.onload=n;r.addEventListener("error",i);r.addEventListener("load",n);document.body.appendChild(r)}):n==="css"?new Promise(function(n,i){let r=document.createElement("link");r.href=t;r.type="text/css";r.ref="stylescheet";r.onError=i;r.onload=n;r.addEventListener("error",i);r.addEventListener("load",n);document.head.appendChild(r)}):void 0}var currentDomain=url.hostname,address;currentDomain=currentDomain.replace("www.","");document.body.innerHTML.search("/jquery-3.4.1.min")===-1&&(address="https://code.jquery.com/jquery-3.4.1.min.js",load("js",address).then(()=>{currentDomain==="ren-ui.com"&&document.body.innerHTML.search("/internal.js")===-1?load("js","https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.15.9/highlight.min.js").then(()=>{load("js","https://cdn.jsdelivr.net/gh/brokenaxe/ren-ui/dist/3.0.0/internal.js").then(()=>{}).catch(()=>{})}).catch(()=>{console.log("renui.js [failed:"&url&"]")}):document.body.innerHTML.search("renui.min.js")===-1&&load("js","https://cdn.jsdelivr.net/gh/brokenaxe/ren-ui/dist/3.0.0/renui-min.js").then(()=>{}).catch(()=>{})}).catch(()=>{}));
function pageCleaner(n){return n=n.replace("//","/"),n=n.replace("//","/"),n=n.replace("//","/"),n=n.replace("//","/"),n=n.replace("//","/"),n.replace(":/","://")}function query(n){var i,u,r,t;for(n=pageCleaner(n),i="",u=document.cookie.split(";"),r=0;r<u.length;r++)t=u[r],t.indexOf("=")!==0&&(i+="&"+left(t,t.indexOf("=")).trim()+"="+reverse(Base64.decode(right(t,t.length-(t.indexOf("=")+1)))),n=n.replace("&"+left(t,t.indexOf("=")).trim()+"="+reverse(Base64.decode(right(t,t.length-(t.indexOf("=")+1)))),""),n=n.replace("?"+left(t,t.indexOf("=")).trim()+"="+reverse(Base64.decode(right(t,t.length-(t.indexOf("=")+1)))),""));return i+="&url="+window.location.pathname,n=n.replace("&url="+window.location.pathname,""),n=n.replace("?url="+window.location.pathname,""),n.indexOf("?")===-1?n+"?"+right(i,i.length-1):n+right(i,i.length-1)}function header(){var t={},r,i,n;for(t.url=window.location.pathname,t["Content-Type"]="application/x-www-form-urlencoded; charset=UTF-8",t.Accept="application/json",r=document.cookie.split(";"),i=0;i<r.length;i++)n=r[i],n.indexOf("=")!==0&&(t[left(n,n.indexOf("=")).trim()]=reverse(Base64.decode(right(n,n.length-(n.indexOf("=")+1)))));return t}function apiGetv2(n){preloader("");n=pageCleaner(n);$.ajax({headers:header(),url:n,cache:!1,dataType:"json",type:"GET",success:function(n){jsonResponse(n,"")},error:function(n){error(n)}})}function apiGet(n){preloader("");n=apiUrl+n;n=pageCleaner(n);$.ajaxq("renui",{type:"get",headers:header(),url:n,cache:!1,dataType:"json",success:function(n){jsonResponse(n,"")},error:function(n){error(n)}})}function apiPost(n){preloader("");n=apiUrl+n;n=pageCleaner(n);$.ajaxq("renui",{type:"post",headers:header(),url:n,cache:!1,dataType:"json",success:function(n){jsonResponse(n,"")},error:function(n){error(n)}})}function documantationtogglecode(n){$("#preview"+n+"").toggleClass("hide");$("#"+n+"").toggleClass("selected");$("#title"+n+", #commands"+n+"").toggleClass("hide")}function api(n,t){n=apiUrl+n;n=pageCleaner(n);$.ajax({type:$(t).attr("method").toLowerCase(),headers:header(),url:n,data:$(t).serialize(),cache:!1,dataType:"json",success:function(n){jsonResponse(n,"")},error:function(n){error(n)}});event.preventDefault()}function apiJson(n,t,i,r){jsonTemplate(n,t,i,r)}function jsonTemplate(n,t,r,u){preloader(r);t=pageCleaner(t);$.ajaxq("renui",{type:n,headers:header(),url:t,success:function(n){var h=r.split(","),t,c,f,l,s,a,o,e;for(id in h){if(t=h[id].replace("-",""),$("#"+t).length>0&&$("#"+t).html().length!==n.length&&typeof n=="object"){c="";f="";c=$("#"+t).find(".template").html();for(l in n)if(l===t){for(s=n[l],a=0,i=0;i<s.length;i++){f=c;for(o in s[i])e=s[i][o],e=replaceAll(e,"&lt;","<"),e=replaceAll(e,"&gt;",">"),f=replaceAll(f,"[renui-populate-"+o+"]",e),f=replaceAll(f,"[populate-"+o+"]",e),f=replaceAll(f,"["+o+"]",e);a+=1;$("#"+t).find(".result").append(f)}a!==0&&u!==""&&$("#"+t).find(".result").prepend("<"+u+' class="capitalize">'+h[id].replace("-"," ")+"<\/"+u+">")}$("#"+t).find(".template").remove()}$("#"+t).removeClass("jsondata")}jsonResponse(n,"");set()},error:function(n){error(n)}})}function replaceAll(n,t,i){if(i=i.toString(),typeof i=="string")while(n.toString().indexOf(t)!=-1)n=n.toString().replace(t,i);else if(typeof i=="integer")while(n.toString().indexOf(t)!=-1)n=n.toString().replace(t,i);return n}function popupOpen(n,t,i){get(t,i);$(".window").addClass("fixed")}function popupAction(n){var t=$("html").height()*.8,u=$("html").height()*.1,i=$(".content").outerHeight(),r=$(n).offset();console.log("debug: "+t+","+i+","+r.top);t>i&&($(".window").addClass("absolute"),$(".window").css("top",r.top-20+"px"));$(".popup").addClass("open")}function getFormData(n){var i=$(n).serializeArray(),t={};return $.map(i,function(n){t[n.name]=n.value}),t}function title(n){document.title=n}function printValues(n){for(var t in n)n[t]instanceof Object?printValues(n[t]):console.log(n[t])}var baseUrl="https://www.ren-ui.com/",apiUrl="https://www.ren-ui.com/";jQuery.ajaxq=function(n,t){var i,r,u;if(typeof document.ajaxq=="undefined"&&(document.ajaxq={q:{},r:null}),typeof document.ajaxq.q[n]=="undefined"&&(document.ajaxq.q[n]=[]),typeof t!="undefined"){i={};for(r in t)i[r]=t[r];t=i;u=t.complete;t.complete=function(t,i){document.ajaxq.q[n].shift();document.ajaxq.r=null;u&&u(t,i);document.ajaxq.q[n].length>0&&(document.ajaxq.r=jQuery.ajax(document.ajaxq.q[n][0]))};document.ajaxq.q[n].push(t);document.ajaxq.q[n].length==1&&(document.ajaxq.r=jQuery.ajax(t))}else document.ajaxq.r&&(document.ajaxq.r.abort(),document.ajaxq.r=null),document.ajaxq.q[n]=[]};
function samplecode(n){var e;$.each($(".code-sample"),function(t){var u,i,r,f;$(this).attr("id",t);u="";i=$(this).html();i=i.replace(new RegExp("&lt;","g"),"<");r="";$(this).attr("renui-code-show")===undefined?r+='<div class="content clearfix" id="samplecode'+t+'">'+i+"<\/div>":$(this).attr("renui-code-show")!==""&&(r+='<div class="content clearfix" id="samplecode'+t+'"><form class="spacer round width-f text-center" id="form'+t+'" action="/v2/tests/preview/" method="post"><textarea class="form-element-hidden" name="code">'+i+"<\/textarea><p>"+$(this).attr("renui-code-show")+'<\/p><button class="pointer space-b" data-tooltip="Preview this Code" onclick="document.getElementById(\'form'+t+"').submit();\">Preview<\/button><\/form><\/div>",$(this).removeAttr("renui-code-show"));$(this).html(r);i=i.replace(/\s{2,}/g,"");i=i.replace(/\t/g,"");i=i.replace(/&lt;/g,"<");i=i.replace(/&gt;/g,">");i=i.replace(/> </g,"><");i=i.replace(/></g,">\n<");i=i.replace(/>\n<\//g,"><\/");i=i.replace(/<\/div><\/div/g,"<\/div>\n<\/div");i=i.replace(/<\/div><\/div/g,"<\/div>\n<\/div");i=i.replace(/<\/div><\/div/g,"<\/div>\n<\/div");i=i.replace(/<\/div><\/div/g,"<\/div>\n<\/div");i=i.replace(/><\/section/g,">\n<\/section");i=i.replace(/><\/body/g,">\n<\/body");i=i.replace(/><\/html/g,">\n<\/html");i=i.replace(/><\/html/g,">\n<\/blockqoute");i=i.replace(/\</g,"&lt;");i=i.replace(/\>/g,"&gt;");f="";$(this).attr("renui-code-type")===undefined?f="":(f=$(this).attr("renui-code-type"),$(this).removeAttr("renui-code-type"));r="";$(this).attr("renui-code-validate")===undefined?u="":$(this).attr("renui-code-validate")!==""&&(r+='<div style="margin-top: 2px;" class="space-l tooltip-maroon tooltip-left pointer right text-12 text-maroon" data-tooltip="Please notice that '+$(this).attr("renui-code-validate")+' does not validated with W3C Standards."><i class="icon warning"><\/i> WARNING<\/div>',u=" text-maroon",$(this).removeAttr("renui-code-validate"));n===1&&(r+='<div style="margin-top: 2px;" class="space-r tooltip-left pointer right text-12" data-tooltip="Copy to Clipboard" onclick="copyToClipboard(\'#samplecode'+t+"','html',this);\"><i class=\"icon copy\"><\/i> COPY<\/div>");$(this).append('<div id="commands'+t+'" class="hide renui-code" style=""><div class="spacer-d2 width-100p left no-spacer-b">'+r+'<\/div><pre id="code'+t+'"><code>'+i+"<\/code><\/pre><\/div>");$(this).prepend('<div id="preview'+t+'" class="code-button align-right width-100p"><span data-tooltip="Preview Code" class="tooltip-left spacer-d3 pointer text-24" onclick="documantationtogglecode('+t+');"><i class="icon code'+f+""+u+'"><\/i><\/span><\/div>');$(this).removeClass("code-sample");$(this).addClass("code-container");$(this).attr("renui-code")!=="close"&&documantationtogglecode(t)});hljs.configure({tabReplace:'<span class="indent">\t<\/span>'});$(document).ready(function(){$("pre code").each(function(n,t){hljs.highlightBlock(t)});$.each($(".hljs.json"),function(){var n=$(this).html();n=n.replace(/\,/g,",\n");n=n.replace(/\{/g,"{\n");n=n.replace(/\}/g,"\n}");$(this).html(n)});$.each($(".hljs.xml"),function(){var n=$(this).html();n=n.replace(/\>\</g,">\n<");$(this).html(n)})});$.each($(".code-container"),function(){var n=$(this).find("pre code").html(),t=$(this).attr("renui-selected");t!==undefined&&t.split(",").forEach(function(t){n.indexOf(t)>0&&(n=n.replace(new RegExp(t,"g"),'<mark class="bg silver">'+t+"<\/mark>"))});$(this).find("pre code").html(n)});var t="",u="",i="",r="",f="";$.each($("h1,h2,h3"),function(){f=$(this).html();i=$(this).children().remove().end().text();$(this).html(f);i=i.trim();r=i.replace(/ /g,"").toLowerCase();r=r.replace(/\//g,"").replace(/-/g,"");$(this).attr("id",r);$(this).prop("nodeName")!==u&&u==="H3"&&(t+="<\/ul><\/li>");$(this).prop("nodeName")==="H1"?t+='<li class="sub-title">'+i+"<\/li>":$(this).prop("nodeName")==="H2"?(u==="H2"&&(t+="<\/ul><\/li>"),t+='<li class="menu-toggle open"><span>'+i+"<\/span><ul>"):$(this).prop("nodeName")==="H3"&&(t+='<li id="t'+r+'" class="sidemenuselect"><a href="#'+r+'">'+i+"<\/a><\/li>",$(this).addClass("anchor"));u=$(this).prop("nodeName")});t=t.replace(/<ul><\/ul>/g,"");$("#rightmenu").html(t);$('a[href*="#"]').click(function(n){n.preventDefault();var t=this.hash;$target=$(t).offset().top;$("html, body").stop().animate({scrollTop:$target},900,"swing",function(){window.location.hash=t})});e="";$(window).on("resize scroll",function(){$(".anchor").each(function(){var n=$(this).attr("id");$(this).isInViewport()&&($(".sidemenuselect").removeClass("selected"),$("#t"+n).addClass("selected"))})})}function changeColour(n){$.each($(".change"),function(){$(this).removeClass("black").removeClass("white").removeClass("navy").removeClass("blue").removeClass("aqua").removeClass("teal").removeClass("olive").removeClass("green").removeClass("lime").removeClass("yellow").removeClass("orange").removeClass("red").removeClass("fuchsia").removeClass("purple").removeClass("maroon").removeClass("gray").removeClass("silver").removeClass("primary").removeClass("secondary");$(this).addClass($(n).html())});$.each($(".change-text"),function(){$(this).removeClass("text-black").removeClass("text-white").removeClass("text-navy").removeClass("text-blue").removeClass("text-aqua").removeClass("text-teal").removeClass("text-olive").removeClass("text-green").removeClass("text-lime").removeClass("text-yellow").removeClass("text-orange").removeClass("text-red").removeClass("text-fuchsia").removeClass("text-purple").removeClass("text-maroon").removeClass("text-gray").removeClass("text-silver").removeClass("text-primary").removeClass("text-secondary");$(this).addClass("text-"+$(n).html())});$.each($(".content"),function(){$(this).removeClass("bg black").removeClass("spacer");$(n).html()==="white"&&$(this).addClass("bg black spacer")})}function copyToClipboard(n,t,i){var r=$("<input>");$("body").append(r);t===""?r.val($(n).text()).select():r.val($(n).html()).select();document.execCommand("copy");$(i).attr("data-tooltip","Copied to Clipboard");r.remove()}function copyToClipboardText(n,t){var i=$("<input>");$("body").append(i);i.val(t).select();document.execCommand("copy");$(n).attr("data-tooltip","Copied to Clipboard");i.remove()}function pillClick(n,t,i){$.each($("#nav"+t+" li"),function(){$(this).removeClass("selected")});$(n).parents("li").addClass("selected");$("#schema"+t+"").addClass("hide");$("#example"+t+"").addClass("hide");$("#code"+t+"").addClass("hide");$("#"+i+""+t+"").removeClass("hide")}var licenced=1,address="https://www.ren-ui.com/Ren-UI/dist/renui-min.js";load("js",address).then(()=>{}).catch(()=>{});$.each($(".label"),function(){var n=$(this).html(),t;n=n.trim();$(this).hasClass("latestversion")===!0?($(this).html(currentVersion),$(this).attr("title","v"+currentVersion+" is the latest Public Release"),$(this).addClass("white o08")):n.indexOf(".")!==-1&&(n.indexOf(currentVersion)!==-1?(n.indexOf("|")!==-1?(t=n.split("|"),$(this).html("Improved in "+t[0]),$(this).attr("data-tooltip","Introduced in "+t[1])):$(this).html("New in "+n),$(this).addClass("aqua")):n.indexOf("|")!==-1?(t=n.split("|"),$(this).html(t[0]),$(this).attr("data-tooltip","Introduced in "+t[1]),$(this).addClass("silver")):Number(currentVersion.replace(".","").replace(".",""))<Number(n.replace(".","").replace(".",""))?($(this).attr("data-tooltip","Not Public Released yet will be avialable in "+n),$(this).html("Public Preview in "+currentVersion+""),$(this).addClass("silver")):$(this).attr("data-tooltip","Introduced in "+n))});$.fn.isInViewport=function(){var n=$(this).offset().top,i=n+$(this).outerHeight(),t=$(window).scrollTop(),r=t+$(window).height();return i>t&&n<r};$("#loader").addClass("hide");samplecode(licenced);
function getUrl(n,t="_blank"){var i=window.open(n,t);i.focus()};
