$(document).foundation();

// Hike. hide and show
$(window).scroll(function() {
    if ($(this).scrollTop()>0)
     {
        $('.left-text').fadeOut();
     }
    else
     {
      $('.left-text').fadeIn();
     }
 });