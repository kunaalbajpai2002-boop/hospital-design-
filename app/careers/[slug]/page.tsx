import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Briefcase, GraduationCap, Heart, CheckCircle2, ChevronRight, Send } from 'lucide-react'

interface CareerContent {
  title: string
  subtitle: string
  longDescription: string
  icon: any
  jobs?: { title: string; department: string; type: string; location: string; desc: string }[]
  benefits?: string[]
  programs?: { title: string; duration: string; eligibility: string; desc: string }[]
}

const careerPages: Record<string, CareerContent> = {
  'open-positions': {
    title: 'Open Positions',
    subtitle: 'Build a rewarding career helping others. Explore our current job openings.',
    longDescription: 'We are always looking for passionate, skilled, and dedicated healthcare professionals, administrators, and support staff to join our growing team.',
    icon: Briefcase,
    jobs: [
      { title: 'Senior Staff Nurse (ICU)', department: 'Critical Care Unit', type: 'Full-Time', location: 'Main Campus', desc: 'Seeking an experienced registered nurse to deliver high-quality intensive care. Minimum 3 years in ICU required.' },
      { title: 'Consultant Pediatrician', department: 'Pediatrics Department', type: 'Full-Time', location: 'Main Campus', desc: 'Seeking a board-certified pediatrician to manage outpatient clinics and inpatient ward rounds.' },
      { title: 'Clinic Receptionist & Coordinator', department: 'Patient Relations', type: 'Part-Time', location: 'South Clinic', desc: 'Seeking a friendly front-desk coordinator with excellent communication skills and basic medical record database knowledge.' },
    ],
  },
  'internships': {
    title: 'Internship Programs',
    subtitle: 'Nurturing the next generation of healthcare and management leaders.',
    longDescription: 'Our internship opportunities provide hands-on experience under the mentorship of senior physicians and experienced administrators. We offer rotational clinical internships and healthcare management internships.',
    icon: GraduationCap,
    programs: [
      { title: 'Medical Internship (Rotational)', duration: '12 Months', eligibility: 'Final year MBBS/MD students', desc: 'Rotations across general medicine, surgery, pediatrics, and emergency services under consultant supervision.' },
      { title: 'Healthcare Administration Intern', duration: '6 Months', eligibility: 'Students pursuing MHA/MBA in Healthcare', desc: 'Focus on front-desk management, patient flow diagnostics, medical records systems, and quality control metrics.' },
    ],
  },
  'training-programs': {
    title: 'Professional Training & Fellowships',
    subtitle: 'Lifelong learning and advanced clinical training programs.',
    longDescription: 'HealthCare Hospital offers highly sought-after fellowships and professional development courses to keep our medical staff at the forefront of clinical and technical innovations.',
    icon: GraduationCap,
    programs: [
      { title: 'Fellowship in Interventional Cardiology', duration: '2 Years', eligibility: 'Post-graduate degree in General Cardiology', desc: 'Advanced training in catheterizations, angioplasty, and pacemaker configurations in our hybrid labs.' },
      { title: 'Critical Care Nursing Certification', duration: '3 Months', eligibility: 'Registered Nurse (RN) with 1+ yr exp', desc: 'Specialized training covering ventilator management, hemodynamic monitoring, and acute emergency protocols.' },
    ],
  },
  'culture': {
    title: 'Our Culture & Benefits',
    subtitle: 'A supportive, collaborative, and growth-oriented workplace.',
    longDescription: 'We believe that caring for our staff is essential to providing excellent patient care. We foster a culture of mutual respect, continuing education, and work-life harmony, supported by a competitive benefits package.',
    icon: Heart,
    benefits: [
      'Comprehensive Medical, Dental, and Vision coverage for employees and families',
      'Continuing Medical Education (CME) sponsorships and paid study leaves',
      'Flexible scheduling options and active wellness programs',
      'Annual performance incentives and career progression pathways',
    ],
  },
  'apply-now': {
    title: 'Apply Now',
    subtitle: 'Take the first step toward a fulfilling career at HealthCare Hospital.',
    longDescription: 'Complete the application form below and upload your resume. Our human resources team will review your qualifications and contact you if your profile matches our requirements.',
    icon: Briefcase,
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const content = careerPages[slug]
  if (!content) return { title: 'Careers - HealthCare Hospital' }
  return {
    title: `${content.title} | Careers - HealthCare Hospital`,
    description: content.subtitle,
  }
}

export default async function CareersPage({ params }: PageProps) {
  const { slug } = await params
  const content = careerPages[slug]

  if (!content) {
    notFound()
  }

  const Icon = content.icon

  return (
    <div className="min-h-screen bg-background pt-24 md:pt-32">
      {/* Banner Hero */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-br from-primary/10 via-background to-accent/5 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="md:col-span-7 space-y-6">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                <span>/</span>
                <span className="text-foreground font-medium">Careers</span>
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
              {slug !== 'apply-now' && (
                <div>
                  <Link 
                    href="/careers/apply-now"
                    className="inline-flex px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                  >
                    Apply Now
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </div>
              )}
            </div>

            {/* Right Column (Image Component) */}
            <div className="md:col-span-5 relative hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl transform rotate-3 scale-95" />
              <div className="relative border border-border rounded-3xl overflow-hidden shadow-lg h-72">
                <img 
                  src="/careers-hero.png" 
                  alt={content.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Info */}
      <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">About the Program</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {content.longDescription}
              </p>
            </div>

            {/* Jobs list */}
            {content.jobs && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Current Openings</h3>
                <div className="space-y-6">
                  {content.jobs.map((job, i) => (
                    <div key={i} className="bg-card border border-border p-8 rounded-2xl hover:border-primary transition-colors space-y-4">
                      <div className="flex flex-wrap justify-between items-start gap-4">
                        <div>
                          <h4 className="text-xl font-bold text-foreground">{job.title}</h4>
                          <p className="text-xs text-primary font-bold mt-1 uppercase tracking-wider">{job.department}</p>
                        </div>
                        <div className="flex gap-2">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold">{job.type}</span>
                          <span className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-semibold">{job.location}</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{job.desc}</p>
                      <Link 
                        href="/careers/apply-now"
                        className="inline-flex items-center gap-2 text-sm text-primary font-bold hover:underline"
                      >
                        Apply for this role
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Culture / Benefits List */}
            {content.benefits && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-foreground">Why You'll Love Working Here</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {content.benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-4 p-6 bg-card border border-border rounded-xl">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-foreground text-sm font-medium leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Programs List (Internships/Training) */}
            {content.programs && (
              <div className="space-y-8">
                <h3 className="text-2xl font-bold text-foreground">Available Tracks</h3>
                <div className="space-y-6">
                  {content.programs.map((prog, i) => (
                    <div key={i} className="bg-card border border-border p-8 rounded-2xl space-y-4">
                      <h4 className="text-xl font-bold text-foreground">{prog.title}</h4>
                      <div className="grid sm:grid-cols-2 gap-4 text-xs font-semibold text-muted-foreground border-y border-border py-3">
                        <p>Duration: <span className="text-foreground">{prog.duration}</span></p>
                        <p>Eligibility: <span className="text-foreground">{prog.eligibility}</span></p>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{prog.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Apply Now Interactive Form */}
            {slug === 'apply-now' && (
              <div className="bg-card border border-border p-8 rounded-2xl shadow-sm space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Job Application Form</h3>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="full-name" className="text-sm font-semibold text-foreground">Full Name *</label>
                      <input 
                        id="full-name" 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-semibold text-foreground">Email Address *</label>
                      <input 
                        id="email" 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        required 
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-semibold text-foreground">Phone Number *</label>
                      <input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="position" className="text-sm font-semibold text-foreground">Position Applied For *</label>
                      <select 
                        id="position" 
                        className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                        required
                      >
                        <option value="">Select a position...</option>
                        <option value="nurse">Senior Staff Nurse (ICU)</option>
                        <option value="pediatrician">Consultant Pediatrician</option>
                        <option value="receptionist">Clinic Receptionist</option>
                        <option value="internship">Internship Track</option>
                        <option value="other">Other Position / Speculative</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="cover" className="text-sm font-semibold text-foreground">Cover Letter / Message *</label>
                    <textarea 
                      id="cover" 
                      rows={5}
                      placeholder="Why do you want to join HealthCare Hospital?" 
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="resume" className="text-sm font-semibold text-foreground">Upload Resume (PDF/DOCX) *</label>
                    <input 
                      id="resume" 
                      type="file" 
                      accept=".pdf,.docx"
                      className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-xs file:font-semibold file:bg-primary/10 file:text-primary hover:file:bg-primary/20"
                      required 
                    />
                  </div>
                  <button 
                    type="submit"
                    className="flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
                  >
                    Submit Application
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="p-8 bg-card border border-border rounded-2xl shadow-sm space-y-6 animate-fade-in">
              <h3 className="text-xl font-bold text-foreground border-b border-border pb-4">
                Recruitment Flow
              </h3>
              <ol className="space-y-4 text-sm font-medium">
                <li className="flex gap-3 text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold">1</span>
                  <span>Online Application & CV Screening</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold">2</span>
                  <span>Technical / Practical Interview</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold">3</span>
                  <span>Panel HR & Background Verification</span>
                </li>
                <li className="flex gap-3 text-muted-foreground">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 font-bold">4</span>
                  <span>Formal Offer & Onboarding</span>
                </li>
              </ol>
            </div>

            <div className="p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl shadow-lg space-y-6">
              <h3 className="text-xl font-bold">HR Queries</h3>
              <p className="opacity-95 text-sm leading-relaxed">
                If you have questions about our open positions or require reasonable accommodations during the interview, get in touch.
              </p>
              <div className="space-y-1 text-sm pt-2 font-semibold">
                <p>Email: careers@healthcare.com</p>
                <p>Hotline: +1 (555) 123-8888</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
