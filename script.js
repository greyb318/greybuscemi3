document.addEventListener('DOMContentLoaded', () => {
    const mainView = document.getElementById('mainView');
    const jewelryView = document.getElementById('jewelryView');
    const jewelryVideo = document.getElementById('jewelryVideo');
    const backButton = document.getElementById('backButton');
    const jewelryButtons = document.querySelectorAll('.jewelry-btn');

    // Video sources for each jewelry piece
    const jewelryVideos = {
        piece1: 'Website2left.mp4',
        piece2: 'Website2middle.mp4',
        piece3: 'Website2right.mp4'
    };

    // Add click event listeners to jewelry buttons
    jewelryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const videoSource = jewelryVideos[button.id];
            if (videoSource) {
                // Preload the video
                const mp4Source = jewelryVideo.querySelector('source');
                mp4Source.src = videoSource;
                jewelryVideo.load();

                // Wait for video to be loaded before showing
                jewelryVideo.addEventListener('loadeddata', function onLoad() {
                    // Remove the event listener to prevent multiple calls
                    jewelryVideo.removeEventListener('loadeddata', onLoad);
                    
                    // Show video view and start playing
                    jewelryView.style.display = 'block';
                    // Use setTimeout to ensure display: block has taken effect
                    setTimeout(() => {
                        jewelryView.classList.add('active');
                        jewelryVideo.play().catch(error => {
                            console.log("Auto-play prevented:", error);
                        });
                    }, 50);
                    
                    // Hide main view after transition starts
                    setTimeout(() => {
                        mainView.style.display = 'none';
                    }, 300);
                });
            }
        });
    });

    // Back button functionality
    backButton.addEventListener('click', () => {
        // Show main view before hiding video
        mainView.style.display = 'block';
        
        // Start transition out
        jewelryView.classList.remove('active');
        
        // Wait for transition to complete before hiding
        setTimeout(() => {
            jewelryVideo.pause();
            jewelryView.style.display = 'none';
        }, 300);
    });
}); 