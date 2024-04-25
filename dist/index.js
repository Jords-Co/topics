"use strict";
(() => {
  // bin/live-reload.js
  new EventSource(`${"http://localhost:3000"}/esbuild`).addEventListener("change", () => location.reload());

  // src/digerati/bodyBuilder.ts
  var bodyBuilder = () => {
    const bodyBuilder2 = document.querySelector(".home_bodybuilder_animation-wrapper");
    if (bodyBuilder2) {
      const speechBubbleCtas = [
        ".home_hero_english-cta",
        ".home_hero_japanese-cta",
        ".home_hero_german-cta",
        ".home_hero_spanish-cta"
      ];
      const bodyBuilderImages = [
        ".home_bodybuilder_english-animation",
        /* <-- Default */
        ".home_bodybuilder_japanese-animation",
        ".home_bodybuilder_german-animation",
        ".home_bodybuilder_spanish-animation"
      ];
      let languageIndex = 0;
      bodyBuilder2.addEventListener("mouseenter", () => {
        languageIndex++;
        if (languageIndex === bodyBuilderImages.length) {
          languageIndex = 1;
        }
        bodyBuilderImages.forEach(function(item, index) {
          const bodyBuilderImage = document.querySelector(bodyBuilderImages[index]);
          const speechBubbleCtaImage = document.querySelector(speechBubbleCtas[index]);
          bodyBuilderImage.style.opacity = index === languageIndex ? 100 : 0;
          speechBubbleCtaImage.style.display = index === languageIndex ? "flex" : "none";
        });
      });
      bodyBuilder2.addEventListener("mouseleave", () => {
        bodyBuilderImages.forEach(function(item, index) {
          const bodyBuilderImage = document.querySelector(bodyBuilderImages[index]);
          const speechBubbleCtaImage = document.querySelector(speechBubbleCtaImages[index]);
          bodyBuilderImage.style.opacity = index === 0 ? 100 : 0;
          speechBubbleCtaImage.syle.display = index === 0 ? "flex" : "none";
        });
      });
    }
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

  // src/digerati/faqAccordion.ts
  var faqAccordion = () => {
    const faqItems = document.querySelectorAll(".home_faq_item");
    faqItems.forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        if (!faqItem.classList.contains("is-open")) {
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

  // src/index.ts
  window.Webflow || [];
  window.Webflow.push(() => {
    bodyBuilder();
    currentYear();
    faqAccordion();
    skipToMainContent();
  });
})();
//# sourceMappingURL=index.js.map
