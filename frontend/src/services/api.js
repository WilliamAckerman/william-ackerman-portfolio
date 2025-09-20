import axios from 'axios';

// Get API URL from environment variable
// Must start with VITE_ so Vite exposes it to the browser
const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Create an Axios instance with the base URL
const API = axios.create({
    baseURL: API_BASE,
});

export default API;