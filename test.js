window.onload = function() {
    fetchImages();
};

function fetchImages() {
    const url = 'https://example.com'; // サンプルURLです。実際のURLに置き換えてください。
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const htmlDocument = parser.parseFromString(data, "text/html");
            const imageElements = htmlDocument.querySelectorAll('img');
            displayImages(imageElements);
        }).catch(error => {
            console.error('Error fetching the images:', error);
        });
}

function displayImages(images) {
    const container = document.getElementById('image-container');
    images.forEach(img => {
        const src = img.src; // 画像のURL
        const image = document.createElement('img');
        image.src = src;
        container.appendChild(image);
    });
}
