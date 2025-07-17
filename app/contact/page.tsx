import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Github, Linkedin, Mail, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Let's Build Something Amazing Together
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to turn your ideas into reality? Let's discuss your project and create something extraordinary.
          </p>
          <div className="mt-6">
            <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400 border-green-200 dark:border-green-800 px-4 py-2">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Status: Available for opportunities
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
            <CardContent className="p-6 lg:p-8">
              <form className="space-y-6">
                <div>
                  <Input
                    placeholder="Full Name"
                    className="h-12 border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="h-12 border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Company (Optional)"
                    className="h-12 border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    className="border-gray-200 dark:border-gray-600 focus:border-purple-500 dark:focus:border-purple-400 resize-none dark:bg-gray-700 dark:text-white"
                  />
                </div>
                <Button className="w-full h-12 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-6 lg:space-y-8">
            <Card className="border-0 shadow-lg bg-white dark:bg-gray-800">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 dark:text-white">Location</h3>
                    <p className="text-gray-600 dark:text-gray-300">Pune, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Available for:</h3>
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-400">
                  Full-time opportunities
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400">
                  Consulting projects
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 dark:text-white mb-6">Connect with me</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <Github className="w-6 h-6 text-gray-600 dark:text-gray-400" />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">GitHub</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Open source projects</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <Linkedin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">LinkedIn</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Professional network</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">Email</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">jadhavpratiksha2729@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer">
                  <Phone className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  <div>
                    <p className="font-medium text-gray-800 dark:text-white">Phone</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">+91 9518947292</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
