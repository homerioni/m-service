ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.812039, 37.456549],
            zoom: 13
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            balloonContent: 'Metrica Service Group<br>' +
                'г. Москва, Полесский проезд, д. 16, стр. 1, офис 431',
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/map-icon.png',
            // Размеры метки.
            iconImageSize: [rem(9.2), rem(10.5)],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [rem(-4), rem(-11)]
        });

    myMap.geoObjects.add(myPlacemark);
    $(window).width() > 768 ? myMap.setCenter([55.812039, 37.403845]) : myMap.setCenter([55.800000, 37.456549]);
});