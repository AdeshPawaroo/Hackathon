import React from "react";
import Image from "next/image";

const services = [
  {
    title: "Special Needs Childcare",
    description: "Specialized care for children with special needs, creating a nurturing environment for development and well-being."
  },
  {
    title: "Behavioral Support",
    description: "Expert behavioral techniques provide children with the attention and support they need."
  },
  {
    title: "Autism Care",
    description: "Engaging activities designed to foster communication, social skills, and personal growth for children on the autism spectrum."
  },
  {
    title: "Educational Activities",
    description: "Fun, engaging, and informative educational activities that cater to each child's unique learning style."
  },
  {
    title: "Emergency Babysitting",
    description: "Reliable babysitting services available for unexpected circumstances to ensure your child's safety and your peace of mind."
  }
];

export default function ServicesPage() {
  return (
    <div className="container mx-auto p-4 flex flex-col md:flex-row">
      <div className="flex-1 mb-4 md:mb-0">
          <Image
              src="/flower.jpg"
              alt="Services"
              width={500}
              height={300}
              layout="responsive"
          />
        </div>
        <div className="flex-1 p-4">
          <h1 className="text-2xl font-bold mb-4">Our Services</h1>
          {services.map((service, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-xl font-semibold">{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}