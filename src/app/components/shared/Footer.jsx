import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#1B3B6F] text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 text-center lg:text-left">

                    <div className="space-y-6 flex flex-col items-center lg:items-start">
                        <Link href="/" className="text-3xl font-black tracking-tighter text-white">
                            B-TILES<span className="text-[#18B273]">.</span>
                        </Link>
                        <p className="text-gray-300 leading-relaxed max-w-sm">
                            Premium ceramic and marble tiles designed for modern lifestyles. We provide the best quality materials for your dream home.
                        </p>
                        <div className="flex gap-4 justify-center lg:justify-start">
                            <a href="#" className="hover:text-[#18B273] transition-colors text-xl"><FaFacebook /></a>
                            <a href="#" className="hover:text-[#18B273] transition-colors text-xl"><FaTwitter /></a>
                            <a href="#" className="hover:text-[#18B273] transition-colors text-xl"><FaInstagram /></a>
                            <a href="#" className="hover:text-[#18B273] transition-colors text-xl"><FaLinkedin /></a>
                        </div>
                    </div>

                    <div className="flex flex-col items-center lg:items-start">
                        <h3 className="text-xl font-bold mb-6 border-b-2 border-[#18B273] w-fit">Quick Links</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="/all-tiles" className="hover:text-white transition-colors">All Collections</Link></li>
                            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center lg:items-start">
                        <h3 className="text-xl font-bold mb-6 border-b-2 border-[#18B273] w-fit">Categories</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li><Link href="#" className="hover:text-white transition-colors">Ceramic Tiles</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Marble Texture</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Mosaic Designs</Link></li>
                            <li><Link href="#" className="hover:text-white transition-colors">Industrial Matte</Link></li>
                        </ul>
                    </div>

                    <div className="flex flex-col items-center lg:items-start">
                        <h3 className="text-xl font-bold mb-6 border-b-2 border-[#18B273] w-fit">Contact Us</h3>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-center gap-3 justify-center lg:justify-start">
                                <span>📍</span> 123 Tiles Gallery, Dhaka, BD
                            </li>
                            <li className="flex items-center gap-3 justify-center lg:justify-start">
                                <span>📞</span> +880 1234 567890
                            </li>
                            <li className="flex items-center gap-3 justify-center lg:justify-start">
                                <span>✉️</span> support@b-tiles.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 mt-8 text-center text-gray-400 text-sm">
                    <p>© {new Date().getFullYear()} B-TILES. All rights reserved | Designed by Md Mahmudul Hasan</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;