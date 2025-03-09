// Array of image URLs for the slider
const images = [
    "https://picsum.photos/id/237/500/300",
    "https://picsum.photos/id/238/500/300",
    "https://picsum.photos/id/239/500/300",
    "https://picsum.photos/id/240/500/300"
];

// Track the current image index
let currentIndex = 0; 

// Get image element
const sliderImage = document.getElementById("sliderImage");

// Function to update the displayed image
function updateImage() {
    sliderImage.src = images[currentIndex];
}

// Event listener for Next button
document.getElementById("nextBtn").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length; // Move to the next image
    updateImage();
});

// Event listener for Prev button
document.getElementById("prevBtn").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length; // Move to the previous image
    updateImage();
});

// Initialize the first image
updateImage();
