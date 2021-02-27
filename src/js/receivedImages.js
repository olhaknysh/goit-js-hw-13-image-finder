import loadMoreButton from './load-more-button';
import notification from './pnotify';

export function checkReceivedImages({ length } = {}) {
  if (!length) {
    loadMoreButton.hide();
    notification();
  }
}
