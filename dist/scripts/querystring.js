function qs(key) {
    key = key.replace(/[*+?^$.\[\]{}()|\\\/]/g, "\\$&"); // escape RegEx meta chars
    var match = location.search.match(new RegExp("[?&]" + key + "=([^&]+)(&|$)"));
    var uri = window.location.href.toString();
    var qsval = match && decodeURIComponent(match[1].replace(/\+/g, " "));
    return qsval;
}