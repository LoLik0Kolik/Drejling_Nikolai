$(document).ready(function(){
    $('.slider').slick({

        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider/next.png"></button>'
        
    });
    $('.slider_news').slick({
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        prevArrow:false,
        nextArrow: false,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000,
      });
      $('.media_slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slider_media/prev.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/slider_media/next.png"></button>'
      });
      $('.exit_buffet_slider_wrapper').slick({
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        centerMode: false,
        variableWidth: true,
        prevArrow:false,
        nextArrow: false,
        slidesToShow: 3,
        autoplay: true,
        autoplaySpeed: 2000
      })
  });