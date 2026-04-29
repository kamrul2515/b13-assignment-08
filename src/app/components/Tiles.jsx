import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

async function getProducts() {
    const res = await fetch("https://b-tiles-server-all-1.onrender.com/allproducts", {
        cache: 'no-store' 
    });
    const data = await res.json();
    return data.products || data;
}

const Tiles = async () => {
    const products = await getProducts();

    return (
        <div className='container mx-auto mt-12 px-4 mb-20'> 
            <div className='flex justify-between items-center mb-8'>
                <h2 className="text-3xl font-bold text-[#1B3B6F]">FEATURED TILES</h2>
                <Link href="/all-tiles" className='text-[#18B273] font-semibold hover:underline'>
                    See All
                </Link>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    Array.isArray(products) && products.slice(0, 6).map((tile) => (
                        <div key={tile.id} className="card bg-base-100 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                            <figure className='px-4 pt-4'>
                                <div className='relative w-full h-56 overflow-hidden rounded-xl'>
                                    <Image 
                                        src={tile.image} 
                                        alt={tile.title} 
                                        fill 
                                        className='object-cover'
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {!tile.inStock && (
                                        <div className='absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded z-10'>
                                            Out of Stock
                                        </div>
                                    )}
                                </div>
                            </figure>

                            <div className="card-body p-6">
                                <h2 className="card-title text-[#1B3B6F] text-xl font-bold">
                                    {tile.title}
                                </h2>
                                <p className='text-gray-500 text-sm line-clamp-2'>
                                    {tile.description}
                                </p>
                                
                                <div className='flex justify-between items-center mt-4'>
                                    <span className='text-[#18B273] font-bold text-2xl'>
                                        ${tile.price}
                                    </span>
                                    <span className='badge badge-ghost p-3 text-gray-500'>
                                        {tile.dimensions}
                                    </span>
                                </div>

                                <div className="card-actions mt-6">
                                    <Link href={`/tile/${tile.id}`} className='w-full'>
                                        <button 
                                            className="btn w-full text-white border-none hover:brightness-110 transition-all font-bold"
                                            style={{ backgroundColor: '#1B3B6F' }}
                                        >
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Tiles;