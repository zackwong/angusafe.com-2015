jQuery(function($) {
  var loop_reset, loopslider;
  loop_reset = function(active) {
    var next;
    active.find('.link').hide();
    active.removeClass('active');
    if (active.next().length > 0) {
      next = active.next();
    } else {
      next = $('#billboard .bb:first');
    }
    next.addClass('active');
    next.find('.link').show();
    return loopslider();
  };
  loopslider = function() {
    var active, half, image_right, subtitle_left, title_left;
    active = $('#billboard .bb.active');
    subtitle_left = $('.subtitle', active).css('left');
    image_right = $('.image', active).css('right');
    title_left = $('.title', active).css('left');
    if ($(window).width() <= 480) {
      half = $('.title', active).width() / -2;
      return $('.title', active).css({
        left: '50%',
        'margin-left': half
      }).animate({
        opacity: 1
      }, 200, function() {
        half = $('.image', active).width() / -2;
        return $('.image', active).css({
          right: '50%',
          'margin-right': half
        }).animate({
          opacity: 1
        }, 200, function() {
          return setTimeout(function() {
            return $('.title', active).animate({
              opacity: 0
            }, 200, function() {
              return $('.image', active).animate({
                opacity: 0
              }, 200, function() {
                return $('.subtitle', active).animate({
                  opacity: 0
                }, 200, function() {
                  $('.subtitle', active).css({
                    'margin-left': 0,
                    'left': subtitle_left
                  });
                  $('.image', active).css({
                    'margin-right': 0,
                    'right': image_right
                  });
                  $('.title', active).css({
                    'margin-left': 0,
                    'left': title_left
                  });
                  return loop_reset(active);
                });
              });
            });
          }, 4000);
        });
      });
    } else {
      return $('.image', active).animate({
        right: "+=50",
        opacity: 1
      }, 200, function() {
        return $('.title', active).animate({
          left: "-=50",
          opacity: 1
        }, 200, function() {
          $('.subtitle', active).animate({
            left: "-=50",
            opacity: 1
          });
          return setTimeout(function() {
            return $('.image', active).animate({
              right: "+=50",
              opacity: 0
            }, 200, function() {
              return $('.title', active).animate({
                left: "-=50",
                opacity: 0
              }, 200, function() {
                return $('.subtitle', active).animate({
                  left: "-=50",
                  opacity: 0
                }, 200, function() {
                  $('.subtitle', active).css('left', subtitle_left);
                  $('.image', active).css('right', image_right);
                  $('.title', active).css('left', title_left);
                  return loop_reset(active);
                });
              });
            });
          }, 4000);
        });
      });
    }
  };
  return setTimeout(loopslider, 500);
});