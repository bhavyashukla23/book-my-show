import React, { useContext } from "react";
import BsContext from '../Context/BsContext';

function Modal() {
    const context = useContext(BsContext);
    const [errorMessage, setErrorMessage, errorPopup, setErrorPopup] = context;

    const handleClosePopup = () => {
        setErrorMessage("");
        setErrorPopup(false);
    };

    return (
        <>
            {errorPopup && (
                <div className={`modal-container ${errorMessage ? 'active' : 'inactive'}`}>
                    <div className="modal">
                        <div className="modal-header"> <strong>Message</strong> </div>
                        <div className="modal-body"> <span>{errorMessage}</span> </div>
                        <div className="modal-footer"> <button onClick={handleClosePopup}>Close</button> </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Modal;