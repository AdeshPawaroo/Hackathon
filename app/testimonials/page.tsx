import React from 'react';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Jane R.",
      text: "Jada has been a blessing for our family. Her patience and skill in handling our son's unique needs have made a significant difference. We're grateful for her dedicated and compassionate approach."
    },
    {
      name: "Antonia E.",
      text: "Since Jada started her book club, our daughter's love for reading has blossomed. It's incredible to see her so engaged and excited about books. Jada's nurturing presence is truly special."
    },
    {
      name: "Michael T.",
      text: "We were initially anxious about finding the right care for our non-verbal daughter. Jada's expertise and gentle manner have put our worries to rest. She communicates wonderfully with our daughter, and we couldn't be happier."
    }
    // ... add more testimonials as needed
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Testimonials</h1>
      <div className="space-y-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <blockquote className="italic text-gray-600">{testimonial.text}</blockquote>
            <p className="text-gray-800 font-semibold mt-2">- {testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default TestimonialsPage;
