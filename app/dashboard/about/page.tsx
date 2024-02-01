'use client';
import React, { useState } from 'react';

const AboutPageDashboard = () => {
    const [formData, setFormData] = useState({
        paragraphOne: '',
        paragraphTwo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        // For example, sending data to a server or updating local state
        console.log('Form data submitted:', formData);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">About Page</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="paragraphOne" className="block text-gray-700 text-sm font-bold mb-2">First Paragraph</label>
                    <textarea
                        id="paragraphOne"
                        name="paragraphOne"
                        value={formData.paragraphOne}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        rows={4}
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="paragraphTwo" className="block text-gray-700 text-sm font-bold mb-2">Second Paragraph</label>
                    <textarea
                        id="paragraphTwo"
                        name="paragraphTwo"
                        value={formData.paragraphTwo}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        rows={4}
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AboutPageDashboard;
