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

    // slick product detail
    $(".product-detail-img").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: '.product-detail-thumbnail',
    });

    $(".product-detail-thumbnail").slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.product-detail-img',
        prevArrow: '<button class="chevron-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button class="chevron-next"><i class="fas fa-chevron-right"></i></button>',
        centerMode: true,
        centerPadding: 0,
        focusOnSelect: true
    });

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

    $(window).scroll(function () {
        const headerHeight = $('.header').height();
        if ($(this).scrollTop() > headerHeight) {
            $('.header').addClass('sticky')
        }
        else {
            $('.header').removeClass('sticky')
        }
    })

    // Animate the scroll to top
    $('.go-top').click(function (event) {
        event.preventDefault();

        $('html, body').animate({ scrollTop: 0 }, 300);
    })

    // quantity product
    $('.plus').click(function add() {
        var quantity = $(".in-num");
        var count = quantity.val();

        count++;
        $(".minus").attr("disabled", !count);
        quantity.val(count);
    });
    $(".minus").attr("disabled", !$(".in-num").val());

    $('.minus').click(function minusButton() {
        var quantity = $(".in-num");
        var count = quantity.val();
        if (count >= 2) {
            count--;
            quantity.val(count);
        } else {
            $(".minus").attr("disabled", true);
        }
    })
    $('.in-num').on('change keyup focus', function () {
        var removeLetters = $(this).val().replace(/[^0-9]/g, '');
        $(this).val(removeLetters);
    });
})