const envelope = document.getElementById('envelope');
const content = document.getElementById('content');
const image = document.getElementById('image');

let isOpen = false;

envelope.addEventListener('click', () => {
    if (isOpen) {
        envelope.style.display = 'none'; // Hide envelope when opened
        isOpen = false;
    } else {
        // Change the image source to the path of your image file
        image.src = 'hmmmm.png';
        content.style.display = 'block';
        isOpen = true;
    }
});
