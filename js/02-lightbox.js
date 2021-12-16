import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRefs = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRefs.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        `;
    }).join('');
}

let gallery = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
    }
);
