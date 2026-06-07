import Link from 'next/link'
import { Heart, Activity, Accessibility, Stethoscope, Users, ArrowRight } from 'lucide-react'

const specialties = [
  {
    slug: 'cardiology',
    title: 'Cardiology',
    desc: 'Advanced heart care, diagnostics & interventional procedures.',
    icon: Heart,
    accent: 'rose',
    stat: '99.2% success rate',
  },
  {
    slug: 'neurology',
    title: 'Neurology & Neurosurgery',
    desc: 'Expert care for brain, spine & nervous system disorders.',
    icon: Activity,
    accent: 'indigo',
    stat: '94% stroke recovery',
  },
  {
    slug: 'orthopedics',
    title: 'Orthopedics',
    desc: 'Joint replacement, sports medicine & spinal corrections.',
    icon: Accessibility,
    accent: 'amber',
    stat: '12,000+ replacements',
  },
  {
    slug: 'general-surgery',
    title: 'General Surgery',
    desc: 'Minimally invasive laparoscopic & robotic procedures.',
    icon: Stethoscope,
    accent: 'emerald',
    stat: '6,000+ procedures / yr',
  },
  {
    slug: 'pediatrics',
    title: 'Pediatrics & NICU',
    desc: 'Specialized care for infants, children & adolescents.',
    icon: Users,
    accent: 'sky',
    stat: '45,000+ kids served',
  },
]

const accentMap: Record<string, { bg: string; icon: string; border: string; badge: string }> = {
  rose: {
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    icon: 'text-rose-600 dark:text-rose-400',
    border: 'hover:border-rose-300 dark:hover:border-rose-700',
    badge: 'bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400',
  },
  indigo: {
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
    icon: 'text-indigo-600 dark:text-indigo-400',
    border: 'hover:border-indigo-300 dark:hover:border-indigo-700',
    badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400',
  },
  amber: {
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    icon: 'text-amber-600 dark:text-amber-400',
    border: 'hover:border-amber-300 dark:hover:border-amber-700',
    badge: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400',
  },
  emerald: {
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    icon: 'text-emerald-600 dark:text-emerald-400',
    border: 'hover:border-emerald-300 dark:hover:border-emerald-700',
    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400',
  },
  sky: {
    bg: 'bg-sky-50 dark:bg-sky-900/20',
    icon: 'text-sky-600 dark:text-sky-400',
    border: 'hover:border-sky-300 dark:hover:border-sky-700',
    badge: 'bg-sky-100 text-sky-700 dark:bg-sky-900/30 dark:text-sky-400',
  },
}

export function SpecialtiesSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-4">
            <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
              Medical Specialties
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight text-balance">
              Our Areas of Expertise
            </h2>
          </div>
          <Link
            href="/speciality/cardiology"
            id="all-specialties-link"
            className="group inline-flex items-center gap-2 text-primary font-semibold hover:underline text-sm flex-shrink-0"
          >
            View All Specialties
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {specialties.map((s) => {
            const Icon = s.icon
            const colors = accentMap[s.accent]
            return (
              <Link
                key={s.slug}
                href={`/speciality/${s.slug}`}
                id={`specialty-${s.slug}`}
                className={`group flex flex-col gap-5 p-6 bg-card border border-border rounded-2xl hover:shadow-lg ${colors.border} transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`inline-flex p-3 ${colors.bg} rounded-xl w-fit group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <div className="space-y-2 flex-1">
                  <h3 className="font-bold text-foreground leading-snug">{s.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{s.desc}</p>
                </div>
                <div className={`text-xs font-semibold px-2.5 py-1 rounded-full w-fit ${colors.badge}`}>
                  {s.stat}
                </div>
              </Link>
            )
          })}
        </div>

      </div>
    </section>
  )
}
