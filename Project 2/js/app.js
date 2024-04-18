const bar = document.querySelector(".bar");
const header = document.querySelector("header");
const menubar = document.querySelector(".menubar ul");
bar.addEventListener("click", (e) => {
  menubar.classList.toggle("menubar-active");
  e.target.classList.toggle("fa-xmark");
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
  if (menubar.classList.value === "menubar-active") {
    menubar.classList.remove("menubar-active");
    bar.classList.remove("fa-xmark");
  }
});
