
// ================= MOBILE MENU =================

document.addEventListener("DOMContentLoaded", () => {

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    // MENU TOGGLE

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        // ICON CHANGE

        if (navLinks.classList.contains("active")) {

            menuToggle.innerHTML = `<i class="fa-solid fa-xmark"></i>`;

        } else {

            menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;

        }

    });

    // MOBILE MENU AUTO CLOSE

    const navItems = document.querySelectorAll("#navLinks li a");

    navItems.forEach((link) => {

        link.addEventListener("click", () => {

            // SIDEBAR CLOSE

            navLinks.classList.remove("active");

            // ICON RESET

            menuToggle.innerHTML = `<i class="fa-solid fa-bars"></i>`;

        });

    });

});

// ================= STICKY NAVBAR =================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});

// ================= ACTIVE LINK =================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active");

        }

    });

});

// ================= SCROLL TOP BUTTON =================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

// SCROLL TO TOP

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

});

// <!-- SUCCESS POPUP JS -->


    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function () {

        alert("Your enquiry has been sent successfully!");
          setTimeout(() => {
            form.reset();
        }, 100);

    });