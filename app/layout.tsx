import type React from "react";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
// @ts-ignore: side-effect import without type declarations for global CSS
import "./globals.css";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import CanvasCursor from "@/components/mage-ui/cursor-effects/canvas-cursor-effect";

const inter = Inter({ subsets: ["latin"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kry Sobothty - IT Engineering Student",
  description:
    "Portfolio of Kry Sobothty, IT Engineering Student passionate about building innovative solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <ScrollProgress />
          <CanvasCursor />
          {children}
      </body>
    </html>
  );
}
