import Link from 'next/link'
import { Phone, Mail, MapPin, Heart, Share2, Users, Zap } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Main Footer */}
      <div className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">HC</span>
                </div>
                <span className="font-bold text-lg">HealthCare</span>
              </Link>
              <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
                Excellence in healthcare with compassion at every step. Your health is our mission.
              </p>
              {/* Social Icons */}
              <div className="flex gap-4">
                <a href="#" className="p-2 hover:bg-primary/20 rounded-lg transition-colors">
                  <Heart className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 hover:bg-primary/20 rounded-lg transition-colors">
                  <Share2 className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 hover:bg-primary/20 rounded-lg transition-colors">
                  <Users className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 hover:bg-primary/20 rounded-lg transition-colors">
                  <Zap className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-lg mb-6">For Patient & Visitors</h3>
              <ul className="space-y-3">
                {['Speciality Clinic', 'Medical Departments', 'Admission & Discharge ', 'Patient Portal', 'Lab Results'].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-secondary-foreground/80 hover:text-primary transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-bold text-lg mb-6">For Medical Proffessionals</h3>
              <ul className="space-y-3">
                {['Emergency Care', 'Outpatient Services', 'Refer a Patient', 'Research', 'Imaging'].map(
                  (service) => (
                    <li key={service}>
                      <a
                        href="#"
                        className="text-secondary-foreground/80 hover:text-primary transition-colors"
                      >
                        {service}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-bold text-lg mb-6">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-secondary-foreground/80">Emergency</p>
                    <p className="font-semibold">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-secondary-foreground/80">Email</p>
                    <p className="font-semibold">info@healthcare.com</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-secondary-foreground/80">Address</p>
                    <p className="font-semibold">123 Medical Ave, City</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-secondary-foreground/10 pt-8 mt-8"></div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-secondary-foreground/80 text-sm">
              © 2024 HealthCare Hospital. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-secondary-foreground/80 hover:text-primary transition-colors text-sm">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
