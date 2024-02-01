'use client';
import React, { useState } from 'react';
import TestimonialsForm from '../components/TestimonialsForm';

const initialTestimonials = [
    {
      name: "Jane R.",
      review: "Jada has been a blessing for our family. Her patience and skill in handling our son's unique needs have made a significant difference. We're grateful for her dedicated and compassionate approach."
    },
    {
      name: "Antonia E.",
      review: "Since Jada started her book club, our daughter's love for reading has blossomed. It's incredible to see her so engaged and excited about books. Jada's nurturing presence is truly special."
    },
    {
      name: "Michael T.",
      review: "We were initially anxious about finding the right care for our non-verbal daughter. Jada's expertise and gentle manner have put our worries to rest. She communicates wonderfully with our daughter, and we couldn't be happier."
    }
  ];
  

const DashboardTestimonialsPage = () => {
  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [editingTestimonial, setEditingTestimonial] = useState(null);

  const handleEdit = (testimonial) => {
    setEditingTestimonial(testimonial);
  };

  const handleDelete = (testimonialName) => {
    setTestimonials(testimonials.filter(t => t.name !== testimonialName));
  };

  const handleSave = (newTestimonial) => {
    if (editingTestimonial) {
      setTestimonials(testimonials.map(t => t.name === editingTestimonial.name ? newTestimonial : t));
    } else {
      setTestimonials([...testimonials, newTestimonial]);
    }
    setEditingTestimonial(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold mb-6">Testimonial Management</h1>
      {editingTestimonial ? (
        <TestimonialsForm onSave={handleSave} initialTestimonial={editingTestimonial} />
      ) : (
        <button
          onClick={() => setEditingTestimonial({ name: '', review: '' })}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        >
          Add New Testimonial
        </button>
      )}

      <div className="space-y-4">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded">
            <h2 className="text-xl font-semibold">{testimonial.name}</h2>
            <p>{testimonial.review}</p>
            <div className="flex justify-end space-x-2 mt-2">
              <button onClick={() => handleEdit(testimonial)} className="text-white bg-yellow-500 hover:bg-yellow-600 px-3 py-1 rounded">Edit</button>
              <button onClick={() => handleDelete(testimonial.name)} className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardTestimonialsPage;
