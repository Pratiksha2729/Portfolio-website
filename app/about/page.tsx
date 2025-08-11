import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate Java Developer with expertise in building scalable enterprise applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Professional Summary */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Professional Summary</h2>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      Knowledge in the area of <strong>Java Developer</strong>
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Keen knowledge on SQL, Hibernate, etc.</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Excellent communication and interpersonal skills</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Good solution of problems and analytics</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Hands on experience in Visual Studio</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Career Objective</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                 
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education & Personal Info */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  Education
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="font-semibold text-gray-800 dark:text-white">Masters in Computer Application</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">SPPU University Pune</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">First Class in 2024</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="font-semibold text-gray-800 dark:text-white">Bachelors in Computer Science</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">SPPU University Pune</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">First Class with distinction in 2021</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-800/80 backdrop-blur">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  Certifications
                </h2>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <h3 className="font-semibold text-gray-800 dark:text-white">Java Full Stack Developer</h3>
                    <p className="text-purple-600 dark:text-purple-400 font-medium">Profound Edutech Pvt. Ltd.</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Pursuing</p>
                  </div>
                  <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <h3 className="font-semibold text-gray-800 dark:text-white">Python Programming</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-medium">Terna Pvt. Ltd.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
