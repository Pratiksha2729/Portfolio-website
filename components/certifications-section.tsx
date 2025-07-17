import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Calendar, ExternalLink } from "lucide-react"

export default function CertificationsSection() {
  const majorCertifications = [
    {
      title: "Java Full Stack Developer",
      issuer: "Profound Edutech Pvt. Ltd.",
      status: "Pursuing",
      date: "2024",
      description:
        "A comprehensive program covering front-end technologies (HTML, CSS, JavaScript, Bootstrap) and back-end development (Java, Hibernate, SQL).",
      skills: ["Java", "Spring Boot", "Hibernate", "HTML/CSS", "JavaScript", "Bootstrap", "SQL"],
      badgeColor: "bg-blue-100 text-blue-800 border-blue-200",
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
      badgeColor: "bg-green-100 text-green-800 border-green-200",
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
      badgeColor: "bg-orange-100 text-orange-800 border-orange-200",
      icon: "☁️",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 flex items-center justify-center gap-3">
            <Award className="w-8 h-8 text-purple-600" />
            Professional Certifications
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Validated expertise through industry-recognized certifications and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {majorCertifications.map((cert, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-3">{cert.icon}</div>
                <CardTitle className="text-lg font-bold text-gray-800 mb-2">{cert.title}</CardTitle>
                <p className="text-purple-600 font-medium">{cert.issuer}</p>
                <div className="flex items-center justify-center gap-2 mt-2">
                  <Badge className={cert.badgeColor}>{cert.status}</Badge>
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600 text-sm leading-relaxed">{cert.description}</p>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2 text-sm">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs bg-gray-100 text-gray-700">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <button className="flex items-center gap-2 text-purple-600 hover:text-purple-700 text-sm font-medium transition-colors">
                    <ExternalLink className="w-4 h-4" />
                    View Certificate
                  </button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
