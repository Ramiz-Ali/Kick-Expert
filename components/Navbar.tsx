"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaUserCircle,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-24 py-4">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="mr-1"
        />
        <span className="text-lime-400 font-bold">
          Kick<span className="text-black">Expert</span>
        </span>
        <div className="flex items-center gap-6 ml-10">
          <div className="text-black border-l-2 p-5"></div>
          <a href="#" className="text-gray-600 hover:text-gray-800 font-bold">
            Ask AI
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800 font-bold">
            Quiz
          </a>
          <a
            href="/about"
            className="text-gray-600 hover:text-gray-800 font-bold"
          >
            About
          </a>
          <a
            href="/admindashboard"
            className="text-gray-600 hover:text-gray-800 font-bold"
          >
            Admin
          </a>

          <a
            href="/policy"
            className="text-gray-600 hover:text-gray-800 font-bold"
          >
            Policy
          </a>
          <button className="bg-lime-400 text-white px-4 py-2 rounded-full flex items-center shadow-lg">
            LIVE COMPETITION
            <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full cursor-pointer">
              LIVE
            </span>
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-6 ">
        <FaSearch className="text-lime-900 text-lg cursor-pointer" />
        <FaBell className="text-lime-900 cursor-pointer text-lg" />
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center space-x-1 focus:outline-none cursor-pointer"
          >
            <div className="p-1 flex items-center justify-center  rounded-full text-black ">
              <FaUser className="text-2xl " />
            </div>
            <span className="text-gray-600">Anthony</span>
            <svg
              className="w-4 h-4 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <div className="absolute z-50 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg">
              <a
                href="#"
                className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
              >
                <FaUserCircle className="mr-2 text-lime-400 text-lg" />
                <p className="mt-[2px]">Profile</p>
              </a>

              <a
                href="#"
                className=" px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
              >
                <FaSignOutAlt className="mr-2 text-lime-400 text-lg" />
                <p className="mt-[2px]">Logout</p>
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
