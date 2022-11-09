$(function () {
  // slick slider - Welcome
  $(".slideshow").slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false,
  });
  //slick slider - Business
  $(".business-photo").slick({
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  });
  /* TypeIt1 - Welcome */
  $("#typing1").typeIt({
    strings: ["Beautiful"], // 타이핑 텍스트 입력
    speed: 100, // 알파벳 타이핑 속도
    autoStart: true, // 자동 재생 사용
    breakLines: false, // 줄 바꿈 사용안함
  });
  /* TypeIt2 - Welcome */
  $("#typing2").typeIt({
    strings: ["Healthy"], // 타이핑 텍스트 입력
    speed: 100, // 알파벳 타이핑 속도
    autoStart: true, // 자동 재생 사용
    breakLines: false, // 줄 바꿈 사용안함
  });
  /* TypeIt3 - Welcome */
  $("#typing3").typeIt({
    strings: ["Refreshing"], // 타이핑 텍스트 입력
    speed: 100, // 알파벳 타이핑 속도
    autoStart: true, // 자동 재생 사용
    breakLines: false, // 줄 바꿈 사용안함
  });
});

$(function () {
  // Header Scroll Change
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $("header, .btn-top").addClass("active");
    } else {
      $("header, .btn-top").removeClass("active");
    }
  });
  //Header - gub dropdown
  $("label").click(function () {
    $(this).next().stop().slideToggle();
    $(this).parent().siblings().children(".menu").slideUp();
    $(this).parent().siblings().children(".menu-sub").slideUp();
    $("section").click(function () {
      $(".button, label").next().slideUp();
    });
  });

  // Video Modal
  $(".open-modal").click(function () {
    $(".video-modal").fadeIn();
    $("body").addClass("active");
  });
  $(".close-modal").click(function () {
    $(".video-modal").fadeOut();
    $("body").removeClass("active");
  });

  // mobile - Header Trigger
  $(".trigger").click(function () {
    $(this).toggleClass("active");
    $(".m-gnb").toggleClass("active");
  });
  $(".menus > li > a, .sub-menu > a").click(function () {
    $(".m-gnb, .trigger").removeClass("active");
  });
});

$(function () {
  // news-slider
  const slider = document.querySelector(".slider-inner");
  const progressBar = document.querySelector(".prog-bar-inner");

  let sliderGrabbed = false;

  slider.parentElement.addEventListener("scroll", (e) => {
    progressBar.style.width = `${getScrollPercentage()}%`;
  });

  slider.addEventListener("mousedown", (e) => {
    sliderGrabbed = true;
    slider.style.cursor = "grabbing";
  });

  slider.addEventListener("mouseup", (e) => {
    sliderGrabbed = false;
    slider.style.cursor = "grab";
  });

  slider.addEventListener("mouseleave", (e) => {
    sliderGrabbed = false;
  });

  slider.addEventListener("mousemove", (e) => {
    if (sliderGrabbed) {
      slider.parentElement.scrollLeft -= e.movementX;
    }
  });

  slider.addEventListener("wheel", (e) => {
    e.preventDefault();
    slider.parentElement.scrollLeft += e.deltaY;
  });

  function getScrollPercentage() {
    return (
      (slider.parentElement.scrollLeft /
        (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) *
      100
    );
  }
  // 홈화면을 스크롤하면 점점 투명해진다
  const home = document.querySelector(".welcome");
  const homeHeight = home.getBoundingClientRect().height;
  document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
  });
});
