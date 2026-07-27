(() => {
  const millisecondsPerYear = 365.2425 * 24 * 60 * 60 * 1000;

  document.querySelectorAll("[data-experience-start]").forEach((element) => {
    const startDate = new Date(`${element.dataset.experienceStart}T00:00:00Z`);
    const experienceYears = Math.max(0, (Date.now() - startDate.getTime()) / millisecondsPerYear);
    const displayValue = experienceYears.toFixed(1);

    element.textContent = `${displayValue}+`;
    element.dataset.count = displayValue;
    element.title = `Experience calculated from ${element.dataset.experienceLabel}`;
  });

  const section = document.querySelector("#experience");
  const button = document.querySelector(".experience-toggle");

  if (!section || !button) return;

  const iconMarkup =
    '<img class="iconify-ui-icon" src="assets/images/iconify-ui/arrow-up-right.svg" alt="" decoding="async" loading="lazy">';

  button.addEventListener("click", () => {
    const isExpanded = !section.classList.contains("is-expanded");
    section.classList.toggle("is-expanded", isExpanded);
    section.classList.toggle("is-collapsed", !isExpanded);
    button.setAttribute("aria-expanded", String(isExpanded));
    button.innerHTML = `${isExpanded ? "Show Less" : "View All Experience"} ${iconMarkup}`;
  });
})();
