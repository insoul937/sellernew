var $ = jQuery;

$(document).ready(function () {
    $('.see-ul').on('click',function () {
       $(this).parent().find('.ls-hidden').slideToggle();
       return false;
    });
    $('.top-predl').owlCarousel({
        items: 6,
        smartSpeed: 800,
        margin: 30,
        nav: true,
        navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>','<i class="fa fa-angle-right" aria-hidden="true"></i>'],
        dots: false,
        autoplay: true,
    });
    $('.top-slider').owlCarousel({
        items: 1,
        smartSpeed: 800,
        dots: true,
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






