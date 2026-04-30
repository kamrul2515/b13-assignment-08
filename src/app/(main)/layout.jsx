"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Navbar from '../components/shared/Navbar';
import BreakingTiles from '../components/shared/BreakingTiles';
import Footer from '../components/shared/Footer';

const MainLayout = ({ children }) => {
    const pathname = usePathname();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        const timer = setTimeout(() => setIsLoading(false), 500); 
        return () => clearTimeout(timer);
    }, [pathname]);

    const showBreakingTiles = pathname === "/" || pathname === "/all-tiles";

    return (
        <>
            <Navbar />

            {!isLoading && showBreakingTiles && <BreakingTiles />}
            
            <main className="min-h-[70vh]">
                {children}
            </main>

            {!isLoading && <Footer />}
        </>
    );
};

export default MainLayout;