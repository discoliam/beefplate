// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults
var disqus_developer = 1;
//window.disqus_no_style = true;
//$.getScript("http://kenisia.disqus.com/embed.js");
//


// Cufon that font
Cufon.replace('', {
  hover: 'true',
  fontFamily: ''
});


// SWFobject
var flashvars = {};
var params = {};
var attributes = {};
swfobject.embedSWF("/flash/", "flash-anni", "420", "90", "9.0.0", flashvars, params, attributes);



// Use jQuery
$(document).ready(function () {

  // Slide show
  $(function(){
    $('.hero-panel').slides({
    preload: true,
    preloadImage: '/images/slides/loading.gif',
    effect:'slide',
    play: 5000,
    pause: 2500,
    hoverPause: false,
    generatePagination: false,
    slideSpeed: 800
    });
    $('.js-needed').hide();
  });

  // Adding Body Images
  $("#body a.lightbox").each(function(){
    $(this).append('<span class="overlay">&nbsp;</span>');
   });
  // $("#body a").each(function(){
  //   image = $(this);

  //   image.wrap('<a class="lightbox image-wrap" target="_blank" title="'+ image.attr('title') +'" href="'+   image.attr('longdesc') +'" />');
  //   image.after('<span class="zoom">&nbsp;</span>');
  // });


  // Lightbox
  $('').fancybox({
    'padding'        : 10,
    'autoScale'      : true,
    'transitionIn'    : 'elastic',
    'transitionOut'    : 'elastic',
    'title'          : false,
    'width'        : 680,
    'height'        : 495,
    'centerOnScroll'   : true,
    'titlePosition' : 'over'
  });

  // Carousel for Wide Slots (Gallery Only)
  $(".component.gallery.single.wide .carousel").each(function(index, gallery) {
    gallery = $(gallery);
    if (gallery.find('li').length > 3) {
            
      gallery.parents(".carousel-wrap").css("margin","10px 70px 0 50px");
      gallery.before("<a class='carousel-back'>Backward</a>");
      gallery.after("<a class='carousel-forward'>Forward</a>");

      gallery.jCarouselLite({
        btnNext: gallery.next(".carousel-forward"),
        btnPrev: gallery.prev(".carousel-back"),
        visible: 3
      });
    }
  });

  // Flash messgaes
  $('#flash').delay(4000).slideUp(400);

  // Styling fix's

  //   IE Fix's

});