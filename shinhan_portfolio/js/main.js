// 비상식적인 언어를 브라우저가 발견하게 해줌
"use strict";

$(function () {
  // slick slider
  $(".myslider").slick({
    // 보여지는 갯수 스클롤수
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // 자동재생
    autoplay: true,
    autoplaySpeed: 1500,
    // 패이드
    speed: 800,
    fade: true,
    cssEase: "linear",
    // 도트
    dots: true,
    // responsive
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // company-slider
  $(".company-slider").slick({
    // 보여지는 갯수 스클롤수
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // 자동재생
    autoplay: true,
    autoplaySpeed: 2000,
    // 패이드
    speed: 500,
    fade: true,
    cssEase: "linear",
    // 도트
    dots: true,
    // responsive
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
  // 스크롤시 메뉴바 배경색 채우기
  const navbar = document.querySelector("#navbar");
  const navbarHeight = navbar.getBoundingClientRect().height;
  document.addEventListener("scroll", () => {
    if (window.scrollY > navbarHeight) {
      navbar.classList.add("navbar--dark");
    } else {
      navbar.classList.remove("navbar--dark");
    }
  });

  // 홈화면을 스크롤하면 점점 투명해짐
  const home = document.querySelector(".myslider");
  const homeHeight = home.getBoundingClientRect().height;
  document.addEventListener("scroll", () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
  });

  // 스크롤을 내리면 업 버튼이 보이게 하기
  const arrowUp = document.querySelector(".arrow-up");
  document.addEventListener("scroll", () => {
    if (window.scrollY > homeHeight / 2) {
      arrowUp.classList.add("visible");
    } else {
      arrowUp.classList.remove("visible");
    }
  });

  // 화살표클릭하면 맨위로 올라감
  arrowUp.addEventListener("click", () => {
    scrollIntoView(".myslider");
  });

  // 슬라이더 //
  //slide-wrap
  var slideWrapper = document.getElementById("slider-wrap");

  //current slideIndexition
  var slideIndex = 0;
  //items
  var slides = document.querySelectorAll("#slider-wrap ul li");
  //number of slides
  var totalSlides = slides.length;
  //get the slide width
  var sliderWidth = slideWrapper.clientWidth;
  //set width of items
  slides.forEach(function (element) {
    element.style.width = sliderWidth + "px";
  });
  //set width to be 'x' times the number of slides
  var slider = document.querySelector("#slider-wrap ul#slider");
  slider.style.width = sliderWidth * totalSlides + "px";

  // next, prev
  var nextBtn = document.getElementById("next");
  var prevBtn = document.getElementById("previous");
  nextBtn.addEventListener("click", function () {
    plusSlides(1);
  });
  prevBtn.addEventListener("click", function () {
    plusSlides(-1);
  });

  // hover
  slideWrapper.addEventListener("mouseover", function () {
    this.classList.add("active");
    clearInterval(autoSlider);
  });
  slideWrapper.addEventListener("mouseleave", function () {
    this.classList.remove("active");
    autoSlider = setInterval(function () {
      plusSlides(1);
    }, 3000);
  });

  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  function currentSlides(n) {
    showSlides((slideIndex = n));
  }

  function showSlides(n) {
    slideIndex = n;
    if (slideIndex == -1) {
      slideIndex = totalSlides - 1;
    } else if (slideIndex === totalSlides) {
      slideIndex = 0;
    }

    slider.style.left = -(sliderWidth * slideIndex) + "px";
    pagination();
  }

  //pagination
  slides.forEach(function () {
    var li = document.createElement("li");
    document.querySelector("#slider-pagination-wrap ul").appendChild(li);
  });

  function pagination() {
    var dots = document.querySelectorAll("#slider-pagination-wrap ul li");
    dots.forEach(function (element) {
      element.classList.remove("active");
    });
    dots[slideIndex].classList.add("active");
  }

  pagination();
  var autoSlider = setInterval(function () {
    plusSlides(1);
  }, 3000);

  // 상단메뉴 클릭시 선택영역 스크롤 이동
  document.querySelector(".menu").addEventListener("click", (e) => {
    if (e.target.nodeName === "LI") {
      let id_value = e.target.dataset.link;
      document.querySelector(id_value).scrollIntoView({ block: "end", behavior: "smooth" });
    }
  });

  //  토글 버튼 클릭시 메뉴 나타내기
  const menu = document.querySelector(".menu");
  const navbarToggleBtn = document.querySelector(".navbar__toogle-btn");
  navbarToggleBtn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
});

// top button 기능
function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth" });
}

// New 숫자 클릭
function changeImage(num) {
  let imageUrl = "css/images/right_" + num + ".png";
  $(".pr-right").css("background-image", "url(" + imageUrl + ")");
}
