$(document).ready(function(){

    // Slider
    $('.slider__inner').slick({
        autoplay: true,
        autoSpeed: 1000,
        dots: true,
        arrows: false,
        pauseOnDotsHover: true,
        speed: 1000,
        cssEase: 'linear',

        responsive: [
        {
            breakpoint: 720,
            settings: {
                dots: false,
                arrows: true,  
            }
        },
    ]
    });

    // Fixed Header
    var header = $("#header"),     
		introH = $("#intro").innerHeight(), 
		scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset); 

	$(window).on("scroll", function() { 
		scrollOffset = $(this).scrollTop();  

		checkScroll(scrollOffset);  
	});

	function checkScroll(scrollOffset) {
		if( scrollOffset >= introH ) {  
			header.addClass("fixed");   
		} else {
			header.removeClass("fixed");  
		}
    };
    
    // Burger menu
    $("#nav_toggle").on("click", function(event) { 
		event.preventDefault();   

		$(this).toggleClass("active"); 
	 	$("nav").toggleClass("active");   
	});
  });