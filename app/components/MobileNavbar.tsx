// MobileNavbar.tsx
'use client'
import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import MenuItem from './MenuItem'
import { FaBars } from 'react-icons/fa'
import { IoCloseOutline } from 'react-icons/io5'

const menuItems = [
  { href: '/about', label: 'About Jada' },
  { href: '/services', label: 'Services' },
  { href: '/book', label: 'Book Jada' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

const MobileNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='md:hidden bg-jada-cyan px-4 flex items-center justify-between h-20'>
      <Logo src='/Logo-item.png' alt='logo' />

      <div
        className={`absolute ${
          isMenuOpen ? 'top-[10%]' : ''
        } transition-top duration-500 ease-in-out px-5  w-full left-0 min-h-[30vh] top-[-100%] bg-jada-cyan`}
      >
        <ul className='flex flex-col gap-10 text-jada-purple'>
          {menuItems.map((item) => (
            <MenuItem key={item.href} href={item.href} label={item.label} />
            
          ))}
        </ul>
      </div>

      <button className='text-jada-purple z-10'>
        {isMenuOpen ? (
          <IoCloseOutline
            className='cursor-pointer  md:hidden'
            onClick={toggleMenu}
          />
        ) : (
          <FaBars className=' cursor-pointer md:hidden' onClick={toggleMenu} />
        )}
      </button>
    </nav>
  )
}

export default MobileNavbar
