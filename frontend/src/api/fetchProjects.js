export const fetchProjects = async (featured) => {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_API_ROUTE}/projects/${featured}`)
    if (!res.ok) {
        throw new Error(`HTTP Error. Status: ${res.status}`)
    }
    return res.json()
}