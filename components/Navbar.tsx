"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaUserCircle,
  FaSignOutAlt,
} from "react-icons/fa";
import { MdMenu } from "react-icons/md";

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const scrollToSection = (sectionId: string) => {
    // If not on homepage, navigate to homepage with hash
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    // If already on homepage, scroll to section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
    setMenuOpen(false); // Close mobile menu if open
  };

  return (
    <nav className="bg-white w-full z-50 shadow-sm fixed top-0">
      <div className="flex justify-between items-center px-6 py-2 md:px-10">
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
          {/* Ask AI Button */}
          <button
            onClick={() => scrollToSection("chat-assistant")}
            className="text-gray-600 hover:text-gray-800 font-bold"
          >
            Ask AI
          </button>

          {/* Quiz Button */}
          <button
            onClick={() => scrollToSection("quiz-section")}
            className="text-gray-600 hover:text-gray-800 font-bold"
          >
            Quiz
          </button>

          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-800 font-bold"
          >
            About
          </Link>

          <Link
            href="/policy"
            className="text-gray-600 hover:text-gray-800 font-bold"
          >
            Policy
          </Link>
          <Link
            href="/admindashboard"
            className="text-gray-600 hover:text-gray-800 font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Admin
          </Link>

          <button
            onClick={() => scrollToSection("live-competition")}
            className="bg-lime-400 text-white px-4 py-2 rounded-full flex items-center shadow-lg"
          >
            LIVE COMPETITION
            <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              LIVE
            </span>
          </button>
        </div>

        {/* Right Icons */}
        <div className="hidden lg:flex items-center space-x-6">
          <button className="text-lime-900 text-lg cursor-pointer">
            <FaSearch />
          </button>
          <button className="text-lime-900 cursor-pointer text-lg">
            <FaBell />
          </button>
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
                <Link
                  href="/profile"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:rounded-lg flex items-center"
                  onClick={() => setDropdownOpen(false)}
                >
                  <FaUserCircle className="mr-2 text-lime-400 text-lg" />
                  <span className="mt-[2px]">Profile</span>
                </Link>

                <button
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center w-full text-left"
                  onClick={() => {
                    // Handle logout logic
                    setDropdownOpen(false);
                  }}
                >
                  <FaSignOutAlt className="mr-2 text-lime-400 text-lg" />
                  <span className="mt-[2px]">Logout</span>
                </button>

                <Link
                  href="/personaldata"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 flex items-center"
                  onClick={() => setDropdownOpen(false)}
                >
                  <svg className="mr-2 text-lime-400 text-lg w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <span className="mt-[2px]">Update Profile</span>
                </Link>

                <Link
                  href="/contact"
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 hover:rounded-lg flex items-center"
                  onClick={() => setDropdownOpen(false)}
                >
                  <svg className="mr-2 text-lime-400 text-lg w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="mt-[2px]">Contact Us</span>
                </Link>
              </div>
            )}
          </div>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="block lg:hidden text-3xl text-lime-600"
          aria-label="Toggle menu"
        >
          <MdMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col px-6 pb-4 space-y-3 bg-white border-t border-gray-200">
          <button
            onClick={() => scrollToSection("ai-assistant")}
            className="text-gray-600 hover:text-gray-800 font-bold text-left"
          >
            Ask AI
          </button>

          <button
            onClick={() => scrollToSection("quiz-section")}
            className="text-gray-600 hover:text-gray-800 font-bold text-left"
          >
            Quiz
          </button>

          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-800 font-bold"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            href="/admindashboard"
            className="text-gray-600 hover:text-gray-800 font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Admin
          </Link>

          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-800 font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/personaldata"
            className="text-gray-600 hover:text-gray-800 font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Profile
          </Link>

          <Link
            href="/policy"
            className="text-gray-600 hover:text-gray-800 font-bold"
            onClick={() => setMenuOpen(false)}
          >
            Policy
          </Link>

          <div className="flex gap-4">
            <button className="text-lime-900 text-lg">
              <FaSearch />
            </button>
            <button className="text-lime-900 text-lg">
              <FaBell />
            </button>
          </div>

          <button
            onClick={() => scrollToSection("live-competition")}
            className="bg-lime-400 text-white px-4 py-2 rounded-full flex items-center shadow-lg"
          >
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