import qs from 'qs';
import axios from 'axios';

const baseURL = 'https://earthquake.usgs.gov/';

const api = axios.create({
  baseURL,
  paramsSerializer: (params) => qs.stringify(params),
});

export default api;
