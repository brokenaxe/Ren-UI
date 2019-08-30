/*!
 * # renui.js - 2.8.0
 * https://github.com/brokenaxe/ren-ui
 * http://ren-ui.com/
 *
 * Copyright 2014 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 */
function renui() {
    renui.prototype.name = 'Ren-UI';
    renui.prototype.version = '2.7.0';
}
function url() {
    url.prototype.protocol = window.location.protocol;
    url.prototype.hostname = window.location.hostname;
    url.prototype.pathname = window.location.pathname;
    url.prototype.hash = window.location.hash;
    url.prototype.href = window.location.href;
    url.prototype.domain = domainname(window.location.hostname);
}
function browser() {
    browser.prototype.cookieEnabled = navigator.cookieEnabled;
    browser.prototype.appName = navigator.appName.toString();
    browser.prototype.appCodeName = navigator.appCodeName;
    browser.prototype.product = navigator.product;
    browser.prototype.appVersion = navigator.appVersion;
    browser.prototype.userAgent = navigator.userAgent;
    browser.prototype.platform = navigator.platform;
    browser.prototype.language = navigator.language;
    browser.prototype.online = navigator.onLine.toString();
    browser.prototype.javaEnabled = navigator.javaEnabled().toString();
}
var renui = new renui();
var url = new url();
var browser = new browser();

currentVersion = renui.version;

function proto(id,val) {
    var value = '';
    if (val === 'url.protocol') {
      value = url.protocol;
    } else if (val === 'url.hostname') {
      value = url.hostname;
    } else if (val === 'url.pathname') {
      value = url.pathname;
    } else if (val === 'url.hash') {
      value = url.hash;
    } else if (val === 'url.href') {
        value = url.href;
    } else if (val === 'url.domain') {
        value = url.domain;
    } else if (val === 'renui.version') {
        value = renui.version;
    } else if (val === 'browser.cookieEnabled') {
        value = browser.cookieEnabled;
    } else if (val === 'browser.appName') {
        value = browser.appName;
    } else if (val === 'browser.appCodeName') {
        value = browser.appCodeName;
    } else if (val === 'browser.product') {
        value = browser.product;
    } else if (val === 'browser.appVersion') {
        value = browser.appVersion;
    } else if (val === 'browser.userAgent') {
        value = browser.userAgent;
    } else if (val === 'browser.platform') {
        value = browser.platform;
    } else if (val === 'browser.language') {
        value = browser.language;
    } else if (val === 'browser.online') {
        value = browser.online;
    } else if (val === 'browser.javaEnabled') {
        value = browser.javaEnabled;
    } else if (val === 'renui.name') {
        value = renui.name;
    } else if (val === 'renui.version') {
        value = renui.version;
    } else if (val === 'screen.width') {
        value = screen.width;
    } else if (val === 'screen.height') {
        value = screen.height;
    } else if (val === 'screen.availWidth') {
        value = screen.availWidth;
    } else if (val === 'screen.availHeight') {
        value = screen.availHeight;
    } else if (val === 'screen.colorDepth') {
        value = screen.colorDepth;
    } else if (val === 'screen.pixelDepth') {
        value = screen.pixelDepth;
    }
    $(id).html(value);
}
function domainname(url) {
    var result
    var match
    if (match = url.match(/^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n\?\=]+)/im)) {
        result = match[1]
        if (match = result.match(/^[^\.]+\.(.+\..+)$/)) {
            result = match[1]
        }
    }
    return result
}