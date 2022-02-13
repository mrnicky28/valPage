const downButton = document.querySelector('.down-button');
const upButton = document.querySelector('.up-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container')
const mainslide = document.querySelector('.main-slide');
const slidesCount = mainslide.querySelectorAll('.slides').length;

let activeSlideIndex = 0;

sidebar.style.top = `-${(slidesCount - 1)*100}vh`;

// upButton.addEventListener('click', () => {
//     changeSlide('up')
// });

downButton.addEventListener('click', () => {
    changeSlide('down')
});

document.addEventListener('keyup', (event) => {
    if (event.key === 'ArrowUp') {
        changeSlide('up')
    } else if (event.key === 'ArrowDown') {
        changeSlide('down')
    }
});

window.addEventListener('scroll', function() {
    console.log('erfge');
});

function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0
        }
    } else if (direction === 'down') {
        activeSlideIndex--
        if (activeSlideIndex < 0) {
            activeSlideIndex = slidesCount - 1
        }
    }

    const height = container.clientHeight;

    mainslide.style.transform = `translateY(-${activeSlideIndex*height}px)`;
    sidebar.style.transform = `translateY(${activeSlideIndex*height}px)`
}