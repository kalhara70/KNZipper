const webApps = [
            { name: 'QR Code Generator', description: 'With our QR code generator, you can convert any URL or TEXT into a qr code. You can use it anywhere.', link: 'qr_code_gen.html' , category: 'Generator' },
            { name: 'Passport Photo Croper', description: 'Stay organized and boost productivity with our comprehensive task tracking system.', link: 'passport_zise_photo_crop.html', category: 'Editions' },
            { name: 'Temp Video Player', description: 'Take control of your finances with our smart budget planning and expense tracking tools.', link: 'temp_video_player.html', category: 'Media_Tools' },
            { name: 'Code Editor', description: 'Write, edit, and debug code efficiently with our powerful online development environment.', link: 'https://example.com/code-editor', category: 'development' },
            { name: 'Investment Tracker', description: 'Monitor your investments and make informed decisions with real-time market insights.', link: 'https://example.com/investment-tracker', category: 'finance' }
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
        
         // New navigation menu toggle function
        document.querySelector('.menu-toggle').addEventListener('click', () => {
            document.querySelector('.nav-links').classList.toggle('active');
        });
