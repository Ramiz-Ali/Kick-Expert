import Image from "next/image";

export default function FootballHistory1() {
  return (
<div className="bg-white flex flex-col items-center justify-center px-4 pt-28 pb-8">
 
      
      <div className="relative text-center mb-10">
        
        <div className="absolute sm:top-10 md:-top-8 right-0 sm:right-6 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 z-10">
          <Image
            src="/images/image2.png"
            alt="Decorative Spiral"
            fill
            className="object-contain"
          />
        </div>

        <p className="text-[#8BC34A] font-medium mt-6">Football History</p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mt-1">
          Choose Your Knowledge Level
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 w-full max-w-3xl">
        <div className="w-full sm:w-1/3 border-2 border-[#C5FF66] rounded-xl p-6 text-center transition-all hover:scale-105 cursor-pointer">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[#8BC34A] text-xl">⚡</span>
            <h2 className="text-lg font-bold text-[#1f2937]">Easy</h2>
          </div>
          <p className="text-gray-500 text-sm">Basic facts and well-known information</p>
        </div>

        <div className="w-full sm:w-1/3 bg-[#C5FF66] rounded-xl p-6 text-center shadow-lg transition-all hover:scale-105 cursor-pointer">
          <h2 className="text-lg font-bold text-[#1f2937] mb-2">Medium</h2>
          <p className="text-gray-700 text-sm">Basic facts and well-known information</p>
        </div>

        <div className="w-full sm:w-1/3 border-2 border-[#C5FF66] rounded-xl p-6 text-center transition-all hover:scale-105 cursor-pointer">
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[#8BC34A] text-xl">⚡</span>
            <h2 className="text-lg font-bold text-[#1f2937]">Hard</h2>
          </div>
          <p className="text-gray-500 text-sm">Basic facts and well-known information</p>
        </div>
      </div>

      <div className="w-full max-w-xl flex items-center border-2 border-gray-300 rounded-xl px-8 py-2 shadow-sm">
        <input
          type="text"
          placeholder="Ask any Football questions....."
          className="flex-grow outline-none bg-transparent text-sm text-gray-700 placeholder-gray-400"
        />
        <button className="text-[#8BC34A] text-xl">➤</button>
      </div>
    </div>
  );
}
