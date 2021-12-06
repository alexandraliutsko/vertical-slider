import checkDirection from "./check-direction.js";

const upBtn = document.querySelector('.up-btn');
const downBtn = document.querySelector('.down-btn');
const slideStateParams = {
    isSlideChange : false,
    activeSlideIndex: 0,
    activeTextIndex: 0,
    height: document.querySelector('.wrapper').clientHeight
};

upBtn.addEventListener('click', () => checkDirection(slideStateParams, 'up'));

downBtn.addEventListener('click', () => checkDirection(slideStateParams, 'down'));

document.addEventListener('keydown', function(event) {
    if (event.code === 'ArrowDown') {
        checkDirection(slideStateParams, 'down');
    } else if (event.code === 'ArrowUp') {
        checkDirection(slideStateParams, 'up');
    }
});