const Popup = ({ isVisible, onClose }) => {
    if (!isVisible) return null;
  
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-offWhite p-8 rounded shadow-lg relative max-w-md mx-auto">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            {/* X svg from heroicons.com */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
          <h2 className="text-3xl font-bold mb-4 font-['Maragsa_Display']">Instructions</h2>
          <div className="mb-4">
            <ol className="list-decimal pl-4 mb-4">
              <li>Inhale for 5 seconds</li>
              <li>Hold your breath for 5 seconds</li>
              <li>Exhale for 5 seconds</li>
              <li>Hold your breath for 5 seconds</li>
              <li>Relax your breath; breathe normally for 5 seconds</li>
            </ol>
            Repeat 5x, or until calm.
          </div>
          <a
            href="/prescription-card.pdf"
            download="prescription-card.pdf"
            className="absolute bottom-4 left-4 text-darkRed underline text-sm hover:text-darkBrown"
          >
            Click here to download a 555 prescription card
          </a>
        </div>
      </div>
    );
  };
  
  export default Popup;