document.addEventListener('DOMContentLoaded', function () {
    src="https://code.jquery.com/jquery-3.6.0.min.js"
    src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.2/dist/umd/popper.min.js"
    src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
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
    
    