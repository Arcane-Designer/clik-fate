// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the index page by confirming the presence of the button
    const randomButton = document.getElementById('random-button');
    const clickSound = document.getElementById('click-sound');

    if (randomButton && clickSound) {
        // Sites to choose from (adding variety)
        const sites = [
            "https://www.coolmathgames.com/",
            "https://www.nytimes.com/games/wordle/index.html",
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            // ... rest of the sites array remains the same ...
            "https://www.youtube.com/watch?v=QvW61K2s0tA",
        ];

        // Array of subtle shape transformations
        const transformations = [
            { borderRadius: '50%', padding: '25px 50px', transform: 'scale(1.1)' },
            // ... rest of transformations array remains the same ...
            { borderRadius: '50% 10% 50% 10%', padding: '24px 52px', transform: 'rotate(15deg)' }
        ];

        // Function to handle button click events
        randomButton.addEventListener('click', () => {
            // Open random site
            const randomSite = sites[Math.floor(Math.random() * sites.length)];
            window.open(randomSite, '_blank');

            // Play sound
            clickSound.play().catch(error => console.log('Audio play failed:', error));

            // Apply random transformation
            const randomTransformation = transformations[Math.floor(Math.random() * transformations.length)];
            Object.assign(randomButton.style, randomTransformation);

            // Temporary glow effect
            randomButton.style.boxShadow = "0px 0px 20px 10px rgba(255, 87, 34, 0.6)";
            
            // Reset effects
            setTimeout(() => {
                randomButton.style.boxShadow = "0px 0px 15px rgba(255, 87, 34, 0.8)";
                randomButton.style.transform = "";
            }, 300);
        });
    }

    // Floating shapes animation
    const floatingShapes = document.querySelectorAll('.shape');
    floatingShapes.forEach(shape => {
        const speed = Math.random() * 5 + 5;
        const delay = Math.random() * 2;
        shape.style.cssText = `
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${speed}s ease-in-out ${delay}s infinite alternate;
        `;
    });

    // Twinkling background effect
    const starryInterval = setInterval(() => {
        const starryLayer = document.querySelector('.starry-layer');
        if (starryLayer) {
            starryLayer.style.opacity = Math.random() * 0.2 + 0.3;
        }
    }, 3000);

    // Button pulsating effect
    if (randomButton) {
        setInterval(() => {
            randomButton.classList.toggle('pulse-effect');
        }, 2000);
    }

    // Email Submission Handling
    const joinForm = document.getElementById('join-form');
    const emailInput = document.getElementById('email-input');
    const submitButton = document.getElementById('submit-button');

    if (joinForm && emailInput && submitButton) {
        joinForm.addEventListener('submit', (e) => {
            e.preventDefault();
            submitButton.disabled = true;

            emailjs.send('service_olkx64w', 'template_wx7drme', { email: emailInput.value })
                .then((response) => {
                    emailInput.value = '';
                    window.location.href = 'thankyou.html';
                })
                .catch((error) => {
                    console.log('Email failed:', error);
                    submitButton.disabled = false;
                });
        });
    }
    
    // Oracle Page Functionality
    if (window.location.pathname.includes('clikoracle.html')) {
        const emojiBtns = document.querySelectorAll('.emoji-btn');
        const fateBtn = document.getElementById('reveal-fate-btn');
        const tryAgainBtn = document.getElementById('try-again-btn');
        const fortuneText = document.getElementById('fortune-text');
        const hexCodeSpan = document.getElementById('hex-code');
        let selectedEmoji = null;

        // Emoji Selection
        emojiBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                emojiBtns.forEach(b => b.classList.remove('selected'));
                e.target.classList.add('selected');
                selectedEmoji = e.target.dataset.emoji;
            });
        });

        // Fortunes Array
        const fortunes = [
            // ... fortunes array remains the same ...
        ];

        // Generate Fortune
        fateBtn.addEventListener('click', () => {
            if (!selectedEmoji) return alert("Choose an emoji!");
            
            const searchTerms = document.getElementById('google-search').value;
            const spiritAnimal = document.getElementById('spirit-animal').value;
            const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];

            fortuneText.textContent = fortune.text
                .replace('%search%', searchTerms || "???")
                .replace('%emoji%', selectedEmoji);

            hexCodeSpan.textContent = fortune.hex;
            document.querySelector('.oracle-form').classList.add('hidden');
            document.querySelector('.result-container').classList.remove('hidden');
        });

        // Reset Game
        tryAgainBtn.addEventListener('click', () => {
            document.querySelector('.oracle-form').classList.remove('hidden');
            document.querySelector('.result-container').classList.add('hidden');
            emojiBtns.forEach(b => b.classList.remove('selected'));
            selectedEmoji = null;
        });
    }
});
