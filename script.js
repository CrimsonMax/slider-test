$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: true,
    adaptiveHeight: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 300,
    easing: 'linear',
    infinite: true,
    initialSlide: 0,
    autoplay: false,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    draggable: true,
    swipe: true,
    touchThreshold: 5,
    touchMove: true,
    waitForAnimate: true,
    centerMode: false,
    variableWidth: true,
    rows: 1,
    slidesPerRow: 1,
    vertical: false,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          dots: false,
          arrows: true,
        }
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
    ],
    mobileFirst: true,
  })
});