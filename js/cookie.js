function getCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = window.document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (window.document.cookie.substring(i, j) == arg) return getCookieVal(j);
        i = window.document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}
function getCookieVal(offset) {
    var endstr = window.document.cookie.indexOf(";", offset);
    if (endstr == -1) endstr = window.document.cookie.length;
    return unescape(window.document.cookie.substring(offset, endstr));
}

function setCookie(name, value) {
    var exp = new Date();
    exp.setTime(exp.getTime() + (60 * 60 * 1000));		// 60分钟过期
    window.document.cookie = name + "=" + escape(value) + "; expires=" + exp.toGMTString() + ";path=/";
}

function deleteCookie(name) {
    var exp = new Date();
    exp.setTime(exp.getTime() - 1);
    var cval = getCookie(name);
    window.document.cookie = name + "=" + cval + "; expires=" + exp.toGMTString() + ";path=/";
}
