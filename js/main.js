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



// let innerCursor = document.querySelector(".innercursor");
// let outerCursor = document.querySelector(".outercursor");
// document.addEventListener("mousemove", moveCursor);
// function moveCursor(e) {
//     let x = e.clientX;
//     let y = e.clientY;
//     innerCursor.style.left = `${x}px`;
//     innerCursor.style.top = `${y}px`;
//     outerCursor.style.left = `${x}px`;
//     outerCursor.style.top = `${y}px`;

//     // console.log(e);
// }

// let links = Array.from(document.querySelectorAll("a"));
// console.log(links);
// links.forEach((link) => {
//     link.addEventListener("mouseover", () => {
//         innerCursor.classList.add("grow");
//     });
//     link.addEventListener("mouseleave", () => {
//         innerCursor.classList.remove("grow");
//     });
// });
