import { LOADING } from '../actions/loading';

export default function loadingReducer(state = false, action) {
  Object.freeze(state);
  switch(action.type) {
    case LOADING:
      return true;
    default:
      return false;
  }
}
