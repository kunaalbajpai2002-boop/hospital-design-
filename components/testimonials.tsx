'use client'

import { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'New York, USA',
    department: 'Cardiology',
    rating: 5,
    text: 'The cardiology team here saved my life. From the moment I arrived in the emergency room to my full recovery, every doctor and nurse treated me with exceptional care and compassion. The robotic angioplasty procedure was flawless.',
    initials: 'SM',
  },
  {
    name: 'Rajesh K.',
    location: 'Dubai, UAE',
    department: 'Orthopedics',
    rating: 5,
    text: 'I travelled internationally for my knee replacement surgery and it was the best decision I ever made. The international patient desk handled everything — visa, accommodation, and even airport pickup. The surgery outcome exceeded all my expectations.',
    initials: 'RK',
  },
  {
    name: 'Dr. Amelia Chen',
    location: 'Singapore',
    department: 'Neurology',
    rating: 5,
    text: 'As a physician myself, I am extremely selective about healthcare providers. This hospital\'s neurology department is genuinely world-class. The diagnostic imaging suite and the 3T MRI facility are second to none. My mother\'s stroke recovery was remarkable.',
    initials: 'AC',
  },
  {
    name: 'Michael T.',
    location: 'London, UK',
    department: 'Pediatrics',
    rating: 5,
    text: 'Our newborn required NICU care for six weeks. The neonatal team was incredible — professional, warm, and always communicative. They made an incredibly stressful time much more manageable. We are forever grateful.',
    initials: 'MT',
  },
]

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  const t = testimonials[current]

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-accent/5 to-background">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-sm font-semibold rounded-full border border-primary/20">
            Patient Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight text-balance">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real stories from real patients who experienced our commitment to exceptional healthcare.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl">
            {/* Quote icon */}
            <div className="absolute top-8 right-8 md:top-12 md:right-12">
              <Quote className="w-12 h-12 text-primary/10" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            {/* Review Text */}
            <blockquote className="text-lg md:text-xl text-foreground leading-relaxed font-medium mb-8 max-w-3xl">
              &ldquo;{t.text}&rdquo;
            </blockquote>

            {/* Author */}
            <div className="flex items-center gap-4 border-t border-border pt-6">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-extrabold text-sm flex-shrink-0">
                {t.initials}
              </div>
              <div>
                <p className="font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.location}</p>
              </div>
              <div className="ml-auto">
                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                  {t.department}
                </span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Dot Indicators */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 h-2.5 bg-primary'
                      : 'w-2.5 h-2.5 bg-border hover:bg-primary/40'
                  }`}
                />
              ))}
            </div>

            {/* Arrow Buttons */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Summary Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {[
            { value: '4.9★', label: 'Average Rating', sub: 'Across all departments' },
            { value: '98%', label: 'Satisfaction Rate', sub: 'Post-discharge surveys' },
            { value: '12K+', label: 'Verified Reviews', sub: 'Google · Healthgrades' },
            { value: '95%', label: 'Recommend Us', sub: 'To friends & family' },
          ].map((stat) => (
            <div key={stat.label} className="p-6 bg-card border border-border rounded-2xl text-center hover:border-primary/40 transition-colors">
              <p className="text-2xl md:text-3xl font-extrabold text-primary">{stat.value}</p>
              <p className="text-sm font-semibold text-foreground mt-1">{stat.label}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.sub}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
