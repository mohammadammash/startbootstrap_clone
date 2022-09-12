const navBtn = document.getElementById("nav-btn");
const navLinks = document.getElementById("nav-links");

// show nav-links
const show_navbar = () => {
  navLinks.classList.toggle("d-none");
};

// when click the nav-menu button on responsive design => show navbar links as block elements
navBtn.addEventListener("click", show_navbar);
// reshow navbar if it is hidden at mobile size and we resize the window to more than 1000px
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1000)
    navLinks.classList.remove("d-none");
});


