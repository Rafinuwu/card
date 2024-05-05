const envelope = document.getElementById('envelope');
const content = document.getElementById('content');
const image = document.getElementById('image');

let isOpen = false;

envelope.addEventListener('click', () => {
    if (isOpen) {
        envelope.style.display = 'block';
        content.style.display = 'none';
        isOpen = false;
    } else {
        envelope.style.display = 'none';
        image.src = 'hmmmm.png';
        content.style.display = 'block';
        isOpen = true;
    }
});
