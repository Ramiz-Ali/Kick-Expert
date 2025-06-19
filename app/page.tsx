"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import LiveCompetition from "../components/LiveCompetition";
import ExploreHistory from "@/components/ExploreHistory";
import FootballExample from "@/components/FootballExample";
import FootballHistory from "@/components/FootballHistory";
import AIAssistant from "@/components/AIAssistant";
import Records from "@/components/Records";
import FootballAssistant from "@/components/FootballAssistant";
import SportsArticle from "@/components/SportsArticle";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-zinc-50 h-fit">
      <Navbar />
      <div className="relative w-full h-[70vh] md:h-screen bg-zinc-50">
        <div className="relative z-10 flex items-center justify-center h-full flex-col text-center px-4">
          <h1 className="text-lime-400 text-xl md:text-2xl font-semibold">
            Kick <span className="text-black">Expert</span>
          </h1>
          <h2 className="text-4xl md:text-6xl font-extrabold mt-2 bg-gradient-to-b from-green-900 to-lime-400 text-transparent bg-clip-text">
            Ask Anything <br /> About Football History
          </h2>
         
          <p className="text-neutral-700 mt-4 font-bold text-sm md:text-base max-w-md">
            Get instant AI-powered answers about players, matches, goals, and
            tournaments from international football history.
          </p>
          <button 
            onClick={() => scrollToSection("chat-assistant")} 
            className="mt-6 bg-lime-500 text-black font-bold text-sm md:text-base px-6 py-2 md:py-3 rounded-full hover:bg-lime-400 transition duration-300 cursor-pointer"
          >
            START ASKING QUESTIONS
          </button>
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
      <div className="w-full -mt-30">
        <FootballExample />
      </div>
      <FootballHistory />
      <div className="w-full" id="live-competition">
        <LiveCompetition />
      </div>
  
      <div className="w-full -mt-30">
        <AIAssistant />
        <FootballAssistant />
        <ExploreHistory />
        <Records />
      </div>

      <div className="w-full mt-10 md:mt-20"></div>
      <SportsArticle />

      <Footer />
    </section>
  );
}