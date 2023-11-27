document.addEventListener('DOMContentLoaded', function () {
    const header = document.getElementById('main-header');
    const logoContainer = document.querySelector('.logo-container');

    header.addEventListener('mouseenter', function () {
        header.classList.add('header-hover');
    });

    header.addEventListener('mouseleave', function (event) {
        if (!isMouseOverElement(event, logoContainer)) {
            header.classList.remove('header-hover');
        }
    });

    function isMouseOverElement(event, element) {
        const rect = element.getBoundingClientRect();
        return (
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom
        );
    }
})
    