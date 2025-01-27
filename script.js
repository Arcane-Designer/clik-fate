// Wait until the document is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Check if we're on the index page by confirming the presence of the button
    const randomButton = document.getElementById('random-button');
    const clickSound = document.getElementById('click-sound');

    if (randomButton && clickSound) {
        // Sites to choose from (adding variety)
        const sites = [
          "https://www.coolmathgames.com/",
          "https://neal.fun/password-game/",
          "https://www.nytimes.com/games/wordle/index.html",
          "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
          "https://www.youtube.com/@AIMonday",
          "https://www.youtube.com",
          "https://www.harrypotter.com/sorting-hat",
          "https://theuselessweb.com",
          "https://www.geoguessr.com",
          "https://zoomquilt.org/#google_vignette",
          "https://littlealchemy2.com",
          "https://patatap.com",
          "https://findtheinvisiblecow.com/#google_vignette",
          "https://thisissand.com",
          "http://www.staggeringbeauty.com",
          "https://orteil.dashnet.org/cookieclicker/",
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
          "https://www.youtube.com/watch?v=LgmxMuW6Fsc"
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
    setInterval(() => {
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
                .then(() => {
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
    if (window.location.pathname.endsWith('clikoracle.html')) {
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

        // Mega Fortunes Array
        const fortunes = [
            { text: "You really searched that? I don’t have good news for you...", hex: "8F2242" },
            { text: "Something about your last search has disturbed the cosmic realm. The spirits are side-eyeing you hard. Run.", hex: "7D2133" },
            { text: "All your future selfies will capture you blinking, but only you won’t see it that way.", hex: "8A4559" },
            { text: "If the search bar was honest, prepare for existential dread.", hex: "983D4F" },
            { text: "Your spirit animal wonders if it’s too late to switch owners.", hex: "742A3F" },
            { text: "You will soon be haunted by a cringe memory from five years ago. If only you could un-remember it.", hex: "8C2E4A" },
            { text: "The next stranger who glances at your phone screen is destined to judge you intensely. Maybe lock that device.", hex: "9C345A" },
            { text: "Oops. That Google search has awakened a poltergeist. Expect misplaced car keys.", hex: "7E1F3A" },
            { text: "Your future includes a perplexing smell following you around. Don’t ask—just carry extra deodorant.", hex: "932E53" },
            { text: "Your next idea will bloom into brilliance, but first you must gift a friend something homemade—even if it’s just a doodle on a napkin.", hex: "2FCE5F" },
            { text: "A hidden opportunity awaits you. It will only reveal itself once you’ve danced to your favorite song in front of the mirror at midnight.", hex: "34D873" },
            { text: "A sudden stroke of genius strikes after you compliment three people today—sincerely, of course.", hex: "1DC078" },
            { text: "The universe has prepared a stroke of luck for you. To claim it, share a ridiculous meme with someone who least expects it.", hex: "31E89F" },
            { text: "You will find a lost treasure (maybe a few dollars in a coat pocket), if you sing the first nursery rhyme that pops into your head—aloud in public.", hex: "20B59C" },
            { text: "Your day glitters with unforeseen blessings, but they only manifest once you donate something—big or small—to someone in need.", hex: "3CE699" },
            { text: "You’re about to be unexpectedly praised by a person of influence if you start each morning by complimenting yourself in the mirror.", hex: "28DA7A" },
            { text: "If you selected that emoji, positivity will shower you—on the condition you message an old friend just to say hello.", hex: "2EE0B2" },
            { text: "Your next meal will bring creative inspiration, but first, write down one silly goal for the week and read it out loud.", hex: "18B56F" },
            { text: "Your sock will vanish in the laundry, but someone in the neighborhood will find it and return it with cookies.", hex: "C8A2C8" },
            { text: "With that emoji, expect admiration from strangers.", hex: "A550BF" },
            { text: "You'll almost trip on a curb, but recover with surprising grace. A small victory is still a victory.", hex: "BF78A0" },
            { text: "A social media mishap awaits you.", hex: "943E8B" },
            { text: "A pigeon will stare at you for an uncomfortably long moment, then fly away.", hex: "A25E94" },
            { text: "If you recently searched something strange, rest assured—most people won't find out... most.", hex: "CC66A2" },
            { text: "That old hobby you once gave up on will beckon you back. It won’t be as hard as you remember.", hex: "B47D9D" },
            { text: "You may be pranked by a friend tomorrow.", hex: "CE7BBE" },
            { text: "There’s a good chance you’ll find loose change soon—it might be just enough for a candy bar.", hex: "A54FAE" },
            { text: "A small misunderstanding occurs today, but it clears up before bedtime.", hex: "BB66C2" },
            { text: "Your spirit animal will appear in your dreams. Don’t say no to it.", hex: "D473CA" },
            { text: "Strangers will oddly gravitate to you for advice.", hex: "BF89B9" },
            { text: "A fleeting moment of awkward eye contact awaits you.", hex: "AE5BB0" },
            { text: "The next 10 times you pick an emoji, you’ll question your choice.", hex: "AB6FAE" },
            { text: "You’ll learn a random fact that’s both useless and might involve flamingos.", hex: "B742AB" },
            { text: "An old acquaintance will message you.", hex: "C374D1" },
            { text: "That big idea you're planning won't fully bloom, but you’ll salvage a small victory out of it.", hex: "B067B7" },
            { text: "Your posture will improve momentarily after someone jokingly calls you ‘hunchback.’", hex: "AF62CB" },
            { text: "You’ll cross paths with a lost dog soon. You won't keep it, but you’ll guide it home heroically.", hex: "D68FC5" },
            { text: "If you see a rainbow, you’ll remember a random childhood tune you used to hum. It won't leave your head.", hex: "C4589F" },
            { text: "Your phone battery will hover at an annoying 20% for hours, refusing to die or fully charge.", hex: "A858C4" },
            { text: "You’ll accidentally wave at someone who isn’t waving at you.", hex: "AC4CAB" },
            { text: "Cypher Cerberus whispers half-truths in your dreams, leaving you partly confused, partly intrigued.", hex: "992E9D" },
            { text: "You will stub your toe soon, but only lightly. A mild yelp, then it’s over.", hex: "C082CA" },
            { text: "Your favorite mug will break moments after you've finally washed it.", hex: "9A0C0C" },
            { text: "A suspicious creak in your house tonight will turn out to be... the wind. Just kidding—it's not the wind.", hex: "A01414" },
            { text: "If you're relying on luck, prepare to be tragically disappointed by midnight.", hex: "CC0000" },
            { text: "Feathers and fur will invade your next meal. Blame your spirit animal if you wish.", hex: "B62A2A" },
            { text: "203 days from now, your left shoe goes missing. You won't find it for a week.", hex: "8B0000" },
            { text: "You really did search that on Google... cosmic embarrassment is guaranteed.", hex: "8E3232" },
            { text: "Your next attempt at cooking will end in smoke. The smoke alarm won't even bother to warn you.", hex: "993232" },
            { text: "The next time you sneeze, your biggest secret spills out. Cover your mouth—and your dignity.", hex: "D20F0F" },
            { text: "Never trust the next person who compliments your hair. They have ulterior motives.", hex: "AA0E3C" },
            { text: "If you really picked that cursed emoji, you can assume what will happen to you next.", hex: "962525" },
            { text: "A strange itch will bother you for days—no cream will soothe it. Blame your hex.", hex: "7C1111" },
            { text: "Every open tab in your browser will close unexpectedly.", hex: "7F0000" },
            { text: "A close friend will make an awkward joke that you cannot unhear.", hex: "A11919" },
            { text: "Your socks will vanish mid-laundry. Only unmatching pairs will remain.", hex: "AA2F2F" },
            { text: "You will trip in public while holding a drink. Spectators will applaud.", hex: "770F0F" },
            { text: "Your next embarrassing text message misfires to your mom.", hex: "801A1A" },
            { text: "A dull ache will plague you whenever you see the color yellow. It's completely illogical, yet painful.", hex: "990022" },
            { text: "At dawn, you'll forget the punchline to the funniest joke you know. It will torment you for days.", hex: "8B2020" },
            { text: "Expect random internet outages precisely when you need a stable connection. Fate likes irony.", hex: "BA3939" },
            { text: "Your favorite show’s finale gets spoiled by a random stranger on the bus.", hex: "A51E1E" },
            { text: "Spam Skunk has scented your online presence. Your inbox will overflow with nonsense.", hex: "8A2020" },
            { text: "A crow will caw ominously every time you think you’re in the clear. You’re never in the clear.", hex: "C81E1E" },
            { text: "Every flavor of ice cream you try will taste slightly off from now on. Even chocolate. Don’t think about it too much.", hex: "B34040" },
            { text: "The next sunny day will sunburn only half your face. Talk about awkward tan lines.", hex: "9C0D0D" },
            { text: "Your phone’s autocorrect will sabotage you at the worst possible moments. 'Duck' indeed.", hex: "C81A33" },
            { text: "If you see a rainbow, it’s actually laughing at you. Don’t ask how, it just is.", hex: "B02424" },
            { text: "That cryptic dream you keep having? It's a prophecy of personal doom. Sleep tight!", hex: "990B0B" },
            { text: "Your next purchase will fail spectacularly. The warranty expires the day before it breaks.", hex: "732020" },
            { text: "You will drop your phone on your face while browsing in bed. A minor bruise, major shame.", hex: "A72A2A" },
            { text: "The next stranger who smiles at you knows your secrets. All of them.", hex: "AA231F" },
            { text: "Someone tags you in the most embarrassing photo. No take-backs, no deletes.", hex: "8D1E2F" },
            { text: "Your grand plan for tomorrow? Gone. The universe replaced it with petty chaos.", hex: "910101" },
            { text: "The next time you open the fridge, a jar will leap to its doom. Cleanup on aisle your floor.", hex: "C72020" },
            { text: "Your device will soon restart right before you hit 'Save.'", hex: "822020" },
            { text: "You will be afflicted with hiccups at the worst time in 3 years. Everyone will stare.", hex: "AA0B0B" },
            { text: "The Data Raven is jealous.", hex: "A01010" },
            { text: "Your next attempt to be funny will be met with soul-crushing silence. Ouch.", hex: "991B2B" }
        ];

        // Generate Fortune
        fateBtn.addEventListener('click', () => {
            if (!selectedEmoji) {
                alert("Choose an emoji!");
                return;
            }

            // Pick a random fortune
            const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
            fortuneText.textContent = fortune.text;
            hexCodeSpan.textContent = fortune.hex;

            // Show/hide relevant sections
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
