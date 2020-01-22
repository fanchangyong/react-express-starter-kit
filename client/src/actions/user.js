import axios from 'axios';
import * as types from '../common/actionTypes';

export function sendHello(msg, callback = () => {}) {
  return (dispatch) => {
    axios.post('/api/hello', {
      msg,
    })
    .then((res) => {
      dispatch({
        type: types.UPDATE_HELLO_MSG,
        payload: res.data,
      });
    });
  };
}
