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

    return (
        <div className='bg-base-100 shadow-sm'>
            <div className='container mx-auto flex justify-between items-center py-2 px-4'>
                <div>
                    <Link href="/">
                        <Image src={logopng} alt="Logo" width={120} height={40} priority />
                    </Link>
                </div>

                <ul className='flex items-center gap-2'>
                    <li>
                        <Link href="/" style={activeStyle('/')}>Home</Link>
                    </li>
                    <li>
                        <Link href="/all-tiles" style={activeStyle('/all-tiles')}>ALL Tiles</Link>
                    </li>
                    <li>
                        <Link href="/my-profile" style={activeStyle('/my-profile')}>My Profile</Link>
                    </li>
                </ul>

                <div className='flex items-center gap-2'>
                    <Image 
                        src={userAvatar} 
                        alt="User Avatar" 
                        width={32} 
                        height={32} 
                        className='rounded-full border border-gray-200' 
                    />
                    <Link href="/login">
                        <button 
                            className='text-white px-5 py-2 rounded-md font-medium transition-all hover:opacity-90'
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