import Image from "next/image";

export default function FootballHistory2() {
  return (
    <div className=" bg-white flex  justify-center m-0 p-0 pt-8 px-4">
      <div className="flex flex-col items-center w-full max-w-5xl">

        <h2 className="text-2xl md:text-2xl font-semibold text-[#0f172a] text-center w-full mb-8">
          Try these examples:
        </h2>

        <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-12 w-full">
          
          <div className="flex flex-col space-y-4 items-center md:items-start w-full max-w-xs">
            <div className="flex flex-col gap-2 w-full">
              {Array(3).fill("“Which country won the 2018 World Cup?”").map((text, i) => (
                <div
                  key={i}
                  className="border border-lime-500 px-2 py-2 rounded-full text-[#0f172a] text-sm md:text-base font-medium text-center"
                >
                  {text}
                </div>
              ))}
            </div>

            <button
  className="bg-lime-400 hover:bg-lime-500 text-black font-semibold px-4 py-2.5 rounded-md shadow-md uppercase text-sm tracking-wider transition 
             w-full md:w-auto self-center md:self-start md:ml-4"
>
  Start Asking Questions
</button>

          </div>

          {/* Right Side */}
         <div className="flex justify-center items-center">
  <div className="relative w-60 h-60 sm:w-80 sm:h-80 md:w-60 md:h-60 flex items-center justify-center">
    <Image
      src="/images/image1.png"
      alt="Brain Icon"
      fill
      className="rounded-full object-cover"
    />
  </div>
</div>

        </div>
      </div>
    </div>
  );
}
