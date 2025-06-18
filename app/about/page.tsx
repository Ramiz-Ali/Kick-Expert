"use client";
import Link from "next/link";
import Image from "next/image";
import AskQuestion from "@/components/About";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <section className="bg-zinc-50 h-fit m-0 p-0">
      <div className="relative w-full h-[70vh] md:h-screen bg-zinc-50 m-0 p-0">
        <div className="relative z-10 flex items-center justify-center h-full flex-col text-center px-0">
          {/* Content here */}
        </div>
        <div className="absolute inset-0 flex items-center md:flex">
          <Image
            src="/footbal.png"
            alt="Football"
            width={400}
            height={400}
            className="object-cover grayscale-[20%] opacity-70 brightness-110"
          />
        </div>
        <div className="absolute top-0 right-0 h-full hidden md:block">
          <Image
            src="/Decore.png"
            alt="Decore"
            width={450}
            height={600}
            className="object-contain grayscale-[60%]"
          />
        </div>
      </div>
      <div className="w-full m-0 p-0">
        <AskQuestion />
      </div>
      <Reviews />
      <Footer />
    </section>
  );
}
