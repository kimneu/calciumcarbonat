$(document).ready(function() {

    $('#about-container-l').hide();
    $('#about-container-s').hide();

    for (i = 0; i < 24; i++) {
        $('#phase0' + i).hide();
        $('#phase0' + i).append('<div class="close"></div>');
    }

    $('#welcome').click(function() {
        $(this).fadeOut(500);
    });
    setTimeout(function() {
        $('#welcome').fadeOut(800);
    }, 1000);


    $('#close-welcome').click(function() {
        $('#welcome').hide();
        $('#welcome2').hide();
        $('#videobg').trigger('pause');
    });

    $('#index00').click(function() {
        $('#phase00').show();
        $('#main').toggle();
    });

    $('#index01').click(function() {
        $('#phase01').show();
        $('#main').toggle();
    });

    $('#index02').click(function() {
        $('#phase02').show();
        $('#main').toggle();
    });

    $('#index03').click(function() {
        $('#phase03').show();
        $('#main').toggle();
    });
    $('#index04').click(function() {
        $('#phase04').show();
        $('#main').toggle();
    });
    $('#index05').click(function() {
        $('#phase05').show();
        $('#main').toggle();
    });

    $('#about-link-l').click(function() {
        $('#about-container-l').show();
        $('.secondaries').hide();
        $('#main').hide();
    });

    $('#close-about-l').click(function() {
        $('#about-container-l').hide();
        $('#main').show();
    });

    $('#about-link-s').click(function() {
        $('#about-container-s').show();
        $('#mobile').hide();
    });

    $('#close-about-s').click(function() {
        $('#about-container-s').hide();
        $('#mobile').show();
    });

    $('.close').click(function() {
        $('#phase00').hide();
        $('#phase01').hide();
        $('#phase02').hide();
        $('#phase03').hide();
        $('#phase04').hide();
        $('#phase05').hide();
        $('#main').toggle();
    });

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
    $(".simplebar-down").click(function () {
        $('.simplebar-scroll-content').scrollTo( '+=50px', 500 );
    });

    $(".simplebar-up").click(function () {
        $('.simplebar-scroll-content').scrollTo( '-=50px', 500 );
    });
});
