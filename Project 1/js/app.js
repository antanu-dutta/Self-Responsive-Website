const bar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu-bar");
const menuItem = document.querySelectorAll(".menu-bar li ");
bar.addEventListener("click", function () {
  bar.classList.toggle("fa-xmark");
  menu.classList.toggle("active-menu");
});
