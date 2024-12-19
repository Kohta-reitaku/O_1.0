document.addEventListener('DOMContentLoaded', function() {
    fetchImages();
});

async function fetchImages() {
    try {
        const response = await fetch('https://example.com/Sample.html'); // このURLは同じオリジンのものと仮定
        const text = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(text, "text/html");
        const images = doc.querySelectorAll('img');
        displayImages(images);
    } catch (error) {
        console.error('Error fetching images:', error);
    }
}

function displayImages(images) {
    const container = document.getElementById('image-container');
    images.forEach(img => {
        const src = img.getAttribute('src');
        const image = new Image();
        image.src = src;
        container.appendChild(image);
    });
}
