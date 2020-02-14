var licenced = 1;
var address = "https://www.ren-ui.com/Ren-UI/dist/renui-min.js";
load('js',address)
.then(() => {})
.catch(() => {});

$.each($('.label'), function(index, value) { 
    var labelVal = $(this).html();
    labelVal = labelVal.trim()
    
    if ($(this).hasClass("latestversion") === true) {
        $(this).html(currentVersion);
        $(this).attr("title","v" + currentVersion + ' is the latest Public Release');
        $(this).addClass("white o08");
    } else if (labelVal.indexOf('.') !== -1) {
        if (labelVal.indexOf(currentVersion) !== -1) {
            if (labelVal.indexOf("|") !== -1) {
                var values = labelVal.split('|');
                $(this).html("Improved in " + values[0]);
                $(this).attr("data-tooltip","Introduced in " + values[1]);
            } else {
                $(this).html("New in " + labelVal);
            }
            $(this).addClass("aqua");
        } else {
            if (labelVal.indexOf("|") !== -1) {
                var values = labelVal.split('|');
                $(this).html(values[0]);
                $(this).attr("data-tooltip","Introduced in " + values[1]);
                $(this).addClass("silver");
            } else if (Number(currentVersion.replace('.','').replace('.','')) < Number(labelVal.replace('.','').replace('.',''))) {
                $(this).attr("data-tooltip","Not Public Released yet will be avialable in " + labelVal);
                $(this).html("Public Preview in " + currentVersion + '');
                $(this).addClass("silver");
            } else {
                $(this).attr("data-tooltip","Introduced in " + labelVal);
            }
        }
    }
});
function samplecode(licenced) {
    $.each($('.code-sample'), function(index, value) { 
        //console.log(index + ':' + value);
        $(this).attr('id',index);
        var validate = '';
        var myHtml = $(this).html();
        myHtml = myHtml.replace(new RegExp('&lt;', 'g'),'<');

        var contentBuild = '';
        //'<div id="title' + index + '" class="title border-bottom hide">Example';
        
        //contentBuild += '</div>';
        if($(this).attr("renui-code-show") === undefined) {
            contentBuild += '<div class="content clearfix" id="samplecode' + index + '">' + myHtml + '</div>';
        } else if ($(this).attr("renui-code-show") !== "") {
            contentBuild += '<div class="content clearfix" id="samplecode' + index + '"><form class="spacer round width-f text-center" id="form' + index + '" action="/v2/tests/preview/" method="post"><textarea class="form-element-hidden" name="code">' + myHtml + '</textarea><p>' + $(this).attr("renui-code-show") + '</p><button class="pointer space-b" data-tooltip="Preview this Code" onclick="document.getElementById(\'form' + index + '\').submit();">Preview</button></form></div>';
            $(this).removeAttr("renui-code-show"); 
        }
        
        $(this).html(contentBuild);
    
        myHtml = myHtml.replace(/\s{2,}/g, '');
        myHtml = myHtml.replace(/\t/g,'');
        myHtml = myHtml.replace(/&lt;/g,'<');
        myHtml = myHtml.replace(/&gt;/g,'>');
        myHtml = myHtml.replace(/> </g,'><');
        myHtml = myHtml.replace(/></g,'>\n<');
        myHtml = myHtml.replace(/>\n<\//g,'><\/');
        myHtml = myHtml.replace(/<\/div><\/div/g,'<\/div>\n<\/div');
        myHtml = myHtml.replace(/<\/div><\/div/g,'<\/div>\n<\/div');
        myHtml = myHtml.replace(/<\/div><\/div/g,'<\/div>\n<\/div');
        myHtml = myHtml.replace(/<\/div><\/div/g,'<\/div>\n<\/div');
        myHtml = myHtml.replace(/><\/section/g,'>\n<\/section');
        myHtml = myHtml.replace(/><\/body/g,'>\n<\/body');
        myHtml = myHtml.replace(/><\/html/g,'>\n<\/html');
        myHtml = myHtml.replace(/><\/html/g,'>\n<\/blockqoute');
        myHtml = myHtml.replace(/\</g, '&lt;');
        myHtml = myHtml.replace(/\>/g, '&gt;');
        var codetype = '';

        if($(this).attr("renui-code-type") === undefined) {
            codetype = '';
        } else {
            codetype = $(this).attr("renui-code-type");
            $(this).removeAttr("renui-code-type"); 
        }
        contentBuild = '';
        if($(this).attr("renui-code-validate") === undefined) {
            validate = '';
            
        } else if($(this).attr("renui-code-validate") !== '') {
            contentBuild += '<div style="margin-top: 2px;" class="space-l tooltip-maroon tooltip-left pointer right text-12 text-maroon" data-tooltip="Please notice that ' + $(this).attr("renui-code-validate") + ' does not validated with W3C Standards."><i class="icon warning"></i> WARNING</div>';
            validate = ' text-maroon';
            $(this).removeAttr("renui-code-validate"); 
        }
        if (licenced === 1) {
            contentBuild += '<div style="margin-top: 2px;" class="space-r tooltip-left pointer right text-12" data-tooltip="Copy to Clipboard" onclick="copyToClipboard(\'#samplecode' + index + '\',\'html\',this);"><i class="icon copy"></i> COPY</div>';
        }
        $(this).append('<div id="commands' + index + '" class="hide renui-code" style=""><div class="spacer-d2 width-100p left no-spacer-b">' + contentBuild + '</div><pre id="code' + index + '"><code>' + myHtml + '</code></pre></div>');
        $(this).prepend('<div id="preview' + index + '" class="code-button align-right width-100p"><span data-tooltip="Preview Code" class="tooltip-left spacer-d3 pointer text-24" onclick="documantationtogglecode(' + index + ');"><i class="icon code' + codetype + '' + validate + '"></i></span></div>');
        $(this).removeClass('code-sample');
        $(this).addClass('code-container');
    
        //if($(this).attr("renui-code") === 'open') {
           // documantationtogglecode(index);
        //}
        if($(this).attr("renui-code") !== 'close') {
            documantationtogglecode(index);
        }
        
        
    });
    hljs.configure({
        tabReplace: '<span class="indent">\t</span>' 
    });
    $(document).ready(function() {
        $('pre code').each(function(i, e) {hljs.highlightBlock(e)});
        $.each($('.hljs.json'), function(index, value) {
            var myHtml = $(this).html();
            myHtml = myHtml.replace(/\,/g,'\,\n');
            myHtml = myHtml.replace(/\{/g,'\{\n');
            myHtml = myHtml.replace(/\}/g,'\n\}');
            $(this).html(myHtml);
        });
        $.each($('.hljs.xml'), function(index, value) {
            var myHtml = $(this).html();
            myHtml = myHtml.replace(/\>\</g,'\>\n\<');
            $(this).html(myHtml);
        });
    });
    //hljs.initHighlightingOnLoad();
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
    var menu = '';
    var prevType = '';
    var menuItemName = '';
    var menuAnchor = '';
    var menuChange = '';
    var thisAnchor = '';
    $.each($('h1,h2,h3'), function(index, value) {
        menuChange = $(this).html();
        menuItemName = $(this).children().remove().end().text();
        $(this).html(menuChange);
        menuItemName = menuItemName.trim();
        menuAnchor = menuItemName.replace(/ /g,'').toLowerCase();
        menuAnchor = menuAnchor.replace(/\//g,'').replace(/-/g,'');
        $(this).attr('id',menuAnchor);
        if ($(this).prop('nodeName') !== prevType && prevType === "H3") {
            menu += '</ul></li>';
        }
        if ($(this).prop('nodeName') === 'H1') {
            menu += '<li class="sub-title">' + menuItemName + '</li>';
        } else if ($(this).prop('nodeName') === 'H2') {
            if (prevType === "H2") {
                menu += '</ul></li>';
            }
            menu += '<li class="menu-toggle open"><span>' + menuItemName + '</span><ul>';
        } else if ($(this).prop('nodeName') === 'H3') {
            menu += '<li id="t' + menuAnchor + '" class="sidemenuselect"><a href="#' + menuAnchor + '">' + menuItemName + '</a></li>';
            $(this).addClass('anchor');    
        }
        prevType = $(this).prop('nodeName');
    });
    menu = menu.replace(/<ul><\/ul>/g,'');
    $('#rightmenu').html(menu);
    $('a[href*="#"]').click(function(e) {
        e.preventDefault();
        var target = this.hash;
        $target = $(target).offset().top;
    
        $('html, body').stop().animate({
            'scrollTop': $target
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
    var currentAnchor = '';
    $(window).on('resize scroll', function() {
        $('.anchor').each(function() {
            var activeAnchor = $(this).attr('id');
          if ($(this).isInViewport()) {
            $('.sidemenuselect').removeClass('selected');
            $('#t' + activeAnchor).addClass('selected');
            //window.history.pushState(null, null, '#' + activeAnchor);
          }
        });
    });
}
$.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
  
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
  
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
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
function copyToClipboardText(ths,code) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(code).select();
    document.execCommand("copy");
    $(ths).attr("data-tooltip","Copied to Clipboard");
    $temp.remove();
}
function pillClick(ths,name,action) {
    $.each($('#nav' + name + ' li'), function(index, value) {
        $(this).removeClass('selected');
    });
    $(ths).parents('li').addClass('selected');

    $('#schema' + name + '').addClass('hide');
    $('#example' + name + '').addClass('hide');
    $('#code' + name + '').addClass('hide');
    $('#' + action + '' + name + '').removeClass('hide');
}
$('#loader').addClass('hide');
samplecode(licenced);