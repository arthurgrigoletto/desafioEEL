import axios from 'axios';

const api = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public'
});

export const apikey = '203f0001523d40fa075d1f71874cacd7';
export const hash = 'db02792d52e4167f7593a61400a84b1e';
export const ts = '1';

export default api;
