export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] w-full bg-white/50 backdrop-blur-sm fixed inset-0 z-50">
      <div className="relative flex items-center justify-center">
        <div className="w-20 h-20 border-4 border-[#18B273]/20 border-t-[#18B273] rounded-full animate-spin"></div>
        
        <div className="absolute w-12 h-12 border-4 border-[#1B3B6F]/10 border-b-[#1B3B6F] rounded-full animate-[spin_1.5s_linear_infinite_reverse]"></div>
        
        <div className="absolute w-4 h-4 bg-[#18B273] rounded-full animate-pulse shadow-[0_0_15px_rgba(24,178,115,0.5)]"></div>
      </div>
      
      <div className="mt-8 flex flex-col items-center">
        <h2 className="text-xl font-bold text-[#1B3B6F] tracking-widest uppercase animate-pulse">
          Loading
        </h2>
        <div className="flex gap-1 mt-2">
            <div className="w-1.5 h-1.5 bg-[#18B273] rounded-full animate-bounce [animation-delay:-0.3s]"></div>
            <div className="w-1.5 h-1.5 bg-[#18B273] rounded-full animate-bounce [animation-delay:-0.15s]"></div>
            <div className="w-1.5 h-1.5 bg-[#18B273] rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  );
}