'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
// import { auth, db } from "@/lib/firebase";
// import { doc, getDoc } from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';
import Image from "next/image";

export default function Profile() {
  const [name, setName] = useState<string>("John Doe"); // Dummy name
  const [email, setEmail] = useState<string>("john.doe@example.com"); // Dummy email
  const [createdAt, setCreatedAt] = useState<string>(new Date().toISOString()); // Dummy createdAt
  const [loading, setLoading] = useState<boolean>(false); // Set to false since no async fetching
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const router = useRouter();

  const slides = [
    "/images/slide6.jpg",
    "/images/slide7.jpg",
    "/images/slide2.jpg",
    "/images/slide1.jpg",
    "/images/slide9.jpg",
  ];

  // Commented out Firebase data fetching
  useEffect(() => {
    /*
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        setEmail(user.email || "");
        try {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (userDoc.exists()) {
            const data = userDoc.data();
            setName(data.name || "");
            setCreatedAt(data.createdAt || "");
          } else {
            toast.error("Profile data not found");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          toast.error("Failed to load profile data");
        } finally {
          setLoading(false);
        }
      } else {
        toast.error("Please log in to view your profile");
        router.push("/login");
      }
    };

    fetchUserData();
    */

    // Slideshow interval
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [router, slides.length]);

  // Format date for display
  const formatDate = (isoString: string) => {
    if (!isoString) return "N/A";
    const date = new Date(isoString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            iconTheme: {
              primary: '#10b981',
              secondary: '#fff',
            },
          },
          error: {
            duration: 4000,
          },
          loading: {
            duration: Infinity,
          },
        }}
      />

      {/* Image Slideshow Section */}
      <div className="hidden lg:flex w-1/2 relative overflow-hidden h-[80vh] self-center">
        <div className="relative rounded-2xl w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={slide}
                alt={`Slide ${index + 1}`}
                fill
                className="object-contain"
                priority={index === 0}
              />
            </div>
          ))}
          {/* Text Overlay Container */}
          <div className="absolute bottom-10 left-0 right-0">
            <div className="max-w-md mx-auto text-center text-white">
              <h2 className="text-2xl font-bold">Your Profile</h2>
              <p className="text-lg mb-4">View and manage your account details</p>
            </div>
          </div>
          {/* Slide Indicators */}
          <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? 'bg-lime-400' : 'bg-white bg-opacity-50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Profile Details Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Your Profile</h1>
            <p className="text-gray-600">View your account information</p>
          </div>

          {loading ? (
            <div className="flex justify-center">
              <svg
                className="animate-spin h-8 w-8 text-lime-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <p className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800">
                  {name || "N/A"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <p className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800">
                  {email || "N/A"}
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Account Created
                </label>
                <p className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-800">
                  {formatDate(createdAt)}
                </p>
              </div>

              <button
                onClick={() => router.push('/')}
                className="w-full py-3 px-4 bg-lime-600 hover:bg-lime-700 text-white font-semibold rounded-lg transition duration-300"
              >
                Back To Homepage
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}