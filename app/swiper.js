import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'
      
const swiper = new Swiper('.swiper', {

        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        allowTouchMove: false,
        breakpoints: {
            992: {
                slidesPerView: 3,
                allowTouchMove: false,
            },
            0: {
                slidesPerView: 1.1,
                navigation: false,
                allowTouchMove: true,
            }
        }
        
    });