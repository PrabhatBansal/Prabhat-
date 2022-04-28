let navBtn = document.getElementById("check");
let ul = document.getElementsByTagName("ul")[0];
let a = document.querySelectorAll("li a");
let line1 = document.getElementsByClassName("line")[0];
let desc = document.getElementsByClassName("desc");
let active = document.getElementsByClassName("active");
let line2 = document.getElementsByClassName("line")[1];
let favicon = document.querySelector("div.favicon");
let body = document.querySelector("body");
let span = document.querySelector(".favicon span");
let navbar = document.getElementsByTagName("nav")[0];

navBtn.addEventListener("click", () => {
  ul.classList.toggle("dis");
  navbar.classList.toggle("nav-col2");
  line1.classList.toggle("line-Rotate1");
  line2.classList.toggle("line-Rotate2");
  favicon.classList.toggle("b-bottom");
  body.classList.toggle("limit-body");
  span.classList.toggle("active");
});

for (let i = 0; i < a.length; i++) {
  a[i].addEventListener("click", function (e) {
    // e.defaultPrevented()
    active[0].classList.remove("active");
    a[i].classList.add("active");
  });
}

let screen = window;
screen.addEventListener("scroll", () => {
  if (this.scrollY > 20) {
    navbar.classList.add("nav-col");
  } else {
    navbar.classList.remove("nav-col");
  }
});
