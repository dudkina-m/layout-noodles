$(function () {
  // modalDisplay();
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

function dropdownShow() {
    $(document).ready(function () {
        $('.dropdown').each(function () {
            var $dropdown = $(this);

            $('.dropdown__selected', $dropdown).click(function (e) {
                e.preventDefault();
                $div = $(".dropdown__list", $dropdown);
                $div.toggle();
                $(".dropdown__list").not($div).hide();
                $('.dropdown__item', $dropdown).click(function () {
                    $(".dropdown__list").not($div).hide();
                    $('.dropdown__input', $dropdown).val($(this).text());
                });
                return false;
            });
        });
        $('html').click(function () {
            $(".dropdown__list").hide();
        });
    });
}

function footerToTopAction() {
    $(document).ready(function () {
        $('.footer__to-top').click(function () {
            $('html, body').animate({scrollTop: '0px'}, 300);
        });
    });
}

function tabsLogic() {
    $('.case__content').eq(1).hide();

    $('.case__wrapper').each(function () {

        $(this).find('.case__tab').click(function () {

            var index = $(this).index();

            $('.case__tab').removeClass('active');
            $(this).addClass('active');

            $('.case__content').hide();
            $('.case__content').eq(index).show();
        });
    });
}

function paginationLogic() {
    $('.pagination__page').each(function () {
        $(this).click(function () {
            $('.pagination__page').removeClass('active');
            $(this).addClass('active');
        })
    });

    $('.pagination__next').click(function () {
        var current = 0;
        $('.pagination__page').each(function (e) {
            if ($(this).hasClass('active')) {
                current = e;
            }
        });

        if (current !== $('.pagination__page').length - 1) {
            $('.pagination__page').removeClass('active');
            $('.pagination__page').eq(current + 1).addClass('active');
        } else $('.pagination__next').attr('disabled');
    })

    $('.pagination__prev').click(function () {
        var current = 0;
        $('.pagination__page').each(function (e) {
            if ($(this).hasClass('active')) {
                current = e;
            }
        });

        if (current !== 0) {
            $('.pagination__page').removeClass('active');
            $('.pagination__page').eq(current - 1).addClass('active');
        } else $('.pagination__prev').attr('disabled');
    })
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

function toggleRadio() {

}
