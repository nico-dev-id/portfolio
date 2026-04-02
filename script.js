//====================
//SELECT ELEMENT
//====================
const heroTitle = document.querySelector(".hero-title");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

//====================
//FUNCTION
//====================
//toggle menu (open/close)
function toggleMenu() {
    navLinks.classList.toggle("active");
}

//close menu
function closeMenu() {
    navLinks.classList.remove("active");
}

//Init burger menu
function initMenu() {
    if (!menuToggle || !navLinks) return;
    
        menuToggle.addEventListener("click", toggleMenu);
}

//Init Nav Links
function initNavLinks() {
    const links = document.querySelectorAll(".nav-links a");

    if (!links.length) return;
    
    links.forEach(links => {
        links.addEventListener("click", closeMenu);
    });
}

//==============
//INIT
//==============
initMenu();
initNavLinks();




