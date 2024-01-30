import React from 'react';
import Image from 'next/image';
import Button from './Button';

interface HeroCardProps {
  imageUrl: string;
  imageAlt: string;
  title: string;
  subtitle: string;
  body: string;
}

const HeroCard: React.FC<HeroCardProps> = ({ imageUrl, imageAlt, title, subtitle, body }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center bg-white p-8 rounded-lg shadow-lg">
      <div className="mb-4 md:mb-0">
        <Image src='/flower.jpg' alt={imageAlt} width={500} height={300} className="rounded-lg" />
      </div>
      <div className="space-y-4">
        <h1 className="text-5xl font-bold">{title}</h1>
        <h2 className="text-3xl text-gray-700">{subtitle}</h2>
        <p className="text-lg">{body}</p>
        <div className="flex gap-4">
          <button className="bg-jada-purple text-white px-6 py-2 rounded-md font-semibold hover:bg-purple-700 transition-colors">
            Action 1
          </button>
          <button className="bg-white text-jada-purple px-6 py-2 border-2 border-jada-purple rounded-md font-semibold hover:bg-gray-100 transition-colors">
            Action 2
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;