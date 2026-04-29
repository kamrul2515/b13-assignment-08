import Image from "next/image";

export default function Home() {
  return (
    <div className="hero bg-base-200 min-h-[80vh] py-10 mt-5">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 container mx-auto px-4">
        
        {/* Right Side: Image Section */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <Image 
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" 
            alt="Discover Aesthetic Tiles" 
            width={600} 
            height={400} 
            className="max-w-full md:max-w-md rounded-lg shadow-2xl border-4 border-white" 
            priority
          />
        </div>

        {/* Left Side: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold text-[#1B3B6F] leading-tight">
            Discover Your <br /> 
            <span className="text-[#18B273]">Perfect Aesthetic</span>
          </h1>
          <p className="py-6 text-gray-600 text-lg md:text-xl max-w-lg">
            Explore our exclusive collection of premium tiles. Find the perfect balance of design, 
            durability, and elegance for your dream space.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <button 
                className="btn text-white border-none px-8 py-3 rounded-md font-semibold transition-transform hover:scale-105"
                style={{ backgroundColor: '#18B273' }}
            >
                Browse Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}