﻿/*!
 * # renui.js - 2.0.0
 * https://github.com/brokenaxe/RenUI
 * http://ren-ui.com/
 *
 * Copyright 2014 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */
;
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(n){var f="",e,t,i,s,h,o,r,u=0;for(n=Base64._utf8_encode(n);u<n.length;)e=n.charCodeAt(u++),t=n.charCodeAt(u++),i=n.charCodeAt(u++),s=e>>2,h=(e&3)<<4|t>>4,o=(t&15)<<2|i>>6,r=i&63,isNaN(t)?o=r=64:isNaN(i)&&(r=64),f=f+this._keyStr.charAt(s)+this._keyStr.charAt(h)+this._keyStr.charAt(o)+this._keyStr.charAt(r);return f},decode:function(n){var t="",e,o,s,h,u,r,f,i=0;for(n=n.replace(/[^A-Za-z0-9\+\/\=]/g,"");i<n.length;)h=this._keyStr.indexOf(n.charAt(i++)),u=this._keyStr.indexOf(n.charAt(i++)),r=this._keyStr.indexOf(n.charAt(i++)),f=this._keyStr.indexOf(n.charAt(i++)),e=h<<2|u>>4,o=(u&15)<<4|r>>2,s=(r&3)<<6|f,t=t+String.fromCharCode(e),r!=64&&(t=t+String.fromCharCode(o)),f!=64&&(t=t+String.fromCharCode(s));return Base64._utf8_decode(t)},_utf8_encode:function(n){var i,r,t;for(n=n.replace(/\r\n/g,"\n"),i="",r=0;r<n.length;r++)t=n.charCodeAt(r),t<128?i+=String.fromCharCode(t):t>127&&t<2048?(i+=String.fromCharCode(t>>6|192),i+=String.fromCharCode(t&63|128)):(i+=String.fromCharCode(t>>12|224),i+=String.fromCharCode(t>>6&63|128),i+=String.fromCharCode(t&63|128));return i},_utf8_decode:function(n){for(var r="",t=0,i=c1=c2=0;t<n.length;)i=n.charCodeAt(t),i<128?(r+=String.fromCharCode(i),t++):i>191&&i<224?(c2=n.charCodeAt(t+1),r+=String.fromCharCode((i&31)<<6|c2&63),t+=2):(c2=n.charCodeAt(t+1),c3=n.charCodeAt(t+2),r+=String.fromCharCode((i&15)<<12|(c2&63)<<6|c3&63),t+=3);return r}};
function error(n){console.log(n)}function hndl(n,t){$("#"+n).length>0&&$("#"+n).html().length!==t.length&&(typeof t=="object"?jsonResponse(t,n):$("#"+n).html(t));set()}function jsonResponse(n){typeof n.Url!="undefined"&&error("Action Not Found (Contact Administrator):\nUrl: "+n.Url+"\nReferrer: "+n.Referrer+"\nMethod: "+n.Method);$.each(n,function(n,t){var i=n,r=t;i.indexOf("renui-populate-")!==-1?(i=i.replace("renui-populate-",""),r!==""&&$("#"+i).html(r)):i.indexOf("renui-addclass-")!==-1?(i=i.replace("renui-addclass-",""),r!==""&&$("#"+i).addClass(r)):i.indexOf("renui-removeclass-")!==-1?(i=i.replace("renui-removeclass-",""),r!==""&&$("#"+i).removeClass(r)):i.indexOf("renui-toggleclass-")!==-1?(i=i.replace("renui-toggleclass-",""),r!==""&&$("#"+i).toggleClass(r)):i.indexOf("renui-cookieset-")!==-1?(i=i.replace("renui-cookieset-",""),r!==""&&Cookie_Set(i,r,356)):i.indexOf("renui-cookieget-")!==-1?(i=i.replace("renui-cookieget-",""),r!==""&&$("#"+r).html(cookieget(i))):i.indexOf("renui-cookiedelete-")!==-1&&(i=i.replace("renui-cookiedelete-",""),cookiedelete(i));console.log("Debug "+i+": "+r)});set()};
function get(n,t){$("#loading").removeClass("hide");$("#"+t).length>0&&$.ajax({method:"GET",url:n,cache:!1,success:function(n){hndl(t,n)},error:function(n){error(n)}});event.preventDefault()};
function post(n,t,i){$("#loading").removeClass("hide");$(i).find(".toload").addClass("loading");$.ajax({type:"POST",url:n,data:$(i).serialize(),success:function(n){hndl(t,n)},error:function(n){error(n)}});event.preventDefault()};
function qs(n){n=n.replace(/[*+?^$.\[\]{}()|\\\/]/g,"\\$&");var t=location.search.match(new RegExp("[?&]"+n+"=([^&]+)(&|$)")),i=window.location.href.toString();return t&&decodeURIComponent(t[1].replace(/\+/g," "))};
function Cookie_Set(n,t,i){var r,u;i?(r=new Date,r.setTime(r.getTime()+i*864e5),u="; expires="+r.toGMTString()):u="";document.cookie=n+"="+Base64.encode(reverse(t))+u+"; path=/"}function cookieset(n,t,i,r=""){return Cookie_Set(n,t,i),r==="text"?n+" set to "+t:null}function cookieget(n){for(var t,r=n+"=",u=document.cookie.split(";"),i=0;i<u.length;i++){for(t=u[i];t.charAt(0)==" ";)t=t.substring(1,t.length);if(t.indexOf(r)==0)return reverse(Base64.decode(t.substring(r.length,t.length)))}return null}function cookiedelete(n){Cookie_Set(n,"",-1)}function cookiedeleteall(){for(var n,i=name+"=",r=document.cookie.split(";"),t=0;t<r.length;t++)n=r[t],n.indexOf(i)!==0&&cookiedelete(left(n,n.indexOf(i)));return null}function reverse(n){for(var t=n.length-1,i="";t>=0;i+=n[t--]);return i}function left(n,t){return t<=0?"":t>String(n).length?n:String(n).substring(0,t)}function right(n,t){if(t<=0)return"";if(t>String(n).length)return n;var i=String(n).length;return String(n).substring(i,i-t)};
function set(){$("[renui-set-get]").length>0&&$("[renui-set-get]").each(function(){var t=$(this).attr("renui-set-get"),n=t.split("|");$(this).removeAttr("renui-set-get");$(this).attr("onclick","get('"+n[0]+"','"+n[1]+"');")});$("[renui-get]").length>0&&$("[renui-get]").each(function(n){var t=$(this).attr("renui-get"),i=$(this).attr("id");$(this).removeAttr("renui-get");setTimeout(function(){get(t,i)},10*n)});$('input[name="get"]').length>0&&$('input[name="get"]').each(function(n){var t=$(this),i=t.val().split("|");t.remove();setTimeout(function(){get(i[0],i[1])},10*n)});$("[renui-cookie-get]").length>0&&$("[renui-cookie-get]").each(function(n){var t=$(this).attr("renui-cookie-get"),i=this;$(this).removeAttr("renui-cookie-get");t=cookieget(t);setTimeout(function(){$(i).html(t)},100*n)});$("[renui-display]").length>0&&$("[renui-display]").each(function(n){var t=$(this).attr("renui-display"),i=this;$(this).removeAttr("renui-display");setTimeout(function(){var n=getFn("return "+t);$(i).html(n)},100*n)});$('input[name="display"]').length>0&&$('input[name="display"]').each(function(n){var t=$(this),i=t.val().split("|");t.remove();setTimeout(function(){var n=getFn("return "+i[0]);display(n,i[1])},100*n)});$("[renui-run]").length>0&&$("[renui-run]").each(function(n){var t=$(this).attr("renui-run");$(this).removeAttr("renui-run");setTimeout(function(){getFn(t)},100*n)});$("[renui-count]").length>0&&$("[renui-count]").each(function(){var t=$(this).attr("renui-count"),n=t.split("|");$(this).removeAttr("renui-count");$(this).attr("current-count",parseInt(n[0],10));$(this).html("0");_count(this,n[1])});$("[renui-typewrite]").length>0&&$("[renui-typewrite]").each(function(){var n="",t=$(this).attr("renui-typewrite"),i=this;t.indexOf("|")!==-1?t.split("|").forEach(function(t){t.indexOf("text=")!==-1?(n=t.replace("text=",""),$(i).typewrite(n)):t.indexOf("back=")!==-1&&(n=t.replace("back=",""),$(i).backspace(parseInt(n,10)))}):$(i).typewrite(t);$(this).removeAttr("renui-typewrite")});$('input[name="run"]').length>0&&$('input[name="run"]').each(function(n){var t=$(this),i=t.val();t.remove();setTimeout(function(){getFn(i)},100*n)});$(".popup").length>0&&$(".popup").each(function(){popupActions(this,"");popupActions(this,"level-one");popupActions(this,"level-two");popupActions(this,"level-three")});$(".cards").length>0&&$(".cards").each(function(){$(this).find(".renui-open").addClass("pointer");$(this).find(".renui-close").addClass("pointer");$(this).find(".renui-open").click(function(){$(this).closest(".popup").addClass("open")});$(this).find(".renui-close").click(function(){$(this).closest(".cards>div").remove()})});$(".cards .card").length>0&&$(".cards .card").each(function(){$(this).addClass("card-swipe");swipe()});$("#loading").removeClass("hide");$(".toload").removeClass("loading")}function popupActions(n,t){t===""?($(n).find(".renui-open").addClass("pointer"),$(n).find(".renui-close").addClass("pointer")):($(n).find(".renui-open-"+t).addClass("pointer"),$(n).find(".renui-close-"+t).addClass("pointer"));$(n).find(".renui-open"+t).click(function(){t===""?$(n).closest(".popup").addClass("open"):$(n).closest(".holder ."+t).addClass("open")});$(n).find(".renui-close"+t).click(function(){t===""?$(n).closest(".popup").removeClass("open"):$(n).closest(".holder ."+t).removeClass("open")})}function swipe(){$(document).ready(function(){function h(){r=!0;f=n/10;t.css("transform","translateX("+n+"px) rotate("+f+"deg)");var i=n/100,u=i>=0?0:Math.abs(i),s=i<=0?0:i;e.css("opacity",u);o.css("opacity",s)}function c(){n>=i?t.addClass("to-right"):n<=-i&&t.addClass("to-left");Math.abs(n)>=i&&(t.addClass("inactive"),setTimeout(function(){t.remove();u++;u===s&&(u=0,$(".card-swipe").removeClass("below"))},300));Math.abs(n)<i&&t.addClass("reset");setTimeout(function(){t.attr("style","").removeClass("reset").find(".card-swipe__choice").attr("style","");n=0;r=!1},300)}var r=!1,u=0,s=6,i=80,n=0,f=0,t,e,o;$(document).on("mousedown touchstart",".card-swipe:not(.inactive)",function(i){if(!r){t=$(this);e=$(".card-swipe__choice.m--reject",t);o=$(".card-swipe__choice.m--like",t);var u=i.pageX||i.originalEvent.touches[0].pageX;$(document).on("mousemove touchmove",function(t){var i=t.pageX||t.originalEvent.touches[0].pageX;(n=i-u,n)&&h()});$(document).on("mouseup touchend",function(){($(document).off("mousemove touchmove mouseup touchend"),n)&&c()})}})})}function display(n,t){$("#"+t).html(n)}function getFn(n){var t=new Function(n);return t()}function firstSet(){if($(".touch-menu").length>0)if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){$(".touch-menu").addClass("ex-menu");$(".touch-menu").removeClass("touch-menu");var n=$(".ex-menu")[0].outerHTML;$(".ex-menu").remove();$("body").append('<div class="touch-menu">'+n+"<\/div>");$("body").append("<div class=\"touch-menu-button\" onclick=\"$('#renui-touch-menu').toggleClass('hide');\"><\/div>");$(".touch-menu").addClass("hide");$(".touch-menu").attr("id","renui-touch-menu")}else $(".touch-menu").removeClass("touch-menu");set()}function count(n,t){$(n).attr("current-count",parseInt($(n).html(),10));$(n).html("0");_count(n,t)}function _count(n,t){var r=parseInt($(n).attr("current-count"),10),u=parseInt($(n).html(),10),i=parseInt(u+parseInt(t,10),10);i<r?($(n).html(i),setTimeout(function(){_count(n,t)},10)):($(n).html($(n).attr("current-count")),$(n).removeAttr("current-count"))}$.fn.extend({backspace:function(n,t){var i;return i=$.extend({callback:function(){},keypress:function(){},t:100,e:.04},t),this.each(function(){var t;t=this;$(t).queue(function(){var u,r;r=function(n,u){n?(t[/(np|x)/i.test(t.tagName)?"value":"innerHTML"]=t[/(np|x)/i.test(t.tagName)?"value":"innerHTML"].slice(0,-1),i.keypress.call(t),setTimeout(function(){r(n-1,u)},i.t)):(i.callback.call(t),$(t).dequeue())};u=function(n,r){n?(t[/(np|x)/i.test(t.tagName)?"value":"innerHTML"]+=n[0],i.keypress.call(t),setTimeout(function(){u(n.slice(1),r)},i.t)):r()};r(n)})})},typewrite:function(n,t){var i;return i=$.extend({callback:function(){},keypress:function(){},t:100,e:.04},t),this.each(function(){var t;t=this;$(t).queue(function(){var r,u,f;u=function(n,r){n?(t[/(np|x)/i.test(t.tagName)?"value":"innerHTML"]=t[/(np|x)/i.test(t.tagName)?"value":"innerHTML"].slice(0,-1),i.keypress.call(t),setTimeout(function(){u(n-1,r)},i.t)):r()};r=function(n,u){n?(t[/(np|x)/i.test(t.tagName)?"value":"innerHTML"]+=n[0],i.keypress.call(t),setTimeout(function(){r(n.slice(1),u)},i.t)):u()};f=function(e){var o,s;o=function(){return setTimeout(function(){f(e)},Math.random()*i.t*(n[e-1]===n[e]?1.6:n[e-1]==="."?12:n[e-1]==="!"?12:n[e-1]==="?"?12:n[e-1]==="\n"?12:n[e-1]===","?8:n[e-1]===";"?8:n[e-1]===":"?8:n[e-1]===" "?3:2))};s=Math.random()/i.e;n.length>=e?.3>s&&n[e-1]!==n[e]&&n.length>e+4?r(n.slice(e,e+4),function(){u(4,o)}):.7>s&&e>1&&/[A-Z]/.test(n[e-2]&&n.length>e+4)?r(n[e-1].toUpperCase()+n.slice(e,e+4),function(){u(5,o)}):.5>s&&n[e-1]!==n[e]&&n.length>e?r(n[e],function(){u(1,o)}):1>s&&n[e-1]!==n[e]&&n.length>e?r(n[e]+n[e-1],function(){u(2,o)}):.5>s&&/[A-Z]/.test(n[e])?r(n[e].toLowerCase(),function(){u(1,o)}):(t[/(np|x)/i.test(t.tagName)?"value":"innerHTML"]+=n[e-1],i.keypress.call(t),setTimeout(function(){f(e+1)},Math.random()*i.t*(n[e-1]===n[e]?1.6:n[e-1]==="."?12:n[e-1]==="!"?12:n[e-1]==="?"?12:n[e-1]==="\n"?12:n[e-1]===","?8:n[e-1]===";"?8:n[e-1]===":"?8:n[e-1]===" "?3:2))):(i.callback.call(t),$(t).dequeue())};f(1)})})}});firstSet();console.log("renui.js [loaded:successful]");
