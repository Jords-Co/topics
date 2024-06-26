/**
 * Body Builder.
 * 
 * @author Digerati <cabal@digerati.design>
 */
export const bodyBuilder = () => {
    const bodyBuilder = document.querySelector('.home_bodybuilder_animation-wrapper');
    if (bodyBuilder) {
        const speechBubbleCtas = [
            '.home_hero_english-cta', /* <-- Default */
            '.home_hero_japanese-cta',
            '.home_hero_german-cta',
            '.home_hero_spanish-cta'
        ];
        const bodyBuilders = [
            '.home_bodybuilder_english-animation', /* <-- Default */
            '.home_bodybuilder_japanese-animation',
            '.home_bodybuilder_german-animation',
            '.home_bodybuilder_spanish-animation'
        ];
        let languageIndex = 0;
        bodyBuilder.addEventListener('mouseenter', () => {
            languageIndex++;
            if (languageIndex === bodyBuilders.length) {
                languageIndex = 1;
            }
            bodyBuilders.forEach(function (item, index) {
                const bodyBuilderImage = document.querySelector(bodyBuilders[index]);
                const speechBubbleCtaImage = document.querySelector(speechBubbleCtas[index]);
                bodyBuilderImage.style.opacity = index === languageIndex ? 100 : 0;
                speechBubbleCtaImage.style.display = index === languageIndex ? 'flex' : 'none';
            });
        });
        bodyBuilder.addEventListener('mouseleave', () => {
            bodyBuilders.forEach(function (item, index) {
                const bodyBuilderImage = document.querySelector(bodyBuilders[index]);
                const speechBubbleCtaImage = document.querySelector(speechBubbleCtas[index]);
                bodyBuilderImage.style.opacity = index === 0 ? 100 : 0;
                speechBubbleCtaImage.style.display = index === 0 ? 'flex' : 'none';
            });
        });
    }
};

