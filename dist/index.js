"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/digerati/faqAccordion.ts
  var faqAccordion = () => {
    const faqItems = document.querySelectorAll(".home_faq_item");
    faqItems.forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        if (!faqItem.classList.contains("is-open")) {
          const openItems = document.querySelectorAll(".is-open");
          if (openItems.length) {
            openItems.forEach((openItem) => {
              openItem.classList.remove("is-open");
            });
          }
          faqItem.classList.add("is-open");
        } else {
          faqItem.classList.remove("is-open");
        }
      });
    });
  };

  // src/digerati/skipToMainContent.ts
  var skipToMainContent = () => {
    const trigger = document.querySelector('[dd-skip-to-main-content="trigger"]'), target = document.querySelector('[dd-skip-to-main-content="target"]');
    if (!trigger || !target) {
      return;
    }
    ["click", "keypress"].forEach((event) => {
      trigger.addEventListener(event, (e) => {
        if (e.type === "keydown" && e.which !== 13) {
          return;
        }
        e.preventDefault();
        target.setAttribute("tabindex", "-1");
        target.focus();
      });
    });
  };

  // src/digerati/currentYear.ts
  var currentYear = () => {
    const target = document.querySelector('[dd-date="current-year"]');
    if (!target) {
      return;
    }
    const fullYear = (/* @__PURE__ */ new Date()).getFullYear();
    target.innerText = fullYear.toString();
  };

  // src/index.ts
  window.Webflow || [];
  window.Webflow.push(() => {
    skipToMainContent();
    currentYear();
    faqAccordion();
  });
})();
//# sourceMappingURL=index.js.map
