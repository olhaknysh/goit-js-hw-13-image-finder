import { alert, notice, info, success, error } from '@pnotify/core';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';

function notification() {
  const myInfo = info({
    text: 'Oops! No results found',
  });
}

export default notification;
