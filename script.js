// ================  LOADER ====================//
let loader = document.getElementById("preloader");
window.addEventListener("load", function() {
    loader.style.display = "none";
});

// =================  TOGGLE ICON NAVBAR  =====================//

var navLinks = document.getElementById("navLinks");
function showMenu () {
    navLinks.style.right = "0";
}
function hideMenu () {
    navLinks.style.right = "-200px"
}

// ====================  SCROLL SECTION ACTIVE LINK ===================//

let sections = document.querySelectorAll("section");
let navLink = document.querySelectorAll("header nav a");

window.scroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLink.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href *= ' + id + ']').classList.add('active');
            });
        };
    });

    // =============== STICKY NAVBAR ===================//

    let header = document.querySelector("header");
    header.classList.toggle('sticky', window.scrollY > 100);

    // =================== REMOVE TOGGLE ICON AND NAVBAR ======================//

    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove('active');
};

// ========================== SCROLL REVEAL ========================//

    ScrollReveal({ 
        distance: '80px',
        duration: 2000,
        dealy: 200,
     });

     ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
     ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'button' });
     ScrollReveal().reveal('.home-contect h1, .about-img', { origin: 'left' });
     ScrollReveal().reveal('.home-contect p, .about-content', { origin: 'right' });

    //  ====================== TYPED JS =========================//

    const typed = new Typed('.multiple-text', {
        strings: ['Frontend Developer', 'Web Designer'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,

    });
             


