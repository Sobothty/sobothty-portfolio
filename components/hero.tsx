"use client";

import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  Mail,
  ExternalLink,
  Code,
  Database,
  Globe,
} from "lucide-react";

import {
  FaTelegramPlane,
  FaGithub,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export function Hero() {
  const [currentText, setCurrentText] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const roles = [
    "Full Stack Developer",
    "Next.js",
    "Spring Boot",
    "PostgreSQL",
    "React.js",
    "Tailwind CSS",
    "MySQL",
  ];

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const skills = [
    { icon: <Code className="w-5 h-5" />, text: "Frontend" },
    { icon: <Database className="w-5 h-5" />, text: "Backend" },
    { icon: <Globe className="w-5 h-5" />, text: "Full Stack Web" },
  ];

  const socialLinks = [
    {
      icon: <FaTelegramPlane className="w-5 h-5" />,
      href: "https://t.me/Sobothty",
      label: "Telegram",
    },
    {
      icon: <FaFacebookF className="w-5 h-5" />,
      href: "https://facebook.com/bothty.kry",
      label: "Facebook",
    },
    {
      icon: <FaGithub className="w-5 h-5" />,
      href: "https://github.com/Sobothty",
      label: "GitHub",
    },
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      href: "https://linkedin.com/in/yourusername",
      label: "LinkedIn",
    },
    {
      icon: <SiGmail className="w-5 h-5" />,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=krysobothty@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grey-50 text-gray-900">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] opacity-25"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Avatar/Profile Image */}
          <div className="mb-8">
            <div className="relative mx-auto w-56 h-56 mb-6">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-full animate-spin-slow"></div>
              <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                <img
                  src="https://woiwumpnbnbfmlrqnbvq.supabase.co/storage/v1/object/public/file-project//my-profile.jpg"
                  alt="Sobothty"
                  className="size-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Greeting */}
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-4">
              👋 Hello, I'm Sobothty
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">Full Stack</span>
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Web Developer
            </span>
          </h1>

          {/* Dynamic Role Text */}
          <div className="mb-8 h-8">
            <p className="text-xl md:text-2xl text-gray-600">
              I craft{" "}
              <span className="relative inline-block">
                <span className="text-blue-600 font-semibold">
                  {roles[currentText]}
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 animate-pulse"></span>
              </span>{" "}
              experiences
            </p>
          </div>
          {/* Skills Pills */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <span className="text-blue-600">{skill.icon}</span>
                <span className="text-gray-700 font-medium">{skill.text}</span>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 text-gray-600 hover:text-blue-600"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-float animation-delay-1000"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-indigo-200 rounded-full opacity-20 animate-float animation-delay-2000"></div>
    </section>
  );
}

/* Add these custom animations to your globals.css */
/*
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

.animate-blob {
  animation: blob 7s infinite;
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animation-delay-1000 {
  animation-delay: 1s;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-spin-slow {
  animation: spin 8s linear infinite;
}
*/
