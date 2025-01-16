 // Mobile Menu Toggle
        document.querySelector('.menu-toggle').addEventListener('click', () => {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Story Modal Functionality
        const storyItems = document.querySelectorAll('.story-item');
        const modal = document.querySelector('.story-modal');
        const modalImage = document.querySelector('.story-modal-image');
        const closeModal = document.querySelector('.close-modal');

        storyItems.forEach(item => {
            item.addEventListener('click', () => {
                const imgSrc = item.querySelector('.story-image').src;
                modalImage.src = imgSrc;
                modal.style.display = 'block';
            });
        });

        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });

        // Button Click Event
        document.querySelector('.btn').addEventListener('click', () => {
            alert('Thanks for clicking! Explore more features soon.');
        });
       
       const webApps = [
            { name: 'QR Code Generator', description: 'Streamline your workflow and manage projects effectively with our intuitive project management solution.', link: 'qr_code_gen.html', category: 'Generator' },
            { name: 'Passport Photo Crop', description: 'Stay organized and boost productivity with our comprehensive task tracking system.', link: 'passport_zise_photo_crop.html', category: 'Edition' },
            { name: 'Temp Video Player', description: 'Take control of your finances with our smart budget planning and expense tracking tools.', link: 'temp_video_player.html', category: 'Media_Tools' }
        ];

        const appList = document.getElementById('appList');
        const categoryFilter = document.getElementById('categoryFilter');
        const searchInput = document.getElementById('searchInput');

        const displayApps = (apps) => {
            appList.innerHTML = '';
            apps.forEach(app => {
                const appItem = document.createElement('div');
                appItem.classList.add('app-item');
                appItem.innerHTML = `
                    <span class="category-badge category-${app.category}">${app.category}</span>
                    <h3>${app.name}</h3>
                    <p>${app.description}</p>
                    <a href="${app.link}" target="_blank">Launch App →</a>
                `;
                appList.appendChild(appItem);
            });
        };

        displayApps(webApps);

        categoryFilter.addEventListener('change', function() {
            const selectedCategory = this.value;
            const searchValue = searchInput.value.toLowerCase();
            const filteredApps = webApps.filter(app => 
                (selectedCategory === 'all' || app.category === selectedCategory) &&
                app.name.toLowerCase().includes(searchValue)
            );
            displayApps(filteredApps);
        });
   
        searchInput.addEventListener('input', function() {
            const searchValue = this.value.toLowerCase();
            const selectedCategory = categoryFilter.value;
            const filteredApps = webApps.filter(app => 
                (selectedCategory === 'all' || app.category === selectedCategory) &&
                app.name.toLowerCase().includes(searchValue)
            );
            displayApps(filteredApps);
        });
