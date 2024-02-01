
import React from 'react';
import Link from 'next/link';
import Button from '../../components/Button'; // Adjust the import path as needed

const Sidebar: React.FC = () => {
    return (
        <div className="w-64 bg-white shadow-md flex flex-col justify-between">
          <nav className="flex flex-col p-4">
            <Link href='/dashboard'>
              <span className='py-2 text-gray-700 hover:text-gray-900 cursor-pointer'>Home Page</span>
            </Link>
            <Link href='/dashboard/about'>
              <span className="py-2 text-gray-700 hover:text-gray-900 cursor-pointer">About</span>
            </Link>
            <Link href='/dashboard/contact'>
              <span className="py-2 text-gray-700 hover:text-gray-900 cursor-pointer">Contact</span>
            </Link>
            <Link href='/dashboard/services'>
              <span className="py-2 text-gray-700 hover:text-gray-900 cursor-pointer">Services</span>
            </Link>
            <Link href='/dashboard/resources'>
              <span className="py-2 text-gray-700 hover:text-gray-900 cursor-pointer">Resources</span>
            </Link>
            <Link href='/dashboard/faq'>
              <span className="py-2 text-gray-700 hover:text-gray-900 cursor-pointer">FAQ</span>
            </Link>
            <Link href='/dashboard/testimonials'>
              <span className="py-2 text-gray-700 hover:text-gray-900 cursor-pointer">Testimonials</span>
            </Link>
          </nav>
          <div className='p-4'>
            
          </div>
        </div>
      );
};

export default Sidebar;
