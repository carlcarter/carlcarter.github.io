document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll(".timeline-step");

    function checkSteps() {
        steps.forEach(step => {
            const rect = step.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.85) {
                step.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkSteps);
    checkSteps(); // Run on page load
});

document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            });
        },
        { threshold: 0.2 }
    );

    fadeInElements.forEach((element) => {
        observer.observe(element);
    });
});