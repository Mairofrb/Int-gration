export function populateCarousel(images) {
    const carouselInner = document.querySelector('.carousel-inner');
    carouselInner.innerHTML = '';

    images.forEach((image, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        carouselItem.innerHTML = `
            <img src="${image.url}" class="d-block w-100" alt="Album Image">
        `;
        carouselInner.appendChild(carouselItem);
    });
}
