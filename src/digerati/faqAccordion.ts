/**
 * FAQ Accordion.
 * 
 * @author Digerati <cabal@digerati.design>
 */
export const faqAccordion = () => {
    const faqItems = document.querySelectorAll('.home_faq_item');
    faqItems.forEach((faqItem) => {
        faqItem.addEventListener('click', () => {
            if (!faqItem.classList.contains('is-open')) {
                const openItems = document.querySelectorAll('.is-open');
                if (openItems.length) {
                    openItems.forEach((openItem) => {
                        openItem.classList.remove('is-open');
                    });
                }
                faqItem.classList.add('is-open');
            } else {
                faqItem.classList.remove('is-open');
            }
        });
    });
};

