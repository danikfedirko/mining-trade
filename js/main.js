//menu toggle
$('.navbar-open').on('click',function() {
  var scroll = new SmoothScroll();
  var anchor = document.querySelector( '#main' );
  scroll.animateScroll(anchor);
  setTimeout(function() {
      $('.menu').show();
  },500)
})
$('.nav-close').click(function() {
  $('.menu').fadeOut();
})

//for menu reveal on top of the screen and become fixed
var height = $( window ).height();
var width = $( window ).width();
$('.reveal-top').attr('data-wow-offset',height-70)


var offset = $('.menu-bar').offset();
$(window).scroll(function(){
   //$('#mine').text($(document).scrollTop());
  $('.menu-bar').addClass('fixed-nav');
  if($(document).scrollTop() < height){
         $('.menu-bar').removeClass('fixed-nav');
  }
});
