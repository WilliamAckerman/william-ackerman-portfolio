import axios from 'axios';

// Get API URL from environment variable
// Must start with VITE_ so Vite exposes it to the browser
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Create a reusable Axios instance
const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export async function fetchProjects() {
    try {
        const res = await api.get("/projects");
        return res.data; // axios auto-parses JSON
    } catch (error) {
        console.error("Error fetching projects:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch projects");
    }
}

export async function fetchSkills() {
    try {
        const res = await api.get("/skills");
        return res.data;
    } catch (error) {
        console.error("Error fetching skills:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch skills");
    }
}

export async function fetchSkillList() {
    try {
        const res = await api.get("/skillList");
        return res.data;
    } catch (error) {
        console.error("Error fetching skill list:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch skill list");
    }
}

export async function fetchFrontendSkillList() {
    try {
        const res = await api.get("/frontendSkillList");
        return res.data;
    } catch (error) {
        console.error("Error fetching frontend skills:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch frontend skills");
    }
}

export async function fetchBackendSkillList() {
    try {
        const res = await api.get("/backendSkillList");
        return res.data;
    } catch (error) {
        console.error("Error fetching backend skills:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch backend skills");
    }
}

export async function fetchDatabaseSkillList() {
    try {
        const res = await api.get("/databaseSkillList");
        return res.data;
    } catch (error) {
        console.error("Error fetching database skills:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch database skills");
    }
}