import React from 'react';
import { SectionModalStatus } from './SelectionStyle';

const CopyCommentsPopup = ({ comments, onClose }) => {
    const copyComments = () => {
        // Logic to copy the comments to the clipboard
        const textarea = document.createElement('textarea');
        textarea.value = comments;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        onClose();
    };

    return (
        <SectionModalStatus className="popup-container">
            <div className="popup">
                <h2>Agrega un comentario</h2>
                <textarea value={comments} rows={5} /> {/* `rows={5}` for initial height, adjust as needed */}
                <div className='divButtonsModalStatus'>
                    <button className='save' onClick={copyComments}>Guardar</button>
                    <button className='close' onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </SectionModalStatus>
    );
};

export default CopyCommentsPopup;

