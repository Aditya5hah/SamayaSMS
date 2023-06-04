
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