$(document).ready(function () {


/////////////////////карта /////////////////////
    showMap(document.getElementById("map"), 49.568583, 34.585416);

    function showMap(mapElement, lat, lon) {
        var center = new google.maps.LatLng(lat, lon);

        var marker = new google.maps.Marker({
            position: center,
            animation: google.maps.Animation.BOUNCE,
            icon: {
                url:"img/favicon.png",
                scaledSize: new google.maps.Size(64, 64)
            }

        });

        var mapProp= {
            center: center,
            zoom: 16,
            disableDefaultUI: true,
            mapTypeId: 'terrain'
        };
        var map =new google.maps.Map(mapElement, mapProp);
        marker.setMap(map);
    }
/////////////////////////ручной слайдер///////////////////////////

    $('.scrol').click(function () {
        $('.slide').hide().css('display', 'inline-block')
        $('.slide_two').show().css('display', 'none')
        $('.slide_three').hide().css('display', 'none')

    })
    $('.scrol_two').click(function () {
        $('.slide').show().css('display', 'none')
        $('.slide_two').hide().css('display', 'inline-block')
        $('.slide_three').hide().css('display', 'none')
    })

    $('.scrol_three').click(function () {
        $('.slide_three').show().css('display', 'inline-block')
        $('.slide').hide().css('display', 'none')
        $('.slide_two').hide().css('display', 'none')
    })

   ///////////////////////слик-слайдер//////////////////////////////////

    $('.slider').slick({
        arrows: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: true,
        dotsClass: "dots",
    })






///////////////////изотоп//////////////////////

    var $isotopeGrid = $('.portfolio-images');

    $isotopeGrid.isotope({
        itemSelector: '.img-wrapper',
        percentPosition: true,
    });


    $('.conteiner_portfolio .filters button').click(function() {
        var filterValue = $(this).data('filter');

        $isotopeGrid.isotope({
            filter: filterValue
        });
    });

 //////////////////плавный слайд///////////////////////
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1400);
        return false;
    });

});