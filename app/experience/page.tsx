import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Briefcase } from "lucide-react"

export default function ExperiencePage() {
  const experiences = [
    {
      title: "Java Full Stack Developer",
      company: "Profound Edutech Pvt. Ltd.",
      location: "Pune, India",
      duration: "2024 - Present",
      type: "Training Program",
      description:
        "Currently pursuing comprehensive training in Java Full Stack Development, covering both frontend and backend technologies.",
      responsibilities: [
        "Learning Java fundamentals and advanced concepts",
        "Working with Spring Boot and Hibernate frameworks",
        "Developing responsive web interfaces using HTML, CSS, JavaScript",
        "Building RESTful APIs and database integration",
        "Participating in hands-on projects and assignments",
      ],
      technologies: ["Java", "Spring Boot", "Hibernate", "HTML", "CSS", "JavaScript", "Bootstrap", "SQL"],
      status: "Current",
    },
    {
      title: "Python Programming Certification",
      company: "Terna Pvt. Ltd.",
      location: "Pune, India",
      duration: "2023",
      type: "Certification Program",
      description:
        "Completed comprehensive Python programming course covering fundamentals to advanced topics including web development.",
      responsibilities: [
        "Mastered Python fundamentals and object-oriented programming",
        "Worked with libraries like NumPy and Pandas for data manipulation",
        "Learned data structures and algorithms implementation",
        "Developed web applications using Flask framework",
        "Implemented file handling and database operations",
      ],
      technologies: ["Python", "NumPy", "Pandas", "Flask", "Data Structures", "Algorithms"],
      status: "Completed",
    },
  ]

  const education = [
    {
      degree: "Masters in Computer Application",
      institution: "SPPU University Pune",
      duration: "2022 - 2024",
      grade: "First Class",
      description: "Advanced studies in computer applications with focus on software development and system design.",
    },
    {
      degree: "Bachelors in Computer Science",
      institution: "SPPU University Pune",
      duration: "2018 - 2021",
      grade: "First Class with Distinction",
      description:
        "Comprehensive study of computer science fundamentals including programming, databases, and algorithms.",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">Experience & Education</h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            My professional journey and educational background in software development
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                        {exp.title}
                      </CardTitle>
                      <div className="space-y-2">
                        <p className="text-purple-600 dark:text-purple-400 font-medium">{exp.company}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {exp.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Badge
                        className={
                          exp.status === "Current"
                            ? "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400"
                        }
                      >
                        {exp.status}
                      </Badge>
                      <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{exp.description}</p>

                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Key Responsibilities:</h3>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-gray-300">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Technologies:</h3>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
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

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-8 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            Education
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white dark:bg-gray-800">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{edu.degree}</h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                    <span>{edu.duration}</span>
                    <Badge variant="outline" className="dark:border-gray-600 dark:text-gray-300">
                      {edu.grade}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{edu.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
