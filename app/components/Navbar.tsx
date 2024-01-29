'use client';

import React from 'react';
import Logo from './Logo'; // Assuming you have a Logo component
import MenuItem from './MenuItem'; // Assuming you have a MenuItem component
import Button from './Button'; // Your button component

const Navbar: React.FC = () => {
    const handleButtonClick = () => {
        // Handle the button click
    };

    return (
        <nav className="flex items-center justify-between h-20 px-4 bg-teal-500">
            <div className="flex items-center">
                <Logo />
                <ul className="flex space-x-8">
                    <MenuItem href="/about" label="About Jada" />
                    <MenuItem href="/services" label="Services" />
                    <MenuItem href="/book" label="Book Jada" />
                    <MenuItem href="/resources" label="Resources" />
                    <MenuItem href="/contact" label="Contact" />
                </ul>
            </div>
            <Button text="Book Jada" onClick={handleButtonClick} />
        </nav>
    );
};

export default Navbar;
