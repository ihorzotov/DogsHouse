$('.switch').click(function(){
  $('.main-thrd__house').toggleClass('active');
  $('.hint-btn').removeClass('active');
});

$('.hint-btn').click(function(){
  $(this).toggleClass('active');
  $('.hint-btn').not(this).removeClass('active');
});

$('.slider-container').slick({
    dots: true,
    arrows:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite:false,
    autoplay: true,
    autoplaySpeed: 1000,
    variableWidth:true,
    appendDots:$('.slider-controllers'),
});

$('.main-fifth__slider').slick({
    dots: true,
    arrows:true,
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite:true,
});

$('.sixth-slider__nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows:true,
  centerMode: true,
  vertical: true,
  focusOnSelect: true,
});


$(document).ready(function() {
  var currentSrc = $('.sixth-slider__nav .slick-current').attr('src');
  $('.sixth-slider__active').attr('src',currentSrc);
});

$('.sixth-slider__nav button,.sixth-slider__nav img').click(function(){
  var currentSrc = $('.sixth-slider__nav .slick-current').attr('src');
  $('.sixth-slider__active').attr('src',currentSrc);
  console.log(currentSrc);
});