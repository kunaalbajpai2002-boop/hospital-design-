import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Heart, Activity, Stethoscope, Shield, ArrowRight, CheckCircle2 } from 'lucide-react'

interface SpecialtyContent {
  title: string
  description: string
  longDescription: string
  stats: { label: string; value: string }[]
  services: string[]
  features: string[]
  icon: any
}

const specialties: Record<string, SpecialtyContent> = {
  cardiology: {
    title: 'Cardiology',
    description: 'Comprehensive heart care, diagnostics, and advanced treatment from top cardiologists.',
    longDescription: 'Our Cardiology Department is equipped with cutting-edge technologies to diagnose, treat, and prevent cardiovascular diseases. We provide a full spectrum of services, from routine diagnostic screenings to complex interventional procedures and heart surgeries.',
    stats: [
      { label: 'Success Rate', value: '99.2%' },
      { label: 'Surgeries Performed', value: '15,000+' },
      { label: 'Expert Cardiologists', value: '24' },
    ],
    services: [
      'Coronary Angiography and Angioplasty',
      'Heart Failure Management',
      'Electrophysiology & Pacemaker Implantation',
      'Pediatric Cardiology Care',
      'Non-invasive Cardiac Imaging (3D Echo, TMT)',
    ],
    features: [
      '24/7 Dedicated Cardiac Emergency Unit',
      'State-of-the-art Hybrid Cath Labs',
      'Advanced Cardiac Rehabilitation Program',
    ],
    icon: Heart,
  },
  neurology: {
    title: 'Neurology & Neurosurgery',
    description: 'Expert care for complex brain, spine, and nervous system disorders.',
    longDescription: 'The Neurology and Neurosurgery Department offers highly specialized diagnosis and treatment for neurological disorders. Our team of neurologists and neurosurgeons handles emergencies like acute stroke, trauma, brain tumors, and chronic diseases like epilepsy and Parkinson\'s.',
    stats: [
      { label: 'Stroke Recovery Rate', value: '94%' },
      { label: 'Complex Brain Surgeries', value: '8,500+' },
      { label: 'Dedicated ICU Beds', value: '18' },
    ],
    services: [
      'Acute Stroke Intervention (Thrombolysis)',
      'Minimally Invasive Spine Surgery',
      'Brain Tumor Resection',
      'Epilepsy Monitoring & Treatment',
      'Comprehensive Neuro-rehabilitation',
    ],
    features: [
      'Advanced 3T MRI & Intraoperative CT Scanners',
      'Dedicated Neurological Intensive Care Unit (NICU)',
      'Comprehensive Parkinson\'s and Movement Disorders clinic',
    ],
    icon: Activity,
  },
  orthopedics: {
    title: 'Orthopedics & Joint Replacement',
    description: 'Restoring mobility and performance through advanced bone and joint care.',
    longDescription: 'Our Orthopedics Department is a center of excellence for joint replacement surgeries, sports medicine, spinal corrections, and orthopedic trauma. Our orthopedic surgeons specialize in restoring your mobility using minimally invasive techniques and robust rehab programs.',
    stats: [
      { label: 'Joint Replacements', value: '12,000+' },
      { label: 'Patient Satisfaction', value: '98%' },
      { label: 'Rehab Specialists', value: '15' },
    ],
    services: [
      'Total Hip & Knee Replacement',
      'Arthroscopic Sports Medicine Surgeries',
      'Pediatric Orthopedic Treatments',
      'Complex Fracture & Trauma Management',
      'Spinal Decompression and Fusion',
    ],
    features: [
      'Computer-assisted robotic navigation surgery',
      'Specialized post-surgery physiotherapy wings',
      'Sports injury clinic with fast-track recovery programs',
    ],
    icon: Shield,
  },
  'general-surgery': {
    title: 'General & Laparoscopic Surgery',
    description: 'Advanced minimally invasive surgical treatments with faster recovery times.',
    longDescription: 'The General Surgery Department provides surgical solutions for a wide range of health issues. Using the latest laparoscopic and robotic techniques, we ensure minimal scarring, reduced pain, and faster discharge times for our patients.',
    stats: [
      { label: 'Laparoscopic Focus', value: '85%' },
      { label: 'Procedures Annually', value: '6,000+' },
      { label: 'Average Stay', value: '1.8 Days' },
    ],
    services: [
      'Laparoscopic Cholecystectomy & Appendectomy',
      'Hernia Repair (Open & Laparoscopic)',
      'Gastrointestinal Surgical Interventions',
      'Thyroid & Endocrine Surgery',
      'Advanced Wound Care & Diabetic Foot Surgery',
    ],
    features: [
      'Advanced Ultra-clean Laminar Flow Operating Rooms',
      'Day Care Surgery unit for quick procedures',
      'Multidisciplinary tumor board for complex cases',
    ],
    icon: Stethoscope,
  },
  pediatrics: {
    title: 'Pediatrics & Neonatology',
    description: 'Compassionate, specialized care for infants, children, and adolescents.',
    longDescription: 'Our Pediatrics Department provides comprehensive healthcare from birth to 18 years. With a dedicated Neonatal Intensive Care Unit (NICU) and Pediatric ICU (PICU), we ensure the highest level of care for premature infants and critically ill children.',
    stats: [
      { label: 'NICU Bed Capacity', value: '25' },
      { label: 'Smiling Faces Served', value: '45,000+' },
      { label: 'Dedicated Pediatricians', value: '16' },
    ],
    services: [
      'Neonatal Intensive Care (Level III NICU)',
      'Pediatric Immunization & Vaccination Registry',
      'Childhood Growth & Development Monitoring',
      'Pediatric Asthma & Allergy Clinic',
      'Emergency Pediatric Trauma Support',
    ],
    features: [
      'Child-friendly inpatient wards and play areas',
      'Round-the-clock neonatologist availability',
      'Integrated pediatric emergency transport system',
    ],
    icon: Heart,
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const specialty = specialties[slug]
  if (!specialty) return { title: 'Specialities - HealthCare Hospital' }
  return {
    title: `${specialty.title} | Speciality - HealthCare Hospital`,
    description: specialty.description,
  }
}

export default async function SpecialtyPage({ params }: PageProps) {
  const { slug } = await params
  const specialty = specialties[slug]

  if (!specialty) {
    notFound()
  }

  const Icon = specialty.icon

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
                <span className="text-foreground font-medium">Specialties</span>
                <span>/</span>
                <span className="text-primary font-semibold">{specialty.title}</span>
              </nav>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Icon className="w-10 h-10 text-primary animate-pulse" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground">
                  {specialty.title}
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {specialty.description}
              </p>
              <div>
                <Link 
                  href="/contact-us/appointments"
                  className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Book Appointment
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            {/* Right Column (Image Component) */}
            <div className="md:col-span-5 relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-3 scale-95" />
              <div className="relative border border-border rounded-3xl overflow-hidden shadow-lg h-72">
                <img 
                  src="/specialties-hero.png" 
                  alt={specialty.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialty Overview & Details */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {specialty.longDescription}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 p-8 bg-card border border-border rounded-2xl shadow-sm">
              {specialty.stats.map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-2xl md:text-4xl font-extrabold text-primary">{stat.value}</p>
                  <p className="text-xs md:text-sm text-muted-foreground mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Key Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Why choose our {specialty.title} Department?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {specialty.features.map((feature, i) => (
                  <div key={i} className="p-6 bg-card border border-border rounded-xl flex flex-col gap-4">
                    <CheckCircle2 className="w-8 h-8 text-primary flex-shrink-0" />
                    <p className="text-foreground font-semibold leading-snug">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - Services list */}
          <div className="space-y-8">
            <div className="p-8 bg-card border border-border rounded-2xl shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-foreground border-b border-border pb-4">
                Services & Treatments
              </h3>
              <ul className="space-y-4">
                {specialty.services.map((service, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground hover:text-foreground transition-colors leading-relaxed">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Contacts */}
            <div className="p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl shadow-lg space-y-6">
              <h3 className="text-xl font-bold">Emergency Assistance</h3>
              <p className="opacity-90 leading-relaxed text-sm">
                Need immediate cardiovascular or medical support? Get in touch with our trauma response team now.
              </p>
              <div className="space-y-4 pt-2">
                <div>
                  <p className="text-xs opacity-75 uppercase tracking-wider">Emergency Hotline</p>
                  <p className="text-2xl font-black">+1 (555) 911-3000</p>
                </div>
                <div>
                  <p className="text-xs opacity-75 uppercase tracking-wider">General Helplines</p>
                  <p className="text-lg font-bold">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
