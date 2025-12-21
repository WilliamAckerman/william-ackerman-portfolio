import '../styles/Modal.css';
import Button from '@mui/material/Button';
export default function ModalFooter(props) {
    return (
        <div className="modalSurrounding modalFooter">
            <Button
                variant="contained"
                onClick={props.operation}
            >
                Close
            </Button>
        </div>
    )
}