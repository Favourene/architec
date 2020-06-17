window.onload = function(){
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
      
      0: {
        slidesPerView: 1,
        spaceBetween: 10
    },
    540: {
      slidesPerView: 3,
      spaceBetween: 15
  },
    960: {
      slidesPerView: 3,
      spaceBetween: 40
  },
  },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
  });
  AOS.init();
}