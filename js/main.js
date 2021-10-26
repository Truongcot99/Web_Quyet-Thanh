$(document).ready(function () {
    $('.slides').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
    })

    $('.category-product-list').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });
    $('.testimonial-content').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="arrow-prev"><i class="fas fa-arrow-left"></i></button>',
        nextArrow: '<button class="arrow-next"><i class="fas fa-arrow-right"></i></button>',
    });

    $('.partner-list').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    })

    $('.header-toggle').click(function () {
        $('.header').toggleClass('active')
        $('body').toggleClass('noscroll')
    })

    $('.navbar-btn--mobile').click(function () {
        $('.navbar').toggleClass('active')
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.go-top').fadeIn(200);
        } else {
            $('.go-top').fadeOut(200);
        }
    });

    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();

        $('html, body').animate({ scrollTop: 0 }, 300);
    })
})