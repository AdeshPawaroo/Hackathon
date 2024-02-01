'use client';
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';


async function fetchAvailability(date, apiKey) {
   
    const response = await fetch(`https://api.cal.com/v1/bookings/availability?date=${date}`, {
        headers: {
            'Authorization': `Bearer ${apiKey}`
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch availability');
    }

    return await response.json();
}



const AvailabilityPage: React.FC = () => {
    const [availability, setAvailability] = useState([]);
    const pathname = usePathname();
    
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);
        const date = queryParams.get('date');
        const apiKey = 'cal_live_c994ee2f750cc67cb9a279995699ed15'; // Replace with your actual API key

        fetchAvailability(date, apiKey)
            .then(data => setAvailability(data))
            .catch(error => console.error('Error fetching availability:', error));
    }, [pathname]);


    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-8">Available Times</h1>
            {/* Display the fetched availability here */}
        </div>
    );
};

export default AvailabilityPage;