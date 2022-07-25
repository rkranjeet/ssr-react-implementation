import { SET_SERVER_DATA, SET_BROWSER_DATA } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_SERVER_DATA:
      return { ...state, serverData: action.payload };
    case SET_BROWSER_DATA:
      return { ...state, browserData: action.payload };
    default:
      return state;
  }
};
