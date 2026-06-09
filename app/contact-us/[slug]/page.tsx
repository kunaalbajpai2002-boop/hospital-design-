import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Phone, Mail, MapPin, AlertTriangle, Calendar, Building2, Send, CheckCircle2, Star } from 'lucide-react'
import { StarRating } from '@/components/star-rating'

interface ContactContent {
  title: string
  subtitle: string
  longDescription: string
  icon: any
  detailsList?: { label: string; value: string; extra?: string }[]
  highlights?: string[]
}

const contactPages: Record<string, ContactContent> = {
  'emergency': {
    title: 'Emergency Services (24/7)',
    subtitle: 'Immediate medical assistance, trauma care, and ambulance dispatch.',
    longDescription: 'Our Emergency and Trauma Department is staffed 24/7 by board-certified emergency physicians, trauma surgeons, and acute care nurses. We operate a fleet of advanced life-support (ALS) ambulances ready to dispatch immediately.',
    icon: AlertTriangle,
    detailsList: [
      { label: 'Emergency Hotline', value: '+1 (555) 911-3000', extra: 'Available 24 hours, 7 days a week' },
      { label: 'Trauma Wing Location', value: 'Ground Floor, Wing A (Direct Street Access)', extra: 'Follow red emergency signs from gate 1' },
      { label: 'Ambulance Dispatch', value: '+1 (555) 911-3111', extra: 'GPS-guided local coordinates dispatch' },
    ],
    highlights: [
      'Equipped for immediate cardiac, neurological, and trauma resuscitations',
      'Direct priority transfer to Cath Labs and Operating Suites',
      'State-of-the-art trauma ICU beds located adjacent to emergency bays',
    ],
  },
  'appointments': {
    title: 'Book an Appointment',
    subtitle: 'Schedule a visit with our expert specialist doctors.',
    longDescription: 'Please complete the appointment request form below. Our outpatient scheduling team will review the specialist calendars and contact you within 4 business hours to confirm your time slot.',
    icon: Calendar,
  },
  'feedback': {
    title: 'Patient Feedback',
    subtitle: 'Your opinion helps us deliver exceptional healthcare services.',
    longDescription: 'We value your experience at HealthCare Hospital. Please share your reviews, suggestions, or issues to help us continuously improve our patient-care quality.',
    icon: Star,
  },
  'general-inquiry': {
    title: 'General Inquiries',
    subtitle: 'Get in touch for corporate partnerships, records, billing, or general info.',
    longDescription: 'For non-clinical inquiries, hospital directory coordination, corporate client billing, insurance claims, or academic affiliations, reach out to our administration team.',
    icon: Building2,
    detailsList: [
      { label: 'General Telephone', value: '+1 (555) 123-4567', extra: 'Mon - Sat, 8:00 AM - 8:00 PM EST' },
      { label: 'Billing Department', value: '+1 (555) 123-4588', extra: 'billing@healthcare.com' },
      { label: 'Corporate Office', value: 'Level 10, Admin Tower, Main Campus', extra: 'partnerships@healthcare.com' },
    ],
  },
  'locations': {
    title: 'Our Locations',
    subtitle: 'Find our medical campuses, clinics, and diagnostics centers.',
    longDescription: 'HealthCare Hospital operates multiple clinics and diagnostics centers across the metropolitan area, ensuring that quality healthcare is always near you.',
    icon: MapPin,
    detailsList: [
      { label: 'Main Medical Campus', value: '123 Medical Ave, Metro City, MC 90210', extra: 'Full-service multi-specialty hospital, ER, & Surgical Tower' },
      { label: 'South Side Family Clinic', value: '456 Commerce Blvd, Suite A, Metro South', extra: 'Outpatient specialist consultations & diagnostics' },
      { label: 'North Rehabilitation Center', value: '789 Wellness Dr, Metro North', extra: 'Physiotherapy, neurological rehab, & long-term recovery' },
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const content = contactPages[slug]
  if (!content) return { title: 'Contact Us - HealthCare Hospital' }
  return {
    title: `${content.title} | Contact Us - HealthCare Hospital`,
    description: content.subtitle,
  }
}

export default async function ContactPage({ params }: PageProps) {
  const { slug } = await params
  const content = contactPages[slug]

  if (!content) {
    notFound()
  }

  const Icon = content.icon

  return (
    <div className="min-h-screen bg-background pt-20 md:pt-24">
      {/* Banner Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 bg-gradient-to-br from-primary/10 via-background to-accent/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="md:col-span-7 space-y-6">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <span className="text-foreground font-medium">Contact Us</span>
                <span>/</span>
                <span className="text-primary font-semibold">{content.title}</span>
              </nav>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {content.title}
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {content.subtitle}
              </p>
            </div>

            {/* Right Column (Image Component) */}
            <div className="md:col-span-5 relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-3 scale-95" />
              <div className="relative border border-border rounded-3xl overflow-hidden shadow-lg h-72">
                <img
                  src="/contact-hero.png"
                  alt={content.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Left Column - Details or Form */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Details & Procedures</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.longDescription}
              </p>
            </div>

            {/* General Lists / Contact Info / Campus details */}
            {content.detailsList && (
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {content.detailsList.map((detail, i) => (
                    <div key={i} className="bg-card border border-border p-6 rounded-2xl flex flex-col justify-between shadow-sm">
                      <div className="space-y-2">
                        <span className="text-xs font-semibold text-primary uppercase tracking-wider">{detail.label}</span>
                        <h4 className="text-xl font-bold text-foreground leading-snug">{detail.value}</h4>
                      </div>
                      {detail.extra && (
                        <p className="text-xs text-muted-foreground mt-4 border-t border-border pt-3 font-semibold">{detail.extra}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Appointment Booking Form */}
            {slug === 'appointments' && (
              <div className="bg-card border border-border p-8 rounded-2xl shadow-sm space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Request Appointment</h3>
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="patient-name" className="text-sm font-semibold text-foreground">Patient Full Name *</label>
                      <input
                        id="patient-name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="patient-phone" className="text-sm font-semibold text-foreground">Phone Number *</label>
                      <input
                        id="patient-phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="appointment-email" className="text-sm font-semibold text-foreground">Email Address *</label>
                      <input
                        id="appointment-email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="appointment-dept" className="text-sm font-semibold text-foreground">Preferred Specialty *</label>
                      <select
                        id="appointment-dept"
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        required
                      >
                        <option value="">Select Specialty...</option>
                        <option value="cardiology">Cardiology</option>
                        <option value="neurology">Neurology</option>
                        <option value="orthopedics">Orthopedics</option>
                        <option value="general-surgery">General & Laparoscopic Surgery</option>
                        <option value="pediatrics">Pediatrics & Neonatology</option>
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="appointment-date" className="text-sm font-semibold text-foreground">Preferred Date *</label>
                      <input
                        id="appointment-date"
                        type="date"
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="appointment-time" className="text-sm font-semibold text-foreground">Preferred Time Shift *</label>
                      <select
                        id="appointment-time"
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        required
                      >
                        <option value="morning">Morning (8:00 AM - 12:00 PM)</option>
                        <option value="afternoon">Afternoon (12:00 PM - 4:00 PM)</option>
                        <option value="evening">Evening (4:00 PM - 8:00 PM)</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="appointment-msg" className="text-sm font-semibold text-foreground">Describe Symptoms / Inquiry (Optional)</label>
                    <textarea
                      id="appointment-msg"
                      rows={4}
                      placeholder="Brief details about symptoms or medical history..."
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                    />
                  </div>
                  <button
                    type="button"
                    className="flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                  >
                    Request Appointment
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}

            {/* Patient Feedback Form */}
            {slug === 'feedback' && (
              <div className="bg-card border border-border p-8 rounded-2xl shadow-sm space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Tell Us How We Did</h3>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="feedback-name" className="text-sm font-semibold text-foreground">Name (Optional)</label>
                      <input
                        id="feedback-name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="feedback-email" className="text-sm font-semibold text-foreground">Email Address (Optional)</label>
                      <input
                        id="feedback-email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground block">Overall Experience Rating *</label>
                    <StarRating name="rating" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="feedback-dept" className="text-sm font-semibold text-foreground">Department Visited *</label>
                    <select
                      id="feedback-dept"
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      required
                    >
                      <option value="">Select Department...</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="general-surgery">General Surgery</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="outpatient">General OPD</option>
                      <option value="emergency">Emergency Ward</option>
                      <option value="admin">Administration / Billing</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="feedback-comments" className="text-sm font-semibold text-foreground">Comments / Detailed Feedback *</label>
                    <textarea
                      id="feedback-comments"
                      rows={5}
                      placeholder="Please details your experience..."
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                  >
                    Submit Feedback
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Right Column - Side Panel */}
          <div className="space-y-8">
            {/* Quick stats / Highlights */}
            {content.highlights && (
              <div className="p-8 bg-card border border-border rounded-2xl shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-foreground border-b border-border pb-4">
                  Clinical Capabilities
                </h3>
                <ul className="space-y-4">
                  {content.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quick Contacts panel */}
            <div className="p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl shadow-lg space-y-6">
              <h3 className="text-xl font-bold">Helpline Assistance</h3>
              <p className="opacity-95 text-sm leading-relaxed">
                Connect with our front desk managers for rapid scheduling, billing confirmations, and emergency transports.
              </p>
              <div className="space-y-3 pt-2 text-sm font-semibold">
                <div className="flex gap-2 items-center">
                  <Phone className="w-5 h-5" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex gap-2 items-center">
                  <Mail className="w-5 h-5" />
                  <span>info@healthcare.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
