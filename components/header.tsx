'use client';

import React, { useState } from 'react';
import { ChevronDown, Menu, X, ArrowRight, Phone } from 'lucide-react';

interface SubmenuItem {
  label: string
  slug: string
}

interface NavItem {
  label: string
  basePath: string
  hasDropdown: boolean
  submenu?: SubmenuItem[]
}

interface SubheaderItem {
  label: string
  icon: React.ReactNode
}

// Universal Link component to ensure absolute compatibility in Next.js and all preview runtimes
function Link({ href, children, className, onClick }: { href: string; children: React.ReactNode; className?: string; onClick?: () => void }) {
  return (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  )
}

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  const navItems: NavItem[] = [
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

  const subheaderItems: SubheaderItem[] = [
    {
      label: 'Book Appointment',
      icon: (
        <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      )
    },
    {
      label: 'Search By Department',
      icon: (
        <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      )
    },
    {
      label: 'Lab Result',
      icon: (
        <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
        </svg>
      )
    },
    {
      label: 'Emergency',
      icon: (
        <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    {
      label: 'Quick Search',
      icon: (
        <svg className="w-4 h-4 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      )
    }
  ]

  return (
    <header className="fixed top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      {/* Maximum screen utilization container with max-[1600px] width */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
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
          <nav className="hidden lg:flex items-center gap-1 h-full">
            {navItems.map((item) => (
              <div key={item.label} className="relative group flex items-center h-full">
                <button
                  onClick={() =>
                    item.hasDropdown && setOpenDropdown(openDropdown === item.label ? null : item.label)
                  }
                  className="flex items-center gap-1 px-3 py-2 text-sm font-semibold text-gray-800 hover:text-teal-600 transition-colors duration-200 group-hover:text-teal-600"
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />}
                </button>

                {/* Dropdown Menu attached to the bottom edge seamlessly */}
                {item.hasDropdown && item.submenu && (
                  <div className="absolute left-0 top-full mt-0 w-56 bg-white border border-gray-100 rounded-b-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.slug}
                        href={`${item.basePath}/${subitem.slug}`}
                        className="block px-4 py-3 text-sm font-medium text-gray-800 hover:bg-teal-50 hover:text-teal-700 transition-colors last:rounded-b-lg"
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
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
              Find a Doctor
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Subheader Action Bar - Positioned seamlessly below the main navigation */}
        <div className="hidden lg:flex justify-center pb-4">
          <div className="flex items-center bg-white border border-gray-200/80 rounded-2xl shadow-md px-1.5 py-1 divide-x divide-gray-150">
            {subheaderItems.map((sub) => (
              <button
                key={sub.label}
                className="flex items-center gap-2 px-6 py-2.5 text-xs font-bold text-gray-700 hover:text-teal-700 hover:bg-teal-50/50 transition-all rounded-xl"
              >
                {sub.icon}
                <span>{sub.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-6 space-y-4 border-t border-gray-100 pt-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.hasDropdown ? (
                  <button
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-800 hover:text-teal-600 transition-colors"
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
                    className="block px-3 py-2 text-sm font-medium text-gray-800 hover:text-teal-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                )}

                {item.hasDropdown && openDropdown === item.label && item.submenu && (
                  <div className="ml-4 space-y-2 mt-2 border-l-2 border-teal-600 pl-4">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.slug}
                        href={`${item.basePath}/${subitem.slug}`}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm text-gray-500 hover:text-teal-600 transition-colors"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button className="w-full px-4 py-2 bg-teal-700 text-white rounded-lg font-semibold hover:bg-teal-800 transition-colors mt-4">
              Book Appointment
            </button>
          </div>
        )}
      </div>
    </header>
  )
}

// Added export default to support environments that import this module as default
export default Header