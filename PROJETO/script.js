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

    function login() {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const user = JSON.parse(storedUser);
            const emailInput = document.getElementById('email').value;
            const passwordInput = document.getElementById('password').value;
    
            if (emailInput === user.email && passwordInput === user.password) {
                showMessage('Login bem-sucedido!');
                // Aqui você pode redirecionar o usuário para a página de perfil, por exemplo
            } else {
                showMessage('Credenciais inválidas. Tente novamente.');
            }
        } else {
            showMessage('Usuário não cadastrado. Faça o cadastro primeiro.');
        }
    
        // Retorna false para evitar o envio real do formulário
        return false;
    }
    
    function saveUser(name, email, password) {
        const user = {
            name: name,
            email: email,
            password: password
        };
        localStorage.setItem('user', JSON.stringify(user));
    }
    
    function showMessage(message) {
        // Cria um elemento de mensagem
        var messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = message;
    
        // Adiciona a mensagem ao contêiner de mensagens
        document.getElementById('message-container').appendChild(messageElement);
    
        // Remove a mensagem após alguns segundos
        setTimeout(function () {
            messageElement.remove();
        }, 5000);
    }
    

    function saveUser(name, email, password) {
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const newUser = { name, email, password };

        // Verifica se o usuário já existe
        const existingUser = storedUsers.find(user => user.email === email);
        if (existingUser) {
            alert('Este e-mail já está cadastrado. Faça login ou use outro e-mail.');
            return false;
        }

        storedUsers.push(newUser);
        localStorage.setItem('users', JSON.stringify(storedUsers));
        showMessage('Cadastro realizado com sucesso!');
        return false; // Evita o envio real do formulário
    }

    function formatPhoneNumber(input) {
        // Remove caracteres não numéricos
        let phoneNumber = input.value.replace(/\D/g, '');

        // Aplica a formatação (##) ####-####
        if (phoneNumber.length === 11) {
            phoneNumber = phoneNumber.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
            input.value = phoneNumber;
        }
    }

    function validateForm() {
        // Limpar campos de texto
        document.getElementById("registrationForm").reset();
        // Retorna false para evitar o envio real do formulário
        return false;
    }

    function showMessage(message) {
        // Cria um elemento de mensagem
        var messageElement = document.createElement("div");
        messageElement.className = "success-message";
        messageElement.innerHTML = message;

        // Adiciona a mensagem ao contêiner de mensagens
        document.getElementById("message-container").appendChild(messageElement);

        // Remove a mensagem após alguns segundos
        setTimeout(function () {
            messageElement.remove();
        }, 5000);
    }
});

    
    