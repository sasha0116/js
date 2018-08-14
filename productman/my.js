$(document).ready(function () {

    $('.scroll').click(function () {
        $('.slide').hide().css('display', 'inline-block')
        $('.slide_two').show().css('display', 'none')
        $('.slide_three').hide().css('display', 'none')

    })
    $('.scroll_two').click(function () {
        $('.slide').show().css('display', 'none')
        $('.slide_two').hide().css('display', 'inline-block')
        $('.slide_three').hide().css('display', 'none')
    })

    $('.scroll_three').click(function () {
        $('.slide_three').show().css('display', 'inline-block')
        $('.slide').hide().css('display', 'none')
        $('.slide_two').hide().css('display', 'none')
    })

    $('.picture__2').slick({
        arrows:false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500

    });


})