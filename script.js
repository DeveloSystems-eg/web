// Smooth scrolling for navigation links

console.log("JavaScript is active.");

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Video Background with Smooth Transitions
const videoElement = document.getElementById('bg-video');

const videoPaths = [
    'videos/3129957-uhd_3840_2160_25fps.mp4',
    'videos/3024112-hd_1920_1080_25fps.mp4',
    'videos/1851190-uhd_3840_2160_25fps.mp4',
    'videos/856938-hd_1920_1080_24fps.mp4',
    'videos/5649212-uhd_3840_2160_25fps.mp4',
    'videos/5091624-hd_1920_1080_24fps.mp4',
    'videos/3130182-uhd_3840_2160_30fps.mp4',
    'videos/8303104-hd_1920_1080_24fps.mp4'
];

let currentVideoIndex = 0;

function fadeIn(element) {
    element.style.opacity = 0;
    element.style.display = 'block';

    let opacity = 0;
    const fadeInterval = setInterval(() => {
        if (opacity < 1) {
            opacity += 0.05;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeInterval);
        }
    }, 50);
}

function fadeOut(element, callback) {
    let opacity = 1;

    const fadeInterval = setInterval(() => {
        if (opacity > 0) {
            opacity -= 0.05;
            element.style.opacity = opacity;
        } else {
            clearInterval(fadeInterval);
            element.style.display = 'none';
            callback();
        }
    }, 50);
}

function playNextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoPaths.length;
    videoElement.src = videoPaths[currentVideoIndex];

    fadeIn(videoElement);
    videoElement.play();
}

videoElement.addEventListener('ended', () => {
    fadeOut(videoElement, playNextVideo);
});

// Start the first video
videoElement.src = videoPaths[currentVideoIndex];
fadeIn(videoElement);
videoElement.play();
