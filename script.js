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

function openProjects() {
  document.getElementById("all-project").style.width = "100%";
}

function closeProject() {
  document.getElementById("all-project").style.width = "0";
}

let slideIndexOne = 0;
showSlidesOne(); // call showslide method

function showSlidesOne() {
    let i;

    // get the array of divs' with classname image-sliderfade
    let slides = document.getElementsByClassName("image-sliderfade");

    // get the array of divs' with classname dot
    let dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        // initially set the display to
        // none for every image.
        slides[i].style.display = "none";
    }

    // increase by 1, Global variable
    slideIndexOne++;

    // check for boundary
    if (slideIndexOne > slides.length) {
        slideIndexOne = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndexOne - 1].style.display = "block";
    dots[slideIndexOne - 1].className += " active";

    // Change image every 2 seconds
    setTimeout(showSlidesOne, 2000);
}

let slideIndexTwo = 0;
showSlidesTwo(); // call showslide method

function showSlidesTwo() {
    let i;

    // get the array of divs' with classname image-sliderfade
    let slides = document.getElementsByClassName("image-sliderfade1");

    // get the array of divs' with classname dot
    let dots = document.getElementsByClassName("dot1");

    for (i = 0; i < slides.length; i++) {
        // initially set the display to
        // none for every image.
        slides[i].style.display = "none";
    }

    // increase by 1, Global variable
    slideIndexTwo++;

    // check for boundary
    if (slideIndexTwo > slides.length) {
        slideIndexTwo = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndexTwo - 1].style.display = "block";
    dots[slideIndexTwo - 1].className += " active";

    // Change image every 2 seconds
    setTimeout(showSlidesTwo, 2000);
}

let slideIndexThiry = 0;
showSlidesThiry(); // call showslide method

function showSlidesThiry() {
    let i;

    // get the array of divs' with classname image-sliderfade
    let slides = document.getElementsByClassName("image-sliderfade2");

    // get the array of divs' with classname dot
    let dots = document.getElementsByClassName("dot2");

    for (i = 0; i < slides.length; i++) {
        // initially set the display to
        // none for every image.
        slides[i].style.display = "none";
    }

    // increase by 1, Global variable
    slideIndexThiry++;

    // check for boundary
    if (slideIndexThiry > slides.length) {
        slideIndexThiry = 1;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndexThiry - 1].style.display = "block";
    dots[slideIndexThiry - 1].className += " active";

    // Change image every 2 seconds
    setTimeout(showSlidesThiry, 2000);
}