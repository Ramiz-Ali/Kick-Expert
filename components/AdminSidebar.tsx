"use client"

import { useState } from "react"
import { Home, Users, Film, Camera, Clock, BarChart, Gamepad } from "lucide-react"
import Link from "next/link"
import clsx from "clsx"

const menuItems = [
  { label: "Dashboard", icon: Home, href: "/" },
  { label: "Registered Users", icon: Users, href: "/users" },
  { label: "Shorts", icon: Film, href: "/shorts" },
  { label: "Web-Stories", icon: Camera, href: "/web-stories" },
  { label: "Quizzes", icon: Clock, href: "/quizzes" },
  { label: "Subscriptions", icon: BarChart, href: "/subscriptions" },
  { label: "Games", icon: Gamepad, href: "/games" },
]

interface AdminSidebarProps {
  onNavigate?: () => void
}

export default function AdminSidebar({ onNavigate }: AdminSidebarProps) {
  const [active, setActive] = useState("Dashboard")

  return (
    <nav className="space-y-1">
      {menuItems.map((item) => {
        const Icon = item.icon
        const isActive = active === item.label

        return (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => {
              setActive(item.label)
              onNavigate?.()
            }}
            className={clsx(
              "flex items-center space-x-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium",
              {
                "bg-lime-400 text-black": isActive,
                "text-gray-300 hover:bg-[#1f2a3c] hover:text-white": !isActive,
              },
            )}
          >
            <Icon size={18} className="flex-shrink-0" />
            <span className="truncate">{item.label}</span>
          </Link>
        )
      })}
    </nav>
  )
}
