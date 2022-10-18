$(function () {
  $('.product__list').slick({
    dots: false,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><svg class="slick-icon" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.125 16.25L9.27063 15.1044L3.11188 8.9375H19.5V7.3125H3.11188L9.27063 1.14562L8.125 0L0 8.125L8.125 16.25Z"/></svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg class="slick-icon" width="20" height="17" viewBox="0 0 20 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.375 16.25L10.2294 15.1044L16.3881 8.9375H0V7.3125H16.3881L10.2294 1.14562L11.375 0L19.5 8.125L11.375 16.25Z"/></svg></button>',
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  });
});