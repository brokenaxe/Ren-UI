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
function method(pg,id,md,dt) {
    $('#loading').removeClass('hide');
	if ($("#" + id).length > 0) {
        $.ajax({
            method: md,
            url: pg,
            cache: false,
            data: dt,
            success: function(html){
                hndl(id,html);
            }, error: function(data) {
                error(data);
			}
        });
	}
}
function jsondata(md,pg,id) {
    if ($('#' + id).find('.template').length > 0) {
        $('#' + id).addClass('loading');

        $.ajax({
            method: md,
            url: pg,
            cache: false,
            success: function(data){
                if ($("#" + id).length > 0) {
                    if ($('#' + id).html().length !== data.length) {
                        if (typeof data === 'object') {
                            var template = '';
                            var currentTemplate = '';
                            template = $('#' + id).find('.template').html();
    
                            for(i=0;i<data.length;i++){
                                currentTemplate = template;
                                for(var x in data[i]){
                                    currentTemplate = currentTemplate.replace('[renui-populate-' + x + ']',data[i][x]);
                                }
                                $('#' + id).find('.result').append(currentTemplate);
                            }
                            $('#' + id).find('.template').remove();
                        }
                    }
                }
                set();
                $.each($('.loading'), function(index, value) {
                    $(this).removeClass('loading'); 
                });   
                $('#' + id).removeClass('jsondata');

            }, error: function(data) {
                error(data);
            }
        });
        
        //$('#' + id).find('.template').removeClass('template');
        //$('#' + id).find('.result').removeClass('result');
    }
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
        } else if (id.indexOf('renui-get-') !== -1) {
            id = id.replace('renui-get-','');
            if (value !== '') {
                get(value,id);
            }
        } else if (id.indexOf('renui-redirect-') !== -1) {
            if (value !== '') {
                getUrl(value,'_self');
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
        //console.log('Debug ' + id + ': ' + value);
    });
    set();
}