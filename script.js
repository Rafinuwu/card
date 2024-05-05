const envelope = document.getElementById('envelope');
const content = document.getElementById('content');
const image = document.getElementById('image');

let isOpen = false;

envelope.addEventListener('click', () => {
    if (isOpen) {
        envelope.style.display = 'none'; // Hide envelope when opened
        isOpen = false;
    } else {
        envelope.style.display = 'none';
        content.style.display = 'block';
        image.style.animation = 'flyIn 1s ease forwards'; // Add flyIn animation
        isOpen = true;
    }
});

// Animation to fly image back into the envelope
image.addEventListener('animationend', () => {
    if (isOpen) {
        envelope.style.display = 'block';
        content.style.display = 'none';
        image.style.animation = ''; // Reset animation
        isOpen = false;
    }
});
