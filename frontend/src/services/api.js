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

export async function fetchProgrammingLanguageSkillList() {
    try {
        const res = await api.get("/programmingLanguageSkillList");
        return res.data;
    } catch (error) {
        console.error("Error fetching programming language skills:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch programming language skills");
    }
}

export async function fetchToolSkillList() {
    try {
        const res = await api.get("/toolSkillList");
        return res.data;
    } catch (error) {
        console.error("Error fetching tool skills:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch tool skills");
    }
}

export async function fetchOperatingSystemSkillList() {
    try {
        const res = await api.get("/operatingSystemSkillList");
        return res.data;
    } catch (error) {
        console.error("Error fetching operating system skills:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch operating system skills");
    }
}

export async function fetchIDESkillList() {
    try {
        const res = await api.get("/IDESkillList");
        return res.data;
    } catch (error) {
        console.error("Error fetching IDE skills:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch IDE skills");
    }
}

export async function fetchMiscTechnologySkillList() {
    try {
        const res = await api.get("/miscTechnologySkillList");
        return res.data;
    } catch (error) {
        console.error("Error fetching misc. technology skills:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch misc. technology skills");
    }
}

export async function fetchOtherTechnicalSkillList() {
    try {
        const res = await api.get("/otherTechnicalSkillList");
        return res.data;
    } catch (error) {
        console.error("Error fetching other technical skills:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch other technical skills");
    }
}

export async function fetchSoftSkillList() {
    try {
        const res = await api.get("/softSkillList");
        return res.data;
    } catch (error) {
        console.error("Error fetching soft skills:", error);
        throw new Error(error.response?.data?.message || "Failed to fetch soft skills");
    }
}