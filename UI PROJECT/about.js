// Constant for the active class name
const ACTIVECLASS = 'active';

// Select all elements with the class '.flex-card-container'
const IMAGES = document.querySelectorAll('.flex-card-container');

// Function to remove the active class from the currently active element
function removeActiveClass() {
    const elm = document.querySelector(`.${ACTIVECLASS}`);
    if (elm) {
        elm.classList.remove(ACTIVECLASS);
    }
}

// Function to add the active class to a clicked element
function addClass(event) {
    event.stopPropagation();
    removeActiveClass(); // First, remove the active class if it's set on any element
    const target = event.currentTarget;
    target.classList.add(ACTIVECLASS); // Then, add the active class to the clicked element
}

// Attach a click listener to each image/card
IMAGES.forEach(image => {
    image.addEventListener('click', addClass);
});
