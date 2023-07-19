$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 300,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/slides/chevron left solid.png"></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icons/slides/chevron right solid.png"</button>',
        responsive:
        [
            {
                breakpoint: 992,
                settings: {
                dots: true,
                arrows:false
                }
            }
        ]
      });
  });