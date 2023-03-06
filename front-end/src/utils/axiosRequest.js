import axios from 'axios';

const axiosRequest = (headers) => axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    ...headers,
  },
});

export default axiosRequest;
