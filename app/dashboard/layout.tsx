'use client';

import { Inter } from 'next/font/google'
import Link from 'next/link'
import Button from '../components/Button'
import Sidebar from './components/Sidebar'


const inter = Inter({ subsets: ['latin'] })

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {



  return (
    <div className={`${inter.className} antialiased container-full mx-auto flex  bg-gray-100`}>
      <div className="w-64"> {/* Set fixed width for sidebar */}
        <Sidebar />
      </div>
      <div className="flex-1"> {/* Main content takes up the remaining space */}
        {children}
      </div>
    </div>

  );
}
