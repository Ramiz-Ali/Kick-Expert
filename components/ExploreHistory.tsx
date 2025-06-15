"use client";

import Image from "next/image";
import { FaBolt, FaUser, FaTrophy } from 'react-icons/fa';

export default function FootballHistory() {
  return (
    <div className="relative w-full h-fit mb-10 bg-zinc-50 flex items-center justify-center">
      <div className="absolute top-0 right-0">
        <Image src="/Vector.png" alt="Vector" width={150} height={150} className="object-contain" />
      </div>
      <div className="text-center">
        <p className="text-lime-500 text-sm md:text-base">Football History</p>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
          Everything You Need To Explore <br /> Football History
        </h1>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-6">
          <div className="bg-white p-4 pt-10 rounded-3xl shadow-lg w-64 h-64 flex flex-col items-center gap-6">
            <div className="bg-lime-500 rounded-full p-4">
              <FaBolt className="text-black text-2xl" />
            </div>
            <p className="text-gray-800 font-medium">Instant AI Answers</p>
            <p className="text-gray-600 text-sm w-[60%]">Engrossed listening. Park gate sell they west hard for the.</p>
      
          </div>
          <div className="bg-white p-4 pt-10 rounded-3xl shadow-lg w-64 h-64 flex flex-col items-center gap-6">
            <div className="bg-lime-500 rounded-full p-4">
              <FaUser className="text-black text-2xl" />
            </div>
            <p className="text-gray-800 font-medium">Instant AI Answers</p>
            <p className="text-gray-600 text-sm w-[60%]">Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
          <div className="bg-white p-4 pt-10 rounded-3xl shadow-lg w-64 h-64 flex flex-col items-center gap-6">
            <div className="bg-lime-500 rounded-full p-4">
              <FaTrophy className="text-black text-2xl" />
            </div>
            <p className="text-gray-800 font-medium">Instant AI Answers</p>
            <p className="text-gray-600 text-sm w-[60%]">Engrossed listening. Park gate sell they west hard for the.</p>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-neutral-500 text-sm md:text-base">Ask Anything About Football History</p>
          <button className="mt-2 bg-lime-500 text-black text-sm font-bold px-6 py-3 cursor-pointer rounded-lg hover:bg-lime-400 transition duration-300">
            EXPLORE HISTORY
          </button>
        </div>
      </div>
    </div>
  );
}