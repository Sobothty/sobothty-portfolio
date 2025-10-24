"use client"

import { BackgroundBeams } from "@/components/ui/background-beams"
import { FloatingNavbar } from "@/components/ui/floating-navbar"
import { FloatingDock } from "@/components/ui/floating-dock"
import { CometCard } from "@/components/ui/comet-card"
import { PixelImage } from "@/components/ui/pixel-image"
import { IconCloud } from "@/components/ui/icon-cloud"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Home, User, Briefcase, Mail, Github, Linkedin, Twitter, Code } from "lucide-react"
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiDocker,
  SiPostgresql,
  SiMysql,
  SiVercel,
  SiFigma,
  SiStripe,
  SiSocketdotio,
  SiOpenai,
  SiFastapi,
  SiFramer,
  SiChartdotjs,
  SiSupabase,
  SiSpring,
  SiExpress,
  SiKotlin,
  SiKeycloak,
  SiMinio,
  SiLaravel,
  SiSpringsecurity,
} from "react-icons/si"
import { url } from "inspector"

export default function Portfolio() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const navItems = [
    { name: "Home", href: "#home", icon: <Home className="w-4 h-4" /> },
    { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
    { name: "Tech Stack", href: "#tech", icon: <Code className="w-4 h-4" /> },
    { name: "Projects", href: "#projects", icon: <Briefcase className="w-4 h-4" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
  ]

  const dockItems = [
    { name: "Home", href: "#home", icon: <Home className="w-5 h-5" /> },
    { name: "About", href: "#about", icon: <User className="w-5 h-5" /> },
    { name: "Tech", href: "#tech", icon: <Code className="w-5 h-5" /> },
    { name: "Projects", href: "#projects", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Contact", href: "#contact", icon: <Mail className="w-5 h-5" /> },
  ]

  const techStackIcons = [
    "typescript",
    "javascript",
    "react",
    "nextdotjs",
    "nodedotjs",
    "express",
    "java",
    "kotlin",
    "tailwindcss",
    "git",
    "github",
    "docker",
    "postgresql",
    "mysql",
    "supabase",
    "vercel",
    "figma",
    "springboot",
    "spring",
    "keycloak",
    "minio",
    "stripe",
    "websocket",
    "openai",
    "laravel",
    "framer",
    "chartjs",
    "socketio",
  ]

  const techStackList = [
    { name: "TypeScript", icon: SiTypescript, category: "Language", color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, category: "Language", color: "#F7DF1E" },
    { name: "Java", icon: Code, category: "Language", color: "#007396" },
    { name: "Kotlin", icon: SiKotlin, category: "Language", color: "#A97BFF" },
    { name: "React", icon: SiReact, category: "Frontend", color: "#61DAFB" },
    { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend", color: "#06B6D4" },
    { name: "Next.js", icon: SiNextdotjs, category: "Framework", color: "#000000" },
    { name: "Spring", icon: SiSpring, category: "Framework", color: "#6DB33F" },
    { name: "Node.js", icon: SiNodedotjs, category: "Backend", color: "#339933" },
    { name: "Express", icon: SiExpress, category: "Backend", color: "#ffffff" },
    { name: "Laravel", icon: SiLaravel, category: "Backend", color: "#FF2D20" },
    { name: "PostgreSQL", icon: SiPostgresql, category: "Database", color: "#4169E1" },
    { name: "MySQL", icon: SiMysql, category: "Database", color: "#4479A1" },
    { name: "Supabase", icon: SiSupabase, category: "Database", color: "#3ECF8E" },
    { name: "Keycloak", icon: SiKeycloak, category: "Authentication", color: "#ffffff" },
    { name: "Minio", icon: SiMinio, category: "Storage", color: "#F68B20" },
    { name: "Stripe", icon: SiStripe, category: "Payment", color: "#635BFF" },
    { name: "Git", icon: SiGit, category: "Tools", color: "#F05032" },
    { name: "GitHub", icon: SiGithub, category: "Tools", color: "#ffffff" },
    { name: "Docker", icon: SiDocker, category: "Tools", color: "#2496ED" },
    { name: "Vercel", icon: SiVercel, category: "Tools", color: "#000000" },
    { name: "Figma", icon: SiFigma, category: "Design", color: "#F24E1E" },
  ]

  const techIconMap: Record<string, { icon: any; color: string }> = {
    "Next.js": { icon: SiNextdotjs, color: "#000000" },
    TypeScript: { icon: SiTypescript, color: "#3178C6" },
    Stripe: { icon: SiStripe, color: "#635BFF" },
    React: { icon: SiReact, color: "#61DAFB" },
    "Node.js": { icon: SiNodedotjs, color: "#339933" },
    WebSocket: { icon: SiSocketdotio, color: "#010101" },
    Python: { icon: SiPython, color: "#3776AB" },
    OpenAI: { icon: SiOpenai, color: "#412991" },
    FastAPI: { icon: SiFastapi, color: "#009688" },
    Tailwind: { icon: SiTailwindcss, color: "#06B6D4" },
    "Framer Motion": { icon: SiFramer, color: "#0055FF" },
    "Chart.js": { icon: SiChartdotjs, color: "#FF6384" },
    "Weather API": { icon: SiOpenai, color: "#4A90E2" },
    Supabase: { icon: SiSupabase, color: "#3ECF8E" },
    PostgreSQL: { icon: SiPostgresql, color: "#4169E1" },
    MySQL: { icon: SiMysql, color: "#4479A1" },
    "GitHub Actions": { icon: SiGithub, color: "#181717" },
    "Spring Boot": { icon: SiSpring, color: "#6DB33F" },
    "Spring Security": { icon: SiSpringsecurity, color: "#6DB33F" },
    Express: { icon: SiExpress, color: "#ffffff" },
    Kotlin: { icon: SiKotlin, color: "#A97BFF" },
    Keycloak: { icon: SiKeycloak, color: "#000000" },
    Minio: { icon: SiMinio, color: "#F68B20" },
    Docker: { icon: SiDocker, color: "#2496ED" },
  }

  return (
    <div className="relative min-h-screen">
      <BackgroundBeams />

      {/* Navigation */}
      {!isMobile ? <FloatingNavbar navItems={navItems} /> : <FloatingDock items={dockItems} />}

      {/* Hero Section */}
      <section id="home" className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-5xl mx-auto text-center">
          <CometCard className="p-8 md:p-12">
            <div className="mb-6">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-linear-to-br from-primary to-accent flex items-center justify-center text-4xl font-bold text-white">
                KS
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Kry Sobothty</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">IT Engineering Student</p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about building innovative solutions that bridge the gap between technology and human needs. I
              thrive on solving complex problems through elegant code and creative thinking.
            </p>
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button asChild size="lg">
                <a href="#projects">View Projects</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
            </div>
          </CometCard>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <CometCard className="p-6 flex items-center justify-center">
              <PixelImage
                src="/bothty.jpg"
              />
            </CometCard>
            <div className="space-y-6">
              <CometCard className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">My Passion</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm driven by the endless possibilities of technology to transform ideas into reality. From crafting
                  seamless user experiences to architecting robust backend systems, I find joy in every aspect of
                  software development. My goal is to create solutions that not only work flawlessly but also make a
                  meaningful impact on people's lives.
                </p>
              </CometCard>
              <CometCard className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-primary">What I Do</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    <span>Full-stack web development with modern frameworks</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    <span>Building scalable and maintainable applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    <span>Exploring AI/ML integration in web applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">▹</span>
                    <span>Continuous learning and staying updated with tech trends</span>
                  </li>
                </ul>
              </CometCard>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Tech Stack</h2>
          <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto leading-relaxed">
            Technologies and tools I work with to bring ideas to life
          </p>
          <div className="grid lg:grid-cols-2 gap-6">
            {/* Icon Cloud Card */}
            <CometCard className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Interactive View</h3>
              <div className="relative h-[500px] w-full flex items-center justify-center">
                <IconCloud iconSlugs={techStackIcons} />
              </div>
            </CometCard>

            {/* List View Card */}
            <CometCard className="p-8">
              <h3 className="text-xl font-semibold mb-6 text-center">Technologies I Use</h3>
              <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2">
                {techStackList.map((tech, index) => {
                  const Icon = tech.icon
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${tech.color}15` }}
                      >
                        <Icon className="w-5 h-5" style={{ color: tech.color }} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium group-hover:text-primary transition-colors">{tech.name}</p>
                        <p className="text-xs text-muted-foreground">{tech.category}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CometCard>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Project Cards */}
            {[
              {
                title: "Docuhub",
                description:
                  "Document publishing platform with advanced search and collaboration features.",
                tech: ["Next.js", "TypeScript", "Spring Boot", "Spring Security", "Keycloak", "PostgreSQL", "Docker", "Minio"],
                url: "https://www.docuhub.me",
              },
              {
                title: "Portfolio Website",
                description: "Modern portfolio website with animations and interactive elements.",
                tech: ["Next.js", "Tailwind", "Framer Motion"],
                url: "https://www.sobothty.tech",
              },
              {
                title: "Rumsay",
                description: "Hotel Booking System with real-time availability and booking management.",
                tech: ["React", "Laravel", "MySQL", "Docker"],
                url: "https://rumsay-hotel.vercel.app/",
              },
            ].map((project, index) => (
              <CometCard key={index} className="p-6 group cursor-pointer">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, techIndex) => {
                    const techInfo = techIconMap[tech]
                    if (techInfo) {
                      const Icon = techInfo.icon
                      return (
                        <div
                          key={techIndex}
                          className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-full bg-muted/50 hover:bg-muted transition-colors group/tech"
                          title={tech}
                        >
                          <Icon className="w-3.5 h-3.5" style={{ color: techInfo.color }} />
                          <span>{tech}</span>
                        </div>
                      )
                    }
                    return (
                      <span
                        key={techIndex}
                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    )
                  })}
                </div>
              </CometCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative z-10 py-20 px-4 mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Connect</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel
            free to reach out!
          </p>
          <CometCard className="p-8">
            <div className="flex items-center justify-center gap-6 mb-8">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-muted hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            <Button asChild size="lg" className="w-full md:w-auto">
              <a href="mailto:kry.sobothty@example.com">Send me an email</a>
            </Button>
          </CometCard>
        </div>
      </section>
    </div>
  )
}
