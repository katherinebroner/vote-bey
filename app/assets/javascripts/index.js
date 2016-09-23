$(document).ready(function(){
  $(".single-img").mouseover(function(){
    $(this).css('opacity', 0.2);
  });
  $(".single-img").mouseleave(function(){
    $(this).css('opacity', '');
  });
});

