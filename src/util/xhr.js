import axios from 'axios';

// create an axios instance
const service = axios.create({
  baseURL: 'http://192.168.200.174:3000',
  timeout: 15000 // request timeout
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
  }
);

// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data;
    if (res.error) {
      return Promise.reject('error');
    } else {
      return response.data;
    }
  },
  error => {
    console.log('err' + error); // for debug
    return Promise.reject(error);
  }
);

export default service;
