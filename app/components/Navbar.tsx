// 'use client';

// import Logo from './Logo' // Assuming you have a Logo component
// import MenuItem from './MenuItem' // Assuming you have a MenuItem component
// import Button from './Button' // Your button component
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
// import De

// const Navbar: React.FC = () => {
// //   const handleButtonClick = () => {
// //       // Handle the button click
// //   };

//   return (
//     <header className='bg-teal-500 '>
//       <nav className='flex items-center justify-between h-20  mx-auto w-[90%] bg-teal-500'>
//         <div className='relative'>
//           <Logo src={'/Logo-image.png'} alt={'logo'} height={50} width={50} />
//         </div>

//         <div className='absolute md:static'>
//           <ul className='flex flex-col gap-10 md:flex-row md:items-center  '>
//             <MenuItem href='/about' label='About Jada' />
//             <MenuItem href='/services' label='Services' />
//             <MenuItem href='/testimonials' label='Testimonials' />
//             <MenuItem href='/book' label='Book Jada' />
//             <MenuItem href='/resources' label='Resources' />
//             <MenuItem href='/contact' label='Contact' />
//           </ul>
//         </div>

//         <div>
//             <Link href="">
//         //   <Button onClick={handleButtonClick}text='Book Jada' />
//             </Link>
//         </div>
//       </nav>
//     </header>
//   )
// }

// export default Navbar
// Navbar.tsx
import React from 'react';
import MobileNavbar from './MobileNavbar';
import DesktopNavbar from './DesktopNavbar';

const Navbar: React.FC = () => {
    return (
        <>
            <MobileNavbar />
            <DesktopNavbar />
        </>
    );
};

export default Navbar;
