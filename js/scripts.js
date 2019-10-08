var $ = jQuery;

$(document).ready(function () {
    $('.top-predl').owlCarousel({
        items: 6,
        smartSpeed: 800,
        margin: 30,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: false,
        autoplay: true,
    });
    $('.product-carousel').owlCarousel({
        items: 6,
        smartSpeed: 800,
        margin: 30,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: false,
        autoplay: true,

    });

});






