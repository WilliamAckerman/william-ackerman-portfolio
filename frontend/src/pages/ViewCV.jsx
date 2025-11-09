import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router';
import './../App.css'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Box from "@mui/material/Box";
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

// pdfjs internally renders the PDF file in react
import { pdfjs, Document, Page } from 'react-pdf';

// pdfWorker is a separate thread that processes PDFs efficiently
// pdfjs knows where to find the worker file
import pdfWorker from 'pdfjs-dist/build/pdf.worker.min.mjs?url';

import 'react-pdf/dist/Page/TextLayer.css'; // Adds default text layer styling for PDF
import 'react-pdf/dist/Page/AnnotationLayer.css'; // Adds default annotation styling for PDF

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;

function ViewCV() {
  const [numPages, setNumPages] = useState(null); // Total number of pages
  const [pageNumber, setPageNumber] = useState(1); // Current page number
  const [width, setWidth] = useState(0); // The container's width (Used to properly scale the PDF)

  // A reference to the container DOM element - used to measure the container's width
  const containerRef = useRef(null);

  const pdfLink = `${import.meta.env.VITE_FRONTEND_URL}/William_Ackerman_CV.pdf`

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  // Runs whenever the PDF loads
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.offsetWidth); // Stores the container width in the width variable
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth); // Listens for resize events to dynamically resize the PDF
    return () => window.removeEventListener('resize', updateWidth); // Removes the listener when the component unmounts
  }, [])

  function goBack() {
    setPageNumber(prev => Math.max(prev - 1, 1)); // Math.max is used for boundary control
  }

  function goForward() {
    setPageNumber(prev => Math.min(prev + 1, numPages)) // Math.min is used for boundary control
  }

  return (
    <>
      <Navbar />
        <div className="p-6 bg-blue-900">
          <h1 className="mb-4 text-neutral-50 text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-center">
            View CV
          </h1>

          {/* PDF Viewer Container */}
          <div ref={containerRef} // containerRef manages the state of the <div> element
            className="
              bg-neutral-100 
              max-w-5xl 
              max-h-[500px]
              overflow-x-hidden
              overflow-y-scroll
            "
          >
            <Document
              file={pdfLink}
              onLoadSuccess={onDocumentLoadSuccess}
              onLoadError={console.error}
              className="flex flex-col items-center"
            >
              <Page pageNumber={pageNumber} width={width * 0.95} />
            </Document>
          </div>

          <Box 
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              mt: 2,
              mb: 4,
            }}
          >
            <button
              onClick={goBack} 
              disabled={pageNumber <= 1}
              className="bg-neutral-100 hover:bg-neutral-200 disabled:bg-neutral-300 p-4 cursor-pointer rounded-l-sm"
            >
              <FaChevronLeft className="text-2xl" />
            </button>
            <div className="bg-neutral-100 p-4">
              <p>
                Page {pageNumber} of {numPages}
              </p>
            </div>
            <button
              onClick={goForward}
              disabled={pageNumber >= numPages}
              className="bg-neutral-100 hover:bg-neutral-200 disabled:bg-neutral-300 p-4 cursor-pointer rounded-r-sm"
            >
              <FaChevronRight className="text-2xl" />
            </button>
          </Box>

          <p className="text-neutral-50 text-center mb-4">
            To view my CV on its own, please check <Link to={pdfLink} className="text-blue-300 underline hover:no-underline" target="_blank" rel="noreferrer">here</Link>.
          </p>
        </div>
      <Footer />
    </>
  )
}

export default ViewCV