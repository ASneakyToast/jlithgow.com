let nav_bottom = document.querySelector(".nav-bottom");

let nav_drawer = document.querySelector(".nav-drawer");
let nav_drawer_offclick = document.querySelector(".nav-drawer__offclick");
let nav_drawer_toggle = document.querySelector(".nav-bottom__drawer_toggle");

nav_drawer_toggle.addEventListener("click", () => {
  nav_drawer.classList.toggle("nav-drawer--open");
});

nav_drawer_offclick.addEventListener("click", () => {
  nav_drawer.classList.toggle("nav-drawer--open");
});
