"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdMenu } from "react-icons/md"; // Hamburger icon
import Link from 'next/link';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white w-full z-50 shadow-sm">
      <div className="flex justify-between items-center px-6 py-4 md:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <span className="ml-2 text-lime-400 font-bold text-lg">
              Kick<span className="text-black">Expert</span>
            </span>
          </div>
        </Link>
        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6">
          {[
            ["Ask AI", "#"],
            ["Quiz", "#"],
            ["About", "/about"],
            ["Policy", "/policy"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-gray-600 hover:text-gray-800 font-bold"
            >
              {label}
            </a>
          ))}

          <button className="bg-lime-400 text-white px-4 py-2 rounded-full flex items-center shadow-lg">
            LIVE COMPETITION
            <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              LIVE
            </span>
          </button>
        </div>

        {/* Right Icons */}
        <div className="hidden lg:flex items-center space-x-6">
          <FaSearch className="text-lime-900 text-lg cursor-pointer" />
          <FaBell className="text-lime-900 cursor-pointer text-lg" />
          <div className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-1 focus:outline-none"
            >
              <div className="p-1 rounded-full text-black">
                <FaUser className="text-2xl" />
              </div>
              <span className="text-gray-600">Anthony</span>
              <svg
                className="w-4 h-4 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50">
                <a
                  href="#"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <FaUserCircle className="mr-2 text-lime-400 text-lg" />
                  <p className="mt-[2px]">Profile</p>
                </a>
                <a
                  href="#"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <FaSignOutAlt className="mr-2 text-lime-400 text-lg" />
                  <p className="mt-[2px]">Logout</p>
                </a>
                <a
                  href="/personaldata"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <p className="mt-[2px]">Update Profile</p>
                </a>

                <a
                  href="/contact"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                >
                  <p className="mt-[2px]">Contact Us</p>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block lg:hidden text-3xl text-lime-600"
        >
          <MdMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col px-6 pb-4 space-y-3 bg-white border-t border-gray-200">
          {[
            ["Ask AI", "#"],
            ["Quiz", "#"],
            ["About", "/about"],
            ["Admin", "/admindashboard"],
            ["Contact", "/contact"],
            ["Profile", "/personaldata"],
            ["Policy", "/policy"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-gray-600 hover:text-gray-800 font-bold"
            >
              {label}
            </a>
          ))}

          <div className="flex gap-4">
            <FaSearch className="text-lime-900 text-lg" />
            <FaBell className="text-lime-900 text-lg" />
          </div>

          <button className="bg-lime-400 text-white px-4 py-2 rounded-full flex items-center shadow-lg">
            LIVE COMPETITION
            <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              LIVE
            </span>
          </button>
        </div>
      )}
    </nav>
  );
}
