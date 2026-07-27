(() => {
  const form = document.querySelector("#contactForm");
  const status = document.querySelector("#contactFormStatus");

  if (!form || !status) return;

  const fields = [...form.querySelectorAll("input:not([type='hidden']):not(.form-honeypot), textarea")];
  const submitButton = form.querySelector("button[type='submit']");
  const endpoint = "https://api.web3forms.com/submit";
  let statusTimer;
  const messages = {
    contactName: "Enter your name using at least 2 characters.",
    contactEmail: "Enter a valid email address.",
    contactSubject: "Enter a subject using at least 3 characters.",
    contactMessage: "Enter a message using at least 20 characters."
  };

  const showStatus = (message, type = "") => {
    window.clearTimeout(statusTimer);
    status.textContent = message;
    status.className = "form-status wide";
    if (type) status.classList.add(`is-${type}`);
    if (message && type) {
      statusTimer = window.setTimeout(() => {
        status.textContent = "";
        status.className = "form-status wide";
      }, 10000);
    }
  };

  const setFieldState = (field, showError = true) => {
    const value = field.value.trim();
    if (field.value !== value && field.type !== "email") field.value = value;
    const error = document.querySelector(`#${field.id}Error`);
    const isValid = field.checkValidity();
    field.setAttribute("aria-invalid", String(!isValid));
    field.closest(".form-field")?.classList.toggle("has-error", !isValid);
    if (error) error.textContent = !isValid && showError ? messages[field.id] : "";
    return isValid;
  };

  fields.forEach((field) => {
    field.addEventListener("blur", () => setFieldState(field));
    field.addEventListener("input", () => {
      if (field.getAttribute("aria-invalid") === "true") setFieldState(field);
      showStatus("");
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    showStatus("");

    const invalidField = fields.find((field) => !setFieldState(field));
    if (invalidField) {
      showStatus("Please correct the highlighted fields.", "error");
      invalidField.focus();
      return;
    }

    if (form.elements.botcheck.checked) return;

    const originalLabel = submitButton.childNodes[0].textContent;
    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    submitButton.childNodes[0].textContent = "Sending… ";
    showStatus("Sending your message…");

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
        signal: controller.signal
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      form.reset();
      fields.forEach((field) => {
        field.removeAttribute("aria-invalid");
        field.closest(".form-field")?.classList.remove("has-error");
        const error = document.querySelector(`#${field.id}Error`);
        if (error) error.textContent = "";
      });
      showStatus("Success! Your message has been sent. I’ll get back to you soon.", "success");
      status.focus({ preventScroll: true });
    } catch (error) {
      const message = error.name === "AbortError"
        ? "The request timed out. Please check your connection and try again."
        : `Message not sent: ${error.message || "Please try again shortly."}`;
      showStatus(message, "error");
      status.focus({ preventScroll: true });
    } finally {
      window.clearTimeout(timeout);
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
      submitButton.childNodes[0].textContent = originalLabel;
    }
  });
})();
