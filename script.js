const envelope = document.getElementById('envelope');
const content = document.getElementById('content');
const image = document.getElementById('image');

let isOpen = false;

envelope.addEventListener('click', () => {
    if (isOpen) {
        content.style.display = 'none';
        isOpen = false;
    } else {
        // Change the image source to the path of your image file
        image.src = 'path_to_your_image.jpg';
        content.style.display = 'block';
        isOpen = true;
    }
});
