import $ from 'jquery';
import {
  SET_GUID,
  CLOSE_MODAL,
  OPEN_MODAL,
  POP_USERS,
  SELECT_USER,
  UPDATE_USERS
} from '../constants';

export function setUserGuid(guid) {
  return {
    type: SET_GUID,
    guid
  };
}

export function openModal() {
  return {
    type: OPEN_MODAL
  };
}

export function signIn(displayName) {
  return (dispatch, getState) => {
    const { user } = getState();
    return $.post('/signin', { guid: user.guid, displayName: displayName })
      .then(result => {
        dispatch({ type: CLOSE_MODAL });
        dispatch(selectUser(user.guid));
      })
      .catch(err => {
        console.error(err);
      });
  };
}

export function populateUsers(users) {
  return {
    type: POP_USERS,
    users
  };
}

export function updateUsers(users) {
  return {
    type: UPDATE_USERS,
    users
  }
}

export function selectUser(userGuid) {
  return {
    type: SELECT_USER,
    selectedUser: userGuid
  };
}
