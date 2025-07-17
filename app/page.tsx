"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  MapPin,
  Mail,
  Monitor,
  Server,
  Cloud,
  GraduationCap,
  Award,
  Github,
  Linkedin,
  ExternalLink,
  Heart,
  Sparkles,
} from "lucide-react"
import { submitContactForm } from "./actions/contact"

export default function HomePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleContactSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    const result = await submitContactForm(formData)
    setSubmitMessage(result.message)
    setIsSubmitting(false)

    if (result.success) {
      const form = document.getElementById("contact-form") as HTMLFormElement
      form?.reset()
    }
  }

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-8 h-8" />,
      description: "Building modern, responsive user interfaces with cutting-edge frameworks and technologies.",
      skills: [
        { name: "React", level: 95, color: "bg-blue-500" },
        { name: "Next.js", level: 90, color: "bg-gray-800 dark:bg-gray-600" },
        { name: "TypeScript", level: 88, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      description: "Creating robust server-side applications and APIs with enterprise-grade backends.",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-600" },
        { name: "NestJS", level: 80, color: "bg-red-500" },
        { name: "Django REST", level: 82, color: "bg-green-700" },
        { name: "Express", level: 88, color: "bg-yellow-600" },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      description: "Deploying and scaling applications with modern cloud infrastructure and deployment strategies.",
      skills: [
        { name: "AWS EC2", level: 75, color: "bg-orange-500" },
        { name: "AWS Amplify", level: 78, color: "bg-orange-400" },
        { name: "AWS S3", level: 85, color: "bg-orange-600" },
        { name: "MongoDB Atlas", level: 80, color: "bg-green-500" },
      ],
    },
  ]

  const certifications = [
    {
      title: "Java Full Stack Developer",
      issuer: "Profound Edutech Pvt. Ltd.",
      status: "Pursuing",
      date: "2024",
      description:
        "A comprehensive program covering front-end technologies (HTML, CSS, JavaScript, Bootstrap) and back-end development (Java, Hibernate, SQL).",
      skills: ["Java", "Spring Boot", "Hibernate", "HTML/CSS", "JavaScript", "Bootstrap", "SQL"],
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400",
      icon: "☕",
    },
    {
      title: "Python Programming",
      issuer: "Terna Pvt. Ltd.",
      status: "Completed",
      date: "2023",
      description:
        "A comprehensive program covering Python fundamentals, object-oriented programming, libraries and frameworks (e.g., NumPy, Pandas), data structures, algorithms, file handling, and developing web applications using Flask.",
      skills: ["Python", "NumPy", "Pandas", "Flask", "Data Structures", "Algorithms"],
      badgeColor: "bg-coral-100 text-coral-800 border-coral-200 dark:bg-coral-900/20 dark:text-coral-400",
      icon: "🐍",
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      status: "In Progress",
      date: "2024",
      description:
        "Foundational understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.",
      skills: ["AWS EC2", "AWS S3", "AWS Lambda", "Cloud Architecture", "Security"],
      badgeColor: "bg-orange-100 text-orange-800 border-orange-200 dark:bg-orange-900/20 dark:text-orange-400",
      icon: "☁️",
    },
  ]

  const techStack = ["React", "Node.js", "MongoDB", "AWS", "TypeScript", "Python"]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center relative overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-coral-400/20 to-orange-400/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full relative z-10">
          <div className="text-center mb-12">
            {/* Character Illustration */}
            <div className="inline-block mb-8">
              <div className="relative">
                <div className="w-40 h-40 sm:w-56 sm:h-56 mx-auto rounded-full bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 flex items-center justify-center relative overflow-hidden">
                    <div className="w-32 h-32 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-emerald-100 via-teal-100 to-cyan-100 dark:from-emerald-900/20 dark:via-teal-900/20 dark:to-cyan-900/20 flex items-center justify-center">
                      <span className="text-5xl sm:text-7xl">👩‍💻</span>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-white dark:bg-gray-800 rounded-2xl px-4 py-2 shadow-xl border border-emerald-200 dark:border-emerald-700">
                  <span className="text-lg sm:text-xl font-medium text-emerald-600 dark:text-emerald-400">
                    こんにちは!
                  </span>
                </div>
              </div>
            </div>

            {/* Status Badge */}
            <div className="mb-6">
              <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                Currently building enterprise-grade solutions with modern tech stack{" "}
                <button
                  onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-emerald-600 dark:text-emerald-400 hover:underline ml-1"
                >
                  View Projects →
                </button>
              </Badge>
            </div>

            {/* Introduction */}
            <div className="mb-6">
              <span className="text-emerald-600 dark:text-emerald-400 font-mono text-lg sm:text-xl">
                {">"} Hello, I'm{" "}
              </span>
              <span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold text-lg sm:text-xl">
                Pratiksha Jadhav
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent leading-tight">
              Welcome to my Portfolio
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed px-4 mb-8">
              I'm a Java Developer specializing in{" "}
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Full-Stack Development</span>,{" "}
              <span className="text-teal-600 dark:text-teal-400 font-semibold">Enterprise Applications</span> &{" "}
              <span className="text-cyan-600 dark:text-cyan-400 font-semibold">Web Technologies</span>. Passionate about
              creating innovative solutions that bridge technology and user experience. With hands-on experience in{" "}
              <span className="text-coral-600 dark:text-coral-400 font-semibold">Java, Spring Boot, Hibernate</span>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </Button>
              <Button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                variant="outline"
                className="border-2 border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900/20 px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                Download Resume →
              </Button>
            </div>

            {/* Tech Stack */}
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400 mb-4 font-medium">Built with modern technology stack</p>
              <div className="flex flex-wrap justify-center gap-3">
                {techStack.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 px-4 py-2 font-medium hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-white to-emerald-50/50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Passionate Java Developer with expertise in building scalable enterprise applications
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-white" />
                    </div>
                    Professional Summary
                  </h3>
                  <div className="space-y-4 text-gray-600 dark:text-gray-300">
                    {[
                      "Knowledge in the area of Java Developer",
                      "Keen knowledge on SQL, Hibernate, etc.",
                      "Excellent communication and interpersonal skills",
                      "Good solution of problems and analytics",
                      "Hands on experience in Visual Studio",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Career Objective</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Looking for an entry level position to kickstart my career in software field which will contribute
                    to my professional and personal growth.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-0 shadow-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                    Education
                  </h3>
                  <div className="space-y-6">
                    <div className="border-l-4 border-emerald-500 pl-6 hover:border-emerald-600 transition-colors">
                      <h4 className="font-semibold text-gray-800 dark:text-white">Masters in Computer Application</h4>
                      <p className="text-emerald-600 dark:text-emerald-400 font-medium">SPPU University Pune</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">First Class in 2024</p>
                    </div>
                    <div className="border-l-4 border-teal-500 pl-6 hover:border-teal-600 transition-colors">
                      <h4 className="font-semibold text-gray-800 dark:text-white">Bachelors in Computer Science</h4>
                      <p className="text-teal-600 dark:text-teal-400 font-medium">SPPU University Pune</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">First Class with distinction in 2021</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Info Cards */}
              <div className="grid gap-4">
                <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <MapPin className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">Location</h3>
                        <p className="opacity-90">Pune, India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-lg bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="opacity-90 text-sm">jadhavpratiksha2729@gmail.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">Technical Expertise</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Full-stack proficiency across modern web technologies, cloud platforms, and development frameworks.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 group hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">{category.icon}</div>
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 dark:text-white">{category.title}</CardTitle>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{category.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
                        <span className="text-sm font-bold text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className={`h-2 rounded-full ${skill.color}`} style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Showcasing my expertise in building scalable, enterprise-grade applications with modern technologies.
            </p>
          </div>

          <Card className="border-0 shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                <div>
                  <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                    Indian Doctors Network
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400">
                      Personal Project
                    </Badge>
                    <Badge
                      variant="outline"
                      className="border-teal-500 text-teal-600 dark:border-teal-400 dark:text-teal-400"
                    >
                      Full-Stack Application
                    </Badge>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-emerald-500 text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 bg-transparent"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                A doctor-centric networking platform designed to foster communication and collaboration among medical
                professionals. The platform supports features such as medical posts, polls, quizzes, and more. Developed
                a robust Java-based application with an emphasis on Object-Oriented Programming (OOP), exception
                handling, and comprehensive system efficiency and reliability.
              </p>

              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4 text-lg">
                  Key Features & Responsibilities:
                </h3>
                <ul className="space-y-3">
                  {[
                    "Designed, developed, and maintained core modules using Java, adhering to OOP principles and clean coding practices",
                    "Participated in all stages of the Software Development Life Cycle (SDLC), including requirement gathering, system design, implementation, and testing",
                    "Implemented comprehensive logging and exception handling using frameworks like Logback or SLF4J for effective debugging and monitoring",
                    "Collaborated with team members to ensure timely delivery of high-quality code and integration of new features",
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4 text-lg">Technologies Used:</h3>
                <div className="flex flex-wrap gap-3">
                  {["Java", "Spring Boot", "Hibernate", "MySQL", "HTML/CSS", "JavaScript"].map((tech, index) => (
                    <Badge
                      key={index}
                      className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 dark:from-emerald-900/20 dark:to-teal-900/20 dark:text-emerald-400 px-3 py-1"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-4 flex items-center justify-center gap-3">
              <Award className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
              Professional Certifications
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Validated expertise through industry-recognized certifications and continuous learning
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 group hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {cert.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-2">{cert.title}</CardTitle>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium">{cert.issuer}</p>
                  <div className="flex items-center justify-center gap-2 mt-2">
                    <Badge className={cert.badgeColor}>{cert.status}</Badge>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{cert.date}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{cert.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-800 dark:text-white mb-2 text-sm">Skills Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className="text-xs bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Ready to turn your ideas into reality? Let's discuss your project and create something extraordinary.
            </p>
            <div className="mt-6">
              <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800 px-4 py-2">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
                Status: Available for opportunities
              </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-0 shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <form id="contact-form" action={handleContactSubmit} className="space-y-6">
                  <div>
                    <Input
                      name="name"
                      placeholder="Full Name"
                      required
                      className="h-12 border-gray-200 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-400 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Email Address"
                      required
                      className="h-12 border-gray-200 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-400 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <Input
                      name="company"
                      placeholder="Company (Optional)"
                      className="h-12 border-gray-200 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-400 dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      required
                      rows={6}
                      className="border-gray-200 dark:border-gray-600 focus:border-emerald-500 dark:focus:border-emerald-400 resize-none dark:bg-gray-700 dark:text-white"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {submitMessage && (
                    <div
                      className={`text-center text-sm ${submitMessage.includes("Thank you") ? "text-emerald-600 dark:text-emerald-400" : "text-red-600 dark:text-red-400"}`}
                    >
                      {submitMessage}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Connect with me - Responsive */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6" />
                    <div>
                      <h3 className="font-semibold">Location</h3>
                      <p className="opacity-90">Pune, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Available for:</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400 px-4 py-2">
                    Full-time opportunities
                  </Badge>
                  <Badge className="bg-teal-100 text-teal-800 dark:bg-teal-900/20 dark:text-teal-400 px-4 py-2">
                    Consulting projects
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white mb-6">Connect with me</h3>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors cursor-pointer shadow-lg hover:shadow-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Github className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-800 dark:text-white">GitHub</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Open source projects</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors cursor-pointer shadow-lg hover:shadow-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Linkedin className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-800 dark:text-white">LinkedIn</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Professional network</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-700 rounded-xl hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-colors cursor-pointer shadow-lg hover:shadow-xl">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-gray-800 dark:text-white">Email</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Direct contact</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
              JAVA DEVELOPER
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 flex items-center justify-center gap-2">
              Crafted with <Heart className="w-4 h-4 text-red-500 fill-current" /> by Pratiksha Jadhav
            </p>

            <div className="flex justify-center gap-4 mb-6">
              <button className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-700 rounded-xl flex items-center justify-center hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Github className="w-6 h-6 text-white" />
              </button>
              <button className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Linkedin className="w-6 h-6 text-white" />
              </button>
              <button className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                <Mail className="w-6 h-6 text-white" />
              </button>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">© 2025 Pratiksha Jadhav. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
