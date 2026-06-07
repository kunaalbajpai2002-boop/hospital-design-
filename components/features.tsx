import Link from 'next/link'
import { Stethoscope, Shield, Clock, Users, ArrowRight } from 'lucide-react'

const features = [
  {
    icon: Stethoscope,
    title: 'Expert Medical Team',
    description:
      'Our team consists of highly qualified and experienced doctors and specialists with international certifications.',
    href: '/about-us/meet-our-team',
    color: 'from-blue-500/20 to-blue-500/5',
    iconColor: 'text-blue-600 dark:text-blue-400',
    iconBg: 'bg-blue-500/10',
  },
  {
    icon: Shield,
    title: 'Advanced Technology',
    description:
      'We employ state-of-the-art medical equipment and latest treatment methods for optimal patient outcomes.',
    href: '/about-us/certifications',
    color: 'from-emerald-500/20 to-emerald-500/5',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
    iconBg: 'bg-emerald-500/10',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Care',
    description:
      'Round-the-clock emergency services with rapid response teams ready to assist you anytime.',
    href: '/contact-us/emergency',
    color: 'from-rose-500/20 to-rose-500/5',
    iconColor: 'text-rose-600 dark:text-rose-400',
    iconBg: 'bg-rose-500/10',
  },
  {
    icon: Users,
    title: 'Patient-Centric Approach',
    description:
      'We prioritize patient comfort and wellness, ensuring personalized care for every individual.',
    href: '/contact-us/feedback',
    color: 'from-violet-500/20 to-violet-500/5',
    iconColor: 'text-violet-600 dark:text-violet-400',
    iconBg: 'bg-violet-500/10',
  },
]

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground text-balance tracking-tight">
            Why Choose Our Hospital?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            We combine expertise, compassion, and innovation to deliver exceptional healthcare services.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Link
                key={feature.title}
                href={feature.href}
                className="group relative p-8 bg-card border border-border rounded-2xl hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 overflow-hidden block"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`} />

                <div className="relative space-y-5">
                  <div className={`inline-flex p-3.5 ${feature.iconBg} rounded-xl transition-transform duration-300 group-hover:scale-110`}>
                    <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                  </div>
                  <div className="flex items-center gap-1 text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Learn more <ArrowRight className="w-3.5 h-3.5 translate-x-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80" />
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="relative px-8 md:px-12 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left space-y-2">
              <h3 className="text-2xl md:text-3xl font-extrabold text-white">
                Experience Exceptional Healthcare
              </h3>
              <p className="text-white/80 max-w-lg">
                Schedule your consultation today with our expert medical professionals.
              </p>
            </div>
            <div className="flex gap-4 flex-shrink-0">
              <Link
                href="/contact-us/appointments"
                id="features-cta-appointment"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary rounded-xl font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Schedule Now
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
