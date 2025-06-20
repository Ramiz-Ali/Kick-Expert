'use client';

import { useState, useEffect , useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { auth, db } from "@/lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { signOut } from "firebase/auth";
import {
  FaSearch,
  FaBell,
  FaUser,
  FaUserCircle,
  FaSignOutAlt,
  FaInfoCircle,
  FaShieldAlt,
  FaEnvelope,
  FaTimes ,
} from "react-icons/fa";
import { MdMenu, MdClose } from "react-icons/md";
import toast from 'react-hot-toast';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [userName, setUserName] = useState<string>("");
  const [role, setRole] = useState<string>("");
  const pathname = usePathname();

  // Fetch user data and listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setUserName(data.name || "User");
            setRole(data.role || "user");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          toast.error("Failed to load user data");
        }
      } else {
        setUser(null);
        setUserName("");
        setRole("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully");
      setDropdownOpen(false);
      setMenuOpen(false);
    } catch (error) {
      console.error("Logout Error:", error);
      toast.error("Failed to log out");
    }
  };

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setMenuOpen(false);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isOpen]);

  return (
    <nav className="bg-white w-full z-50 shadow-sm fixed top-0">
      <div className="flex justify-between items-center px-4 py-3 md:px-8 lg:px-10">
        {/* Logo */}
        <Link href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <div className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Logo" 
              width={40} 
              height={40} 
              className="w-8 h-8 md:w-10 md:h-10"
            />
            <span className="ml-2 text-lime-400 font-bold text-lg md:text-xl">
              Kick<span className="text-black">Expert</span>
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-6">
          <button
            onClick={() => scrollToSection("chat-assistant")}
            className="text-gray-600 hover:text-lime-500 font-bold transition-colors"
          >
            Ask AI
          </button>
          <button
            onClick={() => scrollToSection("quiz-section")}
            className="text-gray-600 hover:text-lime-500 font-bold transition-colors"
          >
            Quiz
          </button>
          <button
            onClick={() => scrollToSection("live-competition")}
            className="bg-lime-400 hover:bg-lime-500 text-white  px-4 py-2 rounded-full flex items-center shadow-lg transition-colors"
          >
            LIVE COMPETITION
            <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
              LIVE
            </span>
          </button>
        </div>

        {/* Right Icons - Desktop */}
        <div className="hidden lg:flex items-center space-x-6">
        <div className="relative flex">
      {/* Search Bar - Positioned absolutely to the left */}
      <div
        className={`absolute right-8 top-[-10]  bg-white border border-gray-500 rounded-full overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "w-fit opacity-100" : " opacity-0"
        }`}
        style={{ transformOrigin: 'right center' }}
      >
        <div className="flex items-center px-4 py-2">
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search ..."
            className="flex-grow outline-none text-gray-700 placeholder-gray-600 text-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Search Button - Fixed position */}
      <button
        onClick={toggleSearch}
        className={`text-gray-600 hover:text-lime-500 text-lg cursor-pointer transition-colors z-10 ${
          isOpen ? "text-lime-500" : ""
        }`}
        aria-label="Search"
      >
        <FaSearch />
      </button>
    </div>
          <button 
            className="text-gray-600 hover:text-lime-500 cursor-pointer text-lg transition-colors"
            aria-label="Notifications"
          >
            <FaBell />
          </button>

          {user ? (
            <div className="relative">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center space-x-1 focus:outline-none"
                aria-label="User menu"
              >
                <div className="p-1 rounded-full text-black">
                  <FaUser className="text-xl" />
                </div>
                <span className="text-gray-600">{userName || "User"}</span>
                <svg
                  className={`w-4 h-4 text-gray-700 transition-transform ${dropdownOpen ? 'rotate-180' : ''}`}
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
                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden">
                  <Link
                    href="/profile"
                    className="px-4 py-3 pl-5 text-gray-700 hover:bg-gray-100 flex items-center transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <FaUserCircle className="mr-3 text-lime-500 text-lg" />
                    <span>Profile</span>
                  </Link>
                  <Link
                    href="/updateProfile"
                    className="px-4 py-3 pl-5 text-gray-700 hover:bg-gray-100 flex items-center transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <svg
                      className="mr-3 text-lime-500 text-lg w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                    <span>Update Profile</span>
                  </Link>
                  <Link
                    href="/about"
                    className="px-4 py-3 pl-5 text-gray-700 hover:bg-gray-100 flex items-center transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <FaInfoCircle className="mr-3 text-lime-500 text-lg" />
                    <span>About</span>
                  </Link>
                  <Link
                    href="/policy"
                    className="px-4 py-3 pl-5 text-gray-700 hover:bg-gray-100 flex items-center transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <FaShieldAlt className="mr-3 text-lime-500 text-lg" />
                    <span>Policy</span>
                  </Link>
                  <Link
                    href="/contact"
                    className="px-4 py-3 pl-5 text-gray-700 hover:bg-gray-100 flex items-center transition-colors"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <FaEnvelope className="mr-3  text-lime-500 text-lg" />
                    <span>Contact</span>
                  </Link>
                  <button
                    className="px-4 py-3 pl-5 text-gray-700 hover:bg-gray-100 flex items-center w-full text-left transition-colors"
                    onClick={handleLogout}
                  >
                    <FaSignOutAlt className="mr-3 text-lime-500 text-lg" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-3">
              <Link href="/login">
                <button className="py-2 px-4 flex items-center justify-center bg-lime-400 hover:bg-lime-500 rounded-md transition-colors">
                  Login
                </button>
              </Link>
              <Link href="/signup">
                <button className="py-2 px-4 flex items-center justify-center bg-lime-600 hover:bg-lime-700 text-white rounded-md transition-colors">
                  Signup
                </button>
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-lime-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-3 space-y-4">
            <button
              onClick={() => scrollToSection("chat-assistant")}
              className="block w-full text-left py-2 text-gray-700 hover:text-lime-500 font-medium transition-colors"
            >
              Ask AI
            </button>
            <button
              onClick={() => scrollToSection("quiz-section")}
              className="block w-full text-left py-2 text-gray-700 hover:text-lime-500 font-medium transition-colors"
            >
              Quiz
            </button>
            {user && (
              <>
                <Link
                  href="/profile"
                  className="flex items-center py-2 text-gray-700 hover:text-lime-500 font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {/* <FaUserCircle className="mr-3 text-lime-500 text-lg" /> */}
                  <span>Profile</span>
                </Link>
                <Link
                  href="/updateProfile"
                  className="flex items-center py-2 text-gray-700 hover:text-lime-500 font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {/* <svg
                    className="mr-3 text-lime-500 text-lg w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg> */}
                  <span>Update Profile</span>
                </Link>
                <Link
                  href="/about"
                  className="flex items-center py-2 text-gray-700 hover:text-lime-500 font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {/* <FaInfoCircle className="mr-3 text-lime-500 text-lg" /> */}
                  <span>About</span>
                </Link>
                <Link
                  href="/policy"
                  className="flex items-center py-2 text-gray-700 hover:text-lime-500 font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {/* <FaShieldAlt className="mr-3 text-lime-500 text-lg" /> */}
                  <span>Policy</span>
                </Link>
                <Link
                  href="/contact"
                  className="flex items-center py-2 text-gray-700 hover:text-lime-500 font-medium transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {/* <FaEnvelope className="mr-3 text-lime-500 text-lg" /> */}
                  <span>Contact</span>
                </Link>
              </>
            )}
          </div>

          <div className="px-4 py-3 border-t border-gray-200">
            {user ? (
              <>
                <div className="flex items-center justify-between py-2">
                  <span className="text-gray-700 font-bold">Welcome, {userName || "User"}</span>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full py-2 px-4 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors mt-2 flex items-center justify-center"
                >
                  <FaSignOutAlt className="mr-2" />
                  Logout
                </button>
              </>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/login"
                  className="py-2 px-4 bg-lime-400 hover:bg-lime-500 text-center rounded-md transition-colors flex items-center justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className="py-2 px-4 bg-lime-600 hover:bg-lime-700 text-white text-center rounded-md transition-colors flex items-center justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Signup
                </Link>
              </div>
            )}
          </div>

          <div className="px-4 py-3 border-t border-gray-200">
            <button
              onClick={() => scrollToSection("live-competition")}
              className="w-full py-2 px-4 bg-lime-400 hover:bg-lime-500 text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
            >
              LIVE COMPETITION
              <span className="ml-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-pulse">
                LIVE
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}