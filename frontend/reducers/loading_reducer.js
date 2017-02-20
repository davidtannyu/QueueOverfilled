import { LOADING_CONTENT } from '../actions/loading';

export default function loadingReducer(state = false, action) {
  Object.freeze(state);
  switch(action.type) {
    case LOADING_CONTENT:
      return true;
    default:
      return false;
  }
}
