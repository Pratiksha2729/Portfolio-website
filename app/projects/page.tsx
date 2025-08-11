import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Indian Doctors Network",
      description:
        "A doctor-centric networking platform designed to foster communication and collaboration among medical professionals. The platform supports features such as medical posts, polls, quizzes, and more.",
      technologies: ["Java", "Spring Boot", "Hibernate", "MySQL", "HTML/CSS", "JavaScript"],
      features: [
        "Designed, developed, and maintained core modules using Java",
        "Participated in all stages of the Software Development Life Cycle (SDLC)",
        "Implemented comprehensive logging and exception handling",
        "Collaborated with team members to ensure timely delivery",
      ],
      status: "Personal Project",
      type: "Full-Stack Application",
      githubLink: "https://github.com/Pratiksha2729/Indian_Doctors_Network",
      liveDemo: "#" // put your live deployment link here if you have one
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">Featured Projects</h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing my expertise in building scalable, enterprise-grade applications with modern technologies.
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex gap-2">
                      <Badge variant="secondary" className="dark:bg-gray-700 dark:text-gray-300">
                        {project.status}
                      </Badge>
                      <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                        {project.type}
                      </Badge>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      size="sm"
                      variant="outline"
                      className="dark:border-gray-600 dark:text-gray-300 bg-transparent"
                    >
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
                    >
                      <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>

                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Key Features & Responsibilities:</h3>
                  <ul className="space-y-2">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Technologies Used:</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400"
                      >
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
    </div>
  )
}
