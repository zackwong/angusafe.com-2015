jQuery(function($) {
  var child, children, count, item, page, ul, _ref, _ref2;
  if (window.screen && window.screen.width > 480) {
    children = $('#product_menu > ul.ddmenu > li').length;
    count = Math.ceil(children / 6);
    for (page = 1; 1 <= count ? page <= count : page >= count; 1 <= count ? page++ : page--) {
      ul = $('<ul />').appendTo('#showcase');
      for (item = _ref = (page - 1) * 6, _ref2 = page * 6 - 1; _ref <= _ref2 ? item <= _ref2 : item >= _ref2; _ref <= _ref2 ? item++ : item--) {
        child = $('#product_menu > ul.ddmenu > li').eq(item);
        if (child.length === 1) {
          ul.append(child.clone());
        }
      }
    }
    if (children <= 6) {
      $('#showcase').addClass('shorter');
    }
    $('#showcase').append('<div class="nav"></div>');
    if (count > 1) {
      for (page = 1; 1 <= count ? page <= count : page >= count; 1 <= count ? page++ : page--) {
        $('#showcase .nav').append('<a href="#">' + page + '</a>');
      }
    }
    $('#showcase').catslider();
  }
  $('.dropdownmenu a.btn').click(function(e) {
    var menu;
    e.preventDefault();
    e.stopPropagation();
    menu = $(this).closest('.dropdownmenu');
    if (menu.hasClass('open')) {
      return menu.removeClass('open');
    } else {
      return menu.addClass('open');
    }
  });
  $(document).click(function(e) {
    return $('.dropdownmenu').removeClass('open');
  });
  $('.page_nav.is_pager').find('li:not(.dropdown)').find('a').click(function(e) {
    var index;
    e.preventDefault();
    $(this).parent().siblings('li').removeClass('active');
    $(this).parent().addClass('active');
    index = $(this).parent().index();
    children = $('.pages').children();
    return children.filter(':visible').fadeOut('fast', function() {
      return children.eq(index).fadeIn('fast');
    });
  });
  $('#product_details .cc .image').delay(500).animate({
    right: "+=50",
    opacity: 1
  }, 200, function() {
    return $('#product_details .cc .title').animate({
      left: "-=50",
      opacity: 1
    }, 200);
  });
  $('#product_details .cc').hover(function() {
    return $(this).find('.hover').removeClass('hidden');
  }, function() {
    return $(this).find('.hover').addClass('hidden');
  });
  return $("#features").panzoom();
});