// script.js

// Get the elements by their IDs
const firstSection = document.getElementById('first-section');
const secondSection = document.getElementById('second-section');
const socialIcons = document.getElementById('social-icons');
const connectButton = document.getElementById('connect-button');
const closeButton = document.getElementById('close-button');

// Function to handle the transition from one section to another
function toggleSections(show, hide) {
    // Add slide-out animation to the section that will be hidden
    hide.classList.add('slide-out');
    
    // Wait for the slide-out animation to complete before hiding the section
    hide.addEventListener('animationend', () => {
        hide.classList.add('hidden');
        hide.classList.remove('slide-out');
        
        // Show the new section with a slide-in animation
        show.classList.remove('hidden');
        show.classList.add('slide-in');

        // Remove the slide-in class after the animation completes to reset the state
        show.addEventListener('animationend', () => {
            show.classList.remove('slide-in');
        }, { once: true });
    }, { once: true });
}

// Add event listener for the connect button
connectButton.addEventListener('click', () => {
    toggleSections(secondSection, firstSection);
});

// Add event listener for the close button
closeButton.addEventListener('click', () => {
    toggleSections(firstSection, secondSection);
});
