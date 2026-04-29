"use client";

import React from 'react';
import Link from 'next/link'; 

const NotFound = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh', 
            backgroundColor: '#F6F7FB', 
            color: '#333333', 
            textAlign: 'center',
            padding: '20px'
        }}>
            <h1 style={{
                fontSize: '120px', 
                margin: '0',
                color: '#1B3B6F', 
                fontWeight: '700',
            }}>404</h1>
            
            <h2 style={{
                fontSize: '32px',
                margin: '10px 0 20px 0',
                color: '#1B3B6F', 
            }}>404 - Page Not Found</h2>
            
            <p style={{
                fontSize: '18px',
                marginBottom: '40px',
                maxWidth: '500px', 
                lineHeight: '1.6' 
            }}>
                Hmm... The page you are looking for doesn't exist. Maybe you made a typo or the page has moved.
            </p>
            
            <Link href="/" style={{
                display: 'inline-block',
                padding: '12px 30px',
                backgroundColor: '#18B273', 
                color: '#FFFFFF', 
                textDecoration: 'none',
                fontSize: '18px',
                fontWeight: '600',
                borderRadius: '8px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', 
                transition: 'background-color 0.3s ease', 
            }}
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#159663'} 
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#18B273'} 
            >
                Back to Home
            </Link>
        </div>
    );
};

export default NotFound;