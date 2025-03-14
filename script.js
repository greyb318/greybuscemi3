document.addEventListener('DOMContentLoaded', () => {
    const landingPage = document.querySelector('.landing-page');
    const videoContainer = document.getElementById('videoContainer');
    const videoPlayer = document.getElementById('videoPlayer');
    const backButton = document.getElementById('backButton');
    const polygonButtons = document.querySelectorAll('.polygon-btn');

    // Video sources for each button
    const videoSources = {
        btn1: 'video1.mp4',
        btn2: 'video2.mp4',
        btn3: 'video3.mp4'
    };

    // Add click event listeners to polygon buttons
    polygonButtons.forEach(button => {
        button.addEventListener('click', () => {
            const videoSource = videoSources[button.id];
            if (videoSource) {
                videoPlayer.src = videoSource;
                landingPage.style.display = 'none';
                videoContainer.style.display = 'flex';
                videoPlayer.play();
            }
        });
    });

    // Back button functionality
    backButton.addEventListener('click', () => {
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        videoContainer.style.display = 'none';
        landingPage.style.display = 'block';
    });
}); 