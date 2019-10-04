function qsold(key) {
    key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
    var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
    var uri = window.location.href.toString();
    var qsval = match && decodeURIComponent(match[1].replace(/\+/g, " "));
    return qsval;
}
function qstest(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}
function qs(key) {
    key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
    var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
    var uri = window.location.href.toString();
    var qsval = match && decodeURIComponent(match[1].replace(/\+/g, " "));
    if (qsval === null) {
        uri = document.referrer.toString();
        qsval = match && decodeURIComponent(match[1].replace(/\+/g, " "));
    }
    return qsval;
}