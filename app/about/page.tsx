"use client";

import Image from "next/image";
import AskQuestions from "@/components/About";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <section className="bg-zinc-50 h-fit">
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
<AskQuestions/>
<Reviews/>
<Footer/>
    </section>
  );
}