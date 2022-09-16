import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery')
const galleryMarkup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryItems(galleryItems) { 
    return galleryItems.map(({ preview, original, description }) => {
        return` <div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
    })
        .join('');  
}
 console.log(galleryMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick)


function onGalleryContainerClick(e) {    
    e.preventDefault();    
    
 if (!e.target.classList.contains("gallery__image"))
    return   


const originalImg = e.target.dataset.source;

const instance = basicLightbox.create(`
    <img src="${originalImg}" width="800" height="600">
`)
    instance.show();

    document.addEventListener("keydown", event => {
         event.preventDefault();

  if (event.code === "Escape") {
   instance.close();
  }
});
   
}

 