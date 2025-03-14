# Interactive Photo Experience

This is an interactive website that displays a photo with three clickable polygon buttons. When clicked, each button plays a corresponding video.

## Setup Instructions

1. The landing photo `website2title.jpg` should already be in your repository
2. Place your three videos in the root directory and name them:
   - `video1.mp4`
   - `video2.mp4`
   - `video3.mp4`

## Customizing Button Positions

To position the polygon buttons on your photo, you'll need to modify the CSS for each button. In the `styles.css` file, add specific positioning for each button using the following format:

```css
#btn1 {
    top: 20%;
    left: 30%;
}

#btn2 {
    top: 40%;
    left: 50%;
}

#btn3 {
    top: 60%;
    left: 70%;
}
```

Adjust the percentage values to match the positions of the white polygons in your photo.

## Running the Website

You can run this website using any local web server. For example, using Python's built-in server:

```bash
python -m http.server 8000
```

Then open your browser and navigate to `http://localhost:8000`

## Features

- Responsive design that works on all screen sizes
- Smooth transitions between photo and video views
- Back button to return to the photo
- Hover effects on the polygon buttons
- Video controls for playback 