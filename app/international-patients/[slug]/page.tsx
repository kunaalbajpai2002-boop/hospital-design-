import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Globe, Plane, ShieldCheck, Languages, FileLock2, CheckCircle } from 'lucide-react'

interface PatientSupportContent {
  title: string
  subtitle: string
  longDescription: string
  icon: any
  steps?: { title: string; description: string }[]
  highlights?: string[]
  detailsList?: { label: string; value: string }[]
}

const supportPages: Record<string, PatientSupportContent> = {
  'visa-assistance': {
    title: 'Visa Assistance',
    subtitle: 'Streamlining your medical visa processes for hassle-free entry.',
    longDescription: 'Travelling to another country for medical care can be daunting. HealthCare Hospital offers specialized visa services to assist patients and their companions. We coordinate with foreign consulates to issue official medical invitation letters and support letters to fast-track your approval.',
    icon: Globe,
    steps: [
      { title: 'Doctor Consultation', description: 'Our specialist reviews your records and confirms the treatment plan.' },
      { title: 'Official Invitation', description: 'We issue a verified medical treatment invitation letter stating your medical diagnosis.' },
      { title: 'Embassy Submission', description: 'Submit our letters along with your passport to your local consulate.' },
      { title: 'Visa Approval', description: 'Your medical visa is approved, typically within 5 to 7 working days.' },
    ],
    highlights: [
      'Official letterhead invitations issued within 24 hours of approval',
      'Direct communication channel with major consulates',
      'Assistance with visa extensions if treatment durations increase',
    ],
  },
  'translation-services': {
    title: 'Translation Services',
    subtitle: 'Connecting patients and doctors in over 12 global languages.',
    longDescription: 'Effective communication is key to quality healing. Our team of certified medical interpreters is fluent in Arabic, French, Russian, Spanish, German, Japanese, and more. They accompany you during doctor consultations, procedure explanations, and billing reviews.',
    icon: Languages,
    highlights: [
      'Certified medical interpreters available 24/7',
      'Translation of all medical records and discharge summaries',
      'Translation services provided at no additional cost to international admissions',
    ],
    detailsList: [
      { label: 'Languages Supported', value: '12+ Major Global Languages' },
      { label: 'Interpreter Access', value: 'In-person or Video Consultation' },
      { label: 'Discharge Summaries', value: 'Translated into English / Native Language' },
    ],
  },
  'travel-accommodation': {
    title: 'Travel & Accommodation',
    subtitle: 'Comfortable logistics, transport, and local stays close to the hospital.',
    longDescription: 'We coordinate end-to-end travel logistics for international visitors. From airport pickups to booking long-term serviced apartments for family members, our dedicated international desk ensures you feel at home during your recovery.',
    icon: Plane,
    steps: [
      { title: 'Airport Pickup', description: 'Complimentary private ambulance or car pickup from the airport direct to our campus.' },
      { title: 'Partner Lodging', description: 'Pre-negotiated discount rates at 4-star and 5-star hotels located within a 2-mile radius.' },
      { title: 'Local Transport', description: 'Daily shuttle services between partner hotels and the main hospital building.' },
    ],
    highlights: [
      'Discounted rates at premier local hotels and suites',
      'Special dietary accommodations at patient and guest cafes',
      'Local SIM card and travel advisory pack on arrival',
    ],
  },
  'insurance-help': {
    title: 'Insurance Help & Coverages',
    subtitle: 'Verifying and coordinating with international insurance providers.',
    longDescription: 'HealthCare Hospital partners with major global health insurance companies and third-party administrators (TPAs). Our team assists in obtaining prior authorization, ensuring maximum coverage, and processing cashless medical treatments.',
    icon: ShieldCheck,
    highlights: [
      'Cashless treatment approvals coordinated directly with insurance providers',
      'Transparent billing and detailed itemized invoices for reimbursement',
      'Dedicated insurance coordinators located on each floor',
    ],
    detailsList: [
      { label: 'Partner Insurers', value: 'Allianz, Bupa, Cigna, AXA, Aetna, etc.' },
      { label: 'Pre-auth turnaround', value: 'Typically 24 - 48 Hours' },
      { label: 'Support documentation', value: 'Fully detailed medical codes supplied' },
    ],
  },
  'medical-records': {
    title: 'Secure Medical Records Transfer',
    subtitle: 'Safe, secure, and encrypted sharing of clinical histories.',
    longDescription: 'Before your arrival, your clinical files must be safely reviewed by our advisory board. We utilize an encrypted, HIPAA-compliant patient portal that allows you or your home physician to upload imaging (DICOM files), lab results, and diagnostic scans securely.',
    icon: FileLock2,
    steps: [
      { title: 'Secure Upload', description: 'Upload scans and clinical history through our encrypted web link.' },
      { title: 'Panel Review', description: 'A multidisciplinary board of doctors analyzes your case within 48 hours.' },
      { title: 'Treatment Protocol', description: 'Receive a structured treatment plan, cost breakdown, and recovery timeline.' },
    ],
    highlights: [
      'HIPAA and GDPR-compliant secure file transfers',
      'DICOM viewer support for direct radiology images',
      'Easy download of discharge summaries post-treatment',
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const content = supportPages[slug]
  if (!content) return { title: 'International Patients - HealthCare Hospital' }
  return {
    title: `${content.title} | International Patients - HealthCare Hospital`,
    description: content.subtitle,
  }
}

export default async function SupportPage({ params }: PageProps) {
  const { slug } = await params
  const content = supportPages[slug]

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
                <span className="text-foreground font-medium">International Patients</span>
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
                  src="/international-hero.png" 
                  alt={content.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Details */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.longDescription}
              </p>
            </div>

            {/* Workflow Steps */}
            {content.steps && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-foreground">The Process</h3>
                <div className="grid sm:grid-cols-2 gap-6">
                  {content.steps.map((step, i) => (
                    <div key={i} className="bg-card border border-border p-6 rounded-2xl relative">
                      <div className="absolute top-4 right-4 text-3xl font-extrabold text-primary/10">0{i+1}</div>
                      <h4 className="font-bold text-foreground text-lg mb-2">{step.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Additional details list */}
            {content.detailsList && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Key Details</h3>
                <div className="border border-border rounded-2xl overflow-hidden divide-y divide-border bg-card">
                  {content.detailsList.map((detail, i) => (
                    <div key={i} className="flex flex-col sm:flex-row p-4 text-sm justify-between gap-2">
                      <span className="font-bold text-foreground sm:w-1/3">{detail.label}</span>
                      <span className="text-muted-foreground sm:w-2/3">{detail.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar / Quick Tips */}
          <div className="space-y-8">
            <div className="p-8 bg-card border border-border rounded-2xl shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-foreground border-b border-border pb-4">
                Service Highlights
              </h3>
              <ul className="space-y-4">
                {content.highlights?.map((highlight, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-sm leading-relaxed">
                      {highlight}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Desk Panel */}
            <div className="p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl shadow-lg space-y-6">
              <h3 className="text-xl font-bold">International Help Desk</h3>
              <p className="opacity-95 text-sm leading-relaxed">
                Connect with our Global Patient Relations Officers for personalized guidance, billing estimates, or general queries.
              </p>
              <div className="space-y-3 pt-2 text-sm font-semibold">
                <p>Email: international@healthcare.com</p>
                <p>Hotline: +1 (555) 123-9999</p>
                <p>Hours: Mon - Sat, 9:00 AM - 6:00 PM EST</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
