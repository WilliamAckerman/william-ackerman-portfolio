export function ErrorList(props) {
    const errors = props.message
    const text = props.text
    const listErrors = errors.map(error => <li key={error} className={`${text} text-base mb-2`}>{error}</li>)

    return (
        <>
            <p className={`${text} mb-2`}>Error sending message:</p>
            <p className={`${text} mb-4`}>You have the following errors in your submission:</p>
            <ul className="mb-2 list-disc list-inside">
                {listErrors}
            </ul>
        </>
    )
}