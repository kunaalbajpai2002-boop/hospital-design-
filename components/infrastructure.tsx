'use client'

import { useState } from 'react'
import { Building2, Zap, Droplet, Radio } from 'lucide-react'

export function InfrastructureSection() {
  const [activeTab, setActiveTab] = useState('facilities')

  const tabs = [
    {
      id: 'facilities',
      label: 'Medical Facilities',
      icon: Building2,
      items: [
        'Modern Operating Theaters',
        'ICU with Advanced Monitoring',
        'Diagnostic Imaging Centers',
        'Laboratory Services',
        'Emergency Department',
        'Rehabilitation Centers',
      ],
    },
    {
      id: 'technology',
      label: 'Technology',
      icon: Zap,
      items: [
        'AI-Powered Diagnostics',
        'Digital Patient Records',
        'Telemedicine Platform',
        'Robotic Surgery Suite',
        'Advanced Imaging Systems',
        'Cloud-Based Health Management',
      ],
    },
    {
      id: 'infrastructure',
      label: 'Infrastructure',
      icon: Droplet,
      items: [
        'Backup Power Systems',
        'Water Purification Plants',
        'Waste Management System',
        'Infection Control Units',
        '24/7 Security',
        'Ambulance Fleet',
      ],
    },
    {
      id: 'standards',
      label: 'Quality Standards',
      icon: Radio,
      items: [
        'ISO Certified Processes',
        'International Accreditations',
        'Regular Audits',
        'Staff Training Programs',
        'Safety Protocols',
        'Continuous Improvement',
      ],
    },
  ]

  const activeTabData = tabs.find((tab) => tab.id === activeTab)

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            World-Class Infrastructure
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            State-of-the-art facilities and technology designed for superior patient outcomes.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 md:px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-card border border-border text-foreground hover:border-primary'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                {activeTabData?.label}
              </h3>
              <ul className="space-y-4">
                {activeTabData?.items.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-primary group-hover:bg-primary-foreground" />
                    </div>
                    <span className="text-foreground text-lg leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Visual Placeholder */}
            <div className="hidden md:block">
              <div className="relative bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl overflow-hidden h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-grid-white/10" />
                <div className="relative text-center">
                  {activeTabData && (
                    <>
                      {(() => {
                        const Icon = activeTabData.icon === Building2 ? Building2 :
                                    activeTabData.icon === Zap ? Zap :
                                    activeTabData.icon === Droplet ? Droplet : Radio
                        return <Icon className="w-24 h-24 text-primary/40 mx-auto mb-4" />
                      })()}
                      <p className="text-muted-foreground font-semibold">
                        {activeTabData.label}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: '500+', label: 'Hospital Beds' },
            { number: '100+', label: 'Operation Theatres' },
            { number: '50+', label: 'Specialties' },
            { number: '24/7', label: 'Emergency Care' },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-xl text-center hover:border-primary transition-all duration-300"
            >
              <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </p>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
