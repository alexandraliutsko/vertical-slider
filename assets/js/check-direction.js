import changeSlide from "./change-slide.js";

export default function checkDirection(slideStateParams, direction) {
    const slides = document.querySelector('.slides').children;

    if (!slideStateParams.isSlideChange) {
        if (direction === 'up') {
            if (slideStateParams.activeSlideIndex === (slides.length - 1) && slideStateParams.activeTextIndex === (slides.length - 1)) {
                changeSlide(slideStateParams, 0, (slides.length - 1), 'up');
            } else {
                changeSlide(slideStateParams, slideStateParams.activeSlideIndex + 1, slideStateParams.activeSlideIndex, 'up');
            }
        }

        if (direction === 'down') {
            if (slideStateParams.activeSlideIndex === 0 && slideStateParams.activeTextIndex === 0) {
                changeSlide(slideStateParams, (slides.length - 1), 0, 'down');
            } else {
                changeSlide(slideStateParams, slideStateParams.activeSlideIndex - 1, slideStateParams.activeSlideIndex, 'down');
            }
        }
    }
}