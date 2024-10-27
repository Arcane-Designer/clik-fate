// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the index page by confirming the presence of the button
    const randomButton = document.getElementById('random-button');
    const clickSound = document.getElementById('click-sound');

    if (randomButton && clickSound) {
        // Sites to choose from (adding variety)
        const sites = [
            // Existing sites
            "https://www.coolmathgames.com/",
            "https://www.nytimes.com/games/wordle/index.html",
            "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            "https://www.youtube.com/@AIMonday",
            "https://www.youtube.com",

            // New sites
            "https://www.harrypotter.com/sorting-hat",
            "https://theuselessweb.com",
            "https://www.geoguessr.com",
            "https://littlealchemy2.com",
            "https://patatap.com",
            "https://thisissand.com",
            "http://www.staggeringbeauty.com",
            "https://pointerpointer.com",
            "https://quickdraw.withgoogle.com",
            "http://weavesilk.com",
            "https://cat-bounce.com",
            "http://www.pixelthoughts.co",
            "https://www.linerider.com",
            "https://www.boredbutton.com/random",
            "https://science.nasa.gov/eyes/",
            "https://stars.chromeexperiments.com",
            "https://stellarium-web.org",
            "https://www.youtube.com/watch?v=nGeKSiCQkPw",
            "https://www.youtube.com/watch?v=dMH0bHeiRNg",
            "https://www.youtube.com/user/BadLipReading",
            "https://www.youtube.com/watch?v=MtN1YnoL46Q",
            "https://www.youtube.com/playlist?list=PL3A5849BDE0581B19",
            "https://www.youtube.com/watch?v=IvUU8joBb1Q",
            "https://www.youtube.com/watch?v=jNQXAC9IVRw",
            "https://www.youtube.com/watch?v=LACbVhgtx9I",
            "https://www.youtube.com/watch?v=9bZkp7q19f0",
            "https://www.youtube.com/channel/UCcMDMoNu66_1Hwi5-MeiQgw",
            "https://www.youtube.com/watch?v=Tx1XIm6q4r4",
            "https://www.youtube.com/watch?v=qnydFmqHuVo",
            "https://www.youtube.com/watch?v=u1ZB_rGFyeU",
            "https://www.youtube.com/watch?v=qybUFnY7Y8w",
            "https://www.youtube.com/watch?v=MejbOFk7H6c",
            "https://www.youtube.com/watch?v=QvW61K2s0tA",
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
    }

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
        if (starryLayer) {
            starryLayer.style.opacity = Math.random() * (0.5 - 0.3) + 0.3; // Random opacity between 0.3 and 0.5
        }
    }, 3000); // Change every 3 seconds

    // Additional magical touches - button pulsating effect
    if (randomButton) {
        setInterval(() => {
            randomButton.classList.toggle('pulse-effect'); // Toggle pulsating effect every few seconds
        }, 2000); // Every 2 seconds
    }

    // Email Submission Functionality
    const joinForm = document.getElementById('join-form');
    const emailInput = document.getElementById('email-input');
    const submitButton = document.getElementById('submit-button');

    if (joinForm && emailInput && submitButton) {
        joinForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent actual form submission

            // Disable the submit button to prevent multiple submissions
            submitButton.disabled = true;

            // Show a loading indicator or change button text if desired
            submitButton.textContent = 'Submitting...';

            // Prepare the template parameters
            const templateParams = {
                email: emailInput.value
            };

            // Send email using EmailJS
            emailjs.send('service_olkx64w', 'template_rb9tsjs', templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);

                // Add animation class
                submitButton.classList.add('submitted');
                emailInput.classList.add('submitted');

                // Clear the input field
                emailInput.value = '';

                // Remove the animation class after a delay
                setTimeout(() => {
                    submitButton.classList.remove('submitted');
                    emailInput.classList.remove('submitted');
                }, 2000);

                // Redirect to Thank You page after a delay (optional)
                setTimeout(() => {
                    window.location.href = 'thankyou.html';
                }, 200); // Adjust the delay as needed
            }, (error) => {
                console.log('FAILED...', error);
                document.getElementById('error-message').style.display = 'block';
                submitButton.disabled = false;
                submitButton.textContent = 'Submit';
            });
        });
    }
    
});
