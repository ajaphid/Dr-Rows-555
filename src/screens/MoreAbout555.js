import React, { useEffect, useState } from 'react';

export default function MoreAbout555() {
    const [info, setInfo] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/MoreAbout555.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(jsonData => {
                setInfo(jsonData);
            })
            .catch(err => {
                setError(err.message);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <h1 className="mx-auto py-8">Take 5 with 555</h1>
            <div className="space-y-12">
                {info.map((line, index) => (
                    <div key={index}>
                        <div className="info-header">{line.header}</div>
                        <p>{line.content}</p>
                    </div>
                ))}
            </div>
        </>
    );
}