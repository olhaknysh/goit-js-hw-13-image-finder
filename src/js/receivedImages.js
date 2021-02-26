import loadMoreButton from './load-more-button';
import notification from './pnotify';

export function checkReceivedImages(images) {
  const imagesAmount = {
    noImages: 0,
  };
  if (images.length === imagesAmount.noImages) {
    loadMoreButton.hide();
    notification();
  }
}
