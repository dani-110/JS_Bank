import axios from 'axios';
import { logoutUser } from '../store/reducers/auth-slice';
import qs from 'qs';

const getHeaders = () => {
  const headers = {
    "Content-Type": "application/json",
    // "Content-Type": "application/x-www-form-urlencoded"
  };

  return headers;
};

const call = (api, data, thunk, file) => {
 
  const openAPI = JSON.parse(localStorage.getItem('openAPI'));
  const { default: store } = require('../store');
  const state = store.getState();
  const user = state?.auth?.user
  if (!api.url.includes('login') && !api.url.includes('getmerchantfiller') && !api.url.includes('getmerchantbranchfiller') && !api.url.includes('getholdingfiller')) {
    data['actuser'] = user?.username ? user.username?.toLowerCase() : ''
    data['sessionid'] = user?.sessionId ? user.sessionId : ''
  }
  let headers = getHeaders();
  return axios[api?.method]?.(api?.url, data, { headers })
    .then(response => {
      if (response.data.responsecode == 9) {
        console.log(response.data.responsecode, thunk.dispatch(logoutUser()))
      }
      return response;
    })
    .catch(error => {
      console.log(error)
    });
};

export default {
  call,
};
