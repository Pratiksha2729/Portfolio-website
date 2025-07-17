import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Monitor, Server, Cloud } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-8 h-8" />,
      description: "Building modern, responsive user interfaces with cutting-edge frameworks and technologies.",
      skills: [
        {
          name: "React",
          level: 95,
          color: "bg-blue-500",
          certifications: ["React Developer Certification", "Meta Frontend Developer"],
        },
        {
          name: "Next.js",
          level: 90,
          color: "bg-gray-800",
          certifications: ["Next.js Certified Developer"],
        },
        {
          name: "TypeScript",
          level: 88,
          color: "bg-blue-600",
          certifications: ["TypeScript Fundamentals", "Advanced TypeScript"],
        },
        {
          name: "Tailwind CSS",
          level: 92,
          color: "bg-cyan-500",
          certifications: ["Tailwind CSS Certified"],
        },
      ],
    },
    {
      title: "Backend Development",
      icon: <Server className="w-8 h-8" />,
      description: "Creating robust server-side applications and APIs with enterprise-grade backends.",
      skills: [
        {
          name: "Node.js",
          level: 85,
          color: "bg-green-600",
          certifications: ["Node.js Certified Developer", "OpenJS Node.js Services Developer"],
        },
        {
          name: "NestJS",
          level: 80,
          color: "bg-red-500",
          certifications: ["NestJS Fundamentals"],
        },
        {
          name: "Django REST",
          level: 82,
          color: "bg-green-700",
          certifications: ["Django REST Framework", "Python Programming - Terna Pvt. Ltd."],
        },
        {
          name: "Express",
          level: 88,
          color: "bg-yellow-600",
          certifications: ["Express.js Fundamentals"],
        },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="w-8 h-8" />,
      description: "Deploying and scaling applications with modern cloud infrastructure and deployment strategies.",
      skills: [
        {
          name: "AWS EC2",
          level: 75,
          color: "bg-orange-500",
          certifications: ["AWS Certified Solutions Architect", "AWS Cloud Practitioner"],
        },
        {
          name: "AWS Amplify",
          level: 78,
          color: "bg-orange-400",
          certifications: ["AWS Amplify Certified"],
        },
        {
          name: "AWS S3",
          level: 85,
          color: "bg-orange-600",
          certifications: ["AWS Storage Specialty"],
        },
        {
          name: "MongoDB Atlas",
          level: 80,
          color: "bg-green-500",
          certifications: ["MongoDB Certified Developer", "MongoDB Atlas Certified"],
        },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Technical Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Full-stack proficiency across modern web technologies, cloud platforms, and development frameworks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <div className="text-purple-600">{category.icon}</div>
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">{category.title}</CardTitle>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-3">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-sm font-bold text-gray-600">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`h-2 rounded-full ${skill.color}`} style={{ width: `${skill.level}%` }}></div>
                    </div>

                    {/* Certification Badges */}
                    <div className="flex flex-wrap gap-1">
                      {skill.certifications.map((cert, certIndex) => (
                        <div
                          key={certIndex}
                          className="inline-flex items-center gap-1 px-2 py-1 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-full text-xs font-medium text-purple-700 hover:from-purple-100 hover:to-blue-100 transition-colors cursor-pointer"
                        >
                          <svg className="w-3 h-3 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {cert}
                        </div>
                      ))}
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
