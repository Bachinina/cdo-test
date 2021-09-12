$(document).ready(function () {
  const screenWidth = $(document).width();
  const prevArrow = `
  <button type="button" class="slick-prev" aria-hidden="true">
    <img src="img/btn-prev.svg">
  </button>`;
  const nextArrow = `
  <button type="button" class="slick-next" aria-hidden="true">
    <img src="img/btn-next.svg">
  </button>`;

  const slider = $('[data-slider]');
  const previews = $('[data-toggle]');

  slider.each(function () {
    $(this).slick({
      fade: true,
      accessibility: false,
      speed: 800,
      draggable: false,
      waitForAnimate: true,
      dots: false,
      arrows: true,
      prevArrow: prevArrow,
      swipeToSlide: true,
      nextArrow: nextArrow,
      autoplay: false,
      autoplaySpeed: 5000,
      responsive: [{
        breakpoint: 1199,
        settings: {
          draggable: true,
          speed: 150,
          fade: false,
        }
      }]
    });
  });

  slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    previews[nextSlide].classList.add('active');
    previews.not(previews[nextSlide]).removeClass('active');
  });


  $('[data-partners]').each(function () {
    $(this).slick({
      accessibility: false,
      speed: 600,
      draggable: false,
      waitForAnimate: true,
      dots: false,
      arrows: false,
      swipeToSlide: true,
      autoplay: true,
      slidesToShow: 5,
      autoplaySpeed: 5000,
      infinite: true,
      responsive: [{
          breakpoint: 1199,
          settings: {
            draggable: true,
            speed: 500,
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 767,
          settings: {
            draggable: true,
            speed: 500,
            slidesToShow: 2,
          }
        }
      ]
    });
  });


});