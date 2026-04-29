import React from 'react';
import Navbar from '../components/shared/Navbar';
import BreakingTiles from '../components/shared/BreakingTiles';

const MainLayout = ({children}) => {
    return (
        <>
          <Navbar />  
          <BreakingTiles />
          {children}
        </>
    );
};

export default MainLayout;