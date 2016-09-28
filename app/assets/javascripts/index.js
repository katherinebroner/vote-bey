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
  $(window).scroll(function(){
    if($(this).scrollTop() > $(".navbar").scrollTop()){
      $(".navbar").css('background',  'rgb(117, 173, 204)');
    } else {
      $(".navbar").css('background', 'rgba(255, 255, 255, 0.6)');
    }
  });

  $(".single-img").mouseover(function(){
    $(this).children('.image').css('opacity', 0.2);
    $(this).children('p').removeClass("hidden");
  });
  $(".single-img").mouseleave(function(){
    $(this).children('.image').css('opacity', '');
    $(this).children('p').addClass("hidden");
  });
});

