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
function pageCleaner(pg) {
    pg = pg.replace('//','/');
    pg = pg.replace('//','/');
    pg = pg.replace('//','/');
    pg = pg.replace('//','/');
    pg = pg.replace('//','/');
    pg = pg.replace(':/','://');
    return pg;
}
function query(pg) {
    pg = pageCleaner(pg);

    var query = '';
	var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        if (c.indexOf("=") !== 0) {
            //alert(left(c,c.indexOf("=")) + '=' + reverse(Base64.decode(right(c,c.indexOf("=")))));
            query += '&' + left(c,c.indexOf("=")).trim() + '=' + reverse(Base64.decode(right(c,(c.length - (c.indexOf("=")+1)))));
            pg = pg.replace('&' + left(c,c.indexOf("=")).trim() + '=' + reverse(Base64.decode(right(c,(c.length - (c.indexOf("=")+1))))),'');
            pg = pg.replace('?' + left(c,c.indexOf("=")).trim() + '=' + reverse(Base64.decode(right(c,(c.length - (c.indexOf("=")+1))))),'');
        }
    }
    query += '&url=' + window.location.pathname
    
    pg = pg.replace('&url=' + window.location.pathname,'');
    pg = pg.replace('?url=' + window.location.pathname,'');

    if (pg.indexOf('?') === -1) {
        pg = pg + '?' + right(query,(query.length - 1));
    } else {
        pg = pg + right(query,(query.length - 1));
    }

    return pg;
}
function header() {
    var myObject = {};
    myObject['url'] = window.location.pathname;
    myObject['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
    
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        if (c.indexOf("=") !== 0) {
            myObject[left(c,c.indexOf("=")).trim()] =reverse(Base64.decode(right(c,(c.length - (c.indexOf("=")+1)))));
        }
    }
    return myObject;
}
function apiGet(pg) {
    preloader('');
    pg = apiUrl + pg;
    pg = pageCleaner(pg);
    
    $.ajaxq('renui', {
        type: 'get',
        headers: header(),
        url: pg,
        dataType: "json",
        success: function (respJson) {
            jsonResponse(respJson, "");
        },
        error: function (data) {
            error(data);
        }
    })
}
function apiPost(page) {
    page = apiUrl + page;
    page = pageCleaner(page);
    
    $.ajaxq('renui', {
        type: 'post',
        headers: header(),
        url: page,
        dataType: "json",
        success: function (respJson) {
            jsonResponse(respJson, "");
        },
        error: function (data) {
            error(data);
        }
    })
    event.preventDefault();
}
function documantationtogglecode(no) {
    $('#preview' + no + '').toggleClass('hide');
    $('#' + no + '').toggleClass('selected');
    $('#title' + no + ', #commands' + no + '').toggleClass('hide');
}
function jsonxx(response) {
    return response.json()
  }
  
function apixxxxx(page,frm) {
    page = apiUrl + page;
    page = pageCleaner(page);
    
    fetch(page, {
        method: $(frm).attr('method').toLowerCase(),
        headers: header(),
        mode: 'cors',
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        body: $(frm).serialize()
      })
      .then(jsonxx)
      .then(function (data) {
        jsonResponse(data, "");
        //console.log('Request succeeded with JSON response', data);
      })
      .catch(function (data) {
        console.log('Request failed', data);
        error(data);
      });
    
}
function api(page,frm) {
    page = apiUrl + page;
    page = pageCleaner(page);
    
    $.ajax({
        cache: false,
        type: $(frm).attr('method').toLowerCase(),
        headers: header(),
        url: page,
        data: $(frm).serialize(),
        dataType: "json",
        crossDomain: true,
        jsonpCallback: 'callback',
        success: function (respJson) {
            jsonResponse(respJson, "");
        },
        error: function (data) {
            alert('here');
            error(data);
        }
    })
    event.preventDefault();
}
function apiJson(md,pg,idx,title) {
    jsonTemplate(md,pg,idx,title);
}
function jsonTemplate(md,pg,idx,title) {
    preloader(idx);
    pg = pageCleaner(pg);

    $.ajaxq('renui', {
        type: md,
        headers: header(),
        url: pg,
        success: function (data) {
            var a = idx.split(",");
            
            for (id in a) {
                var aid = a[id].replace('-','');
                if ($("#" + aid).length > 0) {
                    if ($('#' + aid).html().length !== data.length) {
                        if (typeof data === 'object') {
                            var template = '';
                            var currentTemplate = '';
                            template = $('#' + aid).find('.template').html();
                            
                            for(var k in data) {
                                if (k === aid) {
                                    //console.log(k + ':' + data[k]);
                                    var datay = data[k];
                                    var myCount = 0;
                                    for(i=0;i<datay.length;i++){
                                        currentTemplate = template;
                                        for(var x in datay[i]){
                                            var value = datay[i][x];
                                            value = replaceAll(value,'&lt;','<');
                                            value = replaceAll(value,'&gt;','>');
                                            //console.log(x + ':' + value);

                                            currentTemplate = replaceAll(currentTemplate,'[renui-populate-' + x + ']',value);
                                            currentTemplate = replaceAll(currentTemplate,'[populate-' + x + ']',value);
                                            currentTemplate = replaceAll(currentTemplate,'[' + x + ']',value);
                                            //console.log(x + ':' + value);
                                        }
                                        myCount += 1;

                                        $('#' + aid).find('.result').append(currentTemplate);
                                    }
                                    if (myCount !== 0 && title !== '') {
                                        $('#' + aid).find('.result').prepend('<' + title + ' class="capitalize">' + a[id].replace('-',' ') + '</' + title + '>');
                                    }
                                }
                            }
                            
                            $('#' + aid).find('.template').remove();
                        }
                    }
                }
                $('#' + aid).removeClass('jsondata');
            }
            jsonResponse(data, "");

            set();
        },
        error: function (data) {
            error(data);
        }
    });
}
function replaceAll(str, searchString, replaceString) {
    if (typeof replaceString === 'string') {
        while (str.toString().indexOf(searchString) != -1) {
            str = str.toString().replace(searchString,replaceString);
        }
    } else if (typeof replaceString === 'integer') {
        while (str.toString().indexOf(searchString) != -1) {
            str = str.toString().replace(searchString,replaceString);
        }
    }
    return str;
 }
 function popupOpen(item,page,id) {
    get(page,id);
    $('.window').addClass('fixed');
}
function popupAction(item) {
    var h = $('html').height() * 0.8;
    var h1 = $('html').height() * 0.1;
    var i = $('.content').outerHeight();
    var x = $(item).offset();

    console.log("debug: " + h + "," + i + "," + x.top);
    if (h > i) {
        $('.window').addClass('absolute');
        $('.window').css('top', (x.top - 20) + 'px');
    }
    $('.popup').addClass('open');
}
function getFormData(form){
    var unindexed_array = $(form).serializeArray();
    var indexed_array = {};

    $.map(unindexed_array, function(n, i){
        indexed_array[n['name']] = n['value'];
    });
    return indexed_array;
}
function title(text) {
    document.title = text;
}
function printValues(obj) {
    for(var k in obj) {
        if(obj[k] instanceof Object) {
            printValues(obj[k]);
        } else {
            console.log(obj[k]);
        };
    }
};