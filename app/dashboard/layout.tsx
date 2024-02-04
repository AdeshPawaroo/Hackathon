'use client';

import React from 'react';
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Button from '../components/Button'
import Sidebar from './components/Sidebar'


const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="w-64 bg-gray-100 sticky top-0 h-screen"> {/* Adjusted sidebar styles */}
        <Sidebar />
      </div>
      <div className="flex-1 bg-gray-100 p-4 overflow-auto"> {/* Ensure the main content area also has a grey background */}
        {children}
      </div>
    </div>
  );
}