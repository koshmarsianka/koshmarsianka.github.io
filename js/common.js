var myMap, myMap2, myMap3, myPlacemark, myPlacemark2, myPlacemark3;

function init() {
    myMap = new ymaps.Map("map-office", {
        center: [55.814897, 37.637407],
        zoom: 10
    }), myPlacemark = new ymaps.Placemark([55.814897, 37.637407], {
        hintContent: "Адрес офиса",
        balloonContent: "129085, г. Москва, Проспет Мира, д.105, стр.1, этаж 5, офис 566"
    }), myMap.geoObjects.add(myPlacemark), myMap2 = new ymaps.Map("map-skl-msk", {
        center: [55.781428, 37.691225],
        zoom: 10
    }), myPlacemark2 = new ymaps.Placemark([55.7814287, 37.691225], {
        hintContent: "Адрес склада в Москве",
        balloonContent: "105082, г. Москва, Переведеновский пер., д.21, стр.8а"
    }), myMap2.geoObjects.add(myPlacemark2), myMap3 = new ymaps.Map("map-skl-egor", {
        center: [55.370457, 39.00891],
        zoom: 10
    }), myPlacemark3 = new ymaps.Placemark([55.370457, 39.00891], {
        hintContent: "Адрес склада в Егорьевске",
        balloonContent: "Московская область, г. Егорьевск, ул. Смычка, д.52."
    }), myMap3.geoObjects.add(myPlacemark3), new YMaps.Map(YMaps.jQuery("#map-office")[0]).setCenter(new YMaps.GeoPoint(55.814897, 37.637407), 10), new YMaps.Map(YMaps.jQuery("#map-skl-msk")[0]).setCenter(new YMaps.GeoPoint(55.781428, 37.691225), 10), new YMaps.Map(YMaps.jQuery("#map-skl-egor")[0]).setCenter(new YMaps.GeoPoint(55.370457, 39.00891), 10)
}

$(document).ready(function () {
    $(".main-list").on("click", function () {
        $(this).next().siblings().removeClass("open"), $(this).next().toggleClass("open")
    }), $(".submenu").on("click", function () {
        $(this).addClass("open"), $(this).parent(".sub-list").siblings().find(".submenu").removeClass("open")
    }), $(".submenu__title").on("click", function () {
        $(this).addClass("current"), $(this).parents(".sub-list").siblings().find(".submenu__title").removeClass("current")
    }), $(".main-list a").on("click", function () {
        $(this).toggleClass("current"), $(this).parent(".main-list").siblings().find("a").removeClass("current")
    }), $(".production__slider").slick({
        nextArrow: '<div class="slider__arrow-right"></div>',
        prevArrow: '<div class="slider__arrow-left"></div>'
    }), $("#menu").mmenu({extensions: ["pagedim-black"]}), $("#my-header, #callback").mhead(), $(".menu-close").on("click", function () {
        $(this).parent().removeClass("open")
    }), $(".accept__checkbox").click(function () {
        $("span.checkbox-custom").toggleClass("checked")
    }), $(".formAjax").submit(function (e) {
        return _this = this, !!$(".checkbox-custom").hasClass("checked") || ($(".checkbox-custom").css("border-color", "rgb(255, 0, 0)"), $(".errorAjax").text("Примите соглашение!"), $(".accept__checkbox").click(function () {
            $(".checkbox-custom").css("border-color", "#000"), $(".errorAjax").text("")
        }), !1)
    }), $.validate({borderColorOnError: "#ff0000"}), $("#phone, #kp-phone").mask("+7 (999) 999-99-99", {autoclear: !1}), $.formUtils.addValidator({
        name: "phone",
        validatorFunction: function (e, s, n, t, o) {
            return "string" == typeof e && (!(e.replace(/\D+/g, "").length < 11) && void 0)
        },
        errorMessageKey: "badEvenNumber"
    }), $(".popup-with-form").magnificPopup({type: "inline"}), $(".mask-phone").mask("+7(999)999-99-99"), $(".partners-slider").slick({
        nextArrow: '<div class="slider__arrow-right"></div>',
        prevArrow: '<div class="slider__arrow-left"></div>',
        infinite: !0,
        slidesToShow: 5,
        slidesToScroll: 3,
        responsive: [{breakpoint: 1200, settings: {slidesToShow: 4, slidesToScroll: 3, infinite: !0}}, {
            breakpoint: 992,
            settings: {dots: !0, arrows: !1, slidesToShow: 4, slidesToScroll: 1}
        }, {breakpoint: 480, settings: {dots: !0, arrows: !1, slidesToShow: 1, slidesToScroll: 1}}]
    })
}), $(".more").on("click", function () {
    $(".more").text(""), $(".hidden").slideDown("slow")
}), $(document).mouseup(function (e) {
    var s = $(".main-list");
    s.is(e.target) || 0 !== s.has(e.target).length || s.next(".header__menu-sub").removeClass("open")
}), ymaps.ready(init), (new WOW).init(), $(function () {
    Modernizr.svg || $("img[src*='svg']").attr("src", function () {
        return $(this).attr("src").replace(".svg", ".png")
    }), $("form").submit(function () {
        var e = $(this);
        return $.ajax({type: "POST", url: "mail.php", data: e.serialize()}).done(function () {
            alert("Thank you!"), setTimeout(function () {
                e.trigger("reset")
            }, 1e3)
        }), !1
    });
    try {
        $.browserSelector(), $("html").hasClass("chrome") && $.smoothScroll()
    } catch (e) {
    }
    $("img, a").on("dragstart", function (e) {
        e.preventDefault()
    })
});