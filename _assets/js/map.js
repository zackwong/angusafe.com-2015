if (Modernizr.cssanimations) {
    $(".pageTop").css({opacity: 0}).each(function(i){
      var val=i*200+'ms';
      $(this).css({
        '-webkit-animation-delay':val,
        '-moz-animation-delay':val,
        '-o-animation-delay':val,
        'animation-delay':val
      });
    });
    $(function(){
      $(".pageTop").addClass("play");
    });
  }