const music = document.getElementById("backgroundMusic");
const playButton = document.getElementById("playMusic");

playButton.addEventListener("click", () => {
    if (music.paused) {
        music.play();
        playButton.textContent = "Pause Music 🎶";
    } else {
        music.pause();
        playButton.textContent = "Play Music 🎶";
    }
});
