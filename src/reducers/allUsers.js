import {
  POP_USERS,
  SELECT_USER,
  UPDATE_USERS
} from '../constants';

export default function allUsers(state = {
  selectedUser: null,
  users: {}
}, action) {
  switch (action.type) {
  case SELECT_USER:
    return { ...state, selectedUser: action.selectedUser };
  case POP_USERS:
    return { ...state, users: action.users };
  case UPDATE_USERS:
    return { ...state, users: action.users };
  default:
    return state;
  }
}
