$(function () {
    modalDisplay();
    toggleSidemenu();
    toggleNavmenu();
    toggleCategories();
    toggleContacts();
    tabsLogic();
    changeDeliveryType();

    if ($("#map").length)
        initMap();

    if ($('.carousel').length) initSlick();
    if ($('.stock__slider').length) initSlickMupltiple();
    if ($('.popular__content').length) initPopularSlick();
});

function toggleSidemenu() {
    $('button.toggle-sidemenu').each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $('.side-menu').toggleClass('open');
            if ($(".side-menu").hasClass('open')) {
                $('button.toggle-sidemenu').text("Скрыть меню");
            } else {
                $('button.toggle-sidemenu').text("Показать меню");
            }
        })
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

function toggleNavmenu() {
    $('button.hamb__top-menu').each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $('.nav-menu').toggleClass('open');
        })
    });
    $(document).mouseup(function(e) {
        var $target = $(e.target);
        if ($target.closest(".nav-menu").length == 0 && $target.closest("button.hamb__top-menu").length == 0) {
            e.stopPropagation();
            $(".nav-menu").removeClass("open");
        }
    });
}

function toggleCategories() {
    $('button.hamb__cat-menu').each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $('.menu').toggleClass('open');
        })
    });
    $(document).mouseup(function(e) {
        var $target = $(e.target);
        if ($target.closest(".menu").length == 0 && $target.closest("button.hamb__cat-menu").length == 0) {
            e.stopPropagation();
            $(".menu").removeClass("open");
        }
    });
}

function toggleContacts() {
    $('.mobile-header__button.icon_phone-call').each(function () {
        $(this).click(function (e) {
            e.preventDefault();
            $('.contacts__container').toggleClass("open");
        })
    });
}

function initMap() {
    ymaps.ready(init);
    var myMap,
        myPlacemark;

    function init() {
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
        autoplaySpeed: 2000,
        nextArrow: $(".slider__next"),
        prevArrow: $(".slider__prev"),
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: false
                }
            }
        ]
    });
}

function initPopularSlick() {
    $(".popular__content").slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
            breakpoint: 1250,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
}

function initSlickMupltiple() {
    $('.stock__slider_recommended').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: $("button.recommended.icon_arrow-right"),
        prevArrow: $("button.recommended.icon_arrow-left"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.stock__slider_sale').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: $("button.sale.icon_arrow-right"),
        prevArrow: $("button.sale.icon_arrow-left"),
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
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

function changeDeliveryType() {
    $('.radio__group').each(function () {
        $('.address-form').hide();

        $(this).find('#self').click(function () {
            $('.address-form__dropdown').show();
            $('.address-form').hide();
        });

        $(this).find('#courier').click(function () {
            $('.address-form__dropdown').hide();
            $('.address-form').show();
        });
    });
}