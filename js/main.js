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

const toggle = document.getElementById("toggle");
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");

document.onclick = function (e) {
  if (
    e.target.id !== "header" &&
    e.target.id !== "toggle" &&
    e.target.id !== "navbar"
  ) {
    toggle.classList.remove("active");
    navbar.classList.remove("active");
  }
};
toggle.onclick = function () {
  toggle.classList.toggle("active");
  navbar.classList.toggle("active");
};
