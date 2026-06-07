import Link from 'next/link'
import { HeartPulse, ArrowRight, Home, Phone } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center space-y-10 py-24">
        {/* Icon + Code */}
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
              <HeartPulse className="w-16 h-16 text-primary animate-pulse" />
            </div>
            <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-destructive flex items-center justify-center text-white font-bold text-sm shadow-lg">
              404
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="text-5xl md:text-6xl font-extrabold text-foreground tracking-tight">
              Page Not Found
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto">
              The page you are looking for doesn&apos;t exist or has been moved. Let us help you find your way back.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Navigation Options */}
        <div className="grid sm:grid-cols-2 gap-4">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 px-6 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:translate-y-[-2px] group"
          >
            <Home className="w-5 h-5" />
            Return to Homepage
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact-us/emergency"
            className="flex items-center justify-center gap-3 px-6 py-4 border-2 border-primary text-primary rounded-xl font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
          >
            <Phone className="w-5 h-5" />
            Emergency Contact
          </Link>
        </div>

        {/* Quick Links */}
        <div className="bg-card border border-border rounded-2xl p-6 text-left space-y-4">
          <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
            Popular Pages
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { label: 'Cardiology', href: '/speciality/cardiology' },
              { label: 'Book Appointment', href: '/contact-us/appointments' },
              { label: 'About Us', href: '/about-us/our-story' },
              { label: 'International Patients', href: '/international-patients/visa-assistance' },
              { label: 'Careers', href: '/careers/open-positions' },
              { label: 'Latest News', href: '/news/latest-updates' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors font-medium py-1.5"
              >
                <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
