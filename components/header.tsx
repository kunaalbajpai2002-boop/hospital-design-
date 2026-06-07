'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, Menu, X } from 'lucide-react'

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    {
      label: 'Speciality',
      basePath: '/speciality',
      submenu: [
        { label: 'Cardiology', slug: 'cardiology' },
        { label: 'Neurology', slug: 'neurology' },
        { label: 'Orthopedics', slug: 'orthopedics' },
        { label: 'General Surgery', slug: 'general-surgery' },
        { label: 'Pediatrics', slug: 'pediatrics' },
      ],
    },
    {
      label: 'About Us',
      basePath: '/about-us',
      submenu: [
        { label: 'Our Story', slug: 'our-story' },
        { label: 'Mission & Vision', slug: 'mission-vision' },
        { label: 'Awards', slug: 'awards' },
        { label: 'Certifications', slug: 'certifications' },
        { label: 'Meet Our Team', slug: 'meet-our-team' },
      ],
    },
    {
      label: 'International Patients',
      basePath: '/international-patients',
      submenu: [
        { label: 'Visa Assistance', slug: 'visa-assistance' },
        { label: 'Translation Services', slug: 'translation-services' },
        { label: 'Travel & Accommodation', slug: 'travel-accommodation' },
        { label: 'Insurance Help', slug: 'insurance-help' },
        { label: 'Medical Records', slug: 'medical-records' },
      ],
    },
    {
      label: 'News',
      basePath: '/news',
      submenu: [
        { label: 'Latest Updates', slug: 'latest-updates' },
        { label: 'Press Releases', slug: 'press-releases' },
        { label: 'Blog', slug: 'blog' },
        { label: 'Media Center', slug: 'media-center' },
        { label: 'Events', slug: 'events' },
      ],
    },
    {
      label: 'Careers',
      basePath: '/careers',
      submenu: [
        { label: 'Open Positions', slug: 'open-positions' },
        { label: 'Internships', slug: 'internships' },
        { label: 'Training Programs', slug: 'training-programs' },
        { label: 'Culture', slug: 'culture' },
        { label: 'Apply Now', slug: 'apply-now' },
      ],
    },
    {
      label: 'Contact Us',
      basePath: '/contact-us',
      submenu: [
        { label: 'Emergency', slug: 'emergency' },
        { label: 'Appointments', slug: 'appointments' },
        { label: 'Feedback', slug: 'feedback' },
        { label: 'General Inquiry', slug: 'general-inquiry' },
        { label: 'Locations', slug: 'locations' },
      ],
    },
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">HC</span>
            </div>
            <span className="hidden sm:inline font-bold text-lg text-foreground">HealthCare</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors duration-200 group-hover:text-primary"
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-0 w-48 bg-card border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.slug}
                      href={`${item.basePath}/${subitem.slug}`}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-primary hover:text-primary-foreground transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {subitem.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
              Find A Doctor
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 space-y-4 border-t border-border pt-4">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''
                      }`}
                  />
                </button>

                {openDropdown === item.label && (
                  <div className="ml-4 space-y-2 mt-2 border-l-2 border-primary pl-4">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.slug}
                        href={`${item.basePath}/${subitem.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors mt-4">
              Book Appointment
            </button>
          </div>
        )}
      </div>
    </header>
  )
}
