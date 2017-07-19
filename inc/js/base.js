"use strict";

(function() {

  var sliderWidth = $('.carousel-cells').width();

	var Carousel = {
		props:{
			current_slide:null,
			total_slides:null
		},
		init:function(){
			//ADD INITIALIZER CODE HERE
      Carousel.bindEvents();
      $('.carousel-cells').css({marginLeft: -sliderWidth});
      $('article:first-child').prependTo('.carousel-cells');
		},
		bindEvents:function(){
			$(".carousel-next").on("click",function(){
				Carousel.next();
			});
			$(".carousel-prev").on("click",function(){
				Carousel.previous();
			});
      $(document).on("keydown", function(e) {
        var key = e.which;
        if (key === 37) Carousel.previous();
        if (key === 39) Carousel.next();
      });
		},
		next:function(){
			//ADD NEXT CODE HERE
      // console.log('clicked next');
        $('.carousel-cells').animate({
            left: "-100%"
        }, 500,
          function () {
            $('article:first-child').appendTo('.carousel-cells');
            $('.carousel-cells').css('left', '0');
            // $('.carousel-cells').addClass('next');
            // $('.carousel-cells').removeClass('next');
        });
		},
		previous:function(){

			//ADD PREVIOUS CODE HERE
      // console.log('clicked previous');
       $('.carousel-cells').animate({
            right:  "-100%"
         }, 500, function () {
            $('article:last-child').prependTo('.carousel-cells');
            $('.carousel-cells').css('right', '0');
            // $('.carousel-cells').addClass('previous');
            // $('.carousel-cells').removeClass('previous');
         });
		},
		update:function(){
			//ADD UPDATE CODE HERE
      // update props
		}
	}
	$(function(){
		Carousel.init();
	})
})(window);






