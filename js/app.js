const navBtn = document.getElementById("nav-btn");
const navLinks = document.getElementById("nav-links");
const email_input = document.getElementById("email");
const fullname_input = document.getElementById("full-name");
const phonenb_input = document.getElementById("phone-nb");
const message_input = document.getElementById("message");
const submitBtn = document.getElementById("contact-btn");
const error_box = document.getElementById("error-box");
const cards = document.getElementsByClassName("card");
const closeCard_btn = document.getElementById("close-btn");
const modal = document.getElementById("modal");

// show module when any portfolio image is clicked - close module when X(close-btn) is clicked
const showModal = () => modal.classList.remove("d-none");
const closeModal = () => modal.classList.add("d-none");

// show nav-links when menu button clicked
const show_navbar = () => {
  navLinks.classList.toggle("d-none");
};
const showNav_desktop = () => {
  if (window.innerWidth >= 1000) navLinks.classList.remove("d-none");
};

// handle contact form submission(handleContactSubmit => have 3 nested functions to validate 4 contact-me fields and return values)
const validateEmail = (email) => {
  const regEx = /[a-z0-9_\.-]{3,}@[a-z0-9_\.-]{5,}/;
  return regEx.test(email);
};
const validatePhoneNb = (phoneNb) => {
  if (phoneNb.length < 11) return false;
  const keyNbs = phoneNb.slice(4, 6);
  const countrycode = phoneNb.slice(0, 4);
  let valid = false;
  if (countrycode == "+961") {
    if (phoneNb.slice(4, 5) == "3" && phoneNb.slice(5).length == "6")
      valid = true;
    else if (
      (keyNbs == "71" || keyNbs == "70" || keyNbs == "76") &&
      phoneNb.slice(6).length == "6"
    )
      valid = true;
  }
  return valid;
};

const validateInput = (fullName, email, message, phoneNb) => {
  let error_msg = "";
  if (fullName.length < 5)
    error_msg += "full Name Should be of minimum 5 character, ";
  if (message.length <= 100)
    error_msg += "message should be at least 100 characters!, ";
  if (!validateEmail(email)) error_msg += "invalid email address, ";
  if (!validatePhoneNb(phoneNb)) error_msg += "invalid phone number";
  return error_msg;
};

const handleContactSubmit = (e) => {
  e.preventDefault();
  let fullName = fullname_input.value;
  let email = email_input.value;
  let message = message_input.value;
  let phoneNb = phonenb_input.value;
  const error_msg = validateInput(fullName, email, message, phoneNb);
  if (error_msg) {
    error_box.classList.remove("d-none");
    error_box.textContent = error_msg;
  }
};

// when click the nav-menu button on responsive design => show navbar links as block elements
navBtn.addEventListener("click", show_navbar);
// reshow navbar if it is hidden at mobile size and we resize the window to more than 1000px
window.addEventListener("resize", () => showNav_desktop);
// when contact form button/submit is clicked:
submitBtn.addEventListener("click", handleContactSubmit);
// loop through all portfolios to catch any click eventlistener on any of them to show the pop-up:
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", showModal);
}
// close modal/pop-up when X(close-btn) clicked:
closeCard_btn.addEventListener('click',closeModal);
