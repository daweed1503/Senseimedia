const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  mousewheel: true,
  initialSlide: 0,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  autoplay: {
    delay: 4000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  breakpoints: {
    620: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    },
    200: {
      slidesPerView: 1,
      // centeredSlides: true,
    },
  },
});

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("header__btn").addEventListener("click", function()
  {
      document.querySelector(".header__btn").classList.toggle("header__btn--active")
      document.querySelector(".menu").classList.toggle("menu--active")
  })
})

window.addEventListener('keydown', (e) => {
  if(e.key === "Escape"){
    document.querySelector(".header__btn").classList.remove("header__btn--active")
    document.querySelector(".menu").classList.remove("menu--active")
  }
});

document.querySelector(".menu").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.querySelector(".header__btn").addEventListener('click', event => {
  event._isClickWithInMenu = true;
});
document.body.addEventListener('click', event =>{
  if (event._isClickWithInMenu) return;
  document.querySelector(".menu").classList.remove("menu--active")
  document.querySelector(".header__btn").classList.remove("header__btn--active")
});

$('.menu a').on('click', function(){
  document.querySelector(".menu").classList.remove("menu--active")
  document.querySelector(".header__btn").classList.remove("header__btn--active")
});

$(document).ready(function() {
  $('a[href^="#"]').click(function(){
  const _href = $(this).attr('href');
  $('html,body').animate({
  scrollTop: $(_href).offset().top - 50});
  return false;
  });
  });

