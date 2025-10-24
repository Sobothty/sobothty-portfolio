"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useEffect, useState } from "react"

interface NavItem {
  name: string
  href: string
  icon?: React.ReactNode
}

interface FloatingNavbarProps {
  navItems: NavItem[]
  className?: string
}

export function FloatingNavbar({ navItems, className }: FloatingNavbarProps) {
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY < lastScrollY || currentScrollY < 50) {
        setVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <nav
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
        visible ? "translate-y-0 opacity-100" : "-translate-y-20 opacity-0",
        className,
      )}
    >
      <div className="flex items-center gap-1 px-4 py-2 rounded-full bg-card/80 backdrop-blur-lg border border-border shadow-lg">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-full hover:bg-muted"
          >
            <span className="flex items-center gap-2">
              {item.icon}
              {item.name}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  )
}
