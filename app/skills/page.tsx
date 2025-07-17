import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Server, Cloud } from "lucide-react"

export default function SkillsPage() {
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

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">Technical Expertise</h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Full-stack proficiency across modern web technologies, cloud platforms, and development frameworks.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-white dark:bg-gray-800"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
    </div>
  )
}
