export default function StatusModal({ isOpen, status, onClose }){
    if (!isOpen){
        return null;
    } 

    const getMessage = () => {
        switch (status) {
        case 'loading':
            return 'Invio in corso...';
        case 'success':
            return 'Il post è stato creato con successo!';
        case 'error':
            return 'Si è verificato un errore';
        default:
            return '';
        }
    };

    return(
        <div className="modal-overlay d-flex align-items-center justify-content-center position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75">
            <div className='border rounded p-5 bg-dark text-white'>
                <h2 className="mb-4 text-center">Stato della richiesta</h2>
                <p className="mb-3 text-center">{getMessage()}</p>
                <div className="d-flex">
                    <button type="button" className="btn btn-outline-light mx-auto" onClick={onClose}> Chiudi </button>
                </div>
            </div>
        </div>
    )
}