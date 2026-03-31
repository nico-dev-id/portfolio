
const heroTitle = document.querySelector(".hero-title");
const hireButton=document.querySelector(".btn-primary");
const output=document.querySelector("#output");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

heroTitle.style.color = "black";
heroTitle.style.fontSize="40px";

    //2. Tambah Element
    if (output){
        const newText=document.createElement("p");
        newText.textContent="Nico Clicked hire Me!";

        newText.addEventListener("click",function(){
            newText.remove();
        });
        output.appendChild(newText);
    }
});

/*TOMBOL KONTAK SAAT DI KLIK SROL KE KONTAK*/
const contactButton=document.querySelector(".btn-secondary");
contactButton.addEventListener("click", function(){
    document.querySelector("#contact").scrollIntoView({
        behavior:"smooth"
    })
});

//BURGER MENU
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

//tutup menu setelah klik
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
