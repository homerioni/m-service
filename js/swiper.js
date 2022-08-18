// Пересчет rem в px для swiper
const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/375) * (0.1 * $(window).width()) * rem;
    }
}

const mainIntroSlider = new Swiper('.main-intro__slider', {
    direction: 'horizontal',
    slidesPerView: 1,
    spaceBetween: rem(5),

    pagination: {
        el: '.main-intro .slider-nav__progressbar',
        type: 'progressbar',
    },

    navigation: {
        nextEl: '.main-intro .next',
        prevEl: '.main-intro .prev',
    },

    autoplay: {
        delay: 10000,
        disableOnInteraction: true,
    },

    on: {
        afterInit: function () {
            let activeIndex = this.activeIndex + 1,
                totalSlides = $('.main-intro__slide').length;
            if (activeIndex < 10) {
                activeIndex = '0' + String(activeIndex);
            }
            if (totalSlides < 10) {
                totalSlides = '0' + String(totalSlides);
            }
            $('.main-intro .slider-nav__pagination').html(activeIndex + '/' + totalSlides);
        },
        slideChange: function () {
            let activeIndex = this.activeIndex + 1,
                totalSlides = $('.main-intro__slide').length;
            if (activeIndex < 10) {
                activeIndex = '0' + String(activeIndex);
            }
            if (totalSlides < 10) {
                totalSlides = '0' + String(totalSlides);
            }
            $('.main-intro .slider-nav__pagination').html(activeIndex + '/' + totalSlides);
        },
    },
});

const servicesSlider = new Swiper('.services__slider', {
    direction: 'horizontal',

    pagination: {
        el: '.services .slider-nav__progressbar',
        type: 'progressbar',
    },

    navigation: {
        nextEl: '.services .next',
        prevEl: '.services .prev',
    },

    autoplay: {
        delay: 8000,
        disableOnInteraction: true,
    },

    breakpoints: {
        768: {
            slidesPerView: 3,
            spaceBetween: rem(4),
        },
        0: {
            slidesPerView: 1.1,
            spaceBetween: rem(2),
        },
    },

    on: {
        afterInit: function () {
            let activeIndex = this.activeIndex + 1,
                totalSlides = $(window).width() > 768 ? $('.services__slide').length - 2 : $('.services__slide').length;
            if (activeIndex < 10) {
                activeIndex = '0' + String(activeIndex);
            }
            if (totalSlides < 10) {
                totalSlides = '0' + String(totalSlides);
            }
            $('.services .slider-nav__pagination').html(activeIndex + '/' + totalSlides);
        },
        slideChange: function () {
            let activeIndex = this.activeIndex + 1,
                totalSlides = $(window).width() > 768 ? $('.services__slide').length - 2 : $('.services__slide').length;
            if (activeIndex < 10) {
                activeIndex = '0' + String(activeIndex);
            }
            if (totalSlides < 10) {
                totalSlides = '0' + String(totalSlides);
            }
            $('.services .slider-nav__pagination').html(activeIndex + '/' + totalSlides);
        },
    },
});