document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((btn) => {
        btn.addEventListener("click", () => {
            btn.classList.toggle("active");
        });
    });

    const navToggle = document.querySelector(".nav-toggle");
    const navDesktop = document.querySelector(".nav-desktop");

    if (navToggle && navDesktop) {
        navToggle.addEventListener("click", () => {
            navDesktop.classList.toggle("nav-open");
        });
    }
});
