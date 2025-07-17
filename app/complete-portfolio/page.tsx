import HomePage from "../page"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import CertificationsSection from "@/components/certifications-section"

export default function CompletePortfolio() {
  return (
    <div className="min-h-screen">
      <HomePage />
      <AboutSection />
      <SkillsSection />
      <CertificationsSection />
      <ProjectsSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">P</span>
            </div>
            <span className="text-xl font-semibold">Pratiksha Jadhav</span>
          </div>
          <p className="text-gray-400 mb-6">Java Developer • Full-Stack Development • Enterprise Applications</p>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500">© 2024 Pratiksha Jadhav. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
