// html문서를 다읽은 다음에 custom.js를 실행한다라는 뜻
$(function () {
  // trigger
  // 트리거 클릭시 자신과 gnb에게 active클래스 줌
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".gnb").toggleClass("active");
  });
  // 밖에 섹션, 메뉴 클릭시 메뉴창 없어짐
  $("section, .menu a").click(function () {
    $(".gnb, .trigger").removeClass("active");
  });
  /* Smooth Scrolling */
  $(".menu a, .home-menu a, .gototop").click(function (e) {
    $.scrollTo(this.hash || 0, 900);
  });
  // change css with scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header,.gototop").addClass("active");
    } else {
      $("header, .gototop").removeClass("active");
    }
  });

  // slick.js : history
  $(".history-slider").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
  // slick.js : project photo
  $(".project-photo").slick({
    dots: true,
    infinite: false,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
  });
});
