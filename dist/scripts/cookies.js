function getDomain(v){
    var is_co=v.match(/\.co\./)
    v=v.split('.')
    v=v.slice(is_co ? -3: -2)
    v=v.join('.')
    //console.log(v)
    return v
}
function Cookie_Set(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	}
	else var expires = "";
	document.cookie = name + "=" + Base64.encode(reverse(value)) + expires + "; path=/; domain=" + getDomain(document.domain) + ";";
}
function cookieset(name, value, days, action = '') {
	if (cookieget("renui-gdpr") === 'agreed' || name === "renui-gdpr"){
		Cookie_Set(name, value, days);
		if (action === 'text') {
			return name + ' set to ' + value;
		} else {
			return null;
		}
	} else {
		return null;
	}
}
function cookieget(name) {
	//if (cookieget("renui-gdpr") === 'agreed' || name === "renui-gdpr") {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') c = c.substring(1, c.length);
			if (c.indexOf(nameEQ) == 0) return reverse(Base64.decode(c.substring(nameEQ.length, c.length)));
		}
	//}
	return null;
}
function cookiedelete(name) {
	if (cookieget("renui-gdpr") === 'agreed' || name === "renui-gdpr"){
		Cookie_Set(name, "", -1);
	} else {
		return null;
	}
}
function cookiedeleteall() {
	if (cookieget("renui-gdpr") === 'agreed'){
		var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++){   
			var spcook =  cookies[i].split("=");
			if (spcook[0] !== "renui-gdpr") {
				document.cookie = spcook[0] + "=;expires=Thu, 21 Sep 1979 00:00:01 UTC;";  
			}                              
        }
		return null;
	} else {
		return null;
	}
}
function reverse(s) {
    for (var i = s.length - 1, o = ''; i >= 0; o += s[i--]) { }
    return o;
}
function left(str, n){
	if (n <= 0)
	    return "";
	else if (n > String(str).length)
	    return str;
	else
	    return String(str).substring(0,n);
}
function right(str, n){
    if (n <= 0)
       return "";
    else if (n > String(str).length)
       return str;
    else {
       var iLen = String(str).length;
       return String(str).substring(iLen, iLen - n);
    }
}