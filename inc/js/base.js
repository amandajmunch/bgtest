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
		},
		bindEvents:function(){
			$(".carousel-next").on("click",function(){
				Carousel.next();
			});
			$(".carousel-prev").on("click",function(){
				Carousel.previous();
			});
      $(document).keydown(function(e){
        if (e.keyCode === 37){
          Carousel.previous();
      }});
      $(document).keydown(function(e){
        if (e.keyCode === 39){
          Carousel.next();
      }});
		},
		next:function(){
			//ADD NEXT CODE HERE
      // console.log('clicked next');
        $('.carousel-cells').animate({
            left: - sliderWidth
        }, 500,
          function () {
            $('article:first-child').appendTo('.carousel-cells');
            $('article').css('left', '');
        });
		},
		previous:function(){

			//ADD PREVIOUS CODE HERE
      // console.log('clicked previous');
       $('.carousel-cells').animate({
            left: + sliderWidth
         }, 500, function () {
            $('article:last-child').prependTo('.carousel-cells');
            $('article').css('left', '');
         });
		},
		update:function(){
			//ADD UPDATE CODE HERE
		}
	}
	$(function(){
		Carousel.init();
	})
})(window);






