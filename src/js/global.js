$(function () {
    modalDisplay();
    if ($("#map").length)
        initMap();

    if ($('.carousel').length) initSlick();
    if ($('.stock__slider').length) initSlickMupltiple();
    if ($('.popular__content').length) initPopularSlick();
});

function initMap() {
    ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init(){
        myMap = new ymaps.Map("map", {
            center: [55.76, 37.64],
            zoom: 7
        });
    }

    myPlacemark = new ymaps.Placemark([55.76, 37.64], {
        hintContent: 'Москва!',
        balloonContent: 'Столица России'
    });

    myMap.geoObjects.add(myPlacemark);
}

function initSlick() {
    $(".carousel").slick({
        autoplay: true,
        autoplaySpeed: 2000
    });
}

function initPopularSlick() {
    $(".popular__content").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4
    });
}

function initSlickMupltiple() {
    $('.stock__slider_recommended').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: $("button.recommended.icon_arrow-right"),
        prevArrow: $("button.recommended.icon_arrow-left")
    });

    $('.stock__slider_sale').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: $("button.sale.icon_arrow-right"),
        prevArrow: $("button.sale.icon_arrow-left")
    });
}

function modalDisplay() {

    $('[data-popup]').each(function () {

        $(this).click(function (e) {
            e.preventDefault();
            var id = $(this).attr('data-popup');
            $('.popup').hide();
            $('#' + id).show();
            $('.popup__container').fadeIn(300);
        })
    });

    $('.popup__close').click(function () {
        $('.popup__container').fadeOut(300);
    });

    $('.popup__container').click(function (e) {
        if (!$(e.target).closest('.popup').length) {
            $('.popup__container').fadeOut();
        }
    });
}
