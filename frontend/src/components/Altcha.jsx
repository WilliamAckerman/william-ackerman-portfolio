import { useEffect, useRef, useState, useContext, forwardRef, useImperativeHandle } from 'react'
import 'altcha'
import { DisplayModeContext } from '../DisplayModeContext.js';

const Altcha = forwardRef(({ onStateChange }, ref) => {
    const widgetRef = useRef(null)
    const [value, setValue] = useState(null)
    
    const { darkMode } = useContext(DisplayModeContext)
    useImperativeHandle(ref, () => {
        return {
            get value() {
                return value;
            }
        }
    }, [value])

    useEffect(() => {
        const handleStateChange = (ev) => {
            if ('detail' in ev) {
                setValue(ev.detail.payload || null)
                onStateChange?.(ev)
            }
        }

        const { current } = widgetRef

        if (current) {
            current.addEventListener('statechange', handleStateChange)
            return () => current.removeEventListener('statechange', handleStateChange)
        }
    }, [onStateChange])

    return (
        <altcha-widget
            ref={widgetRef}
            style={{
                '--altcha-max-width': '100%',
                '--altcha-color-text': darkMode ? "white" : "black",
            }}
            challengeurl={`${import.meta.env.VITE_BACKEND_URL}${import.meta.env.VITE_BACKEND_API_ROUTE}/altcha-challenge`}
        ></altcha-widget>
    )
})

export default Altcha;