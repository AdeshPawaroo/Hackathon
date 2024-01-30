// MobileNavbar.tsx
'use client'
import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import MenuItem from './MenuItem'
import { FaBars } from 'react-icons/fa'

const menuItems = [
  { href: '/about', label: 'About Jada' },
  { href: '/services', label: 'Services' },
  { href: '/book', label: 'Book Jada' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
]

const MobileNavbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    console.log('Menu state is now:', isMenuOpen)
  }, [isMenuOpen])

  return (
    <nav className='md:hidden bg-jada-cyan px-4 flex items-center justify-between h-20'>
      <Logo src='/Logo-image.png' alt='logo' />

      <button
        onClick={() => setIsMenuOpen((prevState) => !prevState)}
        className='text-jada-purple'
      >
        <FaBars className='h-6 w-6' />
      </button>

      {isMenuOpen && (
        <div
          className='absolute top-full left-0 w-full z-10 bg-white border border-black p-4'
          style={{ height: '200px' }}
        >
          <p>Menu is open</p>
        </div>
      )}
    </nav>
  )
}

export default MobileNavbar
