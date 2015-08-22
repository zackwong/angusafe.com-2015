jQuery(function($) {
  var close_catalog, sc_size, selected;
  sc_size = -110;
  $('#catalog .line .figure').each(function(a, b) {
    return $(b).css('background-position', (a * sc_size) + 'px ' + '0');
  });
  $('ul.model').each(function(a, b) {
    var figure;
    figure = $(b).siblings('.figure');
    return $('a', b).hover(function() {
      var index;
      index = $(this).parent().index();
      return figure.css('background-position', (a * sc_size) + 'px ' + (index * sc_size) + 'px');
    });
  });
  close_catalog = function(that) {
    that.parent().removeClass('active');
    $('#catalog').css('z-index', 5).animate({
      top: -500
    }, 200, 'easeInQuart', function() {
      return that.removeClass('active').addClass('inactive');
    });
    if ($(window).width() <= 480) {
      return $('ul.nav li:gt(0):lt(3)').animate({
        'margin-top': 3
      }, 200, 'easeInQuart');
    }
  };
  $.extend($.easing, {
    easeInQuart: function(x, t, b, c, d) {
      return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    }
  });
  $('#nav-catalog').addClass('inactive').click(function(e) {
    var that;
    e.stopPropagation();
    e.preventDefault();
    that = $(this);
    if (that.hasClass('inactive')) {
      that.parent().addClass('active');
      $('#catalog').animate({
        top: 37
      }, 200, 'easeOutQuart', function() {
        that.removeClass('inactive').addClass('active');
        return $('#catalog').css('z-index', 51);
      });
      if ($(window).width() <= 480) {
        return $('ul.nav li:gt(0):lt(3)').animate({
          'margin-top': $('#catalog').height() + 10
        }, 200, 'easeOutQuart');
      }
    } else if (that.hasClass('active')) {
      return close_catalog(that);
    }
  });
  selected = $('#catalog_select').data('selected');
  $('#catalog .line a').each(function() {
    var a, index, option;
    option = $('<option />', {
      text: $(this).text(),
      value: $(this).attr('href')
    });
    a = $(this).closest('.line > li').index();
    index = $(this).parent().index();
    option.data('bgpos', (a * sc_size) + 'px ' + (index * sc_size) + 'px');
    if (selected === $(this).text()) {
      option.prop('selected', true);
    }
    return $('#catalog_select').append(option);
  });
  $('#catalog_select').change(function() {
    return $(this).closest('.select_box').find('.figure').css('background-position', $('option:checked', this).data('bgpos'));
  }).trigger('change');
  $('#catalog_go').click(function(e) {
    e.preventDefault();
    return window.location.href = $('#catalog_select').val();
  });
  $('#catalog').click(function(e) {
    return e.stopPropagation();
  });
  $('html').click(function() {
    var that;
    that = $('#nav-catalog');
    if (that.hasClass('active')) {
      return close_catalog(that);
    }
  });
  return 1 === $("#newsslider").length && $("#newsslider").sliderkit({
    auto: !0,
    autospeed: 5000,
    circular: !0,
    shownavitems: 1,
    panelfx: "sliding",
    panelfxspeed: 500,
    verticalnav: !0,
    verticalslide: !0
  });
});