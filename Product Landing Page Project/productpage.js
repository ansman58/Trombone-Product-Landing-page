const menuUl = document.querySelector('.menu-ul');
let hamburger = document.querySelector('.hamburger');
const insideLi = document.querySelectorAll('.nav-link');


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menuUl.classList.toggle("active");
})

 insideLi.addEventListener ("click", () => {
     hamburger.classList.toggle("active");
 })