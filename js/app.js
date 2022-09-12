const navBtn = document.getElementById("nav-btn");
const navLinks = document.getElementById("nav-links");
const email_input = document.getElementById('email');
const fullname_input = document.getElementById('full-name');
const phonenb_input = document.getElementById("phone-nb");
const message_input = document.getElementById("message");
const submitBtn = document.getElementById('contact-btn');

// show nav-links
const show_navbar = () => {
  navLinks.classList.toggle("d-none");
};
const showNav_desktop = () => {
  if (window.innerWidth >= 1000) navLinks.classList.remove("d-none");
};
// handle contact form submission
const handleContactSubmit = (e)=>{
  e.preventDefault();
  console.log('SUBMIT')
}


// when click the nav-menu button on responsive design => show navbar links as block elements
navBtn.addEventListener("click", show_navbar);
// reshow navbar if it is hidden at mobile size and we resize the window to more than 1000px
window.addEventListener("resize", () => showNav_desktop);
// when contact form button/submit is clicked:
submitBtn.addEventListener('click',handleContactSubmit)
