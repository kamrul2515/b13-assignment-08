import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaRegHandPointLeft } from 'react-icons/fa';

export const generateMetadata = async ({params}) =>{
    const {id} = await params;
    
    console.log(id, "params")
    const tile = await getSingleProduct(id);
    console.log(tile, "tile")

    return {
    title: tile.title,
    description: tile.description,
  }
};

async function getSingleProduct(id) {
    const res = await fetch(`https://b-tiles-server-all-1.onrender.com/allproducts`, {
        cache: 'no-store'
    });
    const data = await res.json();
    const products = data.products || data;
    return products.find(item => item.id.toString() === id.toString());
}

const TilesDetailsPage = async ({ params }) => {
    const { id } = await params; 
    const tile = await getSingleProduct(id);

    if (!tile) {
        return <div className="text-center mt-20 text-2xl font-bold">Product not found!</div>;
    }

    return (
        <div className="flex items-center justify-center py-10 px-4">
            <div className="container mx-auto bg-base-100 rounded-3xl shadow-xl overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                    
                    <div className="lg:col-span-6 relative min-h-100 lg:min-h-150">
                        <Image
                            src={tile.image}
                            alt={tile.title}
                            fill
                            priority
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>

                    <div className="lg:col-span-6 p-8 lg:p-16 flex flex-col justify-center bg-white">
                        <div className="space-y-6">
                            <div>
                                <span className="text-sm font-bold text-[#18B273] uppercase tracking-widest block mb-2">
                                    {tile.category || "Premium Collection"}
                                </span>
                                <h1 className="text-4xl lg:text-6xl font-black text-[#1B3B6F] leading-tight uppercase">
                                    {tile.title}
                                </h1>
                            </div>

                            <div className="flex flex-wrap gap-4 items-center">
                                <span className="text-4xl font-black text-[#18B273]">${tile.price}</span>
                                <div className="badge badge-outline border-gray-300 p-4 font-bold text-gray-600">
                                    {tile.dimensions}
                                </div>
                                {tile.material && (
                                    <div className="badge badge-ghost p-4 font-semibold italic">
                                        Material: {tile.material}
                                    </div>
                                )}
                            </div>

                            <div className="divider opacity-50"></div>

                            <p className="text-gray-600 text-lg lg:text-xl leading-relaxed">
                                {tile.description || "Our premium tiles are designed to bring elegance and durability to your living space. Crafted with precision to match your sophisticated taste."}
                            </p>

                            <div className="pt-6">
                                <Link href={`/all-tiles`}>
                                <button 
                                    className="btn btn-lg w-full lg:w-auto text-white border-none px-12 h-16 text-lg font-bold hover:brightness-110 transition-all rounded-xl shadow-lg" 
                                    style={{ backgroundColor: '#1B3B6F' }}
                                > <span><FaRegHandPointLeft /></span>
                                    See other Tiles
                                </button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TilesDetailsPage;