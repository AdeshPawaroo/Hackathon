'use client'

import { useEffect, useState } from "react"

interface DataResponse {
    hello: string
}

export default function Page() {
    const [isLoading, setIsLoading] = useState(true);
    const [dataResponse, setDataResponse] = useState({} as DataResponse)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/hello'); // Replace '' with your actual API endpoint
                const data = await response.json();
                console.log(data);
                setDataResponse(data)
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array means the effect will run once after the initial render


    return (
        <>
            <p>Dashboard Page </p>
            {isLoading ? (
                <>
                    <h1 className="text-gray-700">Loading data please wait...</h1>
                </>
            ) : (
                <>
                    <h2>Here is the data retrieved</h2>
                    <p>{dataResponse.hello}</p>
                </>
            )}
        </>
    )
}
