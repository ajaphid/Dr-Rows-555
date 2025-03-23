import React, { useState } from 'react';

const BreatheFormPopup = ({ isVisible, onClose }) => {
    const [showSurveyPrompt, setShowSurveyPrompt] = useState(true);

    if (!isVisible) {
        return null;
    }

    if (showSurveyPrompt) {
        return (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-offWhite p-4 rounded-lg shadow-lg max-w-md w-full mx-4 text-center">
                    <p className="mb-4 text-lg font-semibold">
                        Thank you for completing Dr. Row's 555. <br></br> If you have time, I'd love if you could fill out a quick survey about your experience.
                    </p>
                    <div className="flex justify-center gap-4">
                        <button
                            className="bg-darkRed text-white px-4 py-2 rounded"
                            onClick={() => setShowSurveyPrompt(false)}
                        >
                            Yes
                        </button>
                        <button
                            className="px-4 py-2 rounded border-2 border-darkRed"
                            onClick={onClose}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-offWhite p-2 rounded-lg shadow-lg max-w-2xl w-full h-5/6 mx-4">
                <button
                    className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-800"
                    onClick={onClose}
                >
                    {/* X svg from heroicons.com */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </button>
                <iframe
                    title="Breathe Feedback Form"
                    src="https://docs.google.com/forms/d/e/1FAIpQLScSI45sd9jWr_6ripKvS_V0xpdD8Fo71e-TNVp12BH_3U7XWA/viewform?embedded=true"
                    className="w-full h-full"
                >
                    Loading form...
                </iframe>
            </div>
        </div>
    );
};

export default BreatheFormPopup;