(() => {
  const script = document.currentScript;
  const measurementId = script?.dataset.measurementId;
  const privacyUrl = script?.dataset.privacyUrl || "/privacy.html";
  const storageKey = "ravi_analytics_consent";
  let analyticsLoaded = false;

  const getChoice = () => {
    try { return window.localStorage.getItem(storageKey); } catch { return null; }
  };

  const saveChoice = (choice) => {
    try { window.localStorage.setItem(storageKey, choice); } catch { /* Storage may be disabled. */ }
  };

  const loadAnalytics = () => {
    if (analyticsLoaded || !measurementId) return;
    analyticsLoaded = true;
    window[`ga-disable-${measurementId}`] = false;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("config", measurementId, { anonymize_ip: true });

    const googleTag = document.createElement("script");
    googleTag.async = true;
    googleTag.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
    document.head.append(googleTag);
    window.dispatchEvent(new CustomEvent("analytics-consent-granted"));
  };

  const removeBanner = () => document.querySelector("#cookie-banner")?.remove();

  const choose = (choice) => {
    saveChoice(choice);
    removeBanner();
    if (choice === "accepted") {
      loadAnalytics();
    } else if (measurementId) {
      window[`ga-disable-${measurementId}`] = true;
    }
  };

  const showBanner = () => {
    if (document.querySelector("#cookie-banner")) return;
    const banner = document.createElement("div");
    banner.id = "cookie-banner";
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Analytics cookie preferences");
    banner.innerHTML = `<p>This website uses analytics cookies to understand traffic and improve your experience. Read the <a href="${privacyUrl}">Privacy Policy</a>.</p><div><button id="accept-analytics" type="button">Accept</button><button id="reject-analytics" type="button">Reject</button></div>`;
    document.body.append(banner);
    document.querySelector("#accept-analytics")?.addEventListener("click", () => choose("accepted"));
    document.querySelector("#reject-analytics")?.addEventListener("click", () => choose("rejected"));
  };

  const style = document.createElement("style");
  style.textContent = `#cookie-banner{position:fixed;z-index:10000;left:16px;right:16px;bottom:16px;max-width:760px;margin:auto;padding:18px 20px;border:1px solid #39577e;border-radius:14px;background:#08111f;color:#f5f7fb;box-shadow:0 16px 50px #000a;font:16px/1.5 system-ui,sans-serif}#cookie-banner p{margin:0 0 12px;color:#d6deeb}#cookie-banner a{color:#75b5ff}#cookie-banner div{display:flex;gap:10px;flex-wrap:wrap}#cookie-banner button{min-width:100px;padding:9px 16px;border:1px solid #5d83b5;border-radius:9px;background:#1671d9;color:#fff;font:inherit;font-weight:700;cursor:pointer}#cookie-banner #reject-analytics{background:transparent}#cookie-banner button:focus-visible{outline:3px solid #8fc4ff;outline-offset:2px}`;
  document.head.append(style);

  document.addEventListener("DOMContentLoaded", () => {
    const choice = getChoice();
    if (choice === "accepted") loadAnalytics();
    else if (choice !== "rejected") showBanner();

    document.querySelector("#reset-analytics-consent")?.addEventListener("click", () => {
      try { window.localStorage.removeItem(storageKey); } catch { /* Storage may be disabled. */ }
      showBanner();
    });
  });
})();
