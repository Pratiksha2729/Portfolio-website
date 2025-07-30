"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"
import { useState, useEffect } from "react"
import { SkeletonCard } from "./skeleton-card" // Import the new skeleton component

export default function ExperienceSection() {
  const [loading, setLoading] = useState(true)
  const experience = [
    {
      title: "Indian Doctors Network",
      description:
        "A doctor-centric networking platform designed to foster communication and collaboration among medical professionals. The platform supports features such as medical posts, polls, quizzes, and more. Developed a robust Java-based application with an emphasis on Object-Oriented Programming (OOP), exception handling, and comprehensive system efficiency and reliability.",
      technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML/CSS", "JavaScript"],
      features: [
        "Designed, developed, and maintained core modules using Java, adhering to OOP principles and clean coding practices",
        "Participated in all stages of the Software Development Life Cycle (SDLC), including requirement gathering, system design, implementation, and testing",
        "Implemented comprehensive logging and exception handling using frameworks like Logback or SLF4J for effective debugging and monitoring",
        "Collaborated with team members to ensure timely delivery of high-quality code and integration of new features",
      ],
      status: "Personal Project",
      type: "Full-Stack Application",
    },
  ]

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500) // Simulate a 1.5 second load time
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing my expertise in building scalable, enterprise-grade applications with modern technologies.
          </p>
        </div>

        <div className="grid gap-8">
          {loading ? (
            <SkeletonCard /> // Render skeleton while loading
          ) : (
            projects.map((project, index) => (
              <Card
                key={index}
                className="border-0 shadow-2xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:shadow-3xl transition-all duration-300 ring-2 ring-emerald-300/50 dark:ring-emerald-700/50"
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                        {project.title}
                      </CardTitle>
                      <div className="flex gap-2">
                        <Badge className="bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400">
                          {project.status}
                        </Badge>
                        <Badge
                          variant="outline"
                          className="border-teal-500 text-teal-600 dark:border-teal-400 dark:text-teal-400"
                        >
                          {project.type}
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
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">{project.description}</p>

                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-4 text-lg">
                      Key Features & Responsibilities:
                    </h3>
                    <ul className="space-y-3">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-4 text-lg">Technologies Used:</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={techIndex}
                          className="bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 dark:from-emerald-900/20 dark:to-teal-900/20 dark:text-emerald-400 px-3 py-1"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  )
}

