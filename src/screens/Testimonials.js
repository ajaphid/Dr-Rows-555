import { useState, useEffect } from 'react';
import Papa from 'papaparse';

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/testimonials.csv')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load testimonials file');
                }
                return response.text();
            })
            .then(csvText => {
                Papa.parse(csvText, {
                    header: true,
                    skipEmptyLines: true,
                    quoteChar: '"', 
                    complete: (result) => {
                        setTestimonials(result.data);
                        setLoading(false);
                    }
                });
            })
            .catch(err => {
                console.error('Error fetching testimonials:', err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    const cleanText = (text) => text.replace(/^"+|"+$/g, '').trim();

    return (
        <section className="max-w-4xl mx-auto py-8 text-center">
            <h1 className="mx-auto py-8">What patients say</h1>
            {loading && <p className="text-gray-500">Loading testimonials...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {testimonials.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {testimonials.map((t, index) => (
                        <div key={index} className="p-6 bg-offWhite shadow-lg rounded-lg border border-darkBrown">
                            <p className="italic text-left text-darkBrown">{cleanText(t.testimonial)}</p>
                            <p className="text-right font-semibold mt-4 text-darkRed">- {cleanText(t.name)}</p>
                        </div>
                    ))}
                </div>
            ) : (
                !loading && <p className="text-gray-500">No testimonials available.</p>
            )}
        </section>
    );
}
