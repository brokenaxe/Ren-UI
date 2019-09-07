var baseUrl = 'http://www.ren-ui.com/';
var apiUrl = 'http://www.ren-ui.com/';

jQuery.ajaxq = function (queue, options) {
    if (typeof document.ajaxq === "undefined") document.ajaxq = {
        q: {},
        r: null
    };
    if (typeof document.ajaxq.q[queue] === "undefined") document.ajaxq.q[queue] = [];
    if (typeof options != "undefined") {
        var optionsCopy = {};
        for (var o in options) optionsCopy[o] = options[o];
        options = optionsCopy;
        var originalCompleteCallback = options.complete;
        options.complete = function (request, status) {
            document.ajaxq.q[queue].shift();
            document.ajaxq.r = null;
            if (originalCompleteCallback) originalCompleteCallback(request, status);
            if (document.ajaxq.q[queue].length > 0) document.ajaxq.r = jQuery.ajax(document.ajaxq.q[queue][0]);
        };
        document.ajaxq.q[queue].push(options);
        if (document.ajaxq.q[queue].length == 1) document.ajaxq.r = jQuery.ajax(options);
    } else {
        if (document.ajaxq.r) {
            document.ajaxq.r.abort();
            document.ajaxq.r = null;
        }
        document.ajaxq.q[queue] = [];
    }
}
function documantationtogglecode(no) {
    $('#preview' + no + '').toggleClass('hide');
    $('#' + no + '').toggleClass('selected');
    $('#title' + no + ', #commands' + no + '').toggleClass('hide');
}
function api(page,frm) {
    page = apiUrl + page;
    page = page.replace('//','/');
    
    $.ajaxq('renui', {
        type: $(frm).attr('method').toLowerCase(),
        url: page,
        data: $(frm).serialize(),
        success: function (respJson) {
            jsonResponse(respJson, "");
        },
        error: function (data) {
            error(data);
        }
    })
    event.preventDefault();
}