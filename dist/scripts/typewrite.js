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