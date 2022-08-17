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
        el: '.main-intro__progressbar',
        type: 'progressbar',
    },

    navigation: {
        nextEl: '.main-intro .next',
        prevEl: '.main-intro .prev',
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