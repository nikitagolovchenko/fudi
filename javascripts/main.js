$(document).ready(function(){
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
  });