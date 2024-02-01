import React from 'react';
import Image from 'next/image';

const aboutParagraphs = [
  "Growing up as an only child with a busy single mom, I understood loneliness and made it my mission to prevent it in as many children as possible. Since receiving my certifications in 2019, I have been dedicated to providing love, guidance, and fun learning experiences to every child and family I work with.",
  "I'm not just a nanny; I'm a mentor, a tutor, and a friend. My journey has led me to earn a Registered Behavior Technician certification, allowing me to offer specialized care for children with different needs. My motto is simple: 'You're There for Them, and I'm Here For You.'"
];


export default function AboutPage() {
  return (
      <div className="container mx-auto p-4 flex flex-col md:flex-row items-center">
          <div className="flex-1">
              <Image
                  src="/flower.jpg" 
                  alt="About Us"
                  width={500}
                  height={500}
                  layout="responsive"
              />
          </div>
          <div className="flex-1 p-4">
              <h1 className="text-2xl font-bold mb-4">About Jada</h1>
              {aboutParagraphs.map((paragraph, index) => (
                  <p key={index} className="mb-2">{paragraph}</p>
              ))}
          </div>
      </div>
  );
}