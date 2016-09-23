$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(document).ready(function(){
  $(".single-img").mouseover(function(){
    $(this).css('opacity', 0.2);
  });
  $(".single-img").mouseleave(function(){
    $(this).css('opacity', '');
  });
});

