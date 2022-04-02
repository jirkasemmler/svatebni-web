let hamburger = document.querySelector(".hamburger");
let bar1 = document.querySelector(".bar1");
let bar2 = document.querySelector(".bar2");
let bar3 = document.querySelector(".bar3");
let menu = document.querySelector(".menu__list");
let menuItem = document.querySelectorAll(".menu__link");


hamburger.addEventListener("click", responsiveMenu);
function responsiveMenu() {
  hamburger.classList.toggle("change");
  menu.classList.toggle("active");
  bar1.classList.toggle("change");
  bar2.classList.toggle("change");
  bar3.classList.toggle("change");
}

menuItem.forEach(n => n.addEventListener("click", closeMenu));
function closeMenu() {
  hamburger.classList.remove("change");
  menu.classList.remove("active");
  bar1.classList.remove("change");
  bar2.classList.remove("change");
  bar3.classList.remove("change");
}