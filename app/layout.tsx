import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
import { Analytic } from "./analytic";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: {
    default: "Kry Sobothty - Full Stack Developer Portfolio",
    template: "%s | Kry Sobothty Portfolio",
  },
  description:
    "Full Stack Developer specializing in React, Next.js, Spring Boot, and modern web technologies. Building seamless digital experiences with beautiful design and powerful functionality.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Spring Boot Developer",
    "TypeScript",
    "JavaScript",
    "Web Developer",
    "Portfolio",
    "Kry Sobothty",
    "Frontend Developer",
    "Backend Developer",
    "Cambodia Developer",
  ],
  authors: [{ name: "Kry Sobothty", url: "mailto:krysobothty@example.com" }],
  creator: "Kry Sobothty",
  publisher: "Kry Sobothty",
  formatDetection: {
    email: true, // Enable auto-detection of email addresses
    address: true,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "kh_Cambodia",
    url: defaultUrl,
    title: "Kry Sobothty - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in React, Next.js, Spring Boot, and modern web technologies. Building seamless digital experiences with beautiful design and powerful functionality.",
    siteName: "Kry Sobothty Portfolio",
    images: [
      {
        url: `https://woiwumpnbnbfmlrqnbvq.supabase.co/storage/v1/object/public/file-project//my-profile.jpg`,
        width: 1200,
        height: 630,
        alt: "Kry Sobothty - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kry Sobothty - Full Stack Developer Portfolio",
    description:
      "Full Stack Developer specializing in React, Next.js, Spring Boot, and modern web technologies.",
    images: [
      `https://woiwumpnbnbfmlrqnbvq.supabase.co/storage/v1/object/public/file-project//my-profile.jpg`,
    ],
    creator: "@krysobothty",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your actual Google verification code
  },
  category: "technology",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>

        {/* Structured Data for SEO */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Kry Sobothty",
              jobTitle: "Full Stack Web Developer",
              description:
                "Full Stack Developer specializing in React, Next.js, Spring Boot, and modern web technologies.",
              email: "krysobothty@gmail.com", 
              url: defaultUrl,
              image:
                "https://woiwumpnbnbfmlrqnbvq.supabase.co/storage/v1/object/public/file-project//my-profile.jpg",
              knowsAbout: [
                "React.js",
                "Next.js",
                "Spring Boot",
                "TypeScript",
                "JavaScript",
                "PostgreSQL",
                "Full Stack Web Development",
              ],
            }),
          }}
        />
      </head>
      <body className={`${geistSans.className} antialiased bg-gray-800`}>
        <Header />
        {/* Main content area */}
        {children}
        <Analytics />
        <Analytic />
      </body>
    </html>
  );
}
