$('.hamburger').on('click', function () {
    $('.mobile-nav').addClass('open');
});
$('.times').on('click', function () {
    $('.mobile-nav').removeClass('open');
});
$('.mobile-nav ul li a').on("click", function () {
    $('.mobile-nav').removeClass('open');
});