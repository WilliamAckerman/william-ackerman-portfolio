import { useState } from 'react'
import './App.css'
import Button from '@mui/material/Button';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { MongoFetchTest } from './api/api.jsx';
import { Link } from 'react-router';

function App() {
  const [count, setCount] = useState(0)
  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <Button variant="text">Hello World</Button>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
        
          {<button onClick={() => console.log("Clicked")}>
            Test
          </button>}
        </div>
        <Link to={"/projects"}>Link to Projects</Link>
        <MongoFetchTest />
      </QueryClientProvider>
    </>
  )
}

export default App
