const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".nav_menu")
hamburger.onclick = function() {
    menu.classList.toggle("mobile_menu")
    hamburger.classList.toggle("hamburger_cross")
}