import { bodyBuilder } from '$digerati/bodyBuilder';
import { currentYear } from "$digerati/currentYear";
import { faqAccordion } from '$digerati/faqAccordion';
import { skipToMainContent } from "$digerati/skipToMainContent";

window.Webflow || [];
window.Webflow.push(() => {
  bodyBuilder();
  currentYear();
  faqAccordion();
  skipToMainContent();
});