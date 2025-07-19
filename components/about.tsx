"use client";

import React from "react";
import {
  Code,
  Database,
  Globe,
  BookOpen,
  Award,
  Users,
  Coffee,
  Download,
  MapPin,
  Calendar,
  GraduationCap,
} from "lucide-react";

import Image from "next/image";

const About = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
      ],
      color: "bg-blue-500",
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6" />,
      technologies: ["Node.js", "Spring Boot", "Java", "REST APIs"],
      color: "bg-green-500",
    },
    {
      category: "Database",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["PostgreSQL", "MySQL", "Supabase"],
      color: "bg-purple-500",
    },
  ];

  const stats = [
    {
      icon: <Code className="w-8 h-8" />,
      value: "3+",
      label: "Projects Completed",
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      value: "1000+",
      label: "Cups of Coffee",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "1+",
      label: "Happy Clients",
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "0+",
      label: "Years Experience",
    },
  ];

  const timeline = [
    {
      year: "2025",
      title: "Senior Student & Full Stack Web Developer",
      description:
        "Currently a senior student pursuing my degree while actively developing my skills in full-stack web development",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      year: "2024",
      title: "Junior Student & Web Designer",
      description:
        "Currently pursuing my degree while working on advanced web development projects",
      icon: <Code className="w-5 h-5" />,
    },
    {
      year: "2023",
      title: "Fresh man",
      description:
        "Mastered modern frameworks and started building complex applications",
      icon: <Code className="w-5 h-5" />,
    },
    {
      year: "2022",
      title: "High School Graduate",
      description: "New generation school of Preah Sisowath High School",
      icon: <GraduationCap className="w-5 h-5" />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate student and developer crafting digital solutions with
            modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="relative mx-auto w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 rounded-3xl rotate-6 opacity-20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-3xl -rotate-6 opacity-20"></div>
              <div className="relative bg-gray-700 rounded-3xl p-2 shadow-2xl border border-gray-600">
                <Image
                  src="https://woiwumpnbnbfmlrqnbvq.supabase.co/storage/v1/object/public/file-project//my-profile.jpg"
                  alt="Sobothty - Full Stack Developer"
                  className="w-full h-full rounded-2xl object-cover"
                  width={400}
                  height={400}
                />
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg animate-bounce">
              <Code className="w-6 h-6" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-purple-500 text-white p-3 rounded-full shadow-lg animate-pulse">
              <Database className="w-6 h-6" />
            </div>
          </div>

          {/* About Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 text-blue-400 font-semibold">
              <span className="w-12 h-0.5 bg-blue-400"></span>
              <span>Get to know me</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white">
              I'm Sobothty, a passionate{" "}
              <span className="text-blue-400">Full Stack Developer</span>
            </h3>

            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Currently a senior student pursuing my degree while actively
                developing my skills in full-stack web development. I have a
                passion for creating seamless digital experiences that combine
                beautiful design with powerful functionality.
              </p>

              <p>
                My journey in programming started during my academic years, and
                I've since mastered modern technologies like React, Next.js,
                Node.js, and Spring Boot. I enjoy tackling complex problems and
                turning ideas into reality through code.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                fellow developers in the community.
              </p>
            </div>

            {/* Personal Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Cambodia</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">
                  Available for work and freelance
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Senior Student</span>
              </div>
              <div className="flex items-center space-x-3">
                <Coffee className="w-5 h-5 text-blue-400" />
                <span className="text-gray-300">Coffee Enthusiast</span>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="pt-6">
              <a
                href="/path-to-your-cv.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-700 border border-gray-600 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:bg-gray-600 transition-all duration-300 text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mb-4">
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Technical <span className="text-blue-400">Skills</span>
          </h3>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-700 border border-gray-600 rounded-2xl p-6 shadow-lg hover:shadow-xl hover:bg-gray-600 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div
                    className={`${skill.color} text-white p-3 rounded-full mr-4`}
                  >
                    {skill.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white">
                    {skill.category}
                  </h4>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-600 text-gray-200 rounded-full text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <div>
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            My <span className="text-blue-400">Journey</span>
          </h3>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-1/2"></div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 md:w-1/2">
                    <div
                      className={`bg-gray-700 border border-gray-600 rounded-xl p-6 shadow-lg ml-8 md:ml-0 hover:bg-gray-600 transition-all duration-300 ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}
                    >
                      <div className="flex items-center mb-3">
                        <div className="bg-blue-600 text-white p-2 rounded-full mr-3">
                          {item.icon}
                        </div>
                        <span className="text-blue-400 font-semibold">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h4>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform md:-translate-x-1/2 border-4 border-gray-800 shadow-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
