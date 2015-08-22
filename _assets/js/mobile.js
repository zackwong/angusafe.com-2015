jQuery(function($) {
  $('.page_nav li.active a').bind('click', function(e) {
    var dropdown;
    dropdown = $(this).closest('.page_nav').find('.dropdown');
    if (dropdown.is(':visible')) {
      e.preventDefault();
      return dropdown.find('a').trigger('click');
    }
  });
  return $('.page_nav li.dropdown a').bind('click', function(e) {
    var that;
    e.preventDefault();
    that = $(this);
    if (that.find('.triangle').hasClass('down')) {
      that.parent('li').siblings().andSelf().addClass('dropshow');
      that.find('.triangle').removeClass('down').addClass('up');
      return $('html, body').animate({
        scrollTop: 100
      }, 200);
    } else {
      that.parent('li').siblings().andSelf().removeClass('dropshow');
      return that.find('.triangle').removeClass('up').addClass('down');
    }
  });
});