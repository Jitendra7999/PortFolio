let menuBtn = document.querySelector(".navbar .menu-btn");
let menuList = document.querySelector(".navbar .nav-list");

let menuListItem = document.querySelectorAll(".nav-list li a");

menuBtn.addEventListener('click', addActiveClass)   // Add Active class to nav-list

function addActiveClass() {
  menuList.classList.toggle('active')
}

for (let i = 0; i < menuListItem.length; i++) {
  menuListItem[i].addEventListener('click', menuItemClicked)
}
function menuItemClicked() {
  menuList.classList.remove('active')
}

let homeSection = document.querySelector('.home');
window.addEventListener('scroll', pageScrollFunction)
window.addEventListener('load', pageScrollFunction)

function pageScrollFunction() {
  if (window.scrollY > 80) {
    homeSection.classList.add('active')
  } else {
    homeSection.classList.remove('active')
  }
}
function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  }
  const serviceId = "service_c9jarh6";
  const templateId = "template_ivivr69";
  emailjs.send(serviceId,templateId,params)
  .then(res=>alert("Your message sent successfully"))
}
