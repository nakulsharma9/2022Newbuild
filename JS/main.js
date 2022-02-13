$(".borgir").on("click", function () {
  $(".mobile-nav").addClass("open");
});
$(".borgirclose").on("click", function () {
  $(".mobile-nav").removeClass("open");
});
$(".mobile-nav ul li a").on("click", function () {
  $(".mobile-nav").removeClass("open");
});
