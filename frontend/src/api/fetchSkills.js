export const fetchSkills = async (type) => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_API_ROUTE}/skills/${type}`)
    if (!res.ok) {
        throw new Error(`HTTP error: Status: ${res.status}`)
    }
    return res.json()
}