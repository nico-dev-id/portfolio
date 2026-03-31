
const heroTitle = document.querySelector(".hero-title");
const hireButton=document.querySelector(".btn-primary");
const output=document.querySelector("#output");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

heroTitle.style.color = "black";
heroTitle.style.fontSize="40px";

//BURGER MENU
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

/*TOMBOL KONTAK SAAT DI KLIK SROL KE KONTAK*/
const contactButton=document.querySelector(".btn-secondary");
contactButton.addEventListener("click", function(){
    document.querySelector("#contact").scrollIntoView({
        behavior:"smooth"
    })
});

//tutup menu setelah klik
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
