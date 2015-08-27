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
  $("#casesz .case_item").each(function(a, b) {
    return $(b).magnificPopup({
      items: {
        src: '<div style="text-align: center;"><iframe class="vid" height=400 width=720 src="' + $(b).find('a').data('iframe') + '" frameborder=0 allowfullscreen></iframe></div>'
      },
      type: "inline"
    });
  });
  $('.social-media, .clicktozoom').magnificPopup({
    type: "image",
    zoom: {
      enabled: true,
      duration: 300,
      opener: function(element) {
        return element;
      }
    }
  });
  return $('.openinline').magnificPopup({
    type: 'inline'
  });
});