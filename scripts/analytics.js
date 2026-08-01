(() => {
  const sendEvent = (name, parameters = {}) => {
    if (typeof window.gtag === "function") window.gtag("event", name, parameters);
  };

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    const label = (link.getAttribute("aria-label") || link.textContent || "link").trim().replace(/\s+/g, " ").slice(0, 100);

    if (/\.pdf(?:$|[?#])/i.test(href)) {
      sendEvent("resume_download", { link_url: link.href, link_text: label });
    } else if (/^(?:mailto|tel):/i.test(href)) {
      sendEvent("contact_click", { contact_method: href.split(":", 1)[0].toLowerCase(), link_text: label });
    } else if (link.matches(".hud-button, .project-actions a")) {
      sendEvent("cta_click", { link_url: link.href, link_text: label });
    }

    if (/linkedin\.com|github\.com|x\.com/i.test(link.hostname)) {
      sendEvent("professional_profile_click", { link_domain: link.hostname, link_url: link.href, link_text: label });
    }
  });

  if (!("IntersectionObserver" in window)) return;
  const viewed = new Set();
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const section = entry.target;
      const sectionName = section.id || section.getAttribute("aria-label");
      if (!entry.isIntersecting || !sectionName || viewed.has(sectionName)) return;
      viewed.add(sectionName);
      sendEvent("section_view", { section_name: sectionName });
      observer.unobserve(section);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll("main section[id]").forEach((section) => observer.observe(section));
})();
