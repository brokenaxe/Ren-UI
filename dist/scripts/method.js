function error(content) {
    console.log(content);
}
function hndl(id,html) {
    if ($("#" + id).length > 0) {
        if ($('#' + id).html().length !== html.length) {
            if (typeof html === 'object') {
                jsonResponse(html, id);
            } else {
                $('#' + id).html(html);
            }
        }
    }
    set();
}
function jsonResponse(respJson, id) {
    if (typeof respJson.Url !== 'undefined') {
        error('Action Not Found (Contact Administrator):\nUrl: ' + respJson.Url + '\nReferrer: ' + respJson.Referrer + '\nMethod: ' + respJson.Method);
    }

    $.each(respJson,function(i,v){
        var id = i;
        var value = v;

        if (id.indexOf('renui-populate-') !== -1) {
            id = id.replace('renui-populate-','');
            if (value !== '') {
                $('#' + id).html(value);
            }
        } else if (id.indexOf('renui-addclass-') !== -1) {
            id = id.replace('renui-addclass-','');
            if (value !== '') {
                $('#' + id).addClass(value);
            }
        } else if (id.indexOf('renui-removeclass-') !== -1) {
            id = id.replace('renui-removeclass-','');
            if (value !== '') {
                $('#' + id).removeClass(value);
            }
        } else if (id.indexOf('renui-toggleclass-') !== -1) {
            id = id.replace('renui-toggleclass-','');
            if (value !== '') {
                $('#' + id).toggleClass(value);
            }
        } else if (id.indexOf('renui-cookieset-') !== -1) {
            id = id.replace('renui-cookieset-','');
            if (value !== '') {
                Cookie_Set(id, value, 356);
            }
        } else if (id.indexOf('renui-cookieget-') !== -1) {
            id = id.replace('renui-cookieget-','');
            if (value !== '') {
                $('#' + value).html(cookieget(id));
            }
        } else if (id.indexOf('renui-cookiedelete-') !== -1) {
            id = id.replace('renui-cookiedelete-','');
            cookiedelete(id);
        }
        console.log('Debug ' + id + ': ' + value);
        
});
    set();
}