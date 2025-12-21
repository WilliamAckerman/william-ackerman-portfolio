import { FaPrint } from "react-icons/fa";
import './../index.css';
import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import Button from '@mui/material/Button';
import ResumeContent from './ResumeContent.jsx';

import { DisplayModeHook } from '../hooks/DisplayModeHook.jsx';
import useMediaQuery from '@mui/material/useMediaQuery';

function Resume() {
    const prefersContrastMore = useMediaQuery('(prefers-contrast: more)')
    const prefersContrastLess = useMediaQuery('(prefers-contrast: less)')
    const prefersContrast = prefersContrastMore || prefersContrastLess

    const resumeRef = useRef(null)
    const printResume = useReactToPrint({
        contentRef: resumeRef,
        documentTitle: 'William_Ackerman_Resume',
        pageStyle: `@page { 
                        size: 'letter'; 
                        margin: 25.4mm;
                    }`
    });

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

        <div className="flex items-center justify-center mx-auto mt-4">
            <Button variant="contained" color={`success`} onClick={printResume}><FaPrint className="mr-2" /> Print Resume/Save as PDF</Button>
        </div>
        </>
    )
}

export default Resume;