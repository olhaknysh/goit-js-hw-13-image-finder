import { refs } from './refs';

export function scroll() {
  const marginForm = 50;
  if (refs.galleryContainer.childElementCount > 12) {
    window.scrollBy({
      top: document.documentElement.clientHeight,
      behavior: 'smooth',
    });
  } else {
    window.scrollBy({
      top: refs.formSubmit.clientHeight + marginForm,
      behavior: 'smooth',
    });
  }
}
