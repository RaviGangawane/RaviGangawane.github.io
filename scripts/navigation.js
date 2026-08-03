(() => {
  if (window.location.pathname.endsWith("/index.html")) {
    const cleanPath = window.location.pathname.slice(0, -"index.html".length);
    window.history.replaceState(
      null,
      "",
      cleanPath + window.location.search + window.location.hash,
    );
  }

  const menuToggle = document.querySelector("#menuToggle");
  const nav = document.querySelector("#nav");
  const navLinks = nav ? [...nav.querySelectorAll('a[href^="#"]')] : [];

  if (menuToggle && nav) {
    const focusableSelector =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const closeMenu = (restoreFocus = false) => {
      const wasOpen = nav.classList.contains("open");
      nav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
      if (restoreFocus && wasOpen) menuToggle.focus();
    };

    menuToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close menu" : "Open menu",
      );
      if (isOpen) nav.querySelector(focusableSelector)?.focus();
    });

    nav.addEventListener("click", (event) => {
      if (event.target.closest("a")) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") closeMenu(true);
      if (event.key !== "Tab" || !nav.classList.contains("open")) return;

      const focusableElements = [
        menuToggle,
        ...nav.querySelectorAll(focusableSelector),
      ];
      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    });

    window.addEventListener("resize", () => {
      if (window.getComputedStyle(menuToggle).display === "none") closeMenu();
    });
  }

  if (!navLinks.length) return;

  const trackedSections = navLinks
    .map((link) => {
      const target = document.querySelector(link.getAttribute("href"));
      return target ? { link, target } : null;
    })
    .filter(Boolean);

  const setActiveLink = (activeLink) => {
    navLinks.forEach((link) => {
      const isActive = link === activeLink;
      link.classList.toggle("active", isActive);
      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  let scrollFrame;
  const updateActiveLink = () => {
    scrollFrame = null;
    const headerHeight = document.querySelector(".header")?.offsetHeight || 0;
    const marker =
      window.scrollY + headerHeight + Math.min(window.innerHeight * 0.28, 220);
    let current = trackedSections[0];

    trackedSections.forEach((item) => {
      if (item.target.offsetTop <= marker) current = item;
    });

    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 4
    ) {
      current = trackedSections[trackedSections.length - 1];
    }

    if (current) setActiveLink(current.link);
  };

  const requestActiveLinkUpdate = () => {
    if (!scrollFrame)
      scrollFrame = window.requestAnimationFrame(updateActiveLink);
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", () => setActiveLink(link));
  });

  window.addEventListener("scroll", requestActiveLinkUpdate, { passive: true });
  window.addEventListener("resize", requestActiveLinkUpdate);
  window.addEventListener("load", updateActiveLink);
  updateActiveLink();
})();
