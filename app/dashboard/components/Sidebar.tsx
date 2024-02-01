
'use client'
import React from 'react';
import SidebarItem from './SidebarItem';

const links = [
  { href: '/dashboard', label: 'Home Page' },
  { href: '/dashboard/about', label: 'About' },
  { href: '/dashboard/contact', label: 'Contact' },
  { href: '/dashboard/services', label: 'Services' },
  { href: '/dashboard/resources', label: 'Resources' },
  { href: '/dashboard/faq', label: 'FAQ' },
  { href: '/dashboard/testimonials', label: 'Testimonials' },
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-64 bg-white shadow-md h-screen flex flex-col">
      <nav className="flex flex-col p-4 overflow-y-auto">
        {links.map((link, index) => (
          <SidebarItem key={index} href={link.href} label={link.label} />
        ))}
      </nav>

    </div>
  );
};

export default Sidebar;
