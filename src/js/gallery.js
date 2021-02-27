import { refs } from './refs';
import { updateGalleryMarkup } from './update-gallery-markup';
import galleryApi from './apiService';
import loadMoreBtn from './load-more-button';
import { checkReceivedImages } from './receivedImages.js';
import openModal from './modal';
import { scroll } from './scroll';

refs.formSubmit.addEventListener('submit', handleSearchGallery);
refs.loadMoreButton.addEventListener('click', fetchArticles);

function handleSearchGallery(event) {
  event.preventDefault();

  const queryForm = event.target.elements;
  galleryApi.searchQuery = queryForm.query.value;

  refs.galleryContainer.innerHTML = '';
  refs.formSubmit.reset();
  galleryApi.resetPage();
  loadMoreBtn.hide();

  fetchArticles();
}

function fetchArticles() {
  loadMoreBtn.disable();

  galleryApi.fetchArticles().then(images => {
    updateGalleryMarkup(images);
    loadMoreBtn.show();
    loadMoreBtn.enable();

    checkReceivedImages(images);
    openModal();
    scroll();
  });
}
