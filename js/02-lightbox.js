import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery')
const galleryMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItems(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
        return` <div class="gallery">
                    <a class="gallery__item" href="${original}"">
                        <img class="gallery__image" src="${preview}" alt="${description}" />
                    </a>
                </div> `;
           
    })
        .join('');  
}
const lightbox = new SimpleLightbox('.gallery a', {
'captionsData' :"alt" , 
'captionPosition': "bottom",
'captionDelay': 250,
});





