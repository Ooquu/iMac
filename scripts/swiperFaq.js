document.addEventListener("DOMContentLoaded", () => {
    var swiper = new Swiper(".faqSwiper", {
        slidesPerView: 4,
        grid: {
            rows: 1,
        },
        spaceBetween: 24,
        navigation: {
            nextEl: '.faq-slider__next',
            prevEl: '.faq-slider__prev',
        },
        breakpoints: {
            1287: {
                slidesPerView: 4,
            },
            1023: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            600: {
                slidesPerView: 2,
            },
            100: {
                slidesPerView: 1,
            },
        },
    });
});