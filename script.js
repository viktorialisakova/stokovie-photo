    // Элементы интерфейса для управления модальным окном
        const overlay = document.getElementById('fullscreenOverlay');
        const fullscreenImg = document.getElementById('fullscreenImg');
        const closeBtn = document.getElementById('closeBtn');
        const photoCards = document.querySelectorAll('.photo-card');

        // Функция открытия фото во весь экран
        photoCards.forEach(card => {
            card.addEventListener('click', () => {
                // Извлекаем ссылку на HD изображение из дата-атрибута `data-full`
                const fullSizeUrl = card.getAttribute('data-full');
                
                // Устанавливаем эту ссылку в тег картинки внутри модального окна
                fullscreenImg.src = fullSizeUrl;
                
                // Активируем анимацию появления, добавляя классы
                overlay.classList.add('active');
                document.body.classList.add('no-scroll'); // блокируем прокрутку основного сайта
            });
        });

        // Функция закрытия полноэкранного режима
        function closeGallery() {
            overlay.classList.remove('active');
            document.body.classList.remove('no-scroll');
            // Очищаем src после завершения анимации, чтобы при следующем открытии не моргала старая картинка
            setTimeout(() => {
                if(!overlay.classList.contains('active')) {
                    fullscreenImg.src = '';
                }
            }, 400);
        }

        // Закрытие при клике на крестик
        closeBtn.addEventListener('click', closeGallery);

        // Закрытие при клике на любое пустое место темного фона (overlay)
        overlay.addEventListener('click', (event) => {
            // Проверяем, что кликнули именно по фону, а не по самой картинке
            if (event.target === overlay) {
                closeGallery();
            }
        });

        // Закрытие по нажатию клавиши Escape для удобства пользователей
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeGallery();
            }
        });

    
