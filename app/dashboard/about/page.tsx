'use client';
import React, { useState } from 'react';

const initialCertifications = [
  'Registered Behavorial Technician',
  'CPR Certified',
  'Certified Childcare Nanny'
];

const AboutPageDashboard = () => {
    const [formData, setFormData] = useState({
        paragraphOne: '',
        paragraphTwo: ''
    });

    const [certifications, setCertifications] = useState(initialCertifications);
    const [editingCertification, setEditingCertification] = useState(null);

    const handleEdit = (certification) => {
      //fill in
    };

    const handleDelete = (certification) => {
      //fill in
    };

    const handleSave = (newCertification) => {
      //fill in
    }

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

    //max-w-3xl
    return (
      <div className="flex h-screen bg-gray-100 p-10">
      <div className="max-w-9xl w-full space-y-8">
        <h1 className="text-4xl font-bold mb-6">About Page</h1>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label htmlFor="paragraphOne" className="block text-lg font-medium text-gray-700 mb-2">First Paragraph</label>
            <textarea
              id="paragraphOne"
              name="paragraphOne"
              value={formData.paragraphOne}
              onChange={handleChange}
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows={4}
            ></textarea>
          </div>
    
          <div className="mb-4">
            <label htmlFor="paragraphTwo" className="block text-lg font-medium text-gray-700 mb-2">Second Paragraph</label>
            <textarea
              id="paragraphTwo"
              name="paragraphTwo"
              value={formData.paragraphTwo}
              onChange={handleChange}
              className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="group relative w-3/12 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Submit
          </button>
          <div>
            {certifications.map((certification, index) => (
              <div key={index}>
                <h2>{certification}</h2>
                <div>
                  <button onClick={() => handleEdit(certification)}>Edit</button>
                  <button onClick={() => handleDelete(certification)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>

    );
};

export default AboutPageDashboard;
