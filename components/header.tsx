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
      hasDropdown: true,
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
      hasDropdown: true,
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
      hasDropdown: true,
      submenu: [
        { label: 'Visa Assistance', slug: 'visa-assistance' },
        { label: 'Translation Services', slug: 'translation-services' },
        { label: 'Travel & Accommodation', slug: 'travel-accommodation' },
        { label: 'Insurance Help', slug: 'insurance-help' },
        { label: 'Medical Records', slug: 'medical-records' },
      ],
    },
    {
      label: 'Blogs',
      basePath: '/blogs',
      hasDropdown: false,
    },
    {
      label: 'News',
      basePath: '/news',
      hasDropdown: false,
    },
    {
      label: 'Careers',
      basePath: '/careers',
      hasDropdown: false,
    },
    {
      label: 'Contact Us',
      basePath: '/contact-us',
      hasDropdown: true,
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
    <header className="fixed top-0 z-50 w-full bg-background">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* Mock logo icon */}
            <div className="w-8 h-8 flex items-center justify-center text-teal-600">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8m0 0V5m0 8h8m-8 0H4" />
                <circle cx="12" cy="12" r="10" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg md:text-xl text-teal-900 tracking-tight leading-tight uppercase">Sir Ganga Ram Hospital</span>
              <span className="text-teal-600 italic text-xs md:text-sm leading-tight">Trust of Generations</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <button
                  onClick={() =>
                    item.hasDropdown && setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-800 hover:text-teal-600 transition-colors duration-200 group-hover:text-teal-600"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />}
                </button>

                {/* Dropdown Menu */}
                {item.hasDropdown && item.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.slug}
                        href={`${item.basePath}/${subitem.slug}`}
                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-teal-50 hover:text-teal-700 transition-colors first:rounded-t-lg last:rounded-b-lg"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-2 px-6 py-2.5 bg-teal-700 text-white rounded-full font-semibold hover:bg-teal-800 transition-colors shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
              Find a Doctor
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
                {item.hasDropdown ? (
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`}
                    />
                  </button>
                ) : (
                  <Link
                    href={item.basePath}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {item.hasDropdown && openDropdown === item.label && item.submenu && (
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
