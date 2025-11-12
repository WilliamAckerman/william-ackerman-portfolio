export const sendMessage = async ({ name, email, subject, message }) => {
    const messageData = {
        'name': name, 
        'email': email, 
        'subject': subject, 
        'message': message
    }
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_API_ROUTE}/send-contact-message`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(messageData)
    })
    if (!res.ok) {
        throw new Error("HTTP Error. Status: " + res.error)
    }
    return res
}