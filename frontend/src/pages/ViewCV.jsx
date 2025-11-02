import './../App.css'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { MongoFetchTest } from './../api/api.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function ViewCV() {
  const queryClient = new QueryClient()

  return (
    <>
      <Navbar />
        <QueryClientProvider client={queryClient}>
          <div className="p-6 bg-blue-900">
            <h1 className="text-neutral-50 text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center">
              View CV
            </h1>
            <MongoFetchTest />
          </div>
        </QueryClientProvider>
      <Footer />
    </>
  )
}

export default ViewCV