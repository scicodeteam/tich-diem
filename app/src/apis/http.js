import axios from 'axios';

const http = axios.create({
  baseURL: 'https://scigroup.com.vn/app/tichdiem/backend/public/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default http;
