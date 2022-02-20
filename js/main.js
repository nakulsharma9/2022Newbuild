var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("mobilenav").style.top = "0";
  } else {
    document.getElementById("mobilenav").style.top = "-100%";
  }
  prevScrollpos = currentScrollPos;
};
