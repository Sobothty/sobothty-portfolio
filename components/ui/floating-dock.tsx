"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"

interface DockItem {
  name: string
  href: string
  icon: React.ReactNode
}

interface FloatingDockProps {
  items: DockItem[]
  className?: string
}

export function FloatingDock({ items, className }: FloatingDockProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className={cn("fixed bottom-4 left-1/2 -translate-x-1/2 z-50", className)}>
      <div className="flex items-end gap-2 px-4 py-3 rounded-2xl bg-card/80 backdrop-blur-lg border border-border shadow-lg">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={cn(
              "flex items-center justify-center w-12 h-12 rounded-xl bg-muted hover:bg-primary transition-all duration-300",
              hoveredIndex === index && "scale-125 -translate-y-2",
            )}
            title={item.name}
          >
            <span className="text-foreground">{item.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}
