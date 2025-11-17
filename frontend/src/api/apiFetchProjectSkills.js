export const apiFetchProjectSkills = async (project) => {
    //const project = props.project;

    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_API_ROUTE}/projectskills/${project}`)
    /*if (!res.ok) {
        throw new Error("HTTP Error. Status: " + res.error)
    }*/
    return res;
}