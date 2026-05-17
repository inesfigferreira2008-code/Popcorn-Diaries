/* =========================
   LIGHTBOX GALERIA
========================= */

const galeriaImgs = document.querySelectorAll('.galeria-img');

const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

galeriaImgs.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
    });
});

if (lightboxClose) {
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
}

if (lightbox) {
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}

/* =========================
   VIDEO CONTROLS
========================= */

const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const soundBtn = document.getElementById('soundBtn');

if (video && playPauseBtn && soundBtn) {

    // PLAY / PAUSE
    playPauseBtn.addEventListener('click', () => {

        if (video.paused) {
            video.play();
            playPauseBtn.textContent = '⏸';
        } else {
            video.pause();
            playPauseBtn.textContent = '▶';
        }
    });

    // SOM
    soundBtn.addEventListener('click', () => {
        video.muted = !video.muted;
        soundBtn.textContent = video.muted ? '🔇' : '🔊';
    });
}