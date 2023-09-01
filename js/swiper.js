
let imageWidth = document.querySelector('.swiper-slide img').clientWidth;
let windowWidth = $(window).width();
let slidesPerViewCount = Math.round(windowWidth/imageWidth);
console.log(imageWidth, windowWidth, slidesPerViewCount)

const slider = document.querySelector('.sample-slider');

let swiper = new Swiper(slider, {
    slidesPerView: "auto",
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      spaceBetween:  15,   

      autoplay: {                         //autoplay
        delay: 2000,  
    },   

  });

