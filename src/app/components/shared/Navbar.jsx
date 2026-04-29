"use client"; 
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 
import React from 'react';
import userAvatar from "@/assets/user.png"
import logopng from "@/assets/logo.png"

const Navbar = () => {
    const pathname = usePathname(); 

    const activeStyle = (path) => {
        const isActive = pathname === path;
        return {
            backgroundColor: isActive ? '#1B3B6F' : 'transparent', 
            color: isActive ? 'white' : '#333', 
            padding: '8px 16px',
            borderRadius: '6px',
            fontWeight: isActive ? '600' : '400',
            transition: 'all 0.3s ease'
        };
    };


    const navLinks = (
        <>
            <li><Link href="/" style={activeStyle('/')}>Home</Link></li>
            <li><Link href="/all-tiles" style={activeStyle('/all-tiles')}>ALL Tiles</Link></li>
            <li><Link href="/my-profile" style={activeStyle('/my-profile')}>My Profile</Link></li>
        </>
    );

    return (
        <div className='bg-base-100 shadow-sm sticky top-0 z-50'>
            <div className='container mx-auto navbar py-2 px-4 flex justify-between items-center'>
                
                {/* Mobile: Left Side (Hamburger Menu) */}
                <div className="flex items-center md:hidden">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost p-0 mr-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 gap-2">
                            {navLinks}
                        </ul>
                    </div>
                </div>

                {/* Logo Section */}
                <div className='flex-1 md:flex-none'>
                    <Link href="/">
                        <Image src={logopng} alt="Logo" width={110} height={35} priority className="w-[100px] md:w-[120px]" />
                    </Link>
                </div>

                {/* Desktop: Center Links */}
                <div className='hidden md:flex'>
                    <ul className='flex items-center gap-2'>
                        {navLinks}
                    </ul>
                </div>

                {/* Right Side: Profile & Login */}
                <div className='flex items-center gap-2'>
                    <div className="hidden sm:block"> 
                        <Image 
                            src={userAvatar} 
                            alt="User Avatar" 
                            width={32} 
                            height={32} 
                            className='rounded-full border border-gray-200' 
                        />
                    </div>
                    <Link href="/login">
                        <button 
                            className='text-white px-4 md:px-5 py-2 rounded-md font-medium text-sm md:text-base transition-all hover:opacity-90'
                            style={{ backgroundColor: '#18B273' }}
                        >
                            Login
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;