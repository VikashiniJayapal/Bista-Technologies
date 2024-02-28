const hamburger = document.querySelector(".bista-hamburger");
const menu = document.querySelector(".bista-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("active");
})