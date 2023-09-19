/*----------Burger Menu----------*/
const menu = document.getElementById("header_menu");
const navbar = document.getElementById("navbar");
//const header = document.getElementById("header");

menu.addEventListener("click", dropdown_menu);

function dropdown_menu() {
  menu.classList.toggle("header_menu--active");
  navbar.classList.toggle("navbar--active");
  //header.classList.toggle("header_navbar--active");
}

window.addEventListener("resize", dropdown_menu_adjust);

function dropdown_menu_adjust() {
  if (window.innerWidth < 1000) {
    menu.classList.remove("header_menu--active");
    navbar.classList.remove("navbar--active");
   // header.classList.remove("header_navbar--active");
  } else {
   // menu_inactive.style.display = "none";   //REVISAR
    //menu_active.style.display = "none";     //REVISAR
    //navbar.style.display = "flex";          //REVISAR
  }
}

if (window.innerWidth < 1000) {
  document
    .getElementById("navbar")
    .addEventListener("click", () => setTimeout(dropdown_menu_adjust, 300));
}

/*----------Slider----------*/

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  autoplay: {
    delay: 5000,
  },
  loop: true,
  speed: 400,
  spaceBetween: 100,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
