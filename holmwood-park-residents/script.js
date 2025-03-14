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

document.addEventListener("DOMContentLoaded", function () {
  const accordions = document.querySelectorAll(".accordion");

  accordions.forEach((accordion) => {
      accordion.addEventListener("click", function () {
          this.classList.toggle("active");

          var panel = this.nextElementSibling;

          if (panel.classList.contains("open")) {
              panel.classList.remove("open");
          } else {
              // Close all other open panels before opening this one
              document.querySelectorAll(".panel").forEach((p) => p.classList.remove("open"));
              panel.classList.add("open");
          }
      });
  });
});
