function counter() {
  const count = setInterval(function () {
    let c = parseInt($(".counter").text());
    $(".counter").text((++c).toString());
    if (c == "data.percent") {
      clearInterval(count);
    }
  }, 50);
}
counter();

function counterTwo() {
  const two = setInterval(function () {
    let a = parseInt($(".two").text());
    $(".two").text((++a).toString());
    if (a == 20) {
      clearInterval(two);
    }
  }, 50);
}
counterTwo();
