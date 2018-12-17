$(document).ready(function() {

    $('body:not(#index)').append('<a href="index.html" class="close"></a>');

    $('body').append('<footer><div class="menu"><a href="about.html" class="about-link"><p>about</p></a><p class="contact"><br><a href="mailto:info@archiv-kalk.ch" target="_blank">info@archiv-kalk.ch</a></p></div></footer>');


    $('#welcome').click(function() {
        $(this).fadeOut(500);
    });
    setTimeout(function() {
        $('#welcome').fadeOut(800);
    }, 1000);

    var slider = $('.my-slider').unslider();

    // store alt atrribute of active image as index and set as text of gallery active before slider moves (for starting image)
    var i = $('.unslider-active img').attr('alt');
    $('.gallery-active').text(i);

    // repeat index addition on slider change
    slider.on('unslider.change', function(event, index, slide) {
        var i = $('.unslider-active img').attr('alt');
        $('.gallery-active').text(i);
    });

    // Slider prev und nex divs anhängen, die sind jeweils 50% bildschirmfüllend
    $('.unslider').append('<div class="prev"></div><div class="next"></div>');

    $(".prev").click(function() {
        slider.unslider('prev');
    });
    $(".next").click(function() {
        slider.unslider('next');
    });

    /* ScrollBar Plugin */
    $('.simplebar-up').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('href').offset().top
        }, 'slow');

    });
    $('#index-wrapper').simplebar({
        autoHide: true
    });
    $('#index-wrapper').simplebar('recalculate');
    $('.simplebar-track').append('<button class="simplebar-up"></button>');
    $('.simplebar-track').append('<button class="simplebar-down"></button>');

    // scroll to plugin jetzt neu drin, mit dem buttons
    $(".simplebar-down").click(function() {
        $('.simplebar-scroll-content').scrollTo('+=50px', 500);
    });

    $(".simplebar-up").click(function() {
        $('.simplebar-scroll-content').scrollTo('-=50px', 500);
    });
});
