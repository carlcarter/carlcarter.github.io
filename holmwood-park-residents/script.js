function toggleSection(id) {
    var content = document.getElementById(id);
    if (content.style.display === "block") {
        content.style.display = "none";
    } else {
        content.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const steps = document.querySelectorAll(".timeline-step");

    function revealSteps() {
        let triggerBottom = window.innerHeight * 0.85;
        steps.forEach(step => {
            let stepTop = step.getBoundingClientRect().top;
            if (stepTop < triggerBottom) {
                step.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSteps);
    revealSteps(); // Run on page load
});
