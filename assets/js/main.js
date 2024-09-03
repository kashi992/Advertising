// party volunteer slick start
$('.volunteerSlick').slick({
    speed: 500,
    slidesToShow: 3.3,
    slidesToScroll: 1,
    centerMode: false,
    infinite: false,
    arrows: true,
    dots: false,
    swipe: true,
    swipeToSlide: true,

    nextArrow: '.slick-next',
    prevArrow: '.slick-prev',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2.5,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
}); 
// party volunteer slick end

// Candidate Slick start
$('.CandidateSlick').slick({
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    centerMode: false,
    infinite: true,
    arrows: true,
    dots: false,
    swipe: true,
    swipeToSlide: true,

    nextArrow: '.slick-next1',
    prevArrow: '.slick-prev1',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 5,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 4,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
        }
    }]
}); 
// Candidate Slick start

// testimonial content Slick start
$('.testimonialSlick').slick({
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    infinite: true,
    arrows: true,
    dots: false,
    swipe: true,
    swipeToSlide: true,
    asNavFor: '.testimonialSlickImg',

    nextArrow: '.slick-next2',
    prevArrow: '.slick-prev2',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
}); 
// /testimonial content Slick  end

// testimonial imgs Slick start
$('.testimonialSlickImg').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    infinite: true,
    arrows: true,
    dots: false,
    swipe: true,
    swipeToSlide: true,
    asNavFor: '.testimonialSlick',

    nextArrow: '.slick-next2',
    prevArrow: '.slick-prev2',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    }]
}); 
// /testimonial imgs Slick  end

// class slick start
$('.ClassSlick').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    infinite: false,
    arrows: true,
    dots: false,
    swipe: true,
    swipeToSlide: true,

    nextArrow: '.slick-next-class',
    prevArrow: '.slick-prev-class',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 3,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
}); 
// class slick end
// testimonialSlick slick start
$('.testimonialSlick2').slick({
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    infinite: false,
    arrows: true,
    dots: false,
    swipe: true,
    swipeToSlide: true,

    nextArrow: '.slick-next-testi',
    prevArrow: '.slick-prev-testi',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 1,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
}); 
// testimonialSlick slick end
// priceTableSlick slick start
$('.priceTableSlick').slick({
    speed: 500,
    slidesToShow: 2.4,
    slidesToScroll: 1,
    centerMode: false,
    infinite: false,
    arrows: false,
    dots: false,
    swipe: true,
    swipeToSlide: true,

    // nextArrow: '.slick-next-testi',
    // prevArrow: '.slick-prev-testi',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
}); 
// priceTableSlick slick end
// servicesSlick slick start
$('.servicesSlick').slick({
    speed: 500,
    slidesToShow: 3.1,
    slidesToScroll: 1,
    centerMode: false,
    infinite: false,
    arrows: true,
    dots: false,
    swipe: true,
    swipeToSlide: true,

    nextArrow: '.slick-next-service',
    prevArrow: '.slick-prev-service',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
}); 
// servicesSlick slick end
// Advertising testimonial slick start
$('.advertisTestiSlick').slick({
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    infinite: true,
    autoplay: true,
    autoplayspeed: 2000,
    arrows: false,
    dots: true,
    swipe: true,
    swipeToSlide: true,

    // nextArrow: '.slick-next-service',
    // prevArrow: '.slick-prev-service',

    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            centerMode: false,
        }

    }, {
        breakpoint: 800,
        settings: {
            slidesToShow: 2,
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    }]
}); 
// Advertising testimonial slick end