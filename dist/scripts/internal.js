var currentVersion = '2.0.1';
var licenced = 1;

$.each($('.label'), function(index, value) { 
    //console.log(index + ':' + value);
    var labelVal = $(this).html();
    labelVal = labelVal.trim()
    if (labelVal.indexOf('.') !== -1) {
        if (labelVal.indexOf(currentVersion) !== -1) {
            if (labelVal.indexOf("i") !== -1) {
                $(this).html(labelVal.replace("i",""));
                $(this).attr("title","Improved in v" + labelVal.replace("i",""));
                $(this).addClass("silver");
            } else {
                if ($(this).hasClass("latestversion") !== true) {
                    $(this).html("New in v" + labelVal);
                }
                $(this).addClass("gray");
            }
        } else {
            $(this).attr("title","Introduced in v" + labelVal);
        }
    }
    if ($(this).hasClass("latestversion") === true) {
        $(this).html(currentVersion);
        $(this).attr("title","v" + currentVersion + ' is the latest release');
        $(this).addClass("silver");
    }
});
function samplecode(licenced) {
    $.each($('.code-sample'), function(index, value) { 
        //console.log(index + ':' + value);
        $(this).attr('id',index);
        var validate = '';
        var myHtml = $(this).html();
        myHtml = myHtml.replace(new RegExp('&lt;', 'g'),'<');

        var contentBuild = '<div id="title' + index + '" class="title border-bottom hide">Example';
        
        if($(this).attr("renui-code-validate") === undefined) {
            validate = '';
            contentBuild += '<div style="margin-top: 2px;" class="space-l pointer right text-16" onclick="$(\'#preview' + index + '\').toggleClass(\'hide\');$(\'#' + index + '\').toggleClass(\'selected\');$(\'#code' + index + ', #title' + index + '\').toggleClass(\'hide\');"><i class="icon close"></i></div>';
        } else if($(this).attr("renui-code-validate") !== '') {
            contentBuild += '<div style="margin-top: 2px;" class="space-l tooltip-red tooltip-left pointer right text-16" data-tooltip="Please notice that ' + $(this).attr("renui-code-validate") + ' does not validated with W3C Standards."><i class="icon warning text-red"></i></div>';
            validate = ' text-maroon';
            contentBuild += '<div style="margin-top: 2px;" class="space-l space-r pointer right text-16" onclick="$(\'#preview' + index + '\').toggleClass(\'hide\');$(\'#' + index + '\').toggleClass(\'selected\');$(\'#code' + index + ', #title' + index + '\').toggleClass(\'hide\');"><i class="icon close"></i></div>';
            $(this).removeAttr("renui-code-validate"); 
        }
        
        if (licenced === 1) {
            contentBuild += '<div style="margin-top: 2px;" class="space-r tooltip-left pointer right text-16" data-tooltip="Copy to Clipboard" onclick="copyToClipboard(\'#samplecode' + index + '\',\'html\',this);"><i class="icon copy"></i></div>';
        }
        contentBuild += '</div>';
        if($(this).attr("renui-code-show") === undefined) {
            contentBuild += '<div class="content clearfix" id="samplecode' + index + '">' + myHtml + '</div>';
        } else if ($(this).attr("renui-code-show") !== "") {
            contentBuild += '<div class="content clearfix" id="samplecode' + index + '"><form class="space-b round border x3 dashed width-f text-center" id="form' + index + '" action="/v2/tests/preview/" method="post"><textarea class="form-element-hidden" name="code">' + myHtml + '</textarea><p>' + $(this).attr("renui-code-show") + '</p><button class="pointer space-b" data-tooltip="Preview this Code" onclick="document.getElementById(\'form' + index + '\').submit();">Preview</button></form></div>';
            $(this).removeAttr("renui-code-show"); 
        }
        
        $(this).html(contentBuild);
    
        myHtml = myHtml.replace(/\s{2,}/g, '');
        myHtml = myHtml.replace(/\t/g,'');
        myHtml = myHtml.replace(/> </g,'><');
        myHtml = myHtml.replace(new RegExp('><', 'g'),'>\n<');
        myHtml = myHtml.replace(new RegExp('>\n</', 'g'),'></');
        myHtml = myHtml.replace(new RegExp('a></', 'g'),'a>\n</');
        //myHtml = myHtml.replace(new RegExp(',', 'g'),',\n');
        myHtml = myHtml.replace(/\</g, '&lt;');
        myHtml = myHtml.replace(/\>/g, '&gt;');
        var codetype = '';

        if($(this).attr("renui-code-type") === undefined) {
            codetype = '';
        } else {
            codetype = $(this).attr("renui-code-type");
            $(this).removeAttr("renui-code-type"); 
        }
     
        $(this).append('<pre id="code' + index + '" class="hide"><code>' + myHtml + '</code></pre>');
        $(this).prepend('<div id="preview' + index + '" class="code-button align-right width-100p"><span data-tooltip="Preview Code" class="tooltip-left spacer-d3 pointer text-24" onclick="$(\'#preview' + index + '\').toggleClass(\'hide\');$(\'#' + index + '\').toggleClass(\'selected\');$(\'#code' + index + ', #title' + index + '\').toggleClass(\'hide\');$(\'#code' + index + '\').toggleClass(\'border-top\');"><i class="icon code' + codetype + '' + validate + '"></i></span></div>');
        $(this).removeClass('code-sample');
        $(this).addClass('code-container');
    
    
        if($(this).attr("renui-code") === 'open') {
            $('#preview' + index + '').toggleClass('hide');$('#' + index + '').toggleClass('selected');$('#code' + index + ', #title' + index + '').toggleClass('hide');
        }
        
    });
    hljs.initHighlightingOnLoad();
    $.each($('.code-container'), function(index, value) {
        var myHtml = $(this).find('pre code').html();
        var mySelected = $(this).attr("renui-selected");

        if (mySelected !== undefined) {
            mySelected.split(",").forEach(function (item) {
                if (myHtml.indexOf(item) > 0) {
                    myHtml = myHtml.replace(new RegExp(item, 'g'),'<mark class="bg silver">' + item + '</mark>');
                }
            });
        }
        
        $(this).find('pre code').html(myHtml);
    });
}
function changeColour(myThis) {
	$.each($('.change'), function(index, value) {
        $(this).removeClass('black').removeClass('white').removeClass('navy').removeClass('blue').removeClass('aqua').removeClass('teal').removeClass('olive').removeClass('green').removeClass('lime').removeClass('yellow').removeClass('orange').removeClass('red').removeClass('fuchsia').removeClass('purple').removeClass('maroon').removeClass('gray').removeClass('silver').removeClass('primary').removeClass('secondary');
        $(this).addClass($(myThis).html());
    });
	$.each($('.change-text'), function(index, value) {
        $(this).removeClass('text-black').removeClass('text-white').removeClass('text-navy').removeClass('text-blue').removeClass('text-aqua').removeClass('text-teal').removeClass('text-olive').removeClass('text-green').removeClass('text-lime').removeClass('text-yellow').removeClass('text-orange').removeClass('text-red').removeClass('text-fuchsia').removeClass('text-purple').removeClass('text-maroon').removeClass('text-gray').removeClass('text-silver').removeClass('text-primary').removeClass('text-secondary');
        $(this).addClass('text-' + $(myThis).html());
    });
    $.each($('.content'), function(index, value) {
        $(this).removeClass('bg black').removeClass('spacer');
        if ($(myThis).html() === 'white') {
            $(this).addClass('bg black spacer');
        }
    });
}
function copyToClipboard(whichelement,type,element) {
    var $temp = $("<input>");
    $("body").append($temp);
    if (type === '') {
        $temp.val($(whichelement).text()).select();
    } else {
        $temp.val($(whichelement).html()).select();
    }
    document.execCommand("copy");
    $(element).attr("data-tooltip","Copied to Clipboard");
    $temp.remove();
}
function getUrl(url, target = '_blank') {
	var win = window.open(url, target);
  	win.focus();
}
samplecode(licenced);