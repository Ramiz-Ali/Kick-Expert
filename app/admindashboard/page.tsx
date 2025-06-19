'use client';

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';
import { auth, db } from '@/lib/firebase';
import { doc, getDoc } from "firebase/firestore";
import toast, { Toaster } from 'react-hot-toast';
import AdminLayout from '../../components/AdminLayout';
import AdminStats from '@/components/AdminStats';
import AdminTicker from '@/components/AdminTicker';
import AdminQuiz from '@/components/AdminQuiz';
import Navbar from '@/components/Navbar';
import { FirestoreUser } from '@/types/user';

export default function AdminDashboard() {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirestoreUser | null>(null);
  const router = useRouter();

  useEffect(() => {
    const checkAdmin = async () => {
      const currentUser = auth.currentUser;
      if (currentUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", currentUser.uid));
          if (userDoc.exists()) {
            const userData = userDoc.data() as FirestoreUser;
            if (userData.role !== 'admin') {
              toast.error("Access denied. Admins only.");
              router.push("/");
            } else {
              setUser(userData);
              setLoading(false);
            }
          } else {
            toast.error("User data not found.");
            router.push("/login");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          toast.error("Failed to load user data.");
          router.push("/login");
        }
      } else {
        toast.error("Please log in to access the admin dashboard.");
        router.push("/login");
      }
    };
    checkAdmin();
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
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
    );
  }

  return (
    <div className="mt-18 md:mt-14 ">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: { duration: 3000 },
          error: { duration: 4000 },
        }}
      />
      <Navbar />
      <AdminLayout>
        <div className="mb-4 sm:mb-6">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-gray-800">
            Admin Dashboard – KickExpert
          </h1>
        </div>
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <AdminStats />
          <AdminTicker />
          <AdminQuiz />
 
        </div>
      </AdminLayout>
    </div>
  );
}