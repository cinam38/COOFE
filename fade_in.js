// JavaScript for fade-in animation
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");

    function handleScroll() {
        fadeElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add("in-view");
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();  // Run on page load in case elements are already in view
});
