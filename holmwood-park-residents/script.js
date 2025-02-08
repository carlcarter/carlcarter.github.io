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