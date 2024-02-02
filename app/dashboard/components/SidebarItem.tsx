'use client';
import React, { useEffect } from 'react';
import Link from 'next/link';


interface SidebarItemProps {
    href: string;
    label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, label }) => {

    return (
        <Link href={href} passHref>
            <span className={`py-2 px-4 block cursor-pointer mb-2`}>
                {label}
            </span>
        </Link>
    );
};

export default SidebarItem;
