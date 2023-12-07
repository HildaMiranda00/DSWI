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

    const coverImage = document.getElementById('coverImage');
    const galleryContainer = document.getElementById('galleryContainer');

    const images = [
        'C02.jpg',
        'B02.jpg',
        'B01.jpg',
        'A02.jpg',
        'A1.jpg',
        'C01.jpg',
        'D01.jpg',
        'D02.jpg',
        'D03.jpg',
        'D04.jpg',
        'E01.jpg',
    ];

    let currentIndex = 0;
    const closeButton = document.querySelector('.close-modal');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    closeButton.addEventListener('click', function () {
        closeLightbox();
    });

    prevButton.addEventListener('click', function () {
        navigate(-1);
    });

    nextButton.addEventListener('click', function () {
        navigate(1);
    });

    images.forEach(function (imageSrc, index) {
        const galleryItem = document.createElement('div');
        galleryItem.classList.add('gallery-item');

        const image = document.createElement('img');
        image.src = imageSrc;
        image.alt = 'Catalog Image';
        galleryItem.appendChild(image);

        galleryItem.addEventListener('click', function () {
            currentIndex = index;
            openLightbox(imageSrc);
        });

        galleryContainer.appendChild(galleryItem);
    });

    coverImage.addEventListener('click', function () {
        openLightbox('cover-image.jpg');
    });

    // Adicione um event listener para o formulário
    document.getElementById('registrationForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Obtenha os valores do formulário
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const phone = document.getElementById('phone').value;
        const gender = document.getElementById('gender').value;

        // Chame a função saveUser
        saveUser(name, email, password, phone, gender);
    });

    function openLightbox(imageSrc) {
        const lightboxModal = document.querySelector('.lightbox-modal');
        const lightboxContent = document.querySelector('.lightbox-content img');
        const lightboxNavigation = document.querySelector('.lightbox-navigation');

        if (imageSrc) {
            lightboxContent.src = imageSrc;
            lightboxNavigation.style.display = 'flex';
            closeButton.style.display = 'block';
            lightboxModal.style.display = 'flex';
        }
    }

    function closeLightbox() {
        const lightboxModal = document.querySelector('.lightbox-modal');
        lightboxModal.style.display = 'none';
    }

    function navigate(direction) {
        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = images.length - 1;
        } else if (currentIndex >= images.length) {
            currentIndex = 0;
        }

        const imageSrc = images[currentIndex];
        openLightbox(imageSrc);
    }
    });





    
    