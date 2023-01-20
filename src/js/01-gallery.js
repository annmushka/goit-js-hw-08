// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainerEl = document.querySelector('.gallery');

function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
          <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" " />
          </a>
    `;
    })
    .join('');
}

galleryContainerEl.insertAdjacentHTML(
  'beforeend',
  createGalleryItemsMarkup(galleryItems)
);

galleryContainerEl.addEventListener('click', onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});