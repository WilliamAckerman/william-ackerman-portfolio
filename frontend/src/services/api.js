import axios from 'axios';

const API = axios.create({
    baseURL: 'https://william-ackerman-portfolio.onrender.com/api',
});

export default API;