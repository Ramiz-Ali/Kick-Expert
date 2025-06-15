// components/Footer.js
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import { IoGlobeOutline } from 'react-icons/io5';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#131c2b] text-white pt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-8 border-b border-gray-600 pb-10">
        
        {/* Brand + Contact */}
        <div className="space-y-4">
          <h2 className="text-white font-bold text-xl flex items-center gap-1">
            <span className="text-lime-400">●</span> Kick<span className="text-white">Expert</span>
          </h2>
          <h3 className="text-lime-400 font-semibold">Contact us</h3>
          <p className="text-sm">sweetdeli@gmail.com</p>
          <p className="text-sm">+1-2345-6789</p>
          <p className="text-sm">123 Ave, New York, USA</p>
          <div className="flex gap-4 pt-2 text-gray-300">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold mb-3">Products</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Auctor volutpat.</li>
            <li>Fermentum turpis.</li>
            <li>Mi consequat.</li>
            <li>Amet venenatis.</li>
            <li>Convallis porttitor.</li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Egestas vitae.</li>
            <li>Viverra lorem ac.</li>
            <li>Eget ac tellus.</li>
            <li>Erat nulla.</li>
            <li>Vulputate proin.</li>
          </ul>
        </div>

        {/* Get the App */}
        <div className="md:col-span-2">
          <h3 className="text-lime-400 font-semibold mb-3">Get the app</h3>
          <div className="flex flex-col gap-3">
            <div className="mb-6 md:mb-0 md:mr-10">
                   <Image  src="/images/image7.png"
                     alt="Brain Circle"
                     width={100}
                     height={100}
                     className="rounded-full"
                   />
                 </div>
        <div className="mb-6 md:mb-0 md:mr-10">
                   <Image  src="/images/image8.png"
                     alt="Brain Circle"
                     width={100}
                     height={100}
                     className="rounded-full"
                   />
                 </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 sm:px-6 lg:px-8 py-4 text-sm text-gray-400">
        <div className="flex items-center gap-2 mb-2 md:mb-0">
          <IoGlobeOutline className="text-lg" />
          <span>English</span>
        </div>
        <div>Copyright © 2020. All rights reserved.</div>
      </div>
    </footer>
  );
}
