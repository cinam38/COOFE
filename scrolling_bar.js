
// JavaScript to pause scrolling when hovered
document.addEventListener("DOMContentLoaded", function () {
    const scrollingBar = document.querySelector('.scrolling-bar p');

    scrollingBar.addEventListener('mouseover', function () {
        scrollingBar.style.animationPlayState = 'paused';  // Pause the animation
    });

    scrollingBar.addEventListener('mouseout', function () {
        scrollingBar.style.animationPlayState = 'running';  // Resume the animation
    });
});
