import React from 'react';
import Navbar from '../components/shared/Navbar';
import BreakingTiles from '../components/shared/BreakingTiles';
import Footer from '../components/shared/Footer';

const MainLayout = ({children}) => {
    return (
        <>
          <Navbar />  
          <BreakingTiles />
          {children}
          <Footer />
        </>
    );
};

export default MainLayout;