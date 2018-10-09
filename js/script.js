$(document).on("click",".header-content__item a , .main-frst__buy a , .header-content__img a ,.card-wrapper a" , function (event) {
  event.preventDefault();
  var id  = $(this).attr('href'),
        top = $(id).offset().top + 10;
        $('body,html').animate({scrollTop: top}, 500);
});
$('.switch').click(function(){
  $('.main-thrd__house').toggleClass('active');
  $('.hint-btn').removeClass('active');
});

$('.hint-btn').click(function(){
  $(this).toggleClass('active');
  $('.hint-btn').not(this).removeClass('active');
});

$(window).on("scroll", function(){
  dogParEffect();
});

dogParEffect();

function dogParEffect(){
  var scrollHeight = $(this).scrollTop();
  
  var coeficientImg = 0.15;
  var coeficientBg = 0.08;
  
  var imgTop = scrollHeight*coeficientImg*(1);
  var resultBgTop = scrollHeight*coeficientBg*(-1);

  if (scrollHeight < 600) {
    $('.main-frst__house').css("top",resultBgTop);
    $('.dog-house-img').css("margin-top",imgTop);
  } 
}

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
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 960,
      settings: {
        dots: true,
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

$(document).on("swipeleft",'.sixth-slider__image', function(event){
  $('.sixth-slider__nav .slick-next').click();
});
$(document).on("swiperight",'.sixth-slider__image', function(event){
  $('.sixth-slider__nav .slick-prev').click();
});

$(document).on('click', '.header-content__list.active a', function(){
  $('.header-content__list ,.hamburger').removeClass('active');
});
