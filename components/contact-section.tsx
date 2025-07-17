import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Github, Linkedin, Mail, Phone } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Let's Build Something Amazing Together</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to turn your ideas into reality? Let's discuss your project and create something extraordinary.
          </p>
          <div className="mt-6">
            <Badge className="bg-green-100 text-green-800 border-green-200 px-4 py-2">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
              Status: Available for opportunities
            </Badge>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div>
                  <Input placeholder="Full Name" className="h-12 border-gray-200 focus:border-purple-500" />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    className="h-12 border-gray-200 focus:border-purple-500"
                  />
                </div>
                <div>
                  <Input placeholder="Company (Optional)" className="h-12 border-gray-200 focus:border-purple-500" />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    rows={6}
                    className="border-gray-200 focus:border-purple-500 resize-none"
                  />
                </div>
                <Button className="w-full h-12 bg-purple-600 hover:bg-purple-700">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">Pune, India</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Available for:</h3>
              <div className="flex gap-2">
                <Badge className="bg-purple-100 text-purple-800">Full-time opportunities</Badge>
                <Badge className="bg-blue-100 text-blue-800">Consulting projects</Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-gray-800 mb-6">Connect with me</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <Github className="w-6 h-6 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-800">GitHub</p>
                    <p className="text-sm text-gray-600">Open source projects</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-800">LinkedIn</p>
                    <p className="text-sm text-gray-600">Professional network</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <Mail className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-sm text-gray-600">jadhavpratiksha2729@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                  <Phone className="w-6 h-6 text-orange-600" />
                  <div>
                    <p className="font-medium text-gray-800">Phone</p>
                    <p className="text-sm text-gray-600">+91 9518947292</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
