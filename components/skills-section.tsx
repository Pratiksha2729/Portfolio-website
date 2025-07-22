"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Server, Layers } from "lucide-react" // Added Layers icon for Frameworks

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-8 h-8" />,
      description: "Building modern, responsive user interfaces with cutting-edge frameworks and technologies.",
      skills: [
        { name: "ReactJS", level: 95, color: "bg-blue-500" },
        { name: "TypeScript", level: 88, color: "bg-blue-600" },
        { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
        { name: "HTML5", level: 90, color: "bg-orange-500" },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      description: "Creating robust server-side applications and APIs with enterprise-grade backends.",
      skills: [
        { name: "Node.js", level: 85, color: "bg-green-600" },
        { name: "Java", level: 90, color: "bg-red-500" }, // Renamed Core Java to Java
        { name: "Advance Java", level: 88, color: "bg-red-700" }, // Added Advance Java
        { name: "Hibernate", level: 82, color: "bg-purple-600" },
        { name: "SQL", level: 88, color: "bg-yellow-600" },
      ],
    },
    {
      title: "Frameworks", // New section title
      icon: <Layers className="w-8 h-8" />, // Using Layers icon for frameworks
      description: "Expertise in popular frameworks for building scalable and maintainable applications.",
      skills: [
        { name: "Hibernate", level: 85, color: "bg-purple-600" },
        { name: "Spring", level: 88, color: "bg-green-500" },
        { name: "SpringBoot", level: 90, color: "bg-emerald-600" },
        { name: "Maven", level: 80, color: "bg-teal-500" }, // Added Maven
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 dark:text-white mb-4">Technical Expertise</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Full-stack proficiency across modern web technologies, cloud platforms, and development frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 group hover:-translate-y-2 ring-2 ring-emerald-300/50 dark:ring-emerald-700/50"
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
  )
}
