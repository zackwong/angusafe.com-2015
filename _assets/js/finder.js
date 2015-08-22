jQuery(function($) {
  var update_filter;
  $('#finder').isotope({
    itemSelector: '.item'
  });
  update_filter = function() {
    var filter;
    filter = '';
    $('#finder-filter .panel').each(function(a, b) {
      var active;
      active = $(b).find('a.active:first');
      filter += active.data('filter');
      return $(b).find('span.value').text(active.text());
    });
    return $('#finder').isotope({
      filter: filter
    });
  };
  return $('#finder-filter a').click(function(e) {
    e.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
    return update_filter();
  });
});