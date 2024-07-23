// Function to create and show the text "Arc"
function showArcText() {
    // Create the text element
    var arcText = document.createElement('div');
    arcText.innerText = 'Arc';
    arcText.id = 'arcText';
    arcText.style.position = 'fixed';
    arcText.style.top = '50%';
    arcText.style.left = '50%';
    arcText.style.transform = 'translate(-50%, -50%)';
    arcText.style.fontSize = '2em';
    arcText.style.color = 'white';
    arcText.style.backgroundColor = 'black';
    arcText.style.padding = '10px';
    arcText.style.borderRadius = '5px';
    arcText.style.zIndex = '9999';
    document.body.appendChild(arcText);

    // Remove the text after 2 seconds
    setTimeout(() => {
        document.body.removeChild(arcText);
        showMobileContainer();
    }, 2000);
}

// Function to create and show the mobile container with animation
function showMobileContainer() {
    // Create the container element
    var container = document.createElement('div');
    container.id = 'mobileContainer';
    container.style.position = 'fixed';
    container.style.bottom = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '200px';
    container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    container.style.color = 'white';
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.transform = 'translateY(100%)';
    container.style.transition = 'transform 0.5s ease-in-out';
    container.innerHTML = '<p>Mobile Container</p>';
    document.body.appendChild(container);

    // Trigger the animation
    setTimeout(() => {
        container.style.transform = 'translateY(0)';
    }, 100);
}

// Initialize the functions
showArcText();
