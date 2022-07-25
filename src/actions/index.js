export const SET_SERVER_DATA = 'set_server_data';

export const setServerData = (dispatch, data) => {
  dispatch({
    type: SET_SERVER_DATA,
    payload: data,
  });
};

export const SET_BROWSER_DATA = 'set_browser_data';

export const setBrowserData = (dispatch, data) => {
  dispatch({
    type: SET_BROWSER_DATA,
    payload: data,
  });
};
