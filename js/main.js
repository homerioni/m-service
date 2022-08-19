'use strict'

$(document).ready(function () {

    // Маски для input
    $('.mask-phone').mask('+7 999 - 999 - 99 - 99');

    // Burger menu
    $('.header__burger-btn').click(function () {
        $('body').addClass('lock');
        $('.header__burger-menu').addClass('active');
    });
    $('.header__burger-close').click(function () {
        $('body').removeClass('lock');
        $('.header__burger-menu').removeClass('active');
    });

});