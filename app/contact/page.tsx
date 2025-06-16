"use client";

import Image from "next/image";
import Map from "@/components/Map";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";

export default function Contact() {
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
             
<Map/>
<FAQSection/>
<Footer/>
    </section>
  );
}