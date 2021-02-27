import { refs } from './refs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function openModal() {
  const images = refs.galleryContainer.querySelectorAll('div > img');
  images.forEach(image => image.addEventListener('click', showModal));
}

function showModal(event) {
  const image = event.currentTarget;
  const imageUrl = image.dataset.largeImage;
  const instance = basicLightbox.create(`
    <img src="${imageUrl}" width="800" height="600">
`);

  instance.show();
}

export default openModal;
