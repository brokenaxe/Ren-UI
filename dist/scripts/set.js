$.fn.extend({
    backspace: function(num, options) {
      var settings;
      settings = $.extend({
        callback: function() {},
        keypress: function() {},
        t: 100,
        e: 0.04
      }, options);
      return this.each(function() {
        var elem;
        elem = this;
        $(elem).queue(function() {
          var append, backsp;
          backsp = function(n, fakeparam) {
            if (n) {
              elem[/(np|x)/i.test(elem.tagName) ? 'value' : 'innerHTML'] = elem[/(np|x)/i.test(elem.tagName) ? 'value' : 'innerHTML'].slice(0, -1);
              settings.keypress.call(elem);
              setTimeout((function() {
                backsp(n - 1, fakeparam);
              }), settings.t);
            } else {
              settings.callback.call(elem);
              $(elem).dequeue();
            }
          };
          append = function(fake, fakeyness) {
            if (fake) {
              elem[/(np|x)/i.test(elem.tagName) ? 'value' : 'innerHTML'] += fake[0];
              settings.keypress.call(elem);
              setTimeout((function() {
                append(fake.slice(1), fakeyness);
              }), settings.t);
            } else {
              fakeyness();
            }
          };
          backsp(num);
        });
      });
    },
    typewrite: function(txt, options) {
      var settings;
      settings = $.extend({
        callback: function() {},
        keypress: function() {},
        t: 100,
        e: 0.04
      }, options);
      return this.each(function() {
        var elem;
        elem = this;
        $(elem).queue(function() {
          var append, backsp, typeTo;
          backsp = function(num, cont) {
            if (num) {
              elem[/(np|x)/i.test(elem.tagName) ? 'value' : 'innerHTML'] = elem[/(np|x)/i.test(elem.tagName) ? 'value' : 'innerHTML'].slice(0, -1);
              settings.keypress.call(elem);
              setTimeout((function() {
                backsp(num - 1, cont);
              }), settings.t);
            } else {
              cont();
            }
          };
          append = function(str, cont) {
            if (str) {
              elem[/(np|x)/i.test(elem.tagName) ? 'value' : 'innerHTML'] += str[0];
              settings.keypress.call(elem);
              setTimeout((function() {
                append(str.slice(1), cont);
              }), settings.t);
            } else {
              cont();
            }
          };
          typeTo = function(i) {
            var afterErr, r;
            afterErr = function() {
              return setTimeout((function() {
                typeTo(i);
              }), Math.random() * settings.t * (txt[i - 1] === txt[i] ? 1.6 : txt[i - 1] === '.' ? 12 : txt[i - 1] === '!' ? 12 : txt[i - 1] === '?' ? 12 : txt[i - 1] === '\n' ? 12 : txt[i - 1] === ',' ? 8 : txt[i - 1] === ';' ? 8 : txt[i - 1] === ':' ? 8 : txt[i - 1] === ' ' ? 3 : 2));
            };
            r = Math.random() / settings.e;
            if (txt.length >= i) {
              if (0.3 > r && txt[i - 1] !== txt[i] && txt.length > i + 4) {
                append(txt.slice(i, i + 4), (function() {
                  backsp(4, afterErr);
                }));
              } else if (0.7 > r && i > 1 && /[A-Z]/.test(txt[i - 2] && txt.length > i + 4)) {
                append(txt[i - 1].toUpperCase() + txt.slice(i, i + 4), (function() {
                  backsp(5, afterErr);
                }));
              } else if (0.5 > r && txt[i - 1] !== txt[i] && txt.length > i) {
                append(txt[i], (function() {
                  backsp(1, afterErr);
                }));
              } else if (1.0 > r && txt[i - 1] !== txt[i] && txt.length > i) {
                append(txt[i] + txt[i - 1], (function() {
                  backsp(2, afterErr);
                }));
              } else if (0.5 > r && /[A-Z]/.test(txt[i])) {
                append(txt[i].toLowerCase(), (function() {
                  backsp(1, afterErr);
                }));
              } else {
                elem[/(np|x)/i.test(elem.tagName) ? 'value' : 'innerHTML'] += txt[i - 1];
                settings.keypress.call(elem);
                setTimeout((function() {
                  typeTo(i + 1);
                }), Math.random() * settings.t * (txt[i - 1] === txt[i] ? 1.6 : txt[i - 1] === '.' ? 12 : txt[i - 1] === '!' ? 12 : txt[i - 1] === '?' ? 12 : txt[i - 1] === '\n' ? 12 : txt[i - 1] === ',' ? 8 : txt[i - 1] === ';' ? 8 : txt[i - 1] === ':' ? 8 : txt[i - 1] === ' ' ? 3 : 2));
              }
            } else {
              settings.callback.call(elem);
              $(elem).dequeue();
            }
          };
          typeTo(1);
        });
      });
    }
  });

function set() {
    if ($('[renui-set-get]').length > 0) {
        $('[renui-set-get]').each(function (index) {
            var attrVal = $(this).attr("renui-set-get");
            var values = attrVal.split('|');
            $(this).removeAttr("renui-set-get");
            $(this).attr("onclick","get(\'" + values[0] + "\',\'" + values[1] + "\');");
        });
    }
    if ($('[renui-get]').length > 0) {
        $('[renui-get]').each(function (index) {
            var attrVal = $(this).attr("renui-get");
            var myid = $(this).attr("id");

            $(this).removeAttr("renui-get");
            setTimeout(function () {
                get(attrVal, myid);
            }, 10 * index);
        });
    }
    if ($('input[name="get"]').length > 0) {
        $('input[name="get"]').each(function (index) {
            var attrVal = $(this);
            var values = attrVal.val().split('|');
            attrVal.remove();
            setTimeout(function () {
                get(values[0], values[1]);
            }, 10 * index);
        });
    }
    if ($('[renui-cookie-get]').length > 0) {
        $('[renui-cookie-get]').each(function (index) {
            var attrVal = $(this).attr("renui-cookie-get");
            var varThis = this;
            $(this).removeAttr("renui-cookie-get");
            attrVal = cookieget(attrVal);

            setTimeout(function () {
                $(varThis).html(attrVal);
            }, 100 * index);
        });
    }
    if ($('[renui-display]').length > 0) {
        $('[renui-display]').each(function (index) {
            var attrVal = $(this).attr("renui-display");
            var varThis = this;
            $(this).removeAttr("renui-display");
            
            setTimeout(function () {
                var result = getFn("return " + attrVal);
                $(varThis).html(result);
            }, 100 * index);
        });
    }
    if ($('input[name="display"]').length > 0) {
        $('input[name="display"]').each(function (index) {
            var vals = $(this);
            var values = vals.val().split('|');
            vals.remove();
            setTimeout(function () {
                var result = getFn("return " + values[0]);
                display(result,values[1]);
            }, 100 * index);
        });
    }
    if ($('[renui-run]').length > 0) {
        $('[renui-run]').each(function (index) {
            var attrVal = $(this).attr("renui-run");
            $(this).removeAttr("renui-run");
            setTimeout(function () {
                getFn(attrVal);
            }, 100 * index);
        });
    }
    
    if ($('[renui-count]').length > 0) {
        $('[renui-count]').each(function (index) {
            var attrVal = $(this).attr("renui-count");
            var values = attrVal.split('|');
            $(this).removeAttr("renui-count");
            $(this).attr('current-count', parseInt(values[0], 10));
            $(this).html('0');
            _count(this,values[1]);
        });
    }
    /* Based on https://github.com/iamdanfox/typetype */
    if ($('[renui-typewrite]').length > 0) {
        $('[renui-typewrite]').each(function (index) {
            var value = '';
            var attrVal = $(this).attr("renui-typewrite");
            var thisElement = this;
            if (attrVal.indexOf('|') !== -1) {
                attrVal.split('|').forEach(function(myString) {
                    if (myString.indexOf('text=') !== -1) {
                        value = myString.replace('text=','');
                        $(thisElement).typewrite(value);
                    } else if (myString.indexOf('back=') !== -1) {
                        value = myString.replace('back=','');
                        $(thisElement).backspace(parseInt(value,10));
                    }
                });
            } else {
                $(thisElement).typewrite(attrVal);
            }
            
            $(this).removeAttr("renui-typewrite");
        });
    }
    if ($('input[name="run"]').length > 0) {
        $('input[name="run"]').each(function (index) {
            var vals = $(this);
            var jobs = vals.val();
            vals.remove();
            setTimeout(function () {
                getFn(jobs);
            }, 100 * index);
        });
    }
    if ($('.popup').length > 0) {
        $('.popup').each(function (index) {
            $(this).find('.renui-open').addClass('pointer');
            $(this).find('.renui-close').addClass('pointer');
            
            $(this).find('.renui-open').click(function(){
                $(this).closest('.popup').addClass('open');
            });
            $(this).find('.renui-close').click(function(){
                $(this).closest('.popup').removeClass('open');
            });
        });
    }
    if ($('.cards').length > 0) {
        $('.cards').each(function (index) {
            $(this).find('.renui-open').addClass('pointer');
            $(this).find('.renui-close').addClass('pointer');
            
            $(this).find('.renui-open').click(function(){
                $(this).closest('.popup').addClass('open');
            });
            $(this).find('.renui-close').click(function(){
                $(this).closest('.cards>div').remove();
            });
        });
    }
    if ($('.cards .card').length > 0) {
        $('.cards .card').each(function (index) {
            $(this).addClass('card-swipe');
            swipe();
        });
    }
    
    $('#loading').removeClass('hide');
    $('.toload').removeClass('loading');
}
function swipe() {
    $(document).ready(function() {
        var animating = false;
        var cardsCounter = 0;
        var numOfCards = 6;
        var decisionVal = 80;
        var pullDeltaX = 0;
        var deg = 0;
        var $card, $cardReject, $cardLike;
      
        function pullChange() {
          animating = true;
          deg = pullDeltaX / 10;
          $card.css("transform", "translateX("+ pullDeltaX +"px) rotate("+ deg +"deg)");
      
          var opacity = pullDeltaX / 100;
          var rejectOpacity = (opacity >= 0) ? 0 : Math.abs(opacity);
          var likeOpacity = (opacity <= 0) ? 0 : opacity;
          $cardReject.css("opacity", rejectOpacity);
          $cardLike.css("opacity", likeOpacity);
        };
      
        function release() {
      
          if (pullDeltaX >= decisionVal) {
            $card.addClass("to-right");
          } else if (pullDeltaX <= -decisionVal) {
            $card.addClass("to-left");
          }
      
          if (Math.abs(pullDeltaX) >= decisionVal) {
            $card.addClass("inactive");
      
            setTimeout(function() {
              $card.remove();
              //$card.addClass("below").removeClass("inactive to-left to-right");
              cardsCounter++;
              if (cardsCounter === numOfCards) {
                cardsCounter = 0;
                $(".card-swipe").removeClass("below");
              }
            }, 300);
          }
      
          if (Math.abs(pullDeltaX) < decisionVal) {
            $card.addClass("reset");
          }
      
          setTimeout(function() {
            $card.attr("style", "").removeClass("reset")
              .find(".card-swipe__choice").attr("style", "");
      
            pullDeltaX = 0;
            animating = false;
          }, 300);
        };
      
        $(document).on("mousedown touchstart", ".card-swipe:not(.inactive)", function(e) {
          if (animating) return;
      
          $card = $(this);
          $cardReject = $(".card-swipe__choice.m--reject", $card);
          $cardLike = $(".card-swipe__choice.m--like", $card);
          var startX =  e.pageX || e.originalEvent.touches[0].pageX;
      
          $(document).on("mousemove touchmove", function(e) {
            var x = e.pageX || e.originalEvent.touches[0].pageX;
            pullDeltaX = (x - startX);
            if (!pullDeltaX) return;
            pullChange();
          });
      
          $(document).on("mouseup touchend", function() {
            $(document).off("mousemove touchmove mouseup touchend");
            if (!pullDeltaX) return; // prevents from rapid click events
            release();
          });
        });
      
      });
}
function display(val,id) {
    $('#' + id).html(val);
}
function getFn(whichFn) {
    var Fn = new Function(whichFn);
    return (Fn());
}
function firstSet() {
    if ($('.touch-menu').length > 0) {
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
            $('.touch-menu').addClass('ex-menu');
            $('.touch-menu').removeClass('touch-menu');
            var phonemenu = $('.ex-menu')[0].outerHTML;
            $('.ex-menu').remove();
            $('body').append('<div class="touch-menu">' + phonemenu + '</div>');
            $('body').append('<div class="touch-menu-button" onclick="$(\'#renui-touch-menu\').toggleClass(\'hide\');"></div>');
            $('.touch-menu').addClass('hide');
            $('.touch-menu').attr('id','renui-touch-menu');
        } else {
            $('.touch-menu').removeClass('touch-menu');
        }
    }
    set();
}
firstSet();

function count(who,count){
    $(who).attr('current-count', parseInt($(who).html(), 10));
    $(who).html('0');
    _count(who,count);
}
function _count(who,count){
    var maxCurrent = parseInt($(who).attr('current-count'), 10);
    var current = parseInt($(who).html(), 10);
    var newCurrent = parseInt(current + parseInt(count, 10), 10);

    if(newCurrent < maxCurrent) {
        $(who).html(newCurrent);
        setTimeout(function(){_count(who,count)}, 10);
    } else {
        $(who).html($(who).attr('current-count'));
        $(who).removeAttr("current-count");
    }
} 


console.log('renui.js [loaded:successful]');