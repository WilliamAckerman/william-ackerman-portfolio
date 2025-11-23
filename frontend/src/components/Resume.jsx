import { FaPrint } from "react-icons/fa";
import './../index.css';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Button from '@mui/material/Button';
import ResumeContent from './ResumeContent.jsx';

function Resume() {
    const resumeRef = useRef(null)
    const printResume = useReactToPrint({
        contentRef: resumeRef,
        documentTitle: 'William_Ackerman_Resume',
        pageStyle: `@page { size: 'letter'; }`
    });

    return (
        <>
        {/* The resume that is displayed */}
        <div
            className="
                bg-neutral-50
                border-gray-100
                p-4
                mx-auto
                overflow-y-auto
                mb-4
                max-h-[70vh]
                w-[100%]
                md:w-[80%]
                rounded-sm
                shadow-sm
            "
        >
            <ResumeContent />
        </div>

        {/* The resume that is printed */}
        <div style={{display:"none"}}>
            <div ref={resumeRef}>
                <ResumeContent type="print" />
            </div>
        </div>

        <div className="flex items-center justify-center mx-auto">
              <Button variant="contained" onClick={printResume}><FaPrint className="mr-2" /> Print</Button>
            </div>
        </>
    )
}

export default Resume;