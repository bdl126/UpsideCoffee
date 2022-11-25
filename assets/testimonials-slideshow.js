$('.testimonials').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    // centerMode: true,
    // adaptiveHeight: true,
    arrows: false,
    dots: true,
    // adaptiveHeight: true,
    // centerPadding: '60px',
    responsive: [
        {
          breakpoint: 989,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
  });