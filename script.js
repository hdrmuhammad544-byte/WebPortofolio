document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       NAVBAR
       =============================== */

    const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 30) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

    });


    /* ===============================
       MOBILE MENU
       =============================== */

    const menuButton = document.getElementById("menuButton");
    const navMenu = document.getElementById("navMenu");

    if (menuButton && navMenu) {

        menuButton.addEventListener("click", function () {

            navMenu.classList.toggle("open");

        });

    }


    /* ===============================
       CLOSE MOBILE MENU
       =============================== */

    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("open");

        });

    });


    /* ===============================
       ACTIVE NAVIGATION
       =============================== */

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", function () {

        let currentSection = "";

        sections.forEach(function (section) {

            const sectionTop = section.offsetTop - 150;
            const sectionHeight = section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight
            ) {
                currentSection = section.getAttribute("id");
            }

        });


        navLinks.forEach(function (link) {

            link.classList.remove("active");

            const href = link.getAttribute("href");

            if (href === "#" + currentSection) {
                link.classList.add("active");
            }

        });

    });


    /* ===============================
       SCROLL REVEAL
       =============================== */

    const revealElements =
        document.querySelectorAll(".reveal");

    const revealObserver =
        new IntersectionObserver(
            function (entries, observer) {

                entries.forEach(function (entry) {

                    if (entry.isIntersecting) {

                        entry.target.classList.add("show");

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(function (element) {
        revealObserver.observe(element);
    });

    // Immediate check for elements in viewport on load
    revealElements.forEach(function (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            element.classList.add("show");
        }
    });


    /* ===============================
       CURRENT YEAR
       =============================== */

    const yearElement =
        document.getElementById("year");

    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


    /* ===============================
       SOCIAL LINK WARNING
       =============================== */

    const socialLinks =
        document.querySelectorAll(".social-link");

    socialLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const platform =
                link.getAttribute("data-link");

            if (link.getAttribute("href") === "#") {

                event.preventDefault();

                alert(
                    "Link " +
                    platform +
                    " belum diisi. Silakan ganti URL-nya di index.html."
                );

            }

        });

    });


    /* ===============================
       SMOOTH SCROLL
       =============================== */

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                link.getAttribute("href");

            if (targetId === "#") {
                return;
            }

            const target =
                document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });

});