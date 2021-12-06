export default function changeSlide(slideStateParams, startIndexSlide, nextIndexSlide, buttonDirection) {
    const textSlides = document.querySelector('.text-slides').children;
    const slides = document.querySelector('.slides').children;

    slideStateParams.isSlideChange = true;

    if (buttonDirection === 'up') {
        slideStateParams.directionUp = -1;
        slideStateParams.directionDown = 1;
    } else if (buttonDirection === 'down') {
        slideStateParams.directionUp = 1;
        slideStateParams.directionDown = -1;
    }

    slides[startIndexSlide].style.transform = `translateY(${slideStateParams.height * slideStateParams.directionDown}px)`; /*поднимаю следующую картинку*/
    textSlides[startIndexSlide].style.transform = `translateY(${slideStateParams.height * slideStateParams.directionUp}px)`; /*опускаю следующий текст*/

    setTimeout(() => {
        slides[startIndexSlide].style.opacity = '1'; /*показываю следующую картинку*/
        slides[nextIndexSlide].style.transform = `translateY(${slideStateParams.height * slideStateParams.directionUp}px)`; /*опускаю текущую картинку*/
        slides[startIndexSlide].style.transform = `translateY(0px)`; /*опускаю следующую картинку*/

        textSlides[startIndexSlide].style.opacity = '1'; /*показываю следующий текст*/
        textSlides[nextIndexSlide].style.transform = `translateY(${slideStateParams.height * slideStateParams.directionDown}px)`; /*поднимаю текущий текст*/
        textSlides[startIndexSlide].style.transform = `translateY(0px)`; /*поднимаю следующий текст*/

        setTimeout(() => {
            slides[nextIndexSlide].style.opacity = '0'; /*скрываю текущую картинку*/

            textSlides[nextIndexSlide].style.opacity = '0'; /*скрываю текущий текст*/

            setTimeout(() => {
                slides[nextIndexSlide].style.transform = `translateY(0px)`; /*поднимаю текущую картинку на место*/

                textSlides[nextIndexSlide].style.transform = `translateY(0px)`; /*опускаю текущий текст на место*/

                slideStateParams.isSlideChange = false;
                slideStateParams.activeSlideIndex = startIndexSlide;
                slideStateParams.activeTextIndex = startIndexSlide;
            }, 300);
        }, 300);
    }, 300);
}