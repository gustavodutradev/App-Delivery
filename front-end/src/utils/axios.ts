import axios from 'axios';

type CustomHeader = {
  authorization: string;
}

const axiosRequest = (headers?: CustomHeader) => axios.create({
  baseURL: 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    ...headers,
  },
});

export default axiosRequest;
