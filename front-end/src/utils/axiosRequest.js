import { create } from 'axios';

const axiosRequest = (headers) => create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    ...headers,
  },
});

export default { axiosRequest };
