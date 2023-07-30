var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    slidesPerGroup:3,
    loop: true,
    spaceBetween: 10,
    // autoplay: {
    //     delay: 5500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        375: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        1024: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
    },
});
