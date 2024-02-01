import React from 'react';
import Link from 'next/link';

const serviceTypes = [
    { type: "consultation", label: "Introductory Consultation" },
    { type: "childcare", label: "Childcare Services" },
    { type: "special-needs-childcare", label: "Individualized Special Needs Childcare" }
];

const BookingPage: React.FC = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold text-center mb-8">Booking Services</h1>
            <div className="flex flex-col items-center space-y-4">
                {serviceTypes.map((service) => (
                    <Link key={service.type} href={`/booking/details?serviceType=${service.type}`} passHref>
                        <button className="bg-purple-600 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-purple-700 transition-colors">
                            {service.label}
                        </button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BookingPage;