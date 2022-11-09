$(function () {
  //Header - gub dropdown
  $(".button, label").click(function () {
    $(this).next().slideDown();
    $(this).parent().siblings().children(".menu").slideUp();
    $(this).parent().siblings().children(".menu-sub").slideUp();
  });
});
