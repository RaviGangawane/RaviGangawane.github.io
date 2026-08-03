(() => {
  const millisecondsPerYear = 365.2425 * 24 * 60 * 60 * 1000;

  document.querySelectorAll("[data-experience-start]").forEach((element) => {
    const startDate = new Date(`${element.dataset.experienceStart}T00:00:00Z`);
    if (Number.isNaN(startDate.getTime())) return;

    const experienceYears = Math.max(
      0,
      (Date.now() - startDate.getTime()) / millisecondsPerYear,
    );
    const displayValue = experienceYears.toFixed(1);

    element.textContent = `${displayValue}+`;
    element.dataset.count = displayValue;
    element.title = `Experience calculated from ${element.dataset.experienceLabel}`;
  });

  document.querySelectorAll("[data-duration-start]").forEach((element) => {
    const startDate = new Date(`${element.dataset.durationStart}T00:00:00`);
    if (Number.isNaN(startDate.getTime())) return;

    const today = new Date();

    let totalMonths =
      (today.getFullYear() - startDate.getFullYear()) * 12 +
      today.getMonth() -
      startDate.getMonth();

    if (today.getDate() < startDate.getDate()) totalMonths -= 1;
    totalMonths = Math.max(0, totalMonths);

    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    const parts = [];

    if (years) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
    if (months) parts.push(`${months} ${months === 1 ? "month" : "months"}`);
    if (!parts.length) parts.push("Less than 1 month");

    element.textContent = `${element.dataset.durationPrefix || ""}${parts.join(" ")}`;
    element.title = `Duration calculated through ${today.toLocaleDateString(
      undefined,
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    )}`;
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
