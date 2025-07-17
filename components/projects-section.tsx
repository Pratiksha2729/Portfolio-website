import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
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

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Showcasing my expertise in building scalable, enterprise-grade applications with modern technologies.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-xl bg-white/80 backdrop-blur">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-800 mb-2">{project.title}</CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="secondary">{project.status}</Badge>
                      <Badge variant="outline">{project.type}</Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">{project.description}</p>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Key Features & Responsibilities:</h4>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="bg-purple-100 text-purple-800">
                        {tech}
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
  )
}
