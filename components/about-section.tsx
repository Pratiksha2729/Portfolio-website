import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Passionate Java Developer with expertise in building scalable enterprise applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Professional Summary */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Professional Summary</h3>
                <div className="space-y-4 text-gray-600">
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
                    <p>Familiar with problem-solving skills related to code</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>Hands on experience in Visual Studio</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p>
                      Possess excellent interpersonal communication & analytical skills with demonstrated abilities in
                      customer relationship management
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Career Objective</h3>
                <p className="text-gray-600 leading-relaxed">
                  Looking for an entry level position to kickstart my career in software field which will contribute to
                  my professional and personal growth.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Education & Certifications */}
          <div className="space-y-6">
            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-purple-600" />
                  Education
                </h3>
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-semibold text-gray-800">Masters in Computer Application</h4>
                    <p className="text-purple-600 font-medium">SPPU University Pune</p>
                    <p className="text-sm text-gray-600">First Class in 2024</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-semibold text-gray-800">Bachelors in Computer Science</h4>
                    <p className="text-blue-600 font-medium">SPPU University Pune</p>
                    <p className="text-sm text-gray-600">First Class with distinction in 2021</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <h4 className="font-semibold text-gray-800">Higher Secondary Certificate</h4>
                    <p className="text-green-600 font-medium">94.92% in 2018</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h4 className="font-semibold text-gray-800">Secondary School Certificate</h4>
                    <p className="text-orange-600 font-medium">77% in 2016</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                  <Award className="w-6 h-6 text-purple-600" />
                  Certifications
                </h3>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Java Full Stack Developer</h4>
                    <p className="text-purple-600 font-medium">Profound Edutech Pvt. Ltd.</p>
                    <p className="text-sm text-gray-600">Pursuing</p>
                    <p className="text-sm text-gray-600 mt-2">
                      A comprehensive program covering front-end technologies (HTML, CSS, JavaScript, Bootstrap) and
                      back-end development (Java, Hibernate, SQL).
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-gray-800">Python Programming</h4>
                    <p className="text-blue-600 font-medium">Terna Pvt. Ltd.</p>
                    <p className="text-sm text-gray-600 mt-2">
                      A comprehensive program covering Python fundamentals, object-oriented programming, libraries and
                      frameworks (e.g., NumPy, Pandas), data structures, algorithms, file handling, and developing web
                      applications using Flask.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white/80 backdrop-blur">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-600">Location: Pune, India</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-600">Status: Unmarried</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 flex items-center justify-center">
                      <span className="text-gray-500">🗣️</span>
                    </div>
                    <span className="text-gray-600">Languages: English, Hindi, Marathi</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
