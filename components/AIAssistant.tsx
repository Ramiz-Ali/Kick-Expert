import Image from "next/image";

export default function AIQuestionAssistant() {
  return (
    <div className="relative bg-white px-4 py-12 md:py-20 text-center overflow-hidden">
   
<div className="absolute  sm:top-20 md:top-8 right-0   sm:right-80 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 z-40">
          <Image
            src="/images/image2.png"
            alt="Decorative Spiral"
            fill
            className="object-contain"
          />
        </div>
      <p className="text-[#8BC34A] font-semibold text-sm md:text-base mb-2 z-10 relative">
        AI Assistant
      </p>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1f2937] mb-6 z-10 relative">
        AI Football Assistant
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-3 mb-10 z-10 relative">
        <span className="font-medium text-[#1f2937]">Question Difficulty:</span>
        <button className="border border-[#C5FF66] bg-white text-[#1f2937] font-semibold px-4 py-2 rounded-md flex items-center gap-2 shadow-sm hover:scale-105 transition">
          ⚡ Easy
        </button>
        <button className="bg-[#C5FF66] text-[#1f2937] font-semibold px-4 py-2 rounded-md shadow-md hover:scale-105 transition">
          Medium
        </button>
        <button className="border border-[#C5FF66] bg-white text-[#1f2937] font-semibold px-4 py-2 rounded-md flex items-center gap-2 shadow-sm hover:scale-105 transition">
          ⚡ Hard
        </button>
      </div>

      <h2 className="text-xl md:text-2xl font-semibold text-[#1f2937] mb-6 z-10 relative">
        Try these medium questions:
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-16 z-10 relative">
        {Array(4)
          .fill("“Which country won the 2018 World Cup?”")
          .map((q, idx) => (
            <div
              key={idx}
              className="border border-[#C5FF66] px-2 py-2 rounded-md text-[#1f2937] text-sm md:text-base font-medium"
            >
              {q}
            </div>
          ))}
      </div>

     
    </div>
  );
}
