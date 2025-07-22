"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, ExternalLink } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { SkeletonCertificationCard } from "./skeleton-card"

const CertificationsSection = () => {
  const [loading, setLoading] = useState(true)
  const majorCertifications = [
    {
      id: "java-fullstack",
      title: "Java Full Stack Developer",
      issuer: "Profound Edutech Pvt. Ltd.",
      status: "In Progress",
      date: "2025",
      description:
        "A comprehensive program covering front-end technologies (HTML, CSS, JavaScript, Bootstrap) and back-end development (Java, Hibernate, SQL).",
      skills: ["Java", "Spring Boot", "Hibernate", "HTML/CSS", "JavaScript", "Bootstrap", "SQL"],
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-200 dark:bg-emerald-900/20 dark:text-emerald-400",
      logo: "/images/java-logo-icon.png", // Path to Java logo icon
    },
    {
      id: "python-programming",
      title: "Python Programming",
      issuer: "Grras Pvt ltd",
      status: "Completed",
      date: "2024",
      description:
        "A comprehensive program covering Python fundamentals, object-oriented programming, libraries and frameworks (e.g., NumPy, Pandas), data structures, algorithms, file handling, and developing web applications using Flask.",
      skills: ["Python", "NumPy", "Pandas", "Flask", "Data Structures", "Algorithms"],
      badgeColor: "bg-coral-100 text-coral-800 border-coral-200 dark:bg-coral-900/20 dark:text-coral-400",
      logo: "/images/python-logo-updated.png", // Path to Python logo icon
      viewLink: "/images/python-programming-certificate-full.png",
    },
  ]

  useEffect(() => {
    // Simulate data fetching
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000) // Simulate a 2 second load time
    return () => clearTimeout(timer)
  }, [])

  return (
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

        <div className="grid md:grid-cols-2 gap-8">
          {loading
            ? Array.from({ length: majorCertifications.length }).map((_, i) => <SkeletonCertificationCard key={i} />)
            : majorCertifications.map((cert, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 group hover:-translate-y-2 ring-2 ring-emerald-300/50 dark:ring-emerald-700/50"
                >
                  <CardHeader className="text-center pb-4">
                    {cert.logo && (
                      <div className="flex justify-center mb-4">
                        <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center overflow-hidden p-2 shadow-md">
                          <Image
                            src={cert.logo || "/placeholder.svg"}
                            alt={`${cert.title} Logo`}
                            width={80}
                            height={80}
                            objectFit="contain"
                            className="dark:invert-0" // Ensure logo stays visible on dark background
                          />
                        </div>
                      </div>
                    )}
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
                    {cert.viewLink && (
                      <div className="mt-4 text-center">
                        <a
                          href={cert.viewLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-emerald-600 hover:text-emerald-700 text-sm font-medium transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Certificate
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
        </div>
      </div>
    </section>
  )
}

export default CertificationsSection
