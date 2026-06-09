'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, HeartPulse, Phone, Star, Award, ShieldCheck } from 'lucide-react'
import Image from "next/image"
import SubHeader from './subheader'

const stats = [
  { value: '25+', label: 'Specialties' },
  { value: '500+', label: 'Expert Doctors' },
  { value: '1M+', label: 'Patients Served' },
]

// const floatingCards = [
//   {
//     id: 'rating',
//     icon: Star,
//     title: 'Patient Rating',
//     value: '4.9 / 5.0',
//     sub: 'Based on 12,000+ reviews',
//     color: 'text-yellow-500',
//     bg: 'bg-yellow-50 dark:bg-yellow-900/20',
//     position: 'top-6 right-4 md:right-0',
//   },
//   {
//     id: 'accreditation',
//     icon: Award,
//     title: 'JCI Accredited',
//     value: 'Gold Seal',
//     sub: 'International Quality Standard',
//     color: 'text-primary',
//     bg: 'bg-primary/5',
//     position: 'bottom-30 right-4 md:-right-4',
//   },
// ]
export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  const heroImages = [
    "/zoshua-colah-_fdWqec7VRo-unsplash.png",
    "/pexels-jo-mcnamara-185550273-11288665.jpg",
    "/pexels-cristian-rojas-8460379.jpg",
    "/adhy-savala-zbpgmGe27p8-unsplash.jpg",
    "pexels-contact-me-923323219715-262056873-13176452.jpg",
    "/pexels-adarsh-mp-31499386.jpg",
  ]

  const [currentSlide, setCurrentSlide] = useState(0)
  useEffect(() => {
    setMounted(true)

    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === heroImages.length - 1 ? 0 : prev + 1
      )
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative pt-24 md:pt-28 pb-4 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/10 -z-10" />
      {/* Grid texture overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      {/* Soft blurred blob accents */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 translate-y-[-30%]" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/15 rounded-full blur-3xl -z-10 translate-y-[30%]" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <SubHeader />
        </div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left Content ── */}
          <div
            className={`space-y-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {/* Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight text-balance">
                Excellence in{' '}
                <span className="relative inline-block">
                  <span className="text-primary">Healthcare</span>
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-primary/30 rounded-full" />
                </span>
                ,{' '}
                <br className="hidden sm:block" />
                Guided by{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                  Compassion
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
                World-class medical facilities with compassionate care. Experience healthcare
                excellence with our team of expert specialists and cutting-edge technology.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us/appointments"
                id="hero-book-appointment"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:translate-y-[-2px]"
              >
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="tel:+15551234567"
                id="hero-emergency-call"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/30 text-foreground rounded-xl font-semibold hover:bg-primary/5 hover:border-primary transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span>
                  <span className="block text-xs font-normal text-muted-foreground leading-none mb-0.5">Emergency</span>
                  +1 (555) 123-4567
                </span>
              </a>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <p className="text-3xl font-extrabold text-primary tracking-tight">{stat.value}</p>
                  <p className="text-xs font-medium text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right Visual ── */}
          <div
            className={`relative hidden lg:flex items-center justify-center transition-all duration-700 delay-200 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {/* Main card */}
            <div className="relative w-full max-w-[750px]">
              {/* Decorative ring behind card */}
              <div className="absolute inset-[-16px] rounded-3xl border border-primary/10 -z-10" />
              <div className="absolute inset-[-32px] rounded-3xl border border-primary/5 -z-10" />

              {/* Central visual card */}
              <div className="relative bg-gradient-to-br from-primary via-primary/90 to-primary/70 rounded-3xl overflow-hidden shadow-2xl shadow-primary/30 aspect-[4/4.5] animate-card-float">

                <div className="relative w-full h-full overflow-hidden">
                  {heroImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? "opacity-100" : "opacity-0"
                        }`}
                    >
                      <Image
                        src={image}
                        alt={`Hospital ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ))}

                  <div className="absolute inset-0 bg-black/25" />

                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white z-10">
                    <h3 className="text-3xl font-bold">
                      Excellence in Healthcare
                    </h3>
                    <p className="text-white/90">
                      Advanced Technology • Expert Specialists • Compassionate Care
                    </p>
                  </div>
                </div>

                {/* Inner pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                    backgroundSize: '28px 28px',
                  }}
                />
                {/* Big central heart pulse icon */}
                {/* <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                  <div className="p-6 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                    <HeartPulse className="w-20 h-20 text-white" />
                  </div>
                  <p className="text-white/90 text-center font-semibold text-lg">Your Health Is Our Priority</p>
                  <p className="text-white/60 text-center text-sm px-8">
                    24/7 Emergency · Advanced Diagnostics · Compassionate Specialists
                  </p>
                </div> */}

                {/* Gradient overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-primary/80 to-transparent" />
              </div>

              {/* Floating card 1 — Rating */}
              {/* <div className="absolute top-4 -right-8 bg-card border border-border rounded-2xl shadow-xl p-4 w-52 space-y-1 animate-bounce-slow backdrop-blur-sm">
<div className="flex items-center gap-2">
                  <div className="p-1.5 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
                  </div>                
                  <span className="text-xs font-semibold text-muted-foreground">Patient Rating</span>
                </div>
                <p className="text-xl font-extrabold text-foreground">4.9 <span className="text-sm font-normal text-muted-foreground">/ 5.0</span></p>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground">Based on 12,000+ reviews</p>
              </div> */}

              {/* Floating card 2 — Accreditation */}
              {/* <div className="absolute -bottom-6 -left-8 bg-card border border-border rounded-2xl shadow-xl p-4 w-52 space-y-1 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-primary/10 rounded-lg">
                    <Award className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground">JCI Accredited</span>
                </div>
                <p className="text-lg font-extrabold text-foreground">Gold Seal</p>
                <p className="text-xs text-muted-foreground">International Quality Standard</p>
              </div> */}

              {/* Decorative dots */}
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-accent/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 right-4 w-8 h-8 bg-primary/20 rounded-full blur-lg" />
            </div>
          </div>

        </div>
      </div>

    </section >
  )
}
