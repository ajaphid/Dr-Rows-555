import React, { useEffect, useState } from 'react';
import Papa from 'papaparse';

export default function MoreAbout555() {
    const [info, setInfo] = useState([]);
    const [error, setError] = useState(null);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
        fetch('/MoreAbout555.csv')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load CSV file');
                }
                return response.text();
            })
            .then(csvText => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    quoteChar: '"',
                    complete: (result) => {
                        console.log("Parsed CSV Data:", result.data);  // Debugging
                        setInfo(result.data);
                    }
                });
            })
            .catch(err => {
                console.error('Error fetching CSV:', err);
                setError(err.message);
            });
    }, []);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <h1 className="mx-auto py-8">Take 5 with 555</h1>
            <div className="mx-auto w-full">
                {info.map((line, index) => (
                    <div key={index} className="border-b border-darkBrown">
                        <div
                            className="flex justify-between items-center cursor-pointer px-2 py-4"
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className={`info-header flex-grow ${openIndex === index ? 'text-darkRed' : 'text-darkBrown'}`}>
                                {line.header}
                            </div>
                            <div className={`transition-all duration-[.6s] ${openIndex === index ? ' rotate-180 text-darkRed' : 'text-darkBrown'}`}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2.5"
                                    stroke="currentColor"
                                    className="w-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            </div>
                        </div>
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="mb-6 px-4">{line.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
