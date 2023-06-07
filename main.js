
function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function handleScrollAnimations() {
    var animatedElements = document.querySelectorAll('.animated');
    animatedElements.forEach(function(element) {
        if (isInViewport(element)) {
            element.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', function() {
    handleScrollAnimations();
});

handleScrollAnimations();


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateElements() {
    var slideLeftElements = document.querySelectorAll('.slide-left');
    var slideRightElements = document.querySelectorAll('.slide-right');

    slideLeftElements.forEach(function (element) {
        if (isInViewport(element)) {
            element.classList.add('fade-in');
        }
    });

    slideRightElements.forEach(function (element) {
        if (isInViewport(element)) {
            element.classList.add('fade-in');
        }
    });
}

window.addEventListener('scroll', animateElements);
window.addEventListener('resize', animateElements);
window.addEventListener('load', animateElements);