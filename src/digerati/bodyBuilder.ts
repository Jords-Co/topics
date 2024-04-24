/**
 * Body Builder.
 * 
 * @author Digerati <cabal@digerati.design>
 */
export const bodyBuilder = () => {
    const bodyBuilder = document.querySelector('.home_bodybuilder_animation-wrapper');
    if (bodyBuilder) {
        const bodyBuilderImages = [
            '.home_bodybuilder_english-animation', /* <-- Default */
            '.home_bodybuilder_japanese-animation',
            '.home_bodybuilder_german-animation',
            '.home_bodybuilder_spanish-animation'
        ];
        let bodyBuilderImageIndex = 0;
        bodyBuilder.addEventListener('mouseenter', () => {
            bodyBuilderImageIndex++;
            if (bodyBuilderImageIndex === bodyBuilderImages.length) {
                bodyBuilderImageIndex = 1;
            }
            bodyBuilderImages.forEach(function (item, index) {
                const bodyBuilderImage = document.querySelector(bodyBuilderImages[index]);
                bodyBuilderImage.style.opacity = index === bodyBuilderImageIndex ? 100 : 0;
            });
        });
        bodyBuilder.addEventListener('mouseleave', () => {
            bodyBuilderImages.forEach(function (item, index) {
                const bodyBuilderImage = document.querySelector(bodyBuilderImages[index]);
                bodyBuilderImage.style.opacity = index === 0 ? 100 : 0;
            });
        });
    }
};

