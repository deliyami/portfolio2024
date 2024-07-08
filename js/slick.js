$(document).ready(function () {
  console.log($(".other-carousel"))
  $(".other-carousel").slick({
    centerMode: true,
    slidesToShow: 1,
    arrows: true,
    dots: false,
    autoplaySpeed: 10000,
    pauseOnHover: true,
    prevArrow:
      "<button type='button' class='other-carousel-prev'><img src='images/arrow_left.svg' alt=''></button>", // 이전 화살표 모양 설정
    nextArrow:
      "<button type='button' class='other-carousel-next'><img src='images/arrow_right.svg' alt=''></button>", // 다음 화살표 모양 설정
  });
});
