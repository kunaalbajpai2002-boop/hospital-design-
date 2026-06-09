import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Newspaper, Rss, Calendar, Video, FileText, ArrowUpRight } from 'lucide-react'

interface NewsContent {
  title: string
  subtitle: string
  longDescription: string
  icon: any
  posts?: { title: string; date: string; category?: string; summary: string; linkText?: string }[]
  events?: { title: string; date: string; time: string; location: string; desc: string }[]
  media?: { title: string; type: string; duration?: string; category: string }[]
}

const newsPages: Record<string, NewsContent> = {
  'latest-updates': {
    title: 'Latest Updates',
    subtitle: 'Stay informed on hospital happenings, expansion news, and new department launches.',
    longDescription: 'Read the latest announcements, updates on new medical technology arrivals, and community medical program outcomes from the HealthCare Hospital group.',
    icon: Newspaper,
    posts: [
      { title: 'HealthCare Hospital Launches Robotic Joint Replacement Program', date: 'June 01, 2026', category: 'Technology', summary: 'Patients can now benefit from robotic-assisted hip and knee joint replacement surgeries, offering faster recovery and better implant alignment.' },
      { title: 'Inauguration of the Pediatric Intensive Care Wing (PICU)', date: 'May 18, 2026', category: 'Infrastructure', summary: 'Our new 25-bed child-specific emergency facility is officially open, staffed 24/7 by board-certified pediatric intensivists.' },
      { title: 'Free Medical Screening Camp Serves Over 1,200 Residents', date: 'April 30, 2026', category: 'Community', summary: 'A successful weekend outreach program provided free cardiology and diabetes check-ups to local communities in need.' },
    ],
  },
  'press-releases': {
    title: 'Press Releases',
    subtitle: 'Official announcements and institutional publications for media representatives.',
    longDescription: 'Access verified institutional documentation, clinical research breakthroughs, and public statement files released by our media relations office.',
    icon: FileText,
    posts: [
      { title: 'HealthCare Hospital Group Announces Annual Quality Safety Metrics', date: 'May 20, 2026', summary: 'Press release detailing the hospital\'s JCI re-accreditation and record-low post-operative infection metrics.', linkText: 'Download PDF (1.2 MB)' },
      { title: 'Strategic Partnership Formed with Global Cardiac Care Institute', date: 'April 12, 2026', summary: 'Press release outlining joint collaborative clinical research and specialist Exchange programs.', linkText: 'Download PDF (840 KB)' },
    ],
  },
  'blog': {
    title: 'Health & Wellness Blog',
    subtitle: 'Expert medical advice, health guidelines, and clinical insights.',
    longDescription: 'A collection of informative health articles written by our staff doctors, covering topics like preventive cardiology, brain wellness, pediatric nutrition, and sports rehab.',
    icon: Rss,
    posts: [
      { title: '5 Simple Steps to Maintain a Healthy Heart', date: 'June 04, 2026', category: 'Cardiology', summary: 'Dr. Elizabeth Vance outlines daily lifestyle adjustments, diets, and exercise regimes that dramatically decrease stroke and cardiovascular issues.' },
      { title: 'Understanding Stroke Signs: Why Every Second Counts', date: 'May 22, 2026', category: 'Neurology', summary: 'A breakdown of the FAST protocol (Face, Arms, Speech, Time) for recognizing acute strokes and how immediate responses preserve brain cells.' },
      { title: 'Recovery and Diet After Major Orthopedic Surgeries', date: 'May 05, 2026', category: 'Orthopedics', summary: 'An expert guide detailing nutrient-dense foods, hydration habits, and movement regimens to follow during orthopedic post-op recovery.' },
    ],
  },
  'media-center': {
    title: 'Media Center',
    subtitle: 'Video tours, photo galleries, and doctor interviews.',
    longDescription: 'Browse virtual tours of our infrastructure, surgical Cath labs, intensive care units, and video guides outlining major treatment plans.',
    icon: Video,
    media: [
      { title: 'Inside Our Advanced Robotic Surgery Operating Rooms', type: 'Video Tour', duration: '4:15 min', category: 'Infrastructure' },
      { title: 'Patient Recovery Testimonial: A Journey Through Cardiac Rehab', type: 'Patient Story', duration: '6:30 min', category: 'Testimonials' },
      { title: 'Virtual Tour: International Patient Lounge & Wards', type: 'Photo Gallery', category: 'Facilities' },
    ],
  },
  'events': {
    title: 'Upcoming Events & Seminars',
    subtitle: 'Free community wellness initiatives, specialist lectures, and blood camps.',
    longDescription: 'Join our public health initiatives and training webinars conducted by leading medical specialists, designed to spread awareness and save lives.',
    icon: Calendar,
    events: [
      { title: 'World Heart Day Public Seminar', date: 'June 29, 2026', time: '10:00 AM - 12:30 PM', location: 'Main Auditorum, Wing B', desc: 'Free heart rate, BMI, and ECG checkups for all attendees, followed by a talk on preventive cardiology by Dr. Elizabeth Vance.' },
      { title: 'Emergency CPR & First Aid Certification Workshop', date: 'July 15, 2026', time: '1:00 PM - 5:00 PM', location: 'Training Lab, 4th Floor', desc: 'Practical hands-on training for basic life support (BLS) and cardiopulmonary resuscitation (CPR) for infants and adults.' },
    ],
  },
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const content = newsPages[slug]
  if (!content) return { title: 'News & Media - HealthCare Hospital' }
  return {
    title: `${content.title} | News - HealthCare Hospital`,
    description: content.subtitle,
  }
}

export default async function NewsPage({ params }: PageProps) {
  const { slug } = await params
  const content = newsPages[slug]

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
                <span className="text-foreground font-medium">News & Media</span>
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
                  src="/news-hero.png"
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
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          {/* Main Content List */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-foreground">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {content.longDescription}
              </p>
            </div>

            {/* Posts / Press Releases / Blogs */}
            {content.posts && (
              <div className="space-y-8 pt-4">
                {content.posts.map((post, i) => (
                  <article key={i} className="p-8 bg-card border border-border rounded-2xl shadow-sm hover:border-primary transition-all duration-300 space-y-4 group">
                    <div className="flex items-center gap-4 text-xs font-semibold text-muted-foreground">
                      <span>{post.date}</span>
                      {post.category && (
                        <>
                          <span className="w-1 h-1 bg-border rounded-full" />
                          <span className="text-primary uppercase tracking-wider">{post.category}</span>
                        </>
                      )}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">{post.summary}</p>
                    {post.linkText ? (
                      <button className="flex items-center gap-2 text-sm text-primary font-bold hover:underline pt-2">
                        {post.linkText}
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    ) : (
                      <button className="flex items-center gap-2 text-sm text-primary font-bold hover:underline pt-2">
                        Read full article
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    )}
                  </article>
                ))}
              </div>
            )}

            {/* Events List */}
            {content.events && (
              <div className="space-y-8 pt-4">
                {content.events.map((event, i) => (
                  <div key={i} className="flex flex-col md:flex-row gap-6 p-8 bg-card border border-border rounded-2xl shadow-sm hover:border-primary transition-colors">
                    {/* Date Badge */}
                    <div className="md:w-32 flex-shrink-0 flex flex-col items-center justify-center p-4 bg-primary/10 text-primary rounded-xl text-center h-fit">
                      <Calendar className="w-6 h-6 mb-2" />
                      <span className="text-sm font-extrabold leading-none">{event.date.split(',')[0]}</span>
                      <span className="text-xs font-bold opacity-80 mt-1">{event.date.split(',')[1]?.trim()}</span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-foreground">{event.title}</h3>
                      <div className="flex flex-wrap gap-4 text-xs text-muted-foreground font-semibold">
                        <span>Time: {event.time}</span>
                        <span>|</span>
                        <span>Location: {event.location}</span>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{event.desc}</p>
                      <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm w-fit mt-2">
                        Register Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Media Gallery */}
            {content.media && (
              <div className="grid md:grid-cols-2 gap-6 pt-4">
                {content.media.map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:border-primary transition-colors group">
                    <div className="bg-gradient-to-br from-primary/10 to-accent/10 h-40 flex items-center justify-center relative">
                      <Video className="w-12 h-12 text-primary group-hover:scale-110 transition-transform" />
                      {item.duration && (
                        <span className="absolute bottom-4 right-4 bg-background/80 text-foreground text-xs font-bold px-2 py-1 rounded">
                          {item.duration}
                        </span>
                      )}
                    </div>
                    <div className="p-6 space-y-2">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary">{item.type}</span>
                      <h4 className="font-bold text-foreground text-lg leading-snug group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground">Category: {item.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="p-8 bg-card border border-border rounded-2xl shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-foreground border-b border-border pb-4">
                Newsletter Signup
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Subscribe to get the latest health guidelines, seminar invitations, and doctor schedules directly in your inbox.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 bg-muted border border-border rounded-lg text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors text-sm text-center"
                >
                  Subscribe

                </button>
              </form>
            </div>

            <div className="p-8 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl shadow-lg space-y-6">
              <h3 className="text-xl font-bold">Media Contact</h3>
              <p className="opacity-95 text-sm leading-relaxed">
                For official press inquiries, expert opinion interviews, or filming schedules, contact our PR representatives.
              </p>
              <div className="space-y-1 text-sm pt-2 font-semibold">
                <p>Email: media@healthcare.com</p>
                <p>Hotline: +1 (555) 123-5555</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
