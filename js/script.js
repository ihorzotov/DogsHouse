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
      responsive: [
        {
          breakpoint: 960,
          settings: {
            arrows:false,
            appendDots:$('.main-fifth__dots'),
          }
        },
      ],
});

$('.sixth-slider__nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows:true,
  centerMode: true,
  vertical: true,
  speed: 250,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        dots: true,
        infinite:false,
        arrows:false,
        vertical: false,
        centerMode: false,
        appendDots:$('.dots-mobile'),
      }
    },
  ],
});

$('.main-ninth__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  dots: true,
  arrows:true,
  infinite:true,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        arrows:false,
        appendDots:$('.main-ninth__dots'),
      }
    },
  ],
});


$('.sixth-slider__nav').on('afterChange', function(event, slick, currentSlide, nextSlide){
  var currentSrc = $('.sixth-slider__nav .slick-current').attr('src');
  $('.sixth-slider__current .active').removeClass('active').siblings('.sixth-slider__image').addClass('active').attr('src',currentSrc);
});

$(document).ready(function() {
  var currentSrc = $('.sixth-slider__nav .slick-current').attr('src');
  $('.sixth-slider__image').attr('src',currentSrc);
});

$('.header-content .dogs-btn__smpl').click(function(){
  $('.header-modal , body , html').addClass('active');
});

$('.main-eighth__form .close , .form-thx q').click(function(){
  $(this).parents('.header-modal').removeClass('active');
  $('.form-thx, body , html').removeClass('active');
});

$('.hamburger').click(function(){
  $(this).toggleClass('active');
  $('.header-content__list').toggleClass('active');
});