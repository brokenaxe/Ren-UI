
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
    if ($('input[name="gdpr"]').length > 0) {
        $('input[name="gdpr"]').each(function (index) {
          var vals = $(this);
          var values = vals.val().split('|');
          vals.remove();
          setTimeout(function () {
              $('body').addClass('relative');
              $('body').append('<div id="renui-gdpr" class="hide width-s bg ' + values[0] + ' fixed"><h6>' + values[1] + '</h6>' + values[2] + ', <a class="underline" href="' + values[3] + '" target="_blank">Learn More</a>. <br><br><a class="button ' + values[4] + '" onclick="cookieset(\'renui-gdpr\',\'agreed\',365);$(\'#renui-gdpr\').addClass(\'hide\');">' + values[5] + '</div>');
              if (cookieget("renui-gdpr") === null){$("#renui-gdpr").removeClass("hide")};
          }, 100 * index);
        });
    }
    if ($('input[name="gdpr-bar"]').length > 0) {
        $('input[name="gdpr-bar"]').each(function (index) {
          var vals = $(this);
          var values = vals.val().split('|');
          vals.remove();
          setTimeout(function () {
              $('body').addClass('relative');
              $('body').append('<div id="renui-gdpr" class="hide width-f bg ' + values[0] + ' fixed">' + values[1] + ', <a class="underline" href="' + values[2] + '" target="_blank">Learn More</a>. <a class="right button ' + values[3] + '" onclick="cookieset(\'renui-gdpr\',\'agreed\',365);$(\'#renui-gdpr\').addClass(\'hide\');">' + values[4] + '</div>');
              if (cookieget("renui-gdpr") === null){$("#renui-gdpr").removeClass("hide")};
          }, 100 * index);
        });
    }
    if (cookieget("renui-gdpr") === 'agreed'){
      if ($('input[name="setga"]').length > 0) {
          $('input[name="setga"]').each(function (index) {
            var vals = $(this);
            var account = vals.val();
            vals.remove();
            setTimeout(function () {
                
                  setga(account);
                
            }, 100 * index);
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
    };
    if ($('.popup').length > 0) {
        $('.popup').each(function (index) {
          popupActions(this,'');
          popupActions(this,'level-one');
          popupActions(this,'level-two');
          popupActions(this,'level-three');
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
    phone();
}
function popupActions(ts,where) {
  if (where === '') {
    $(ts).find('.renui-open').addClass('pointer');
    $(ts).find('.renui-close').addClass('pointer');

    $(ts).find('.renui-open').click(function(){
      $(ts).closest('.popup').addClass('open');
    });
    $(ts).find('.renui-close').click(function(){
      $(ts).closest('.popup').removeClass('open');
    });
  } else {
    $(ts).find('.renui-open-' + where).addClass('pointer');
    $(ts).find('.renui-close-' + where).addClass('pointer');

    $(ts).find('.renui-open-' + where).click(function(){
      $('.holder.' + where).addClass('open');
    });
    $(ts).find('.renui-close-' + where).click(function(){
      $('.holder.' + where).removeClass('open');
    });
  }
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