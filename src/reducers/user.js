import {
  SET_GUID,
  SET_DISPLAY_NAME,
  OPEN_MODAL,
  CLOSE_MODAL
} from '../constants';

export default function user(state = {
  guid: null,
  displayName: null,
  modalOpen: false
}, action) {
  switch (action.type) {
  case SET_GUID:
    return { ...state, guid: action.guid };
  case SET_DISPLAY_NAME:
    return { ...state, displayName: action.displayName };
  case OPEN_MODAL:
    return { ...state, modalOpen: true };
  case CLOSE_MODAL:
    return { ...state, modalOpen: false };
  default:
    return state;
  }
}
