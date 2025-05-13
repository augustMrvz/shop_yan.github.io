$(document).ready(function () {
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: $(".slider-dots"),
      customPaging: function (slider, i) {
        return '<button type="button" class="slick-dot"><span></span></button>';
      }
    });
  });