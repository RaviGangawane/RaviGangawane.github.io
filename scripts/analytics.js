(() => {
  const sendEvent = (name, parameters = {}) => {
    if (typeof window.gtag === "function")
      window.gtag("event", name, parameters);
  };

  let projectPageTracked = false;
  const trackProjectPage = () => {
    if (
      projectPageTracked ||
      !/^\/projects\/.+/.test(window.location.pathname) ||
      typeof window.gtag !== "function"
    )
      return;
    projectPageTracked = true;
    sendEvent("project_view", {
      project_path: window.location.pathname,
      page_title: document.title,
    });
  };
  trackProjectPage();
  window.addEventListener("analytics-consent-granted", trackProjectPage, {
    once: true,
  });

  document.addEventListener("click", (event) => {
    if (!(event.target instanceof Element)) return;

    const link = event.target.closest("a[href]");
    if (!link) return;

    const href = link.getAttribute("href") || "";
    const label = (
      link.getAttribute("aria-label") ||
      link.textContent ||
      "link"
    )
      .trim()
      .replace(/\s+/g, " ")
      .slice(0, 100);

    if (/\.(?:pdf|docx?)(?:$|[?#])/i.test(href)) {
      const fileName = decodeURIComponent(
        new URL(link.href).pathname.split("/").pop() || "resume",
      );
      sendEvent("resume_download", {
        file_name: fileName,
        link_url: link.href,
        link_text: label,
      });
    } else if (/^mailto:/i.test(href)) {
      const parameters = { contact_method: "email", link_text: label };
      sendEvent("email_click", parameters);
      sendEvent("contact_click", parameters);
    } else if (/^tel:/i.test(href)) {
      sendEvent("contact_click", { contact_method: "phone", link_text: label });
    } else if (link.matches(".hud-button, .project-actions a")) {
      sendEvent("cta_click", { link_url: link.href, link_text: label });
    }

    if (/linkedin\.com/i.test(link.hostname)) {
      sendEvent("linkedin_click", { link_url: link.href, link_text: label });
    } else if (/github\.com/i.test(link.hostname)) {
      sendEvent("github_click", { link_url: link.href, link_text: label });
    }

    if (/linkedin\.com|github\.com|x\.com/i.test(link.hostname)) {
      sendEvent("professional_profile_click", {
        link_domain: link.hostname,
        link_url: link.href,
        link_text: label,
      });
    }

    if (
      link.matches(".project-actions a") ||
      /\/projects\//.test(link.pathname)
    ) {
      sendEvent("project_view", {
        project_path: link.pathname,
        link_url: link.href,
        link_text: label,
      });
    }
  });

  if (!("IntersectionObserver" in window)) return;
  const viewed = new Set();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const section = entry.target;
        const sectionName = section.id || section.getAttribute("aria-label");
        if (!entry.isIntersecting || !sectionName || viewed.has(sectionName))
          return;
        viewed.add(sectionName);
        sendEvent("section_view", { section_name: sectionName });
        observer.unobserve(section);
      });
    },
    { threshold: 0.5 },
  );

  document
    .querySelectorAll("main section[id]")
    .forEach((section) => observer.observe(section));
})();
