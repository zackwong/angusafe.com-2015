jQuery(function($) {
  $('#case_container').isotope({
    itemSelector: '#casesz .case_item'
  });
  setTimeout((function() {
    $('#case_container').isotope("reLayout");
  }), 3000);
  $('#filters a').click(function(e) {
    var li;
    if ($(this).data('filter')) {
      e.preventDefault();
      li = $(this).parent();
      li.siblings('li').removeClass('active');
      li.addClass('active');
      return $('#case_container').isotope({
        filter: $(this).data('filter')
      });
    }
  });
  return $('.openinline').magnificPopup({
    type: 'inline'
  });
});