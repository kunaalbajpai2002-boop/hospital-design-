import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Award, ShieldCheck, HeartHandshake, Eye, History, Users2 } from 'lucide-react'

interface AboutContent {
  title: string
  subtitle: string
  longDescription: string
  icon: any
  timeline?: { year: string; title: string; desc: string }[]
  values?: { title: string; desc: string; icon: any }[]
  awardsList?: { title: string; organization: string; year: string; desc: string }[]
  team?: { name: string; role: string; department: string; education: string }[]
}

const aboutPages: Record<string, AboutContent> = {
  'our-story': {
    title: 'Our Story',
    subtitle: 'Over two decades of medical excellence and compassionate patient care.',
    longDescription: 'Founded in 2002, HealthCare Hospital began as a modest community clinic with a vision to make top-tier healthcare accessible to everyone. Today, we stand as one of the region\'s premier multi-specialty medical centers, housing over 500 beds, advanced diagnostic facilities, and a dedicated emergency response network.',
    icon: History,
    timeline: [
      { year: '2002', title: 'The Genesis', desc: 'Opened as a 20-bed local clinic with 5 resident physicians.' },
      { year: '2008', title: 'Expansion & Specialization', desc: 'Expanded to a 150-bed multi-specialty hospital with cardiology and neurology.' },
      { year: '2015', title: 'State-of-the-art Infrastructure', desc: 'Inaugurated our new 10-story wing, increasing bed capacity to 500 and adding hybrid Cath labs.' },
      { year: '2021', title: 'Robotics & Automation', desc: 'Introduced computer-guided robotic surgeries and AI-assisted diagnostic programs.' },
      { year: '2024', title: 'Global Healthcare Leader', desc: 'Ranked among the top 10 hospitals nationwide for patient safety and outcome quality.' },
    ],
  },
  'mission-vision': {
    title: 'Mission & Vision',
    subtitle: 'Defining our commitment to patient-centric, world-class medical standards.',
    longDescription: 'At HealthCare Hospital, our core values drive every decision. We believe that clinical excellence should go hand-in-hand with human compassion. We strive to not only treat medical conditions but to restore complete well-being and health to our patients and their families.',
    icon: Eye,
    values: [
      { title: 'Clinical Excellence', desc: 'Adhering to strict international protocols and adopting evidence-based medicine to achieve the best clinical outcomes.', icon: ShieldCheck },
      { title: 'Compassion & Care', desc: 'Treating every patient with dignity, warmth, and respect. Putting patient comfort at the core of all medical journeys.', icon: HeartHandshake },
      { title: 'Innovation', desc: 'Constantly investing in newer diagnostic equipment, clinical trial research, and doctor education programs.', icon: Award },
    ],
  },
  'awards': {
    title: 'Awards & Recognitions',
    subtitle: 'Recognized nationally and internationally for our contribution to medical science and safety.',
    longDescription: 'Our pursuit of quality clinical services has earned us numerous accolades from prestigious medical societies, governmental regulatory commissions, and patient satisfaction boards over the years.',
    icon: Award,
    awardsList: [
      { title: 'Best Multi-Specialty Hospital', organization: 'National Health Forum', year: '2025', desc: 'Awarded for overall clinical performance, patient recovery speeds, and technology integration.' },
      { title: 'Excellence in Patient Safety', organization: 'SafeCare Alliance', year: '2024', desc: 'Acknowledged for having zero-infection rates across operating suites and ICU units.' },
      { title: 'Digital Innovation of the Year', organization: 'Healthcare Tech Awards', year: '2023', desc: 'Awarded for our unified patient app and cloud-based instant medical records access.' },
    ],
  },
  'certifications': {
    title: 'Accreditations & Certifications',
    subtitle: 'Holding the highest standards of safety, quality, and clinical protocols.',
    longDescription: 'We hold certifications from major international agencies, ensuring that our infrastructure, staff training, and operations align perfectly with international gold standards.',
    icon: ShieldCheck,
    awardsList: [
      { title: 'JCI Gold Seal Accreditation', organization: 'Joint Commission International', year: 'Valid through 2028', desc: 'The gold standard in global healthcare quality, validating our safety procedures and operational management.' },
      { title: 'ISO 9001:2015 Certification', organization: 'International Quality Standards', year: 'Renewed 2024', desc: 'Certifying our management quality systems, administrative processes, and patient support frameworks.' },
      { title: 'NABH Accreditation', organization: 'National Accreditation Board', year: 'Active', desc: 'Validating our clinical care standards and infrastructure safety guidelines for general public service.' },
    ],
  },
  'meet-our-team': {
    title: 'Meet Our Leadership Team',
    subtitle: 'The visionaries and medical pioneers steering HealthCare Hospital.',
    longDescription: 'Our leadership team comprises seasoned healthcare executives and award-winning medical directors committed to establishing high-quality operations and pioneering medical breakthroughs.',
    icon: Users2,
    team: [
      { name: 'Dr. Elizabeth Vance', role: 'Chief Medical Officer', department: 'Executive Directorate', education: 'MD - Harvard Medical School, 20+ Yrs Exp.' },
      { name: 'Marcus K. Sterling', role: 'Chief Executive Officer', department: 'Executive Directorate', education: 'MBA - Wharton Business School, Healthcare Mgmt.' },
      { name: 'Dr. Arthur Pendelton', role: 'Director of Surgery', department: 'General Surgery & Robotics', education: 'FRCS - Royal College of Surgeons, London.' },
      { name: 'Sarah Jenkins, RN', role: 'Director of Nursing', department: 'Patient Services', education: 'MSN - Johns Hopkins University School of Nursing.' },
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const content = aboutPages[slug]
  if (!content) return { title: 'About Us - HealthCare Hospital' }
  return {
    title: `${content.title} | About Us - HealthCare Hospital`,
    description: content.subtitle,
  }
}

export default async function AboutPage({ params }: PageProps) {
  const { slug } = await params
  const content = aboutPages[slug]

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
                <span className="text-foreground font-medium">About Us</span>
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
                  src="/about-hero.png" 
                  alt={content.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Info */}
      <section className="px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Introduction</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.longDescription}
            </p>
          </div>

          {/* Timeline View */}
          {content.timeline && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Our History & Milestones</h3>
              <div className="relative border-l-2 border-primary/20 ml-4 md:ml-6 space-y-6">
                {content.timeline.map((item, index) => (
                  <div key={index} className="relative pl-8 md:pl-12">
                    {/* Circle Bullet */}
                    <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background shadow-md"></span>
                    <div className="bg-card border border-border p-6 rounded-2xl max-w-3xl hover:border-primary/50 transition-colors">
                      <span className="text-primary font-extrabold text-lg">{item.year}</span>
                      <h4 className="text-xl font-bold text-foreground mt-1 mb-2">{item.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Values Grid */}
          {content.values && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground text-center">Core Pillars of HealthCare</h3>
              <div className="grid md:grid-cols-3 gap-8">
                {content.values.map((val, index) => {
                  const ValIcon = val.icon
                  return (
                    <div key={index} className="bg-card border border-border p-8 rounded-2xl hover:shadow-lg hover:border-primary transition-all duration-300 flex flex-col gap-6">
                      <div className="inline-flex p-4 bg-primary/10 rounded-xl w-fit">
                        <ValIcon className="w-8 h-8 text-primary" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground">{val.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* Awards or Certifications List */}
          {content.awardsList && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {content.awardsList.map((item, index) => (
                <div key={index} className="bg-card border border-border p-8 rounded-2xl hover:border-primary transition-colors flex flex-col gap-4 shadow-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">{item.year}</span>
                    <Award className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground leading-snug">{item.title}</h4>
                  <p className="text-xs text-muted-foreground font-semibold">{item.organization}</p>
                  <p className="text-muted-foreground leading-relaxed text-sm mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Leadership Team View */}
          {content.team && (
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground">Meet Our Advisors & Directors</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {content.team.map((member, index) => (
                  <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-md transition-all">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-32 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-extrabold text-2xl">
                        {member.name.split(' ').pop()?.[0]}
                      </div>
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="font-bold text-foreground text-lg leading-snug">{member.name}</h4>
                        <p className="text-xs text-primary font-bold mt-1">{member.role}</p>
                      </div>
                      <div className="text-xs space-y-1 border-t border-border pt-4 text-muted-foreground font-medium">
                        <p>Dept: {member.department}</p>
                        <p>{member.education}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
