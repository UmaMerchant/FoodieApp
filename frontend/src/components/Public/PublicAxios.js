import axios from 'axios';

const publicAxios = axios.create({
  baseURL: 'http://localhost:9095/api/restaurants', 
});

export default publicAxios;
