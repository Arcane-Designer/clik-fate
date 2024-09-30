// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    const randomButton = document.getElementById('random-button');
    const clickSound = document.getElementById('click-sound');

    // Sites to choose from (adding variety)
    const sites = [
        "https://www.coolmathgames.com/",
        "https://www.nytimes.com/games/wordle/index.html",
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        "https://www.youtube.com/@AIMonday",
        "https://www.youtube.com"
    ];

    // Array of subtle shape transformations
    const transformations = [
        { borderRadius: '50%', padding: '25px 50px', transform: 'scale(1.1)' }, // Circle, slightly larger
        { borderRadius: '10% / 40%', padding: '20px 45px', transform: 'rotate(5deg)' }, // Squished oval, slight tilt
        { borderRadius: '25%', padding: '22px 48px', transform: 'skewX(5deg)' }, // Rounded square with skew
        { borderRadius: '5% / 15%', padding: '20px 55px', transform: 'rotate(-3deg)' }, // Rectangle with a slight rotation
        { borderRadius: '15% 70% 15% 70% / 40% 10% 40% 10%', padding: '20px 60px', transform: 'rotate(10deg)' }, // Wavy shape
        { borderRadius: '20% 50% 50% 20%', padding: '22px 60px', transform: 'scale(1.05)' }, // Asymmetric
        { borderRadius: '35%', padding: '23px 47px', transform: 'rotate(-10deg)' }, // A blob-like rounded shape
        { borderRadius: '50% 10% 50% 10%', padding: '24px 52px', transform: 'rotate(15deg)' } // A fun, wavy shape
    ];

    // Function to handle button click events
    randomButton.addEventListener('click', () => {
        // Choose a random site and open it in a new tab
        const randomSite = sites[Math.floor(Math.random() * sites.length)];
        window.open(randomSite, '_blank');

        // Play the click sound
        clickSound.play();

        // Apply a random transformation to the button
        const randomTransformation = transformations[Math.floor(Math.random() * transformations.length)];
        randomButton.style.borderRadius = randomTransformation.borderRadius;
        randomButton.style.padding = randomTransformation.padding;
        randomButton.style.transform = randomTransformation.transform;

        // Temporarily add a subtle glow to the button on click
        randomButton.style.boxShadow = "0px 0px 20px 10px rgba(255, 87, 34, 0.6)";
        
        // Remove the glow effect after a short delay
        setTimeout(() => {
            randomButton.style.boxShadow = "0px 0px 15px rgba(255, 87, 34, 0.8)";
            randomButton.style.transform = "none"; // Smoothly return to original position
        }, 300); // 300ms delay to keep the effect brief
    });

    // Function to animate the floating shapes gently
    const floatingShapes = document.querySelectorAll('.shape');
    floatingShapes.forEach(shape => {
        const speed = Math.random() * 5 + 5; // Random speed between 5s and 10s
        const delay = Math.random() * 2; // Random delay between 0 and 2s
        const startX = Math.random() * 100; // Random starting x-position
        const startY = Math.random() * 100; // Random starting y-position

        // Assign random starting positions
        shape.style.left = `${startX}%`;
        shape.style.top = `${startY}%`;

        // Apply animations
        shape.style.animation = `float ${speed}s ease-in-out ${delay}s infinite alternate`;
    });

    // Adding an additional subtle twinkling effect to the stars in the background
    setInterval(() => {
        const starryLayer = document.querySelector('.starry-layer');
        starryLayer.style.opacity = Math.random() * (0.5 - 0.3) + 0.3; // Random opacity between 0.3 and 0.5
    }, 3000); // Change every 3 seconds

    // Additional magical touches - button pulsating effect
    setInterval(() => {
        randomButton.classList.toggle('pulse-effect'); // Toggle pulsating effect every few seconds
    }, 2000); // Every 2 seconds
});