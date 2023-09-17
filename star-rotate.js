// Select the .star-red, .about-star, and .purple-star elements
const starRed = document.querySelector('.star-red');
const aboutStar = document.querySelector('.about-star');
const purpleStar = document.querySelector('.star-purple');

// Variable to track whether scrolling is active
let isScrolling = false;

// Variable to control rotation speed
let rotationSpeed = 0.2; // Adjust this value to change the rotation speed

// Function to handle scroll events
function handleScroll() {
    // Get the scroll position
    const scrollY = window.scrollY;

    // Check if scrolling is active
    if (isScrolling) {
        // Update the rotation degree based on scroll position and rotation speed
        const rotationDegree = scrollY * rotationSpeed;
        
        // Apply rotation to the elements
        starRed.style.transform = `rotate(${rotationDegree}deg)`;
        aboutStar.style.transform = `rotate(${rotationDegree}deg)`;
        purpleStar.style.transform = `rotate(${rotationDegree}deg)`;
    }
}

// Add a scroll event listener to start scrolling activity
window.addEventListener('scroll', () => {
    isScrolling = true;
    handleScroll();
});

// Add a timeout to stop scrolling activity after a short delay (e.g., 200 milliseconds)
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        isScrolling = false;
    }, 200); // Adjust the delay as needed
});

