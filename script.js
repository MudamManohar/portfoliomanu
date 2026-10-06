const video = document.getElementById("bgVideo");
const playBtn = document.getElementById("playBtn");
const playIcon = document.getElementById("playIcon");


// ==================================================
// PLAY / PAUSE VIDEO
// ==================================================

playBtn.addEventListener("click", async function () {

    if (video.paused) {

        try {

            // Play video with sound
            await video.play();

            // Change icon to pause
            playIcon.textContent = "Ⅱ";

        } catch (error) {

            console.error("Video could not be played:", error);

        }

    } else {

        // Pause video
        video.pause();

        // Change icon to play
        playIcon.textContent = "▶";

    }

});


// ==================================================
// WHEN VIDEO FINISHES
// ==================================================

video.addEventListener("ended", function () {

    playIcon.textContent = "▶";

});


// ==================================================
// AUTO PAUSE WHEN SCROLLING AWAY FROM HOME
// ==================================================

const heroSection = document.getElementById("home");

window.addEventListener("scroll", function () {

    const heroBottom =
        heroSection.offsetTop + heroSection.offsetHeight;

    // User has scrolled away from Home
    if (window.scrollY >= heroBottom - 100) {

        if (!video.paused) {

            video.pause();

            playIcon.textContent = "▶";

        }

    }

});