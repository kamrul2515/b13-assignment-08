import React from 'react';
import Marquee from 'react-fast-marquee';

const tiles = [
    { id: 1, title: 'Premium Ceramic Blue Tile now available in stock!' },
    { id: 2, title: 'Join the Community and get 10% off on your first order.' },
    { id: 3, title: 'Breaking News: Major Political Development Shakes the Nation' },
    { id: 4, title: 'Flash Sale: Minimalist White Marble Tiles at lowest price.' },
];

const BreakingTiles = () => {
    return (
        <div className='container mx-auto px-4 mt-6'>
            <div className='flex flex-col sm:flex-row items-center gap-3 bg-[#F6F7FB] py-3 px-3 rounded-lg shadow-sm border border-gray-100'>
                

                <button className='w-full sm:w-auto btn bg-[#1B3B6F] hover:bg-[#152e56] text-white border-none px-6 py-2 rounded-md whitespace-nowrap font-semibold text-sm md:text-base'>
                    Latest Tiles
                </button>
                
                <div className="w-full overflow-hidden">
                    <Marquee pauseOnHover={true} gradient={false} speed={50}>
                        {tiles.map(tile => (
                            <div key={tile.id} className='mx-6 text-sm md:text-lg font-medium text-gray-700 flex items-center'>
                                {tile.title}
                                <span className="ml-6 text-[#18B273] font-bold">|</span>
                            </div>
                        ))}
                    </Marquee>
                </div>
                
            </div>
        </div>
    );
};

export default BreakingTiles;