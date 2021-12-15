import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryRefs = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryRefs.addEventListener('click', openOriginalImg);

galleryRefs.insertAdjacentHTML('beforeend', galleryMarkup);


function createGalleryMarkup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>
        `;
    }).join('');
}

function openOriginalImg(evt) {
    evt.preventDefault();

    const instance = basicLightbox.create(`
    <img src = '${evt.target.dataset.source}'/>`,
        {
            onShow: (instance) => {
                document.addEventListener("keydown", closeModaleEsc);
            }
        });
    
    instance.show();

    function closeModaleEsc(evt) {
        if (evt.code === 'Escape') {
            instance.close();
        }
    };
}


