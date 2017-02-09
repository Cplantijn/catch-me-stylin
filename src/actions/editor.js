import $ from 'jquery';

import {
  UPDATE_CSS
} from '../constants';

let uploadQueued = false;

export function updateCSS(markup) {
  return (dispatch, getState) => {
    dispatch({ type: UPDATE_CSS, markup })
    if (!uploadQueued) {
      uploadQueued = true;
      const { user } = getState();
      setTimeout(() => {
        $.ajax({
          url: '/update',
          type: 'PUT',
          data: {
            markup,
            guid: user.guid
          }
        })
        .then(res => {
          uploadQueued = false;
          // Sockets
        })
        .catch(err => {
          uploadQueued = false;
          console.error(err, 'something happened');
        });
      }, 0);
    }
  };
}
