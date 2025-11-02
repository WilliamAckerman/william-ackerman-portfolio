import { Fragment } from 'react';
import {
    useQuery,
} from '@tanstack/react-query';

// Supabase calls
export const FetchTest = () => {
    useQuery({
        queryKey: ['fetchTest'],
        queryFn: async () => {
            const data = await fetch(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_API_ROUTE}/test`)
            return data;
        },
    })
}

// MongoDB calls
export const MongoFetchTest = () => {
    const { isLoading, isError, error, data } = useQuery({
        queryKey: ['mongotest'],
        queryFn: () => fetch(`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_API_ROUTE}/mongotest`).then((res) => 
            res.json(),
        ),
    })

    if (isLoading) return 'Loading...'

    if (isError) {
        console.error("Error:", error.message)
        return 'An error has occurred: ' + error.message
    }

    console.log(data)

    return (
        <ul>
            {data.map((testItem) => (
                <li key={testItem._id}>{testItem.name}: {testItem.type}</li>
            ))}
        </ul>
    )
}