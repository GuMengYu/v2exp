import axios from 'axios';
import localConfig from '../../config/local.config';
import {Message} from '@/plugins/snackbar';
// create an axios instance
const createRequest = (baseURL, successCode = 'ok', returnOrigin = false) => {
  const service = axios.create({
    baseURL,
    timeout: 15000, // request timeout
  });

  // request interceptor
  service.interceptors.request.use(
    config => {
      // Do something before request is sent
      return config;
    },
    error => {
      // Do something with request error
      console.log(error); // for debug
      Promise.reject(error);
    },
  );

  // respone interceptor
  service.interceptors.response.use(
    response => {
      const {code, data, status} = response.data;
      if(code === successCode || status === 100) {
        return returnOrigin ? response.data  : data;
      } else {
        return Promise.reject(data);
      }
    },
    error => {
      console.log('err' + error); // for debug
      Message({message: error, type: 'error'});
      return Promise.reject(error);
    },
  );
  return service;
};

export const gankXhr = createRequest('https://gank.io/api/v2');
export const v2Xhr = createRequest(`${localConfig.protocal}//${localConfig.url}:${localConfig.port}`);
export const hfXhr = createRequest('https://devapi.heweather.net/v7/', '200', true);
export const musicXhr = createRequest('http://localhost:3000', 200, true);
