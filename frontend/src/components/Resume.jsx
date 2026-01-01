// CSS import
import './../index.css';

// React-related import
import { useRef } from 'react';

// React icon import
import { FaPrint } from "react-icons/fa";

// React-to-print import
import { useReactToPrint } from 'react-to-print';

// Material UI import
import Button from '@mui/material/Button';

// Component imports
import ResumeContent from './ResumeContent.jsx';

// Display mode hook import
import { DisplayModeHook } from './../hooks/DisplayModeHook.jsx';

function Resume() {
    const resumeRef = useRef(null) // Ref for printable resume
    const printResume = useReactToPrint({
        contentRef: resumeRef,
        documentTitle: 'William_Ackerman_Resume',
        pageStyle: `@page { 
                        size: 'letter'; 
                        margin: 25.4mm;
                    }`
    });

    // Display mode-related variables
    const { boxBg, border } = DisplayModeHook()

    return (
        <>
        {/* The resume that is displayed */}
        <div
            className={`
                ${boxBg}
                p-4
                mx-auto
                overflow-y-auto
                mb-4
                max-h-[70vh]
                w-[100%]
                md:w-[80%]
                rounded-sm
                shadow-sm
                xl:max-w-[1400px]
                ${border}
            `}
        >
            <ResumeContent />
        </div>

        {/* The resume that is printed */}
        <div style={{display:"none"}}>
            <div ref={resumeRef}>
                <ResumeContent type="print" />
            </div>
        </div>

        {/* Button that allows a user to print the printed resume or save it as a PDF */}
        <div className="flex items-center justify-center mx-auto mt-4">
            <Button variant="contained" color={`success`} onClick={printResume}><FaPrint className="mr-2" /> Print Resume/Save as PDF</Button>
        </div>
        </>
    )
}

export default Resume;