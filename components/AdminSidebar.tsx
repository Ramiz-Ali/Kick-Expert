'use client';

import { usePathname } from 'next/navigation';
import { Home, Users, Film, Camera, Clock, BarChart, Gamepad } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const menuItems = [
  { label: "Dashboard", icon: Home, href: "/admindashboard" },
  { label: "Registered Users", icon: Users, href: "/admindashboard/users" },
  { label: "Shorts", icon: Film, href: "/shorts" },
  { label: "Web-Stories", icon: Camera, href: "/web-stories" },
  { label: "Quizzes", icon: Clock, href: "/quizzes" },
  { label: "Subscriptions", icon: BarChart, href: "/subscriptions" },
  { label: "Games", icon: Gamepad, href: "/games" },
];

interface AdminSidebarProps {
  onNavigate?: () => void;
}

export default function AdminSidebar({ onNavigate }: AdminSidebarProps) {
  const pathname = usePathname();

  // Normalize pathname to remove trailing slashes
  const normalizedPathname = pathname?.replace(/\/$/, '') || '/';

  return (
    <nav className="space-y-1">
      {menuItems.map((item) => {
        const Icon = item.icon;
        // Check if the current pathname matches or starts with the item href
        const isActive = normalizedPathname === item.href ||
                         (item.href !== '/admindashboard' && normalizedPathname.startsWith(item.href));

        // Debug logging
        console.log(`Menu Item: ${item.label}, Href: ${item.href}, Pathname: ${normalizedPathname}, Active: ${isActive}`);

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => onNavigate?.()}
            className={clsx(
              "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium",
              isActive ? "bg-lime-400 text-black" : "text-gray-300 hover:bg-[#1f2a3c] hover:text-white"
            )}
          >
            <Icon size={18} className="flex-shrink-0" />
            <span className="truncate">{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}