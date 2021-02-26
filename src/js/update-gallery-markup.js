import imageTemplate from './templates/imageCard.hbs';
import { refs } from './refs';

export function updateGalleryMarkup(images) {
  const markup = imageTemplate(images);

  refs.galleryContainer.insertAdjacentHTML('beforeend', markup);
}
