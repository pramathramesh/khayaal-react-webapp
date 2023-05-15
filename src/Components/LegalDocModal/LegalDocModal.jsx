import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./LegalDocModal.css";

const LegalDocModal = () => {
const [isOpen, setIsOpen] = useState(false);

const handleOpen = () => {
    setIsOpen(true);
};

const handleClose = () => {
    setIsOpen(false);
};

return (
    <>
    <button onClick={handleOpen}>Open Modal</button>
    <AnimatePresence>
        {isOpen && (
        <motion.div
            className="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className="modal-content">
            <div className="modal-left">
                <div className="modal-sections">
                <div className="modal-section">Section 1</div>
                <div className="modal-section">Section 2</div>
                <div className="modal-section">Section 3</div>
                </div>
            </div>
            <div className="modal-right">Selected Section Text</div>
            </div>
            <button className="modal-close" onClick={handleClose}>
            Close
            </button>
        </motion.div>
        )}
    </AnimatePresence>
    </>
);
};

export default LegalDocModal;
