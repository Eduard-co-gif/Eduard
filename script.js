// Reveal sections as they enter the viewport (respects prefers-reduced-motion via CSS).
// Progressive enhancement: the "reveal" class (which starts elements at opacity:0)
// is added here, in JS, rather than in the HTML. If this script fails to run for
// any reason, every section simply stays at its default visible state.
const revealEls = document.querySelectorAll(".section, .footer");
revealEls.forEach((el) => el.classList.add("reveal"));

if ("IntersectionObserver" in window && revealEls.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}
