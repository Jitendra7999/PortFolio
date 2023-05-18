let menuBtn = document.querySelector(".navbar .menu-btn");
let menuList = document.querySelector(".navbar .nav-list");

let menuListItem = document.querySelectorAll(".nav-list li a");

menuBtn.addEventListener('click',addActiveClass)   // Add Active class to nav-list

function addActiveClass(){
    menuList.classList.toggle('active')
}

for(let i =0 ; i<menuListItem.length;i++){
    menuListItem[i].addEventListener('click',menuItemClicked)
}
function menuItemClicked(){
    menuList.classList.remove('active')
}
