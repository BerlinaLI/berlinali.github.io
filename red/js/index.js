(function() {
  (function(w, d, $) {
    var config, isAlong, log, timer;
    log = function(val) {
      if (typeof w.console !== "undefined") {
        return w.console.log(val);
      }
    };
    config = {
      target: 0,
      onView: false,
      diff: 50,
      onEvent: function() {}
    };
    isAlong = true;
    timer = null;
    $.scrollExtends = function(elem, options) {
      var $that, c, setTarget;
      $that = elem;
      c = $.extend(config, options);
      setTarget = function() {
        var tarHeight, tarTop;
        tarTop = $that.offset().top;
        tarHeight = $that.height() || $that[0].height;
        c.target = (c.onView ? tarTop + Math.min(c.diff, tarHeight) : tarTop + tarHeight - c.diff) - $(w).height();
        log("target: " + c.target);
        return isAlong = false;
      };
      $(w).on("scroll", function() {
        var now;
        log("scroll:" + $("body").scrollTop());
        if (isAlong) {
          return;
        }
        now = $("body").scrollTop();
        log(c.target + ":" + now);
        if (c.target < now) {
          isAlong = true;
          c.onEvent();
          return setTarget();
        }
      });
      $(w).on("resize", function() {
        log("now Resize");
        if (timer) {
          clearTimeout(timer);
        }
        return timer = setTimeout(function() {
          setTarget();
          return clearTimeout(timer);
        }, 500);
      });
      return setTarget();
    };
    $.fn.scrollExtends = function(options) {
      $.scrollExtends(this, options);
      return this;
    };
    return $(function() {
      return $.scrollExtends($(".container"), {
        onEvent: function() {
          var height;
          height = $(".container").height();
          return $(".container").height(height += 100);
        }
      });
    });
  })(window, document, jQuery);

}).call(this);